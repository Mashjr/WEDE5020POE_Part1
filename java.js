// Accordion functionality
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});

// Tab functionality
function openTab(evt, tabName) {
    const tabs = document.getElementsByClassName("tabcontent");
    const tablinks = document.getElementsByClassName("tablinks");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";  
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";  
    evt.currentTarget.className += " active";
}

// Example of initializing Tabs (to be called on page load or specific event)
document.addEventListener("DOMContentLoaded", function () {
    openTab(event, 'defaultTab'); // replace 'defaultTab' with the id of your default tab content
});

// Modal functionality
const enquiryButton = document.getElementById("enquiryButton");
const enquiryModal = document.getElementById("enquiryModal");
const closeButton = document.querySelector(".close-button");

enquiryButton.addEventListener("click", function() {
    enquiryModal.classList.remove("hidden"); // Show modal
    enquiryModal.classList.add("fade-in"); // Add fade-in effect
});

closeButton.addEventListener("click", function() {
    enquiryModal.classList.add("hidden"); // Hide modal
    enquiryModal.classList.remove("fade-in");
});

// Dynamically load content
function loadContent(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('dynamic-content').innerHTML = data; // Display the fetched content
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

// Example usage: Load content when a button is clicked
const loadButton = document.getElementById("loadContentButton");
loadButton.addEventListener("click", function() {
    loadContent('path/to/your/content.html'); // Replace with the actual URL or path to content you want to load
});
