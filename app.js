var personImage = document.querySelector('.personImg')
var personName = document.querySelector('.prsnName');
var personIdentity = document.querySelector('.prsnIdentity');
var personText = document.querySelector('.personTxt');

var previousBtn = document.querySelector('.leftBtn');
var surpriseBtn = document.querySelector('.surprise');
var nextBtn = document.querySelector('.rightBtn');

const reviewPersons = [
    {
        name: "Peter Johnson",
        identity: "UI & UX Designer",
        dpImage: "url('./Images/1.jpeg')",
        text: "As a UI and UX Designer, I understand the importance of text in creating an effective user experience. Text is a powerful tool that can be used to convey information, guide users, and provide feedback. When generating text for an interface, it's important to consider the context, tone, and audience.",
    },
    {
        name: "Steve O'Brien",
        identity: "Front-End Developer",
        dpImage: "url('./Images/2.jpg')",
        text: "As a Front-End Developer, I understand the importance of well-crafted text in creating effective interfaces. The text plays a crucial role in communicating information and guiding users through the interaction. When generating text for an interface, it's important to consider the context, user needs, and accessibility requirements. ",
    },
    {
        name: "Will Peterson",
        identity: "Back-End Developer",
        dpImage: "url('./Images/3.webp')",
        text: "As a Back-End developer, I understand the importance of text in communicating data and information between the server and the client. The text can take various forms, such as API responses, error messages, and logs. When generating text, it's important to ensure that it's clear, consistent, and formatted correctly.",
    },
    {
        name: "Josh Harry",
        identity: "Full-Stack Developer",
        dpImage: "url('./Images/4.jpg')",
        text: "As a Full-Stack Developer, I understand the importance of text in creating a seamless user experience. Text is used throughout the entire development stack, from the front-end interface to the back-end database. When generating text, it's important to consider its role in the context of the entire system.",
    },

]


// set starting Person 
let currentPerson = 0;

// show person based on personVal 
function displayPerson(personVal) {
    personImage.style.backgroundImage = reviewPersons[personVal].dpImage;
    personName.textContent = reviewPersons[personVal].name;
    personIdentity.textContent = reviewPersons[personVal].identity;
    personText.textContent = reviewPersons[personVal].text;
}

// show surprise person 
surpriseBtn.addEventListener('click', () => {
    let randomPerson = Math.floor(Math.random() * reviewPersons.length);

    displayPerson(randomPerson);
});

// show next person 
nextBtn.addEventListener('click', () => {
    currentPerson++;
    if (currentPerson > reviewPersons.length - 1) {
        currentPerson = 0;
    }

    displayPerson(currentPerson);
});

// show previous person 
previousBtn.addEventListener('click', () => {
    currentPerson--;
    if (currentPerson < 0) {
        currentPerson = reviewPersons.length - 1;
    }

    displayPerson(currentPerson);
});
