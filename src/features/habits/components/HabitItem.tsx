import type { HabitItem as HabitItemType } from "../types";

interface HabitItemProps {
    habit: HabitItemType;
}

export default function HabitItem({ habit }: HabitItemProps) {
    return (
        <li className="rounded-lg border p-4">
            <label className="flex items-center gap-3">
                <input type="checkbox" />
                <span>{habit.label}</span>
            </label>
        </li>
    );
}
