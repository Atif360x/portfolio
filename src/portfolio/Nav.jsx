function Nav () {
    return (
        <nav className="navbar">
            <div className="nav_icn">
                <div className="navicon icon">
                    {/* Kept on one line to prevent extra browser text padding */}
                    <span className="material-symbols-outlined text">code_xml</span>
                </div>
                <div className="navicon">
                    <p className="text">full stack developer</p>
                </div>
            </div>
           
            <div className="navls">
                <p className="text">home</p>
                <p className="text">about</p>
                <p className="text">collab</p>
            </div>
        </nav>
    );
}

export default Nav;