import PropTypes from 'prop-types';

function Products(props) {

    function Buttonclick(mail){
        console.log("78979705395",mail,"To mail us")
    }
    if(props.login){
        return (
            <>
            <div className = "Product2">
                <div className="procard">
                    <img src={props.img}/>
                    <h4>{props.name}</h4>
                    <p> {props.abt}</p>
                    <h5>{props.price}</h5>
                    <button onClick={ ()=>Buttonclick("leafnode")}>Contact Us</button>
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