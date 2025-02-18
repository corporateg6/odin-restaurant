export const about = (function() {
    
    const render = function() {
        const content = document.getElementById("content");
        const aboutTitle = generateAboutTitle();
        const aboutText = generateAboutText();
        content.appendChild(aboutTitle);
        content.appendChild(aboutText);
    }
    
    function generateAboutTitle() {
        const aboutTitle = document.createElement("h1");
        const aboutTitleNode = document.createTextNode("About My Restaurant");
        aboutTitle.appendChild(aboutTitleNode);
        return aboutTitle;
    }
    
    function generateAboutText() {
        const aboutText = document.createElement("p");
        const aboutTextNode = document.createTextNode("This is some information about my restaurant.  We have been open for 10000 years");
        aboutText.appendChild(aboutTextNode);
        return aboutText;
    }

    return {
        render,
    };
})();