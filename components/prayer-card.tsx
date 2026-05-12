interface PrayerCardProps {
  name: string
  message: string
  createdAt: string
}

export function PrayerCard({ name, message, createdAt }: PrayerCardProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <article className="rounded-2xl bg-[rgb(var(--card))] p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1 border border-[rgb(var(--border))]">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 2L12 6M12 18L12 22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12L6 12M18 12L22 12M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-lg font-semibold text-[rgb(var(--primary))] truncate">
            {name}
          </h3>
          <p className="mt-2 text-[rgb(var(--foreground))]/90 leading-relaxed text-balance">
            {message}
          </p>
          <time className="mt-4 block text-sm text-[rgb(var(--muted-foreground))]">
            {formattedDate}
          </time>
        </div>
      </div>
    </article>
  )
}
