import Team_Member from "./Team_Member"
import { Outlet } from "react-router"
import {Component} from "react";
// export const About = () =>{

// }

class About extends Component{

    constructor(props){
        super(props)

        console.log("%c Parent Constructor Called", 'color: aqua; font-weight: bold;')
    }

     componentDidMount(){
         console.log("%c Parent componentDidMount() Called", 'color: goldenrod; font-weight: bold;')
        }
        
        componentWillUnmount(){
        console.log("%c Parent componentWillUnMount() Called", 'color: salmon; font-weight: bold;')

    }

    render(){
         console.log("%c Parent render() Called", 'color: aqua; font-weight: bold;')
            return (
           <div>
               <h2>Meet our Team</h2>
              {/* <div style={{display:"flex"}}>
              <Team_Member name={"Child 1"} role={"Role 1"} count={1}/>


              <Team_Member name={"Child 2"} role={"Role 2"} count={3}>
                        <Team_Member name={"Sub-Child 1"} role={"Role 3"} count={3}/>
                        <Team_Member name={"Sub-Child-2"} role={"Role 3"} count={3}/>
                </Team_Member>
              <Team_Member name={"Child 3"} role={"Role 3"} count={3} />
            
              <Outlet/>
        
              </div> */}
           </div>
        )
    }

   
}


export default About;