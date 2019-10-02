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
        this.calc=this.calc.bind(this);
    }
    setInput1(e){
        var a = parseInt(e.target.value);
        this.setState(
            {
                input1:a
            })
                }
    setInput2(e){
        var b = parseInt(e.target.value);
        this.setState(
            {
                input2:b
            })

    }
    calc(operator){
        var a=this.state.input1;
        var b=this.state.input2;
        var result, tempOut;

        switch(operator){
            case "add":
                result = a+b;
                tempOut=`The calculation of ${a}+${b} = ${result}`;
                break;
            case "sub":
                result = a-b;
                tempOut=`The calculation of ${a}-${b} = ${result}`;
                break;
            case "mult":
                result = a*b;
                tempOut=`The calculation of ${a}*${b} = ${result}`;
                break;
            case "div":
                result = a/b;
                tempOut=`The calculation of ${a}/${b} = ${result}`;
                break;
        }
        var tempHist=this.state.history;
        tempHist.push(tempOut);
        this.setState({history:tempHist});
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
                <button id="add" onClick={()=>this.calc("add")} >+</button>
                <button id="sub" onClick={()=>this.calc("sub")}>-</button>
                <button id="mult" onClick={()=>this.calc("mult")}>*</button>
                <button id="div" onClick={()=>this.calc("div")}>/</button>
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