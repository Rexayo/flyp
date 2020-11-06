/*------------------NAV------------------*/

//LIGHT AND DARK MODE TOGGLE FOR NAV
$(".light").click(function () {
  $("i", this).toggleClass("fa-toggle-on fa-toggle-off");
  $("i", this).toggleClass("text-dark text-white");
  $(".navbar").toggleClass("navbar-light navbar-dark");
  $(".navbar").toggleClass("bg-light bg-dark");
  $(".navbar-brand").toggleClass("text-dark text-white");
  $(".menu-icon").toggleClass("text-dark text-light");
  $("#level-text").toggleClass("text-dark text-light");
});

// DIFFICULTY SELECTOR
document.getElementById("level-text").innerHTML = "Level One";

$(".difficultySetting01").click(function () {
  document.getElementById("level-text").innerHTML = "Level One";
});

$(".difficultySetting02").click(function () {
  document.getElementById("level-text").innerHTML = "Level Two";
});

$(".difficultySetting03").click(function () {
  document.getElementById("level-text").innerHTML = "Level Three";
});

$(".difficultySetting04").click(function () {
  document.getElementById("level-text").innerHTML = "Level Four";
});



//SWITCH MENU ICON
$(".menu-icon").click(function () {
  $("i", this).toggleClass("fa-hand-o-down fa-hand-o-up");
});

/*----------------------DEFAULT GRID--------------------------*/
for (let i = 0; i < 120; i++) {
  $(".level-one").append('<div class="col-1 grey-bg"><img></div>');
  function switchToDark() {
    $(".col-1").toggleClass("grey-bg dark-bg");
  }
}

var defaultGrid = document.getElementsByClassName("col-1");

function reset(){
     //RESET STARTS HERE

    for (let j = 0; j < defaultGrid.length; j++) {
    let box1 = 13;
    let box2 = 17;
    let box3 = 61;
    let box4 = 65;
    let across = 5;
    let nextLine = 12;
defaultGrid[j].style.border = "none";
    //LEVEL ONE - Borders
    if (
      // LEVEL ONE - Top border
      j > box1 - nextLine &&
      j < box2 + across - nextLine
    ) {
      defaultGrid[j].style.borderBottom = "1px solid black";
    } else if (
      //LEVEL ONE - left border
      j == box1 ||
      j == box1 + nextLine ||
      j == box1 + 2 * nextLine ||
      j == box1 + 3 * nextLine ||
      j == box1 + 4 * nextLine ||
      j == box1 + 5 * nextLine ||
      j == box1 + 6 * nextLine ||
      j == box1 + 7 * nextLine
    ) {
      defaultGrid[j].style.borderRight = "1px solid black";
    } else if (
      //LEVEL ONE - middle vertical border
      j == box2 ||
      j == box2 + nextLine ||
      j == box2 + 2 * nextLine ||
      j == box2 + 3 * nextLine ||
      j == box2 + 4 * nextLine ||
      j == box2 + 5 * nextLine ||
      j == box2 + 6 * nextLine ||
      j == box2 + 7 * nextLine
    ) {
      if (j == box2 + 3 * nextLine) {
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.backgroundColor = gridBackColour;
      } else defaultGrid[j].style.borderRight = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - middle horizontal border
      j > box1 + 3 * nextLine &&
      j < box2 + across + 3 * nextLine
    ) {
      defaultGrid[j].style.borderBottom = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - right border
      j == box2 + across ||
      j == box2 + across + nextLine ||
      j == box2 + across + 2 * nextLine ||
      j == box2 + across + 3 * nextLine ||
      j == box2 + across + 4 * nextLine ||
      j == box2 + across + 5 * nextLine ||
      j == box2 + across + 6 * nextLine ||
      j == box2 + across + 7 * nextLine
    ) {
      defaultGrid[j].style.borderLeft = "1px solid black";
    } else if (
      //LEVEL ONE - bottom border
      j > box3 + 4 * nextLine &&
      j < box4 + across + 4 * nextLine
    ) {
      defaultGrid[j].style.borderTop = "1px solid black";
    } else if (
      //LEVEL ONE - back colour A A
      levelOneGridBox1(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - back colour B
      levelOneGridBox2(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - back colour C
      levelOneGridBox3(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - back colour D
      levelOneGridBox4(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else {
      document
        .getElementById("darkMode")
        .addEventListener("click", switchToDark);
    }
  }

    //RESET ENDS HERE


}
