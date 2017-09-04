import React from 'react'
import TreeApp from './TreeApp'
import TableApp from './TableApp'
import NavBarApp from './NavBarApp'

const App = () => {
  return (
    <div>
      <NavBarApp />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <TreeApp />
          </div>
          <div className="col-md-8">
            <TableApp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
