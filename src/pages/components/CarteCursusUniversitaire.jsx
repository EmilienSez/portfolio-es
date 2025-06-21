

export default function CarteCursusUniversitaire({ ecole, diplome, intitule, annee_scolaire, mention, classement,description, clickable, link, couleur }) {

    return (
        <div className="relative w-full h-full  flex flex-col dark:bg-[#1a1a1a] dark:border-white ">
            {/* Titre centré */}
            <h2 className="text-xl font-oswald-bold text-center uppercase dark:text-white mb-2">{annee_scolaire} | {ecole}</h2>

            {/* Type + Dates */}
            <p className="text-md font-oswald-normal text-center uppercase dark:text-white mb-2">
                {`${diplome} - ${intitule}`}
            </p>
              <div className="flex gap-4 items-start ml-7 mr-7">
                <p className="font-oswald-normal text-sm dark:text-white">{description}</p>
            </div>
            {/* Logo + Description */}
            <div className="flex items-center justify-center mt-1 gap-6">
                <p className="font-oswald-normal text-md text-center dark:text-white">{`Mention : ${mention} - Classement : ${classement}`}</p>
                {clickable && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-oswald-normal text-sm border-2 px-3 py-1 border-[#d8222e] bg-[${couleur}] hover:bg-[#d8222e] transition duration-300 text-white inline-block min-w-[2rem] text-center`}
                    >
                        Note
                    </a>
            )}
            </div>
        </div>

    )
}