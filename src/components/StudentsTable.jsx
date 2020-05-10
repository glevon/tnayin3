import React from 'react';
import Grades from './GradesTable';

class  Students extends React.Component {
  render(){
    return (
        <tr  className="row">
            <th className="col-3">{this.props.stud.name}</th>
            <th className="col-3">{this.props.stud.surname}</th>
            <th className="col-6">
                <div class="container" style={{backgroundColor:"tan"}}>
                    <table className="table">
                    <thead>
                        <tr className="row">
                        <th className="col-6">Subjact</th>
                        <th className="col-6">Rate</th>
                        </tr>
                    </thead>
                    {
                        this.props.stud.grades.map((gr, i)=>(
                        <Grades key={i} gr={gr}  minus={this.props.minus.bind(this)} plus={this.props.plus.bind(this)} />
                        ))
                    }
                    </table>
                </div>
            </th>
        </tr>
    )

}   
}

export default Students;