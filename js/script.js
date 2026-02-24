
console.log("script.js loaded ✅");


//NAVIGATION MENU MOBILE

function main() {
  return 'Hello, World!';
}
main();  


function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}


//HOME PAGE MAIN SCREEN IMAGES 3,4,7 ANIMATION


document.addEventListener("DOMContentLoaded", () => {
  const animatedImages = document.querySelectorAll(
    ".moving-from-top, .moving-from-left, .moving-from-right"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, {
    threshold: 0.1
  });

  animatedImages.forEach(img => observer.observe(img));
});


//CIRCLE ROW ALL PAGES MOBILE

  document.querySelectorAll('.laser-circle').forEach(circle => {
    circle.addEventListener('touchstart', () => {
      circle.classList.add('active');
      setTimeout(() => {
        circle.classList.remove('active');
      }, 500);
    });
  });



//LOCATION BY CITY HOME PAGE

  function filterServices(city) {
  const services = document.querySelectorAll('.service');

  services.forEach(service => {
    if (service.dataset.city === city) {
      service.style.display = 'block';
    } else {
      service.style.display = 'none';
    }
  });
}


//PORTFOLIO SLIDE SHOW

document.addEventListener("DOMContentLoaded", () => {
  const slideshow = document.querySelector(".specialist-slideshow");
  const leftBtn = document.querySelector(".slider-btn.left");
  const rightBtn = document.querySelector(".slider-btn.right");

  if (slideshow && leftBtn && rightBtn) {
    const slideWidth = slideshow.querySelector(".slide-image").offsetWidth + 10; 
    

    rightBtn.addEventListener("click", () => {
      slideshow.scrollBy({ left: slideWidth, behavior: "smooth" });
    });

    leftBtn.addEventListener("click", () => {
      slideshow.scrollBy({ left: -slideWidth, behavior: "smooth" });
    });
  }
});




console.log("script.js loaded ✅");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("joinForm");
  const msg = document.getElementById("formMessage");

  console.log("joinForm found?", !!form);
  console.log("formMessage found?", !!msg);

  if (!form || !msg) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit intercepted ✅");

    const checkedService =
      form.querySelectorAll('input[name="service[]"]:checked').length;

    if (!form.checkValidity()) {
      form.reportValidity();
      msg.style.display = "block";
      msg.textContent =
        "Please complete the required fields (*) before submitting.";
      return;
    }

    if (checkedService === 0) {
      msg.style.display = "block";
      msg.textContent = "Please select at least one service type.";
      return;
    }

    msg.style.display = "block";
    msg.textContent =
      "Thank you for submitting the form! We’ll get back to you soon.";

    form.reset();
    msg.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
