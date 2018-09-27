import React from 'react'

const ProgressBar = ({color, percent}) => {

    color = color || 'red'
    percent = percent || 20

    return (
        <div className={`progress ${color} lighten-4`}>
            <div className={`determinate ${color}`} style={{width: percent + '%'}}></div>
        </div>
    )
}

export default ProgressBar