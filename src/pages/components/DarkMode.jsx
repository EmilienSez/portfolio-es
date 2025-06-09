import { useEffect, useState } from 'react';

export default function DarkMode() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // À l'ouverture : récupère depuis localStorage
        const darkPref = localStorage.getItem('theme') === 'dark';
        setIsDark(darkPref);
        document.documentElement.classList.toggle('dark', darkPref);
    }, []);

    const toggleDarkMode = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle('dark', newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };
    return (
        <p id="darkModeText" className="font-oswald-bold text-2xl mt-4 flex items-center gap-2 text-[#1a1a1a] dark:text-white"
        onClick={toggleDarkMode}>
            <img src={`media/images/${isDark ? 'ico-sun' : 'ico-moon'}.png`} id="darkModeIco" alt="Lune" className="w-6 h-6" />
            <span id="darkModeTextSpan">{isDark ? 'LIGHT' : 'DARK'} MODE</span>
        </p>
    )
}