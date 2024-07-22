document.addEventListener('DOMContentLoaded', () => {
    const darkBtn = document.querySelector(".p-dark");
    const lightBtn = document.querySelector(".p-light");
    const cont = document.querySelector(".c-container");
    const circle = document.querySelector("#circle");
    const buttons = [...document.getElementsByClassName("p")];
    const circleClass = circle.classList;

    // FUNCTIONS light and dark
    const addDark = () => {
        circleClass.remove("light");
        circleClass.add("dark");
        document.body.classList.add("dark-mode");
    };

    const addLight = () => {
        circleClass.remove("dark");
        circleClass.add("light");
        document.body.classList.remove("dark-mode");
    };

    cont.addEventListener("click", () => {
        circleClass.contains("light") ? addDark() : addLight();
    });

    // BUTTONS functions
    darkBtn.addEventListener("click", () => {
        if (!circleClass.contains("dark")) addDark();
    });

    lightBtn.addEventListener("click", () => {
        if (!circleClass.contains("light")) addLight();
    });
});
