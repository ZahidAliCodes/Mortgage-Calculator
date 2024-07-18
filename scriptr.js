WebFont.load({
    google: {
        families: [
            "Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
            "Open Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic",
            "Great Vibes:400",
            "Mulish:regular,500,600,700,800",
            "MuseoModerno:100,200,300,regular,500,600,700,800,900",
        ],
    },
});
!(function (o, c) {
    var n = c.documentElement,
        t = " w-mod-";
    (n.className += t + "js"), ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) && (n.className += t + "touch");
})(window, document);
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("set", "developer_id.dZGVlNj", true);
gtag("config", "G-RMB3ZX704Y");
// GEO coords:
(function (g, e, o, t, a, r, ge, tl, y, s) {
    g.getElementsByTagName(o)[0].insertAdjacentHTML("afterbegin", '<style id="georedirect1645122070605style">body{opacity:0.0 !important;}</style>');
    s = function () {
        g.getElementById("georedirect1645122070605style").innerHTML = "body{opacity:1.0 !important;}";
    };
    t = g.getElementsByTagName(o)[0];
    y = g.createElement(e);
    y.async = true;
    y.src = "https://g10300385420.co/gr?id=-Mw7ueTyt-IezoXcnRlM&refurl=" + g.referrer + "&winurl=" + encodeURIComponent(window.location);
    t.parentNode.insertBefore(y, t);
    y.onerror = function () {
        s();
    };
    georedirect1645122070605loaded = function (redirect) {
        var to = 0;
        if (redirect) {
            to = 5000;
        }
        setTimeout(function () {
            s();
        }, to);
    };
})(document, "script", "head");

(function (h, o, t, j, a, r) {
    h.hj =
        h.hj ||
        function () {
            (h.hj.q = h.hj.q || []).push(arguments);
        };
    h._hjSettings = {
        hjid: 3149556,
        hjsv: 6,
    };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");

// Google Tag Manager

(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-MHLXVS2");

window.__WEBFLOW_CURRENCY_SETTINGS = {
    currencyCode: "USD",
    symbol: "$",
    decimal: ".",
    fractionDigits: 2,
    group: ",",
    template: '{{wf {"path":"symbol","type":"PlainText"} }} {{wf {"path":"amount","type":"CommercePrice"} }} {{wf {"path":"currencyCode","type":"PlainText"} }}',
    hideDecimalForWholeNumbers: false,
};
// top