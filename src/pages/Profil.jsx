import DarkMode from './components/DarkMode';
import BarreMenuAnnexe from './components/BarreMenuAnnexe';
import CarteCertification from './components/CarteCertification';
import ComposantStackTech from './components/ComposantStackTech';
import CarteExperiencePro from './components/CarteExperiencePro';
import paramsData from '../assets/data/params.json'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Profil() {

  const type_menu = 'PROFIL';
  const sous_menu = "LANGUAGES";

  const [activeItem, setActiveItem] = useState(sous_menu);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    // console.log("activeItem a changé :", activeItem);
  }, [activeItem]);

  const annexeMenuInfo = Object.entries(paramsData.main_menu);
  const dataCertification = Object.entries(paramsData.certifications).filter(([key, value]) => value.Sous_menu === activeItem);
  const dataStackTech = Object.entries(paramsData.stack_technique).filter(([key, value]) => value.Sous_menu === activeItem);
  const dataExperiencePro = Object.entries(paramsData.experience_pro);
  const couleurPage = paramsData?.main_menu?.profil?.Couleur;

  // console.log(dataCertification)

  // Gestion des Expériences Pro : 
  const [page, setPage] = useState(0);
  const experienceProActuelle = dataExperiencePro[page][1];
  console.log(experienceProActuelle);
  const hasNextPage = page < dataExperiencePro.length;
  const hasPrevPage = page > 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-8 grid-rows-3 gap-4 p-10 bg-[#f2f4f5] dark:bg-[#1a1a1a] shadow-lg w-screen h-screen">

        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] border-3 border-[#1a1a1a] dark:border-white row-span-3 col-span-2 flex-col justify-center">
          <Link to="/portfolio-es/">
            <p className="font-oswald-bold text-center text-4xl mt-20 mb-8 dark:text-white tracking-wider"> MON PORTOFOLIO </p>
          </Link>
          {annexeMenuInfo.map(([key, value]) => (
            <BarreMenuAnnexe
              key={key}
              nom={value.Nom}
              couleur={value.Couleur}
              link={value.Lien}
              type_menu={type_menu}
              activeItem={activeItem}
              onSousMenuClick={(nomSousMenu) => setActiveItem(nomSousMenu)}
            />
          ))}
          <div className="flex flex-col justify-end h-64 items-center">
            <DarkMode
              onThemeChange={setIsDark} />
          </div>
        </div>
        {/* <!-- Carré en haut à droite --> */}
        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] border-3 border-[#1a1a1a] dark:border-white row-span-1 col-span-2 flex-col justify-center">
          <h2 className="font-oswald-bold text-xl text-[#1a1a1a] text-center p-2 dark:text-white uppercase">Développeur FullStack</h2>
          <p>Faire un petit texte qui s'écrit puis désécrit avec 3 valeur possible : Data Analyst / Data Scientist / Développeur</p>
          <p>ici, faire une petite description simple</p>
        </div>


        {/* <!-- Rectangle en dessous du carré --> */}
        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] border-3 border-[#1a1a1a] dark:border-white row-span-1 col-span-4 flex-col justify-center">
          <div className="relative w-full h-full p-2 flex flex-col dark:bg-[#1a1a1a] dark:border-white ">
            {hasPrevPage && (
              <button onClick={() => setPage(page - 1)} className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer">
              <img src="media/images/arrow-left.png" alt="Next" className="w-8 h-8" />
            </button>
            )}
            <CarteExperiencePro
              nom={experienceProActuelle.Nom}
              entreprise={experienceProActuelle.Entreprise}
              type={experienceProActuelle.type}
              date_entree={experienceProActuelle.Date_entree}
              date_sortie={experienceProActuelle.Date_sortie}
              description={experienceProActuelle.Description}
              logo={experienceProActuelle.logo}
              taille_logo={experienceProActuelle.classe_taille_logo}
              clickable={experienceProActuelle.clickable}
              text_button={experienceProActuelle.text_button}
              link={experienceProActuelle.link}
              couleur={couleurPage}
            />
            {hasNextPage && (
              <button onClick={() => setPage(page + 1)} className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer">
              <img src="media/images/arrow-right.png" alt="Next" className="w-8 h-8" />
            </button>
            )}
          </div>
        </div>

        {/* <!-- Rectangle long à droite du carré --> */}
        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] border-3 border-[#1a1a1a] dark:border-white row-span-2 col-span-2 flex-col justify-center">
          <div className="h-full max-w-lg overflow-y-auto">
            <h1 className="font-oswald-bold text-xl text-[#1a1a1a] text-center p-2 border-b-3 dark:border-white dark:text-white">CERTIFICATIONS</h1>
            <ul className="mt-2">

              {dataCertification.map(([key, value]) => (
                <CarteCertification
                  key={key}
                  sous_menu={activeItem}
                  nom={value.Nom}
                  couleur_basse={value.Couleur_basse}
                  couleur_haute={value.Couleur_haute}
                  image_src={value.Image_src}
                  description={value.Description}
                  lien_certification={value.lien_certification}
                  pourcentage_progression={value.pourcentage_progression}
                />
              ))}
            </ul>
          </div>

        </div>

        {/* <!-- Grand rectangle final --> */}
        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] font-oswald-700 border-3 border-[#1a1a1a] dark:border-white row-span-2 col-span-4 flex-col justify-center">
          <h2 className="font-oswald-bold text-xl text-[#1a1a1a] text-center p-2 border-b-3 dark:text-white">STACK TECHNIQUE - {activeItem}</h2>
          <div className="flex flex-row flex-col justify-between gap-2 items-center space-x-6 overflow-x-auto mt-2 ml-4 mr-4">
            {dataStackTech.map(([key, value]) => (
              <ComposantStackTech
                key={key}
                sous_menu={value.Sous_menu}
                nom={value.Nom}
                logo_src={value.Logo_src}
                note={value.Note}
                rounded={value.rounded}
                color={isDark ? "#f2f4f5" : "#1a1a1a"}
                colorBar={couleurPage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}