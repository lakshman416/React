class Student {
    constructor(name,dept,rollno) {
        this._name= name;
        this._rollno=rollno;
        this._dept=dept;
        this._org="JNTUA";
    }
    get name() {
        return this._name;
    }
    get rollno() {
        return this._rollno;
    }
    get dept(){
        return this._dept;
    }
    get org(){
        return this._org;
    }
}
class Dept extends Student {
    constructor (name,dept,rollno,maths,bio){
        super(name,dept,rollno);
        this._maths="maths";
        this._bio="bio";
    }
    get maths(){
        return this._maths;
    }
    get bio(){
        return this._bio;
    }
    
}
class Org extends Dept{
    constructor(name,dept,rollno){
        super(name,dept,rollno);
    }
     
    
}
const s1 = new Org('Lakshman',"maths",1);
const s2 = new Org('Ujwal','maths',2);
const s3 = new Org('Santhosh','maths',3);
const s4 = new Org('Chandhu','bio',4);
const s5 = new Org('Sashi','bio',5);

const displaybio=(student)=>{
    console.log(`Student Name: ${student.name}`);
    console.log(`Student Rollno: ${student.rollno}`);
    console.log(`Student Department: ${student.dept}`);
    console.log(`Org Name: ${student.org}`);
};

const whichDept=(student)=>{
    if(this._maths==this._dept){
        console.log(`This student is under Maths department: ${student.name}`);
    }
    else{
        console.log(`The student is under Biology department: ${student.name}`);
    }
}
displaybio(s2);
whichDept(s1);
