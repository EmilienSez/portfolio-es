import DarkMode from './components/DarkMode';
import BarreMenuAnnexe from './components/BarreMenuAnnexe';
import BoutonProjet from './components/BoutonProjet';
import ScrollProject from './components/ScrollProject';
import paramsData from '../assets/data/params.json'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Projets() {

  const type_menu = 'PROJETS';
  const sous_menu = "DATA";
  const ITEMS_PER_PAGE = 5;

  const [activeItem, setActiveItem] = useState(sous_menu);
  const [activeProject, setActiveProject] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    // console.log("activeItem a changé :", activeItem);
    // console.log(couleurPage);
    setPage(0);
  }, [activeItem]);

  useEffect(() => {
    // console.log("activeItem a changé :", );
  }, [activeProject]);

  const annexeMenuInfo = Object.entries(paramsData.main_menu);
  const dataProjet = Object.entries(paramsData.projets).filter(([key, value]) => value.Sous_menu === activeItem);
  const dataProjetactif = dataProjet.filter(([key, value]) => value.Nom === activeProject);

  const couleurPage = paramsData?.main_menu?.projects?.Couleur;

  // const start = page * ITEMS_PER_PAGE;
  const start = page;
  const end = start + ITEMS_PER_PAGE;
  const paginatedData = dataProjet.slice(start, end);
  const hasNextPage = end < dataProjet.length;
  const hasPrevPage = start > 0;

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
              onThemeChange={setIsDark} />
          </div>
        </div>
        {/* <!-- Carré en haut à droite --> */}
        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] border-3 border-[#1a1a1a] dark:border-white row-span-1 col-span-6">
          <div className="flex items-center h-full">
            {hasPrevPage && (
              <div className={`flex items-center border-r-3 h-full hover:bg-[${couleurPage}] duration-300`}>
                <button onClick={() => setPage(page - 1)} className="cursor-pointer">
                  <img src="media/images/arrow-left.png" alt="" className='w-5 h-5' />
                </button>
              </div>
            )}
            <div className="flex items-center h-full w-full">
              {paginatedData.map(([key, value], index) => (

                <button
                  onClick={() => setActiveProject(value.Nom)}
                  key={key}
                  className={`flex-1 hover:bg-[#ffde59] duration-300 border-[#1a1a1a] dark:border-white 
                    ${index === paginatedData.length - 1 ? 'border-r-0' : 'border-r-3'}
                    h-full flex justify-center cursor-pointer ${activeProject === value.Nom ? `bg-[${couleurPage}]` : ''} `}
                >
                  <BoutonProjet
                    sous_menu={activeItem}
                    nom={value.Nom}
                  />
                </button>
              ))}
            </div>

            {hasNextPage && (
              <div className={`flex items-center border-l-3 h-full hover:bg-[${couleurPage}] duration-300`}>
                <button onClick={() => setPage(page + 1)} className="cursor-pointer">
                  <img src="media/images/arrow-right.png" alt="" className='w-5 h-5' />
                </button>
              </div>
            )}
          </div>
        </div>


        {/* <!-- Rectangle en dessous du carré --> */}

        <div className="bg-[#f2f4f5] dark:bg-[#1a1a1a] border-3 border-[#1a1a1a] dark:border-white row-span-6 col-span-6 flex-col justify-center">
          {
            dataProjetactif.length > 0 && (
              <ScrollProject 
              imagesArray={dataProjetactif[0][1]["images"]} 
              lien = {dataProjetactif[0][1]["lien"]}
              
              />
            )}
        </div>
      </div>
    </div>
  )
}