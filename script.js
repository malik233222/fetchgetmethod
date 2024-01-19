const table = document.querySelector('.table');
const select = document.querySelector('select');

select.addEventListener('change', async (e) => {

    if (e.target.value === 'users') {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await res.json();

        let data = `
        <tr>
            <th scope="col">ID</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">street</th>
            <th scope="col">suite</th>
            <th scope="col">city</th>
            <th scope="col">zipcode</th>
            <th scope="col">lat</th>
            <th scope="col">lng</th>
            <th scope="col">phone</th>
            <th scope="col">website </th>
            <th scope="col">Company name</th>
            <th scope="col">bs</th>
        </tr>`
        result.forEach(element => {
            data += `
            <tr>
                <td scope="row">${element.id}</td>
                <td scope="row">${element.name}</td>
                <td scope="row">${element.username}</td>
                <td scope="row">${element.address.street}</td>
                <td scope="row">${element.address.suite}</td>
                <td scope="row">${element.address.city}</td>
                <td scope="row">${element.address.zipcode}</td>
                <td scope="row">${element.address.geo.lat}</td>
                <td scope="row">${element.address.geo.lng}</td>
                <td scope="row">${element.phone}</td>
                <td scope="row">${element.website}</td>
                <td scope="row">${element.company.name}</td>
                <td scope="row">${element.company.bs}</td>
            </tr>`
        });
        table.innerHTML = data;


    }
    else if (e.target.value === 'posts') {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await res.json()

        let data = `
        <tr>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
        </tr> `
        result.forEach(item => {
            data += `
            <tr>
                <td scope="row">${item.userId}</td>
                <td scope="row">${item.id}</td>
                <td scope="row">${item.title}</td>
                <td scope="row">${item.body}</td>
            </tr> `
        })
        table.innerHTML = data;
    }
    else if (e.target.value === 'comments') {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const result = await res.json();

        let data = `
        <tr>
            <th scope="col">postId</th>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">body</th>
        </tr> `
        result.forEach(item => {
            data += `
        <tr>
            <td scope="col">${item.postId}</td>
            <td scope="col">${item.id}</td>
            <td scope="col">${item.name}</td>
            <td scope="col">${item.email}</td>
            <td scope="col">${item.body}</td>
        </tr> `
        })
        table.innerHTML = data;
    }
    else if (e.target.value === 'albums') {
        const res = await fetch('https://jsonplaceholder.typicode.com/albums');
        const result = await res.json();

        let data = `
        <tr>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
        </tr> `
        result.forEach(item => {
            data += `
        <tr>
            <td scope="row">${item.userId}</td>
            <td scope="row">${item.id}</td>
            <td scope="row">${item.title}</td>
        </tr> `
        })
        table.innerHTML = data;
    }
    else if (e.target.value === 'photos') {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const result = await res.json();

        let data = `
        <tr>
            <th scope="col">albumId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">url</th>
            <th scope="col">thumbnailurl</th>
        </tr> `
        result.forEach(item => {
            data += `
        <tr>
            <td scope="row">${item.albumId}</td>
            <td scope="row">${item.id}</td>
            <td scope="row">${item.title}</td>
            <td scope="row">${item.url}</td>
            <td scope="row">${item.thumbnailUrl}</td>
        </tr> `
        })
        table.innerHTML = data;

    }
    else if (e.target.value === 'todos') {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await res.json();

        let data = `
        <tr>
            <th scope="col">userId</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">completed</th>
        </tr> `
        result.forEach(item => {
            data += `
            <tr>
                <td scope="row">${item.userId}</td>
                <td scope="row">${item.id}</td>
                <td scope="row">${item.title}</td>
                <td scope="row">${item.completed}</td>
            </tr> `
        })
        table.innerHTML = data;
    }
})