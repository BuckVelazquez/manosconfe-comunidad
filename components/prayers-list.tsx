import { createClient } from "@/lib/supabase/server"
import { PrayerCard } from "./prayer-card"

interface Prayer {
  id: string
  name: string
  message: string
  created_at: string
}

export async function PrayersList() {
  const supabase = await createClient()
  
  const { data: prayers, error } = await supabase
    .from("prayers")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching prayers:", error)
    return (
      <div className="text-center py-12">
        <p className="text-[rgb(var(--muted-foreground))]">
          No se pudieron cargar las peticiones. Intenta de nuevo más tarde.
        </p>
      </div>
    )
  }

  if (!prayers || prayers.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--primary))]/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(var(--primary))"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
        <p className="text-[rgb(var(--muted-foreground))]">
          Aún no hay peticiones. Sé el primero en compartir.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {(prayers as Prayer[]).map((prayer) => (
        <PrayerCard
          key={prayer.id}
          name={prayer.name}
          message={prayer.message}
          createdAt={prayer.created_at}
        />
      ))}
    </div>
  )
}
