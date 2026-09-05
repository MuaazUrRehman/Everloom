/* 1. TOGGLE MOBILE MENU */
function toggleMenu() {
  document.querySelector("nav").classList.toggle("active");
}

/* 2. HERO SLIDER LOGIC */
const slides = document.querySelectorAll(".hero img");
let index = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3500);
}

/* 3. BUY NOW FUNCTION */
function buyNow(productName) {
  alert("Your order is confirmed successfully: " + productName);
}

/* 4. CONTACT FORM TO TXT FILE LOGIC */
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('contactForm');
  
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevents the page from refreshing

      // 1. Get the data from the input fields
      // Note: We select inputs based on their type or tag since they don't have IDs
      const name = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
      const message = form.querySelector('textarea').value;
      
      // 2. Create the content string for the text file
      const fileContent = `Contact Form Submission\n-----------------------\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n-----------------------\nDate: ${new Date().toLocaleString()}`;

      // 3. Create a "Blob" (a file-like object of immutable raw data)
      const blob = new Blob([fileContent], { type: "text/plain" });

      // 4. Create a temporary link element to trigger the download
      const link = document.createElement("a");
      
      // 5. Create a URL for the Blob and set it as the link href
      link.href = URL.createObjectURL(blob);
      link.download = "contact_info.txt"; // The name of the file to be downloaded

      // 6. Programmatically click the link to start download
      link.click();

      // 7. Cleanup (release memory)
      URL.revokeObjectURL(link.href);

      // 8. Confirm to user and reset form
      alert('Thank you! Your message has been saved to a text file.');
      form.reset(); 
    });
  }
});