import React, { useState, useEffect } from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  { books } from './data';
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";


function App() {

  const [cart, setCart] = useState([]);
  
  //this is going to add multiple copy of book
    function addToCart(book){
      setCart([...cart, {...book, quantity: 1}]);
      
    }

    function changeQuantity(book, quantity){
      setCart(cart.map(item => item.id === book.id ?
           {
            ...item, 
            quantity: +quantity, 
          }
        :
           item
        
          ))
      
    }

   function removeItem(book){
      console.log(cart);
      console.log(`Removing book with id: ${book}`);

      setCart(cart.filter((item)=> +item.id !== +book.id))  
    }

    function numberOfItems(){
      let counter = 0;
      cart.forEach((item) => {
        counter += item.quantity
      })
      return counter;
    }
 

    useEffect(() => {
      console.log(cart)
    }, [cart])


  


  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()}/>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

/**
 *
 *  Adding Single item
 * 
  function addToCart(book){
    const dupeItem = cart.find(item => +item.id === +book.id)
    if(dupeItem){
      setCart(cart.map(item => {
        if(item.id === dupeItem.id){
          return {
            ...item,
            quantity : item.quantity + 1, 
          }
        }
        else{
          return item
        }
        
      }))
    }
    else {
      setCart([...cart, {...book, quantity: 1}])
    }

    //console.log(`Add to Cart${book}${book.title}${book.salePrice}${book.originalPrice}`, book);
    // setCart([...cart, {...book, quantity: 1}])
    // console.log('The previous state when setCart is complete', cart.length );
  }

  useEffect(() => {
    console.log('State when finished', cart)
    console.log('The length is....', cart.length)
  }, [cart])
 */