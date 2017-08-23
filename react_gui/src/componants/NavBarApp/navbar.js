import React from 'react'
import SearchApp from './SearchApp'
import HomeApp from './HomeApp'

const NavBarApp = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <HomeApp title="EncfsFileManager" />
                <SearchApp placeholder="Search ..." label="Search" />
            </div>
        </nav>
    )
}

export default NavBarApp
