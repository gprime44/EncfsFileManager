import React, { PropTypes } from 'react'

const SearchApp = ({ placeholder, label }) => {
    return (
        <div className="collapse navbar-collapse">
            <form className="navbar-form navbar-left">
                <div className="form-group">
                    <input className="form-control" placeholder={placeholder} />
                </div>
                <button type="submit" className="btn btn-default">{label}</button>
            </form>
        </div>
    )
}

SearchApp.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string
}

export default SearchApp
