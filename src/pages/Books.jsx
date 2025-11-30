import React, { useState } from "react";
import Book from "../components/ui/Book";



const Books = ({books: initialBooks}) => {
    const [books, setBooks] = useState(initialBooks);

    function filterBooks(filter){
        console.log(filter);
        if (filter === "LOW_TO_HIGH"){
            setBooks(books.slice().sort((a, z) => (a.salePrice || a.originalPrice) - (z.salePrice || z.originalPrice)));
        }
        if (filter === "HIGH_TO_LOW"){
            setBooks(books.slice().sort((low, high) => (high.salePrice ||high.originalPrice) - (low.salePrice || low.originalPrice)));
        }

        if (filter === "RATING"){
            console.log(books);
            setBooks(books.slice().sort((a, z) =>  z.rating - a.rating));
        }
    }


  return (
    <div id="books__body">
        <main id="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title books__header--title">All Books</h2>
                            <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                <option value="DEFAULT" disabled>Sort</option>
                                <option value="LOW_TO_HIGH">Price Low to High</option>
                                <option value="HIGH_TO_LOW">Price High to Low</option>
                                <option value="RATING">Rating</option>

                            </select>
                        </div>
                        <div className="books">
                            {
                                books.map(book => <Book book={book} key={book.id} ></Book>)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>

    </div>
    
  );
};

export default Books;
