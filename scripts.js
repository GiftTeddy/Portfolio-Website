const form = document.querySelector('.form-container form');

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleFormSubmit = (event) => {
  event.preventDefault(); 

  const nameInput = form.querySelector('input[name="name"]');
  const emailInput = form.querySelector('input[name="email"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  if (emailInput.value.trim() === '') {
    alert('Email is required.');
    return;
  }

  if (messageInput.value.trim() === '') {
    alert('Message is required.');
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  const formData = new FormData();
  formData.append('name', nameInput.value);
  formData.append('email', emailInput.value);
  formData.append('phone', phoneInput.value);
  formData.append('message', messageInput.value);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    alert('Message sent successfully!');
    form.reset();
  })
  .catch(error => {
    console.error('There was a problem with the form submission:', error.message);
    alert('There was a problem with the form submission. Please try again later.');
  });
};

form.addEventListener('submit', handleFormSubmit);
const skillsSection = document.querySelector('.bio-about h3:nth-of-type(1)');
skillsSection.addEventListener('click', () => {
    const skillsList = document.querySelector('.bio-about ul');
    skillsList.classList.toggle('show');
});

const educationSection = document.querySelector('.bio-about h3:nth-of-type(2)');
educationSection.addEventListener('click', () => {
    const educationInfo = document.querySelector('.bio-about p:nth-of-type(3)');
    educationInfo.classList.toggle('show');
});

const experienceSection = document.querySelector('.bio-about h3:nth-of-type(3)');
experienceSection.addEventListener('click', () => {
    const experienceInfo = document.querySelector('.bio-about p:nth-of-type(5)');
    experienceInfo.classList.toggle('show');
});

const contactInfo = document.querySelector('.bio-about p.contact-info');
contactInfo.addEventListener('click', () => {
    alert('Contact information: ' + contactInfo.textContent);
});

const profileImage = document.querySelector('.profile-image');
profileImage.addEventListener('click', () => {
    alert('Thank you for clicking on my profile image!');
});

const socialLinks = document.querySelectorAll('.social-links a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('hovered');
    });
});

const video = document.querySelector('video');
video.addEventListener('play', () => {
    console.log('Video is playing');
});

video.addEventListener('pause', () => {
    console.log('Video is paused');
});


