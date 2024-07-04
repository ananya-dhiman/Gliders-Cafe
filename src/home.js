import main from './assets/icons8-coffee-machine-64.png';
export function loadHomePage() {
    const content = document.getElementById('content');
    
    // Create and append headline
    const card=document.createElement('div');
    const headline = document.createElement('h2');
    headline.textContent = 'Gliders Cafe';
    headline.style.color="white";
    headline.style.fontSize="100px";
    content.appendChild(headline);

    // Create and append text
    const description = document.createElement('p');
    description.textContent = 'Our restaurant offers the best dining experience with exquisite dishes, a cozy ambiance, and excellent service. Come and enjoy a delightful meal with us!';
    description.style.color="white";
    description.style.fontSize="35px";
    description.style.width="700px";
    description.style.textAlign="center";
    description.style.margin="auto";
    content.appendChild(description);
    content.appendChild(card);


    const cardContainer = document.createElement('div');
    cardContainer.setAttribute("id","cardContainer");
     
    const pic=new Image();
    pic.src=main;
    pic.setAttribute('id','main');
    cardContainer.appendChild(pic);
    content.appendChild(cardContainer);
    const more = document.createElement('p');
    more.textContent = 'ORDER NOW!';
    more.style.color="yellow";
    more.style.fontSize="75px";
    content.appendChild(more);

}

