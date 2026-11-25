
let boxes = document.querySelectorAll(".box");

let turn = document.querySelector("#turn");
let result = document.querySelector("#result");
let restart = document.querySelector("#restart");

let player = "X";
boxes.forEach((box) => {

    box.addEventListener("click", function() {

        if (box.innerText === "" && result.innerText === "") {
            box.innerText = player;
            if (boxes[0].innerText !== "" &&
                boxes[0].innerText === boxes[1].innerText &&
                boxes[1].innerText === boxes[2].innerText) {
                result.innerText = player + " Wins!";
            }
            else if (boxes[3].innerText !== "" &&
                boxes[3].innerText === boxes[4].innerText &&
                boxes[4].innerText === boxes[5].innerText) {
                result.innerText = player + " Wins!";
            }
            else if (boxes[6].innerText !== "" &&
                boxes[6].innerText === boxes[7].innerText &&
                boxes[7].innerText === boxes[8].innerText) {
                result.innerText = player + " Wins!";
            }
            else if (boxes[0].innerText !== "" &&
                boxes[0].innerText === boxes[3].innerText &&
                boxes[3].innerText === boxes[6].innerText) {
                result.innerText = player + " Wins!";
            }
            else if (boxes[1].innerText !== "" &&
                boxes[1].innerText === boxes[4].innerText &&
                boxes[4].innerText === boxes[7].innerText) {
                result.innerText = player + " Wins!";
            }
            else if (boxes[2].innerText !== "" &&
                boxes[2].innerText === boxes[5].innerText &&
                boxes[5].innerText === boxes[8].innerText) {
                result.innerText = player + " Wins!";
            }
            else if (boxes[0].innerText !== "" &&
                boxes[0].innerText === boxes[4].innerText &&
                boxes[4].innerText === boxes[8].innerText) {
                result.innerText = player + " Wins!";
            }
            else if (boxes[2].innerText !== "" &&
                boxes[2].innerText === boxes[4].innerText &&
                boxes[4].innerText === boxes[6].innerText) {
                result.innerText = player + " Wins!";
            }
            else if (
                boxes[0].innerText !== "" &&
                boxes[1].innerText !== "" &&
                boxes[2].innerText !== "" &&
                boxes[3].innerText !== "" &&
                boxes[4].innerText !== "" &&
                boxes[5].innerText !== "" &&
                boxes[6].innerText !== "" &&
                boxes[7].innerText !== "" &&
                boxes[8].innerText !== ""
            ) {
                result.innerText = "Match Draw!";
            }
            if (result.innerText === "") {

                if (player === "X") {
                    player = "O";
                }

                else {
                    player = "X";
                }

                turn.innerText = "Player " + player + " Turn";
            }

            else {
                turn.innerText = "Game Over";
            }

        }

    });

});

restart.addEventListener("click", function() {
    location.reload();
});
