document.addEventListener("DOMContentLoaded", () => {

    //   ELEMENTS

    const searchButton = document.querySelector(".search-btn");
    const searchInput = document.querySelector(".search-input");

    const statusSelect = document.querySelector(".filter-select select");

    const rows = document.querySelectorAll(".purchase-table tbody tr");

    const pageButtons = document.querySelectorAll(".page-btn");

    const trackButtons = document.querySelectorAll(".track-btn");

    const invoiceButtons = document.querySelectorAll(".invoice-btn");

    const materialButton = document.querySelector(".material-btn");

    //   SEARCH TABLE

    if (searchButton && searchInput) {

        searchButton.addEventListener("click", () => {

            const keyword = searchInput.value
                .trim()
                .toLowerCase();

            rows.forEach(row => {

                const text = row.textContent.toLowerCase();

                if (text.includes(keyword)) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";

                }

            });

        });

    }

    //   FILTER STATUS

    if (statusSelect) {

        statusSelect.addEventListener("change", function () {

            const value = this.value.toLowerCase();

            rows.forEach(row => {

                const status = row.querySelector(".status")
                    .textContent
                    .trim()
                    .toLowerCase();

                if (
                    value.includes("all") ||
                    status.includes(value)
                ) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";

                }

            });

        });

    }

    //   PAGINATION BUTTONS

    pageButtons.forEach(button => {

        button.addEventListener("click", () => {

            pageButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            if (
                !button.classList.contains("prev") &&
                !button.classList.contains("next")
            ) {

                button.classList.add("active");

            }

        });

    });

    //   TRACK BUTTON

    trackButtons.forEach(button => {

        button.addEventListener("click", () => {

            const row = button.closest("tr");

            const orderID =
                row.querySelector(".order-id").textContent;

            alert(
                `Tracking shipment for ${orderID}`
            );

        });

    });

    //   DOWNLOAD INVOICE

    invoiceButtons.forEach(button => {

        button.addEventListener("click", () => {

            const row = button.closest("tr");

            const orderID =
                row.querySelector(".order-id").textContent;

            alert(
                `Downloading invoice for ${orderID}`
            );

        });

    });

    //   MATERIAL BUTTON

    if (materialButton) {

        materialButton.addEventListener("click", () => {

            materialButton.classList.toggle("active");

        });

    }

});

document.addEventListener("DOMContentLoaded", () => {

    //   ELEMENTS

    const downloadButton = document.querySelector(".download-report-btn");
    const supportButton = document.querySelector(".support-btn");
    const progressFill = document.querySelector(".progress-fill");
    const statNumbers = document.querySelectorAll(".stat-card h2");
    const rows = document.querySelectorAll(".purchase-table tbody tr");

    //   DOWNLOAD REPORT

    if (downloadButton) {

        downloadButton.addEventListener("click", () => {

            downloadButton.disabled = true;
            downloadButton.innerHTML = `
                <i class="fa-solid fa-spinner fa-spin"></i>
                Generating Report...
            `;

            setTimeout(() => {

                alert("Purchase report generated successfully.");

                downloadButton.disabled = false;
                downloadButton.innerHTML = `
                    <i class="fa-solid fa-download"></i>
                    Download Report
                `;

            }, 2000);

        });

    }

    //   SUPPORT BUTTON

    if (supportButton) {

        supportButton.addEventListener("click", () => {

            alert("Opening Sustainability Support Channel...");

        });

    }

    //   PROGRESS BAR ANIMATION

    if (progressFill) {

        const width = progressFill.style.width || "72%";

        progressFill.style.width = "0";

        setTimeout(() => {

            progressFill.style.width = width;

        }, 400);

    }

    //   COUNT-UP ANIMATION

    statNumbers.forEach(number => {

        const originalText = number.textContent.trim();

        const numericValue = parseFloat(
            originalText.replace(/[^0-9.]/g, "")
        );

        if (isNaN(numericValue)) return;

        let start = 0;
        const duration = 1500;
        const increment = numericValue / (duration / 20);

        const counter = setInterval(() => {

            start += increment;

            if (start >= numericValue) {

                clearInterval(counter);
                number.innerHTML = originalText;
                return;

            }

            if (originalText.includes("kg")) {

                number.innerHTML =
                    Math.floor(start).toLocaleString() +
                    " <span>kg</span>";

            } else if (originalText.includes("₦")) {

                number.innerHTML =
                    "₦" +
                    Math.floor(start).toLocaleString() +
                    ".00";

            } else {

                number.textContent =
                    Math.floor(start).toLocaleString();

            }

        }, 20);

    });

    //   ROW HOVER EFFECT

    rows.forEach(row => {

        row.addEventListener("mouseenter", () => {

            row.style.transform = "scale(1.003)";
            row.style.transition = "0.25s ease";

        });

        row.addEventListener("mouseleave", () => {

            row.style.transform = "scale(1)";

        });

    });

    //   RIPPLE EFFECT

    document.querySelectorAll("button").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            const size = Math.max(rect.width, rect.height);

            ripple.style.width = size + "px";
            ripple.style.height = size + "px";

            ripple.style.left =
                e.clientX - rect.left - size / 2 + "px";

            ripple.style.top =
                e.clientY - rect.top - size / 2 + "px";

            ripple.classList.add("ripple");

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

    //   FADE-IN ON SCROLL

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".stat-card, .impact-card, .support-card, .purchase-table-container"
    ).forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

});