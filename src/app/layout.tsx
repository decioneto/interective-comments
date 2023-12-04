import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${rubik.className} bg-very-light h-screen w-full`}
            >
                {children}
            </body>
        </html>
    )
}
