import { AppProvider  } from './components/AppContext'

import { getServerSession } from 'next-auth'
import AuthProvider from '@/utils/SessionProvider'

import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/layout/Header'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700', '900'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children}) {

  const session = await getServerSession()

  console.log("la session dans RootLayout = ", session)

  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className='max-w-[1400px] mx-auto min-h-[100vh]'>
          
        
        <AppProvider>
        
          <AuthProvider session={session}>

            
            
            <Header />

            {children}
            
            <footer className="border-t p-8 text-center text-gray-500 ">
            &Copy; 2023@tous les droits réservés
            </footer>

          </AuthProvider>    

        </AppProvider>

        
        </main>

      </body>
    </html>
  )
}
