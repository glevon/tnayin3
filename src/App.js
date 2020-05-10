import React from 'react';
import './App.css';
import Students from './components/StudentsTable';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      groups:[
        {
          group_name:"A1",
          students:[
            {
              name:"Ani",
              surname:"Sargsyan",
              grades:[
                {subject:"Angular",grade:10},
                {subject:"React",grade:8}
              ]
            },
            {
              name:"Davit",
              surname:"Davtyan",
              grades:[
                {subject:"Angular",grade:5},
                {subject:"React",grade:2}
              ]
            }
          ]
        },
        {
          group_name:"B1",
          students:[
            {
              name:"Liana",
              surname:"Tadevosyan",
              grades:[
                {subject:"Node",grade:5},
                {subject:"React",grade:10}
              ]
            },
            {
              name:"Galust",
              surname:"Sahakyan",
              grades:[
                {subject:"Angular",grade:2},
                {subject:"React",grade:3}
              ]
            }
          ]
        }
      ]
    }
  }
  minus(x){
  if (x.grade>0){
    x.grade--
  }
  else{
    alert("Grade can't be less then 0")
  }
  this.setState({})

  }
  plus(x){
    if (x.grade<10){
      x.grade++
    }
    else{
      alert("Grade can't be more then 10")
    }
    this.setState({})
  }
  render(){
    return (
      <div class="container-fluid" style={{backgroundColor:"palegreen "}} >
        <table className="table " >
          <thead>
            <tr className="row">
              <th className="col-2"><h4>Group</h4></th>
              <th className="col-10"><h4>Students</h4></th>
            </tr>
          <hr></hr>
          </thead>
          <tbody>
            {
              this.state.groups.map((item, index)=>(
              <div key={index}>
                <tr  className="row">
                  <th className="col-2">
                    <h5>{item.group_name}</h5>
                  </th>
                  <th className="col-9" style={{backgroundColor:"goldenrod"}}>
                    <table className="table">
                      <thead>
                        <tr className="row">
                          <th className="col-3">Name</th>
                          <th className="col-3">surname</th> 
                          <th className="col-6">Marks</th>
                        </tr>
                      </thead>                    
                      <tbody >
                        {
                        item.students.map((stud, ind)=>(
                          <Students stud={stud} minus={this.minus.bind(this)} plus={this.plus.bind(this)} />
                        ))
                        }
                      </tbody>
                    </table>
                  </th>
                </tr>
                <hr style={{backgroundColor:"palegreen "}}></hr>
              </div>
              ))
            }
          </tbody>
        </table>
      </div>
    )

  }
}

export default App;
