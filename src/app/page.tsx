import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeToggle />
      <Button> Hi world</Button>
    </main>
  )
}
