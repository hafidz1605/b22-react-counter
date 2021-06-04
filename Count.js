import React from 'react'
import './Count.css'

class Count extends React.Component{
    state ={
        a : 0
    }
   
    componentDidUpdate(){
        
    }
    minOne=() =>{
        if(this.state.a===0){
            window.alert('minimum value is 0')
        }else{this.setState({a:this.state.a-1})}
    }
    plusOne=() =>{
        if(this.state.a===10){
            window.alert('maximum value is 10')
        }else{this.setState({a:this.state.a+1})}
    }

    render(){
                
        return(
            <div class='container'>
            <div class='title'>
                {this.props.title} </div>
            <div class='warper'>
                <button class='button' onClick = {this.minOne}> - </button>
                <div> {this.state.a} </div>
                <button class='button' onClick = {this.plusOne}> + </button>
            </div>
            </div>
        )
    }
}

export default Count