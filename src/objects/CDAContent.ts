import { HTTP_VERBS } from '../constants';

const CDAContent = class CDAContent {

    constructor(options: Object) {
        Object.assign(this, options);
        if (typeof Proxy !== 'undefined') {
            return new Proxy(this, {
                get(target, key) {
                    return key in target || key === 'length' || key in Promise.prototype ? target[key] : target.fetch()[key];
                }
            });
        }
    }

    private _get() {

    }

    public fetch() {
    }

    public refresh() {
    }



}

export default CDAContent;