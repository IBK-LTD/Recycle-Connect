document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // ELEMENTS
    // ==========================

    const cards = document.querySelectorAll(".inventory-card");
    const detailsButtons = document.querySelectorAll(".details-btn");

    const searchInput = document.getElementById("searchInput");
    const materialFilter = document.getElementById("materialFilter");
    const locationInput = document.getElementById("locationInput");
    const minQty = document.getElementById("minQty");
    const maxQty = document.getElementById("maxQty");

    const refreshBtn = document.querySelector(".refresh-btn");
    const exportBtn = document.querySelector(".export-btn");

    const listingCount = document.querySelector(".listing-count");

    const pageNumbers = document.querySelectorAll(".page-number");



    // ==========================
    // FILTER INVENTORY
    // ==========================

    function filterInventory() {

        let visible = 0;

        const keyword = searchInput.value.toLowerCase().trim();

        const material = materialFilter.value;

        const location = locationInput.value.toLowerCase().trim();

        const min = minQty.value === "" ? 0 : Number(minQty.value);

        const max = maxQty.value === "" ? Infinity : Number(maxQty.value);

        cards.forEach(card => {

            if(card.classList.contains("empty-card")){

                return;
            }

            const title =
                card.querySelector("h3").textContent.toLowerCase();

            const facility =
                card.querySelector(".card-details p")
                .textContent
                .toLowerCase();

            const cardMaterial = card.dataset.material;

            const cardLocation =
                card.dataset.location.toLowerCase();

            const quantity =
                Number(card.dataset.quantity);

            const keywordMatch =

                title.includes(keyword) ||

                facility.includes(keyword);

            const materialMatch =

                material === "all" ||

                cardMaterial === material;

            const locationMatch =

                cardLocation.includes(location);

            const quantityMatch =

                quantity >= min &&

                quantity <= max;

            if(
                keywordMatch &&
                materialMatch &&
                locationMatch &&
                quantityMatch
            ){

                card.style.display = "flex";

                visible++;

            }else{

                card.style.display = "none";

            }

        });

        listingCount.innerHTML =
            `Showing <strong>${visible}</strong> of <strong>142</strong> collection hub listings`;

    }



    // ==========================
    // EVENTS
    // ==========================

    searchInput.addEventListener("input", filterInventory);

    materialFilter.addEventListener("change", filterInventory);

    locationInput.addEventListener("input", filterInventory);

    minQty.addEventListener("input", filterInventory);

    maxQty.addEventListener("input", filterInventory);



    // ==========================
    // REFRESH BUTTON
    // ==========================

    refreshBtn.addEventListener("click", () => {

        const original = refreshBtn.innerHTML;

        refreshBtn.disabled = true;

        refreshBtn.innerHTML =
        `
            <img src="icons/Refresh.svg"
                 style="animation:spin 1s linear infinite;">
            Refreshing...
        `;

        setTimeout(() => {

            refreshBtn.innerHTML = original;

            refreshBtn.disabled = false;

            showToast("Inventory refreshed successfully.");

        },2000);

    });



    // ==========================
    // EXPORT BUTTON
    // ==========================

    exportBtn.addEventListener("click",()=>{

        const original = exportBtn.innerHTML;

        exportBtn.disabled = true;

        exportBtn.innerHTML =
        `
            <img src="icons/Download.svg">
            Exporting...
        `;

        setTimeout(()=>{

            exportBtn.innerHTML = original;

            exportBtn.disabled = false;

            showToast("Inventory exported successfully.");

        },1800);

    });



    // ==========================
    // VIEW DETAILS
    // ==========================

    detailsButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            const card = button.closest(".inventory-card");

            const material =
                card.querySelector("h3").textContent;

            const quantity =
                card.dataset.quantity;

            showToast(
                `${material} (${quantity} kg)`
            );

        });

    });



    // ==========================
    // PAGINATION
    // ==========================

    pageNumbers.forEach(page=>{

        page.addEventListener("click",()=>{

            pageNumbers.forEach(btn=>{

                btn.classList.remove("active");

            });

            page.classList.add("active");

            showToast(
                `Page ${page.textContent}`
            );

        });

    });



    // ==========================
    // TOAST
    // ==========================

    function showToast(message){

        let toast =
            document.querySelector(".toast");

        if(!toast){

            toast = document.createElement("div");

            toast.className = "toast";

            document.body.appendChild(toast);

        }

        toast.textContent = message;

        toast.classList.add("show");

        setTimeout(()=>{

            toast.classList.remove("show");

        },2500);

    }



    // ==========================
    // INITIALIZE
    // ==========================

    filterInventory();

});