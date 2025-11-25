/**
 * A component that renders a 12x6 grid overlay to help with layout visualization.
 * This is intended for development purposes.
 */
function GridVisualizer() {
  // Create 72 cells for a 12x6 grid
  const cells = Array.from({ length: 12 * 6 });

  return (
    <div
      className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-px pointer-events-none"
      style={{ zIndex: 9999 }}
    >
      {cells.map((_, i) => (
        <div
          key={i}
          className="bg-pink-500/10 border border-pink-500/20 text-pink-700/50 text-xs flex items-center justify-center"
        >
          {/* Optional: You can add labels to the cells if you want */}
          {/* <span className="hidden md:inline">{i + 1}</span> */}
        </div>
      ))}
    </div>
  );
}

export default GridVisualizer;
