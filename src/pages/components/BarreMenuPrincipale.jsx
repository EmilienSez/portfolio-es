import { Link } from 'react-router-dom';
export default function BarreMenuPrincipale({ nom, couleur, link }) {
  return (
    <Link to={link} className="">
     <p
      className={`font-oswald-bold text-2xl text-[#1a1a1a] dark:text-white bg-[#f2f4f5] dark:bg-[#1a1a1a] dark:hover:bg-[${couleur}] hover:bg-[${couleur}] transition-colors duration-300`}
    >{nom}
    </p>
    </Link>
  );
};
