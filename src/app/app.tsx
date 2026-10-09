import { ThemeToggle } from '@/components/common/theme-toggle'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function App() {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-sm">
        <CardContent className="flex flex-col items-center gap-4 py-6 text-center">
          <h1 className="font-heading text-4xl font-semibold">Lumi</h1>
          <p className="text-muted-foreground">Beauty center scheduling app</p>
          <Button size="lg">Get started</Button>
        </CardContent>
      </Card>
    </main>
  )
}
