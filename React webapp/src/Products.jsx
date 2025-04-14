import PropTypes from 'prop-types';
import { useState } from 'react';

function Products(props) {

    const [purchased, setPurchased] = useState(false); //Declaring a set variable for usestate

    const [discount, setDiscount] = useState(props.price)

    function Buttonclick(mail){
        console.log("78979705395",mail,"To mail us")
        setPurchased(true)
    }

    function applydiscount(){
        setDiscount(discount-100)
    }
    
    if(props.login){
        return (
            <>
            <div className = "Product2">
                <div className="procard">
                    <img src={props.img}/>
                    <h4>{props.name}</h4>
                    <p> {props.abt}</p>
                    <h5>{discount}</h5>
                    <button onClick={ ()=>applydiscount("leafnode")}>Apply Discount</button>
                    <button onClick={ ()=>props.delete(props.id)}>Delete</button>
                    <button onClick={ ()=>Buttonclick("leafnode")}>Buy Now</button>
                    <p>{purchased? "SuccesfullY Purchased" : "Click To Get It"}</p>
                </div>
            </div>
            </>
        );
    }
    else{
        return(
        <div className="Product2">
            <a href="#">Login to see more products </a>
        </div>
        );
    }
    
}

Products.propTypes = {
    name: PropTypes.string,
}

export default Products