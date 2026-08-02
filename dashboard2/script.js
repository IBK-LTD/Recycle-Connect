// =====================================
// RECYCLING ORGANISATION DASHBOARD
// JavaScript Part 1
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // STATISTICS COUNTERS
    // =====================================

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);
        const originalText = counter.textContent;

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 80));

        counter.textContent = "0";

        function updateCounter() {

            current += increment;

            if (current >= target) {

                current = target;

            }

            // Currency Counter
            if (originalText.includes("₦")) {

                counter.textContent =
                    "₦" + current.toLocaleString();

            }

            // Kilogram Counter
            else if (originalText.includes("kg")) {

                counter.innerHTML =
                    current.toLocaleString() +
                    "<span>kg</span>";

            }

            // Normal Counter
            else {

                counter.textContent =
                    current.toLocaleString();

            }

            if (current < target) {

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();

    });

    // =====================================
    // PURCHASE VOLUME BAR ANIMATION
    // =====================================

    const bars = document.querySelectorAll(".bar");

    bars.forEach(bar => {

        const finalHeight = bar.offsetHeight;

        bar.style.height = "0px";

        setTimeout(() => {

            bar.style.transition = "height 1s ease";

            bar.style.height = finalHeight + "px";

        }, 300);

    });

    // =====================================
    // BAR HOVER EFFECT
    // =====================================

    bars.forEach(bar => {

        bar.addEventListener("mouseenter", () => {

            bar.style.opacity = ".85";
            bar.style.transform = "scaleY(1.05)";

        });

        bar.addEventListener("mouseleave", () => {

            bar.style.opacity = "1";
            bar.style.transform = "scaleY(1)";

        });

    });

    // =====================================
    // CHART FILTER
    // =====================================

    const chartFilter = document.querySelector(".chart-filter");

    if (chartFilter) {

        chartFilter.addEventListener("change", function () {

            console.log(
                "Chart Filter:",
                this.value
            );

            // Backend/API integration goes here.

        });

    }

    // =====================================
    // CARD HOVER EFFECT
    // =====================================

    const statCards = document.querySelectorAll(".stat-card");

    statCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-6px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

    // =====================================
    // PURCHASE VOLUME CARD
    // =====================================

    const purchaseCard =
        document.querySelector(".purchase-volume");

    if (purchaseCard) {

        purchaseCard.addEventListener("mouseenter", () => {

            purchaseCard.style.boxShadow =
                "0 12px 25px rgba(0,0,0,.08)";

        });

        purchaseCard.addEventListener("mouseleave", () => {

            purchaseCard.style.boxShadow = "";

        });

    }

});

// =====================================
// RECYCLING ORGANISATION DASHBOARD
// JavaScript Part 2
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // RECENT ACTIVITY
    // =====================================

    const activityItems = document.querySelectorAll(".activity-item");

    activityItems.forEach(item => {

        item.addEventListener("click", () => {

            const title =
                item.querySelector(".activity-details h4").textContent;

            console.log("Activity Selected:", title);

        });

        item.addEventListener("mouseenter", () => {

            item.style.background = "#F9FAFB";
            item.style.cursor = "pointer";

        });

        item.addEventListener("mouseleave", () => {

            item.style.background = "";

        });

    });

    // =====================================
    // INVENTORY TABLE ROWS
    // =====================================

    const tableRows = document.querySelectorAll(".table-card tbody tr");

    tableRows.forEach(row => {

        row.addEventListener("mouseenter", () => {

            row.style.backgroundColor = "#F9FAFB";

        });

        row.addEventListener("mouseleave", () => {

            row.style.backgroundColor = "";

        });

    });

    // =====================================
    // DETAILS BUTTON
    // =====================================

    const detailButtons = document.querySelectorAll(".details-btn");

    detailButtons.forEach(button => {

        button.addEventListener("click", function () {

            const row = this.closest("tr");

            const material =
                row.querySelector(".material-info h4").textContent;

            console.log("Material Details:", material);

            alert(`Viewing details for ${material}`);

        });

    });

    // =====================================
    // ORDER BUTTON
    // =====================================

    const orderButtons = document.querySelectorAll(".order-btn");

    orderButtons.forEach(button => {

        button.addEventListener("click", function () {

            const row = this.closest("tr");

            const material =
                row.querySelector(".material-info h4").textContent;

            console.log("Order More:", material);

            alert(`Order request created for ${material}`);

        });

    });

    // =====================================
    // FILTER BUTTON
    // =====================================

    const filterButton = document.querySelector(".filter-btn");

    if (filterButton) {

        filterButton.addEventListener("click", () => {

            console.log("Filter clicked");

            alert("Filter options will appear here.");

        });

    }

    // =====================================
    // EXPORT REPORT BUTTON
    // =====================================

    const exportButton = document.querySelector(".export-btn");

    if (exportButton) {

        exportButton.addEventListener("click", () => {

            console.log("Export Report");

            alert("Preparing report for download...");

        });

    }

    // =====================================
    // STATUS BADGES
    // =====================================

    const statusBadges = document.querySelectorAll(".status");

    statusBadges.forEach(status => {

        status.addEventListener("mouseenter", () => {

            status.style.transform = "scale(1.05)";
            status.style.transition = ".25s";

        });

        status.addEventListener("mouseleave", () => {

            status.style.transform = "scale(1)";

        });

    });

    // =====================================
    // FOOTER LINKS
    // =====================================

    const footerLinks = document.querySelectorAll(".footer-right a");

    footerLinks.forEach(link => {

        link.addEventListener("click", () => {

            console.log(`Opening ${link.textContent}`);

        });

    });

});