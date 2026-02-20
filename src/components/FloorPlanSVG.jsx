/**
 * FloorPlanSVG
 * Renders a simple schematic SVG based on the plan config id.
 */
export default function FloorPlanSVG({ planId }) {
  const paths = {
    "3bhk": (
      <>
        <rect x="10" y="30" width="60" height="40" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="10" y="10" width="30" height="20" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="42" y="10" width="28" height="20" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="30" y="50" width="20" height="20" stroke="#8A8680" strokeWidth="2" fill="none" />
        <line x1="10" y1="50" x2="30" y2="50" stroke="#8A8680" strokeWidth="1.5" />
        <line x1="50" y1="50" x2="70" y2="50" stroke="#8A8680" strokeWidth="1.5" />
      </>
    ),
    "3bhkplus": (
      <>
        <rect x="8"  y="28" width="64" height="44" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="8"  y="8"  width="20" height="20" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="30" y="8"  width="22" height="20" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="54" y="8"  width="18" height="20" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="28" y="48" width="24" height="24" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="8"  y="48" width="18" height="12" stroke="#8A8680" strokeWidth="1.5" fill="none" />
      </>
    ),
    "4bhk": (
      <>
        <rect x="6"  y="26" width="68" height="46" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="6"  y="6"  width="16" height="20" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="24" y="6"  width="16" height="20" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="42" y="6"  width="16" height="20" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="60" y="6"  width="14" height="20" stroke="#8A8680" strokeWidth="2" fill="none" />
        <rect x="22" y="46" width="36" height="26" stroke="#8A8680" strokeWidth="2" fill="none" />
      </>
    ),
  };

  return (
    <svg width="80" height="80" viewBox="0 0 80 80" aria-label="Floor plan schematic">
      {paths[planId] ?? null}
    </svg>
  );
}
