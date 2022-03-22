const userCardsContainer = document.querySelector('[data-user-cards-container]');
const userCardTemplate = document.querySelector("[data-user-template]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase();
    console.log(users);
    users.forEach((user) => {
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value);
        user.element.classList.toggle('hide', !isVisible);
    })
});

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
        users = data.map((user) => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const name = card.querySelector('[data-name]');
            const email = card.querySelector('[data-email]');

            name.innerHTML = user.name;
            email.innerHTML = user.email;

            userCardsContainer.append(card);

            return { name: user.name, email: user.email, element: card };
        })
    });