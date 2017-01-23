import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class PlanListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <tr>
        <td> {this.props.plan.take} </td>
        <td> {this.props.plan.give} </td>
        <td> {this.props.plan.place} </td>
      </tr>
     )
  }
}
PlanListItem.propTypes = {
  plan: PropTypes.object.isRequired
}

export default PlanListItem;
