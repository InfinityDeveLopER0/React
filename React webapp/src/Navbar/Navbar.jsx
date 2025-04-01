import styles from './Navbar.module.css'


function Navbar() {
    return(
        <div className = {styles.navcard}>
            <navbar>
                <h2>Leaf Node Solutions</h2>
                <button>About Us</button>
                <button>Contact Us</button>
                <button>Log In</button>
                <button>Sign Up</button>
            </navbar>
        </div>
    );
}

export default Navbar
