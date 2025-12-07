const modeIcon = document.getElementById("mode_icon");

// Verifica se já existe tema salvo
let tema = localStorage.getItem("tema");

if (tema === "dark") {
    document.body.classList.add("dark");
    modeIcon.classList.remove("fa-moon");
    modeIcon.classList.add("fa-sun");
}

modeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
        localStorage.setItem("tema", "dark");
    } else {
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
        localStorage.setItem("tema", "light");
    }
});
