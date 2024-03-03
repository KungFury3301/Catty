document.addEventListener('DOMContentLoaded', (event) => {
  const backgroundVideo = document.getElementById('background-video');
  backgroundVideo.play();

  backgroundVideo.onerror = () => {
    console.error('The video file for this page cannot be played, sorry please try another puzzle.');
  };
})
 
      


document.addEventListener('DOMContentLoaded', () => {
  const catCountInput = document.getElementById("cat-count");
  const submitBtn = document.getElementById("submit-btn");
  const correctSound = document.getElementById('correct-sound');
  const incorrectSound = document.getElementById('incorrect-sound');
  const messageArea = document.getElementById('message-area');
  const wrongNumberUrl = 'https://www.youtube.com/watch?v=Yt8GFgxlITs'; // Replace with the URL for incorrect answer
  const correctNumberUrl = 'https://www.aetherium3301.com/store'; // Replace with the URL for correct answer

  submitBtn.addEventListener('click', () => {
    const enteredNumber = catCountInput.value.trim();
	const titleElement = document.getElementById('title'); // Get the title element

    if (enteredNumber === '10') { // Assuming 10 is the correct answer
      // Update message area with correct message
	  titleElement.classList.add('hidden');
	  correctSound.play();
	  document.body.style.backgroundColor = 'green'; // Add this line for correct answer
      messageArea.textContent = 'Well done you can count 🙄';
      messageArea.style.color = 'green'; // You can style this as you like
      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = correctNumberUrl;
      }, 600000);
    } else {
      // Update message area with incorrect message
	  titleElement.classList.add('hidden');
	   incorrectSound.play();
	  document.body.style.backgroundColor = 'red'; // Add this line for wrong answer
      messageArea.textContent = 'WRONG... Learn to count';
      messageArea.style.color = 'red'; // You can style this as you like
	  setTimeout(() => {
        window.location.href = correctNumberUrl;
   
      // Redirect to the 'how to stop sucking' page
      window.location.href = wrongNumberUrl;
	     }, 6000);
	   
    }
  });
});