import styles from './Navbar.module.css'


function Navbar() {
    return(
        <div className = {styles.navcard}>
            <nav className = {styles.navcard}>
                <h2>Leaf Node Solutions</h2>
                <div className = {styles.navcard}>
                    <button>About Us</button>
                    <button>Contact Us</button>
                    <button>Log In</button>
                    <button>Sign Up</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar
