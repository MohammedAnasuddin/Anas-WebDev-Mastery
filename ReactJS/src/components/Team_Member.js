

import React from 'react';

class Team_Member extends React.Component{
    constructor(props){
        super(props)
        console.log("%c Child constructor() called", 'color: lightgreen; font-size:16;', `of ${this.props.name}}`)
        this.state  = {
            exp:0,
        }
    }
    
    componentDidMount(){

        console.log("%c Child componentDidMount() called", 'color: goldenrod; font-size:16;', `of ${this.props.name}}`)
    }
    
    componentWillUnmount(){
           console.log("%c Child componentWillUnMount() called", 'color: salmon; font-size:16;', `of ${this.props.name}}`)
      

    }
    
    render(){
        console.log("%c Child render() called", 'color: orchid; font-size:16;', `of ${this.props.name}}`)
        const {name, role} = this.props;
        return (
            <div style={{padding:"16px", margin:"16px",  width:"200px", height:"280px", border:"1px solid darkGray", borderRadius:"4px" , userSelect:"none"}}> 
            <img src="https://placehold.co/120x120" style={{borderRadius: "50%"} }/>
            <h3>{name}</h3>
            <h4>{role}</h4>
            <h4>{this.state.exp}yr's of Expertise</h4>
            <button onClick={()=>{
                this.setState(
                    {
                        exp: this.state.exp +0.5,
                    }
                )
            }}>Improve</button>

              {this.props.children}
            </div>

        )
    }
}

export default Team_Member