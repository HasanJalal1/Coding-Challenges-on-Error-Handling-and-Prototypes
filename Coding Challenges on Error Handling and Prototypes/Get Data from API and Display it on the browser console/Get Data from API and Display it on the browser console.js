// async function fetchPosts() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//         // Check if the response is ok (status code 200-299)
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const posts = await response.json();

//         // Log the posts data to the console
//         console.log(posts);
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//     }
// }

// // Call the function to fetch and log the posts
// fetchPosts();


fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data)=> console.log(data))
    .catch((error)=>console.error(error));
