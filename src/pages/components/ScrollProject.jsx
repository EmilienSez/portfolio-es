import { useState } from "react";


export default function ScrollProject({imagesArray, lien}) {

  const images = Array.isArray(imagesArray[0]) ? imagesArray[0] : imagesArray;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    e.preventDefault(); // empêche le scroll page par défaut

    if (e.deltaY > 0 && currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
<div
  onWheel={handleScroll}
  className="relative w-full h-full overflow-hidden"
>
  <div
    className="h-full w-full transition-transform duration-500 ease-in-out"
    style={{ transform: `translateY(-${currentIndex * 100}%)` }}
  >
    {images.map((src, index) => (
      <div key={index} className="w-full h-full flex justify-center">
        <div className="w-[90%] h-full grid place-items-center">
          {/* Image en arrière-plan */}
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover row-start-1 col-start-1"
          />

          {/* Bouton centré par-dessus */}
          <a href={lien}
        id="doc-dpe"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#f2f4f5] py-2 px-4 text-black font-oswald-bold uppercase text-xl break-words whitespace-normal
          row-start-1 col-start-1 mt-[45%] ml-[70%] border-2
          hover:bg-[#ffde59] duration-300">
            Voir plus
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}