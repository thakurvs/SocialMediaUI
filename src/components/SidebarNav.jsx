import { Link, useLocation } from "react-router-dom"
import { Home, Bell, ShoppingBag, MessageSquare, Wallet, Layers, User, Settings } from "lucide-react"

const navItems = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "/notifications",
  },
  {
    title: "Shop",
    icon: ShoppingBag,
    href: "/shop",
  },
  {
    title: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
  },
  {
    title: "Wallet",
    icon: Wallet,
    href: "/wallet",
  },
  {
    title: "Subscription",
    icon: Layers,
    href: "/subscription",
  },
  {
    title: "My Profile",
    icon: User,
    href: "/profile",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export default function SidebarNav() {
  const location = useLocation()

  return (
    <div className="flex-1 overflow-auto py-2">
      <nav className="grid items-start px-2 text-sm">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.href
          return (
            <Link
              key={index}
              to={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 transition-all hover:bg-gray-100 ${
                isActive ? "bg-gray-100" : ""
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? "text-black" : "text-gray-400"}`} />
              <span className={isActive ? "font-medium" : "text-gray-500"}>{item.title}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

