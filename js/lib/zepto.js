/* Zepto 1.1.4 - zepto event ajax data assets stack form ie deferred callbacks selector fx fx_methods - zeptojs.com/license */
var Zepto = function() {
    function Z(t) {
        return null == t ? String(t) : j[C.call(t)] || "object"
    }
    function k(t) {
        return "function" == Z(t)
    }
    function D(t) {
        return null != t && t == t.window
    }
    function $(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }
    function L(t) {
        return "object" == Z(t)
    }
    function _(t) {
        return L(t) && !D(t) && Object.getPrototypeOf(t) == Object.prototype
    }
    function F(t) {
        return "number" == typeof t.length
    }
    function z(t) {
        return o.call(t, function(t) {
            return null != t
        })
    }
    function q(t) {
        return t.length > 0 ? n.fn.concat.apply([], t) : t
    }
    function R(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function M(t) {
        return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }
    function W(t, e) {
        return "number" != typeof e || c[R(t)] ? e : e + "px"
    }
    function I(t) {
        var e, n;
        return u[t] || (e = a.createElement(t),
        a.body.appendChild(e),
        n = getComputedStyle(e, "").getPropertyValue("display"),
        e.parentNode.removeChild(e),
        "none" == n && (n = "block"),
        u[t] = n),
        u[t]
    }
    function H(t) {
        return "children"in t ? s.call(t.children) : n.map(t.childNodes, function(t) {
            return 1 == t.nodeType ? t : void 0
        })
    }
    function V(n, i, r) {
        for (e in i)
            r && (_(i[e]) || P(i[e])) ? (_(i[e]) && !_(n[e]) && (n[e] = {}),
            P(i[e]) && !P(n[e]) && (n[e] = []),
            V(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
    }
    function B(t, e) {
        return null == e ? n(t) : n(t).filter(e)
    }
    function X(t, e, n, i) {
        return k(e) ? e.call(t, n, i) : e
    }
    function U(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }
    function J(e, n) {
        var i = e.className || ""
          , r = i && i.baseVal !== t;
        return n === t ? r ? i.baseVal : i : void (r ? i.baseVal = n : e.className = n)
    }
    function Y(t) {
        var e;
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? n.parseJSON(t) : t : e) : t
        } catch (i) {
            return t
        }
    }
    function G(t, e) {
        e(t);
        for (var n = 0, i = t.childNodes.length; i > n; n++)
            G(t.childNodes[n], e)
    }
    var t, e, n, i, N, A, r = [], s = r.slice, o = r.filter, a = window.document, u = {}, f = {}, c = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, l = /^\s*<(\w+|!)[^>]*>/, h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, d = /^(?:body|html)$/i, m = /([A-Z])/g, g = ["val", "css", "html", "text", "data", "width", "height", "offset"], v = ["after", "prepend", "before", "append"], y = a.createElement("table"), x = a.createElement("tr"), b = {
        tr: a.createElement("tbody"),
        tbody: y,
        thead: y,
        tfoot: y,
        td: x,
        th: x,
        "*": a.createElement("div")
    }, w = /complete|loaded|interactive/, E = /^[\w-]*$/, j = {}, C = j.toString, T = {}, O = a.createElement("div"), S = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    }, P = Array.isArray || function(t) {
        return t instanceof Array
    }
    ;
    return T.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType)
            return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n)
            return n.call(t, e);
        var i, r = t.parentNode, s = !r;
        return s && (r = O).appendChild(t),
        i = ~T.qsa(r, e).indexOf(t),
        s && O.removeChild(t),
        i
    }
    ,
    N = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }
    ,
    A = function(t) {
        return o.call(t, function(e, n) {
            return t.indexOf(e) == n
        })
    }
    ,
    T.fragment = function(e, i, r) {
        var o, u, f;
        return h.test(e) && (o = n(a.createElement(RegExp.$1))),
        o || (e.replace && (e = e.replace(p, "<$1></$2>")),
        i === t && (i = l.test(e) && RegExp.$1),
        i in b || (i = "*"),
        f = b[i],
        f.innerHTML = "" + e,
        o = n.each(s.call(f.childNodes), function() {
            f.removeChild(this)
        })),
        _(r) && (u = n(o),
        n.each(r, function(t, e) {
            g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e)
        })),
        o
    }
    ,
    T.Z = function(t, e) {
        return t = t || [],
        t.__proto__ = n.fn,
        t.selector = e || "",
        t
    }
    ,
    T.isZ = function(t) {
        return t instanceof T.Z
    }
    ,
    T.init = function(e, i) {
        var r;
        if (!e)
            return T.Z();
        if ("string" == typeof e)
            if (e = e.trim(),
            "<" == e[0] && l.test(e))
                r = T.fragment(e, RegExp.$1, i),
                e = null;
            else {
                if (i !== t)
                    return n(i).find(e);
                r = T.qsa(a, e)
            }
        else {
            if (k(e))
                return n(a).ready(e);
            if (T.isZ(e))
                return e;
            if (P(e))
                r = z(e);
            else if (L(e))
                r = [e],
                e = null;
            else if (l.test(e))
                r = T.fragment(e.trim(), RegExp.$1, i),
                e = null;
            else {
                if (i !== t)
                    return n(i).find(e);
                r = T.qsa(a, e)
            }
        }
        return T.Z(r, e)
    }
    ,
    n = function(t, e) {
        return T.init(t, e)
    }
    ,
    n.extend = function(t) {
        var e, n = s.call(arguments, 1);
        return "boolean" == typeof t && (e = t,
        t = n.shift()),
        n.forEach(function(n) {
            V(t, n, e)
        }),
        t
    }
    ,
    T.qsa = function(t, e) {
        var n, i = "#" == e[0], r = !i && "." == e[0], o = i || r ? e.slice(1) : e, a = E.test(o);
        return $(t) && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : s.call(a && !i ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }
    ,
    n.contains = a.documentElement.contains ? function(t, e) {
        return t !== e && t.contains(e)
    }
    : function(t, e) {
        for (; e && (e = e.parentNode); )
            if (e === t)
                return !0;
        return !1
    }
    ,
    n.type = Z,
    n.isFunction = k,
    n.isWindow = D,
    n.isArray = P,
    n.isPlainObject = _,
    n.isEmptyObject = function(t) {
        var e;
        for (e in t)
            return !1;
        return !0
    }
    ,
    n.inArray = function(t, e, n) {
        return r.indexOf.call(e, t, n)
    }
    ,
    n.camelCase = N,
    n.trim = function(t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }
    ,
    n.uuid = 0,
    n.support = {},
    n.expr = {},
    n.map = function(t, e) {
        var n, r, s, i = [];
        if (F(t))
            for (r = 0; r < t.length; r++)
                n = e(t[r], r),
                null != n && i.push(n);
        else
            for (s in t)
                n = e(t[s], s),
                null != n && i.push(n);
        return q(i)
    }
    ,
    n.each = function(t, e) {
        var n, i;
        if (F(t)) {
            for (n = 0; n < t.length; n++)
                if (e.call(t[n], n, t[n]) === !1)
                    return t
        } else
            for (i in t)
                if (e.call(t[i], i, t[i]) === !1)
                    return t;
        return t
    }
    ,
    n.grep = function(t, e) {
        return o.call(t, e)
    }
    ,
    window.JSON && (n.parseJSON = JSON.parse),
    n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        j["[object " + e + "]"] = e.toLowerCase()
    }),
    n.fn = {
        forEach: r.forEach,
        reduce: r.reduce,
        push: r.push,
        sort: r.sort,
        indexOf: r.indexOf,
        concat: r.concat,
        map: function(t) {
            return n(n.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return n(s.apply(this, arguments))
        },
        ready: function(t) {
            return w.test(a.readyState) && a.body ? t(n) : a.addEventListener("DOMContentLoaded", function() {
                t(n)
            }, !1),
            this
        },
        get: function(e) {
            return e === t ? s.call(this) : this[e >= 0 ? e : e + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(t) {
            return r.every.call(this, function(e, n) {
                return t.call(e, n, e) !== !1
            }),
            this
        },
        filter: function(t) {
            return k(t) ? this.not(this.not(t)) : n(o.call(this, function(e) {
                return T.matches(e, t)
            }))
        },
        add: function(t, e) {
            return n(A(this.concat(n(t, e))))
        },
        is: function(t) {
            return this.length > 0 && T.matches(this[0], t)
        },
        not: function(e) {
            var i = [];
            if (k(e) && e.call !== t)
                this.each(function(t) {
                    e.call(this, t) || i.push(this)
                });
            else {
                var r = "string" == typeof e ? this.filter(e) : F(e) && k(e.item) ? s.call(e) : n(e);
                this.forEach(function(t) {
                    r.indexOf(t) < 0 && i.push(t)
                })
            }
            return n(i)
        },
        has: function(t) {
            return this.filter(function() {
                return L(t) ? n.contains(this, t) : n(this).find(t).size()
            })
        },
        eq: function(t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !L(t) ? t : n(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !L(t) ? t : n(t)
        },
        find: function(t) {
            var e, i = this;
            return e = t ? "object" == typeof t ? n(t).filter(function() {
                var t = this;
                return r.some.call(i, function(e) {
                    return n.contains(e, t)
                })
            }) : 1 == this.length ? n(T.qsa(this[0], t)) : this.map(function() {
                return T.qsa(this, t)
            }) : []
        },
        closest: function(t, e) {
            var i = this[0]
              , r = !1;
            for ("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : T.matches(i, t)); )
                i = i !== e && !$(i) && i.parentNode;
            return n(i)
        },
        parents: function(t) {
            for (var e = [], i = this; i.length > 0; )
                i = n.map(i, function(t) {
                    return (t = t.parentNode) && !$(t) && e.indexOf(t) < 0 ? (e.push(t),
                    t) : void 0
                });
            return B(e, t)
        },
        parent: function(t) {
            return B(A(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return B(this.map(function() {
                return H(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return s.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return B(this.map(function(t, e) {
                return o.call(H(e.parentNode), function(t) {
                    return t !== e
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return n.map(this, function(e) {
                return e[t]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""),
                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            var e = k(t);
            if (this[0] && !e)
                var i = n(t).get(0)
                  , r = i.parentNode || this.length > 1;
            return this.each(function(s) {
                n(this).wrapAll(e ? t.call(this, s) : r ? i.cloneNode(!0) : i)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                n(this[0]).before(t = n(t));
                for (var e; (e = t.children()).length; )
                    t = e.first();
                n(t).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            var e = k(t);
            return this.each(function(i) {
                var r = n(this)
                  , s = r.contents()
                  , o = e ? t.call(this, i) : t;
                s.length ? s.wrapAll(o) : r.append(o)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n(this).replaceWith(n(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(e) {
            return this.each(function() {
                var i = n(this);
                (e === t ? "none" == i.css("display") : e) ? i.show() : i.hide()
            })
        },
        prev: function(t) {
            return n(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return n(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var i = this.innerHTML;
                n(this).empty().append(X(this, t, e, i))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = X(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this[0].textContent : null
        },
        attr: function(n, i) {
            var r;
            return "string" != typeof n || 1 in arguments ? this.each(function(t) {
                if (1 === this.nodeType)
                    if (L(n))
                        for (e in n)
                            U(this, e, n[e]);
                    else
                        U(this, n, X(this, i, t, this.getAttribute(n)))
            }) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && U(this, t)
            })
        },
        prop: function(t, e) {
            return t = S[t] || t,
            1 in arguments ? this.each(function(n) {
                this[t] = X(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function(e, n) {
            var i = "data-" + e.replace(m, "-$1").toLowerCase()
              , r = 1 in arguments ? this.attr(i, n) : this.attr(i);
            return null !== r ? Y(r) : t
        },
        val: function(t) {
            return 0 in arguments ? this.each(function(e) {
                this.value = X(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(t) {
            if (t)
                return this.each(function(e) {
                    var i = n(this)
                      , r = X(this, t, e, i.offset())
                      , s = i.offsetParent().offset()
                      , o = {
                        top: r.top - s.top,
                        left: r.left - s.left
                    };
                    "static" == i.css("position") && (o.position = "relative"),
                    i.css(o)
                });
            if (!this.length)
                return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function(t, i) {
            if (arguments.length < 2) {
                var r = this[0]
                  , s = getComputedStyle(r, "");
                if (!r)
                    return;
                if ("string" == typeof t)
                    return r.style[N(t)] || s.getPropertyValue(t);
                if (P(t)) {
                    var o = {};
                    return n.each(t, function(t, e) {
                        o[e] = r.style[N(e)] || s.getPropertyValue(e)
                    }),
                    o
                }
            }
            var a = "";
            if ("string" == Z(t))
                i || 0 === i ? a = R(t) + ":" + W(t, i) : this.each(function() {
                    this.style.removeProperty(R(t))
                });
            else
                for (e in t)
                    t[e] || 0 === t[e] ? a += R(e) + ":" + W(e, t[e]) + ";" : this.each(function() {
                        this.style.removeProperty(R(e))
                    });
            return this.each(function() {
                this.style.cssText += ";" + a
            })
        },
        index: function(t) {
            return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return t ? r.some.call(this, function(t) {
                return this.test(J(t))
            }, M(t)) : !1
        },
        addClass: function(t) {
            return t ? this.each(function(e) {
                if ("className"in this) {
                    i = [];
                    var r = J(this)
                      , s = X(this, t, e, r);
                    s.split(/\s+/g).forEach(function(t) {
                        n(this).hasClass(t) || i.push(t)
                    }, this),
                    i.length && J(this, r + (r ? " " : "") + i.join(" "))
                }
            }) : this
        },
        removeClass: function(e) {
            return this.each(function(n) {
                if ("className"in this) {
                    if (e === t)
                        return J(this, "");
                    i = J(this),
                    X(this, e, n, i).split(/\s+/g).forEach(function(t) {
                        i = i.replace(M(t), " ")
                    }),
                    J(this, i.trim())
                }
            })
        },
        toggleClass: function(e, i) {
            return e ? this.each(function(r) {
                var s = n(this)
                  , o = X(this, e, r, J(this));
                o.split(/\s+/g).forEach(function(e) {
                    (i === t ? !s.hasClass(e) : i) ? s.addClass(e) : s.removeClass(e)
                })
            }) : this
        },
        scrollTop: function(e) {
            if (this.length) {
                var n = "scrollTop"in this[0];
                return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ? function() {
                    this.scrollTop = e
                }
                : function() {
                    this.scrollTo(this.scrollX, e)
                }
                )
            }
        },
        scrollLeft: function(e) {
            if (this.length) {
                var n = "scrollLeft"in this[0];
                return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ? function() {
                    this.scrollLeft = e
                }
                : function() {
                    this.scrollTo(e, this.scrollY)
                }
                )
            }
        },
        position: function() {
            if (this.length) {
                var t = this[0]
                  , e = this.offsetParent()
                  , i = this.offset()
                  , r = d.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : e.offset();
                return i.top -= parseFloat(n(t).css("margin-top")) || 0,
                i.left -= parseFloat(n(t).css("margin-left")) || 0,
                r.top += parseFloat(n(e[0]).css("border-top-width")) || 0,
                r.left += parseFloat(n(e[0]).css("border-left-width")) || 0,
                {
                    top: i.top - r.top,
                    left: i.left - r.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && "static" == n(t).css("position"); )
                    t = t.offsetParent;
                return t
            })
        }
    },
    n.fn.detach = n.fn.remove,
    ["width", "height"].forEach(function(e) {
        var i = e.replace(/./, function(t) {
            return t[0].toUpperCase()
        });
        n.fn[e] = function(r) {
            var s, o = this[0];
            return r === t ? D(o) ? o["inner" + i] : $(o) ? o.documentElement["scroll" + i] : (s = this.offset()) && s[e] : this.each(function(t) {
                o = n(this),
                o.css(e, X(this, r, t, o[e]()))
            })
        }
    }),
    v.forEach(function(t, e) {
        var i = e % 2;
        n.fn[t] = function() {
            var t, s, r = n.map(arguments, function(e) {
                return t = Z(e),
                "object" == t || "array" == t || null == e ? e : T.fragment(e)
            }), o = this.length > 1;
            return r.length < 1 ? this : this.each(function(t, u) {
                s = i ? u : u.parentNode,
                u = 0 == e ? u.nextSibling : 1 == e ? u.firstChild : 2 == e ? u : null;
                var f = n.contains(a.documentElement, s);
                r.forEach(function(t) {
                    if (o)
                        t = t.cloneNode(!0);
                    else if (!s)
                        return n(t).remove();
                    s.insertBefore(t, u),
                    f && G(t, function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }
        ,
        n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function(e) {
            return n(e)[t](this),
            this
        }
    }),
    T.Z.prototype = n.fn,
    T.uniq = A,
    T.deserializeValue = Y,
    n.zepto = T,
    n
}();
window.Zepto = Zepto,
void 0 === window.$ && (window.$ = Zepto),
function(t) {
    function l(t) {
        return t._zid || (t._zid = e++)
    }
    function h(t, e, n, i) {
        if (e = p(e),
        e.ns)
            var r = d(e.ns);
        return (o[l(t)] || []).filter(function(t) {
            return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i)
        })
    }
    function p(t) {
        var e = ("" + t).split(".");
        return {
            e: e[0],
            ns: e.slice(1).sort().join(" ")
        }
    }
    function d(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }
    function m(t, e) {
        return t.del && !u && t.e in f || !!e
    }
    function g(t) {
        return c[t] || u && f[t] || t
    }
    function v(e, i, r, s, a, u, f) {
        var h = l(e)
          , d = o[h] || (o[h] = []);
        i.split(/\s/).forEach(function(i) {
            if ("ready" == i)
                return t(document).ready(r);
            var o = p(i);
            o.fn = r,
            o.sel = a,
            o.e in c && (r = function(e) {
                var n = e.relatedTarget;
                return !n || n !== this && !t.contains(this, n) ? o.fn.apply(this, arguments) : void 0
            }
            ),
            o.del = u;
            var l = u || r;
            o.proxy = function(t) {
                if (t = j(t),
                !t.isImmediatePropagationStopped()) {
                    t.data = s;
                    var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
                    return i === !1 && (t.preventDefault(),
                    t.stopPropagation()),
                    i
                }
            }
            ,
            o.i = d.length,
            d.push(o),
            "addEventListener"in e && e.addEventListener(g(o.e), o.proxy, m(o, f))
        })
    }
    function y(t, e, n, i, r) {
        var s = l(t);
        (e || "").split(/\s/).forEach(function(e) {
            h(t, e, n, i).forEach(function(e) {
                delete o[s][e.i],
                "removeEventListener"in t && t.removeEventListener(g(e.e), e.proxy, m(e, r))
            })
        })
    }
    function j(e, i) {
        return (i || !e.isDefaultPrevented) && (i || (i = e),
        t.each(E, function(t, n) {
            var r = i[t];
            e[t] = function() {
                return this[n] = x,
                r && r.apply(i, arguments)
            }
            ,
            e[n] = b
        }),
        (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue"in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)),
        e
    }
    function C(t) {
        var e, i = {
            originalEvent: t
        };
        for (e in t)
            w.test(e) || t[e] === n || (i[e] = t[e]);
        return j(i, t)
    }
    var n, e = 1, i = Array.prototype.slice, r = t.isFunction, s = function(t) {
        return "string" == typeof t
    }, o = {}, a = {}, u = "onfocusin"in window, f = {
        focus: "focusin",
        blur: "focusout"
    }, c = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents",
    t.event = {
        add: v,
        remove: y
    },
    t.proxy = function(e, n) {
        var o = 2 in arguments && i.call(arguments, 2);
        if (r(e)) {
            var a = function() {
                return e.apply(n, o ? o.concat(i.call(arguments)) : arguments)
            };
            return a._zid = l(e),
            a
        }
        if (s(n))
            return o ? (o.unshift(e[n], e),
            t.proxy.apply(null, o)) : t.proxy(e[n], e);
        throw new TypeError("expected function")
    }
    ,
    t.fn.bind = function(t, e, n) {
        return this.on(t, e, n)
    }
    ,
    t.fn.unbind = function(t, e) {
        return this.off(t, e)
    }
    ,
    t.fn.one = function(t, e, n, i) {
        return this.on(t, e, n, i, 1)
    }
    ;
    var x = function() {
        return !0
    }
      , b = function() {
        return !1
    }
      , w = /^([A-Z]|returnValue$|layer[XY]$)/
      , E = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function(t, e, n) {
        return this.on(e, t, n)
    }
    ,
    t.fn.undelegate = function(t, e, n) {
        return this.off(e, t, n)
    }
    ,
    t.fn.live = function(e, n) {
        return t(document.body).delegate(this.selector, e, n),
        this
    }
    ,
    t.fn.die = function(e, n) {
        return t(document.body).undelegate(this.selector, e, n),
        this
    }
    ,
    t.fn.on = function(e, o, a, u, f) {
        var c, l, h = this;
        return e && !s(e) ? (t.each(e, function(t, e) {
            h.on(t, o, a, e, f)
        }),
        h) : (s(o) || r(u) || u === !1 || (u = a,
        a = o,
        o = n),
        (r(a) || a === !1) && (u = a,
        a = n),
        u === !1 && (u = b),
        h.each(function(n, r) {
            f && (c = function(t) {
                return y(r, t.type, u),
                u.apply(this, arguments)
            }
            ),
            o && (l = function(e) {
                var n, s = t(e.target).closest(o, r).get(0);
                return s && s !== r ? (n = t.extend(C(e), {
                    currentTarget: s,
                    liveFired: r
                }),
                (c || u).apply(s, [n].concat(i.call(arguments, 1)))) : void 0
            }
            ),
            v(r, e, u, a, o, l || c)
        }))
    }
    ,
    t.fn.off = function(e, i, o) {
        var a = this;
        return e && !s(e) ? (t.each(e, function(t, e) {
            a.off(t, i, e)
        }),
        a) : (s(i) || r(o) || o === !1 || (o = i,
        i = n),
        o === !1 && (o = b),
        a.each(function() {
            y(this, e, o, i)
        }))
    }
    ,
    t.fn.trigger = function(e, n) {
        return e = s(e) || t.isPlainObject(e) ? t.Event(e) : j(e),
        e._args = n,
        this.each(function() {
            "dispatchEvent"in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    }
    ,
    t.fn.triggerHandler = function(e, n) {
        var i, r;
        return this.each(function(o, a) {
            i = C(s(e) ? t.Event(e) : e),
            i._args = n,
            i.target = a,
            t.each(h(a, e.type || e), function(t, e) {
                return r = e.proxy(i),
                i.isImmediatePropagationStopped() ? !1 : void 0
            })
        }),
        r
    }
    ,
    "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
        t.fn[e] = function(t) {
            return t ? this.bind(e, t) : this.trigger(e)
        }
    }),
    ["focus", "blur"].forEach(function(e) {
        t.fn[e] = function(t) {
            return t ? this.bind(e, t) : this.each(function() {
                try {
                    this[e]()
                } catch (t) {}
            }),
            this
        }
    }),
    t.Event = function(t, e) {
        s(t) || (e = t,
        t = e.type);
        var n = document.createEvent(a[t] || "Events")
          , i = !0;
        if (e)
            for (var r in e)
                "bubbles" == r ? i = !!e[r] : n[r] = e[r];
        return n.initEvent(t, i, !0),
        j(n)
    }
}(Zepto),
function(t) {
    function l(e, n, i) {
        var r = t.Event(n);
        return t(e).trigger(r, i),
        !r.isDefaultPrevented()
    }
    function h(t, e, i, r) {
        return t.global ? l(e || n, i, r) : void 0
    }
    function p(e) {
        e.global && 0 === t.active++ && h(e, null, "ajaxStart")
    }
    function d(e) {
        e.global && !--t.active && h(e, null, "ajaxStop")
    }
    function m(t, e) {
        var n = e.context;
        return e.beforeSend.call(n, t, e) === !1 || h(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void h(e, n, "ajaxSend", [t, e])
    }
    function g(t, e, n, i) {
        var r = n.context
          , s = "success";
        n.success.call(r, t, s, e),
        i && i.resolveWith(r, [t, s, e]),
        h(n, r, "ajaxSuccess", [e, n, t]),
        y(s, e, n)
    }
    function v(t, e, n, i, r) {
        var s = i.context;
        i.error.call(s, n, e, t),
        r && r.rejectWith(s, [n, e, t]),
        h(i, s, "ajaxError", [n, i, t || e]),
        y(e, n, i)
    }
    function y(t, e, n) {
        var i = n.context;
        n.complete.call(i, e, t),
        h(n, i, "ajaxComplete", [e, n]),
        d(n)
    }
    function x() {}
    function b(t) {
        return t && (t = t.split(";", 2)[0]),
        t && (t == f ? "html" : t == u ? "json" : o.test(t) ? "script" : a.test(t) && "xml") || "text"
    }
    function w(t, e) {
        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }
    function E(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
        !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = w(e.url, e.data),
        e.data = void 0)
    }
    function j(e, n, i, r) {
        return t.isFunction(n) && (r = i,
        i = n,
        n = void 0),
        t.isFunction(i) || (r = i,
        i = void 0),
        {
            url: e,
            data: n,
            success: i,
            dataType: r
        }
    }
    function T(e, n, i, r) {
        var s, o = t.isArray(n), a = t.isPlainObject(n);
        t.each(n, function(n, u) {
            s = t.type(u),
            r && (n = i ? r : r + "[" + (a || "object" == s || "array" == s ? n : "") + "]"),
            !r && o ? e.add(u.name, u.value) : "array" == s || !i && "object" == s ? T(e, u, i, n) : e.add(n, u)
        })
    }
    var i, r, e = 0, n = window.document, s = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, o = /^(?:text|application)\/javascript/i, a = /^(?:text|application)\/xml/i, u = "application/json", f = "text/html", c = /^\s*$/;
    t.active = 0,
    t.ajaxJSONP = function(i, r) {
        if (!("type"in i))
            return t.ajax(i);
        var f, h, s = i.jsonpCallback, o = (t.isFunction(s) ? s() : s) || "jsonp" + ++e, a = n.createElement("script"), u = window[o], c = function(e) {
            t(a).triggerHandler("error", e || "abort")
        }, l = {
            abort: c
        };
        return r && r.promise(l),
        t(a).on("load error", function(e, n) {
            clearTimeout(h),
            t(a).off().remove(),
            "error" != e.type && f ? g(f[0], l, i, r) : v(null, n || "error", l, i, r),
            window[o] = u,
            f && t.isFunction(u) && u(f[0]),
            u = f = void 0
        }),
        m(l, i) === !1 ? (c("abort"),
        l) : (window[o] = function() {
            f = arguments
        }
        ,
        a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + o),
        n.head.appendChild(a),
        i.timeout > 0 && (h = setTimeout(function() {
            c("timeout")
        }, i.timeout)),
        l)
    }
    ,
    t.ajaxSettings = {
        type: "GET",
        beforeSend: x,
        success: x,
        error: x,
        complete: x,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: u,
            xml: "application/xml, text/xml",
            html: f,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    t.ajax = function(e) {
        var n = t.extend({}, e || {})
          , s = t.Deferred && t.Deferred();
        for (i in t.ajaxSettings)
            void 0 === n[i] && (n[i] = t.ajaxSettings[i]);
        p(n),
        n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host),
        n.url || (n.url = window.location.toString()),
        E(n);
        var o = n.dataType
          , a = /\?.+=\?/.test(n.url);
        if (a && (o = "jsonp"),
        n.cache !== !1 && (e && e.cache === !0 || "script" != o && "jsonp" != o) || (n.url = w(n.url, "_=" + Date.now())),
        "jsonp" == o)
            return a || (n.url = w(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")),
            t.ajaxJSONP(n, s);
        var j, u = n.accepts[o], f = {}, l = function(t, e) {
            f[t.toLowerCase()] = [t, e]
        }, h = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol, d = n.xhr(), y = d.setRequestHeader;
        if (s && s.promise(d),
        n.crossDomain || l("X-Requested-With", "XMLHttpRequest"),
        l("Accept", u || "*/*"),
        (u = n.mimeType || u) && (u.indexOf(",") > -1 && (u = u.split(",", 2)[0]),
        d.overrideMimeType && d.overrideMimeType(u)),
        (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && l("Content-Type", n.contentType || "application/x-www-form-urlencoded"),
        n.headers)
            for (r in n.headers)
                l(r, n.headers[r]);
        if (d.setRequestHeader = l,
        d.onreadystatechange = function() {
            if (4 == d.readyState) {
                d.onreadystatechange = x,
                clearTimeout(j);
                var e, i = !1;
                if (d.status >= 200 && d.status < 300 || 304 == d.status || 0 == d.status && "file:" == h) {
                    o = o || b(n.mimeType || d.getResponseHeader("content-type")),
                    e = d.responseText;
                    try {
                        "script" == o ? (1,
                        eval)(e) : "xml" == o ? e = d.responseXML : "json" == o && (e = c.test(e) ? null : t.parseJSON(e))
                    } catch (r) {
                        i = r
                    }
                    i ? v(i, "parsererror", d, n, s) : g(e, d, n, s)
                } else
                    v(d.statusText || null, d.status ? "error" : "abort", d, n, s)
            }
        }
        ,
        m(d, n) === !1)
            return d.abort(),
            v(null, "abort", d, n, s),
            d;
        if (n.xhrFields)
            for (r in n.xhrFields)
                d[r] = n.xhrFields[r];
        var C = "async"in n ? n.async : !0;
        d.open(n.type, n.url, C, n.username, n.password);
        for (r in f)
            y.apply(d, f[r]);
        return n.timeout > 0 && (j = setTimeout(function() {
            d.onreadystatechange = x,
            d.abort(),
            v(null, "timeout", d, n, s)
        }, n.timeout)),
        d.send(n.data ? n.data : null),
        d
    }
    ,
    t.get = function() {
        return t.ajax(j.apply(null, arguments))
    }
    ,
    t.post = function() {
        var e = j.apply(null, arguments);
        return e.type = "POST",
        t.ajax(e)
    }
    ,
    t.getJSON = function() {
        var e = j.apply(null, arguments);
        return e.dataType = "json",
        t.ajax(e)
    }
    ,
    t.fn.load = function(e, n, i) {
        if (!this.length)
            return this;
        var a, r = this, o = e.split(/\s/), u = j(e, n, i), f = u.success;
        return o.length > 1 && (u.url = o[0],
        a = o[1]),
        u.success = function(e) {
            r.html(a ? t("<div>").html(e.replace(s, "")).find(a) : e),
            f && f.apply(r, arguments)
        }
        ,
        t.ajax(u),
        this
    }
    ;
    var C = encodeURIComponent;
    t.param = function(t, e) {
        var n = [];
        return n.add = function(t, e) {
            this.push(C(t) + "=" + C(e))
        }
        ,
        T(n, t, e),
        n.join("&").replace(/%20/g, "+")
    }
}(Zepto),
function(t) {
    function o(s, o) {
        var u = s[r]
          , f = u && e[u];
        if (void 0 === o)
            return f || a(s);
        if (f) {
            if (o in f)
                return f[o];
            var c = i(o);
            if (c in f)
                return f[c]
        }
        return n.call(t(s), o)
    }
    function a(n, s, o) {
        var a = n[r] || (n[r] = ++t.uuid)
          , f = e[a] || (e[a] = u(n));
        return void 0 !== s && (f[i(s)] = o),
        f
    }
    function u(e) {
        var n = {};
        return t.each(e.attributes || s, function(e, r) {
            0 == r.name.indexOf("data-") && (n[i(r.name.replace("data-", ""))] = t.zepto.deserializeValue(r.value))
        }),
        n
    }
    var e = {}
      , n = t.fn.data
      , i = t.camelCase
      , r = t.expando = "Zepto" + +new Date
      , s = [];
    t.fn.data = function(e, n) {
        return void 0 === n ? t.isPlainObject(e) ? this.each(function(n, i) {
            t.each(e, function(t, e) {
                a(i, t, e)
            })
        }) : 0 in this ? o(this[0], e) : void 0 : this.each(function() {
            a(this, e, n)
        })
    }
    ,
    t.fn.removeData = function(n) {
        return "string" == typeof n && (n = n.split(/\s+/)),
        this.each(function() {
            var s = this[r]
              , o = s && e[s];
            o && t.each(n || o, function(t) {
                delete o[n ? i(this) : t]
            })
        })
    }
    ,
    ["remove", "empty"].forEach(function(e) {
        var n = t.fn[e];
        t.fn[e] = function() {
            var t = this.find("*");
            return "remove" === e && (t = t.add(this)),
            t.removeData(),
            n.call(this)
        }
    })
}(Zepto),
function(t) {
    var n, e = [];
    t.fn.remove = function() {
        return this.each(function() {
            this.parentNode && ("IMG" === this.tagName && (e.push(this),
            this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
            n && clearTimeout(n),
            n = setTimeout(function() {
                e = []
            }, 6e4)),
            this.parentNode.removeChild(this))
        })
    }
}(Zepto),
function(t) {
    t.fn.end = function() {
        return this.prevObject || t()
    }
    ,
    t.fn.andSelf = function() {
        return this.add(this.prevObject || t())
    }
    ,
    "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e) {
        var n = t.fn[e];
        t.fn[e] = function() {
            var t = n.apply(this, arguments);
            return t.prevObject = this,
            t
        }
    })
}(Zepto),
function(t) {
    t.fn.serializeArray = function() {
        var e, n, i = [];
        return t([].slice.call(this.get(0).elements)).each(function() {
            e = t(this),
            n = e.attr("type"),
            this.name && "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != n && "reset" != n && "button" != n && ("radio" != n && "checkbox" != n || this.checked) && i.push({
                name: e.attr("name"),
                value: e.val()
            })
        }),
        i
    }
    ,
    t.fn.serialize = function() {
        var t = [];
        return this.serializeArray().forEach(function(e) {
            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
        }),
        t.join("&")
    }
    ,
    t.fn.submit = function(e) {
        if (e)
            this.bind("submit", e);
        else if (this.length) {
            var n = t.Event("submit");
            this.eq(0).trigger(n),
            n.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
}(Zepto),
function(t) {
    "__proto__"in {} || t.extend(t.zepto, {
        Z: function(e, n) {
            return e = e || [],
            t.extend(e, t.fn),
            e.selector = n || "",
            e.__Z = !0,
            e
        },
        isZ: function(e) {
            return "array" === t.type(e) && "__Z"in e
        }
    });
    try {
        getComputedStyle(void 0)
    } catch (e) {
        var n = getComputedStyle;
        window.getComputedStyle = function(t) {
            try {
                return n(t)
            } catch (e) {
                return null
            }
        }
    }
}(Zepto),
function(t) {
    function n(e) {
        var i = [["resolve", "done", t.Callbacks({
            once: 1,
            memory: 1
        }), "resolved"], ["reject", "fail", t.Callbacks({
            once: 1,
            memory: 1
        }), "rejected"], ["notify", "progress", t.Callbacks({
            memory: 1
        })]]
          , r = "pending"
          , s = {
            state: function() {
                return r
            },
            always: function() {
                return o.done(arguments).fail(arguments),
                this
            },
            then: function() {
                var e = arguments;
                return n(function(n) {
                    t.each(i, function(i, r) {
                        var a = t.isFunction(e[i]) && e[i];
                        o[r[1]](function() {
                            var e = a && a.apply(this, arguments);
                            if (e && t.isFunction(e.promise))
                                e.promise().done(n.resolve).fail(n.reject).progress(n.notify);
                            else {
                                var i = this === s ? n.promise() : this
                                  , o = a ? [e] : arguments;
                                n[r[0] + "With"](i, o)
                            }
                        })
                    }),
                    e = null
                }).promise()
            },
            promise: function(e) {
                return null != e ? t.extend(e, s) : s
            }
        }
          , o = {};
        return t.each(i, function(t, e) {
            var n = e[2]
              , a = e[3];
            s[e[1]] = n.add,
            a && n.add(function() {
                r = a
            }, i[1 ^ t][2].disable, i[2][2].lock),
            o[e[0]] = function() {
                return o[e[0] + "With"](this === o ? s : this, arguments),
                this
            }
            ,
            o[e[0] + "With"] = n.fireWith
        }),
        s.promise(o),
        e && e.call(o, o),
        o
    }
    var e = Array.prototype.slice;
    t.when = function(i) {
        var f, c, l, r = e.call(arguments), s = r.length, o = 0, a = 1 !== s || i && t.isFunction(i.promise) ? s : 0, u = 1 === a ? i : n(), h = function(t, n, i) {
            return function(r) {
                n[t] = this,
                i[t] = arguments.length > 1 ? e.call(arguments) : r,
                i === f ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
            }
        };
        if (s > 1)
            for (f = new Array(s),
            c = new Array(s),
            l = new Array(s); s > o; ++o)
                r[o] && t.isFunction(r[o].promise) ? r[o].promise().done(h(o, l, r)).fail(u.reject).progress(h(o, c, f)) : --a;
        return a || u.resolveWith(l, r),
        u.promise()
    }
    ,
    t.Deferred = n
}(Zepto),
function(t) {
    t.Callbacks = function(e) {
        e = t.extend({}, e);
        var n, i, r, s, o, a, u = [], f = !e.once && [], c = function(t) {
            for (n = e.memory && t,
            i = !0,
            a = s || 0,
            s = 0,
            o = u.length,
            r = !0; u && o > a; ++a)
                if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            r = !1,
            u && (f ? f.length && c(f.shift()) : n ? u.length = 0 : l.disable())
        }, l = {
            add: function() {
                if (u) {
                    var i = u.length
                      , a = function(n) {
                        t.each(n, function(t, n) {
                            "function" == typeof n ? e.unique && l.has(n) || u.push(n) : n && n.length && "string" != typeof n && a(n)
                        })
                    };
                    a(arguments),
                    r ? o = u.length : n && (s = i,
                    c(n))
                }
                return this
            },
            remove: function() {
                return u && t.each(arguments, function(e, n) {
                    for (var i; (i = t.inArray(n, u, i)) > -1; )
                        u.splice(i, 1),
                        r && (o >= i && --o,
                        a >= i && --a)
                }),
                this
            },
            has: function(e) {
                return !(!u || !(e ? t.inArray(e, u) > -1 : u.length))
            },
            empty: function() {
                return o = u.length = 0,
                this
            },
            disable: function() {
                return u = f = n = void 0,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return f = void 0,
                n || l.disable(),
                this
            },
            locked: function() {
                return !f
            },
            fireWith: function(t, e) {
                return !u || i && !f || (e = e || [],
                e = [t, e.slice ? e.slice() : e],
                r ? f.push(e) : c(e)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments)
            },
            fired: function() {
                return !!i
            }
        };
        return l
    }
}(Zepto),
function(t) {
    function r(e) {
        return e = t(e),
        !(!e.width() && !e.height()) && "none" !== e.css("display")
    }
    function f(t, e) {
        t = t.replace(/=#\]/g, '="#"]');
        var n, i, r = o.exec(t);
        if (r && r[2]in s && (n = s[r[2]],
        i = r[3],
        t = r[1],
        i)) {
            var a = Number(i);
            i = isNaN(a) ? i.replace(/^["']|["']$/g, "") : a
        }
        return e(t, n, i)
    }
    var e = t.zepto
      , n = e.qsa
      , i = e.matches
      , s = t.expr[":"] = {
        visible: function() {
            return r(this) ? this : void 0
        },
        hidden: function() {
            return r(this) ? void 0 : this
        },
        selected: function() {
            return this.selected ? this : void 0
        },
        checked: function() {
            return this.checked ? this : void 0
        },
        parent: function() {
            return this.parentNode
        },
        first: function(t) {
            return 0 === t ? this : void 0
        },
        last: function(t, e) {
            return t === e.length - 1 ? this : void 0
        },
        eq: function(t, e, n) {
            return t === n ? this : void 0
        },
        contains: function(e, n, i) {
            return t(this).text().indexOf(i) > -1 ? this : void 0
        },
        has: function(t, n, i) {
            return e.qsa(this, i).length ? this : void 0
        }
    }
      , o = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*")
      , a = /^\s*>/
      , u = "Zepto" + +new Date;
    e.qsa = function(i, r) {
        return f(r, function(s, o, f) {
            try {
                var c;
                !s && o ? s = "*" : a.test(s) && (c = t(i).addClass(u),
                s = "." + u + " " + s);
                var l = n(i, s)
            } catch (h) {
                throw console.error("error performing selector: %o", r),
                h
            } finally {
                c && c.removeClass(u)
            }
            return o ? e.uniq(t.map(l, function(t, e) {
                return o.call(t, e, l, f)
            })) : l
        })
    }
    ,
    e.matches = function(t, e) {
        return f(e, function(e, n, r) {
            return !(e && !i(t, e) || n && n.call(t, null, r) !== t)
        })
    }
}(Zepto),
function(t, e) {
    function b(t) {
        return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
    }
    function w(t) {
        return i ? i + t : t.toLowerCase()
    }
    var i, c, l, h, p, d, m, g, v, y, n = "", o = {
        Webkit: "webkit",
        Moz: "",
        O: "o"
    }, a = window.document, u = a.createElement("div"), f = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, x = {};
    t.each(o, function(t, r) {
        return u.style[t + "TransitionProperty"] !== e ? (n = "-" + t.toLowerCase() + "-",
        i = r,
        !1) : void 0
    }),
    c = n + "transform",
    x[l = n + "transition-property"] = x[h = n + "transition-duration"] = x[d = n + "transition-delay"] = x[p = n + "transition-timing-function"] = x[m = n + "animation-name"] = x[g = n + "animation-duration"] = x[y = n + "animation-delay"] = x[v = n + "animation-timing-function"] = "",
    t.fx = {
        off: i === e && u.style.transitionProperty === e,
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: n,
        transitionEnd: w("TransitionEnd"),
        animationEnd: w("AnimationEnd")
    },
    t.fn.animate = function(n, i, r, s, o) {
        return t.isFunction(i) && (s = i,
        r = e,
        i = e),
        t.isFunction(r) && (s = r,
        r = e),
        t.isPlainObject(i) && (r = i.easing,
        s = i.complete,
        o = i.delay,
        i = i.duration),
        i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3),
        o && (o = parseFloat(o) / 1e3),
        this.anim(n, i, r, s, o)
    }
    ,
    t.fn.anim = function(n, i, r, s, o) {
        var a, w, C, u = {}, E = "", j = this, T = t.fx.transitionEnd, N = !1;
        if (i === e && (i = t.fx.speeds._default / 1e3),
        o === e && (o = 0),
        t.fx.off && (i = 0),
        "string" == typeof n)
            u[m] = n,
            u[g] = i + "s",
            u[y] = o + "s",
            u[v] = r || "linear",
            T = t.fx.animationEnd;
        else {
            w = [];
            for (a in n)
                f.test(a) ? E += a + "(" + n[a] + ") " : (u[a] = n[a],
                w.push(b(a)));
            E && (u[c] = E,
            w.push(c)),
            i > 0 && "object" == typeof n && (u[l] = w.join(", "),
            u[h] = i + "s",
            u[d] = o + "s",
            u[p] = r || "linear")
        }
        return C = function(e) {
            if ("undefined" != typeof e) {
                if (e.target !== e.currentTarget)
                    return;
                t(e.target).unbind(T, C)
            } else
                t(this).unbind(T, C);
            N = !0,
            t(this).css(x),
            s && s.call(this)
        }
        ,
        i > 0 && (this.bind(T, C),
        setTimeout(function() {
            N || C.call(j)
        }, 1e3 * i + 25)),
        this.size() && this.get(0).clientLeft,
        this.css(u),
        0 >= i && setTimeout(function() {
            j.each(function() {
                C.call(this)
            })
        }, 0),
        this
    }
    ,
    u = null
}(Zepto),
function(t, e) {
    function a(n, i, r, s, o) {
        "function" != typeof i || o || (o = i,
        i = e);
        var a = {
            opacity: r
        };
        return s && (a.scale = s,
        n.css(t.fx.cssPrefix + "transform-origin", "0 0")),
        n.animate(a, i, null, o)
    }
    function u(e, n, i, r) {
        return a(e, n, 0, i, function() {
            s.call(t(this)),
            r && r.call(this)
        })
    }
    var n = window.document
      , r = (n.documentElement,
    t.fn.show)
      , s = t.fn.hide
      , o = t.fn.toggle;
    t.fn.show = function(t, n) {
        return r.call(this),
        t === e ? t = 0 : this.css("opacity", 0),
        a(this, t, 1, "1,1", n)
    }
    ,
    t.fn.hide = function(t, n) {
        return t === e ? s.call(this) : u(this, t, "0,0", n)
    }
    ,
    t.fn.toggle = function(n, i) {
        return n === e || "boolean" == typeof n ? o.call(this, n) : this.each(function() {
            var e = t(this);
            e["none" == e.css("display") ? "show" : "hide"](n, i)
        })
    }
    ,
    t.fn.fadeTo = function(t, e, n) {
        return a(this, t, e, null, n)
    }
    ,
    t.fn.fadeIn = function(t, e) {
        var n = this.css("opacity");
        return n > 0 ? this.css("opacity", 0) : n = 1,
        r.call(this).fadeTo(t, n, e)
    }
    ,
    t.fn.fadeOut = function(t, e) {
        return u(this, t, null, e)
    }
    ,
    t.fn.fadeToggle = function(e, n) {
        return this.each(function() {
            var i = t(this);
            i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
        })
    }
}(Zepto);
