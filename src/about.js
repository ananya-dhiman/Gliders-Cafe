// about.js
export function loadAboutPage() {
     // Create the card container
     const cardContainer = document.createElement('div');
     cardContainer.style.backgroundColor = 'rgba(255, 255, 0, 0.5)'; // yellowish color with transparency
     cardContainer.style.borderRadius = '15px';
     cardContainer.style.padding = '40px';
     cardContainer.style.margin = '20px auto';
     cardContainer.style.width='900px'; 
     cardContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
     cardContainer.style.textAlign = 'center';
    // Create heading for About page
    const aboutHeading = document.createElement('h2');
    aboutHeading.textContent="About";
    aboutHeading.style.color="white";
    aboutHeading.style.fontSize="45px";


    // Create paragraphs with content for About page
    const aboutText = document.createElement('p');
    aboutText.textContent = 'Welcome to our restaurant! We take pride in serving delicious meals with the freshest ingredients, providing a cozy atmosphere for you to enjoy your dining experience. Our team is dedicated to ensuring your satisfaction with every visit.';
    aboutText.style.color="white";
    aboutText.style.fontSize="30px";
    aboutText.style.marginTop="50px";

    // Create another paragraph with additional information
    const additionalInfo = document.createElement('p');
    additionalInfo.textContent = 'Founded in 20XX, our restaurant has been a staple in the community, offering a variety of cuisines and specialties that cater to all tastes and preferences. We look forward to welcoming you soon!';
    additionalInfo.style.color="white";
    additionalInfo.style.marginBottom="100px";
    additionalInfo.style.textAlign="center";
    additionalInfo.style.fontSize="30px";
    // Append elements to content
    cardContainer.appendChild(aboutHeading);
    cardContainer.appendChild(aboutText);
    cardContainer.appendChild(additionalInfo);
    content.appendChild(cardContainer);

   
  
    // Create contact form elements
    const contactForm = document.createElement('div');
    contactForm.setAttribute('id', 'contact-form');
    contactForm.style.maxWidth = '400px';
    contactForm.style.height = '600px';
    contactForm.style.margin = '20px auto';
    contactForm.style.padding = '5px';
    contactForm.style.border = '1px solid #000';
    contactForm.style.backgroundColor = '#ffd700'; /* Yellow background */
    contactForm.style.borderRadius = '10px';
    contactForm.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  
    // Form title
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Contact Us';
    formTitle.style.color = '#000'; /* Black header text */
    formTitle.style.fontSize = '40px';
    contactForm.appendChild(formTitle);
  
    // Form elements
    const form = document.createElement('form');
    form.setAttribute('id', 'contact-us-form');
    
  
    // Name input
    const nameGroup = createFormGroup('NAME :', 'text', 'name', 'Your Name');
    form.appendChild(nameGroup);
  
    // Email input
    const emailGroup = createFormGroup('EMAIL:', 'email', 'email', 'Your Email');
    form.appendChild(emailGroup);
  
    // Message textarea
    const messageGroup = createFormGroup('MESSAGE:', 'textarea', 'message', 'Your Message');
    form.appendChild(messageGroup);
  
    // Submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    submitButton.style.backgroundColor = '#000'; /* Black button background */
    submitButton.style.color = '#ffd700'; /* Yellow button text */
    submitButton.style.padding = '10px 10px';
    submitButton.style.width='200px';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.cursor = 'pointer';
    submitButton.style.fontSize = '20px';
    submitButton.addEventListener('mouseenter', function() {
      submitButton.style.backgroundColor = '#333'; /* Darker black on hover */
    });
    submitButton.addEventListener('mouseleave', function() {
      submitButton.style.backgroundColor = '#000'; /* Revert to original black on hover out */
    });
    form.appendChild(submitButton);
  
    // Append form to contact form container
    contactForm.appendChild(form);
  
    // Append contact form to main container
    container.appendChild(contactForm);
  
    // Function to create form group (label + input/textarea)
    function createFormGroup(labelText, elementType, id, placeholderText) {
      const group = document.createElement('div');
      group.setAttribute('class', 'form-group');
  
      const label = document.createElement('label');
      label.setAttribute('for', id);
      label.textContent = labelText;
      label.style.display = 'block';
      label.style.marginBottom = '5px';
      label.style.fontFamily='"Anton SC", sans-serif';
      label.style.fontWeight="200";
      label.style.color = '#000'; /* Black label text */
      group.appendChild(label);
  
      const inputElement = elementType === 'textarea' ? document.createElement('textarea') : document.createElement('input');
      inputElement.setAttribute('type', elementType);
      inputElement.setAttribute('id', id);
      inputElement.setAttribute('name', id);
      inputElement.setAttribute('placeholder', placeholderText);
      inputElement.style.width = '60%';
      inputElement.style.padding = '10px';
      inputElement.style.border = '1px solid grey';
      inputElement.style.borderRadius = '5px';
      inputElement.style.fontSize = '16px';
      inputElement.style.textAlign='center';
      inputElement.style.fontFamily='"Anton SC", sans-serif';
   
      inputElement.required = true;
      group.appendChild(inputElement);
  
      return group;
    }
  
    content.appendChild(contactForm);
  
      // Optionally reset form after submission
      document.getElementById('contact-us-form').reset();
    
}
  
   
