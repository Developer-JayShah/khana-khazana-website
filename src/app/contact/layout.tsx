import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Khana Khazana in Somerset, NJ. Call us, send a message, or visit us at 1760 Easton Ave. For catering inquiries, use our catering page.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Khana Khazana | Somerset, NJ",
    description: "Get in touch with Khana Khazana — phone, email, or send a message directly.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
