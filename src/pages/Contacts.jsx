import DarkMode from './components/DarkMode';
import BarreMenuAnnexe from './components/BarreMenuAnnexe';
import ContactForm from './components/ContactForm';
import ContactReseaux from './components/ContactReseaux';
import paramsData from '../assets/data/params.json'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Contacts() {
  
  const type_menu = 'CONTACT';
  const sous_menu = "";

  const [activeItem, setActiveItem] = useState(sous_menu);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // console.log("activeItem a changé :", activeItem);
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
        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] border-3 border-[#1a1a1a] dark:border-white row-span-7 col-span-3">
          <h2 className="font-oswald-bold text-4xl border-b-3 text-[#1a1a1a] text-center p-2 dark:text-white uppercase">MES LIENS</h2>
          <ContactReseaux/>
        </div>


        {/* <!-- Rectangle en dessous du carré --> */}
        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] border-3 border-[#1a1a1a] dark:border-white row-span-7 col-span-3">
          <h2 className="font-oswald-bold text-4xl border-b-3 text-[#1a1a1a] text-center p-2 dark:text-white uppercase flex-col justify-center">ME CONTACTER</h2>
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}