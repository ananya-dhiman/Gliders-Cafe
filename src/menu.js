// menu.js
import a from "./assets/icons8-orange-juice-100.png";
import b from "./assets/icons8-lemonade-100.png";
import c from "./assets/icons8-coffee-100.png";
import d from "./assets/icons8-cinnamon-roll-100.png";

export function loadMenuPage() {
   
    // Create menu heading
    const menuHeading = document.createElement('h2');
    menuHeading.textContent = 'MENU';
    menuHeading.style.color="white";

    // Create menu items
    const menuItems = [
        { name: 'Item 1', description: 'Description of Item 1', price: '$10.99' ,image: a},
        { name: 'Item 2', description: 'Description of Item 2', price: '$12.99' ,image: b },
        { name: 'Item 3', description: 'Description of Item 3', price: '$8.99' ,image: c},
        { name: 'Item 4', description: 'Description of Item 4', price: '$14.99' ,image: d }
    ];

    // Create a container for menu items
    const menuList = document.createElement('ul');
    menuList.style.listStyleType = 'none';
    menuList.style.padding = '0';

    // Loop through menuItems and create list items
    menuItems.forEach(item => {
        const menuItem = document.createElement('li');

        const icon=new Image();
        icon.src= item.image;
        icon.style.width="250px";
        icon.style.height="250px";
        icon.setAttribute("id","food");




        // Create elements for each menu item
        const itemName = document.createElement('h3');
        itemName.textContent = item.name;
        itemName.style.color="white";
        itemName.style.fontSize="60px";


        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        itemDescription.style.color="white";
        itemDescription.style.fontSize="40px";


        const itemPrice = document.createElement('p');
        itemPrice.textContent = item.price;
        itemPrice.style.color="white";
        itemPrice.style.fontSize="30px";

        // Append elements to list item
        menuItem.appendChild(icon);
        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuItem.appendChild(itemPrice);

        // Append list item to menu list
        menuItem.style.margin="70px";
        menuList.appendChild(menuItem);
    });

    // Append menu heading and menu list to content
    content.appendChild(menuHeading);
    content.appendChild(menuList);
   
    
   
}
