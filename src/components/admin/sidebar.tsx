"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, FileText, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Produk", icon: ShoppingBag },
  { href: "/admin/blogs", label: "Blog", icon: FileText },
];

export function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-stone-900 text-stone-300 flex flex-col">
      <div className="p-6">
        <Link href="/admin/dashboard" className="text-xl font-serif font-bold text-white">WienCraft Admin</Link>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${pathname === l.href ? "bg-stone-800 text-white" : "hover:bg-stone-800"}`}>
            <l.icon className="w-4 h-4" /> {l.label}
          </Link>
        ))}
      </nav>
      <div className="p-4">
        <form action="/admin/logout" method="post">
          <Button type="submit" variant="ghost" className="w-full justify-start text-stone-400 hover:text-white hover:bg-stone-800">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </form>
      </div>
    </aside>
  );
}
