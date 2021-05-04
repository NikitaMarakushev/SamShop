import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Holodilnik'},
            {id: 2, name: 'Smartfone'}
        ];
        this._brands = [
            {id: 1, name: 'ddwdwedww'},
            {id: 2, name: 'appler'}
        ];
        this._devices = [
            {id: 1, name: 'iphoner 11', price: 2500, rating: 4,
            img: 'https://bit.ly/2PPkWOg'},
            {id: 2, name: 'iphoner 11', price: 2500, rating: 4,
            img: 'https://bit.ly/2PPkWOg'},
            {id: 3, name: 'iphoner 12', price: 2600, rating: 4,
            img: 'https://bit.ly/2PPkWOg'},
            {id: 4, name: 'iphoner 13', price: 7700, rating: 4,
            img: 'https://bit.ly/2PPkWOg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}