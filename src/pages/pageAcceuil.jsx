
import paramsData from '../assets/data/params.json'
import BarreMenuPrincipale from './components/BarreMenuPrincipale';
import DarkMode from './components/DarkMode';

export default function PageAcceuil() {
    const mainMenuInfo = Object.entries(paramsData.main_menu);
    // console.log(mainMenuInfo);
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#f2f4f5] dark:bg-[#1a1a1a]">
            <div className="bg-[#f2f4f5] py-8 text-center border-4 border-[#1a1a1a] dark:border-white bg-[#f2f4f5] dark:bg-[#1a1a1a] transition-colors duration-300">
                <p className="font-oswald-bold text-4xl ml-8 mr-8 mb-6 text-[#1a1a1a] dark:text-white tracking-wider">BIENVENUE SUR MON PORTFOLIO</p>
                {mainMenuInfo.map(([key, value]) => (
                    <BarreMenuPrincipale
                        key={key}
                        nom={value.Nom}
                        couleur={value.Couleur}
                        link={value.Lien}
                    />
                ))}
            </div>
            <div href="#" id="darkModeToggle">
                <DarkMode />
            </div>
        </div>
    )
}