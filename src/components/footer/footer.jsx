import "./style.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="container-footer">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Azerbaijan, Baku</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+777 77 77 77">tel:+777 77 77 77</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:eldar@developer.com">eldar@developer.com</a></p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;