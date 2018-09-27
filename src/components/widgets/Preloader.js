import React from 'react'

const Preloader = ({color, style}) => {

    color = color || 'red'

    return (
        <div className={`progress ${color} lighten-4`}>
            <div className={`indeterminate ${color}`}></div>
        </div>
    )
}

export default Preloader