(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [662], {
        5247: function(e, t, r) {
            "use strict";
            r.d(t, {
                ZP: function() {
                    return o
                }
            });
            const n = {
                    _origin: "https://api.emailjs.com"
                },
                s = (e, t, r) => {
                    if (!e) throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
                    if (!t) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
                    if (!r) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
                    return !0
                };
            class i {
                constructor(e) {
                    this.status = e.status, this.text = e.responseText
                }
            }
            const a = (e, t, r = {}) => new Promise(((s, a) => {
                const o = new XMLHttpRequest;
                o.addEventListener("load", (({
                    target: e
                }) => {
                    const t = new i(e);
                    200 === t.status || "OK" === t.text ? s(t) : a(t)
                })), o.addEventListener("error", (({
                    target: e
                }) => {
                    a(new i(e))
                })), o.open("POST", n._origin + e, !0), Object.keys(r).forEach((e => {
                    o.setRequestHeader(e, r[e])
                })), o.send(t)
            }));
            var o = {
                init: (e, t = "https://api.emailjs.com") => {
                    n._userID = e, n._origin = t
                },
                send: (e, t, r, i) => {
                    const o = i || n._userID;
                    s(o, e, t);
                    const l = {
                        lib_version: "3.6.2",
                        user_id: o,
                        service_id: e,
                        template_id: t,
                        template_params: r
                    };
                    return a("/api/v1.0/email/send", JSON.stringify(l), {
                        "Content-type": "application/json"
                    })
                },
                sendForm: (e, t, r, i) => {
                    const o = i || n._userID,
                        l = (e => {
                            let t;
                            if (t = "string" === typeof e ? document.querySelector(e) : e, !t || "FORM" !== t.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
                            return t
                        })(r);
                    s(o, e, t);
                    const c = new FormData(l);
                    return c.append("lib_version", "3.6.2"), c.append("service_id", e), c.append("template_id", t), c.append("user_id", o), a("/api/v1.0/email/send-form", c)
                }
            }
        },
        7788: function(e, t, r) {
            var n;
            e.exports = (n = r(7294), function(e) {
                var t = {};

                function r(n) {
                    if (t[n]) return t[n].exports;
                    var s = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(s.exports, s, s.exports, r), s.l = !0, s.exports
                }
                return r.m = e, r.c = t, r.d = function(e, t, n) {
                    r.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }, r.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, r.t = function(e, t) {
                    if (1 & t && (e = r(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var n = Object.create(null);
                    if (r.r(n), Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var s in e) r.d(n, s, function(t) {
                            return e[t]
                        }.bind(null, s));
                    return n
                }, r.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return r.d(t, "a", t), t
                }, r.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.p = "/", r(r.s = 5)
            }([function(e, t, r) {
                var n = r(3);
                e.exports = r(8)(n.isElement, !0)
            }, function(e, t) {
                e.exports = n
            }, function(e, t, r) {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            }, function(e, t, r) {
                "use strict";
                e.exports = r(7)
            }, function(e, t, r) {
                var n;
                n = function() {
                    return function(e) {
                        var t = {};

                        function r(n) {
                            if (t[n]) return t[n].exports;
                            var s = t[n] = {
                                exports: {},
                                id: n,
                                loaded: !1
                            };
                            return e[n].call(s.exports, s, s.exports, r), s.loaded = !0, s.exports
                        }
                        return r.m = e, r.c = t, r.p = "", r(0)
                    }([function(e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = function() {
                                function e(e, t) {
                                    for (var r = 0; r < t.length; r++) {
                                        var n = t[r];
                                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                    }
                                }
                                return function(t, r, n) {
                                    return r && e(t.prototype, r), n && e(t, n), t
                                }
                            }(),
                            s = r(1),
                            i = r(3),
                            a = function() {
                                function e(t, r) {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e), s.initializer.load(this, r, t), this.begin()
                                }
                                return n(e, [{
                                    key: "toggle",
                                    value: function() {
                                        this.pause.status ? this.start() : this.stop()
                                    }
                                }, {
                                    key: "stop",
                                    value: function() {
                                        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                                    }
                                }, {
                                    key: "start",
                                    value: function() {
                                        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                                    }
                                }, {
                                    key: "destroy",
                                    value: function() {
                                        this.reset(!1), this.options.onDestroy(this)
                                    }
                                }, {
                                    key: "reset",
                                    value: function() {
                                        var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                                        clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e && (this.insertCursor(), this.options.onReset(this), this.begin())
                                    }
                                }, {
                                    key: "begin",
                                    value: function() {
                                        var e = this;
                                        this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout((function() {
                                            e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                                        }), this.startDelay)
                                    }
                                }, {
                                    key: "typewrite",
                                    value: function(e, t) {
                                        var r = this;
                                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                                        var n = this.humanizer(this.typeSpeed),
                                            s = 1;
                                        !0 !== this.pause.status ? this.timeout = setTimeout((function() {
                                            t = i.htmlParser.typeHtmlChars(e, t, r);
                                            var n = 0,
                                                a = e.substr(t);
                                            if ("^" === a.charAt(0) && /^\^\d+/.test(a)) {
                                                var o = 1;
                                                o += (a = /\d+/.exec(a)[0]).length, n = parseInt(a), r.temporaryPause = !0, r.options.onTypingPaused(r.arrayPos, r), e = e.substring(0, t) + e.substring(t + o), r.toggleBlinking(!0)
                                            }
                                            if ("`" === a.charAt(0)) {
                                                for (;
                                                    "`" !== e.substr(t + s).charAt(0) && !(t + ++s > e.length););
                                                var l = e.substring(0, t),
                                                    c = e.substring(l.length + 1, t + s),
                                                    u = e.substring(t + s + 1);
                                                e = l + c + u, s--
                                            }
                                            r.timeout = setTimeout((function() {
                                                r.toggleBlinking(!1), t >= e.length ? r.doneTyping(e, t) : r.keepTyping(e, t, s), r.temporaryPause && (r.temporaryPause = !1, r.options.onTypingResumed(r.arrayPos, r))
                                            }), n)
                                        }), n) : this.setPauseStatus(e, t, !0)
                                    }
                                }, {
                                    key: "keepTyping",
                                    value: function(e, t, r) {
                                        0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), t += r;
                                        var n = e.substr(0, t);
                                        this.replaceText(n), this.typewrite(e, t)
                                    }
                                }, {
                                    key: "doneTyping",
                                    value: function(e, t) {
                                        var r = this;
                                        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout((function() {
                                            r.backspace(e, t)
                                        }), this.backDelay))
                                    }
                                }, {
                                    key: "backspace",
                                    value: function(e, t) {
                                        var r = this;
                                        if (!0 !== this.pause.status) {
                                            if (this.fadeOut) return this.initFadeOut();
                                            this.toggleBlinking(!1);
                                            var n = this.humanizer(this.backSpeed);
                                            this.timeout = setTimeout((function() {
                                                t = i.htmlParser.backSpaceHtmlChars(e, t, r);
                                                var n = e.substr(0, t);
                                                if (r.replaceText(n), r.smartBackspace) {
                                                    var s = r.strings[r.arrayPos + 1];
                                                    s && n === s.substr(0, t) ? r.stopNum = t : r.stopNum = 0
                                                }
                                                t > r.stopNum ? (t--, r.backspace(e, t)) : t <= r.stopNum && (r.arrayPos++, r.arrayPos === r.strings.length ? (r.arrayPos = 0, r.options.onLastStringBackspaced(), r.shuffleStringsIfNeeded(), r.begin()) : r.typewrite(r.strings[r.sequence[r.arrayPos]], t))
                                            }), n)
                                        } else this.setPauseStatus(e, t, !0)
                                    }
                                }, {
                                    key: "complete",
                                    value: function() {
                                        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                                    }
                                }, {
                                    key: "setPauseStatus",
                                    value: function(e, t, r) {
                                        this.pause.typewrite = r, this.pause.curString = e, this.pause.curStrPos = t
                                    }
                                }, {
                                    key: "toggleBlinking",
                                    value: function(e) {
                                        this.cursor && (this.pause.status || this.cursorBlinking !== e && (this.cursorBlinking = e, e ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                                    }
                                }, {
                                    key: "humanizer",
                                    value: function(e) {
                                        return Math.round(Math.random() * e / 2) + e
                                    }
                                }, {
                                    key: "shuffleStringsIfNeeded",
                                    value: function() {
                                        this.shuffle && (this.sequence = this.sequence.sort((function() {
                                            return Math.random() - .5
                                        })))
                                    }
                                }, {
                                    key: "initFadeOut",
                                    value: function() {
                                        var e = this;
                                        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout((function() {
                                            e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0)
                                        }), this.fadeOutDelay)
                                    }
                                }, {
                                    key: "replaceText",
                                    value: function(e) {
                                        this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
                                    }
                                }, {
                                    key: "bindFocusEvents",
                                    value: function() {
                                        var e = this;
                                        this.isInput && (this.el.addEventListener("focus", (function(t) {
                                            e.stop()
                                        })), this.el.addEventListener("blur", (function(t) {
                                            e.el.value && 0 !== e.el.value.length || e.start()
                                        })))
                                    }
                                }, {
                                    key: "insertCursor",
                                    value: function() {
                                        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                                    }
                                }]), e
                            }();
                        t.default = a, e.exports = t.default
                    }, function(e, t, r) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n, s = Object.assign || function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                                }
                                return e
                            },
                            i = function() {
                                function e(e, t) {
                                    for (var r = 0; r < t.length; r++) {
                                        var n = t[r];
                                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                    }
                                }
                                return function(t, r, n) {
                                    return r && e(t.prototype, r), n && e(t, n), t
                                }
                            }(),
                            a = (n = r(2)) && n.__esModule ? n : {
                                default: n
                            },
                            o = function() {
                                function e() {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e)
                                }
                                return i(e, [{
                                    key: "load",
                                    value: function(e, t, r) {
                                        if (e.el = "string" == typeof r ? document.querySelector(r) : r, e.options = s({}, a.default, t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map((function(e) {
                                                return e.trim()
                                            })), "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement, e.stringsElement) {
                                            e.strings = [], e.stringsElement.style.display = "none";
                                            var n = Array.prototype.slice.apply(e.stringsElement.children),
                                                i = n.length;
                                            if (i)
                                                for (var o = 0; o < i; o += 1) {
                                                    var l = n[o];
                                                    e.strings.push(l.innerHTML.trim())
                                                }
                                        }
                                        for (var o in e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
                                                status: !1,
                                                typewrite: !0,
                                                curString: "",
                                                curStrPos: 0
                                            }, e.typingComplete = !1, e.strings) e.sequence[o] = o;
                                        e.currentElContent = this.getCurrentElContent(e), e.autoInsertCss = e.options.autoInsertCss, this.appendAnimationCss(e)
                                    }
                                }, {
                                    key: "getCurrentElContent",
                                    value: function(e) {
                                        return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent
                                    }
                                }, {
                                    key: "appendAnimationCss",
                                    value: function(e) {
                                        if (e.autoInsertCss && (e.showCursor || e.fadeOut) && !document.querySelector("[data-typed-js-css]")) {
                                            var t = document.createElement("style");
                                            t.type = "text/css", t.setAttribute("data-typed-js-css", !0);
                                            var r = "";
                                            e.showCursor && (r += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), e.fadeOut && (r += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== t.length && (t.innerHTML = r, document.body.appendChild(t))
                                        }
                                    }
                                }]), e
                            }();
                        t.default = o;
                        var l = new o;
                        t.initializer = l
                    }, function(e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = {
                            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                            stringsElement: null,
                            typeSpeed: 0,
                            startDelay: 0,
                            backSpeed: 0,
                            smartBackspace: !0,
                            shuffle: !1,
                            backDelay: 700,
                            fadeOut: !1,
                            fadeOutClass: "typed-fade-out",
                            fadeOutDelay: 500,
                            loop: !1,
                            loopCount: 1 / 0,
                            showCursor: !0,
                            cursorChar: "|",
                            autoInsertCss: !0,
                            attr: null,
                            bindInputFocusEvents: !1,
                            contentType: "html",
                            onComplete: function(e) {},
                            preStringTyped: function(e, t) {},
                            onStringTyped: function(e, t) {},
                            onLastStringBackspaced: function(e) {},
                            onTypingPaused: function(e, t) {},
                            onTypingResumed: function(e, t) {},
                            onReset: function(e) {},
                            onStop: function(e, t) {},
                            onStart: function(e, t) {},
                            onDestroy: function(e) {}
                        };
                        t.default = r, e.exports = t.default
                    }, function(e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var r = function() {
                                function e(e, t) {
                                    for (var r = 0; r < t.length; r++) {
                                        var n = t[r];
                                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                    }
                                }
                                return function(t, r, n) {
                                    return r && e(t.prototype, r), n && e(t, n), t
                                }
                            }(),
                            n = function() {
                                function e() {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e)
                                }
                                return r(e, [{
                                    key: "typeHtmlChars",
                                    value: function(e, t, r) {
                                        if ("html" !== r.contentType) return t;
                                        var n = e.substr(t).charAt(0);
                                        if ("<" === n || "&" === n) {
                                            var s = "";
                                            for (s = "<" === n ? ">" : ";"; e.substr(t + 1).charAt(0) !== s && !(1 + ++t > e.length););
                                            t++
                                        }
                                        return t
                                    }
                                }, {
                                    key: "backSpaceHtmlChars",
                                    value: function(e, t, r) {
                                        if ("html" !== r.contentType) return t;
                                        var n = e.substr(t).charAt(0);
                                        if (">" === n || ";" === n) {
                                            var s = "";
                                            for (s = ">" === n ? "<" : "&"; e.substr(t - 1).charAt(0) !== s && !(--t < 0););
                                            t--
                                        }
                                        return t
                                    }
                                }]), e
                            }();
                        t.default = n;
                        var s = new n;
                        t.htmlParser = s
                    }])
                }, e.exports = n()
            }, function(e, t, r) {
                "use strict";
                r.r(t);
                var n = r(1),
                    s = r.n(n),
                    i = r(0),
                    a = r.n(i),
                    o = r(4),
                    l = r.n(o);

                function c(e) {
                    return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function u(e, t) {
                    if (null == e) return {};
                    var r, n, s = function(e, t) {
                        if (null == e) return {};
                        var r, n, s = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
                        return s
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
                    }
                    return s
                }

                function d(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function p(e) {
                    return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function f(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function h(e, t) {
                    return (h = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }
                var m = function(e) {
                    function t() {
                        var e, r, n, i, a, o, l;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var u = arguments.length, d = new Array(u), h = 0; h < u; h++) d[h] = arguments[h];
                        return n = this, r = !(i = (e = p(t)).call.apply(e, [this].concat(d))) || "object" !== c(i) && "function" != typeof i ? f(n) : i, a = f(r), o = "rootElement", l = s.a.createRef(), o in a ? Object.defineProperty(a, o, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : a[o] = l, r
                    }
                    var r, i, a;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && h(e, t)
                    }(t, n.Component), r = t, (i = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = (e.style, e.typedRef, e.stopped),
                                r = (e.className, u(e, ["style", "typedRef", "stopped", "className"]));
                            this.constructTyped(r), t && this.typed.stop()
                        }
                    }, {
                        key: "constructTyped",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = this.props,
                                n = (r.style, r.typedRef, r.stopped, r.className, u(r, ["style", "typedRef", "stopped", "className"]));
                            this.typed && this.typed.destroy(), this.typed = new l.a(this.rootElement.current, Object.assign(n, t)), this.props.typedRef && this.props.typedRef(this.typed), this.typed.reConstruct = function(t) {
                                e.constructTyped(t)
                            }
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(e) {
                            var t = this;
                            if (this.props !== e) {
                                e.style, e.typedRef, e.stopped, e.className;
                                var r = u(e, ["style", "typedRef", "stopped", "className"]);
                                return this.typed.options = Object.assign(this.typed.options, r), !Object.keys(e).every((function(r) {
                                    return !t.props[r] && e[r] ? (t.constructTyped(e), !1) : (t.typed[r] && (t.typed[r] = e[r]), !0)
                                })) || this.props.strings.length === e.strings.length || this.constructTyped(e), !0
                            }
                            return !1
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.style,
                                r = e.className,
                                n = e.children,
                                i = s.a.createElement("span", {
                                    ref: this.rootElement
                                });
                            return n && (i = s.a.cloneElement(n, {
                                ref: this.rootElement
                            })), s.a.createElement("span", {
                                style: t,
                                className: r
                            }, i)
                        }
                    }]) && d(r.prototype, i), a && d(r, a), t
                }();
                m.propTypes = {
                    style: a.a.object,
                    className: a.a.string,
                    children: a.a.object,
                    typedRef: a.a.func,
                    stopped: a.a.bool,
                    strings: a.a.arrayOf(a.a.string),
                    typeSpeed: a.a.number,
                    startDelay: a.a.number,
                    backSpeed: a.a.number,
                    smartBackspace: a.a.bool,
                    shuffle: a.a.bool,
                    backDelay: a.a.number,
                    fadeOut: a.a.bool,
                    fadeOutClass: a.a.string,
                    fadeOutDelay: a.a.number,
                    loop: a.a.bool,
                    loopCount: a.a.number,
                    showCursor: a.a.bool,
                    cursorChar: a.a.string,
                    autoInsertCss: a.a.bool,
                    attr: a.a.string,
                    bindInputFocusEvents: a.a.bool,
                    contentType: a.a.oneOf(["html", ""]),
                    onComplete: a.a.func,
                    preStringTyped: a.a.func,
                    onStringTyped: a.a.func,
                    onLastStringBackspaced: a.a.func,
                    onTypingPaused: a.a.func,
                    onTypingResumed: a.a.func,
                    onReset: a.a.func,
                    onStop: a.a.func,
                    onStart: a.a.func,
                    onDestroy: a.a.func
                }, t.default = m
            }, function(e, t, r) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = "function" == typeof Symbol && Symbol.for,
                    s = n ? Symbol.for("react.element") : 60103,
                    i = n ? Symbol.for("react.portal") : 60106,
                    a = n ? Symbol.for("react.fragment") : 60107,
                    o = n ? Symbol.for("react.strict_mode") : 60108,
                    l = n ? Symbol.for("react.profiler") : 60114,
                    c = n ? Symbol.for("react.provider") : 60109,
                    u = n ? Symbol.for("react.context") : 60110,
                    d = n ? Symbol.for("react.async_mode") : 60111,
                    p = n ? Symbol.for("react.concurrent_mode") : 60111,
                    f = n ? Symbol.for("react.forward_ref") : 60112,
                    h = n ? Symbol.for("react.suspense") : 60113,
                    m = n ? Symbol.for("react.suspense_list") : 60120,
                    y = n ? Symbol.for("react.memo") : 60115,
                    g = n ? Symbol.for("react.lazy") : 60116,
                    v = n ? Symbol.for("react.fundamental") : 60117,
                    b = n ? Symbol.for("react.responder") : 60118;

                function w(e) {
                    if ("object" == typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case s:
                                switch (e = e.type) {
                                    case d:
                                    case p:
                                    case a:
                                    case l:
                                    case o:
                                    case h:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case u:
                                            case f:
                                            case c:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                            case g:
                            case y:
                            case i:
                                return t
                        }
                    }
                }

                function S(e) {
                    return w(e) === p
                }
                t.typeOf = w, t.AsyncMode = d, t.ConcurrentMode = p, t.ContextConsumer = u, t.ContextProvider = c, t.Element = s, t.ForwardRef = f, t.Fragment = a, t.Lazy = g, t.Memo = y, t.Portal = i, t.Profiler = l, t.StrictMode = o, t.Suspense = h, t.isValidElementType = function(e) {
                    return "string" == typeof e || "function" == typeof e || e === a || e === p || e === l || e === o || e === h || e === m || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === y || e.$$typeof === c || e.$$typeof === u || e.$$typeof === f || e.$$typeof === v || e.$$typeof === b)
                }, t.isAsyncMode = function(e) {
                    return S(e) || w(e) === d
                }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
                    return w(e) === u
                }, t.isContextProvider = function(e) {
                    return w(e) === c
                }, t.isElement = function(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === s
                }, t.isForwardRef = function(e) {
                    return w(e) === f
                }, t.isFragment = function(e) {
                    return w(e) === a
                }, t.isLazy = function(e) {
                    return w(e) === g
                }, t.isMemo = function(e) {
                    return w(e) === y
                }, t.isPortal = function(e) {
                    return w(e) === i
                }, t.isProfiler = function(e) {
                    return w(e) === l
                }, t.isStrictMode = function(e) {
                    return w(e) === o
                }, t.isSuspense = function(e) {
                    return w(e) === h
                }
            }, function(e, t, r) {
                "use strict";
                ! function() {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var e = "function" == typeof Symbol && Symbol.for,
                        r = e ? Symbol.for("react.element") : 60103,
                        n = e ? Symbol.for("react.portal") : 60106,
                        s = e ? Symbol.for("react.fragment") : 60107,
                        i = e ? Symbol.for("react.strict_mode") : 60108,
                        a = e ? Symbol.for("react.profiler") : 60114,
                        o = e ? Symbol.for("react.provider") : 60109,
                        l = e ? Symbol.for("react.context") : 60110,
                        c = e ? Symbol.for("react.async_mode") : 60111,
                        u = e ? Symbol.for("react.concurrent_mode") : 60111,
                        d = e ? Symbol.for("react.forward_ref") : 60112,
                        p = e ? Symbol.for("react.suspense") : 60113,
                        f = e ? Symbol.for("react.suspense_list") : 60120,
                        h = e ? Symbol.for("react.memo") : 60115,
                        m = e ? Symbol.for("react.lazy") : 60116,
                        y = e ? Symbol.for("react.fundamental") : 60117,
                        g = e ? Symbol.for("react.responder") : 60118,
                        v = function(e) {
                            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            var s = 0,
                                i = "Warning: " + e.replace(/%s/g, (function() {
                                    return r[s++]
                                }));
                            "undefined" != typeof console && console.warn(i);
                            try {
                                throw new Error(i)
                            } catch (e) {}
                        },
                        b = function(e, t) {
                            if (void 0 === t) throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");
                            if (!e) {
                                for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) n[s - 2] = arguments[s];
                                v.apply(void 0, [t].concat(n))
                            }
                        };

                    function w(e) {
                        if ("object" == typeof e && null !== e) {
                            var t = e.$$typeof;
                            switch (t) {
                                case r:
                                    var f = e.type;
                                    switch (f) {
                                        case c:
                                        case u:
                                        case s:
                                        case a:
                                        case i:
                                        case p:
                                            return f;
                                        default:
                                            var y = f && f.$$typeof;
                                            switch (y) {
                                                case l:
                                                case d:
                                                case o:
                                                    return y;
                                                default:
                                                    return t
                                            }
                                    }
                                case m:
                                case h:
                                case n:
                                    return t
                            }
                        }
                    }
                    var S = c,
                        T = u,
                        E = l,
                        x = o,
                        C = r,
                        k = d,
                        O = s,
                        P = m,
                        _ = h,
                        M = n,
                        A = a,
                        L = i,
                        $ = p,
                        j = !1;

                    function D(e) {
                        return w(e) === u
                    }
                    t.typeOf = w, t.AsyncMode = S, t.ConcurrentMode = T, t.ContextConsumer = E, t.ContextProvider = x, t.Element = C, t.ForwardRef = k, t.Fragment = O, t.Lazy = P, t.Memo = _, t.Portal = M, t.Profiler = A, t.StrictMode = L, t.Suspense = $, t.isValidElementType = function(e) {
                        return "string" == typeof e || "function" == typeof e || e === s || e === u || e === a || e === i || e === p || e === f || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === o || e.$$typeof === l || e.$$typeof === d || e.$$typeof === y || e.$$typeof === g)
                    }, t.isAsyncMode = function(e) {
                        return j || (j = !0, b(!1, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(e) || w(e) === c
                    }, t.isConcurrentMode = D, t.isContextConsumer = function(e) {
                        return w(e) === l
                    }, t.isContextProvider = function(e) {
                        return w(e) === o
                    }, t.isElement = function(e) {
                        return "object" == typeof e && null !== e && e.$$typeof === r
                    }, t.isForwardRef = function(e) {
                        return w(e) === d
                    }, t.isFragment = function(e) {
                        return w(e) === s
                    }, t.isLazy = function(e) {
                        return w(e) === m
                    }, t.isMemo = function(e) {
                        return w(e) === h
                    }, t.isPortal = function(e) {
                        return w(e) === n
                    }, t.isProfiler = function(e) {
                        return w(e) === a
                    }, t.isStrictMode = function(e) {
                        return w(e) === i
                    }, t.isSuspense = function(e) {
                        return w(e) === p
                    }
                }()
            }, function(e, t, r) {
                "use strict";
                var n = r(3),
                    s = r(9),
                    i = r(2),
                    a = r(10),
                    o = Function.call.bind(Object.prototype.hasOwnProperty),
                    l = function() {};

                function c() {
                    return null
                }
                l = function(e) {
                    var t = "Warning: " + e;
                    "undefined" != typeof console && console.error(t);
                    try {
                        throw new Error(t)
                    } catch (e) {}
                }, e.exports = function(e, t) {
                    var r = "function" == typeof Symbol && Symbol.iterator,
                        u = "@@iterator",
                        d = "<<anonymous>>",
                        p = {
                            array: y("array"),
                            bool: y("boolean"),
                            func: y("function"),
                            number: y("number"),
                            object: y("object"),
                            string: y("string"),
                            symbol: y("symbol"),
                            any: m(c),
                            arrayOf: function(e) {
                                return m((function(t, r, n, s, a) {
                                    if ("function" != typeof e) return new h("Property `" + a + "` of component `" + n + "` has invalid PropType notation inside arrayOf.");
                                    var o = t[r];
                                    if (!Array.isArray(o)) return new h("Invalid " + s + " `" + a + "` of type `" + v(o) + "` supplied to `" + n + "`, expected an array.");
                                    for (var l = 0; l < o.length; l++) {
                                        var c = e(o, l, n, s, a + "[" + l + "]", i);
                                        if (c instanceof Error) return c
                                    }
                                    return null
                                }))
                            },
                            element: m((function(t, r, n, s, i) {
                                var a = t[r];
                                return e(a) ? null : new h("Invalid " + s + " `" + i + "` of type `" + v(a) + "` supplied to `" + n + "`, expected a single ReactElement.")
                            })),
                            elementType: m((function(e, t, r, s, i) {
                                var a = e[t];
                                return n.isValidElementType(a) ? null : new h("Invalid " + s + " `" + i + "` of type `" + v(a) + "` supplied to `" + r + "`, expected a single ReactElement type.")
                            })),
                            instanceOf: function(e) {
                                return m((function(t, r, n, s, i) {
                                    if (!(t[r] instanceof e)) {
                                        var a = e.name || d;
                                        return new h("Invalid " + s + " `" + i + "` of type `" + function(e) {
                                            return e.constructor && e.constructor.name ? e.constructor.name : d
                                        }(t[r]) + "` supplied to `" + n + "`, expected instance of `" + a + "`.")
                                    }
                                    return null
                                }))
                            },
                            node: m((function(e, t, r, n, s) {
                                return g(e[t]) ? null : new h("Invalid " + n + " `" + s + "` supplied to `" + r + "`, expected a ReactNode.")
                            })),
                            objectOf: function(e) {
                                return m((function(t, r, n, s, a) {
                                    if ("function" != typeof e) return new h("Property `" + a + "` of component `" + n + "` has invalid PropType notation inside objectOf.");
                                    var l = t[r],
                                        c = v(l);
                                    if ("object" !== c) return new h("Invalid " + s + " `" + a + "` of type `" + c + "` supplied to `" + n + "`, expected an object.");
                                    for (var u in l)
                                        if (o(l, u)) {
                                            var d = e(l, u, n, s, a + "." + u, i);
                                            if (d instanceof Error) return d
                                        }
                                    return null
                                }))
                            },
                            oneOf: function(e) {
                                return Array.isArray(e) ? m((function(t, r, n, s, i) {
                                    for (var a = t[r], o = 0; o < e.length; o++)
                                        if (f(a, e[o])) return null;
                                    var l = JSON.stringify(e, (function(e, t) {
                                        return "symbol" === b(t) ? String(t) : t
                                    }));
                                    return new h("Invalid " + s + " `" + i + "` of value `" + String(a) + "` supplied to `" + n + "`, expected one of " + l + ".")
                                })) : (l(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), c)
                            },
                            oneOfType: function(e) {
                                if (!Array.isArray(e)) return l("Invalid argument supplied to oneOfType, expected an instance of array."), c;
                                for (var t = 0; t < e.length; t++) {
                                    var r = e[t];
                                    if ("function" != typeof r) return l("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + w(r) + " at index " + t + "."), c
                                }
                                return m((function(t, r, n, s, a) {
                                    for (var o = 0; o < e.length; o++)
                                        if (null == (0, e[o])(t, r, n, s, a, i)) return null;
                                    return new h("Invalid " + s + " `" + a + "` supplied to `" + n + "`.")
                                }))
                            },
                            shape: function(e) {
                                return m((function(t, r, n, s, a) {
                                    var o = t[r],
                                        l = v(o);
                                    if ("object" !== l) return new h("Invalid " + s + " `" + a + "` of type `" + l + "` supplied to `" + n + "`, expected `object`.");
                                    for (var c in e) {
                                        var u = e[c];
                                        if (u) {
                                            var d = u(o, c, n, s, a + "." + c, i);
                                            if (d) return d
                                        }
                                    }
                                    return null
                                }))
                            },
                            exact: function(e) {
                                return m((function(t, r, n, a, o) {
                                    var l = t[r],
                                        c = v(l);
                                    if ("object" !== c) return new h("Invalid " + a + " `" + o + "` of type `" + c + "` supplied to `" + n + "`, expected `object`.");
                                    var u = s({}, t[r], e);
                                    for (var d in u) {
                                        var p = e[d];
                                        if (!p) return new h("Invalid " + a + " `" + o + "` key `" + d + "` supplied to `" + n + "`.\nBad object: " + JSON.stringify(t[r], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                                        var f = p(l, d, n, a, o + "." + d, i);
                                        if (f) return f
                                    }
                                    return null
                                }))
                            }
                        };

                    function f(e, t) {
                        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
                    }

                    function h(e) {
                        this.message = e, this.stack = ""
                    }

                    function m(e) {
                        var r = {},
                            n = 0;

                        function s(s, a, o, c, u, p, f) {
                            if (c = c || d, p = p || o, f !== i) {
                                if (t) {
                                    var m = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                                    throw m.name = "Invariant Violation", m
                                }
                                if ("undefined" != typeof console) {
                                    var y = c + ":" + o;
                                    !r[y] && n < 3 && (l("You are manually calling a React.PropTypes validation function for the `" + p + "` prop on `" + c + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), r[y] = !0, n++)
                                }
                            }
                            return null == a[o] ? s ? null === a[o] ? new h("The " + u + " `" + p + "` is marked as required in `" + c + "`, but its value is `null`.") : new h("The " + u + " `" + p + "` is marked as required in `" + c + "`, but its value is `undefined`.") : null : e(a, o, c, u, p)
                        }
                        var a = s.bind(null, !1);
                        return a.isRequired = s.bind(null, !0), a
                    }

                    function y(e) {
                        return m((function(t, r, n, s, i, a) {
                            var o = t[r];
                            return v(o) !== e ? new h("Invalid " + s + " `" + i + "` of type `" + b(o) + "` supplied to `" + n + "`, expected `" + e + "`.") : null
                        }))
                    }

                    function g(t) {
                        switch (typeof t) {
                            case "number":
                            case "string":
                            case "undefined":
                                return !0;
                            case "boolean":
                                return !t;
                            case "object":
                                if (Array.isArray(t)) return t.every(g);
                                if (null === t || e(t)) return !0;
                                var n = function(e) {
                                    var t = e && (r && e[r] || e[u]);
                                    if ("function" == typeof t) return t
                                }(t);
                                if (!n) return !1;
                                var s, i = n.call(t);
                                if (n !== t.entries) {
                                    for (; !(s = i.next()).done;)
                                        if (!g(s.value)) return !1
                                } else
                                    for (; !(s = i.next()).done;) {
                                        var a = s.value;
                                        if (a && !g(a[1])) return !1
                                    }
                                return !0;
                            default:
                                return !1
                        }
                    }

                    function v(e) {
                        var t = typeof e;
                        return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : function(e, t) {
                            return "symbol" === e || !!t && ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
                        }(t, e) ? "symbol" : t
                    }

                    function b(e) {
                        if (null == e) return "" + e;
                        var t = v(e);
                        if ("object" === t) {
                            if (e instanceof Date) return "date";
                            if (e instanceof RegExp) return "regexp"
                        }
                        return t
                    }

                    function w(e) {
                        var t = b(e);
                        switch (t) {
                            case "array":
                            case "object":
                                return "an " + t;
                            case "boolean":
                            case "date":
                            case "regexp":
                                return "a " + t;
                            default:
                                return t
                        }
                    }
                    return h.prototype = Error.prototype, p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p
                }
            }, function(e, t, r) {
                "use strict";
                var n = Object.getOwnPropertySymbols,
                    s = Object.prototype.hasOwnProperty,
                    i = Object.prototype.propertyIsEnumerable;

                function a(e) {
                    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }
                e.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                return t[e]
                            })).join("")) return !1;
                        var n = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            n[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                    } catch (e) {
                        return !1
                    }
                }() ? Object.assign : function(e, t) {
                    for (var r, o, l = a(e), c = 1; c < arguments.length; c++) {
                        for (var u in r = Object(arguments[c])) s.call(r, u) && (l[u] = r[u]);
                        if (n) {
                            o = n(r);
                            for (var d = 0; d < o.length; d++) i.call(r, o[d]) && (l[o[d]] = r[o[d]])
                        }
                    }
                    return l
                }
            }, function(e, t, r) {
                "use strict";
                var n = function() {},
                    s = r(2),
                    i = {},
                    a = Function.call.bind(Object.prototype.hasOwnProperty);

                function o(e, t, r, o, l) {
                    for (var c in e)
                        if (a(e, c)) {
                            var u;
                            try {
                                if ("function" != typeof e[c]) {
                                    var d = Error((o || "React class") + ": " + r + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.");
                                    throw d.name = "Invariant Violation", d
                                }
                                u = e[c](t, c, o, r, null, s)
                            } catch (e) {
                                u = e
                            }
                            if (!u || u instanceof Error || n((o || "React class") + ": type specification of " + r + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in i)) {
                                i[u.message] = !0;
                                var p = l ? l() : "";
                                n("Failed " + r + " type: " + u.message + (null != p ? p : ""))
                            }
                        }
                }
                n = function(e) {
                    var t = "Warning: " + e;
                    "undefined" != typeof console && console.error(t);
                    try {
                        throw new Error(t)
                    } catch (e) {}
                }, o.resetWarningCache = function() {
                    i = {}
                }, e.exports = o
            }, function(e, t, r) {
                "use strict";
                var n = r(2);

                function s() {}

                function i() {}
                i.resetWarningCache = s, e.exports = function() {
                    function e(e, t, r, s, i, a) {
                        if (a !== n) {
                            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw o.name = "Invariant Violation", o
                        }
                    }

                    function t() {
                        return e
                    }
                    e.isRequired = e;
                    var r = {
                        array: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: t,
                        element: e,
                        elementType: e,
                        instanceOf: t,
                        node: e,
                        objectOf: t,
                        oneOf: t,
                        oneOfType: t,
                        shape: t,
                        exact: t,
                        checkPropTypes: i,
                        resetWarningCache: s
                    };
                    return r.PropTypes = r, r
                }
            }]))
        },
        7536: function(e, t, r) {
            "use strict";
            r.d(t, {
                cI: function() {
                    return Se
                }
            });
            var n = r(7294),
                s = e => "checkbox" === e.type,
                i = e => e instanceof Date,
                a = e => null == e;
            const o = e => "object" === typeof e;
            var l = e => !a(e) && !Array.isArray(e) && o(e) && !i(e),
                c = e => l(e) && e.target ? s(e.target) ? e.target.checked : e.target.value : e,
                u = (e, t) => e.has((e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
                d = e => Array.isArray(e) ? e.filter(Boolean) : [],
                p = e => void 0 === e,
                f = (e, t, r) => {
                    if (!t || !l(e)) return r;
                    const n = d(t.split(/[,[\].]+?/)).reduce(((e, t) => a(e) ? e : e[t]), e);
                    return p(n) || n === e ? p(e[t]) ? r : e[t] : n
                };
            const h = "blur",
                m = "focusout",
                y = "onBlur",
                g = "onChange",
                v = "onSubmit",
                b = "onTouched",
                w = "all",
                S = "max",
                T = "min",
                E = "maxLength",
                x = "minLength",
                C = "pattern",
                k = "required",
                O = "validate";
            n.createContext(null);
            var P = (e, t, r, n = !0) => {
                    const s = {};
                    for (const i in e) Object.defineProperty(s, i, {
                        get: () => {
                            const s = i;
                            return t[s] !== w && (t[s] = !n || w), r && (r[s] = !0), e[s]
                        }
                    });
                    return s
                },
                _ = e => l(e) && !Object.keys(e).length,
                M = (e, t, r) => {
                    const {
                        name: n,
                        ...s
                    } = e;
                    return _(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((e => t[e] === (!r || w)))
                },
                A = e => Array.isArray(e) ? e : [e];

            function L(e) {
                const t = n.useRef(e);
                t.current = e, n.useEffect((() => {
                    const r = !e.disabled && t.current.subject.subscribe({
                        next: t.current.callback
                    });
                    return () => (e => {
                        e && e.unsubscribe()
                    })(r)
                }), [e.disabled])
            }
            var $ = e => "string" === typeof e,
                j = (e, t, r, n) => {
                    const s = Array.isArray(e);
                    return $(e) ? (n && t.watch.add(e), f(r, e)) : s ? e.map((e => (n && t.watch.add(e), f(r, e)))) : (n && (t.watchAll = !0), r)
                },
                D = e => "function" === typeof e,
                I = e => {
                    for (const t in e)
                        if (D(e[t])) return !0;
                    return !1
                };
            var N = (e, t, r, n, s) => t ? { ...r[e],
                    types: { ...r[e] && r[e].types ? r[e].types : {},
                        [n]: s || !0
                    }
                } : {},
                F = e => /^\w*$/.test(e),
                V = e => d(e.replace(/["|']|\]/g, "").split(/\.|\[/));

            function z(e, t, r) {
                let n = -1;
                const s = F(t) ? [t] : V(t),
                    i = s.length,
                    a = i - 1;
                for (; ++n < i;) {
                    const t = s[n];
                    let i = r;
                    if (n !== a) {
                        const r = e[t];
                        i = l(r) || Array.isArray(r) ? r : isNaN(+s[n + 1]) ? {} : []
                    }
                    e[t] = i, e = e[t]
                }
                return e
            }
            const B = (e, t, r) => {
                for (const n of r || Object.keys(e)) {
                    const r = f(e, n);
                    if (r) {
                        const {
                            _f: e,
                            ...n
                        } = r;
                        if (e && t(e.name)) {
                            if (e.ref.focus && p(e.ref.focus())) break;
                            if (e.refs) {
                                e.refs[0].focus();
                                break
                            }
                        } else l(n) && B(n, t)
                    }
                }
            };
            var R = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((t => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)))));

            function G(e) {
                let t;
                const r = Array.isArray(e);
                if (e instanceof Date) t = new Date(e);
                else if (e instanceof Set) t = new Set(e);
                else if (globalThis.Blob && e instanceof Blob) t = e;
                else if (globalThis.FileList && e instanceof FileList) t = e;
                else {
                    if (!r && !l(e)) return e;
                    t = r ? [] : {};
                    for (const r in e) t[r] = D(e[r]) ? e[r] : G(e[r])
                }
                return t
            }

            function H(e, t) {
                const r = F(t) ? [t] : V(t),
                    n = 1 == r.length ? e : function(e, t) {
                        const r = t.slice(0, -1).length;
                        let n = 0;
                        for (; n < r;) e = p(e) ? n++ : e[t[n++]];
                        return e
                    }(e, r),
                    s = r[r.length - 1];
                let i;
                n && delete n[s];
                for (let a = 0; a < r.slice(0, -1).length; a++) {
                    let t, n = -1;
                    const s = r.slice(0, -(a + 1)),
                        o = s.length - 1;
                    for (a > 0 && (i = e); ++n < s.length;) {
                        const r = s[n];
                        t = t ? t[r] : e[r], o === n && (l(t) && _(t) || Array.isArray(t) && !t.filter((e => !p(e))).length) && (i ? delete i[r] : delete e[r]), i = t
                    }
                }
                return e
            }

            function q() {
                let e = [];
                return {
                    get observers() {
                        return e
                    },
                    next: t => {
                        for (const r of e) r.next(t)
                    },
                    subscribe: t => (e.push(t), {
                        unsubscribe: () => {
                            e = e.filter((e => e !== t))
                        }
                    }),
                    unsubscribe: () => {
                        e = []
                    }
                }
            }
            var W = e => a(e) || !o(e);

            function Y(e, t) {
                if (W(e) || W(t)) return e === t;
                if (i(e) && i(t)) return e.getTime() === t.getTime();
                const r = Object.keys(e),
                    n = Object.keys(t);
                if (r.length !== n.length) return !1;
                for (const s of r) {
                    const r = e[s];
                    if (!n.includes(s)) return !1;
                    if ("ref" !== s) {
                        const e = t[s];
                        if (i(r) && i(e) || l(r) && l(e) || Array.isArray(r) && Array.isArray(e) ? !Y(r, e) : r !== e) return !1
                    }
                }
                return !0
            }
            var X = e => ({
                    isOnSubmit: !e || e === v,
                    isOnBlur: e === y,
                    isOnChange: e === g,
                    isOnAll: e === w,
                    isOnTouch: e === b
                }),
                U = e => "boolean" === typeof e,
                Z = e => "file" === e.type,
                K = e => e instanceof HTMLElement,
                J = e => "select-multiple" === e.type,
                Q = e => "radio" === e.type,
                ee = "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement && "undefined" !== typeof document,
                te = e => K(e) && e.isConnected;

            function re(e, t = {}) {
                const r = Array.isArray(e);
                if (l(e) || r)
                    for (const n in e) Array.isArray(e[n]) || l(e[n]) && !I(e[n]) ? (t[n] = Array.isArray(e[n]) ? [] : {}, re(e[n], t[n])) : a(e[n]) || (t[n] = !0);
                return t
            }

            function ne(e, t, r) {
                const n = Array.isArray(e);
                if (l(e) || n)
                    for (const s in e) Array.isArray(e[s]) || l(e[s]) && !I(e[s]) ? p(t) || W(r[s]) ? r[s] = Array.isArray(e[s]) ? re(e[s], []) : { ...re(e[s])
                    } : ne(e[s], a(t) ? {} : t[s], r[s]) : r[s] = !Y(e[s], t[s]);
                return r
            }
            var se = (e, t) => ne(e, t, re(t));
            const ie = {
                    value: !1,
                    isValid: !1
                },
                ae = {
                    value: !0,
                    isValid: !0
                };
            var oe = e => {
                    if (Array.isArray(e)) {
                        if (e.length > 1) {
                            const t = e.filter((e => e && e.checked && !e.disabled)).map((e => e.value));
                            return {
                                value: t,
                                isValid: !!t.length
                            }
                        }
                        return e[0].checked && !e[0].disabled ? e[0].attributes && !p(e[0].attributes.value) ? p(e[0].value) || "" === e[0].value ? ae : {
                            value: e[0].value,
                            isValid: !0
                        } : ae : ie
                    }
                    return ie
                },
                le = (e, {
                    valueAsNumber: t,
                    valueAsDate: r,
                    setValueAs: n
                }) => p(e) ? e : t ? "" === e ? NaN : +e : r && $(e) ? new Date(e) : n ? n(e) : e;
            const ce = {
                isValid: !1,
                value: null
            };
            var ue = e => Array.isArray(e) ? e.reduce(((e, t) => t && t.checked && !t.disabled ? {
                isValid: !0,
                value: t.value
            } : e), ce) : ce;

            function de(e) {
                const t = e.ref;
                if (!(e.refs ? e.refs.every((e => e.disabled)) : t.disabled)) return Z(t) ? t.files : Q(t) ? ue(e.refs).value : J(t) ? [...t.selectedOptions].map((({
                    value: e
                }) => e)) : s(t) ? oe(e.refs).value : le(p(t.value) ? e.ref.value : t.value, e)
            }
            var pe = e => e instanceof RegExp,
                fe = e => p(e) ? void 0 : pe(e) ? e.source : l(e) ? pe(e.value) ? e.value.source : e.value : e;

            function he(e, t, r) {
                const n = f(e, r);
                if (n || F(r)) return {
                    error: n,
                    name: r
                };
                const s = r.split(".");
                for (; s.length;) {
                    const n = s.join("."),
                        i = f(t, n),
                        a = f(e, n);
                    if (i && !Array.isArray(i) && r !== n) return {
                        name: r
                    };
                    if (a && a.type) return {
                        name: n,
                        error: a
                    };
                    s.pop()
                }
                return {
                    name: r
                }
            }
            var me = e => $(e) || n.isValidElement(e);

            function ye(e, t, r = "validate") {
                if (me(e) || Array.isArray(e) && e.every(me) || U(e) && !e) return {
                    type: r,
                    message: me(e) ? e : "",
                    ref: t
                }
            }
            var ge = e => l(e) && !pe(e) ? e : {
                    value: e,
                    message: ""
                },
                ve = async (e, t, r, n) => {
                    const {
                        ref: i,
                        refs: o,
                        required: c,
                        maxLength: u,
                        minLength: d,
                        min: p,
                        max: f,
                        pattern: h,
                        validate: m,
                        name: y,
                        valueAsNumber: g,
                        mount: v,
                        disabled: b
                    } = e._f;
                    if (!v || b) return {};
                    const w = o ? o[0] : i,
                        P = e => {
                            n && w.reportValidity && (w.setCustomValidity(U(e) ? "" : e || " "), w.reportValidity())
                        },
                        M = {},
                        A = Q(i),
                        L = s(i),
                        j = A || L,
                        I = (g || Z(i)) && !i.value || "" === t || Array.isArray(t) && !t.length,
                        F = N.bind(null, y, r, M),
                        V = (e, t, r, n = E, s = x) => {
                            const a = e ? t : r;
                            M[y] = {
                                type: e ? n : s,
                                message: a,
                                ref: i,
                                ...F(e ? n : s, a)
                            }
                        };
                    if (c && (!j && (I || a(t)) || U(t) && !t || L && !oe(o).isValid || A && !ue(o).isValid)) {
                        const {
                            value: e,
                            message: t
                        } = me(c) ? {
                            value: !!c,
                            message: c
                        } : ge(c);
                        if (e && (M[y] = {
                                type: k,
                                message: t,
                                ref: w,
                                ...F(k, t)
                            }, !r)) return P(t), M
                    }
                    if (!I && (!a(p) || !a(f))) {
                        let e, n;
                        const s = ge(f),
                            o = ge(p);
                        if (isNaN(t)) {
                            const r = i.valueAsDate || new Date(t);
                            $(s.value) && (e = r > new Date(s.value)), $(o.value) && (n = r < new Date(o.value))
                        } else {
                            const r = i.valueAsNumber || +t;
                            a(s.value) || (e = r > s.value), a(o.value) || (n = r < o.value)
                        }
                        if ((e || n) && (V(!!e, s.message, o.message, S, T), !r)) return P(M[y].message), M
                    }
                    if ((u || d) && !I && $(t)) {
                        const e = ge(u),
                            n = ge(d),
                            s = !a(e.value) && t.length > e.value,
                            i = !a(n.value) && t.length < n.value;
                        if ((s || i) && (V(s, e.message, n.message), !r)) return P(M[y].message), M
                    }
                    if (h && !I && $(t)) {
                        const {
                            value: e,
                            message: n
                        } = ge(h);
                        if (pe(e) && !t.match(e) && (M[y] = {
                                type: C,
                                message: n,
                                ref: i,
                                ...F(C, n)
                            }, !r)) return P(n), M
                    }
                    if (m)
                        if (D(m)) {
                            const e = ye(await m(t), w);
                            if (e && (M[y] = { ...e,
                                    ...F(O, e.message)
                                }, !r)) return P(e.message), M
                        } else if (l(m)) {
                        let e = {};
                        for (const n in m) {
                            if (!_(e) && !r) break;
                            const s = ye(await m[n](t), w, n);
                            s && (e = { ...s,
                                ...F(n, s.message)
                            }, P(s.message), r && (M[y] = e))
                        }
                        if (!_(e) && (M[y] = {
                                ref: w,
                                ...e
                            }, !r)) return M
                    }
                    return P(!0), M
                };
            const be = {
                mode: v,
                reValidateMode: g,
                shouldFocusError: !0
            };

            function we(e = {}) {
                let t, r = { ...be,
                        ...e
                    },
                    n = {
                        isDirty: !1,
                        isValidating: !1,
                        dirtyFields: {},
                        isSubmitted: !1,
                        submitCount: 0,
                        touchedFields: {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        errors: {}
                    },
                    o = {},
                    l = G(r.defaultValues) || {},
                    y = r.shouldUnregister ? {} : G(l),
                    g = {
                        action: !1,
                        mount: !1,
                        watch: !1
                    },
                    v = {
                        mount: new Set,
                        unMount: new Set,
                        array: new Set,
                        watch: new Set
                    },
                    b = 0,
                    S = {};
                const T = {
                        isDirty: !1,
                        dirtyFields: !1,
                        touchedFields: !1,
                        isValidating: !1,
                        isValid: !1,
                        errors: !1
                    },
                    E = {
                        watch: q(),
                        array: q(),
                        state: q()
                    },
                    x = X(r.mode),
                    C = X(r.reValidateMode),
                    k = r.criteriaMode === w,
                    O = async e => {
                        let t = !1;
                        return T.isValid && (t = r.resolver ? _((await N()).errors) : await F(o, !0), e || t === n.isValid || (n.isValid = t, E.state.next({
                            isValid: t
                        }))), t
                    },
                    P = (e, t) => (z(n.errors, e, t), E.state.next({
                        errors: n.errors
                    })),
                    M = (e, t, r, n) => {
                        const s = f(o, e);
                        if (s) {
                            const i = f(y, e, p(r) ? f(l, e) : r);
                            p(i) || n && n.defaultChecked || t ? z(y, e, t ? i : de(s._f)) : ne(e, i), g.mount && O()
                        }
                    },
                    L = (e, t, r, s, i) => {
                        let a = !1;
                        const o = {
                                name: e
                            },
                            c = f(n.touchedFields, e);
                        if (T.isDirty) {
                            const e = n.isDirty;
                            n.isDirty = o.isDirty = V(), a = e !== o.isDirty
                        }
                        if (T.dirtyFields && (!r || s)) {
                            const r = f(n.dirtyFields, e);
                            Y(f(l, e), t) ? H(n.dirtyFields, e) : z(n.dirtyFields, e, !0), o.dirtyFields = n.dirtyFields, a = a || r !== f(n.dirtyFields, e)
                        }
                        return r && !c && (z(n.touchedFields, e, r), o.touchedFields = n.touchedFields, a = a || T.touchedFields && c !== r), a && i && E.state.next(o), a ? o : {}
                    },
                    I = async (r, s, i, a, o) => {
                        const l = f(n.errors, s),
                            c = T.isValid && n.isValid !== i;
                        var u, d;
                        if (e.delayError && a ? (t = t || (u = P, d = e.delayError, (...e) => {
                                clearTimeout(b), b = window.setTimeout((() => u(...e)), d)
                            }), t(s, a)) : (clearTimeout(b), a ? z(n.errors, s, a) : H(n.errors, s)), ((a ? !Y(l, a) : l) || !_(o) || c) && !r) {
                            const e = { ...o,
                                ...c ? {
                                    isValid: i
                                } : {},
                                errors: n.errors,
                                name: s
                            };
                            n = { ...n,
                                ...e
                            }, E.state.next(e)
                        }
                        S[s]--, T.isValidating && !Object.values(S).some((e => e)) && (E.state.next({
                            isValidating: !1
                        }), S = {})
                    },
                    N = async e => r.resolver ? await r.resolver({ ...y
                    }, r.context, ((e, t, r, n) => {
                        const s = {};
                        for (const i of e) {
                            const e = f(t, i);
                            e && z(s, i, e._f)
                        }
                        return {
                            criteriaMode: r,
                            names: [...e],
                            fields: s,
                            shouldUseNativeValidation: n
                        }
                    })(e || v.mount, o, r.criteriaMode, r.shouldUseNativeValidation)) : {},
                    F = async (e, t, s = {
                        valid: !0
                    }) => {
                        for (const i in e) {
                            const a = e[i];
                            if (a) {
                                const {
                                    _f: e,
                                    ...i
                                } = a;
                                if (e) {
                                    const i = await ve(a, f(y, e.name), k, r.shouldUseNativeValidation);
                                    if (i[e.name] && (s.valid = !1, t)) break;
                                    t || (i[e.name] ? z(n.errors, e.name, i[e.name]) : H(n.errors, e.name))
                                }
                                i && await F(i, t, s)
                            }
                        }
                        return s.valid
                    },
                    V = (e, t) => (e && t && z(y, e, t), !Y(ue(), l)),
                    re = (e, t, r) => {
                        const n = { ...g.mount ? y : p(t) ? l : $(e) ? {
                                [e]: t
                            } : t
                        };
                        return j(e, v, n, r)
                    },
                    ne = (e, t, r = {}) => {
                        const n = f(o, e);
                        let i = t;
                        if (n) {
                            const r = n._f;
                            r && (!r.disabled && z(y, e, le(t, r)), i = ee && K(r.ref) && a(t) ? "" : t, J(r.ref) ? [...r.ref.options].forEach((e => e.selected = i.includes(e.value))) : r.refs ? s(r.ref) ? r.refs.length > 1 ? r.refs.forEach((e => !e.disabled && (e.checked = Array.isArray(i) ? !!i.find((t => t === e.value)) : i === e.value))) : r.refs[0] && (r.refs[0].checked = !!i) : r.refs.forEach((e => e.checked = e.value === i)) : Z(r.ref) ? r.ref.value = "" : (r.ref.value = i, r.ref.type || E.watch.next({
                                name: e
                            })))
                        }(r.shouldDirty || r.shouldTouch) && L(e, i, r.shouldTouch, r.shouldDirty, !0), r.shouldValidate && ce(e)
                    },
                    ie = (e, t, r) => {
                        for (const n in t) {
                            const s = t[n],
                                a = `${e}.${n}`,
                                l = f(o, a);
                            !v.array.has(e) && W(s) && (!l || l._f) || i(s) ? ne(a, s, r) : ie(a, s, r)
                        }
                    },
                    ae = (e, t, r = {}) => {
                        const s = f(o, e),
                            i = v.array.has(e),
                            c = G(t);
                        z(y, e, c), i ? (E.array.next({
                            name: e,
                            values: y
                        }), (T.isDirty || T.dirtyFields) && r.shouldDirty && (n.dirtyFields = se(l, y), E.state.next({
                            name: e,
                            dirtyFields: n.dirtyFields,
                            isDirty: V(e, c)
                        }))) : !s || s._f || a(c) ? ne(e, c, r) : ie(e, c, r), R(e, v) && E.state.next({}), E.watch.next({
                            name: e
                        })
                    },
                    oe = async e => {
                        const t = e.target;
                        let s = t.name;
                        const i = f(o, s);
                        if (i) {
                            let l, u;
                            const d = t.type ? de(i._f) : c(e),
                                p = e.type === h || e.type === m,
                                g = !((a = i._f).mount && (a.required || a.min || a.max || a.maxLength || a.minLength || a.pattern || a.validate)) && !r.resolver && !f(n.errors, s) && !i._f.deps || ((e, t, r, n, s) => !s.isOnAll && (!r && s.isOnTouch ? !(t || e) : (r ? n.isOnBlur : s.isOnBlur) ? !e : !(r ? n.isOnChange : s.isOnChange) || e))(p, f(n.touchedFields, s), n.isSubmitted, C, x),
                                b = R(s, v, p);
                            z(y, s, d), p ? i._f.onBlur && i._f.onBlur(e) : i._f.onChange && i._f.onChange(e);
                            const w = L(s, d, p, !1),
                                T = !_(w) || b;
                            if (!p && E.watch.next({
                                    name: s,
                                    type: e.type
                                }), g) return T && E.state.next({
                                name: s,
                                ...b ? {} : w
                            });
                            if (!p && b && E.state.next({}), S[s] = (S[s], 1), E.state.next({
                                    isValidating: !0
                                }), r.resolver) {
                                const {
                                    errors: e
                                } = await N([s]), t = he(n.errors, o, s), r = he(e, o, t.name || s);
                                l = r.error, s = r.name, u = _(e)
                            } else l = (await ve(i, f(y, s), k, r.shouldUseNativeValidation))[s], u = await O(!0);
                            i._f.deps && ce(i._f.deps), I(!1, s, u, l, w)
                        }
                        var a
                    },
                    ce = async (e, t = {}) => {
                        let s, i;
                        const a = A(e);
                        if (E.state.next({
                                isValidating: !0
                            }), r.resolver) {
                            const t = await (async e => {
                                const {
                                    errors: t
                                } = await N();
                                if (e)
                                    for (const r of e) {
                                        const e = f(t, r);
                                        e ? z(n.errors, r, e) : H(n.errors, r)
                                    } else n.errors = t;
                                return t
                            })(p(e) ? e : a);
                            s = _(t), i = e ? !a.some((e => f(t, e))) : s
                        } else e ? (i = (await Promise.all(a.map((async e => {
                            const t = f(o, e);
                            return await F(t && t._f ? {
                                [e]: t
                            } : t)
                        })))).every(Boolean), (i || n.isValid) && O()) : i = s = await F(o);
                        return E.state.next({ ...!$(e) || T.isValid && s !== n.isValid ? {} : {
                                name: e
                            },
                            ...r.resolver ? {
                                isValid: s
                            } : {},
                            errors: n.errors,
                            isValidating: !1
                        }), t.shouldFocus && !i && B(o, (e => f(n.errors, e)), e ? a : v.mount), i
                    },
                    ue = e => {
                        const t = { ...l,
                            ...g.mount ? y : {}
                        };
                        return p(e) ? t : $(e) ? f(t, e) : e.map((e => f(t, e)))
                    },
                    pe = (e, t) => ({
                        invalid: !!f((t || n).errors, e),
                        isDirty: !!f((t || n).dirtyFields, e),
                        isTouched: !!f((t || n).touchedFields, e),
                        error: f((t || n).errors, e)
                    }),
                    me = (e, t = {}) => {
                        for (const s of e ? A(e) : v.mount) v.mount.delete(s), v.array.delete(s), f(o, s) && (t.keepValue || (H(o, s), H(y, s)), !t.keepError && H(n.errors, s), !t.keepDirty && H(n.dirtyFields, s), !t.keepTouched && H(n.touchedFields, s), !r.shouldUnregister && !t.keepDefaultValue && H(l, s));
                        E.watch.next({}), E.state.next({ ...n,
                            ...t.keepDirty ? {
                                isDirty: V()
                            } : {}
                        }), !t.keepIsValid && O()
                    },
                    ye = (e, t = {}) => {
                        let n = f(o, e);
                        const i = U(t.disabled);
                        return z(o, e, {
                            _f: { ...n && n._f ? n._f : {
                                    ref: {
                                        name: e
                                    }
                                },
                                name: e,
                                mount: !0,
                                ...t
                            }
                        }), v.mount.add(e), n ? i && z(y, e, t.disabled ? void 0 : f(y, e, de(n._f))) : M(e, !0, t.value), { ...i ? {
                                disabled: t.disabled
                            } : {},
                            ...r.shouldUseNativeValidation ? {
                                required: !!t.required,
                                min: fe(t.min),
                                max: fe(t.max),
                                minLength: fe(t.minLength),
                                maxLength: fe(t.maxLength),
                                pattern: fe(t.pattern)
                            } : {},
                            name: e,
                            onChange: oe,
                            onBlur: oe,
                            ref: i => {
                                if (i) {
                                    ye(e, t), n = f(o, e);
                                    const r = p(i.value) && i.querySelectorAll && i.querySelectorAll("input,select,textarea")[0] || i,
                                        a = (e => Q(e) || s(e))(r),
                                        c = n._f.refs || [];
                                    if (a ? c.find((e => e === r)) : r === n._f.ref) return;
                                    z(o, e, {
                                        _f: { ...n._f,
                                            ...a ? {
                                                refs: [...c.filter(te), r, ...Array.isArray(f(l, e)) ? [{}] : []],
                                                ref: {
                                                    type: r.type,
                                                    name: e
                                                }
                                            } : {
                                                ref: r
                                            }
                                        }
                                    }), M(e, !1, void 0, r)
                                } else n = f(o, e, {}), n._f && (n._f.mount = !1), (r.shouldUnregister || t.shouldUnregister) && (!u(v.array, e) || !g.action) && v.unMount.add(e)
                            }
                        }
                    };
                return {
                    control: {
                        register: ye,
                        unregister: me,
                        getFieldState: pe,
                        _executeSchema: N,
                        _getWatch: re,
                        _getDirty: V,
                        _updateValid: O,
                        _removeUnmounted: () => {
                            for (const e of v.unMount) {
                                const t = f(o, e);
                                t && (t._f.refs ? t._f.refs.every((e => !te(e))) : !te(t._f.ref)) && me(e)
                            }
                            v.unMount = new Set
                        },
                        _updateFieldArray: (e, t = [], r, s, i = !0, a = !0) => {
                            if (s && r) {
                                if (g.action = !0, a && Array.isArray(f(o, e))) {
                                    const t = r(f(o, e), s.argA, s.argB);
                                    i && z(o, e, t)
                                }
                                if (T.errors && a && Array.isArray(f(n.errors, e))) {
                                    const t = r(f(n.errors, e), s.argA, s.argB);
                                    i && z(n.errors, e, t), ((e, t) => {
                                        !d(f(e, t)).length && H(e, t)
                                    })(n.errors, e)
                                }
                                if (T.touchedFields && a && Array.isArray(f(n.touchedFields, e))) {
                                    const t = r(f(n.touchedFields, e), s.argA, s.argB);
                                    i && z(n.touchedFields, e, t)
                                }
                                T.dirtyFields && (n.dirtyFields = se(l, y)), E.state.next({
                                    isDirty: V(e, t),
                                    dirtyFields: n.dirtyFields,
                                    errors: n.errors,
                                    isValid: n.isValid
                                })
                            } else z(y, e, t)
                        },
                        _getFieldArray: t => d(f(g.mount ? y : l, t, e.shouldUnregister ? f(l, t, []) : [])),
                        _subjects: E,
                        _proxyFormState: T,
                        get _fields() {
                            return o
                        },
                        get _formValues() {
                            return y
                        },
                        get _stateFlags() {
                            return g
                        },
                        set _stateFlags(e) {
                            g = e
                        },
                        get _defaultValues() {
                            return l
                        },
                        get _names() {
                            return v
                        },
                        set _names(e) {
                            v = e
                        },
                        get _formState() {
                            return n
                        },
                        set _formState(e) {
                            n = e
                        },
                        get _options() {
                            return r
                        },
                        set _options(e) {
                            r = { ...r,
                                ...e
                            }
                        }
                    },
                    trigger: ce,
                    register: ye,
                    handleSubmit: (e, t) => async s => {
                        s && (s.preventDefault && s.preventDefault(), s.persist && s.persist());
                        let i = !0,
                            a = G(y);
                        E.state.next({
                            isSubmitting: !0
                        });
                        try {
                            if (r.resolver) {
                                const {
                                    errors: e,
                                    values: t
                                } = await N();
                                n.errors = e, a = t
                            } else await F(o);
                            _(n.errors) ? (E.state.next({
                                errors: {},
                                isSubmitting: !0
                            }), await e(a, s)) : (t && await t({ ...n.errors
                            }, s), r.shouldFocusError && B(o, (e => f(n.errors, e)), v.mount))
                        } catch (l) {
                            throw i = !1, l
                        } finally {
                            n.isSubmitted = !0, E.state.next({
                                isSubmitted: !0,
                                isSubmitting: !1,
                                isSubmitSuccessful: _(n.errors) && i,
                                submitCount: n.submitCount + 1,
                                errors: n.errors
                            })
                        }
                    },
                    watch: (e, t) => D(e) ? E.watch.subscribe({
                        next: r => e(re(void 0, t), r)
                    }) : re(e, t, !0),
                    setValue: ae,
                    getValues: ue,
                    reset: (t, r = {}) => {
                        const s = t || l,
                            i = G(s),
                            a = t && !_(t) ? i : l;
                        if (r.keepDefaultValues || (l = s), !r.keepValues) {
                            if (r.keepDirtyValues)
                                for (const e of v.mount) f(n.dirtyFields, e) ? z(a, e, f(y, e)) : ae(e, f(a, e));
                            else {
                                if (ee && p(t))
                                    for (const e of v.mount) {
                                        const t = f(o, e);
                                        if (t && t._f) {
                                            const e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                                            try {
                                                K(e) && e.closest("form").reset();
                                                break
                                            } catch (c) {}
                                        }
                                    }
                                o = {}
                            }
                            y = e.shouldUnregister ? r.keepDefaultValues ? G(l) : {} : i, E.array.next({
                                values: a
                            }), E.watch.next({
                                values: a
                            })
                        }
                        v = {
                            mount: new Set,
                            unMount: new Set,
                            array: new Set,
                            watch: new Set,
                            watchAll: !1,
                            focus: ""
                        }, g.mount = !T.isValid || !!r.keepIsValid, g.watch = !!e.shouldUnregister, E.state.next({
                            submitCount: r.keepSubmitCount ? n.submitCount : 0,
                            isDirty: r.keepDirty || r.keepDirtyValues ? n.isDirty : !(!r.keepDefaultValues || Y(t, l)),
                            isSubmitted: !!r.keepIsSubmitted,
                            dirtyFields: r.keepDirty || r.keepDirtyValues ? n.dirtyFields : r.keepDefaultValues && t ? se(l, t) : {},
                            touchedFields: r.keepTouched ? n.touchedFields : {},
                            errors: r.keepErrors ? n.errors : {},
                            isSubmitting: !1,
                            isSubmitSuccessful: !1
                        })
                    },
                    resetField: (e, t = {}) => {
                        f(o, e) && (p(t.defaultValue) ? ae(e, f(l, e)) : (ae(e, t.defaultValue), z(l, e, t.defaultValue)), t.keepTouched || H(n.touchedFields, e), t.keepDirty || (H(n.dirtyFields, e), n.isDirty = t.defaultValue ? V(e, f(l, e)) : V()), t.keepError || (H(n.errors, e), T.isValid && O()), E.state.next({ ...n
                        }))
                    },
                    clearErrors: e => {
                        e ? A(e).forEach((e => H(n.errors, e))) : n.errors = {}, E.state.next({
                            errors: n.errors
                        })
                    },
                    unregister: me,
                    setError: (e, t, r) => {
                        const s = (f(o, e, {
                            _f: {}
                        })._f || {}).ref;
                        z(n.errors, e, { ...t,
                            ref: s
                        }), E.state.next({
                            name: e,
                            errors: n.errors,
                            isValid: !1
                        }), r && r.shouldFocus && s && s.focus && s.focus()
                    },
                    setFocus: (e, t = {}) => {
                        const r = f(o, e)._f,
                            n = r.refs ? r.refs[0] : r.ref;
                        t.shouldSelect ? n.select() : n.focus()
                    },
                    getFieldState: pe
                }
            }

            function Se(e = {}) {
                const t = n.useRef(),
                    [r, s] = n.useState({
                        isDirty: !1,
                        isValidating: !1,
                        dirtyFields: {},
                        isSubmitted: !1,
                        submitCount: 0,
                        touchedFields: {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !1,
                        errors: {}
                    });
                t.current ? t.current.control._options = e : t.current = { ...we(e),
                    formState: r
                };
                const i = t.current.control,
                    a = n.useCallback((e => {
                        M(e, i._proxyFormState, !0) && (i._formState = { ...i._formState,
                            ...e
                        }, s({ ...i._formState
                        }))
                    }), [i]);
                return L({
                    subject: i._subjects.state,
                    callback: a
                }), n.useEffect((() => {
                    i._stateFlags.mount || (i._proxyFormState.isValid && i._updateValid(), i._stateFlags.mount = !0), i._stateFlags.watch && (i._stateFlags.watch = !1, i._subjects.state.next({})), i._removeUnmounted()
                })), t.current.formState = P(r, i._proxyFormState), t.current
            }
        },
        8352: function(e, t, r) {
            "use strict";
            r.d(t, {
                tq: function() {
                    return w
                },
                o5: function() {
                    return T
                }
            });
            var n = r(7294),
                s = r(965);

            function i(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function a(e, t) {
                const r = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => r.indexOf(e) < 0)).forEach((r => {
                    "undefined" === typeof e[r] ? e[r] = t[r] : i(t[r]) && i(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : a(e[r], t[r]) : e[r] = t[r]
                }))
            }

            function o(e) {
                return void 0 === e && (e = {}), e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function l(e) {
                return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el
            }

            function c(e) {
                return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function u(e) {
                void 0 === e && (e = "");
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    r = [];
                return t.forEach((e => {
                    r.indexOf(e) < 0 && r.push(e)
                })), r.join(" ")
            }
            const d = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];

            function p(e, t) {
                let r = t.slidesPerView;
                if (t.breakpoints) {
                    const e = s.ZP.prototype.getBreakpoint(t.breakpoints),
                        n = e in t.breakpoints ? t.breakpoints[e] : void 0;
                    n && n.slidesPerView && (r = n.slidesPerView)
                }
                let n = Math.ceil(parseFloat(t.loopedSlides || r, 10));
                return n += t.loopAdditionalSlides, n > e.length && (n = e.length), n
            }

            function f(e) {
                const t = [];
                return n.Children.toArray(e).forEach((e => {
                    e.type && "SwiperSlide" === e.type.displayName ? t.push(e) : e.props && e.props.children && f(e.props.children).forEach((e => t.push(e)))
                })), t
            }

            function h(e) {
                const t = [],
                    r = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return n.Children.toArray(e).forEach((e => {
                    if (e.type && "SwiperSlide" === e.type.displayName) t.push(e);
                    else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        const n = f(e.props.children);
                        n.length > 0 ? n.forEach((e => t.push(e))) : r["container-end"].push(e)
                    } else r["container-end"].push(e)
                })), {
                    slides: t,
                    slots: r
                }
            }

            function m(e) {
                let {
                    swiper: t,
                    slides: r,
                    passedParams: n,
                    changedParams: s,
                    nextEl: o,
                    prevEl: l,
                    scrollbarEl: c,
                    paginationEl: u
                } = e;
                const d = s.filter((e => "children" !== e && "direction" !== e)),
                    {
                        params: p,
                        pagination: f,
                        navigation: h,
                        scrollbar: m,
                        virtual: y,
                        thumbs: g
                    } = t;
                let v, b, w, S, T;
                s.includes("thumbs") && n.thumbs && n.thumbs.swiper && p.thumbs && !p.thumbs.swiper && (v = !0), s.includes("controller") && n.controller && n.controller.control && p.controller && !p.controller.control && (b = !0), s.includes("pagination") && n.pagination && (n.pagination.el || u) && (p.pagination || !1 === p.pagination) && f && !f.el && (w = !0), s.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || c) && (p.scrollbar || !1 === p.scrollbar) && m && !m.el && (S = !0), s.includes("navigation") && n.navigation && (n.navigation.prevEl || l) && (n.navigation.nextEl || o) && (p.navigation || !1 === p.navigation) && h && !h.prevEl && !h.nextEl && (T = !0);
                if (d.forEach((e => {
                        if (i(p[e]) && i(n[e])) a(p[e], n[e]);
                        else {
                            const s = n[e];
                            !0 !== s && !1 !== s || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? p[e] = n[e] : !1 === s && t[r = e] && (t[r].destroy(), "navigation" === r ? (p[r].prevEl = void 0, p[r].nextEl = void 0, t[r].prevEl = void 0, t[r].nextEl = void 0) : (p[r].el = void 0, t[r].el = void 0))
                        }
                        var r
                    })), d.includes("controller") && !b && t.controller && t.controller.control && p.controller && p.controller.control && (t.controller.control = p.controller.control), s.includes("children") && y && p.virtual.enabled ? (y.slides = r, y.update(!0)) : s.includes("children") && t.lazy && t.params.lazy.enabled && t.lazy.load(), v) {
                    g.init() && g.update(!0)
                }
                b && (t.controller.control = p.controller.control), w && (u && (p.pagination.el = u), f.init(), f.render(), f.update()), S && (c && (p.scrollbar.el = c), m.init(), m.updateSize(), m.setTranslate()), T && (o && (p.navigation.nextEl = o), l && (p.navigation.prevEl = l), h.init(), h.update()), s.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext), s.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev), s.includes("direction") && t.changeDirection(n.direction, !1), t.update()
            }

            function y(e, t) {
                return "undefined" === typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }
            const g = (0, n.createContext)(null),
                v = (0, n.createContext)(null);

            function b() {
                return b = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, b.apply(this, arguments)
            }
            const w = (0, n.forwardRef)((function(e, t) {
                let {
                    className: r,
                    tag: f = "div",
                    wrapperTag: g = "div",
                    children: w,
                    onSwiper: S,
                    ...T
                } = void 0 === e ? {} : e, E = !1;
                const [x, C] = (0, n.useState)("swiper"), [k, O] = (0, n.useState)(null), [P, _] = (0, n.useState)(!1), M = (0, n.useRef)(!1), A = (0, n.useRef)(null), L = (0, n.useRef)(null), $ = (0, n.useRef)(null), j = (0, n.useRef)(null), D = (0, n.useRef)(null), I = (0, n.useRef)(null), N = (0, n.useRef)(null), F = (0, n.useRef)(null), {
                    params: V,
                    passedParams: z,
                    rest: B,
                    events: R
                } = function(e) {
                    void 0 === e && (e = {});
                    const t = {
                            on: {}
                        },
                        r = {},
                        n = {};
                    a(t, s.ZP.defaults), a(t, s.ZP.extendedDefaults), t._emitClasses = !0, t.init = !1;
                    const o = {},
                        l = d.map((e => e.replace(/_/, "")));
                    return Object.keys(e).forEach((s => {
                        l.indexOf(s) >= 0 ? i(e[s]) ? (t[s] = {}, n[s] = {}, a(t[s], e[s]), a(n[s], e[s])) : (t[s] = e[s], n[s] = e[s]) : 0 === s.search(/on[A-Z]/) && "function" === typeof e[s] ? r[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s] : o[s] = e[s]
                    })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                        !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e]
                    })), {
                        params: t,
                        passedParams: n,
                        rest: o,
                        events: r
                    }
                }(T), {
                    slides: G,
                    slots: H
                } = h(w), q = () => {
                    _(!P)
                };
                Object.assign(V.on, {
                    _containerClasses(e, t) {
                        C(t)
                    }
                });
                const W = () => {
                    if (Object.assign(V.on, R), E = !0, L.current = new s.ZP(V), L.current.loopCreate = () => {}, L.current.loopDestroy = () => {}, V.loop && (L.current.loopedSlides = p(G, V)), L.current.virtual && L.current.params.virtual.enabled) {
                        L.current.virtual.slides = G;
                        const e = {
                            cache: !1,
                            slides: G,
                            renderExternal: O,
                            renderExternalUpdate: !1
                        };
                        a(L.current.params.virtual, e), a(L.current.originalParams.virtual, e)
                    }
                };
                A.current || W(), L.current && L.current.on("_beforeBreakpoint", q);
                return (0, n.useEffect)((() => () => {
                    L.current && L.current.off("_beforeBreakpoint", q)
                })), (0, n.useEffect)((() => {
                    !M.current && L.current && (L.current.emitSlidesClasses(), M.current = !0)
                })), y((() => {
                    if (t && (t.current = A.current), A.current) return L.current.destroyed && W(),
                        function(e, t) {
                            let {
                                el: r,
                                nextEl: n,
                                prevEl: s,
                                paginationEl: i,
                                scrollbarEl: a,
                                swiper: u
                            } = e;
                            o(t) && n && s && (u.params.navigation.nextEl = n, u.originalParams.navigation.nextEl = n, u.params.navigation.prevEl = s, u.originalParams.navigation.prevEl = s), l(t) && i && (u.params.pagination.el = i, u.originalParams.pagination.el = i), c(t) && a && (u.params.scrollbar.el = a, u.originalParams.scrollbar.el = a), u.init(r)
                        }({
                            el: A.current,
                            nextEl: D.current,
                            prevEl: I.current,
                            paginationEl: N.current,
                            scrollbarEl: F.current,
                            swiper: L.current
                        }, V), S && S(L.current), () => {
                            L.current && !L.current.destroyed && L.current.destroy(!0, !1)
                        }
                }), []), y((() => {
                    !E && R && L.current && Object.keys(R).forEach((e => {
                        L.current.on(e, R[e])
                    }));
                    const e = function(e, t, r, n) {
                        const s = [];
                        if (!t) return s;
                        const a = e => {
                                s.indexOf(e) < 0 && s.push(e)
                            },
                            o = n.map((e => e.key)),
                            l = r.map((e => e.key));
                        return o.join("") !== l.join("") && a("children"), n.length !== r.length && a("children"), d.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((r => {
                            if (r in e && r in t)
                                if (i(e[r]) && i(t[r])) {
                                    const n = Object.keys(e[r]),
                                        s = Object.keys(t[r]);
                                    n.length !== s.length ? a(r) : (n.forEach((n => {
                                        e[r][n] !== t[r][n] && a(r)
                                    })), s.forEach((n => {
                                        e[r][n] !== t[r][n] && a(r)
                                    })))
                                } else e[r] !== t[r] && a(r)
                        })), s
                    }(z, $.current, G, j.current);
                    return $.current = z, j.current = G, e.length && L.current && !L.current.destroyed && m({
                        swiper: L.current,
                        slides: G,
                        passedParams: z,
                        changedParams: e,
                        nextEl: D.current,
                        prevEl: I.current,
                        scrollbarEl: F.current,
                        paginationEl: N.current
                    }), () => {
                        R && L.current && Object.keys(R).forEach((e => {
                            L.current.off(e, R[e])
                        }))
                    }
                })), y((() => {
                    var e;
                    !(e = L.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                }), [k]), n.createElement(f, b({
                    ref: A,
                    className: u(`${x}${r?` ${r}`:""}`)
                }, B), n.createElement(v.Provider, {
                    value: L.current
                }, H["container-start"], n.createElement(g, {
                    className: "swiper-wrapper"
                }, H["wrapper-start"], V.virtual ? function(e, t, r) {
                    if (!r) return null;
                    const s = e.isHorizontal() ? {
                        [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
                    } : {
                        top: `${r.offset}px`
                    };
                    return t.filter(((e, t) => t >= r.from && t <= r.to)).map((t => n.cloneElement(t, {
                        swiper: e,
                        style: s
                    })))
                }(L.current, G, k) : !V.loop || L.current && L.current.destroyed ? G.map((e => n.cloneElement(e, {
                    swiper: L.current
                }))) : function(e, t, r) {
                    const s = t.map(((t, r) => n.cloneElement(t, {
                        swiper: e,
                        "data-swiper-slide-index": r
                    })));

                    function i(e, t, s) {
                        return n.cloneElement(e, {
                            key: `${e.key}-duplicate-${t}-${s}`,
                            className: `${e.props.className||""} ${r.slideDuplicateClass}`
                        })
                    }
                    if (r.loopFillGroupWithBlank) {
                        const e = r.slidesPerGroup - s.length % r.slidesPerGroup;
                        if (e !== r.slidesPerGroup)
                            for (let t = 0; t < e; t += 1) {
                                const e = n.createElement("div", {
                                    className: `${r.slideClass} ${r.slideBlankClass}`
                                });
                                s.push(e)
                            }
                    }
                    "auto" !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = s.length);
                    const a = p(s, r),
                        o = [],
                        l = [];
                    return s.forEach(((e, t) => {
                        t < a && l.push(i(e, t, "prepend")), t < s.length && t >= s.length - a && o.push(i(e, t, "append"))
                    })), e && (e.loopedSlides = a), [...o, ...s, ...l]
                }(L.current, G, V), H["wrapper-end"]), o(V) && n.createElement(n.Fragment, null, n.createElement("div", {
                    ref: I,
                    className: "swiper-button-prev"
                }), n.createElement("div", {
                    ref: D,
                    className: "swiper-button-next"
                })), c(V) && n.createElement("div", {
                    ref: F,
                    className: "swiper-scrollbar"
                }), l(V) && n.createElement("div", {
                    ref: N,
                    className: "swiper-pagination"
                }), H["container-end"]))
            }));

            function S() {
                return S = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, S.apply(this, arguments)
            }
            w.displayName = "Swiper";
            const T = (0, n.forwardRef)((function(e, t) {
                let {
                    tag: r = "div",
                    children: s,
                    className: i = "",
                    swiper: a,
                    zoom: o,
                    virtualIndex: l,
                    ...c
                } = void 0 === e ? {} : e;
                const d = (0, n.useRef)(null),
                    [p, f] = (0, n.useState)("swiper-slide");

                function h(e, t, r) {
                    t === d.current && f(r)
                }
                y((() => {
                    if (t && (t.current = d.current), d.current && a) {
                        if (!a.destroyed) return a.on("_slideClass", h), () => {
                            a && a.off("_slideClass", h)
                        };
                        "swiper-slide" !== p && f("swiper-slide")
                    }
                })), y((() => {
                    a && d.current && !a.destroyed && f(a.getSlideClasses(d.current))
                }), [a]);
                const m = {
                        isActive: p.indexOf("swiper-slide-active") >= 0 || p.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: p.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: p.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: p.indexOf("swiper-slide-prev") >= 0 || p.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: p.indexOf("swiper-slide-next") >= 0 || p.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    v = () => "function" === typeof s ? s(m) : s;
                return n.createElement(r, S({
                    ref: d,
                    className: u(`${p}${i?` ${i}`:""}`),
                    "data-swiper-slide-index": l
                }, c), n.createElement(g.Provider, {
                    value: m
                }, o ? n.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof o ? o : void 0
                }, v()) : v()))
            }));
            T.displayName = "SwiperSlide"
        },
        965: function(e, t, r) {
            "use strict";

            function n(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function s(e = {}, t = {}) {
                Object.keys(t).forEach((r => {
                    "undefined" === typeof e[r] ? e[r] = t[r] : n(t[r]) && n(e[r]) && Object.keys(t[r]).length > 0 && s(e[r], t[r])
                }))
            }
            r.d(t, {
                pt: function() {
                    return re
                },
                ZP: function() {
                    return te
                }
            });
            const i = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function a() {
                const e = "undefined" !== typeof document ? document : {};
                return s(e, i), e
            }
            const o = {
                document: i,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function l() {
                const e = "undefined" !== typeof window ? window : {};
                return s(e, o), e
            }
            class c extends Array {
                constructor(e) {
                    "number" === typeof e ? super(e) : (super(...e || []), function(e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
                }
            }

            function u(e = []) {
                const t = [];
                return e.forEach((e => {
                    Array.isArray(e) ? t.push(...u(e)) : t.push(e)
                })), t
            }

            function d(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function p(e, t) {
                const r = l(),
                    n = a();
                let s = [];
                if (!t && e instanceof c) return e;
                if (!e) return new c(s);
                if ("string" === typeof e) {
                    const r = e.trim();
                    if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
                        let e = "div";
                        0 === r.indexOf("<li") && (e = "ul"), 0 === r.indexOf("<tr") && (e = "tbody"), 0 !== r.indexOf("<td") && 0 !== r.indexOf("<th") || (e = "tr"), 0 === r.indexOf("<tbody") && (e = "table"), 0 === r.indexOf("<option") && (e = "select");
                        const t = n.createElement(e);
                        t.innerHTML = r;
                        for (let r = 0; r < t.childNodes.length; r += 1) s.push(t.childNodes[r])
                    } else s = function(e, t) {
                        if ("string" !== typeof e) return [e];
                        const r = [],
                            n = t.querySelectorAll(e);
                        for (let s = 0; s < n.length; s += 1) r.push(n[s]);
                        return r
                    }(e.trim(), t || n)
                } else if (e.nodeType || e === r || e === n) s.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof c) return e;
                    s = e
                }
                return new c(function(e) {
                    const t = [];
                    for (let r = 0; r < e.length; r += 1) - 1 === t.indexOf(e[r]) && t.push(e[r]);
                    return t
                }(s))
            }
            p.fn = c.prototype;
            const f = "resize scroll".split(" ");

            function h(e) {
                return function(...t) {
                    if ("undefined" === typeof t[0]) {
                        for (let t = 0; t < this.length; t += 1) f.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : p(this[t]).trigger(e));
                        return this
                    }
                    return this.on(e, ...t)
                }
            }
            h("click"), h("blur"), h("focus"), h("focusin"), h("focusout"), h("keyup"), h("keydown"), h("keypress"), h("submit"), h("change"), h("mousedown"), h("mousemove"), h("mouseup"), h("mouseenter"), h("mouseleave"), h("mouseout"), h("mouseover"), h("touchstart"), h("touchend"), h("touchmove"), h("resize"), h("scroll");
            const m = {
                addClass: function(...e) {
                    const t = u(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.add(...t)
                    })), this
                },
                removeClass: function(...e) {
                    const t = u(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.remove(...t)
                    })), this
                },
                hasClass: function(...e) {
                    const t = u(e.map((e => e.split(" "))));
                    return d(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
                },
                toggleClass: function(...e) {
                    const t = u(e.map((e => e.split(" "))));
                    this.forEach((e => {
                        t.forEach((t => {
                            e.classList.toggle(t)
                        }))
                    }))
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" === typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let r = 0; r < this.length; r += 1)
                        if (2 === arguments.length) this[r].setAttribute(e, t);
                        else
                            for (const t in e) this[r][t] = e[t], this[r].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" !== typeof e ? `${e}ms` : e;
                    return this
                },
                on: function(...e) {
                    let [t, r, n, s] = e;

                    function i(e) {
                        const t = e.target;
                        if (!t) return;
                        const s = e.target.dom7EventData || [];
                        if (s.indexOf(e) < 0 && s.unshift(e), p(t).is(r)) n.apply(t, s);
                        else {
                            const e = p(t).parents();
                            for (let t = 0; t < e.length; t += 1) p(e[t]).is(r) && n.apply(e[t], s)
                        }
                    }

                    function a(e) {
                        const t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
                    }
                    "function" === typeof e[1] && ([t, n, s] = e, r = void 0), s || (s = !1);
                    const o = t.split(" ");
                    let l;
                    for (let c = 0; c < this.length; c += 1) {
                        const e = this[c];
                        if (r)
                            for (l = 0; l < o.length; l += 1) {
                                const t = o[l];
                                e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                                    listener: n,
                                    proxyListener: i
                                }), e.addEventListener(t, i, s)
                            } else
                                for (l = 0; l < o.length; l += 1) {
                                    const t = o[l];
                                    e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                                        listener: n,
                                        proxyListener: a
                                    }), e.addEventListener(t, a, s)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, r, n, s] = e;
                    "function" === typeof e[1] && ([t, n, s] = e, r = void 0), s || (s = !1);
                    const i = t.split(" ");
                    for (let a = 0; a < i.length; a += 1) {
                        const e = i[a];
                        for (let t = 0; t < this.length; t += 1) {
                            const i = this[t];
                            let a;
                            if (!r && i.dom7Listeners ? a = i.dom7Listeners[e] : r && i.dom7LiveListeners && (a = i.dom7LiveListeners[e]), a && a.length)
                                for (let t = a.length - 1; t >= 0; t -= 1) {
                                    const r = a[t];
                                    n && r.listener === n || n && r.listener && r.listener.dom7proxy && r.listener.dom7proxy === n ? (i.removeEventListener(e, r.proxyListener, s), a.splice(t, 1)) : n || (i.removeEventListener(e, r.proxyListener, s), a.splice(t, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    const t = l(),
                        r = e[0].split(" "),
                        n = e[1];
                    for (let s = 0; s < r.length; s += 1) {
                        const i = r[s];
                        for (let r = 0; r < this.length; r += 1) {
                            const s = this[r];
                            if (t.CustomEvent) {
                                const r = new t.CustomEvent(i, {
                                    detail: n,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                s.dom7EventData = e.filter(((e, t) => t > 0)), s.dispatchEvent(r), s.dom7EventData = [], delete s.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    const t = this;
                    return e && t.on("transitionend", (function r(n) {
                        n.target === this && (e.call(this, n), t.off("transitionend", r))
                    })), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    const e = l();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        const e = l(),
                            t = a(),
                            r = this[0],
                            n = r.getBoundingClientRect(),
                            s = t.body,
                            i = r.clientTop || s.clientTop || 0,
                            o = r.clientLeft || s.clientLeft || 0,
                            c = r === e ? e.scrollY : r.scrollTop,
                            u = r === e ? e.scrollX : r.scrollLeft;
                        return {
                            top: n.top + c - i,
                            left: n.left + u - o
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    const r = l();
                    let n;
                    if (1 === arguments.length) {
                        if ("string" !== typeof e) {
                            for (n = 0; n < this.length; n += 1)
                                for (const t in e) this[n].style[t] = e[t];
                            return this
                        }
                        if (this[0]) return r.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" === typeof e) {
                        for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    return e ? (this.forEach(((t, r) => {
                        e.apply(t, [t, r])
                    })), this) : this
                },
                html: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    const t = l(),
                        r = a(),
                        n = this[0];
                    let s, i;
                    if (!n || "undefined" === typeof e) return !1;
                    if ("string" === typeof e) {
                        if (n.matches) return n.matches(e);
                        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                        if (n.msMatchesSelector) return n.msMatchesSelector(e);
                        for (s = p(e), i = 0; i < s.length; i += 1)
                            if (s[i] === n) return !0;
                        return !1
                    }
                    if (e === r) return n === r;
                    if (e === t) return n === t;
                    if (e.nodeType || e instanceof c) {
                        for (s = e.nodeType ? [e] : e, i = 0; i < s.length; i += 1)
                            if (s[i] === n) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    let e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if ("undefined" === typeof e) return this;
                    const t = this.length;
                    if (e > t - 1) return p([]);
                    if (e < 0) {
                        const r = t + e;
                        return p(r < 0 ? [] : [this[r]])
                    }
                    return p([this[e]])
                },
                append: function(...e) {
                    let t;
                    const r = a();
                    for (let n = 0; n < e.length; n += 1) {
                        t = e[n];
                        for (let e = 0; e < this.length; e += 1)
                            if ("string" === typeof t) {
                                const n = r.createElement("div");
                                for (n.innerHTML = t; n.firstChild;) this[e].appendChild(n.firstChild)
                            } else if (t instanceof c)
                            for (let r = 0; r < t.length; r += 1) this[e].appendChild(t[r]);
                        else this[e].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    const t = a();
                    let r, n;
                    for (r = 0; r < this.length; r += 1)
                        if ("string" === typeof e) {
                            const s = t.createElement("div");
                            for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n -= 1) this[r].insertBefore(s.childNodes[n], this[r].childNodes[0])
                        } else if (e instanceof c)
                        for (n = 0; n < e.length; n += 1) this[r].insertBefore(e[n], this[r].childNodes[0]);
                    else this[r].insertBefore(e, this[r].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && p(this[0].nextElementSibling).is(e) ? p([this[0].nextElementSibling]) : p([]) : this[0].nextElementSibling ? p([this[0].nextElementSibling]) : p([]) : p([])
                },
                nextAll: function(e) {
                    const t = [];
                    let r = this[0];
                    if (!r) return p([]);
                    for (; r.nextElementSibling;) {
                        const n = r.nextElementSibling;
                        e ? p(n).is(e) && t.push(n) : t.push(n), r = n
                    }
                    return p(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? t.previousElementSibling && p(t.previousElementSibling).is(e) ? p([t.previousElementSibling]) : p([]) : t.previousElementSibling ? p([t.previousElementSibling]) : p([])
                    }
                    return p([])
                },
                prevAll: function(e) {
                    const t = [];
                    let r = this[0];
                    if (!r) return p([]);
                    for (; r.previousElementSibling;) {
                        const n = r.previousElementSibling;
                        e ? p(n).is(e) && t.push(n) : t.push(n), r = n
                    }
                    return p(t)
                },
                parent: function(e) {
                    const t = [];
                    for (let r = 0; r < this.length; r += 1) null !== this[r].parentNode && (e ? p(this[r].parentNode).is(e) && t.push(this[r].parentNode) : t.push(this[r].parentNode));
                    return p(t)
                },
                parents: function(e) {
                    const t = [];
                    for (let r = 0; r < this.length; r += 1) {
                        let n = this[r].parentNode;
                        for (; n;) e ? p(n).is(e) && t.push(n) : t.push(n), n = n.parentNode
                    }
                    return p(t)
                },
                closest: function(e) {
                    let t = this;
                    return "undefined" === typeof e ? p([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    const t = [];
                    for (let r = 0; r < this.length; r += 1) {
                        const n = this[r].querySelectorAll(e);
                        for (let e = 0; e < n.length; e += 1) t.push(n[e])
                    }
                    return p(t)
                },
                children: function(e) {
                    const t = [];
                    for (let r = 0; r < this.length; r += 1) {
                        const n = this[r].children;
                        for (let r = 0; r < n.length; r += 1) e && !p(n[r]).is(e) || t.push(n[r])
                    }
                    return p(t)
                },
                filter: function(e) {
                    return p(d(this, e))
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };
            Object.keys(m).forEach((e => {
                Object.defineProperty(p.fn, e, {
                    value: m[e],
                    writable: !0
                })
            }));
            var y = p;

            function g(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function v() {
                return Date.now()
            }

            function b(e, t) {
                void 0 === t && (t = "x");
                const r = l();
                let n, s, i;
                const a = function(e) {
                    const t = l();
                    let r;
                    return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
                }(e);
                return r.WebKitCSSMatrix ? (s = a.transform || a.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((e => e.replace(",", "."))).join(", ")), i = new r.WebKitCSSMatrix("none" === s ? "" : s)) : (i = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = i.toString().split(",")), "x" === t && (s = r.WebKitCSSMatrix ? i.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (s = r.WebKitCSSMatrix ? i.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), s || 0
            }

            function w(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function S(e) {
                return "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
            }

            function T() {
                const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];
                for (let r = 1; r < arguments.length; r += 1) {
                    const n = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                    if (void 0 !== n && null !== n && !S(n)) {
                        const r = Object.keys(Object(n)).filter((e => t.indexOf(e) < 0));
                        for (let t = 0, s = r.length; t < s; t += 1) {
                            const s = r[t],
                                i = Object.getOwnPropertyDescriptor(n, s);
                            void 0 !== i && i.enumerable && (w(e[s]) && w(n[s]) ? n[s].__swiper__ ? e[s] = n[s] : T(e[s], n[s]) : !w(e[s]) && w(n[s]) ? (e[s] = {}, n[s].__swiper__ ? e[s] = n[s] : T(e[s], n[s])) : e[s] = n[s])
                        }
                    }
                }
                return e
            }

            function E(e, t, r) {
                e.style.setProperty(t, r)
            }

            function x(e) {
                let {
                    swiper: t,
                    targetPosition: r,
                    side: n
                } = e;
                const s = l(),
                    i = -t.translate;
                let a, o = null;
                const c = t.params.speed;
                t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
                const u = r > i ? "next" : "prev",
                    d = (e, t) => "next" === u && e >= t || "prev" === u && e <= t,
                    p = () => {
                        a = (new Date).getTime(), null === o && (o = a);
                        const e = Math.max(Math.min((a - o) / c, 1), 0),
                            l = .5 - Math.cos(e * Math.PI) / 2;
                        let u = i + l * (r - i);
                        if (d(u, r) && (u = r), t.wrapperEl.scrollTo({
                                [n]: u
                            }), d(u, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                                [n]: u
                            })
                        })), void s.cancelAnimationFrame(t.cssModeFrameID);
                        t.cssModeFrameID = s.requestAnimationFrame(p)
                    };
                p()
            }
            let C, k, O;

            function P() {
                return C || (C = function() {
                    const e = l(),
                        t = a();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            let t = !1;
                            try {
                                const r = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, r)
                            } catch (r) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), C
            }

            function _(e) {
                return void 0 === e && (e = {}), k || (k = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e;
                    const r = P(),
                        n = l(),
                        s = n.navigator.platform,
                        i = t || n.navigator.userAgent,
                        a = {
                            ios: !1,
                            android: !1
                        },
                        o = n.screen.width,
                        c = n.screen.height,
                        u = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let d = i.match(/(iPad).*OS\s([\d_]+)/);
                    const p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                        f = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        h = "Win32" === s;
                    let m = "MacIntel" === s;
                    return !d && m && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${c}`) >= 0 && (d = i.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), m = !1), u && !h && (a.os = "android", a.android = !0), (d || f || p) && (a.os = "ios", a.ios = !0), a
                }(e)), k
            }

            function M() {
                return O || (O = function() {
                    const e = l();
                    return {
                        isSafari: function() {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), O
            }
            var A = {
                on(e, t, r) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" !== typeof t) return n;
                    const s = r ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][s](t)
                    })), n
                },
                once(e, t, r) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" !== typeof t) return n;

                    function s() {
                        n.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                        for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                        t.apply(n, i)
                    }
                    return s.__emitterProxy = t, n.on(e, s, r)
                },
                onAny(e, t) {
                    const r = this;
                    if (!r.eventsListeners || r.destroyed) return r;
                    if ("function" !== typeof e) return r;
                    const n = t ? "unshift" : "push";
                    return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const r = t.eventsAnyListeners.indexOf(e);
                    return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
                },
                off(e, t) {
                    const r = this;
                    return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach((e => {
                        "undefined" === typeof t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(((n, s) => {
                            (n === t || n.__emitterProxy && n.__emitterProxy === t) && r.eventsListeners[e].splice(s, 1)
                        }))
                    })), r) : r
                },
                emit() {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsListeners) return e;
                    let t, r, n;
                    for (var s = arguments.length, i = new Array(s), a = 0; a < s; a++) i[a] = arguments[a];
                    "string" === typeof i[0] || Array.isArray(i[0]) ? (t = i[0], r = i.slice(1, i.length), n = e) : (t = i[0].events, r = i[0].data, n = i[0].context || e), r.unshift(n);
                    return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                            e.apply(n, [t, ...r])
                        })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                            e.apply(n, r)
                        }))
                    })), e
                }
            };
            var L = {
                updateSize: function() {
                    const e = this;
                    let t, r;
                    const n = e.$el;
                    t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : n[0].clientWidth, r = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : n[0].clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10), r = r - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
                        width: t,
                        height: r,
                        size: e.isHorizontal() ? t : r
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function r(e, r) {
                        return parseFloat(e.getPropertyValue(t(r)) || 0)
                    }
                    const n = e.params,
                        {
                            $wrapperEl: s,
                            size: i,
                            rtlTranslate: a,
                            wrongRTL: o
                        } = e,
                        l = e.virtual && n.virtual.enabled,
                        c = l ? e.virtual.slides.length : e.slides.length,
                        u = s.children(`.${e.params.slideClass}`),
                        d = l ? e.virtual.slides.length : u.length;
                    let p = [];
                    const f = [],
                        h = [];
                    let m = n.slidesOffsetBefore;
                    "function" === typeof m && (m = n.slidesOffsetBefore.call(e));
                    let y = n.slidesOffsetAfter;
                    "function" === typeof y && (y = n.slidesOffsetAfter.call(e));
                    const g = e.snapGrid.length,
                        v = e.slidesGrid.length;
                    let b = n.spaceBetween,
                        w = -m,
                        S = 0,
                        T = 0;
                    if ("undefined" === typeof i) return;
                    "string" === typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * i), e.virtualSize = -b, a ? u.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : u.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), n.centeredSlides && n.cssMode && (E(e.wrapperEl, "--swiper-centered-offset-before", ""), E(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const x = n.grid && n.grid.rows > 1 && e.grid;
                    let C;
                    x && e.grid.initSlides(d);
                    const k = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e => "undefined" !== typeof n.breakpoints[e].slidesPerView)).length > 0;
                    for (let E = 0; E < d; E += 1) {
                        C = 0;
                        const s = u.eq(E);
                        if (x && e.grid.updateSlide(E, s, d, t), "none" !== s.css("display")) {
                            if ("auto" === n.slidesPerView) {
                                k && (u[E].style[t("width")] = "");
                                const i = getComputedStyle(s[0]),
                                    a = s[0].style.transform,
                                    o = s[0].style.webkitTransform;
                                if (a && (s[0].style.transform = "none"), o && (s[0].style.webkitTransform = "none"), n.roundLengths) C = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0);
                                else {
                                    const e = r(i, "width"),
                                        t = r(i, "padding-left"),
                                        n = r(i, "padding-right"),
                                        a = r(i, "margin-left"),
                                        o = r(i, "margin-right"),
                                        l = i.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) C = e + a + o;
                                    else {
                                        const {
                                            clientWidth: r,
                                            offsetWidth: i
                                        } = s[0];
                                        C = e + t + n + a + o + (i - r)
                                    }
                                }
                                a && (s[0].style.transform = a), o && (s[0].style.webkitTransform = o), n.roundLengths && (C = Math.floor(C))
                            } else C = (i - (n.slidesPerView - 1) * b) / n.slidesPerView, n.roundLengths && (C = Math.floor(C)), u[E] && (u[E].style[t("width")] = `${C}px`);
                            u[E] && (u[E].swiperSlideSize = C), h.push(C), n.centeredSlides ? (w = w + C / 2 + S / 2 + b, 0 === S && 0 !== E && (w = w - i / 2 - b), 0 === E && (w = w - i / 2 - b), Math.abs(w) < .001 && (w = 0), n.roundLengths && (w = Math.floor(w)), T % n.slidesPerGroup === 0 && p.push(w), f.push(w)) : (n.roundLengths && (w = Math.floor(w)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup === 0 && p.push(w), f.push(w), w = w + C + b), e.virtualSize += C + b, S = C, T += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, i) + y, a && o && ("slide" === n.effect || "coverflow" === n.effect) && s.css({
                            width: `${e.virtualSize+n.spaceBetween}px`
                        }), n.setWrapperSize && s.css({
                            [t("width")]: `${e.virtualSize+n.spaceBetween}px`
                        }), x && e.grid.updateWrapperSize(C, p, t), !n.centeredSlides) {
                        const t = [];
                        for (let r = 0; r < p.length; r += 1) {
                            let s = p[r];
                            n.roundLengths && (s = Math.floor(s)), p[r] <= e.virtualSize - i && t.push(s)
                        }
                        p = t, Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - i)
                    }
                    if (0 === p.length && (p = [0]), 0 !== n.spaceBetween) {
                        const r = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                        u.filter(((e, t) => !n.cssMode || t !== u.length - 1)).css({
                            [r]: `${b}px`
                        })
                    }
                    if (n.centeredSlides && n.centeredSlidesBounds) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (n.spaceBetween ? n.spaceBetween : 0)
                        })), e -= n.spaceBetween;
                        const t = e - i;
                        p = p.map((e => e < 0 ? -m : e > t ? t + y : e))
                    }
                    if (n.centerInsufficientSlides) {
                        let e = 0;
                        if (h.forEach((t => {
                                e += t + (n.spaceBetween ? n.spaceBetween : 0)
                            })), e -= n.spaceBetween, e < i) {
                            const t = (i - e) / 2;
                            p.forEach(((e, r) => {
                                p[r] = e - t
                            })), f.forEach(((e, r) => {
                                f[r] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: u,
                            snapGrid: p,
                            slidesGrid: f,
                            slidesSizesGrid: h
                        }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                        E(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), E(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            r = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + r))
                    }
                    if (d !== c && e.emit("slidesLengthChange"), p.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== v && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), !l && !n.cssMode && ("slide" === n.effect || "fade" === n.effect)) {
                        const t = `${n.containerModifierClass}backface-hidden`,
                            r = e.$el.hasClass(t);
                        d <= n.maxBackfaceHiddenSlides ? r || e.$el.addClass(t) : r && e.$el.removeClass(t)
                    }
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        r = [],
                        n = t.virtual && t.params.virtual.enabled;
                    let s, i = 0;
                    "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const a = e => n ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)(t.visibleSlides || y([])).each((e => {
                            r.push(e)
                        }));
                        else
                            for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                                const e = t.activeIndex + s;
                                if (e > t.slides.length && !n) break;
                                r.push(a(e))
                            } else r.push(a(t.activeIndex));
                    for (s = 0; s < r.length; s += 1)
                        if ("undefined" !== typeof r[s]) {
                            const e = r[s].offsetHeight;
                            i = e > i ? e : i
                        }(i || 0 === i) && t.$wrapperEl.css("height", `${i}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    const t = this,
                        r = t.params,
                        {
                            slides: n,
                            rtlTranslate: s,
                            snapGrid: i
                        } = t;
                    if (0 === n.length) return;
                    "undefined" === typeof n[0].swiperSlideOffset && t.updateSlidesOffset();
                    let a = -e;
                    s && (a = e), n.removeClass(r.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let o = 0; o < n.length; o += 1) {
                        const e = n[o];
                        let l = e.swiperSlideOffset;
                        r.cssMode && r.centeredSlides && (l -= n[0].swiperSlideOffset);
                        const c = (a + (r.centeredSlides ? t.minTranslate() : 0) - l) / (e.swiperSlideSize + r.spaceBetween),
                            u = (a - i[0] + (r.centeredSlides ? t.minTranslate() : 0) - l) / (e.swiperSlideSize + r.spaceBetween),
                            d = -(a - l),
                            p = d + t.slidesSizesGrid[o];
                        (d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(o), n.eq(o).addClass(r.slideVisibleClass)), e.progress = s ? -c : c, e.originalProgress = s ? -u : u
                    }
                    t.visibleSlides = y(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if ("undefined" === typeof e) {
                        const r = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * r || 0
                    }
                    const r = t.params,
                        n = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: s,
                        isBeginning: i,
                        isEnd: a
                    } = t;
                    const o = i,
                        l = a;
                    0 === n ? (s = 0, i = !0, a = !0) : (s = (e - t.minTranslate()) / n, i = s <= 0, a = s >= 1), Object.assign(t, {
                        progress: s,
                        isBeginning: i,
                        isEnd: a
                    }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), i && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !i || l && !a) && t.emit("fromEdge"), t.emit("progress", s)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: r,
                            $wrapperEl: n,
                            activeIndex: s,
                            realIndex: i
                        } = e,
                        a = e.virtual && r.virtual.enabled;
                    let o;
                    t.removeClass(`${r.slideActiveClass} ${r.slideNextClass} ${r.slidePrevClass} ${r.slideDuplicateActiveClass} ${r.slideDuplicateNextClass} ${r.slideDuplicatePrevClass}`), o = a ? e.$wrapperEl.find(`.${r.slideClass}[data-swiper-slide-index="${s}"]`) : t.eq(s), o.addClass(r.slideActiveClass), r.loop && (o.hasClass(r.slideDuplicateClass) ? n.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${i}"]`).addClass(r.slideDuplicateActiveClass) : n.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${i}"]`).addClass(r.slideDuplicateActiveClass));
                    let l = o.nextAll(`.${r.slideClass}`).eq(0).addClass(r.slideNextClass);
                    r.loop && 0 === l.length && (l = t.eq(0), l.addClass(r.slideNextClass));
                    let c = o.prevAll(`.${r.slideClass}`).eq(0).addClass(r.slidePrevClass);
                    r.loop && 0 === c.length && (c = t.eq(-1), c.addClass(r.slidePrevClass)), r.loop && (l.hasClass(r.slideDuplicateClass) ? n.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicateNextClass) : n.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicateNextClass), c.hasClass(r.slideDuplicateClass) ? n.children(`.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicatePrevClass) : n.children(`.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(r.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        r = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: n,
                            snapGrid: s,
                            params: i,
                            activeIndex: a,
                            realIndex: o,
                            snapIndex: l
                        } = t;
                    let c, u = e;
                    if ("undefined" === typeof u) {
                        for (let e = 0; e < n.length; e += 1) "undefined" !== typeof n[e + 1] ? r >= n[e] && r < n[e + 1] - (n[e + 1] - n[e]) / 2 ? u = e : r >= n[e] && r < n[e + 1] && (u = e + 1) : r >= n[e] && (u = e);
                        i.normalizeSlideIndex && (u < 0 || "undefined" === typeof u) && (u = 0)
                    }
                    if (s.indexOf(r) >= 0) c = s.indexOf(r);
                    else {
                        const e = Math.min(i.slidesPerGroupSkip, u);
                        c = e + Math.floor((u - e) / i.slidesPerGroup)
                    }
                    if (c >= s.length && (c = s.length - 1), u === a) return void(c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
                    const d = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                    Object.assign(t, {
                        snapIndex: c,
                        realIndex: d,
                        previousIndex: a,
                        activeIndex: u
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== d && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        r = t.params,
                        n = y(e).closest(`.${r.slideClass}`)[0];
                    let s, i = !1;
                    if (n)
                        for (let a = 0; a < t.slides.length; a += 1)
                            if (t.slides[a] === n) {
                                i = !0, s = a;
                                break
                            }
                    if (!n || !i) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(y(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = s, r.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };
            var $ = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {
                        params: t,
                        rtlTranslate: r,
                        translate: n,
                        $wrapperEl: s
                    } = this;
                    if (t.virtualTranslate) return r ? -n : n;
                    if (t.cssMode) return n;
                    let i = b(s[0], e);
                    return r && (i = -i), i || 0
                },
                setTranslate: function(e, t) {
                    const r = this,
                        {
                            rtlTranslate: n,
                            params: s,
                            $wrapperEl: i,
                            wrapperEl: a,
                            progress: o
                        } = r;
                    let l, c = 0,
                        u = 0;
                    r.isHorizontal() ? c = n ? -e : e : u = e, s.roundLengths && (c = Math.floor(c), u = Math.floor(u)), s.cssMode ? a[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -c : -u : s.virtualTranslate || i.transform(`translate3d(${c}px, ${u}px, 0px)`), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? c : u;
                    const d = r.maxTranslate() - r.minTranslate();
                    l = 0 === d ? 0 : (e - r.minTranslate()) / d, l !== o && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, r, n, s) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === n && (n = !0);
                    const i = this,
                        {
                            params: a,
                            wrapperEl: o
                        } = i;
                    if (i.animating && a.preventInteractionOnTransition) return !1;
                    const l = i.minTranslate(),
                        c = i.maxTranslate();
                    let u;
                    if (u = n && e > l ? l : n && e < c ? c : e, i.updateProgress(u), a.cssMode) {
                        const e = i.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -u;
                        else {
                            if (!i.support.smoothScroll) return x({
                                swiper: i,
                                targetPosition: -u,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({
                                [e ? "left" : "top"]: -u,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (i.setTransition(0), i.setTranslate(u), r && (i.emit("beforeTransitionStart", t, s), i.emit("transitionEnd"))) : (i.setTransition(t), i.setTranslate(u), r && (i.emit("beforeTransitionStart", t, s), i.emit("transitionStart")), i.animating || (i.animating = !0, i.onTranslateToWrapperTransitionEnd || (i.onTranslateToWrapperTransitionEnd = function(e) {
                        i && !i.destroyed && e.target === this && (i.$wrapperEl[0].removeEventListener("transitionend", i.onTranslateToWrapperTransitionEnd), i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onTranslateToWrapperTransitionEnd), i.onTranslateToWrapperTransitionEnd = null, delete i.onTranslateToWrapperTransitionEnd, r && i.emit("transitionEnd"))
                    }), i.$wrapperEl[0].addEventListener("transitionend", i.onTranslateToWrapperTransitionEnd), i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onTranslateToWrapperTransitionEnd))), !0
                }
            };

            function j(e) {
                let {
                    swiper: t,
                    runCallbacks: r,
                    direction: n,
                    step: s
                } = e;
                const {
                    activeIndex: i,
                    previousIndex: a
                } = t;
                let o = n;
                if (o || (o = i > a ? "next" : i < a ? "prev" : "reset"), t.emit(`transition${s}`), r && i !== a) {
                    if ("reset" === o) return void t.emit(`slideResetTransition${s}`);
                    t.emit(`slideChangeTransition${s}`), "next" === o ? t.emit(`slideNextTransition${s}`) : t.emit(`slidePrevTransition${s}`)
                }
            }
            var D = {
                slideTo: function(e, t, r, n, s) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "number" !== typeof e && "string" !== typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" === typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const i = this;
                    let a = e;
                    a < 0 && (a = 0);
                    const {
                        params: o,
                        snapGrid: l,
                        slidesGrid: c,
                        previousIndex: u,
                        activeIndex: d,
                        rtlTranslate: p,
                        wrapperEl: f,
                        enabled: h
                    } = i;
                    if (i.animating && o.preventInteractionOnTransition || !h && !n && !s) return !1;
                    const m = Math.min(i.params.slidesPerGroupSkip, a);
                    let y = m + Math.floor((a - m) / i.params.slidesPerGroup);
                    y >= l.length && (y = l.length - 1), (d || o.initialSlide || 0) === (u || 0) && r && i.emit("beforeSlideChangeStart");
                    const g = -l[y];
                    if (i.updateProgress(g), o.normalizeSlideIndex)
                        for (let b = 0; b < c.length; b += 1) {
                            const e = -Math.floor(100 * g),
                                t = Math.floor(100 * c[b]),
                                r = Math.floor(100 * c[b + 1]);
                            "undefined" !== typeof c[b + 1] ? e >= t && e < r - (r - t) / 2 ? a = b : e >= t && e < r && (a = b + 1) : e >= t && (a = b)
                        }
                    if (i.initialized && a !== d) {
                        if (!i.allowSlideNext && g < i.translate && g < i.minTranslate()) return !1;
                        if (!i.allowSlidePrev && g > i.translate && g > i.maxTranslate() && (d || 0) !== a) return !1
                    }
                    let v;
                    if (v = a > d ? "next" : a < d ? "prev" : "reset", p && -g === i.translate || !p && g === i.translate) return i.updateActiveIndex(a), o.autoHeight && i.updateAutoHeight(), i.updateSlidesClasses(), "slide" !== o.effect && i.setTranslate(g), "reset" !== v && (i.transitionStart(r, v), i.transitionEnd(r, v)), !1;
                    if (o.cssMode) {
                        const e = i.isHorizontal(),
                            r = p ? g : -g;
                        if (0 === t) {
                            const t = i.virtual && i.params.virtual.enabled;
                            t && (i.wrapperEl.style.scrollSnapType = "none", i._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = r, t && requestAnimationFrame((() => {
                                i.wrapperEl.style.scrollSnapType = "", i._swiperImmediateVirtual = !1
                            }))
                        } else {
                            if (!i.support.smoothScroll) return x({
                                swiper: i,
                                targetPosition: r,
                                side: e ? "left" : "top"
                            }), !0;
                            f.scrollTo({
                                [e ? "left" : "top"]: r,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return i.setTransition(t), i.setTranslate(g), i.updateActiveIndex(a), i.updateSlidesClasses(), i.emit("beforeTransitionStart", t, n), i.transitionStart(r, v), 0 === t ? i.transitionEnd(r, v) : i.animating || (i.animating = !0, i.onSlideToWrapperTransitionEnd || (i.onSlideToWrapperTransitionEnd = function(e) {
                        i && !i.destroyed && e.target === this && (i.$wrapperEl[0].removeEventListener("transitionend", i.onSlideToWrapperTransitionEnd), i.$wrapperEl[0].removeEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd), i.onSlideToWrapperTransitionEnd = null, delete i.onSlideToWrapperTransitionEnd, i.transitionEnd(r, v))
                    }), i.$wrapperEl[0].addEventListener("transitionend", i.onSlideToWrapperTransitionEnd), i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e, t, r, n) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0);
                    const s = this;
                    let i = e;
                    return s.params.loop && (i += s.loopedSlides), s.slideTo(i, t, r, n)
                },
                slideNext: function(e, t, r) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const n = this,
                        {
                            animating: s,
                            enabled: i,
                            params: a
                        } = n;
                    if (!i) return n;
                    let o = a.slidesPerGroup;
                    "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                    const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o;
                    if (a.loop) {
                        if (s && a.loopPreventsSlide) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }
                    return a.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r)
                },
                slidePrev: function(e, t, r) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const n = this,
                        {
                            params: s,
                            animating: i,
                            snapGrid: a,
                            slidesGrid: o,
                            rtlTranslate: l,
                            enabled: c
                        } = n;
                    if (!c) return n;
                    if (s.loop) {
                        if (i && s.loopPreventsSlide) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }

                    function u(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const d = u(l ? n.translate : -n.translate),
                        p = a.map((e => u(e)));
                    let f = a[p.indexOf(d) - 1];
                    if ("undefined" === typeof f && s.cssMode) {
                        let e;
                        a.forEach(((t, r) => {
                            d >= t && (e = r)
                        })), "undefined" !== typeof e && (f = a[e > 0 ? e - 1 : e])
                    }
                    let h = 0;
                    if ("undefined" !== typeof f && (h = o.indexOf(f), h < 0 && (h = n.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (h = h - n.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), s.rewind && n.isBeginning) {
                        const s = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                        return n.slideTo(s, e, t, r)
                    }
                    return n.slideTo(h, e, t, r)
                },
                slideReset: function(e, t, r) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, r)
                },
                slideToClosest: function(e, t, r, n) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = .5);
                    const s = this;
                    let i = s.activeIndex;
                    const a = Math.min(s.params.slidesPerGroupSkip, i),
                        o = a + Math.floor((i - a) / s.params.slidesPerGroup),
                        l = s.rtlTranslate ? s.translate : -s.translate;
                    if (l >= s.snapGrid[o]) {
                        const e = s.snapGrid[o];
                        l - e > (s.snapGrid[o + 1] - e) * n && (i += s.params.slidesPerGroup)
                    } else {
                        const e = s.snapGrid[o - 1];
                        l - e <= (s.snapGrid[o] - e) * n && (i -= s.params.slidesPerGroup)
                    }
                    return i = Math.max(i, 0), i = Math.min(i, s.slidesGrid.length - 1), s.slideTo(i, e, t, r)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: r
                        } = e,
                        n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let s, i = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        s = parseInt(y(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? i < e.loopedSlides - n / 2 || i > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), i = r.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), g((() => {
                            e.slideTo(i)
                        }))) : e.slideTo(i) : i > e.slides.length - n ? (e.loopFix(), i = r.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), g((() => {
                            e.slideTo(i)
                        }))) : e.slideTo(i)
                    } else e.slideTo(i)
                }
            };
            var I = {
                loopCreate: function() {
                    const e = this,
                        t = a(),
                        {
                            params: r,
                            $wrapperEl: n
                        } = e,
                        s = n.children().length > 0 ? y(n.children()[0].parentNode) : n;
                    s.children(`.${r.slideClass}.${r.slideDuplicateClass}`).remove();
                    let i = s.children(`.${r.slideClass}`);
                    if (r.loopFillGroupWithBlank) {
                        const e = r.slidesPerGroup - i.length % r.slidesPerGroup;
                        if (e !== r.slidesPerGroup) {
                            for (let n = 0; n < e; n += 1) {
                                const e = y(t.createElement("div")).addClass(`${r.slideClass} ${r.slideBlankClass}`);
                                s.append(e)
                            }
                            i = s.children(`.${r.slideClass}`)
                        }
                    }
                    "auto" !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = i.length), e.loopedSlides = Math.ceil(parseFloat(r.loopedSlides || r.slidesPerView, 10)), e.loopedSlides += r.loopAdditionalSlides, e.loopedSlides > i.length && (e.loopedSlides = i.length);
                    const o = [],
                        l = [];
                    i.each(((t, r) => {
                        const n = y(t);
                        r < e.loopedSlides && l.push(t), r < i.length && r >= i.length - e.loopedSlides && o.push(t), n.attr("data-swiper-slide-index", r)
                    }));
                    for (let a = 0; a < l.length; a += 1) s.append(y(l[a].cloneNode(!0)).addClass(r.slideDuplicateClass));
                    for (let a = o.length - 1; a >= 0; a -= 1) s.prepend(y(o[a].cloneNode(!0)).addClass(r.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: r,
                        loopedSlides: n,
                        allowSlidePrev: s,
                        allowSlideNext: i,
                        snapGrid: a,
                        rtlTranslate: o
                    } = e;
                    let l;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const c = -a[t] - e.getTranslate();
                    if (t < n) {
                        l = r.length - 3 * n + t, l += n;
                        e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)
                    } else if (t >= r.length - n) {
                        l = -r.length + t + n, l += n;
                        e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)
                    }
                    e.allowSlidePrev = s, e.allowSlideNext = i, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: r
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), r.removeAttr("data-swiper-slide-index")
                }
            };

            function N(e) {
                const t = this,
                    r = a(),
                    n = l(),
                    s = t.touchEventsData,
                    {
                        params: i,
                        touches: o,
                        enabled: c
                    } = t;
                if (!c) return;
                if (t.animating && i.preventInteractionOnTransition) return;
                !t.animating && i.cssMode && i.loop && t.loopFix();
                let u = e;
                u.originalEvent && (u = u.originalEvent);
                let d = y(u.target);
                if ("wrapper" === i.touchEventsTarget && !d.closest(t.wrapperEl).length) return;
                if (s.isTouchEvent = "touchstart" === u.type, !s.isTouchEvent && "which" in u && 3 === u.which) return;
                if (!s.isTouchEvent && "button" in u && u.button > 0) return;
                if (s.isTouched && s.isMoved) return;
                !!i.noSwipingClass && "" !== i.noSwipingClass && u.target && u.target.shadowRoot && e.path && e.path[0] && (d = y(e.path[0]));
                const p = i.noSwipingSelector ? i.noSwipingSelector : `.${i.noSwipingClass}`,
                    f = !(!u.target || !u.target.shadowRoot);
                if (i.noSwiping && (f ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(r) {
                                if (!r || r === a() || r === l()) return null;
                                r.assignedSlot && (r = r.assignedSlot);
                                const n = r.closest(e);
                                return n || r.getRootNode ? n || t(r.getRootNode().host) : null
                            }(t)
                    }(p, d[0]) : d.closest(p)[0])) return void(t.allowClick = !0);
                if (i.swipeHandler && !d.closest(i.swipeHandler)[0]) return;
                o.currentX = "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX, o.currentY = "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY;
                const h = o.currentX,
                    m = o.currentY,
                    g = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                    b = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                if (g && (h <= b || h >= n.innerWidth - b)) {
                    if ("prevent" !== g) return;
                    e.preventDefault()
                }
                if (Object.assign(s, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), o.startX = h, o.startY = m, s.touchStartTime = v(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, i.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== u.type) {
                    let e = !0;
                    d.is(s.focusableElements) && (e = !1, "SELECT" === d[0].nodeName && (s.isTouched = !1)), r.activeElement && y(r.activeElement).is(s.focusableElements) && r.activeElement !== d[0] && r.activeElement.blur();
                    const n = e && t.allowTouchMove && i.touchStartPreventDefault;
                    !i.touchStartForcePreventDefault && !n || d[0].isContentEditable || u.preventDefault()
                }
                t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !i.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", u)
            }

            function F(e) {
                const t = a(),
                    r = this,
                    n = r.touchEventsData,
                    {
                        params: s,
                        touches: i,
                        rtlTranslate: o,
                        enabled: l
                    } = r;
                if (!l) return;
                let c = e;
                if (c.originalEvent && (c = c.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", c));
                if (n.isTouchEvent && "touchmove" !== c.type) return;
                const u = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
                    d = "touchmove" === c.type ? u.pageX : c.pageX,
                    p = "touchmove" === c.type ? u.pageY : c.pageY;
                if (c.preventedByNestedSwiper) return i.startX = d, void(i.startY = p);
                if (!r.allowTouchMove) return y(c.target).is(n.focusableElements) || (r.allowClick = !1), void(n.isTouched && (Object.assign(i, {
                    startX: d,
                    startY: p,
                    currentX: d,
                    currentY: p
                }), n.touchStartTime = v()));
                if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (r.isVertical()) {
                        if (p < i.startY && r.translate <= r.maxTranslate() || p > i.startY && r.translate >= r.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                    } else if (d < i.startX && r.translate <= r.maxTranslate() || d > i.startX && r.translate >= r.minTranslate()) return;
                if (n.isTouchEvent && t.activeElement && c.target === t.activeElement && y(c.target).is(n.focusableElements)) return n.isMoved = !0, void(r.allowClick = !1);
                if (n.allowTouchCallbacks && r.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
                i.currentX = d, i.currentY = p;
                const f = i.currentX - i.startX,
                    h = i.currentY - i.startY;
                if (r.params.threshold && Math.sqrt(f ** 2 + h ** 2) < r.params.threshold) return;
                if ("undefined" === typeof n.isScrolling) {
                    let e;
                    r.isHorizontal() && i.currentY === i.startY || r.isVertical() && i.currentX === i.startX ? n.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, n.isScrolling = r.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
                }
                if (n.isScrolling && r.emit("touchMoveOpposite", c), "undefined" === typeof n.startMoving && (i.currentX === i.startX && i.currentY === i.startY || (n.startMoving = !0)), n.isScrolling) return void(n.isTouched = !1);
                if (!n.startMoving) return;
                r.allowClick = !1, !s.cssMode && c.cancelable && c.preventDefault(), s.touchMoveStopPropagation && !s.nested && c.stopPropagation(), n.isMoved || (s.loop && !s.cssMode && r.loopFix(), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating && r.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !s.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", c)), r.emit("sliderMove", c), n.isMoved = !0;
                let m = r.isHorizontal() ? f : h;
                i.diff = m, m *= s.touchRatio, o && (m = -m), r.swipeDirection = m > 0 ? "prev" : "next", n.currentTranslate = m + n.startTranslate;
                let g = !0,
                    b = s.resistanceRatio;
                if (s.touchReleaseOnEdges && (b = 0), m > 0 && n.currentTranslate > r.minTranslate() ? (g = !1, s.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + m) ** b)) : m < 0 && n.currentTranslate < r.maxTranslate() && (g = !1, s.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - m) ** b)), g && (c.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate), s.threshold > 0) {
                    if (!(Math.abs(m) > s.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                    if (!n.allowThresholdMove) return n.allowThresholdMove = !0, i.startX = i.currentX, i.startY = i.currentY, n.currentTranslate = n.startTranslate, void(i.diff = r.isHorizontal() ? i.currentX - i.startX : i.currentY - i.startY)
                }
                s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && r.freeMode || s.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), r.params.freeMode && s.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate))
            }

            function V(e) {
                const t = this,
                    r = t.touchEventsData,
                    {
                        params: n,
                        touches: s,
                        rtlTranslate: i,
                        slidesGrid: a,
                        enabled: o
                    } = t;
                if (!o) return;
                let l = e;
                if (l.originalEvent && (l = l.originalEvent), r.allowTouchCallbacks && t.emit("touchEnd", l), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && n.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
                n.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const c = v(),
                    u = c - r.touchStartTime;
                if (t.allowClick) {
                    const e = l.path || l.composedPath && l.composedPath();
                    t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), u < 300 && c - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
                }
                if (r.lastClickTime = v(), g((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === s.diff || r.currentTranslate === r.startTranslate) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
                let d;
                if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, d = n.followFinger ? i ? t.translate : -t.translate : -r.currentTranslate, n.cssMode) return;
                if (t.params.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: d
                });
                let p = 0,
                    f = t.slidesSizesGrid[0];
                for (let g = 0; g < a.length; g += g < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    const e = g < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    "undefined" !== typeof a[g + e] ? d >= a[g] && d < a[g + e] && (p = g, f = a[g + e] - a[g]) : d >= a[g] && (p = g, f = a[a.length - 1] - a[a.length - 2])
                }
                let h = null,
                    m = null;
                n.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
                const y = (d - a[p]) / f,
                    b = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (u > n.longSwipesMs) {
                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (y >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? h : p + b) : t.slideTo(p)), "prev" === t.swipeDirection && (y > 1 - n.longSwipesRatio ? t.slideTo(p + b) : null !== m && y < 0 && Math.abs(y) > n.longSwipesRatio ? t.slideTo(m) : t.slideTo(p))
                } else {
                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(p + b) : t.slideTo(p) : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + b), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p))
                }
            }

            function z() {
                const e = this,
                    {
                        params: t,
                        el: r
                    } = e;
                if (r && 0 === r.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: n,
                    allowSlidePrev: s,
                    snapGrid: i
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = n, e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow()
            }

            function B(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function R() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: r,
                        enabled: n
                    } = e;
                if (!n) return;
                let s;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const i = e.maxTranslate() - e.minTranslate();
                s = 0 === i ? 0 : (e.translate - e.minTranslate()) / i, s !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            let G = !1;

            function H() {}
            const q = (e, t) => {
                const r = a(),
                    {
                        params: n,
                        touchEvents: s,
                        el: i,
                        wrapperEl: o,
                        device: l,
                        support: c
                    } = e,
                    u = !!n.nested,
                    d = "on" === t ? "addEventListener" : "removeEventListener",
                    p = t;
                if (c.touch) {
                    const t = !("touchstart" !== s.start || !c.passiveListener || !n.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    i[d](s.start, e.onTouchStart, t), i[d](s.move, e.onTouchMove, c.passiveListener ? {
                        passive: !1,
                        capture: u
                    } : u), i[d](s.end, e.onTouchEnd, t), s.cancel && i[d](s.cancel, e.onTouchEnd, t)
                } else i[d](s.start, e.onTouchStart, !1), r[d](s.move, e.onTouchMove, u), r[d](s.end, e.onTouchEnd, !1);
                (n.preventClicks || n.preventClicksPropagation) && i[d]("click", e.onClick, !0), n.cssMode && o[d]("scroll", e.onScroll), n.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z, !0) : e[p]("observerUpdate", z, !0)
            };
            var W = {
                attachEvents: function() {
                    const e = this,
                        t = a(),
                        {
                            params: r,
                            support: n
                        } = e;
                    e.onTouchStart = N.bind(e), e.onTouchMove = F.bind(e), e.onTouchEnd = V.bind(e), r.cssMode && (e.onScroll = R.bind(e)), e.onClick = B.bind(e), n.touch && !G && (t.addEventListener("touchstart", H), G = !0), q(e, "on")
                },
                detachEvents: function() {
                    q(this, "off")
                }
            };
            const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var X = {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: r,
                            loopedSlides: n = 0,
                            params: s,
                            $el: i
                        } = e,
                        a = s.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length) return;
                    const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                    if (!o || e.currentBreakpoint === o) return;
                    const l = (o in a ? a[o] : void 0) || e.originalParams,
                        c = Y(e, s),
                        u = Y(e, l),
                        d = s.enabled;
                    c && !u ? (i.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && u && (i.addClass(`${s.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && i.addClass(`${s.containerModifierClass}grid-column`), e.emitContainerClasses());
                    const p = l.direction && l.direction !== s.direction,
                        f = s.loop && (l.slidesPerView !== s.slidesPerView || p);
                    p && r && e.changeDirection(), T(e.params, l);
                    const h = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), d && !h ? e.disable() : !d && h && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), f && r && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                },
                getBreakpoint: function(e, t, r) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
                    let n = !1;
                    const s = l(),
                        i = "window" === t ? s.innerHeight : r.clientHeight,
                        a = Object.keys(e).map((e => {
                            if ("string" === typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: i * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let o = 0; o < a.length; o += 1) {
                        const {
                            point: e,
                            value: i
                        } = a[o];
                        "window" === t ? s.matchMedia(`(min-width: ${i}px)`).matches && (n = e) : i <= r.clientWidth && (n = e)
                    }
                    return n || "max"
                }
            };
            var U = {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: r,
                            rtl: n,
                            $el: s,
                            device: i,
                            support: a
                        } = e,
                        o = function(e, t) {
                            const r = [];
                            return e.forEach((e => {
                                "object" === typeof e ? Object.keys(e).forEach((n => {
                                    e[n] && r.push(t + n)
                                })) : "string" === typeof e && r.push(t + e)
                            })), r
                        }(["initialized", r.direction, {
                            "pointer-events": !a.touch
                        }, {
                            "free-mode": e.params.freeMode && r.freeMode.enabled
                        }, {
                            autoheight: r.autoHeight
                        }, {
                            rtl: n
                        }, {
                            grid: r.grid && r.grid.rows > 1
                        }, {
                            "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                        }, {
                            android: i.android
                        }, {
                            ios: i.ios
                        }, {
                            "css-mode": r.cssMode
                        }, {
                            centered: r.cssMode && r.centeredSlides
                        }, {
                            "watch-progress": r.watchSlidesProgress
                        }], r.containerModifierClass);
                    t.push(...o), s.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            };
            var Z = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function K(e, t) {
                return function(r) {
                    void 0 === r && (r = {});
                    const n = Object.keys(r)[0],
                        s = r[n];
                    "object" === typeof s && null !== s ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === e[n] && (e[n] = {
                        auto: !0
                    }), n in e && "enabled" in s ? (!0 === e[n] && (e[n] = {
                        enabled: !0
                    }), "object" !== typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
                        enabled: !1
                    }), T(t, r)) : T(t, r)) : T(t, r)
                }
            }
            const J = {
                    eventsEmitter: A,
                    update: L,
                    translate: $,
                    transition: {
                        setTransition: function(e, t) {
                            const r = this;
                            r.params.cssMode || r.$wrapperEl.transition(e), r.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            const r = this,
                                {
                                    params: n
                                } = r;
                            n.cssMode || (n.autoHeight && r.updateAutoHeight(), j({
                                swiper: r,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            const r = this,
                                {
                                    params: n
                                } = r;
                            r.animating = !1, n.cssMode || (r.setTransition(0), j({
                                swiper: r,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: D,
                    loop: I,
                    grabCursor: {
                        setGrabCursor: function(e) {
                            const t = this;
                            if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            const e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: W,
                    breakpoints: X,
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                {
                                    isLocked: t,
                                    params: r
                                } = e,
                                {
                                    slidesOffsetBefore: n
                                } = r;
                            if (n) {
                                const t = e.slides.length - 1,
                                    r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                                e.isLocked = e.size > r
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: U,
                    images: {
                        loadImage: function(e, t, r, n, s, i) {
                            const a = l();
                            let o;

                            function c() {
                                i && i()
                            }
                            y(e).parent("picture")[0] || e.complete && s ? c() : t ? (o = new a.Image, o.onload = c, o.onerror = c, n && (o.sizes = n), r && (o.srcset = r), t && (o.src = t)) : c()
                        },
                        preloadImages: function() {
                            const e = this;

                            function t() {
                                "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let r = 0; r < e.imagesToLoad.length; r += 1) {
                                const n = e.imagesToLoad[r];
                                e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                Q = {};
            class ee {
                constructor() {
                    let e, t;
                    for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
                    if (1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = T({}, t), e && !t.el && (t.el = e), t.el && y(t.el).length > 1) {
                        const e = [];
                        return y(t.el).each((r => {
                            const n = T({}, t, {
                                el: r
                            });
                            e.push(new ee(n))
                        })), e
                    }
                    const i = this;
                    i.__swiper__ = !0, i.support = P(), i.device = _({
                        userAgent: t.userAgent
                    }), i.browser = M(), i.eventsListeners = {}, i.eventsAnyListeners = [], i.modules = [...i.__modules__], t.modules && Array.isArray(t.modules) && i.modules.push(...t.modules);
                    const a = {};
                    i.modules.forEach((e => {
                        e({
                            swiper: i,
                            extendParams: K(t, a),
                            on: i.on.bind(i),
                            once: i.once.bind(i),
                            off: i.off.bind(i),
                            emit: i.emit.bind(i)
                        })
                    }));
                    const o = T({}, Z, a);
                    return i.params = T({}, o, Q, t), i.originalParams = T({}, i.params), i.passedParams = T({}, t), i.params && i.params.on && Object.keys(i.params.on).forEach((e => {
                        i.on(e, i.params.on[e])
                    })), i.params && i.params.onAny && i.onAny(i.params.onAny), i.$ = y, Object.assign(i, {
                        enabled: i.params.enabled,
                        el: e,
                        classNames: [],
                        slides: y(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === i.params.direction,
                        isVertical: () => "vertical" === i.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: i.params.allowSlideNext,
                        allowSlidePrev: i.params.allowSlidePrev,
                        touchEvents: function() {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return i.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, i.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, i.support.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: i.params.focusableElements,
                            lastClickTime: v(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: i.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), i.emit("_swiper"), i.params.init && i.init(), i
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const r = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const n = r.minTranslate(),
                        s = (r.maxTranslate() - n) * e + n;
                    r.translateTo(s, "undefined" === typeof t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.each((r => {
                        const n = e.getSlideClasses(r);
                        t.push({
                            slideEl: r,
                            classNames: n
                        }), e.emit("_slideClass", r, n)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    const {
                        params: r,
                        slides: n,
                        slidesGrid: s,
                        slidesSizesGrid: i,
                        size: a,
                        activeIndex: o
                    } = this;
                    let l = 1;
                    if (r.centeredSlides) {
                        let e, t = n[o].swiperSlideSize;
                        for (let r = o + 1; r < n.length; r += 1) n[r] && !e && (t += n[r].swiperSlideSize, l += 1, t > a && (e = !0));
                        for (let r = o - 1; r >= 0; r -= 1) n[r] && !e && (t += n[r].swiperSlideSize, l += 1, t > a && (e = !0))
                    } else if ("current" === e)
                        for (let c = o + 1; c < n.length; c += 1) {
                            (t ? s[c] + i[c] - s[o] < a : s[c] - s[o] < a) && (l += 1)
                        } else
                            for (let c = o - 1; c >= 0; c -= 1) {
                                s[o] - s[c] < a && (l += 1)
                            }
                    return l
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: r
                    } = e;

                    function n() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let s;
                    r.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (s = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), s || n()), r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    const r = this,
                        n = r.params.direction;
                    return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (r.$el.removeClass(`${r.params.containerModifierClass}${n}`).addClass(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.each((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), r.emit("changeDirection"), t && r.update()), r
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    const r = y(e || t.params.el);
                    if (!(e = r[0])) return !1;
                    e.swiper = t;
                    const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                    let s = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            const t = y(e.shadowRoot.querySelector(n()));
                            return t.children = e => r.children(e), t
                        }
                        return r.children ? r.children(n()) : y(r).children(n())
                    })();
                    if (0 === s.length && t.params.createElements) {
                        const e = a().createElement("div");
                        s = y(e), e.className = t.params.wrapperClass, r.append(e), r.children(`.${t.params.slideClass}`).each((e => {
                            s.append(e)
                        }))
                    }
                    return Object.assign(t, {
                        $el: r,
                        el: e,
                        $wrapperEl: s,
                        wrapperEl: s[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
                        wrongRTL: "-webkit-box" === s.css("display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    const r = this,
                        {
                            params: n,
                            $el: s,
                            $wrapperEl: i,
                            slides: a
                        } = r;
                    return "undefined" === typeof r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), t && (r.removeClasses(), s.removeAttr("style"), i.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((e => {
                        r.off(e)
                    })), !1 !== e && (r.$el[0].swiper = null, function(e) {
                        const t = e;
                        Object.keys(t).forEach((e => {
                            try {
                                t[e] = null
                            } catch (r) {}
                            try {
                                delete t[e]
                            } catch (r) {}
                        }))
                    }(r)), r.destroyed = !0), null
                }
                static extendDefaults(e) {
                    T(Q, e)
                }
                static get extendedDefaults() {
                    return Q
                }
                static get defaults() {
                    return Z
                }
                static installModule(e) {
                    ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
                    const t = ee.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => ee.installModule(e))), ee) : (ee.installModule(e), ee)
                }
            }
            Object.keys(J).forEach((e => {
                Object.keys(J[e]).forEach((t => {
                    ee.prototype[t] = J[e][t]
                }))
            })), ee.use([function(e) {
                let {
                    swiper: t,
                    on: r,
                    emit: n
                } = e;
                const s = l();
                let i = null,
                    a = null;
                const o = () => {
                        t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
                    },
                    c = () => {
                        t && !t.destroyed && t.initialized && n("orientationchange")
                    };
                r("init", (() => {
                    t.params.resizeObserver && "undefined" !== typeof s.ResizeObserver ? t && !t.destroyed && t.initialized && (i = new ResizeObserver((e => {
                        a = s.requestAnimationFrame((() => {
                            const {
                                width: r,
                                height: n
                            } = t;
                            let s = r,
                                i = n;
                            e.forEach((e => {
                                let {
                                    contentBoxSize: r,
                                    contentRect: n,
                                    target: a
                                } = e;
                                a && a !== t.el || (s = n ? n.width : (r[0] || r).inlineSize, i = n ? n.height : (r[0] || r).blockSize)
                            })), s === r && i === n || o()
                        }))
                    })), i.observe(t.el)) : (s.addEventListener("resize", o), s.addEventListener("orientationchange", c))
                })), r("destroy", (() => {
                    a && s.cancelAnimationFrame(a), i && i.unobserve && t.el && (i.unobserve(t.el), i = null), s.removeEventListener("resize", o), s.removeEventListener("orientationchange", c)
                }))
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: r,
                    on: n,
                    emit: s
                } = e;
                const i = [],
                    a = l(),
                    o = function(e, t) {
                        void 0 === t && (t = {});
                        const r = new(a.MutationObserver || a.WebkitMutationObserver)((e => {
                            if (1 === e.length) return void s("observerUpdate", e[0]);
                            const t = function() {
                                s("observerUpdate", e[0])
                            };
                            a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                        }));
                        r.observe(e, {
                            attributes: "undefined" === typeof t.attributes || t.attributes,
                            childList: "undefined" === typeof t.childList || t.childList,
                            characterData: "undefined" === typeof t.characterData || t.characterData
                        }), i.push(r)
                    };
                r({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), n("init", (() => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            const e = t.$el.parents();
                            for (let t = 0; t < e.length; t += 1) o(e[t])
                        }
                        o(t.$el[0], {
                            childList: t.params.observeSlideChildren
                        }), o(t.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                })), n("destroy", (() => {
                    i.forEach((e => {
                        e.disconnect()
                    })), i.splice(0, i.length)
                }))
            }]);
            var te = ee;

            function re(e) {
                let t, {
                    swiper: r,
                    extendParams: n,
                    on: s,
                    emit: i
                } = e;

                function o() {
                    const e = r.slides.eq(r.activeIndex);
                    let n = r.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (n = e.attr("data-swiper-autoplay") || r.params.autoplay.delay), clearTimeout(t), t = g((() => {
                        let e;
                        r.params.autoplay.reverseDirection ? r.params.loop ? (r.loopFix(), e = r.slidePrev(r.params.speed, !0, !0), i("autoplay")) : r.isBeginning ? r.params.autoplay.stopOnLastSlide ? c() : (e = r.slideTo(r.slides.length - 1, r.params.speed, !0, !0), i("autoplay")) : (e = r.slidePrev(r.params.speed, !0, !0), i("autoplay")) : r.params.loop ? (r.loopFix(), e = r.slideNext(r.params.speed, !0, !0), i("autoplay")) : r.isEnd ? r.params.autoplay.stopOnLastSlide ? c() : (e = r.slideTo(0, r.params.speed, !0, !0), i("autoplay")) : (e = r.slideNext(r.params.speed, !0, !0), i("autoplay")), (r.params.cssMode && r.autoplay.running || !1 === e) && o()
                    }), n)
                }

                function l() {
                    return "undefined" === typeof t && (!r.autoplay.running && (r.autoplay.running = !0, i("autoplayStart"), o(), !0))
                }

                function c() {
                    return !!r.autoplay.running && ("undefined" !== typeof t && (t && (clearTimeout(t), t = void 0), r.autoplay.running = !1, i("autoplayStop"), !0))
                }

                function u(e) {
                    r.autoplay.running && (r.autoplay.paused || (t && clearTimeout(t), r.autoplay.paused = !0, 0 !== e && r.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                        r.$wrapperEl[0].addEventListener(e, p)
                    })) : (r.autoplay.paused = !1, o())))
                }

                function d() {
                    const e = a();
                    "hidden" === e.visibilityState && r.autoplay.running && u(), "visible" === e.visibilityState && r.autoplay.paused && (o(), r.autoplay.paused = !1)
                }

                function p(e) {
                    r && !r.destroyed && r.$wrapperEl && e.target === r.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                        r.$wrapperEl[0].removeEventListener(e, p)
                    })), r.autoplay.paused = !1, r.autoplay.running ? o() : c())
                }

                function f() {
                    r.params.autoplay.disableOnInteraction ? c() : (i("autoplayPause"), u()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                        r.$wrapperEl[0].removeEventListener(e, p)
                    }))
                }

                function h() {
                    r.params.autoplay.disableOnInteraction || (r.autoplay.paused = !1, i("autoplayResume"), o())
                }
                r.autoplay = {
                    running: !1,
                    paused: !1
                }, n({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), s("init", (() => {
                    if (r.params.autoplay.enabled) {
                        l();
                        a().addEventListener("visibilitychange", d), r.params.autoplay.pauseOnMouseEnter && (r.$el.on("mouseenter", f), r.$el.on("mouseleave", h))
                    }
                })), s("beforeTransitionStart", ((e, t, n) => {
                    r.autoplay.running && (n || !r.params.autoplay.disableOnInteraction ? r.autoplay.pause(t) : c())
                })), s("sliderFirstMove", (() => {
                    r.autoplay.running && (r.params.autoplay.disableOnInteraction ? c() : u())
                })), s("touchEnd", (() => {
                    r.params.cssMode && r.autoplay.paused && !r.params.autoplay.disableOnInteraction && o()
                })), s("destroy", (() => {
                    r.$el.off("mouseenter", f), r.$el.off("mouseleave", h), r.autoplay.running && c();
                    a().removeEventListener("visibilitychange", d)
                })), Object.assign(r.autoplay, {
                    pause: u,
                    run: o,
                    start: l,
                    stop: c
                })
            }
        }
    }
]);