//Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//Project Marquee
// Check if the current page URL matches the "home" page URL
if (window.location.pathname === 'https://alexquinn.design/' || window.location.pathname === '/') {
    // Execute script only on the "home" page
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

  moveTextAlongCurve();


  // Start the animation
  moveContent();
}
// Start moving the text along the curve

} else {

}


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

//Form
function validate() { 
	let name = 
		document.getElementById("name").value; 
	let subject = 
		document.getElementById("subject").value; 
	let phone = 
		document.getElementById("phone").value; 
	let email = 
		document.getElementById("email").value; 
	let message = 
		document.getElementById("message").value; 
	let error_message = 
		document.getElementById("error_message"); 

	error_message.style.padding = "10px"; 

	let errors = []; 

	if (name.length < 1) { 
		errors.push("Please Enter a Name");} 
	if (subject.length < 1) { 
		errors.push("Please Enter a Subject");} 
	if (isNaN(phone) || phone.length != 10) { 
		errors.push("Please Enter a valid Phone Number");} 
	if (email.indexOf("@") == -1 || email.length < 6) { 
		errors.push( 
			"Please Enter a valid Email");} 
	if (message.length <= 40) { 
		errors.push( 
			"Please Enter More Than 40 Characters");} 

	if (errors.length > 0) { 
		error_message.innerHTML = 
			errors.join("<br>"); 
		return false;} 
	else { 
		alert( 
			"Message Sent!"); 
		return true;}}


//Faders
document.addEventListener("DOMContentLoaded", function() {
    const appearOptions = {
        threshold: .5
    };
    const faders = document.querySelectorAll(".fade-in");
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;
            } else {
                entry.target.classList.add("appear");
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

//Resize the height of a div to automatically adjust to content, even if positioned: absolute
window.onload = function() {
    adjustContainerHeight();
};

window.onresize = function() {
    adjustContainerHeight();
};

function adjustContainerHeight() {
    const container = document.getElementById('imageContainer');
    const images = container.getElementsByClassName('image');

    let maxHeight = 0;

    for (let img of images) {
        img.style.height = 'auto'; // Reset to natural height
        img.style.width = '100%'; // Ensure images fit the container width
        const imgHeight = img.offsetHeight;

        // Calculate the maximum bottom position
        const topPosition = img.offsetTop;
        const bottomPosition = topPosition + imgHeight;

        if (bottomPosition > maxHeight) {
            maxHeight = bottomPosition;
        }
    }

    container.style.height = `${maxHeight}px`;
}
