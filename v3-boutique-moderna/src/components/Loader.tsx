// Ecrã de carregamento moderno — CSS puro, auto-dispensável (sem depender de JS).
// Em prefers-reduced-motion não aparece.
export default function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__inner">
        <span className="loader__ring" />
        <span className="loader__name">
          Nuno Neves <em>Antiquorum</em>
        </span>
        <span className="loader__bar" />
      </div>
    </div>
  );
}
