const d = document,
    w = window;

export default function smartVideo() {
    let $videos = d.querySelectorAll("video[data-smart-video]");

    let cb = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });

        w.addEventListener("visibilitychange", (e) => {
            if (d.visibilityState === "visible") {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    };

    let observer = new IntersectionObserver(cb, {
        threshold: 0.5,
    });

    $videos.forEach((element) => {
        observer.observe(element);
    });
}
