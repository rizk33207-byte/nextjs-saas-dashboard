import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChart3, Layout, Shield } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Layout className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">SaaS App</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button>Dashboard Demo</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center px-4 md:px-6">
            <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Build your next idea even faster.
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Beautifully designed components built with Radix UI and Tailwind CSS.
              Accessible. Customizable. Open Source.
            </p>
            <div className="space-x-4">
              <Link href="/dashboard">
                <Button size="lg">Get Started</Button>
              </Link>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 px-4 md:px-6 rounded-lg">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <BarChart3 className="h-12 w-12 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold">Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Get detailed insights into your data with our advanced analytics tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Shield className="h-12 w-12 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold">Secure</h3>
                  <p className="text-sm text-muted-foreground">
                    Your data is safe with us. We use the latest security technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Layout className="h-12 w-12 text-primary" />
                <div className="space-y-2">
                  <h3 className="font-bold">Responsive</h3>
                  <p className="text-sm text-muted-foreground">
                    Works on all devices. Mobile, tablet, and desktop supported out of the box.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Antigravity. The source code is available on{" "}
            <a href="#" className="font-medium underline underline-offset-4">GitHub</a>.
          </p>
        </div>
      </footer>
    </div>
  )
}
