import React from 'react'
import ManagerSidebar from '../components/molecules/ManagerPanel/ManagerSidebar'
import ManagerEmployees from '../components/molecules/ManagerPanel/ManagerEmployees'

function ManagerEmployeesPage() {
  
    return (
        <div className='container-fluid' style={{ backgroundColor: '#e5e8e8',height:'100vh'}}>
        <div className='row'>
            <div className="col-3"><ManagerSidebar/> </div>
            <div className="col-9"><ManagerEmployees/></div> 
        </div>
        </div>
        
      )
  
}

export default ManagerEmployeesPage