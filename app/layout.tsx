// import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/styles/scss/freelancer.scss'
import "@/styles/scss/subset.scss";
import "@/styles/css/fontawesome.min.css";
import "@/styles/css/light.min.css";
import "@/styles/css/brands.min.css";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beach Slam",
  description: "The greatest beach volleyball tournament in the world",
  viewport: "width=device-width, initial-scale=1 shrink-to-fit=no",
  openGraph: {
    title: "Beach Slam",
    description: "The greatest beach volleyball tournament in the world",
    type: "website",
    locale: "en_US",
    url: "https://beachslam.ca",
    images: [
      {
        url: "https://beachslam.ca/img/full.jpg",
        width: 800,
        height: 600,
        alt: "Beach Slam logo",
      },
    ],
    videos: [
      {
        url: "https://beachslam.ca/img/moshed-banner.mp4",
        width: 800,
        height: 600,
        type: "video/mp4",
      },
    ],
    audio: "https://beachslam.ca/audio/its-in-the-game.mp3",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
