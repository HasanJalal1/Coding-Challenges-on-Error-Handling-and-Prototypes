async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage
fetchData();


// async function fetchData (){
//     const response = await
// fetch("https://jsonplaceholder.tyicode.com/todos/1");
//     const data = await response.json();
//     console.log(data);
// }

// fetchData();