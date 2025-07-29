import React from 'react'

export const AddressUser = ({item}) => {
  return (
    <>
        <div className="flex flex-col ">
            <div>{item.address.address}</div>
            <div>{item.address.city}</div>
            <div>{item.address.state}</div>
            <div>{item.address.stateCode}</div>
            <div>{item.address.postalCode}</div>
        </div>
        
    
    </>
  )
}

