import * as React from "react";


class CounterWithClass extends React.Component {

state ={
    title:'',
    curValue:0
       };

    increace(){
        this.setState({
            curValue:this.state.curValue+1
            }
        )
    }
    updateTitles(){
        this.setState({
            title : "Interval is " + this.state.curValue
        });
        clearInterval(this.inv);
    }
    componentDidMount() {
    var inv= setInterval(()=>{
          this.increace();
      },1000);
    }
    componentWillUnmount() {
       clearInterval(this.inv);
    }

    render() {
    return(
        <div>
            <h2>{this.state.title}</h2>
            <p>{this.state.curValue}</p>
            <button  onClick={()=>{this.increace()}}>+</button>
            <button onClick={()=>{this.updateTitles()}}>Show Num</button>
        </div>
    );
}


}


export default CounterWithClass;