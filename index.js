const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!

// Capture the DOM element with the id of 'header' and save it as bookStoreTitle
const bookStoreTitle = document.querySelector('#header');

// Change element to match bookstore name
if (bookStoreTitle) {
    bookStoreTitle.textContent = "Flatbooks Technical Books";
}

// Data collection
const books = [
    {
        title: "Eloquent JavaScript: A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        img: "https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
        title: "JavaScript and JQuery: Interactive Front-End Web Development",
        author: "Jon Duckett",
        img: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
    },
    {
        title: "Cracking the Coding Interview",
        author: "Gayle Laakmann McDowell",
        img: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
    }
];

// Target the bookList container to prepare for appending book elements
const bookList = document.querySelector('#book-list');

if (bookList) {
    // Loop through every book element to create  the required  components
    books.forEach(book => {
        // Create elements for each book: li (container), h3 (title), p (author), and img (image)
        const bookContainer = document.createElement('div');
        
        // Change the inner HTML/textContent of each element to match the properties of the book object
        bookContainer.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <img src="${book.img}" alt="${book.title}">
        `;
        // Append book elements to bookList
        bookList.appendChild(bookContainer);
    });
}
