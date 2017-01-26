import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

class PlanSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 500,
      slidesToShow: 3
    };

    return (
      <Slider {...settings}>
        <div><img src='/images/plan/default.jpg' /></div>
        <div><img src='/images/plan/default.jpg' /></div>
        <div><img src='/images/plan/default.jpg' /></div>
        <div><img src='/images/plan/default.jpg' /></div>
      </Slider>
    );
  }
}

export default PlanSlider;
