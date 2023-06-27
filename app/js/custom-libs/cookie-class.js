class Cookie {
    constructor(parent, options) {
        this.parent = parent;
        this.cookieName = options.cookieName;
        this.cookiePeriod = +options.cookiePeriod;
        this.cookiePath = options.cookiePath || '/';
        this.cookieValue = options.cookieValue || 'true';
        this.init();
    }

    init() {
        this.checkCookie();
        let cookieBtns = this.parent.querySelectorAll(`[data-cookie-agree]`);
        cookieBtns.forEach(cookieBtn => {
            cookieBtn.addEventListener('click', () => this.cookieWork());
        });
    }

    cookieWork() {
        let date = new Date();
        date.setDate(date.getDate() + this.cookiePeriod);
        document.cookie = `${this.cookieName}=${this.cookieValue}; path=${this.cookiePath}; expires=${date}`;
        this.parent.style.display = 'none';
    }

    checkCookie() {
        let showCookie = this.getCookieName(this.cookieName);
        if (showCookie != this.cookieValue) {
            if (this.parent) {
                this.parent.style.display = 'block';
            }
        }
    }

    getCookieName(name) {
        let matches = document.cookie.match(
            new RegExp(
                '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
            )
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
}
