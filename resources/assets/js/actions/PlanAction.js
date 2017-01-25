import {PlanConstants, CommonConstants} from '../constants';
import request from 'axios';

export const PlanAction = {
  postPlan(planData, successCallback, failedCallback) {
    console.log('postPlan');
    console.log(planData);
    request({
      method: 'POST',
      url: CommonConstants.API_GET_PLANS_PATH,
      headers: {Accept: 'application/json', Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRjZTQ4ODQ5ODYxZmZhYTlkMGJjOWUyOTU2ZjAyZTViZTIzYmM5Zjk0NGUyZWEyYmM0MDI2ODIxYWE4NTJkMzY1YjRlMDY5YTQ1NmZmZDkzIn0.eyJhdWQiOiIyIiwianRpIjoiZGNlNDg4NDk4NjFmZmFhOWQwYmM5ZTI5NTZmMDJlNWJlMjNiYzlmOTQ0ZTJlYTJiYzQwMjY4MjFhYTg1MmQzNjViNGUwNjlhNDU2ZmZkOTMiLCJpYXQiOjE0ODUzMzY2MDIsIm5iZiI6MTQ4NTMzNjYwMiwiZXhwIjoxNTE2ODcyNjAyLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.kHepfe3qF1ItC2EpW8lNRgo1lmdGVgoEoCeUiTjE4PeZoro-EDRHqGYPzfsyk4pzbK2kOpQlapGIyy9PRd9W-g3f2k6-0eRd52JOLwmShg7njz3HMGDc__tf4ZbIxgSHO2GoDTzIuG7Rn-3FbTnmWIInaVF4qXjYAz3i9EtY-sxJ1nHZ9p8DHEcDumTu2rPK02b5U0u9dFX5eXayShfcyn14786BXQXWjhym2WQoU9iHlUBjkLdIIRpM_6d7cxJI5Eoe2kM-mCaikUBazzeVoGnGoxgmx3kVzrSIzDwsuIs4Z10NlcybNwKFRBLz9_18prYJfLSMlEboGMqAPtcN1nAiWiYP9ktkvRC6NBARjrqlQURTZowR0v6E6Lm3vQ4RVejZKTPyH1Eeai1AAquYyownTdfTcFI6VIucSFHWrxbUEF2YSx2AJjKd0Ik6PqHgxtzZ0a0CzDmHh_SrVkpPJXzsvJwbVCQpigQ_y1pRAXm9r-iYwjzTFUrLca1vpzLa9uxqn_3w1v-OyyLg9Ku7K8KvdlHBr8bS3ClcfFsy2gjDtq4Iorsp320tK52Gz3wrwZC6Ksowd4rPON3qUvWjYn_zXVG2rj3zHiuSsTGz34XqvTwQqR-46dQJBlBAy_fU9QSgCYwIs0sMTaau-z_dt4P8e-P6KfQVxUGcif7ctkU'},
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
      headers: {Accept: 'application/json', Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRjZTQ4ODQ5ODYxZmZhYTlkMGJjOWUyOTU2ZjAyZTViZTIzYmM5Zjk0NGUyZWEyYmM0MDI2ODIxYWE4NTJkMzY1YjRlMDY5YTQ1NmZmZDkzIn0.eyJhdWQiOiIyIiwianRpIjoiZGNlNDg4NDk4NjFmZmFhOWQwYmM5ZTI5NTZmMDJlNWJlMjNiYzlmOTQ0ZTJlYTJiYzQwMjY4MjFhYTg1MmQzNjViNGUwNjlhNDU2ZmZkOTMiLCJpYXQiOjE0ODUzMzY2MDIsIm5iZiI6MTQ4NTMzNjYwMiwiZXhwIjoxNTE2ODcyNjAyLCJzdWIiOiI2Iiwic2NvcGVzIjpbXX0.kHepfe3qF1ItC2EpW8lNRgo1lmdGVgoEoCeUiTjE4PeZoro-EDRHqGYPzfsyk4pzbK2kOpQlapGIyy9PRd9W-g3f2k6-0eRd52JOLwmShg7njz3HMGDc__tf4ZbIxgSHO2GoDTzIuG7Rn-3FbTnmWIInaVF4qXjYAz3i9EtY-sxJ1nHZ9p8DHEcDumTu2rPK02b5U0u9dFX5eXayShfcyn14786BXQXWjhym2WQoU9iHlUBjkLdIIRpM_6d7cxJI5Eoe2kM-mCaikUBazzeVoGnGoxgmx3kVzrSIzDwsuIs4Z10NlcybNwKFRBLz9_18prYJfLSMlEboGMqAPtcN1nAiWiYP9ktkvRC6NBARjrqlQURTZowR0v6E6Lm3vQ4RVejZKTPyH1Eeai1AAquYyownTdfTcFI6VIucSFHWrxbUEF2YSx2AJjKd0Ik6PqHgxtzZ0a0CzDmHh_SrVkpPJXzsvJwbVCQpigQ_y1pRAXm9r-iYwjzTFUrLca1vpzLa9uxqn_3w1v-OyyLg9Ku7K8KvdlHBr8bS3ClcfFsy2gjDtq4Iorsp320tK52Gz3wrwZC6Ksowd4rPON3qUvWjYn_zXVG2rj3zHiuSsTGz34XqvTwQqR-46dQJBlBAy_fU9QSgCYwIs0sMTaau-z_dt4P8e-P6KfQVxUGcif7ctkU'},
    }).then(response => response.data)
      .then(json => {
      if (typeof(callback) === 'function') {callback(json)}
    })
  },
}
