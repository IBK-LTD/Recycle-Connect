/*====================================
    PRODUCT DETAILS
====================================*/

const pricePerKg = 21.50;
const platformFeeRate = 0.015;

/*====================================
    ELEMENTS
====================================*/

const quantityInput = document.getElementById("quantity");

const subtotalText = document.getElementById("subtotal");
const platformFeeText = document.getElementById("platformFee");
const totalEstimateText = document.getElementById("totalEstimate");

const purchaseBtn = document.getElementById("purchaseBtn");

/*====================================
    FORMAT CURRENCY
====================================*/

function formatCurrency(amount) {
    return "₦" + amount.toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

/*====================================
    UPDATE PURCHASE SUMMARY
====================================*/

function updateSummary() {

    let quantity = parseFloat(quantityInput.value);

    // Prevent invalid values
    if (isNaN(quantity) || quantity < 50) {
        quantity = 50;
        quantityInput.value = quantity;
    }

    if (quantity > 1000) {
        quantity = 1000;
        quantityInput.value = quantity;
    }

    // Calculations
    const subtotal = quantity * pricePerKg;
    const platformFee = subtotal * platformFeeRate;
    const totalEstimate = subtotal + platformFee;

    // Display values
    subtotalText.textContent = formatCurrency(subtotal);

    platformFeeText.textContent = formatCurrency(platformFee);

    totalEstimateText.textContent = formatCurrency(totalEstimate);

}

/*====================================
    LIVE UPDATE
====================================*/

quantityInput.addEventListener("input", updateSummary);

quantityInput.addEventListener("keyup", updateSummary);

quantityInput.addEventListener("change", updateSummary);

/*====================================
    INITIAL LOAD
====================================*/

updateSummary();

/*====================================
    PURCHASE BUTTON
====================================*/

purchaseBtn.addEventListener("click", function () {

    const quantity = parseFloat(quantityInput.value);

    if (isNaN(quantity) || quantity < 50 || quantity > 1000) {

        alert("Please enter a quantity between 50kg and 1000kg.");

        quantityInput.focus();

        return;

    }

    purchaseBtn.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Processing...
    `;

    purchaseBtn.disabled = true;

    setTimeout(() => {

        alert(
            `Purchase request submitted successfully!\n\nQuantity: ${quantity}kg`
        );

        purchaseBtn.innerHTML = `
            <i class="fa-solid fa-paper-plane"></i>
            Submit Purchase Request
        `;

        purchaseBtn.disabled = false;

    }, 1800);

});

/*====================================
    PROGRESS BAR ANIMATION
====================================*/

window.addEventListener("load", () => {

    const progressBars = document.querySelectorAll(".progress-fill");

    progressBars.forEach((bar) => {

        const width = bar.style.width || window.getComputedStyle(bar).width;

        bar.style.width = "0";

        setTimeout(() => {

            if (bar.classList.contains("fill-40")) {

                bar.style.width = "40%";

            }

            else if (bar.classList.contains("fill-60")) {

                bar.style.width = "60%";

            }

            else if (bar.classList.contains("fill-65")) {

                bar.style.width = "65%";

            }

            else if (bar.classList.contains("fill-90")) {

                bar.style.width = "90%";

            }

        }, 300);

    });

});

/*====================================
    SMOOTH CARD ANIMATION
====================================*/

const cards = document.querySelectorAll(
    ".price-card, .impact-card, .origin-card, .purchase-card"
);

cards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = "all .6s ease";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, index * 150);

});

/*====================================
    INPUT VALIDATION
====================================*/

quantityInput.addEventListener("keypress", function (e) {

    if (!/[0-9]/.test(e.key)) {

        e.preventDefault();

    }

});

/*====================================
    ENTER KEY SUBMIT
====================================*/

quantityInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        purchaseBtn.click();

    }

});

/*====================================
    BUTTON RIPPLE EFFECT
====================================*/

purchaseBtn.addEventListener("mousedown", function () {

    purchaseBtn.style.transform = "scale(.97)";

});

purchaseBtn.addEventListener("mouseup", function () {

    purchaseBtn.style.transform = "scale(1)";

});

purchaseBtn.addEventListener("mouseleave", function () {

    purchaseBtn.style.transform = "scale(1)";

});

/*====================================
    CONSOLE MESSAGE
====================================*/

console.log("%cEcoRecycle Marketplace", "color:#1b8d4d;font-size:20px;font-weight:bold;");
console.log("%cProduct page loaded successfully.", "color:#555;font-size:14px;");