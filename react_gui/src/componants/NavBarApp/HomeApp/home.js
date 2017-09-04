import React from 'react'
import PropTypes from 'prop-types'

const HomeApp = ({ title }) => {
    return (
        <div className="navbar-header">
            <button
                type="button"
                className="collapsed navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-2"
                aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a href="/" className="navbar-brand">{title}</a>
        </div>
    )
}

HomeApp.propTypes = {
    title: PropTypes.string,
}

export default HomeApp
