import React from 'react';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state=
        {
            input1:'',
            input2:'',
            output:'',
            history:[]
        }
        this.setInput1=this.setInput1.bind(this);
        this.setInput2=this.setInput2.bind(this);
        this.add=this.add.bind(this);
        this.sub=this.sub.bind(this);
        this.mult=this.mult.bind(this);
        this.div=this.div.bind(this);
    }
    setInput1(e){
        this.setState(
            {
                input1:parseInt(e.target.value)
            })
                }
    setInput2(e){
        this.setState(
            {
                input2:parseInt(e.target.value)
            })

    }
    add(){
        let result= this.state.input1+this.state.input2;
        let tempOut=`The calculation of ${this.state.input1}+${this.state.input2} = ${result}`;
        let tempHist=this.state.history;
        tempHist.push(tempOut);
        this.setState({output:tempOut,history:tempHist});
    }
    sub(){
        let result= this.state.input1-this.state.input2;
        let tempOut=`The calculation of ${this.state.input1}-${this.state.input2} = ${result}`;
        let tempHist=this.state.history;
        tempHist.push(tempOut);
        this.setState({output:tempOut,history:tempHist});
    }
    mult(){
        let result= this.state.input1*this.state.input2;
        let tempOut=`The calculation of ${this.state.input1}*${this.state.input2} = ${result}`;
        let tempHist=this.state.history;
        tempHist.push(tempOut);
        this.setState({output:tempOut,history:tempHist});   
    }
    div(){
        let result= this.state.input1/this.state.input2;
        let tempOut=`The calculation of ${this.state.input1}/${this.state.input2} = ${result}`;
        let tempHist=this.state.history;
        tempHist.push(tempOut)
        this.setState({output:tempOut,history:tempHist});
    }
    history(){
        return this.state.history.map(par=><li>{par}</li>);
    }
    render() {
        return(
            <div>
                <label>Enter the values</label>
                <input type="number" name="input1" id="input1" onChange={this.setInput1} />
                <input type="number" name="input2" id="input2" onChange={this.setInput2} />
                <br/>
                <button id="add" onClick={this.add} >+</button>
                <button id="sub" onClick={this.sub}>-</button>
                <button id="mult" onClick={this.mult}>*</button>
                <button id="div" onClick={this.div}>/</button>
                <br/>
                {/* <button id="getResult" >=</button> */}
                
                <p>{this.state.output}</p>
                <ul>
                    {this.history()}
                </ul>
            </div>
        );
    }
}

export default Calculator;