function azurirajListu() {
    let niz = [];
    $("#plejlista li").each((i, el) => {
        niz.push(el.innerText);
    })
    localStorage.setItem("plejlista", JSON.stringify(niz));
}

$("#plejlista" )
    .sortable({ update: azurirajListu })
    .disableSelection()
