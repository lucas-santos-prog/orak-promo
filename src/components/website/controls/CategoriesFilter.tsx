"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Category, getAllCategories } from "@/data/Mock";
import { useIsMobile } from "@/hooks/use-mobile";
import { Filter } from "lucide-react";
import { useState } from "react";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryButtons = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}) => (
  <div className="flex flex-wrap gap-2">
    <button
      onClick={() => onCategoryChange("todos")}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        selectedCategory === "todos"
          ? "bg-linear-to-r from-neon-orange to-neon-pink text-white shadow-md"
          : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
      }`}
    >
      🔥 Todos
    </button>
    {categories.map((category: Category) => (
      <button
        key={category.id}
        onClick={() => onCategoryChange(category.id)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedCategory === category.id
            ? "bg-linear-to-r from-neon-cyan to-neon-blue text-white shadow-md"
            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
        }`}
      >
        {category.icon} {category.name}
      </button>
    ))}
  </div>
);

export default function CategoriesFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const categories = getAllCategories();
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const selectedLabel =
    selectedCategory === "todos"
      ? "🔥 Todos"
      : (() => {
          const cat = categories.find((c) => c.id === selectedCategory);
          return cat ? `${cat.icon} ${cat.name}` : "Selecionar";
        })();

  if (isMobile) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <div
            role="button"
            tabIndex={0}
            className="inline-flex items-center gap-3 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-foreground transition hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <Filter className="h-4 w-4" />
            {selectedLabel}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-72 p-3" align="start">
          <CategoryButtons
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={(cat) => {
              onCategoryChange(cat);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    );
  }
  return (
    <CategoryButtons
      categories={categories}
      selectedCategory={selectedCategory}
      onCategoryChange={onCategoryChange}
    />
  );
}
