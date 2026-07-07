"use client";

import { useState } from "react";
import { sampleHabitItems } from "@/features/habits/data/sampleHabitItems";
import HabitItem from "@/features/habits/components/HabitItem";

export default function Home() {
  const [checkedHabitIds, setCheckedHabitIds] = useState<string[]>([]);

  function handleCheckedHabitChange(habitId: string, checked: boolean) {
    if (checked) {
      setCheckedHabitIds((currentCheckedIds) => [
        ...currentCheckedIds,
        habitId,
      ]);
    } else {
      setCheckedHabitIds((currentCheckedIds) =>
      currentCheckedIds.filter((id) => id !==habitId)
      );
    }
  }
  return (    
      <main className="min-h-screen p-8">        
        <h1 className="text-3xl font-bold">Healthy Habit Tracker</h1>

        <p className="mt-4 text-gray-600">
          Track daily healthy habit checkboxes by category.
        </p>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Today&apos;s Habits</h2>

        <p className="mt-2 text-gray-600">
          {checkedHabitIds.length} of {sampleHabitItems.length} checked today
        </p>
        <ul className="mt-4 space-y-3">
          {sampleHabitItems.map((habit) => (
            <HabitItem
              key={habit.id}
              habit={habit}
              isChecked={checkedHabitIds.includes(habit.id)}
              onCheckedChange={handleCheckedHabitChange}
              />
          ))}
        </ul>
      </section>

      </main>
  );
}
