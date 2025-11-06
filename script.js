const newMessage = document.createElement("p");
newMessage.textContent = "Welcome to my updated portfolio!";
newMessage.style.color = "#6a0dad";
document.body.prepend(newMessage);

const heading = document.querySelector("h1");
if (heading) {
  heading.textContent = "Sheila Huyoa | Portfolio Page (Updated)";
  heading.style.color = "purple";
}

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the page from refreshing
    const message = document.createElement("p");
    message.textContent = "Sending message...";
    message.style.color = "orange";
    form.appendChild(message);

    setTimeout(() => {
      message.textContent = "Message sent successfully!";
      message.style.color = "green";
    }, 2000);
  });
}
