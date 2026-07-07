import type { HabitItem as HabitItemType } from "../types";

interface HabitItemProps {
    habit: HabitItemType;
    isChecked: boolean;
    onCheckedChange: (habitId: string, checked: boolean) => void;
}

export default function HabitItem({ 
    habit,
    isChecked,
    onCheckedChange,
 }: HabitItemProps) {
    return (
        <li className="rounded-lg border p-4">
            <label className="flex items-center gap-3">
                <input
                type="checkbox"
                checked={isChecked}
                onChange={(event) => 
                onCheckedChange(habit.id, event.target.checked)
                }
                />
                <span>{habit.label}</span>
            </label>
        </li>
    );
}
