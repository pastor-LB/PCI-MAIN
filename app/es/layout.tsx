import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Español`,
    template: `%s | ${SITE.name}`,
  },
  alternates: {
    canonical: `${SITE.url}/es`,
    languages: {
      en: `${SITE.url}/`,
      "es-MX": `${SITE.url}/es`,
      es: `${SITE.url}/es`,
    },
  },
};

export default function SpanishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="es">
      {children}
    </div>
  );
}
