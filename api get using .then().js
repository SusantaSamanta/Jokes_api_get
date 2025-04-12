// const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
// const showJokes = () => {
//     const response = fetch(apiUrl).then((res) => {
//         console.log(res);
//         return res.json();
//     }).then((data) => {
//         console.log(data.title);
//     }).catch((err) => {
//         console.log(err);
//     });
// }

const apiUrl = "https://icanhazdadjoke.com/";
const showJokes = () => {
    const response = fetch(apiUrl, {
        headers: {
            Accept: "application/json",
        },
    }).then((res) => {
        // console.log(res);
        return res.json(); // convert the repose to json
    }).then((data) => {    // receive the json data 
        console.log(data.joke);
        document.getElementById("jokesDiv").innerText = data.joke;
    }).catch((err) => {
        window.alert("Some thing wrong please try again")
        console.log(err);
    });
}

document.getElementById("newButton").addEventListener('click', showJokes);
