function request(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

request('https://randomuser.me/api/');

    