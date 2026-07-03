import { Playfair_Display, Inter, Tajawal } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
  display: "swap",
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://al-shabandar-clinic.com"),
  title: {
    default: "Al-Shabandar Clinic | Aesthetics, Botox, Filler & Laser",
    template: "%s | Al-Shabandar Clinic",
  },
  description:
    "Al-Shabandar Clinic for Aesthetics, Botox, Filler, and Laser — premium medical spa treatments delivered by certified specialists. Book your appointment today.",
  keywords: [
    "Al-Shabandar Clinic",
    "عيادة الشابندر",
    "Botox",
    "Filler",
    "Laser hair removal",
    "Aesthetics",
    "Medical spa",
    "تجميل",
    "بوتوكس",
    "فلر",
    "ليزر",
  ],
  authors: [{ name: "Al-Shabandar Clinic" }],
  openGraph: {
    title: "Al-Shabandar Clinic for Aesthetics, Botox, Filler & Laser",
    description:
      "Premium medical spa experience. Botox, Fillers, Laser, and Aesthetic care by certified specialists.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_IQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Shabandar Clinic",
    description:
      "Premium aesthetics, botox, filler, and laser treatments by certified specialists.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#C98C33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${tajawal.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}