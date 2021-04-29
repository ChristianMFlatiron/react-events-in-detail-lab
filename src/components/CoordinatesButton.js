// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{
    render(){
        let x,
            y
        return (<button onClick={(e)=>{
            x = e.clientX
            y = e.clientY
            const xAndY = [x, y]
            this.props.onReceiveCoordinates(xAndY)
        }}>Coors</button>)
    }
}

export default CoordinatesButton