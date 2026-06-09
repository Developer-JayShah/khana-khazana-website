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
