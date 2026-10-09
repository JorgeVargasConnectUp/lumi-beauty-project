import { Blocks, CalendarDays, FolderTree, Leaf, Palette, Sparkles, Users } from 'lucide-react'

import { ThemeToggle } from '@/components/common/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: Sparkles,
    title: 'Treatments',
    description: 'The services the center offers.',
    surface: 'bg-secondary text-secondary-foreground',
  },
  {
    icon: Users,
    title: 'Clients',
    description: 'The people who visit the center.',
    surface: 'bg-muted text-foreground',
  },
  {
    icon: CalendarDays,
    title: 'Appointments',
    description: 'Which client comes, for which treatment and when.',
    surface: 'bg-accent text-accent-foreground',
  },
]

const templateIcons = [Palette, FolderTree, Blocks]

const stack = ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui']

export function App() {
  return (
    <main className="flex min-h-svh items-center justify-center px-6 py-20">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <h1 className="font-heading text-4xl font-semibold">Lumi</h1>
          <CardDescription className="text-base">Beauty center scheduling app</CardDescription>
          <CardAction>
            <Button size="lg" className="w-full">
              Get started
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <section className="rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10">
            <p className="text-xs font-medium tracking-[0.2em] text-primary-foreground/80 uppercase">
              The project
            </p>
            <h2 className="mt-3 max-w-md text-3xl leading-tight font-semibold">
              One app to manage the day of a beauty center
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              Lumi will keep the treatments, the clients and the appointments of the center in one
              place. This base already has the design and the folder structure. The real features
              are still to build.
            </p>
          </section>

          <ul className="grid gap-4 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, description, surface }) => (
              <li key={title} className={cn('rounded-2xl p-5', surface)}>
                <Icon className="size-5" aria-hidden />
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-1 leading-relaxed opacity-80">{description}</p>
              </li>
            ))}
          </ul>

          <footer className="rounded-2xl bg-primary text-primary-foreground">
            <div className="grid gap-8 p-8 sm:grid-cols-[1.5fr_1fr] sm:p-10">
              <div>
                <p className="flex items-center gap-2 font-heading text-xl font-semibold">
                  <Leaf className="size-5" aria-hidden />
                  Lumi
                </p>
                <p className="mt-4 max-w-xs leading-relaxed text-primary-foreground/80">
                  This is the base template. It comes with the design, the folder structure and one
                  example feature to copy.
                </p>
                <div className="mt-5 flex gap-2">
                  {templateIcons.map((Icon, index) => (
                    <span
                      key={index}
                      className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10"
                    >
                      <Icon className="size-4" aria-hidden />
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase">Stack</p>
                <ul className="mt-4 flex flex-col gap-3 text-primary-foreground/80">
                  {stack.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="border-t border-primary-foreground/10 px-8 py-5 text-xs text-primary-foreground/80 sm:px-10">
              Each feature has four layers: domain, application, infrastructure and ui.
            </p>
          </footer>
        </CardContent>
      </Card>
    </main>
  )
}
