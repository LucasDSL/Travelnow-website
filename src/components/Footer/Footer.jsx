import './Footer.css'

export default function Footer(){
    return (
        <section className="Footer-all">
            <div className="footer-info container">
                <div className="Company-info">
                    <h1>Travel<span>now</span></h1>
                    <p className="grey-text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                </div>
                <div className="footer-links">
                    <div className="Links">
                        <h2>Tour</h2>
                        <p><a href="#">Thiland</a></p>
                        <p><a href="#">Canada</a></p>
                        <p><a href="#">Korea</a></p>
                        <p><a href="#">Italy</a></p>
                    </div>
                    <div className="Links">
                        <h2>Support</h2>
                        <p><a href="#">Account</a></p>
                        <p><a href="#">Legal</a></p>
                        <p><a href="#">Contact</a></p>
                        <p><a href="#">Privacy Policy</a></p>
                    </div>
                    <div className="Links">
                        <h2>Userful Pages</h2>
                        <p><a href="#">Deals</a></p>
                        <p><a href="#">FAQs</a></p>
                        <p><a href="#">Why ys</a></p>
                    </div>
                </div>
            </div>
            <div className="footer-date">
                <p>@ {new Date().getFullYear()} - All rights Reserved.</p>
            </div>
        </section>
    )
}