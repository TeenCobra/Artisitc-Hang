// Check if the like has already been clicked
let likeClicked = false;

// Function to handle the click event on the like box
function handleLikeClick() {
  if (!likeClicked) {
    // Increment the like count by 1
    let currentLikes = parseInt(localStorage.getItem('likes')) || 0;
    currentLikes++;
    
    // Update the like count displayed on the box
    document.getElementById('likeCount').innerText = currentLikes;
    
    // Store that the like has been clicked
    likeClicked = true;
    localStorage.setItem('likes', currentLikes);
  }
}

// Add event listener to the like box
document.querySelector('.support-me').addEventListener('click', handleLikeClick);
