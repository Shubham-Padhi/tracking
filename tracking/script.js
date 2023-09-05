
// const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");
// const four = document.querySelector(".four");
// const five = document.querySelector(".five");

// one.onclick = function() {
//     one.classList.add("active");
//     two.classList.remove("active");
//     three.classList.remove("active");
//     four.classList.remove("active");
//     five.classList.remove("active");
// }

// two.onclick = function() {
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.remove("active");
//     four.classList.remove("active");
//     five.classList.remove("active");
// }
// three.onclick = function() {
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.add("active");
//     four.classList.remove("active");
//     five.classList.remove("active");
// }
// four.onclick = function() {
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.add("active");
//     four.classList.add("active");
//     five.classList.remove("active");
// }
// five.onclick = function() {
//     one.classList.add("active");
//     two.classList.add("active");
//     three.classList.add("active");
//     four.classList.add("active");
//     five.classList.add("active");
// }

document.addEventListener("DOMContentLoaded", function() {
    const progressBarSteps = document.querySelectorAll(".progress");

    function simulateProgress() {
        let step = 0;
        const interval = setInterval(function() {
            if (step >= progressBarSteps.length) {
                clearInterval(interval);
                redirectToCompletionPage();
                return;
            }
            
            progressBarSteps[step].classList.add("active");
            step++;
        }, 1500); // Adjust the interval as needed (milliseconds)
    }

    function redirectToCompletionPage() {
        window.location.href = "order_completed.html";
    }

    simulateProgress();
});


