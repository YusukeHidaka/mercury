import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import {PlanListItem} from '.';

class PlanList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>take</th>
            <th>give</th>
            <th>place</th>
            <th>image</th>
          </tr>
        </thead>
        <tbody>
          {this.props.plans.map((plan) => (<PlanListItem key={plan.id} plan={plan} />))}
        </tbody>
      </table>
    )
  }
}

PlanList.propTypes = {
  plans: PropTypes.array.isRequired
}

export default PlanList;
