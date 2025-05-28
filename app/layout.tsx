import { Inter, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const ibmPlex = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.omniansecuritysolutions.com'),
  title: 'Omnian Security Solutions | Cybersecurity & Privacy Consulting',
  description: 'Elite cybersecurity and privacy consulting for DeFi, Automotive, and FinTech industries. Led by former CISOs and CPOs, specializing in blockchain security, V2X, and regulatory compliance.',
  keywords: 'cybersecurity, privacy, CISO, GDPR, SOC 2, compliance, IPO, AI security, DeFi security, blockchain security, smart contract audit, automotive security, V2X security, connected vehicles, fintech security, PCI DSS',
  authors: [{ name: 'Omnian Security Solutions' }],
  openGraph: {
    title: 'Omnian Security Solutions | Cybersecurity & Privacy Consulting',
    description: 'Elite cybersecurity and privacy services for DeFi, Automotive, and FinTech. Secure your future with industry-leading expertise.',
    url: 'https://www.omniansecuritysolutions.com',
    siteName: 'Omnian Security Solutions',
    images: [
      {
        url: '/oss-logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omnian Security Solutions | Cybersecurity & Privacy',
    description: 'Elite cybersecurity and privacy services for DeFi, Automotive, and FinTech. Secure your future with industry-leading expertise.',
    images: ['/oss-logo.png'],
  },
  icons: {
    icon: '/oss-logo.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/oss-logo.ico" />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Omnian Security Solutions",
              "url": "https://www.omniansecuritysolutions.com",
              "logo": "https://www.omniansecuritysolutions.com/oss-logo.png",
              "email": "info@omniansecuritysolutions.com",
              "description": "Elite cybersecurity and privacy consulting for DeFi, Automotive, and FinTech industries. Led by former CISOs and CPOs.",
              "sameAs": [
                "https://www.linkedin.com/company/omnian-security-solutions",
                "https://twitter.com/omniansecurity"
              ],
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "0",
                  "longitude": "0"
                },
                "geoRadius": "40075000"
              },
              "knowsAbout": [
                "Blockchain Security",
                "Smart Contract Auditing",
                "DeFi Security",
                "Automotive Cybersecurity",
                "V2X Security",
                "Connected Vehicle Security",
                "FinTech Security",
                "PCI DSS Compliance",
                "SOC 2 Compliance",
                "GDPR Compliance"
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "DeFi & Blockchain Security",
                    "description": "Comprehensive security audits and consulting for blockchain platforms, smart contracts, and DeFi protocols."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Automotive Security",
                    "description": "End-to-end security solutions for connected vehicles, V2X communications, and automotive IoT ecosystems."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "FinTech Compliance & Security",
                    "description": "Regulatory compliance and security consulting for financial technology companies."
                  }
                }
              ]
            }
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${ibmPlex.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
} 