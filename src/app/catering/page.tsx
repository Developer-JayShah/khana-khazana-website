"use client";

import { useState } from "react";
import PageHero from "@/components/ui/page-hero";

const events = ["Weddings", "Birthdays", "Baby Showers", "Corporate Events", "Religious Functions", "Housewarming", "Family Gatherings", "Navratri / Vrat Fasting"];
const liveCounters = ["Dosa", "Chaat", "Pav Bhaji", "Pakoda"];
const WHATSAPP_NUMBER = "17323669116";

const inputClass =
  "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] py-3 px-4 text-sm text-[var(--color-text)] placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-[var(--color-primary)] focus:bg-white focus:ring-[3px] focus:ring-orange-100";

export default function CateringPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", eventType: "", eventDate: "", guestCount: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      "Hi! I'd like to inquire about catering at Khana Khazana.",
      "",
      `Name: ${form.name}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.email ? `Email: ${form.email}` : null,
      form.eventType ? `Event Type: ${form.eventType}` : null,
      form.eventDate ? `Event Date: ${form.eventDate}` : null,
      form.guestCount ? `Guest Count: ${form.guestCount}` : null,
      form.message ? `\nDetails: ${form.message}` : null,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank");
  }

  return (
    <>
      <PageHero
        eyebrow="Catering"
        title="Vegetarian Catering for All Occasions"
        description="Khana Khazana caters weddings, religious events, corporate gatherings, birthdays, Navratri fasting, and family celebrations — with Jain and live counter options."
      />

      {/* Catering Menu Section */}
      <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-5">
            <div>
              <p className="font-body text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">Our Menu</p>
              <h2 className="mt-2 text-3xl font-medium">View Our Catering Menu</h2>
              <p className="font-body mt-3 max-w-xl text-sm leading-6 text-[var(--color-muted)]">
                Browse our full catering menu with dishes, tray options, and pricing. Download a copy to share with your family or event planner.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/catering-menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90 hover:scale-[1.01]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Menu
              </a>
              <a
                href="/catering-menu.pdf"
                download="KhanaKhazana_CateringMenu.pdf"
                className="font-body inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-bold text-[var(--color-text)] shadow-sm transition hover:bg-[var(--color-surface)] hover:scale-[1.01]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">

            {/* Info column */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-medium">Events We Cater</h2>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {events.map((event) => (
                    <span key={event} className="font-body rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-1.5 text-sm font-medium text-[var(--color-text)]">
                      {event}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
                <h3 className="text-xl font-medium">Food Options</h3>
                <p className="font-body mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  We offer Gujarati, Punjabi, Indo-Chinese, street food, snacks, sweets, and
                  Jain or Swaminarayan options on request. We also provide special fasting
                  (vrat) menus for Navratri, Ekadashi, and other fasting occasions —
                  prepared with sendha namak, no onion-garlic, and vrat (fasting)-friendly ingredients.
                </p>
                <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3">
                  <span className="mt-0.5 text-purple-600 text-sm">✓</span>
                  <p className="font-body text-sm text-purple-800">
                    <span className="font-semibold">No Onion & No Garlic catering available</span> — we prepare complete catering menus without onion and garlic on request, perfect for religious functions and personal preferences.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm">
                <h3 className="text-xl font-medium">Live Counters Available</h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {liveCounters.map((item) => (
                    <span key={item} className="font-body rounded-full bg-[var(--color-bg)] px-4 py-1.5 text-sm font-semibold text-[var(--color-primary)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-xl">💬</span>
                  <div>
                    <p className="font-body font-semibold text-green-800">We respond via WhatsApp</p>
                    <p className="font-body mt-1 text-sm text-green-700">
                      Fill the form and tap Send — it opens WhatsApp with your details pre-filled.
                      We&apos;ll confirm and follow up from there.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-medium">Catering Inquiry</h2>
              <p className="font-body mt-1.5 text-sm text-[var(--color-muted)]">
                Tell us about your event — we&apos;ll connect on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">

                <div>
                  <label className="font-body mb-1.5 block text-sm font-medium text-[var(--color-text)]">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input name="name" type="text" value={form.name} onChange={handleChange} required placeholder="e.g. Raj Patel" className={inputClass} />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="font-body mb-1.5 block text-sm font-medium text-[var(--color-text)]">Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="732-000-0000" className={inputClass} />
                  </div>
                  <div>
                    <label className="font-body mb-1.5 block text-sm font-medium text-[var(--color-text)]">Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="font-body mb-1.5 block text-sm font-medium text-[var(--color-text)]">Event Type</label>
                  <select name="eventType" value={form.eventType} onChange={handleChange} className={`${inputClass} text-[var(--color-muted)]`}>
                    <option value="">Select event type</option>
                    {events.map((e) => <option key={e} value={e}>{e}</option>)}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="font-body mb-1.5 block text-sm font-medium text-[var(--color-text)]">Event Date</label>
                    <input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} className={`${inputClass} text-[var(--color-muted)]`} />
                  </div>
                  <div>
                    <label className="font-body mb-1.5 block text-sm font-medium text-[var(--color-text)]">Guest Count</label>
                    <input name="guestCount" type="number" min="1" value={form.guestCount} onChange={handleChange} placeholder="e.g. 50" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="font-body mb-1.5 block text-sm font-medium text-[var(--color-text)]">Special Requests</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Menu preferences, dietary needs, live counter requests..." className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  className="font-body flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1ebe5d] hover:scale-[1.01]"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>

                <p className="font-body text-center text-xs text-[var(--color-muted)]">
                  Opens WhatsApp with your details — we reply within a few hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
