const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
var icon= document.getElementById("icon");
icon.onclick=function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.toggle("dark-theme")){
	icon.src=".img/sun.png";
  }
	else{
	  icon.src=".img/moon.png";
	}
}
function sendEmail() {
    // Capture form field values
    var name = document.querySelector("input[placeholder='your name']").value;
    var email = document.querySelector("input[placeholder='your email']").value;
    var subject = document.querySelector("input[placeholder='your subject']").value;
    var message = document.querySelector("textarea").value;

    // Send email via SMTP
    /*Email.send({
        Host: "smtp.gmail.com",  // Use a real SMTP host (e.g., smtp.gmail.com)
        Username: "bhavanachowdary.rc@gmail.com", // Replace with your email
        Password: "", // Use app passwords if required
        To: "them@website.com", // Replace with recipient email
        From: "your-email@example.com", // Your email address
        Subject: "New Contact Form Submission",
        Body: "Name: " + name + 
              "<br>Email: " + email + 
              "<br>Subject: " + subject + 
              "<br>Message: " + message
    }).then(
        message => alert("Email Sent Successfully: " + message)
    );*/

    
    function sendEmail(event) {
        event.preventDefault(); // Prevent default form submission
        const form = event.target;
        const formData = new FormData(form);

        

        fetch(form.action, {
          method: 'POST',
          body: new URLSearchParams(formData), // Send form data as URL-encoded
          headers: {
              'Accept': 'application/json'
          }
        })
        .then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
                form.reset();
            } else {
                response.json().then(data => {
                    alert('Error: ' + (data.error || 'Message not sent'));
                });
            }
        })
        .catch(error => {
            alert('Error sending message: ' + error);
        });
    }
    // Reset form after submission
    document.forms[0].reset();
}
