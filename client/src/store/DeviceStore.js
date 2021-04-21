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
            img: 'data:image/jpeg;base64,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'},
            {id: 2, name: 'iphoner 11', price: 2500, rating: 4,
            img: 'data:image/jpeg;base64,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'},
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