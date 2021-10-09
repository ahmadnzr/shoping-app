import React from 'react'
import { useLocation } from 'react-router'

function Success() {
    const location = useLocation()
    console.log(location);
    return (
        <div>
            successful
        </div>
    )
}

export default Success
