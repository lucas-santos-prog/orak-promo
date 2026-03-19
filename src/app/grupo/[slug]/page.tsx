"use client";
import { Button } from "@/components/ui/button";
import AdBanner from "@/components/website/template/AdBanner";
import { categories, getGroupBySlug } from "@/data/Mock";
import { ArrowLeft, Instagram, MessageCircle, Store } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function PageGroup() {
  const { slug } = useParams<{ slug: string }>();
  const group = getGroupBySlug(slug || "");
  if (!group) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Grupo não encontrado
        </h1>
        <p className="text-muted-foreground mb-4">
          O grupo que você procura não existe ou foi removido.
        </p>
        <Link href="/">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Home
          </Button>
        </Link>
      </div>
    );
  }
  const category = categories.find((c) => c.id === group.category);
  return (
    <>
      <main className="px-4 lg:px-24 flex-1">
        {/* Banner */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={group.banner}
            alt={group.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="container">
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar para grupos
              </Link>

              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary">
                  {category?.icon} {category?.name}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {group.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="flex-1 space-y-6">
                {/* Description */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-3">
                    Sobre o Grupo
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Stores */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Store className="h-5 w-5 text-primary" />
                    Lojas Parceiras
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {group.stores.map((store) => (
                      <span
                        key={store}
                        className="rounded-lg bg-muted px-4 py-2 text-sm font-medium text-foreground"
                      >
                        {store}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Entre no Grupo
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={group.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Entrar no WhatsApp
                      </Button>
                    </a>
                    <a
                      href={group.instagramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full border-pink-500 text-pink-500 hover:bg-pink-500/10"
                      >
                        <Instagram className="mr-2 h-5 w-5" />
                        Seguir no Instagram
                      </Button>
                    </a>
                  </div>
                </div>

                <AdBanner position="inline" />
              </div>

              {/* Sidebar */}
              <aside className="lg:w-72 space-y-6">
                <AdBanner position="sidebar" />

                <div className="rounded-xl border border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground mb-2">
                    ✓ Grupo Verificado
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Este grupo foi verificado pela equipe Orak Promo e trabalha
                    apenas com fornecedores confiáveis.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
