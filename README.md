<div align="center">

# Search and Save Google Books

URL of the deployed application: https://search-and-save-google-books.herokuapp.com

URL of the GitHub repository: https://github.com/a-li-sa/google-books-search

</div>

## Table of Contents 

* [Description](#description)
* [View](#view)
* [Usage](#usage)
* [Built With](#built-with)
* [License](#license)

## Description

This React-based Google Books Search application queries and display books based on user searches. This application was also built with Node, Express and MongoDB so that users can save books to review or purchase later.

## View

To view the website, you can click [here](https://search-and-save-google-books.herokuapp.com/).

## Usage

The user can search for books via the Google Books API and render them under the Search tab. The user has the option to view a book by clicking on the book's title, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

The Saved page renders all books saved to the Mongo database. Again, the user has the option to view a book by clicking on the book's title, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

The following gif demonstrates application functionality.

![](screenshot.gif)

## Built With

* [Express](https://expressjs.com/) - A Node.js web application server framework used to build web applications. 
* [Google Books API](https://developers.google.com/books) - An API that allows applications to retrieve book information from Google Books.
* [Material UI](https://material-ui.com/) - A popular CSS framework for React applications that develops responsive and mobile-first websites.
* [MongoDB](https://www.mongodb.com/) - A popular NoSQL database management program.
* [React.js](https://reactjs.org/) - A JavaScript Library used for building user interfaces. 

## License

Copyright 2020 Alisa Poon

Licensed under the [MIT License](https://opensource.org/licenses/MIT)
