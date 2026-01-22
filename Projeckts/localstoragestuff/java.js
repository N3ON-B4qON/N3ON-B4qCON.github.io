function pizname() {
    // get localstorage key and add it to the empty array
    let namething = document.getElementById('noname').value
    // save array it is ok to overwrite the key
    localStorage.setItem('namepizza',namething)
    // go to page 2
    location.href = "page2.html"
}
function pizprice() {
    // get localstorage key and add it to the empty array
    let pricething = document.getElementById('noprice').value
    // save array it is ok to overwrite the key
    localStorage.setItem('pricepizza',pricething)
    // go to page 2
    location.href = "page3.html"
}