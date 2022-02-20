import "./index.css";
import { InfectedLogger } from "src/Utility/Logger";
import Errors from "src/Utility/Errors.json";

(function createCanvas() {

    console.log(Errors["Infected"]["LoopAndAnimationTimeConflict"]);
    const logger = new InfectedLogger();
    logger.LoopAndAnimationTimeConflict();

    const app = document.getElementById("app");

    const canvasContainer = document.createElement("div");
    const canvas = document.createElement("canvas");
    
    canvasContainer.classList.add("canvas_container");
    canvas.classList.add("canvas");

    canvasContainer.appendChild(canvas);
    app.appendChild(canvasContainer);
})();