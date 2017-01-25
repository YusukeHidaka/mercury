import Constants from '../constants/Constants';
import FacebookDispatcher from '../dispatcher/FacebookDispatcher';
import {EventEmitter} from 'events';
import FacebookActionCreators from '../actions/FacebookActionCreators'

const FACEBOOK_CHANGE_EVENT = 'FACEBOOK_CHANGE_EVENT';

class FacebookStore extends EventEmitter {
    constructor() {
        super()
        this.facebookAuthData = {};
        this.faebookPictureData = {};
        this.faebookUserData = {};
    }

    setFacebookAuthData(data) {
      // !!!
      //  console.log('----- facebook_store ------');
      //  console.log(data);
      // TODO
      if(data.status==='not_authorized'){alert('登録させなきゃ！！！')};
      this.facebookAuthData = data;
      this.emitChange();
    }

    get loggedIn() {
        if (!this.facebookAuthData) {
            return;
        }

        return this.facebookAuthData.status == 'connected';
    }

    get userId() {
        if (!this.facebookAuthData || !this.facebookAuthData.authResponse) {
            return;
        }

        return this.facebookAuthData.authResponse.userID;
    }

    get accessToken() {
        if (!this.facebookAuthData || !this.facebookAuthData.authResponse) {
            return;
        }

        return this.facebookAuthData.authResponse.accessToken;
    }

    get status() {
        // console.log('statusのロジック部分');
        // console.log(this.facebookAuthData);
        if (!this.facebookAuthData || !this.facebookAuthData.authResponse) {
            return;
        }

        return this.facebookAuthData.status;
    }

    setFacebookUserData(data) {
      // !!!
      //  console.log('----- ユーザーデータ ------');
      //  console.log(data);
      // TODO
      this.facebookUserData = data;
      this.emitChange();
    }

    get name() {
        if (!this.facebookUserData || !this.facebookUserData.name) {
            return;
        }

        return this.facebookUserData.name;
    }

    get email() {
        if (!this.facebookUserData || !this.facebookUserData.email) {
            return;
        }

        return this.facebookUserData.email;
    }

    get facebookPictureUrl() {
        if (!this.facebookPictureData || !this.facebookPictureData.url) {
            return;
        }

        return this.facebookPictureData.url;
    }

    setFacebookPictureData(type, data) {
        this.facebookPictureStatus = type;
        if (data) {
            this.facebookPictureData = data.data
        } else {
            this.facebookPictureData = {};
        }
        this.emitChange();
    }

    emitChange() {
        this.emit(FACEBOOK_CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(FACEBOOK_CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(FACEBOOK_CHANGE_EVENT, callback);
    }
}

// initialize the store as a singleton
const facebookStore = new FacebookStore();

facebookStore.dispatchToken = FacebookDispatcher.register((action) => {
  // console.log('--------- Auth data ---------');
  // console.log(action.data);
  console.log('---- facebook dispatcher を通過したよ。')
  if (action.actionType == Constants.FACEBOOK_INITIALIZED) {
    facebookStore.setFacebookAuthData(action.data);
  }

  if (action.actionType == Constants.FACEBOOK_LOGGED_IN) {
    facebookStore.setFacebookAuthData(action.data);
  }

  if (action.actionType == Constants.FACEBOOK_RECEIVED_DATA) {
    facebookStore.setFacebookUserData(action.data);
  }

  if (action.actionType == Constants.FACEBOOK_LOGGED_OUT) {
    facebookStore.setFacebookAuthData(action.data);
  }

  if (action.actionType == Constants.FACEBOOK_GETTING_PICTURE) {
    facebookStore.setFacebookPictureData(action.actionType, action.data)
  }

  if (action.actionType == Constants.FACEBOOK_RECEIVED_PICTURE) {
    facebookStore.setFacebookPictureData(action.actionType, action.data)
  }
})

module.exports = facebookStore;
