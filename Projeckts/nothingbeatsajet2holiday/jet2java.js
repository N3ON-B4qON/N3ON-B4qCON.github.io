// ROOM 101
let max101 = 0
let full101 = []
let over101 = []
function nothing1() {
    if (max101 < 4) {
        max101 +=1
        let room1flo1 = document.getElementById('eccono101').value
        full101.push(room1flo1)
        over101.push(room1flo1)
        document.getElementById('occupant101').innerHTML = "occupant(s): " + full101
        // save array it is ok to overwrite the key
        let local101 = localStorage.setItem('room101',over101)
        document.getElementById('eccono101').value = ""
        document.getElementById('overflow101').innerHTML = ""
    }
    else {
        document.getElementById('overflow101').innerHTML = "The room is full"
        document.getElementById('eccono101').value = ""
    }
}
function beats1() {
    let compare101 = document.getElementById('eccono101').value
    if (compare101 == full101[0] || compare101 == full101[1] || compare101 == full101[2] || compare101 == full101[3]) {
        if (compare101 == full101[0]) {
            max101 -=1
            full101.splice(0,0)
        }
        else if (compare101 == full101[1]) {
            max101 -=1
            full101.splice(1,0)
        }
        else if (compare101 == full101[2]) {
            max101 -=1
            full101.splice(2,0)
        }
        else {
            max101 -=1
            full101.splice(3,0)
        }
        document.getElementById('overflow101').innerHTML = ""
    }
    else {
        document.getElementById('wrong101').innerHTML = "There is no one in this room with the same name. Maybe they're in a different one."
    }

}
function a_jet21() {}
function holiday1() {}