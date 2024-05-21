import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Планшеты'},
        ]
        this._brands = [
            {id: 1, name: 'LG'},
            {id: 2, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: '12 pro', price: 1000, rating: 5, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYWRcjtoYzJ7BuseTU81ERw2eUk2e1IC3p7jWmDaDEREu9AOkc82eIB27GqoCRRSX5I1LvnLUYHLuJiGcmQmAKc-sIu15dVb55dcS2k_iN&usqp=CAE'},
            {id: 1, name: 'a51', price: 1000, rating: 5, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYWRcjtoYzJ7BuseTU81ERw2eUk2e1IC3p7jWmDaDEREu9AOkc82eIB27GqoCRRSX5I1LvnLUYHLuJiGcmQmAKc-sIu15dVb55dcS2k_iN&usqp=CAE'},
            {id: 1, name: 'notepro', price: 1000, rating: 5, img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYWRcjtoYzJ7BuseTU81ERw2eUk2e1IC3p7jWmDaDEREu9AOkc82eIB27GqoCRRSX5I1LvnLUYHLuJiGcmQmAKc-sIu15dVb55dcS2k_iN&usqp=CAE'},
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    get types() { //вызывается только, если переменная внутри была изменен
        return this._types
    }
    get brands() { 
        return this._brands
    }
    get devices() { 
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
}