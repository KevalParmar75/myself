document.addEventListener('DOMContentLoaded', () => {
    const texts = [
      "I am a Python developer",
      "I love coding",
      "I enjoy solving problems",
      "I am a web developer",
      "I am a tech enthusiast"
    ];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 100; // Speed of typing in milliseconds
    const erasingSpeed = 50; // Speed of erasing in milliseconds
    const newTextDelay = 2000; // Delay between current and next text in milliseconds
    const dynamicText = document.getElementById('dynamic-text');
  
    function type() {
      if (charIndex < texts[index].length) {
        dynamicText.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        dynamicText.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        index = (index + 1) % texts.length;
        setTimeout(type, typingSpeed + 1100);
      }
    }
  
    setTimeout(type, newTextDelay + 250);
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
  
    const revealOnScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };
  
    const observer = new IntersectionObserver(revealOnScroll, {
      threshold: 0.1
    });
  
    reveals.forEach(reveal => {
      observer.observe(reveal);
    });
  });
  
  function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
  }
  

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (name === '' || email === '' || phone === '' || message === '') {
      alert('All fields are required.');
      return;
    }
    
    if (!/^[a-zA-Z ]+$/.test(name)) {
      alert('Name must contain only letters and spaces.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert('Phone number must be 10 digits.');
      return;
    }

    // If all validations pass, you can submit the form or do something else
    alert('Form submitted successfully!');
    // document.getElementById('contact-form').submit(); // Uncomment this line to actually submit the form
  });


function toggleMenu() {
    const sidePanel = document.getElementById('sidePanel');
    sidePanel.classList.toggle('open');
}

