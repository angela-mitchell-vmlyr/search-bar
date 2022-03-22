const userCardsContainer = document.querySelector('[data-user-cards-container]');
const userCardTemplate = document.querySelector("[data-user-template]");

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((user) => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const name = card.querySelector('[data-name]');
            const email = card.querySelector('[data-email]');

            name.innerHTML = user.name;
            email.innerHTML = user.email;

            userCardsContainer.append(card);
        })
    });