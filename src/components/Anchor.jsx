import React from 'react'
import { NavLink } from 'react-router-dom'
const Anchor = ({ theRef, name }) => {
    return (
        <NavLink to={theRef} className="text-center bg-[#AB9144] rounded-xl w-[150px] py-[5px] text-gray-800" style={({ isActive, isPending, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "white",
                color: isActive ? "black" : "white",
                backgroundColor: isActive ? "lightgrey" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>{name}</NavLink>
    )
}

export default Anchor