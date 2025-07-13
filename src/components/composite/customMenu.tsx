'use client'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { useRouter } from 'next/navigation'

const CustomMenu = () => {
  const router = useRouter()
  const handleRoute = (url: string) => router.push(url)
  console.log('Custom Menu')

  return (
    <Menubar className="w-fit sticky top-4 ml-auto">
      <MenubarMenu>
        <MenubarTrigger onClick={() => handleRoute('/timeline')}>TIMELINE</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger onClick={() => handleRoute('/chat')}>CHAT</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger onClick={() => handleRoute('/mypage')}>MY PAGE</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}

export default CustomMenu
