const d = document;

export default function scrollSpy() {
    let $sections = d.querySelectorAll("section[data-scroll-spy]");

    let cb = (entries) => {
        //console.log("Entries: ", entries);

        entries.forEach((entry) => {
            //console.log("Entry:", entry);

            let id = entry.target.getAttribute("id");

            if (entry.isIntersecting) {
                d.querySelector(
                    `a[data-scroll-spy][href="#${id}"]`
                ).classList.add("active");
            } else {
                d.querySelector(
                    `a[data-scroll-spy][href="#${id}"]`
                ).classList.remove("active");
            }
        });
    };

    const observer = new IntersectionObserver(cb, {
        // root
        // rootMargin: "300px",
        threshold: [0.5, 0.75],
    });

    //console.log("Observer", observer);

    $sections.forEach((element) => observer.observe(element));
}
