import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Swapengines',
    default: 'Swapengines - For all your car part needs.',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-orange-400 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
