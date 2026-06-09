import Link from "next/link";
import { siteConfig } from "@/data/site";
import Reveal from "@/components/ui/reveal";

export default function ContactLocation() {
  return (
    <section className="bg-[var(--color-bg)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <Reveal>
          <p className="font-body text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-primary)]">
            Visit Us
          </p>
          <h2 className="mt-2 text-4xl font-medium sm:text-5xl">
            Find Us in<br />
            <em>Somerset, NJ</em>
          </h2>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2">

          {/* Info */}
          <Reveal>
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm">
                  <span className="mt-0.5 text-xl">📍</span>
                  <div>
                    <p className="font-body font-semibold text-[var(--color-text)]">Address</p>
                    <p className="font-body mt-1 text-sm text-[var(--color-muted)]">{siteConfig.address}</p>
                    <a
                      href="https://www.google.com/maps?cid=10667964267493057222"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body mt-1.5 inline-block text-xs font-bold text-[var(--color-primary)] hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm">
                    <span className="text-xl">📞</span>
                    <p className="font-body mt-2 font-semibold text-[var(--color-text)]">Phone</p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="font-body mt-1 block text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-sm">
                    <span className="text-xl">🕐</span>
                    <p className="font-body mt-2 font-semibold text-[var(--color-text)]">Hours</p>
                    <p className="font-body mt-1 text-sm text-[var(--color-muted)]">{siteConfig.hours.display}</p>
                    <p className="font-body mt-0.5 text-xs font-medium text-red-500">{siteConfig.hours.note}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-body rounded-lg bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
                >
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="font-body rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  Send a Message
                </Link>
              </div>

              {/* Google Review Card */}
              <a
                href="https://share.google/Ks5NSzQVGvwiaQM0t"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-4 rounded-2xl border border-yellow-200 bg-yellow-50 p-4 transition hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-body text-sm font-bold text-[var(--color-text)]">Enjoyed your visit?</p>
                  <p className="font-body text-xs text-[var(--color-muted)]">Leave us a Google review — it means the world to us!</p>
                </div>
                <div className="text-lg text-yellow-400">★★★★★</div>
              </a>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={150}>
            <div className="h-72 overflow-hidden rounded-3xl border border-[var(--color-border)] shadow-xl shadow-orange-900/10 lg:h-full lg:min-h-[400px]">
              <iframe
                title="Khana Khazana Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0!2d-74.5071875!3d40.5349097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c100431e613f%3A0x940c38fae07be2c6!2sKhana%20Khazana!5e0!3m2!1sen!2sus!4v1780972816356!5m2!1sen!2sus"
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
