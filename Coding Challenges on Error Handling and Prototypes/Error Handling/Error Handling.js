async function fetchPost() {
    const contentDiv = document.getElementById('content');
    const errorDiv = document.getElementById('error');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/123456789');

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const post = await response.json();

        // Display the post data on the webpage
        contentDiv.innerHTML = `<pre>${JSON.stringify(post, null, 2)}</pre>`;
    } catch (error) {
        // Display the error message on the webpage
        errorDiv.textContent = `Error fetching post: ${error.message}`;
    }
}

// Call the function to fetch and display the post
fetchPost();


// fetch("https://jsonplaceholder.typicode.com/post/123456789").then(
//     (response) => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         return response.json();
//     }
// );