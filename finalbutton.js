function addCount(item){
        
        var cal = localStorage.getItem(item)
        console.log(cal);
        console.log(item);
        let count = parseInt(localStorage.getItem("total")) + parseInt(cal);
        localStorage.setItem("total", count);
        document.getElementById("currenttotal").innerHTML = count;
    }   
    //updates data for user 
    function finishlogging(){
        var finish = localStorage.getItem("total");
        firebase.auth().onAuthStateChanged(function(user){
            db.collection("users")
            .doc(user.uid)
            .update( {
                "mytotal": finish
            } )


             })
        document.getElementById("finishlog").innerHTML = finish;
        localStorage.getItem("total", 0);

    }