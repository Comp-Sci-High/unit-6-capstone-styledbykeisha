// Show selected page and hide others
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
}

// Card click effect for home page
function cardClick(card) {
    // You can add functionality here for when cards are clicked
    alert(card.querySelector('.card-title').textContent + ' clicked!');
}

// Toggle style card zoom effect
function toggleStyleCard(card) {
    // If clicked card is already active, deactivate it
    if (card.classList.contains('active')) {
        card.classList.remove('active');
    } else {
        // First deactivate any other active cards
        document.querySelectorAll('.style-card.active').forEach(activeCard => {
            if (activeCard !== card) {
                activeCard.classList.remove('active');
            }
        });
        
        // Then activate the clicked card
        card.classList.add('active');
    }
}