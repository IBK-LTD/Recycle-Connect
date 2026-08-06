/*====================================
    SELECT ELEMENTS
====================================*/

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

const copyBtn = document.getElementById("copyBtn");
const accountNumber = document.getElementById("accountNumber");

const confirmBtn = document.getElementById("confirmPayment");

/*====================================
    TAB SWITCHING
====================================*/

tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        // Remove active class from tabs
        tabs.forEach((item) => {
            item.classList.remove("active");
        });

        // Remove active class from contents
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });

        // Activate selected tab
        tab.classList.add("active");

        // Show selected content
        const target = document.getElementById(tab.dataset.tab);

        if(target){
            target.classList.add("active");
        }

    });

});

/*====================================
    COPY ACCOUNT NUMBER
====================================*/

copyBtn.addEventListener("click", () => {

    const number = accountNumber.textContent.trim();

    navigator.clipboard.writeText(number)
    .then(() => {

        copyBtn.innerHTML =
        `<i class="fa-solid fa-check"></i>`;

        copyBtn.style.background = "#16a34a";
        copyBtn.style.color = "#fff";

        setTimeout(() => {

            copyBtn.innerHTML =
            `<i class="fa-regular fa-copy"></i>`;

            copyBtn.style.background = "";
            copyBtn.style.color = "";

        }, 2000);

    })
    .catch(() => {

        alert("Unable to copy account number.");

    });

});

/*====================================
    BUTTON HOVER EFFECT
====================================*/

confirmBtn.addEventListener("mouseenter", () => {

    confirmBtn.style.transform = "translateY(-2px)";

});

confirmBtn.addEventListener("mouseleave", () => {

    confirmBtn.style.transform = "translateY(0)";

});

/*====================================
    BUTTON CLICK EFFECT
====================================*/

confirmBtn.addEventListener("mousedown", () => {

    confirmBtn.style.transform = "scale(.98)";

});

confirmBtn.addEventListener("mouseup", () => {

    confirmBtn.style.transform = "translateY(-2px)";

});

/*====================================
    PAGE LOADED
====================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    console.log("RecycleConnect Payment Page Loaded");

});

/*====================================
    COUNTDOWN TIMER
====================================*/

const countdown = document.getElementById("countdown");

let totalSeconds = 30 * 60; // 30 Minutes

const timer = setInterval(() => {

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    countdown.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    // Turn red in the last 5 minutes
    if (totalSeconds <= 300) {
        countdown.classList.add("countdown-warning");
    }

    // Time expired
    if (totalSeconds <= 0) {

        clearInterval(timer);

        countdown.textContent = "Expired";

        confirmBtn.disabled = true;

        confirmBtn.innerHTML = `
            <i class="fa-solid fa-clock"></i>
            Payment Session Expired
        `;

        return;
    }

    totalSeconds--;

}, 1000);

/*====================================
    PAYMENT CONFIRMATION
====================================*/

confirmBtn.addEventListener("click", () => {

    confirmBtn.disabled = true;

    confirmBtn.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Confirming Payment...
    `;

    setTimeout(() => {

        confirmBtn.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            Payment Submitted
        `;

        confirmBtn.style.background = "#16a34a";

        alert(
            "Your payment notification has been sent successfully.\n\nOur team will verify your payment shortly."
        );

    }, 2500);

});

/*====================================
    CARD ENTRANCE ANIMATION
====================================*/

const cards = document.querySelectorAll(
    ".transfer-card, .payment-right"
);

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";

    setTimeout(() => {

        card.style.transition = "all .6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, index * 200);

});

/*====================================
    TAB HOVER ANIMATION
====================================*/

tabs.forEach(tab => {

    tab.addEventListener("mouseenter", () => {

        if (!tab.classList.contains("active")) {
            tab.style.color = "#15803d";
        }

    });

    tab.addEventListener("mouseleave", () => {

        if (!tab.classList.contains("active")) {
            tab.style.color = "";
        }

    });

});

/*====================================
    COPY BUTTON TOOLTIP
====================================*/

copyBtn.setAttribute("title", "Copy Account Number");

/*====================================
    PREVENT MULTIPLE SUBMISSIONS
====================================*/

let paymentSubmitted = false;

confirmBtn.addEventListener("click", () => {

    if (paymentSubmitted) return;

    paymentSubmitted = true;

});

/*====================================
    CONSOLE MESSAGE
====================================*/

console.log(
    "%cRecycleConnect Payment Portal",
    "color:#16a34a;font-size:20px;font-weight:bold;"
);

console.log(
    "%cSecure payment page initialized successfully.",
    "color:#666;font-size:14px;"
);