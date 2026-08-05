// HOUSEHOLDS PAGE JAVASCRIPT

document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTS

    const tabs = document.querySelectorAll(".tab");
    const searchInput = document.querySelector(".search-box input");
    const tableRows = document.querySelectorAll("tbody tr");
    const actionButtons = document.querySelectorAll(".action-btn");
    const pageButtons = document.querySelectorAll(".page");

    // TAB FILTERING

    tabs.forEach(tab => {

        tab.addEventListener("click", function () {

            tabs.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const selectedTab = this.textContent.trim().toLowerCase();

            tableRows.forEach(row => {

                const status = row.querySelector(".status").textContent.trim().toLowerCase();

                if (selectedTab === "all households") {

                    row.style.display = "";

                } else if (selectedTab === status) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";

                }

            });

        });

    });

    // SEARCH FUNCTION

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        tableRows.forEach(row => {

            const text = row.textContent.toLowerCase();

            if (text.includes(value)) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

    // ACTION BUTTONS

    actionButtons.forEach(button => {

        button.addEventListener("click", function () {

            const row = this.closest("tr");

            const household = {
                name: row.cells[0].textContent,
                contact: row.cells[1].textContent,
                location: row.cells[2].textContent,
                status: row.querySelector(".status").textContent,
                joinedDate: row.cells[4].textContent
            };

            console.log(household);

            alert(
`Household Details

Name: ${household.name}

Contact: ${household.contact}

Location: ${household.location}

Status: ${household.status}

Joined Date: ${household.joinedDate}`
            );

        });

    });

    // PAGINATION

    pageButtons.forEach(button => {

        button.addEventListener("click", function () {

            pageButtons.forEach(btn =>
                btn.classList.remove("active-page")
            );

            this.classList.add("active-page");

            console.log(`Page ${this.textContent} selected`);

        });

    });

    // TABLE ROW HOVER

    tableRows.forEach(row => {

        row.addEventListener("mouseenter", () => {

            row.style.backgroundColor = "#f9fafb";

        });

        row.addEventListener("mouseleave", () => {

            row.style.backgroundColor = "";

        });

    });

    // STATUS HOVER EFFECT

    const statuses = document.querySelectorAll(".status");

    statuses.forEach(status => {

        status.addEventListener("mouseenter", () => {

            status.style.opacity = "0.8";

        });

        status.addEventListener("mouseleave", () => {

            status.style.opacity = "1";

        });

    });

});