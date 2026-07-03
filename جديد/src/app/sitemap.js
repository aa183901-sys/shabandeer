export default function sitemap() {
  const base = "https://al-shabandar-clinic.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];
}