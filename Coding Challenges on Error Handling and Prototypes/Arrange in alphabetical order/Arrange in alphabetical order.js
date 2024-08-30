const books = [
    { title: "Political History of Assam", author: "Dr. Rajen Saikia", year: 2024 },
    { title: "Four Stars of Destiny", author: "General Manoj Mukund Naravane", year: 2023 },
    { title: "Sanskriti ke Ayaam", author: "Manorama Mishra", year: 2022 },
    { title: "Maha Kavithai", author: "Vairamuthu", year: 2021 }
];
function logTitles(titles) {
    titles.sort();
    console.log(titles.join(", "));
}
function extractTitles(books, callback){
    const titles = books.map((book) => book.title);
    callback(titles);
}
extractTitles(books, logTitles);