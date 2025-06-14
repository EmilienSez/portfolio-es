import ListeContactReseaux from './ListeContactReseaux';
import paramsData from '../../assets/data/params.json'

export default function () {
  const contactItems = Object.entries(paramsData.contact);
  console.log(contactItems);

  return (
    <div className="flex flex-col justify-center items-center font-oswald-bold text-4xl uppercase h-[90%]">
      <div className="space-y-8">
        {contactItems.map(([key, value]) => (
          <ListeContactReseaux
            key={key}
            nom={value.nom}
            lien={value.link}
            logo={value.logo} />
        ))}
      </div></div>
  )
}