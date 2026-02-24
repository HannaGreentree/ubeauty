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





// CONTACT FORM
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("joinForm");
  const msg = document.getElementById("formMessage");

  if (!form || !msg) return;

  const show = (text, type = "success") => {
    msg.style.display = "block";
    msg.textContent = text;
    msg.classList.remove("error");
    if (type === "error") msg.classList.add("error");
    msg.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const invalidField = () => {
    const requiredSelectors = [
      "#name",
      'select[name="promotion"]',
      'select[name="legal"]',
      'select[name="certificates"]',
      "#english",
      "#email",
      "#phone",
      "#profilephoto",
    ];

    for (const sel of requiredSelectors) {
      const el = form.querySelector(sel);
      if (!el) continue;

      if (el.type === "file") {
        if (!el.files || el.files.length === 0) return el;
        continue;
      }

      if (el.tagName === "SELECT") {
        if (!el.value) return el;
        continue;
      }

      if (!el.value || !el.value.trim()) return el;

      if (typeof el.checkValidity === "function" && !el.checkValidity()) return el;
    }

    const checkedService =
      form.querySelectorAll('input[name="service[]"]:checked').length;
    if (checkedService === 0) return form.querySelector('input[name="service[]"]');

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof e.stopImmediatePropagation === "function") e.stopImmediatePropagation();

    const bad = invalidField();
    if (bad) {
      show("Please complete the required fields (*) before submitting.", "error");
      if (bad.focus) bad.focus();
      return;
    }

    show("Thank you for submitting the form! We’ll get back to you soon.");
    form.reset();
  };

  form.onsubmit = handleSubmit;
  form.addEventListener("submit", handleSubmit, true);
});
