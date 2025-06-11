
import StarSVG from './StarSVG';

export default function ComposantStackTech({ sous_menu, nom, logo_src, note }) {
    return (
        < div className="flex flex-col items-center" >
            <StarSVG className={`w-6 h-6 text-gray-300`} />
            <StarSVG className={`w-6 h-6 text-black-400`} />
            <StarSVG className={`w-6 h-6 text-black-400`} />
            <StarSVG className={`w-6 h-6 text-black-400`} />
            <StarSVG className={`w-6 h-6 text-black-${note > 20 ? "400" : "700"}`} />
            <p className="text-sm font-medium text-center text-gray-700 dark:text-white">{nom}</p>
            <img src="media/images/udemy-logo.png" alt="Logo" className="w-10 h-10 mt-1" />
        </div >
    )
} 