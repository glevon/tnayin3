import React from 'react';

class  Grades extends React.Component {
  render(){
    return (
        <tbody >
            <tr className="row">
            <td className="col-6">{this.props.gr.subject}</td>
            <td className="col-6">{this.props.gr.grade}
            <button className="btn btn-warning" onClick= {this.props.plus.bind(this,this.props.gr)}>+</button>
            <button className="btn btn-danger" onClick= {this.props.minus.bind(this,this.props.gr)}>-</button>
            </td>
            </tr>
        </tbody>
)

}   
}

export default Grades;