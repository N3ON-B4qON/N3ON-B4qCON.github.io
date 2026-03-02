// ROOM 101
let access101 = "unlocked"
let dissable101 = false
let max101 = 0
let full101 = []
let over101 = []
let kicked101 = []
let teimo101 = []
let tiemo101 = []
// add person to room
function nothing1() {
    if (max101 < 4) {
        max101 +=1
        let room1flo1 = document.getElementById('eccono101').value
        full101.push(room1flo1)
        over101.push(room1flo1)
        let enter101 = room1flo1 + Date()
        teimo101.push(enter101)
        localStorage.setItem('checkin101',teimo101)
        document.getElementById('occupant101').innerHTML = "occupant(s): " + full101
        // save array it is ok to overwrite the key
        let local101 = localStorage.setItem('room101',over101)
        allcheckins.push(local101)
        document.getElementById('eccono101').value = ""
        document.getElementById('overflow101').innerHTML = ""
        document.getElementById('wrong101').innerHTML = ""
    }
    else {
        document.getElementById('overflow101').innerHTML = "The room is full"
        document.getElementById('eccono101').value = ""
    }
}
// remove speciffic person from room
function beats1() {
    let compare101 = document.getElementById('eccono101').value
    if (compare101 == full101[0] || compare101 == full101[1] || compare101 == full101[2] || compare101 == full101[3]) {
        if (compare101 == full101[0]) {
            max101 -=1
            let exit101 = full101[0] + Date()
            tiemo101.push(exit101)
            localStorage.setItem('checkout101',tiemo101)
            // Remove Guest Part
            kicked101 = full101.splice(0,1)
            document.getElementById('occupant101').innerHTML = "occupant(s): " + full101
            document.getElementById('wrong101').innerHTML = ""
            console.log('it worked')
        }
        else if (compare101 == full101[1]) {
            max101 -=1
            let exit101 = full101[1] + Date()
            tiemo101.push(exit101)
            localStorage.setItem('checkout101',tiemo101)
            // Remove Guest Part
            kicked101 = full101.splice(1,1)
            document.getElementById('occupant101').innerHTML = "occupant(s): " + full101
            document.getElementById('wrong101').innerHTML = ""
            console.log('it worked')
        }
        else if (compare101 == full101[2]) {
            max101 -=1
            let exit101 = full101[2] + Date()
            tiemo101.push(exit101)
            localStorage.setItem('checkout101',tiemo101)
            // Remove Guest Part
            kicked101 = full101.splice(2,1)
            document.getElementById('occupant101').innerHTML = "occupant(s): " + full101
            document.getElementById('wrong101').innerHTML = ""
            console.log('it worked')
        }
        else {
            max101 -=1
            let exit101 = full101[3] + Date()
            tiemo101.push(exit101)
            localStorage.setItem('checkout101',tiemo101)
            // Remove Guest Part
            kicked101 = full101.splice(3,1)
            document.getElementById('occupant101').innerHTML = "occupant(s): " + full101
            document.getElementById('wrong101').innerHTML = ""
            console.log('it worked')
        }
        document.getElementById('overflow101').innerHTML = ""
        document.getElementById('eccono101').value = ""
    }
    else {
        document.getElementById('wrong101').innerHTML = "There is no one in this room with the same name. Maybe they're in a different one."
    }
}
// remove everyone from room
function a_jet21() {
    max101 = 0
    console.log('reset to 0')
    full101 = []
    document.getElementById('occupant101').innerHTML = "occupant(s): " + full101
}
// lock room
function holiday1() {
    let addone101 = document.getElementById('addone101')
    let removeone101 = document.getElementById('removeone101')
    let removeall101 = document.getElementById('removeall101')
    if (access101 == "unlocked") {
        document.getElementById('addone101').disabled = true
        document.getElementById('removeone101').disabled = true
        document.getElementById('removeall101').disabled = true
        document.getElementById('lockunlock101').innerHTML = "Unlock (To Manage Guests)"
        access101 = "locked"
    }
    else {
        document.getElementById('addone101').disabled = false
        document.getElementById('removeone101').disabled = false
        document.getElementById('removeall101').disabled = false
        document.getElementById('lockunlock101').innerHTML = "Lock (To Clean)"
        access101 = "unlocked"
    }
}

// ROOM 102
let access102 = "unlocked"
let dissable102 = false
let max102= 0
let full102 = []
let over102 = []
let kicked102 = []
let teimo102 = []
let tiemo102 = []
// add person to room
function nothing2() {
    if (max102 < 4) {
        max102 +=1
        let room2flo1 = document.getElementById('eccono102').value
        full102.push(room2flo1)
        over102.push(room2flo1)
        let enter102 = room2flo1 + Date()
        teimo101.push(enter102)
        localStorage.setItem('checkin102',teimo102)
        document.getElementById('occupant102').innerHTML = "occupant(s): " + full102
        // save array it is ok to overwrite the key
        let local102 = localStorage.setItem('room102',over102)
        allcheckins.push(local102)
        document.getElementById('eccono102').value = ""
        document.getElementById('overflow102').innerHTML = ""
        document.getElementById('wrong102').innerHTML = ""
    }
    else {
        document.getElementById('overflow102').innerHTML = "The room is full"
        document.getElementById('eccono102').value = ""
    }
}
// remove speciffic person from room
function beats2() {
    let compare102 = document.getElementById('eccono102').value
    if (compare102 == full102[0] || compare102 == full102[1] || compare102 == full102[2] || compare102 == full102[3]) {
        if (compare102 == full102[0]) {
            max102 -=1
            let exit102 = full102[0] + Date()
            tiemo102.push(exit102)
            localStorage.setItem('checkout102',tiemo102)
            // Remove Guest Part
            kicked102 = full102.splice(0,1)
            document.getElementById('occupant102').innerHTML = "occupant(s): " + full102
            document.getElementById('wrong102').innerHTML = ""
            console.log('it worked')
        }
        else if (compare102 == full102[1]) {
            max102 -=1
            let exit102 = full102[1] + Date()
            tiemo102.push(exit102)
            localStorage.setItem('checkout102',tiemo102)
            // Remove Guest Part
            kicked102 = full102.splice(1,1)
            document.getElementById('occupant102').innerHTML = "occupant(s): " + full102
            document.getElementById('wrong102').innerHTML = ""
            console.log('it worked')
        }
        else if (compare102 == full102[2]) {
            max102 -=1
            let exit102 = full102[2] + Date()
            tiemo102.push(exit102)
            localStorage.setItem('checkout102',tiemo102)
            // Remove Guest Part
            kicked102 = full102.splice(2,1)
            document.getElementById('occupant102').innerHTML = "occupant(s): " + full102
            document.getElementById('wrong102').innerHTML = ""
            console.log('it worked')
        }
        else {
            max102 -=1
            let exit102 = full102[3] + Date()
            tiemo102.push(exit102)
            localStorage.setItem('checkout102',tiemo102)
            // Remove Guest Part
            kicked102 = full102.splice(3,1)
            document.getElementById('occupant102').innerHTML = "occupant(s): " + full102
            document.getElementById('wrong102').innerHTML = ""
            console.log('it worked')
        }
        document.getElementById('overflow102').innerHTML = ""
        document.getElementById('eccono102').value = ""
    }
    else {
        document.getElementById('wrong102').innerHTML = "There is no one in this room with the same name. Maybe they're in a different one."
    }
}
// remove everyone from room
function a_jet22() {
    max102 = 0
    console.log('reset to 0')
    full102 = []
    document.getElementById('occupant102').innerHTML = "occupant(s): " + full102
}
// lock room
function holiday2() {
    let addone102 = document.getElementById('addone102')
    let removeone102 = document.getElementById('removeone102')
    let removeall102 = document.getElementById('removeall102')
    if (access102 == "unlocked") {
        document.getElementById('addone102').disabled = true
        document.getElementById('removeone102').disabled = true
        document.getElementById('removeall102').disabled = true
        document.getElementById('lockunlock102').innerHTML = "Unlock (To Manage Guests)"
        access102 = "locked"
    }
    else {
        document.getElementById('addone102').disabled = false
        document.getElementById('removeone102').disabled = false
        document.getElementById('removeall102').disabled = false
        document.getElementById('lockunlock102').innerHTML = "Lock (To Clean)"
        access102 = "unlocked"
    }
}

// ROOM 103
let access103 = "unlocked"
let dissable103 = false
let max103 = 0
let full103 = []
let over103 = []
let kicked103 = []
let teimo103 = []
let tiemo103 = []
// add person to room
function nothing3() {
    if (max103 < 4) {
        max103 +=1
        let room3flo1 = document.getElementById('eccono103').value
        full103.push(room3flo1)
        over103.push(room3flo1)
        let enter103 = room3flo1 + Date()
        teimo103.push(enter103)
        localStorage.setItem('checkin103',teimo103)
        document.getElementById('occupant103').innerHTML = "occupant(s): " + full103
        // save array it is ok to overwrite the key
        let local103 = localStorage.setItem('room103',over103)
        allcheckins.push(local103)
        document.getElementById('eccono103').value = ""
        document.getElementById('overflow103').innerHTML = ""
        document.getElementById('wrong103').innerHTML = ""
    }
    else {
        document.getElementById('overflow103').innerHTML = "The room is full"
        document.getElementById('eccono103').value = ""
    }
}
// remove speciffic person from room
function beats3() {
    let compare103 = document.getElementById('eccono103').value
    if (compare103 == full103[0] || compare103 == full103[1] || compare103 == full103[2] || compare103 == full103[3]) {
        if (compare103 == full103[0]) {
            max103 -=1
            let exit103 = full103[0] + Date()
            tiemo103.push(exit103)
            localStorage.setItem('checkout103',tiemo103)
            // Remove Guest Part
            kicked103 = full103.splice(0,1)
            document.getElementById('occupant103').innerHTML = "occupant(s): " + full103
            document.getElementById('wrong103').innerHTML = ""
            console.log('it worked')
        }
        else if (compare103 == full103[1]) {
            max103 -=1
            let exit103 = full103[1] + Date()
            tiemo103.push(exit103)
            localStorage.setItem('checkout103',tiemo103)
            // Remove Guest Part
            kicked103 = full103.splice(1,1)
            document.getElementById('occupant103').innerHTML = "occupant(s): " + full103
            document.getElementById('wrong103').innerHTML = ""
            console.log('it worked')
        }
        else if (compare103 == full103[2]) {
            max103 -=1
            let exit103 = full103[2] + Date()
            tiemo103.push(exit103)
            localStorage.setItem('checkout103',tiemo103)
            // Remove Guest Part
            kicked103 = full103.splice(2,1)
            document.getElementById('occupant103').innerHTML = "occupant(s): " + full103
            document.getElementById('wrong103').innerHTML = ""
            console.log('it worked')
        }
        else {
            max103 -=1
            let exit103 = full103[3] + Date()
            tiemo103.push(exit103)
            localStorage.setItem('checkout103',tiemo103)
            // Remove Guest Part
            kicked103 = full103.splice(3,1)
            document.getElementById('occupant103').innerHTML = "occupant(s): " + full103
            document.getElementById('wrong103').innerHTML = ""
            console.log('it worked')
        }
        document.getElementById('overflow103').innerHTML = ""
        document.getElementById('eccono103').value = ""
    }
    else {
        document.getElementById('wrong103').innerHTML = "There is no one in this room with the same name. Maybe they're in a different one."
    }
}
// remove everyone from room
function a_jet23() {
    max103 = 0
    console.log('reset to 0')
    full103 = []
    document.getElementById('occupant103').innerHTML = "occupant(s): " + full103
}
// lock room
function holiday3() {
    let addone103 = document.getElementById('addone103')
    let removeone103 = document.getElementById('removeone103')
    let removeall103 = document.getElementById('removeall103')
    if (access103 == "unlocked") {
        document.getElementById('addone103').disabled = true
        document.getElementById('removeone103').disabled = true
        document.getElementById('removeall103').disabled = true
        document.getElementById('lockunlock103').innerHTML = "Unlock (To Manage Guests)"
        access103 = "locked"
    }
    else {
        document.getElementById('addone103').disabled = false
        document.getElementById('removeone103').disabled = false
        document.getElementById('removeall103').disabled = false
        document.getElementById('lockunlock103').innerHTML = "Lock (To Clean)"
        access103 = "unlocked"
    }
}

// ROOM 104
let access104 = "unlocked"
let dissable104 = false
let max104 = 0
let full104 = []
let over104 = []
let kicked104 = []
let teimo104 = []
let tiemo104 = []
// add person to room
function nothing4() {
    if (max104 < 4) {
        max104 +=1
        let room4flo1 = document.getElementById('eccono104').value
        full104.push(room4flo1)
        over104.push(room4flo1)
        let enter104 = room4flo1 + Date()
        teimo104.push(enter104)
        localStorage.setItem('checkin104',teimo104)
        document.getElementById('occupant104').innerHTML = "occupant(s): " + full104
        // save array it is ok to overwrite the key
        let local104 = localStorage.setItem('room104',over104)
        allcheckins.push(local104)
        document.getElementById('eccono104').value = ""
        document.getElementById('overflow104').innerHTML = ""
        document.getElementById('wrong104').innerHTML = ""
    }
    else {
        document.getElementById('overflow104').innerHTML = "The room is full"
        document.getElementById('eccono104').value = ""
    }
}
// remove speciffic person from room
function beats4() {
    let compare104 = document.getElementById('eccono104').value
    if (compare104 == full104[0] || compare104 == full104[1] || compare104 == full104[2] || compare104 == full104[3]) {
        if (compare104 == full104[0]) {
            max104 -=1
            let exit104 = full104[0] + Date()
            tiemo104.push(exit104)
            localStorage.setItem('checkout104',tiemo104)
            // Remove Guest Part
            kicked104 = full104.splice(0,1)
            document.getElementById('occupant104').innerHTML = "occupant(s): " + full104
            document.getElementById('wrong104').innerHTML = ""
            console.log('it worked')
        }
        else if (compare104 == full104[1]) {
            max104 -=1
            let exit104 = full104[1] + Date()
            tiemo104.push(exit104)
            localStorage.setItem('checkout104',tiemo104)
            // Remove Guest Part
            kicked104 = full104.splice(1,1)
            document.getElementById('occupant104').innerHTML = "occupant(s): " + full104
            document.getElementById('wrong104').innerHTML = ""
            console.log('it worked')
        }
        else if (compare104 == full104[2]) {
            max104 -=1
            let exit104 = full104[2] + Date()
            tiemo104.push(exit104)
            localStorage.setItem('checkout104',tiemo104)
            // Remove Guest Part
            kicked104 = full104.splice(2,1)
            document.getElementById('occupant104').innerHTML = "occupant(s): " + full104
            document.getElementById('wrong104').innerHTML = ""
            console.log('it worked')
        }
        else {
            max104 -=1
            let exit104 = full104[3] + Date()
            tiemo104.push(exit104)
            localStorage.setItem('checkout104',tiemo104)
            // Remove Guest Part
            kicked104 = full104.splice(3,1)
            document.getElementById('occupant104').innerHTML = "occupant(s): " + full104
            document.getElementById('wrong104').innerHTML = ""
            console.log('it worked')
        }
        document.getElementById('overflow104').innerHTML = ""
        document.getElementById('eccono104').value = ""
    }
    else {
        document.getElementById('wrong104').innerHTML = "There is no one in this room with the same name. Maybe they're in a different one."
    }
}
// remove everyone from room
function a_jet24() {
    max104 = 0
    console.log('reset to 0')
    full104 = []
    document.getElementById('occupant104').innerHTML = "occupant(s): " + full104
}
// lock room
function holiday4() {
    let addone104 = document.getElementById('addone104')
    let removeone104 = document.getElementById('removeone104')
    let removeall104 = document.getElementById('removeall104')
    if (access104 == "unlocked") {
        document.getElementById('addone104').disabled = true
        document.getElementById('removeone104').disabled = true
        document.getElementById('removeall104').disabled = true
        document.getElementById('lockunlock104').innerHTML = "Unlock (To Manage Guests)"
        access104 = "locked"
    }
    else {
        document.getElementById('addone104').disabled = false
        document.getElementById('removeone104').disabled = false
        document.getElementById('removeall104').disabled = false
        document.getElementById('lockunlock104').innerHTML = "Lock (To Clean)"
        access104 = "unlocked"
    }
}

// ROOM 105
let access105 = "unlocked"
let dissable105 = false
let max105 = 0
let full105 = []
let over105 = []
let kicked105 = []
let teimo105 = []
let tiemo105 = []
// add person to room
function nothing5() {
    if (max105 < 4) {
        max105 +=1
        let room5flo1 = document.getElementById('eccono105').value
        full105.push(room5flo1)
        over105.push(room5flo1)
        let enter105 = room5flo1 + Date()
        teimo105.push(enter105)
        localStorage.setItem('checkin105',teimo105)
        document.getElementById('occupant105').innerHTML = "occupant(s): " + full105
        // save array it is ok to overwrite the key
        let local105 = localStorage.setItem('room105',over105)
        allcheckins.push(local105)
        document.getElementById('eccono105').value = ""
        document.getElementById('overflow105').innerHTML = ""
        document.getElementById('wrong105').innerHTML = ""
    }
    else {
        document.getElementById('overflow105').innerHTML = "The room is full"
        document.getElementById('eccono105').value = ""
    }
}
// remove speciffic person from room
function beats5() {
    let compare105 = document.getElementById('eccono105').value
    if (compare105 == full105[0] || compare105 == full105[1] || compare105 == full105[2] || compare105 == full105[3]) {
        if (compare105 == full105[0]) {
            max105 -=1
            let exit105 = full105[0] + Date()
            tiemo105.push(exit105)
            localStorage.setItem('checkout105',tiemo105)
            // Remove Guest Part
            kicked105 = full105.splice(0,1)
            document.getElementById('occupant105').innerHTML = "occupant(s): " + full105
            document.getElementById('wrong105').innerHTML = ""
            console.log('it worked')
        }
        else if (compare105 == full105[1]) {
            max105 -=1
            let exit105 = full105[1] + Date()
            tiemo105.push(exit105)
            localStorage.setItem('checkout105',tiemo105)
            // Remove Guest Part
            kicked105 = full105.splice(1,1)
            document.getElementById('occupant105').innerHTML = "occupant(s): " + full105
            document.getElementById('wrong105').innerHTML = ""
            console.log('it worked')
        }
        else if (compare105 == full105[2]) {
            max105 -=1
            let exit105 = full105[2] + Date()
            tiemo105.push(exit105)
            localStorage.setItem('checkout105',tiemo105)
            // Remove Guest Part
            kicked105 = full105.splice(2,1)
            document.getElementById('occupant105').innerHTML = "occupant(s): " + full105
            document.getElementById('wrong105').innerHTML = ""
            console.log('it worked')
        }
        else {
            max105 -=1
            let exit105 = full105[3] + Date()
            tiemo105.push(exit105)
            localStorage.setItem('checkout105',tiemo105)
            // Remove Guest Part
            kicked105 = full105.splice(3,1)
            document.getElementById('occupant105').innerHTML = "occupant(s): " + full105
            document.getElementById('wrong105').innerHTML = ""
            console.log('it worked')
        }
        document.getElementById('overflow105').innerHTML = ""
        document.getElementById('eccono105').value = ""
    }
    else {
        document.getElementById('wrong105').innerHTML = "There is no one in this room with the same name. Maybe they're in a different one."
    }
}
// remove everyone from room
function a_jet25() {
    max105 = 0
    console.log('reset to 0')
    full105 = []
    document.getElementById('occupant105').innerHTML = "occupant(s): " + full105
}
// lock room
function holiday5() {
    let addone105 = document.getElementById('addone105')
    let removeone105 = document.getElementById('removeone105')
    let removeall105 = document.getElementById('removeall105')
    if (access105 == "unlocked") {
        document.getElementById('addone105').disabled = true
        document.getElementById('removeone105').disabled = true
        document.getElementById('removeall105').disabled = true
        document.getElementById('lockunlock105').innerHTML = "Unlock (To Manage Guests)"
        access105 = "locked"
    }
    else {
        document.getElementById('addone105').disabled = false
        document.getElementById('removeone105').disabled = false
        document.getElementById('removeall105').disabled = false
        document.getElementById('lockunlock105').innerHTML = "Lock (To Clean)"
        access105 = "unlocked"
    }
}

// ROOM 106
let access106 = "unlocked"
let dissable106 = false
let max106 = 0
let full106 = []
let over106 = []
let kicked106 = []
let teimo106 = []
let tiemo106 = []
// add person to room
function nothing6() {
    if (max106 < 4) {
        max106 +=1
        let room6flo1 = document.getElementById('eccono106').value
        full106.push(room6flo1)
        over106.push(room6flo1)
        let enter106 = room6flo1 + Date()
        teimo106.push(enter106)
        localStorage.setItem('checkin106',teimo106)
        document.getElementById('occupant106').innerHTML = "occupant(s): " + full106
        // save array it is ok to overwrite the key
        let local106 = localStorage.setItem('room106',over106)
        allcheckins.push(local106)
        document.getElementById('eccono106').value = ""
        document.getElementById('overflow106').innerHTML = ""
        document.getElementById('wrong106').innerHTML = ""
    }
    else {
        document.getElementById('overflow106').innerHTML = "The room is full"
        document.getElementById('eccono106').value = ""
    }
}
// remove speciffic person from room
function beats6() {
    let compare106 = document.getElementById('eccono106').value
    if (compare106 == full106[0] || compare106 == full106[1] || compare106 == full106[2] || compare106 == full106[3]) {
        if (compare106 == full106[0]) {
            max106 -=1
            let exit106 = full106[0] + Date()
            tiemo106.push(exit106)
            localStorage.setItem('checkout106',tiemo106)
            // Remove Guest Part
            kicked106 = full106.splice(0,1)
            document.getElementById('occupant106').innerHTML = "occupant(s): " + full106
            document.getElementById('wrong106').innerHTML = ""
            console.log('it worked')
        }
        else if (compare106 == full106[1]) {
            max106 -=1
            let exit106 = full106[1] + Date()
            tiemo106.push(exit106)
            localStorage.setItem('checkout106',tiemo106)
            // Remove Guest Part
            kicked106 = full106.splice(1,1)
            document.getElementById('occupant106').innerHTML = "occupant(s): " + full106
            document.getElementById('wrong106').innerHTML = ""
            console.log('it worked')
        }
        else if (compare106 == full106[2]) {
            max106 -=1
            let exit106 = full106[2] + Date()
            tiemo106.push(exit106)
            localStorage.setItem('checkout106',tiemo106)
            // Remove Guest Part
            kicked106 = full106.splice(2,1)
            document.getElementById('occupant106').innerHTML = "occupant(s): " + full106
            document.getElementById('wrong106').innerHTML = ""
            console.log('it worked')
        }
        else {
            max106 -=1
            let exit106 = full106[3] + Date()
            tiemo106.push(exit106)
            localStorage.setItem('checkout106',tiemo106)
            // Remove Guest Part
            kicked106 = full106.splice(3,1)
            document.getElementById('occupant106').innerHTML = "occupant(s): " + full106
            document.getElementById('wrong106').innerHTML = ""
            console.log('it worked')
        }
        document.getElementById('overflow106').innerHTML = ""
        document.getElementById('eccono106').value = ""
    }
    else {
        document.getElementById('wrong106').innerHTML = "There is no one in this room with the same name. Maybe they're in a different one."
    }
}
// remove everyone from room
function a_jet26() {
    max106 = 0
    console.log('reset to 0')
    full106 = []
    document.getElementById('occupant106').innerHTML = "occupant(s): " + full106
}
// lock room
function holiday6() {
    let addone106 = document.getElementById('addone106')
    let removeone106 = document.getElementById('removeone106')
    let removeall106 = document.getElementById('removeall106')
    if (access106 == "unlocked") {
        document.getElementById('addone106').disabled = true
        document.getElementById('removeone106').disabled = true
        document.getElementById('removeall106').disabled = true
        document.getElementById('lockunlock106').innerHTML = "Unlock (To Manage Guests)"
        access106 = "locked"
    }
    else {
        document.getElementById('addone106').disabled = false
        document.getElementById('removeone106').disabled = false
        document.getElementById('removeall106').disabled = false
        document.getElementById('lockunlock106').innerHTML = "Lock (To Clean)"
        access106 = "unlocked"
    }
}

// local storage list of eveyone who checked in
let allcheckins = []
let checkhistory = localStorage.setItem('50poundsaperson',allcheckins)

// other button functions
function go_on_a_holiday() {
    location.href = "hoteltimes.html"
}
function go_on_a_vacation() {
    location.href = "hotle.html"
}