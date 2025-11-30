import React, { useState } from "react";
import Book from "../components/ui/Book";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const BookInfo = ({ books }) => {
    


  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="books__selected--top">
                        {/* this is the link for going back to books page with the list of books */}
                        <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
                        </Link>


                    </div>
                </div>
            </div>
        </main>
    </div>
    
  );
};

export default BookInfo;
