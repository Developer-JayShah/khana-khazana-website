import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering",
  description:
    "Vegetarian Indian catering in Somerset, NJ for weddings, birthdays, corporate events, religious functions, and all occasions. Inquire via WhatsApp.",
  alternates: { canonical: "/catering" },
  openGraph: {
    title: "Indian Vegetarian Catering | Khana Khazana",
    description: "Catering for weddings, birthdays, corporate events, and religious functions in NJ. Gujarati, Punjabi, and Indo-Chinese options.",
    url: "/catering",
  },
};

export default function CateringLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
