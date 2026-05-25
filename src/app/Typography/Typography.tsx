import { DM_Sans, IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type TypographyProps = {
  children: React.ReactNode;
  variant?: "heading" | "paragraph";
  className?: string;
};

export default function Typography({
  children,
  variant = "paragraph",
  className = "",
}: TypographyProps) {
  if (variant === "heading") {
    return (
      <h1
        className={`${ibmPlexMono.className} text-4xl font-bold ${className}`}
      >
        {children}
      </h1>
    );
  }

  return (
    <p
      className={`${dmSans.className}  ${className}`}
    >
      {children}
    </p>
  );
}