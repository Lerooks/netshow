import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import { Provider as UIProvider } from "@/presentation/components/ui/provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netshow.me | Transforme seu conteúdo em negócios",
  description:
    "Gerencie, distribua e monetize seus conteúdos, cursos e eventos ao vivo. Tudo com a sua marca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Netshow" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${nunitoSans.variable}`}>
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
