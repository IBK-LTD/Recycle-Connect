document.addEventListener("DOMContentLoaded", () => {

    // Buttons

    const saveBtn = document.querySelector(".save-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const passwordBtn = document.querySelector(".password-btn");
    const inviteBtn = document.querySelector(".invite-btn");
    const deactivateBtn = document.querySelector(".deactivate-btn");


    // Save Changes


    if (saveBtn) {

        saveBtn.addEventListener("click", () => {

            saveBtn.disabled = true;
            saveBtn.innerHTML = `
                <i class="fa-solid fa-spinner fa-spin"></i>
                Saving...
            `;

            setTimeout(() => {

                saveBtn.innerHTML = `
                    <i class="fa-solid fa-check"></i>
                    Saved
                `;

                setTimeout(() => {

                    saveBtn.disabled = false;
                    saveBtn.textContent = "Save Changes";

                }, 1500);

            }, 1800);

        });

    }

        // Cancel


    if (cancelBtn) {

        cancelBtn.addEventListener("click", () => {

            const confirmed = confirm(
                "Discard all unsaved changes?"
            );

            if (confirmed) {

                location.reload();

            }

        });

    }

        // Change Password

    if (passwordBtn) {

        passwordBtn.addEventListener("click", () => {

            alert("Redirecting to Change Password page.");

        });

    }

        // Invite Member

    if (inviteBtn) {

        inviteBtn.addEventListener("click", () => {

            alert("Invite Member feature coming soon.");

        });

    }

        // Deactivate Facility

    if (deactivateBtn) {

        deactivateBtn.addEventListener("click", () => {

            const answer = confirm(
                "Are you sure you want to deactivate this facility?"
            );

            if (answer) {

                alert("Facility deactivated successfully.");

            }

        });

    }

        // Toggle Switches

    const switches = document.querySelectorAll(
        '.switch input[type="checkbox"]'
    );

    switches.forEach(toggle => {

        toggle.addEventListener("change", function () {

            console.log(
                `${this.id} : ${this.checked}`
            );

        });

    });

        // Input Focus Effect

    const inputs = document.querySelectorAll(
        ".form-group input, .input-icon input"
    );

    inputs.forEach(input => {

        input.addEventListener("focus", () => {

            input.parentElement.classList.add("active");

        });

        input.addEventListener("blur", () => {

            input.parentElement.classList.remove("active");

        });

    });

});

document.addEventListener("DOMContentLoaded", () => {

        // Team Action Menu

    const menuButtons = document.querySelectorAll(".menu-btn");

    menuButtons.forEach(button => {

        button.addEventListener("click", function (e) {

            e.stopPropagation();

            // Remove any existing menu
            document.querySelectorAll(".action-menu").forEach(menu => {
                menu.remove();
            });

            // Create menu
            const menu = document.createElement("div");
            menu.className = "action-menu";

            menu.innerHTML = `
                <button class="action-item edit-member">
                    <i class="fa-solid fa-pen"></i>
                    Edit
                </button>

                <button class="action-item resend-member">
                    <i class="fa-solid fa-paper-plane"></i>
                    Resend Invite
                </button>

                <button class="action-item delete-member">
                    <i class="fa-solid fa-trash"></i>
                    Remove
                </button>
            `;

            menu.style.position = "absolute";
            menu.style.right = "0";
            menu.style.top = "45px";
            menu.style.background = "#fff";
            menu.style.border = "1px solid #E5E5E5";
            menu.style.borderRadius = "10px";
            menu.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";
            menu.style.padding = "8px";
            menu.style.display = "flex";
            menu.style.flexDirection = "column";
            menu.style.gap = "4px";
            menu.style.zIndex = "999";

            const wrapper = document.createElement("div");
            wrapper.style.position = "relative";

            button.parentNode.appendChild(wrapper);
            wrapper.appendChild(menu);

            // Edit
            menu.querySelector(".edit-member").onclick = () => {

                const row = button.closest("tr");
                const name = row.querySelector("h4").textContent;

                alert(`Editing ${name}`);

                menu.remove();

            };

            // Resend Invite
            menu.querySelector(".resend-member").onclick = () => {

                const row = button.closest("tr");
                const email = row.querySelector("p").textContent;

                alert(`Invitation resent to\n${email}`);

                menu.remove();

            };

            // Remove
            menu.querySelector(".delete-member").onclick = () => {

                const row = button.closest("tr");
                const name = row.querySelector("h4").textContent;

                if(confirm(`Remove ${name} from the team?`)){

                    row.style.opacity = ".4";

                    setTimeout(()=>{

                        row.remove();

                    },300);

                }

            };

        });

    });

        // Close Menu

    document.addEventListener("click", () => {

        document.querySelectorAll(".action-menu").forEach(menu => {

            menu.remove();

        });

    });

        // Unsaved Changes Detection

    let hasChanges = false;

    const fields = document.querySelectorAll("input");

    fields.forEach(field => {

        field.addEventListener("input", () => {

            hasChanges = true;

        });

        field.addEventListener("change", () => {

            hasChanges = true;

        });

    });

        // Warn Before Leaving

    window.addEventListener("beforeunload", function(e){

        if(hasChanges){

            e.preventDefault();

            e.returnValue = "";

        }

    });

        // Ctrl + S

    document.addEventListener("keydown", function(e){

        if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s"){

            e.preventDefault();

            document.querySelector(".save-btn").click();

        }

    });

        // Simple Validation

    const emailInput = document.querySelector('input[type="email"]');

    if(emailInput){

        emailInput.addEventListener("blur",()=>{

            const email = emailInput.value.trim();

            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(!pattern.test(email)){

                emailInput.style.borderColor = "#dc3545";

            }else{

                emailInput.style.borderColor = "#198754";

            }

        });

    }

        // Button Ripple Effect

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            const rect = button.getBoundingClientRect();

            ripple.style.left = (e.clientX - rect.left) + "px";
            ripple.style.top = (e.clientY - rect.top) + "px";

            button.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

        // Highlight Changed Fields

    fields.forEach(field=>{

        field.addEventListener("input",()=>{

            field.style.borderColor="#0A6B46";
            field.style.background="#FCFFFD";

        });

    });

});