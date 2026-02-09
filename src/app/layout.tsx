import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "I LOVE YOU",
    description: "Be my valentine",
    icons: {
        icon: "./heart.svg",
    },

};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="preload" as="image" href="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXA1MWtvc2p5MDE0NHAyaHdvYnQxZHRraDUwbWxoZzl2MmtjczVpbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SqmkZ5IdwzTP2/giphy.gif" />
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}
