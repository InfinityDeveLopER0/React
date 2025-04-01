import styles from './Navbar.module.css'


function Navbar() {
    return(
        <div className = {styles.navcard1}>

            <nav className = {styles.navcard1}>

                <div className ={styles.navcard2}>
                    <h2>Leaf Node Solutions</h2>
                </div>

                <div className = {styles.navcard3}>
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
