import React from 'react'
import { NavLink } from 'react-router-dom'
const Anchor = ({ theRef, name }) => {
    return (
        <NavLink to={theRef} className="text-center  rounded-t-sm w-1/5 py-[6px] text-[10px] md:text-[13px] md:w-1/6" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#272727" : "white",
                backgroundColor: isActive ? "#add8e6" : "#AB9144",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>{name}</NavLink>
    )
}

export default Anchor