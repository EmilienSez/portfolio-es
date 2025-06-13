import paramsData from '../../assets/data/params.json'
import SousMenuAnnexe from './SousMenuAnnexe';

import { Link } from 'react-router-dom';

export default function BarreMenuAnnexe({ nom, couleur, link, type_menu, activeItem, onSousMenuClick }) {
  // const [activeItem, setActiveItem] = useState(sous_menu);
  const profilItems = Object.entries(paramsData.sous_menu).filter(([key, value]) => value.menu === type_menu);
  return (
    <div>
      <Link to={link}>
      <p
        className={`font-oswald-bold text-center text-3xl mt-2 tracking-wider ${nom == type_menu ? `bg-[${couleur}]` : ""} text-[#1a1a1a] dark:text-white ${nom == type_menu ? "dark:bg-[#ff3131]" : ""} dark:hover:bg-[${couleur}] hover:bg-[${couleur}] transition-colors duration-300`}
      >{nom}    </p>
      </Link>
      {nom == type_menu ? profilItems.map(([key, value]) => (
        <SousMenuAnnexe
          key={key}
          nom={value.Nom}
          couleur={value.Couleur}
          isActive={activeItem === value.Nom}
          onActivate={() => onSousMenuClick(value.Nom)} />
      )) : null}
    </div>
  );
};
