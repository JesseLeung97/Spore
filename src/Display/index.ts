import "./index.css";

(function createCanvas() {

    const app = document.getElementById("app");

    const canvasContainer = document.createElement("div");
    const canvas = document.createElement("canvas");
    
    canvasContainer.classList.add("canvas_container");
    canvas.classList.add("canvas");

    canvasContainer.appendChild(canvas);
    app.appendChild(canvasContainer);
})();