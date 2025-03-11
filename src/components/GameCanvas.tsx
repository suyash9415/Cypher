import { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

const GameCanvas = () => {
    const gameContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const app = new PIXI.Application({
            width: 800,
            height: 600,
            backgroundColor: 0x000000,
        });

        if (gameContainer.current) {
            gameContainer.current.appendChild(app.view as HTMLCanvasElement);
        }

        return () => {
            app.destroy(true);
        };
    }, []);

    return <div ref={gameContainer} />;
};

export default GameCanvas;
