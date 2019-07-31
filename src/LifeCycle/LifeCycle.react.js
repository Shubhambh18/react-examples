import React from 'react';
import ReactDOM from 'react-dom'
import ShowCity from '../ShowCity/ShowCity.react';


class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'Rani'  ,
            city:'Chennai'          
        }
        console.log("Constructor **********") 
    }
    componentDidMount(){
        console.log("DID MOUNT CALLED ===");
        // const element = ReactDOM.findDOMNode(this);
        // const child =element.firstChild;
        // ReactDOM.render("Ramesh",child);
     
       
    }
    change=()=>{
        console.log("Change Fired");
        
        this.setState({name:this.state.name+'Ji',city:"Kerala"});
    }

    componentDidUpdate(){
        console.log("Component Did Update is @@@@@@@@")
        

    }

    //create a stateless component showCity which takes a prop city 
    
    render() {
        console.log("REnder Method called &&&&&")
        // this.setState({name:this.state.name+'Di'});
        return (
            <div >  
                <h2>{this.state.name}</h2>
                    <ShowCity city={this.state.city}></ShowCity>
                    
                    <button onClick={this.change}>Update</button>

            </div>
        );
    }
}

export default LifeCycle;