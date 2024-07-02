export function loadHomePage() {
    const content = document.getElementById('content');
    
    // Create and append headline
    const card=document.createElement('div');
    const headline = document.createElement('h2');
    headline.textContent = 'Gliders Cafe';
    headline.style.color="white";
    content.appendChild(headline);

    // Create and append text
    const description = document.createElement('p');
    description.textContent = 'Our restaurant offers the best dining experience with exquisite dishes, a cozy ambiance, and excellent service. Come and enjoy a delightful meal with us!';
    description.style.color="white";
    content.appendChild(description);
    content.appendChild(card);

}

