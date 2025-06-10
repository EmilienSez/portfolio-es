export default function CarteCertification({sous_menu, nom, couleur_basse, couleur_haute, image_src, description, lien_certification}) {

  return (
        <li className="">
          <div className="mt-2 flex justify-center">
              <div className="border-b-3 border-[#1a1a1a] dark:border-white overflow-hidden shadow-md flex items-center p-4 w-[464px] h-35">
                <img src={image_src} alt="" className="w-16 h-16 object-cover hidden sm:block border-2 rounded-full dark:border-white "/>
                <div className="m-2 flex-1">
                  <p className="font-oswald-bold text-md line-clamp-1 dark:text-white"> {nom} </p>
                  <p className="font-oswald-normal text-sm break-words line-clamp-2 h-12 dark:text-white"> {description}</p>
                  <div className="flex justify-end">
                    <a href={lien_certification} id="doc-dpe" target="_blank" rel="noopener noreferrer"
                      className={`font-oswald-normal text-xl text-center  px-2 py-1 border-1 border-[${couleur_haute}] text-black bg-[${couleur_basse}] hover:bg-[${couleur_haute}] transition duration-300`}>
                      Certification
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </li>
  )
}