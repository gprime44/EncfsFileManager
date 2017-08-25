import React from 'react'
import PropTypes from 'prop-types'

const TreeApp = ({ path, name, onClick }) => {
    return (
        <div>
            <ul>
                <li onClick={onClick}>
                    <label>{name} ({path})</label>
                </li>
            </ul>
        </div >
    )
}

TreeApp.propTypes = {
    path: PropTypes.func.isRequired,
    name: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default TreeApp
