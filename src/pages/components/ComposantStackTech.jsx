
import RectangleSVG from './RectangleSVG';

import React, { useState } from "react";

export default function ComposantStackTech({ sous_menu, nom, logo_src, note, rounded, color, colorBar}) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    let percentage1 = 0;
    let percentage2 = 0;
    let percentage3 = 0;
    let percentage4 = 0;
    let percentage5 = 0;
    let noteSurCinq = note/20;
    if (note > 20) {
        percentage1 = 100;
    }
    else {
        percentage1 = note / 20 * 100;
    }

    if (note > 40) {
        percentage2 = 100;
    }
    else {
        percentage2 = (note - 20) / 20 * 100;
    }

    if (note > 60) {
        percentage3 = 100;
    }
    else {
        percentage3 = (note - (20 * 2)) / 20 * 100;
    }

    if (note > 80) {
        percentage4 = 100;
        percentage5 = (note - (20 * 4)) / 20 * 100;
    }
    else {
        percentage4 = (note - (20 * 3)) / 20 * 100;
    }

    let largeurRectangle = 40
    let longueurRectangle = 53.5


    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
            <div
                className="cursor-pointer"
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                onMouseMove={handleMouseMove}
            >
                < div className="flex flex-col items-center w-[115px] flex-shrink-0 ">
                    <RectangleSVG borderSize={6} fillPercentage={percentage5} width={largeurRectangle} height={longueurRectangle} color={color} colorBar={colorBar}/>
                    <RectangleSVG borderSize={6} fillPercentage={percentage4} width={largeurRectangle} height={longueurRectangle} color={color} colorBar={colorBar}/>
                    <RectangleSVG borderSize={6} fillPercentage={percentage3} width={largeurRectangle} height={longueurRectangle} color={color} colorBar={colorBar}/>
                    <RectangleSVG borderSize={6} fillPercentage={percentage2} width={largeurRectangle} height={longueurRectangle} color={color} colorBar={colorBar}/>
                    <RectangleSVG borderSize={6} fillPercentage={percentage1} width={largeurRectangle} height={longueurRectangle} color={color} colorBar={colorBar}/>
                    <p className="font-oswald-bold uppercase text-xl font-medium text-center dark:text-white">{nom}</p>
                    <img src={logo_src} alt="Logo" className={`w-14 h-14 ${rounded ? "rounded-full" : ""}`} />
                </div >
                {visible && (
                    <div
                        className="font-oswald-bold absolute z-50 bg-gray-300 bg-opacity-40 border text-black text-xs px-3 py-2 shadow pointer-events-none"
                        style={{
                            top: position.y + 10,
                            left: position.x + 10,
                            position: "fixed", // pour suivre le curseur globalement
                        }}
                    > <h1 className="text-center">{nom}</h1>Note : {noteSurCinq} / 5
                    </div>
                )}
            </div>
    )
} 