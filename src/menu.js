export const menu = (function() {

    const render = function() {
        const content = document.getElementById("content");
        const menuTitleI = menuTitle();
        const menuItemsI = menuItems();
        content.appendChild(menuTitleI);
        content.appendChild(menuItemsI);
    };

    function menuTitle() {
        const menuTitleD = document.createElement("h1");
        const menuTitleText = document.createTextNode("My Menu");
        menuTitleD.appendChild(menuTitleText);
        return menuTitleD;
    }

    function menuItems() {
        const menuItemsD = document.createElement("div");
        const item1 = generateMenuItem("hot dog", "$1.50", "ketchup, mustard, onion");
        const item2 = generateMenuItem("hamburger", "$2.50", "ketchup, mustard, pickle, onion");
        const item3 = generateMenuItem("fries", "$1.99", "potatoes, salt");
        const item4 = generateMenuItem("soda", "$0.99", "coke, sprite, dr. pepper");

        menuItemsD.appendChild(item1);
        menuItemsD.appendChild(item2);
        menuItemsD.appendChild(item3);
        menuItemsD.appendChild(item4);

        return menuItemsD;
    }

    function generateMenuItem(name, price, description) {
        const menuItem = document.createElement("div");
        const itemName = document.createElement("div");
        itemName.textContent = name;
        const itemPrice = document.createElement("div");
        itemPrice.textContent = price;
        const itemDescription = document.createElement("div");
        itemDescription.textContent = description;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemPrice);
        menuItem.appendChild(itemDescription);

        return menuItem;
    }

    return {
        render,
    };

})();