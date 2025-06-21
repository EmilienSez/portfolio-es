import { useEffect, useState } from 'react';

const Typewriter = () => {
  const messages = ['Data Analyst', 'Data Scientist', 'Developpeur FullStack'];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    let typingSpeed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentMessage.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentMessage) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentMessageIndex]);

  return (
    <div>
      <h1 className="font-oswald-bold text-2xl text-center mt-2 uppercase dark:text-white">
        {displayedText}
        <span className="blinking-cursor">|</span>
      </h1>
      <p className="font-oswald-normal text-justify text-lg p-4 mr-5 dark:text-white">
        Developpeur Junior ayant une formation en Ingénierie des données, Econométrie & Statistiques et une passion pour le développement.
      </p>
    </div>
  );
};

export default Typewriter;