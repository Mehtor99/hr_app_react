import React from 'react'
import UserPermit from '../components/molecules/UserPermit/UserPermit'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'

function UserPermitPage() {
  return (
    <div className="container">
        
        <div className="row">
          <div className="col-1">
            <ManagerSidebar/>
          </div>
          <div className="col-11 ">
          <UserPermit/>
          </div>
           
        </div>
    </div>
  )
}

export default UserPermitPage