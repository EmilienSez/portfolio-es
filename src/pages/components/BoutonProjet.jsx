export default function BoutonProjet({ sous_menu, nom }) {
  return (
    <div className="flex items-center justify-center text-center">
      <p className="font-oswald-bold uppercase text-3xl break-words whitespace-normal dark:text-white">
        {nom}
      </p>
    </div>
  );
}