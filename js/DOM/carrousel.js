const d = document;

export default function slider() {
    const $btnPrev = d.querySelector(".slider-btns .prev"),
        $btnNext = d.querySelector(".slider-btns .next"),
        $slides = d.querySelectorAll(".slider-slide");

    let i = 0;

    d.addEventListener("click", (e) => {
        if (e.target === $btnPrev) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;

            if (i < 0) {
                i = $slides.length - 1;
            }

            $slides[i].classList.add("active");
        }
        if (e.target === $btnNext) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;

            if (i >= $slides.length) {
                i = 0;
            }

            $slides[i].classList.add("active");
        }
    });
}
