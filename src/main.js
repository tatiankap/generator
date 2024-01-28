function* generateId() {
    let current = 0;
    while (true) {
        yield `id_${current++}`
    }
}

const generateIdNumber = generateId();
console.log(generateIdNumber.next().value)
console.log(generateIdNumber.next().value)
// console.log(generateIdNumber.next())
// console.log(generateIdNumber.next())
// console.log(generateIdNumber.next())

function createIdHTML(id) {
    return `
        <p class="text-primary">${id}</p>
    `
}

function app() {
    const btnEl = document.querySelector('.js-generator-btn');
    const idContainerEl = document.querySelector('.js-content-id');

    const generator = generateId();

    btnEl.addEventListener('click', () => {
        generateId();
        const id = generator.next().value;

        const idHTML = createIdHTML(id);
        idContainerEl.insertAdjacentHTML('beforeend', idHTML);
    })

};

app();