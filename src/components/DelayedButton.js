// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{
    render(){
        return(<button onClick={
            (e)=>{
                const savedEvent = e
                e.persist()
                setTimeout(this.props.onDelayedClick, 
                this.props.delay, savedEvent)
            }
        }>Delay</button>)
    }
}

export default DelayedButton