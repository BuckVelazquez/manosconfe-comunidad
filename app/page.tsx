import { Suspense } from "react"
import { PrayersList } from "@/components/prayers-list"

function PrayersLoading() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="rounded-2xl bg-[rgb(var(--card))] p-6 animate-pulse border border-[rgb(var(--border))]"
        >
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-[rgb(var(--muted))]" />
            <div className="flex-1 space-y-3">
              <div className="h-5 w-24 rounded bg-[rgb(var(--muted))]" />
              <div className="h-4 w-full rounded bg-[rgb(var(--muted))]" />
              <div className="h-4 w-3/4 rounded bg-[rgb(var(--muted))]" />
              <div className="h-3 w-20 rounded bg-[rgb(var(--muted))]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ComunidadDeFePage() {
  return (
    <main className="min-h-screen">
      {/* Decorative gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[rgb(var(--primary))]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[rgb(var(--primary))]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[rgb(var(--primary))]/10 ring-1 ring-[rgb(var(--primary))]/20">
            <span className="text-4xl" role="img" aria-label="Manos en oración">
              🙏
            </span>
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[rgb(var(--foreground))] sm:text-5xl lg:text-6xl text-balance">
            Comunidad de{" "}
            <span className="text-[rgb(var(--primary))]">Fe</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[rgb(var(--muted-foreground))] leading-relaxed text-pretty">
            Comparte tu petición y acompaña a otros con esperanza.
          </p>
          <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[rgb(var(--primary))]/50 to-transparent" />
        </header>

        {/* Prayers Grid */}
        <section aria-label="Lista de peticiones de oración">
          <Suspense fallback={<PrayersLoading />}>
            <PrayersList />
          </Suspense>
        </section>
      </div>
    </main>
  )
}
