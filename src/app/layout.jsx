import { Inter, Playfair_Display, Roboto } from "next/font/google";
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

export const metadata = {
  title: 'Luiz Araújo - Portifolio',
  description: 'Desenvolvedor Full-Stack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
