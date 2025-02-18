export const home = (function() {

    const render = function() {
        const content = document.getElementById("content");
        const mainImg = generateMainImg();
        const mainTitle = generateMainTitle();
        const mainText = generateMainText();
        content.appendChild(mainImg);
        content.appendChild(mainTitle);
        content.appendChild(mainText);
    };
    
    function generateMainImg() {
        const mainImg = document.createElement("p");
        const mainImgNode = document.createTextNode("This is my restaurant image -js");
        mainImg.appendChild(mainImgNode);
        return mainImg;
    }

    function generateMainTitle() {
        const mainTitle = document.createElement("h1");
        const mainTitleNode = document.createTextNode("My Restaurant");
        mainTitle.appendChild(mainTitleNode);
        return mainTitle;
    }
    
    function generateMainText() {
        const mainText = document.createElement("p");
        const mainTextNode = document.createTextNode("This is some information about my restaurant.  It is the best in the world! -js");
        mainText.appendChild(mainTextNode);
        return mainText;
    }

    return {
        render,
    };
})();