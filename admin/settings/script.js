//   change photo 
const changePhotoBtn = document.getElementById('changePhotoBtn');
const photoInput = document.getElementById('photoInput');
const profilePreview = document.getElementById('profilePreview');

changePhotoBtn.addEventListener('click', () => {
    photoInput.click();
});

photoInput.addEventListener('change', () => {
    const file = photoInput.files[0];
    if (file) {
        profilePreview.src = URL.createObjectURL(file);
    }
});

// readonly for input

const formInputs = document.querySelectorAll('.profile-form input');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.removeAttribute('readonly');
    });
});

// save changes

const saveBtn = document.querySelector('.save-btn');

saveBtn.addEventListener('click', () => {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const role = document.getElementById('role').value;

    // lock fields back to readonly after saving
    document.querySelectorAll('.profile-form input').forEach(input => {
        input.setAttribute('readonly', true);
    });

    console.log('Saved:', { fullName, email, phone, role });
});