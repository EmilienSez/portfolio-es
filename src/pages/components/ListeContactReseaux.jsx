export default function ListeContactReseaux({ nom, lien, logo }) {
  return (
    <div>
      <a href={lien}
        id="doc-dpe"
        target="_blank"
        rel="noopener noreferrer">
        <div className="flex items-center space-x-8">
          <img src={logo} alt="" className="w-15 h-15" />
          <span className="hover:text-[#38b6ff] duration-300 dark:text-white hover:dark:text-[#38b6ff]" >{nom}</span >
        </div>
      </a>
    </div>
  )
}