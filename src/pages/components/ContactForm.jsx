import { useRef } from 'react';
import emailjs from 'emailjs-com';

const serviceEmailJS = import.meta.env.VITE_EMAIL_JS_API_KEY_SERVICE;
const templateEmailJS = import.meta.env.VITE_EMAIL_JS_API_KEY_TEMPLATE;
const publicEmailJS = import.meta.env.VITE_EMAIL_JS_API_KEY_PUBLIC;

export default function ContactForm() {

    const form = useRef();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const sendEmail = (e) => {
        e.preventDefault();

        const formEl = form.current;
        const message = formEl.message?.value.trim();

        // Vérifie si le champ message est vide
        if (!message) {
            alert("Veuillez entrer un message avant d'envoyer.");
            return;
        }

        const name = formEl.name?.value.trim();

        // Vérifie si le champ message est vide
        if (!name) {
            alert("Veuillez entrer une adresse mail avant d'envoyer");
            return;
        }

        if (!name || !emailRegex.test(name)) {
            alert("Veuillez entrer une adresse e-mail valide.");
            return;
        }

        emailjs
            .sendForm(
                serviceEmailJS,   // depuis EmailJS
                templateEmailJS,  // depuis EmailJS
                form.current,
                publicEmailJS       // clé publique EmailJS
            )
            .then(
                (result) => {
                    alert('Votre message à été envoyé !');
                    form.current.reset();
                },
                (error) => {
                    alert('Erreur : ' + error.text);
                }
            );
    };

    return (
        <div className="flex flex-col justify-between p-4">
            <form ref={form} onSubmit={sendEmail} className='ml-2 mt-2'>
                <p className='font-oswald-bold text-2xl uppercase mb-2 dark:text-white'>Votre adresse mail : </p>
                <input type="text" name="name" placeholder="Veuillez saisir votre adresse mail...."
                    className='border-2 w-full  font-oswald-normal p-2 mb-2 dark:text-white' />
                <p className='font-oswald-bold text-2xl uppercase mb-2 dark:text-white'>Objet  : </p>
                <input type="text" name="title" placeholder="Veuillez saisir l'objet...."
                    className='border-2 w-full font-oswald-normal p-2 mb-2 dark:text-white' />
                <p className='font-oswald-bold text-2xl uppercase mb-2 dark:text-white'>Votre Message : </p>
                <textarea name="message" placeholder="Veuillez saisir votre message...."
                    className='border-2 w-full h-60 font-oswald-normal p-2 dark:text-white' />
                <input
                    type="hidden"
                    name="time"
                    value={new Date().toLocaleString('fr-FR', {
                        dateStyle: 'short',
                        timeStyle: 'short'
                    })}
                />
                <div className='flex justify-end mt-4'>
                    <button type="submit" className='
  p-2 font-oswald-bold text-4xl uppercase cursor-pointer border-3 hover:bg-[#38b6ff] duration-300 dark:text-white'>Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
}
