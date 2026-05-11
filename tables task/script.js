function table() {
    let num = document.getElementById("num").value;

    let result = "";
    

    for (let i = 1; i <= 10; i++) {
        result += num + " x " + i + " = " + num * i + "<br>";
    }
        document.getElementById("result").innerHTML = result;

        if (num === "") {
            document.getElementById("result").innerHTML = "Please enter a number.";
            document.getElementById("result").style.color = "red";
        }
        else{
            document.getElementById("result").innerHTML = result;
            document.getElementById("result").style.color = "black";
        }

}