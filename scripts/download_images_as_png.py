import requests
from PIL import Image
from io import BytesIO
import os

# Create output directory
output_dir = "downloaded_images_png"
os.makedirs(output_dir, exist_ok=True)

# Dictionary of all images with their blob URLs
images = {
    # Product Icons (CK World Page)
    "crystal-krop-icon.png": "/images/crystal-krop-icon-removebg-preview.png",
    "cultivation-key-icon.png": "/images/cultivation-key-icon-removebg-preview.png",
    "crop-karma-icon.png": "/images/crop-karma-icon-removebg-preview.png",
    "crop-keeper-icon.png": "/images/crop-keeper-icon-removebg-preview.png",
    "crop-kit-icon.png": "/images/crop-kit-icon-removebg-preview.png",
    
    # Product Line Images (CK World Page)
    "crystal-krop-product.png": "/images/crystal-20krop-e2-84-a2.jpg",
    "cultivation-key-product.png": "/images/cultivation-20key-e2-84-a2.jpg",
    "crop-karma-product.png": "/images/crop-20karma-e2-84-a2.png",
    "crop-keeper-product.png": "/images/crop-20keeper-e2-84-a2.jpg",
    "crop-kit-product.png": "https://blob.v0.app/cXdQf.jpg",
    "cultivation-key-page.png": "/images/cuktivation.jpg",
    
    # Hero Carousel Images (Homepage)
    "hero-apple-orchard.png": "/images/image.jpg",
    "hero-citrus-orchard.png": "/images/image.jpg",
    "hero-vineyard.png": "/images/image.jpg",
    "hero-stone-fruit-orchard.png": "/images/image.jpg",
    "hero-olive-grove.png": "/images/image.jpg",
    
    # Knowledge Hub Article Images
    "article-fertilizer-science.png": "/images/image.jpg",
    "article-soil-health.png": "/images/image.jpg",
    "article-precision-agriculture.png": "/images/image.jpg",
    "article-sustainable-farming.png": "/images/image.jpg",
    "article-crop-nutrition.png": "/images/image.jpg",
    "article-water-management.png": "/images/image.jpg",
    
    # Flyer Images
    "amn-logo.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "ams-gr-logo.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "ams-gr-ck-logo.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "ams-logo.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "ams-ck-logo.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "ams-image-1.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "ams-image-2.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "dap-logo.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "dap-ck-logo.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "map-logo.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "map-ck-logo.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "map-image-1.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "map-image-2.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "ssp-logo.png": "/images/screenshot-202025-01-07-20at-2010.png",
    "ssp-ck-logo.png": "/images/screenshot-202025-01-07-20at-2010.png",
    
    # Other Images
    "verify-product-image.png": "/images/image.jpg",
    "join-community-hero.png": "/images/image.jpg",
    "mission-values-hero.png": "/images/image.jpg",
}

def download_and_convert_to_png(url, filename):
    """Download image from URL and convert to PNG format"""
    try:
        print(f"Downloading {filename}...")
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        # Open image with PIL
        img = Image.open(BytesIO(response.content))
        
        # Convert to RGB if necessary (for RGBA or other modes)
        if img.mode in ('RGBA', 'LA', 'P'):
            # For images with transparency, keep RGBA
            if img.mode == 'P':
                img = img.convert('RGBA')
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Save as PNG
        output_path = os.path.join(output_dir, filename)
        img.save(output_path, 'PNG', optimize=True)
        print(f"✓ Saved: {filename}")
        return True
        
    except Exception as e:
        print(f"✗ Error downloading {filename}: {str(e)}")
        return False

# Download all images
print("Starting image download and conversion to PNG...\n")
successful = 0
failed = 0

for filename, url in images.items():
    if download_and_convert_to_png(url, filename):
        successful += 1
    else:
        failed += 1

print(f"\n{'='*50}")
print(f"Download Complete!")
print(f"Successful: {successful}")
print(f"Failed: {failed}")
print(f"Images saved in: {output_dir}/")
print(f"{'='*50}")
