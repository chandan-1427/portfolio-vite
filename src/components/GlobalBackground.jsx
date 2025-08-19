export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Base background - static for stability */}
      <div className="absolute inset-0 bg-[var(--neon-black)]" />

      {/* Primary animated glow – left/top, now the sole glowing color */}
      <div
        className="
          absolute inset-0 opacity-80 animate-pulse-slow-visible
          bg-[radial-gradient(80rem_50rem_at_15%_10%,var(--neon-violet)_0%,rgba(176,38,255,0)_80%)]
        "
      />

      {/* Secondary animated glow – right/top, now also violet */}
      <div
        className="
          absolute inset-0 opacity-70 animate-pulse-slow-delay-visible
          bg-[radial-gradient(75rem_45rem_at_85%_12%,var(--neon-violet)_0%,rgba(176,38,255,0)_80%)]
        "
      />

      {/* Central shimmer - now a more concentrated violet focal point */}
      <div
        className="
          absolute inset-0 opacity-60 animate-shimmer-visible
          bg-[radial-gradient(60rem_40rem_at_50%_8%,var(--neon-violet)_0%,rgba(176,38,255,0)_75%)]
        "
      />

      {/* Deeper glow - bottom/center, using the same violet for consistency */}
      <div
        className="
          absolute inset-0 opacity-70 animate-pulse-slow-visible
          bg-[radial-gradient(90rem_60rem_at_50%_105%,var(--neon-violet)_0%,rgba(176,38,255,0)_85%)]
        "
      />

      {/* Animated Rings - all now a consistent violet */}
      <div
        className="
          pointer-events-none absolute inset-0
          flex items-center justify-center
        "
      >
        {/* Ring 1 */}
        <div className="
          absolute w-[180vmin] h-[180vmin] rounded-full border-[3px] border-[var(--neon-violet)] opacity-30
          animate-ring-pulse-visible
        " />
        {/* Ring 2 */}
        <div className="
          absolute w-[120vmin] h-[120vmin] rounded-full border-[3px] border-[var(--neon-violet)] opacity-25
          animate-ring-pulse-visible-2
        " />
        {/* Ring 3 */}
        <div className="
          absolute w-[60vmin] h-[60vmin] rounded-full border-[3px] border-[var(--neon-violet)] opacity-20
          animate-ring-pulse-visible-3
        " />
      </div>

    </div>
  );
}
