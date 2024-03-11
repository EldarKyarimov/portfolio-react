import "./style.css"

function Header() {
    return (
        <header className="header">
            <div className="home-pages">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Eldar</em></strong><br />
                    I'm developer
                </h1>
                <div className="header__text">
                    <p>Per aspera ad astra</p>
                </div>

            </div>
        </header>
    )
}

export default Header;