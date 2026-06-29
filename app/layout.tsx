import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { DemoProvider } from "@/context/DemoContext"
import BookDemoModal from "@/components/BookDemoModal"
import "./globals.css"

export const metadata: Metadata = {
  title: "Enzo Elite Sports | Multi-Sport Academy for Champions",
  description: "Nurturing young champions through elite sports training. Founded by Prashanth M. Professional training in swimming, skating, chess, football, basketball, cricket, music, dance, art, and yoga.",
  keywords: ["Enzo Elite Sports", "Multi-Sport Academy", "Sports Academy Bangalore", "Prashanth M", "Elite Sports Training"],
  openGraph: {
    title: "Enzo Elite Sports",
    description: "Transform your child into a champion. Book a free trial session today.",
    url: "https://enzosports.com",
    siteName: "Enzo Elite Sports",
    locale: "en_IN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "SportsOrganization",
          "name": "Enzo Elite Sports",
          "url": "https://enzosports.com",
          "logo": "https://enzosports.com/logo.png",
          "founder": {
            "@type": "Person",
            "name": "Prashanth M"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Indirapuram",
            "addressLocality": "Ghaziabad",
            "addressRegion": "UP",
            "postalCode": "201014",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-7259582089",
            "contactType": "customer service",
            "email": "enzosportsblr@gmail.com"
          },
          "sameAs": [
            "https://www.facebook.com/enzosports",
            "https://www.instagram.com/enzosports"
          ]
        }
        `}
        </script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <DemoProvider>
          <Header />
          <Suspense fallback={null}>
            <main>{children}</main>
          </Suspense>
          <Footer />
          <Analytics />
          
          {/* Global Modal sits here, listening to the provider */}
          <BookDemoModal />
        </DemoProvider>
      </body>
    </html>
  )
}