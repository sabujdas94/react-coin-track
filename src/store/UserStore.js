import { extendObservable } from "mobx";

class UserStore {
    constructor() {
        extendObservable(this, {
            isLoggedIn: false,
            username: "",
            avater: "",
        });
    }
}

export default new UserStore();
