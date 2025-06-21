const RectangleSVG = ({fillPercentage = 50, width = 35, height = 55, borderSize = 6, color = "black", colorBar }) => {
  const clampedFill = Math.min(100, Math.max(0, fillPercentage));
  // Hauteur du remplissage
  const fillHeight = ((clampedFill / 100) * (height)) ;
  const fillY = height - borderSize - fillHeight;

  return (
    <svg width={width} height={height} className="block">
      {/* Bordure noire */}
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill="none"
        stroke={color}
        strokeWidth={borderSize}
      />

      {/* Remplissage contrôlé */}
      <rect
        x={borderSize/2}
        y={fillY + borderSize/2}
        width={width - borderSize}
        height={fillHeight}
        fill={colorBar}
      />
    </svg>
  );
};

export default RectangleSVG;