// Get all the filter chips
const filterChips = document.querySelectorAll('.filter-chip');

// Add click event listener to each filter chip
filterChips.forEach(chip => {
  chip.addEventListener('click', handleFilterSelection);
});

// Function to handle filter selection
function handleFilterSelection(event) {
  const selectedFilter = event.target.dataset.filter;
  
  // Remove 'selected' class from all filter chips
  filterChips.forEach(chip => {
    chip.classList.remove('selected');
  });
  
  // Add 'selected' class to the clicked filter chip
  event.target.classList.add('selected');
  
  // Show cards based on the selected filter
  showCards(selectedFilter);
}

// Function to show cards based on the selected filter
function showCards(filterValue) {
  const cards = document.querySelectorAll('.carousel-item');
  
  // Hide all cards
  cards.forEach(card => {
    card.classList.remove('show');
  });
  
  // Show cards based on the selected filter
  if (filterValue === 'all') {
    cards.forEach(card => {
      card.classList.add('show');
    });
  } else {
    const selectedCards = document.querySelectorAll(`.carousel-item.${filterValue}`);
    selectedCards.forEach(card => {
      card.classList.add('show');
    });
  }
}

// Show all cards initially
showCards('all');
