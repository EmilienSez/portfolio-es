import { useEffect, useState } from 'react';

export default function CarteExperiencePro({ nom, entreprise, type, date_entree, date_sortie, description, logo, taille_logo, clickable, text_button, link, couleur }) {

    return (
        <div className="relative w-full h-full p-2 flex flex-col dark:bg-[#1a1a1a] dark:border-white ">
            {/* Titre centré */}
            <h2 className="text-xl font-oswald-bold text-center uppercase dark:text-white mb-2">{nom}</h2>

            {/* Type + Dates */}
            <p className="text-md font-oswald-normal text-center uppercase dark:text-white mb-4">
                {`${type} | ${date_entree} - ${date_sortie}`}
            </p>

            {/* Logo + Description */}
            <div className="flex gap-4 items-start">
                {/* Logo à gauche */}
                <img src={logo} alt="logo-entreprise" className={`shrink-0 ${taille_logo}`} />

                {/* Description alignée à gauche */}
                <ul className="list-disc pl-4">
                    {description.map((texte, index) => (
                        <li key={index} className="font-oswald-normal text-md dark:text-white mb-1">
                            {texte}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Bouton en bas à droite */}
            {clickable && (
                <div className="absolute bottom-4 right-4">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-oswald-normal text-sm border-2 px-3 py-1 border-[#d8222e] bg-[${couleur}] hover:bg-[#d8222e] transition duration-300 text-white`}
                    >
                        {text_button}
                    </a>
                </div>
            )}

            {/* Flèche de navigation à droite */}
        </div>

    )
}