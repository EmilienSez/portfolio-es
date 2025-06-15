export default function CarteExperiencePro({ nom, entreprise, type, date_entree, date_sortie, description, logo, taille_logo, clickable, text_button, link, couleur }) {
    const phrases = description;
    const phraseCounts = phrases.reduce((acc, phrase) => {
        acc[phrase] = (acc[phrase] || 0) + 1;
        return acc;
    }, {});
    console.log(phraseCounts);
    return (
        <div>
            <img src="media/images/arrow-right.png" alt="" className="w-8 h-8"/>
            <p className="font-oswald-bold text-xl uppercase text-center dark:text-white">{nom}</p>
            <p className="font-oswald-normal text-xl uppercase text-center dark:text-white">{`${type} | ${date_entree} - ${date_sortie}`}</p>
            {clickable &&
                <a href={link}
                    id="doc-dpe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-oswald-normal text-lg text-center border-2 p-1 border-[#d8222e] bg-[${couleur}] hover:bg-[#d8222e] 
                    transition duration-300`}>{text_button}</a>
            }
            <ul>
                {description.map((texte,index) => (
                    <li key={index} className="font-oswald-normal text-md dark:text-white p-1">
                        {texte}
                    </li>
                ))}
            </ul>
            <img src={logo} alt="logo-entreprise" className={taille_logo} />
            <img src="/media/images/arrow-left.png" alt="" />
        </div>
    )
}