export default function manifest() {
  return {
    name: "Al-Shabandar Clinic for Aesthetics, Botox, Filler & Laser",
    short_name: "Al-Shabandar Clinic",
    description:
      "Premium medical spa — Botox, Fillers, Laser, and Aesthetic care by certified specialists.",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFBFA",
    theme_color: "#C98C33",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}