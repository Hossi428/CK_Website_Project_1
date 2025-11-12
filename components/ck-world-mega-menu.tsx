"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Check } from "lucide-react"
import { NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"

const productLinesData = {
  "crystal-krop": {
    name: "Crystal Krop",
    href: "/ck-world/crystal-krop",
    description:
      "Precision meets performance in plant nutrition with comprehensive water-soluble NPKs and nutrient formulations.",
    families: [
      {
        name: "Pre-planting Family",
        href: "/ck-world/crystal-krop#pre-planting",
        products: ["AMN", "MAP", "DAP", "AMS", "AMS Gr", "SSP"],
      },
      {
        name: "NPKS™ Family",
        href: "/ck-world/crystal-krop#npks",
        products: [
          "NPKS Crys™",
          "NPKS NCrys™",
          "NPKS PCrys™",
          "NPKS NKCrys™",
          "NPKS KCrys™",
          "NPKS Gr™",
          "NPKS NGr™",
          "NPKS NSGr™",
          "NPKS NKGr™",
        ],
      },
      {
        name: "Crystalline NPK Family",
        href: "/ck-world/crystal-krop#crystalline-npk",
        products: ["NPK Crys™", "NPK crysN™", "NPK crysP™", "NPK crys™", "YieldPro™ SMg", "YieldPro™ Cryst"],
      },
      {
        name: "Powdery NPK Family",
        href: "/ck-world/crystal-krop#powdery-npk",
        products: [
          "YieldPro™ Lite",
          "YieldPro™ FertiPro™",
          "YieldPro™ TE",
          "YieldPro™ FoliarPro™",
          "YieldPro™ RipenFast™",
          "Ngrow™",
          "Balance",
          "TriBalance™",
          "PhosIgniter™",
        ],
      },
      {
        name: "NutriGrow™ Family",
        href: "/ck-world/crystal-krop#nutrigrow",
        products: [
          "NutriGrow™ (GrowthMax™)",
          "NutriGrow™ (GreenBoost™)",
          "NutriGrow™ (Pitch™)",
          "NutriGrow™ (GreenRise™)",
          "NutriGrow™ (BioGrow™)",
          "NutriGrow™ (KSGrow™)",
          "NutriGrow™ (KalGrow™)",
          "NutriGrow™ (Vgrow™)",
          "NutriGrow™ (PowerYield™)",
          "NutriGrow™ (AllRound™)",
          "NPLiq™",
        ],
      },
      {
        name: "Bivalent Family",
        href: "/ck-world/crystal-krop#bivalent",
        products: [
          "Urea Phosphate",
          "GrowMax™",
          "MKP",
          "KaliumS™",
          "PotaSulf™",
          "KalMagic™",
          "MagPro™ Hepta",
          "CalBoost™",
          "Calcium nitrate",
          "CalBoost™ CANS™",
        ],
      },
      {
        name: "Trivalent Family",
        href: "/ck-world/crystal-krop#trivalent",
        products: ["CalMagSul™", "MagBoronS™", "SulfoMag B-Mn™"],
      },
    ],
  },
  "cultivation-key": {
    name: "Cultivation Key",
    href: "/ck-world/cultivation-key",
    description:
      "Unlock the full potential of your soil and crops with precision science and field-proven performance.",
    families: [
      {
        name: "Anti-Salinity Concepts",
        href: "/ck-world/cultivation-key#anti-salinity",
        products: ["SaltBlock™", "SaltBlock™ Plus"],
      },
      {
        name: "Chelated-Fe Family",
        href: "/ck-world/cultivation-key#chelated-fe",
        products: ["PrimeFer™", "EdgeFer™", "EdgeFer™ Advance", "FeTriple™", "FeMaxED™", "Feligno™"],
      },
      {
        name: "NPK Tech. Family",
        href: "/ck-world/cultivation-key#npk-tech",
        products: ["BasePrimeS™ UI", "BasePrimeS-Plus™ UI", "3Equaliq Fert™", "YieldProKal™"],
      },
      {
        name: "pH Conditioners",
        href: "/ck-world/cultivation-key#ph-conditioners",
        products: ["Bufferizer™", "pH Optimizer™"],
      },
      {
        name: "Root Enhancers",
        href: "/ck-world/cultivation-key#root-enhancers",
        products: ["RootVive™", "RootVive™ Ultra Eco"],
      },
      {
        name: "N Tech. Family",
        href: "/ck-world/cultivation-key#n-tech",
        products: ["UreaTech™", "UreaTech™Gr", "UreSafe™"],
      },
      {
        name: "Innovative Concepts",
        href: "/ck-world/cultivation-key#innovative-concepts",
        products: ["PistaLoad™", "MagElite™", "KelpAmin™"],
      },
    ],
  },
  "crop-karma": {
    name: "Crop Karma",
    href: "/ck-world/crop-karma",
    description: "Rebuilding soil, rooting the future. Dedicated to improving soil structure and biological activity.",
    families: [
      {
        name: "Humic Acid Family",
        href: "/ck-world/crop-karma#humic-acid",
        products: ["Humivive™ LQ", "Humivive™ Eco LQ", "Humivive™ PW", "HumiPlus™ PW", "HumiPlus™ Eco PW"],
      },
      {
        name: "BioMatrix™ Series",
        href: "/ck-world/crop-karma#biomatrix",
        products: [
          "Nitrovive™",
          "Humi OrganiCore™",
          "LignoBoost™",
          "OrganiCharge™",
          "OrganEnriched",
          "Carbovive™",
          "Carbonitro™",
          "OrganiGrowth™",
        ],
      },
    ],
  },
  "crop-keeper": {
    name: "Crop Keeper",
    href: "/ck-world/crop-keeper",
    description: "Your trusted partner in crop protection and stress management for resilient, productive crops.",
    families: [
      {
        name: "PhytoShield™ Family",
        href: "/ck-world/crop-keeper#phytoshield",
        products: ["PhosGuard™", "TwinPhite", "ShieldSi™", "Oxidex™"],
      },
      {
        name: "Amino Acids",
        href: "/ck-world/crop-keeper#amino-acids",
        products: ["AminoFort™ pro", "AminoFort™", "Aminoliq™", "MetaBoost™", "MetaGrowth™", "MetaVigor™"],
      },
      {
        name: "Seaweed Extracts",
        href: "/ck-world/crop-keeper#seaweed-extracts",
        products: [
          "KelpMax™",
          "Algavive™",
          "Algamax™",
          "AlgaICE™",
          "AlgaCream™",
          "AlgaEcklon™",
          "Algicklon™",
          "AlgaeAsco™",
          "Algamino™",
        ],
      },
    ],
  },
  "crop-kit": {
    name: "Crop Kit",
    href: "/ck-world/crop-kit",
    description:
      "Integrated solutions for crop performance with synergistic input solutions throughout the entire crop cycle.",
    families: [
      {
        name: "All Products",
        href: "/ck-world/crop-kit",
        products: [
          "SRP Eco",
          "CalFort™",
          "BorEtha™",
          "BFort™",
          "ZnFort™",
          "MicroFort™",
          "K-Vantage™",
          "K Blast™",
          "Kcliq™",
          "NitroMax™",
          "NitroMax™ Plus",
          "NitroPlus™",
          "NitroAmino™",
          "NitroSulfix™",
          "NitraMag™",
          "BoroMax™",
          "NutriTrace™",
          "MolyBor Active™",
          "ZincoSul™",
          "SulFe™",
          "FerroSul™ Pro",
          "ZincoMan™",
          "ManSul™",
          "FMZPrime™",
          "CuPro™",
          "CopperS™",
          "MagBorS™",
        ],
      },
    ],
  },
} as const

type ProductLineKey = keyof typeof productLinesData

export function CKWorldMegaMenu() {
  const [hoveredLine, setHoveredLine] = useState<ProductLineKey | null>(null)
  const [hoveredFamily, setHoveredFamily] = useState<string | null>(null)

  return (
    <>
      <NavigationMenuTrigger className="text-sm font-medium">CK World</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="flex w-[1100px]">
          {/* Level 1: Product Lines */}
          <div className="w-[280px] border-r bg-slate-50/50 p-4">
            <div className="mb-3">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Product Lines</h3>
            </div>
            <ul className="space-y-1">
              {(Object.keys(productLinesData) as ProductLineKey[]).map((key) => {
                const line = productLinesData[key]
                return (
                  <li key={key}>
                    <Link
                      href={line.href}
                      className={`group flex items-center justify-between rounded-md p-3 transition-all ${
                        hoveredLine === key ? "bg-white shadow-sm" : "hover:bg-white/50"
                      }`}
                      onMouseEnter={() => {
                        setHoveredLine(key)
                        setHoveredFamily(null)
                      }}
                    >
                      <div className="flex-1">
                        <div
                          className={`font-medium text-sm transition-colors ${
                            hoveredLine === key ? "text-emerald-600" : "group-hover:text-emerald-600"
                          }`}
                        >
                          {line.name}
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-colors ${
                          hoveredLine === key
                            ? "text-emerald-600"
                            : "text-muted-foreground group-hover:text-emerald-600"
                        }`}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Level 2: Families */}
          <div className="w-[320px] border-r bg-white p-4">
            {hoveredLine ? (
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-base text-emerald-700 mb-1">
                    {productLinesData[hoveredLine].name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {productLinesData[hoveredLine].description.length > 120
                      ? `${productLinesData[hoveredLine].description.substring(0, 120)}...`
                      : productLinesData[hoveredLine].description}
                  </p>
                </div>

                <div className="border-t pt-3">
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Product Families
                  </h4>
                  <ul className="space-y-1">
                    {productLinesData[hoveredLine].families.map((family, idx) => (
                      <li key={idx}>
                        <Link
                          href={family.href}
                          className={`group flex items-center justify-between rounded-md p-2 text-sm transition-all ${
                            hoveredFamily === `${hoveredLine}-${idx}`
                              ? "bg-emerald-50 text-emerald-700"
                              : "hover:bg-slate-50"
                          }`}
                          onMouseEnter={() => setHoveredFamily(`${hoveredLine}-${idx}`)}
                        >
                          <span className="flex-1">{family.name}</span>
                          <ChevronRight
                            className={`h-3.5 w-3.5 transition-colors ${
                              hoveredFamily === `${hoveredLine}-${idx}` ? "text-emerald-600" : "text-muted-foreground"
                            }`}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center">
                <div className="text-muted-foreground">
                  <div className="text-3xl mb-2">🌱</div>
                  <p className="text-xs">Hover over a product line</p>
                </div>
              </div>
            )}
          </div>

          {/* Level 3: Products */}
          <div className="w-[500px] bg-slate-50/30 p-4">
            {hoveredLine && hoveredFamily ? (
              (() => {
                const parts = hoveredFamily.split("-")
                const familyIdx = Number.parseInt(parts[parts.length - 1], 10)
                const currentLine = productLinesData[hoveredLine]

                if (!currentLine || isNaN(familyIdx) || !currentLine.families[familyIdx]) {
                  return (
                    <div className="flex items-center justify-center h-full text-center">
                      <div className="text-muted-foreground">
                        <p className="text-xs">Unable to load family details</p>
                      </div>
                    </div>
                  )
                }

                const family = currentLine.families[familyIdx]

                return (
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-base text-emerald-700 mb-1">{family.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        Click to view detailed information and specifications
                      </p>
                    </div>

                    <div className="border-t pt-3">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                        Products ({family.products.length})
                      </h4>
                      <div className="space-y-1.5 max-h-[400px] overflow-y-auto pr-2">
                        {family.products.map((product, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 rounded-md bg-white border border-slate-200 px-3 py-2.5 text-sm text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 transition-all cursor-pointer group"
                          >
                            <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 group-hover:text-emerald-600" />
                            <span className="flex-1">{product}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <Link
                        href={family.href}
                        className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        View family details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )
              })()
            ) : hoveredLine ? (
              <div className="flex items-center justify-center h-full text-center">
                <div className="text-muted-foreground">
                  <div className="text-3xl mb-2">📦</div>
                  <p className="text-xs">Hover over a family to see products</p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-center">
                <div className="text-muted-foreground">
                  <div className="text-3xl mb-2">🔍</div>
                  <p className="text-xs">Explore our complete product hierarchy</p>
                  <p className="text-xs mt-1 text-slate-400">Lines → Families → Products</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </NavigationMenuContent>
    </>
  )
}
