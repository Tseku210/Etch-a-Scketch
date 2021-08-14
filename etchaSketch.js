function grid(n, color="black"){
    // declaring container
    const container = document.querySelector("#container");
    const element = document.querySelectorAll(".grids");
    if (element){
        element.forEach(el => container.removeChild(el)) 
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const div = document.createElement("div");
                div.classList.add("grids");
                div.style.backgroundColor = "white";
                div.style.width = `${500 / n}px`;
                div.style.height = `${500 / n}px`;
                div.addEventListener("mouseover", () => {
                    div.style.backgroundColor = color;
                });
                container.appendChild(div);
            }
        };
    } else {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const div = document.createElement("div");
                div.classList.add("grids");
                div.style.width = `${500 / n}px`;
                div.style.height = `${500 / n}px`;
                div.addEventListener("mouseover", () => {
                    div.style.backgroundColor = "black";
                });
                container.appendChild(div);
            }
        };
    };
};

function generateRandomColor() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
};

const button = document.querySelector("#new");

button.addEventListener("click", function(){
    let n = 16;
    do {
        n = prompt("Number of squares per side: ");
    } while (n > 100);
    grid(n)
});

const rainbow = document.querySelector("#rainbow");

rainbow.addEventListener("click", function(){
    const grids = document.querySelectorAll(".grids");
    grids.forEach(grid => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = generateRandomColor();
        })
    });
});

const eraser = document.querySelector("#eraser");

eraser.addEventListener("click", function(){
    const grids = document.querySelectorAll(".grids");
    grids.forEach(grid => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "white";
        })
    });
});

const black = document.querySelector("#black");

black.addEventListener("click", function(){
    const grids = document.querySelectorAll(".grids");
    grids.forEach(grid => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "black";
        })
    });
});

grid(16);