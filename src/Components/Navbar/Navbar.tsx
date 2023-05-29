import './Navbar.scss'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="user">
                    <div className="user-picture"></div>
                    <div className="user-name">
                        <p>John Doe</p>
                    </div>
                </div>
            </div>
        </div>
    )
}