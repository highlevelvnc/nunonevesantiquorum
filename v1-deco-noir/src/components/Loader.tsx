// Cortina de entrada Art Déco — CSS puro, auto-dispensável (sem depender de JS),
// para nunca prender a página. Em prefers-reduced-motion não aparece.
export default function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__inner">
        <span className="loader__rule loader__rule--top" />
        <span className="loader__name">Nuno Neves</span>
        <span className="loader__sub">Antiquorum</span>
        <span className="loader__rule loader__rule--bottom" />
        <span className="loader__bar" />
      </div>
    </div>
  );
}
