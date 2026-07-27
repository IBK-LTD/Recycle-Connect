// SELECT ELEMENTS

const tabs = document.querySelectorAll(".tab");
const rows = document.querySelectorAll("tbody tr");
const searchInput = document.querySelector(".search-box input");
const actionButtons = document.querySelectorAll(".action-btn");
const pageButtons = document.querySelectorAll(".page");

// TAB FILTERING

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Remove active class
        tabs.forEach(item => item.classList.remove("active"));

        // Add active class
        tab.classList.add("active");

        const selectedTab = tab.textContent.trim().toLowerCase();

        rows.forEach(row => {

            const status = row.querySelector(".status")
                              .textContent
                              .trim()
                              .toLowerCase();

            if(selectedTab.includes("all")){
                row.style.display = "";
            }

            else if(selectedTab.includes("open")){
                row.style.display =
                    status === "open"
                    ? ""
                    : "none";
            }

            else if(selectedTab.includes("resolved")){
                row.style.display =
                    status === "resolved"
                    ? ""
                    : "none";
            }

            else if(selectedTab.includes("closed")){
                row.style.display =
                    status === "closed"
                    ? ""
                    : "none";
            }

        });

    });

});

// SEARCH

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    rows.forEach(row => {

        const disputeID =
            row.children[0].textContent.toLowerCase();

        const household =
            row.children[1].textContent.toLowerCase();

        const partner =
            row.children[2].textContent.toLowerCase();

        const issue =
            row.children[3].textContent.toLowerCase();

        if(

            disputeID.includes(value) ||

            household.includes(value) ||

            partner.includes(value) ||

            issue.includes(value)

        ){

            row.style.display = "";

        }

        else{

            row.style.display = "none";

        }

    });

});

// ACTION BUTTONS

actionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const row = button.closest("tr");

        const disputeID = row.children[0].textContent;

        alert(`Opening details for ${disputeID}`);

    });

});

// PAGINATION

pageButtons.forEach(button => {

    button.addEventListener("click", () => {

        pageButtons.forEach(page => {

            page.classList.remove("active-page");

        });

        button.classList.add("active-page");

    });

});

// PREVIOUS & NEXT BUTTONS

const paginationButtons =
document.querySelectorAll(".pagination button");

paginationButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(button.querySelector(".icons/Arrow-1.svg")){

            console.log("Previous Page");

        }

        if(button.querySelector(".icons/Arrow-2.svg")){

            console.log("Next Page");

        }

    });

});

// SEARCH ON ENTER

searchInput.addEventListener("keypress", event => {

    if(event.key === "Enter"){

        console.log("Searching...");

    }

});

// ROW HOVER EFFECT

rows.forEach(row => {

    row.addEventListener("mouseenter", () => {

        row.style.transition = "0.3s ease";

    });

});

// PAGE LOADED

window.addEventListener("load", () => {

    console.log("Disputes Dashboard Loaded");

});