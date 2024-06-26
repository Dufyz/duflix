import './styles.css'

export const Footer = () => {
    return (
        <footer className='footer-bg' id='About'>
            <div className="footer">
                <div className="footer-logo">
                    <h1>Dufyz</h1>
                </div>
                <div className="footer-sections">
                    <div className="footer-section">
                        <h2>About</h2>
                        <ul>
                            <li><a href="https://developer.themoviedb.org/reference/intro/getting-started">Api Tmdb</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h2>Contact</h2>
                        <ul>
                            <li><a href="https://github.com/Dufyz">GitHub</a></li>
                            <li><a href="https://linktr.ee/dufyz">Dufyz</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h2>More</h2>
                        <ul>
                            <li><a href="">Privacity</a></li>
                            <li><a href="">Repositorie</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
}