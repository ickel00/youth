
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = ["https://focus.youth.cn/article/s?signature=Mq8BYdozK36wyv5a2G3o6vUV0PyZINK9Qrx1nPDWpxVg2LZmRX&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36512423&time=1614560702&app_version=2.0.2&sign=8ea74821966db751073300362da0101f",
"https://focus.youth.cn/article/s?signature=8MzJgNdEKAO0xvq7nRQQbvc09m3Bu50oVeM7ZPYQ3lm9pbD2yn&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36522029&time=1614560729&app_version=2.0.2&sign=3c63907df31ae4928b5e22cd377ae7cb",
"https://focus.youth.cn/article/s?signature=eQVjADm2pM09d8g4Xj9dpzu2YMP5hAEMKyvalyGPYqnLbZRBXK&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36446939&time=1614560756&app_version=2.0.2&sign=73877436fae538ba56d4124107ba75d6",
"https://focus.youth.cn/article/s?signature=3nLo8BVlwPd52WM792jNo5h0EK2numdqr6Na9Ee0q6OyNbJvDX&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36524968&time=1614560783&app_version=2.0.2&sign=6dd587ab6d60b78268466d10025b168f",
"https://focus.youth.cn/article/s?signature=0Z3Jgv96wqmVPeM7o9YWQ8TMz0YZFx6w2JV1jpGDnANbo8KXQr&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36496233&time=1614560807&app_version=2.0.2&sign=573b9398b8690b39abe746e96a4b99ff",
"https://focus.youth.cn/article/s?signature=RpqGjEWYvLyBl2g1lq8YQbsvRZmquvdOMno4D56Pd3OMonkQx9&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36514948&time=1614560825&app_version=2.0.2&sign=3dcbc02c66b42e4d2a3a94ed3156bb71",
"https://focus.youth.cn/article/s?signature=yloGK5wNVmQq0XWaWwgLvOUyQV8kTXnG0zOan93eRAO8BMxdvD&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36524046&time=1614560847&app_version=2.0.2&sign=95d6e83c47dad12e18adf8c269729378",
"https://focus.youth.cn/article/s?signature=k5Bv92bmMjwJEOP782KxRnI50gWLczQKgA01gxne6rYKdpWVoR&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36494466&time=1614560867&app_version=2.0.2&sign=e08c84fadca488abf3f95d5ecb3cd7ee",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4v8bb9RiLWJPEuMyvjJKa8B9yl0Z2eRAmzr&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36521419&time=1614560886&app_version=2.0.2&sign=27dd08ee089da648f7d54654439f7e7e",
"https://focus.youth.cn/article/s?signature=qbBkjWwN2L3nP684eJwbm6tdM9DZcBxkozD7gRyAEYpXDmeo0O&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36412186&time=1614560912&app_version=2.0.2&sign=051cfa9b29f5087f036de560af616dc2",
"https://focus.youth.cn/article/s?signature=3YDwkj8dqQbPnoB4jLwr3WCBzEDWS3AyDKKalgxXL9AJ2zORKM&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36438783&time=1614562233&app_version=2.0.2&sign=1e9fb5c73cbff269e6da0e4b94c97f2d",
"https://focus.youth.cn/article/s?signature=Vwo03AWDZyGJbgP7NEgJZOcYpPxZFvNmAWp4nMY6dljLxe9Opk&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36511854&time=1614562275&app_version=2.0.2&sign=7437a163849df8fc360d031a2f3bd777",
"https://focus.youth.cn/article/s?signature=KAn0BpeXzg3WkQRaAygMdLfw5yXRuXlMv2Mawr9G5ZDV6ldJ2N&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36525715&time=1614562307&app_version=2.0.2&sign=3851d33e2f04e23be359bb7335859bcf",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4v8bXzKCLWJPEuMyvWBla8B9yl0Z2eRAmzr&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36511477&time=1614562349&app_version=2.0.2&sign=3c7a11252a49c93347ac594447dece8e",
"https://focus.youth.cn/article/s?signature=XOdKbE3Jw6GoWpN4v8bmvLILWJPEuMyvW9Xa8B9yl0Z2eRAmzr&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36515586&time=1614562379&app_version=2.0.2&sign=b86579ffe8605b2aee0166061504f255",
"https://focus.youth.cn/article/s?signature=MGDKgpQNLZkJvEd4q88plQcQOrvmFNvJorV1rny295VAlmPWzY&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=34520941&time=1614562411&app_version=2.0.2&sign=a245e98c3cc0f37373f0500f0c716742",
"https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBjRpWjiVxwK6I6yOZxJad93krDoJqw0WYn&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=34161917&time=1614562437&app_version=2.0.2&sign=8fd728dc4a992fad766090bc1bef01ac",
"https://focus.youth.cn/article/s?signature=VOZvBzYN5rkDxgX7YO5EEYH89kWmTVdYBV61L3yAP6WMnmlGK9&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=29418190&time=1614562463&app_version=2.0.2&sign=17a4329fd9cd669e87bd81c2c58cda38",
"https://focus.youth.cn/article/s?signature=QqvZWbEKpA2yrNR1M96pRBSp5GjbuLKdgLg19VGjJl8gXB5keP&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=29795007&time=1614562486&app_version=2.0.2&sign=4187279a579a7fa992fd8b7bec5510c3",
"https://focus.youth.cn/article/s?signature=X6AKVevx2zmNQOjaBjggMWcVxwK6I6yOZgEad93krDoJqw0WYn&uid=51120823&phone_code=de5d4f6abf84d33c97f6384e57c890a0&scid=36520907&time=1614562504&app_version=2.0.2&sign=b1ba550140bb1f167bd7098615fad92e"]


let encodearticles;


let headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Referer": "https://focus.youth.cn/",
    "Host": "script.baertt.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000231) NetType/WIFI Language/zh_CN",
    "Accept-Language": "zh-cn"
};

!(async() => {
    for (let i = 0; i < articles.length; i++) {
		encodearticles = encodeURIComponent(encodeURIComponent(articles[i]));
        nowTime = new Date().getTime();
        wxck = md5(nowTime);
        $.log(wxck);
		
        await storage();
        await $.wait(3000);

        await visit();
        await $.wait(3000);

        await openpage();
        await $.wait(3000);

        await callback();
        await $.wait(3000);

    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

function storage() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/storage?t=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp2`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function visit() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/visit?type=1&si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp3`;

        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function openpage() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/openpage?referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp5`;
        const request = {
            url: url,
            headers: headers,

        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function callback() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/callback?si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp6`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
             : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
            new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
            this.http = new s(this),
            this.data = null,
            this.dataFile = "box.dat",
            this.logs = [],
            this.isMute = !1,
            this.isNeedRewrite = !1,
            this.logSeparator = "\n",
            this.startTime = (new Date).getTime(),
            Object.assign(this, e),
            this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                r = e && e.timeout ? e.timeout : r;
                const[o, h] = i.split("@"),
                a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e),
                r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
            this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
            t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
            this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                            e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n")),
            this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
            console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
            this.log(),
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
    (t, e)
}
