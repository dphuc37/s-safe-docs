export function NavIcon({ name }: { name?: string }) {
  if (!name) return <span className="ssafe-nav-dot" aria-hidden />;
  return (
    <img
      className="ssafe-nav-icon"
      src={`/img/icons/${name}.webp`}
      alt=""
      width={22}
      height={22}
      aria-hidden
    />
  );
}
