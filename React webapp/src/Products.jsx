import PropTypes from 'prop-types';

function Products(props) {
    if(props.login){
        return (
            <>
            <div className = "Product2">
                <div className="procard">
                    <img src={props.img}/>
                    <h4>{props.name}</h4>
                    <p> {props.abt}</p>
                    <h5>{props.price}</h5>
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