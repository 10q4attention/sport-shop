import {makeAutoObservable} from "mobx";

export default class UserStore {
    isAuth = true

    constructor() {
        makeAutoObservable(this)
        //this._isAuth = true
        this._user = {}
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    get IsAuth() { //вызывается только, если переменная внутри была изменена
        return this._isAuth
    }
    get user() { 
        return this._user
    }
}