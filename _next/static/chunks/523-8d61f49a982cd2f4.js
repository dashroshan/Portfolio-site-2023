(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [523], {
        4184: function(t, e) {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function o() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        var n = arguments[e];
                        if (n) {
                            var i = typeof n;
                            if ("string" === i || "number" === i) t.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var a = o.apply(null, n);
                                    a && t.push(a)
                                }
                            } else if ("object" === i)
                                if (n.toString === Object.prototype.toString)
                                    for (var s in n) r.call(n, s) && n[s] && t.push(s);
                                else t.push(n.toString())
                        }
                    }
                    return t.join(" ")
                }
                t.exports ? (o.default = o, t.exports = o) : void 0 === (n = function() {
                    return o
                }.apply(e, [])) || (t.exports = n)
            }()
        },
        7811: function(t, e) {
            "use strict";
            var n = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
                r = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,
                o = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,
                i = /\\([\u000b\u0020-\u00ff])/g,
                a = /([\\"])/g,
                s = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;

            function u(t) {
                var e = String(t);
                if (o.test(e)) return e;
                if (e.length > 0 && !r.test(e)) throw new TypeError("invalid parameter value");
                return '"' + e.replace(a, "\\$1") + '"'
            }

            function l(t) {
                this.parameters = Object.create(null), this.type = t
            }
            e.Q = function(t) {
                if (!t) throw new TypeError("argument string is required");
                var e = "object" === typeof t ? function(t) {
                    var e;
                    "function" === typeof t.getHeader ? e = t.getHeader("content-type") : "object" === typeof t.headers && (e = t.headers && t.headers["content-type"]);
                    if ("string" !== typeof e) throw new TypeError("content-type header is missing from object");
                    return e
                }(t) : t;
                if ("string" !== typeof e) throw new TypeError("argument string is required to be a string");
                var r = e.indexOf(";"),
                    o = -1 !== r ? e.substr(0, r).trim() : e.trim();
                if (!s.test(o)) throw new TypeError("invalid media type");
                var a = new l(o.toLowerCase());
                if (-1 !== r) {
                    var u, c, f;
                    for (n.lastIndex = r; c = n.exec(e);) {
                        if (c.index !== r) throw new TypeError("invalid parameter format");
                        r += c[0].length, u = c[1].toLowerCase(), '"' === (f = c[2])[0] && (f = f.substr(1, f.length - 2).replace(i, "$1")), a.parameters[u] = f
                    }
                    if (r !== e.length) throw new TypeError("invalid parameter format")
                }
                return a
            }
        },
        1129: function(t, e, n) {
            t.exports = function(t) {
                var e = {};

                function n(r) {
                    if (e[r]) return e[r].exports;
                    var o = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = t, n.c = e, n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var o in t) n.d(r, o, function(e) {
                            return t[e]
                        }.bind(null, o));
                    return r
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return n.d(e, "a", e), e
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, n.p = "", n(n.s = 2)
            }([function(t, e) {
                t.exports = n(7294)
            }, function(t, e) {
                t.exports = n(5697)
            }, function(t, e, n) {
                "use strict";
                n.r(e);
                var r = "fslightbox-",
                    o = "".concat(r, "styles"),
                    i = "".concat(r, "cursor-grabbing"),
                    a = "".concat(r, "full-dimension"),
                    s = "".concat(r, "flex-centered"),
                    u = "".concat(r, "open"),
                    l = "".concat(r, "transform-transition"),
                    c = "".concat(r, "absoluted"),
                    f = "".concat(r, "fade-in"),
                    d = "".concat(r, "fade-out"),
                    p = f + "-strong",
                    v = d + "-strong",
                    h = "".concat(r, "opacity-1"),
                    m = "".concat(r, "source"),
                    g = "".concat(m, "-inner");

                function y() {
                    var t = document.createElement("style");
                    t.className = o, t.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px!important;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-previous-container{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-previous-container{padding-left:3px}}.fslightbox-slide-btn-next-container{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-next-container{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-next-container{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader .fslightbox-loader-child-1{animation-delay:-.45s}.fslightbox-loader .fslightbox-loader-child-2{animation-delay:-.3s}.fslightbox-loader .fslightbox-loader-child-3{animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0;transform:translateZ(0);margin:auto;backface-visibility:hidden}")), document.head.appendChild(t)
                }

                function b(t) {
                    return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }
                "object" === ("undefined" == typeof document ? "undefined" : b(document)) && y();
                var x = n(0),
                    S = n.n(x),
                    w = n(1),
                    E = n.n(w),
                    A = function(t) {
                        var e = t.size,
                            n = t.viewBox,
                            o = t.d;
                        return S.a.createElement("svg", {
                            width: e,
                            height: e,
                            viewBox: n,
                            xmlns: "http://www.w3.org/2000/svg"
                        }, S.a.createElement("path", {
                            className: "".concat(r, "svg-path"),
                            d: o
                        }))
                    },
                    C = function(t) {
                        var e = t.onClick,
                            n = t.viewBox,
                            o = t.size,
                            i = t.d,
                            a = t.title;
                        return S.a.createElement("div", {
                            onClick: e,
                            className: "".concat(r, "toolbar-button ").concat(s),
                            title: a
                        }, S.a.createElement(A, {
                            viewBox: n,
                            size: o,
                            d: i
                        }))
                    };

                function P(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }
                var T = function(t) {
                        var e = t.fsLightbox,
                            n = e.componentsServices.toolbarButtons.fullscreen,
                            r = e.core.fullscreenToggler,
                            o = r.enterFullscreen,
                            i = r.exitFullscreen,
                            a = function(t, e) {
                                return function(t) {
                                    if (Array.isArray(t)) return t
                                }(t) || function(t, e) {
                                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                                        var n = [],
                                            r = !0,
                                            o = !1,
                                            i = void 0;
                                        try {
                                            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                                        } catch (t) {
                                            o = !0, i = t
                                        } finally {
                                            try {
                                                r || null == s.return || s.return()
                                            } finally {
                                                if (o) throw i
                                            }
                                        }
                                        return n
                                    }
                                }(t, e) || function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return P(t, e);
                                        var n = Object.prototype.toString.call(t).slice(8, -1);
                                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P(t, e) : void 0
                                    }
                                }(t, e) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }(Object(x.useState)(!1), 2),
                            s = a[0],
                            u = a[1];
                        return n.get = function() {
                            return s
                        }, n.set = u, S.a.createElement(C, {
                            onClick: function() {
                                s ? i() : o()
                            },
                            viewBox: s ? "0 0 950 1024" : "0 0 18 18",
                            size: s ? "24px" : "20px",
                            d: s ? "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z" : "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                            title: s ? "Exit fullscreen" : "Enter fullscreen"
                        })
                    },
                    O = function(t) {
                        var e = t.fsLightbox.core.lightboxCloser.closeLightbox;
                        return S.a.createElement(C, {
                            onClick: e,
                            viewBox: "0 0 24 24",
                            size: "20px",
                            d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",
                            title: "Close"
                        })
                    },
                    R = function(t) {
                        var e = t.fsLightbox;
                        return S.a.createElement("div", {
                            className: "".concat(r, "toolbar")
                        }, S.a.createElement(T, {
                            fsLightbox: e
                        }), S.a.createElement(O, {
                            fsLightbox: e
                        }))
                    };

                function L(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }
                var j = function(t) {
                        var e = t.fsLightbox,
                            n = e.componentsServices,
                            o = e.props.sources,
                            i = e.stageIndexes,
                            a = function(t, e) {
                                return function(t) {
                                    if (Array.isArray(t)) return t
                                }(t) || function(t, e) {
                                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                                        var n = [],
                                            r = !0,
                                            o = !1,
                                            i = void 0;
                                        try {
                                            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                                        } catch (t) {
                                            o = !0, i = t
                                        } finally {
                                            try {
                                                r || null == s.return || s.return()
                                            } finally {
                                                if (o) throw i
                                            }
                                        }
                                        return n
                                    }
                                }(t, e) || function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return L(t, e);
                                        var n = Object.prototype.toString.call(t).slice(8, -1);
                                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? L(t, e) : void 0
                                    }
                                }(t, e) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }(Object(x.useState)(i.current + 1), 2),
                            s = a[0],
                            u = a[1];
                        n.setSlideNumber = function(t) {
                            u(t)
                        };
                        var l = S.a.createRef(),
                            c = S.a.createRef();
                        return Object(x.useEffect)((function() {
                            c.current.offsetWidth > 55 && (l.current.style.justifyContent = "flex-start")
                        }), []), S.a.createElement("div", {
                            ref: l,
                            className: "".concat(r, "slide-number-container")
                        }, S.a.createElement("div", {
                            ref: c,
                            className: "fslightbox-flex-centered"
                        }, S.a.createElement("span", null, s), S.a.createElement("span", {
                            className: "".concat(r, "slash")
                        }), S.a.createElement("span", null, o.length)))
                    },
                    k = function(t) {
                        var e = t.fsLightbox;
                        return S.a.createElement("div", {
                            className: "".concat(r, "nav")
                        }, S.a.createElement(R, {
                            fsLightbox: e
                        }), e.props.sources.length > 1 && S.a.createElement(j, {
                            fsLightbox: e
                        }))
                    },
                    M = function() {
                        return S.a.createElement("div", {
                            className: "".concat(r, "loader")
                        }, S.a.createElement("div", {
                            className: "".concat(r, "loader-child-1")
                        }), S.a.createElement("div", {
                            className: "".concat(r, "loader-child-2")
                        }), S.a.createElement("div", {
                            className: "".concat(r, "loader-child-3")
                        }), S.a.createElement("div", {
                            className: "".concat(r, "loader-child-4")
                        }))
                    };

                function V(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }
                var I = function(t) {
                    var e = t.fsLightbox,
                        n = e.componentsServices.updateSourceDirectWrapperCollection,
                        r = e.core.stageManager.isSourceInStage,
                        o = e.elements,
                        i = o.sourcesComponents,
                        a = o.sourceAnimationWrappers,
                        s = e.props.loadOnlyCurrentSource,
                        u = e.stageIndexes.current,
                        l = t.i,
                        c = function(t, e) {
                            return function(t) {
                                if (Array.isArray(t)) return t
                            }(t) || function(t, e) {
                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                                    var n = [],
                                        r = !0,
                                        o = !1,
                                        i = void 0;
                                    try {
                                        for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                                    } catch (t) {
                                        o = !0, i = t
                                    } finally {
                                        try {
                                            r || null == s.return || s.return()
                                        } finally {
                                            if (o) throw i
                                        }
                                    }
                                    return n
                                }
                            }(t, e) || function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return V(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? V(t, e) : void 0
                                }
                            }(t, e) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }(Object(x.useState)(!1), 2),
                        f = c[0],
                        d = c[1];
                    return n[l] = function() {
                        d(!f)
                    }, S.a.createElement("div", {
                        ref: a[l],
                        className: g
                    }, l === u || !s && r(l) ? i[l] : null)
                };

                function F(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }
                var D = function(t) {
                        var e = t.fsLightbox,
                            n = t.i,
                            r = e.componentsServices.hideSourceLoaderCollection,
                            o = e.elements.sourceMainWrappers,
                            i = function(t, e) {
                                return function(t) {
                                    if (Array.isArray(t)) return t
                                }(t) || function(t, e) {
                                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                                        var n = [],
                                            r = !0,
                                            o = !1,
                                            i = void 0;
                                        try {
                                            for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                                        } catch (t) {
                                            o = !0, i = t
                                        } finally {
                                            try {
                                                r || null == s.return || s.return()
                                            } finally {
                                                if (o) throw i
                                            }
                                        }
                                        return n
                                    }
                                }(t, e) || function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return F(t, e);
                                        var n = Object.prototype.toString.call(t).slice(8, -1);
                                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? F(t, e) : void 0
                                    }
                                }(t, e) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }(Object(x.useState)(!1), 2),
                            u = i[0],
                            l = i[1];
                        return r[n] = function() {
                            return l(!0)
                        }, S.a.createElement("div", {
                            ref: o[n],
                            className: "".concat(c, " ").concat(a, " ").concat(s)
                        }, !u && S.a.createElement(M, null), S.a.createElement(I, {
                            fsLightbox: e,
                            i: n
                        }))
                    },
                    N = function(t) {
                        for (var e = t.fsLightbox, n = e.core.slideSwipingDown.listener, r = e.elements.sourceMainWrappersWrapper, o = e.props.sources, i = [], s = 0; s < o.length; s++) i.push(S.a.createElement(D, {
                            fsLightbox: e,
                            i: s,
                            key: s
                        }));
                        return S.a.createElement("div", {
                            className: "".concat(c, " ").concat(a),
                            ref: r,
                            onMouseDown: n,
                            onTouchStart: n
                        }, i)
                    };

                function _(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }
                var U = function(t) {
                    var e = t.fsLightbox.componentsServices,
                        n = function(t, e) {
                            return function(t) {
                                if (Array.isArray(t)) return t
                            }(t) || function(t, e) {
                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                                    var n = [],
                                        r = !0,
                                        o = !1,
                                        i = void 0;
                                    try {
                                        for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                                    } catch (t) {
                                        o = !0, i = t
                                    } finally {
                                        try {
                                            r || null == s.return || s.return()
                                        } finally {
                                            if (o) throw i
                                        }
                                    }
                                    return n
                                }
                            }(t, e) || function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return _(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(t, e) : void 0
                                }
                            }(t, e) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }(Object(x.useState)(!1), 2),
                        o = n[0],
                        i = n[1];
                    return e.showSlideSwipingHovererIfNotYet = function() {
                        o || i(!0)
                    }, e.hideSlideSwipingHovererIfShown = function() {
                        o && i(!1)
                    }, o && S.a.createElement("div", {
                        className: "".concat(r, "slide-swiping-hoverer ").concat(a, " ").concat(c)
                    })
                };

                function z(t) {
                    var e = t.core.lightboxOpener,
                        n = t.data,
                        r = t.props.openOnMount;
                    document.getElementsByClassName(o).length || y(), n.scrollbarWidth = function(t) {
                        var e = t.props.disableLocalStorage;
                        if (!e) {
                            var n = localStorage.getItem("fslightbox-scrollbar-width");
                            if (n) return n
                        }
                        var r = function() {
                                var t = document.createElement("div"),
                                    e = t.style;
                                return e.visibility = "hidden", e.width = "100px", e.msOverflowStyle = "scrollbar", e.overflow = "scroll", t
                            }(),
                            o = function() {
                                var t = document.createElement("div");
                                return t.style.width = "100%", t
                            }();
                        document.body.appendChild(r);
                        var i = r.offsetWidth;
                        r.appendChild(o);
                        var a = o.offsetWidth;
                        document.body.removeChild(r);
                        var s = i - a;
                        return e || localStorage.setItem("fslightbox-scrollbar-width", s.toString()), s
                    }(t), r && e.initializeAndOpenLightbox()
                }
                var B = function(t) {
                    var e = t.onClick,
                        n = t.name,
                        o = t.d,
                        i = n.charAt(0).toUpperCase() + n.slice(1),
                        a = "".concat(r, "slide-btn");
                    return S.a.createElement("div", {
                        onClick: e,
                        title: "".concat(i, " slide"),
                        className: "".concat(a, "-container ").concat(a, "-").concat(n, "-container")
                    }, S.a.createElement("div", {
                        className: "".concat(a, " ").concat(s)
                    }, S.a.createElement(A, {
                        viewBox: "0 0 20 20",
                        size: "20px",
                        d: o
                    })))
                };

                function W(t) {
                    var e = t.componentsServices.isLightboxOpenManager,
                        n = t.core,
                        r = n.lightboxCloser,
                        o = n.lightboxOpener,
                        i = n.slideIndexChanger,
                        a = t.data,
                        s = t.stageIndexes;
                    this.runTogglerUpdateActions = function() {
                        e.get() ? r.closeLightbox() : a.isInitialized ? o.openLightbox() : o.initializeAndOpenLightbox()
                    }, this.runCurrentStageIndexUpdateActionsFor = function(t) {
                        t !== s.current && (e.get() ? i.jumpTo(t) : s.current = t)
                    }
                }

                function H(t) {
                    var e = t.core.lightboxUpdater,
                        n = (0, t.resolve)(W);
                    e.handleUpdate = function(e) {
                        var r = t.props;
                        void 0 !== r.source ? n.runCurrentStageIndexUpdateActionsFor(r.sources.indexOf(r.source)) : void 0 !== r.sourceIndex ? n.runCurrentStageIndexUpdateActionsFor(r.sourceIndex) : void 0 !== r.slide && n.runCurrentStageIndexUpdateActionsFor(r.slide - 1), e.toggler !== r.toggler && n.runTogglerUpdateActions()
                    }
                }

                function q(t) {
                    var e, n = t.props,
                        r = 0,
                        o = {};
                    this.getSourceTypeFromLocalStorageByUrl = function(t) {
                        return e[t] ? e[t] : i(t)
                    }, this.handleReceivedSourceTypeForUrl = function(t, n) {
                        !1 === o[n] && (r--, "invalid" !== t ? o[n] = t : delete o[n], 0 === r && (function(t, e) {
                            for (var n in e) t[n] = e[n]
                        }(e, o), localStorage.setItem("fslightbox-types", JSON.stringify(e))))
                    };
                    var i = function(t) {
                        r++, o[t] = !1
                    };
                    n.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function() {}, this.handleReceivedSourceTypeForUrl = function() {}) : (e = JSON.parse(localStorage.getItem("fslightbox-types"))) || (e = {}, this.getSourceTypeFromLocalStorageByUrl = i)
                }

                function X() {
                    return (X = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(this, arguments)
                }
                var $ = function(t) {
                    var e = t.fsLightbox,
                        n = e.collections.sourceLoadHandlers,
                        r = e.elements.sources,
                        o = e.props,
                        i = o.customAttributes,
                        a = o.sources,
                        s = t.i;
                    return S.a.createElement("img", X({
                        onLoad: n[s].handleImageLoad,
                        className: m,
                        ref: r[s],
                        src: a[s]
                    }, i && i[s] ? i[s] : {}))
                };

                function Y() {
                    return (Y = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(this, arguments)
                }
                var G = function(t) {
                    var e = t.fsLightbox,
                        n = e.collections.sourceLoadHandlers,
                        o = e.elements.sources,
                        i = e.props,
                        a = i.customAttributes,
                        s = i.sources,
                        u = e.timeout,
                        l = t.i;
                    return u(n[l].handleNotMetaDatedVideoLoad, 3e3), S.a.createElement("video", Y({
                        onLoadedMetadata: n[l].handleVideoLoad,
                        className: "".concat(m, " ").concat(r, "video"),
                        controls: !0,
                        ref: o[l]
                    }, a && a[l] ? a[l] : {}), S.a.createElement("source", {
                        src: s[l]
                    }))
                };

                function Z() {
                    return (Z = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(this, arguments)
                }
                var K = function(t) {
                        var e, n = t.fsLightbox,
                            o = n.elements.sources,
                            i = n.collections.sourceLoadHandlers,
                            a = n.props,
                            s = a.customAttributes,
                            u = a.sources,
                            l = t.i;
                        return Object(x.useEffect)(i[l].handleYoutubeLoad), S.a.createElement("iframe", Z({
                            ref: o[l],
                            className: "".concat(m, " ").concat(r, "youtube-iframe"),
                            src: "https://www.youtube.com/embed/".concat((e = u[l], e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2])),
                            allowFullScreen: !0
                        }, s && s[l] ? s[l] : {}))
                    },
                    Q = function(t) {
                        var e = t.fsLightbox,
                            n = e.componentsServices.hideSourceLoaderCollection,
                            o = e.elements.sourceMainWrappers,
                            i = t.i;
                        return Object(x.useEffect)((function() {
                            n[i](), o[i].current.classList.add(p)
                        })), S.a.createElement("div", {
                            className: "".concat(r, "invalid-file-wrapper ").concat(s)
                        }, "Invalid source")
                    },
                    J = function(t) {
                        var e = t.fsLightbox,
                            n = e.collections.sourceLoadHandlers,
                            r = e.elements.sources,
                            o = e.props.sources,
                            i = t.i;
                        Object(x.useEffect)(n[i].handleCustomLoad);
                        var a = o[i].props.className;
                        return S.a.cloneElement(o[i], {
                            ref: r[i],
                            className: a ? "".concat(a, " ").concat(m) : m
                        })
                    };

                function tt(t) {
                    var e = t.componentsServices,
                        n = e.isLightboxOpenManager,
                        r = e.updateSourceDirectWrapperCollection,
                        o = t.elements.sourcesComponents;
                    this.runActionsForSourceTypeAndIndex = function(e, i) {
                        var a;
                        switch (e) {
                            case "image":
                                a = $;
                                break;
                            case "video":
                                a = G;
                                break;
                            case "youtube":
                                a = K;
                                break;
                            case "custom":
                                a = J;
                                break;
                            default:
                                a = Q
                        }
                        o[i] = S.a.createElement(a, {
                            fsLightbox: t,
                            i: i
                        }), n.get() && r[i]()
                    }
                }

                function et() {
                    var t, e, n, r = function(t) {
                            var e = document.createElement("a");
                            return e.href = t, "www.youtube.com" === e.hostname
                        },
                        o = function(t) {
                            return t.slice(0, t.indexOf("/"))
                        };

                    function i() {
                        if (4 !== n.readyState) {
                            if (2 === n.readyState) {
                                var t;
                                switch (o(n.getResponseHeader("content-type"))) {
                                    case "image":
                                        t = "image";
                                        break;
                                    case "video":
                                        t = "video";
                                        break;
                                    default:
                                        t = "invalid"
                                }
                                n.onreadystatechange = null, n.abort(), e(t)
                            }
                        } else e("invalid")
                    }
                    this.setUrlToCheck = function(e) {
                        t = e
                    }, this.getSourceType = function(o) {
                        if (r(t)) return o("youtube");
                        e = o, (n = new XMLHttpRequest).onreadystatechange = i, n.open("GET", t, !0), n.send()
                    }
                }

                function nt(t, e, n) {
                    var r = t.props,
                        o = r.types,
                        i = r.type,
                        a = r.sources,
                        s = t.resolve;
                    this.getTypeSetByClientForIndex = function(t) {
                        var e;
                        return o && o[t] ? e = o[t] : i && (e = i), e
                    }, this.retrieveTypeWithXhrForIndex = function(t) {
                        var r = s(et);
                        r.setUrlToCheck(a[t]), r.getSourceType((function(r) {
                            e.handleReceivedSourceTypeForUrl(r, a[t]), n.runActionsForSourceTypeAndIndex(r, t)
                        }))
                    }
                }

                function rt(t, e) {
                    var n = t.current.classList;
                    n.contains(e) && n.remove(e)
                }

                function ot(t) {
                    var e = t.core,
                        n = e.lightboxCloser,
                        r = e.fullscreenToggler,
                        o = e.slideChangeFacade;
                    this.listener = function(t) {
                        switch (t.key) {
                            case "Escape":
                                n.closeLightbox();
                                break;
                            case "ArrowLeft":
                                o.changeToPrevious();
                                break;
                            case "ArrowRight":
                                o.changeToNext();
                                break;
                            case "F11":
                                t.preventDefault(), r.enterFullscreen()
                        }
                    }
                }

                function it(t) {
                    return t.touches ? t.touches[0].screenX : t.screenX
                }

                function at(t) {
                    var e = t.collections.sourceMainWrapperTransformers,
                        n = t.componentsServices,
                        r = t.elements.container,
                        o = t.slideSwipingProps,
                        a = t.stageIndexes;
                    this.runActionsForEvent = function(t) {
                        n.showSlideSwipingHovererIfNotYet(), r.current.classList.add(i), o.swipedX = it(t) - o.downScreenX, s(a.current, "zero"), void 0 !== a.previous && o.swipedX > 0 ? s(a.previous, "negative") : void 0 !== a.next && o.swipedX < 0 && s(a.next, "positive")
                    };
                    var s = function(t, n) {
                        e[t].byValue(o.swipedX)[n]()
                    }
                }

                function st(t) {
                    var e, n = t.props.sources,
                        r = t.resolve,
                        o = t.slideSwipingProps,
                        i = r(at),
                        a = (e = !1, function() {
                            return !e && (e = !0, requestAnimationFrame((function() {
                                e = !1
                            })), !0)
                        });
                    1 === n.length ? this.listener = function() {
                        o.swipedX = 1
                    } : this.listener = function(t) {
                        o.isSwiping && a() && i.runActionsForEvent(t)
                    }
                }

                function ut(t) {
                    var e = t.collections.sourceMainWrapperTransformers,
                        n = t.core.slideIndexChanger,
                        r = t.elements.sourceMainWrappers,
                        o = t.stageIndexes;
                    this.runPositiveSwipedXActions = function() {
                        void 0 === o.previous || (i("positive"), n.changeTo(o.previous)), i("zero")
                    }, this.runNegativeSwipedXActions = function() {
                        void 0 === o.next || (i("negative"), n.changeTo(o.next)), i("zero")
                    };
                    var i = function(t) {
                        r[o.current].current.classList.add(l), e[o.current][t]()
                    }
                }

                function lt(t) {
                    var e = t.componentsServices,
                        n = t.core.lightboxCloser,
                        r = t.elements.container,
                        o = t.resolve,
                        a = t.slideSwipingProps,
                        s = o(ut);
                    this.runNoSwipeActions = function() {
                        e.hideSlideSwipingHovererIfShown(), a.isSourceDownEventTarget || n.closeLightbox(), a.isSwiping = !1
                    }, this.runActions = function() {
                        a.swipedX > 0 ? s.runPositiveSwipedXActions() : s.runNegativeSwipedXActions(), e.hideSlideSwipingHovererIfShown(), r.current.classList.remove(i), a.isSwiping = !1
                    }
                }

                function ct(t) {
                    var e = t.resolve,
                        n = t.slideSwipingProps,
                        r = e(lt);
                    this.listener = function() {
                        n.isSwiping && (n.swipedX ? r.runActions() : r.runNoSwipeActions())
                    }
                }

                function ft(t) {
                    return !t.touches || t.touches.length <= 1
                }

                function dt(t) {
                    var e = t.core.classFacade,
                        n = t.elements.sources,
                        r = t.slideSwipingProps,
                        o = t.stageIndexes;
                    this.runActions = function(t) {
                        "VIDEO" === t.target.tagName || t.touches || t.preventDefault(), r.isSwiping = !0, r.downScreenX = it(t), r.swipedX = 0;
                        var i = n[o.current].current;
                        i && i.contains(t.target) ? r.isSourceDownEventTarget = !0 : r.isSourceDownEventTarget = !1, e.removeFromEachElementClassIfContains("sourceMainWrappers", l)
                    }
                }

                function pt(t) {
                    for (var e = t.props.sources, n = [], r = 0; r < e.length; r++) n.push(S.a.createRef());
                    return n
                }

                function vt(t, e, n) {
                    for (var r = 0; r < t.props.sources.length; r++) t.collections[e][r] = t.resolve(n, [r])
                }

                function ht(t, e) {
                    var n = this,
                        r = t.elements.sourceMainWrappers,
                        o = t.props.slideDistance + 1,
                        i = 0;
                    this.byValue = function(t) {
                        return i = t, n
                    }, this.negative = function() {
                        a(-s())
                    }, this.zero = function() {
                        a(0)
                    }, this.positive = function() {
                        a(s())
                    };
                    var a = function(t) {
                            r[e].current.style.transform = "translateX(".concat(t + i, "px)"), i = 0
                        },
                        s = function() {
                            return o * innerWidth
                        }
                }

                function mt(t, e, n, r) {
                    var o = t.data,
                        i = t.elements.sources,
                        a = n / r,
                        s = 0;
                    this.adjustSize = function() {
                        if ((s = o.maxSourceWidth / a) < o.maxSourceHeight) return n < o.maxSourceWidth && (s = r), u();
                        s = r > o.maxSourceHeight ? o.maxSourceHeight : r, u()
                    };
                    var u = function() {
                        var t = i[e].current.style;
                        t.width = s * a + "px", t.height = s + "px"
                    }
                }

                function gt(t, e) {
                    var n = this,
                        r = t.collections.sourceSizers,
                        o = t.componentsServices.hideSourceLoaderCollection,
                        i = t.elements,
                        a = i.sourceAnimationWrappers,
                        s = i.sources,
                        u = t.resolve;

                    function l(t, n) {
                        r[e] = u(mt, [e, t, n]), r[e].adjustSize()
                    }
                    this.runActions = function(t, r) {
                        s[e].current.classList.add(h), a[e].current.classList.add(p), o[e](), l(t, r), n.runActions = l
                    }
                }

                function yt(t, e) {
                    var n, r = this,
                        o = t.elements.sources,
                        i = t.props,
                        a = t.resolve,
                        s = t.timeout,
                        u = a(gt, [e]);
                    this.handleImageLoad = function(t) {
                        var e = t.target,
                            n = e.naturalWidth,
                            r = e.naturalHeight;
                        u.runActions(n, r)
                    }, this.handleVideoLoad = function(t) {
                        var e = t.target,
                            r = e.videoWidth,
                            o = e.videoHeight;
                        n = !0, u.runActions(r, o)
                    }, this.handleNotMetaDatedVideoLoad = function() {
                        n || r.handleYoutubeLoad()
                    }, this.handleYoutubeLoad = function() {
                        var t = 1920,
                            e = 1080;
                        i.maxYoutubeVideoDimensions && (t = i.maxYoutubeVideoDimensions.width, e = i.maxYoutubeVideoDimensions.height), u.runActions(t, e)
                    }, this.handleCustomLoad = function() {
                        s((function() {
                            var t = o[e].current;
                            u.runActions(t.offsetWidth, t.offsetHeight)
                        }))
                    }
                }

                function bt(t) {
                    var e = t.componentsServices.isLightboxOpenManager,
                        n = t.core,
                        r = n.eventsDispatcher,
                        o = n.lightboxOpener,
                        i = n.lightboxOpenActioner,
                        a = t.data,
                        s = t.elements;
                    o.openLightbox = function() {
                        r.dispatch("onShow"), vt(t, "sourceLoadHandlers", yt), e.set(!0, i.runInitializedLightboxActions)
                    }, o.initializeAndOpenLightbox = function() {
                        a.isInitialized = !0, s.sourceAnimationWrappers = pt(t), s.sourceMainWrappers = pt(t), s.sources = pt(t), vt(t, "sourceLoadHandlers", yt), vt(t, "sourceMainWrapperTransformers", ht),
                            function(t) {
                                var e, n, r;
                                n = (e = t).core.classFacade, r = e.elements, n.removeFromEachElementClassIfContains = function(t, e) {
                                        for (var n = 0; n < r[t].length; n++) rt(r[t][n], e)
                                    },
                                    function(t) {
                                        var e = t.core.eventsDispatcher,
                                            n = t.props;
                                        e.dispatch = function(t) {
                                            n[t] && n[t]()
                                        }
                                    }(t),
                                    function(t) {
                                        var e = t.componentsServices.toolbarButtons.fullscreen,
                                            n = t.core.fullscreenToggler;
                                        n.enterFullscreen = function() {
                                            e.set(!0);
                                            var t = document.documentElement;
                                            t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen()
                                        }, n.exitFullscreen = function() {
                                            e.set(!1), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                                        }
                                    }(t),
                                    function(t) {
                                        var e, n = t.core,
                                            r = n.globalEventsController,
                                            o = n.windowResizeActioner,
                                            i = t.resolve,
                                            a = i(ot),
                                            s = i(st),
                                            u = i(ct);
                                        r.attachListeners = function() {
                                            e = function(t, e) {
                                                return function() {
                                                    e.apply(void 0, arguments) && t.apply(void 0, arguments)
                                                }
                                            }(s.listener, ft), document.addEventListener("mousemove", s.listener), document.addEventListener("touchmove", e, {
                                                passive: !0
                                            }), document.addEventListener("mouseup", u.listener), document.addEventListener("touchend", u.listener, {
                                                passive: !0
                                            }), addEventListener("resize", o.runActions), document.addEventListener("keydown", a.listener)
                                        }, r.removeListeners = function() {
                                            document.removeEventListener("mousemove", s.listener), document.removeEventListener("touchmove", e), document.removeEventListener("mouseup", u.listener), document.removeEventListener("touchend", u.listener), removeEventListener("resize", o.runActions), document.removeEventListener("keydown", a.listener)
                                        }
                                    }(t),
                                    function(t) {
                                        var e = t.core,
                                            n = e.lightboxCloser,
                                            r = e.lightboxCloseActioner;
                                        n.closeLightbox = function() {
                                            r.isLightboxFadingOut || r.runActions()
                                        }
                                    }(t),
                                    function(t) {
                                        var e = t.componentsServices,
                                            n = e.toolbarButtons.fullscreen,
                                            r = e.isLightboxOpenManager,
                                            o = t.core,
                                            i = o.eventsDispatcher,
                                            a = o.fullscreenToggler,
                                            s = o.globalEventsController,
                                            l = o.lightboxCloseActioner,
                                            c = o.scrollbarRecompensor,
                                            f = t.elements.container,
                                            d = t.props,
                                            p = t.slideSwipingProps,
                                            h = t.timeout;
                                        l.isLightboxFadingOut = !1, l.runActions = function() {
                                            l.isLightboxFadingOut = !0, f.current.classList.add(v), s.removeListeners(), d.exitFullscreenOnClose && n.get() && a.exitFullscreen(), h((function() {
                                                l.isLightboxFadingOut = !1, p.isSwiping = !1, f.current.classList.remove(v), document.documentElement.classList.remove(u), c.removeRecompense(), r.set(!1), i.dispatch("onClose")
                                            }), 250)
                                        }
                                    }(t), bt(t),
                                    function(t) {
                                        var e = t.collections.sourceMainWrapperTransformers,
                                            n = t.core,
                                            r = n.eventsDispatcher,
                                            o = n.lightboxOpenActioner,
                                            i = n.globalEventsController,
                                            a = n.scrollbarRecompensor,
                                            s = n.sourceDisplayFacade,
                                            l = n.stageManager,
                                            c = n.windowResizeActioner,
                                            f = t.stageIndexes;
                                        o.runInitializedLightboxActions = function() {
                                            l.updateStageIndexes(), s.displaySourcesWhichShouldBeDisplayed(), document.documentElement.classList.add(u), a.addRecompense(), i.attachListeners(), c.runActions(), e[f.current].zero(), r.dispatch("onOpen")
                                        }
                                    }(t), H(t),
                                    function(t) {
                                        var e = t.data,
                                            n = t.core.scrollbarRecompensor;
                                        n.addRecompense = function() {
                                            "complete" === document.readyState ? r() : window.addEventListener("load", (function() {
                                                r(), n.addRecompense = r
                                            }))
                                        };
                                        var r = function() {
                                            document.body.offsetHeight > window.innerHeight && (document.body.style.marginRight = e.scrollbarWidth + "px")
                                        };
                                        n.removeRecompense = function() {
                                            document.body.style.removeProperty("margin-right")
                                        }
                                    }(t),
                                    function(t) {
                                        var e = t.core,
                                            n = e.slideChangeFacade,
                                            r = e.slideIndexChanger,
                                            o = e.stageManager;
                                        t.props.sources.length > 1 ? (n.changeToPrevious = function() {
                                            r.jumpTo(o.getPreviousSlideIndex())
                                        }, n.changeToNext = function() {
                                            r.jumpTo(o.getNextSlideIndex())
                                        }) : (n.changeToPrevious = function() {}, n.changeToNext = function() {})
                                    }(t),
                                    function(t) {
                                        var e = t.collections.sourceMainWrapperTransformers,
                                            n = t.componentsServices,
                                            r = t.core,
                                            o = r.classFacade,
                                            i = r.slideIndexChanger,
                                            a = r.sourceDisplayFacade,
                                            s = r.stageManager,
                                            u = t.elements.sourceAnimationWrappers,
                                            c = t.getQueuedAction,
                                            v = t.stageIndexes,
                                            h = t.timeout,
                                            m = c((function() {
                                                o.removeFromEachElementClassIfContains("sourceAnimationWrappers", d)
                                            }), 250);
                                        i.changeTo = function(t) {
                                            v.current = t, s.updateStageIndexes(), n.setSlideNumber(t + 1), a.displaySourcesWhichShouldBeDisplayed()
                                        }, i.jumpTo = function(t) {
                                            var n = v.current;
                                            i.changeTo(t), o.removeFromEachElementClassIfContains("sourceMainWrappers", l), rt(u[n], p), rt(u[n], f), u[n].current.classList.add(d), rt(u[t], p), rt(u[t], d), u[t].current.classList.add(f), m(), e[t].zero(), h((function() {
                                                n !== v.current && e[n].negative()
                                            }), 220)
                                        }
                                    }(t),
                                    function(t) {
                                        var e = t.core.slideSwipingDown,
                                            n = t.resolve,
                                            r = t.slideSwipingProps,
                                            o = n(dt);
                                        e.listener = function(t) {
                                            t.touches && t.touches.length > 1 ? r.isSwiping = !1 : o.runActions(t)
                                        }
                                    }(t),
                                    function(t) {
                                        var e = t.core.sourceDisplayFacade,
                                            n = t.componentsServices.updateSourceDirectWrapperCollection,
                                            r = t.stageIndexes,
                                            o = t.props.loadOnlyCurrentSource;
                                        e.displaySourcesWhichShouldBeDisplayed = function() {
                                            if (o) n[r.current]();
                                            else
                                                for (var t in r) void 0 !== r[t] && n[r[t]]()
                                        }
                                    }(t),
                                    function(t) {
                                        var e = t.core.stageManager,
                                            n = t.props.sources,
                                            r = t.stageIndexes,
                                            o = n.length - 1;
                                        e.getPreviousSlideIndex = function() {
                                            return 0 === r.current ? o : r.current - 1
                                        }, e.getNextSlideIndex = function() {
                                            return r.current === o ? 0 : r.current + 1
                                        }, e.updateStageIndexes = 0 === o ? function() {} : 1 === o ? function() {
                                            0 === r.current ? (r.next = 1, delete r.previous) : (r.previous = 0, delete r.next)
                                        } : function() {
                                            r.previous = e.getPreviousSlideIndex(), r.next = e.getNextSlideIndex()
                                        }, e.isSourceInStage = o <= 2 ? function() {
                                            return !0
                                        } : function(t) {
                                            var e = r.current;
                                            if (0 === e && t === o || e === o && 0 === t) return !0;
                                            var n = e - t;
                                            return -1 === n || 0 === n || 1 === n
                                        }
                                    }(t),
                                    function(t) {
                                        var e = t.collections,
                                            n = e.sourceMainWrapperTransformers,
                                            r = e.sourceSizers,
                                            o = t.core.windowResizeActioner,
                                            i = t.data,
                                            a = t.elements,
                                            s = a.sources,
                                            u = a.sourceMainWrappers,
                                            c = t.stageIndexes;
                                        o.runActions = function() {
                                            innerWidth < 992 ? i.maxSourceWidth = innerWidth : i.maxSourceWidth = .9 * innerWidth, i.maxSourceHeight = .9 * innerHeight;
                                            for (var t = 0; t < s.length; t++) rt(u[t], l), t !== c.current && n[t].negative(), r[t] && s[t].current && r[t].adjustSize()
                                        }
                                    }(t)
                            }(t), r.dispatch("onInit"), e.set(!0, (function() {
                                i.runInitializedLightboxActions(),
                                    function(t) {
                                        for (var e = t.props.sources, n = t.resolve, r = n(q), o = n(tt), i = n(nt, [r, o]), a = 0; a < e.length; a++)
                                            if ("string" == typeof e[a]) {
                                                var s = i.getTypeSetByClientForIndex(a);
                                                if (s) o.runActionsForSourceTypeAndIndex(s, a);
                                                else {
                                                    var u = r.getSourceTypeFromLocalStorageByUrl(e[a]);
                                                    u ? o.runActionsForSourceTypeAndIndex(u, a) : i.retrieveTypeWithXhrForIndex(a)
                                                }
                                            } else o.runActionsForSourceTypeAndIndex("custom", a)
                                    }(t)
                            }))
                    }
                }

                function xt(t) {
                    return (xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function St(t, e, n) {
                    return (St = Ot() ? Reflect.construct : function(t, e, n) {
                        var r = [null];
                        r.push.apply(r, e);
                        var o = new(Function.bind.apply(t, r));
                        return n && Ct(o, n.prototype), o
                    }).apply(null, arguments)
                }

                function wt(t) {
                    return function(t) {
                        if (Array.isArray(t)) return Et(t)
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                    }(t) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return Et(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Et(t, e) : void 0
                        }
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function Et(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }

                function At(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                function Ct(t, e) {
                    return (Ct = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    })(t, e)
                }

                function Pt(t, e) {
                    return !e || "object" !== xt(e) && "function" != typeof e ? Tt(t) : e
                }

                function Tt(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }

                function Ot() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }

                function Rt(t) {
                    return (Rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    })(t)
                }
                var Lt = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && Ct(t, e)
                    }(u, t);
                    var e, n, o, i, s = (e = u, n = Ot(), function() {
                        var t, r = Rt(e);
                        if (n) {
                            var o = Rt(this).constructor;
                            t = Reflect.construct(r, arguments, o)
                        } else t = r.apply(this, arguments);
                        return Pt(this, t)
                    });

                    function u(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, u), (e = s.call(this, t)).state = {
                            isOpen: !1
                        }, e.data = {
                            isInitialized: !1,
                            maxSourceWidth: 0,
                            maxSourceHeight: 0,
                            scrollbarWidth: 0
                        }, e.slideSwipingProps = {
                            isSwiping: !1,
                            downScreenX: null,
                            isSourceDownEventTarget: !1,
                            swipedX: 0
                        }, e.stageIndexes = {
                            current: 0
                        }, e.componentsServices = {
                            showSlideSwipingHovererIfNotYet: null,
                            hideSlideSwipingHovererIfShown: null,
                            setSlideNumber: null,
                            isSlideSwipingHovererShown: {},
                            isFullscreenOpen: {},
                            hideSourceLoaderCollection: [],
                            updateSourceDirectWrapperCollection: [],
                            toolbarButtons: {
                                fullscreen: {}
                            },
                            isLightboxOpenManager: {
                                get: function() {
                                    return e.state.isOpen
                                },
                                set: function(t, n) {
                                    e.setState({
                                        isOpen: t
                                    }, n)
                                }
                            }
                        }, e.elements = {
                            container: S.a.createRef(),
                            sourceMainWrappersWrapper: S.a.createRef(),
                            sources: null,
                            sourceMainWrappers: null,
                            sourceAnimationWrappers: null,
                            sourcesComponents: []
                        }, e.collections = {
                            sourceMainWrapperTransformers: [],
                            sourceLoadHandlers: [],
                            sourceSizers: [],
                            xhrs: []
                        }, e.core = {
                            classFacade: {},
                            eventsDispatcher: {},
                            fullscreenToggler: {},
                            globalEventsController: {},
                            lightboxCloser: {},
                            lightboxCloseActioner: {},
                            lightboxOpener: {},
                            lightboxOpenActioner: {},
                            lightboxUpdater: {},
                            scrollbarRecompensor: {},
                            slideChangeFacade: {},
                            slideIndexChanger: {},
                            slideSwipingDown: {},
                            sourceDisplayFacade: {},
                            stageManager: {},
                            windowResizeActioner: {}
                        }, e.getQueuedAction = e.getQueuedAction.bind(Tt(e)), e.resolve = e.resolve.bind(Tt(e)), e.timeout = e.timeout.bind(Tt(e)), H(Tt(e)), bt(Tt(e)), e
                    }
                    return o = u, (i = [{
                        key: "getQueuedAction",
                        value: function(t, e) {
                            var n = this,
                                r = [];
                            return function() {
                                r.push(!0), n.timeout((function() {
                                    r.pop(), r.length || t()
                                }), e)
                            }
                        }
                    }, {
                        key: "resolve",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.unshift(this), St(t, wt(e))
                        }
                    }, {
                        key: "timeout",
                        value: function(t, e) {
                            var n = this;
                            setTimeout((function() {
                                n.elements.container.current && t()
                            }), e)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(t, e, n) {
                            this.core.lightboxUpdater.handleUpdate(t)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            z(this)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            ! function(t) {
                                for (var e = t.collections.xhrs, n = t.componentsServices.isLightboxOpenManager, r = t.core.globalEventsController, o = 0; o < e.length; o++) e[o].abort();
                                n.get() && r.removeListeners()
                            }(this)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.isOpen ? S.a.createElement("div", {
                                ref: this.elements.container,
                                className: "".concat(r, "container ").concat(a, " ").concat(p)
                            }, S.a.createElement(U, {
                                fsLightbox: this
                            }), S.a.createElement(k, {
                                fsLightbox: this
                            }), this.props.sources.length > 1 ? S.a.createElement(S.a.Fragment, null, S.a.createElement(B, {
                                onClick: this.core.slideChangeFacade.changeToPrevious,
                                name: "previous",
                                d: "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"
                            }), S.a.createElement(B, {
                                onClick: this.core.slideChangeFacade.changeToNext,
                                name: "next",
                                d: "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"
                            })) : null, S.a.createElement(N, {
                                fsLightbox: this
                            })) : null
                        }
                    }]) && At(o.prototype, i), u
                }(x.Component);
                Lt.propTypes = {
                    toggler: E.a.bool,
                    sources: E.a.array,
                    slide: E.a.number,
                    source: E.a.string,
                    sourceIndex: E.a.number,
                    onOpen: E.a.func,
                    onClose: E.a.func,
                    onInit: E.a.func,
                    onShow: E.a.func,
                    disableLocalStorage: E.a.bool,
                    types: E.a.array,
                    type: E.a.string,
                    customAttributes: E.a.array,
                    maxYoutubeVideoDimensions: E.a.object,
                    exitFullscreenOnClose: E.a.bool,
                    loadOnlyCurrentSource: E.a.bool,
                    openOnMount: E.a.bool,
                    slideDistance: E.a.number
                }, Lt.defaultProps = {
                    slideDistance: .3
                }, e.default = Lt
            }])
        },
        6086: function(t) {
            "use strict";
            var e = Object.assign.bind(Object);
            t.exports = e, t.exports.default = t.exports
        },
        8357: function(t, e, n) {
            "use strict";
            n.d(e, {
                w_: function() {
                    return l
                }
            });
            var r = n(7294),
                o = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                i = r.createContext && r.createContext(o),
                a = function() {
                    return a = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }, a.apply(this, arguments)
                },
                s = function(t, e) {
                    var n = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                    if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                    }
                    return n
                };

            function u(t) {
                return t && t.map((function(t, e) {
                    return r.createElement(t.tag, a({
                        key: e
                    }, t.attr), u(t.child))
                }))
            }

            function l(t) {
                return function(e) {
                    return r.createElement(c, a({
                        attr: a({}, t.attr)
                    }, e), u(t.child))
                }
            }

            function c(t) {
                var e = function(e) {
                    var n, o = t.attr,
                        i = t.size,
                        u = t.title,
                        l = s(t, ["attr", "size", "title"]),
                        c = i || e.size || "1em";
                    return e.className && (n = e.className), t.className && (n = (n ? n + " " : "") + t.className), r.createElement("svg", a({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, e.attr, o, l, {
                        className: n,
                        style: a(a({
                            color: t.color || e.color
                        }, e.style), t.style),
                        height: c,
                        width: c,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), u && r.createElement("title", null, u), t.children)
                };
                return void 0 !== i ? r.createElement(i.Consumer, null, (function(t) {
                    return e(t)
                })) : e(o)
            }
        },
        779: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return y
                }
            });
            var r = n(3935),
                o = n(7294),
                i = n(5697),
                a = n.n(i),
                s = !("undefined" === typeof window || !window.document || !window.document.createElement),
                u = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }();

            function l(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function c(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }
            var f = function(t) {
                function e() {
                    return l(this, e), c(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), u(e, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.defaultNode && document.body.removeChild(this.defaultNode), this.defaultNode = null
                    }
                }, {
                    key: "render",
                    value: function() {
                        return s ? (this.props.node || this.defaultNode || (this.defaultNode = document.createElement("div"), document.body.appendChild(this.defaultNode)), r.createPortal(this.props.children, this.props.node || this.defaultNode)) : null
                    }
                }]), e
            }(o.Component);
            f.propTypes = {
                children: a().node.isRequired,
                node: a().any
            };
            var d = f,
                p = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }();

            function v(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function h(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }
            var m = function(t) {
                    function e() {
                        return v(this, e), h(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                    }
                    return function(t, e) {
                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), p(e, [{
                        key: "componentDidMount",
                        value: function() {
                            this.renderPortal()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(t) {
                            this.renderPortal()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            r.unmountComponentAtNode(this.defaultNode || this.props.node), this.defaultNode && document.body.removeChild(this.defaultNode), this.defaultNode = null, this.portal = null
                        }
                    }, {
                        key: "renderPortal",
                        value: function(t) {
                            this.props.node || this.defaultNode || (this.defaultNode = document.createElement("div"), document.body.appendChild(this.defaultNode));
                            var e = this.props.children;
                            "function" === typeof this.props.children.type && (e = o.cloneElement(this.props.children)), this.portal = r.unstable_renderSubtreeIntoContainer(this, e, this.props.node || this.defaultNode)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), e
                }(o.Component),
                g = m;
            m.propTypes = {
                children: a().node.isRequired,
                node: a().any
            };
            var y = r.createPortal ? d : g
        },
        9503: function(t, e, n) {
            "use strict";
            var r, o = n(9038),
                i = (r = o) && r.__esModule ? r : {
                    default: r
                };
            Number.isInteger = Number.isInteger || function(t) {
                return "number" === typeof t && isFinite(t) && Math.floor(t) === t
            }, e.Z = i.default
        },
        9038: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = s(n(6855)),
                i = s(n(5697)),
                a = s(n(7727));

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }
            var c = function(t) {
                function e() {
                    var t, n, r;
                    u(this, e);
                    for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                    return n = r = l(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(i))), r.state = {
                        highestStarHovered: -1 / 0
                    }, r.fillId = "starGrad" + Math.random().toFixed(15).slice(2), r.hoverOverStar = function(t) {
                        return function() {
                            r.setState({
                                highestStarHovered: t
                            })
                        }
                    }, r.unHoverOverStar = function() {
                        r.setState({
                            highestStarHovered: -1 / 0
                        })
                    }, l(r, n)
                }
                return function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), r(e, [{
                    key: "stopColorStyle",
                    value: function(t) {
                        var e = {
                            stopColor: t,
                            stopOpacity: "1"
                        };
                        return this.props.ignoreInlineStyles ? {} : e
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.starRatedColor,
                            n = t.starEmptyColor;
                        return o.default.createElement("div", {
                            className: "star-ratings",
                            title: this.titleText,
                            style: this.starRatingsStyle
                        }, o.default.createElement("svg", {
                            className: "star-grad",
                            style: this.starGradientStyle
                        }, o.default.createElement("defs", null, o.default.createElement("linearGradient", {
                            id: this.fillId,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%"
                        }, o.default.createElement("stop", {
                            offset: "0%",
                            className: "stop-color-first",
                            style: this.stopColorStyle(e)
                        }), o.default.createElement("stop", {
                            offset: this.offsetValue,
                            className: "stop-color-first",
                            style: this.stopColorStyle(e)
                        }), o.default.createElement("stop", {
                            offset: this.offsetValue,
                            className: "stop-color-final",
                            style: this.stopColorStyle(n)
                        }), o.default.createElement("stop", {
                            offset: "100%",
                            className: "stop-color-final",
                            style: this.stopColorStyle(n)
                        })))), this.renderStars)
                    }
                }, {
                    key: "starRatingsStyle",
                    get: function() {
                        return this.props.ignoreInlineStyles ? {} : {
                            position: "relative",
                            boxSizing: "border-box",
                            display: "inline-block"
                        }
                    }
                }, {
                    key: "starGradientStyle",
                    get: function() {
                        return this.props.ignoreInlineStyles ? {} : {
                            position: "absolute",
                            zIndex: "0",
                            width: "0",
                            height: "0",
                            visibility: "hidden"
                        }
                    }
                }, {
                    key: "titleText",
                    get: function() {
                        var t = this.props,
                            e = t.typeOfWidget,
                            n = t.rating,
                            r = this.state.highestStarHovered,
                            o = r > 0 ? r : n,
                            i = parseFloat(o.toFixed(2)).toString();
                        Number.isInteger(o) && (i = String(o));
                        var a = e + "s";
                        return "1" === i && (a = e), i + " " + a
                    }
                }, {
                    key: "offsetValue",
                    get: function() {
                        var t = this.props.rating,
                            e = "0%";
                        Number.isInteger(t) || (e = t.toFixed(2).split(".")[1].slice(0, 2) + "%");
                        return e
                    }
                }, {
                    key: "renderStars",
                    get: function() {
                        var t = this,
                            e = this.props,
                            n = e.changeRating,
                            r = e.rating,
                            i = e.numberOfStars,
                            s = e.starDimension,
                            u = e.starSpacing,
                            l = e.starRatedColor,
                            c = e.starEmptyColor,
                            f = e.starHoverColor,
                            d = e.gradientPathName,
                            p = e.ignoreInlineStyles,
                            v = e.svgIconPath,
                            h = e.svgIconViewBox,
                            m = e.name,
                            g = this.state.highestStarHovered;
                        return Array.apply(null, Array(i)).map((function(e, y) {
                            var b = y + 1,
                                x = b <= r,
                                S = g > 0,
                                w = b <= g,
                                E = b === g,
                                A = b > r && b - 1 < r,
                                C = 1 === b,
                                P = b === i;
                            return o.default.createElement(a.default, {
                                key: b,
                                fillId: t.fillId,
                                changeRating: n ? function() {
                                    return n(b, m)
                                } : null,
                                hoverOverStar: n ? t.hoverOverStar(b) : null,
                                unHoverOverStar: n ? t.unHoverOverStar : null,
                                isStarred: x,
                                isPartiallyFullStar: A,
                                isHovered: w,
                                hoverMode: S,
                                isCurrentHoveredStar: E,
                                isFirstStar: C,
                                isLastStar: P,
                                starDimension: s,
                                starSpacing: u,
                                starHoverColor: f,
                                starRatedColor: l,
                                starEmptyColor: c,
                                gradientPathName: d,
                                ignoreInlineStyles: p,
                                svgIconPath: v,
                                svgIconViewBox: h
                            })
                        }))
                    }
                }]), e
            }(o.default.Component);
            c.propTypes = {
                rating: i.default.number.isRequired,
                numberOfStars: i.default.number.isRequired,
                changeRating: i.default.func,
                starHoverColor: i.default.string.isRequired,
                starRatedColor: i.default.string.isRequired,
                starEmptyColor: i.default.string.isRequired,
                starDimension: i.default.string.isRequired,
                starSpacing: i.default.string.isRequired,
                gradientPathName: i.default.string.isRequired,
                ignoreInlineStyles: i.default.bool.isRequired,
                svgIconPath: i.default.string.isRequired,
                svgIconViewBox: i.default.string.isRequired,
                name: i.default.string
            }, c.defaultProps = {
                rating: 0,
                typeOfWidget: "Star",
                numberOfStars: 5,
                changeRating: null,
                starHoverColor: "rgb(230, 67, 47)",
                starRatedColor: "rgb(109, 122, 130)",
                starEmptyColor: "rgb(203, 211, 227)",
                starDimension: "50px",
                starSpacing: "7px",
                gradientPathName: "",
                ignoreInlineStyles: !1,
                svgIconPath: "m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",
                svgIconViewBox: "0 0 51 48"
            }, e.default = c
        },
        7727: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }(),
                o = s(n(6855)),
                i = s(n(4184)),
                a = s(n(5697));

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function l(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" !== typeof e && "function" !== typeof e ? t : e
            }
            var c = function(t) {
                function e() {
                    return u(this, e), l(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                }
                return function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), r(e, [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.changeRating,
                            n = t.hoverOverStar,
                            r = t.unHoverOverStar,
                            i = t.svgIconViewBox,
                            a = t.svgIconPath;
                        return o.default.createElement("div", {
                            className: "star-container",
                            style: this.starContainerStyle,
                            onMouseEnter: n,
                            onMouseLeave: r,
                            onClick: e
                        }, o.default.createElement("svg", {
                            viewBox: i,
                            className: this.starClasses,
                            style: this.starSvgStyle
                        }, o.default.createElement("path", {
                            className: "star",
                            style: this.pathStyle,
                            d: a
                        })))
                    }
                }, {
                    key: "starContainerStyle",
                    get: function() {
                        var t = this.props,
                            e = t.changeRating,
                            n = t.starSpacing,
                            r = t.isFirstStar,
                            o = t.isLastStar;
                        return t.ignoreInlineStyles ? {} : {
                            position: "relative",
                            display: "inline-block",
                            verticalAlign: "middle",
                            paddingLeft: r ? void 0 : n,
                            paddingRight: o ? void 0 : n,
                            cursor: e ? "pointer" : void 0
                        }
                    }
                }, {
                    key: "starSvgStyle",
                    get: function() {
                        var t = this.props,
                            e = t.ignoreInlineStyles,
                            n = t.isCurrentHoveredStar,
                            r = t.starDimension;
                        return e ? {} : {
                            width: r,
                            height: r,
                            transition: "transform .2s ease-in-out",
                            transform: n ? "scale(1.1)" : void 0
                        }
                    }
                }, {
                    key: "pathStyle",
                    get: function() {
                        var t = this.props,
                            e = t.isStarred,
                            n = t.isPartiallyFullStar,
                            r = t.isHovered,
                            o = t.hoverMode,
                            i = t.starEmptyColor,
                            a = t.starRatedColor,
                            s = t.starHoverColor,
                            u = t.gradientPathName,
                            l = t.fillId,
                            c = void 0;
                        return c = o ? r ? s : i : n ? "url('" + u + "#" + l + "')" : e ? a : i, t.ignoreInlineStyles ? {} : {
                            fill: c,
                            transition: "fill .2s ease-in-out"
                        }
                    }
                }, {
                    key: "starClasses",
                    get: function() {
                        var t = this.props,
                            e = t.isSelected,
                            n = t.isPartiallyFullStar,
                            r = t.isHovered,
                            o = t.isCurrentHoveredStar,
                            a = t.ignoreInlineStyles,
                            s = (0, i.default)({
                                "widget-svg": !0,
                                "widget-selected": e,
                                "multi-widget-selected": n,
                                hovered: r,
                                "current-hovered": o
                            });
                        return a ? {} : s
                    }
                }]), e
            }(o.default.Component);
            c.propTypes = {
                fillId: a.default.string.isRequired,
                changeRating: a.default.func,
                hoverOverStar: a.default.func,
                unHoverOverStar: a.default.func,
                isStarred: a.default.bool.isRequired,
                isPartiallyFullStar: a.default.bool.isRequired,
                isHovered: a.default.bool.isRequired,
                hoverMode: a.default.bool.isRequired,
                isCurrentHoveredStar: a.default.bool.isRequired,
                isFirstStar: a.default.bool.isRequired,
                isLastStar: a.default.bool.isRequired,
                starDimension: a.default.string.isRequired,
                starSpacing: a.default.string.isRequired,
                starHoverColor: a.default.string.isRequired,
                starRatedColor: a.default.string.isRequired,
                starEmptyColor: a.default.string.isRequired,
                gradientPathName: a.default.string.isRequired,
                ignoreInlineStyles: a.default.bool.isRequired,
                svgIconPath: a.default.string.isRequired,
                svgIconViewBox: a.default.string.isRequired
            }, e.default = c
        },
        8846: function(t, e, n) {
            "use strict";
            var r = n(6086),
                o = "function" === typeof Symbol && Symbol.for,
                i = o ? Symbol.for("react.element") : 60103,
                a = o ? Symbol.for("react.portal") : 60106,
                s = o ? Symbol.for("react.fragment") : 60107,
                u = o ? Symbol.for("react.strict_mode") : 60108,
                l = o ? Symbol.for("react.profiler") : 60114,
                c = o ? Symbol.for("react.provider") : 60109,
                f = o ? Symbol.for("react.context") : 60110,
                d = o ? Symbol.for("react.forward_ref") : 60112,
                p = o ? Symbol.for("react.suspense") : 60113,
                v = o ? Symbol.for("react.memo") : 60115,
                h = o ? Symbol.for("react.lazy") : 60116,
                m = "function" === typeof Symbol && Symbol.iterator;

            function g(t) {
                for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var y = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                b = {};

            function x(t, e, n) {
                this.props = t, this.context = e, this.refs = b, this.updater = n || y
            }

            function S() {}

            function w(t, e, n) {
                this.props = t, this.context = e, this.refs = b, this.updater = n || y
            }
            x.prototype.isReactComponent = {}, x.prototype.setState = function(t, e) {
                if ("object" !== typeof t && "function" !== typeof t && null != t) throw Error(g(85));
                this.updater.enqueueSetState(this, t, e, "setState")
            }, x.prototype.forceUpdate = function(t) {
                this.updater.enqueueForceUpdate(this, t, "forceUpdate")
            }, S.prototype = x.prototype;
            var E = w.prototype = new S;
            E.constructor = w, r(E, x.prototype), E.isPureReactComponent = !0;
            var A = {
                    current: null
                },
                C = Object.prototype.hasOwnProperty,
                P = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function T(t, e, n) {
                var r, o = {},
                    a = null,
                    s = null;
                if (null != e)
                    for (r in void 0 !== e.ref && (s = e.ref), void 0 !== e.key && (a = "" + e.key), e) C.call(e, r) && !P.hasOwnProperty(r) && (o[r] = e[r]);
                var u = arguments.length - 2;
                if (1 === u) o.children = n;
                else if (1 < u) {
                    for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
                    o.children = l
                }
                if (t && t.defaultProps)
                    for (r in u = t.defaultProps) void 0 === o[r] && (o[r] = u[r]);
                return {
                    $$typeof: i,
                    type: t,
                    key: a,
                    ref: s,
                    props: o,
                    _owner: A.current
                }
            }

            function O(t) {
                return "object" === typeof t && null !== t && t.$$typeof === i
            }
            var R = /\/+/g,
                L = [];

            function j(t, e, n, r) {
                if (L.length) {
                    var o = L.pop();
                    return o.result = t, o.keyPrefix = e, o.func = n, o.context = r, o.count = 0, o
                }
                return {
                    result: t,
                    keyPrefix: e,
                    func: n,
                    context: r,
                    count: 0
                }
            }

            function k(t) {
                t.result = null, t.keyPrefix = null, t.func = null, t.context = null, t.count = 0, 10 > L.length && L.push(t)
            }

            function M(t, e, n, r) {
                var o = typeof t;
                "undefined" !== o && "boolean" !== o || (t = null);
                var s = !1;
                if (null === t) s = !0;
                else switch (o) {
                    case "string":
                    case "number":
                        s = !0;
                        break;
                    case "object":
                        switch (t.$$typeof) {
                            case i:
                            case a:
                                s = !0
                        }
                }
                if (s) return n(r, t, "" === e ? "." + I(t, 0) : e), 1;
                if (s = 0, e = "" === e ? "." : e + ":", Array.isArray(t))
                    for (var u = 0; u < t.length; u++) {
                        var l = e + I(o = t[u], u);
                        s += M(o, l, n, r)
                    } else if (null === t || "object" !== typeof t ? l = null : l = "function" === typeof(l = m && t[m] || t["@@iterator"]) ? l : null, "function" === typeof l)
                        for (t = l.call(t), u = 0; !(o = t.next()).done;) s += M(o = o.value, l = e + I(o, u++), n, r);
                    else if ("object" === o) throw n = "" + t, Error(g(31, "[object Object]" === n ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, ""));
                return s
            }

            function V(t, e, n) {
                return null == t ? 0 : M(t, "", e, n)
            }

            function I(t, e) {
                return "object" === typeof t && null !== t && null != t.key ? function(t) {
                    var e = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + ("" + t).replace(/[=:]/g, (function(t) {
                        return e[t]
                    }))
                }(t.key) : e.toString(36)
            }

            function F(t, e) {
                t.func.call(t.context, e, t.count++)
            }

            function D(t, e, n) {
                var r = t.result,
                    o = t.keyPrefix;
                t = t.func.call(t.context, e, t.count++), Array.isArray(t) ? N(t, r, n, (function(t) {
                    return t
                })) : null != t && (O(t) && (t = function(t, e) {
                    return {
                        $$typeof: i,
                        type: t.type,
                        key: e,
                        ref: t.ref,
                        props: t.props,
                        _owner: t._owner
                    }
                }(t, o + (!t.key || e && e.key === t.key ? "" : ("" + t.key).replace(R, "$&/") + "/") + n)), r.push(t))
            }

            function N(t, e, n, r, o) {
                var i = "";
                null != n && (i = ("" + n).replace(R, "$&/") + "/"), V(t, D, e = j(e, i, r, o)), k(e)
            }
            var _ = {
                current: null
            };

            function U() {
                var t = _.current;
                if (null === t) throw Error(g(321));
                return t
            }
            var z = {
                ReactCurrentDispatcher: _,
                ReactCurrentBatchConfig: {
                    suspense: null
                },
                ReactCurrentOwner: A,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: r
            };
            e.Children = {
                map: function(t, e, n) {
                    if (null == t) return t;
                    var r = [];
                    return N(t, r, null, e, n), r
                },
                forEach: function(t, e, n) {
                    if (null == t) return t;
                    V(t, F, e = j(null, null, e, n)), k(e)
                },
                count: function(t) {
                    return V(t, (function() {
                        return null
                    }), null)
                },
                toArray: function(t) {
                    var e = [];
                    return N(t, e, null, (function(t) {
                        return t
                    })), e
                },
                only: function(t) {
                    if (!O(t)) throw Error(g(143));
                    return t
                }
            }, e.Component = x, e.Fragment = s, e.Profiler = l, e.PureComponent = w, e.StrictMode = u, e.Suspense = p, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, e.cloneElement = function(t, e, n) {
                if (null === t || void 0 === t) throw Error(g(267, t));
                var o = r({}, t.props),
                    a = t.key,
                    s = t.ref,
                    u = t._owner;
                if (null != e) {
                    if (void 0 !== e.ref && (s = e.ref, u = A.current), void 0 !== e.key && (a = "" + e.key), t.type && t.type.defaultProps) var l = t.type.defaultProps;
                    for (c in e) C.call(e, c) && !P.hasOwnProperty(c) && (o[c] = void 0 === e[c] && void 0 !== l ? l[c] : e[c])
                }
                var c = arguments.length - 2;
                if (1 === c) o.children = n;
                else if (1 < c) {
                    l = Array(c);
                    for (var f = 0; f < c; f++) l[f] = arguments[f + 2];
                    o.children = l
                }
                return {
                    $$typeof: i,
                    type: t.type,
                    key: a,
                    ref: s,
                    props: o,
                    _owner: u
                }
            }, e.createContext = function(t, e) {
                return void 0 === e && (e = null), (t = {
                    $$typeof: f,
                    _calculateChangedBits: e,
                    _currentValue: t,
                    _currentValue2: t,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: c,
                    _context: t
                }, t.Consumer = t
            }, e.createElement = T, e.createFactory = function(t) {
                var e = T.bind(null, t);
                return e.type = t, e
            }, e.createRef = function() {
                return {
                    current: null
                }
            }, e.forwardRef = function(t) {
                return {
                    $$typeof: d,
                    render: t
                }
            }, e.isValidElement = O, e.lazy = function(t) {
                return {
                    $$typeof: h,
                    _ctor: t,
                    _status: -1,
                    _result: null
                }
            }, e.memo = function(t, e) {
                return {
                    $$typeof: v,
                    type: t,
                    compare: void 0 === e ? null : e
                }
            }, e.useCallback = function(t, e) {
                return U().useCallback(t, e)
            }, e.useContext = function(t, e) {
                return U().useContext(t, e)
            }, e.useDebugValue = function() {}, e.useEffect = function(t, e) {
                return U().useEffect(t, e)
            }, e.useImperativeHandle = function(t, e, n) {
                return U().useImperativeHandle(t, e, n)
            }, e.useLayoutEffect = function(t, e) {
                return U().useLayoutEffect(t, e)
            }, e.useMemo = function(t, e) {
                return U().useMemo(t, e)
            }, e.useReducer = function(t, e, n) {
                return U().useReducer(t, e, n)
            }, e.useRef = function(t) {
                return U().useRef(t)
            }, e.useState = function(t) {
                return U().useState(t)
            }, e.version = "16.14.0"
        },
        6855: function(t, e, n) {
            "use strict";
            t.exports = n(8846)
        },
        7098: function(t, e, n) {
            "use strict";
            n.d(e, {
                Q: function() {
                    return C
                }
            });
            var r = n(7462);
            var o = n(5068),
                i = n(655),
                a = n(7811),
                s = new Map,
                u = function(t) {
                    return t.cloneNode(!0)
                },
                l = function() {
                    return "file:" === window.location.protocol
                },
                c = function(t, e, n) {
                    var r = new XMLHttpRequest;
                    r.onreadystatechange = function() {
                        try {
                            if (!/\.svg/i.test(t) && 2 === r.readyState) {
                                var e = r.getResponseHeader("Content-Type");
                                if (!e) throw new Error("Content type not found");
                                var o = (0, a.Q)(e).type;
                                if ("image/svg+xml" !== o && "text/plain" !== o) throw new Error("Invalid content type: ".concat(o))
                            }
                            if (4 === r.readyState) {
                                if (404 === r.status || null === r.responseXML) throw new Error(l() ? "Note: SVG injection ajax calls do not work locally without adjusting security settings in your browser. Or consider using a local webserver." : "Unable to load SVG file: " + t);
                                if (!(200 === r.status || l() && 0 === r.status)) throw new Error("There was a problem injecting the SVG: " + r.status + " " + r.statusText);
                                n(null, r)
                            }
                        } catch (i) {
                            if (r.abort(), !(i instanceof Error)) throw i;
                            n(i, r)
                        }
                    }, r.open("GET", t), r.withCredentials = e, r.overrideMimeType && r.overrideMimeType("text/xml"), r.send()
                },
                f = {},
                d = function(t, e) {
                    f[t] = f[t] || [], f[t].push(e)
                },
                p = function(t, e, n) {
                    if (s.has(t)) {
                        var r = s.get(t);
                        if (void 0 === r) return void d(t, n);
                        if (r instanceof SVGSVGElement) return void n(null, u(r))
                    }
                    s.set(t, void 0), d(t, n), c(t, e, (function(e, n) {
                        e ? s.set(t, e) : n.responseXML instanceof Document && n.responseXML.documentElement && n.responseXML.documentElement instanceof SVGSVGElement && s.set(t, n.responseXML.documentElement),
                            function(t) {
                                for (var e = function(e, n) {
                                        setTimeout((function() {
                                            if (Array.isArray(f[t])) {
                                                var n = s.get(t),
                                                    r = f[t][e];
                                                n instanceof SVGSVGElement && r(null, u(n)), n instanceof Error && r(n), e === f[t].length - 1 && delete f[t]
                                            }
                                        }), 0)
                                    }, n = 0, r = f[t].length; n < r; n++) e(n)
                            }(t)
                    }))
                },
                v = function(t, e, n) {
                    c(t, e, (function(t, e) {
                        t ? n(t) : e.responseXML instanceof Document && e.responseXML.documentElement && e.responseXML.documentElement instanceof SVGSVGElement && n(null, e.responseXML.documentElement)
                    }))
                },
                h = 0,
                m = [],
                g = {},
                y = "http://www.w3.org/1999/xlink",
                b = function(t, e, n, r, o, a, s) {
                    var u = t.getAttribute("data-src") || t.getAttribute("src");
                    if (u) {
                        if (-1 !== m.indexOf(t)) return m.splice(m.indexOf(t), 1), void(t = null);
                        m.push(t), t.setAttribute("src", ""), (r ? p : v)(u, o, (function(r, o) {
                            if (!o) return m.splice(m.indexOf(t), 1), t = null, void s(r);
                            var l = t.getAttribute("id");
                            l && o.setAttribute("id", l);
                            var c = t.getAttribute("title");
                            c && o.setAttribute("title", c);
                            var f = t.getAttribute("width");
                            f && o.setAttribute("width", f);
                            var d = t.getAttribute("height");
                            d && o.setAttribute("height", d);
                            var p = Array.from(new Set((0, i.ev)((0, i.ev)((0, i.ev)([], (o.getAttribute("class") || "").split(" "), !0), ["injected-svg"], !1), (t.getAttribute("class") || "").split(" "), !0))).join(" ").trim();
                            o.setAttribute("class", p);
                            var v = t.getAttribute("style");
                            v && o.setAttribute("style", v), o.setAttribute("data-src", u);
                            var b = [].filter.call(t.attributes, (function(t) {
                                return /^data-\w[\w-]*$/.test(t.name)
                            }));
                            if (Array.prototype.forEach.call(b, (function(t) {
                                    t.name && t.value && o.setAttribute(t.name, t.value)
                                })), n) {
                                var x, S, w, E, A, C = {
                                    clipPath: ["clip-path"],
                                    "color-profile": ["color-profile"],
                                    cursor: ["cursor"],
                                    filter: ["filter"],
                                    linearGradient: ["fill", "stroke"],
                                    marker: ["marker", "marker-start", "marker-mid", "marker-end"],
                                    mask: ["mask"],
                                    path: [],
                                    pattern: ["fill", "stroke"],
                                    radialGradient: ["fill", "stroke"]
                                };
                                Object.keys(C).forEach((function(t) {
                                    x = t, w = C[t];
                                    for (var e = function(t, e) {
                                            var n;
                                            E = S[t].id, A = E + "-" + ++h, Array.prototype.forEach.call(w, (function(t) {
                                                for (var e = 0, r = (n = o.querySelectorAll("[" + t + '*="' + E + '"]')).length; e < r; e++) {
                                                    var i = n[e].getAttribute(t);
                                                    i && !i.match(new RegExp('url\\("?#' + E + '"?\\)')) || n[e].setAttribute(t, "url(#" + A + ")")
                                                }
                                            }));
                                            for (var r = o.querySelectorAll("[*|href]"), i = [], a = 0, s = r.length; a < s; a++) {
                                                var u = r[a].getAttributeNS(y, "href");
                                                u && u.toString() === "#" + S[t].id && i.push(r[a])
                                            }
                                            for (var l = 0, c = i.length; l < c; l++) i[l].setAttributeNS(y, "href", "#" + A);
                                            S[t].id = A
                                        }, n = 0, r = (S = o.querySelectorAll(x + "[id]")).length; n < r; n++) e(n)
                                }))
                            }
                            o.removeAttribute("xmlns:a");
                            for (var P, T, O = o.querySelectorAll("script"), R = [], L = 0, j = O.length; L < j; L++)(T = O[L].getAttribute("type")) && "application/ecmascript" !== T && "application/javascript" !== T && "text/javascript" !== T || ((P = O[L].innerText || O[L].textContent) && R.push(P), o.removeChild(O[L]));
                            if (R.length > 0 && ("always" === e || "once" === e && !g[u])) {
                                for (var k = 0, M = R.length; k < M; k++) new Function(R[k])(window);
                                g[u] = !0
                            }
                            var V = o.querySelectorAll("style");
                            if (Array.prototype.forEach.call(V, (function(t) {
                                    t.textContent += ""
                                })), o.setAttribute("xmlns", "http://www.w3.org/2000/svg"), o.setAttribute("xmlns:xlink", y), a(o), !t.parentNode) return m.splice(m.indexOf(t), 1), t = null, void s(new Error("Parent node is null"));
                            t.parentNode.replaceChild(o, t), m.splice(m.indexOf(t), 1), t = null, s(null, o)
                        }))
                    } else s(new Error("Invalid data-src or src attribute"))
                },
                x = n(5697),
                S = n(7294),
                w = ["afterInjection", "beforeInjection", "evalScripts", "fallback", "httpRequestWithCredentials", "loading", "renumerateIRIElements", "src", "useRequestCache", "wrapper"],
                E = "http://www.w3.org/2000/svg",
                A = "http://www.w3.org/1999/xlink",
                C = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r)) || this).initialState = {
                            hasError: !1,
                            isLoading: !0
                        }, e.state = e.initialState, e._isMounted = !1, e.reactWrapper = void 0, e.nonReactWrapper = void 0, e.refCallback = function(t) {
                            e.reactWrapper = t
                        }, e
                    }(0, o.Z)(e, t);
                    var n = e.prototype;
                    return n.renderSVG = function() {
                        var t = this;
                        if (this.reactWrapper instanceof Node) {
                            var e, n, r = this.props,
                                o = r.beforeInjection,
                                i = r.evalScripts,
                                a = r.httpRequestWithCredentials,
                                s = r.renumerateIRIElements,
                                u = r.src,
                                l = r.useRequestCache,
                                c = this.props.afterInjection,
                                f = this.props.wrapper;
                            "svg" === f ? ((e = document.createElementNS(E, f)).setAttribute("xmlns", E), e.setAttribute("xmlns:xlink", A), n = document.createElementNS(E, f)) : (e = document.createElement(f), n = document.createElement(f)), e.appendChild(n), n.dataset.src = u, this.nonReactWrapper = this.reactWrapper.appendChild(e);
                            ! function(t, e) {
                                var n = void 0 === e ? {} : e,
                                    r = n.afterAll,
                                    o = void 0 === r ? function() {} : r,
                                    i = n.afterEach,
                                    a = void 0 === i ? function() {} : i,
                                    s = n.beforeEach,
                                    u = void 0 === s ? function() {} : s,
                                    l = n.cacheRequests,
                                    c = void 0 === l || l,
                                    f = n.evalScripts,
                                    d = void 0 === f ? "never" : f,
                                    p = n.httpRequestWithCredentials,
                                    v = void 0 !== p && p,
                                    h = n.renumerateIRIElements,
                                    m = void 0 === h || h;
                                if (t && "length" in t)
                                    for (var g = 0, y = 0, x = t.length; y < x; y++) b(t[y], d, m, c, v, u, (function(e, n) {
                                        a(e, n), t && "length" in t && t.length === ++g && o(g)
                                    }));
                                else t ? b(t, d, m, c, v, u, (function(e, n) {
                                    a(e, n), o(1), t = null
                                })) : o(0)
                            }(n, {
                                afterEach: function(e, n) {
                                    !e || (t.removeSVG(), t._isMounted) ? t._isMounted && t.setState((function() {
                                        return {
                                            hasError: !!e,
                                            isLoading: !1
                                        }
                                    }), (function() {
                                        c(e, n)
                                    })) : c(e)
                                },
                                beforeEach: o,
                                cacheRequests: l,
                                evalScripts: i,
                                httpRequestWithCredentials: a,
                                renumerateIRIElements: s
                            })
                        }
                    }, n.removeSVG = function() {
                        var t;
                        null != (t = this.nonReactWrapper) && t.parentNode && (this.nonReactWrapper.parentNode.removeChild(this.nonReactWrapper), this.nonReactWrapper = null)
                    }, n.componentDidMount = function() {
                        this._isMounted = !0, this.renderSVG()
                    }, n.componentDidUpdate = function(t) {
                        var e = this;
                        (function(t, e) {
                            for (var n in t)
                                if (!(n in e)) return !0;
                            for (var r in e)
                                if (t[r] !== e[r]) return !0;
                            return !1
                        })(t, this.props) && this.setState((function() {
                            return e.initialState
                        }), (function() {
                            e.removeSVG(), e.renderSVG()
                        }))
                    }, n.componentWillUnmount = function() {
                        this._isMounted = !1, this.removeSVG()
                    }, n.render = function() {
                        var t = this.props;
                        t.afterInjection, t.beforeInjection, t.evalScripts;
                        var e = t.fallback;
                        t.httpRequestWithCredentials;
                        var n = t.loading;
                        t.renumerateIRIElements, t.src, t.useRequestCache;
                        var o = t.wrapper,
                            i = function(t, e) {
                                if (null == t) return {};
                                var n, r, o = {},
                                    i = Object.keys(t);
                                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                                return o
                            }(t, w),
                            a = o;
                        return S.createElement(a, (0, r.Z)({}, i, {
                            ref: this.refCallback
                        }, "svg" === o ? {
                            xmlns: E,
                            xmlnsXlink: A
                        } : {}), this.state.isLoading && n && S.createElement(n, null), this.state.hasError && e && S.createElement(e, null))
                    }, e
                }(S.Component);
            C.defaultProps = {
                afterInjection: function() {},
                beforeInjection: function() {},
                evalScripts: "never",
                fallback: null,
                httpRequestWithCredentials: !1,
                loading: null,
                renumerateIRIElements: !0,
                useRequestCache: !0,
                wrapper: "div"
            }, C.propTypes = {
                afterInjection: x.func,
                beforeInjection: x.func,
                evalScripts: x.oneOf(["always", "once", "never"]),
                fallback: x.oneOfType([x.func, x.object, x.string]),
                httpRequestWithCredentials: x.bool,
                loading: x.oneOfType([x.func, x.object, x.string]),
                renumerateIRIElements: x.bool,
                src: x.string.isRequired,
                useRequestCache: x.bool,
                wrapper: x.oneOf(["div", "span", "svg"])
            }
        },
        655: function(t, e, n) {
            "use strict";
            n.d(e, {
                CR: function() {
                    return u
                },
                XA: function() {
                    return s
                },
                ZT: function() {
                    return o
                },
                _T: function() {
                    return a
                },
                ev: function() {
                    return l
                },
                pi: function() {
                    return i
                }
            });
            var r = function(t, e) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }, r(t, e)
            };

            function o(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var i = function() {
                return i = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, i.apply(this, arguments)
            };

            function a(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                }
                return n
            }
            Object.create;

            function s(t) {
                var e = "function" === typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && "number" === typeof t.length) return {
                    next: function() {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function u(t, e) {
                var n = "function" === typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (s) {
                    o = {
                        error: s
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function l(t, e, n) {
                if (n || 2 === arguments.length)
                    for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                return t.concat(r || Array.prototype.slice.call(e))
            }
            Object.create
        },
        1190: function(t, e, n) {
            "use strict";
            n.d(e, {
                M: function() {
                    return m
                }
            });
            var r = n(655),
                o = n(7294),
                i = n(4735),
                a = n(8868);

            function s() {
                var t = (0, o.useRef)(!1);
                return (0, a.L)((function() {
                    return t.current = !0,
                        function() {
                            t.current = !1
                        }
                }), []), t
            }
            var u = n(240),
                l = n(6681),
                c = n(6316),
                f = function(t) {
                    var e = t.children,
                        n = t.initial,
                        i = t.isPresent,
                        a = t.onExitComplete,
                        s = t.custom,
                        f = t.presenceAffectsLayout,
                        p = (0, l.h)(d),
                        v = (0, c.M)(),
                        h = (0, o.useMemo)((function() {
                            return {
                                id: v,
                                initial: n,
                                isPresent: i,
                                custom: s,
                                onExitComplete: function(t) {
                                    var e, n;
                                    p.set(t, !0);
                                    try {
                                        for (var o = (0, r.XA)(p.values()), i = o.next(); !i.done; i = o.next()) {
                                            if (!i.value) return
                                        }
                                    } catch (s) {
                                        e = {
                                            error: s
                                        }
                                    } finally {
                                        try {
                                            i && !i.done && (n = o.return) && n.call(o)
                                        } finally {
                                            if (e) throw e.error
                                        }
                                    }
                                    null === a || void 0 === a || a()
                                },
                                register: function(t) {
                                    return p.set(t, !1),
                                        function() {
                                            return p.delete(t)
                                        }
                                }
                            }
                        }), f ? void 0 : [i]);
                    return (0, o.useMemo)((function() {
                        p.forEach((function(t, e) {
                            return p.set(e, !1)
                        }))
                    }), [i]), o.useEffect((function() {
                        !i && !p.size && (null === a || void 0 === a || a())
                    }), [i]), o.createElement(u.O.Provider, {
                        value: h
                    }, e)
                };

            function d() {
                return new Map
            }
            var p = n(5364),
                v = n(5411),
                h = function(t) {
                    return t.key || ""
                };
            var m = function(t) {
                var e = t.children,
                    n = t.custom,
                    u = t.initial,
                    l = void 0 === u || u,
                    c = t.onExitComplete,
                    d = t.exitBeforeEnter,
                    m = t.presenceAffectsLayout,
                    g = void 0 === m || m,
                    y = (0, r.CR)(function() {
                        var t = s(),
                            e = (0, r.CR)((0, o.useState)(0), 2),
                            n = e[0],
                            a = e[1],
                            u = (0, o.useCallback)((function() {
                                t.current && a(n + 1)
                            }), [n]);
                        return [(0, o.useCallback)((function() {
                            return i.ZP.postRender(u)
                        }), [u]), n]
                    }(), 1),
                    b = y[0],
                    x = (0, o.useContext)(p.p).forceRender;
                x && (b = x);
                var S = s(),
                    w = function(t) {
                        var e = [];
                        return o.Children.forEach(t, (function(t) {
                            (0, o.isValidElement)(t) && e.push(t)
                        })), e
                    }(e),
                    E = w,
                    A = new Set,
                    C = (0, o.useRef)(E),
                    P = (0, o.useRef)(new Map).current,
                    T = (0, o.useRef)(!0);
                if ((0, a.L)((function() {
                        T.current = !1,
                            function(t, e) {
                                t.forEach((function(t) {
                                    var n = h(t);
                                    e.set(n, t)
                                }))
                            }(w, P), C.current = E
                    })), (0, v.z)((function() {
                        T.current = !0, P.clear(), A.clear()
                    })), T.current) return o.createElement(o.Fragment, null, E.map((function(t) {
                    return o.createElement(f, {
                        key: h(t),
                        isPresent: !0,
                        initial: !!l && void 0,
                        presenceAffectsLayout: g
                    }, t)
                })));
                E = (0, r.ev)([], (0, r.CR)(E), !1);
                for (var O = C.current.map(h), R = w.map(h), L = O.length, j = 0; j < L; j++) {
                    var k = O[j]; - 1 === R.indexOf(k) && A.add(k)
                }
                return d && A.size && (E = []), A.forEach((function(t) {
                    if (-1 === R.indexOf(t)) {
                        var e = P.get(t);
                        if (e) {
                            var r = O.indexOf(t);
                            E.splice(r, 0, o.createElement(f, {
                                key: h(e),
                                isPresent: !1,
                                onExitComplete: function() {
                                    P.delete(t), A.delete(t);
                                    var e = C.current.findIndex((function(e) {
                                        return e.key === t
                                    }));
                                    if (C.current.splice(e, 1), !A.size) {
                                        if (C.current = w, !1 === S.current) return;
                                        b(), c && c()
                                    }
                                },
                                custom: n,
                                presenceAffectsLayout: g
                            }, e))
                        }
                    }
                })), E = E.map((function(t) {
                    var e = t.key;
                    return A.has(e) ? t : o.createElement(f, {
                        key: h(t),
                        isPresent: !0,
                        presenceAffectsLayout: g
                    }, t)
                })), o.createElement(o.Fragment, null, A.size ? E : E.map((function(t) {
                    return (0, o.cloneElement)(t)
                })))
            }
        },
        5364: function(t, e, n) {
            "use strict";
            n.d(e, {
                p: function() {
                    return r
                }
            });
            var r = (0, n(7294).createContext)({})
        },
        240: function(t, e, n) {
            "use strict";
            n.d(e, {
                O: function() {
                    return r
                }
            });
            var r = (0, n(7294).createContext)(null)
        },
        7592: function(t, e, n) {
            "use strict";
            n.d(e, {
                E: function() {
                    return oa
                }
            });
            var r = n(655),
                o = n(7294),
                i = function(t) {
                    return {
                        isEnabled: function(e) {
                            return t.some((function(t) {
                                return !!e[t]
                            }))
                        }
                    }
                },
                a = {
                    measureLayout: i(["layout", "layoutId", "drag"]),
                    animation: i(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: i(["exit"]),
                    drag: i(["drag", "dragControls"]),
                    focus: i(["whileFocus"]),
                    hover: i(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: i(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: i(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: i(["whileInView", "onViewportEnter", "onViewportLeave"])
                };
            var s = (0, o.createContext)({
                    strict: !1
                }),
                u = Object.keys(a),
                l = u.length;
            var c = (0, o.createContext)({
                    transformPagePoint: function(t) {
                        return t
                    },
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                f = (0, o.createContext)({});
            var d = n(240),
                p = n(8868),
                v = n(1741),
                h = {
                    current: null
                },
                m = !1;

            function g() {
                return !m && function() {
                    if (m = !0, v.j)
                        if (window.matchMedia) {
                            var t = window.matchMedia("(prefers-reduced-motion)"),
                                e = function() {
                                    return h.current = t.matches
                                };
                            t.addListener(e), e()
                        } else h.current = !1
                }(), (0, r.CR)((0, o.useState)(h.current), 1)[0]
            }

            function y(t, e, n, r) {
                var i = (0, o.useContext)(s),
                    a = (0, o.useContext)(f).visualElement,
                    u = (0, o.useContext)(d.O),
                    l = function() {
                        var t = g(),
                            e = (0, o.useContext)(c).reducedMotion;
                        return "never" !== e && ("always" === e || t)
                    }(),
                    v = (0, o.useRef)(void 0);
                r || (r = i.renderer), !v.current && r && (v.current = r(t, {
                    visualState: e,
                    parent: a,
                    props: n,
                    presenceId: null === u || void 0 === u ? void 0 : u.id,
                    blockInitialAnimation: !1 === (null === u || void 0 === u ? void 0 : u.initial),
                    shouldReduceMotion: l
                }));
                var h = v.current;
                return (0, p.L)((function() {
                    null === h || void 0 === h || h.syncRender()
                })), (0, o.useEffect)((function() {
                    var t;
                    null === (t = null === h || void 0 === h ? void 0 : h.animationState) || void 0 === t || t.animateChanges()
                })), (0, p.L)((function() {
                    return function() {
                        return null === h || void 0 === h ? void 0 : h.notifyUnmount()
                    }
                }), []), h
            }

            function b(t) {
                return "object" === typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function x(t) {
                return Array.isArray(t)
            }

            function S(t) {
                return "string" === typeof t || x(t)
            }

            function w(t, e, n, r, o) {
                var i;
                return void 0 === r && (r = {}), void 0 === o && (o = {}), "function" === typeof e && (e = e(null !== n && void 0 !== n ? n : t.custom, r, o)), "string" === typeof e && (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]), "function" === typeof e && (e = e(null !== n && void 0 !== n ? n : t.custom, r, o)), e
            }

            function E(t, e, n) {
                var r = t.getProps();
                return w(r, e, null !== n && void 0 !== n ? n : r.custom, function(t) {
                    var e = {};
                    return t.forEachValue((function(t, n) {
                        return e[n] = t.get()
                    })), e
                }(t), function(t) {
                    var e = {};
                    return t.forEachValue((function(t, n) {
                        return e[n] = t.getVelocity()
                    })), e
                }(t))
            }

            function A(t) {
                var e;
                return "function" === typeof(null === (e = t.animate) || void 0 === e ? void 0 : e.start) || S(t.initial) || S(t.animate) || S(t.whileHover) || S(t.whileDrag) || S(t.whileTap) || S(t.whileFocus) || S(t.exit)
            }

            function C(t) {
                return Boolean(A(t) || t.variants)
            }

            function P(t) {
                var e = function(t, e) {
                        if (A(t)) {
                            var n = t.initial,
                                r = t.animate;
                            return {
                                initial: !1 === n || S(n) ? n : void 0,
                                animate: S(r) ? r : void 0
                            }
                        }
                        return !1 !== t.inherit ? e : {}
                    }(t, (0, o.useContext)(f)),
                    n = e.initial,
                    r = e.animate;
                return (0, o.useMemo)((function() {
                    return {
                        initial: n,
                        animate: r
                    }
                }), [T(n), T(r)])
            }

            function T(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var O = n(6681),
                R = n(4735);
            const L = (t, e, n) => -n * t + n * e + t;

            function j(t, e) {
                return e ? t * (1e3 / e) : 0
            }

            function k(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function M(t, e) {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            var V = function() {
                    function t() {
                        this.subscriptions = []
                    }
                    return t.prototype.add = function(t) {
                        var e = this;
                        return k(this.subscriptions, t),
                            function() {
                                return M(e.subscriptions, t)
                            }
                    }, t.prototype.notify = function(t, e, n) {
                        var r = this.subscriptions.length;
                        if (r)
                            if (1 === r) this.subscriptions[0](t, e, n);
                            else
                                for (var o = 0; o < r; o++) {
                                    var i = this.subscriptions[o];
                                    i && i(t, e, n)
                                }
                    }, t.prototype.getSize = function() {
                        return this.subscriptions.length
                    }, t.prototype.clear = function() {
                        this.subscriptions.length = 0
                    }, t
                }(),
                I = function() {
                    function t(t) {
                        var e, n = this;
                        this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new V, this.velocityUpdateSubscribers = new V, this.renderSubscribers = new V, this.canTrackVelocity = !1, this.updateAndNotify = function(t, e) {
                            void 0 === e && (e = !0), n.prev = n.current, n.current = t;
                            var r = (0, R.$B)(),
                                o = r.delta,
                                i = r.timestamp;
                            n.lastUpdated !== i && (n.timeDelta = o, n.lastUpdated = i, R.ZP.postRender(n.scheduleVelocityCheck)), n.prev !== n.current && n.updateSubscribers.notify(n.current), n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()), e && n.renderSubscribers.notify(n.current)
                        }, this.scheduleVelocityCheck = function() {
                            return R.ZP.postRender(n.velocityCheck)
                        }, this.velocityCheck = function(t) {
                            t.timestamp !== n.lastUpdated && (n.prev = n.current, n.velocityUpdateSubscribers.notify(n.getVelocity()))
                        }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e)))
                    }
                    return t.prototype.onChange = function(t) {
                        return this.updateSubscribers.add(t)
                    }, t.prototype.clearListeners = function() {
                        this.updateSubscribers.clear()
                    }, t.prototype.onRenderRequest = function(t) {
                        return t(this.get()), this.renderSubscribers.add(t)
                    }, t.prototype.attach = function(t) {
                        this.passiveEffect = t
                    }, t.prototype.set = function(t, e) {
                        void 0 === e && (e = !0), e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                    }, t.prototype.get = function() {
                        return this.current
                    }, t.prototype.getPrevious = function() {
                        return this.prev
                    }, t.prototype.getVelocity = function() {
                        return this.canTrackVelocity ? j(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                    }, t.prototype.start = function(t) {
                        var e = this;
                        return this.stop(), new Promise((function(n) {
                            e.hasAnimated = !0, e.stopAnimation = t(n)
                        })).then((function() {
                            return e.clearAnimation()
                        }))
                    }, t.prototype.stop = function() {
                        this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                    }, t.prototype.isAnimating = function() {
                        return !!this.stopAnimation
                    }, t.prototype.clearAnimation = function() {
                        this.stopAnimation = null
                    }, t.prototype.destroy = function() {
                        this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                    }, t
                }();

            function F(t) {
                return new I(t)
            }
            var D = function(t) {
                return Boolean(null !== t && "object" === typeof t && t.getVelocity)
            };
            const N = (t, e, n) => Math.min(Math.max(n, t), e),
                _ = .001;

            function U({
                duration: t = 800,
                bounce: e = .25,
                velocity: n = 0,
                mass: r = 1
            }) {
                let o, i, a = 1 - e;
                a = N(.05, 1, a), t = N(.01, 10, t / 1e3), a < 1 ? (o = e => {
                    const r = e * a,
                        o = r * t,
                        i = r - n,
                        s = z(e, a),
                        u = Math.exp(-o);
                    return _ - i / s * u
                }, i = e => {
                    const r = e * a * t,
                        i = r * n + n,
                        s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                        u = Math.exp(-r),
                        l = z(Math.pow(e, 2), a);
                    return (-o(e) + _ > 0 ? -1 : 1) * ((i - s) * u) / l
                }) : (o = e => Math.exp(-e * t) * ((e - n) * t + 1) - .001, i = e => Math.exp(-e * t) * (t * t * (n - e)));
                const s = function(t, e, n) {
                    let r = n;
                    for (let o = 1; o < 12; o++) r -= t(r) / e(r);
                    return r
                }(o, i, 5 / t);
                if (t *= 1e3, isNaN(s)) return {
                    stiffness: 100,
                    damping: 10,
                    duration: t
                }; {
                    const e = Math.pow(s, 2) * r;
                    return {
                        stiffness: e,
                        damping: 2 * a * Math.sqrt(r * e),
                        duration: t
                    }
                }
            }

            function z(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            const B = ["duration", "bounce"],
                W = ["stiffness", "damping", "mass"];

            function H(t, e) {
                return e.some((e => void 0 !== t[e]))
            }

            function q(t) {
                var {
                    from: e = 0,
                    to: n = 1,
                    restSpeed: o = 2,
                    restDelta: i
                } = t, a = (0, r._T)(t, ["from", "to", "restSpeed", "restDelta"]);
                const s = {
                    done: !1,
                    value: e
                };
                let {
                    stiffness: u,
                    damping: l,
                    mass: c,
                    velocity: f,
                    duration: d,
                    isResolvedFromDuration: p
                } = function(t) {
                    let e = Object.assign({
                        velocity: 0,
                        stiffness: 100,
                        damping: 10,
                        mass: 1,
                        isResolvedFromDuration: !1
                    }, t);
                    if (!H(t, W) && H(t, B)) {
                        const n = U(t);
                        e = Object.assign(Object.assign(Object.assign({}, e), n), {
                            velocity: 0,
                            mass: 1
                        }), e.isResolvedFromDuration = !0
                    }
                    return e
                }(a), v = X, h = X;

                function m() {
                    const t = f ? -f / 1e3 : 0,
                        r = n - e,
                        o = l / (2 * Math.sqrt(u * c)),
                        a = Math.sqrt(u / c) / 1e3;
                    if (void 0 === i && (i = Math.min(Math.abs(n - e) / 100, .4)), o < 1) {
                        const e = z(a, o);
                        v = i => {
                            const s = Math.exp(-o * a * i);
                            return n - s * ((t + o * a * r) / e * Math.sin(e * i) + r * Math.cos(e * i))
                        }, h = n => {
                            const i = Math.exp(-o * a * n);
                            return o * a * i * (Math.sin(e * n) * (t + o * a * r) / e + r * Math.cos(e * n)) - i * (Math.cos(e * n) * (t + o * a * r) - e * r * Math.sin(e * n))
                        }
                    } else if (1 === o) v = e => n - Math.exp(-a * e) * (r + (t + a * r) * e);
                    else {
                        const e = a * Math.sqrt(o * o - 1);
                        v = i => {
                            const s = Math.exp(-o * a * i),
                                u = Math.min(e * i, 300);
                            return n - s * ((t + o * a * r) * Math.sinh(u) + e * r * Math.cosh(u)) / e
                        }
                    }
                }
                return m(), {
                    next: t => {
                        const e = v(t);
                        if (p) s.done = t >= d;
                        else {
                            const r = 1e3 * h(t),
                                a = Math.abs(r) <= o,
                                u = Math.abs(n - e) <= i;
                            s.done = a && u
                        }
                        return s.value = s.done ? n : e, s
                    },
                    flipTarget: () => {
                        f = -f, [e, n] = [n, e], m()
                    }
                }
            }
            q.needsInterpolation = (t, e) => "string" === typeof t || "string" === typeof e;
            const X = t => 0,
                $ = (t, e, n) => {
                    const r = e - t;
                    return 0 === r ? 1 : (n - t) / r
                },
                Y = (t, e) => n => Math.max(Math.min(n, e), t),
                G = t => t % 1 ? Number(t.toFixed(5)) : t,
                Z = /(-)?([\d]*\.?[\d])+/g,
                K = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
                Q = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

            function J(t) {
                return "string" === typeof t
            }
            const tt = {
                    test: t => "number" === typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                et = Object.assign(Object.assign({}, tt), {
                    transform: Y(0, 1)
                }),
                nt = Object.assign(Object.assign({}, tt), {
                    default: 1
                }),
                rt = (t, e) => n => Boolean(J(n) && Q.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
                ot = (t, e, n) => r => {
                    if (!J(r)) return r;
                    const [o, i, a, s] = r.match(Z);
                    return {
                        [t]: parseFloat(o),
                        [e]: parseFloat(i),
                        [n]: parseFloat(a),
                        alpha: void 0 !== s ? parseFloat(s) : 1
                    }
                },
                it = Y(0, 255),
                at = Object.assign(Object.assign({}, tt), {
                    transform: t => Math.round(it(t))
                }),
                st = {
                    test: rt("rgb", "red"),
                    parse: ot("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: n,
                        alpha: r = 1
                    }) => "rgba(" + at.transform(t) + ", " + at.transform(e) + ", " + at.transform(n) + ", " + G(et.transform(r)) + ")"
                };
            const ut = {
                    test: rt("#"),
                    parse: function(t) {
                        let e = "",
                            n = "",
                            r = "",
                            o = "";
                        return t.length > 5 ? (e = t.substr(1, 2), n = t.substr(3, 2), r = t.substr(5, 2), o = t.substr(7, 2)) : (e = t.substr(1, 1), n = t.substr(2, 1), r = t.substr(3, 1), o = t.substr(4, 1), e += e, n += n, r += r, o += o), {
                            red: parseInt(e, 16),
                            green: parseInt(n, 16),
                            blue: parseInt(r, 16),
                            alpha: o ? parseInt(o, 16) / 255 : 1
                        }
                    },
                    transform: st.transform
                },
                lt = t => ({
                    test: e => J(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                ct = lt("deg"),
                ft = lt("%"),
                dt = lt("px"),
                pt = lt("vh"),
                vt = lt("vw"),
                ht = Object.assign(Object.assign({}, ft), {
                    parse: t => ft.parse(t) / 100,
                    transform: t => ft.transform(100 * t)
                }),
                mt = {
                    test: rt("hsl", "hue"),
                    parse: ot("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: n,
                        alpha: r = 1
                    }) => "hsla(" + Math.round(t) + ", " + ft.transform(G(e)) + ", " + ft.transform(G(n)) + ", " + G(et.transform(r)) + ")"
                };

            function gt(t, e, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            function yt({
                hue: t,
                saturation: e,
                lightness: n,
                alpha: r
            }) {
                t /= 360, n /= 100;
                let o = 0,
                    i = 0,
                    a = 0;
                if (e /= 100) {
                    const r = n < .5 ? n * (1 + e) : n + e - n * e,
                        s = 2 * n - r;
                    o = gt(s, r, t + 1 / 3), i = gt(s, r, t), a = gt(s, r, t - 1 / 3)
                } else o = i = a = n;
                return {
                    red: Math.round(255 * o),
                    green: Math.round(255 * i),
                    blue: Math.round(255 * a),
                    alpha: r
                }
            }
            const bt = (t, e, n) => {
                    const r = t * t,
                        o = e * e;
                    return Math.sqrt(Math.max(0, n * (o - r) + r))
                },
                xt = [ut, st, mt],
                St = t => xt.find((e => e.test(t))),
                wt = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`,
                Et = (t, e) => {
                    let n = St(t),
                        r = St(e);
                    wt(t), wt(e);
                    let o = n.parse(t),
                        i = r.parse(e);
                    n === mt && (o = yt(o), n = st), r === mt && (i = yt(i), r = st);
                    const a = Object.assign({}, o);
                    return t => {
                        for (const e in a) "alpha" !== e && (a[e] = bt(o[e], i[e], t));
                        return a.alpha = L(o.alpha, i.alpha, t), n.transform(a)
                    }
                },
                At = {
                    test: t => st.test(t) || ut.test(t) || mt.test(t),
                    parse: t => st.test(t) ? st.parse(t) : mt.test(t) ? mt.parse(t) : ut.parse(t),
                    transform: t => J(t) ? t : t.hasOwnProperty("red") ? st.transform(t) : mt.transform(t)
                },
                Ct = "${c}",
                Pt = "${n}";

            function Tt(t) {
                "number" === typeof t && (t = `${t}`);
                const e = [];
                let n = 0;
                const r = t.match(K);
                r && (n = r.length, t = t.replace(K, Ct), e.push(...r.map(At.parse)));
                const o = t.match(Z);
                return o && (t = t.replace(Z, Pt), e.push(...o.map(tt.parse))), {
                    values: e,
                    numColors: n,
                    tokenised: t
                }
            }

            function Ot(t) {
                return Tt(t).values
            }

            function Rt(t) {
                const {
                    values: e,
                    numColors: n,
                    tokenised: r
                } = Tt(t), o = e.length;
                return t => {
                    let e = r;
                    for (let r = 0; r < o; r++) e = e.replace(r < n ? Ct : Pt, r < n ? At.transform(t[r]) : G(t[r]));
                    return e
                }
            }
            const Lt = t => "number" === typeof t ? 0 : t;
            const jt = {
                    test: function(t) {
                        var e, n, r, o;
                        return isNaN(t) && J(t) && (null !== (n = null === (e = t.match(Z)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = t.match(K)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
                    },
                    parse: Ot,
                    createTransformer: Rt,
                    getAnimatableNone: function(t) {
                        const e = Ot(t);
                        return Rt(t)(e.map(Lt))
                    }
                },
                kt = t => "number" === typeof t,
                Mt = (t, e) => n => e(t(n)),
                Vt = (...t) => t.reduce(Mt);

            function It(t, e) {
                return kt(t) ? n => L(t, e, n) : At.test(t) ? Et(t, e) : _t(t, e)
            }
            const Ft = (t, e) => {
                    const n = [...t],
                        r = n.length,
                        o = t.map(((t, n) => It(t, e[n])));
                    return t => {
                        for (let e = 0; e < r; e++) n[e] = o[e](t);
                        return n
                    }
                },
                Dt = (t, e) => {
                    const n = Object.assign(Object.assign({}, t), e),
                        r = {};
                    for (const o in n) void 0 !== t[o] && void 0 !== e[o] && (r[o] = It(t[o], e[o]));
                    return t => {
                        for (const e in r) n[e] = r[e](t);
                        return n
                    }
                };

            function Nt(t) {
                const e = jt.parse(t),
                    n = e.length;
                let r = 0,
                    o = 0,
                    i = 0;
                for (let a = 0; a < n; a++) r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? i++ : o++;
                return {
                    parsed: e,
                    numNumbers: r,
                    numRGB: o,
                    numHSL: i
                }
            }
            const _t = (t, e) => {
                    const n = jt.createTransformer(e),
                        r = Nt(t),
                        o = Nt(e);
                    return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? Vt(Ft(r.parsed, o.parsed), n) : n => `${n>0?e:t}`
                },
                Ut = (t, e) => n => L(t, e, n);

            function zt(t, e, n) {
                const r = [],
                    o = n || ("number" === typeof(i = t[0]) ? Ut : "string" === typeof i ? At.test(i) ? Et : _t : Array.isArray(i) ? Ft : "object" === typeof i ? Dt : void 0);
                var i;
                const a = t.length - 1;
                for (let s = 0; s < a; s++) {
                    let n = o(t[s], t[s + 1]);
                    if (e) {
                        const t = Array.isArray(e) ? e[s] : e;
                        n = Vt(t, n)
                    }
                    r.push(n)
                }
                return r
            }

            function Bt(t, e, {
                clamp: n = !0,
                ease: r,
                mixer: o
            } = {}) {
                const i = t.length;
                e.length, !r || !Array.isArray(r) || r.length, t[0] > t[i - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
                const a = zt(e, r, o),
                    s = 2 === i ? function([t, e], [n]) {
                        return r => n($(t, e, r))
                    }(t, a) : function(t, e) {
                        const n = t.length,
                            r = n - 1;
                        return o => {
                            let i = 0,
                                a = !1;
                            if (o <= t[0] ? a = !0 : o >= t[r] && (i = r - 1, a = !0), !a) {
                                let e = 1;
                                for (; e < n && !(t[e] > o || e === r); e++);
                                i = e - 1
                            }
                            const s = $(t[i], t[i + 1], o);
                            return e[i](s)
                        }
                    }(t, a);
                return n ? e => s(N(t[0], t[i - 1], e)) : s
            }
            const Wt = t => e => 1 - t(1 - e),
                Ht = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                qt = t => e => e * e * ((t + 1) * e - t),
                Xt = t => t,
                $t = (Yt = 2, t => Math.pow(t, Yt));
            var Yt;
            const Gt = Wt($t),
                Zt = Ht($t),
                Kt = t => 1 - Math.sin(Math.acos(t)),
                Qt = Wt(Kt),
                Jt = Ht(Qt),
                te = qt(1.525),
                ee = Wt(te),
                ne = Ht(te),
                re = (t => {
                    const e = qt(t);
                    return t => (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })(1.525),
                oe = t => {
                    if (1 === t || 0 === t) return t;
                    const e = t * t;
                    return t < .36363636363636365 ? 7.5625 * e : t < .7272727272727273 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72
                },
                ie = Wt(oe);

            function ae(t, e) {
                return t.map((() => e || Zt)).splice(0, t.length - 1)
            }

            function se({
                from: t = 0,
                to: e = 1,
                ease: n,
                offset: r,
                duration: o = 300
            }) {
                const i = {
                        done: !1,
                        value: t
                    },
                    a = Array.isArray(e) ? e : [t, e],
                    s = function(t, e) {
                        return t.map((t => t * e))
                    }(r && r.length === a.length ? r : function(t) {
                        const e = t.length;
                        return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
                    }(a), o);

                function u() {
                    return Bt(s, a, {
                        ease: Array.isArray(n) ? n : ae(a, n)
                    })
                }
                let l = u();
                return {
                    next: t => (i.value = l(t), i.done = t >= o, i),
                    flipTarget: () => {
                        a.reverse(), l = u()
                    }
                }
            }
            const ue = {
                keyframes: se,
                spring: q,
                decay: function({
                    velocity: t = 0,
                    from: e = 0,
                    power: n = .8,
                    timeConstant: r = 350,
                    restDelta: o = .5,
                    modifyTarget: i
                }) {
                    const a = {
                        done: !1,
                        value: e
                    };
                    let s = n * t;
                    const u = e + s,
                        l = void 0 === i ? u : i(u);
                    return l !== u && (s = l - e), {
                        next: t => {
                            const e = -s * Math.exp(-t / r);
                            return a.done = !(e > o || e < -o), a.value = a.done ? l : l + e, a
                        },
                        flipTarget: () => {}
                    }
                }
            };

            function le(t, e, n = 0) {
                return t - e - n
            }
            const ce = t => {
                const e = ({
                    delta: e
                }) => t(e);
                return {
                    start: () => R.ZP.update(e, !0),
                    stop: () => R.qY.update(e)
                }
            };

            function fe(t) {
                var e, n, {
                        from: o,
                        autoplay: i = !0,
                        driver: a = ce,
                        elapsed: s = 0,
                        repeat: u = 0,
                        repeatType: l = "loop",
                        repeatDelay: c = 0,
                        onPlay: f,
                        onStop: d,
                        onComplete: p,
                        onRepeat: v,
                        onUpdate: h
                    } = t,
                    m = (0, r._T)(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
                let g, y, b, {
                        to: x
                    } = m,
                    S = 0,
                    w = m.duration,
                    E = !1,
                    A = !0;
                const C = function(t) {
                    if (Array.isArray(t.to)) return se;
                    if (ue[t.type]) return ue[t.type];
                    const e = new Set(Object.keys(t));
                    return e.has("ease") || e.has("duration") && !e.has("dampingRatio") ? se : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta") ? q : se
                }(m);
                (null === (n = (e = C).needsInterpolation) || void 0 === n ? void 0 : n.call(e, o, x)) && (b = Bt([0, 100], [o, x], {
                    clamp: !1
                }), o = 0, x = 100);
                const P = C(Object.assign(Object.assign({}, m), {
                    from: o,
                    to: x
                }));

                function T() {
                    S++, "reverse" === l ? (A = S % 2 === 0, s = function(t, e, n = 0, r = !0) {
                        return r ? le(e + -t, e, n) : e - (t - e) + n
                    }(s, w, c, A)) : (s = le(s, w, c), "mirror" === l && P.flipTarget()), E = !1, v && v()
                }

                function O(t) {
                    if (A || (t = -t), s += t, !E) {
                        const t = P.next(Math.max(0, s));
                        y = t.value, b && (y = b(y)), E = A ? t.done : s <= 0
                    }
                    null === h || void 0 === h || h(y), E && (0 === S && (null !== w && void 0 !== w || (w = s)), S < u ? function(t, e, n, r) {
                        return r ? t >= e + n : t <= -n
                    }(s, w, c, A) && T() : (g.stop(), p && p()))
                }
                return i && (null === f || void 0 === f || f(), g = a(O), g.start()), {
                    stop: () => {
                        null === d || void 0 === d || d(), g.stop()
                    }
                }
            }
            var de = function(t) {
                return 1e3 * t
            };
            const pe = (t, e) => 1 - 3 * e + 3 * t,
                ve = (t, e) => 3 * e - 6 * t,
                he = t => 3 * t,
                me = (t, e, n) => ((pe(e, n) * t + ve(e, n)) * t + he(e)) * t,
                ge = (t, e, n) => 3 * pe(e, n) * t * t + 2 * ve(e, n) * t + he(e);
            const ye = .1;

            function be(t, e, n, r) {
                if (t === e && n === r) return Xt;
                const o = new Float32Array(11);
                for (let a = 0; a < 11; ++a) o[a] = me(a * ye, t, n);

                function i(e) {
                    let r = 0,
                        i = 1;
                    for (; 10 !== i && o[i] <= e; ++i) r += ye;
                    --i;
                    const a = r + (e - o[i]) / (o[i + 1] - o[i]) * ye,
                        s = ge(a, t, n);
                    return s >= .001 ? function(t, e, n, r) {
                        for (let o = 0; o < 8; ++o) {
                            const o = ge(e, n, r);
                            if (0 === o) return e;
                            e -= (me(e, n, r) - t) / o
                        }
                        return e
                    }(e, a, t, n) : 0 === s ? a : function(t, e, n, r, o) {
                        let i, a, s = 0;
                        do {
                            a = e + (n - e) / 2, i = me(a, r, o) - t, i > 0 ? n = a : e = a
                        } while (Math.abs(i) > 1e-7 && ++s < 10);
                        return a
                    }(e, r, r + ye, t, n)
                }
                return t => 0 === t || 1 === t ? t : me(i(t), e, r)
            }
            var xe = {
                    linear: Xt,
                    easeIn: $t,
                    easeInOut: Zt,
                    easeOut: Gt,
                    circIn: Kt,
                    circInOut: Jt,
                    circOut: Qt,
                    backIn: te,
                    backInOut: ne,
                    backOut: ee,
                    anticipate: re,
                    bounceIn: ie,
                    bounceInOut: t => t < .5 ? .5 * (1 - oe(1 - 2 * t)) : .5 * oe(2 * t - 1) + .5,
                    bounceOut: oe
                },
                Se = function(t) {
                    if (Array.isArray(t)) {
                        t.length;
                        var e = (0, r.CR)(t, 4);
                        return be(e[0], e[1], e[2], e[3])
                    }
                    return "string" === typeof t ? ("Invalid easing type '".concat(t, "'"), xe[t]) : t
                },
                we = function(t, e) {
                    return "zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !jt.test(e) || e.startsWith("url(")))
                },
                Ee = function(t) {
                    return Array.isArray(t)
                },
                Ae = function() {
                    return {
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        restSpeed: 10
                    }
                },
                Ce = function(t) {
                    return {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                        restSpeed: 10
                    }
                },
                Pe = function() {
                    return {
                        type: "keyframes",
                        ease: "linear",
                        duration: .3
                    }
                },
                Te = function(t) {
                    return {
                        type: "keyframes",
                        duration: .8,
                        values: t
                    }
                },
                Oe = {
                    x: Ae,
                    y: Ae,
                    z: Ae,
                    rotate: Ae,
                    rotateX: Ae,
                    rotateY: Ae,
                    rotateZ: Ae,
                    scaleX: Ce,
                    scaleY: Ce,
                    scale: Ce,
                    opacity: Pe,
                    backgroundColor: Pe,
                    color: Pe,
                    default: Ce
                };
            const Re = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function Le(t) {
                let [e, n] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                const [r] = n.match(Z) || [];
                if (!r) return t;
                const o = n.replace(r, "");
                let i = Re.has(e) ? 1 : 0;
                return r !== n && (i *= 100), e + "(" + i + o + ")"
            }
            const je = /([a-z-]*)\(.*?\)/g,
                ke = Object.assign(Object.assign({}, jt), {
                    getAnimatableNone: t => {
                        const e = t.match(je);
                        return e ? e.map(Le).join(" ") : t
                    }
                });
            var Me = (0, r.pi)((0, r.pi)({}, tt), {
                    transform: Math.round
                }),
                Ve = {
                    borderWidth: dt,
                    borderTopWidth: dt,
                    borderRightWidth: dt,
                    borderBottomWidth: dt,
                    borderLeftWidth: dt,
                    borderRadius: dt,
                    radius: dt,
                    borderTopLeftRadius: dt,
                    borderTopRightRadius: dt,
                    borderBottomRightRadius: dt,
                    borderBottomLeftRadius: dt,
                    width: dt,
                    maxWidth: dt,
                    height: dt,
                    maxHeight: dt,
                    size: dt,
                    top: dt,
                    right: dt,
                    bottom: dt,
                    left: dt,
                    padding: dt,
                    paddingTop: dt,
                    paddingRight: dt,
                    paddingBottom: dt,
                    paddingLeft: dt,
                    margin: dt,
                    marginTop: dt,
                    marginRight: dt,
                    marginBottom: dt,
                    marginLeft: dt,
                    rotate: ct,
                    rotateX: ct,
                    rotateY: ct,
                    rotateZ: ct,
                    scale: nt,
                    scaleX: nt,
                    scaleY: nt,
                    scaleZ: nt,
                    skew: ct,
                    skewX: ct,
                    skewY: ct,
                    distance: dt,
                    translateX: dt,
                    translateY: dt,
                    translateZ: dt,
                    x: dt,
                    y: dt,
                    z: dt,
                    perspective: dt,
                    transformPerspective: dt,
                    opacity: et,
                    originX: ht,
                    originY: ht,
                    originZ: dt,
                    zIndex: Me,
                    fillOpacity: et,
                    strokeOpacity: et,
                    numOctaves: Me
                },
                Ie = (0, r.pi)((0, r.pi)({}, Ve), {
                    color: At,
                    backgroundColor: At,
                    outlineColor: At,
                    fill: At,
                    stroke: At,
                    borderColor: At,
                    borderTopColor: At,
                    borderRightColor: At,
                    borderBottomColor: At,
                    borderLeftColor: At,
                    filter: ke,
                    WebkitFilter: ke
                }),
                Fe = function(t) {
                    return Ie[t]
                };

            function De(t, e) {
                var n, r = Fe(t);
                return r !== ke && (r = jt), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
            }
            var Ne = !1,
                _e = function(t) {
                    return Ee(t) ? t[t.length - 1] || 0 : t
                };

            function Ue(t) {
                var e = t.ease,
                    n = t.times,
                    o = t.yoyo,
                    i = t.flip,
                    a = t.loop,
                    s = (0, r._T)(t, ["ease", "times", "yoyo", "flip", "loop"]),
                    u = (0, r.pi)({}, s);
                return n && (u.offset = n), s.duration && (u.duration = de(s.duration)), s.repeatDelay && (u.repeatDelay = de(s.repeatDelay)), e && (u.ease = function(t) {
                    return Array.isArray(t) && "number" !== typeof t[0]
                }(e) ? e.map(Se) : Se(e)), "tween" === s.type && (u.type = "keyframes"), (o || a || i) && (!0, o ? u.repeatType = "reverse" : a ? u.repeatType = "loop" : i && (u.repeatType = "mirror"), u.repeat = a || o || i || s.repeat), "spring" !== s.type && (u.type = "keyframes"), u
            }

            function ze(t, e, n) {
                var o;
                return Array.isArray(e.to) && (null !== (o = t.duration) && void 0 !== o || (t.duration = .8)),
                    function(t) {
                        Array.isArray(t.to) && null === t.to[0] && (t.to = (0, r.ev)([], (0, r.CR)(t.to), !1), t.to[0] = t.from)
                    }(e),
                    function(t) {
                        t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection, t.repeat, t.repeatType, t.repeatDelay, t.from;
                        var e = (0, r._T)(t, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
                        return !!Object.keys(e).length
                    }(t) || (t = (0, r.pi)((0, r.pi)({}, t), function(t, e) {
                        var n;
                        return n = Ee(e) ? Te : Oe[t] || Oe.default, (0, r.pi)({
                            to: e
                        }, n(e))
                    }(n, e.to))), (0, r.pi)((0, r.pi)({}, e), Ue(t))
            }

            function Be(t, e, n, o, i) {
                var a, s = qe(o, t),
                    u = null !== (a = s.from) && void 0 !== a ? a : e.get(),
                    l = we(t, n);
                "none" === u && l && "string" === typeof n ? u = De(t, n) : We(u) && "string" === typeof n ? u = He(n) : !Array.isArray(n) && We(n) && "string" === typeof u && (n = He(u));
                var c = we(t, u);
                return "You are trying to animate ".concat(t, ' from "').concat(u, '" to "').concat(n, '". ').concat(u, " is not an animatable value - to enable this animation set ").concat(u, " to a value animatable to ").concat(n, " via the `style` property."), c && l && !1 !== s.type ? function() {
                    var o = {
                        from: u,
                        to: n,
                        velocity: e.getVelocity(),
                        onComplete: i,
                        onUpdate: function(t) {
                            return e.set(t)
                        }
                    };
                    return "inertia" === s.type || "decay" === s.type ? function({
                        from: t = 0,
                        velocity: e = 0,
                        min: n,
                        max: r,
                        power: o = .8,
                        timeConstant: i = 750,
                        bounceStiffness: a = 500,
                        bounceDamping: s = 10,
                        restDelta: u = 1,
                        modifyTarget: l,
                        driver: c,
                        onUpdate: f,
                        onComplete: d,
                        onStop: p
                    }) {
                        let v;

                        function h(t) {
                            return void 0 !== n && t < n || void 0 !== r && t > r
                        }

                        function m(t) {
                            return void 0 === n ? r : void 0 === r || Math.abs(n - t) < Math.abs(r - t) ? n : r
                        }

                        function g(t) {
                            null === v || void 0 === v || v.stop(), v = fe(Object.assign(Object.assign({}, t), {
                                driver: c,
                                onUpdate: e => {
                                    var n;
                                    null === f || void 0 === f || f(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                },
                                onComplete: d,
                                onStop: p
                            }))
                        }

                        function y(t) {
                            g(Object.assign({
                                type: "spring",
                                stiffness: a,
                                damping: s,
                                restDelta: u
                            }, t))
                        }
                        if (h(t)) y({
                            from: t,
                            velocity: e,
                            to: m(t)
                        });
                        else {
                            let r = o * e + t;
                            "undefined" !== typeof l && (r = l(r));
                            const a = m(r),
                                s = a === n ? -1 : 1;
                            let c, f;
                            const d = t => {
                                c = f, f = t, e = j(t - c, (0, R.$B)().delta), (1 === s && t > a || -1 === s && t < a) && y({
                                    from: t,
                                    to: a,
                                    velocity: e
                                })
                            };
                            g({
                                type: "decay",
                                from: t,
                                velocity: e,
                                timeConstant: i,
                                power: o,
                                restDelta: u,
                                modifyTarget: l,
                                onUpdate: h(r) ? d : void 0
                            })
                        }
                        return {
                            stop: () => null === v || void 0 === v ? void 0 : v.stop()
                        }
                    }((0, r.pi)((0, r.pi)({}, o), s)) : fe((0, r.pi)((0, r.pi)({}, ze(s, o, t)), {
                        onUpdate: function(t) {
                            var e;
                            o.onUpdate(t), null === (e = s.onUpdate) || void 0 === e || e.call(s, t)
                        },
                        onComplete: function() {
                            var t;
                            o.onComplete(), null === (t = s.onComplete) || void 0 === t || t.call(s)
                        }
                    }))
                } : function() {
                    var t, r, o = _e(n);
                    return e.set(o), i(), null === (t = null === s || void 0 === s ? void 0 : s.onUpdate) || void 0 === t || t.call(s, o), null === (r = null === s || void 0 === s ? void 0 : s.onComplete) || void 0 === r || r.call(s), {
                        stop: function() {}
                    }
                }
            }

            function We(t) {
                return 0 === t || "string" === typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
            }

            function He(t) {
                return "number" === typeof t ? 0 : De("", t)
            }

            function qe(t, e) {
                return t[e] || t.default || t
            }

            function Xe(t, e, n, r) {
                return void 0 === r && (r = {}), Ne && (r = {
                    type: !1
                }), e.start((function(o) {
                    var i, a, s = Be(t, e, n, r, o),
                        u = function(t, e) {
                            var n, r;
                            return null !== (r = null !== (n = (qe(t, e) || {}).delay) && void 0 !== n ? n : t.delay) && void 0 !== r ? r : 0
                        }(r, t),
                        l = function() {
                            return a = s()
                        };
                    return u ? i = window.setTimeout(l, de(u)) : l(),
                        function() {
                            clearTimeout(i), null === a || void 0 === a || a.stop()
                        }
                }))
            }
            var $e = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                Ye = $e.length,
                Ge = function(t) {
                    return "string" === typeof t ? parseFloat(t) : t
                },
                Ze = function(t) {
                    return "number" === typeof t || dt.test(t)
                };

            function Ke(t, e) {
                var n;
                return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
            }
            var Qe = tn(0, .5, Qt),
                Je = tn(.5, .95, Xt);

            function tn(t, e, n) {
                return function(r) {
                    return r < t ? 0 : r > e ? 1 : n($(t, e, r))
                }
            }

            function en(t, e) {
                t.min = e.min, t.max = e.max
            }

            function nn(t, e) {
                en(t.x, e.x), en(t.y, e.y)
            }

            function rn(t) {
                return void 0 === t || 1 === t
            }

            function on(t) {
                var e = t.scale,
                    n = t.scaleX,
                    r = t.scaleY;
                return !rn(e) || !rn(n) || !rn(r)
            }

            function an(t) {
                return on(t) || sn(t.x) || sn(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function sn(t) {
                return t && "0%" !== t
            }

            function un(t, e, n) {
                return n + e * (t - n)
            }

            function ln(t, e, n, r, o) {
                return void 0 !== o && (t = un(t, o, r)), un(t, n, r) + e
            }

            function cn(t, e, n, r, o) {
                void 0 === e && (e = 0), void 0 === n && (n = 1), t.min = ln(t.min, e, n, r, o), t.max = ln(t.max, e, n, r, o)
            }

            function fn(t, e) {
                var n = e.x,
                    r = e.y;
                cn(t.x, n.translate, n.scale, n.originPoint), cn(t.y, r.translate, r.scale, r.originPoint)
            }

            function dn(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function pn(t, e, n) {
                var o = (0, r.CR)(n, 3),
                    i = o[0],
                    a = o[1],
                    s = o[2],
                    u = void 0 !== e[s] ? e[s] : .5,
                    l = L(t.min, t.max, u);
                cn(t, e[i], e[a], l, e.scale)
            }
            var vn = ["x", "scaleX", "originX"],
                hn = ["y", "scaleY", "originY"];

            function mn(t, e) {
                pn(t.x, e, vn), pn(t.y, e, hn)
            }
            const gn = t => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
                yn = t => gn(t) && t.hasOwnProperty("z"),
                bn = (t, e) => Math.abs(t - e);

            function xn(t, e) {
                if (kt(t) && kt(e)) return bn(t, e);
                if (gn(t) && gn(e)) {
                    const n = bn(t.x, e.x),
                        r = bn(t.y, e.y),
                        o = yn(t) && yn(e) ? bn(t.z, e.z) : 0;
                    return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
                }
            }

            function Sn(t) {
                return t.max - t.min
            }

            function wn(t, e, n) {
                return void 0 === e && (e = 0), void 0 === n && (n = .01), xn(t, e) < n
            }

            function En(t, e, n, r) {
                void 0 === r && (r = .5), t.origin = r, t.originPoint = L(e.min, e.max, t.origin), t.scale = Sn(n) / Sn(e), (wn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = L(n.min, n.max, t.origin) - t.originPoint, (wn(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function An(t, e, n, r) {
                En(t.x, e.x, n.x, null === r || void 0 === r ? void 0 : r.originX), En(t.y, e.y, n.y, null === r || void 0 === r ? void 0 : r.originY)
            }

            function Cn(t, e, n) {
                t.min = n.min + e.min, t.max = t.min + Sn(e)
            }

            function Pn(t, e, n) {
                t.min = e.min - n.min, t.max = t.min + Sn(e)
            }

            function Tn(t, e, n) {
                Pn(t.x, e.x, n.x), Pn(t.y, e.y, n.y)
            }

            function On(t, e, n, r, o) {
                return t = un(t -= e, 1 / n, r), void 0 !== o && (t = un(t, 1 / o, r)), t
            }

            function Rn(t, e, n, o, i) {
                var a = (0, r.CR)(n, 3),
                    s = a[0],
                    u = a[1],
                    l = a[2];
                ! function(t, e, n, r, o, i, a) {
                    if (void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = .5), void 0 === i && (i = t), void 0 === a && (a = t), ft.test(e) && (e = parseFloat(e), e = L(a.min, a.max, e / 100) - a.min), "number" === typeof e) {
                        var s = L(i.min, i.max, r);
                        t === i && (s -= e), t.min = On(t.min, e, n, s, o), t.max = On(t.max, e, n, s, o)
                    }
                }(t, e[s], e[u], e[l], e.scale, o, i)
            }
            var Ln = ["x", "scaleX", "originX"],
                jn = ["y", "scaleY", "originY"];

            function kn(t, e, n, r) {
                Rn(t.x, e, Ln, null === n || void 0 === n ? void 0 : n.x, null === r || void 0 === r ? void 0 : r.x), Rn(t.y, e, jn, null === n || void 0 === n ? void 0 : n.y, null === r || void 0 === r ? void 0 : r.y)
            }

            function Mn(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function Vn(t) {
                return Mn(t.x) && Mn(t.y)
            }

            function In(t, e) {
                return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
            }
            var Fn = function() {
                    function t() {
                        this.members = []
                    }
                    return t.prototype.add = function(t) {
                        k(this.members, t), t.scheduleRender()
                    }, t.prototype.remove = function(t) {
                        if (M(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                            var e = this.members[this.members.length - 1];
                            e && this.promote(e)
                        }
                    }, t.prototype.relegate = function(t) {
                        var e, n = this.members.findIndex((function(e) {
                            return t === e
                        }));
                        if (0 === n) return !1;
                        for (var r = n; r >= 0; r--) {
                            var o = this.members[r];
                            if (!1 !== o.isPresent) {
                                e = o;
                                break
                            }
                        }
                        return !!e && (this.promote(e), !0)
                    }, t.prototype.promote = function(t, e) {
                        var n, r = this.lead;
                        t !== r && (this.prevLead = r, this.lead = t, t.show(), r && (r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues, t.snapshot.isShared = !0), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0), !1 === t.options.crossfade && r.hide()))
                    }, t.prototype.exitAnimationComplete = function() {
                        this.members.forEach((function(t) {
                            var e, n, r, o, i;
                            null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (i = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (o = r.options).onExitComplete) || void 0 === i || i.call(o)
                        }))
                    }, t.prototype.scheduleRender = function() {
                        this.members.forEach((function(t) {
                            t.instance && t.scheduleRender(!1)
                        }))
                    }, t.prototype.removeLeadSnapshot = function() {
                        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                    }, t
                }(),
                Dn = {};

            function Nn(t, e, n) {
                var r = t.x.translate / e.x,
                    o = t.y.translate / e.y,
                    i = "translate3d(".concat(r, "px, ").concat(o, "px, 0) ");
                if (n) {
                    var a = n.rotate,
                        s = n.rotateX,
                        u = n.rotateY;
                    a && (i += "rotate(".concat(a, "deg) ")), s && (i += "rotateX(".concat(s, "deg) ")), u && (i += "rotateY(".concat(u, "deg) "))
                }
                return "translate3d(0px, 0px, 0) scale(1, 1)" === (i += "scale(".concat(t.x.scale, ", ").concat(t.y.scale, ")")) ? "none" : i
            }

            function _n(t) {
                return [t("x"), t("y")]
            }
            var Un = ["", "X", "Y", "Z"],
                zn = ["transformPerspective", "x", "y", "z"];

            function Bn(t, e) {
                return zn.indexOf(t) - zn.indexOf(e)
            }["translate", "scale", "rotate", "skew"].forEach((function(t) {
                return Un.forEach((function(e) {
                    return zn.push(t + e)
                }))
            }));
            var Wn = new Set(zn);

            function Hn(t) {
                return Wn.has(t)
            }
            var qn = new Set(["originX", "originY", "originZ"]);

            function Xn(t) {
                return qn.has(t)
            }
            var $n = function(t, e) {
                    return t.depth - e.depth
                },
                Yn = function() {
                    function t() {
                        this.children = [], this.isDirty = !1
                    }
                    return t.prototype.add = function(t) {
                        k(this.children, t), this.isDirty = !0
                    }, t.prototype.remove = function(t) {
                        M(this.children, t), this.isDirty = !0
                    }, t.prototype.forEach = function(t) {
                        this.isDirty && this.children.sort($n), this.isDirty = !1, this.children.forEach(t)
                    }, t
                }();

            function Gn(t) {
                var e, n = D(t) ? t.get() : t;
                return e = n, Boolean(e && "object" === typeof e && e.mix && e.toValue) ? n.toValue() : n
            }
            var Zn = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };

            function Kn(t) {
                var e = t.attachResizeListener,
                    n = t.defaultParent,
                    o = t.measureScroll,
                    i = t.resetTransform;
                return function() {
                    function t(t, e, o) {
                        var i = this;
                        void 0 === e && (e = {}), void 0 === o && (o = null === n || void 0 === n ? void 0 : n()), this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = function() {
                            i.isUpdating && (i.isUpdating = !1, i.clearAllSnapshots())
                        }, this.updateProjection = function() {
                            i.nodes.forEach(or), i.nodes.forEach(ir)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = e, this.root = o ? o.root || o : this, this.path = o ? (0, r.ev)((0, r.ev)([], (0, r.CR)(o.path), !1), [o], !1) : [], this.parent = o, this.depth = o ? o.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                        for (var a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new Yn)
                    }
                    return t.prototype.addEventListener = function(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new V), this.eventHandlers.get(t).add(e)
                    }, t.prototype.notifyListeners = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var o = this.eventHandlers.get(t);
                        null === o || void 0 === o || o.notify.apply(o, (0, r.ev)([], (0, r.CR)(e), !1))
                    }, t.prototype.hasListeners = function(t) {
                        return this.eventHandlers.has(t)
                    }, t.prototype.registerPotentialNode = function(t, e) {
                        this.potentialNodes.set(t, e)
                    }, t.prototype.mount = function(t, n) {
                        var o, i = this;
                        if (void 0 === n && (n = !1), !this.instance) {
                            this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
                            var a = this.options,
                                s = a.layoutId,
                                u = a.layout,
                                l = a.visualElement;
                            if (l && !l.getInstance() && l.mount(t), this.root.nodes.add(this), null === (o = this.parent) || void 0 === o || o.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (u || s) && (this.isLayoutDirty = !0), e) {
                                var c, f = function() {
                                    return i.root.updateBlockedByResize = !1
                                };
                                e(t, (function() {
                                    i.root.updateBlockedByResize = !0, clearTimeout(c), c = window.setTimeout(f, 250), Zn.hasAnimatedSinceResize && (Zn.hasAnimatedSinceResize = !1, i.nodes.forEach(rr))
                                }))
                            }
                            s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && l && (s || u) && this.addEventListener("didUpdate", (function(t) {
                                var e, n, o, a, s, u = t.delta,
                                    c = t.hasLayoutChanged,
                                    f = t.hasRelativeTargetChanged,
                                    d = t.layout;
                                if (i.isTreeAnimationBlocked()) return i.target = void 0, void(i.relativeTarget = void 0);
                                var p = null !== (n = null !== (e = i.options.transition) && void 0 !== e ? e : l.getDefaultTransition()) && void 0 !== n ? n : fr,
                                    v = l.getProps(),
                                    h = v.onLayoutAnimationStart,
                                    m = v.onLayoutAnimationComplete,
                                    g = !i.targetLayout || !In(i.targetLayout, d) || f,
                                    y = !c && f;
                                if ((null === (o = i.resumeFrom) || void 0 === o ? void 0 : o.instance) || y || c && (g || !i.currentAnimation)) {
                                    i.resumeFrom && (i.resumingFrom = i.resumeFrom, i.resumingFrom.resumingFrom = void 0), i.setAnimationOrigin(u, y);
                                    var b = (0, r.pi)((0, r.pi)({}, qe(p, "layout")), {
                                        onPlay: h,
                                        onComplete: m
                                    });
                                    l.shouldReduceMotion && (b.delay = 0, b.type = !1), i.startAnimation(b)
                                } else c || 0 !== i.animationProgress || i.finishAnimation(), i.isLead() && (null === (s = (a = i.options).onExitComplete) || void 0 === s || s.call(a));
                                i.targetLayout = d
                            }))
                        }
                    }, t.prototype.unmount = function() {
                        var t, e;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, R.qY.preRender(this.updateProjection)
                    }, t.prototype.blockUpdate = function() {
                        this.updateManuallyBlocked = !0
                    }, t.prototype.unblockUpdate = function() {
                        this.updateManuallyBlocked = !1
                    }, t.prototype.isUpdateBlocked = function() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }, t.prototype.isTreeAnimationBlocked = function() {
                        var t;
                        return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                    }, t.prototype.startUpdate = function() {
                        var t;
                        this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(ar))
                    }, t.prototype.willUpdate = function(t) {
                        var e, n, r;
                        if (void 0 === t && (t = !0), this.root.isUpdateBlocked()) null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
                        else if (!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty) {
                            this.isLayoutDirty = !0;
                            for (var o = 0; o < this.path.length; o++) {
                                var i = this.path[o];
                                i.shouldResetTransform = !0, i.updateScroll()
                            }
                            var a = this.options,
                                s = a.layoutId,
                                u = a.layout;
                            if (void 0 !== s || u) {
                                var l = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                                this.prevTransformTemplateValue = null === l || void 0 === l ? void 0 : l(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                            }
                        }
                    }, t.prototype.didUpdate = function() {
                        if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(er);
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(dr), this.potentialNodes.clear()), this.nodes.forEach(nr), this.nodes.forEach(Qn), this.nodes.forEach(Jn), this.clearAllSnapshots(), R.iW.update(), R.iW.preRender(), R.iW.render())
                    }, t.prototype.clearAllSnapshots = function() {
                        this.nodes.forEach(tr), this.sharedNodes.forEach(sr)
                    }, t.prototype.scheduleUpdateProjection = function() {
                        R.ZP.preRender(this.updateProjection, !1, !0)
                    }, t.prototype.scheduleCheckAfterUnmount = function() {
                        var t = this;
                        R.ZP.postRender((function() {
                            t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed()
                        }))
                    }, t.prototype.updateSnapshot = function() {
                        if (!this.snapshot && this.instance) {
                            var t = this.measure(),
                                e = this.removeTransform(this.removeElementScroll(t));
                            vr(e), this.snapshot = {
                                measured: t,
                                layout: e,
                                latestValues: {}
                            }
                        }
                    }, t.prototype.updateLayout = function() {
                        var t;
                        if (this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                            if (this.resumeFrom && !this.resumeFrom.instance)
                                for (var e = 0; e < this.path.length; e++) {
                                    this.path[e].updateScroll()
                                }
                            var n = this.measure();
                            vr(n);
                            var r = this.layout;
                            this.layout = {
                                measured: n,
                                actual: this.removeElementScroll(n)
                            }, this.layoutCorrected = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            }, this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null === r || void 0 === r ? void 0 : r.actual)
                        }
                    }, t.prototype.updateScroll = function() {
                        this.options.layoutScroll && this.instance && (this.scroll = o(this.instance))
                    }, t.prototype.resetTransform = function() {
                        var t;
                        if (i) {
                            var e = this.isLayoutDirty || this.shouldResetTransform,
                                n = this.projectionDelta && !Vn(this.projectionDelta),
                                r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                                o = null === r || void 0 === r ? void 0 : r(this.latestValues, ""),
                                a = o !== this.prevTransformTemplateValue;
                            e && (n || an(this.latestValues) || a) && (i(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
                        }
                    }, t.prototype.measure = function() {
                        var t = this.options.visualElement;
                        if (!t) return {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        var e = t.measureViewportBox(),
                            n = this.root.scroll;
                        return n && (dn(e.x, n.x), dn(e.y, n.y)), e
                    }, t.prototype.removeElementScroll = function(t) {
                        var e = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        nn(e, t);
                        for (var n = 0; n < this.path.length; n++) {
                            var r = this.path[n],
                                o = r.scroll,
                                i = r.options;
                            r !== this.root && o && i.layoutScroll && (dn(e.x, o.x), dn(e.y, o.y))
                        }
                        return e
                    }, t.prototype.applyTransform = function(t, e) {
                        void 0 === e && (e = !1);
                        var n = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        nn(n, t);
                        for (var r = 0; r < this.path.length; r++) {
                            var o = this.path[r];
                            !e && o.options.layoutScroll && o.scroll && o !== o.root && mn(n, {
                                x: -o.scroll.x,
                                y: -o.scroll.y
                            }), an(o.latestValues) && mn(n, o.latestValues)
                        }
                        return an(this.latestValues) && mn(n, this.latestValues), n
                    }, t.prototype.removeTransform = function(t) {
                        var e, n = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        nn(n, t);
                        for (var r = 0; r < this.path.length; r++) {
                            var o = this.path[r];
                            if (o.instance && an(o.latestValues)) {
                                on(o.latestValues) && o.updateSnapshot();
                                var i = {
                                    x: {
                                        min: 0,
                                        max: 0
                                    },
                                    y: {
                                        min: 0,
                                        max: 0
                                    }
                                };
                                nn(i, o.measure()), kn(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layout, i)
                            }
                        }
                        return an(this.latestValues) && kn(n, this.latestValues), n
                    }, t.prototype.setTargetDelta = function(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection()
                    }, t.prototype.setOptions = function(t) {
                        var e;
                        this.options = (0, r.pi)((0, r.pi)((0, r.pi)({}, this.options), t), {
                            crossfade: null === (e = t.crossfade) || void 0 === e || e
                        })
                    }, t.prototype.clearMeasurements = function() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }, t.prototype.resolveTargetDelta = function() {
                        var t, e, n, r, o = this.options,
                            i = o.layout,
                            a = o.layoutId;
                        this.layout && (i || a) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.relativeTargetOrigin = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, Tn(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), nn(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.targetWithTransforms = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (e = this.target, n = this.relativeTarget, r = this.relativeParent.target, Cn(e.x, n.x, r.x), Cn(e.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : nn(this.target, this.layout.actual), fn(this.target, this.targetDelta)) : nn(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.relativeTargetOrigin = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, Tn(this.relativeTargetOrigin, this.target, this.relativeParent.target), nn(this.relativeTarget, this.relativeTargetOrigin)))))
                    }, t.prototype.getClosestProjectingParent = function() {
                        if (this.parent && !an(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }, t.prototype.calcProjection = function() {
                        var t, e = this.options,
                            n = e.layout,
                            r = e.layoutId;
                        if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (n || r)) {
                            var o = this.getLead();
                            nn(this.layoutCorrected, this.layout.actual),
                                function(t, e, n, r) {
                                    var o, i;
                                    void 0 === r && (r = !1);
                                    var a = n.length;
                                    if (a) {
                                        var s, u;
                                        e.x = e.y = 1;
                                        for (var l = 0; l < a; l++) u = (s = n[l]).projectionDelta, "contents" !== (null === (i = null === (o = s.instance) || void 0 === o ? void 0 : o.style) || void 0 === i ? void 0 : i.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && mn(t, {
                                            x: -s.scroll.x,
                                            y: -s.scroll.y
                                        }), u && (e.x *= u.x.scale, e.y *= u.y.scale, fn(t, u)), r && an(s.latestValues) && mn(t, s.latestValues))
                                    }
                                }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== o);
                            var i = o.target;
                            if (i) {
                                this.projectionDelta || (this.projectionDelta = {
                                    x: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    },
                                    y: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    }
                                }, this.projectionDeltaWithTransform = {
                                    x: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    },
                                    y: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    }
                                });
                                var a = this.treeScale.x,
                                    s = this.treeScale.y,
                                    u = this.projectionTransform;
                                An(this.projectionDelta, this.layoutCorrected, i, this.latestValues), this.projectionTransform = Nn(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === a && this.treeScale.y === s || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", i))
                            }
                        }
                    }, t.prototype.hide = function() {
                        this.isVisible = !1
                    }, t.prototype.show = function() {
                        this.isVisible = !0
                    }, t.prototype.scheduleRender = function(t) {
                        var e, n, r;
                        void 0 === t && (t = !0), null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }, t.prototype.setAnimationOrigin = function(t, e) {
                        var n, o = this;
                        void 0 === e && (e = !1);
                        var i = this.snapshot,
                            a = (null === i || void 0 === i ? void 0 : i.latestValues) || {},
                            s = (0, r.pi)({}, this.latestValues),
                            u = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            };
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
                        var l = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            },
                            c = null === i || void 0 === i ? void 0 : i.isShared,
                            f = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1,
                            d = Boolean(c && !f && !0 === this.options.crossfade && !this.path.some(cr));
                        this.animationProgress = 0, this.mixTargetDelta = function(e) {
                            var n, r, i, p, v, h = e / 1e3;
                            ur(u.x, t.x, h), ur(u.y, t.y, h), o.setTargetDelta(u), o.relativeTarget && o.relativeTargetOrigin && o.layout && (null === (n = o.relativeParent) || void 0 === n ? void 0 : n.layout) && (Tn(l, o.layout.actual, o.relativeParent.layout.actual), r = o.relativeTarget, i = o.relativeTargetOrigin, p = l, v = h, lr(r.x, i.x, p.x, v), lr(r.y, i.y, p.y, v)), c && (o.animationValues = s, function(t, e, n, r, o, i) {
                                var a, s, u, l;
                                o ? (t.opacity = L(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, Qe(r)), t.opacityExit = L(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, Je(r))) : i && (t.opacity = L(null !== (u = e.opacity) && void 0 !== u ? u : 1, null !== (l = n.opacity) && void 0 !== l ? l : 1, r));
                                for (var c = 0; c < Ye; c++) {
                                    var f = "border".concat($e[c], "Radius"),
                                        d = Ke(e, f),
                                        p = Ke(n, f);
                                    void 0 === d && void 0 === p || (d || (d = 0), p || (p = 0), 0 === d || 0 === p || Ze(d) === Ze(p) ? (t[f] = Math.max(L(Ge(d), Ge(p), r), 0), (ft.test(p) || ft.test(d)) && (t[f] += "%")) : t[f] = p)
                                }(e.rotate || n.rotate) && (t.rotate = L(e.rotate || 0, n.rotate || 0, r))
                            }(s, a, o.latestValues, h, d, f)), o.root.scheduleUpdateProjection(), o.scheduleRender(), o.animationProgress = h
                        }, this.mixTargetDelta(0)
                    }, t.prototype.startAnimation = function(t) {
                        var e, n, o = this;
                        this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (R.qY.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = R.ZP.update((function() {
                            Zn.hasAnimatedSinceResize = !0, o.currentAnimation = function(t, e, n) {
                                void 0 === n && (n = {});
                                var r = D(t) ? t : F(t);
                                return Xe("", r, e, n), {
                                    stop: function() {
                                        return r.stop()
                                    },
                                    isAnimating: function() {
                                        return r.isAnimating()
                                    }
                                }
                            }(0, 1e3, (0, r.pi)((0, r.pi)({}, t), {
                                onUpdate: function(e) {
                                    var n;
                                    o.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                },
                                onComplete: function() {
                                    var e;
                                    null === (e = t.onComplete) || void 0 === e || e.call(t), o.completeAnimation()
                                }
                            })), o.resumingFrom && (o.resumingFrom.currentAnimation = o.currentAnimation), o.pendingAnimation = void 0
                        }))
                    }, t.prototype.completeAnimation = function() {
                        var t;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }, t.prototype.finishAnimation = function() {
                        var t;
                        this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }, t.prototype.applyTransformsToTarget = function() {
                        var t = this.getLead(),
                            e = t.targetWithTransforms,
                            n = t.target,
                            r = t.layout,
                            o = t.latestValues;
                        e && n && r && (nn(e, n), mn(e, o), An(this.projectionDeltaWithTransform, this.layoutCorrected, e, o))
                    }, t.prototype.registerSharedNode = function(t, e) {
                        var n, r, o;
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new Fn), this.sharedNodes.get(t).add(e), e.promote({
                            transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (o = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(r, e)
                        })
                    }, t.prototype.isLead = function() {
                        var t = this.getStack();
                        return !t || t.lead === this
                    }, t.prototype.getLead = function() {
                        var t;
                        return this.options.layoutId && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }, t.prototype.getPrevLead = function() {
                        var t;
                        return this.options.layoutId ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }, t.prototype.getStack = function() {
                        var t = this.options.layoutId;
                        if (t) return this.root.sharedNodes.get(t)
                    }, t.prototype.promote = function(t) {
                        var e = void 0 === t ? {} : t,
                            n = e.needsReset,
                            r = e.transition,
                            o = e.preserveFollowOpacity,
                            i = this.getStack();
                        i && i.promote(this, o), n && (this.projectionDelta = void 0, this.needsReset = !0), r && this.setOptions({
                            transition: r
                        })
                    }, t.prototype.relegate = function() {
                        var t = this.getStack();
                        return !!t && t.relegate(this)
                    }, t.prototype.resetRotation = function() {
                        var t = this.options.visualElement;
                        if (t) {
                            for (var e = !1, n = {}, r = 0; r < Un.length; r++) {
                                var o = "rotate" + Un[r];
                                t.getStaticValue(o) && (e = !0, n[o] = t.getStaticValue(o), t.setStaticValue(o, 0))
                            }
                            if (e) {
                                for (var o in null === t || void 0 === t || t.syncRender(), n) t.setStaticValue(o, n[o]);
                                t.scheduleRender()
                            }
                        }
                    }, t.prototype.getProjectionStyles = function(t) {
                        var e, n, r, o, i, a;
                        void 0 === t && (t = {});
                        var s = {};
                        if (!this.instance || this.isSVG) return s;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        s.visibility = "";
                        var u = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = Gn(t.pointerEvents) || "", s.transform = u ? u(this.latestValues, "") : "none", s;
                        var l = this.getLead();
                        if (!this.projectionDelta || !this.layout || !l.target) {
                            var c = {};
                            return this.options.layoutId && (c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1, c.pointerEvents = Gn(t.pointerEvents) || ""), this.hasProjected && !an(this.latestValues) && (c.transform = u ? u({}, "") : "none", this.hasProjected = !1), c
                        }
                        var f = l.animationValues || l.latestValues;
                        this.applyTransformsToTarget(), s.transform = Nn(this.projectionDeltaWithTransform, this.treeScale, f), u && (s.transform = u(f, s.transform));
                        var d = this.projectionDelta,
                            p = d.x,
                            v = d.y;
                        for (var h in s.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * v.origin, "% 0"), l.animationValues ? s.opacity = l === this ? null !== (o = null !== (r = f.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : s.opacity = l === this ? null !== (i = f.opacity) && void 0 !== i ? i : "" : null !== (a = f.opacityExit) && void 0 !== a ? a : 0, Dn)
                            if (void 0 !== f[h]) {
                                var m = Dn[h],
                                    g = m.correct,
                                    y = m.applyTo,
                                    b = g(f[h], l);
                                if (y)
                                    for (var x = y.length, S = 0; S < x; S++) s[y[S]] = b;
                                else s[h] = b
                            }
                        return this.options.layoutId && (s.pointerEvents = l === this ? Gn(t.pointerEvents) || "" : "none"), s
                    }, t.prototype.clearSnapshot = function() {
                        this.resumeFrom = this.snapshot = void 0
                    }, t.prototype.resetTree = function() {
                        this.root.nodes.forEach((function(t) {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        })), this.root.nodes.forEach(er), this.root.sharedNodes.clear()
                    }, t
                }()
            }

            function Qn(t) {
                t.updateLayout()
            }

            function Jn(t) {
                var e, n, r, o, i = null !== (n = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== n ? n : t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    var a = t.layout,
                        s = a.actual,
                        u = a.measured;
                    "size" === t.options.animationType ? _n((function(t) {
                        var e = i.isShared ? i.measured[t] : i.layout[t],
                            n = Sn(e);
                        e.min = s[t].min, e.max = e.min + n
                    })) : "position" === t.options.animationType && _n((function(t) {
                        var e = i.isShared ? i.measured[t] : i.layout[t],
                            n = Sn(s[t]);
                        e.max = e.min + n
                    }));
                    var l = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    An(l, s, i.layout);
                    var c = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    i.isShared ? An(c, t.applyTransform(u, !0), i.measured) : An(c, s, i.layout);
                    var f = !Vn(l),
                        d = !1;
                    if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
                        var p = t.relativeParent,
                            v = p.snapshot,
                            h = p.layout;
                        if (v && h) {
                            var m = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            Tn(m, i.layout, v.layout);
                            var g = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            Tn(g, s, h.actual), In(m, g) || (d = !0)
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: s,
                        snapshot: i,
                        delta: c,
                        layoutDelta: l,
                        hasLayoutChanged: f,
                        hasRelativeTargetChanged: d
                    })
                } else t.isLead() && (null === (o = (r = t.options).onExitComplete) || void 0 === o || o.call(r));
                t.options.transition = void 0
            }

            function tr(t) {
                t.clearSnapshot()
            }

            function er(t) {
                t.clearMeasurements()
            }

            function nr(t) {
                var e = t.options.visualElement;
                (null === e || void 0 === e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform()
            }

            function rr(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
            }

            function or(t) {
                t.resolveTargetDelta()
            }

            function ir(t) {
                t.calcProjection()
            }

            function ar(t) {
                t.resetRotation()
            }

            function sr(t) {
                t.removeLeadSnapshot()
            }

            function ur(t, e, n) {
                t.translate = L(e.translate, 0, n), t.scale = L(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function lr(t, e, n, r) {
                t.min = L(e.min, n.min, r), t.max = L(e.max, n.max, r)
            }

            function cr(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            var fr = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function dr(t, e) {
                for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
                    if (Boolean(t.path[r].instance)) {
                        n = t.path[r];
                        break
                    }
                var o = (n && n !== t.root ? n.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
                o && t.mount(o, !0)
            }

            function pr(t) {
                t.min = Math.round(t.min), t.max = Math.round(t.max)
            }

            function vr(t) {
                pr(t.x), pr(t.y)
            }
            var hr = 1;
            var mr = n(5364),
                gr = (0, o.createContext)({});
            var yr = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0, r.ZT)(e, t), e.prototype.getSnapshotBeforeUpdate = function() {
                    return this.updateProps(), null
                }, e.prototype.componentDidUpdate = function() {}, e.prototype.updateProps = function() {
                    var t = this.props,
                        e = t.visualElement,
                        n = t.props;
                    e && e.setProps(n)
                }, e.prototype.render = function() {
                    return this.props.children
                }, e
            }(o.Component);

            function br(t) {
                var e = t.preloadedFeatures,
                    n = t.createVisualElement,
                    i = t.projectionNodeConstructor,
                    d = t.useRender,
                    p = t.useVisualState,
                    h = t.Component;
                return e && function(t) {
                    for (var e in t) null !== t[e] && ("projectionNodeConstructor" === e ? a.projectionNodeConstructor = t[e] : a[e].Component = t[e])
                }(e), (0, o.forwardRef)((function(t, e) {
                    var m = function(t) {
                        var e, n = t.layoutId,
                            r = null === (e = (0, o.useContext)(mr.p)) || void 0 === e ? void 0 : e.id;
                        return r && void 0 !== n ? r + "-" + n : n
                    }(t);
                    t = (0, r.pi)((0, r.pi)({}, t), {
                        layoutId: m
                    });
                    var g = (0, o.useContext)(c),
                        x = null,
                        S = P(t),
                        w = g.isStatic ? void 0 : (0, O.h)((function() {
                            if (Zn.hasEverUpdated) return hr++
                        })),
                        E = p(t, g.isStatic);
                    return !g.isStatic && v.j && (S.visualElement = y(h, E, (0, r.pi)((0, r.pi)({}, g), t), n), function(t, e, n, r) {
                        var i, a = e.layoutId,
                            s = e.layout,
                            u = e.drag,
                            l = e.dragConstraints,
                            c = e.layoutScroll,
                            f = (0, o.useContext)(gr);
                        r && n && !(null === n || void 0 === n ? void 0 : n.projection) && (n.projection = new r(t, n.getLatestValues(), null === (i = n.parent) || void 0 === i ? void 0 : i.projection), n.projection.setOptions({
                            layoutId: a,
                            layout: s,
                            alwaysMeasureLayout: Boolean(u) || l && b(l),
                            visualElement: n,
                            scheduleRender: function() {
                                return n.scheduleRender()
                            },
                            animationType: "string" === typeof s ? s : "both",
                            initialPromotionConfig: f,
                            layoutScroll: c
                        }))
                    }(w, t, S.visualElement, i || a.projectionNodeConstructor), x = function(t, e, n) {
                        var i = [];
                        if ((0, o.useContext)(s), !e) return null;
                        for (var c = 0; c < l; c++) {
                            var f = u[c],
                                d = a[f],
                                p = d.isEnabled,
                                v = d.Component;
                            p(t) && v && i.push(o.createElement(v, (0, r.pi)({
                                key: f
                            }, t, {
                                visualElement: e
                            })))
                        }
                        return i
                    }(t, S.visualElement)), o.createElement(yr, {
                        visualElement: S.visualElement,
                        props: (0, r.pi)((0, r.pi)({}, g), t)
                    }, x, o.createElement(f.Provider, {
                        value: S
                    }, d(h, t, w, function(t, e, n) {
                        return (0, o.useCallback)((function(r) {
                            var o;
                            r && (null === (o = t.mount) || void 0 === o || o.call(t, r)), e && (r ? e.mount(r) : e.unmount()), n && ("function" === typeof n ? n(r) : b(n) && (n.current = r))
                        }), [e])
                    }(E, S.visualElement, e), E, g.isStatic, S.visualElement)))
                }))
            }

            function xr(t) {
                function e(e, n) {
                    return void 0 === n && (n = {}), br(t(e, n))
                }
                if ("undefined" === typeof Proxy) return e;
                var n = new Map;
                return new Proxy(e, {
                    get: function(t, r) {
                        return n.has(r) || n.set(r, e(r)), n.get(r)
                    }
                })
            }
            var Sr = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

            function wr(t) {
                return "string" === typeof t && !t.includes("-") && !!(Sr.indexOf(t) > -1 || /[A-Z]/.test(t))
            }

            function Er(t, e) {
                var n = e.layout,
                    r = e.layoutId;
                return Hn(t) || Xn(t) || (n || void 0 !== r) && (!!Dn[t] || "opacity" === t)
            }
            var Ar = {
                x: "translateX",
                y: "translateY",
                z: "translateZ",
                transformPerspective: "perspective"
            };

            function Cr(t) {
                return t.startsWith("--")
            }
            var Pr = function(t, e) {
                return e && "number" === typeof t ? e.transform(t) : t
            };

            function Tr(t, e, n, r) {
                var o, i = t.style,
                    a = t.vars,
                    s = t.transform,
                    u = t.transformKeys,
                    l = t.transformOrigin;
                u.length = 0;
                var c = !1,
                    f = !1,
                    d = !0;
                for (var p in e) {
                    var v = e[p];
                    if (Cr(p)) a[p] = v;
                    else {
                        var h = Ve[p],
                            m = Pr(v, h);
                        if (Hn(p)) {
                            if (c = !0, s[p] = m, u.push(p), !d) continue;
                            v !== (null !== (o = h.default) && void 0 !== o ? o : 0) && (d = !1)
                        } else Xn(p) ? (l[p] = m, f = !0) : i[p] = m
                    }
                }
                c ? i.transform = function(t, e, n, r) {
                    var o = t.transform,
                        i = t.transformKeys,
                        a = e.enableHardwareAcceleration,
                        s = void 0 === a || a,
                        u = e.allowTransformNone,
                        l = void 0 === u || u,
                        c = "";
                    i.sort(Bn);
                    for (var f = !1, d = i.length, p = 0; p < d; p++) {
                        var v = i[p];
                        c += "".concat(Ar[v] || v, "(").concat(o[v], ") "), "z" === v && (f = !0)
                    }
                    return !f && s ? c += "translateZ(0)" : c = c.trim(), r ? c = r(o, n ? "" : c) : l && n && (c = "none"), c
                }(t, n, d, r) : r ? i.transform = r({}, "") : !e.transform && i.transform && (i.transform = "none"), f && (i.transformOrigin = function(t) {
                    var e = t.originX,
                        n = void 0 === e ? "50%" : e,
                        r = t.originY,
                        o = void 0 === r ? "50%" : r,
                        i = t.originZ,
                        a = void 0 === i ? 0 : i;
                    return "".concat(n, " ").concat(o, " ").concat(a)
                }(l))
            }
            var Or = function() {
                return {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                }
            };

            function Rr(t, e, n) {
                for (var r in e) D(e[r]) || Er(r, n) || (t[r] = e[r])
            }

            function Lr(t, e, n) {
                var i = {};
                return Rr(i, t.style || {}, t), Object.assign(i, function(t, e, n) {
                    var i = t.transformTemplate;
                    return (0, o.useMemo)((function() {
                        var t = {
                            style: {},
                            transform: {},
                            transformKeys: [],
                            transformOrigin: {},
                            vars: {}
                        };
                        Tr(t, e, {
                            enableHardwareAcceleration: !n
                        }, i);
                        var o = t.vars,
                            a = t.style;
                        return (0, r.pi)((0, r.pi)({}, o), a)
                    }), [e])
                }(t, e, n)), t.transformValues && (i = t.transformValues(i)), i
            }

            function jr(t, e, n) {
                var r = {},
                    o = Lr(t, e, n);
                return Boolean(t.drag) && !1 !== t.dragListener && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")), r.style = o, r
            }
            var kr = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

            function Mr(t) {
                return kr.has(t)
            }
            var Vr, Ir = function(t) {
                return !Mr(t)
            };
            try {
                (Vr = require("@emotion/is-prop-valid").default) && (Ir = function(t) {
                    return t.startsWith("on") ? !Mr(t) : Vr(t)
                })
            } catch (ia) {}

            function Fr(t, e, n) {
                return "string" === typeof t ? t : dt.transform(e + n * t)
            }
            var Dr = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                Nr = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function _r(t, e, n, o) {
                var i = e.attrX,
                    a = e.attrY,
                    s = e.originX,
                    u = e.originY,
                    l = e.pathLength,
                    c = e.pathSpacing,
                    f = void 0 === c ? 1 : c,
                    d = e.pathOffset,
                    p = void 0 === d ? 0 : d;
                Tr(t, (0, r._T)(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, o), t.attrs = t.style, t.style = {};
                var v = t.attrs,
                    h = t.style,
                    m = t.dimensions;
                v.transform && (m && (h.transform = v.transform), delete v.transform), m && (void 0 !== s || void 0 !== u || h.transform) && (h.transformOrigin = function(t, e, n) {
                    var r = Fr(e, t.x, t.width),
                        o = Fr(n, t.y, t.height);
                    return "".concat(r, " ").concat(o)
                }(m, void 0 !== s ? s : .5, void 0 !== u ? u : .5)), void 0 !== i && (v.x = i), void 0 !== a && (v.y = a), void 0 !== l && function(t, e, n, r, o) {
                    void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === o && (o = !0), t.pathLength = 1;
                    var i = o ? Dr : Nr;
                    t[i.offset] = dt.transform(-r);
                    var a = dt.transform(e),
                        s = dt.transform(n);
                    t[i.array] = "".concat(a, " ").concat(s)
                }(v, l, f, p, !1)
            }
            var Ur = function() {
                return (0, r.pi)((0, r.pi)({}, {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                }), {
                    attrs: {}
                })
            };

            function zr(t, e) {
                var n = (0, o.useMemo)((function() {
                    var n = Ur();
                    return _r(n, e, {
                        enableHardwareAcceleration: !1
                    }, t.transformTemplate), (0, r.pi)((0, r.pi)({}, n.attrs), {
                        style: (0, r.pi)({}, n.style)
                    })
                }), [e]);
                if (t.style) {
                    var i = {};
                    Rr(i, t.style, t), n.style = (0, r.pi)((0, r.pi)({}, i), n.style)
                }
                return n
            }

            function Br(t) {
                void 0 === t && (t = !1);
                return function(e, n, i, a, s, u) {
                    var l = s.latestValues,
                        c = (wr(e) ? zr : jr)(n, l, u),
                        f = function(t, e, n) {
                            var r = {};
                            for (var o in t)(Ir(o) || !0 === n && Mr(o) || !e && !Mr(o) || t.draggable && o.startsWith("onDrag")) && (r[o] = t[o]);
                            return r
                        }(n, "string" === typeof e, t),
                        d = (0, r.pi)((0, r.pi)((0, r.pi)({}, f), c), {
                            ref: a
                        });
                    return i && (d["data-projection-id"] = i), (0, o.createElement)(e, d)
                }
            }
            var Wr = /([a-z])([A-Z])/g,
                Hr = function(t) {
                    return t.replace(Wr, "$1-$2").toLowerCase()
                };

            function qr(t, e, n, r) {
                var o = e.style,
                    i = e.vars;
                for (var a in Object.assign(t.style, o, r && r.getProjectionStyles(n)), i) t.style.setProperty(a, i[a])
            }
            var Xr = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

            function $r(t, e, n, r) {
                for (var o in qr(t, e, void 0, r), e.attrs) t.setAttribute(Xr.has(o) ? o : Hr(o), e.attrs[o])
            }

            function Yr(t) {
                var e = t.style,
                    n = {};
                for (var r in e)(D(e[r]) || Er(r, t)) && (n[r] = e[r]);
                return n
            }

            function Gr(t) {
                var e = Yr(t);
                for (var n in t) {
                    if (D(t[n])) e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]
                }
                return e
            }

            function Zr(t) {
                return "object" === typeof t && "function" === typeof t.start
            }

            function Kr(t, e, n, r) {
                var o = t.scrapeMotionValuesFromProps,
                    i = t.createRenderState,
                    a = t.onMount,
                    s = {
                        latestValues: Jr(e, n, r, o),
                        renderState: i()
                    };
                return a && (s.mount = function(t) {
                    return a(e, t, s)
                }), s
            }
            var Qr = function(t) {
                return function(e, n) {
                    var r = (0, o.useContext)(f),
                        i = (0, o.useContext)(d.O);
                    return n ? Kr(t, e, r, i) : (0, O.h)((function() {
                        return Kr(t, e, r, i)
                    }))
                }
            };

            function Jr(t, e, n, o) {
                var i = {},
                    a = !1 === (null === n || void 0 === n ? void 0 : n.initial),
                    s = o(t);
                for (var u in s) i[u] = Gn(s[u]);
                var l = t.initial,
                    c = t.animate,
                    f = A(t),
                    d = C(t);
                e && d && !f && !1 !== t.inherit && (null !== l && void 0 !== l || (l = e.initial), null !== c && void 0 !== c || (c = e.animate));
                var p = a || !1 === l,
                    v = p ? c : l;
                v && "boolean" !== typeof v && !Zr(v) && (Array.isArray(v) ? v : [v]).forEach((function(e) {
                    var n = w(t, e);
                    if (n) {
                        var o = n.transitionEnd;
                        n.transition;
                        var a = (0, r._T)(n, ["transitionEnd", "transition"]);
                        for (var s in a) {
                            var u = a[s];
                            if (Array.isArray(u)) u = u[p ? u.length - 1 : 0];
                            null !== u && (i[s] = u)
                        }
                        for (var s in o) i[s] = o[s]
                    }
                }));
                return i
            }
            var to, eo = {
                    useVisualState: Qr({
                        scrapeMotionValuesFromProps: Gr,
                        createRenderState: Ur,
                        onMount: function(t, e, n) {
                            var r = n.renderState,
                                o = n.latestValues;
                            try {
                                r.dimensions = "function" === typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (i) {
                                r.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            _r(r, o, {
                                enableHardwareAcceleration: !1
                            }, t.transformTemplate), $r(e, r)
                        }
                    })
                },
                no = {
                    useVisualState: Qr({
                        scrapeMotionValuesFromProps: Yr,
                        createRenderState: Or
                    })
                };

            function ro(t, e, n, r) {
                return t.addEventListener(e, n, r),
                    function() {
                        return t.removeEventListener(e, n, r)
                    }
            }

            function oo(t, e, n, r) {
                (0, o.useEffect)((function() {
                    var o = t.current;
                    if (n && o) return ro(o, e, n, r)
                }), [t, e, n, r])
            }

            function io(t) {
                return "undefined" !== typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
            }

            function ao(t) {
                return !!t.touches
            }! function(t) {
                t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
            }(to || (to = {}));
            var so = {
                pageX: 0,
                pageY: 0
            };

            function uo(t, e) {
                void 0 === e && (e = "page");
                var n = t.touches[0] || t.changedTouches[0] || so;
                return {
                    x: n[e + "X"],
                    y: n[e + "Y"]
                }
            }

            function lo(t, e) {
                return void 0 === e && (e = "page"), {
                    x: t[e + "X"],
                    y: t[e + "Y"]
                }
            }

            function co(t, e) {
                return void 0 === e && (e = "page"), {
                    point: ao(t) ? uo(t, e) : lo(t, e)
                }
            }
            var fo = function(t, e) {
                    void 0 === e && (e = !1);
                    var n, r = function(e) {
                        return t(e, co(e))
                    };
                    return e ? (n = r, function(t) {
                        var e = t instanceof MouseEvent;
                        (!e || e && 0 === t.button) && n(t)
                    }) : r
                },
                po = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                vo = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function ho(t) {
                return v.j && null === window.onpointerdown ? t : v.j && null === window.ontouchstart ? vo[t] : v.j && null === window.onmousedown ? po[t] : t
            }

            function mo(t, e, n, r) {
                return ro(t, ho(e), fo(n, "pointerdown" === e), r)
            }

            function go(t, e, n, r) {
                return oo(t, ho(e), n && fo(n, "pointerdown" === e), r)
            }

            function yo(t) {
                var e = null;
                return function() {
                    return null === e && (e = t, function() {
                        e = null
                    })
                }
            }
            var bo = yo("dragHorizontal"),
                xo = yo("dragVertical");

            function So(t) {
                var e = !1;
                if ("y" === t) e = xo();
                else if ("x" === t) e = bo();
                else {
                    var n = bo(),
                        r = xo();
                    n && r ? e = function() {
                        n(), r()
                    } : (n && n(), r && r())
                }
                return e
            }

            function wo() {
                var t = So(!0);
                return !t || (t(), !1)
            }

            function Eo(t, e, n) {
                return function(r, o) {
                    var i;
                    io(r) && !wo() && (null === (i = t.animationState) || void 0 === i || i.setActive(to.Hover, e), null === n || void 0 === n || n(r, o))
                }
            }
            var Ao = function(t, e) {
                    return !!e && (t === e || Ao(t, e.parentElement))
                },
                Co = n(5411);
            var Po = new WeakMap,
                To = new WeakMap,
                Oo = function(t) {
                    var e;
                    null === (e = Po.get(t.target)) || void 0 === e || e(t)
                },
                Ro = function(t) {
                    t.forEach(Oo)
                };

            function Lo(t, e, n) {
                var o = function(t) {
                    var e = t.root,
                        n = (0, r._T)(t, ["root"]),
                        o = e || document;
                    To.has(o) || To.set(o, {});
                    var i = To.get(o),
                        a = JSON.stringify(n);
                    return i[a] || (i[a] = new IntersectionObserver(Ro, (0, r.pi)({
                        root: e
                    }, n))), i[a]
                }(e);
                return Po.set(t, n), o.observe(t),
                    function() {
                        Po.delete(t), o.unobserve(t)
                    }
            }
            var jo = {
                some: 0,
                all: 1
            };

            function ko(t, e, n, r) {
                var i = r.root,
                    a = r.margin,
                    s = r.amount,
                    u = void 0 === s ? "some" : s,
                    l = r.once;
                (0, o.useEffect)((function() {
                    if (t) {
                        var r = {
                            root: null === i || void 0 === i ? void 0 : i.current,
                            rootMargin: a,
                            threshold: "number" === typeof u ? u : jo[u]
                        };
                        return Lo(n.getInstance(), r, (function(t) {
                            var r, o = t.isIntersecting;
                            if (e.isInView !== o && (e.isInView = o, !l || o || !e.hasEnteredView)) {
                                o && (e.hasEnteredView = !0), null === (r = n.animationState) || void 0 === r || r.setActive(to.InView, o);
                                var i = n.getProps(),
                                    a = o ? i.onViewportEnter : i.onViewportLeave;
                                null === a || void 0 === a || a(t)
                            }
                        }))
                    }
                }), [t, i, a, u])
            }

            function Mo(t, e, n, r) {
                var i = r.fallback,
                    a = void 0 === i || i;
                (0, o.useEffect)((function() {
                    t && a && requestAnimationFrame((function() {
                        var t;
                        e.hasEnteredView = !0;
                        var r = n.getProps().onViewportEnter;
                        null === r || void 0 === r || r(null), null === (t = n.animationState) || void 0 === t || t.setActive(to.InView, !0)
                    }))
                }), [t])
            }
            var Vo = function(t) {
                    return function(e) {
                        return t(e), null
                    }
                },
                Io = {
                    inView: Vo((function(t) {
                        var e = t.visualElement,
                            n = t.whileInView,
                            r = t.onViewportEnter,
                            i = t.onViewportLeave,
                            a = t.viewport,
                            s = void 0 === a ? {} : a,
                            u = (0, o.useRef)({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            l = Boolean(n || r || i);
                        s.once && u.current.hasEnteredView && (l = !1), ("undefined" === typeof IntersectionObserver ? Mo : ko)(l, u.current, e, s)
                    })),
                    tap: Vo((function(t) {
                        var e = t.onTap,
                            n = t.onTapStart,
                            r = t.onTapCancel,
                            i = t.whileTap,
                            a = t.visualElement,
                            s = e || n || r || i,
                            u = (0, o.useRef)(!1),
                            l = (0, o.useRef)(null);

                        function c() {
                            var t;
                            null === (t = l.current) || void 0 === t || t.call(l), l.current = null
                        }

                        function f() {
                            var t;
                            return c(), u.current = !1, null === (t = a.animationState) || void 0 === t || t.setActive(to.Tap, !1), !wo()
                        }

                        function d(t, n) {
                            f() && (Ao(a.getInstance(), t.target) ? null === e || void 0 === e || e(t, n) : null === r || void 0 === r || r(t, n))
                        }

                        function p(t, e) {
                            f() && (null === r || void 0 === r || r(t, e))
                        }
                        go(a, "pointerdown", s ? function(t, e) {
                            var r;
                            c(), u.current || (u.current = !0, l.current = Vt(mo(window, "pointerup", d), mo(window, "pointercancel", p)), null === (r = a.animationState) || void 0 === r || r.setActive(to.Tap, !0), null === n || void 0 === n || n(t, e))
                        } : void 0), (0, Co.z)(c)
                    })),
                    focus: Vo((function(t) {
                        var e = t.whileFocus,
                            n = t.visualElement;
                        oo(n, "focus", e ? function() {
                            var t;
                            null === (t = n.animationState) || void 0 === t || t.setActive(to.Focus, !0)
                        } : void 0), oo(n, "blur", e ? function() {
                            var t;
                            null === (t = n.animationState) || void 0 === t || t.setActive(to.Focus, !1)
                        } : void 0)
                    })),
                    hover: Vo((function(t) {
                        var e = t.onHoverStart,
                            n = t.onHoverEnd,
                            r = t.whileHover,
                            o = t.visualElement;
                        go(o, "pointerenter", e || r ? Eo(o, !0, e) : void 0), go(o, "pointerleave", n || r ? Eo(o, !1, n) : void 0)
                    }))
                },
                Fo = n(6316);

            function Do() {
                var t = (0, o.useContext)(d.O);
                if (null === t) return [!0, null];
                var e = t.isPresent,
                    n = t.onExitComplete,
                    r = t.register,
                    i = (0, Fo.M)();
                (0, o.useEffect)((function() {
                    return r(i)
                }), []);
                return !e && n ? [!1, function() {
                    return null === n || void 0 === n ? void 0 : n(i)
                }] : [!0]
            }

            function No(t, e) {
                if (!Array.isArray(e)) return !1;
                var n = e.length;
                if (n !== t.length) return !1;
                for (var r = 0; r < n; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }
            var _o = function(t) {
                    return /^0[^.\s]+$/.test(t)
                },
                Uo = function(t) {
                    return function(e) {
                        return e.test(t)
                    }
                },
                zo = [tt, dt, ft, ct, vt, pt, {
                    test: function(t) {
                        return "auto" === t
                    },
                    parse: function(t) {
                        return t
                    }
                }],
                Bo = function(t) {
                    return zo.find(Uo(t))
                },
                Wo = (0, r.ev)((0, r.ev)([], (0, r.CR)(zo), !1), [At, jt], !1),
                Ho = function(t) {
                    return Wo.find(Uo(t))
                };

            function qo(t, e, n) {
                t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, F(n))
            }

            function Xo(t, e) {
                var n = E(t, e),
                    o = n ? t.makeTargetAnimatable(n, !1) : {},
                    i = o.transitionEnd,
                    a = void 0 === i ? {} : i;
                o.transition;
                var s = (0, r._T)(o, ["transitionEnd", "transition"]);
                for (var u in s = (0, r.pi)((0, r.pi)({}, s), a)) {
                    qo(t, u, _e(s[u]))
                }
            }

            function $o(t, e) {
                if (e) return (e[t] || e.default || e).from
            }

            function Yo(t, e, n) {
                var o;
                void 0 === n && (n = {});
                var i = E(t, e, n.custom),
                    a = (i || {}).transition,
                    s = void 0 === a ? t.getDefaultTransition() || {} : a;
                n.transitionOverride && (s = n.transitionOverride);
                var u = i ? function() {
                        return Go(t, i, n)
                    } : function() {
                        return Promise.resolve()
                    },
                    l = (null === (o = t.variantChildren) || void 0 === o ? void 0 : o.size) ? function(o) {
                        void 0 === o && (o = 0);
                        var i = s.delayChildren,
                            a = void 0 === i ? 0 : i,
                            u = s.staggerChildren,
                            l = s.staggerDirection;
                        return function(t, e, n, o, i, a) {
                            void 0 === n && (n = 0);
                            void 0 === o && (o = 0);
                            void 0 === i && (i = 1);
                            var s = [],
                                u = (t.variantChildren.size - 1) * o,
                                l = 1 === i ? function(t) {
                                    return void 0 === t && (t = 0), t * o
                                } : function(t) {
                                    return void 0 === t && (t = 0), u - t * o
                                };
                            return Array.from(t.variantChildren).sort(Zo).forEach((function(t, o) {
                                s.push(Yo(t, e, (0, r.pi)((0, r.pi)({}, a), {
                                    delay: n + l(o)
                                })).then((function() {
                                    return t.notifyAnimationComplete(e)
                                })))
                            })), Promise.all(s)
                        }(t, e, a + o, u, l, n)
                    } : function() {
                        return Promise.resolve()
                    },
                    c = s.when;
                if (c) {
                    var f = (0, r.CR)("beforeChildren" === c ? [u, l] : [l, u], 2),
                        d = f[0],
                        p = f[1];
                    return d().then(p)
                }
                return Promise.all([u(), l(n.delay)])
            }

            function Go(t, e, n) {
                var o, i = void 0 === n ? {} : n,
                    a = i.delay,
                    s = void 0 === a ? 0 : a,
                    u = i.transitionOverride,
                    l = i.type,
                    c = t.makeTargetAnimatable(e),
                    f = c.transition,
                    d = void 0 === f ? t.getDefaultTransition() : f,
                    p = c.transitionEnd,
                    v = (0, r._T)(c, ["transition", "transitionEnd"]);
                u && (d = u);
                var h = [],
                    m = l && (null === (o = t.animationState) || void 0 === o ? void 0 : o.getState()[l]);
                for (var g in v) {
                    var y = t.getValue(g),
                        b = v[g];
                    if (!(!y || void 0 === b || m && Ko(m, g))) {
                        var x = (0, r.pi)({
                            delay: s
                        }, d);
                        t.shouldReduceMotion && Hn(g) && (x = (0, r.pi)((0, r.pi)({}, x), {
                            type: !1,
                            delay: 0
                        }));
                        var S = Xe(g, y, b, x);
                        h.push(S)
                    }
                }
                return Promise.all(h).then((function() {
                    p && Xo(t, p)
                }))
            }

            function Zo(t, e) {
                return t.sortNodePosition(e)
            }

            function Ko(t, e) {
                var n = t.protectedKeys,
                    r = t.needsAnimating,
                    o = n.hasOwnProperty(e) && !0 !== r[e];
                return r[e] = !1, o
            }
            var Qo = [to.Animate, to.InView, to.Focus, to.Hover, to.Tap, to.Drag, to.Exit],
                Jo = (0, r.ev)([], (0, r.CR)(Qo), !1).reverse(),
                ti = Qo.length;

            function ei(t) {
                return function(e) {
                    return Promise.all(e.map((function(e) {
                        var n = e.animation,
                            r = e.options;
                        return function(t, e, n) {
                            var r;
                            if (void 0 === n && (n = {}), t.notifyAnimationStart(e), Array.isArray(e)) {
                                var o = e.map((function(e) {
                                    return Yo(t, e, n)
                                }));
                                r = Promise.all(o)
                            } else if ("string" === typeof e) r = Yo(t, e, n);
                            else {
                                var i = "function" === typeof e ? E(t, e, n.custom) : e;
                                r = Go(t, i, n)
                            }
                            return r.then((function() {
                                return t.notifyAnimationComplete(e)
                            }))
                        }(t, n, r)
                    })))
                }
            }

            function ni(t) {
                var e = ei(t),
                    n = function() {
                        var t;
                        return (t = {})[to.Animate] = ri(!0), t[to.InView] = ri(), t[to.Hover] = ri(), t[to.Tap] = ri(), t[to.Drag] = ri(), t[to.Focus] = ri(), t[to.Exit] = ri(), t
                    }(),
                    o = {},
                    i = !0,
                    a = function(e, n) {
                        var o = E(t, n);
                        if (o) {
                            o.transition;
                            var i = o.transitionEnd,
                                a = (0, r._T)(o, ["transition", "transitionEnd"]);
                            e = (0, r.pi)((0, r.pi)((0, r.pi)({}, e), a), i)
                        }
                        return e
                    };

                function s(s, u) {
                    for (var l, c = t.getProps(), f = t.getVariantContext(!0) || {}, d = [], p = new Set, v = {}, h = 1 / 0, m = function(e) {
                            var o = Jo[e],
                                m = n[o],
                                g = null !== (l = c[o]) && void 0 !== l ? l : f[o],
                                y = S(g),
                                b = o === u ? m.isActive : null;
                            !1 === b && (h = e);
                            var w = g === f[o] && g !== c[o] && y;
                            if (w && i && t.manuallyAnimateOnMount && (w = !1), m.protectedKeys = (0, r.pi)({}, v), !m.isActive && null === b || !g && !m.prevProp || Zr(g) || "boolean" === typeof g) return "continue";
                            var E = function(t, e) {
                                    if ("string" === typeof e) return e !== t;
                                    if (x(e)) return !No(e, t);
                                    return !1
                                }(m.prevProp, g),
                                A = E || o === u && m.isActive && !w && y || e > h && y,
                                C = Array.isArray(g) ? g : [g],
                                P = C.reduce(a, {});
                            !1 === b && (P = {});
                            var T = m.prevResolvedValues,
                                O = void 0 === T ? {} : T,
                                R = (0, r.pi)((0, r.pi)({}, O), P),
                                L = function(t) {
                                    A = !0, p.delete(t), m.needsAnimating[t] = !0
                                };
                            for (var j in R) {
                                var k = P[j],
                                    M = O[j];
                                v.hasOwnProperty(j) || (k !== M ? Ee(k) && Ee(M) ? !No(k, M) || E ? L(j) : m.protectedKeys[j] = !0 : void 0 !== k ? L(j) : p.add(j) : void 0 !== k && p.has(j) ? L(j) : m.protectedKeys[j] = !0)
                            }
                            m.prevProp = g, m.prevResolvedValues = P, m.isActive && (v = (0, r.pi)((0, r.pi)({}, v), P)), i && t.blockInitialAnimation && (A = !1), A && !w && d.push.apply(d, (0, r.ev)([], (0, r.CR)(C.map((function(t) {
                                return {
                                    animation: t,
                                    options: (0, r.pi)({
                                        type: o
                                    }, s)
                                }
                            }))), !1))
                        }, g = 0; g < ti; g++) m(g);
                    if (o = (0, r.pi)({}, v), p.size) {
                        var y = {};
                        p.forEach((function(e) {
                            var n = t.getBaseTarget(e);
                            void 0 !== n && (y[e] = n)
                        })), d.push({
                            animation: y
                        })
                    }
                    var b = Boolean(d.length);
                    return i && !1 === c.initial && !t.manuallyAnimateOnMount && (b = !1), i = !1, b ? e(d) : Promise.resolve()
                }
                return {
                    isAnimated: function(t) {
                        return void 0 !== o[t]
                    },
                    animateChanges: s,
                    setActive: function(e, r, o) {
                        var i;
                        if (n[e].isActive === r) return Promise.resolve();
                        null === (i = t.variantChildren) || void 0 === i || i.forEach((function(t) {
                            var n;
                            return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, r)
                        })), n[e].isActive = r;
                        var a = s(o, e);
                        for (var u in n) n[u].protectedKeys = {};
                        return a
                    },
                    setAnimateFunction: function(n) {
                        e = n(t)
                    },
                    getState: function() {
                        return n
                    }
                }
            }

            function ri(t) {
                return void 0 === t && (t = !1), {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            var oi = {
                    animation: Vo((function(t) {
                        var e = t.visualElement,
                            n = t.animate;
                        e.animationState || (e.animationState = ni(e)), Zr(n) && (0, o.useEffect)((function() {
                            return n.subscribe(e)
                        }), [n])
                    })),
                    exit: Vo((function(t) {
                        var e = t.custom,
                            n = t.visualElement,
                            i = (0, r.CR)(Do(), 2),
                            a = i[0],
                            s = i[1],
                            u = (0, o.useContext)(d.O);
                        (0, o.useEffect)((function() {
                            var t, r;
                            n.isPresent = a;
                            var o = null === (t = n.animationState) || void 0 === t ? void 0 : t.setActive(to.Exit, !a, {
                                custom: null !== (r = null === u || void 0 === u ? void 0 : u.custom) && void 0 !== r ? r : e
                            });
                            !a && (null === o || void 0 === o || o.then(s))
                        }), [a])
                    }))
                },
                ii = function() {
                    function t(t, e, n) {
                        var o = this,
                            i = (void 0 === n ? {} : n).transformPagePoint;
                        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
                                if (o.lastMoveEvent && o.lastMoveEventInfo) {
                                    var t = ui(o.lastMoveEventInfo, o.history),
                                        e = null !== o.startEvent,
                                        n = xn(t.offset, {
                                            x: 0,
                                            y: 0
                                        }) >= 3;
                                    if (e || n) {
                                        var i = t.point,
                                            a = (0, R.$B)().timestamp;
                                        o.history.push((0, r.pi)((0, r.pi)({}, i), {
                                            timestamp: a
                                        }));
                                        var s = o.handlers,
                                            u = s.onStart,
                                            l = s.onMove;
                                        e || (u && u(o.lastMoveEvent, t), o.startEvent = o.lastMoveEvent), l && l(o.lastMoveEvent, t)
                                    }
                                }
                            }, this.handlePointerMove = function(t, e) {
                                o.lastMoveEvent = t, o.lastMoveEventInfo = ai(e, o.transformPagePoint), io(t) && 0 === t.buttons ? o.handlePointerUp(t, e) : R.ZP.update(o.updatePoint, !0)
                            }, this.handlePointerUp = function(t, e) {
                                o.end();
                                var n = o.handlers,
                                    r = n.onEnd,
                                    i = n.onSessionEnd,
                                    a = ui(ai(e, o.transformPagePoint), o.history);
                                o.startEvent && r && r(t, a), i && i(t, a)
                            }, !(ao(t) && t.touches.length > 1)) {
                            this.handlers = e, this.transformPagePoint = i;
                            var a = ai(co(t), this.transformPagePoint),
                                s = a.point,
                                u = (0, R.$B)().timestamp;
                            this.history = [(0, r.pi)((0, r.pi)({}, s), {
                                timestamp: u
                            })];
                            var l = e.onSessionStart;
                            l && l(t, ui(a, this.history)), this.removeListeners = Vt(mo(window, "pointermove", this.handlePointerMove), mo(window, "pointerup", this.handlePointerUp), mo(window, "pointercancel", this.handlePointerUp))
                        }
                    }
                    return t.prototype.updateHandlers = function(t) {
                        this.handlers = t
                    }, t.prototype.end = function() {
                        this.removeListeners && this.removeListeners(), R.qY.update(this.updatePoint)
                    }, t
                }();

            function ai(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function si(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function ui(t, e) {
                var n = t.point;
                return {
                    point: n,
                    delta: si(n, ci(e)),
                    offset: si(n, li(e)),
                    velocity: fi(e, .1)
                }
            }

            function li(t) {
                return t[0]
            }

            function ci(t) {
                return t[t.length - 1]
            }

            function fi(t, e) {
                if (t.length < 2) return {
                    x: 0,
                    y: 0
                };
                for (var n = t.length - 1, r = null, o = ci(t); n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > de(e)));) n--;
                if (!r) return {
                    x: 0,
                    y: 0
                };
                var i = (o.timestamp - r.timestamp) / 1e3;
                if (0 === i) return {
                    x: 0,
                    y: 0
                };
                var a = {
                    x: (o.x - r.x) / i,
                    y: (o.y - r.y) / i
                };
                return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
            }

            function di(t, e, n) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
                }
            }

            function pi(t, e) {
                var n, o = e.min - t.min,
                    i = e.max - t.max;
                return e.max - e.min < t.max - t.min && (o = (n = (0, r.CR)([i, o], 2))[0], i = n[1]), {
                    min: o,
                    max: i
                }
            }
            var vi = .35;

            function hi(t, e, n) {
                return {
                    min: mi(t, e),
                    max: mi(t, n)
                }
            }

            function mi(t, e) {
                var n;
                return "number" === typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
            }

            function gi(t) {
                var e = t.top;
                return {
                    x: {
                        min: t.left,
                        max: t.right
                    },
                    y: {
                        min: e,
                        max: t.bottom
                    }
                }
            }

            function yi(t, e) {
                return gi(function(t, e) {
                    if (!e) return t;
                    var n = e({
                            x: t.left,
                            y: t.top
                        }),
                        r = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            var bi = new WeakMap,
                xi = function() {
                    function t(t) {
                        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                            x: 0,
                            y: 0
                        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.visualElement = t
                    }
                    return t.prototype.start = function(t, e) {
                        var n = this,
                            r = (void 0 === e ? {} : e).snapToCursor,
                            o = void 0 !== r && r;
                        if (!1 !== this.visualElement.isPresent) {
                            this.panSession = new ii(t, {
                                onSessionStart: function(t) {
                                    n.stopAnimation(), o && n.snapToCursor(co(t, "page").point)
                                },
                                onStart: function(t, e) {
                                    var r, o = n.getProps(),
                                        i = o.drag,
                                        a = o.dragPropagation,
                                        s = o.onDragStart;
                                    (!i || a || (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = So(i), n.openGlobalLock)) && (n.isDragging = !0, n.currentDirection = null, n.resolveConstraints(), n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0, n.visualElement.projection.target = void 0), _n((function(t) {
                                        var e, r, o = n.getAxisMotionValue(t).get() || 0;
                                        if (ft.test(o)) {
                                            var i = null === (r = null === (e = n.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === r ? void 0 : r.actual[t];
                                            if (i) o = Sn(i) * (parseFloat(o) / 100)
                                        }
                                        n.originPoint[t] = o
                                    })), null === s || void 0 === s || s(t, e), null === (r = n.visualElement.animationState) || void 0 === r || r.setActive(to.Drag, !0))
                                },
                                onMove: function(t, e) {
                                    var r = n.getProps(),
                                        o = r.dragPropagation,
                                        i = r.dragDirectionLock,
                                        a = r.onDirectionLock,
                                        s = r.onDrag;
                                    if (o || n.openGlobalLock) {
                                        var u = e.offset;
                                        if (i && null === n.currentDirection) return n.currentDirection = function(t, e) {
                                            void 0 === e && (e = 10);
                                            var n = null;
                                            Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x");
                                            return n
                                        }(u), void(null !== n.currentDirection && (null === a || void 0 === a || a(n.currentDirection)));
                                        n.updateAxis("x", e.point, u), n.updateAxis("y", e.point, u), n.visualElement.syncRender(), null === s || void 0 === s || s(t, e)
                                    }
                                },
                                onSessionEnd: function(t, e) {
                                    return n.stop(t, e)
                                }
                            }, {
                                transformPagePoint: this.visualElement.getTransformPagePoint()
                            })
                        }
                    }, t.prototype.stop = function(t, e) {
                        var n = this.isDragging;
                        if (this.cancel(), n) {
                            var r = e.velocity;
                            this.startAnimation(r);
                            var o = this.getProps().onDragEnd;
                            null === o || void 0 === o || o(t, e)
                        }
                    }, t.prototype.cancel = function() {
                        var t, e;
                        this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0, !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(to.Drag, !1)
                    }, t.prototype.updateAxis = function(t, e, n) {
                        var r = this.getProps().drag;
                        if (n && Si(t, r, this.currentDirection)) {
                            var o = this.getAxisMotionValue(t),
                                i = this.originPoint[t] + n[t];
                            this.constraints && this.constraints[t] && (i = function(t, e, n) {
                                var r = e.min,
                                    o = e.max;
                                return void 0 !== r && t < r ? t = n ? L(r, t, n.min) : Math.max(t, r) : void 0 !== o && t > o && (t = n ? L(o, t, n.max) : Math.min(t, o)), t
                            }(i, this.constraints[t], this.elastic[t])), o.set(i)
                        }
                    }, t.prototype.resolveConstraints = function() {
                        var t = this,
                            e = this.getProps(),
                            n = e.dragConstraints,
                            r = e.dragElastic,
                            o = (this.visualElement.projection || {}).layout,
                            i = this.constraints;
                        n && b(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!n || !o) && function(t, e) {
                            var n = e.top,
                                r = e.left,
                                o = e.bottom,
                                i = e.right;
                            return {
                                x: di(t.x, r, i),
                                y: di(t.y, n, o)
                            }
                        }(o.actual, n), this.elastic = function(t) {
                            return void 0 === t && (t = vi), !1 === t ? t = 0 : !0 === t && (t = vi), {
                                x: hi(t, "left", "right"),
                                y: hi(t, "top", "bottom")
                            }
                        }(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && _n((function(e) {
                            t.getAxisMotionValue(e) && (t.constraints[e] = function(t, e) {
                                var n = {};
                                return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
                            }(o.actual[e], t.constraints[e]))
                        }))
                    }, t.prototype.resolveRefConstraints = function() {
                        var t = this.getProps(),
                            e = t.dragConstraints,
                            n = t.onMeasureDragConstraints;
                        if (!e || !b(e)) return !1;
                        var r = e.current,
                            o = this.visualElement.projection;
                        if (!o || !o.layout) return !1;
                        var i = function(t, e, n) {
                                var r = yi(t, n),
                                    o = e.scroll;
                                return o && (dn(r.x, o.x), dn(r.y, o.y)), r
                            }(r, o.root, this.visualElement.getTransformPagePoint()),
                            a = function(t, e) {
                                return {
                                    x: pi(t.x, e.x),
                                    y: pi(t.y, e.y)
                                }
                            }(o.layout.actual, i);
                        if (n) {
                            var s = n(function(t) {
                                var e = t.x,
                                    n = t.y;
                                return {
                                    top: n.min,
                                    right: e.max,
                                    bottom: n.max,
                                    left: e.min
                                }
                            }(a));
                            this.hasMutatedConstraints = !!s, s && (a = gi(s))
                        }
                        return a
                    }, t.prototype.startAnimation = function(t) {
                        var e = this,
                            n = this.getProps(),
                            o = n.drag,
                            i = n.dragMomentum,
                            a = n.dragElastic,
                            s = n.dragTransition,
                            u = n.dragSnapToOrigin,
                            l = n.onDragTransitionEnd,
                            c = this.constraints || {},
                            f = _n((function(n) {
                                var l;
                                if (Si(n, o, e.currentDirection)) {
                                    var f = null !== (l = null === c || void 0 === c ? void 0 : c[n]) && void 0 !== l ? l : {};
                                    u && (f = {
                                        min: 0,
                                        max: 0
                                    });
                                    var d = a ? 200 : 1e6,
                                        p = a ? 40 : 1e7,
                                        v = (0, r.pi)((0, r.pi)({
                                            type: "inertia",
                                            velocity: i ? t[n] : 0,
                                            bounceStiffness: d,
                                            bounceDamping: p,
                                            timeConstant: 750,
                                            restDelta: 1,
                                            restSpeed: 10
                                        }, s), f);
                                    return e.startAxisValueAnimation(n, v)
                                }
                            }));
                        return Promise.all(f).then(l)
                    }, t.prototype.startAxisValueAnimation = function(t, e) {
                        return Xe(t, this.getAxisMotionValue(t), 0, e)
                    }, t.prototype.stopAnimation = function() {
                        var t = this;
                        _n((function(e) {
                            return t.getAxisMotionValue(e).stop()
                        }))
                    }, t.prototype.getAxisMotionValue = function(t) {
                        var e, n, r = "_drag" + t.toUpperCase(),
                            o = this.visualElement.getProps()[r];
                        return o || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
                    }, t.prototype.snapToCursor = function(t) {
                        var e = this;
                        _n((function(n) {
                            if (Si(n, e.getProps().drag, e.currentDirection)) {
                                var r = e.visualElement.projection,
                                    o = e.getAxisMotionValue(n);
                                if (r && r.layout) {
                                    var i = r.layout.actual[n],
                                        a = i.min,
                                        s = i.max;
                                    o.set(t[n] - L(a, s, .5))
                                }
                            }
                        }))
                    }, t.prototype.scalePositionWithinConstraints = function() {
                        var t, e = this,
                            n = this.getProps(),
                            r = n.drag,
                            o = n.dragConstraints,
                            i = this.visualElement.projection;
                        if (b(o) && i && this.constraints) {
                            this.stopAnimation();
                            var a = {
                                x: 0,
                                y: 0
                            };
                            _n((function(t) {
                                var n = e.getAxisMotionValue(t);
                                if (n) {
                                    var r = n.get();
                                    a[t] = function(t, e) {
                                        var n = .5,
                                            r = Sn(t),
                                            o = Sn(e);
                                        return o > r ? n = $(e.min, e.max - r, t.min) : r > o && (n = $(t.min, t.max - o, e.min)), N(0, 1, n)
                                    }({
                                        min: r,
                                        max: r
                                    }, e.constraints[t])
                                }
                            }));
                            var s = this.visualElement.getProps().transformTemplate;
                            this.visualElement.getInstance().style.transform = s ? s({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), _n((function(t) {
                                if (Si(t, r, null)) {
                                    var n = e.getAxisMotionValue(t),
                                        o = e.constraints[t],
                                        i = o.min,
                                        s = o.max;
                                    n.set(L(i, s, a[t]))
                                }
                            }))
                        }
                    }, t.prototype.addListeners = function() {
                        var t, e = this;
                        bi.set(this.visualElement, this);
                        var n = mo(this.visualElement.getInstance(), "pointerdown", (function(t) {
                                var n = e.getProps(),
                                    r = n.drag,
                                    o = n.dragListener;
                                r && (void 0 === o || o) && e.start(t)
                            })),
                            r = function() {
                                b(e.getProps().dragConstraints) && (e.constraints = e.resolveRefConstraints())
                            },
                            o = this.visualElement.projection,
                            i = o.addEventListener("measure", r);
                        o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), r();
                        var a = ro(window, "resize", (function() {
                            e.scalePositionWithinConstraints()
                        }));
                        return o.addEventListener("didUpdate", (function(t) {
                                var n = t.delta,
                                    r = t.hasLayoutChanged;
                                e.isDragging && r && (_n((function(t) {
                                    var r = e.getAxisMotionValue(t);
                                    r && (e.originPoint[t] += n[t].translate, r.set(r.get() + n[t].translate))
                                })), e.visualElement.syncRender())
                            })),
                            function() {
                                a(), n(), i()
                            }
                    }, t.prototype.getProps = function() {
                        var t = this.visualElement.getProps(),
                            e = t.drag,
                            n = void 0 !== e && e,
                            o = t.dragDirectionLock,
                            i = void 0 !== o && o,
                            a = t.dragPropagation,
                            s = void 0 !== a && a,
                            u = t.dragConstraints,
                            l = void 0 !== u && u,
                            c = t.dragElastic,
                            f = void 0 === c ? vi : c,
                            d = t.dragMomentum,
                            p = void 0 === d || d;
                        return (0, r.pi)((0, r.pi)({}, t), {
                            drag: n,
                            dragDirectionLock: i,
                            dragPropagation: s,
                            dragConstraints: l,
                            dragElastic: f,
                            dragMomentum: p
                        })
                    }, t
                }();

            function Si(t, e, n) {
                return (!0 === e || e === t) && (null === n || n === t)
            }
            var wi = {
                    pan: Vo((function(t) {
                        var e = t.onPan,
                            n = t.onPanStart,
                            r = t.onPanEnd,
                            i = t.onPanSessionStart,
                            a = t.visualElement,
                            s = e || n || r || i,
                            u = (0, o.useRef)(null),
                            l = (0, o.useContext)(c).transformPagePoint,
                            f = {
                                onSessionStart: i,
                                onStart: n,
                                onMove: e,
                                onEnd: function(t, e) {
                                    u.current = null, r && r(t, e)
                                }
                            };
                        (0, o.useEffect)((function() {
                            null !== u.current && u.current.updateHandlers(f)
                        })), go(a, "pointerdown", s && function(t) {
                            u.current = new ii(t, f, {
                                transformPagePoint: l
                            })
                        }), (0, Co.z)((function() {
                            return u.current && u.current.end()
                        }))
                    })),
                    drag: Vo((function(t) {
                        var e = t.dragControls,
                            n = t.visualElement,
                            r = (0, O.h)((function() {
                                return new xi(n)
                            }));
                        (0, o.useEffect)((function() {
                            return e && e.subscribe(r)
                        }), [r, e]), (0, o.useEffect)((function() {
                            return r.addListeners()
                        }), [r])
                    }))
                },
                Ei = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"];
            var Ai = function(t) {
                    var e = t.treeType,
                        n = void 0 === e ? "" : e,
                        o = t.build,
                        i = t.getBaseTarget,
                        a = t.makeTargetAnimatable,
                        s = t.measureViewportBox,
                        u = t.render,
                        l = t.readValueFromInstance,
                        c = t.removeValueFromRenderState,
                        f = t.sortNodePosition,
                        d = t.scrapeMotionValuesFromProps;
                    return function(t, e) {
                        var p = t.parent,
                            v = t.props,
                            h = t.presenceId,
                            m = t.blockInitialAnimation,
                            g = t.visualState,
                            y = t.shouldReduceMotion;
                        void 0 === e && (e = {});
                        var b, x, w = !1,
                            E = g.latestValues,
                            P = g.renderState,
                            T = function() {
                                var t = Ei.map((function() {
                                        return new V
                                    })),
                                    e = {},
                                    n = {
                                        clearAllListeners: function() {
                                            return t.forEach((function(t) {
                                                return t.clear()
                                            }))
                                        },
                                        updatePropListeners: function(t) {
                                            Ei.forEach((function(r) {
                                                var o, i = "on" + r,
                                                    a = t[i];
                                                null === (o = e[r]) || void 0 === o || o.call(e), a && (e[r] = n[i](a))
                                            }))
                                        }
                                    };
                                return t.forEach((function(t, e) {
                                    n["on" + Ei[e]] = function(e) {
                                        return t.add(e)
                                    }, n["notify" + Ei[e]] = function() {
                                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        return t.notify.apply(t, (0, r.ev)([], (0, r.CR)(e), !1))
                                    }
                                })), n
                            }(),
                            O = new Map,
                            L = new Map,
                            j = {},
                            k = (0, r.pi)({}, E);

                        function M() {
                            b && w && (I(), u(b, P, v.style, q.projection))
                        }

                        function I() {
                            o(q, P, E, e, v)
                        }

                        function N() {
                            T.notifyUpdate(E)
                        }

                        function _(t, e) {
                            var n = e.onChange((function(e) {
                                    E[t] = e, v.onUpdate && R.ZP.update(N, !1, !0)
                                })),
                                r = e.onRenderRequest(q.scheduleRender);
                            L.set(t, (function() {
                                n(), r()
                            }))
                        }
                        var U = d(v);
                        for (var z in U) {
                            var B = U[z];
                            void 0 !== E[z] && D(B) && B.set(E[z], !1)
                        }
                        var W = A(v),
                            H = C(v),
                            q = (0, r.pi)((0, r.pi)({
                                treeType: n,
                                current: null,
                                depth: p ? p.depth + 1 : 0,
                                parent: p,
                                children: new Set,
                                presenceId: h,
                                shouldReduceMotion: y,
                                variantChildren: H ? new Set : void 0,
                                isVisible: void 0,
                                manuallyAnimateOnMount: Boolean(null === p || void 0 === p ? void 0 : p.isMounted()),
                                blockInitialAnimation: m,
                                isMounted: function() {
                                    return Boolean(b)
                                },
                                mount: function(t) {
                                    w = !0, b = q.current = t, q.projection && q.projection.mount(t), H && p && !W && (x = null === p || void 0 === p ? void 0 : p.addVariantChild(q)), O.forEach((function(t, e) {
                                        return _(e, t)
                                    })), null === p || void 0 === p || p.children.add(q), q.setProps(v)
                                },
                                unmount: function() {
                                    var t;
                                    null === (t = q.projection) || void 0 === t || t.unmount(), R.qY.update(N), R.qY.render(M), L.forEach((function(t) {
                                        return t()
                                    })), null === x || void 0 === x || x(), null === p || void 0 === p || p.children.delete(q), T.clearAllListeners(), b = void 0, w = !1
                                },
                                addVariantChild: function(t) {
                                    var e, n = q.getClosestVariantNode();
                                    if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t),
                                        function() {
                                            return n.variantChildren.delete(t)
                                        }
                                },
                                sortNodePosition: function(t) {
                                    return f && n === t.treeType ? f(q.getInstance(), t.getInstance()) : 0
                                },
                                getClosestVariantNode: function() {
                                    return H ? q : null === p || void 0 === p ? void 0 : p.getClosestVariantNode()
                                },
                                getLayoutId: function() {
                                    return v.layoutId
                                },
                                getInstance: function() {
                                    return b
                                },
                                getStaticValue: function(t) {
                                    return E[t]
                                },
                                setStaticValue: function(t, e) {
                                    return E[t] = e
                                },
                                getLatestValues: function() {
                                    return E
                                },
                                setVisibility: function(t) {
                                    q.isVisible !== t && (q.isVisible = t, q.scheduleRender())
                                },
                                makeTargetAnimatable: function(t, e) {
                                    return void 0 === e && (e = !0), a(q, t, v, e)
                                },
                                measureViewportBox: function() {
                                    return s(b, v)
                                },
                                addValue: function(t, e) {
                                    q.hasValue(t) && q.removeValue(t), O.set(t, e), E[t] = e.get(), _(t, e)
                                },
                                removeValue: function(t) {
                                    var e;
                                    O.delete(t), null === (e = L.get(t)) || void 0 === e || e(), L.delete(t), delete E[t], c(t, P)
                                },
                                hasValue: function(t) {
                                    return O.has(t)
                                },
                                getValue: function(t, e) {
                                    var n = O.get(t);
                                    return void 0 === n && void 0 !== e && (n = F(e), q.addValue(t, n)), n
                                },
                                forEachValue: function(t) {
                                    return O.forEach(t)
                                },
                                readValue: function(t) {
                                    var n;
                                    return null !== (n = E[t]) && void 0 !== n ? n : l(b, t, e)
                                },
                                setBaseTarget: function(t, e) {
                                    k[t] = e
                                },
                                getBaseTarget: function(t) {
                                    if (i) {
                                        var e = i(v, t);
                                        if (void 0 !== e && !D(e)) return e
                                    }
                                    return k[t]
                                }
                            }, T), {
                                build: function() {
                                    return I(), P
                                },
                                scheduleRender: function() {
                                    R.ZP.render(M, !1, !0)
                                },
                                syncRender: M,
                                setProps: function(t) {
                                    (t.transformTemplate || v.transformTemplate) && q.scheduleRender(), v = t, T.updatePropListeners(t), j = function(t, e, n) {
                                        var r;
                                        for (var o in e) {
                                            var i = e[o],
                                                a = n[o];
                                            if (D(i)) t.addValue(o, i);
                                            else if (D(a)) t.addValue(o, F(i));
                                            else if (a !== i)
                                                if (t.hasValue(o)) {
                                                    var s = t.getValue(o);
                                                    !s.hasAnimated && s.set(i)
                                                } else t.addValue(o, F(null !== (r = t.getStaticValue(o)) && void 0 !== r ? r : i))
                                        }
                                        for (var o in n) void 0 === e[o] && t.removeValue(o);
                                        return e
                                    }(q, d(v), j)
                                },
                                getProps: function() {
                                    return v
                                },
                                getVariant: function(t) {
                                    var e;
                                    return null === (e = v.variants) || void 0 === e ? void 0 : e[t]
                                },
                                getDefaultTransition: function() {
                                    return v.transition
                                },
                                getTransformPagePoint: function() {
                                    return v.transformPagePoint
                                },
                                getVariantContext: function(t) {
                                    if (void 0 === t && (t = !1), t) return null === p || void 0 === p ? void 0 : p.getVariantContext();
                                    if (!W) {
                                        var e = (null === p || void 0 === p ? void 0 : p.getVariantContext()) || {};
                                        return void 0 !== v.initial && (e.initial = v.initial), e
                                    }
                                    for (var n = {}, r = 0; r < Pi; r++) {
                                        var o = Ci[r],
                                            i = v[o];
                                        (S(i) || !1 === i) && (n[o] = i)
                                    }
                                    return n
                                }
                            });
                        return q
                    }
                },
                Ci = (0, r.ev)(["initial"], (0, r.CR)(Qo), !1),
                Pi = Ci.length;

            function Ti(t) {
                return "string" === typeof t && t.startsWith("var(--")
            }
            var Oi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function Ri(t, e, n) {
                void 0 === n && (n = 1), 'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.');
                var o = (0, r.CR)(function(t) {
                        var e = Oi.exec(t);
                        if (!e) return [, ];
                        var n = (0, r.CR)(e, 3);
                        return [n[1], n[2]]
                    }(t), 2),
                    i = o[0],
                    a = o[1];
                if (i) {
                    var s = window.getComputedStyle(e).getPropertyValue(i);
                    return s ? s.trim() : Ti(a) ? Ri(a, e, n + 1) : a
                }
            }
            var Li, ji = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                ki = function(t) {
                    return ji.has(t)
                },
                Mi = function(t, e) {
                    t.set(e, !1), t.set(e)
                },
                Vi = function(t) {
                    return t === tt || t === dt
                };
            ! function(t) {
                t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
            }(Li || (Li = {}));
            var Ii = function(t, e) {
                    return parseFloat(t.split(", ")[e])
                },
                Fi = function(t, e) {
                    return function(n, r) {
                        var o = r.transform;
                        if ("none" === o || !o) return 0;
                        var i = o.match(/^matrix3d\((.+)\)$/);
                        if (i) return Ii(i[1], e);
                        var a = o.match(/^matrix\((.+)\)$/);
                        return a ? Ii(a[1], t) : 0
                    }
                },
                Di = new Set(["x", "y", "z"]),
                Ni = zn.filter((function(t) {
                    return !Di.has(t)
                }));
            var _i = {
                    width: function(t, e) {
                        var n = t.x,
                            r = e.paddingLeft,
                            o = void 0 === r ? "0" : r,
                            i = e.paddingRight,
                            a = void 0 === i ? "0" : i;
                        return n.max - n.min - parseFloat(o) - parseFloat(a)
                    },
                    height: function(t, e) {
                        var n = t.y,
                            r = e.paddingTop,
                            o = void 0 === r ? "0" : r,
                            i = e.paddingBottom,
                            a = void 0 === i ? "0" : i;
                        return n.max - n.min - parseFloat(o) - parseFloat(a)
                    },
                    top: function(t, e) {
                        var n = e.top;
                        return parseFloat(n)
                    },
                    left: function(t, e) {
                        var n = e.left;
                        return parseFloat(n)
                    },
                    bottom: function(t, e) {
                        var n = t.y,
                            r = e.top;
                        return parseFloat(r) + (n.max - n.min)
                    },
                    right: function(t, e) {
                        var n = t.x,
                            r = e.left;
                        return parseFloat(r) + (n.max - n.min)
                    },
                    x: Fi(4, 13),
                    y: Fi(5, 14)
                },
                Ui = function(t, e, n, o) {
                    void 0 === n && (n = {}), void 0 === o && (o = {}), e = (0, r.pi)({}, e), o = (0, r.pi)({}, o);
                    var i = Object.keys(e).filter(ki),
                        a = [],
                        s = !1,
                        u = [];
                    if (i.forEach((function(r) {
                            var i = t.getValue(r);
                            if (t.hasValue(r)) {
                                var l, c = n[r],
                                    f = Bo(c),
                                    d = e[r];
                                if (Ee(d)) {
                                    var p = d.length,
                                        v = null === d[0] ? 1 : 0;
                                    c = d[v], f = Bo(c);
                                    for (var h = v; h < p; h++) l ? Bo(d[h]) : (l = Bo(d[h])) === f || Vi(f) && Vi(l)
                                } else l = Bo(d);
                                if (f !== l)
                                    if (Vi(f) && Vi(l)) {
                                        var m = i.get();
                                        "string" === typeof m && i.set(parseFloat(m)), "string" === typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && l === dt && (e[r] = d.map(parseFloat))
                                    } else(null === f || void 0 === f ? void 0 : f.transform) && (null === l || void 0 === l ? void 0 : l.transform) && (0 === c || 0 === d) ? 0 === c ? i.set(l.transform(c)) : e[r] = f.transform(d) : (s || (a = function(t) {
                                        var e = [];
                                        return Ni.forEach((function(n) {
                                            var r = t.getValue(n);
                                            void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                        })), e.length && t.syncRender(), e
                                    }(t), s = !0), u.push(r), o[r] = void 0 !== o[r] ? o[r] : e[r], Mi(i, d))
                            }
                        })), u.length) {
                        var l = function(t, e, n) {
                            var r = e.measureViewportBox(),
                                o = e.getInstance(),
                                i = getComputedStyle(o),
                                a = i.display,
                                s = {};
                            "none" === a && e.setStaticValue("display", t.display || "block"), n.forEach((function(t) {
                                s[t] = _i[t](r, i)
                            })), e.syncRender();
                            var u = e.measureViewportBox();
                            return n.forEach((function(n) {
                                var r = e.getValue(n);
                                Mi(r, s[n]), t[n] = _i[n](u, i)
                            })), t
                        }(e, t, u);
                        return a.length && a.forEach((function(e) {
                            var n = (0, r.CR)(e, 2),
                                o = n[0],
                                i = n[1];
                            t.getValue(o).set(i)
                        })), t.syncRender(), {
                            target: l,
                            transitionEnd: o
                        }
                    }
                    return {
                        target: e,
                        transitionEnd: o
                    }
                };

            function zi(t, e, n, r) {
                return function(t) {
                    return Object.keys(t).some(ki)
                }(e) ? Ui(t, e, n, r) : {
                    target: e,
                    transitionEnd: r
                }
            }
            var Bi = function(t, e, n, o) {
                var i = function(t, e, n) {
                    var o, i = (0, r._T)(e, []),
                        a = t.getInstance();
                    if (!(a instanceof Element)) return {
                        target: i,
                        transitionEnd: n
                    };
                    for (var s in n && (n = (0, r.pi)({}, n)), t.forEachValue((function(t) {
                            var e = t.get();
                            if (Ti(e)) {
                                var n = Ri(e, a);
                                n && t.set(n)
                            }
                        })), i) {
                        var u = i[s];
                        if (Ti(u)) {
                            var l = Ri(u, a);
                            l && (i[s] = l, n && (null !== (o = n[s]) && void 0 !== o || (n[s] = u)))
                        }
                    }
                    return {
                        target: i,
                        transitionEnd: n
                    }
                }(t, e, o);
                return zi(t, e = i.target, n, o = i.transitionEnd)
            };
            var Wi = {
                    treeType: "dom",
                    readValueFromInstance: function(t, e) {
                        if (Hn(e)) {
                            var n = Fe(e);
                            return n && n.default || 0
                        }
                        var r, o = (r = t, window.getComputedStyle(r));
                        return (Cr(e) ? o.getPropertyValue(e) : o[e]) || 0
                    },
                    sortNodePosition: function(t, e) {
                        return 2 & t.compareDocumentPosition(e) ? 1 : -1
                    },
                    getBaseTarget: function(t, e) {
                        var n;
                        return null === (n = t.style) || void 0 === n ? void 0 : n[e]
                    },
                    measureViewportBox: function(t, e) {
                        return yi(t, e.transformPagePoint)
                    },
                    resetTransform: function(t, e, n) {
                        var r = n.transformTemplate;
                        e.style.transform = r ? r({}, "") : "none", t.scheduleRender()
                    },
                    restoreTransform: function(t, e) {
                        t.style.transform = e.style.transform
                    },
                    removeValueFromRenderState: function(t, e) {
                        var n = e.vars,
                            r = e.style;
                        delete n[t], delete r[t]
                    },
                    makeTargetAnimatable: function(t, e, n, o) {
                        var i = n.transformValues;
                        void 0 === o && (o = !0);
                        var a = e.transition,
                            s = e.transitionEnd,
                            u = (0, r._T)(e, ["transition", "transitionEnd"]),
                            l = function(t, e, n) {
                                var r, o, i = {};
                                for (var a in t) i[a] = null !== (r = $o(a, e)) && void 0 !== r ? r : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get();
                                return i
                            }(u, a || {}, t);
                        if (i && (s && (s = i(s)), u && (u = i(u)), l && (l = i(l))), o) {
                            ! function(t, e, n) {
                                var r, o, i, a, s = Object.keys(e).filter((function(e) {
                                        return !t.hasValue(e)
                                    })),
                                    u = s.length;
                                if (u)
                                    for (var l = 0; l < u; l++) {
                                        var c = s[l],
                                            f = e[c],
                                            d = null;
                                        Array.isArray(f) && (d = f[0]), null === d && (d = null !== (o = null !== (r = n[c]) && void 0 !== r ? r : t.readValue(c)) && void 0 !== o ? o : e[c]), void 0 !== d && null !== d && ("string" === typeof d && (/^\-?\d*\.?\d+$/.test(d) || _o(d)) ? d = parseFloat(d) : !Ho(d) && jt.test(f) && (d = De(c, f)), t.addValue(c, F(d)), null !== (i = (a = n)[c]) && void 0 !== i || (a[c] = d), t.setBaseTarget(c, d))
                                    }
                            }(t, u, l);
                            var c = Bi(t, u, l, s);
                            s = c.transitionEnd, u = c.target
                        }
                        return (0, r.pi)({
                            transition: a,
                            transitionEnd: s
                        }, u)
                    },
                    scrapeMotionValuesFromProps: Yr,
                    build: function(t, e, n, r, o) {
                        void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), Tr(e, n, r, o.transformTemplate)
                    },
                    render: qr
                },
                Hi = Ai(Wi),
                qi = Ai((0, r.pi)((0, r.pi)({}, Wi), {
                    getBaseTarget: function(t, e) {
                        return t[e]
                    },
                    readValueFromInstance: function(t, e) {
                        var n;
                        return Hn(e) ? (null === (n = Fe(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = Xr.has(e) ? e : Hr(e), t.getAttribute(e))
                    },
                    scrapeMotionValuesFromProps: Gr,
                    build: function(t, e, n, r, o) {
                        _r(e, n, r, o.transformTemplate)
                    },
                    render: $r
                })),
                Xi = function(t, e) {
                    return wr(t) ? qi(e, {
                        enableHardwareAcceleration: !1
                    }) : Hi(e, {
                        enableHardwareAcceleration: !0
                    })
                };

            function $i(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            var Yi = {
                    correct: function(t, e) {
                        if (!e.target) return t;
                        if ("string" === typeof t) {
                            if (!dt.test(t)) return t;
                            t = parseFloat(t)
                        }
                        var n = $i(t, e.target.x),
                            r = $i(t, e.target.y);
                        return "".concat(n, "% ").concat(r, "%")
                    }
                },
                Gi = "_$css",
                Zi = {
                    correct: function(t, e) {
                        var n = e.treeScale,
                            r = e.projectionDelta,
                            o = t,
                            i = t.includes("var("),
                            a = [];
                        i && (t = t.replace(Oi, (function(t) {
                            return a.push(t), Gi
                        })));
                        var s = jt.parse(t);
                        if (s.length > 5) return o;
                        var u = jt.createTransformer(t),
                            l = "number" !== typeof s[0] ? 1 : 0,
                            c = r.x.scale * n.x,
                            f = r.y.scale * n.y;
                        s[0 + l] /= c, s[1 + l] /= f;
                        var d = L(c, f, .5);
                        "number" === typeof s[2 + l] && (s[2 + l] /= d), "number" === typeof s[3 + l] && (s[3 + l] /= d);
                        var p = u(s);
                        if (i) {
                            var v = 0;
                            p = p.replace(Gi, (function() {
                                var t = a[v];
                                return v++, t
                            }))
                        }
                        return p
                    }
                },
                Ki = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return (0, r.ZT)(e, t), e.prototype.componentDidMount = function() {
                        var t, e = this,
                            n = this.props,
                            o = n.visualElement,
                            i = n.layoutGroup,
                            a = n.switchLayoutGroup,
                            s = n.layoutId,
                            u = o.projection;
                        t = Qi, Object.assign(Dn, t), u && ((null === i || void 0 === i ? void 0 : i.group) && i.group.add(u), (null === a || void 0 === a ? void 0 : a.register) && s && a.register(u), u.root.didUpdate(), u.addEventListener("animationComplete", (function() {
                            e.safeToRemove()
                        })), u.setOptions((0, r.pi)((0, r.pi)({}, u.options), {
                            onExitComplete: function() {
                                return e.safeToRemove()
                            }
                        }))), Zn.hasEverUpdated = !0
                    }, e.prototype.getSnapshotBeforeUpdate = function(t) {
                        var e = this,
                            n = this.props,
                            r = n.layoutDependency,
                            o = n.visualElement,
                            i = n.drag,
                            a = n.isPresent,
                            s = o.projection;
                        return s ? (s.isPresent = a, i || t.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? s.promote() : s.relegate() || R.ZP.postRender((function() {
                            var t;
                            (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || e.safeToRemove()
                        }))), null) : null
                    }, e.prototype.componentDidUpdate = function() {
                        var t = this.props.visualElement.projection;
                        t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
                    }, e.prototype.componentWillUnmount = function() {
                        var t = this.props,
                            e = t.visualElement,
                            n = t.layoutGroup,
                            r = t.switchLayoutGroup,
                            o = e.projection;
                        o && (o.scheduleCheckAfterUnmount(), (null === n || void 0 === n ? void 0 : n.group) && n.group.remove(o), (null === r || void 0 === r ? void 0 : r.deregister) && r.deregister(o))
                    }, e.prototype.safeToRemove = function() {
                        var t = this.props.safeToRemove;
                        null === t || void 0 === t || t()
                    }, e.prototype.render = function() {
                        return null
                    }, e
                }(o.Component);
            var Qi = {
                    borderRadius: (0, r.pi)((0, r.pi)({}, Yi), {
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    }),
                    borderTopLeftRadius: Yi,
                    borderTopRightRadius: Yi,
                    borderBottomLeftRadius: Yi,
                    borderBottomRightRadius: Yi,
                    boxShadow: Zi
                },
                Ji = {
                    measureLayout: function(t) {
                        var e = (0, r.CR)(Do(), 2),
                            n = e[0],
                            i = e[1],
                            a = (0, o.useContext)(mr.p);
                        return o.createElement(Ki, (0, r.pi)({}, t, {
                            layoutGroup: a,
                            switchLayoutGroup: (0, o.useContext)(gr),
                            isPresent: n,
                            safeToRemove: i
                        }))
                    }
                },
                ta = Kn({
                    attachResizeListener: function(t, e) {
                        return t.addEventListener("resize", e, {
                                passive: !0
                            }),
                            function() {
                                return t.removeEventListener("resize", e)
                            }
                    },
                    measureScroll: function() {
                        return {
                            x: document.documentElement.scrollLeft || document.body.scrollLeft,
                            y: document.documentElement.scrollTop || document.body.scrollTop
                        }
                    }
                }),
                ea = {
                    current: void 0
                },
                na = Kn({
                    measureScroll: function(t) {
                        return {
                            x: t.scrollLeft,
                            y: t.scrollTop
                        }
                    },
                    defaultParent: function() {
                        if (!ea.current) {
                            var t = new ta(0, {});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), ea.current = t
                        }
                        return ea.current
                    },
                    resetTransform: function(t, e) {
                        t.style.transform = null !== e && void 0 !== e ? e : "none"
                    }
                }),
                ra = (0, r.pi)((0, r.pi)((0, r.pi)((0, r.pi)({}, oi), Io), wi), Ji),
                oa = xr((function(t, e) {
                    return function(t, e, n, o, i) {
                        var a = e.forwardMotionProps,
                            s = void 0 !== a && a,
                            u = wr(t) ? eo : no;
                        return (0, r.pi)((0, r.pi)({}, u), {
                            preloadedFeatures: n,
                            useRender: Br(s),
                            createVisualElement: o,
                            projectionNodeConstructor: i,
                            Component: t
                        })
                    }(t, e, ra, Xi, na)
                }))
        },
        1741: function(t, e, n) {
            "use strict";
            n.d(e, {
                j: function() {
                    return r
                }
            });
            var r = "undefined" !== typeof document
        },
        6681: function(t, e, n) {
            "use strict";
            n.d(e, {
                h: function() {
                    return o
                }
            });
            var r = n(7294);

            function o(t) {
                var e = (0, r.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        6316: function(t, e, n) {
            "use strict";
            n.d(e, {
                M: function() {
                    return a
                }
            });
            var r = n(6681),
                o = 0,
                i = function() {
                    return o++
                },
                a = function() {
                    return (0, r.h)(i)
                }
        },
        8868: function(t, e, n) {
            "use strict";
            n.d(e, {
                L: function() {
                    return o
                }
            });
            var r = n(7294),
                o = n(1741).j ? r.useLayoutEffect : r.useEffect
        },
        5411: function(t, e, n) {
            "use strict";
            n.d(e, {
                z: function() {
                    return o
                }
            });
            var r = n(7294);

            function o(t) {
                return (0, r.useEffect)((function() {
                    return function() {
                        return t()
                    }
                }), [])
            }
        },
        4735: function(t, e, n) {
            "use strict";
            n.d(e, {
                qY: function() {
                    return p
                },
                ZP: function() {
                    return b
                },
                iW: function() {
                    return v
                },
                $B: function() {
                    return y
                }
            });
            const r = 1 / 60 * 1e3,
                o = "undefined" !== typeof performance ? () => performance.now() : () => Date.now(),
                i = "undefined" !== typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(o())), r);
            let a = !0,
                s = !1,
                u = !1;
            const l = {
                    delta: 0,
                    timestamp: 0
                },
                c = ["read", "update", "preRender", "render", "postRender"],
                f = c.reduce(((t, e) => (t[e] = function(t) {
                    let e = [],
                        n = [],
                        r = 0,
                        o = !1,
                        i = !1;
                    const a = new WeakSet,
                        s = {
                            schedule: (t, i = !1, s = !1) => {
                                const u = s && o,
                                    l = u ? e : n;
                                return i && a.add(t), -1 === l.indexOf(t) && (l.push(t), u && o && (r = e.length)), t
                            },
                            cancel: t => {
                                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1), a.delete(t)
                            },
                            process: u => {
                                if (o) i = !0;
                                else {
                                    if (o = !0, [e, n] = [n, e], n.length = 0, r = e.length, r)
                                        for (let n = 0; n < r; n++) {
                                            const r = e[n];
                                            r(u), a.has(r) && (s.schedule(r), t())
                                        }
                                    o = !1, i && (i = !1, s.process(u))
                                }
                            }
                        };
                    return s
                }((() => s = !0)), t)), {}),
                d = c.reduce(((t, e) => {
                    const n = f[e];
                    return t[e] = (t, e = !1, r = !1) => (s || g(), n.schedule(t, e, r)), t
                }), {}),
                p = c.reduce(((t, e) => (t[e] = f[e].cancel, t)), {}),
                v = c.reduce(((t, e) => (t[e] = () => f[e].process(l), t)), {}),
                h = t => f[t].process(l),
                m = t => {
                    s = !1, l.delta = a ? r : Math.max(Math.min(t - l.timestamp, 40), 1), l.timestamp = t, u = !0, c.forEach(h), u = !1, s && (a = !1, i(m))
                },
                g = () => {
                    s = !0, a = !0, u || i(m)
                },
                y = () => l;
            var b = d
        }
    }
]);