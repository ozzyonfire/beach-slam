// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/styles/scss/freelancer.scss'
import '@/styles/scss/subset.scss'
import '@/styles/css/fontawesome.min.css';
import '@/styles/css/light.min.css';
import '@/styles/css/brands.min.css';
import './globals.css'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Beach Slam',
  description: 'The greatest beach volleyball tournament in the world',
  viewport: 'width=device-width, initial-scale=1 shrink-to-fit=no',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
