document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            this.reset();
        } else {
            alert('Failed to submit the form. Please try again.');
        }
    }).catch(error => {
        console.error('Error submitting the form:', error);
        alert('Failed to submit the form. Please try again.');
    });
});
