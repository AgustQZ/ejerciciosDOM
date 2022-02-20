const d = document,
ls = localStorage;

export default function darkTheme(btn, classDark) {
    const $btnDark = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

    let moon = "🌑", sun = "☀️";
    const lightMode = () => {
        $selectors.forEach((elemento) => elemento.classList.remove(classDark));
        $btnDark.textContent = moon;
        ls.setItem("theme", "light");
    };
    const darkMode = () => {
        $selectors.forEach((elemento) => elemento.classList.add(classDark));
        $btnDark.textContent = sun;
        ls.setItem("theme", "dark");
    };

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            if ($btnDark.textContent === moon) {
                darkMode();
            } else {
                lightMode();
            }
        }
    });

    d.addEventListener("DOMContentLoaded", (e) => {
        if (ls.getItem("theme") === null) ls.setItem("theme", "light");
        if (ls.getItem("theme") === "light") lightMode();
        if (ls.getItem("theme") === "dark") darkMode();
    });
}