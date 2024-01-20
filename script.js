function submitForm() {
    // Get form data
    const form = document.getElementById('my-form');
    const formData = new FormData(form);

    // Prepare the submitted fields
    let submittedFields = '';
    formData.forEach((value, key) => {
        submittedFields += `${key}: ${value}\n`;
    });

    // Display the submitted fields in a popup
    window.alert(`Submitted Fields:\n\n${submittedFields}`);
}

function clearForm() {
    // Clear all form fields
    const form = document.getElementById('my-form');
    form.reset();
}

document.addEventListener("DOMContentLoaded", function () {
    var footerNav = document.querySelector(".grey-background");
    
    window.addEventListener("scroll", function () {
        // Check if the user has scrolled to the end of the page
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footerNav.classList.add("show-footer");
        } else {
            footerNav.classList.remove("show-footer");
        }
    });
});