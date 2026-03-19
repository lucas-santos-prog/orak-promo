interface AdBannerProps {
  position: "top" | "sidebar" | "inline";
  className?: string;
}
export default function AdBanner({ position, className = "" }: AdBannerProps) {
  const dimensions = {
    top: "h-24 w-full",
    sidebar: "h-64 w-full",
    inline: "h-20 w-full",
  };
  return (
    <div
      className={`flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/50 text-muted-foreground text-sm ${dimensions[position]} ${className}`}
    >
      <div className="text-center">
        <p className="font-medium">Espaço para Anúncio</p>
        <p className="text-xs">Google Ads - {position}</p>
      </div>
    </div>
  );
}
