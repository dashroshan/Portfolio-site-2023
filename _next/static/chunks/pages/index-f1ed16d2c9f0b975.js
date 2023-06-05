(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function (e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return r(5830)
            }])
        },
        9009: function (e, n, r) {
            "use strict";
            var t = r(5893),
                a = r(7294),
                s = r(3944),
                i = r(3532);
            n.Z = function (e) {
                var n = e.title,
                    r = e.slug,
                    c = (0, a.useState)(!1),
                    o = c[0],
                    l = c[1];
                return (0, a.useEffect)((function () {
                    l(!0)
                }), []), o ? (0, t.jsx)(s.qw, {
                    shortname: "taylor-3",
                    config: {
                        url: "./",
                        identifier: r,
                        title: n
                    }
                }) : (0, t.jsx)("div", {
                    className: "block py-20 text-center",
                    children: (0, t.jsx)(i.Z, {})
                })
            }
        },
        3532: function (e, n, r) {
            "use strict";
            var t = r(5893);
            n.Z = function () {
                return (0, t.jsxs)("div", {
                    className: "spinner relative inline-flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white border-opacity-20",
                    children: [(0, t.jsx)("span", {
                        className: "relative z-20 text-sm uppercase tracking-wider",
                        children: "Loading"
                    }), (0, t.jsx)("span", {
                        className: "absolute z-10 h-full w-full animate-spin rounded-full border-l-2 border-t-2 border-white border-opacity-50 bg-grey-lighten"
                    })]
                })
            }
        },
        4571: function (e, n, r) {
            "use strict";
            r.d(n, {
                TR: function () {
                    return i
                },
                ej: function () {
                    return l
                },
                OT: function () {
                    return d
                },
                $j: function () {
                    return f.Z
                }
            });
            var t = r(5893),
                a = r(1664),
                s = r.n(a),
                i = function (e) {
                    var n = e.url,
                        r = void 0 === n ? "/" : n,
                        a = e.text,
                        i = void 0 !== a && a;
                    return (0, t.jsx)(s(), {
                        href: r,
                        children: (0, t.jsx)("a", {
                            className: "sitelogo py-2",
                            children: i ? (0, t.jsx)("span", {
                                className: "text-4xl font-bold uppercase leading-none text-primary",
                                children: "Bieber"
                            }) : (0, t.jsx)(t.Fragment, {
                                children: (0, t.jsx)("img", {
                                    className: "h-8 max-h-full w-auto",
                                    src: "/images/logo.png",
                                    alt: "Bieber"
                                })
                            })
                        })
                    })
                },
                c = r(8767),
                o = r(8579),
                l = function (e) {
                    var n = e.currentFilter,
                        r = e.filterHandler,
                        a = (0, c.useQuery)("portfolio-filters", o.ez).data;
                    return a ? (0, t.jsxs)("div", {
                        className: "portfolio-filters flex flex-wrap justify-center gap-4",
                        children: [(0, t.jsx)("button", {
                            className: "btn btn-small ".concat("" === n ? "" : "btn-transparent"),
                            onClick: function () {
                                return r("")
                            },
                            children: (0, t.jsx)("span", {
                                children: "All"
                            })
                        }), null === a || void 0 === a ? void 0 : a.map((function (e) {
                            return (0, t.jsx)("button", {
                                className: "btn btn-small ".concat(n === e.value ? "before:invisible" : "btn-transparent"),
                                onClick: function () {
                                    return r(e.value)
                                },
                                children: (0, t.jsx)("span", {
                                    children: e.title
                                })
                            }, e.id)
                        }))]
                    }) : null
                },
                u = r(2141),
                d = function (e) {
                    var n = e.title,
                        r = e.watermark,
                        a = e.animated,
                        s = void 0 === a || a,
                        i = (0, u.YT)({
                            translateX: s ? [-200, 200] : null,
                            easing: "easeInOut"
                        });
                    return (0, t.jsxs)("div", {
                        className: "section-heading relative overflow-hidden pb-14 text-center",
                        children: [(0, t.jsx)("h2", {
                            className: "relative z-10 mb-2 uppercase",
                            children: n
                        }), (0, t.jsx)("span", {
                            className: "relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20",
                            children: (0, t.jsx)("span", {
                                className: "absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"
                            })
                        }), (0, t.jsx)("span", {
                            ref: i.ref,
                            className: "pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5",
                            children: r
                        })]
                    })
                },
                f = r(3532);
            r(9009)
        },
        8579: function (e, n, r) {
            "use strict";
            r.d(n, {
                Vf: function () {
                    return v
                },
                s0: function () {
                    return x
                },
                H9: function () {
                    return l
                },
                Ry: function () {
                    return m
                },
                UU: function () {
                    return f
                },
                ez: function () {
                    return p
                },
                r3: function () {
                    return h
                },
                U2: function () {
                    return u
                },
                QM: function () {
                    return d
                }
            });
            var t = r(4051),
                a = r.n(t),
                s = r(9669),
                i = r.n(s)().create({
                    baseURL: "./api",
                    headers: {
                        Accept: "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
                        "Content-Type": "application/json"
                    }
                });

            function c(e, n, r, t, a, s, i) {
                try {
                    var c = e[s](i),
                        o = c.value
                } catch (l) {
                    return void r(l)
                }
                c.done ? n(o) : Promise.resolve(o).then(t, a)
            }

            function o(e) {
                return function () {
                    var n = this,
                        r = arguments;
                    return new Promise((function (t, a) {
                        var s = e.apply(n, r);

                        function i(e) {
                            c(s, t, a, i, o, "next", e)
                        }

                        function o(e) {
                            c(s, t, a, i, o, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var l = function () {
                var e = o(a().mark((function e() {
                    var n;
                    return a().wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i.get("/information.json");
                            case 2:
                                return n = e.sent, e.abrupt("return", n.data);
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function () {
                    return e.apply(this, arguments)
                }
            }(),
                u = function () {
                    var e = o(a().mark((function e() {
                        var n;
                        return a().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.get("/services.json");
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function () {
                    var e = o(a().mark((function e() {
                        var n;
                        return a().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.get("/techskills.json");
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function () {
                    var e = o(a().mark((function e() {
                        var n;
                        return a().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.get("/languageskills.json");
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function () {
                    var e = o(a().mark((function e() {
                        var n;
                        return a().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.get("/portfoliofilters.json");
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function () {
                    var e = o(a().mark((function e() {
                        var n;
                        return a().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.get("/portfolios.json");
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function () {
                    var e = o(a().mark((function e() {
                        var n;
                        return a().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.get("/jobexperience.json");
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                x = function () {
                    var e = o(a().mark((function e() {
                        var n;
                        return a().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.get("/educationbackground.json");
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(),
                v = function () {
                    var e = o(a().mark((function e() {
                        var n;
                        return a().wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.get("/clientsreview.json");
                                case 2:
                                    return n = e.sent, e.abrupt("return", n.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
        },
        4646: function (e, n, r) {
            "use strict";
            r.d(n, {
                XI: function () {
                    return s
                },
                f8: function () {
                    return t
                },
                s3: function () {
                    return a
                }
            });
            var t = function (e, n) {
                return '\n<svg width="'.concat(e, '" height="').concat(n, '" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n        <linearGradient id="g">\n            <stop stop-color="#ededed" offset="20%" />\n            <stop stop-color="#e5e5e5" offset="50%" />\n            <stop stop-color="#dadada" offset="70%" />\n        </linearGradient>\n    </defs>\n    <rect width="').concat(e, '" height="').concat(n, '" fill="#1a2c38" />\n    <rect id="r" width="').concat(e, '" height="').concat(n, '" fill="url(#g)" fill-opacity="0.1" />\n    <animate xlink:href="#r" attributeName="x" from="-').concat(e, '" to="').concat(e, '" dur="1s" repeatCount="indefinite"  />\n</svg>')
            },
                a = function (e) {
                    return window.btoa(e)
                },
                s = function (e) {
                    return e
                }
        },
        5830: function (e, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                __N_SSG: function () {
                    return d
                }
            });
            var t = r(5893),
                a = r(5675),
                s = r.n(a),
                i = r(1664),
                c = r.n(i),
                o = r(6261),
                l = r(4571),
                u = r(4646),
                d = !0;
            n.default = function (e) {
                var n = e.pages;
                return (0, t.jsxs)("div", {
                    className: "previewpage bg-grey-darken",
                    children: [(0, t.jsx)("header", {
                        className: "header relative z-50 border-b border-white border-opacity-10",
                        children: (0, t.jsx)("div", {
                            className: "container mx-auto",
                            children: (0, t.jsxs)("div", {
                                className: "header-inner flex items-center justify-between py-3",
                                children: [(0, t.jsx)(l.TR, {
                                    url: "/"
                                }), (0, t.jsx)("div", {
                                    className: "header-button hidden lg:block",
                                    children: (0, t.jsx)(c(), {
                                        href: "https://themeforest.net/user/nuclear_themes/portfolio",
                                        children: (0, t.jsx)("a", {
                                            className: "btn",
                                            children: (0, t.jsx)("span", {
                                                children: "Buy Now"
                                            })
                                        })
                                    })
                                })]
                            })
                        })
                    }), (0, t.jsxs)("main", {
                        className: "previewmain bg-grey",
                        children: [(0, t.jsx)("div", {
                            className: "herosection herosection-bg ",
                            children: (0, t.jsx)("div", {
                                className: "herosection-inner flex min-h-[50vh] items-center bg-grey-darken bg-opacity-90",
                                children: (0, t.jsx)("div", {
                                    className: "container mx-auto",
                                    children: (0, t.jsxs)("div", {
                                        className: "herosection-content py-20 text-center",
                                        children: [(0, t.jsx)("h1", {
                                            className: "text-primary",
                                            children: "Roshan Dash - Web & cloud developer"
                                        }), (0, t.jsx)("p", {
                                            className: "lead",
                                            children: "Bieber is a creative personal portfolio React template build with NextJS and TailwindCSS."
                                        }), (0, t.jsx)(o.rU, {
                                            activeClass: "active",
                                            to: "section-demos",
                                            spy: !0,
                                            smooth: "easeInQuad",
                                            offset: 0,
                                            duration: 1e3,
                                            className: "btn btn-large mt-4",
                                            children: (0, t.jsx)("span", {
                                                className: "pl-2",
                                                children: "View Demos"
                                            })
                                        })]
                                    })
                                })
                            })
                        }), (0, t.jsx)(o.W_, {
                            name: "section-demos",
                            className: "demos-section py-24 lg:py-28 xl:py-32",
                            children: (0, t.jsxs)("div", {
                                className: "container mx-auto",
                                children: [(0, t.jsx)(l.OT, {
                                    title: "Demos",
                                    watermark: "Demos"
                                }), (0, t.jsxs)("div", {
                                    className: "grid grid-cols-1 gap-10 md:grid-cols-2",
                                    children: [n.map((function (e) {
                                        return (0, t.jsx)("div", {
                                            className: "col-span-1",
                                            children: (0, t.jsx)(c(), {
                                                href: e.path,
                                                children: (0, t.jsxs)("a", {
                                                    className: "card hovercard block overflow-hidden",
                                                    children: [(0, t.jsx)("div", {
                                                        className: "imagebox overflow-hidden rounded",
                                                        children: (0, t.jsx)(s(), {
                                                            loader: u.XI,
                                                            unoptimized: !0,
                                                            src: e.image,
                                                            height: 337,
                                                            width: 650,
                                                            alt: e.title
                                                        })
                                                    }), (0, t.jsx)("h5", {
                                                        className: "py-3 text-center",
                                                        children: e.title
                                                    })]
                                                })
                                            })
                                        }, e.id)
                                    })), (0, t.jsx)("div", {
                                        className: "col-span-1",
                                        children: (0, t.jsx)(c(), {
                                            href: "/",
                                            children: (0, t.jsxs)("a", {
                                                className: "card hovercard block overflow-hidden",
                                                children: [(0, t.jsx)("div", {
                                                    className: "imagebox overflow-hidden rounded",
                                                    children: (0, t.jsx)(s(), {
                                                        loader: u.XI,
                                                        unoptimized: !0,
                                                        src: "/images/demo/coming-soon.jpg",
                                                        height: 337,
                                                        width: 650,
                                                        alt: "Comming Soon"
                                                    })
                                                }), (0, t.jsx)("h5", {
                                                    className: "py-3 text-center",
                                                    children: "More Demos Coming Soon"
                                                })]
                                            })
                                        })
                                    })]
                                })]
                            })
                        })]
                    }), (0, t.jsx)("footer", {
                        className: "footer bg-grey-darken",
                        children: (0, t.jsx)("div", {
                            className: "contianer mx-auto",
                            children: (0, t.jsxs)("p", {
                                className: "mb-0 py-4 text-center",
                                children: ["\xa9 ", (new Date).getFullYear(), ", All right reserved", (0, t.jsx)("span", {
                                    href: "/",
                                    children: (0, t.jsx)("a", {
                                        className: "pl-1.5 font-medium text-heading no-underline hover:text-primary",
                                        children: "Roshan Dash"
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        }
    },
    function (e) {
        e.O(0, [334, 774, 888, 179], (function () {
            return n = 5557, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);