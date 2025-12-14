"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="flex h-14 items-center justify-between border-b bg-card px-6 lg:h-[60px]">
            <div className="flex items-center gap-4">
                {/* Mobile Sidebar Trigger could go here */}
                <h2 className="text-lg font-semibold">Dashboard</h2>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                </Button>
                <ThemeToggle />
            </div>
        </header>
    )
}
