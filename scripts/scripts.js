function addCount(item, vendor) {

    firebase.auth().onAuthStateChanged(function (user) {
        db.collection(vendor)
        .doc(item)
        .onSnapshot(
            function (snap) {
                console.log(snap.data().Calories);
                let x =  snap.data().Calories;
                db.collection("Users").doc(user.uid).update({
                    calories: firebase.firestore.FieldValue.increment(x)
                });
            }
        );

    })
    /**
    var cal = localStorage.getItem(item)
    console.log(cal);
    console.log(item);
    let count = parseInt(localStorage.getItem("total")) + parseInt(cal);
    localStorage.setItem("total", count);
    document.getElementById("currenttotal").innerHTML = count;
    */
}

function getCalories() {
    db.collection("Tims")
        .doc("BlueberryMuffin")
        .onSnapshot(
            function (snap) {
                console.log(snap.data().Calories);
                return snap.data().Calories
            }
        )
}



function finishlogging() {
    var finish = localStorage.getItem("total");
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users")
            .doc(user.uid)
            .update({
                "mytotal": finish
            })
    })
    localStorage.getItem("total", 0);
}

function yesterdayscount() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users")
            .doc(user.uid)
        if (d.data().total != null) {
            x = d.data().total;
        } else {
            x = 0;
        }
        document.getElementById("yesterdaycount").innerHTML = x;
    })
}

/**
 * firebase log user score
 */
function writeScore(x) {
    document.getElementById("quit").addEventListener("click", function (e) {
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("Player").doc(user.uid).update({
                score: x
            });
        });
    });
}