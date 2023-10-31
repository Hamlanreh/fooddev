import '@styles/globals.css';
import { Metadata } from "next/types";
import { Providers } from '@context/Providers';

export const metadata : Metadata = {
  title: 'JekaEat | Online restaurant for naija food order and delivery',
  description: 'The home page for jekaeat food delivery system'
};

export default function RootLayout({children} : {children: React.ReactNode})
{
  return (
    <html lang="en">
      <body>        
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}