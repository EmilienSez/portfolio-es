import { useEffect, useRef, useState } from "react";

export default function CartePartenaire({ nom, logo }) {
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

  const ratio = dimensions.width / dimensions.height;
  let widthClass = "w-32";
  let heightClass = "h-32";

  if (ratio > 2 && ratio < 3) {
    // Image très large
    widthClass = "w-64";
    heightClass = "h-24";
  } else if (ratio < 0.5) {
    // Image très haute
    widthClass = "w-24";
    heightClass = "h-64";
  } else if (ratio > 5 && ratio < 6) {
    // Image très haute
    widthClass = "w-72";
    heightClass = "h-12";
  } else {
    // Image relativement carrée ou équilibrée
    widthClass = "w-40";
    heightClass = "h-40";
  }
  // console.log(ratio);
  return (
    <div className="">
    <img
      ref={imageRef}
      src={logo}
      alt="Mon image"
      className={`${widthClass} ${heightClass}`}
    />
    </div>
  )
}