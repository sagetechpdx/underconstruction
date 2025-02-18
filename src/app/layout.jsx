import { RootLayout } from '@/components/RootLayout'
import { TopBanner } from '@/components/TopBanner'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Sage Tech',
    default: 'Sage Tech - Portland, OR Computer Repair',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-dark text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
