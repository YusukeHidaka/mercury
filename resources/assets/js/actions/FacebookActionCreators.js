import FacebookDispatcher from '../dispatcher/FacebookDispatcher';
import FacebookConstants from '../constants';

const APP_ID = '1400175353350443';

const FacebookActionCreators = {
    initFacebook: function() {
      window.fbAsyncInit = function() {
        FB.init({
          appId      : APP_ID,
          xfbml      : true,
          version    : 'v2.5'
        });

        // after initialization, get the login status
        FacebookActionCreators.getLoginStatus();
        // FacebookActionCreators.getFacebookData();
      },

      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    },

    getLoginStatus: function() {
      console.log('---- getLoginStatus');
      window.FB.getLoginStatus((response) => {
        FacebookDispatcher.dispatch({
          actionType: FacebookConstants.FACEBOOK_INITIALIZED,
          data: response
        })
      });
    },

    getFacebookInfo: function (){
      console.log('---- getFacebookInfo。');
      window.FB.api("/me?fields=id,email,name", (response) => {
        FacebookDispatcher.dispatch({
          actionType: FacebookConstants.FACEBOOK_RECEIVED_DATA,
          data: response
        });
      });
    },


    login: () => {
      console.log('---- login。');
      window.FB.login((response) => {
        if (response.status === 'connected') {
          FacebookDispatcher.dispatch({
            actionType: FacebookConstants.FACEBOOK_LOGGED_IN,
            data: response
          })
        }
      });
    },

    logout: () => {
      window.FB.logout((response) => {
        FacebookDispatcher.dispatch({
          actionType: FacebookConstants.FACEBOOK_LOGGED_OUT,
          data: response
        })
      })
    },

    getFacebookProfilePicture: (userId) => {
      FacebookDispatcher.dispatch({
        actionType: FacebookConstants.FACEBOOK_GETTING_PICTURE,
        data: null
      })

      window.FB.api(`/${userId}/picture?type=large`, (response) => {
        FacebookDispatcher.dispatch({
          actionType: FacebookConstants.FACEBOOK_RECEIVED_PICTURE,
          data: response
        })
      })
    }
}

module.exports = FacebookActionCreators;
