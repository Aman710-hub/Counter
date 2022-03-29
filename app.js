// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// set event listner
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    console.log(e.currentTarget);

    //  decrease
    if (styles.contains("decrease")) {
      count--;
    }
    value.textContent = count;

    // reset
    if (styles.contains("reset")) {
      count = 0;
    }
    value.textContent = count;

    //  increase
    if (styles.contains("increase")) {
      count++;
    }
    value.textContent = count;

    //  change color for increasing
    if (count > 0) {
      value.style.color = "green";
    }

    //  change color for decreasing
    if (count < 0) {
      value.style.color = "red";
    }

    //  change color for reseting
    if (count === 0) {
      value.style.color = "black";
    }
  });
});
