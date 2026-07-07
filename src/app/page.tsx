import { sampleHabitItems } from "@/features/habits/data/sampleHabitItems";
import HabitItem from "@/features/habits/components/HabitItem";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Healthy Habit Tracker
          </h1>

          <p className="mt-4 text-gray-600">
            Track daily healthy habit checkboxes by category.
          </p>
        </div>
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Today&apos;s Habits</h2>
          <ul className="mt-4 space-y-3">
            {sampleHabitItems.map((habit) => (
              <HabitItem
                key={habit.id}
                habit={habit}
                />
            ))}
          </ul>
        </section>

      </main>
    </div>
  );
}
