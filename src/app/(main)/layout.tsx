import '@/app/globals.css'
import CustomMenu from '@/components/composite/customMenu'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative p-4">
      <CustomMenu />
      {children}
    </div>
  )
}
