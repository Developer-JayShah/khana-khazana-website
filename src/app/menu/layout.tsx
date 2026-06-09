import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse Khana Khazana's full Indian vegetarian menu — chaats, Gujarati snacks, Punjabi curries, Indo-Chinese, breads, biryanis, drinks, and desserts in Somerset, NJ.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Menu | Khana Khazana – Indian Vegetarian Restaurant Somerset NJ",
    description: "Full menu with 100+ items — snacks, curries, biryanis, breads, drinks, and more. Jain and Swaminarayan options available.",
    url: "/menu",
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
