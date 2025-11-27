import os
import re
import requests
from urllib.parse import urljoin
from bs4 import BeautifulSoup

# -----------------------------
# CONFIG
# -----------------------------
URL = "https://v0-transformed-ck.vercel.app/"  # <-- Replace with your deployed URL
OUTPUT_FOLDER = "v0_assets"

# -----------------------------
# CREATE FOLDER
# -----------------------------
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# -----------------------------
# DOWNLOAD FUNCTION
# -----------------------------
def download_file(url, folder):
    try:
        filename = url.split("/")[-1].split("?")[0]  # clean file name
        local_path = os.path.join(folder, filename)

        r = requests.get(url, timeout=10)
        if r.status_code == 200:
            with open(local_path, "wb") as f:
                f.write(r.content)
            print(f"[saved] {filename}")
        else:
            print(f"[fail] {url}")

    except Exception as e:
        print(f"Error downloading {url}: {e}")

# -----------------------------
# SCRAPING
# -----------------------------
print("Fetching page...")
html = requests.get(URL).text
soup = BeautifulSoup(html, "html.parser")

print("Extracting assets...")

asset_urls = set()

# 1. IMG tags (PNG, JPG, GIF, SVG)
for img in soup.find_all("img"):
    src = img.get("src")
    if src:
        asset_urls.add(urljoin(URL, src))

# 2. SVG inline <svg> content converted to downloadable files
svg_tags = soup.find_all("svg")
for i, svg in enumerate(svg_tags):
    svg_code = str(svg)
    file_path = os.path.join(OUTPUT_FOLDER, f"inline_svg_{i}.svg")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(svg_code)
    print(f"[saved] inline_svg_{i}.svg")

# 3. CSS backgrounds (inline or external)
pattern = re.compile(r'url$$(.*?)$$')

for tag in soup.find_all(style=True):
    style = tag.get("style")
    matches = pattern.findall(style)
    for m in matches:
        url = m.strip('"\'')

        if url.startswith("data:"):   # skip base64
            continue

        asset_urls.add(urljoin(URL, url))

# -----------------------------
# DOWNLOAD ALL ASSETS
# -----------------------------
print(f"\nFound {len(asset_urls)} assets to download.\n")

for asset in asset_urls:
    download_file(asset, OUTPUT_FOLDER)

print("\n🎉 DONE — All assets saved in:", OUTPUT_FOLDER)
