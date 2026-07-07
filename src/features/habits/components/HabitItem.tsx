"use client";
import { useState } from "react";
import type { HabitItem as HabitItemType } from "../types";

interface HabitItemProps {
    habit: HabitItemType;
}

export default function HabitItem({ habit }: HabitItemProps) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <li className="rounded-lg border p-4">
            <label className="flex items-center gap-3">
                <input
                type="checkbox"
                checked={isChecked}
                onChange={(event) => setIsChecked(event.target.checked)}
                />
                <span>{habit.label}</span>
            </label>
        </li>
    );
}
