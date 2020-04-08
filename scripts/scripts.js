////////////////////////////////////////////// Button Functions //////////////////////////////////////////////

function addCount(item, vendor) {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection(vendor)
            .doc(item)
            .onSnapshot(
                function (snap) {
                    console.log(snap.data().Calories);
                    let x = snap.data().Calories;
                    db.collection("Users").doc(user.uid).update({
                        calories: firebase.firestore.FieldValue.increment(x)
                    });
                }
            );
    })
}


////////////////////////////////////////////// Profile Functions //////////////////////////////////////////////

function getCalories() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Users").doc(user.uid)
            .onSnapshot(function (snap) {
                document.getElementById("Calories").innerHTML = "Calories: " + snap.data().calories;
            });
    });
}


function getName() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Users").doc(user.uid)
            .onSnapshot(function (snap) {
                document.getElementById("user_name").innerHTML = snap.data().name;
            });
    });
}


////////////////////////////////////////////// Tims Functions //////////////////////////////////////////////
function getBlueBerryMuffin() {
    db.collection("Tims")
        .doc("BlueberryMuffin")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("blueberry").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getTimbits() {
    db.collection("Tims")
        .doc("Timbits")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("Timbits").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getClassicBagel() {
    db.collection("Tims")
        .doc("Classic Bagel")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("ClassicBagel").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getOriginalBlendCoffeeFood() {
    db.collection("Tims")
        .doc("Original Blend Coffee")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("OriginalBlendCoffeeFood").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getTurkeyBaconClub() {
    db.collection("Tims")
        .doc("TurkeyBaconClub")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("TurkeyBacon").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getClassicCookie() {
    db.collection("Tims")
        .doc("ClassicCookies")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("ClassicCookie").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price;
            }
        )
}


////////////////////////////////////////////// Booster Functions //////////////////////////////////////////////
function getMindOverMatcha() {
    db.collection("Booster")
        .doc("MindOverMatcha")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("MindOverMatcha").innerHTML = "Calories: " + snap.data().Calories +
                    "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getPomegranatePunch() {
    db.collection("Booster")
        .doc("PomegranatePunch")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("PomegranatePunch").innerHTML = "Calories: " + snap.data().Calories +
                    "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getRippedBerry() {
    db.collection("Booster")
        .doc("RippedBerry")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("RippedBerry").innerHTML = "Calories: " + snap.data().Calories +
                    "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getStar() {
    db.collection("Booster")
        .doc("StarBerriesBananasRegular")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("StarBerriesBananasRegular").innerHTML = "Calories: " + snap.data()
                    .Calories + "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getWildBerry() {
    db.collection("Booster")
        .doc("WildBerry")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("WildBerry").innerHTML = "Calories: " + snap.data().Calories + "<br>" +
                    "Price: " + snap.data().Price;
            }
        )
}

function getCocoCrush() {
    db.collection("Booster")
        .doc("Coco Crush")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("CocoCrush").innerHTML = "Calories: " + snap.data().Calories + "<br>" +
                    "Price: " + snap.data().Price;
            }
        )
}

////////////////////////////////////////////// TripleOs Functions //////////////////////////////////////////////

function getBCCHICKEN() {
    db.collection("TripleO")
        .doc("BCchicken")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                var cal = snap.data().Calories;
                localStorage.setItem(snap.id, cal);
                document.getElementById("BCCHICKEN").innerHTML = "Calories: " + cal + "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getBaconCheddar() {
    db.collection("TripleO")
        .doc("Baconcheddar")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("BaconCheddar").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getBaconCheddarCal() {
    db.collection("TripleO")
        .doc("Baconcheddar")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("BaconCheddar").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price
                + "<br>" + "Calories per Dollar: " + snap.data().value;
            }
        )
}

function getChickenBurger() {
    db.collection("TripleO")
        .doc("ChickenBurger")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("ChickenBurger").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getChickenBurgerCal() {
    db.collection("TripleO")
        .doc("ChickenBurger")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("ChickenBurger").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price
                + "<br>" + "Calories per Dollar: " + snap.data().value;
            }
        )
}

function getChipotle() {
    db.collection("TripleO")
        .doc("ChipoleBBQ")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("Chipotle").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getChipotleCal() {
    db.collection("TripleO")
        .doc("ChipoleBBQ")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("Chipotle").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price
                + "<br>" + "Calories per Dollar: " + snap.data().value;
            }
        )
}

function getDCT() {
    db.collection("TripleO")
        .doc("DippinChicken")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("DCT").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price;
            }
        )
}

function getSpicyUlt() {
    db.collection("TripleO")
        .doc("SpicyUltimate")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("SUC").innerHTML = "Calories: " + snap.data().Calories + "<br>" + "Price: " + snap.data().Price;
            }
        )
}

////////////////////////////////////////////// Value Functions //////////////////////////////////////////////


function getBlueBerryMuffinCal() {
    db.collection("Tims")
        .doc("BlueberryMuffin")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("blueberry").innerHTML = "Calories: " + snap.data().Calories + "<br>" +
                    "Price: " + snap.data().Price +
                    "<br>" + "Calories per Dollar: " + snap.data().value;
            }
        )
}

function getTimbitsCal() {
    db.collection("Tims")
        .doc("Timbits")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("Timbits").innerHTML = "Calories: " + snap.data().Calories + "<br>" +
                    "Price: " + snap.data().Price +
                    "<br>" + "Calories per Dollar: " + snap.data().value;
            }
        )
}

function getClassicCookieCal() {
    db.collection("Tims")
        .doc("ClassicCookies")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("ClassicCookie").innerHTML = "Calories: " + snap.data().Calories +
                    "<br>" + "Price: " + snap.data().Price +
                    "<br>" + "Calories per Dollar: " + snap.data().value;
            }
        )
}

function getPomegranatePunchCal() {
    db.collection("Booster")
        .doc("PomegranatePunch")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("Pomegranate").innerHTML = "Calories: " + snap.data().Calories +
                    "<br>" + "Price: " + snap.data().Price +
                    "<br>" + "Calories per Dollar: " + snap.data().value;
            }
        )
}

function getRippedBerryCal() {
    db.collection("Booster")
        .doc("RippedBerry")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("RippedBerry").innerHTML = "Calories: " + snap.data().Calories +
                    "<br>" + "Price: " + snap.data().Price +
                    "<br>" + "Calories per Dollar: " + snap.data().value;
            }
        )
}

function getStarCal() {
    db.collection("Booster")
        .doc("StarBerriesBananasRegular")
        .onSnapshot(
            function (snap) {
                console.log(snap.data());
                document.getElementById("StarBerriesBananasRegular").innerHTML = "Calories: " + snap.data()
                    .Calories + "<br>" + "Price: " + snap.data().Price +
                    "<br>" + "Calories per Dollar: " + snap.data().value;
            }
        )
}

