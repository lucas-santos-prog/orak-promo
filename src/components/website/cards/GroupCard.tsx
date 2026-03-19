import { categories, Group } from "@/data/Mock";
import Link from "next/link";
interface GroupCardProps {
  group: Group;
}
export default function GroupCard({ group }: GroupCardProps) {
  const category = categories.find((c) => c.id === group.category);
  return (
    <Link href={`/grupo/${group.slug}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 hover:-translate-y-1">
        <div className="aspect-video overflow-hidden">
          <img
            src={group.banner}
            alt={group.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              {category?.icon} {category?.name}
            </span>
          </div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {group.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {group.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {group.stores.slice(0, 3).map((store) => (
              <span
                key={store}
                className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {store}
              </span>
            ))}
            {group.stores.length > 3 && (
              <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                +{group.stores.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
