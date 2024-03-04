//Project Marquee
// Get the SVG elements
const textPath = document.getElementById('marquee-content').querySelector('textPath');

// Function to move the text along the curve
function moveTextAlongCurve() {
  // Calculate the length of the path
  const pathLength = textPath.getTotalLength();
  
  // Set the initial position of the text at the beginning of the path
  textPath.setAttribute('startOffset', pathLength);
  
  // Animate the movement along the path
  let offset = pathLength;
  function animate() {
    offset -= 1; // Adjust the speed as needed
    if (offset < 0) {
      offset = pathLength;
    }
    textPath.setAttribute('startOffset', offset);
    requestAnimationFrame(animate);
  }
  
  // Start the animation
  animate();
}

// Start moving the text along the curve
moveTextAlongCurve();


// Start moving the text along the curve
moveTextAlongCurve();


// Start moving the text along the curve
moveTextAlongCurve();


// Start the animation
moveContent();

// Get all div elements with the class 'clickable-div'
var divElements = document.querySelectorAll(".clickable-div");

// Add a click event listener to each div
divElements.forEach(function(div) {
    div.addEventListener("click", function() {
        // Retrieve the URL from the 'data-url' attribute
        var url = this.getAttribute("data-url");
        // Redirect to the specified URL
        window.location.href = url;
    });
});

//Changes the background behind "Design Treats" depending on what side project is being hovered
document.addEventListener("DOMContentLoaded", function() {
    const changeBackgroundLinks = document.querySelectorAll('.side-project-change-background');

    changeBackgroundLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            const backgroundImage = this.dataset.image;
            console.log("Changing background to:", backgroundImage);
            document.querySelector('.side-project-header-container').style.backgroundImage = `url(${backgroundImage})`;
            document.querySelector('.side-project-header-container').classList.add('rescaled'); // Apply scale transformation
        });
        
        link.addEventListener('mouseout', function() {
            document.querySelector('.side-project-header-container').classList.remove('rescaled'); // Remove scale transformation
        });
    });
});


