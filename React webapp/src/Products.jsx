

const pro1 = "Portfolio Website"
const pro2 = "Mini Projects"

function Products(props) {
    return (
        <>
        <div className="Abt_us">
            <h1>About Us</h1>
            <p>Leaf Node Solutions is a dynamic service-based company dedicated to delivering innovative and tailored solutions for students and businesses. With a focus on efficiency, scalability, and cutting-edge technology, we help organizations streamline operations and achieve their goals. Our expert team ensures top-notch service, driving growth and success for our clients. Partner with us for reliable, future-ready solutions!</p>
        </div>
        <div className = "Product">
            <h1>Products</h1>
            <div className="procard">
                <img src="#"/>
                <h5>{pro1}</h5>
                <p> Tell about youself to others</p>
            </div>

            <img src="#"/>
            <h5>{pro2}</h5>
            <p> Make your innovative ideas into Web-Apps</p>
            
        </div>
        <div>
            <h1>Conatact Us</h1>
            <p>Vist our instagram page to contact us</p>
        </div>
        </>
    );
}

export default Products