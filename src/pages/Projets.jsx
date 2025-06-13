import DarkMode from './components/DarkMode';
import BarreMenuAnnexe from './components/BarreMenuAnnexe';
import CarteCertification from './components/CarteCertification';
import ComposantStackTech from './components/ComposantStackTech';
import paramsData from '../assets/data/params.json'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Projets() {
  
  const type_menu = 'PROJETS';
  const sous_menu = "DATA";

  const [activeItem, setActiveItem] = useState(sous_menu);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    console.log("activeItem a changé :", activeItem);
  }, [activeItem]);

  const annexeMenuInfo = Object.entries(paramsData.main_menu);
  const dataCertification = Object.entries(paramsData.certifications).filter(([key, value]) => value.Sous_menu === activeItem);
  const dataStackTech = Object.entries(paramsData.stack_technique).filter(([key, value]) => value.Sous_menu === activeItem);

  console.log(dataCertification)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-8 grid-rows-7 gap-4 p-10 bg-[#f2f4f5] dark:bg-[#1a1a1a] shadow-lg w-screen h-screen">

        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] border-3 border-[#1a1a1a] dark:border-white row-span-7 col-span-2 flex-col justify-center">
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
            onThemeChange={setIsDark}/>
          </div>
        </div>
        {/* <!-- Carré en haut à droite --> */}
        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] border-3 border-[#1a1a1a] dark:border-white row-span-1 col-span-6 flex-col justify-center">
          <h2 className="font-oswald-bold text-xl text-[#1a1a1a] text-center p-2 dark:text-white uppercase">Développeur FullStack</h2>
          <p>Faire un petit texte qui s'écrit puis désécrit avec 3 valeur possible : Data Analyst / Data Scientist / Développeur</p>
          <p>ici, faire une petite description simple</p>
        </div>


        {/* <!-- Rectangle en dessous du carré --> */}
        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] border-3 border-[#1a1a1a] dark:border-white row-span-6 col-span-6 flex-col justify-center">
          <h2 className="font-oswald-bold text-xl text-[#1a1a1a] text-center p-2 dark:text-white uppercase">Expérience professionnelle</h2>
          <p>Même chose que pour les certification, mais avec des cartes sur allant de gauche à droite</p>
        </div>
      </div>
    </div>
  )
}