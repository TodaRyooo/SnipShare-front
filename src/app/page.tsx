'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const handleRoute = (url: string) => router.push(url)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-start">
        <p>Get started with the Code Snippet Sharing Platform</p>
        <div className="flex gap-4 w-fit self-center">
          <Button onClick={() => handleRoute('/login')} className="cursor-pointer">
            login
          </Button>
          <Button onClick={() => handleRoute('/signup')} className="cursor-pointer">
            signup
          </Button>
        </div>
      </main>
    </div>
  )
}
