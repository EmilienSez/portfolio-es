import { useEffect, useRef, useState } from "react";

export default function CartePartenaireTest({ nom, logo }) {
  const imageRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = imageRef.current;
    if (img && img.complete) {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    } else if (img) {
      img.onload = () => {
        setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      };
    }
  }, []);

  return (
    <div
      className={`border p-4 ${
        dimensions.width > 500 ? "bg-green-100" : "bg-red-100"
      }`}
    >
      <p>Dimensions: {dimensions.width/90} x {dimensions.height/90}</p>
      <img
        ref={imageRef}
        src={logo}
        alt="Mon image"
        className={`w-${Math.round(dimensions.width/70)} h-${Math.round(dimensions.height/70)}`}
      />
    </div>
  );
}
