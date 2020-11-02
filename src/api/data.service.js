import data from '../assets/data.json';
class DataService {

    constructor() {
        this.data = data;
    }

    getOriginal() {
        return this.data.PAGES.ORIGINALS;
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
