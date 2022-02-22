const d = document, w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    let breakpoint = w.matchMedia(mq);
    const responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        }else {
            d.getElementById(id).innerHTML = mobileContent;
        }
        //console.log(e.matches);
    }
    breakpoint.addEventListener("change", responsive);
    responsive(breakpoint);
}