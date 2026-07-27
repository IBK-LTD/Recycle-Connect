// SELECT ELEMENTS

const tabs = document.querySelectorAll(".tab");
const rows = document.querySelectorAll("tbody tr");
const searchInput = document.querySelector(".search-box input");
const actionButtons = document.querySelectorAll(".action-btn");
const pageButtons = document.querySelectorAll(".page");

// TAB SWITCHING

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(item => item.classList.remove("active"));

        tab.classList.add("active");

        const tabText = tab.textContent.toLowerCase();

        rows.forEach(row => {

            const status = row.querySelector(".status")
                .textContent
                .trim()
                .toLowerCase();

            if (
                tabText.includes("all")
            ) {
                row.style.display = "";
            }
            else if (
                tabText.includes("pending")
            ) {
                row.style.display =
                    status === "pending"
                    ? ""
                    : "none";
            }
            else if (
                tabText.includes("active")
            ) {
                row.style.display =
                    status === "active"
                    ? ""
                    : "none";
            }
            else if (
                tabText.includes("deactivated")
            ) {
                row.style.display =
                    status === "deactivated"
                    ? ""
                    : "none";
            }

        });

    });
});

// SEARCH FUNCTION

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    rows.forEach(row => {

        const partner =
            row.querySelector("h4").textContent.toLowerCase();

        const email =
            row.querySelector("p").textContent.toLowerCase();

        const area =
            row.children[2].textContent.toLowerCase();

        if (
            partner.includes(value) ||
            email.includes(value) ||
            area.includes(value)
        ) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});

// ACTION BUTTONS

actionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const partner =
            button
            .closest("tr")
            .querySelector("h4")
            .textContent;

        alert(`Opening ${partner}`);

    });

});

// PAGINATION

pageButtons.forEach(button => {

    button.addEventListener("click", () => {

        pageButtons.forEach(btn =>
            btn.classList.remove("active-page")
        );

        button.classList.add("active-page");

    });

});

// PREVIOUS & NEXT BUTTONS

const paginationButtons = document.querySelectorAll(".pagination button");

paginationButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        if (
            btn.querySelector(".icons/Arrow-1.svg")
        ) {
            console.log("Previous Page");
        }

        if (
            btn.querySelector(".icons/Arrow-2.svg")
        ) {
            console.log("Next Page");
        }

    });

});

// ===========================
// SEARCH WITH ENTER
// ===========================

searchInput.addEventListener("keypress", e => {

    if (e.key === "Enter") {

        console.log("Searching...");

    }

});

// ===========================
// ROW HOVER EFFECT
// ===========================

rows.forEach(row => {

    row.addEventListener("mouseenter", () => {

        row.style.transition = "0.3s";

    });

});

// ===========================
// PAGE LOADED
// ===========================

window.addEventListener("load", () => {

    console.log("Collection Partners Dashboard Loaded");

});

