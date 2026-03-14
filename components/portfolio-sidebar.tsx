"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Code, Briefcase, Users, CuboidIcon as Cube, Mail, GraduationCap } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function PortfolioSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Education", path: "/education", icon: GraduationCap },
    { name: "CAD Projects", path: "/cad-projects", icon: Cube },
    { name: "Software Projects", path: "/software-projects", icon: Code },
    { name: "Group Projects", path: "/group-projects", icon: Users },
    { name: "Work Experience", path: "/experience", icon: Briefcase },
    { name: "Contact", path: "/contact", icon: Mail },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1705520863429.jfif-BcTX3qx1SLtjaZWFIC2O1Na6TcwvZX.jpeg"
              alt="Christopher Accad"
            />
            <AvatarFallback>CA</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold">Christopher Accad</span>
            <span className="text-xs text-muted-foreground">Engineering Student</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild isActive={isActive(item.path)}>
                <Link href={item.path}>
                  <item.icon className="h-4 w-4 mr-2" />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground">
          <p>© 2025 Christopher Accad</p>
          <p>Ottawa, Ontario</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
