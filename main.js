// Get ELement From Html
let boxButton = document.querySelectorAll(".squar");

let boxContainer = document.querySelector(".box-container");

let pElement = document.querySelector(".show p");
let spanEle = document.querySelector(".show span");


let squarArray = [];



let turn = "x";
// When You Click In the Boxs
boxContainer.addEventListener("click", function (e) {
    // Update P Element Data 
    pElement.innerHTML = "Turn: ";

    if (e.target.innerHTML === "" && turn === "x") {
        e.target.innerHTML = turn;

        spanEle.innerHTML = "O";

        turn = "o";
    }
    else if (e.target.innerHTML === "" && turn === "o") {
        e.target.innerHTML = turn;

        spanEle.innerHTML = "X";

        turn = "x";

    }

    WinnerCheck();

});


// Style Function 
function styling(num1, num2, num3) {

    pElement.innerHTML = "";
    spanEle.innerHTML = `Winner Is: ${squarArray[num1]}`;

    boxButton.forEach(el => el.style.opacity = ".5");

    document.getElementById(`box` + num1).style = "background-color:rgb(0 25 71); opacity: 1;";
    document.getElementById(`box` + num2).style = "background-color:rgb(0 25 71); opacity: 1;";
    document.getElementById(`box` + num3).style = "background-color:rgb(0 25 71); opacity: 1;";

    // Reset Value OF Turn 
    turn = "";

    // REload the Window 
    boxButton.forEach(el => el.addEventListener("click", function () { location.reload() }));

};

// Create Winner Check Function 
function WinnerCheck() {

    // Loop For TO Save Boxs In SquarArray
    for (let i = 1; i < 10; i++) {
        squarArray[i] = document.getElementById(`box${i}`).innerHTML;
    }

    // Check If Box InnerHTML Equal Each Ather

    // --------
    if (squarArray[1] === squarArray[2] && squarArray[2] === squarArray[3] && squarArray[2] != "") {

        // Call Styling Function
        styling(1, 2, 3);

    } else if (squarArray[4] === squarArray[5] && squarArray[5] === squarArray[6] && squarArray[5] != "") {

        // Call Styling Function
        styling(4, 5, 6);

    } else if (squarArray[7] === squarArray[8] && squarArray[8] === squarArray[9] && squarArray[9] != "") {

        // Call Styling Function
        styling(7, 8, 9);

    }

    // ||||||||||||
    else if (squarArray[1] === squarArray[4] && squarArray[4] === squarArray[7] && squarArray[4] != "") {

        // Call Styling Function
        styling(1, 4, 7);

    } else if (squarArray[2] === squarArray[5] && squarArray[5] === squarArray[8] && squarArray[5] != "") {

        // Call Styling Function
        styling(2, 5, 8);

    } else if (squarArray[3] === squarArray[6] && squarArray[6] === squarArray[9] && squarArray[9] != "") {

        // Call Styling Function
        styling(3, 6, 9);

    }

    // xxxxx
    else if (squarArray[1] === squarArray[5] && squarArray[5] === squarArray[9] && squarArray[5] != "") {

        // Call Styling Function
        styling(1, 5, 9);

    } else if (squarArray[3] === squarArray[5] && squarArray[5] === squarArray[7] && squarArray[5] != "") {

        // Call Styling Function
        styling(3, 5, 7);

    } else {
        if (squarArray[1] != "" && squarArray[2] != "" && squarArray[3] != "" && squarArray[4] != "" && squarArray[5] != "" && squarArray[6] != "" && squarArray[7] != "" && squarArray[8] != "" && squarArray[9] != "") {

            pElement.innerHTML = "";

            spanEle.innerHTML = "Draw";

            // REload the Window 
            boxButton.forEach(el => {

                el.style = "opacity: .7";

                el.addEventListener("click", function () { location.reload() })
            });

        };

    }
};