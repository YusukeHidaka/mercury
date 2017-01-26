import {PlanConstants, CommonConstants} from '../constants';
import request from 'axios';

export const PlanAction = {
  postPlan(planData, successCallback, failedCallback) {
    console.log('postPlan');
    console.log(planData);
    request({
      method: 'POST',
      url: CommonConstants.API_GET_PLANS_PATH,
      headers: {Accept: 'application/json', Authorization: 'Bearer ' + window.localStorage.getItem('accessToken')},
      data: {give:planData.give, take:planData.take, place:planData.place, image_url:planData.image_url}
    }).then(response => response.data)
      .then(json => {
        if (typeof(successCallback) === 'function') {successCallback(json)}
      })
      .catch((error) => {
        if (typeof(failedCallback) === 'function') {failedCallback(error.response.data)}
      });
  },
  getPlan(callback) {
    console.log('getPlan');
    request({
      method: 'GET',
      url: CommonConstants.API_GET_PLANS_PATH,
      headers: {Accept: 'application/json', Authorization: 'Bearer ' + window.localStorage.getItem('accessToken')},
    }).then(response => response.data)
      .then(json => {
      if (typeof(callback) === 'function') {callback(json)}
    })
  },
}
