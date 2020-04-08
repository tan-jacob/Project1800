function addCount(item) {

    var cal = localStorage.getItem(item)
    console.log(cal);
    console.log(item);
    let count = parseInt(localStorage.getItem("total")) + parseInt(cal);
    localStorage.setItem("total", count);
    document.getElementById("currenttotal").innerHTML = count;
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