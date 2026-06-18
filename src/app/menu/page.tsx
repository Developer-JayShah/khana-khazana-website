"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PageHero from "@/components/ui/page-hero";
import { menuCategories } from "@/data/menu";

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);
  const isSearching = search.trim().length > 0;

  // Highlight active tab as user scrolls
  useEffect(() => {
    if (isSearching) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -75% 0px" }
    );

    menuCategories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isSearching]);

  // Scroll active tab chip into view
  useEffect(() => {
    if (!tabsRef.current || isSearching) return;
    const chip = tabsRef.current.querySelector(`[data-id="${activeId}"]`) as HTMLElement;
    chip?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeId, isSearching]);

  const filtered = isSearching
    ? menuCategories
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.description.toLowerCase().includes(search.toLowerCase())
          ),
        }))
        .filter((cat) => cat.items.length > 0)
    : menuCategories;

  const totalResults = filtered.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="Indian Vegetarian Menu in Somerset, NJ"
        description="From street-food chaats to Punjabi curries, Indo-Chinese, breads, biryanis, and desserts — all 100% vegetarian with Jain and Swaminarayan options available."
      />

      <section className="bg-[var(--color-bg)] pb-20">
        {/* Sticky search + category tabs */}
        <div className="sticky top-16 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)] shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            {/* Search bar */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search dishes, e.g. paneer, biryani, naan..."
                className="w-full rounded-full border border-[var(--color-border)] bg-white py-2 pl-9 pr-20 text-sm outline-none transition focus:border-[var(--color-primary)]"
              />
              {isSearching && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category chips */}
            {!isSearching && (
              <div
                ref={tabsRef}
                className="mt-3 flex gap-2 overflow-x-auto pb-0.5"
                style={{ scrollbarWidth: "none" }}
              >
                {menuCategories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    data-id={cat.id}
                    onClick={() => setActiveId(cat.id)}
                    className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      activeId === cat.id
                        ? "bg-[var(--color-primary)] text-white"
                        : "border border-[var(--color-border)] bg-white text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {cat.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
          {/* Info banners */}
          <div className="mb-8 space-y-3">
            <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
              <span className="mt-0.5 text-green-600">✓</span>
              <p className="text-sm text-green-800">
                <span className="font-semibold">Jain & Swaminarayan options available</span> — ask
                your server for suitable substitutions on any dish.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3">
              <span className="mt-0.5 text-purple-600">✓</span>
              <p className="text-sm text-purple-800">
                <span className="font-semibold">No Onion & No Garlic options available</span> — let
                your server know and we'll prepare your dish without onion and garlic on request.
              </p>
            </div>
          </div>

          {/* Search result count */}
          {isSearching && (
            <p className="mb-6 text-sm text-[var(--color-muted)]">
              {totalResults === 0
                ? "No items found"
                : `${totalResults} ${totalResults === 1 ? "item" : "items"} for "${search}"`}
            </p>
          )}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-[var(--color-border)] bg-white p-12 text-center">
              <p className="text-base font-semibold text-[var(--color-text)]">No dishes found</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">Try a different keyword</p>
              <button
                onClick={() => setSearch("")}
                className="mt-4 text-sm font-medium text-[var(--color-primary)] underline"
              >
                Clear search
              </button>
            </div>
          )}

          {/* Menu sections */}
          <div className="space-y-14">
            {filtered.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-48">
                {/* Category header */}
                <div className="mb-5 flex items-end justify-between border-b border-[var(--color-border)] pb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
                      {category.name}
                    </h2>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">{category.subtitle}</p>
                  </div>
                  <span className="ml-4 shrink-0 text-xs text-[var(--color-muted)]">
                    {category.items.length} items
                  </span>
                </div>

                {/* Item cards */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group rounded-xl border border-[var(--color-border)] bg-white p-4 transition-all hover:border-[var(--color-primary)] hover:shadow-md"
                    >
                      {item.chefRecommended && (
                        <span className="mb-2 inline-flex items-center gap-1 rounded-full border border-orange-300 bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-700">
                          👨‍🍳 Chef's Recommendation
                        </span>
                      )}
                      {item.popular && !item.chefRecommended && (
                        <span className="mb-2 inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                          ★ Popular
                        </span>
                      )}
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-semibold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                          {item.name}
                        </h3>
                        <span className="shrink-0 rounded-full bg-orange-50 px-3 py-0.5 text-sm font-bold text-[var(--color-primary)]">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-5 text-[var(--color-muted)]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Catering CTA */}
          {!isSearching && (
            <div className="mt-16 rounded-3xl bg-[var(--color-primary)] p-8 text-center text-white shadow-sm">
              <h3 className="text-2xl font-semibold">Planning catering for your next event?</h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/85">
                We provide vegetarian catering for birthdays, weddings, baby showers, corporate
                events, religious events, and family gatherings.
              </p>
              <Link
                href="/catering"
                className="mt-6 inline-block rounded-md bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore Catering
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
