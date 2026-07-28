// ==============================
// ADMIN DASHBOARD JAVASCRIPT
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // ANIMATED STATISTICS COUNTERS
    // ==========================

    const counters = document.querySelectorAll(".stat-info h2");

    counters.forEach(counter => {

        const target = Number(counter.textContent.replace(/,/g, ""));
        let current = 0;

        const increment = Math.ceil(target / 80);

        counter.textContent = "0";

        function updateCounter() {

            current += increment;

            if (current >= target) {
                counter.textContent = target.toLocaleString();
            } else {
                counter.textContent = current.toLocaleString();
                requestAnimationFrame(updateCounter);
            }

        }

        updateCounter();

    });

    // ==========================
    // RECENT ACTIVITY CLICK
    // ==========================

    const activities = document.querySelectorAll(".activity-item");

    activities.forEach(activity => {

        activity.addEventListener("click", () => {

            const title =
                activity.querySelector(".activity-details h4").textContent;

            console.log("Selected Activity:", title);

        });

    });

    // ==========================
    // STAT CARD HOVER EFFECT
    // ==========================

    const statCards = document.querySelectorAll(".stat-card");

    statCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-5px)";
            card.style.transition = "0.3s ease";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

    // ==========================
    // QUICK ACTION BUTTONS
    // ==========================

    const actionButtons = document.querySelectorAll(".button-item");

    actionButtons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateX(5px)";
            button.style.transition = "0.3s ease";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translateX(0)";

        });

    });

    // ==========================
    // STATUS BADGE HOVER
    // ==========================

    const statusBadges = document.querySelectorAll(
        ".pending, .completed, .open"
    );

    statusBadges.forEach(status => {

        status.addEventListener("mouseenter", () => {

            status.style.opacity = "0.8";

        });

        status.addEventListener("mouseleave", () => {

            status.style.opacity = "1";

        });

    });

});