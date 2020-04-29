import React from 'react'

const Filter = ({nameFilter,handleFilterChange}) => {

    
    
    return (
    
        <div>
            Find Countries 
            <input 
                value={nameFilter}
                onChange={handleFilterChange}
                />
        </div>        
    
    )
}

export default Filter