export class StateService {
    filter: string;
    filterKey = 'angularPlayground.filter';

    constructor() {
        this.filter = sessionStorage.getItem(this.filterKey);
        sessionStorage.removeItem(this.filterKey);

        const beforeUnload = () => {
            sessionStorage.setItem(this.filterKey, emptyStringIfNull(this.filter));
            return 'unload';
        };
        window.addEventListener('beforeunload', beforeUnload);
    }

    getFilter() {
        return this.filter;
    }

    setFilter(value: string) {
        this.filter = value;
    }
}

function emptyStringIfNull(value: string) {
    return value ? value : '';
}
