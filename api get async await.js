// const apiUrl = "https://icanhazdadjoke.com/";
// const showJokes = () => {
//     const response = fetch(apiUrl, {
//         headers: {
//             Accept: "application/json",
//         },
//     }).then((res) => {
//         // console.log(res);
//         return res.json(); // convert the repose to json
//     }).then((data) => {    // receive the json data 
//         console.log(data.joke);
//         document.getElementById("jokesDiv").innerText = data.joke;
//     }).catch((err) => {
//         window.alert("Some thing wrong please try again")
//         console.log(err);
//     });
// }

// document.getElementById("newButton").addEventListener('click', showJokes);





const apiUrl = "https://icanhazdadjoke.com/";
showJokes = async () => {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                Accept: "application/json",
            },
        });
        const data = await response.json();
        console.log(data.joke);
        document.getElementById("jokesDiv").innerText = data.joke;

    }
    catch (err) {
        window.alert("Some thing wrong please try again");
        console.log(err);
    }
}

document.getElementById("newButton").addEventListener('click', showJokes);
