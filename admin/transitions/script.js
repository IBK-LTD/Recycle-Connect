// TRANSACTIONS PAGE JAVASCRIPT

document.addEventListener("DOMContentLoaded", () => {

    // SEARCH TRANSACTIONS

    const searchInput = document.getElementById("searchTransaction");
    const tableRows = document.querySelectorAll("tbody tr");

    searchInput.addEventListener("keyup", function () {

        const searchValue = this.value.toLowerCase();

        tableRows.forEach(row => {

            const rowText = row.textContent.toLowerCase();

            if (rowText.includes(searchValue)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

    // VIEW BUTTONS

    const actionButtons = document.querySelectorAll(".action-btn");

    actionButtons.forEach(button => {

        button.addEventListener("click", function () {

            const row = this.closest("tr");

            const transaction = {
                id: row.cells[0].textContent,
                household: row.cells[1].textContent,
                partner: row.cells[2].textContent,
                material: row.cells[3].textContent,
                quantity: row.cells[4].textContent,
                date: row.cells[5].textContent
            };

            console.log(transaction);

            alert(
`Transaction Details

Transaction ID: ${transaction.id}

Household: ${transaction.household}

Partner: ${transaction.partner}

Material: ${transaction.material}

Quantity: ${transaction.quantity}

Date: ${transaction.date}`
            );

        });

    });

    // PAGINATION

    const pageButtons = document.querySelectorAll(".page");

    pageButtons.forEach(button => {

        button.addEventListener("click", function () {

            pageButtons.forEach(btn =>
                btn.classList.remove("active-page")
            );

            this.classList.add("active-page");

            console.log(`Page ${this.textContent} selected`);

        });

    });

    // FILTER BUTTON

    const filterBtn = document.querySelector(".filter-btn");

    filterBtn.addEventListener("click", () => {

        alert("Filter feature coming soon.");

    });

    // DATE BUTTON

    const dateBtn = document.querySelector(".date-btn");

    dateBtn.addEventListener("click", () => {

        alert("Date picker coming soon.");

    });

    // TABLE ROW HOVER EFFECT

    tableRows.forEach(row => {

        row.addEventListener("mouseenter", () => {

            row.style.backgroundColor = "#f9fafb";

        });

        row.addEventListener("mouseleave", () => {

            row.style.backgroundColor = "";

        });

    });

});