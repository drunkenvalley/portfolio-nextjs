import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const noto = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links: Record<string, string> = {
    Home: "/",
    Example: "https://example.com",
    Google: "https://google.com",
    Reddit: "https://reddit.com",
  };
  const arrLinks = Object.entries(links);

  return (
    <html lang="en" className="h-full">
      <body
        className={`${noto.variable} font-noto bg-custom-img bg-cover bg-center bg-no-repeat backdrop-blur-3xl min-h-full flex flex-col`}
      >
        <div className="min-h-full block bg-black/60 grow">
          <nav className="flex flex-row p-8 py-6 gap-8">
            {(arrLinks?.length &&
              arrLinks.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className={`
                    text-blue-100
                    bg-gradient-to-r
                    from-current
                    to-current
                    bg-no-repeat
                    bg-[left_top_100%]
                    bg-[length:1ch_0.25ch]
                    hover:bg-[length:100%_0.1em]
                    focus:bg-[length:100%_0.1em]
                    hover:to-blue-400
                    focus:to-blue-400
                    transition-all
                    duration-300
                    ease-in-out
                    py-2`}
                >
                  {label}
                </Link>
              ))) ||
              undefined}
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
