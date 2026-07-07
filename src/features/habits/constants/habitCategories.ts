import type { HabitCategory } from "../types";

interface HabitCategoryInfo {
    id: HabitCategory;
    title: string;
}

export const habitCategories: HabitCategoryInfo[] = [
    {
        id: "foods",
        title: "Foods",
    },
    {
        id: "hydration",
        title: "Hydration",
    },
    {
        id: "cholesterol",
        title: "Cholesterol Tweaks",
    },
    {
        id: "healthy-aging",
        title: "Healthy Aging Habits",
    },
    {
        id: "weight-managemant",
        title: "Weight Management Tweaks",
    },
    {
        id: "exercise",
        title: "Exercise",
    },
    {
        id: "sleep",
        title: "Sleep",
    },
    {
        id: "reading",
        title: "Reading",
    },
];
