"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Palette, Gift, User, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "#", label: "Gallery", icon: Palette },
  { href: "#", label: "Services", icon: Gift },
  { href: "#", label: "About", icon: User },
  { href: "#", label: "Contact", icon: Phone },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:relative border-t border-border bg-card md:bg-background md:border-b md:border-border md:py-0 z-50">
      <div className="flex items-center justify-around md:hidden h-16 gap-0"> {/* Reduced height from h-20 to h-16 */}
        {navItems.map(({ href, label, icon: Icon }, index) => {
          const isActive = pathname === href
          return (
            <Link
              key={`${href}-${index}`} // Using a unique key combining href and index
              href={href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full gap-0.5 transition-all duration-200 p-2", // Added padding and reduced gap
                isActive ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon size={18} /> {/* Reduced icon size from 20 to 18 */}
              <span className="text-[10px] font-medium">{label}</span> {/* Reduced text size */}
            </Link>
          )
        })}
      </div>

      <div className="hidden md:flex items-center justify-between px-8 py-5 border-b border-border bg-background">
        <div className="text-2xl font-serif font-semibold tracking-tight text-primary">Diana Event Rentals</div>
        <div className="flex items-center gap-6">
          {navItems.map(({ href, label }, index) => {
            const isActive = href === "/" && index === 0 // Only home is considered active on desktop since others are # links
            return (
              <Link
                key={`desktop-${index}`} // Using a unique key for desktop navigation
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  isActive ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/70 hover:text-foreground",
                )}
              >
                {label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
