

export default function SousMenuAnnexe({ nom, couleur, isActive, onActivate }) {
  // console.log(isActive);
  return (
    <a href="#" onClick={onActivate}>
     <p
      className={`font-oswald-normal text-center text-2xl mt-1 tracking-wider bg-[${isActive ? "#ff3131" : "#f2f4f5"}] dark:bg-[${isActive ? "#ff3131" : "#1a1a1a"}] dark:text-white  hover:bg-[${couleur}] dark:hover:bg-[${couleur}] transition-colors duration-300`}
    >{nom}
    </p></a>
  );
};
