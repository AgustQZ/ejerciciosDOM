const d = document,
    n = navigator,
    ua = n.userAgent;

export default function userDevice(id) {
    const $id = d.getElementById(id),
        isMobile = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/iphone|ipad|ipod/i),
            winPhone: () => ua.match(/windows phone/i),
            any: function () {
                return this.android() || this.ios() || this.winPhone();
            },
        },
        isDesktop = {
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function () {
                return this.linux() || this.mac() || this.windows();
            },
        },
        browser = {
            chrome: () => ua.match(/chrome/i),
            firefox: () => ua.match(/firefox/i),
            safari: () => ua.match(/safari/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            opera: () => ua.match(/opera|opera mini/i),
            any: function () {
                return (
                    this.chrome() ||
                    this.firefox() ||
                    this.safari() ||
                    this.ie() ||
                    this.edge() ||
                    this.opera()
                );
            },
        };

    $id.innerHTML = `
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Sistema Operativo: <b>${
                isMobile.any() ? isMobile.any() : isDesktop.any()
            }</b></li>
            <li>Navegador: <b>${browser.any()}</b></li>
        </ul>
    `;
}
