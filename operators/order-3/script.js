const directionBtn = document.getElementById("directionBtn");
const receiptBtn = document.getElementById("receiptBtn");

const infoCards = document.querySelectorAll(".info-card");
const stepCards = document.querySelectorAll(".step-card");

const successIcon = document.querySelector(".success-icon");

// PAGE LOAD ANIMATION

window.addEventListener("load", () => {

    [...infoCards, ...stepCards].forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "all .5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});

// VIEW DIRECTIONS BUTTON

directionBtn.addEventListener("click", () => {

    directionBtn.innerHTML = `
        <i class="fa-solid fa-location-dot"></i>
        Opening Directions...
    `;

    setTimeout(() => {

        // Replace with your actual hub location
        window.open(
            "https://maps.google.com/?q=Lagos+Industrial+Zone+Block+4",
            "_blank"
        );

        directionBtn.innerHTML = `
            <i class="fa-solid fa-location-dot"></i>
            View Directions to Hub
        `;

    }, 1000);

});

// DOWNLOAD RECEIPT BUTTON

receiptBtn.addEventListener("click", () => {

    receiptBtn.disabled = true;

    receiptBtn.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Downloading...
    `;

    setTimeout(() => {

        alert("Receipt downloaded successfully.");

        receiptBtn.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            Download Complete
        `;

    }, 2000);

});

// STEP CARD HOVER EFFECT

stepCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-6px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// INFO CARD HOVER EFFECT

infoCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-5px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

// SUCCESS ICON ROTATION

successIcon.addEventListener("mouseenter", () => {

    successIcon.style.transform = "rotate(15deg) scale(1.1)";

});

successIcon.addEventListener("mouseleave", () => {

    successIcon.style.transform = "rotate(0deg) scale(1)";

});

// BUTTON CLICK EFFECT

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mousedown", () => {

        button.style.transform = "scale(.97)";

    });

    button.addEventListener("mouseup", () => {

        button.style.transform = "scale(1)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// CONSOLE MESSAGE

console.log(
    "%cReservation Confirmation Loaded",
    "color:#17934b;font-size:18px;font-weight:bold;"
);

// STEP PROGRESS ANIMATION

let currentStep = 0;

function highlightStep() {

    stepCards.forEach((card, index) => {

        if (index <= currentStep) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }

    });

    if (currentStep < stepCards.length - 1) {
        currentStep++;
    }

}

// Animate every 3 seconds
setInterval(highlightStep, 3000);

// KEYBOARD SHORTCUTS

document.addEventListener("keydown", (event) => {

    // Ctrl + D → Download Receipt
    if (event.ctrlKey && event.key.toLowerCase() === "d") {

        event.preventDefault();
        receiptBtn.click();

    }

    // Ctrl + M → Open Map
    if (event.ctrlKey && event.key.toLowerCase() === "m") {

        event.preventDefault();
        directionBtn.click();

    }

});

// SHARE RESERVATION

async function shareReservation() {

    if (!navigator.share) return;

    try {

        await navigator.share({

            title: "RecycleConnect Reservation",

            text:
            "My reservation has been confirmed! Order #EC-9921.",

            url: window.location.href

        });

    } catch (error) {

        console.log("Share cancelled.");

    }

}

// Double-click Download button to share
receiptBtn.addEventListener("dblclick", shareReservation);

// COPY ORDER NUMBER

const orderTag = document.querySelector(".order-tag");

orderTag.addEventListener("click", () => {

    navigator.clipboard.writeText("EC-9921");

    const original = orderTag.textContent;

    orderTag.textContent = "Copied!";

    setTimeout(() => {

        orderTag.textContent = original;

    }, 1800);

});

// SUCCESS BACKGROUND FLASH

function successFlash() {

    document.body.animate(

        [

            { background: "#f5f7f6" },

            { background: "#e9f9ef" },

            { background: "#f5f7f6" }

        ],

        {

            duration: 900

        }

    );

}

setTimeout(successFlash, 1200);

// BUTTON LOADING ANIMATION

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", () => {

        button.style.pointerEvents = "none";

        setTimeout(() => {

            button.style.pointerEvents = "auto";

        }, 2000);

    });

});

// LIVE DATE & TIME

const dateRow = document.querySelectorAll(".detail-row strong")[2];

setInterval(() => {

    const now = new Date();

    dateRow.textContent =
        now.toLocaleDateString("en-US", {

            month: "short",
            day: "numeric",
            year: "numeric"

        }) +

        " · " +

        now.toLocaleTimeString("en-US", {

            hour: "2-digit",
            minute: "2-digit"

        });

}, 1000);

// SUCCESS ICON PULSE

setInterval(() => {

    successIcon.animate(

        [

            { transform: "scale(1)" },

            { transform: "scale(1.12)" },

            { transform: "scale(1)" }

        ],

        {

            duration: 900

        }

    );

}, 4000);

// PAGE READY MESSAGE

console.log(
    "%cRecycleConnect Reservation Ready",
    "color:#17934b;font-size:20px;font-weight:bold;"
);

console.log(
    "%cAll interactive features initialized successfully.",
    "color:#666;font-size:14px;"
);