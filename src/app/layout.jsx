import '@/styles/globals.css'

export const metadata = {
  title: 'Portifolio',
  description: 'Projeto React com src/app/, src/app/api e public'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
