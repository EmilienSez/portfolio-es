import DarkMode from './components/DarkMode';
import BarreMenuAnnexe from './components/BarreMenuAnnexe';
import CartePartenaire from './components/CartePartenaire';
import CartePartenaireTest from './components/CartePartenaireTest';
import paramsData from '../assets/data/params.json'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Partenaire() {

  const type_menu = 'PARTENAIRES';

  const [isDark, setIsDark] = useState(false);

  const annexeMenuInfo = Object.entries(paramsData.main_menu);
  const partenairesData = Object.entries(paramsData.partenaires);

  const couleurPage = paramsData?.main_menu?.partenaires?.Couleur;

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
              onSousMenuClick={(nomSousMenu) => setActiveItem(nomSousMenu)}
            />
          ))}
          <div className="flex flex-col justify-end h-64 items-center">
            <DarkMode
              onThemeChange={setIsDark} />
          </div>
        </div>
        {/* <!-- Carré en haut à droite --> */}
        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] border-3 border-[#1a1a1a] dark:border-white row-span-7 col-span-6">
          <h2 className="font-oswald-bold text-4xl border-b-3 text-[#1a1a1a] text-center p-2 dark:text-white uppercase">LES PARTENAIRES</h2>
          <div className="flex flex-wrap justify-center items-center h-[90%] gap-4">

              {partenairesData.map(([key, value]) => (
                <div key={key} className="basis-1/4 flex justify-center">
                <CartePartenaire
                  nom={value.Nom}
                  logo={value.Logo_src}
                />
                </div>
              ))}
              
          </div>
        </div>
      </div>
    </div>
  )
}