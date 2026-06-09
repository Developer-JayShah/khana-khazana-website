"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";

const WHATSAPP_NUMBER = "17323669116";

function IconMapPin() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4-4-7-7.5-7-10.5a7 7 0 0 1 14 0c0 3-3 6.5-7 10.5z" />
      <circle cx="12" cy="10.5" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V18a1 1 0 0 1-1 1A17 17 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1L6.6 10.8z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m2 7 10 7 10-7" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" strokeLinecap="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function IconPhoneSmall() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V18a1 1 0 0 1-1 1A17 17 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1L6.6 10.8z" />
    </svg>
  );
}

function IconMailSmall() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m2 7 10 7 10-7" />
    </svg>
  );
}

function IconMessage() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
  );
}

const inputClass =
  "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] py-3 text-sm text-[var(--color-text)] placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-[var(--color-primary)] focus:bg-white focus:ring-[3px] focus:ring-orange-100";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      "Hi! I have a question for Khana Khazana.",
      "",
      `Name: ${form.name}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.email ? `Email: ${form.email}` : null,
      form.message ? `\nMessage: ${form.message}` : null,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank");
  }

  return (
    <>
      {/* Compact hero with dot pattern */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] py-10 sm:py-12">
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        {/* Decorative large icon top-right */}
        <div className="absolute -right-6 -top-6 opacity-10">
          <svg width="180" height="180" fill="none" stroke="white" strokeWidth={1} viewBox="0 0 24 24">
            <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V18a1 1 0 0 1-1 1A17 17 0 0 1 4 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1L6.6 10.8z" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Contact Us
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
            We&apos;d Love to Hear From You
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
            Stop by at {siteConfig.address}, give us a call, or send a message below.
          </p>

          {/* Quick info chips */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-sm transition hover:bg-white/25"
            >
              <IconPhone />
              {siteConfig.phone}
            </a>
            <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <IconClock />
              {siteConfig.hours.display}
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-red-400/30 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-red-300" />
              {siteConfig.hours.note}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-[var(--color-bg)] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* Left — info cards */}
          <div className="space-y-4">

            {/* Contact details card */}
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
              <div className="border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4">
                <h2 className="font-semibold text-[var(--color-text)]">Contact Details</h2>
              </div>
              <div className="divide-y divide-[var(--color-border)]">
                <div className="flex items-start gap-4 px-6 py-4">
                  <span className="mt-0.5 text-[var(--color-primary)]"><IconMapPin /></span>
                  <div>
                    <p className="text-sm text-[var(--color-muted)]">{siteConfig.address}</p>
                    <a
                      href="https://www.google.com/maps?cid=10667964267493057222"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-xs font-semibold text-[var(--color-primary)] hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 px-6 py-4">
                  <span className="text-[var(--color-primary)]"><IconPhone /></span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-center gap-4 px-6 py-4">
                  <span className="text-[var(--color-primary)]"><IconMail /></span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-primary)]"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
              <div className="border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4">
                <h2 className="font-semibold text-[var(--color-text)]">Opening Hours</h2>
              </div>
              <div className="px-6 py-5">
                <div className="flex items-center gap-4">
                  <span className="text-[var(--color-primary)]"><IconClock /></span>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text)]">Tuesday – Sunday</p>
                    <p className="text-sm text-[var(--color-muted)]">11:00 AM – 9:30 PM</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <p className="text-sm font-medium text-red-600">Closed on Mondays</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm">
              <div className="border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-4">
                <h2 className="font-semibold text-[var(--color-text)]">Follow Us</h2>
              </div>
              <div className="flex items-center gap-4 px-6 py-4">
                <a
                  href="https://www.facebook.com/khanakhazanaindianrestaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[var(--color-muted)] transition hover:text-[#1877F2]"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2]/10">
                    <svg className="h-4 w-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="font-medium">Khana Khazana on Facebook</span>
                </a>
              </div>
            </div>

            {/* Catering CTA */}
            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🍽️</span>
                <div>
                  <p className="font-semibold text-[var(--color-text)]">Planning an Event?</p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    For catering inquiries, use our dedicated form — we respond quickly via WhatsApp.
                  </p>
                  <a
                    href="/catering"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline"
                  >
                    Catering Inquiry →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-semibold text-[var(--color-text)]">Send a Message</h2>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Fill in your details — it opens WhatsApp with your message pre-filled.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">

                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                      <IconUser />
                    </span>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Raj Patel"
                      className={`${inputClass} pl-10 pr-4`}
                    />
                  </div>
                </div>

                {/* Phone + Email row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
                      Phone
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                        <IconPhoneSmall />
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="732-000-0000"
                        className={`${inputClass} pl-10 pr-4`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
                      Email
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                        <IconMailSmall />
                      </span>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`${inputClass} pl-10 pr-4`}
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[var(--color-text)]">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3.5 top-3.5 text-gray-400">
                      <IconMessage />
                    </span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className={`${inputClass} resize-none pl-10 pr-4`}
                    />
                  </div>
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

                <p className="text-center text-xs text-gray-400">
                  Opens WhatsApp with your message pre-filled — we reply within a few hours.
                </p>
              </form>
          </div>

        </div>
      </section>
    </>
  );
}
