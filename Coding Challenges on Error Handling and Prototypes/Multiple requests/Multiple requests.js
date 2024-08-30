async function fetchCombinedData() {
    try {
        // Fetch data from both APIs concurrently
        const [todoResponse, postResponse] = await Promise.all([
            fetch('https://jsonplaceholder.typicode.com/todos/1'),
            fetch('https://jsonplaceholder.typicode.com/posts/1')
        ]);

        // Check if both responses are OK
        if (!todoResponse.ok || !postResponse.ok) {
            throw new Error(`Failed to fetch data. Status: ${todoResponse.status}, ${postResponse.status}`);
        }

        // Parse responses as JSON
        const todoData = await todoResponse.json();
        const postData = await postResponse.json();

        // Combine results into a single object
        const combinedData = {
            todo: todoData,
            post: postData
        };

        // Log the combined data
        console.log(combinedData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage
fetchCombinedData();



// async function getCombinedData(){
//     const[data1, data2]=await Promise.all([
//         fetch("https://jsonPlacehoder.typicode.com/todos/1").then((response)
// =>        
//         response.json()    
//     ),
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)
// =>
//         response.json()
//     ),
//     ]);
//     const combinedData ={
//         todo: data1,
//         post: data2,
//     };
//     return combinedData;
// }
// getCombinedData().them((data)=> console.log(data));