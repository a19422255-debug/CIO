const url = new URLSearchParams(window.location.search);

const paket = url.get("paket");

if (paket === "basic") {
    document.getElementById("paket").innerText = "Paket: Basic — Rp15.000";
}

if (paket === "standard") {
    document.getElementById("paket").innerText = "Paket: Standard — Rp25.000";
}

if (paket === "premium") {
    document.getElementById("paket").innerText = "Paket: Premium — Rp40.000";
}
function kirimWhatsApp() {

    const nama = document.getElementById("nama").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const catatan = document.getElementById("catatan").value;

    const pesan =
        "Halo CIO! Saya ingin memesan jasa.%0A%0A" +
        "Nama: " + nama + "%0A" +
        "WhatsApp: " + whatsapp + "%0A" +
        "Catatan: " + catatan;

    window.open(
        "https://wa.me/6281234567890?text=" + pesan,
        "_blank"
    );
}