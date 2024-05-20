// import {makeAutoObservable} from "mobx";

// export default class UserStore {
//     isAuth = false

//     constructor() {
//         makeAutoObservable(this)
//        //this._isAuth = true
//         this._user = {}
//     }

//     // setIsAuth(bool) {
//     //     this._isAuth = bool
//     // }

//     setIsAuth(isAuth) {
//         this._isAuth = isAuth;
//     }

//     setUser(user) {
//         this._user = user
//     }

//     get IsAuth() { //вызывается только, если переменная внутри была изменена
//         return this._isAuth
//     }
//     get user() { 
//         return this._user
//     }
// }



import { makeAutoObservable } from "mobx";

export default class UserStore {
 

  _isAuth = false;
  _user = {};

  constructor() {
    makeAutoObservable(this);
  }
  setIsAuth(isAuth) {
    this._isAuth = isAuth;
  }

  setUser(user) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}