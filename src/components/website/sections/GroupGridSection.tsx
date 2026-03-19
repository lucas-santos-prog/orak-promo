"use client";
import { useState } from "react";
import CategoriesFilter from "../controls/CategoriesFilter";
import { groups, getGroupsByCategory } from "@/data/Mock";
import GroupCard from "../cards/GroupCard";
import AdBanner from "../template/AdBanner";

export default function GroupGridSection() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const filteredGroups = getGroupsByCategory(selectedCategory);
  return (
    <section className="py-8 px-4 lg:px-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Filtrar por categoria
              </h2>
              <CategoriesFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {filteredGroups.length} grupo
                {filteredGroups.length !== 1 ? "s" : ""} encontrado
                {filteredGroups.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredGroups.map((group) => (
                <GroupCard key={group.id} group={group} />
              ))}
            </div>

            {filteredGroups.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Nenhum grupo encontrado nesta categoria.
                </p>
              </div>
            )}

            <AdBanner position="inline" className="mt-8" />
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 space-y-6">
            <AdBanner position="sidebar" />

            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="font-semibold text-foreground mb-2">
                ✓ Por que Orak Promo?
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Grupos verificados e confiáveis</li>
                <li>• Ofertas de lojas renomadas</li>
                <li>• Sem spam ou golpes</li>
                <li>• Economia real garantida</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
