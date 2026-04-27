// Get all section elements and navigation links
const sections = document.querySelectorAll('h2');
const navLinks = document.querySelectorAll('#contents a');

// Function to determine which section is in view
function getActiveSection() {
    let scrollPosition = window.scrollY;

    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            return section.id;
        }
    }

    return null;
}

// Function to update active link based on scroll position
function setActiveLink() {
    let activeSectionId = getActiveSection();

    if (activeSectionId) {
        navLinks.forEach(link => {
            if (link.getAttribute('href').slice(1) === activeSectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Listen for scroll events and update active link
// window.addEventListener('scroll', setActiveLink);
