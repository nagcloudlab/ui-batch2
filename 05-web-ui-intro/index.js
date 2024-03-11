

// using DOM API

const showBtn = document.querySelector('.btn-primary');
const hideBtn = document.querySelector('.btn-danger');
const card = document.querySelector('.card');

hideBtn.addEventListener('click', e => {
    card.style.display = 'none';
})

showBtn.addEventListener('click', e => {
    card.style.display = 'block';
})


// using DOM API + using XHR Api

const top5TodosBtn = document.querySelector('.btn-dark');
const todosTableBodyEle = document.querySelector('#todos');
/*
// AJAX => Asynchronous JavaScript And XML/JSON
top5TodosBtn.addEventListener('click', e => {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    // xhr states
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const todos = JSON.parse(xhr.responseText);
            let todosHtml = '';
            todos.forEach(todo => {
                todosHtml += `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.title}</td>
                        <td>${todo.completed}</td>
                    </tr>
                `
            });
            todosTableBodyEle.innerHTML = todosHtml;
        }
    }



});

*/

// using DOM API + using Fetch API

/*
top5TodosBtn.addEventListener('click', e => {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            let todosHtml = '';
            todos.forEach(todo => {
                todosHtml += `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.title}</td>
                        <td>${todo.completed}</td>
                    </tr>
                `
            });
            todosTableBodyEle.innerHTML = todosHtml;
        })
        .catch(err => console.error(err));
});

*/

// using DOM API + using Fetch API + using async/await

top5TodosBtn.addEventListener('click', async e => {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    try {
        const response = await fetch(url);
        const todos = await response.json();
        let todosHtml = '';
        todos.forEach(todo => {
            todosHtml += `
                <tr>
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed}</td>
                </tr>
            `
        });
        todosTableBodyEle.innerHTML = todosHtml;
    } catch (err) {
        console.error(err);
    }
})






