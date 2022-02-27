const d = document,
    w = window,
    n = navigator;

export default function webcamConnet(id) {
    const $video = d.getElementById(id);
    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
                console.log(stream);
                $video.srcObject = stream;
                $video.play();
            })
            .catch((err) => {
                $video.insertAdjacentHTML(
                    "beforebegin",
                    `<p>Sucedio el siguiente error: <mark>${err}</mark></p>`
                );

                console.log(err);
            });
    }
}
