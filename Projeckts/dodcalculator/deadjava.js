function whosname() {
    // get localstorage key and add it to the empty array
    let namething = document.getElementById('noname').value
    // save array it is ok to overwrite the key
    localStorage.setItem('namedeath',namething)
    if (namedeath == "clear") {
        localStorage.clear()
        location.reload()
    }
    else {
        // get localstorage key and add it to the empty array
        let namething = document.getElementById('noname').value
        // go to page 2
        location.href = "page2.html"
    }
    }
function agedead() {
    // get localstorage key and add it to the empty array
    let ageething = document.getElementById('noage').value
    localStorage.setItem('agedeath1',ageething)
    deathmath = 86 - ageething
    // save array it is ok to overwrite the key
    localStorage.setItem('agedeath2',deathmath)
    // go to page 2
    location.href = "page3.html"
    }