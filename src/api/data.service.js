import datas from '../assets/data.json';
export default class DataService {
    data = {};
    constructor() {
        this.data = datas;
    }

    getOriginal() {
        return this.data.PAGES.ORIGINALS.works;
    }

    getFanart() {
        return this.data.PAGES.FANART;
    }

    getCommission() {
        return this.data.PAGES.COMMISSIONS;
    }

    getAbout() {
        return this.data.PAGES.ABOUT;
    }

}
