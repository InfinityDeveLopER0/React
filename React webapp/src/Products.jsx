function Products(props) {
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

export default Products