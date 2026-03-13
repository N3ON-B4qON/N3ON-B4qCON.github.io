// ROOM 101
// this is for the lock room function
let access101 = "unlocked"
// this is the counter of how many people are in the room.
let max101 = 0
// the array to display the people in a room.
let full101 = []
// 
let kicked101 = []
// the other 2 arrays are used for date-time
let teimo101 = []
let tiemo101 = []
// add person to room
function nothing1() {
    // the conditional is to check how many people are in the room
    if (max101 < 4) {
        // if there are less than 4 people 1 person will be added & the counter will go up.
        max101 +=1
        // take the input value & turn it into a variable
        let room1flo1 = document.getElementById('eccono101').value
        // add the variable into an array
        full101.push(room1flo1)
        // update the div box in the html to display the array
        document.getElementById('occupant101').innerHTML = "occupant(s): " + full101
        // the last 3 lines is to clear the input field & to remove the messages that pop up when theres either too many people or if someone clicked the remove button by accident.
        document.getElementById('eccono101').value = ""
        document.getElementById('overflow101').innerHTML = ""
        document.getElementById('wrong101').innerHTML = ""
    }
    else {
        // if the room is full display the message in the div box & clear the input field
        document.getElementById('overflow101').innerHTML = "The room is full"
        document.getElementById('eccono101').value = ""
    }
}
// remove speciffic person from room
function beats1() {
    // take the value from the input field & turn it into a vaiable.
    let compare101 = document.getElementById('eccono101').value
    // compare the vairable to the people in the array
    if (compare101 == full101[0] || compare101 == full101[1] || compare101 == full101[2] || compare101 == full101[3]) {
        if (compare101 == full101[0]) {
            // subtract one from the count to adjust how many people are in the room now.
            max101 -=1
            // Remove Guest Part
            // splice the guest out of the array to show they have been removed/checked out
            kicked101 = full101.splice(0,1)
            document.getElementById('removal').innerHTML = kicked101
            // refresh list to new one
            document.getElementById('occupant101').innerHTML = "occupant(s): " + full101
            // this is to remove the message that pops up when the remove button is clicked but doesnt match a person in the room
            document.getElementById('wrong101').innerHTML = ""
            // this was just to see if the conditional would register
            console.log('it worked')
        }
        else if (compare101 == full101[1]) {
            max101 -=1
            // Remove Guest Part
            kicked101 = full101.splice(1,1)
            document.getElementById('occupant101').innerHTML = "occupant(s): " + full101
            document.getElementById('wrong101').innerHTML = ""
            console.log('it worked')
        }
        else if (compare101 == full101[2]) {
            max101 -=1
            // Remove Guest Part
            kicked101 = full101.splice(2,1)
            document.getElementById('occupant101').innerHTML = "occupant(s): " + full101
            document.getElementById('wrong101').innerHTML = ""
            console.log('it worked')
        }
        else {
            max101 -=1
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
        // if the variable doesn't match with anyone, display this message in the div box.
        document.getElementById('wrong101').innerHTML = "There is no one in this room with the same name. Maybe they're in a different one."
    }
}
// remove everyone from room
function a_jet21() {
    // reset the count to zero
    max101 = 0
    // to see if it works
    console.log('reset to 0')
    // clear the array
    full101 = []
    // refesh what the div box displays
    document.getElementById('occupant101').innerHTML = "occupant(s): " + full101
}
// lock room
function holiday1() {
    if (access101 == "unlocked") {
        // set the buttons disabled value to true to make them unuseable.
        document.getElementById('addone101').disabled = true
        document.getElementById('removeone101').disabled = true
        document.getElementById('removeall101').disabled = true
        // change what the button says in the html.
        document.getElementById('lockunlock101').innerHTML = "Unlock (To Manage Guests)"
        // set the variable to 'locked' so the buttons unlock upon next press
        access101 = "locked"
    }
    else {
        // set the buttons disabled value to false to make them useable
        document.getElementById('addone101').disabled = false
        document.getElementById('removeone101').disabled = false
        document.getElementById('removeall101').disabled = false
        // change what the button says in the html
        document.getElementById('lockunlock101').innerHTML = "Lock (To Clean)"
        // set the variable to 'unlocked' so the buttons lock upon next press
        access101 = "unlocked"
    }
}

// ROOM 102
let access102 = "unlocked"
let max102= 0
let full102 = []
let kicked102 = []
let teimo102 = []
let tiemo102 = []
// add person to room
function nothing2() {
    if (max102 < 4) {
        max102 +=1
        let room2flo1 = document.getElementById('eccono102').value
        full102.push(room2flo1)
        document.getElementById('occupant102').innerHTML = "occupant(s): " + full102
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
            // Remove Guest Part
            kicked102 = full102.splice(0,1)
            document.getElementById('occupant102').innerHTML = "occupant(s): " + full102
            document.getElementById('wrong102').innerHTML = ""
            console.log('it worked')
        }
        else if (compare102 == full102[1]) {
            max102 -=1
            // Remove Guest Part
            kicked102 = full102.splice(1,1)
            document.getElementById('occupant102').innerHTML = "occupant(s): " + full102
            document.getElementById('wrong102').innerHTML = ""
            console.log('it worked')
        }
        else if (compare102 == full102[2]) {
            max102 -=1
            // Remove Guest Part
            kicked102 = full102.splice(2,1)
            document.getElementById('occupant102').innerHTML = "occupant(s): " + full102
            document.getElementById('wrong102').innerHTML = ""
            console.log('it worked')
        }
        else {
            max102 -=1
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
let max103 = 0
let full103 = []
let kicked103 = []
let teimo103 = []
let tiemo103 = []
// add person to room
function nothing3() {
    if (max103 < 4) {
        max103 +=1
        let room3flo1 = document.getElementById('eccono103').value
        full103.push(room3flo1)
        document.getElementById('occupant103').innerHTML = "occupant(s): " + full103
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
            // Remove Guest Part
            kicked103 = full103.splice(0,1)
            document.getElementById('occupant103').innerHTML = "occupant(s): " + full103
            document.getElementById('wrong103').innerHTML = ""
            console.log('it worked')
        }
        else if (compare103 == full103[1]) {
            max103 -=1
            // Remove Guest Part
            kicked103 = full103.splice(1,1)
            document.getElementById('occupant103').innerHTML = "occupant(s): " + full103
            document.getElementById('wrong103').innerHTML = ""
            console.log('it worked')
        }
        else if (compare103 == full103[2]) {
            max103 -=1
            // Remove Guest Part
            kicked103 = full103.splice(2,1)
            document.getElementById('occupant103').innerHTML = "occupant(s): " + full103
            document.getElementById('wrong103').innerHTML = ""
            console.log('it worked')
        }
        else {
            max103 -=1
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
let max104 = 0
let full104 = []
let kicked104 = []
let teimo104 = []
let tiemo104 = []
// add person to room
function nothing4() {
    if (max104 < 4) {
        max104 +=1
        let room4flo1 = document.getElementById('eccono104').value
        full104.push(room4flo1)
        document.getElementById('occupant104').innerHTML = "occupant(s): " + full104
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
            // Remove Guest Part
            kicked104 = full104.splice(0,1)
            document.getElementById('occupant104').innerHTML = "occupant(s): " + full104
            document.getElementById('wrong104').innerHTML = ""
            console.log('it worked')
        }
        else if (compare104 == full104[1]) {
            max104 -=1
            // Remove Guest Part
            kicked104 = full104.splice(1,1)
            document.getElementById('occupant104').innerHTML = "occupant(s): " + full104
            document.getElementById('wrong104').innerHTML = ""
            console.log('it worked')
        }
        else if (compare104 == full104[2]) {
            max104 -=1
            // Remove Guest Part
            kicked104 = full104.splice(2,1)
            document.getElementById('occupant104').innerHTML = "occupant(s): " + full104
            document.getElementById('wrong104').innerHTML = ""
            console.log('it worked')
        }
        else {
            max104 -=1
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
let max105 = 0
let full105 = []
let kicked105 = []
let teimo105 = []
let tiemo105 = []
// add person to room
function nothing5() {
    if (max105 < 4) {
        max105 +=1
        let room5flo1 = document.getElementById('eccono105').value
        full105.push(room5flo1)
        document.getElementById('occupant105').innerHTML = "occupant(s): " + full105
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
            // Remove Guest Part
            kicked105 = full105.splice(0,1)
            document.getElementById('occupant105').innerHTML = "occupant(s): " + full105
            document.getElementById('wrong105').innerHTML = ""
            console.log('it worked')
        }
        else if (compare105 == full105[1]) {
            max105 -=1
            // Remove Guest Part
            kicked105 = full105.splice(1,1)
            document.getElementById('occupant105').innerHTML = "occupant(s): " + full105
            document.getElementById('wrong105').innerHTML = ""
            console.log('it worked')
        }
        else if (compare105 == full105[2]) {
            max105 -=1
            // Remove Guest Part
            kicked105 = full105.splice(2,1)
            document.getElementById('occupant105').innerHTML = "occupant(s): " + full105
            document.getElementById('wrong105').innerHTML = ""
            console.log('it worked')
        }
        else {
            max105 -=1
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
let max106 = 0
let full106 = []
let kicked106 = []
let teimo106 = []
let tiemo106 = []
// add person to room
function nothing6() {
    if (max106 < 4) {
        max106 +=1
        let room6flo1 = document.getElementById('eccono106').value
        full106.push(room6flo1)
        document.getElementById('occupant106').innerHTML = "occupant(s): " + full106
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
            // Remove Guest Part
            kicked106 = full106.splice(0,1)
            document.getElementById('occupant106').innerHTML = "occupant(s): " + full106
            document.getElementById('wrong106').innerHTML = ""
            console.log('it worked')
        }
        else if (compare106 == full106[1]) {
            max106 -=1
            // Remove Guest Part
            kicked106 = full106.splice(1,1)
            document.getElementById('occupant106').innerHTML = "occupant(s): " + full106
            document.getElementById('wrong106').innerHTML = ""
            console.log('it worked')
        }
        else if (compare106 == full106[2]) {
            max106 -=1
            // Remove Guest Part
            kicked106 = full106.splice(2,1)
            document.getElementById('occupant106').innerHTML = "occupant(s): " + full106
            document.getElementById('wrong106').innerHTML = ""
            console.log('it worked')
        }
        else {
            max106 -=1
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
