'use client'
import { Navbar, NavSelect } from "./components";
import "./globals.css";

export default function RootLayout({children} : Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <html lang="en">
            <body>
                <Navbar/>
                <NavSelect/>
                {children}
            </body>
        </html>
    );
}
