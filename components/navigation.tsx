"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { CKWorldMegaMenu } from "@/components/ck-world-mega-menu"
import { productLines } from "@/data/product-lines"
import { ArrowRight, ChevronDown, Search, X, Briefcase, Handshake, MessageCircle, Mail } from "lucide-react"
import { LetsConnectModal } from "@/components/lets-connect-modal"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [language, setLanguage] = useState<"EN" | "ES">("EN")
  const [letsConnectOpen, setLetsConnectOpen] = useState(false)
  const [ckStoryOpen, setCkStoryOpen] = useState(false)
  const [modalType, setModalType] = useState<"employment" | "representative" | "general" | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const letsConnectDropdownRef = useRef<HTMLDivElement>(null)
  const letsConnectTriggerRef = useRef<HTMLButtonElement>(null)
  const ckStoryDropdownRef = useRef<HTMLDivElement>(null)
  const ckStoryTriggerRef = useRef<HTMLButtonElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout>()
  const letsConnectCloseTimeoutRef = useRef<NodeJS.Timeout>()
  const ckStoryCloseTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!mobileMenuOpen) return

      if (e.key === "Escape") {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [mobileMenuOpen])

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
      if (letsConnectCloseTimeoutRef.current) {
        clearTimeout(letsConnectCloseTimeoutRef.current)
      }
      if (ckStoryCloseTimeoutRef.current) {
        clearTimeout(ckStoryCloseTimeoutRef.current)
      }
    }
  }, [])

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    const items = dropdownRef.current?.querySelectorAll("a")
    if (!items) return

    const currentIndex = Array.from(items).findIndex((item) => item === document.activeElement)

    if (e.key === "ArrowDown") {
      e.preventDefault()
      const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
      ;(items[nextIndex] as HTMLElement).focus()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
      ;(items[prevIndex] as HTMLElement).focus()
    } else if (e.key === "Escape") {
      setMobileMenuOpen(false)
    }
  }

  const handleLetsConnectMouseEnter = () => {
    if (letsConnectCloseTimeoutRef.current) {
      clearTimeout(letsConnectCloseTimeoutRef.current)
    }
    setLetsConnectOpen(true)
  }

  const handleLetsConnectMouseLeave = () => {
    letsConnectCloseTimeoutRef.current = setTimeout(() => {
      setLetsConnectOpen(false)
    }, 200)
  }

  const handleLetsConnectClick = () => {
    setLetsConnectOpen(!letsConnectOpen)
  }

  const handleLetsConnectItemClick = (type: "employment" | "representative" | "general") => {
    setModalType(type)
    setLetsConnectOpen(false)
    setMobileMenuOpen(false)
  }

  const handleCkStoryMouseEnter = () => {
    if (ckStoryCloseTimeoutRef.current) {
      clearTimeout(ckStoryCloseTimeoutRef.current)
    }
    setCkStoryOpen(true)
  }

  const handleCkStoryMouseLeave = () => {
    ckStoryCloseTimeoutRef.current = setTimeout(() => {
      setCkStoryOpen(false)
    }, 200)
  }

  const handleCkStoryClick = () => {
    setCkStoryOpen(!ckStoryOpen)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("[v0] Searching for:", searchQuery)
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="mx-auto max-w-[96rem] px-6 flex h-40 items-center justify-between">
          <Link href="/" className="flex flex-col items-center gap-2.5 px-6">
            <Image
              src="/ck-logo.png"
              alt="CK - Complete Krop"
              width={340}
              height={102}
              className="h-20 w-auto"
              priority
            />
            <span className="text-sm text-emerald-600 font-medium whitespace-nowrap leading-tight">
              CK® Your partner in smarter & tailored crop solutions
            </span>
          </Link>

          <div className="hidden lg:flex flex-col items-end gap-2">
            <div className="flex items-center gap-6 mr-6">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLanguage("EN")}
                  className={`text-sm font-medium transition-colors ${
                    language === "EN" ? "text-emerald-600" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  EN
                </button>
                <span className="text-gray-400">/</span>
                <button
                  onClick={() => setLanguage("ES")}
                  className={`text-sm font-medium transition-colors ${
                    language === "ES" ? "text-emerald-600" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  ES
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
                  aria-label="Toggle search"
                >
                  <span className="text-sm font-medium">Search</span>
                  <Search className="h-5 w-5" />
                </button>

                {searchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <form onSubmit={handleSearch} className="flex gap-2">
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products, articles..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-sm font-medium"
                      >
                        Go
                      </button>
                      <button
                        type="button"
                        onClick={() => setSearchOpen(false)}
                        className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Close search"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>

            <nav className="flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <CKWorldMegaMenu />
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="relative">
                <button
                  ref={ckStoryTriggerRef}
                  onClick={handleCkStoryClick}
                  onMouseEnter={handleCkStoryMouseEnter}
                  onMouseLeave={handleCkStoryMouseLeave}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 cursor-pointer"
                  aria-expanded={ckStoryOpen}
                  aria-controls="ck-story-menu"
                  aria-haspopup="true"
                >
                  The CK Story
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${ckStoryOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {ckStoryOpen && (
                  <div
                    id="ck-story-menu"
                    ref={ckStoryDropdownRef}
                    role="menu"
                    onMouseEnter={handleCkStoryMouseEnter}
                    onMouseLeave={handleCkStoryMouseLeave}
                    className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur rounded-xl shadow-lg border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <Link
                      href="/the-ck-story/who-we-are"
                      onClick={() => {
                        setCkStoryOpen(false)
                        setMobileMenuOpen(false)
                      }}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none"
                      tabIndex={0}
                    >
                      Who We Are
                    </Link>
                    <Link
                      href="/the-ck-story/about-ck"
                      onClick={() => {
                        setCkStoryOpen(false)
                        setMobileMenuOpen(false)
                      }}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none"
                      tabIndex={0}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/the-ck-story/mission-values"
                      onClick={() => {
                        setCkStoryOpen(false)
                        setMobileMenuOpen(false)
                      }}
                      role="menuitem"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none"
                      tabIndex={0}
                    >
                      Our Mission & Values
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/our-applied-science"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Our Applied Science
              </Link>
              <Link
                href="/ck-knowledge-hub"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                CK Knowledge Hub
              </Link>

              <div className="relative">
                <button
                  ref={letsConnectTriggerRef}
                  onClick={handleLetsConnectClick}
                  onMouseEnter={handleLetsConnectMouseEnter}
                  onMouseLeave={handleLetsConnectMouseLeave}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 cursor-pointer"
                  aria-expanded={letsConnectOpen}
                  aria-controls="lets-connect-menu"
                  aria-haspopup="true"
                >
                  Let's Connect
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${letsConnectOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {letsConnectOpen && (
                  <div
                    id="lets-connect-menu"
                    ref={letsConnectDropdownRef}
                    role="menu"
                    onMouseEnter={handleLetsConnectMouseEnter}
                    onMouseLeave={handleLetsConnectMouseLeave}
                    className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur rounded-xl shadow-lg border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <button
                      onClick={() => handleLetsConnectItemClick("employment")}
                      role="menuitem"
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none flex items-center gap-2"
                      tabIndex={0}
                    >
                      <Briefcase className="h-4 w-4" />
                      Employment
                    </button>
                    <button
                      onClick={() => handleLetsConnectItemClick("representative")}
                      role="menuitem"
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none flex items-center gap-2"
                      tabIndex={0}
                    >
                      <Handshake className="h-4 w-4" />
                      Representative
                    </button>
                    <button
                      onClick={() => handleLetsConnectItemClick("general")}
                      role="menuitem"
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none flex items-center gap-2"
                      tabIndex={0}
                    >
                      <MessageCircle className="h-4 w-4" />
                      General Inquiry
                    </button>
                    <Link
                      href="/contact-us"
                      onClick={() => {
                        setLetsConnectOpen(false)
                        setMobileMenuOpen(false)
                      }}
                      role="menuitem"
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors focus:bg-emerald-50 focus:text-emerald-700 focus:outline-none flex items-center gap-2"
                      tabIndex={0}
                    >
                      <Mail className="h-4 w-4" />
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/verify-your-product"
                className="text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 px-6 py-2.5 rounded transition-colors flex items-center gap-2"
              >
                Verify Your Product
                <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>

          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h16" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="container py-4 flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <div>
                <div className="text-sm font-medium mb-2">CK World</div>
                <div className="pl-4 flex flex-col gap-2">
                  {productLines.map((line) => (
                    <Link
                      key={line.name}
                      href={line.href}
                      className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                    >
                      {line.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => setCkStoryOpen(!ckStoryOpen)}
                  className="text-sm font-medium hover:text-emerald-600 transition-colors flex items-center gap-1 w-full text-left"
                  aria-expanded={ckStoryOpen}
                >
                  The CK Story
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${ckStoryOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {ckStoryOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    <Link
                      href="/the-ck-story/who-we-are"
                      onClick={() => {
                        setCkStoryOpen(false)
                        setMobileMenuOpen(false)
                      }}
                      className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                    >
                      Who We Are
                    </Link>
                    <Link
                      href="/the-ck-story/about-ck"
                      onClick={() => {
                        setCkStoryOpen(false)
                        setMobileMenuOpen(false)
                      }}
                      className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/the-ck-story/mission-values"
                      onClick={() => {
                        setCkStoryOpen(false)
                        setMobileMenuOpen(false)
                      }}
                      className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                    >
                      Our Mission & Values
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/ck-knowledge-hub" className="text-sm font-medium hover:text-emerald-600 transition-colors">
                CK Knowledge Hub
              </Link>

              <div>
                <button
                  onClick={() => setLetsConnectOpen(!letsConnectOpen)}
                  className="text-sm font-medium hover:text-emerald-600 transition-colors flex items-center gap-1 w-full text-left"
                  aria-expanded={letsConnectOpen}
                >
                  Let's Connect
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${letsConnectOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {letsConnectOpen && (
                  <div className="pl-4 flex flex-col gap-2 mt-2">
                    <button
                      onClick={() => handleLetsConnectItemClick("employment")}
                      className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors text-left flex items-center gap-2"
                    >
                      <Briefcase className="h-4 w-4" />
                      Employment
                    </button>
                    <button
                      onClick={() => handleLetsConnectItemClick("representative")}
                      className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors text-left flex items-center gap-2"
                    >
                      <Handshake className="h-4 w-4" />
                      Representative
                    </button>
                    <button
                      onClick={() => handleLetsConnectItemClick("general")}
                      className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors text-left flex items-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      General Inquiry
                    </button>
                    <Link
                      href="/contact-us"
                      onClick={() => {
                        setLetsConnectOpen(false)
                        setMobileMenuOpen(false)
                      }}
                      className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/our-applied-science"
                className="text-sm font-medium hover:text-emerald-600 transition-colors"
              >
                Our Applied Science
              </Link>

              <Link
                href="/verify-your-product"
                className="text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 px-6 py-2.5 rounded transition-colors flex items-center gap-2"
              >
                Verify Your Product
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-2 ml-6">
                  <button
                    onClick={() => setLanguage("EN")}
                    className={`text-sm font-medium transition-colors ${
                      language === "EN" ? "text-emerald-600" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    EN
                  </button>
                  <span className="text-gray-400">/</span>
                  <button
                    onClick={() => setLanguage("ES")}
                    className={`text-sm font-medium transition-colors ${
                      language === "ES" ? "text-emerald-600" : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    ES
                  </button>
                </div>

                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors ml-6"
                  aria-label="Toggle search"
                >
                  <span className="text-sm font-medium">Search</span>
                  <Search className="h-5 w-5" />
                </button>

                {searchOpen && (
                  <div className="w-full px-6">
                    <form onSubmit={handleSearch} className="flex gap-2">
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products, articles..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-sm font-medium"
                      >
                        Go
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>

      {modalType && <LetsConnectModal type={modalType} onClose={() => setModalType(null)} />}
    </>
  )
}
