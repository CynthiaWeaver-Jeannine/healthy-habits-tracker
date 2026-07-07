export type HabitCategory =
| "foods"
| "hydration"
| "cholesterol"
| "healthy-aging"
| "weight-managemant"
| "exercise"
| "sleep"
| "reading";

export interface HabitItem {
    id: string;
    label: string;
    category: HabitCategory;
}
