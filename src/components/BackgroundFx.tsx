export function BackgroundFx() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-emerald-deep/30 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl animate-blob"
        style={{ animationDelay: "8s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
