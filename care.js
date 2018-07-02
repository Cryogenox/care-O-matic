    function subbed(){
        var mainAns;
    var One = document.getElementById("qOne").value
    var Two = document.getElementById("qTwo").value
    var Three = document.getElementById("qThree").value
    var Four = document.getElementById("qFour").value
    console.log('question one : ' + One + ' question two : ' + Two + ' question three : ' + Three + ' question four : ' + Four);

    if(Four == 0) {
        mainAns = "Yes. Get it managed.";
    }

    if(One + Two + Three > 1 && Four == 1){
        mainAns = "YES.";
    }

    if(One + Two + Three == 0 && Four == 1) {
        mainAns = "nah."
    }

            document.getElementById("answer").innerHTML = mainAns;
}
