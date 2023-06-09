! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Super", [], t) : "object" == typeof exports ? exports.Super = t() : e.Super = t()
}(window, (function() {
	return function(e) {
			var t = {};

			function r(i) {
				if (t[i]) return t[i].exports;
				var n = t[i] = {
					i: i,
					l: !1,
					exports: {}
				};
				return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
			}
			return r.m = e, r.c = t, r.d = function(e, t, i) {
				r.o(e, t) || Object.defineProperty(e, t, {
					enumerable: !0,
					get: i
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
				var i = Object.create(null);
				if (r.r(i), Object.defineProperty(i, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e)
					for (var n in e) r.d(i, n, function(t) {
						return e[t]
					}.bind(null, n));
				return i
			}, r.n = function(e) {
				var t = e && e.__esModule ? function() {
					return e.default
				} : function() {
					return e
				};
				return r.d(t, "a", t), t
			}, r.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}, r.p = "", r(r.s = 141)
		}([function(e, t, r) {
			var i = r(2),
				n = r(19),
				a = r(12),
				s = r(13),
				o = r(20),
				l = function(e, t, r) {
					var u, c, d, h, f = e & l.F,
						p = e & l.G,
						g = e & l.S,
						v = e & l.P,
						m = e & l.B,
						_ = p ? i : g ? i[t] || (i[t] = {}) : (i[t] || {})
						.prototype,
						y = p ? n : n[t] || (n[t] = {}),
						E = y.prototype || (y.prototype = {});
					for (u in p && (r = t), r) d = ((c = !f && _ && void 0 !== _[u]) ? _ : r)[u], h = m && c ? o(d, i) : v && "function" == typeof d ? o(Function.call, d) : d, _ && s(_, u, d, e & l.U), y[u] != d && a(y, u, h), v && E[u] != d && (E[u] = d)
				};
			i.core = n, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
		}, function(e, t, r) {
			var i = r(4);
			e.exports = function(e) {
				if (!i(e)) throw TypeError(e + " is not an object!");
				return e
			}
		}, function(e, t) {
			var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
			"number" == typeof __g && (__g = r)
		}, function(e, t) {
			e.exports = function(e) {
				try {
					return !!e()
				} catch (e) {
					return !0
				}
			}
		}, function(e, t) {
			e.exports = function(e) {
				return "object" == typeof e ? null !== e : "function" == typeof e
			}
		}, function(e, t, r) {
			var i = r(49)("wks"),
				n = r(34),
				a = r(2)
				.Symbol,
				s = "function" == typeof a;
			(e.exports = function(e) {
				return i[e] || (i[e] = s && a[e] || (s ? a : n)("Symbol." + e))
			})
			.store = i
		}, function(e, t, r) {
			var i = r(22),
				n = Math.min;
			e.exports = function(e) {
				return e > 0 ? n(i(e), 9007199254740991) : 0
			}
		}, function(e, t, r) {
			e.exports = !r(3)((function() {
				return 7 != Object.defineProperty({}, "a", {
						get: function() {
							return 7
						}
					})
					.a
			}))
		}, function(e, t, r) {
			var i = r(1),
				n = r(100),
				a = r(24),
				s = Object.defineProperty;
			t.f = r(7) ? Object.defineProperty : function(e, t, r) {
				if (i(e), t = a(t, !0), i(r), n) try {
					return s(e, t, r)
				} catch (e) {}
				if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
				return "value" in r && (e[t] = r.value), e
			}
		}, function(e, t, r) {
			var i = r(25);
			e.exports = function(e) {
				return Object(i(e))
			}
		}, function(e, t) {
			e.exports = function(e) {
				if ("function" != typeof e) throw TypeError(e + " is not a function!");
				return e
			}
		}, function(e, t, r) {
			"use strict";
			var i, n = "object" == typeof Reflect ? Reflect : null,
				a = n && "function" == typeof n.apply ? n.apply : function(e, t, r) {
					return Function.prototype.apply.call(e, t, r)
				};
			i = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
				return Object.getOwnPropertyNames(e)
					.concat(Object.getOwnPropertySymbols(e))
			} : function(e) {
				return Object.getOwnPropertyNames(e)
			};
			var s = Number.isNaN || function(e) {
				return e != e
			};

			function o() {
				o.init.call(this)
			}
			e.exports = o, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
			var l = 10;

			function u(e) {
				if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
			}

			function c(e) {
				return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners
			}

			function d(e, t, r, i) {
				var n, a, s, o;
				if (u(r), void 0 === (a = e._events) ? (a = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== a.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), a = e._events), s = a[t]), void 0 === s) s = a[t] = r, ++e._eventsCount;
				else if ("function" == typeof s ? s = a[t] = i ? [r, s] : [s, r] : i ? s.unshift(r) : s.push(r), (n = c(e)) > 0 && s.length > n && !s.warned) {
					s.warned = !0;
					var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
					l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = s.length, o = l, console && console.warn && console.warn(o)
				}
				return e
			}

			function h() {
				if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
			}

			function f(e, t, r) {
				var i = {
						fired: !1,
						wrapFn: void 0,
						target: e,
						type: t,
						listener: r
					},
					n = h.bind(i);
				return n.listener = r, i.wrapFn = n, n
			}

			function p(e, t, r) {
				var i = e._events;
				if (void 0 === i) return [];
				var n = i[t];
				return void 0 === n ? [] : "function" == typeof n ? r ? [n.listener || n] : [n] : r ? function(e) {
					for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
					return t
				}(n) : v(n, n.length)
			}

			function g(e) {
				var t = this._events;
				if (void 0 !== t) {
					var r = t[e];
					if ("function" == typeof r) return 1;
					if (void 0 !== r) return r.length
				}
				return 0
			}

			function v(e, t) {
				for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i];
				return r
			}
			Object.defineProperty(o, "defaultMaxListeners", {
				enumerable: !0,
				get: function() {
					return l
				},
				set: function(e) {
					if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
					l = e
				}
			}), o.init = function() {
				void 0 !== this._events && this._events !== Object.getPrototypeOf(this)
					._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
			}, o.prototype.setMaxListeners = function(e) {
				if ("number" != typeof e || e < 0 || s(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
				return this._maxListeners = e, this
			}, o.prototype.getMaxListeners = function() {
				return c(this)
			}, o.prototype.emit = function(e) {
				for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
				var i = "error" === e,
					n = this._events;
				if (void 0 !== n) i = i && void 0 === n.error;
				else if (!i) return !1;
				if (i) {
					var s;
					if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
					var o = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
					throw o.context = s, o
				}
				var l = n[e];
				if (void 0 === l) return !1;
				if ("function" == typeof l) a(l, this, t);
				else {
					var u = l.length,
						c = v(l, u);
					for (r = 0; r < u; ++r) a(c[r], this, t)
				}
				return !0
			}, o.prototype.addListener = function(e, t) {
				return d(this, e, t, !1)
			}, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(e, t) {
				return d(this, e, t, !0)
			}, o.prototype.once = function(e, t) {
				return u(t), this.on(e, f(this, e, t)), this
			}, o.prototype.prependOnceListener = function(e, t) {
				return u(t), this.prependListener(e, f(this, e, t)), this
			}, o.prototype.removeListener = function(e, t) {
				var r, i, n, a, s;
				if (u(t), void 0 === (i = this._events)) return this;
				if (void 0 === (r = i[e])) return this;
				if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
				else if ("function" != typeof r) {
					for (n = -1, a = r.length - 1; a >= 0; a--)
						if (r[a] === t || r[a].listener === t) {
							s = r[a].listener, n = a;
							break
						} if (n < 0) return this;
					0 === n ? r.shift() : function(e, t) {
						for (; t + 1 < e.length; t++) e[t] = e[t + 1];
						e.pop()
					}(r, n), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", e, s || t)
				}
				return this
			}, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(e) {
				var t, r, i;
				if (void 0 === (r = this._events)) return this;
				if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
				if (0 === arguments.length) {
					var n, a = Object.keys(r);
					for (i = 0; i < a.length; ++i) "removeListener" !== (n = a[i]) && this.removeAllListeners(n);
					return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
				}
				if ("function" == typeof(t = r[e])) this.removeListener(e, t);
				else if (void 0 !== t)
					for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
				return this
			}, o.prototype.listeners = function(e) {
				return p(this, e, !0)
			}, o.prototype.rawListeners = function(e) {
				return p(this, e, !1)
			}, o.listenerCount = function(e, t) {
				return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t)
			}, o.prototype.listenerCount = g, o.prototype.eventNames = function() {
				return this._eventsCount > 0 ? i(this._events) : []
			}
		}, function(e, t, r) {
			var i = r(8),
				n = r(33);
			e.exports = r(7) ? function(e, t, r) {
				return i.f(e, t, n(1, r))
			} : function(e, t, r) {
				return e[t] = r, e
			}
		}, function(e, t, r) {
			var i = r(2),
				n = r(12),
				a = r(15),
				s = r(34)("src"),
				o = r(145),
				l = ("" + o)
				.split("toString");
			r(19)
				.inspectSource = function(e) {
					return o.call(e)
				}, (e.exports = function(e, t, r, o) {
					var u = "function" == typeof r;
					u && (a(r, "name") || n(r, "name", t)), e[t] !== r && (u && (a(r, s) || n(r, s, e[t] ? "" + e[t] : l.join(String(t)))), e === i ? e[t] = r : o ? e[t] ? e[t] = r : n(e, t, r) : (delete e[t], n(e, t, r)))
				})(Function.prototype, "toString", (function() {
					return "function" == typeof this && this[s] || o.call(this)
				}))
		}, function(e, t, r) {
			var i = r(0),
				n = r(3),
				a = r(25),
				s = /"/g,
				o = function(e, t, r, i) {
					var n = String(a(e)),
						o = "<" + t;
					return "" !== r && (o += " " + r + '="' + String(i)
						.replace(s, "&quot;") + '"'), o + ">" + n + "</" + t + ">"
				};
			e.exports = function(e, t) {
				var r = {};
				r[e] = t(o), i(i.P + i.F * n((function() {
					var t = "" [e]('"');
					return t !== t.toLowerCase() || t.split('"')
						.length > 3
				})), "String", r)
			}
		}, function(e, t) {
			var r = {}.hasOwnProperty;
			e.exports = function(e, t) {
				return r.call(e, t)
			}
		}, function(e, t, r) {
			var i = r(50),
				n = r(25);
			e.exports = function(e) {
				return i(n(e))
			}
		}, function(e, t, r) {
			var i = r(51),
				n = r(33),
				a = r(16),
				s = r(24),
				o = r(15),
				l = r(100),
				u = Object.getOwnPropertyDescriptor;
			t.f = r(7) ? u : function(e, t) {
				if (e = a(e), t = s(t, !0), l) try {
					return u(e, t)
				} catch (e) {}
				if (o(e, t)) return n(!i.f.call(e, t), e[t])
			}
		}, function(e, t, r) {
			var i = r(15),
				n = r(9),
				a = r(73)("IE_PROTO"),
				s = Object.prototype;
			e.exports = Object.getPrototypeOf || function(e) {
				return e = n(e), i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
			}
		}, function(e, t) {
			var r = e.exports = {
				version: "2.6.11"
			};
			"number" == typeof __e && (__e = r)
		}, function(e, t, r) {
			var i = r(10);
			e.exports = function(e, t, r) {
				if (i(e), void 0 === t) return e;
				switch (r) {
					case 1:
						return function(r) {
							return e.call(t, r)
						};
					case 2:
						return function(r, i) {
							return e.call(t, r, i)
						};
					case 3:
						return function(r, i, n) {
							return e.call(t, r, i, n)
						}
				}
				return function() {
					return e.apply(t, arguments)
				}
			}
		}, function(e, t) {
			var r = {}.toString;
			e.exports = function(e) {
				return r.call(e)
					.slice(8, -1)
			}
		}, function(e, t) {
			var r = Math.ceil,
				i = Math.floor;
			e.exports = function(e) {
				return isNaN(e = +e) ? 0 : (e > 0 ? i : r)(e)
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(3);
			e.exports = function(e, t) {
				return !!e && i((function() {
					t ? e.call(null, (function() {}), 1) : e.call(null)
				}))
			}
		}, function(e, t, r) {
			var i = r(4);
			e.exports = function(e, t) {
				if (!i(e)) return e;
				var r, n;
				if (t && "function" == typeof(r = e.toString) && !i(n = r.call(e))) return n;
				if ("function" == typeof(r = e.valueOf) && !i(n = r.call(e))) return n;
				if (!t && "function" == typeof(r = e.toString) && !i(n = r.call(e))) return n;
				throw TypeError("Can't convert object to primitive value")
			}
		}, function(e, t) {
			e.exports = function(e) {
				if (null == e) throw TypeError("Can't call method on  " + e);
				return e
			}
		}, function(e, t, r) {
			var i = r(0),
				n = r(19),
				a = r(3);
			e.exports = function(e, t) {
				var r = (n.Object || {})[e] || Object[e],
					s = {};
				s[e] = t(r), i(i.S + i.F * a((function() {
					r(1)
				})), "Object", s)
			}
		}, function(e, t, r) {
			var i = r(20),
				n = r(50),
				a = r(9),
				s = r(6),
				o = r(89);
			e.exports = function(e, t) {
				var r = 1 == e,
					l = 2 == e,
					u = 3 == e,
					c = 4 == e,
					d = 6 == e,
					h = 5 == e || d,
					f = t || o;
				return function(t, o, p) {
					for (var g, v, m = a(t), _ = n(m), y = i(o, p, 3), E = s(_.length), b = 0, S = r ? f(t, E) : l ? f(t, 0) : void 0; E > b; b++)
						if ((h || b in _) && (v = y(g = _[b], b, m), e))
							if (r) S[b] = v;
							else if (v) switch (e) {
						case 3:
							return !0;
						case 5:
							return g;
						case 6:
							return b;
						case 2:
							S.push(g)
					} else if (c) return !1;
					return d ? -1 : u || c ? c : S
				}
			}
		}, function(e, t, r) {
			"use strict";
			if (r(7)) {
				var i = r(30),
					n = r(2),
					a = r(3),
					s = r(0),
					o = r(65),
					l = r(97),
					u = r(20),
					c = r(40),
					d = r(33),
					h = r(12),
					f = r(42),
					p = r(22),
					g = r(6),
					v = r(128),
					m = r(36),
					_ = r(24),
					y = r(15),
					E = r(45),
					b = r(4),
					S = r(9),
					T = r(86),
					A = r(37),
					w = r(18),
					R = r(38)
					.f,
					L = r(88),
					k = r(34),
					O = r(5),
					D = r(27),
					C = r(55),
					I = r(53),
					x = r(91),
					P = r(47),
					M = r(60),
					F = r(39),
					N = r(90),
					B = r(117),
					U = r(8),
					j = r(17),
					G = U.f,
					V = j.f,
					K = n.RangeError,
					H = n.TypeError,
					W = n.Uint8Array,
					z = Array.prototype,
					q = l.ArrayBuffer,
					Y = l.DataView,
					X = D(0),
					$ = D(2),
					J = D(3),
					Q = D(4),
					Z = D(5),
					ee = D(6),
					te = C(!0),
					re = C(!1),
					ie = x.values,
					ne = x.keys,
					ae = x.entries,
					se = z.lastIndexOf,
					oe = z.reduce,
					le = z.reduceRight,
					ue = z.join,
					ce = z.sort,
					de = z.slice,
					he = z.toString,
					fe = z.toLocaleString,
					pe = O("iterator"),
					ge = O("toStringTag"),
					ve = k("typed_constructor"),
					me = k("def_constructor"),
					_e = o.CONSTR,
					ye = o.TYPED,
					Ee = o.VIEW,
					be = D(1, (function(e, t) {
						return Re(I(e, e[me]), t)
					})),
					Se = a((function() {
						return 1 === new W(new Uint16Array([1])
							.buffer)[0]
					})),
					Te = !!W && !!W.prototype.set && a((function() {
						new W(1)
							.set({})
					})),
					Ae = function(e, t) {
						var r = p(e);
						if (r < 0 || r % t) throw K("Wrong offset!");
						return r
					},
					we = function(e) {
						if (b(e) && ye in e) return e;
						throw H(e + " is not a typed array!")
					},
					Re = function(e, t) {
						if (!b(e) || !(ve in e)) throw H("It is not a typed array constructor!");
						return new e(t)
					},
					Le = function(e, t) {
						return ke(I(e, e[me]), t)
					},
					ke = function(e, t) {
						for (var r = 0, i = t.length, n = Re(e, i); i > r;) n[r] = t[r++];
						return n
					},
					Oe = function(e, t, r) {
						G(e, t, {
							get: function() {
								return this._d[r]
							}
						})
					},
					De = function(e) {
						var t, r, i, n, a, s, o = S(e),
							l = arguments.length,
							c = l > 1 ? arguments[1] : void 0,
							d = void 0 !== c,
							h = L(o);
						if (null != h && !T(h)) {
							for (s = h.call(o), i = [], t = 0; !(a = s.next())
								.done; t++) i.push(a.value);
							o = i
						}
						for (d && l > 2 && (c = u(c, arguments[2], 2)), t = 0, r = g(o.length), n = Re(this, r); r > t; t++) n[t] = d ? c(o[t], t) : o[t];
						return n
					},
					Ce = function() {
						for (var e = 0, t = arguments.length, r = Re(this, t); t > e;) r[e] = arguments[e++];
						return r
					},
					Ie = !!W && a((function() {
						fe.call(new W(1))
					})),
					xe = function() {
						return fe.apply(Ie ? de.call(we(this)) : we(this), arguments)
					},
					Pe = {
						copyWithin: function(e, t) {
							return B.call(we(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
						},
						every: function(e) {
							return Q(we(this), e, arguments.length > 1 ? arguments[1] : void 0)
						},
						fill: function(e) {
							return N.apply(we(this), arguments)
						},
						filter: function(e) {
							return Le(this, $(we(this), e, arguments.length > 1 ? arguments[1] : void 0))
						},
						find: function(e) {
							return Z(we(this), e, arguments.length > 1 ? arguments[1] : void 0)
						},
						findIndex: function(e) {
							return ee(we(this), e, arguments.length > 1 ? arguments[1] : void 0)
						},
						forEach: function(e) {
							X(we(this), e, arguments.length > 1 ? arguments[1] : void 0)
						},
						indexOf: function(e) {
							return re(we(this), e, arguments.length > 1 ? arguments[1] : void 0)
						},
						includes: function(e) {
							return te(we(this), e, arguments.length > 1 ? arguments[1] : void 0)
						},
						join: function(e) {
							return ue.apply(we(this), arguments)
						},
						lastIndexOf: function(e) {
							return se.apply(we(this), arguments)
						},
						map: function(e) {
							return be(we(this), e, arguments.length > 1 ? arguments[1] : void 0)
						},
						reduce: function(e) {
							return oe.apply(we(this), arguments)
						},
						reduceRight: function(e) {
							return le.apply(we(this), arguments)
						},
						reverse: function() {
							for (var e, t = we(this)
								.length, r = Math.floor(t / 2), i = 0; i < r;) e = this[i], this[i++] = this[--t], this[t] = e;
							return this
						},
						some: function(e) {
							return J(we(this), e, arguments.length > 1 ? arguments[1] : void 0)
						},
						sort: function(e) {
							return ce.call(we(this), e)
						},
						subarray: function(e, t) {
							var r = we(this),
								i = r.length,
								n = m(e, i);
							return new(I(r, r[me]))(r.buffer, r.byteOffset + n * r.BYTES_PER_ELEMENT, g((void 0 === t ? i : m(t, i)) - n))
						}
					},
					Me = function(e, t) {
						return Le(this, de.call(we(this), e, t))
					},
					Fe = function(e) {
						we(this);
						var t = Ae(arguments[1], 1),
							r = this.length,
							i = S(e),
							n = g(i.length),
							a = 0;
						if (n + t > r) throw K("Wrong length!");
						for (; a < n;) this[t + a] = i[a++]
					},
					Ne = {
						entries: function() {
							return ae.call(we(this))
						},
						keys: function() {
							return ne.call(we(this))
						},
						values: function() {
							return ie.call(we(this))
						}
					},
					Be = function(e, t) {
						return b(e) && e[ye] && "symbol" != typeof t && t in e && String(+t) == String(t)
					},
					Ue = function(e, t) {
						return Be(e, t = _(t, !0)) ? d(2, e[t]) : V(e, t)
					},
					je = function(e, t, r) {
						return !(Be(e, t = _(t, !0)) && b(r) && y(r, "value")) || y(r, "get") || y(r, "set") || r.configurable || y(r, "writable") && !r.writable || y(r, "enumerable") && !r.enumerable ? G(e, t, r) : (e[t] = r.value, e)
					};
				_e || (j.f = Ue, U.f = je), s(s.S + s.F * !_e, "Object", {
					getOwnPropertyDescriptor: Ue,
					defineProperty: je
				}), a((function() {
					he.call({})
				})) && (he = fe = function() {
					return ue.call(this)
				});
				var Ge = f({}, Pe);
				f(Ge, Ne), h(Ge, pe, Ne.values), f(Ge, {
					slice: Me,
					set: Fe,
					constructor: function() {},
					toString: he,
					toLocaleString: xe
				}), Oe(Ge, "buffer", "b"), Oe(Ge, "byteOffset", "o"), Oe(Ge, "byteLength", "l"), Oe(Ge, "length", "e"), G(Ge, ge, {
					get: function() {
						return this[ye]
					}
				}), e.exports = function(e, t, r, l) {
					var u = e + ((l = !!l) ? "Clamped" : "") + "Array",
						d = "get" + e,
						f = "set" + e,
						p = n[u],
						m = p || {},
						_ = p && w(p),
						y = !p || !o.ABV,
						S = {},
						T = p && p.prototype,
						L = function(e, r) {
							G(e, r, {
								get: function() {
									return function(e, r) {
										var i = e._d;
										return i.v[d](r * t + i.o, Se)
									}(this, r)
								},
								set: function(e) {
									return function(e, r, i) {
										var n = e._d;
										l && (i = (i = Math.round(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), n.v[f](r * t + n.o, i, Se)
									}(this, r, e)
								},
								enumerable: !0
							})
						};
					y ? (p = r((function(e, r, i, n) {
						c(e, p, u, "_d");
						var a, s, o, l, d = 0,
							f = 0;
						if (b(r)) {
							if (!(r instanceof q || "ArrayBuffer" == (l = E(r)) || "SharedArrayBuffer" == l)) return ye in r ? ke(p, r) : De.call(p, r);
							a = r, f = Ae(i, t);
							var m = r.byteLength;
							if (void 0 === n) {
								if (m % t) throw K("Wrong length!");
								if ((s = m - f) < 0) throw K("Wrong length!")
							} else if ((s = g(n) * t) + f > m) throw K("Wrong length!");
							o = s / t
						} else o = v(r), a = new q(s = o * t);
						for (h(e, "_d", {
							b: a,
							o: f,
							l: s,
							e: o,
							v: new Y(a)
						}); d < o;) L(e, d++)
					})), T = p.prototype = A(Ge), h(T, "constructor", p)) : a((function() {
						p(1)
					})) && a((function() {
						new p(-1)
					})) && M((function(e) {
						new p, new p(null), new p(1.5), new p(e)
					}), !0) || (p = r((function(e, r, i, n) {
						var a;
						return c(e, p, u), b(r) ? r instanceof q || "ArrayBuffer" == (a = E(r)) || "SharedArrayBuffer" == a ? void 0 !== n ? new m(r, Ae(i, t), n) : void 0 !== i ? new m(r, Ae(i, t)) : new m(r) : ye in r ? ke(p, r) : De.call(p, r) : new m(v(r))
					})), X(_ !== Function.prototype ? R(m)
						.concat(R(_)) : R(m), (function(e) {
							e in p || h(p, e, m[e])
						})), p.prototype = T, i || (T.constructor = p));
					var k = T[pe],
						O = !!k && ("values" == k.name || null == k.name),
						D = Ne.values;
					h(p, ve, !0), h(T, ye, u), h(T, Ee, !0), h(T, me, p), (l ? new p(1)[ge] == u : ge in T) || G(T, ge, {
						get: function() {
							return u
						}
					}), S[u] = p, s(s.G + s.W + s.F * (p != m), S), s(s.S, u, {
						BYTES_PER_ELEMENT: t
					}), s(s.S + s.F * a((function() {
						m.of.call(p, 1)
					})), u, {
						from: De,
						of: Ce
					}), "BYTES_PER_ELEMENT" in T || h(T, "BYTES_PER_ELEMENT", t), s(s.P, u, Pe), F(u), s(s.P + s.F * Te, u, {
						set: Fe
					}), s(s.P + s.F * !O, u, Ne), i || T.toString == he || (T.toString = he), s(s.P + s.F * a((function() {
						new p(1)
							.slice()
					})), u, {
						slice: Me
					}), s(s.P + s.F * (a((function() {
						return [1, 2].toLocaleString() != new p([1, 2])
							.toLocaleString()
					})) || !a((function() {
						T.toLocaleString.call([1, 2])
					}))), u, {
						toLocaleString: xe
					}), P[u] = O ? k : D, i || O || h(T, pe, D)
				}
			} else e.exports = function() {}
		}, function(e, t, r) {
			var i = r(123),
				n = r(0),
				a = r(49)("metadata"),
				s = a.store || (a.store = new(r(126))),
				o = function(e, t, r) {
					var n = s.get(e);
					if (!n) {
						if (!r) return;
						s.set(e, n = new i)
					}
					var a = n.get(t);
					if (!a) {
						if (!r) return;
						n.set(t, a = new i)
					}
					return a
				};
			e.exports = {
				store: s,
				map: o,
				has: function(e, t, r) {
					var i = o(t, r, !1);
					return void 0 !== i && i.has(e)
				},
				get: function(e, t, r) {
					var i = o(t, r, !1);
					return void 0 === i ? void 0 : i.get(e)
				},
				set: function(e, t, r, i) {
					o(r, i, !0)
						.set(e, t)
				},
				keys: function(e, t) {
					var r = o(e, t, !1),
						i = [];
					return r && r.forEach((function(e, t) {
						i.push(t)
					})), i
				},
				key: function(e) {
					return void 0 === e || "symbol" == typeof e ? e : String(e)
				},
				exp: function(e) {
					n(n.S, "Reflect", e)
				}
			}
		}, function(e, t) {
			e.exports = !1
		}, function(e, t, r) {
			var i = r(34)("meta"),
				n = r(4),
				a = r(15),
				s = r(8)
				.f,
				o = 0,
				l = Object.isExtensible || function() {
					return !0
				},
				u = !r(3)((function() {
					return l(Object.preventExtensions({}))
				})),
				c = function(e) {
					s(e, i, {
						value: {
							i: "O" + ++o,
							w: {}
						}
					})
				},
				d = e.exports = {
					KEY: i,
					NEED: !1,
					fastKey: function(e, t) {
						if (!n(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
						if (!a(e, i)) {
							if (!l(e)) return "F";
							if (!t) return "E";
							c(e)
						}
						return e[i].i
					},
					getWeak: function(e, t) {
						if (!a(e, i)) {
							if (!l(e)) return !0;
							if (!t) return !1;
							c(e)
						}
						return e[i].w
					},
					onFreeze: function(e) {
						return u && d.NEED && l(e) && !a(e, i) && c(e), e
					}
				}
		}, function(e, t, r) {
			var i = r(5)("unscopables"),
				n = Array.prototype;
			null == n[i] && r(12)(n, i, {}), e.exports = function(e) {
				n[i][e] = !0
			}
		}, function(e, t) {
			e.exports = function(e, t) {
				return {
					enumerable: !(1 & e),
					configurable: !(2 & e),
					writable: !(4 & e),
					value: t
				}
			}
		}, function(e, t) {
			var r = 0,
				i = Math.random();
			e.exports = function(e) {
				return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + i)
					.toString(36))
			}
		}, function(e, t, r) {
			var i = r(102),
				n = r(74);
			e.exports = Object.keys || function(e) {
				return i(e, n)
			}
		}, function(e, t, r) {
			var i = r(22),
				n = Math.max,
				a = Math.min;
			e.exports = function(e, t) {
				return (e = i(e)) < 0 ? n(e + t, 0) : a(e, t)
			}
		}, function(e, t, r) {
			var i = r(1),
				n = r(103),
				a = r(74),
				s = r(73)("IE_PROTO"),
				o = function() {},
				l = function() {
					var e, t = r(71)("iframe"),
						i = a.length;
					for (t.style.display = "none", r(75)
						.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document)
						.open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; i--;) delete l.prototype[a[i]];
					return l()
				};
			e.exports = Object.create || function(e, t) {
				var r;
				return null !== e ? (o.prototype = i(e), r = new o, o.prototype = null, r[s] = e) : r = l(), void 0 === t ? r : n(r, t)
			}
		}, function(e, t, r) {
			var i = r(102),
				n = r(74)
				.concat("length", "prototype");
			t.f = Object.getOwnPropertyNames || function(e) {
				return i(e, n)
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(2),
				n = r(8),
				a = r(7),
				s = r(5)("species");
			e.exports = function(e) {
				var t = i[e];
				a && t && !t[s] && n.f(t, s, {
					configurable: !0,
					get: function() {
						return this
					}
				})
			}
		}, function(e, t) {
			e.exports = function(e, t, r, i) {
				if (!(e instanceof t) || void 0 !== i && i in e) throw TypeError(r + ": incorrect invocation!");
				return e
			}
		}, function(e, t, r) {
			var i = r(20),
				n = r(115),
				a = r(86),
				s = r(1),
				o = r(6),
				l = r(88),
				u = {},
				c = {};
			(t = e.exports = function(e, t, r, d, h) {
				var f, p, g, v, m = h ? function() {
						return e
					} : l(e),
					_ = i(r, d, t ? 2 : 1),
					y = 0;
				if ("function" != typeof m) throw TypeError(e + " is not iterable!");
				if (a(m)) {
					for (f = o(e.length); f > y; y++)
						if ((v = t ? _(s(p = e[y])[0], p[1]) : _(e[y])) === u || v === c) return v
				} else
					for (g = m.call(e); !(p = g.next())
						.done;)
						if ((v = n(g, _, p.value, t)) === u || v === c) return v
			})
			.BREAK = u, t.RETURN = c
		}, function(e, t, r) {
			var i = r(13);
			e.exports = function(e, t, r) {
				for (var n in t) i(e, n, t[n], r);
				return e
			}
		}, function(e, t, r) {
			var i = r(4);
			e.exports = function(e, t) {
				if (!i(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
				return e
			}
		}, function(e, t, r) {
			var i = r(8)
				.f,
				n = r(15),
				a = r(5)("toStringTag");
			e.exports = function(e, t, r) {
				e && !n(e = r ? e : e.prototype, a) && i(e, a, {
					configurable: !0,
					value: t
				})
			}
		}, function(e, t, r) {
			var i = r(21),
				n = r(5)("toStringTag"),
				a = "Arguments" == i(function() {
					return arguments
				}());
			e.exports = function(e) {
				var t, r, s;
				return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(e, t) {
					try {
						return e[t]
					} catch (e) {}
				}(t = Object(e), n)) ? r : a ? i(t) : "Object" == (s = i(t)) && "function" == typeof t.callee ? "Arguments" : s
			}
		}, function(e, t, r) {
			var i = r(0),
				n = r(25),
				a = r(3),
				s = r(77),
				o = "[" + s + "]",
				l = RegExp("^" + o + o + "*"),
				u = RegExp(o + o + "*$"),
				c = function(e, t, r) {
					var n = {},
						o = a((function() {
							return !!s[e]() || "​" != "​" [e]()
						})),
						l = n[e] = o ? t(d) : s[e];
					r && (n[r] = l), i(i.P + i.F * o, "String", n)
				},
				d = c.trim = function(e, t) {
					return e = String(n(e)), 1 & t && (e = e.replace(l, "")), 2 & t && (e = e.replace(u, "")), e
				};
			e.exports = c
		}, function(e, t) {
			e.exports = {}
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var i = t[r];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, r, i) {
					return r && e(t.prototype, r), i && e(t, i), t
				}
			}();
			r(366);
			var n, a = r(98);
			var s = function(e) {
				function t(e) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var r = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t))
						.call(this));
					return r.option = Object.assign({}, {
						className: "sv-el-control"
					}, e), r.element_ = null, r
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), i(t, [{
					key: "init_",
					value: function(e) {
						return this.element_ = document.createElement("div"), this.element_.className = this.option.className + " sv-el-control-style", this.video_ = e, this.create_(), this.element_
					}
				}, {
					key: "create_",
					value: function() {}
				}]), t
			}(((n = a) && n.__esModule ? n : {
					default: n
				})
				.default);
			t.default = s
		}, function(e, t, r) {
			var i = r(19),
				n = r(2),
				a = n["__core-js_shared__"] || (n["__core-js_shared__"] = {});
			(e.exports = function(e, t) {
				return a[e] || (a[e] = void 0 !== t ? t : {})
			})("versions", [])
			.push({
				version: i.version,
				mode: r(30) ? "pure" : "global",
				copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
			})
		}, function(e, t, r) {
			var i = r(21);
			e.exports = Object("z")
				.propertyIsEnumerable(0) ? Object : function(e) {
					return "String" == i(e) ? e.split("") : Object(e)
				}
		}, function(e, t) {
			t.f = {}.propertyIsEnumerable
		}, function(e, t, r) {
			"use strict";
			var i = r(1);
			e.exports = function() {
				var e = i(this),
					t = "";
				return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
			}
		}, function(e, t, r) {
			var i = r(1),
				n = r(10),
				a = r(5)("species");
			e.exports = function(e, t) {
				var r, s = i(e)
					.constructor;
				return void 0 === s || null == (r = i(s)[a]) ? t : n(r)
			}
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = {
				CHANGE: "change",
				ERROR: "error",
				BLUR: "blur",
				CLEAR: "clear",
				CONTEXTMENU: "contextmenu",
				CLICK: "click",
				DBLCLICK: "dblclick",
				DRAGENTER: "dragenter",
				DRAGOVER: "dragover",
				DROP: "drop",
				FOCUS: "focus",
				KEYDOWN: "keydown",
				KEYPRESS: "keypress",
				LOAD: "load",
				RESIZE: "resize",
				TOUCHMOVE: "touchmove",
				WHEEL: "wheel",
				READY: "ready",
				FULLSCREEN: "fullscreen",
				CANCELFULLSCREEN: "cancelfullscreen",
				PLAY: "play",
				LOADS_SART: "loadstart",
				SUSPEND: "suspend",
				ABORT: "abort",
				PROGRESS: "progress",
				STALLED: "staled",
				PAUSE: "pause",
				LOADED_METADATA: "loadedmetadata",
				WAITING: "waiting",
				PLAYING: "playing",
				TIME_UPDATE: "timeupdate",
				ENDED: "ended",
				RATE_CHANGE: "ratechange",
				VOLUME_CHANGE: "volumechange",
				CANCEL_FULL_SCREEN: "cancelfullscreen",
				FULL_SCREEN: "fullscreen",
				SEND: "send",
				ENTER_PIP: "enterpictureinpicture",
				LEAVE_PIP: "leavepictureinpicture"
			}
		}, function(e, t, r) {
			var i = r(16),
				n = r(6),
				a = r(36);
			e.exports = function(e) {
				return function(t, r, s) {
					var o, l = i(t),
						u = n(l.length),
						c = a(s, u);
					if (e && r != r) {
						for (; u > c;)
							if ((o = l[c++]) != o) return !0
					} else
						for (; u > c; c++)
							if ((e || c in l) && l[c] === r) return e || c || 0;
					return !e && -1
				}
			}
		}, function(e, t) {
			t.f = Object.getOwnPropertySymbols
		}, function(e, t, r) {
			var i = r(21);
			e.exports = Array.isArray || function(e) {
				return "Array" == i(e)
			}
		}, function(e, t, r) {
			var i = r(22),
				n = r(25);
			e.exports = function(e) {
				return function(t, r) {
					var a, s, o = String(n(t)),
						l = i(r),
						u = o.length;
					return l < 0 || l >= u ? e ? "" : void 0 : (a = o.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === u || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? o.charAt(l) : a : e ? o.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536
				}
			}
		}, function(e, t, r) {
			var i = r(4),
				n = r(21),
				a = r(5)("match");
			e.exports = function(e) {
				var t;
				return i(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == n(e))
			}
		}, function(e, t, r) {
			var i = r(5)("iterator"),
				n = !1;
			try {
				var a = [7][i]();
				a.return = function() {
					n = !0
				}, Array.from(a, (function() {
					throw 2
				}))
			} catch (e) {}
			e.exports = function(e, t) {
				if (!t && !n) return !1;
				var r = !1;
				try {
					var a = [7],
						s = a[i]();
					s.next = function() {
						return {
							done: r = !0
						}
					}, a[i] = function() {
						return s
					}, e(a)
				} catch (e) {}
				return r
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(45),
				n = RegExp.prototype.exec;
			e.exports = function(e, t) {
				var r = e.exec;
				if ("function" == typeof r) {
					var a = r.call(e, t);
					if ("object" != typeof a) throw new TypeError("RegExp exec method returned something other than an Object or null");
					return a
				}
				if ("RegExp" !== i(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
				return n.call(e, t)
			}
		}, function(e, t, r) {
			"use strict";
			r(119);
			var i = r(13),
				n = r(12),
				a = r(3),
				s = r(25),
				o = r(5),
				l = r(92),
				u = o("species"),
				c = !a((function() {
					var e = /./;
					return e.exec = function() {
						var e = [];
						return e.groups = {
							a: "7"
						}, e
					}, "7" !== "".replace(e, "$<a>")
				})),
				d = function() {
					var e = /(?:)/,
						t = e.exec;
					e.exec = function() {
						return t.apply(this, arguments)
					};
					var r = "ab".split(e);
					return 2 === r.length && "a" === r[0] && "b" === r[1]
				}();
			e.exports = function(e, t, r) {
				var h = o(e),
					f = !a((function() {
						var t = {};
						return t[h] = function() {
							return 7
						}, 7 != "" [e](t)
					})),
					p = f ? !a((function() {
						var t = !1,
							r = /a/;
						return r.exec = function() {
							return t = !0, null
						}, "split" === e && (r.constructor = {}, r.constructor[u] = function() {
							return r
						}), r[h](""), !t
					})) : void 0;
				if (!f || !p || "replace" === e && !c || "split" === e && !d) {
					var g = /./ [h],
						v = r(s, h, "" [e], (function(e, t, r, i, n) {
							return t.exec === l ? f && !n ? {
								done: !0,
								value: g.call(t, r, i)
							} : {
								done: !0,
								value: e.call(r, t, i)
							} : {
								done: !1
							}
						})),
						m = v[0],
						_ = v[1];
					i(String.prototype, e, m), n(RegExp.prototype, h, 2 == t ? function(e, t) {
						return _.call(e, this, t)
					} : function(e) {
						return _.call(e, this)
					})
				}
			}
		}, function(e, t, r) {
			var i = r(2)
				.navigator;
			e.exports = i && i.userAgent || ""
		}, function(e, t, r) {
			"use strict";
			var i = r(2),
				n = r(0),
				a = r(13),
				s = r(42),
				o = r(31),
				l = r(41),
				u = r(40),
				c = r(4),
				d = r(3),
				h = r(60),
				f = r(44),
				p = r(78);
			e.exports = function(e, t, r, g, v, m) {
				var _ = i[e],
					y = _,
					E = v ? "set" : "add",
					b = y && y.prototype,
					S = {},
					T = function(e) {
						var t = b[e];
						a(b, e, "delete" == e || "has" == e ? function(e) {
							return !(m && !c(e)) && t.call(this, 0 === e ? 0 : e)
						} : "get" == e ? function(e) {
							return m && !c(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
						} : "add" == e ? function(e) {
							return t.call(this, 0 === e ? 0 : e), this
						} : function(e, r) {
							return t.call(this, 0 === e ? 0 : e, r), this
						})
					};
				if ("function" == typeof y && (m || b.forEach && !d((function() {
					(new y)
					.entries()
						.next()
				})))) {
					var A = new y,
						w = A[E](m ? {} : -0, 1) != A,
						R = d((function() {
							A.has(1)
						})),
						L = h((function(e) {
							new y(e)
						})),
						k = !m && d((function() {
							for (var e = new y, t = 5; t--;) e[E](t, t);
							return !e.has(-0)
						}));
					L || ((y = t((function(t, r) {
							u(t, y, e);
							var i = p(new _, t, y);
							return null != r && l(r, v, i[E], i), i
						})))
						.prototype = b, b.constructor = y), (R || k) && (T("delete"), T("has"), v && T("get")), (k || w) && T(E), m && b.clear && delete b.clear
				} else y = g.getConstructor(t, e, v, E), s(y.prototype, r), o.NEED = !0;
				return f(y, e), S[e] = y, n(n.G + n.W + n.F * (y != _), S), m || g.setStrong(y, e, v), y
			}
		}, function(e, t, r) {
			for (var i, n = r(2), a = r(12), s = r(34), o = s("typed_array"), l = s("view"), u = !(!n.ArrayBuffer || !n.DataView), c = u, d = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); d < 9;)(i = n[h[d++]]) ? (a(i.prototype, o, !0), a(i.prototype, l, !0)) : c = !1;
			e.exports = {
				ABV: u,
				CONSTR: c,
				TYPED: o,
				VIEW: l
			}
		}, function(e, t, r) {
			"use strict";
			e.exports = r(30) || !r(3)((function() {
				var e = Math.random();
				__defineSetter__.call(null, e, (function() {})), delete r(2)[e]
			}))
		}, function(e, t, r) {
			"use strict";
			var i = r(0);
			e.exports = function(e) {
				i(i.S, e, {
					of: function() {
						for (var e = arguments.length, t = new Array(e); e--;) t[e] = arguments[e];
						return new this(t)
					}
				})
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(10),
				a = r(20),
				s = r(41);
			e.exports = function(e) {
				i(i.S, e, {
					from: function(e) {
						var t, r, i, o, l = arguments[1];
						return n(this), (t = void 0 !== l) && n(l), null == e ? new this : (r = [], t ? (i = 0, o = a(l, arguments[2], 2), s(e, !1, (function(e) {
							r.push(o(e, i++))
						}))) : s(e, !1, r.push, r), new this(r))
					}
				})
			}
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.clear = function(e) {
				for (var t in e) delete e[t]
			}, t.isEmpty = function(e) {
				var t = void 0;
				for (t in e) return !1;
				return !t
			};
			t.assign = "function" == typeof Object.assign ? Object.assign : function(e, t) {
				if (null == e) throw new TypeError("Cannot convert undefined or null to object");
				for (var r = Object(e), i = 1, n = arguments.length; i < n; ++i) {
					var a = arguments[i];
					if (null != a)
						for (var s in a) a.hasOwnProperty(s) && (r[s] = a[s])
				}
				return r
			};
			t.getValues = "function" == typeof Object.values ? Object.values : function(e) {
				var t = [];
				for (var r in e) t.push(e[r]);
				return t
			}
		}, function(e, t) {
			var r;
			r = function() {
				return this
			}();
			try {
				r = r || new Function("return this")()
			} catch (e) {
				"object" == typeof window && (r = window)
			}
			e.exports = r
		}, function(e, t, r) {
			var i = r(4),
				n = r(2)
				.document,
				a = i(n) && i(n.createElement);
			e.exports = function(e) {
				return a ? n.createElement(e) : {}
			}
		}, function(e, t, r) {
			var i = r(2),
				n = r(19),
				a = r(30),
				s = r(101),
				o = r(8)
				.f;
			e.exports = function(e) {
				var t = n.Symbol || (n.Symbol = a ? {} : i.Symbol || {});
				"_" == e.charAt(0) || e in t || o(t, e, {
					value: s.f(e)
				})
			}
		}, function(e, t, r) {
			var i = r(49)("keys"),
				n = r(34);
			e.exports = function(e) {
				return i[e] || (i[e] = n(e))
			}
		}, function(e, t) {
			e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
		}, function(e, t, r) {
			var i = r(2)
				.document;
			e.exports = i && i.documentElement
		}, function(e, t, r) {
			var i = r(4),
				n = r(1),
				a = function(e, t) {
					if (n(e), !i(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
				};
			e.exports = {
				set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, i) {
					try {
						(i = r(20)(Function.call, r(17)
							.f(Object.prototype, "__proto__")
							.set, 2))(e, []), t = !(e instanceof Array)
					} catch (e) {
						t = !0
					}
					return function(e, r) {
						return a(e, r), t ? e.__proto__ = r : i(e, r), e
					}
				}({}, !1) : void 0),
				check: a
			}
		}, function(e, t) {
			e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
		}, function(e, t, r) {
			var i = r(4),
				n = r(76)
				.set;
			e.exports = function(e, t, r) {
				var a, s = t.constructor;
				return s !== r && "function" == typeof s && (a = s.prototype) !== r.prototype && i(a) && n && n(e, a), e
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(22),
				n = r(25);
			e.exports = function(e) {
				var t = String(n(this)),
					r = "",
					a = i(e);
				if (a < 0 || a == 1 / 0) throw RangeError("Count can't be negative");
				for (; a > 0;
					(a >>>= 1) && (t += t)) 1 & a && (r += t);
				return r
			}
		}, function(e, t) {
			e.exports = Math.sign || function(e) {
				return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
			}
		}, function(e, t) {
			var r = Math.expm1;
			e.exports = !r || r(10) > 22025.465794806718 || r(10) < 22025.465794806718 || -2e-17 != r(-2e-17) ? function(e) {
				return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
			} : r
		}, function(e, t, r) {
			"use strict";
			var i = r(30),
				n = r(0),
				a = r(13),
				s = r(12),
				o = r(47),
				l = r(83),
				u = r(44),
				c = r(18),
				d = r(5)("iterator"),
				h = !([].keys && "next" in [].keys()),
				f = function() {
					return this
				};
			e.exports = function(e, t, r, p, g, v, m) {
				l(r, t, p);
				var _, y, E, b = function(e) {
						if (!h && e in w) return w[e];
						switch (e) {
							case "keys":
							case "values":
								return function() {
									return new r(this, e)
								}
						}
						return function() {
							return new r(this, e)
						}
					},
					S = t + " Iterator",
					T = "values" == g,
					A = !1,
					w = e.prototype,
					R = w[d] || w["@@iterator"] || g && w[g],
					L = R || b(g),
					k = g ? T ? b("entries") : L : void 0,
					O = "Array" == t && w.entries || R;
				if (O && (E = c(O.call(new e))) !== Object.prototype && E.next && (u(E, S, !0), i || "function" == typeof E[d] || s(E, d, f)), T && R && "values" !== R.name && (A = !0, L = function() {
					return R.call(this)
				}), i && !m || !h && !A && w[d] || s(w, d, L), o[t] = L, o[S] = f, g)
					if (_ = {
						values: T ? L : b("values"),
						keys: v ? L : b("keys"),
						entries: k
					}, m)
						for (y in _) y in w || a(w, y, _[y]);
					else n(n.P + n.F * (h || A), t, _);
				return _
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(37),
				n = r(33),
				a = r(44),
				s = {};
			r(12)(s, r(5)("iterator"), (function() {
				return this
			})), e.exports = function(e, t, r) {
				e.prototype = i(s, {
					next: n(1, r)
				}), a(e, t + " Iterator")
			}
		}, function(e, t, r) {
			var i = r(59),
				n = r(25);
			e.exports = function(e, t, r) {
				if (i(t)) throw TypeError("String#" + r + " doesn't accept regex!");
				return String(n(e))
			}
		}, function(e, t, r) {
			var i = r(5)("match");
			e.exports = function(e) {
				var t = /./;
				try {
					"/./" [e](t)
				} catch (r) {
					try {
						return t[i] = !1, !"/./" [e](t)
					} catch (e) {}
				}
				return !0
			}
		}, function(e, t, r) {
			var i = r(47),
				n = r(5)("iterator"),
				a = Array.prototype;
			e.exports = function(e) {
				return void 0 !== e && (i.Array === e || a[n] === e)
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(8),
				n = r(33);
			e.exports = function(e, t, r) {
				t in e ? i.f(e, t, n(0, r)) : e[t] = r
			}
		}, function(e, t, r) {
			var i = r(45),
				n = r(5)("iterator"),
				a = r(47);
			e.exports = r(19)
				.getIteratorMethod = function(e) {
					if (null != e) return e[n] || e["@@iterator"] || a[i(e)]
				}
		}, function(e, t, r) {
			var i = r(234);
			e.exports = function(e, t) {
				return new(i(e))(t)
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(9),
				n = r(36),
				a = r(6);
			e.exports = function(e) {
				for (var t = i(this), r = a(t.length), s = arguments.length, o = n(s > 1 ? arguments[1] : void 0, r), l = s > 2 ? arguments[2] : void 0, u = void 0 === l ? r : n(l, r); u > o;) t[o++] = e;
				return t
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(32),
				n = r(118),
				a = r(47),
				s = r(16);
			e.exports = r(82)(Array, "Array", (function(e, t) {
				this._t = s(e), this._i = 0, this._k = t
			}), (function() {
				var e = this._t,
					t = this._k,
					r = this._i++;
				return !e || r >= e.length ? (this._t = void 0, n(1)) : n(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]])
			}), "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
		}, function(e, t, r) {
			"use strict";
			var i, n, a = r(52),
				s = RegExp.prototype.exec,
				o = String.prototype.replace,
				l = s,
				u = (i = /a/, n = /b*/g, s.call(i, "a"), s.call(n, "a"), 0 !== i.lastIndex || 0 !== n.lastIndex),
				c = void 0 !== /()??/.exec("")[1];
			(u || c) && (l = function(e) {
				var t, r, i, n, l = this;
				return c && (r = new RegExp("^" + l.source + "$(?!\\s)", a.call(l))), u && (t = l.lastIndex), i = s.call(l, e), u && i && (l.lastIndex = l.global ? i.index + i[0].length : t), c && i && i.length > 1 && o.call(i[0], r, (function() {
					for (n = 1; n < arguments.length - 2; n++) void 0 === arguments[n] && (i[n] = void 0)
				})), i
			}), e.exports = l
		}, function(e, t, r) {
			"use strict";
			var i = r(58)(!0);
			e.exports = function(e, t, r) {
				return t + (r ? i(e, t)
					.length : 1)
			}
		}, function(e, t, r) {
			var i, n, a, s = r(20),
				o = r(108),
				l = r(75),
				u = r(71),
				c = r(2),
				d = c.process,
				h = c.setImmediate,
				f = c.clearImmediate,
				p = c.MessageChannel,
				g = c.Dispatch,
				v = 0,
				m = {},
				_ = function() {
					var e = +this;
					if (m.hasOwnProperty(e)) {
						var t = m[e];
						delete m[e], t()
					}
				},
				y = function(e) {
					_.call(e.data)
				};
			h && f || (h = function(e) {
				for (var t = [], r = 1; arguments.length > r;) t.push(arguments[r++]);
				return m[++v] = function() {
					o("function" == typeof e ? e : Function(e), t)
				}, i(v), v
			}, f = function(e) {
				delete m[e]
			}, "process" == r(21)(d) ? i = function(e) {
				d.nextTick(s(_, e, 1))
			} : g && g.now ? i = function(e) {
				g.now(s(_, e, 1))
			} : p ? (a = (n = new p)
				.port2, n.port1.onmessage = y, i = s(a.postMessage, a, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (i = function(e) {
				c.postMessage(e + "", "*")
			}, c.addEventListener("message", y, !1)) : i = "onreadystatechange" in u("script") ? function(e) {
				l.appendChild(u("script"))
					.onreadystatechange = function() {
						l.removeChild(this), _.call(e)
					}
			} : function(e) {
				setTimeout(s(_, e, 1), 0)
			}), e.exports = {
				set: h,
				clear: f
			}
		}, function(e, t, r) {
			var i = r(2),
				n = r(94)
				.set,
				a = i.MutationObserver || i.WebKitMutationObserver,
				s = i.process,
				o = i.Promise,
				l = "process" == r(21)(s);
			e.exports = function() {
				var e, t, r, u = function() {
					var i, n;
					for (l && (i = s.domain) && i.exit(); e;) {
						n = e.fn, e = e.next;
						try {
							n()
						} catch (i) {
							throw e ? r() : t = void 0, i
						}
					}
					t = void 0, i && i.enter()
				};
				if (l) r = function() {
					s.nextTick(u)
				};
				else if (!a || i.navigator && i.navigator.standalone)
					if (o && o.resolve) {
						var c = o.resolve(void 0);
						r = function() {
							c.then(u)
						}
					} else r = function() {
						n.call(i, u)
					};
				else {
					var d = !0,
						h = document.createTextNode("");
					new a(u)
						.observe(h, {
							characterData: !0
						}), r = function() {
							h.data = d = !d
						}
				}
				return function(i) {
					var n = {
						fn: i,
						next: void 0
					};
					t && (t.next = n), e || (e = n, r()), t = n
				}
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(10);

			function n(e) {
				var t, r;
				this.promise = new e((function(e, i) {
					if (void 0 !== t || void 0 !== r) throw TypeError("Bad Promise constructor");
					t = e, r = i
				})), this.resolve = i(t), this.reject = i(r)
			}
			e.exports.f = function(e) {
				return new n(e)
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(2),
				n = r(7),
				a = r(30),
				s = r(65),
				o = r(12),
				l = r(42),
				u = r(3),
				c = r(40),
				d = r(22),
				h = r(6),
				f = r(128),
				p = r(38)
				.f,
				g = r(8)
				.f,
				v = r(90),
				m = r(44),
				_ = i.ArrayBuffer,
				y = i.DataView,
				E = i.Math,
				b = i.RangeError,
				S = i.Infinity,
				T = _,
				A = E.abs,
				w = E.pow,
				R = E.floor,
				L = E.log,
				k = E.LN2,
				O = n ? "_b" : "buffer",
				D = n ? "_l" : "byteLength",
				C = n ? "_o" : "byteOffset";

			function I(e, t, r) {
				var i, n, a, s = new Array(r),
					o = 8 * r - t - 1,
					l = (1 << o) - 1,
					u = l >> 1,
					c = 23 === t ? w(2, -24) - w(2, -77) : 0,
					d = 0,
					h = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
				for ((e = A(e)) != e || e === S ? (n = e != e ? 1 : 0, i = l) : (i = R(L(e) / k), e * (a = w(2, -i)) < 1 && (i--, a *= 2), (e += i + u >= 1 ? c / a : c * w(2, 1 - u)) * a >= 2 && (i++, a /= 2), i + u >= l ? (n = 0, i = l) : i + u >= 1 ? (n = (e * a - 1) * w(2, t), i += u) : (n = e * w(2, u - 1) * w(2, t), i = 0)); t >= 8; s[d++] = 255 & n, n /= 256, t -= 8);
				for (i = i << t | n, o += t; o > 0; s[d++] = 255 & i, i /= 256, o -= 8);
				return s[--d] |= 128 * h, s
			}

			function x(e, t, r) {
				var i, n = 8 * r - t - 1,
					a = (1 << n) - 1,
					s = a >> 1,
					o = n - 7,
					l = r - 1,
					u = e[l--],
					c = 127 & u;
				for (u >>= 7; o > 0; c = 256 * c + e[l], l--, o -= 8);
				for (i = c & (1 << -o) - 1, c >>= -o, o += t; o > 0; i = 256 * i + e[l], l--, o -= 8);
				if (0 === c) c = 1 - s;
				else {
					if (c === a) return i ? NaN : u ? -S : S;
					i += w(2, t), c -= s
				}
				return (u ? -1 : 1) * i * w(2, c - t)
			}

			function P(e) {
				return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
			}

			function M(e) {
				return [255 & e]
			}

			function F(e) {
				return [255 & e, e >> 8 & 255]
			}

			function N(e) {
				return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
			}

			function B(e) {
				return I(e, 52, 8)
			}

			function U(e) {
				return I(e, 23, 4)
			}

			function j(e, t, r) {
				g(e.prototype, t, {
					get: function() {
						return this[r]
					}
				})
			}

			function G(e, t, r, i) {
				var n = f(+r);
				if (n + t > e[D]) throw b("Wrong index!");
				var a = e[O]._b,
					s = n + e[C],
					o = a.slice(s, s + t);
				return i ? o : o.reverse()
			}

			function V(e, t, r, i, n, a) {
				var s = f(+r);
				if (s + t > e[D]) throw b("Wrong index!");
				for (var o = e[O]._b, l = s + e[C], u = i(+n), c = 0; c < t; c++) o[l + c] = u[a ? c : t - c - 1]
			}
			if (s.ABV) {
				if (!u((function() {
					_(1)
				})) || !u((function() {
					new _(-1)
				})) || u((function() {
					return new _, new _(1.5), new _(NaN), "ArrayBuffer" != _.name
				}))) {
					for (var K, H = (_ = function(e) {
							return c(this, _), new T(f(e))
						})
						.prototype = T.prototype, W = p(T), z = 0; W.length > z;)(K = W[z++]) in _ || o(_, K, T[K]);
					a || (H.constructor = _)
				}
				var q = new y(new _(2)),
					Y = y.prototype.setInt8;
				q.setInt8(0, 2147483648), q.setInt8(1, 2147483649), !q.getInt8(0) && q.getInt8(1) || l(y.prototype, {
					setInt8: function(e, t) {
						Y.call(this, e, t << 24 >> 24)
					},
					setUint8: function(e, t) {
						Y.call(this, e, t << 24 >> 24)
					}
				}, !0)
			} else _ = function(e) {
				c(this, _, "ArrayBuffer");
				var t = f(e);
				this._b = v.call(new Array(t), 0), this[D] = t
			}, y = function(e, t, r) {
				c(this, y, "DataView"), c(e, _, "DataView");
				var i = e[D],
					n = d(t);
				if (n < 0 || n > i) throw b("Wrong offset!");
				if (n + (r = void 0 === r ? i - n : h(r)) > i) throw b("Wrong length!");
				this[O] = e, this[C] = n, this[D] = r
			}, n && (j(_, "byteLength", "_l"), j(y, "buffer", "_b"), j(y, "byteLength", "_l"), j(y, "byteOffset", "_o")), l(y.prototype, {
				getInt8: function(e) {
					return G(this, 1, e)[0] << 24 >> 24
				},
				getUint8: function(e) {
					return G(this, 1, e)[0]
				},
				getInt16: function(e) {
					var t = G(this, 2, e, arguments[1]);
					return (t[1] << 8 | t[0]) << 16 >> 16
				},
				getUint16: function(e) {
					var t = G(this, 2, e, arguments[1]);
					return t[1] << 8 | t[0]
				},
				getInt32: function(e) {
					return P(G(this, 4, e, arguments[1]))
				},
				getUint32: function(e) {
					return P(G(this, 4, e, arguments[1])) >>> 0
				},
				getFloat32: function(e) {
					return x(G(this, 4, e, arguments[1]), 23, 4)
				},
				getFloat64: function(e) {
					return x(G(this, 8, e, arguments[1]), 52, 8)
				},
				setInt8: function(e, t) {
					V(this, 1, e, M, t)
				},
				setUint8: function(e, t) {
					V(this, 1, e, M, t)
				},
				setInt16: function(e, t) {
					V(this, 2, e, F, t, arguments[2])
				},
				setUint16: function(e, t) {
					V(this, 2, e, F, t, arguments[2])
				},
				setInt32: function(e, t) {
					V(this, 4, e, N, t, arguments[2])
				},
				setUint32: function(e, t) {
					V(this, 4, e, N, t, arguments[2])
				},
				setFloat32: function(e, t) {
					V(this, 4, e, U, t, arguments[2])
				},
				setFloat64: function(e, t) {
					V(this, 8, e, B, t, arguments[2])
				}
			});
			m(_, "ArrayBuffer"), m(y, "DataView"), o(y.prototype, s.VIEW, !0), t.ArrayBuffer = _, t.DataView = y
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}(),
				n = l(r(345)),
				a = l(r(346)),
				s = r(347),
				o = r(69);

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var u = function(e) {
				function t(e) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var r = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t))
						.call(this));
					return r.eventTarget_ = e, r.pendingRemovals_ = {}, r.dispatching_ = {}, r.listeners_ = {}, r
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), i(t, [{
					key: "addEventListener",
					value: function(e, t) {
						if (e && t) {
							var r = this.listeners_[e];
							r || (r = [], this.listeners_[e] = r), -1 === r.indexOf(t) && r.push(t)
						}
					}
				}, {
					key: "dispatchEvent",
					value: function(e) {
						var t = "string" == typeof e ? new a.default(e) : e,
							r = t.type;
						t.target || (t.target = this.eventTarget_ || this);
						var i = this.listeners_[r],
							n = void 0;
						if (i) {
							r in this.dispatching_ || (this.dispatching_[r] = 0, this.pendingRemovals_[r] = 0), ++this.dispatching_[r];
							for (var o = 0, l = i.length; o < l; ++o)
								if (!1 === (n = "handleEvent" in i[o] ? i[o].handleEvent(t) : i[o].call(this, t)) || t.propagationStopped) {
									n = !1;
									break
								} if (--this.dispatching_[r], 0 === this.dispatching_[r]) {
								var u = this.pendingRemovals_[r];
								for (delete this.pendingRemovals_[r]; u--;) this.removeEventListener(r, s.VOID);
								delete this.dispatching_[r]
							}
							return n
						}
					}
				}, {
					key: "disposeInternal",
					value: function() {
						(0, o.clear)(this.listeners_)
					}
				}, {
					key: "getListeners",
					value: function(e) {
						return this.listeners_[e]
					}
				}, {
					key: "hasListener",
					value: function(e) {
						return e ? e in this.listeners_ : Object.keys(this.listeners_)
							.length > 0
					}
				}, {
					key: "removeEventListener",
					value: function(e, t) {
						var r = this.listeners_[e];
						if (r) {
							var i = r.indexOf(t); - 1 !== i && (e in this.pendingRemovals_ ? (r[i] = s.VOID, ++this.pendingRemovals_[e]) : (r.splice(i, 1), 0 === r.length && delete this.listeners_[e]))
						}
					}
				}]), t
			}(n.default);
			t.default = u
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = {
				M3U8: "m3u8",
				MP4: "mp4",
				FLV: "flv"
			}
		}, function(e, t, r) {
			e.exports = !r(7) && !r(3)((function() {
				return 7 != Object.defineProperty(r(71)("div"), "a", {
						get: function() {
							return 7
						}
					})
					.a
			}))
		}, function(e, t, r) {
			t.f = r(5)
		}, function(e, t, r) {
			var i = r(15),
				n = r(16),
				a = r(55)(!1),
				s = r(73)("IE_PROTO");
			e.exports = function(e, t) {
				var r, o = n(e),
					l = 0,
					u = [];
				for (r in o) r != s && i(o, r) && u.push(r);
				for (; t.length > l;) i(o, r = t[l++]) && (~a(u, r) || u.push(r));
				return u
			}
		}, function(e, t, r) {
			var i = r(8),
				n = r(1),
				a = r(35);
			e.exports = r(7) ? Object.defineProperties : function(e, t) {
				n(e);
				for (var r, s = a(t), o = s.length, l = 0; o > l;) i.f(e, r = s[l++], t[r]);
				return e
			}
		}, function(e, t, r) {
			var i = r(16),
				n = r(38)
				.f,
				a = {}.toString,
				s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
			e.exports.f = function(e) {
				return s && "[object Window]" == a.call(e) ? function(e) {
					try {
						return n(e)
					} catch (e) {
						return s.slice()
					}
				}(e) : n(i(e))
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(7),
				n = r(35),
				a = r(56),
				s = r(51),
				o = r(9),
				l = r(50),
				u = Object.assign;
			e.exports = !u || r(3)((function() {
				var e = {},
					t = {},
					r = Symbol(),
					i = "abcdefghijklmnopqrst";
				return e[r] = 7, i.split("")
					.forEach((function(e) {
						t[e] = e
					})), 7 != u({}, e)[r] || Object.keys(u({}, t))
					.join("") != i
			})) ? function(e, t) {
				for (var r = o(e), u = arguments.length, c = 1, d = a.f, h = s.f; u > c;)
					for (var f, p = l(arguments[c++]), g = d ? n(p)
						.concat(d(p)) : n(p), v = g.length, m = 0; v > m;) f = g[m++], i && !h.call(p, f) || (r[f] = p[f]);
				return r
			} : u
		}, function(e, t) {
			e.exports = Object.is || function(e, t) {
				return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(10),
				n = r(4),
				a = r(108),
				s = [].slice,
				o = {},
				l = function(e, t, r) {
					if (!(t in o)) {
						for (var i = [], n = 0; n < t; n++) i[n] = "a[" + n + "]";
						o[t] = Function("F,a", "return new F(" + i.join(",") + ")")
					}
					return o[t](e, r)
				};
			e.exports = Function.bind || function(e) {
				var t = i(this),
					r = s.call(arguments, 1),
					o = function() {
						var i = r.concat(s.call(arguments));
						return this instanceof o ? l(t, i.length, i) : a(t, i, e)
					};
				return n(t.prototype) && (o.prototype = t.prototype), o
			}
		}, function(e, t) {
			e.exports = function(e, t, r) {
				var i = void 0 === r;
				switch (t.length) {
					case 0:
						return i ? e() : e.call(r);
					case 1:
						return i ? e(t[0]) : e.call(r, t[0]);
					case 2:
						return i ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
					case 3:
						return i ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
					case 4:
						return i ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3])
				}
				return e.apply(r, t)
			}
		}, function(e, t, r) {
			var i = r(2)
				.parseInt,
				n = r(46)
				.trim,
				a = r(77),
				s = /^[-+]?0[xX]/;
			e.exports = 8 !== i(a + "08") || 22 !== i(a + "0x16") ? function(e, t) {
				var r = n(String(e), 3);
				return i(r, t >>> 0 || (s.test(r) ? 16 : 10))
			} : i
		}, function(e, t, r) {
			var i = r(2)
				.parseFloat,
				n = r(46)
				.trim;
			e.exports = 1 / i(r(77) + "-0") != -1 / 0 ? function(e) {
				var t = n(String(e), 3),
					r = i(t);
				return 0 === r && "-" == t.charAt(0) ? -0 : r
			} : i
		}, function(e, t, r) {
			var i = r(21);
			e.exports = function(e, t) {
				if ("number" != typeof e && "Number" != i(e)) throw TypeError(t);
				return +e
			}
		}, function(e, t, r) {
			var i = r(4),
				n = Math.floor;
			e.exports = function(e) {
				return !i(e) && isFinite(e) && n(e) === e
			}
		}, function(e, t) {
			e.exports = Math.log1p || function(e) {
				return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
			}
		}, function(e, t, r) {
			var i = r(80),
				n = Math.pow,
				a = n(2, -52),
				s = n(2, -23),
				o = n(2, 127) * (2 - s),
				l = n(2, -126);
			e.exports = Math.fround || function(e) {
				var t, r, n = Math.abs(e),
					u = i(e);
				return n < l ? u * (n / l / s + 1 / a - 1 / a) * l * s : (r = (t = (1 + s / a) * n) - (t - n)) > o || r != r ? u * (1 / 0) : u * r
			}
		}, function(e, t, r) {
			var i = r(1);
			e.exports = function(e, t, r, n) {
				try {
					return n ? t(i(r)[0], r[1]) : t(r)
				} catch (t) {
					var a = e.return;
					throw void 0 !== a && i(a.call(e)), t
				}
			}
		}, function(e, t, r) {
			var i = r(10),
				n = r(9),
				a = r(50),
				s = r(6);
			e.exports = function(e, t, r, o, l) {
				i(t);
				var u = n(e),
					c = a(u),
					d = s(u.length),
					h = l ? d - 1 : 0,
					f = l ? -1 : 1;
				if (r < 2)
					for (;;) {
						if (h in c) {
							o = c[h], h += f;
							break
						}
						if (h += f, l ? h < 0 : d <= h) throw TypeError("Reduce of empty array with no initial value")
					}
				for (; l ? h >= 0 : d > h; h += f) h in c && (o = t(o, c[h], h, u));
				return o
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(9),
				n = r(36),
				a = r(6);
			e.exports = [].copyWithin || function(e, t) {
				var r = i(this),
					s = a(r.length),
					o = n(e, s),
					l = n(t, s),
					u = arguments.length > 2 ? arguments[2] : void 0,
					c = Math.min((void 0 === u ? s : n(u, s)) - l, s - o),
					d = 1;
				for (l < o && o < l + c && (d = -1, l += c - 1, o += c - 1); c-- > 0;) l in r ? r[o] = r[l] : delete r[o], o += d, l += d;
				return r
			}
		}, function(e, t) {
			e.exports = function(e, t) {
				return {
					value: t,
					done: !!e
				}
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(92);
			r(0)({
				target: "RegExp",
				proto: !0,
				forced: i !== /./.exec
			}, {
				exec: i
			})
		}, function(e, t, r) {
			r(7) && "g" != /./g.flags && r(8)
				.f(RegExp.prototype, "flags", {
					configurable: !0,
					get: r(52)
				})
		}, function(e, t) {
			e.exports = function(e) {
				try {
					return {
						e: !1,
						v: e()
					}
				} catch (e) {
					return {
						e: !0,
						v: e
					}
				}
			}
		}, function(e, t, r) {
			var i = r(1),
				n = r(4),
				a = r(96);
			e.exports = function(e, t) {
				if (i(e), n(t) && t.constructor === e) return t;
				var r = a.f(e);
				return (0, r.resolve)(t), r.promise
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(124),
				n = r(43);
			e.exports = r(64)("Map", (function(e) {
				return function() {
					return e(this, arguments.length > 0 ? arguments[0] : void 0)
				}
			}), {
				get: function(e) {
					var t = i.getEntry(n(this, "Map"), e);
					return t && t.v
				},
				set: function(e, t) {
					return i.def(n(this, "Map"), 0 === e ? 0 : e, t)
				}
			}, i, !0)
		}, function(e, t, r) {
			"use strict";
			var i = r(8)
				.f,
				n = r(37),
				a = r(42),
				s = r(20),
				o = r(40),
				l = r(41),
				u = r(82),
				c = r(118),
				d = r(39),
				h = r(7),
				f = r(31)
				.fastKey,
				p = r(43),
				g = h ? "_s" : "size",
				v = function(e, t) {
					var r, i = f(t);
					if ("F" !== i) return e._i[i];
					for (r = e._f; r; r = r.n)
						if (r.k == t) return r
				};
			e.exports = {
				getConstructor: function(e, t, r, u) {
					var c = e((function(e, i) {
						o(e, c, t, "_i"), e._t = t, e._i = n(null), e._f = void 0, e._l = void 0, e[g] = 0, null != i && l(i, r, e[u], e)
					}));
					return a(c.prototype, {
						clear: function() {
							for (var e = p(this, t), r = e._i, i = e._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete r[i.i];
							e._f = e._l = void 0, e[g] = 0
						},
						delete: function(e) {
							var r = p(this, t),
								i = v(r, e);
							if (i) {
								var n = i.n,
									a = i.p;
								delete r._i[i.i], i.r = !0, a && (a.n = n), n && (n.p = a), r._f == i && (r._f = n), r._l == i && (r._l = a), r[g]--
							}
							return !!i
						},
						forEach: function(e) {
							p(this, t);
							for (var r, i = s(e, arguments.length > 1 ? arguments[1] : void 0, 3); r = r ? r.n : this._f;)
								for (i(r.v, r.k, this); r && r.r;) r = r.p
						},
						has: function(e) {
							return !!v(p(this, t), e)
						}
					}), h && i(c.prototype, "size", {
						get: function() {
							return p(this, t)[g]
						}
					}), c
				},
				def: function(e, t, r) {
					var i, n, a = v(e, t);
					return a ? a.v = r : (e._l = a = {
						i: n = f(t, !0),
						k: t,
						v: r,
						p: i = e._l,
						n: void 0,
						r: !1
					}, e._f || (e._f = a), i && (i.n = a), e[g]++, "F" !== n && (e._i[n] = a)), e
				},
				getEntry: v,
				setStrong: function(e, t, r) {
					u(e, t, (function(e, r) {
						this._t = p(e, t), this._k = r, this._l = void 0
					}), (function() {
						for (var e = this._k, t = this._l; t && t.r;) t = t.p;
						return this._t && (this._l = t = t ? t.n : this._t._f) ? c(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, c(1))
					}), r ? "entries" : "values", !r, !0), d(t)
				}
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(124),
				n = r(43);
			e.exports = r(64)("Set", (function(e) {
				return function() {
					return e(this, arguments.length > 0 ? arguments[0] : void 0)
				}
			}), {
				add: function(e) {
					return i.def(n(this, "Set"), e = 0 === e ? 0 : e, e)
				}
			}, i)
		}, function(e, t, r) {
			"use strict";
			var i, n = r(2),
				a = r(27)(0),
				s = r(13),
				o = r(31),
				l = r(105),
				u = r(127),
				c = r(4),
				d = r(43),
				h = r(43),
				f = !n.ActiveXObject && "ActiveXObject" in n,
				p = o.getWeak,
				g = Object.isExtensible,
				v = u.ufstore,
				m = function(e) {
					return function() {
						return e(this, arguments.length > 0 ? arguments[0] : void 0)
					}
				},
				_ = {
					get: function(e) {
						if (c(e)) {
							var t = p(e);
							return !0 === t ? v(d(this, "WeakMap"))
								.get(e) : t ? t[this._i] : void 0
						}
					},
					set: function(e, t) {
						return u.def(d(this, "WeakMap"), e, t)
					}
				},
				y = e.exports = r(64)("WeakMap", m, _, u, !0, !0);
			h && f && (l((i = u.getConstructor(m, "WeakMap"))
				.prototype, _), o.NEED = !0, a(["delete", "has", "get", "set"], (function(e) {
				var t = y.prototype,
					r = t[e];
				s(t, e, (function(t, n) {
					if (c(t) && !g(t)) {
						this._f || (this._f = new i);
						var a = this._f[e](t, n);
						return "set" == e ? this : a
					}
					return r.call(this, t, n)
				}))
			})))
		}, function(e, t, r) {
			"use strict";
			var i = r(42),
				n = r(31)
				.getWeak,
				a = r(1),
				s = r(4),
				o = r(40),
				l = r(41),
				u = r(27),
				c = r(15),
				d = r(43),
				h = u(5),
				f = u(6),
				p = 0,
				g = function(e) {
					return e._l || (e._l = new v)
				},
				v = function() {
					this.a = []
				},
				m = function(e, t) {
					return h(e.a, (function(e) {
						return e[0] === t
					}))
				};
			v.prototype = {
				get: function(e) {
					var t = m(this, e);
					if (t) return t[1]
				},
				has: function(e) {
					return !!m(this, e)
				},
				set: function(e, t) {
					var r = m(this, e);
					r ? r[1] = t : this.a.push([e, t])
				},
				delete: function(e) {
					var t = f(this.a, (function(t) {
						return t[0] === e
					}));
					return ~t && this.a.splice(t, 1), !!~t
				}
			}, e.exports = {
				getConstructor: function(e, t, r, a) {
					var u = e((function(e, i) {
						o(e, u, t, "_i"), e._t = t, e._i = p++, e._l = void 0, null != i && l(i, r, e[a], e)
					}));
					return i(u.prototype, {
						delete: function(e) {
							if (!s(e)) return !1;
							var r = n(e);
							return !0 === r ? g(d(this, t))
								.delete(e) : r && c(r, this._i) && delete r[this._i]
						},
						has: function(e) {
							if (!s(e)) return !1;
							var r = n(e);
							return !0 === r ? g(d(this, t))
								.has(e) : r && c(r, this._i)
						}
					}), u
				},
				def: function(e, t, r) {
					var i = n(a(t), !0);
					return !0 === i ? g(e)
						.set(t, r) : i[e._i] = r, e
				},
				ufstore: g
			}
		}, function(e, t, r) {
			var i = r(22),
				n = r(6);
			e.exports = function(e) {
				if (void 0 === e) return 0;
				var t = i(e),
					r = n(t);
				if (t !== r) throw RangeError("Wrong length!");
				return r
			}
		}, function(e, t, r) {
			var i = r(38),
				n = r(56),
				a = r(1),
				s = r(2)
				.Reflect;
			e.exports = s && s.ownKeys || function(e) {
				var t = i.f(a(e)),
					r = n.f;
				return r ? t.concat(r(e)) : t
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(57),
				n = r(4),
				a = r(6),
				s = r(20),
				o = r(5)("isConcatSpreadable");
			e.exports = function e(t, r, l, u, c, d, h, f) {
				for (var p, g, v = c, m = 0, _ = !!h && s(h, f, 3); m < u;) {
					if (m in l) {
						if (p = _ ? _(l[m], m, r) : l[m], g = !1, n(p) && (g = void 0 !== (g = p[o]) ? !!g : i(p)), g && d > 0) v = e(t, r, p, a(p.length), v, d - 1) - 1;
						else {
							if (v >= 9007199254740991) throw TypeError();
							t[v] = p
						}
						v++
					}
					m++
				}
				return v
			}
		}, function(e, t, r) {
			var i = r(6),
				n = r(79),
				a = r(25);
			e.exports = function(e, t, r, s) {
				var o = String(a(e)),
					l = o.length,
					u = void 0 === r ? " " : String(r),
					c = i(t);
				if (c <= l || "" == u) return o;
				var d = c - l,
					h = n.call(u, Math.ceil(d / u.length));
				return h.length > d && (h = h.slice(0, d)), s ? h + o : o + h
			}
		}, function(e, t, r) {
			var i = r(7),
				n = r(35),
				a = r(16),
				s = r(51)
				.f;
			e.exports = function(e) {
				return function(t) {
					for (var r, o = a(t), l = n(o), u = l.length, c = 0, d = []; u > c;) r = l[c++], i && !s.call(o, r) || d.push(e ? [r, o[r]] : o[r]);
					return d
				}
			}
		}, function(e, t, r) {
			var i = r(45),
				n = r(134);
			e.exports = function(e) {
				return function() {
					if (i(this) != e) throw TypeError(e + "#toJSON isn't generic");
					return n(this)
				}
			}
		}, function(e, t, r) {
			var i = r(41);
			e.exports = function(e, t) {
				var r = [];
				return i(e, !1, r.push, r, t), r
			}
		}, function(e, t) {
			e.exports = Math.scale || function(e, t, r, i, n) {
				return 0 === arguments.length || e != e || t != t || r != r || i != i || n != n ? NaN : e === 1 / 0 || e === -1 / 0 ? e : (e - t) * (n - i) / (r - t) + i
			}
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = {
				PC: "pc",
				MB: "mb"
			}
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}(),
				n = u(r(98)),
				a = u(r(136)),
				s = r(138);
			r(361);
			var o = u(r(54)),
				l = (u(r(139)), u(r(99)));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function d(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var h = function(e) {
				function t() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					c(this, t);
					var r = {
							target: null,
							source: null,
							autoplay: !1
						},
						i = d(this, (t.__proto__ || Object.getPrototypeOf(t))
							.call(this));
					return i.option = Object.assign({}, r, e), i.rollBarrage_ = !1, i.timer_ = null, i.isFullScreen_ = !1, i.createElement_(), i
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), i(t, [{
					key: "createElement_",
					value: function() {
						var e = this,
							t = this.option.target;
						t.className = "sv-target";
						var r = this.video_ = document.createElement("VIDEO");
						r.setAttribute("width", "100%"), r.setAttribute("height", "100%"), r.autoplay = this.option.autoplay, r.onloadedmetadata = function() {
							r.currentTime = e.option.currentTime
						}, r.loop = this.option.loop, r.muted = this.option.muted, r.playbackRate = this.option.playbackRate, r.poster = this.option.poster, r.volume = this.option.volume, t.appendChild(r), this.createLoading_(), this.addSource_(), this.createControlContainer_(t);
						var i = this.option.leftControls,
							n = this.option.rightControls,
							a = this.option.centerControls;
						i.length > 0 && i.forEach((function(t) {
							e.addControlLeft_(t)
						})), n.length > 0 && n.forEach((function(t) {
							e.addControlRight_(t)
						})), a.length > 0 && a.forEach((function(t) {
							e.addControlCenter_(t)
						})), this.listenerEvents_(), this.pauseMenu_(t), this.bindEventVideo_()
					}
				}, {
					key: "bindEventVideo_",
					value: function() {
						var e = this;
						this.video_.onclick = function() {
							e.isPlay_() ? e.pause_() : e.play_()
						};
						var t = function() {
							e.control_.classList.remove("hide"), e.sourceType !== l.default.M3U8 && e.sourceType !== l.default.FLV && e.progressBar_.classList.remove("hide"), null !== e.timer_ && clearTimeout(e.timer_), e.timer_ = setTimeout((function() {
								e.control_.classList.add("hide"), e.progressBar_.classList.add("hide"), clearTimeout(e.timer_)
							}), 2e3)
						};
						this.video_.onmousemove = t, this.svgPause_.onmousemove = t, this.control_.onmouseover = function(t) {
							null !== e.timer_ && clearTimeout(e.timer_), e.control_.classList.remove("hide"), e.sourceType !== l.default.M3U8 && e.sourceType !== l.default.FLV && e.progressBar_.classList.remove("hide"), (t || window.event)
								.stopPropagation()
						}, this.option.target.onmouseout = function() {
							e.control_.classList.add("hide"), e.progressBar_.classList.add("hide")
						}
					}
				}, {
					key: "pauseMenu_",
					value: function(e) {
						var t = this,
							r = this.svgPause_ = document.createElement("span");
						r.className = "sv-svgPause", r.innerHTML = '<svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter x="-11.2%" y="-10.8%" width="122.4%" height="125.5%" filterUnits="objectBoundingBox" id="pid-1-svgo-a"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1"></feColorMatrix></filter><path d="M52.352 13.5c4.837 0 8.707 4.32 8.647 9.72v21.06C61 49.62 57.128 54 52.29 54h-2.479c0 1.681-1.452 3-3.206 3S43.4 55.62 43.4 54H20.841c0 1.681-1.452 3-3.204 3-1.756 0-3.206-1.38-3.206-3h-2.722C6.87 54 3 49.68 3 44.28V23.22c0-5.4 3.87-9.72 8.709-9.72h11.25l-4.78-4.44c-.725-.661-.725-1.8 0-2.52.424-.36.908-.54 1.391-.54.546 0 1.029.18 1.392.54l7.5 6.96h7.318l7.5-6.96c.422-.36.907-.54 1.39-.54.544 0 1.029.18 1.392.54.725.659.725 1.8 0 2.52l-4.78 4.44h11.07zM26.527 45.54l17.418-10.08c1.45-.901 1.45-2.221 0-3.122L26.527 22.2c-1.452-.84-2.662-.12-2.662 1.56v20.22c0 1.74 1.21 2.4 2.662 1.561z" id="pid-1-svgo-b"></path></defs><g fill="none" fill-rule="evenodd"><use fill="#000" filter="url(#pid-1-svgo-a)" xlink:href="#pid-1-svgo-b"></use><use fill-opacity=".7" fill="#FFF" xlink:href="#pid-1-svgo-b"></use><path d="M26.527 45.541c-1.452.84-2.662.18-2.662-1.56V23.76c0-1.68 1.21-2.4 2.662-1.56L43.945 32.34c1.45.9 1.45 2.22 0 3.121L26.527 45.541z" fill="#000" opacity=".06"></path></g></svg>', e.appendChild(r), r.onclick = function() {
							t.play_()
						}
					}
				}, {
					key: "createControlContainer_",
					value: function(e) {
						var t = this,
							r = this.control_ = document.createElement("div");
						r.className = "sv-control hide", e.appendChild(r);
						var i = document.createElement("div");
						i.className = "sv-play-container", r.appendChild(i);
						var n = this.playMenu_ = document.createElement("button");
						n.className = "sv-playBtn", i.appendChild(n);
						var s = this.btnInner_ = document.createElement("span");
						s.innerHTML = "&#xe60f;", s.className = "sv-font sv-play", n.appendChild(s);
						var o = this.leftControl_ = document.createElement("div");
						o.className = "sv-control-left", i.appendChild(o);
						var u = document.createElement("div");
						u.className = "sv-time", i.appendChild(u);
						var c = this.timeStart_ = document.createElement("span");
						c.className = "sv-time-s", c.innerHTML = "00:00";
						var d = document.createElement("span");
						d.className = "sv-time-split", d.innerHTML = "/";
						var h = this.timeEnd_ = document.createElement("span");
						h.className = "sv-time-e", h.innerHTML = "00:00", u.appendChild(c), u.appendChild(d), u.appendChild(h);
						var f = this.controlCenter_ = document.createElement("div");
						f.className = "sv-control-c", r.appendChild(f);
						var p = this.controlRight_ = document.createElement("div");
						p.className = "sv-control-r", r.appendChild(p);
						var g = this.muteMenu_ = document.createElement("div");
						g.className = "showMute", p.appendChild(g);
						var v = this.muteInner_ = document.createElement("span");
						v.innerHTML = "&#xe753;", v.className = "sv-font sv-play", g.appendChild(v), this.option.mode === a.default.MB && (g.style.display = "none");
						var m = this.mutePanel_ = document.createElement("div");
						m.className = "sv-mutePanel hide", g.appendChild(m);
						var _ = this.muteNum_ = document.createElement("div");
						_.className = "sv-mute-num", _.innerHTML = "100";
						var y = this.muteSlider_ = document.createElement("div");
						y.className = "sv-mute-slider", m.appendChild(_), m.appendChild(y);
						var E = this.muteSliderRange_ = document.createElement("div");
						E.className = "sv-mute-sliderRange", y.appendChild(E);
						var b = this.muteSliderButton_ = document.createElement("button");
						b.className = "sv-mute-button", y.appendChild(b);
						var S = this.progressBar_ = document.createElement("div");
						S.className = "sv-progressBar hide", e.appendChild(S);
						var T = this.cacheProgress_ = document.createElement("div");
						T.className = "sv-cacheProgress", S.appendChild(T);
						var A = this.progressNum_ = document.createElement("div");
						A.className = "sv-progressNum", S.appendChild(A);
						var w = this.progressBtn_ = document.createElement("div");
						w.className = "sv-progressBtn hide";
						var R = document.createElement("div");
						w.appendChild(R), S.appendChild(w), this.sliderRange_(b, E), this.setVolume_(this.option.volume), this.setMuteIcon_(), this.setEventDefaultControl_(), n.onclick = function() {
							t.isPlay_() ? (t.pause_(), s.innerHTML = "&#xe60f;") : (t.play_(), s.innerHTML = "&#xe693;")
						}, this.isPip_ = !1;
						var L = document.createElement("div");
						L.className = "sv-picinpic sv-font", this.option.target.appendChild(L), L.innerHTML = '<span class="sv-pic-pic">&#xe613;</span><span id="sv-hzh">画中画</span>', L.onclick = function() {
							t.isPip_ ? t.leavePicInPic_() : t.enterPicInPic_()
						};
						var k = window.navigator.userAgent.indexOf("Chrome") > -1;
						this.option.mode === a.default.MB && L.classList.add("hide"), this.option.showPictureInPicture && k || L.classList.add("hide"), "function" != typeof this.video_.requestPictureInPicture && L.classList.add("hide"), this.sourceType !== l.default.M3U8 && this.sourceType !== l.default.FLV || (this.progressBar_.classList.add("hide"), u.classList.add("hide"))
					}
				}, {
					key: "setEventDefaultControl_",
					value: function() {
						var e = this,
							t = this.muteMenu_,
							r = this.mutePanel_,
							i = this.progressBar_,
							n = this.progressBtn_;
						t.onmouseover = function() {
							r.classList.remove("hide")
						};
						var a = null;
						t.onmouseleave = function() {
							a = setTimeout((function() {
								r.classList.add("hide"), clearTimeout(a)
							}), 500)
						}, r.onmouseover = function() {
							r.classList.remove("hide"), clearTimeout(a)
						}, r.onmouseleave = function() {
							r.classList.remove("hide")
						}, t.onclick = function(t) {
							e.isMuted_() ? e.setMuted_(!1) : e.setMuted_(!0), t.stopPropagation()
						}, r.onclick = function(e) {
							e.stopPropagation()
						}, i.onmouseover = function() {
							i.style.height = "4px", n.classList.remove("hide"), null !== e.timer_ && clearTimeout(e.timer_), e.control_.classList.remove("hide"), e.progressBar_.classList.remove("hide")
						}, i.onmouseout = function() {
							i.style.height = "2px", n.classList.add("hide")
						}, n.onmousedown = function(t) {
							var r = t.clientX,
								a = n.offsetLeft,
								o = i.offsetWidth - n.offsetWidth,
								l = i.clientWidth,
								u = 0;
							document.onmousemove = function(t) {
								e.pause_();
								var c = t.clientX,
									d = Math.min(o, Math.max(-2, a + (c - r))) / l,
									h = 100 * d + "%";
								n.style.left = h, e.progressNum_.style.width = h;
								var f = e.getAllTime_();
								u = f * d, e.timeStart_.innerHTML = (0, s.formatSeconds)(u), n.classList.remove("hide"), i.style.height = "4px", t.preventDefault()
							}, document.onmouseup = function() {
								document.onmousemove = null, document.onmouseup = null, e.play_(), e.setCurrentTime_(u), e.clearBarrages_(), i.style.height = "2px", n.classList.add("hide")
							}, t.preventDefault()
						}
					}
				}, {
					key: "sliderRange_",
					value: function(e, t) {
						var r = this;
						e.onmousedown = function(i) {
							r._isCursor = !0;
							var n = (i || event)
								.clientY,
								a = e.offsetTop;
							document.onmousemove = function(i) {
								var s = i.clientY - n + a;
								if (!(s > 50 || s < 0)) {
									e.style.top = s + "px";
									var o = 50 - s;
									t.style.height = o + "px", r.setVolume_(o / 50)
								}
							}, document.onmouseup = function() {
								document.onmousemove = null, document.onmouseup = null, r._isCursor = !1
							}
						}
					}
				}, {
					key: "xhrBlob",
					value: function(e) {
						window.URL = window.URL || window.webkitURL;
						var t = new XMLHttpRequest;
						t.open("GET", e, !0), t.responseType = "blob", t.onload = function() {
							if (200 === this.status) {
								var e = this.response;
								this.video_.onload = function(e) {
									window.URL.revokeObjectURL(this.video_.src)
								}, this.video_.src = window.URL.createObjectURL(e)
							}
						}, t.send()
					}
				}, {
					key: "addSource_",
					value: function(e) {
						var t = this;
						this.showLoad_();
						var r = this.video_;
						switch (this.source_ = e || this.option.source, this.sourceType = this.source_.getType()) {
							case l.default.MP4:
								this.source_.option.blob ? this.xhrBlob(this.source_.option.src) : r.appendChild(this.source_.getSource());
								break;
							case l.default.M3U8:
								this.source_.getSource()
									.attachMedia(r);
								break;
							case l.default.FLV:
								var i = this.source_.getSource();
								i.attachMediaElement(r), i.load()
						}
						r.ontimeupdate = null, r.ontimeupdate = function() {
							t.ontimeupdate_(r), r.paused ? t.btnInner_.innerHTML = "&#xe60f;" : t.btnInner_.innerHTML = "&#xe693;", t.timeStart_.innerHTML = (0, s.formatSeconds)(t.getCurrentTime_()), t.setMuteIcon_(), t.setProgressBarStyle_()
						};
						var n = setInterval((function() {
							t.video_.readyState && (t.cacheProgress_.style.width = t.progressNum_.style.width = "0%", t.progressBtn_.style.left = "0px", t.timeEnd_.innerHTML = (0, s.formatSeconds)(t.getAllTime_()), t.onready_(), clearInterval(n))
						}))
					}
				}, {
					key: "setProgressBarStyle_",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.video_,
							t = this.getAllTime_();
						if (t > 0) {
							for (var r = 0; r < e.buffered.length; r++)
								if (e.buffered.start(e.buffered.length - 1 - r) < e.currentTime) {
									var i = e.buffered.end(e.buffered.length - 1 - r) / t * 100 + "%";
									this.cacheProgress_.style.width = i;
									break
								} var n = this.getCurrentTime_();
							this.progressNum_.style.width = n / t * 100 + "%";
							var a = this.progressBar_.clientWidth * (n / t);
							this.isReady_() && (this.progressBtn_.style.left = a + "px", this.hideLoad_())
						}
					}
				}, {
					key: "initTimes_",
					value: function() {
						var e = this,
							t = this.video_;
						t.ontimeupdate = null, t.ontimeupdate = function() {
							e.ontimeupdate_(t), t.paused ? e.btnInner_.innerHTML = "&#xe60f;" : e.btnInner_.innerHTML = "&#xe693;", e.timeStart_.innerHTML = (0, s.formatSeconds)(e.getCurrentTime_()), e.setMuteIcon_(), e.setProgressBarStyle_()
						};
						var r = setInterval((function() {
							e.video_.readyState && (e.cacheProgress_.style.width = e.progressNum_.style.width = "0%", e.progressBtn_.style.left = "0px", e.timeEnd_.innerHTML = (0, s.formatSeconds)(e.getAllTime_()), e.onready_(), clearInterval(r))
						}))
					}
				}, {
					key: "createLoading_",
					value: function() {
						var e = this.loading_ = document.createElement("div"),
							t = this.option.loadingNode;
						null !== t ? "string" == typeof t ? e.innerHTML = t : e.appendChild(t) : e.innerHTML = '\n    <div class="sv-container-loading">\n\t\t\t<div class="sv-one sv-common"></div>\n\t\t\t<div class="sv-two sv-common"></div>\n\t\t\t<div class="sv-three sv-common"></div>\n\t\t\t<div class="sv-four sv-common"></div>\n\t\t\t<div class="sv-five sv-common"></div>\n\t\t\t<div class="sv-six sv-common"></div>\n\t\t\t<div class="sv-seven sv-common"></div>\n\t\t\t<div class="sv-eight sv-common"></div>\n\t\t</div>\n    ', e.className = "sv-loading hide", this.option.target.appendChild(e)
					}
				}, {
					key: "showLoad_",
					value: function() {
						this.loading_.classList.remove("hide")
					}
				}, {
					key: "hideLoad_",
					value: function() {
						this.loading_.classList.add("hide")
					}
				}, {
					key: "setMuteIcon_",
					value: function() {
						this.isMuted_() ? this.muteInner_.innerHTML = "&#xe63e;" : this.muteInner_.innerHTML = "&#xe753;"
					}
				}, {
					key: "ontimeupdate_",
					value: function() {}
				}, {
					key: "onready_",
					value: function() {}
				}, {
					key: "play_",
					value: function() {
						this.showLoad_(), this.video_.play(), this.sourceType === l.default.M3U8 && this.setCurrentTime_(this.getAllTime_())
					}
				}, {
					key: "pause_",
					value: function() {
						this.video_.pause()
					}
				}, {
					key: "getAllTime_",
					value: function() {
						return this.video_.duration
					}
				}, {
					key: "getCurrentTime_",
					value: function() {
						return this.video_.currentTime
					}
				}, {
					key: "setCurrentTime_",
					value: function(e) {
						this.video_.currentTime = e, this.showLoad_()
					}
				}, {
					key: "setCurrentTimeClone_",
					value: function(e) {
						this.video_.currentTime = e;
						var t = this.getAllTime_();
						this.progressNum_.style.width = e / t * 100 + "%";
						var r = this.progressBar_.clientWidth * (e / t);
						this.isReady_() && (this.progressBtn_.style.left = r - 16 + "px")
					}
				}, {
					key: "getCurrentByPx_",
					value: function(e) {
						return this.getAllTime_() * (e / this.progressBar_.clientWidth)
					}
				}, {
					key: "isEnded_",
					value: function() {
						return this.video_.ended
					}
				}, {
					key: "setLoop_",
					value: function() {
						var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						this.video_.loop = e
					}
				}, {
					key: "isLoop_",
					value: function() {
						return this.video_.loop
					}
				}, {
					key: "setMuted_",
					value: function() {
						var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						this.video_.muted = e, this.setMuteIcon_()
					}
				}, {
					key: "isMuted_",
					value: function() {
						return this.video_.muted
					}
				}, {
					key: "getNetworkState_",
					value: function() {
						return this.video_.networkState
					}
				}, {
					key: "isPlay_",
					value: function() {
						return !this.video_.paused
					}
				}, {
					key: "getPlaybackRate_",
					value: function() {
						return this.video_.playbackRate
					}
				}, {
					key: "setPlaybackRate_",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
						this.video_.playbackRate = e
					}
				}, {
					key: "setPoster_",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
						this.video_.poster = e
					}
				}, {
					key: "setVolume_",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
						this.video_.volume = e, this.muteNum_.innerHTML = parseInt(100 * e), this.muteSliderRange_.style.height = 100 * e / 2 + "px", this.muteSliderButton_.style.top = 50 - 100 * e / 2 + "px", e > 0 ? this.setMuted_(!1) : this.setMuted_(!0)
					}
				}, {
					key: "getVolume_",
					value: function() {
						return this.video_.volume
					}
				}, {
					key: "isReady_",
					value: function() {
						return 4 === this.video_.readyState
					}
				}, {
					key: "addControlLeft_",
					value: function(e) {
						this.leftControl_.appendChild(e.init_(this))
					}
				}, {
					key: "addControlRight_",
					value: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						t ? this.controlRight_.prepend(e.init_(this)) : this.controlRight_.appendChild(e.init_(this))
					}
				}, {
					key: "addControlCenter_",
					value: function(e) {
						this.controlCenter_.appendChild(e.init_(this))
					}
				}, {
					key: "fullScreen_",
					value: function() {
						var e = document.documentElement;
						e.requestFullScreen ? e.requestFullScreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen && e.webkitRequestFullScreen(), this.option.target.classList.add("sv-full-screen"), this.setProgressBarStyle_(), this.videoEvent_(o.default.FULL_SCREEN), this.isFullScreen_ = !0, this.setControlFullScreen_(1)
					}
				}, {
					key: "cancelFullScreen_",
					value: function() {
						var e = document;
						e.exitFullscreen ? e.exitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.webkitCancelFullScreen && e.webkitCancelFullScreen(), this.option.target.classList.remove("sv-full-screen"), this.setProgressBarStyle_(), this.videoEvent_(o.default.CANCEL_FULL_SCREEN), this.isFullScreen_ = !1, this.setControlFullScreen_(0)
					}
				}, {
					key: "setControlFullScreen_",
					value: function() {
						var e = this,
							t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						this.option.leftControls.forEach((function(r) {
							"fullScreenMenu" === r.type_ && e.setFullScreenMenu(t, r)
						})), this.option.rightControls.forEach((function(r) {
							"fullScreenMenu" === r.type_ && e.setFullScreenMenu(t, r)
						})), this.option.centerControls.forEach((function(r) {
							"fullScreenMenu" === r.type_ && e.setFullScreenMenu(t, r)
						}))
					}
				}, {
					key: "setFullScreenMenu",
					value: function(e, t) {
						0 === e ? (t.fullScreenBtn_.innerHTML = "&#xe6cc;", t.isFull_ = !1) : (t.fullScreenBtn_.innerHTML = "&#xe71f;", t.isFull_ = !0)
					}
				}, {
					key: "addBarrage_",
					value: function(e) {
						var t = null,
							r = "#ffffff",
							i = "14px",
							n = "微软雅黑",
							a = "100",
							s = null,
							o = null;
						"string" == typeof e ? t = e : (t = e.getText(), r = e.getColor(), i = e.getFontSize(), n = e.getFontFamily(), a = e.getFontWeight(), s = e.getLeftDom(), o = e.getRightDom());
						var l = this.option.target,
							u = document.createElement("div");
						u.className = "sv-brrage";
						var c = document.createElement("div");
						c.className = "sv-brrage-left", null !== s && c.appendChild(s), null !== o && c.appendChild(o);
						var d = document.createElement("div");
						d.className = "sv-brrage-center", d.innerHTML = t, d.style.color = r, d.style.fontSize = i, d.style.fontFamily = n, d.style.fontWeight = a;
						var h = document.createElement("div");
						h.className = "sv-brrage-right", u.appendChild(c), u.appendChild(d), u.appendChild(h), l.appendChild(u), l.style.overflow = "hidden";
						var f = l.getBoundingClientRect(),
							p = f.right - f.left,
							g = f.bottom - f.top;
						u.style.left = p + "px", u.style.top = (g - 80) * Number(Math.random()
							.toFixed(2)) + "px";
						var v = null,
							m = function e(t) {
								var r = Number(new Date);
								e.last = e.last || r, e.timer = e.timer || t;
								var i = u.offsetLeft,
									n = u.getBoundingClientRect();
								i < n.left - n.right ? l.removeChild(u) : (r - e.last >= e.timer && (e.last = r, i -= 3, u.style.left = i + "px"), v = requestAnimationFrame(e))
							};
						this.rollBarrage_ && m(50 * Number(Math.random()
							.toFixed(2))), this.addEventListener("pause", (function() {
							cancelAnimationFrame(v)
						})), this.addEventListener("play", (function() {
							m(50 * Number(Math.random()
								.toFixed(2)))
						}))
					}
				}, {
					key: "clearBarrages_",
					value: function() {
						for (var e = document.getElementsByClassName("sv-brrage"), t = 0; t < e.length; t++) {
							var r = e[t];
							try {
								this.option.target.removeChild(r)
							} catch (e) {}
						}
						if (e.length > 0) try {
							this.clearBarrages_()
						} catch (e) {}
					}
				}, {
					key: "enterPicInPic_",
					value: function() {
						this.video_.requestPictureInPicture()
					}
				}, {
					key: "leavePicInPic_",
					value: function() {
						document.exitPictureInPicture()
					}
				}, {
					key: "isFull",
					value: function() {
						var e = document.mozFullScreen || document.fullScreen || document.webkitIsFullScreen || document.webkitRequestFullScreen || document.mozRequestFullScreen || document.msFullscreenEnabled;
						return void 0 === e && (e = !1), e
					}
				}, {
					key: "listenerEvents_",
					value: function() {
						var e = this;
						window.onresize = function() {
							e.isFull() || e.cancelFullScreen_()
						}, this.eventFn_("play", o.default.PLAY), this.eventFn_("loadstart", o.default.LOADS_SART), this.eventFn_("suspend", o.default.SUSPEND), this.eventFn_("abort", o.default.ABORT), this.eventFn_("progress", o.default.PROGRESS), this.eventFn_("error", o.default.ERROR), this.eventFn_("stalled", o.default.STALLED), this.eventFn_("pause", o.default.PAUSE), this.eventFn_("loadedmetadata", o.default.LOADED_METADATA), this.eventFn_("waiting", o.default.WAITING), this.eventFn_("playing", o.default.PLAYING), this.eventFn_("timeupdate", o.default.TIME_UPDATE), this.eventFn_("ended", o.default.ENDED), this.eventFn_("ratechange", o.default.RATE_CHANGE), this.eventFn_("volumechange", o.default.VOLUME_CHANGE), this.eventFn_("enterpictureinpicture", o.default.ENTER_PIP), this.eventFn_("leavepictureinpicture", o.default.LEAVE_PIP)
					}
				}, {
					key: "eventFn_",
					value: function(e, t) {
						var r = this;
						this.video_.addEventListener(e, (function() {
							switch (r.dispatchEvent(t), t) {
								case o.default.ERROR:
									console.error("error");
									break;
								case o.default.ABORT:
									console.error("abort");
									break;
								case o.default.PLAY:
									r.rollBarrage_ = !0, r.svgPause_.classList.add("hide");
									break;
								case o.default.PAUSE:
									r.rollBarrage_ = !1, r.svgPause_.classList.remove("hide");
									break;
								case o.default.LOADED_METADATA:
									r.hideLoad_();
									break;
								case o.default.WAITING:
									r.showLoad_();
									break;
								case o.default.ENTER_PIP:
									document.getElementById("sv-hzh")
										.innerHTML = "画中画使用中", r.isPip_ = !0;
									break;
								case o.default.LEAVE_PIP:
									document.getElementById("sv-hzh")
										.innerHTML = "画中画", r.isPip_ = !1
							}
							r.videoEvent_(t)
						}))
					}
				}, {
					key: "videoEvent_",
					value: function() {}
				}]), t
			}(n.default);
			t.default = h
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.formatSeconds = function(e) {
				var t = parseInt(e),
					r = 0,
					i = 0;
				t > 60 && (r = parseInt(t / 60), t = parseInt(t % 60), r > 60 && (i = parseInt(r / 60), r = parseInt(r % 60)));
				var n = String(parseInt(t));
				return n = t < 10 > 0 ? "0" + parseInt(t) : String(parseInt(t)), n = r < 10 > 0 ? "0" + parseInt(r) + ":" + n : String(parseInt(r)) + ":" + n, i > 0 && (n = String(parseInt(i)) + ":" + n), n
			}
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}(),
				n = r(69);

			function a(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			var s = function() {
				function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					a(this, e);
					var i = {
						color: "#ffffff",
						fontSize: 14,
						fontFamily: "微软雅黑",
						fontWeight: 600,
						text: t,
						area: .5,
						leftDom: null,
						rightDom: null
					};
					this.option = (0, n.assign)({}, i, r)
				}
				return i(e, [{
					key: "getText",
					value: function() {
						return this.option.text
					}
				}, {
					key: "getColor",
					value: function() {
						return this.option.color
					}
				}, {
					key: "getFontSize",
					value: function() {
						return this.option.fontSize + "px"
					}
				}, {
					key: "getFontFamily",
					value: function() {
						return this.option.fontFamily
					}
				}, {
					key: "getMinTop",
					value: function(e) {
						return e.clientHeight - e.clientHeight * (1 - this.option.area) + 80
					}
				}, {
					key: "getLeftDom",
					value: function() {
						return this.option.leftDom
					}
				}, {
					key: "getRightDom",
					value: function() {
						return this.option.rightDom
					}
				}, {
					key: "getFontWeight",
					value: function() {
						return this.option.fontWeight
					}
				}]), e
			}();
			t.default = s
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}(),
				n = o(r(350)),
				a = o(r(360)),
				s = o(r(99));

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			var u = function() {
				function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					l(this, e);
					var r = {
						src: "",
						blob: !1,
						type: s.default.MP4
					};
					switch (this.option = Object.assign({}, r, t), this.source_ = null, this.getType()) {
						case s.default.MP4:
							this.createSource_();
							break;
						case s.default.M3U8:
							this.createHls_();
							break;
						case s.default.FLV:
							this.createFlv_()
					}
				}
				return i(e, [{
					key: "createSource_",
					value: function() {
						(this.source_ = document.createElement("source"))
						.setAttribute("src", this.option.src)
					}
				}, {
					key: "createHls_",
					value: function() {
						if (n.default.isSupported()) {
							var e = new n.default;
							e.loadSource(this.option.src), this.source_ = e
						}
					}
				}, {
					key: "createFlv_",
					value: function() {
						if (a.default.isSupported()) {
							var e = a.default.createPlayer({
								type: "flv",
								url: this.option.src
							});
							this.source_ = e
						}
					}
				}, {
					key: "getSource",
					value: function() {
						return this.source_
					}
				}, {
					key: "getType",
					value: function() {
						return this.option.type
					}
				}]), e
			}();
			t.default = u
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), r(142);
			var i = d(r(344)),
				n = d(r(140)),
				a = d(r(355)),
				s = d(r(48)),
				o = d(r(356)),
				l = d(r(357)),
				u = d(r(358)),
				c = d(r(359));

			function d(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			t.default = {
				Svideo: i.default,
				Barrage: a.default,
				VideoSource: n.default,
				Control: s.default,
				NextControl: o.default,
				FullScreenControl: l.default,
				DbspeenControl: u.default,
				BarrageControl: c.default
			}
		}, function(e, t, r) {
			"use strict";
			(function(e) {
				if (r(143), r(340), r(341), e._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
				e._babelPolyfill = !0;

				function t(e, t, r) {
					e[t] || Object.defineProperty(e, t, {
						writable: !0,
						configurable: !0,
						value: r
					})
				}
				t(String.prototype, "padLeft", "".padStart), t(String.prototype, "padRight", "".padEnd), "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",")
					.forEach((function(e) {
						[][e] && t(Array, e, Function.call.bind([][e]))
					}))
			})
			.call(this, r(70))
		}, function(e, t, r) {
			r(144), r(147), r(148), r(149), r(150), r(151), r(152), r(153), r(154), r(155), r(156), r(157), r(158), r(159), r(160), r(161), r(162), r(163), r(164), r(165), r(166), r(167), r(168), r(169), r(170), r(171), r(172), r(173), r(174), r(175), r(176), r(177), r(178), r(179), r(180), r(181), r(182), r(183), r(184), r(185), r(186), r(187), r(188), r(189), r(190), r(191), r(192), r(193), r(194), r(195), r(196), r(197), r(198), r(199), r(200), r(201), r(202), r(203), r(204), r(205), r(206), r(207), r(208), r(209), r(210), r(211), r(212), r(213), r(214), r(215), r(216), r(217), r(218), r(219), r(220), r(221), r(222), r(224), r(225), r(227), r(228), r(229), r(230), r(231), r(232), r(233), r(235), r(236), r(237), r(238), r(239), r(240), r(241), r(242), r(243), r(244), r(245), r(246), r(247), r(91), r(248), r(119), r(249), r(120), r(250), r(251), r(252), r(253), r(254), r(123), r(125), r(126), r(255), r(256), r(257), r(258), r(259), r(260), r(261), r(262), r(263), r(264), r(265), r(266), r(267), r(268), r(269), r(270), r(271), r(272), r(273), r(274), r(275), r(276), r(277), r(278), r(279), r(280), r(281), r(282), r(283), r(284), r(285), r(286), r(287), r(288), r(289), r(290), r(291), r(292), r(293), r(294), r(295), r(296), r(297), r(298), r(299), r(300), r(301), r(302), r(303), r(304), r(305), r(306), r(307), r(308), r(309), r(310), r(311), r(312), r(313), r(314), r(315), r(316), r(317), r(318), r(319), r(320), r(321), r(322), r(323), r(324), r(325), r(326), r(327), r(328), r(329), r(330), r(331), r(332), r(333), r(334), r(335), r(336), r(337), r(338), r(339), e.exports = r(19)
		}, function(e, t, r) {
			"use strict";
			var i = r(2),
				n = r(15),
				a = r(7),
				s = r(0),
				o = r(13),
				l = r(31)
				.KEY,
				u = r(3),
				c = r(49),
				d = r(44),
				h = r(34),
				f = r(5),
				p = r(101),
				g = r(72),
				v = r(146),
				m = r(57),
				_ = r(1),
				y = r(4),
				E = r(9),
				b = r(16),
				S = r(24),
				T = r(33),
				A = r(37),
				w = r(104),
				R = r(17),
				L = r(56),
				k = r(8),
				O = r(35),
				D = R.f,
				C = k.f,
				I = w.f,
				x = i.Symbol,
				P = i.JSON,
				M = P && P.stringify,
				F = f("_hidden"),
				N = f("toPrimitive"),
				B = {}.propertyIsEnumerable,
				U = c("symbol-registry"),
				j = c("symbols"),
				G = c("op-symbols"),
				V = Object.prototype,
				K = "function" == typeof x && !!L.f,
				H = i.QObject,
				W = !H || !H.prototype || !H.prototype.findChild,
				z = a && u((function() {
					return 7 != A(C({}, "a", {
							get: function() {
								return C(this, "a", {
										value: 7
									})
									.a
							}
						}))
						.a
				})) ? function(e, t, r) {
					var i = D(V, t);
					i && delete V[t], C(e, t, r), i && e !== V && C(V, t, i)
				} : C,
				q = function(e) {
					var t = j[e] = A(x.prototype);
					return t._k = e, t
				},
				Y = K && "symbol" == typeof x.iterator ? function(e) {
					return "symbol" == typeof e
				} : function(e) {
					return e instanceof x
				},
				X = function(e, t, r) {
					return e === V && X(G, t, r), _(e), t = S(t, !0), _(r), n(j, t) ? (r.enumerable ? (n(e, F) && e[F][t] && (e[F][t] = !1), r = A(r, {
						enumerable: T(0, !1)
					})) : (n(e, F) || C(e, F, T(1, {})), e[F][t] = !0), z(e, t, r)) : C(e, t, r)
				},
				$ = function(e, t) {
					_(e);
					for (var r, i = v(t = b(t)), n = 0, a = i.length; a > n;) X(e, r = i[n++], t[r]);
					return e
				},
				J = function(e) {
					var t = B.call(this, e = S(e, !0));
					return !(this === V && n(j, e) && !n(G, e)) && (!(t || !n(this, e) || !n(j, e) || n(this, F) && this[F][e]) || t)
				},
				Q = function(e, t) {
					if (e = b(e), t = S(t, !0), e !== V || !n(j, t) || n(G, t)) {
						var r = D(e, t);
						return !r || !n(j, t) || n(e, F) && e[F][t] || (r.enumerable = !0), r
					}
				},
				Z = function(e) {
					for (var t, r = I(b(e)), i = [], a = 0; r.length > a;) n(j, t = r[a++]) || t == F || t == l || i.push(t);
					return i
				},
				ee = function(e) {
					for (var t, r = e === V, i = I(r ? G : b(e)), a = [], s = 0; i.length > s;) !n(j, t = i[s++]) || r && !n(V, t) || a.push(j[t]);
					return a
				};
			K || (o((x = function() {
						if (this instanceof x) throw TypeError("Symbol is not a constructor!");
						var e = h(arguments.length > 0 ? arguments[0] : void 0),
							t = function(r) {
								this === V && t.call(G, r), n(this, F) && n(this[F], e) && (this[F][e] = !1), z(this, e, T(1, r))
							};
						return a && W && z(V, e, {
							configurable: !0,
							set: t
						}), q(e)
					})
					.prototype, "toString", (function() {
						return this._k
					})), R.f = Q, k.f = X, r(38)
				.f = w.f = Z, r(51)
				.f = J, L.f = ee, a && !r(30) && o(V, "propertyIsEnumerable", J, !0), p.f = function(e) {
					return q(f(e))
				}), s(s.G + s.W + s.F * !K, {
				Symbol: x
			});
			for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; te.length > re;) f(te[re++]);
			for (var ie = O(f.store), ne = 0; ie.length > ne;) g(ie[ne++]);
			s(s.S + s.F * !K, "Symbol", {
				for: function(e) {
					return n(U, e += "") ? U[e] : U[e] = x(e)
				},
				keyFor: function(e) {
					if (!Y(e)) throw TypeError(e + " is not a symbol!");
					for (var t in U)
						if (U[t] === e) return t
				},
				useSetter: function() {
					W = !0
				},
				useSimple: function() {
					W = !1
				}
			}), s(s.S + s.F * !K, "Object", {
				create: function(e, t) {
					return void 0 === t ? A(e) : $(A(e), t)
				},
				defineProperty: X,
				defineProperties: $,
				getOwnPropertyDescriptor: Q,
				getOwnPropertyNames: Z,
				getOwnPropertySymbols: ee
			});
			var ae = u((function() {
				L.f(1)
			}));
			s(s.S + s.F * ae, "Object", {
				getOwnPropertySymbols: function(e) {
					return L.f(E(e))
				}
			}), P && s(s.S + s.F * (!K || u((function() {
				var e = x();
				return "[null]" != M([e]) || "{}" != M({
					a: e
				}) || "{}" != M(Object(e))
			}))), "JSON", {
				stringify: function(e) {
					for (var t, r, i = [e], n = 1; arguments.length > n;) i.push(arguments[n++]);
					if (r = t = i[1], (y(t) || void 0 !== e) && !Y(e)) return m(t) || (t = function(e, t) {
						if ("function" == typeof r && (t = r.call(this, e, t)), !Y(t)) return t
					}), i[1] = t, M.apply(P, i)
				}
			}), x.prototype[N] || r(12)(x.prototype, N, x.prototype.valueOf), d(x, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0)
		}, function(e, t, r) {
			e.exports = r(49)("native-function-to-string", Function.toString)
		}, function(e, t, r) {
			var i = r(35),
				n = r(56),
				a = r(51);
			e.exports = function(e) {
				var t = i(e),
					r = n.f;
				if (r)
					for (var s, o = r(e), l = a.f, u = 0; o.length > u;) l.call(e, s = o[u++]) && t.push(s);
				return t
			}
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Object", {
				create: r(37)
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S + i.F * !r(7), "Object", {
				defineProperty: r(8)
					.f
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S + i.F * !r(7), "Object", {
				defineProperties: r(103)
			})
		}, function(e, t, r) {
			var i = r(16),
				n = r(17)
				.f;
			r(26)("getOwnPropertyDescriptor", (function() {
				return function(e, t) {
					return n(i(e), t)
				}
			}))
		}, function(e, t, r) {
			var i = r(9),
				n = r(18);
			r(26)("getPrototypeOf", (function() {
				return function(e) {
					return n(i(e))
				}
			}))
		}, function(e, t, r) {
			var i = r(9),
				n = r(35);
			r(26)("keys", (function() {
				return function(e) {
					return n(i(e))
				}
			}))
		}, function(e, t, r) {
			r(26)("getOwnPropertyNames", (function() {
				return r(104)
					.f
			}))
		}, function(e, t, r) {
			var i = r(4),
				n = r(31)
				.onFreeze;
			r(26)("freeze", (function(e) {
				return function(t) {
					return e && i(t) ? e(n(t)) : t
				}
			}))
		}, function(e, t, r) {
			var i = r(4),
				n = r(31)
				.onFreeze;
			r(26)("seal", (function(e) {
				return function(t) {
					return e && i(t) ? e(n(t)) : t
				}
			}))
		}, function(e, t, r) {
			var i = r(4),
				n = r(31)
				.onFreeze;
			r(26)("preventExtensions", (function(e) {
				return function(t) {
					return e && i(t) ? e(n(t)) : t
				}
			}))
		}, function(e, t, r) {
			var i = r(4);
			r(26)("isFrozen", (function(e) {
				return function(t) {
					return !i(t) || !!e && e(t)
				}
			}))
		}, function(e, t, r) {
			var i = r(4);
			r(26)("isSealed", (function(e) {
				return function(t) {
					return !i(t) || !!e && e(t)
				}
			}))
		}, function(e, t, r) {
			var i = r(4);
			r(26)("isExtensible", (function(e) {
				return function(t) {
					return !!i(t) && (!e || e(t))
				}
			}))
		}, function(e, t, r) {
			var i = r(0);
			i(i.S + i.F, "Object", {
				assign: r(105)
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Object", {
				is: r(106)
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Object", {
				setPrototypeOf: r(76)
					.set
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(45),
				n = {};
			n[r(5)("toStringTag")] = "z", n + "" != "[object z]" && r(13)(Object.prototype, "toString", (function() {
				return "[object " + i(this) + "]"
			}), !0)
		}, function(e, t, r) {
			var i = r(0);
			i(i.P, "Function", {
				bind: r(107)
			})
		}, function(e, t, r) {
			var i = r(8)
				.f,
				n = Function.prototype,
				a = /^\s*function ([^ (]*)/;
			"name" in n || r(7) && i(n, "name", {
				configurable: !0,
				get: function() {
					try {
						return ("" + this)
							.match(a)[1]
					} catch (e) {
						return ""
					}
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(4),
				n = r(18),
				a = r(5)("hasInstance"),
				s = Function.prototype;
			a in s || r(8)
				.f(s, a, {
					value: function(e) {
						if ("function" != typeof this || !i(e)) return !1;
						if (!i(this.prototype)) return e instanceof this;
						for (; e = n(e);)
							if (this.prototype === e) return !0;
						return !1
					}
				})
		}, function(e, t, r) {
			var i = r(0),
				n = r(109);
			i(i.G + i.F * (parseInt != n), {
				parseInt: n
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(110);
			i(i.G + i.F * (parseFloat != n), {
				parseFloat: n
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(2),
				n = r(15),
				a = r(21),
				s = r(78),
				o = r(24),
				l = r(3),
				u = r(38)
				.f,
				c = r(17)
				.f,
				d = r(8)
				.f,
				h = r(46)
				.trim,
				f = i.Number,
				p = f,
				g = f.prototype,
				v = "Number" == a(r(37)(g)),
				m = "trim" in String.prototype,
				_ = function(e) {
					var t = o(e, !1);
					if ("string" == typeof t && t.length > 2) {
						var r, i, n, a = (t = m ? t.trim() : h(t, 3))
							.charCodeAt(0);
						if (43 === a || 45 === a) {
							if (88 === (r = t.charCodeAt(2)) || 120 === r) return NaN
						} else if (48 === a) {
							switch (t.charCodeAt(1)) {
								case 66:
								case 98:
									i = 2, n = 49;
									break;
								case 79:
								case 111:
									i = 8, n = 55;
									break;
								default:
									return +t
							}
							for (var s, l = t.slice(2), u = 0, c = l.length; u < c; u++)
								if ((s = l.charCodeAt(u)) < 48 || s > n) return NaN;
							return parseInt(l, i)
						}
					}
					return +t
				};
			if (!f(" 0o1") || !f("0b1") || f("+0x1")) {
				f = function(e) {
					var t = arguments.length < 1 ? 0 : e,
						r = this;
					return r instanceof f && (v ? l((function() {
						g.valueOf.call(r)
					})) : "Number" != a(r)) ? s(new p(_(t)), r, f) : _(t)
				};
				for (var y, E = r(7) ? u(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), b = 0; E.length > b; b++) n(p, y = E[b]) && !n(f, y) && d(f, y, c(p, y));
				f.prototype = g, g.constructor = f, r(13)(i, "Number", f)
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(22),
				a = r(111),
				s = r(79),
				o = 1..toFixed,
				l = Math.floor,
				u = [0, 0, 0, 0, 0, 0],
				c = "Number.toFixed: incorrect invocation!",
				d = function(e, t) {
					for (var r = -1, i = t; ++r < 6;) i += e * u[r], u[r] = i % 1e7, i = l(i / 1e7)
				},
				h = function(e) {
					for (var t = 6, r = 0; --t >= 0;) r += u[t], u[t] = l(r / e), r = r % e * 1e7
				},
				f = function() {
					for (var e = 6, t = ""; --e >= 0;)
						if ("" !== t || 0 === e || 0 !== u[e]) {
							var r = String(u[e]);
							t = "" === t ? r : t + s.call("0", 7 - r.length) + r
						} return t
				},
				p = function(e, t, r) {
					return 0 === t ? r : t % 2 == 1 ? p(e, t - 1, r * e) : p(e * e, t / 2, r)
				};
			i(i.P + i.F * (!!o && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080)
				.toFixed(0)) || !r(3)((function() {
				o.call({})
			}))), "Number", {
				toFixed: function(e) {
					var t, r, i, o, l = a(this, c),
						u = n(e),
						g = "",
						v = "0";
					if (u < 0 || u > 20) throw RangeError(c);
					if (l != l) return "NaN";
					if (l <= -1e21 || l >= 1e21) return String(l);
					if (l < 0 && (g = "-", l = -l), l > 1e-21)
						if (r = (t = function(e) {
							for (var t = 0, r = e; r >= 4096;) t += 12, r /= 4096;
							for (; r >= 2;) t += 1, r /= 2;
							return t
						}(l * p(2, 69, 1)) - 69) < 0 ? l * p(2, -t, 1) : l / p(2, t, 1), r *= 4503599627370496, (t = 52 - t) > 0) {
							for (d(0, r), i = u; i >= 7;) d(1e7, 0), i -= 7;
							for (d(p(10, i, 1), 0), i = t - 1; i >= 23;) h(1 << 23), i -= 23;
							h(1 << i), d(1, 1), h(2), v = f()
						} else d(0, r), d(1 << -t, 0), v = f() + s.call("0", u);
					return v = u > 0 ? g + ((o = v.length) <= u ? "0." + s.call("0", u - o) + v : v.slice(0, o - u) + "." + v.slice(o - u)) : g + v
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(3),
				a = r(111),
				s = 1..toPrecision;
			i(i.P + i.F * (n((function() {
				return "1" !== s.call(1, void 0)
			})) || !n((function() {
				s.call({})
			}))), "Number", {
				toPrecision: function(e) {
					var t = a(this, "Number#toPrecision: incorrect invocation!");
					return void 0 === e ? s.call(t) : s.call(t, e)
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Number", {
				EPSILON: Math.pow(2, -52)
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(2)
				.isFinite;
			i(i.S, "Number", {
				isFinite: function(e) {
					return "number" == typeof e && n(e)
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Number", {
				isInteger: r(112)
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Number", {
				isNaN: function(e) {
					return e != e
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(112),
				a = Math.abs;
			i(i.S, "Number", {
				isSafeInteger: function(e) {
					return n(e) && a(e) <= 9007199254740991
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Number", {
				MAX_SAFE_INTEGER: 9007199254740991
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Number", {
				MIN_SAFE_INTEGER: -9007199254740991
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(110);
			i(i.S + i.F * (Number.parseFloat != n), "Number", {
				parseFloat: n
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(109);
			i(i.S + i.F * (Number.parseInt != n), "Number", {
				parseInt: n
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(113),
				a = Math.sqrt,
				s = Math.acosh;
			i(i.S + i.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", {
				acosh: function(e) {
					return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : n(e - 1 + a(e - 1) * a(e + 1))
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = Math.asinh;
			i(i.S + i.F * !(n && 1 / n(0) > 0), "Math", {
				asinh: function e(t) {
					return isFinite(t = +t) && 0 != t ? t < 0 ? -e(-t) : Math.log(t + Math.sqrt(t * t + 1)) : t
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = Math.atanh;
			i(i.S + i.F * !(n && 1 / n(-0) < 0), "Math", {
				atanh: function(e) {
					return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(80);
			i(i.S, "Math", {
				cbrt: function(e) {
					return n(e = +e) * Math.pow(Math.abs(e), 1 / 3)
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				clz32: function(e) {
					return (e >>>= 0) ? 31 - Math.floor(Math.log(e + .5) * Math.LOG2E) : 32
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = Math.exp;
			i(i.S, "Math", {
				cosh: function(e) {
					return (n(e = +e) + n(-e)) / 2
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(81);
			i(i.S + i.F * (n != Math.expm1), "Math", {
				expm1: n
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				fround: r(114)
			})
		}, function(e, t, r) {
			var i = r(0),
				n = Math.abs;
			i(i.S, "Math", {
				hypot: function(e, t) {
					for (var r, i, a = 0, s = 0, o = arguments.length, l = 0; s < o;) l < (r = n(arguments[s++])) ? (a = a * (i = l / r) * i + 1, l = r) : a += r > 0 ? (i = r / l) * i : r;
					return l === 1 / 0 ? 1 / 0 : l * Math.sqrt(a)
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = Math.imul;
			i(i.S + i.F * r(3)((function() {
				return -5 != n(4294967295, 5) || 2 != n.length
			})), "Math", {
				imul: function(e, t) {
					var r = +e,
						i = +t,
						n = 65535 & r,
						a = 65535 & i;
					return 0 | n * a + ((65535 & r >>> 16) * a + n * (65535 & i >>> 16) << 16 >>> 0)
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				log10: function(e) {
					return Math.log(e) * Math.LOG10E
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				log1p: r(113)
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				log2: function(e) {
					return Math.log(e) / Math.LN2
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				sign: r(80)
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(81),
				a = Math.exp;
			i(i.S + i.F * r(3)((function() {
				return -2e-17 != !Math.sinh(-2e-17)
			})), "Math", {
				sinh: function(e) {
					return Math.abs(e = +e) < 1 ? (n(e) - n(-e)) / 2 : (a(e - 1) - a(-e - 1)) * (Math.E / 2)
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(81),
				a = Math.exp;
			i(i.S, "Math", {
				tanh: function(e) {
					var t = n(e = +e),
						r = n(-e);
					return t == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (t - r) / (a(e) + a(-e))
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				trunc: function(e) {
					return (e > 0 ? Math.floor : Math.ceil)(e)
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(36),
				a = String.fromCharCode,
				s = String.fromCodePoint;
			i(i.S + i.F * (!!s && 1 != s.length), "String", {
				fromCodePoint: function(e) {
					for (var t, r = [], i = arguments.length, s = 0; i > s;) {
						if (t = +arguments[s++], n(t, 1114111) !== t) throw RangeError(t + " is not a valid code point");
						r.push(t < 65536 ? a(t) : a(55296 + ((t -= 65536) >> 10), t % 1024 + 56320))
					}
					return r.join("")
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(16),
				a = r(6);
			i(i.S, "String", {
				raw: function(e) {
					for (var t = n(e.raw), r = a(t.length), i = arguments.length, s = [], o = 0; r > o;) s.push(String(t[o++])), o < i && s.push(String(arguments[o]));
					return s.join("")
				}
			})
		}, function(e, t, r) {
			"use strict";
			r(46)("trim", (function(e) {
				return function() {
					return e(this, 3)
				}
			}))
		}, function(e, t, r) {
			"use strict";
			var i = r(58)(!0);
			r(82)(String, "String", (function(e) {
				this._t = String(e), this._i = 0
			}), (function() {
				var e, t = this._t,
					r = this._i;
				return r >= t.length ? {
					value: void 0,
					done: !0
				} : (e = i(t, r), this._i += e.length, {
					value: e,
					done: !1
				})
			}))
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(58)(!1);
			i(i.P, "String", {
				codePointAt: function(e) {
					return n(this, e)
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(6),
				a = r(84),
				s = "".endsWith;
			i(i.P + i.F * r(85)("endsWith"), "String", {
				endsWith: function(e) {
					var t = a(this, e, "endsWith"),
						r = arguments.length > 1 ? arguments[1] : void 0,
						i = n(t.length),
						o = void 0 === r ? i : Math.min(n(r), i),
						l = String(e);
					return s ? s.call(t, l, o) : t.slice(o - l.length, o) === l
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(84);
			i(i.P + i.F * r(85)("includes"), "String", {
				includes: function(e) {
					return !!~n(this, e, "includes")
						.indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.P, "String", {
				repeat: r(79)
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(6),
				a = r(84),
				s = "".startsWith;
			i(i.P + i.F * r(85)("startsWith"), "String", {
				startsWith: function(e) {
					var t = a(this, e, "startsWith"),
						r = n(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
						i = String(e);
					return s ? s.call(t, i, r) : t.slice(r, r + i.length) === i
				}
			})
		}, function(e, t, r) {
			"use strict";
			r(14)("anchor", (function(e) {
				return function(t) {
					return e(this, "a", "name", t)
				}
			}))
		}, function(e, t, r) {
			"use strict";
			r(14)("big", (function(e) {
				return function() {
					return e(this, "big", "", "")
				}
			}))
		}, function(e, t, r) {
			"use strict";
			r(14)("blink", (function(e) {
				return function() {
					return e(this, "blink", "", "")
				}
			}))
		}, function(e, t, r) {
			"use strict";
			r(14)("bold", (function(e) {
				return function() {
					return e(this, "b", "", "")
				}
			}))
		}, function(e, t, r) {
			"use strict";
			r(14)("fixed", (function(e) {
				return function() {
					return e(this, "tt", "", "")
				}
			}))
		}, function(e, t, r) {
			"use strict";
			r(14)("fontcolor", (function(e) {
				return function(t) {
					return e(this, "font", "color", t)
				}
			}))
		}, function(e, t, r) {
			"use strict";
			r(14)("fontsize", (function(e) {
				return function(t) {
					return e(this, "font", "size", t)
				}
			}))
		}, function(e, t, r) {
			"use strict";
			r(14)("italics", (function(e) {
				return function() {
					return e(this, "i", "", "")
				}
			}))
		}, function(e, t, r) {
			"use strict";
			r(14)("link", (function(e) {
				return function(t) {
					return e(this, "a", "href", t)
				}
			}))
		}, function(e, t, r) {
			"use strict";
			r(14)("small", (function(e) {
				return function() {
					return e(this, "small", "", "")
				}
			}))
		}, function(e, t, r) {
			"use strict";
			r(14)("strike", (function(e) {
				return function() {
					return e(this, "strike", "", "")
				}
			}))
		}, function(e, t, r) {
			"use strict";
			r(14)("sub", (function(e) {
				return function() {
					return e(this, "sub", "", "")
				}
			}))
		}, function(e, t, r) {
			"use strict";
			r(14)("sup", (function(e) {
				return function() {
					return e(this, "sup", "", "")
				}
			}))
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Date", {
				now: function() {
					return (new Date)
						.getTime()
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(9),
				a = r(24);
			i(i.P + i.F * r(3)((function() {
				return null !== new Date(NaN)
					.toJSON() || 1 !== Date.prototype.toJSON.call({
						toISOString: function() {
							return 1
						}
					})
			})), "Date", {
				toJSON: function(e) {
					var t = n(this),
						r = a(t);
					return "number" != typeof r || isFinite(r) ? t.toISOString() : null
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(223);
			i(i.P + i.F * (Date.prototype.toISOString !== n), "Date", {
				toISOString: n
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(3),
				n = Date.prototype.getTime,
				a = Date.prototype.toISOString,
				s = function(e) {
					return e > 9 ? e : "0" + e
				};
			e.exports = i((function() {
				return "0385-07-25T07:06:39.999Z" != a.call(new Date(-50000000000001))
			})) || !i((function() {
				a.call(new Date(NaN))
			})) ? function() {
				if (!isFinite(n.call(this))) throw RangeError("Invalid time value");
				var e = this,
					t = e.getUTCFullYear(),
					r = e.getUTCMilliseconds(),
					i = t < 0 ? "-" : t > 9999 ? "+" : "";
				return i + ("00000" + Math.abs(t))
					.slice(i ? -6 : -4) + "-" + s(e.getUTCMonth() + 1) + "-" + s(e.getUTCDate()) + "T" + s(e.getUTCHours()) + ":" + s(e.getUTCMinutes()) + ":" + s(e.getUTCSeconds()) + "." + (r > 99 ? r : "0" + s(r)) + "Z"
			} : a
		}, function(e, t, r) {
			var i = Date.prototype,
				n = i.toString,
				a = i.getTime;
			new Date(NaN) + "" != "Invalid Date" && r(13)(i, "toString", (function() {
				var e = a.call(this);
				return e == e ? n.call(this) : "Invalid Date"
			}))
		}, function(e, t, r) {
			var i = r(5)("toPrimitive"),
				n = Date.prototype;
			i in n || r(12)(n, i, r(226))
		}, function(e, t, r) {
			"use strict";
			var i = r(1),
				n = r(24);
			e.exports = function(e) {
				if ("string" !== e && "number" !== e && "default" !== e) throw TypeError("Incorrect hint");
				return n(i(this), "number" != e)
			}
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Array", {
				isArray: r(57)
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(20),
				n = r(0),
				a = r(9),
				s = r(115),
				o = r(86),
				l = r(6),
				u = r(87),
				c = r(88);
			n(n.S + n.F * !r(60)((function(e) {
				Array.from(e)
			})), "Array", {
				from: function(e) {
					var t, r, n, d, h = a(e),
						f = "function" == typeof this ? this : Array,
						p = arguments.length,
						g = p > 1 ? arguments[1] : void 0,
						v = void 0 !== g,
						m = 0,
						_ = c(h);
					if (v && (g = i(g, p > 2 ? arguments[2] : void 0, 2)), null == _ || f == Array && o(_))
						for (r = new f(t = l(h.length)); t > m; m++) u(r, m, v ? g(h[m], m) : h[m]);
					else
						for (d = _.call(h), r = new f; !(n = d.next())
							.done; m++) u(r, m, v ? s(d, g, [n.value, m], !0) : n.value);
					return r.length = m, r
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(87);
			i(i.S + i.F * r(3)((function() {
				function e() {}
				return !(Array.of.call(e) instanceof e)
			})), "Array", {
				of: function() {
					for (var e = 0, t = arguments.length, r = new("function" == typeof this ? this : Array)(t); t > e;) n(r, e, arguments[e++]);
					return r.length = t, r
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(16),
				a = [].join;
			i(i.P + i.F * (r(50) != Object || !r(23)(a)), "Array", {
				join: function(e) {
					return a.call(n(this), void 0 === e ? "," : e)
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(75),
				a = r(21),
				s = r(36),
				o = r(6),
				l = [].slice;
			i(i.P + i.F * r(3)((function() {
				n && l.call(n)
			})), "Array", {
				slice: function(e, t) {
					var r = o(this.length),
						i = a(this);
					if (t = void 0 === t ? r : t, "Array" == i) return l.call(this, e, t);
					for (var n = s(e, r), u = s(t, r), c = o(u - n), d = new Array(c), h = 0; h < c; h++) d[h] = "String" == i ? this.charAt(n + h) : this[n + h];
					return d
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(10),
				a = r(9),
				s = r(3),
				o = [].sort,
				l = [1, 2, 3];
			i(i.P + i.F * (s((function() {
				l.sort(void 0)
			})) || !s((function() {
				l.sort(null)
			})) || !r(23)(o)), "Array", {
				sort: function(e) {
					return void 0 === e ? o.call(a(this)) : o.call(a(this), n(e))
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(27)(0),
				a = r(23)([].forEach, !0);
			i(i.P + i.F * !a, "Array", {
				forEach: function(e) {
					return n(this, e, arguments[1])
				}
			})
		}, function(e, t, r) {
			var i = r(4),
				n = r(57),
				a = r(5)("species");
			e.exports = function(e) {
				var t;
				return n(e) && ("function" != typeof(t = e.constructor) || t !== Array && !n(t.prototype) || (t = void 0), i(t) && null === (t = t[a]) && (t = void 0)), void 0 === t ? Array : t
			}
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(27)(1);
			i(i.P + i.F * !r(23)([].map, !0), "Array", {
				map: function(e) {
					return n(this, e, arguments[1])
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(27)(2);
			i(i.P + i.F * !r(23)([].filter, !0), "Array", {
				filter: function(e) {
					return n(this, e, arguments[1])
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(27)(3);
			i(i.P + i.F * !r(23)([].some, !0), "Array", {
				some: function(e) {
					return n(this, e, arguments[1])
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(27)(4);
			i(i.P + i.F * !r(23)([].every, !0), "Array", {
				every: function(e) {
					return n(this, e, arguments[1])
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(116);
			i(i.P + i.F * !r(23)([].reduce, !0), "Array", {
				reduce: function(e) {
					return n(this, e, arguments.length, arguments[1], !1)
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(116);
			i(i.P + i.F * !r(23)([].reduceRight, !0), "Array", {
				reduceRight: function(e) {
					return n(this, e, arguments.length, arguments[1], !0)
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(55)(!1),
				a = [].indexOf,
				s = !!a && 1 / [1].indexOf(1, -0) < 0;
			i(i.P + i.F * (s || !r(23)(a)), "Array", {
				indexOf: function(e) {
					return s ? a.apply(this, arguments) || 0 : n(this, e, arguments[1])
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(16),
				a = r(22),
				s = r(6),
				o = [].lastIndexOf,
				l = !!o && 1 / [1].lastIndexOf(1, -0) < 0;
			i(i.P + i.F * (l || !r(23)(o)), "Array", {
				lastIndexOf: function(e) {
					if (l) return o.apply(this, arguments) || 0;
					var t = n(this),
						r = s(t.length),
						i = r - 1;
					for (arguments.length > 1 && (i = Math.min(i, a(arguments[1]))), i < 0 && (i = r + i); i >= 0; i--)
						if (i in t && t[i] === e) return i || 0;
					return -1
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.P, "Array", {
				copyWithin: r(117)
			}), r(32)("copyWithin")
		}, function(e, t, r) {
			var i = r(0);
			i(i.P, "Array", {
				fill: r(90)
			}), r(32)("fill")
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(27)(5),
				a = !0;
			"find" in [] && Array(1)
				.find((function() {
					a = !1
				})), i(i.P + i.F * a, "Array", {
					find: function(e) {
						return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
					}
				}), r(32)("find")
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(27)(6),
				a = "findIndex",
				s = !0;
			a in [] && Array(1)[a]((function() {
				s = !1
			})), i(i.P + i.F * s, "Array", {
				findIndex: function(e) {
					return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
				}
			}), r(32)(a)
		}, function(e, t, r) {
			r(39)("Array")
		}, function(e, t, r) {
			var i = r(2),
				n = r(78),
				a = r(8)
				.f,
				s = r(38)
				.f,
				o = r(59),
				l = r(52),
				u = i.RegExp,
				c = u,
				d = u.prototype,
				h = /a/g,
				f = /a/g,
				p = new u(h) !== h;
			if (r(7) && (!p || r(3)((function() {
				return f[r(5)("match")] = !1, u(h) != h || u(f) == f || "/a/i" != u(h, "i")
			})))) {
				u = function(e, t) {
					var r = this instanceof u,
						i = o(e),
						a = void 0 === t;
					return !r && i && e.constructor === u && a ? e : n(p ? new c(i && !a ? e.source : e, t) : c((i = e instanceof u) ? e.source : e, i && a ? l.call(e) : t), r ? this : d, u)
				};
				for (var g = function(e) {
					e in u || a(u, e, {
						configurable: !0,
						get: function() {
							return c[e]
						},
						set: function(t) {
							c[e] = t
						}
					})
				}, v = s(c), m = 0; v.length > m;) g(v[m++]);
				d.constructor = u, u.prototype = d, r(13)(i, "RegExp", u)
			}
			r(39)("RegExp")
		}, function(e, t, r) {
			"use strict";
			r(120);
			var i = r(1),
				n = r(52),
				a = r(7),
				s = /./.toString,
				o = function(e) {
					r(13)(RegExp.prototype, "toString", e, !0)
				};
			r(3)((function() {
				return "/a/b" != s.call({
					source: "a",
					flags: "b"
				})
			})) ? o((function() {
				var e = i(this);
				return "/".concat(e.source, "/", "flags" in e ? e.flags : !a && e instanceof RegExp ? n.call(e) : void 0)
			})) : "toString" != s.name && o((function() {
				return s.call(this)
			}))
		}, function(e, t, r) {
			"use strict";
			var i = r(1),
				n = r(6),
				a = r(93),
				s = r(61);
			r(62)("match", 1, (function(e, t, r, o) {
				return [function(r) {
					var i = e(this),
						n = null == r ? void 0 : r[t];
					return void 0 !== n ? n.call(r, i) : new RegExp(r)[t](String(i))
				}, function(e) {
					var t = o(r, e, this);
					if (t.done) return t.value;
					var l = i(e),
						u = String(this);
					if (!l.global) return s(l, u);
					var c = l.unicode;
					l.lastIndex = 0;
					for (var d, h = [], f = 0; null !== (d = s(l, u));) {
						var p = String(d[0]);
						h[f] = p, "" === p && (l.lastIndex = a(u, n(l.lastIndex), c)), f++
					}
					return 0 === f ? null : h
				}]
			}))
		}, function(e, t, r) {
			"use strict";
			var i = r(1),
				n = r(9),
				a = r(6),
				s = r(22),
				o = r(93),
				l = r(61),
				u = Math.max,
				c = Math.min,
				d = Math.floor,
				h = /\$([$&`']|\d\d?|<[^>]*>)/g,
				f = /\$([$&`']|\d\d?)/g;
			r(62)("replace", 2, (function(e, t, r, p) {
				return [function(i, n) {
					var a = e(this),
						s = null == i ? void 0 : i[t];
					return void 0 !== s ? s.call(i, a, n) : r.call(String(a), i, n)
				}, function(e, t) {
					var n = p(r, e, this, t);
					if (n.done) return n.value;
					var d = i(e),
						h = String(this),
						f = "function" == typeof t;
					f || (t = String(t));
					var v = d.global;
					if (v) {
						var m = d.unicode;
						d.lastIndex = 0
					}
					for (var _ = [];;) {
						var y = l(d, h);
						if (null === y) break;
						if (_.push(y), !v) break;
						"" === String(y[0]) && (d.lastIndex = o(h, a(d.lastIndex), m))
					}
					for (var E, b = "", S = 0, T = 0; T < _.length; T++) {
						y = _[T];
						for (var A = String(y[0]), w = u(c(s(y.index), h.length), 0), R = [], L = 1; L < y.length; L++) R.push(void 0 === (E = y[L]) ? E : String(E));
						var k = y.groups;
						if (f) {
							var O = [A].concat(R, w, h);
							void 0 !== k && O.push(k);
							var D = String(t.apply(void 0, O))
						} else D = g(A, h, w, R, k, t);
						w >= S && (b += h.slice(S, w) + D, S = w + A.length)
					}
					return b + h.slice(S)
				}];

				function g(e, t, i, a, s, o) {
					var l = i + e.length,
						u = a.length,
						c = f;
					return void 0 !== s && (s = n(s), c = h), r.call(o, c, (function(r, n) {
						var o;
						switch (n.charAt(0)) {
							case "$":
								return "$";
							case "&":
								return e;
							case "`":
								return t.slice(0, i);
							case "'":
								return t.slice(l);
							case "<":
								o = s[n.slice(1, -1)];
								break;
							default:
								var c = +n;
								if (0 === c) return r;
								if (c > u) {
									var h = d(c / 10);
									return 0 === h ? r : h <= u ? void 0 === a[h - 1] ? n.charAt(1) : a[h - 1] + n.charAt(1) : r
								}
								o = a[c - 1]
						}
						return void 0 === o ? "" : o
					}))
				}
			}))
		}, function(e, t, r) {
			"use strict";
			var i = r(1),
				n = r(106),
				a = r(61);
			r(62)("search", 1, (function(e, t, r, s) {
				return [function(r) {
					var i = e(this),
						n = null == r ? void 0 : r[t];
					return void 0 !== n ? n.call(r, i) : new RegExp(r)[t](String(i))
				}, function(e) {
					var t = s(r, e, this);
					if (t.done) return t.value;
					var o = i(e),
						l = String(this),
						u = o.lastIndex;
					n(u, 0) || (o.lastIndex = 0);
					var c = a(o, l);
					return n(o.lastIndex, u) || (o.lastIndex = u), null === c ? -1 : c.index
				}]
			}))
		}, function(e, t, r) {
			"use strict";
			var i = r(59),
				n = r(1),
				a = r(53),
				s = r(93),
				o = r(6),
				l = r(61),
				u = r(92),
				c = r(3),
				d = Math.min,
				h = [].push,
				f = "length",
				p = !c((function() {
					RegExp(4294967295, "y")
				}));
			r(62)("split", 2, (function(e, t, r, c) {
				var g;
				return g = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[f] || 2 != "ab".split(/(?:ab)*/)[f] || 4 != ".".split(/(.?)(.?)/)[f] || ".".split(/()()/)[f] > 1 || "".split(/.?/)[f] ? function(e, t) {
					var n = String(this);
					if (void 0 === e && 0 === t) return [];
					if (!i(e)) return r.call(n, e, t);
					for (var a, s, o, l = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), d = 0, p = void 0 === t ? 4294967295 : t >>> 0, g = new RegExp(e.source, c + "g");
						(a = u.call(g, n)) && !((s = g.lastIndex) > d && (l.push(n.slice(d, a.index)), a[f] > 1 && a.index < n[f] && h.apply(l, a.slice(1)), o = a[0][f], d = s, l[f] >= p));) g.lastIndex === a.index && g.lastIndex++;
					return d === n[f] ? !o && g.test("") || l.push("") : l.push(n.slice(d)), l[f] > p ? l.slice(0, p) : l
				} : "0".split(void 0, 0)[f] ? function(e, t) {
					return void 0 === e && 0 === t ? [] : r.call(this, e, t)
				} : r, [function(r, i) {
					var n = e(this),
						a = null == r ? void 0 : r[t];
					return void 0 !== a ? a.call(r, n, i) : g.call(String(n), r, i)
				}, function(e, t) {
					var i = c(g, e, this, t, g !== r);
					if (i.done) return i.value;
					var u = n(e),
						h = String(this),
						f = a(u, RegExp),
						v = u.unicode,
						m = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (p ? "y" : "g"),
						_ = new f(p ? u : "^(?:" + u.source + ")", m),
						y = void 0 === t ? 4294967295 : t >>> 0;
					if (0 === y) return [];
					if (0 === h.length) return null === l(_, h) ? [h] : [];
					for (var E = 0, b = 0, S = []; b < h.length;) {
						_.lastIndex = p ? b : 0;
						var T, A = l(_, p ? h : h.slice(b));
						if (null === A || (T = d(o(_.lastIndex + (p ? 0 : b)), h.length)) === E) b = s(h, b, v);
						else {
							if (S.push(h.slice(E, b)), S.length === y) return S;
							for (var w = 1; w <= A.length - 1; w++)
								if (S.push(A[w]), S.length === y) return S;
							b = E = T
						}
					}
					return S.push(h.slice(E)), S
				}]
			}))
		}, function(e, t, r) {
			"use strict";
			var i, n, a, s, o = r(30),
				l = r(2),
				u = r(20),
				c = r(45),
				d = r(0),
				h = r(4),
				f = r(10),
				p = r(40),
				g = r(41),
				v = r(53),
				m = r(94)
				.set,
				_ = r(95)(),
				y = r(96),
				E = r(121),
				b = r(63),
				S = r(122),
				T = l.TypeError,
				A = l.process,
				w = A && A.versions,
				R = w && w.v8 || "",
				L = l.Promise,
				k = "process" == c(A),
				O = function() {},
				D = n = y.f,
				C = !! function() {
					try {
						var e = L.resolve(1),
							t = (e.constructor = {})[r(5)("species")] = function(e) {
								e(O, O)
							};
						return (k || "function" == typeof PromiseRejectionEvent) && e.then(O) instanceof t && 0 !== R.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
					} catch (e) {}
				}(),
				I = function(e) {
					var t;
					return !(!h(e) || "function" != typeof(t = e.then)) && t
				},
				x = function(e, t) {
					if (!e._n) {
						e._n = !0;
						var r = e._c;
						_((function() {
							for (var i = e._v, n = 1 == e._s, a = 0, s = function(t) {
								var r, a, s, o = n ? t.ok : t.fail,
									l = t.resolve,
									u = t.reject,
									c = t.domain;
								try {
									o ? (n || (2 == e._h && F(e), e._h = 1), !0 === o ? r = i : (c && c.enter(), r = o(i), c && (c.exit(), s = !0)), r === t.promise ? u(T("Promise-chain cycle")) : (a = I(r)) ? a.call(r, l, u) : l(r)) : u(i)
								} catch (e) {
									c && !s && c.exit(), u(e)
								}
							}; r.length > a;) s(r[a++]);
							e._c = [], e._n = !1, t && !e._h && P(e)
						}))
					}
				},
				P = function(e) {
					m.call(l, (function() {
						var t, r, i, n = e._v,
							a = M(e);
						if (a && (t = E((function() {
							k ? A.emit("unhandledRejection", n, e) : (r = l.onunhandledrejection) ? r({
								promise: e,
								reason: n
							}) : (i = l.console) && i.error && i.error("Unhandled promise rejection", n)
						})), e._h = k || M(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v
					}))
				},
				M = function(e) {
					return 1 !== e._h && 0 === (e._a || e._c)
						.length
				},
				F = function(e) {
					m.call(l, (function() {
						var t;
						k ? A.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({
							promise: e,
							reason: e._v
						})
					}))
				},
				N = function(e) {
					var t = this;
					t._d || (t._d = !0, (t = t._w || t)
						._v = e, t._s = 2, t._a || (t._a = t._c.slice()), x(t, !0))
				},
				B = function(e) {
					var t, r = this;
					if (!r._d) {
						r._d = !0, r = r._w || r;
						try {
							if (r === e) throw T("Promise can't be resolved itself");
							(t = I(e)) ? _((function() {
								var i = {
									_w: r,
									_d: !1
								};
								try {
									t.call(e, u(B, i, 1), u(N, i, 1))
								} catch (e) {
									N.call(i, e)
								}
							})): (r._v = e, r._s = 1, x(r, !1))
						} catch (e) {
							N.call({
								_w: r,
								_d: !1
							}, e)
						}
					}
				};
			C || (L = function(e) {
						p(this, L, "Promise", "_h"), f(e), i.call(this);
						try {
							e(u(B, this, 1), u(N, this, 1))
						} catch (e) {
							N.call(this, e)
						}
					}, (i = function(e) {
						this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
					})
					.prototype = r(42)(L.prototype, {
						then: function(e, t) {
							var r = D(v(this, L));
							return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = k ? A.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && x(this, !1), r.promise
						},
						catch: function(e) {
							return this.then(void 0, e)
						}
					}), a = function() {
						var e = new i;
						this.promise = e, this.resolve = u(B, e, 1), this.reject = u(N, e, 1)
					}, y.f = D = function(e) {
						return e === L || e === s ? new a(e) : n(e)
					}), d(d.G + d.W + d.F * !C, {
					Promise: L
				}), r(44)(L, "Promise"), r(39)("Promise"), s = r(19)
				.Promise, d(d.S + d.F * !C, "Promise", {
					reject: function(e) {
						var t = D(this);
						return (0, t.reject)(e), t.promise
					}
				}), d(d.S + d.F * (o || !C), "Promise", {
					resolve: function(e) {
						return S(o && this === s ? L : this, e)
					}
				}), d(d.S + d.F * !(C && r(60)((function(e) {
					L.all(e)
						.catch(O)
				}))), "Promise", {
					all: function(e) {
						var t = this,
							r = D(t),
							i = r.resolve,
							n = r.reject,
							a = E((function() {
								var r = [],
									a = 0,
									s = 1;
								g(e, !1, (function(e) {
									var o = a++,
										l = !1;
									r.push(void 0), s++, t.resolve(e)
										.then((function(e) {
											l || (l = !0, r[o] = e, --s || i(r))
										}), n)
								})), --s || i(r)
							}));
						return a.e && n(a.v), r.promise
					},
					race: function(e) {
						var t = this,
							r = D(t),
							i = r.reject,
							n = E((function() {
								g(e, !1, (function(e) {
									t.resolve(e)
										.then(r.resolve, i)
								}))
							}));
						return n.e && i(n.v), r.promise
					}
				})
		}, function(e, t, r) {
			"use strict";
			var i = r(127),
				n = r(43);
			r(64)("WeakSet", (function(e) {
				return function() {
					return e(this, arguments.length > 0 ? arguments[0] : void 0)
				}
			}), {
				add: function(e) {
					return i.def(n(this, "WeakSet"), e, !0)
				}
			}, i, !1, !0)
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(65),
				a = r(97),
				s = r(1),
				o = r(36),
				l = r(6),
				u = r(4),
				c = r(2)
				.ArrayBuffer,
				d = r(53),
				h = a.ArrayBuffer,
				f = a.DataView,
				p = n.ABV && c.isView,
				g = h.prototype.slice,
				v = n.VIEW;
			i(i.G + i.W + i.F * (c !== h), {
				ArrayBuffer: h
			}), i(i.S + i.F * !n.CONSTR, "ArrayBuffer", {
				isView: function(e) {
					return p && p(e) || u(e) && v in e
				}
			}), i(i.P + i.U + i.F * r(3)((function() {
				return !new h(2)
					.slice(1, void 0)
					.byteLength
			})), "ArrayBuffer", {
				slice: function(e, t) {
					if (void 0 !== g && void 0 === t) return g.call(s(this), e);
					for (var r = s(this)
						.byteLength, i = o(e, r), n = o(void 0 === t ? r : t, r), a = new(d(this, h))(l(n - i)), u = new f(this), c = new f(a), p = 0; i < n;) c.setUint8(p++, u.getUint8(i++));
					return a
				}
			}), r(39)("ArrayBuffer")
		}, function(e, t, r) {
			var i = r(0);
			i(i.G + i.W + i.F * !r(65)
				.ABV, {
					DataView: r(97)
						.DataView
				})
		}, function(e, t, r) {
			r(28)("Int8", 1, (function(e) {
				return function(t, r, i) {
					return e(this, t, r, i)
				}
			}))
		}, function(e, t, r) {
			r(28)("Uint8", 1, (function(e) {
				return function(t, r, i) {
					return e(this, t, r, i)
				}
			}))
		}, function(e, t, r) {
			r(28)("Uint8", 1, (function(e) {
				return function(t, r, i) {
					return e(this, t, r, i)
				}
			}), !0)
		}, function(e, t, r) {
			r(28)("Int16", 2, (function(e) {
				return function(t, r, i) {
					return e(this, t, r, i)
				}
			}))
		}, function(e, t, r) {
			r(28)("Uint16", 2, (function(e) {
				return function(t, r, i) {
					return e(this, t, r, i)
				}
			}))
		}, function(e, t, r) {
			r(28)("Int32", 4, (function(e) {
				return function(t, r, i) {
					return e(this, t, r, i)
				}
			}))
		}, function(e, t, r) {
			r(28)("Uint32", 4, (function(e) {
				return function(t, r, i) {
					return e(this, t, r, i)
				}
			}))
		}, function(e, t, r) {
			r(28)("Float32", 4, (function(e) {
				return function(t, r, i) {
					return e(this, t, r, i)
				}
			}))
		}, function(e, t, r) {
			r(28)("Float64", 8, (function(e) {
				return function(t, r, i) {
					return e(this, t, r, i)
				}
			}))
		}, function(e, t, r) {
			var i = r(0),
				n = r(10),
				a = r(1),
				s = (r(2)
					.Reflect || {})
				.apply,
				o = Function.apply;
			i(i.S + i.F * !r(3)((function() {
				s((function() {}))
			})), "Reflect", {
				apply: function(e, t, r) {
					var i = n(e),
						l = a(r);
					return s ? s(i, t, l) : o.call(i, t, l)
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(37),
				a = r(10),
				s = r(1),
				o = r(4),
				l = r(3),
				u = r(107),
				c = (r(2)
					.Reflect || {})
				.construct,
				d = l((function() {
					function e() {}
					return !(c((function() {}), [], e) instanceof e)
				})),
				h = !l((function() {
					c((function() {}))
				}));
			i(i.S + i.F * (d || h), "Reflect", {
				construct: function(e, t) {
					a(e), s(t);
					var r = arguments.length < 3 ? e : a(arguments[2]);
					if (h && !d) return c(e, t, r);
					if (e == r) {
						switch (t.length) {
							case 0:
								return new e;
							case 1:
								return new e(t[0]);
							case 2:
								return new e(t[0], t[1]);
							case 3:
								return new e(t[0], t[1], t[2]);
							case 4:
								return new e(t[0], t[1], t[2], t[3])
						}
						var i = [null];
						return i.push.apply(i, t), new(u.apply(e, i))
					}
					var l = r.prototype,
						f = n(o(l) ? l : Object.prototype),
						p = Function.apply.call(e, f, t);
					return o(p) ? p : f
				}
			})
		}, function(e, t, r) {
			var i = r(8),
				n = r(0),
				a = r(1),
				s = r(24);
			n(n.S + n.F * r(3)((function() {
				Reflect.defineProperty(i.f({}, 1, {
					value: 1
				}), 1, {
					value: 2
				})
			})), "Reflect", {
				defineProperty: function(e, t, r) {
					a(e), t = s(t, !0), a(r);
					try {
						return i.f(e, t, r), !0
					} catch (e) {
						return !1
					}
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(17)
				.f,
				a = r(1);
			i(i.S, "Reflect", {
				deleteProperty: function(e, t) {
					var r = n(a(e), t);
					return !(r && !r.configurable) && delete e[t]
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(1),
				a = function(e) {
					this._t = n(e), this._i = 0;
					var t, r = this._k = [];
					for (t in e) r.push(t)
				};
			r(83)(a, "Object", (function() {
				var e, t = this._k;
				do {
					if (this._i >= t.length) return {
						value: void 0,
						done: !0
					}
				} while (!((e = t[this._i++]) in this._t));
				return {
					value: e,
					done: !1
				}
			})), i(i.S, "Reflect", {
				enumerate: function(e) {
					return new a(e)
				}
			})
		}, function(e, t, r) {
			var i = r(17),
				n = r(18),
				a = r(15),
				s = r(0),
				o = r(4),
				l = r(1);
			s(s.S, "Reflect", {
				get: function e(t, r) {
					var s, u, c = arguments.length < 3 ? t : arguments[2];
					return l(t) === c ? t[r] : (s = i.f(t, r)) ? a(s, "value") ? s.value : void 0 !== s.get ? s.get.call(c) : void 0 : o(u = n(t)) ? e(u, r, c) : void 0
				}
			})
		}, function(e, t, r) {
			var i = r(17),
				n = r(0),
				a = r(1);
			n(n.S, "Reflect", {
				getOwnPropertyDescriptor: function(e, t) {
					return i.f(a(e), t)
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(18),
				a = r(1);
			i(i.S, "Reflect", {
				getPrototypeOf: function(e) {
					return n(a(e))
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Reflect", {
				has: function(e, t) {
					return t in e
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(1),
				a = Object.isExtensible;
			i(i.S, "Reflect", {
				isExtensible: function(e) {
					return n(e), !a || a(e)
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Reflect", {
				ownKeys: r(129)
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(1),
				a = Object.preventExtensions;
			i(i.S, "Reflect", {
				preventExtensions: function(e) {
					n(e);
					try {
						return a && a(e), !0
					} catch (e) {
						return !1
					}
				}
			})
		}, function(e, t, r) {
			var i = r(8),
				n = r(17),
				a = r(18),
				s = r(15),
				o = r(0),
				l = r(33),
				u = r(1),
				c = r(4);
			o(o.S, "Reflect", {
				set: function e(t, r, o) {
					var d, h, f = arguments.length < 4 ? t : arguments[3],
						p = n.f(u(t), r);
					if (!p) {
						if (c(h = a(t))) return e(h, r, o, f);
						p = l(0)
					}
					if (s(p, "value")) {
						if (!1 === p.writable || !c(f)) return !1;
						if (d = n.f(f, r)) {
							if (d.get || d.set || !1 === d.writable) return !1;
							d.value = o, i.f(f, r, d)
						} else i.f(f, r, l(0, o));
						return !0
					}
					return void 0 !== p.set && (p.set.call(f, o), !0)
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(76);
			n && i(i.S, "Reflect", {
				setPrototypeOf: function(e, t) {
					n.check(e, t);
					try {
						return n.set(e, t), !0
					} catch (e) {
						return !1
					}
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(55)(!0);
			i(i.P, "Array", {
				includes: function(e) {
					return n(this, e, arguments.length > 1 ? arguments[1] : void 0)
				}
			}), r(32)("includes")
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(130),
				a = r(9),
				s = r(6),
				o = r(10),
				l = r(89);
			i(i.P, "Array", {
				flatMap: function(e) {
					var t, r, i = a(this);
					return o(e), t = s(i.length), r = l(i, 0), n(r, i, i, t, 0, 1, e, arguments[1]), r
				}
			}), r(32)("flatMap")
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(130),
				a = r(9),
				s = r(6),
				o = r(22),
				l = r(89);
			i(i.P, "Array", {
				flatten: function() {
					var e = arguments[0],
						t = a(this),
						r = s(t.length),
						i = l(t, 0);
					return n(i, t, t, r, 0, void 0 === e ? 1 : o(e)), i
				}
			}), r(32)("flatten")
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(58)(!0);
			i(i.P, "String", {
				at: function(e) {
					return n(this, e)
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(131),
				a = r(63),
				s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a);
			i(i.P + i.F * s, "String", {
				padStart: function(e) {
					return n(this, e, arguments.length > 1 ? arguments[1] : void 0, !0)
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(131),
				a = r(63),
				s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a);
			i(i.P + i.F * s, "String", {
				padEnd: function(e) {
					return n(this, e, arguments.length > 1 ? arguments[1] : void 0, !1)
				}
			})
		}, function(e, t, r) {
			"use strict";
			r(46)("trimLeft", (function(e) {
				return function() {
					return e(this, 1)
				}
			}), "trimStart")
		}, function(e, t, r) {
			"use strict";
			r(46)("trimRight", (function(e) {
				return function() {
					return e(this, 2)
				}
			}), "trimEnd")
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(25),
				a = r(6),
				s = r(59),
				o = r(52),
				l = RegExp.prototype,
				u = function(e, t) {
					this._r = e, this._s = t
				};
			r(83)(u, "RegExp String", (function() {
				var e = this._r.exec(this._s);
				return {
					value: e,
					done: null === e
				}
			})), i(i.P, "String", {
				matchAll: function(e) {
					if (n(this), !s(e)) throw TypeError(e + " is not a regexp!");
					var t = String(this),
						r = "flags" in l ? String(e.flags) : o.call(e),
						i = new RegExp(e.source, ~r.indexOf("g") ? r : "g" + r);
					return i.lastIndex = a(e.lastIndex), new u(i, t)
				}
			})
		}, function(e, t, r) {
			r(72)("asyncIterator")
		}, function(e, t, r) {
			r(72)("observable")
		}, function(e, t, r) {
			var i = r(0),
				n = r(129),
				a = r(16),
				s = r(17),
				o = r(87);
			i(i.S, "Object", {
				getOwnPropertyDescriptors: function(e) {
					for (var t, r, i = a(e), l = s.f, u = n(i), c = {}, d = 0; u.length > d;) void 0 !== (r = l(i, t = u[d++])) && o(c, t, r);
					return c
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(132)(!1);
			i(i.S, "Object", {
				values: function(e) {
					return n(e)
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(132)(!0);
			i(i.S, "Object", {
				entries: function(e) {
					return n(e)
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(9),
				a = r(10),
				s = r(8);
			r(7) && i(i.P + r(66), "Object", {
				__defineGetter__: function(e, t) {
					s.f(n(this), e, {
						get: a(t),
						enumerable: !0,
						configurable: !0
					})
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(9),
				a = r(10),
				s = r(8);
			r(7) && i(i.P + r(66), "Object", {
				__defineSetter__: function(e, t) {
					s.f(n(this), e, {
						set: a(t),
						enumerable: !0,
						configurable: !0
					})
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(9),
				a = r(24),
				s = r(18),
				o = r(17)
				.f;
			r(7) && i(i.P + r(66), "Object", {
				__lookupGetter__: function(e) {
					var t, r = n(this),
						i = a(e, !0);
					do {
						if (t = o(r, i)) return t.get
					} while (r = s(r))
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(9),
				a = r(24),
				s = r(18),
				o = r(17)
				.f;
			r(7) && i(i.P + r(66), "Object", {
				__lookupSetter__: function(e) {
					var t, r = n(this),
						i = a(e, !0);
					do {
						if (t = o(r, i)) return t.set
					} while (r = s(r))
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.P + i.R, "Map", {
				toJSON: r(133)("Map")
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.P + i.R, "Set", {
				toJSON: r(133)("Set")
			})
		}, function(e, t, r) {
			r(67)("Map")
		}, function(e, t, r) {
			r(67)("Set")
		}, function(e, t, r) {
			r(67)("WeakMap")
		}, function(e, t, r) {
			r(67)("WeakSet")
		}, function(e, t, r) {
			r(68)("Map")
		}, function(e, t, r) {
			r(68)("Set")
		}, function(e, t, r) {
			r(68)("WeakMap")
		}, function(e, t, r) {
			r(68)("WeakSet")
		}, function(e, t, r) {
			var i = r(0);
			i(i.G, {
				global: r(2)
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "System", {
				global: r(2)
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(21);
			i(i.S, "Error", {
				isError: function(e) {
					return "Error" === n(e)
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				clamp: function(e, t, r) {
					return Math.min(r, Math.max(t, e))
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				DEG_PER_RAD: Math.PI / 180
			})
		}, function(e, t, r) {
			var i = r(0),
				n = 180 / Math.PI;
			i(i.S, "Math", {
				degrees: function(e) {
					return e * n
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(135),
				a = r(114);
			i(i.S, "Math", {
				fscale: function(e, t, r, i, s) {
					return a(n(e, t, r, i, s))
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				iaddh: function(e, t, r, i) {
					var n = e >>> 0,
						a = r >>> 0;
					return (t >>> 0) + (i >>> 0) + ((n & a | (n | a) & ~(n + a >>> 0)) >>> 31) | 0
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				isubh: function(e, t, r, i) {
					var n = e >>> 0,
						a = r >>> 0;
					return (t >>> 0) - (i >>> 0) - ((~n & a | ~(n ^ a) & n - a >>> 0) >>> 31) | 0
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				imulh: function(e, t) {
					var r = +e,
						i = +t,
						n = 65535 & r,
						a = 65535 & i,
						s = r >> 16,
						o = i >> 16,
						l = (s * a >>> 0) + (n * a >>> 16);
					return s * o + (l >> 16) + ((n * o >>> 0) + (65535 & l) >> 16)
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				RAD_PER_DEG: 180 / Math.PI
			})
		}, function(e, t, r) {
			var i = r(0),
				n = Math.PI / 180;
			i(i.S, "Math", {
				radians: function(e) {
					return e * n
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				scale: r(135)
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				umulh: function(e, t) {
					var r = +e,
						i = +t,
						n = 65535 & r,
						a = 65535 & i,
						s = r >>> 16,
						o = i >>> 16,
						l = (s * a >>> 0) + (n * a >>> 16);
					return s * o + (l >>> 16) + ((n * o >>> 0) + (65535 & l) >>> 16)
				}
			})
		}, function(e, t, r) {
			var i = r(0);
			i(i.S, "Math", {
				signbit: function(e) {
					return (e = +e) != e ? e : 0 == e ? 1 / e == 1 / 0 : e > 0
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(19),
				a = r(2),
				s = r(53),
				o = r(122);
			i(i.P + i.R, "Promise", {
				finally: function(e) {
					var t = s(this, n.Promise || a.Promise),
						r = "function" == typeof e;
					return this.then(r ? function(r) {
						return o(t, e())
							.then((function() {
								return r
							}))
					} : e, r ? function(r) {
						return o(t, e())
							.then((function() {
								throw r
							}))
					} : e)
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(96),
				a = r(121);
			i(i.S, "Promise", {
				try: function(e) {
					var t = n.f(this),
						r = a(e);
					return (r.e ? t.reject : t.resolve)(r.v), t.promise
				}
			})
		}, function(e, t, r) {
			var i = r(29),
				n = r(1),
				a = i.key,
				s = i.set;
			i.exp({
				defineMetadata: function(e, t, r, i) {
					s(e, t, n(r), a(i))
				}
			})
		}, function(e, t, r) {
			var i = r(29),
				n = r(1),
				a = i.key,
				s = i.map,
				o = i.store;
			i.exp({
				deleteMetadata: function(e, t) {
					var r = arguments.length < 3 ? void 0 : a(arguments[2]),
						i = s(n(t), r, !1);
					if (void 0 === i || !i.delete(e)) return !1;
					if (i.size) return !0;
					var l = o.get(t);
					return l.delete(r), !!l.size || o.delete(t)
				}
			})
		}, function(e, t, r) {
			var i = r(29),
				n = r(1),
				a = r(18),
				s = i.has,
				o = i.get,
				l = i.key,
				u = function(e, t, r) {
					if (s(e, t, r)) return o(e, t, r);
					var i = a(t);
					return null !== i ? u(e, i, r) : void 0
				};
			i.exp({
				getMetadata: function(e, t) {
					return u(e, n(t), arguments.length < 3 ? void 0 : l(arguments[2]))
				}
			})
		}, function(e, t, r) {
			var i = r(125),
				n = r(134),
				a = r(29),
				s = r(1),
				o = r(18),
				l = a.keys,
				u = a.key,
				c = function(e, t) {
					var r = l(e, t),
						a = o(e);
					if (null === a) return r;
					var s = c(a, t);
					return s.length ? r.length ? n(new i(r.concat(s))) : s : r
				};
			a.exp({
				getMetadataKeys: function(e) {
					return c(s(e), arguments.length < 2 ? void 0 : u(arguments[1]))
				}
			})
		}, function(e, t, r) {
			var i = r(29),
				n = r(1),
				a = i.get,
				s = i.key;
			i.exp({
				getOwnMetadata: function(e, t) {
					return a(e, n(t), arguments.length < 3 ? void 0 : s(arguments[2]))
				}
			})
		}, function(e, t, r) {
			var i = r(29),
				n = r(1),
				a = i.keys,
				s = i.key;
			i.exp({
				getOwnMetadataKeys: function(e) {
					return a(n(e), arguments.length < 2 ? void 0 : s(arguments[1]))
				}
			})
		}, function(e, t, r) {
			var i = r(29),
				n = r(1),
				a = r(18),
				s = i.has,
				o = i.key,
				l = function(e, t, r) {
					if (s(e, t, r)) return !0;
					var i = a(t);
					return null !== i && l(e, i, r)
				};
			i.exp({
				hasMetadata: function(e, t) {
					return l(e, n(t), arguments.length < 3 ? void 0 : o(arguments[2]))
				}
			})
		}, function(e, t, r) {
			var i = r(29),
				n = r(1),
				a = i.has,
				s = i.key;
			i.exp({
				hasOwnMetadata: function(e, t) {
					return a(e, n(t), arguments.length < 3 ? void 0 : s(arguments[2]))
				}
			})
		}, function(e, t, r) {
			var i = r(29),
				n = r(1),
				a = r(10),
				s = i.key,
				o = i.set;
			i.exp({
				metadata: function(e, t) {
					return function(r, i) {
						o(e, t, (void 0 !== i ? n : a)(r), s(i))
					}
				}
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(95)(),
				a = r(2)
				.process,
				s = "process" == r(21)(a);
			i(i.G, {
				asap: function(e) {
					var t = s && a.domain;
					n(t ? t.bind(e) : e)
				}
			})
		}, function(e, t, r) {
			"use strict";
			var i = r(0),
				n = r(2),
				a = r(19),
				s = r(95)(),
				o = r(5)("observable"),
				l = r(10),
				u = r(1),
				c = r(40),
				d = r(42),
				h = r(12),
				f = r(41),
				p = f.RETURN,
				g = function(e) {
					return null == e ? void 0 : l(e)
				},
				v = function(e) {
					var t = e._c;
					t && (e._c = void 0, t())
				},
				m = function(e) {
					return void 0 === e._o
				},
				_ = function(e) {
					m(e) || (e._o = void 0, v(e))
				},
				y = function(e, t) {
					u(e), this._c = void 0, this._o = e, e = new E(this);
					try {
						var r = t(e),
							i = r;
						null != r && ("function" == typeof r.unsubscribe ? r = function() {
							i.unsubscribe()
						} : l(r), this._c = r)
					} catch (t) {
						return void e.error(t)
					}
					m(this) && v(this)
				};
			y.prototype = d({}, {
				unsubscribe: function() {
					_(this)
				}
			});
			var E = function(e) {
				this._s = e
			};
			E.prototype = d({}, {
				next: function(e) {
					var t = this._s;
					if (!m(t)) {
						var r = t._o;
						try {
							var i = g(r.next);
							if (i) return i.call(r, e)
						} catch (e) {
							try {
								_(t)
							} finally {
								throw e
							}
						}
					}
				},
				error: function(e) {
					var t = this._s;
					if (m(t)) throw e;
					var r = t._o;
					t._o = void 0;
					try {
						var i = g(r.error);
						if (!i) throw e;
						e = i.call(r, e)
					} catch (e) {
						try {
							v(t)
						} finally {
							throw e
						}
					}
					return v(t), e
				},
				complete: function(e) {
					var t = this._s;
					if (!m(t)) {
						var r = t._o;
						t._o = void 0;
						try {
							var i = g(r.complete);
							e = i ? i.call(r, e) : void 0
						} catch (e) {
							try {
								v(t)
							} finally {
								throw e
							}
						}
						return v(t), e
					}
				}
			});
			var b = function(e) {
				c(this, b, "Observable", "_f")
					._f = l(e)
			};
			d(b.prototype, {
				subscribe: function(e) {
					return new y(e, this._f)
				},
				forEach: function(e) {
					var t = this;
					return new(a.Promise || n.Promise)((function(r, i) {
						l(e);
						var n = t.subscribe({
							next: function(t) {
								try {
									return e(t)
								} catch (e) {
									i(e), n.unsubscribe()
								}
							},
							error: i,
							complete: r
						})
					}))
				}
			}), d(b, {
				from: function(e) {
					var t = "function" == typeof this ? this : b,
						r = g(u(e)[o]);
					if (r) {
						var i = u(r.call(e));
						return i.constructor === t ? i : new t((function(e) {
							return i.subscribe(e)
						}))
					}
					return new t((function(t) {
						var r = !1;
						return s((function() {
								if (!r) {
									try {
										if (f(e, !1, (function(e) {
											if (t.next(e), r) return p
										})) === p) return
									} catch (e) {
										if (r) throw e;
										return void t.error(e)
									}
									t.complete()
								}
							})),
							function() {
								r = !0
							}
					}))
				},
				of: function() {
					for (var e = 0, t = arguments.length, r = new Array(t); e < t;) r[e] = arguments[e++];
					return new("function" == typeof this ? this : b)((function(e) {
						var t = !1;
						return s((function() {
								if (!t) {
									for (var i = 0; i < r.length; ++i)
										if (e.next(r[i]), t) return;
									e.complete()
								}
							})),
							function() {
								t = !0
							}
					}))
				}
			}), h(b.prototype, o, (function() {
				return this
			})), i(i.G, {
				Observable: b
			}), r(39)("Observable")
		}, function(e, t, r) {
			var i = r(2),
				n = r(0),
				a = r(63),
				s = [].slice,
				o = /MSIE .\./.test(a),
				l = function(e) {
					return function(t, r) {
						var i = arguments.length > 2,
							n = !!i && s.call(arguments, 2);
						return e(i ? function() {
							("function" == typeof t ? t : Function(t))
							.apply(this, n)
						} : t, r)
					}
				};
			n(n.G + n.B + n.F * o, {
				setTimeout: l(i.setTimeout),
				setInterval: l(i.setInterval)
			})
		}, function(e, t, r) {
			var i = r(0),
				n = r(94);
			i(i.G + i.B, {
				setImmediate: n.set,
				clearImmediate: n.clear
			})
		}, function(e, t, r) {
			for (var i = r(91), n = r(35), a = r(13), s = r(2), o = r(12), l = r(47), u = r(5), c = u("iterator"), d = u("toStringTag"), h = l.Array, f = {
				CSSRuleList: !0,
				CSSStyleDeclaration: !1,
				CSSValueList: !1,
				ClientRectList: !1,
				DOMRectList: !1,
				DOMStringList: !1,
				DOMTokenList: !0,
				DataTransferItemList: !1,
				FileList: !1,
				HTMLAllCollection: !1,
				HTMLCollection: !1,
				HTMLFormElement: !1,
				HTMLSelectElement: !1,
				MediaList: !0,
				MimeTypeArray: !1,
				NamedNodeMap: !1,
				NodeList: !0,
				PaintRequestList: !1,
				Plugin: !1,
				PluginArray: !1,
				SVGLengthList: !1,
				SVGNumberList: !1,
				SVGPathSegList: !1,
				SVGPointList: !1,
				SVGStringList: !1,
				SVGTransformList: !1,
				SourceBufferList: !1,
				StyleSheetList: !0,
				TextTrackCueList: !1,
				TextTrackList: !1,
				TouchList: !1
			}, p = n(f), g = 0; g < p.length; g++) {
				var v, m = p[g],
					_ = f[m],
					y = s[m],
					E = y && y.prototype;
				if (E && (E[c] || o(E, c, h), E[d] || o(E, d, m), l[m] = h, _))
					for (v in i) E[v] || a(E, v, i[v], !0)
			}
		}, function(e, t, r) {
			(function(t) {
				! function(t) {
					"use strict";
					var r = Object.prototype,
						i = r.hasOwnProperty,
						n = "function" == typeof Symbol ? Symbol : {},
						a = n.iterator || "@@iterator",
						s = n.asyncIterator || "@@asyncIterator",
						o = n.toStringTag || "@@toStringTag",
						l = "object" == typeof e,
						u = t.regeneratorRuntime;
					if (u) l && (e.exports = u);
					else {
						(u = t.regeneratorRuntime = l ? e.exports : {})
						.wrap = g;
						var c = {},
							d = {};
						d[a] = function() {
							return this
						};
						var h = Object.getPrototypeOf,
							f = h && h(h(R([])));
						f && f !== r && i.call(f, a) && (d = f);
						var p = y.prototype = m.prototype = Object.create(d);
						_.prototype = p.constructor = y, y.constructor = _, y[o] = _.displayName = "GeneratorFunction", u.isGeneratorFunction = function(e) {
							var t = "function" == typeof e && e.constructor;
							return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
						}, u.mark = function(e) {
							return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, o in e || (e[o] = "GeneratorFunction")), e.prototype = Object.create(p), e
						}, u.awrap = function(e) {
							return {
								__await: e
							}
						}, E(b.prototype), b.prototype[s] = function() {
							return this
						}, u.AsyncIterator = b, u.async = function(e, t, r, i) {
							var n = new b(g(e, t, r, i));
							return u.isGeneratorFunction(t) ? n : n.next()
								.then((function(e) {
									return e.done ? e.value : n.next()
								}))
						}, E(p), p[o] = "Generator", p[a] = function() {
							return this
						}, p.toString = function() {
							return "[object Generator]"
						}, u.keys = function(e) {
							var t = [];
							for (var r in e) t.push(r);
							return t.reverse(),
								function r() {
									for (; t.length;) {
										var i = t.pop();
										if (i in e) return r.value = i, r.done = !1, r
									}
									return r.done = !0, r
								}
						}, u.values = R, w.prototype = {
							constructor: w,
							reset: function(e) {
								if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(A), !e)
									for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
							},
							stop: function() {
								this.done = !0;
								var e = this.tryEntries[0].completion;
								if ("throw" === e.type) throw e.arg;
								return this.rval
							},
							dispatchException: function(e) {
								if (this.done) throw e;
								var t = this;

								function r(r, i) {
									return s.type = "throw", s.arg = e, t.next = r, i && (t.method = "next", t.arg = void 0), !!i
								}
								for (var n = this.tryEntries.length - 1; n >= 0; --n) {
									var a = this.tryEntries[n],
										s = a.completion;
									if ("root" === a.tryLoc) return r("end");
									if (a.tryLoc <= this.prev) {
										var o = i.call(a, "catchLoc"),
											l = i.call(a, "finallyLoc");
										if (o && l) {
											if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
											if (this.prev < a.finallyLoc) return r(a.finallyLoc)
										} else if (o) {
											if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
										} else {
											if (!l) throw new Error("try statement without catch or finally");
											if (this.prev < a.finallyLoc) return r(a.finallyLoc)
										}
									}
								}
							},
							abrupt: function(e, t) {
								for (var r = this.tryEntries.length - 1; r >= 0; --r) {
									var n = this.tryEntries[r];
									if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
										var a = n;
										break
									}
								}
								a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
								var s = a ? a.completion : {};
								return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, c) : this.complete(s)
							},
							complete: function(e, t) {
								if ("throw" === e.type) throw e.arg;
								return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), c
							},
							finish: function(e) {
								for (var t = this.tryEntries.length - 1; t >= 0; --t) {
									var r = this.tryEntries[t];
									if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), A(r), c
								}
							},
							catch: function(e) {
								for (var t = this.tryEntries.length - 1; t >= 0; --t) {
									var r = this.tryEntries[t];
									if (r.tryLoc === e) {
										var i = r.completion;
										if ("throw" === i.type) {
											var n = i.arg;
											A(r)
										}
										return n
									}
								}
								throw new Error("illegal catch attempt")
							},
							delegateYield: function(e, t, r) {
								return this.delegate = {
									iterator: R(e),
									resultName: t,
									nextLoc: r
								}, "next" === this.method && (this.arg = void 0), c
							}
						}
					}

					function g(e, t, r, i) {
						var n = t && t.prototype instanceof m ? t : m,
							a = Object.create(n.prototype),
							s = new w(i || []);
						return a._invoke = function(e, t, r) {
							var i = "suspendedStart";
							return function(n, a) {
								if ("executing" === i) throw new Error("Generator is already running");
								if ("completed" === i) {
									if ("throw" === n) throw a;
									return L()
								}
								for (r.method = n, r.arg = a;;) {
									var s = r.delegate;
									if (s) {
										var o = S(s, r);
										if (o) {
											if (o === c) continue;
											return o
										}
									}
									if ("next" === r.method) r.sent = r._sent = r.arg;
									else if ("throw" === r.method) {
										if ("suspendedStart" === i) throw i = "completed", r.arg;
										r.dispatchException(r.arg)
									} else "return" === r.method && r.abrupt("return", r.arg);
									i = "executing";
									var l = v(e, t, r);
									if ("normal" === l.type) {
										if (i = r.done ? "completed" : "suspendedYield", l.arg === c) continue;
										return {
											value: l.arg,
											done: r.done
										}
									}
									"throw" === l.type && (i = "completed", r.method = "throw", r.arg = l.arg)
								}
							}
						}(e, r, s), a
					}

					function v(e, t, r) {
						try {
							return {
								type: "normal",
								arg: e.call(t, r)
							}
						} catch (e) {
							return {
								type: "throw",
								arg: e
							}
						}
					}

					function m() {}

					function _() {}

					function y() {}

					function E(e) {
						["next", "throw", "return"].forEach((function(t) {
							e[t] = function(e) {
								return this._invoke(t, e)
							}
						}))
					}

					function b(e) {
						function r(t, n, a, s) {
							var o = v(e[t], e, n);
							if ("throw" !== o.type) {
								var l = o.arg,
									u = l.value;
								return u && "object" == typeof u && i.call(u, "__await") ? Promise.resolve(u.__await)
									.then((function(e) {
										r("next", e, a, s)
									}), (function(e) {
										r("throw", e, a, s)
									})) : Promise.resolve(u)
									.then((function(e) {
										l.value = e, a(l)
									}), s)
							}
							s(o.arg)
						}
						var n;
						"object" == typeof t.process && t.process.domain && (r = t.process.domain.bind(r)), this._invoke = function(e, t) {
							function i() {
								return new Promise((function(i, n) {
									r(e, t, i, n)
								}))
							}
							return n = n ? n.then(i, i) : i()
						}
					}

					function S(e, t) {
						var r = e.iterator[t.method];
						if (void 0 === r) {
							if (t.delegate = null, "throw" === t.method) {
								if (e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method)) return c;
								t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
							}
							return c
						}
						var i = v(r, e.iterator, t.arg);
						if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, c;
						var n = i.arg;
						return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, c) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, c)
					}

					function T(e) {
						var t = {
							tryLoc: e[0]
						};
						1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
					}

					function A(e) {
						var t = e.completion || {};
						t.type = "normal", delete t.arg, e.completion = t
					}

					function w(e) {
						this.tryEntries = [{
							tryLoc: "root"
						}], e.forEach(T, this), this.reset(!0)
					}

					function R(e) {
						if (e) {
							var t = e[a];
							if (t) return t.call(e);
							if ("function" == typeof e.next) return e;
							if (!isNaN(e.length)) {
								var r = -1,
									n = function t() {
										for (; ++r < e.length;)
											if (i.call(e, r)) return t.value = e[r], t.done = !1, t;
										return t.value = void 0, t.done = !0, t
									};
								return n.next = n
							}
						}
						return {
							next: L
						}
					}

					function L() {
						return {
							value: void 0,
							done: !0
						}
					}
				}("object" == typeof t ? t : "object" == typeof window ? window : "object" == typeof self ? self : this)
			})
			.call(this, r(70))
		}, function(e, t, r) {
			r(342), e.exports = r(19)
				.RegExp.escape
		}, function(e, t, r) {
			var i = r(0),
				n = r(343)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
			i(i.S, "RegExp", {
				escape: function(e) {
					return n(e)
				}
			})
		}, function(e, t) {
			e.exports = function(e, t) {
				var r = t === Object(t) ? function(e) {
					return t[e]
				} : t;
				return function(t) {
					return String(t)
						.replace(e, r)
				}
			}
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}(),
				n = f(r(98)),
				a = f(r(136)),
				s = f(r(137)),
				o = f(r(349)),
				l = f(r(140)),
				u = f(r(48)),
				c = f(r(54)),
				d = f(r(354)),
				h = f(r(99));

			function f(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function p(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function g(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var v = function(e) {
				function t(e) {
					var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					p(this, t);
					var i = {
						target: null,
						source: null,
						autoplay: !1,
						mode: a.default.PC,
						currentTime: 0,
						loop: !1,
						muted: !1,
						playbackRate: 1,
						poster: "",
						volume: 1,
						showPictureInPicture: !0,
						loadingNode: null,
						leftControls: [],
						rightControls: [],
						centerControls: []
					};
					i.target = e;
					var n = g(this, (t.__proto__ || Object.getPrototypeOf(t))
						.call(this));
					return n.option = Object.assign({}, i, r), n.video_ = null, (0, d.default)() || (n.option.mode = a.default.MB), n.init(), n
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), i(t, [{
					key: "init",
					value: function() {
						var e = this,
							t = this.option.target,
							r = this.option.source,
							i = this.videoTarget_ = null,
							n = this.videoSource_ = null;
						switch (i = "string" == typeof t ? document.getElementById(t) : t, n = r instanceof l.default ? r : new l.default({
							src: r
						}), this.option.mode) {
							case a.default.PC:
								this.video_ = new s.default({
									mode: this.option.mode,
									target: i,
									source: n,
									autoplay: this.option.autoplay,
									currentTime: this.option.currentTime,
									loop: this.option.loop,
									muted: this.option.muted,
									playbackRate: this.option.playbackRate,
									poster: this.option.poster,
									volume: this.option.volume,
									showPictureInPicture: this.option.showPictureInPicture,
									loadingNode: this.option.loadingNode,
									leftControls: this.option.leftControls,
									rightControls: this.option.rightControls,
									centerControls: this.option.centerControls
								});
								break;
							case a.default.MB:
								this.video_ = new o.default({
									mode: this.option.mode,
									target: i,
									source: n,
									autoplay: this.option.autoplay,
									currentTime: this.option.currentTime,
									loop: this.option.loop,
									muted: this.option.muted,
									playbackRate: this.option.playbackRate,
									poster: this.option.poster,
									volume: this.option.volume,
									showPictureInPicture: this.option.showPictureInPicture,
									loadingNode: this.option.loadingNode,
									leftControls: this.option.leftControls,
									rightControls: this.option.rightControls,
									centerControls: this.option.centerControls
								})
						}
						this.video_.ontimeupdate_ = function(t) {
							e.dispatchEvent(c.default.CHANGE)
						}, this.video_.onready_ = function() {
							e.dispatchEvent(c.default.READY)
						}, this.video_.videoEvent_ = function(t) {
							switch (e.dispatchEvent(t), t) {
								case c.default.TIME_UPDATE:
									e.option.currentTime = e.video_.option.currentTime = e.video_.getCurrentTime_();
									break;
								case c.default.VOLUME_CHANGE:
									e.option.volume = e.video_.option.volume = e.video_.getVolume_();
									break;
								case c.default.RATE_CHANGE:
									e.option.playbackRate = e.video_.option.playbackRate = e.video_.getPlaybackRate_()
							}
						}
					}
				}, {
					key: "getContainer",
					value: function() {
						return this.videoTarget_
					}
				}, {
					key: "setPath",
					value: function(e) {
						var t = this.video_;
						t.source_.option.blob && t.sourceType === h.default.MP4 ? t.xhrBlob(e) : t.video_.src = e, t.initTimes_(), t.clearBarrages_()
					}
				}, {
					key: "setSource",
					value: function(e) {
						var t = void 0;
						t = e instanceof l.default ? e : new l.default({
							src: e
						}), this.removeSource(), this.video_.video_.load(), this.video_.addSource_(t)
					}
				}, {
					key: "removeSource",
					value: function() {
						this.video_.video_.removeChild(this.video_.source_)
					}
				}, {
					key: "play",
					value: function() {
						this.video_.play_()
					}
				}, {
					key: "pause",
					value: function() {
						this.video_.pause_()
					}
				}, {
					key: "getAllTime",
					value: function() {
						return this.video_.getAllTime_()
					}
				}, {
					key: "getCurrentTime",
					value: function() {
						return this.video_.getCurrentTime_()
					}
				}, {
					key: "setCurrentTime",
					value: function(e) {
						this.video_.setCurrentTimeClone_(e)
					}
				}, {
					key: "isReady",
					value: function() {
						return this.video_.isReady_()
					}
				}, {
					key: "isEnded",
					value: function() {
						return this.video_.isEnded_()
					}
				}, {
					key: "setLoop",
					value: function() {
						var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						this.video_.setLoop_(e)
					}
				}, {
					key: "isLoop",
					value: function() {
						return this.video_.isLoop_()
					}
				}, {
					key: "setMuted",
					value: function() {
						var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						this.video_.setMuted_(e)
					}
				}, {
					key: "isMuted",
					value: function() {
						return this.video_.isMuted_()
					}
				}, {
					key: "getNetworkState",
					value: function() {
						return this.video_.getNetworkState_()
					}
				}, {
					key: "isPlay",
					value: function() {
						return this.video_.isPlay_()
					}
				}, {
					key: "getPlaybackRate",
					value: function() {
						return this.video_.getPlaybackRate_()
					}
				}, {
					key: "setPlaybackRate",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
						this.video_.setPlaybackRate_(e)
					}
				}, {
					key: "setPoster",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
						this.video_.setPoster_(e)
					}
				}, {
					key: "setVolume",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
						this.video_.setVolume_(e)
					}
				}, {
					key: "getVolume",
					value: function() {
						return this.video_.getVolume_()
					}
				}, {
					key: "addControlLeft",
					value: function(e) {
						e instanceof u.default && this.video_.addControlLeft_(e)
					}
				}, {
					key: "addControlRight",
					value: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						e instanceof u.default && this.video_.addControlRight_(e, t)
					}
				}, {
					key: "addControlCenter",
					value: function(e) {
						e instanceof u.default && this.video_.addControlCenter_(e)
					}
				}, {
					key: "fullScreen",
					value: function() {
						this.video_.fullScreen_()
					}
				}, {
					key: "cancelFullScreen",
					value: function() {
						this.video_.cancelFullScreen_()
					}
				}, {
					key: "addBarrage",
					value: function(e) {
						this.video_.addBarrage_(e)
					}
				}, {
					key: "clearBarrages",
					value: function() {
						this.video_.clearBarrages_()
					}
				}, {
					key: "enterPicInPic",
					value: function() {
						this.video_.enterPicInPic_()
					}
				}, {
					key: "leavePicInPic",
					value: function() {
						this.video_.leavePicInPic_()
					}
				}]), t
			}(n.default);
			t.default = v
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var i = t[r];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, r, i) {
					return r && e(t.prototype, r), i && e(t, i), t
				}
			}();
			var n = function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.disposed = !1
				}
				return i(e, [{
					key: "dispose",
					value: function() {
						this.disposed || (this.disposed = !0, this.disposeInternal())
					}
				}, {
					key: "disposeInternal",
					value: function() {}
				}]), e
			}();
			t.default = n
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
				function e(e, t) {
					for (var r = 0; r < t.length; r++) {
						var i = t[r];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, r, i) {
					return r && e(t.prototype, r), i && e(t, i), t
				}
			}();
			t.stopPropagation = function(e) {
				e.stopPropagation()
			}, t.preventDefault = function(e) {
				e.preventDefault()
			};
			var n = function() {
				function e(t) {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.propagationStopped, this.type = t, this.target = null
				}
				return i(e, [{
					key: "preventDefault",
					value: function() {
						this.propagationStopped = !0
					}
				}, {
					key: "stopPropagation",
					value: function() {
						this.propagationStopped = !0
					}
				}]), e
			}();
			t.default = n
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.TRUE = function() {
				return !0
			}, t.FALSE = function() {
				return !1
			}, t.VOID = function() {}, t.memoizeOne = function(e) {
				var t = !1,
					r = void 0,
					n = void 0,
					a = void 0;
				return function() {
					var s = Array.prototype.slice.call(arguments);
					return t && this === a && (0, i.equals)(s, n) || (t = !0, a = this, n = s, r = e.apply(this, arguments)), r
				}
			};
			var i = r(348)
		}, function(e, t, r) {
			"use strict";

			function i(e, t) {
				return e > t ? 1 : e < t ? -1 : 0
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.binarySearch = function(e, t, r) {
				var n = void 0,
					a = void 0,
					s = r || i,
					o = 0,
					l = e.length,
					u = !1;
				for (; o < l;) n = o + (l - o >> 1), (a = Number(s(e[n], t))) < 0 ? o = n + 1 : (l = n, u = !a);
				return u ? o : ~o
			}, t.numberSafeCompareFunction = i, t.includes = function(e, t) {
				return e.indexOf(t) >= 0
			}, t.linearFindNearest = function(e, t, r) {
				var i = e.length;
				if (e[0] <= t) return 0;
				if (t <= e[i - 1]) return i - 1;
				var n = void 0;
				if (r > 0) {
					for (n = 1; n < i; ++n)
						if (e[n] < t) return n - 1
				} else if (r < 0) {
					for (n = 1; n < i; ++n)
						if (e[n] <= t) return n
				} else
					for (n = 1; n < i; ++n) {
						if (e[n] == t) return n;
						if (e[n] < t) return e[n - 1] - t < t - e[n] ? n - 1 : n
					}
				return i - 1
			}, t.reverseSubArray = function(e, t, r) {
				for (; t < r;) {
					var i = e[t];
					e[t] = e[r], e[r] = i, ++t, --r
				}
			}, t.extend = function(e, t) {
				for (var r = Array.isArray(t) ? t : [t], i = r.length, n = 0; n < i; n++) e[e.length] = r[n]
			}, t.remove = function(e, t) {
				var r = e.indexOf(t),
					i = r > -1;
				i && e.splice(r, 1);
				return i
			}, t.find = function(e, t) {
				for (var r = e.length >>> 0, i = void 0, n = 0; n < r; n++)
					if (i = e[n], t(i, n, e)) return i;
				return null
			}, t.equals = function(e, t) {
				var r = e.length;
				if (r !== t.length) return !1;
				for (var i = 0; i < r; i++)
					if (e[i] !== t[i]) return !1;
				return !0
			}, t.stableSort = function(e, t) {
				var r = e.length,
					i = Array(e.length),
					n = void 0;
				for (n = 0; n < r; n++) i[n] = {
					index: n,
					value: e[n]
				};
				for (i.sort((function(e, r) {
					return t(e.value, r.value) || e.index - r.index
				})), n = 0; n < e.length; n++) e[n] = i[n].value
			}, t.findIndex = function(e, t) {
				var r = void 0;
				return e.every((function(i, n) {
					return r = n, !t(i, n, e)
				})) ? -1 : r
			}, t.isSorted = function(e, t, r) {
				var n = t || i;
				return e.every((function(t, i) {
					if (0 === i) return !0;
					var a = n(e[i - 1], t);
					return !(a > 0 || r && 0 === a)
				}))
			}
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i, n = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}(),
				a = r(137),
				s = (i = a) && i.__esModule ? i : {
					default: i
				},
				o = r(138);

			function l(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function u(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var c = function(e) {
				function t() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					l(this, t);
					var r = {
							target: null,
							source: null,
							autoplay: !1
						},
						i = Object.assign({}, r, e);
					return u(this, (t.__proto__ || Object.getPrototypeOf(t))
						.call(this, i))
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), n(t, [{
					key: "setEventDefaultControl_",
					value: function() {
						var e = this,
							t = this.muteMenu_,
							r = this.mutePanel_,
							i = this.progressBar_,
							n = this.progressBtn_;
						t.onmouseover = function() {
							r.classList.remove("hide")
						};
						var a = null;
						t.onmouseleave = function() {
							a = setTimeout((function() {
								r.classList.add("hide"), clearTimeout(a)
							}), 500)
						}, r.onmouseover = function() {
							r.classList.remove("hide"), clearTimeout(a)
						}, r.onmouseleave = function() {
							r.classList.remove("hide")
						}, r.onclick = function(e) {
							e.stopPropagation()
						}, i.onmouseover = function() {
							i.style.height = "4px"
						}, i.onmouseout = function() {
							i.style.height = "2px"
						};
						var s = null,
							l = null,
							u = null,
							c = null,
							d = null,
							h = function t() {
								document.removeEventListener("touchmove", f), document.removeEventListener("touchend", t), e.play_(), e.setCurrentTime_(d), e.clearBarrages_()
							},
							f = function(t) {
								e.pause_();
								var r = t.targetTouches[0].clientX,
									i = Math.min(s, Math.max(-2, u + (r - l))) / c,
									a = 100 * i + "%";
								n.style.left = a, e.progressNum_.style.width = a;
								var h = e.getAllTime_();
								d = h * i, e.timeStart_.innerHTML = (0, o.formatSeconds)(d), t.preventDefault()
							};
						n.addEventListener("touchstart", (function(e) {
							var t = e.targetTouches[0];
							l = t.clientX, u = n.offsetLeft, s = i.offsetWidth - n.offsetWidth, c = i.clientWidth, d = 0, document.addEventListener("touchmove", f, {
								passive: !1
							}), document.addEventListener("touchend", h), e.preventDefault()
						}), {
							passive: !1
						})
					}
				}]), t
			}(s.default);
			t.default = c
		}, function(e, t, r) {
			var i;
			"undefined" != typeof window && (i = function() {
				return function(e) {
						var t = {};

						function r(i) {
							if (t[i]) return t[i].exports;
							var n = t[i] = {
								i: i,
								l: !1,
								exports: {}
							};
							return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
						}
						return r.m = e, r.c = t, r.d = function(e, t, i) {
							r.o(e, t) || Object.defineProperty(e, t, {
								enumerable: !0,
								get: i
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
							var i = Object.create(null);
							if (r.r(i), Object.defineProperty(i, "default", {
								enumerable: !0,
								value: e
							}), 2 & t && "string" != typeof e)
								for (var n in e) r.d(i, n, function(t) {
									return e[t]
								}.bind(null, n));
							return i
						}, r.n = function(e) {
							var t = e && e.__esModule ? function() {
								return e.default
							} : function() {
								return e
							};
							return r.d(t, "a", t), t
						}, r.o = function(e, t) {
							return Object.prototype.hasOwnProperty.call(e, t)
						}, r.p = "/dist/", r(r.s = "./src/hls.ts")
					}({
						"./node_modules/eventemitter3/index.js":
							/*!*********************************************!*\
							  !*** ./node_modules/eventemitter3/index.js ***!
							  \*********************************************/
							/*! no static exports found */
							/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
							function(e, t, r) {
								"use strict";
								var i = Object.prototype.hasOwnProperty,
									n = "~";

								function a() {}

								function s(e, t, r) {
									this.fn = e, this.context = t, this.once = r || !1
								}

								function o(e, t, r, i, a) {
									if ("function" != typeof r) throw new TypeError("The listener must be a function");
									var o = new s(r, i || e, a),
										l = n ? n + t : t;
									return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], o] : e._events[l].push(o) : (e._events[l] = o, e._eventsCount++), e
								}

								function l(e, t) {
									0 == --e._eventsCount ? e._events = new a : delete e._events[t]
								}

								function u() {
									this._events = new a, this._eventsCount = 0
								}
								Object.create && (a.prototype = Object.create(null), (new a)
									.__proto__ || (n = !1)), u.prototype.eventNames = function() {
									var e, t, r = [];
									if (0 === this._eventsCount) return r;
									for (t in e = this._events) i.call(e, t) && r.push(n ? t.slice(1) : t);
									return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
								}, u.prototype.listeners = function(e) {
									var t = n ? n + e : e,
										r = this._events[t];
									if (!r) return [];
									if (r.fn) return [r.fn];
									for (var i = 0, a = r.length, s = new Array(a); i < a; i++) s[i] = r[i].fn;
									return s
								}, u.prototype.listenerCount = function(e) {
									var t = n ? n + e : e,
										r = this._events[t];
									return r ? r.fn ? 1 : r.length : 0
								}, u.prototype.emit = function(e, t, r, i, a, s) {
									var o = n ? n + e : e;
									if (!this._events[o]) return !1;
									var l, u, c = this._events[o],
										d = arguments.length;
									if (c.fn) {
										switch (c.once && this.removeListener(e, c.fn, void 0, !0), d) {
											case 1:
												return c.fn.call(c.context), !0;
											case 2:
												return c.fn.call(c.context, t), !0;
											case 3:
												return c.fn.call(c.context, t, r), !0;
											case 4:
												return c.fn.call(c.context, t, r, i), !0;
											case 5:
												return c.fn.call(c.context, t, r, i, a), !0;
											case 6:
												return c.fn.call(c.context, t, r, i, a, s), !0
										}
										for (u = 1, l = new Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
										c.fn.apply(c.context, l)
									} else {
										var h, f = c.length;
										for (u = 0; u < f; u++) switch (c[u].once && this.removeListener(e, c[u].fn, void 0, !0), d) {
											case 1:
												c[u].fn.call(c[u].context);
												break;
											case 2:
												c[u].fn.call(c[u].context, t);
												break;
											case 3:
												c[u].fn.call(c[u].context, t, r);
												break;
											case 4:
												c[u].fn.call(c[u].context, t, r, i);
												break;
											default:
												if (!l)
													for (h = 1, l = new Array(d - 1); h < d; h++) l[h - 1] = arguments[h];
												c[u].fn.apply(c[u].context, l)
										}
									}
									return !0
								}, u.prototype.on = function(e, t, r) {
									return o(this, e, t, r, !1)
								}, u.prototype.once = function(e, t, r) {
									return o(this, e, t, r, !0)
								}, u.prototype.removeListener = function(e, t, r, i) {
									var a = n ? n + e : e;
									if (!this._events[a]) return this;
									if (!t) return l(this, a), this;
									var s = this._events[a];
									if (s.fn) s.fn !== t || i && !s.once || r && s.context !== r || l(this, a);
									else {
										for (var o = 0, u = [], c = s.length; o < c; o++)(s[o].fn !== t || i && !s[o].once || r && s[o].context !== r) && u.push(s[o]);
										u.length ? this._events[a] = 1 === u.length ? u[0] : u : l(this, a)
									}
									return this
								}, u.prototype.removeAllListeners = function(e) {
									var t;
									return e ? (t = n ? n + e : e, this._events[t] && l(this, t)) : (this._events = new a, this._eventsCount = 0), this
								}, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = n, u.EventEmitter = u, e.exports = u
							},
						"./node_modules/url-toolkit/src/url-toolkit.js":
							/*!*****************************************************!*\
							  !*** ./node_modules/url-toolkit/src/url-toolkit.js ***!
							  \*****************************************************/
							/*! no static exports found */
							/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
							function(e, t, r) {
								var i, n, a, s, o;
								i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/, n = /^([^\/?#]*)(.*)$/, a = /(?:\/|^)\.(?=\/)/g, s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
									buildAbsoluteURL: function(e, t, r) {
										if (r = r || {}, e = e.trim(), !(t = t.trim())) {
											if (!r.alwaysNormalize) return e;
											var i = o.parseURL(e);
											if (!i) throw new Error("Error trying to parse base URL.");
											return i.path = o.normalizePath(i.path), o.buildURLFromParts(i)
										}
										var a = o.parseURL(t);
										if (!a) throw new Error("Error trying to parse relative URL.");
										if (a.scheme) return r.alwaysNormalize ? (a.path = o.normalizePath(a.path), o.buildURLFromParts(a)) : t;
										var s = o.parseURL(e);
										if (!s) throw new Error("Error trying to parse base URL.");
										if (!s.netLoc && s.path && "/" !== s.path[0]) {
											var l = n.exec(s.path);
											s.netLoc = l[1], s.path = l[2]
										}
										s.netLoc && !s.path && (s.path = "/");
										var u = {
											scheme: s.scheme,
											netLoc: a.netLoc,
											path: null,
											params: a.params,
											query: a.query,
											fragment: a.fragment
										};
										if (!a.netLoc && (u.netLoc = s.netLoc, "/" !== a.path[0]))
											if (a.path) {
												var c = s.path,
													d = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
												u.path = o.normalizePath(d)
											} else u.path = s.path, a.params || (u.params = s.params, a.query || (u.query = s.query));
										return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(a.path) : a.path), o.buildURLFromParts(u)
									},
									parseURL: function(e) {
										var t = i.exec(e);
										return t ? {
											scheme: t[1] || "",
											netLoc: t[2] || "",
											path: t[3] || "",
											params: t[4] || "",
											query: t[5] || "",
											fragment: t[6] || ""
										} : null
									},
									normalizePath: function(e) {
										for (e = e.split("")
											.reverse()
											.join("")
											.replace(a, ""); e.length !== (e = e.replace(s, ""))
											.length;);
										return e.split("")
											.reverse()
											.join("")
									},
									buildURLFromParts: function(e) {
										return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
									}
								}, e.exports = o
							},
						"./node_modules/webworkify-webpack/index.js":
							/*!**************************************************!*\
							  !*** ./node_modules/webworkify-webpack/index.js ***!
							  \**************************************************/
							/*! no static exports found */
							/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
							function(e, t, r) {
								function i(e) {
									var t = {};

									function r(i) {
										if (t[i]) return t[i].exports;
										var n = t[i] = {
											i: i,
											l: !1,
											exports: {}
										};
										return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
									}
									r.m = e, r.c = t, r.i = function(e) {
										return e
									}, r.d = function(e, t, i) {
										r.o(e, t) || Object.defineProperty(e, t, {
											configurable: !1,
											enumerable: !0,
											get: i
										})
									}, r.r = function(e) {
										Object.defineProperty(e, "__esModule", {
											value: !0
										})
									}, r.n = function(e) {
										var t = e && e.__esModule ? function() {
											return e.default
										} : function() {
											return e
										};
										return r.d(t, "a", t), t
									}, r.o = function(e, t) {
										return Object.prototype.hasOwnProperty.call(e, t)
									}, r.p = "/", r.oe = function(e) {
										throw console.error(e), e
									};
									var i = r(r.s = ENTRY_MODULE);
									return i.default || i
								}

								function n(e) {
									return (e + "")
										.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
								}

								function a(e, t, i) {
									var a = {};
									a[i] = [];
									var s = t.toString(),
										o = s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
									if (!o) return a;
									for (var l, u = o[1], c = new RegExp("(\\\\n|\\W)" + n(u) + "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)", "g"); l = c.exec(s);) "dll-reference" !== l[3] && a[i].push(l[3]);
									for (c = new RegExp("\\(" + n(u) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)', "g"); l = c.exec(s);) e[l[2]] || (a[i].push(l[1]), e[l[2]] = r(l[1])
										.m), a[l[2]] = a[l[2]] || [], a[l[2]].push(l[4]);
									for (var d, h = Object.keys(a), f = 0; f < h.length; f++)
										for (var p = 0; p < a[h[f]].length; p++) d = a[h[f]][p], isNaN(1 * d) || (a[h[f]][p] = 1 * a[h[f]][p]);
									return a
								}

								function s(e) {
									return Object.keys(e)
										.reduce((function(t, r) {
											return t || e[r].length > 0
										}), !1)
								}
								e.exports = function(e, t) {
									t = t || {};
									var n = {
											main: r.m
										},
										o = t.all ? {
											main: Object.keys(n.main)
										} : function(e, t) {
											for (var r = {
												main: [t]
											}, i = {
												main: []
											}, n = {
												main: {}
											}; s(r);)
												for (var o = Object.keys(r), l = 0; l < o.length; l++) {
													var u = o[l],
														c = r[u].pop();
													if (n[u] = n[u] || {}, !n[u][c] && e[u][c]) {
														n[u][c] = !0, i[u] = i[u] || [], i[u].push(c);
														for (var d = a(e, e[u][c], u), h = Object.keys(d), f = 0; f < h.length; f++) r[h[f]] = r[h[f]] || [], r[h[f]] = r[h[f]].concat(d[h[f]])
													}
												}
											return i
										}(n, e),
										l = "";
									Object.keys(o)
										.filter((function(e) {
											return "main" !== e
										}))
										.forEach((function(e) {
											for (var t = 0; o[e][t];) t++;
											o[e].push(t), n[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", l = l + "var " + e + " = (" + i.toString()
												.replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + o[e].map((function(t) {
													return JSON.stringify(t) + ": " + n[e][t].toString()
												}))
												.join(",") + "});\n"
										})), l = l + "new ((" + i.toString()
										.replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + o.main.map((function(e) {
											return JSON.stringify(e) + ": " + n.main[e].toString()
										}))
										.join(",") + "}))(self);";
									var u = new window.Blob([l], {
										type: "text/javascript"
									});
									if (t.bare) return u;
									var c = (window.URL || window.webkitURL || window.mozURL || window.msURL)
										.createObjectURL(u),
										d = new window.Worker(c);
									return d.objectURL = c, d
								}
							},
						"./src/crypt/decrypter.js":
							/*!********************************************!*\
							  !*** ./src/crypt/decrypter.js + 3 modules ***!
							  \********************************************/
							/*! exports provided: default */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/errors.ts because of ./src/hls.ts */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/events.js because of ./src/hls.ts */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/utils/get-self-scope.js because of ./src/hls.ts */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/utils/logger.js because of ./src/hls.ts */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var i = function() {
										function e(e, t) {
											this.subtle = e, this.aesIV = t
										}
										return e.prototype.decrypt = function(e, t) {
											return this.subtle.decrypt({
												name: "AES-CBC",
												iv: this.aesIV
											}, t, e)
										}, e
									}(),
									n = function() {
										function e(e, t) {
											this.subtle = e, this.key = t
										}
										return e.prototype.expandKey = function() {
											return this.subtle.importKey("raw", this.key, {
												name: "AES-CBC"
											}, !1, ["encrypt", "decrypt"])
										}, e
									}(),
									a = function() {
										function e() {
											this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
										}
										var t = e.prototype;
										return t.uint8ArrayToUint32Array_ = function(e) {
											for (var t = new DataView(e), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = t.getUint32(4 * i);
											return r
										}, t.initTable = function() {
											var e = this.sBox,
												t = this.invSBox,
												r = this.subMix,
												i = r[0],
												n = r[1],
												a = r[2],
												s = r[3],
												o = this.invSubMix,
												l = o[0],
												u = o[1],
												c = o[2],
												d = o[3],
												h = new Uint32Array(256),
												f = 0,
												p = 0,
												g = 0;
											for (g = 0; g < 256; g++) h[g] = g < 128 ? g << 1 : g << 1 ^ 283;
											for (g = 0; g < 256; g++) {
												var v = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
												v = v >>> 8 ^ 255 & v ^ 99, e[f] = v, t[v] = f;
												var m = h[f],
													_ = h[m],
													y = h[_],
													E = 257 * h[v] ^ 16843008 * v;
												i[f] = E << 24 | E >>> 8, n[f] = E << 16 | E >>> 16, a[f] = E << 8 | E >>> 24, s[f] = E, E = 16843009 * y ^ 65537 * _ ^ 257 * m ^ 16843008 * f, l[v] = E << 24 | E >>> 8, u[v] = E << 16 | E >>> 16, c[v] = E << 8 | E >>> 24, d[v] = E, f ? (f = m ^ h[h[h[y ^ m]]], p ^= h[h[p]]) : f = p = 1
											}
										}, t.expandKey = function(e) {
											for (var t = this.uint8ArrayToUint32Array_(e), r = !0, i = 0; i < t.length && r;) r = t[i] === this.key[i], i++;
											if (!r) {
												this.key = t;
												var n = this.keySize = t.length;
												if (4 !== n && 6 !== n && 8 !== n) throw new Error("Invalid aes key size=" + n);
												var a, s, o, l, u = this.ksRows = 4 * (n + 6 + 1),
													c = this.keySchedule = new Uint32Array(u),
													d = this.invKeySchedule = new Uint32Array(u),
													h = this.sBox,
													f = this.rcon,
													p = this.invSubMix,
													g = p[0],
													v = p[1],
													m = p[2],
													_ = p[3];
												for (a = 0; a < u; a++) a < n ? o = c[a] = t[a] : (l = o, a % n == 0 ? (l = h[(l = l << 8 | l >>> 24) >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l], l ^= f[a / n | 0] << 24) : n > 6 && a % n == 4 && (l = h[l >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l]), c[a] = o = (c[a - n] ^ l) >>> 0);
												for (s = 0; s < u; s++) a = u - s, l = 3 & s ? c[a] : c[a - 4], d[s] = s < 4 || a <= 4 ? l : g[h[l >>> 24]] ^ v[h[l >>> 16 & 255]] ^ m[h[l >>> 8 & 255]] ^ _[h[255 & l]], d[s] = d[s] >>> 0
											}
										}, t.networkToHostOrderSwap = function(e) {
											return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
										}, t.decrypt = function(e, t, r, i) {
											for (var n, a, s, o, l, u, c, d, h, f, p, g, v, m, _, y, E, b = this.keySize + 6, S = this.invKeySchedule, T = this.invSBox, A = this.invSubMix, w = A[0], R = A[1], L = A[2], k = A[3], O = this.uint8ArrayToUint32Array_(r), D = O[0], C = O[1], I = O[2], x = O[3], P = new Int32Array(e), M = new Int32Array(P.length), F = this.networkToHostOrderSwap; t < P.length;) {
												for (h = F(P[t]), f = F(P[t + 1]), p = F(P[t + 2]), g = F(P[t + 3]), l = h ^ S[0], u = g ^ S[1], c = p ^ S[2], d = f ^ S[3], v = 4, m = 1; m < b; m++) n = w[l >>> 24] ^ R[u >> 16 & 255] ^ L[c >> 8 & 255] ^ k[255 & d] ^ S[v], a = w[u >>> 24] ^ R[c >> 16 & 255] ^ L[d >> 8 & 255] ^ k[255 & l] ^ S[v + 1], s = w[c >>> 24] ^ R[d >> 16 & 255] ^ L[l >> 8 & 255] ^ k[255 & u] ^ S[v + 2], o = w[d >>> 24] ^ R[l >> 16 & 255] ^ L[u >> 8 & 255] ^ k[255 & c] ^ S[v + 3], l = n, u = a, c = s, d = o, v += 4;
												n = T[l >>> 24] << 24 ^ T[u >> 16 & 255] << 16 ^ T[c >> 8 & 255] << 8 ^ T[255 & d] ^ S[v], a = T[u >>> 24] << 24 ^ T[c >> 16 & 255] << 16 ^ T[d >> 8 & 255] << 8 ^ T[255 & l] ^ S[v + 1], s = T[c >>> 24] << 24 ^ T[d >> 16 & 255] << 16 ^ T[l >> 8 & 255] << 8 ^ T[255 & u] ^ S[v + 2], o = T[d >>> 24] << 24 ^ T[l >> 16 & 255] << 16 ^ T[u >> 8 & 255] << 8 ^ T[255 & c] ^ S[v + 3], v += 3, M[t] = F(n ^ D), M[t + 1] = F(o ^ C), M[t + 2] = F(s ^ I), M[t + 3] = F(a ^ x), D = h, C = f, I = p, x = g, t += 4
											}
											return i ? (_ = M.buffer, y = _.byteLength, (E = y && new DataView(_)
												.getUint8(y - 1)) ? _.slice(0, y - E) : _) : M.buffer
										}, t.destroy = function() {
											this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
										}, e
									}(),
									s = r("./src/errors.ts"),
									o = r("./src/utils/logger.js"),
									l = r("./src/events.js"),
									u = r("./src/utils/get-self-scope.js"),
									c = Object(u.getSelfScope)(),
									d = function() {
										function e(e, t, r) {
											var i = (void 0 === r ? {} : r)
												.removePKCS7Padding,
												n = void 0 === i || i;
											if (this.logEnabled = !0, this.observer = e, this.config = t, this.removePKCS7Padding = n, n) try {
												var a = c.crypto;
												a && (this.subtle = a.subtle || a.webkitSubtle)
											} catch (e) {}
											this.disableWebCrypto = !this.subtle
										}
										var t = e.prototype;
										return t.isSync = function() {
											return this.disableWebCrypto && this.config.enableSoftwareAES
										}, t.decrypt = function(e, t, r, s) {
											var l = this;
											if (this.disableWebCrypto && this.config.enableSoftwareAES) {
												this.logEnabled && (o.logger.log("JS AES decrypt"), this.logEnabled = !1);
												var u = this.decryptor;
												u || (this.decryptor = u = new a), u.expandKey(t), s(u.decrypt(e, 0, r, this.removePKCS7Padding))
											} else {
												this.logEnabled && (o.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1);
												var c = this.subtle;
												this.key !== t && (this.key = t, this.fastAesKey = new n(c, t)), this.fastAesKey.expandKey()
													.then((function(n) {
														new i(c, r)
															.decrypt(e, n)
															.catch((function(i) {
																l.onWebCryptoError(i, e, t, r, s)
															}))
															.then((function(e) {
																s(e)
															}))
													}))
													.catch((function(i) {
														l.onWebCryptoError(i, e, t, r, s)
													}))
											}
										}, t.onWebCryptoError = function(e, t, r, i, n) {
											this.config.enableSoftwareAES ? (o.logger.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, i, n)) : (o.logger.error("decrypting error : " + e.message), this.observer.trigger(l.default.ERROR, {
												type: s.ErrorTypes.MEDIA_ERROR,
												details: s.ErrorDetails.FRAG_DECRYPT_ERROR,
												fatal: !0,
												reason: e.message
											}))
										}, t.destroy = function() {
											var e = this.decryptor;
											e && (e.destroy(), this.decryptor = void 0)
										}, e
									}();
								t.default = d
							},
						"./src/demux/demuxer-inline.js":
							/*!**************************************************!*\
							  !*** ./src/demux/demuxer-inline.js + 12 modules ***!
							  \**************************************************/
							/*! exports provided: default */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/crypt/decrypter.js because of ./src/hls.ts */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/demux/id3.js because of ./src/hls.ts */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/demux/mp4demuxer.js because of ./src/hls.ts */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/errors.ts because of ./src/hls.ts */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/events.js because of ./src/hls.ts */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/polyfills/number.js because of ./src/hls.ts */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/utils/get-self-scope.js because of ./src/hls.ts */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/utils/logger.js because of ./src/hls.ts */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var i = r("./src/events.js"),
									n = r("./src/errors.ts"),
									a = r("./src/crypt/decrypter.js"),
									s = r("./src/polyfills/number.js"),
									o = r("./src/utils/logger.js"),
									l = r("./src/utils/get-self-scope.js");

								function u(e, t) {
									return 255 === e[t] && 240 == (246 & e[t + 1])
								}

								function c(e, t) {
									return 1 & e[t + 1] ? 7 : 9
								}

								function d(e, t) {
									return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
								}

								function h(e, t) {
									return !!(t + 1 < e.length && u(e, t))
								}

								function f(e, t) {
									if (h(e, t)) {
										var r = c(e, t);
										if (t + r >= e.length) return !1;
										var i = d(e, t);
										if (i <= r) return !1;
										var n = t + i;
										if (n === e.length || n + 1 < e.length && u(e, n)) return !0
									}
									return !1
								}

								function p(e, t, r, a, s) {
									if (!e.samplerate) {
										var l = function(e, t, r, a) {
											var s, l, u, c, d, h = navigator.userAgent.toLowerCase(),
												f = a,
												p = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
											if (s = 1 + ((192 & t[r + 2]) >>> 6), !((l = (60 & t[r + 2]) >>> 2) > p.length - 1)) return c = (1 & t[r + 2]) << 2, c |= (192 & t[r + 3]) >>> 6, o.logger.log("manifest codec:" + a + ",ADTS data:type:" + s + ",sampleingIndex:" + l + "[" + p[l] + "Hz],channelConfig:" + c), /firefox/i.test(h) ? l >= 6 ? (s = 5, d = new Array(4), u = l - 3) : (s = 2, d = new Array(2), u = l) : -1 !== h.indexOf("android") ? (s = 2, d = new Array(2), u = l) : (s = 5, d = new Array(4), a && (-1 !== a.indexOf("mp4a.40.29") || -1 !== a.indexOf("mp4a.40.5")) || !a && l >= 6 ? u = l - 3 : ((a && -1 !== a.indexOf("mp4a.40.2") && (l >= 6 && 1 === c || /vivaldi/i.test(h)) || !a && 1 === c) && (s = 2, d = new Array(2)), u = l)), d[0] = s << 3, d[0] |= (14 & l) >> 1, d[1] |= (1 & l) << 7, d[1] |= c << 3, 5 === s && (d[1] |= (14 & u) >> 1, d[2] = (1 & u) << 7, d[2] |= 8, d[3] = 0), {
												config: d,
												samplerate: p[l],
												channelCount: c,
												codec: "mp4a.40." + s,
												manifestCodec: f
											};
											e.trigger(i.default.ERROR, {
												type: n.ErrorTypes.MEDIA_ERROR,
												details: n.ErrorDetails.FRAG_PARSING_ERROR,
												fatal: !0,
												reason: "invalid ADTS sampling index:" + l
											})
										}(t, r, a, s);
										e.config = l.config, e.samplerate = l.samplerate, e.channelCount = l.channelCount, e.codec = l.codec, e.manifestCodec = l.manifestCodec, o.logger.log("parsed codec:" + e.codec + ",rate:" + l.samplerate + ",nb channel:" + l.channelCount)
									}
								}

								function g(e) {
									return 9216e4 / e
								}

								function v(e, t, r, i, n) {
									var a = function(e, t, r, i, n) {
										var a, s, o = e.length;
										if (a = c(e, t), s = d(e, t), (s -= a) > 0 && t + a + s <= o) return {
											headerLength: a,
											frameLength: s,
											stamp: r + i * n
										}
									}(t, r, i, n, g(e.samplerate));
									if (a) {
										var s = a.stamp,
											o = a.headerLength,
											l = a.frameLength,
											u = {
												unit: t.subarray(r + o, r + o + l),
												pts: s,
												dts: s
											};
										return e.samples.push(u), {
											sample: u,
											length: l + o
										}
									}
								}
								var m = r("./src/demux/id3.js"),
									_ = function() {
										function e(e, t, r) {
											this.observer = e, this.config = r, this.remuxer = t
										}
										var t = e.prototype;
										return t.resetInitSegment = function(e, t, r, i) {
											this._audioTrack = {
												container: "audio/adts",
												type: "audio",
												id: 0,
												sequenceNumber: 0,
												isAAC: !0,
												samples: [],
												len: 0,
												manifestCodec: t,
												duration: i,
												inputTimeScale: 9e4
											}
										}, t.resetTimeStamp = function() {}, e.probe = function(e) {
											if (!e) return !1;
											for (var t = (m.default.getID3Data(e, 0) || [])
												.length, r = e.length; t < r; t++)
												if (f(e, t)) return o.logger.log("ADTS sync word found !"), !0;
											return !1
										}, t.append = function(e, t, r, i) {
											for (var n = this._audioTrack, a = m.default.getID3Data(e, 0) || [], l = m.default.getTimeStamp(a), u = Object(s.isFiniteNumber)(l) ? 90 * l : 9e4 * t, c = 0, d = u, f = e.length, g = a.length, _ = [{
												pts: d,
												dts: d,
												data: a
											}]; g < f - 1;)
												if (h(e, g) && g + 5 < f) {
													p(n, this.observer, e, g, n.manifestCodec);
													var y = v(n, e, g, u, c);
													if (!y) {
														o.logger.log("Unable to parse AAC frame");
														break
													}
													g += y.length, d = y.sample.pts, c++
												} else m.default.isHeader(e, g) ? (a = m.default.getID3Data(e, g), _.push({
													pts: d,
													dts: d,
													data: a
												}), g += a.length) : g++;
											this.remuxer.remux(n, {
												samples: []
											}, {
												samples: _,
												inputTimeScale: 9e4
											}, {
												samples: []
											}, t, r, i)
										}, t.destroy = function() {}, e
									}(),
									y = r("./src/demux/mp4demuxer.js"),
									E = {
										BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
										SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
										SamplesCoefficients: [
											[0, 72, 144, 12],
											[0, 0, 0, 0],
											[0, 72, 144, 12],
											[0, 144, 144, 12]
										],
										BytesInSlot: [0, 1, 1, 4],
										appendFrame: function(e, t, r, i, n) {
											if (!(r + 24 > t.length)) {
												var a = this.parseHeader(t, r);
												if (a && r + a.frameLength <= t.length) {
													var s = i + n * (9e4 * a.samplesPerFrame / a.sampleRate),
														o = {
															unit: t.subarray(r, r + a.frameLength),
															pts: s,
															dts: s
														};
													return e.config = [], e.channelCount = a.channelCount, e.samplerate = a.sampleRate, e.samples.push(o), {
														sample: o,
														length: a.frameLength
													}
												}
											}
										},
										parseHeader: function(e, t) {
											var r = e[t + 1] >> 3 & 3,
												i = e[t + 1] >> 1 & 3,
												n = e[t + 2] >> 4 & 15,
												a = e[t + 2] >> 2 & 3,
												s = e[t + 2] >> 1 & 1;
											if (1 !== r && 0 !== n && 15 !== n && 3 !== a) {
												var o = 3 === r ? 3 - i : 3 === i ? 3 : 4,
													l = 1e3 * E.BitratesMap[14 * o + n - 1],
													u = 3 === r ? 0 : 2 === r ? 1 : 2,
													c = E.SamplingRateMap[3 * u + a],
													d = e[t + 3] >> 6 == 3 ? 1 : 2,
													h = E.SamplesCoefficients[r][i],
													f = E.BytesInSlot[i],
													p = 8 * h * f;
												return {
													sampleRate: c,
													channelCount: d,
													frameLength: parseInt(h * l / c + s, 10) * f,
													samplesPerFrame: p
												}
											}
										},
										isHeaderPattern: function(e, t) {
											return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
										},
										isHeader: function(e, t) {
											return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
										},
										probe: function(e, t) {
											if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
												var r = this.parseHeader(e, t),
													i = 4;
												r && r.frameLength && (i = r.frameLength);
												var n = t + i;
												if (n === e.length || n + 1 < e.length && this.isHeaderPattern(e, n)) return !0
											}
											return !1
										}
									},
									b = E,
									S = function() {
										function e(e) {
											this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
										}
										var t = e.prototype;
										return t.loadWord = function() {
											var e = this.data,
												t = this.bytesAvailable,
												r = e.byteLength - t,
												i = new Uint8Array(4),
												n = Math.min(4, t);
											if (0 === n) throw new Error("no bytes available");
											i.set(e.subarray(r, r + n)), this.word = new DataView(i.buffer)
												.getUint32(0), this.bitsAvailable = 8 * n, this.bytesAvailable -= n
										}, t.skipBits = function(e) {
											var t;
											this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
										}, t.readBits = function(e) {
											var t = Math.min(this.bitsAvailable, e),
												r = this.word >>> 32 - t;
											return e > 32 && o.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), (t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
										}, t.skipLZ = function() {
											var e;
											for (e = 0; e < this.bitsAvailable; ++e)
												if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
											return this.loadWord(), e + this.skipLZ()
										}, t.skipUEG = function() {
											this.skipBits(1 + this.skipLZ())
										}, t.skipEG = function() {
											this.skipBits(1 + this.skipLZ())
										}, t.readUEG = function() {
											var e = this.skipLZ();
											return this.readBits(e + 1) - 1
										}, t.readEG = function() {
											var e = this.readUEG();
											return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
										}, t.readBoolean = function() {
											return 1 === this.readBits(1)
										}, t.readUByte = function() {
											return this.readBits(8)
										}, t.readUShort = function() {
											return this.readBits(16)
										}, t.readUInt = function() {
											return this.readBits(32)
										}, t.skipScalingList = function(e) {
											var t, r = 8,
												i = 8;
											for (t = 0; t < e; t++) 0 !== i && (i = (r + this.readEG() + 256) % 256), r = 0 === i ? r : i
										}, t.readSPS = function() {
											var e, t, r, i, n, a, s, o = 0,
												l = 0,
												u = 0,
												c = 0,
												d = this.readUByte.bind(this),
												h = this.readBits.bind(this),
												f = this.readUEG.bind(this),
												p = this.readBoolean.bind(this),
												g = this.skipBits.bind(this),
												v = this.skipEG.bind(this),
												m = this.skipUEG.bind(this),
												_ = this.skipScalingList.bind(this);
											if (d(), e = d(), h(5), g(3), d(), m(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
												var y = f();
												if (3 === y && g(1), m(), m(), g(1), p())
													for (a = 3 !== y ? 8 : 12, s = 0; s < a; s++) p() && _(s < 6 ? 16 : 64)
											}
											m();
											var E = f();
											if (0 === E) f();
											else if (1 === E)
												for (g(1), v(), v(), t = f(), s = 0; s < t; s++) v();
											m(), g(1), r = f(), i = f(), 0 === (n = h(1)) && g(1), g(1), p() && (o = f(), l = f(), u = f(), c = f());
											var b = [1, 1];
											if (p() && p()) switch (d()) {
												case 1:
													b = [1, 1];
													break;
												case 2:
													b = [12, 11];
													break;
												case 3:
													b = [10, 11];
													break;
												case 4:
													b = [16, 11];
													break;
												case 5:
													b = [40, 33];
													break;
												case 6:
													b = [24, 11];
													break;
												case 7:
													b = [20, 11];
													break;
												case 8:
													b = [32, 11];
													break;
												case 9:
													b = [80, 33];
													break;
												case 10:
													b = [18, 11];
													break;
												case 11:
													b = [15, 11];
													break;
												case 12:
													b = [64, 33];
													break;
												case 13:
													b = [160, 99];
													break;
												case 14:
													b = [4, 3];
													break;
												case 15:
													b = [3, 2];
													break;
												case 16:
													b = [2, 1];
													break;
												case 255:
													b = [d() << 8 | d(), d() << 8 | d()]
											}
											return {
												width: Math.ceil(16 * (r + 1) - 2 * o - 2 * l),
												height: (2 - n) * (i + 1) * 16 - (n ? 2 : 4) * (u + c),
												pixelRatio: b
											}
										}, t.readSliceType = function() {
											return this.readUByte(), this.readUEG(), this.readUEG()
										}, e
									}(),
									T = function() {
										function e(e, t, r, i) {
											this.decryptdata = r, this.discardEPB = i, this.decrypter = new a.default(e, t, {
												removePKCS7Padding: !1
											})
										}
										var t = e.prototype;
										return t.decryptBuffer = function(e, t) {
											this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
										}, t.decryptAacSample = function(e, t, r, i) {
											var n = e[t].unit,
												a = n.subarray(16, n.length - n.length % 16),
												s = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
												o = this;
											this.decryptBuffer(s, (function(a) {
												a = new Uint8Array(a), n.set(a, 16), i || o.decryptAacSamples(e, t + 1, r)
											}))
										}, t.decryptAacSamples = function(e, t, r) {
											for (;; t++) {
												if (t >= e.length) return void r();
												if (!(e[t].unit.length < 32)) {
													var i = this.decrypter.isSync();
													if (this.decryptAacSample(e, t, r, i), !i) return
												}
											}
										}, t.getAvcEncryptedData = function(e) {
											for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), i = 0, n = 32; n <= e.length - 16; n += 160, i += 16) r.set(e.subarray(n, n + 16), i);
											return r
										}, t.getAvcDecryptedUnit = function(e, t) {
											t = new Uint8Array(t);
											for (var r = 0, i = 32; i <= e.length - 16; i += 160, r += 16) e.set(t.subarray(r, r + 16), i);
											return e
										}, t.decryptAvcSample = function(e, t, r, i, n, a) {
											var s = this.discardEPB(n.data),
												o = this.getAvcEncryptedData(s),
												l = this;
											this.decryptBuffer(o.buffer, (function(o) {
												n.data = l.getAvcDecryptedUnit(s, o), a || l.decryptAvcSamples(e, t, r + 1, i)
											}))
										}, t.decryptAvcSamples = function(e, t, r, i) {
											for (;; t++, r = 0) {
												if (t >= e.length) return void i();
												for (var n = e[t].units; !(r >= n.length); r++) {
													var a = n[r];
													if (!(a.length <= 48 || 1 !== a.type && 5 !== a.type)) {
														var s = this.decrypter.isSync();
														if (this.decryptAvcSample(e, t, r, i, a, s), !s) return
													}
												}
											}
										}, e
									}(),
									A = {
										video: 1,
										audio: 2,
										id3: 3,
										text: 4
									},
									w = function() {
										function e(e, t, r, i) {
											this.observer = e, this.config = r, this.typeSupported = i, this.remuxer = t, this.sampleAes = null, this.pmtUnknownTypes = {}
										}
										var t = e.prototype;
										return t.setDecryptData = function(e) {
											null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new T(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null
										}, e.probe = function(t) {
											var r = e._syncOffset(t);
											return !(r < 0 || (r && o.logger.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), 0))
										}, e._syncOffset = function(e) {
											for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) {
												if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376]) return r;
												r++
											}
											return -1
										}, e.createTrack = function(e, t) {
											return {
												container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
												type: e,
												id: A[e],
												pid: -1,
												inputTimeScale: 9e4,
												sequenceNumber: 0,
												samples: [],
												dropped: "video" === e ? 0 : void 0,
												isAAC: "audio" === e || void 0,
												duration: "audio" === e ? t : void 0
											}
										}, t.resetInitSegment = function(t, r, i, n) {
											this.pmtParsed = !1, this._pmtId = -1, this.pmtUnknownTypes = {}, this._avcTrack = e.createTrack("video", n), this._audioTrack = e.createTrack("audio", n), this._id3Track = e.createTrack("id3", n), this._txtTrack = e.createTrack("text", n), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = r, this.videoCodec = i, this._duration = n
										}, t.resetTimeStamp = function() {}, t.append = function(t, r, a, s) {
											var l, u, c, d, h, f = t.length,
												p = !1;
											this.pmtUnknownTypes = {}, this.contiguous = a;
											var g = this.pmtParsed,
												v = this._avcTrack,
												m = this._audioTrack,
												_ = this._id3Track,
												y = v.pid,
												E = m.pid,
												b = _.pid,
												S = this._pmtId,
												T = v.pesData,
												A = m.pesData,
												w = _.pesData,
												R = this._parsePAT,
												L = this._parsePMT.bind(this),
												k = this._parsePES,
												O = this._parseAVCPES.bind(this),
												D = this._parseAACPES.bind(this),
												C = this._parseMPEGPES.bind(this),
												I = this._parseID3PES.bind(this),
												x = e._syncOffset(t);
											for (f -= (f + x) % 188, l = x; l < f; l += 188)
												if (71 === t[l]) {
													if (u = !!(64 & t[l + 1]), c = ((31 & t[l + 1]) << 8) + t[l + 2], (48 & t[l + 3]) >> 4 > 1) {
														if ((d = l + 5 + t[l + 4]) === l + 188) continue
													} else d = l + 4;
													switch (c) {
														case y:
															u && (T && (h = k(T)) && O(h, !1), T = {
																data: [],
																size: 0
															}), T && (T.data.push(t.subarray(d, l + 188)), T.size += l + 188 - d);
															break;
														case E:
															u && (A && (h = k(A)) && (m.isAAC ? D(h) : C(h)), A = {
																data: [],
																size: 0
															}), A && (A.data.push(t.subarray(d, l + 188)), A.size += l + 188 - d);
															break;
														case b:
															u && (w && (h = k(w)) && I(h), w = {
																data: [],
																size: 0
															}), w && (w.data.push(t.subarray(d, l + 188)), w.size += l + 188 - d);
															break;
														case 0:
															u && (d += t[d] + 1), S = this._pmtId = R(t, d);
															break;
														case S:
															u && (d += t[d] + 1);
															var P = L(t, d, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
															(y = P.avc) > 0 && (v.pid = y), (E = P.audio) > 0 && (m.pid = E, m.isAAC = P.isAAC), (b = P.id3) > 0 && (_.pid = b), p && !g && (o.logger.log("reparse from beginning"), p = !1, l = x - 188), g = this.pmtParsed = !0;
															break;
														case 17:
														case 8191:
															break;
														default:
															p = !0
													}
												} else this.observer.trigger(i.default.ERROR, {
													type: n.ErrorTypes.MEDIA_ERROR,
													details: n.ErrorDetails.FRAG_PARSING_ERROR,
													fatal: !1,
													reason: "TS packet did not start with 0x47"
												});
											T && (h = k(T)) ? (O(h, !0), v.pesData = null) : v.pesData = T, A && (h = k(A)) ? (m.isAAC ? D(h) : C(h), m.pesData = null) : (A && A.size && o.logger.log("last AAC PES packet truncated,might overlap between fragments"), m.pesData = A), w && (h = k(w)) ? (I(h), _.pesData = null) : _.pesData = w, null == this.sampleAes ? this.remuxer.remux(m, v, _, this._txtTrack, r, a, s) : this.decryptAndRemux(m, v, _, this._txtTrack, r, a, s)
										}, t.decryptAndRemux = function(e, t, r, i, n, a, s) {
											if (e.samples && e.isAAC) {
												var o = this;
												this.sampleAes.decryptAacSamples(e.samples, 0, (function() {
													o.decryptAndRemuxAvc(e, t, r, i, n, a, s)
												}))
											} else this.decryptAndRemuxAvc(e, t, r, i, n, a, s)
										}, t.decryptAndRemuxAvc = function(e, t, r, i, n, a, s) {
											if (t.samples) {
												var o = this;
												this.sampleAes.decryptAvcSamples(t.samples, 0, 0, (function() {
													o.remuxer.remux(e, t, r, i, n, a, s)
												}))
											} else this.remuxer.remux(e, t, r, i, n, a, s)
										}, t.destroy = function() {
											this._initPTS = this._initDTS = void 0, this._duration = 0
										}, t._parsePAT = function(e, t) {
											return (31 & e[t + 10]) << 8 | e[t + 11]
										}, t._trackUnknownPmt = function(e, t, r) {
											var i = this.pmtUnknownTypes[e] || 0;
											return 0 === i && (this.pmtUnknownTypes[e] = 0, t.call(o.logger, r)), this.pmtUnknownTypes[e]++, i
										}, t._parsePMT = function(e, t, r, i) {
											var n, a, s = {
												audio: -1,
												avc: -1,
												id3: -1,
												isAAC: !0
											};
											for (n = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4, t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < n;) {
												switch (a = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
													case 207:
														if (!i) {
															this._trackUnknownPmt(e[t], o.logger.warn, "ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
															break
														}
													case 15:
														-1 === s.audio && (s.audio = a);
														break;
													case 21:
														-1 === s.id3 && (s.id3 = a);
														break;
													case 219:
														if (!i) {
															this._trackUnknownPmt(e[t], o.logger.warn, "H.264 with AES-128-CBC slice encryption found in unencrypted stream");
															break
														}
													case 27:
														-1 === s.avc && (s.avc = a);
														break;
													case 3:
													case 4:
														r ? -1 === s.audio && (s.audio = a, s.isAAC = !1) : this._trackUnknownPmt(e[t], o.logger.warn, "MPEG audio found, not supported in this browser");
														break;
													case 36:
														this._trackUnknownPmt(e[t], o.logger.warn, "Unsupported HEVC stream type found");
														break;
													default:
														this._trackUnknownPmt(e[t], o.logger.log, "Unknown stream type:" + e[t])
												}
												t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
											}
											return s
										}, t._parsePES = function(e) {
											var t, r, i, n, a, s, l, u, c = 0,
												d = e.data;
											if (!e || 0 === e.size) return null;
											for (; d[0].length < 19 && d.length > 1;) {
												var h = new Uint8Array(d[0].length + d[1].length);
												h.set(d[0]), h.set(d[1], d[0].length), d[0] = h, d.splice(1, 1)
											}
											if (1 === ((t = d[0])[0] << 16) + (t[1] << 8) + t[2]) {
												if ((i = (t[4] << 8) + t[5]) && i > e.size - 6) return null;
												if (192 & (r = t[7]) && ((s = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2) > 4294967295 && (s -= 8589934592), 64 & r ? ((l = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 4294967295 && (l -= 8589934592), s - l > 54e5 && (o.logger.warn(Math.round((s - l) / 9e4) + "s delta between PTS and DTS, align them"), s = l)) : l = s), u = (n = t[8]) + 9, e.size <= u) return null;
												e.size -= u, a = new Uint8Array(e.size);
												for (var f = 0, p = d.length; f < p; f++) {
													var g = (t = d[f])
														.byteLength;
													if (u) {
														if (u > g) {
															u -= g;
															continue
														}
														t = t.subarray(u), g -= u, u = 0
													}
													a.set(t, c), c += g
												}
												return i && (i -= n + 3), {
													data: a,
													pts: s,
													dts: l,
													len: i
												}
											}
											return null
										}, t.pushAccesUnit = function(e, t) {
											if (e.units.length && e.frame) {
												var r = t.samples,
													i = r.length;
												if (isNaN(e.pts)) {
													if (!i) return void t.dropped++;
													var n = r[i - 1];
													e.pts = n.pts, e.dts = n.dts
												}!this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (i || this.contiguous) ? (e.id = i, r.push(e)) : t.dropped++
											}
											e.debug.length && o.logger.log(e.pts + "/" + e.dts + ":" + e.debug)
										}, t._parseAVCPES = function(e, t) {
											var r, i, n, a = this,
												s = this._avcTrack,
												o = this._parseAVCNALu(e.data),
												l = this.avcSample,
												u = !1,
												c = this.pushAccesUnit.bind(this),
												d = function(e, t, r, i) {
													return {
														key: e,
														pts: t,
														dts: r,
														units: [],
														debug: i
													}
												};
											e.data = null, l && o.length && !s.audFound && (c(l, s), l = this.avcSample = d(!1, e.pts, e.dts, "")), o.forEach((function(t) {
												switch (t.type) {
													case 1:
														i = !0, l || (l = a.avcSample = d(!0, e.pts, e.dts, "")), l.frame = !0;
														var o = t.data;
														if (u && o.length > 4) {
															var h = new S(o)
																.readSliceType();
															2 !== h && 4 !== h && 7 !== h && 9 !== h || (l.key = !0)
														}
														break;
													case 5:
														i = !0, l || (l = a.avcSample = d(!0, e.pts, e.dts, "")), l.key = !0, l.frame = !0;
														break;
													case 6:
														i = !0, (r = new S(a.discardEPB(t.data)))
															.readUByte();
														for (var f = 0, p = 0, g = !1, v = 0; !g && r.bytesAvailable > 1;) {
															f = 0;
															do {
																f += v = r.readUByte()
															} while (255 === v);
															p = 0;
															do {
																p += v = r.readUByte()
															} while (255 === v);
															if (4 === f && 0 !== r.bytesAvailable) {
																if (g = !0, 181 === r.readUByte() && 49 === r.readUShort() && 1195456820 === r.readUInt() && 3 === r.readUByte()) {
																	var _ = r.readUByte(),
																		y = 31 & _,
																		E = [_, r.readUByte()];
																	for (n = 0; n < y; n++) E.push(r.readUByte()), E.push(r.readUByte()), E.push(r.readUByte());
																	a._insertSampleInOrder(a._txtTrack.samples, {
																		type: 3,
																		pts: e.pts,
																		bytes: E
																	})
																}
															} else if (5 === f && 0 !== r.bytesAvailable) {
																if (g = !0, p > 16) {
																	var b = [];
																	for (n = 0; n < 16; n++) b.push(r.readUByte()
																		.toString(16)), 3 !== n && 5 !== n && 7 !== n && 9 !== n || b.push("-");
																	var T = p - 16,
																		A = new Uint8Array(T);
																	for (n = 0; n < T; n++) A[n] = r.readUByte();
																	a._insertSampleInOrder(a._txtTrack.samples, {
																		pts: e.pts,
																		payloadType: f,
																		uuid: b.join(""),
																		userDataBytes: A,
																		userData: Object(m.utf8ArrayToStr)(A.buffer)
																	})
																}
															} else if (p < r.bytesAvailable)
																for (n = 0; n < p; n++) r.readUByte()
														}
														break;
													case 7:
														if (i = !0, u = !0, !s.sps) {
															var w = (r = new S(t.data))
																.readSPS();
															s.width = w.width, s.height = w.height, s.pixelRatio = w.pixelRatio, s.sps = [t.data], s.duration = a._duration;
															var R = t.data.subarray(1, 4),
																L = "avc1.";
															for (n = 0; n < 3; n++) {
																var k = R[n].toString(16);
																k.length < 2 && (k = "0" + k), L += k
															}
															s.codec = L
														}
														break;
													case 8:
														i = !0, s.pps || (s.pps = [t.data]);
														break;
													case 9:
														i = !1, s.audFound = !0, l && c(l, s), l = a.avcSample = d(!1, e.pts, e.dts, "");
														break;
													case 12:
														i = !1;
														break;
													default:
														i = !1, l && (l.debug += "unknown NAL " + t.type + " ")
												}
												l && i && l.units.push(t)
											})), t && l && (c(l, s), this.avcSample = null)
										}, t._insertSampleInOrder = function(e, t) {
											var r = e.length;
											if (r > 0) {
												if (t.pts >= e[r - 1].pts) e.push(t);
												else
													for (var i = r - 1; i >= 0; i--)
														if (t.pts < e[i].pts) {
															e.splice(i, 0, t);
															break
														}
											} else e.push(t)
										}, t._getLastNalUnit = function() {
											var e, t = this.avcSample;
											if (!t || 0 === t.units.length) {
												var r = this._avcTrack.samples;
												t = r[r.length - 1]
											}
											if (t) {
												var i = t.units;
												e = i[i.length - 1]
											}
											return e
										}, t._parseAVCNALu = function(e) {
											var t, r, i, n, a = 0,
												s = e.byteLength,
												o = this._avcTrack,
												l = o.naluState || 0,
												u = l,
												c = [],
												d = -1;
											for (-1 === l && (d = 0, n = 31 & e[0], l = 0, a = 1); a < s;)
												if (t = e[a++], l)
													if (1 !== l)
														if (t)
															if (1 === t) {
																if (d >= 0) i = {
																	data: e.subarray(d, a - l - 1),
																	type: n
																}, c.push(i);
																else {
																	var h = this._getLastNalUnit();
																	if (h && (u && a <= 4 - u && h.state && (h.data = h.data.subarray(0, h.data.byteLength - u)), (r = a - l - 1) > 0)) {
																		var f = new Uint8Array(h.data.byteLength + r);
																		f.set(h.data, 0), f.set(e.subarray(0, r), h.data.byteLength), h.data = f
																	}
																}
																a < s ? (d = a, n = 31 & e[a], l = 0) : l = -1
															} else l = 0;
											else l = 3;
											else l = t ? 0 : 2;
											else l = t ? 0 : 1;
											if (d >= 0 && l >= 0 && (i = {
												data: e.subarray(d, s),
												type: n,
												state: l
											}, c.push(i)), 0 === c.length) {
												var p = this._getLastNalUnit();
												if (p) {
													var g = new Uint8Array(p.data.byteLength + e.byteLength);
													g.set(p.data, 0), g.set(e, p.data.byteLength), p.data = g
												}
											}
											return o.naluState = l, c
										}, t.discardEPB = function(e) {
											for (var t, r, i = e.byteLength, n = [], a = 1; a < i - 2;) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (n.push(a + 2), a += 2) : a++;
											if (0 === n.length) return e;
											t = i - n.length, r = new Uint8Array(t);
											var s = 0;
											for (a = 0; a < t; s++, a++) s === n[0] && (s++, n.shift()), r[a] = e[s];
											return r
										}, t._parseAACPES = function(e) {
											var t, r, a, s, l, u, c, d = this._audioTrack,
												f = e.data,
												m = e.pts,
												_ = this.aacOverFlow,
												y = this.aacLastPTS;
											if (_) {
												var E = new Uint8Array(_.byteLength + f.byteLength);
												E.set(_, 0), E.set(f, _.byteLength), f = E
											}
											for (a = 0, l = f.length; a < l - 1 && !h(f, a); a++);
											if (!a || (a < l - 1 ? (u = "AAC PES did not start with ADTS header,offset:" + a, c = !1) : (u = "no ADTS header found in AAC PES", c = !0), o.logger.warn("parsing error:" + u), this.observer.trigger(i.default.ERROR, {
												type: n.ErrorTypes.MEDIA_ERROR,
												details: n.ErrorDetails.FRAG_PARSING_ERROR,
												fatal: c,
												reason: u
											}), !c)) {
												if (p(d, this.observer, f, a, this.audioCodec), r = 0, t = g(d.samplerate), _ && y) {
													var b = y + t;
													Math.abs(b - m) > 1 && (o.logger.log("AAC: align PTS for overlapping frames by " + Math.round((b - m) / 90)), m = b)
												}
												for (; a < l;) {
													if (h(f, a)) {
														if (a + 5 < l) {
															var S = v(d, f, a, m, r);
															if (S) {
																a += S.length, s = S.sample.pts, r++;
																continue
															}
														}
														break
													}
													a++
												}
												_ = a < l ? f.subarray(a, l) : null, this.aacOverFlow = _, this.aacLastPTS = s
											}
										}, t._parseMPEGPES = function(e) {
											for (var t = e.data, r = t.length, i = 0, n = 0, a = e.pts; n < r;)
												if (b.isHeader(t, n)) {
													var s = b.appendFrame(this._audioTrack, t, n, a, i);
													if (!s) break;
													n += s.length, i++
												} else n++
										}, t._parseID3PES = function(e) {
											this._id3Track.samples.push(e)
										}, e
									}(),
									R = function() {
										function e(e, t, r) {
											this.observer = e, this.config = r, this.remuxer = t
										}
										var t = e.prototype;
										return t.resetInitSegment = function(e, t, r, i) {
											this._audioTrack = {
												container: "audio/mpeg",
												type: "audio",
												id: -1,
												sequenceNumber: 0,
												isAAC: !1,
												samples: [],
												len: 0,
												manifestCodec: t,
												duration: i,
												inputTimeScale: 9e4
											}
										}, t.resetTimeStamp = function() {}, e.probe = function(e) {
											var t, r, i = m.default.getID3Data(e, 0);
											if (i && void 0 !== m.default.getTimeStamp(i))
												for (t = i.length, r = Math.min(e.length - 1, t + 100); t < r; t++)
													if (b.probe(e, t)) return o.logger.log("MPEG Audio sync word found !"), !0;
											return !1
										}, t.append = function(e, t, r, i) {
											for (var n = m.default.getID3Data(e, 0), a = m.default.getTimeStamp(n), s = void 0 !== a ? 90 * a : 9e4 * t, o = n.length, l = e.length, u = 0, c = 0, d = this._audioTrack, h = [{
												pts: s,
												dts: s,
												data: n
											}]; o < l;)
												if (b.isHeader(e, o)) {
													var f = b.appendFrame(d, e, o, s, u);
													if (!f) break;
													o += f.length, c = f.sample.pts, u++
												} else m.default.isHeader(e, o) ? (n = m.default.getID3Data(e, o), h.push({
													pts: c,
													dts: c,
													data: n
												}), o += n.length) : o++;
											this.remuxer.remux(d, {
												samples: []
											}, {
												samples: h,
												inputTimeScale: 9e4
											}, {
												samples: []
											}, t, r, i)
										}, t.destroy = function() {}, e
									}(),
									L = function() {
										function e() {}
										return e.getSilentFrame = function(e, t) {
											switch (e) {
												case "mp4a.40.2":
													if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
													if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
													if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
													if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
													if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
													if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
													break;
												default:
													if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
													if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
													if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
											}
											return null
										}, e
									}(),
									k = Math.pow(2, 32) - 1,
									O = function() {
										function e() {}
										return e.init = function() {
											var t;
											for (t in e.types = {
												avc1: [],
												avcC: [],
												btrt: [],
												dinf: [],
												dref: [],
												esds: [],
												ftyp: [],
												hdlr: [],
												mdat: [],
												mdhd: [],
												mdia: [],
												mfhd: [],
												minf: [],
												moof: [],
												moov: [],
												mp4a: [],
												".mp3": [],
												mvex: [],
												mvhd: [],
												pasp: [],
												sdtp: [],
												stbl: [],
												stco: [],
												stsc: [],
												stsd: [],
												stsz: [],
												stts: [],
												tfdt: [],
												tfhd: [],
												traf: [],
												trak: [],
												trun: [],
												trex: [],
												tkhd: [],
												vmhd: [],
												smhd: []
											}, e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
											var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
												i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
											e.HDLR_TYPES = {
												video: r,
												audio: i
											};
											var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
												a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
											e.STTS = e.STSC = e.STCO = a, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
											var s = new Uint8Array([105, 115, 111, 109]),
												o = new Uint8Array([97, 118, 99, 49]),
												l = new Uint8Array([0, 0, 0, 1]);
											e.FTYP = e.box(e.types.ftyp, s, l, s, o), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, n))
										}, e.box = function(e) {
											for (var t, r = Array.prototype.slice.call(arguments, 1), i = 8, n = r.length, a = n; n--;) i += r[n].byteLength;
											for ((t = new Uint8Array(i))[0] = i >> 24 & 255, t[1] = i >> 16 & 255, t[2] = i >> 8 & 255, t[3] = 255 & i, t.set(e, 4), n = 0, i = 8; n < a; n++) t.set(r[n], i), i += r[n].byteLength;
											return t
										}, e.hdlr = function(t) {
											return e.box(e.types.hdlr, e.HDLR_TYPES[t])
										}, e.mdat = function(t) {
											return e.box(e.types.mdat, t)
										}, e.mdhd = function(t, r) {
											r *= t;
											var i = Math.floor(r / (k + 1)),
												n = Math.floor(r % (k + 1));
											return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
										}, e.mdia = function(t) {
											return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
										}, e.mfhd = function(t) {
											return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
										}, e.minf = function(t) {
											return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
										}, e.moof = function(t, r, i) {
											return e.box(e.types.moof, e.mfhd(t), e.traf(i, r))
										}, e.moov = function(t) {
											for (var r = t.length, i = []; r--;) i[r] = e.trak(t[r]);
											return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i)
												.concat(e.mvex(t)))
										}, e.mvex = function(t) {
											for (var r = t.length, i = []; r--;) i[r] = e.trex(t[r]);
											return e.box.apply(null, [e.types.mvex].concat(i))
										}, e.mvhd = function(t, r) {
											r *= t;
											var i = Math.floor(r / (k + 1)),
												n = Math.floor(r % (k + 1)),
												a = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
											return e.box(e.types.mvhd, a)
										}, e.sdtp = function(t) {
											var r, i, n = t.samples || [],
												a = new Uint8Array(4 + n.length);
											for (i = 0; i < n.length; i++) r = n[i].flags, a[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
											return e.box(e.types.sdtp, a)
										}, e.stbl = function(t) {
											return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
										}, e.avc1 = function(t) {
											var r, i, n, a = [],
												s = [];
											for (r = 0; r < t.sps.length; r++) n = (i = t.sps[r])
												.byteLength, a.push(n >>> 8 & 255), a.push(255 & n), a = a.concat(Array.prototype.slice.call(i));
											for (r = 0; r < t.pps.length; r++) n = (i = t.pps[r])
												.byteLength, s.push(n >>> 8 & 255), s.push(255 & n), s = s.concat(Array.prototype.slice.call(i));
											var o = e.box(e.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | t.sps.length].concat(a)
													.concat([t.pps.length])
													.concat(s))),
												l = t.width,
												u = t.height,
												c = t.pixelRatio[0],
												d = t.pixelRatio[1];
											return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
										}, e.esds = function(e) {
											var t = e.config.length;
											return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t])
												.concat(e.config)
												.concat([6, 1, 2]))
										}, e.mp4a = function(t) {
											var r = t.samplerate;
											return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)))
										}, e.mp3 = function(t) {
											var r = t.samplerate;
											return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
										}, e.stsd = function(t) {
											return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
										}, e.tkhd = function(t) {
											var r = t.id,
												i = t.duration * t.timescale,
												n = t.width,
												a = t.height,
												s = Math.floor(i / (k + 1)),
												o = Math.floor(i % (k + 1));
											return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, a >> 8 & 255, 255 & a, 0, 0]))
										}, e.traf = function(t, r) {
											var i = e.sdtp(t),
												n = t.id,
												a = Math.floor(r / (k + 1)),
												s = Math.floor(r % (k + 1));
											return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), e.trun(t, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
										}, e.trak = function(t) {
											return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t))
										}, e.trex = function(t) {
											var r = t.id;
											return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
										}, e.trun = function(t, r) {
											var i, n, a, s, o, l, u = t.samples || [],
												c = u.length,
												d = 12 + 16 * c,
												h = new Uint8Array(d);
											for (r += 8 + d, h.set([0, 0, 15, 1, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < c; i++) a = (n = u[i])
												.duration, s = n.size, o = n.flags, l = n.cts, h.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
											return e.box(e.types.trun, h)
										}, e.initSegment = function(t) {
											e.types || e.init();
											var r, i = e.moov(t);
											return (r = new Uint8Array(e.FTYP.byteLength + i.byteLength))
												.set(e.FTYP), r.set(i, e.FTYP.byteLength), r
										}, e
									}();

								function D(e, t, r, i) {
									void 0 === r && (r = 1), void 0 === i && (i = !1);
									var n = e * t * r;
									return i ? Math.round(n) : n
								}

								function C(e, t) {
									return void 0 === t && (t = !1), D(e, 1e3, 1 / 9e4, t)
								}

								function I(e, t) {
									return void 0 === t && (t = 1), D(e, 9e4, 1 / t)
								}
								var x, P = I(10),
									M = I(.2),
									F = function() {
										function e(e, t, r, i) {
											this.observer = e, this.config = t, this.typeSupported = r;
											var n = navigator.userAgent;
											this.isSafari = i && i.indexOf("Apple") > -1 && n && !n.match("CriOS"), this.ISGenerated = !1
										}
										var t = e.prototype;
										return t.destroy = function() {}, t.resetTimeStamp = function(e) {
											this._initPTS = this._initDTS = e
										}, t.resetInitSegment = function() {
											this.ISGenerated = !1
										}, t.remux = function(e, t, r, n, a, s, l) {
											if (this.ISGenerated || this.generateIS(e, t, a), this.ISGenerated) {
												var u = e.samples.length,
													c = t.samples.length,
													d = a,
													h = a;
												if (u && c) {
													var f = (a > 0 ? e.samples[0].dts - t.samples[0].dts : e.samples[0].pts - t.samples[0].pts) / t.inputTimeScale;
													d += Math.max(0, f), h += Math.max(0, -f)
												}
												if (u) {
													e.timescale || (o.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, a));
													var p, g = this.remuxAudio(e, d, s, l);
													c && (g && (p = g.endPTS - g.startPTS), t.timescale || (o.logger.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, a)), this.remuxVideo(t, h, s, p, l))
												} else if (c) {
													var v = this.remuxVideo(t, h, s, 0, l);
													v && e.codec && this.remuxEmptyAudio(e, d, s, v)
												}
											}
											r.samples.length && this.remuxID3(r, a), n.samples.length && this.remuxText(n, a), this.observer.trigger(i.default.FRAG_PARSED)
										}, t.generateIS = function(e, t, r) {
											var a, s, l = this.observer,
												u = e.samples,
												c = t.samples,
												d = this.typeSupported,
												h = "audio/mp4",
												f = {},
												p = {
													tracks: f
												},
												g = void 0 === this._initPTS;
											if (g && (a = s = 1 / 0), e.config && u.length && (e.timescale = e.samplerate, o.logger.log("audio sampling rate : " + e.samplerate), e.isAAC || (d.mpeg ? (h = "audio/mpeg", e.codec = "") : d.mp3 && (e.codec = "mp3")), f.audio = {
												container: h,
												codec: e.codec,
												initSegment: !e.isAAC && d.mpeg ? new Uint8Array : O.initSegment([e]),
												metadata: {
													channelCount: e.channelCount
												}
											}, g && (a = s = u[0].pts - Math.round(e.inputTimeScale * r))), t.sps && t.pps && c.length) {
												var v = t.inputTimeScale;
												if (t.timescale = v, f.video = {
													container: "video/mp4",
													codec: t.codec,
													initSegment: O.initSegment([t]),
													metadata: {
														width: t.width,
														height: t.height
													}
												}, g) {
													var m = Math.round(v * r);
													a = Math.min(a, c[0].pts - m), s = Math.min(s, c[0].dts - m), this.observer.trigger(i.default.INIT_PTS_FOUND, {
														initPTS: a
													})
												}
											} else g && f.audio && this.observer.trigger(i.default.INIT_PTS_FOUND, {
												initPTS: a
											});
											Object.keys(f)
												.length ? (l.trigger(i.default.FRAG_PARSING_INIT_SEGMENT, p), this.ISGenerated = !0, g && (this._initPTS = a, this._initDTS = s)) : l.trigger(i.default.ERROR, {
													type: n.ErrorTypes.MEDIA_ERROR,
													details: n.ErrorDetails.FRAG_PARSING_ERROR,
													fatal: !1,
													reason: "no audio/video samples found"
												})
										}, t.remuxVideo = function(e, t, r, a, s) {
											var l, u, c, d, h, f = 8,
												p = Number.POSITIVE_INFINITY,
												g = Number.NEGATIVE_INFINITY,
												v = e.timescale,
												m = e.samples,
												_ = [],
												y = m.length,
												E = this._PTSNormalize,
												b = this._initPTS,
												S = this.nextAvcDts,
												T = this.isSafari;
											if (0 !== y) {
												T && (r |= y && S && (s && Math.abs(t - S / v) < .1 || Math.abs(m[0].pts - S - b) < v / 5)), r || (S = t * v), m.forEach((function(e) {
													e.pts = E(e.pts - b, S), e.dts = E(e.dts - b, S), p = Math.min(e.pts, p), g = Math.max(e.pts, g)
												})), m.sort((function(e, t) {
													var r = e.dts - t.dts,
														i = e.pts - t.pts;
													return r || i || e.id - t.id
												}));
												var A = m.reduce((function(e, t) {
													return Math.max(Math.min(e, t.pts - t.dts), -1 * M)
												}), 0);
												if (A < 0) {
													o.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + C(A, !0) + " ms to overcome this issue");
													for (var w = 0; w < y; w++) m[w].dts = Math.max(0, m[w].dts + A)
												}
												d = m[0].dts, h = m[y - 1].dts;
												var R = Math.round((h - d) / (y - 1)),
													L = d - S;
												if (r) {
													var k = L > R;
													(k || L < -1) && (k ? o.logger.warn("AVC: " + C(L, !0) + "ms (" + L + "dts) hole between fragments detected, filling it") : o.logger.warn("AVC: " + C(-L, !0) + "ms (" + L + "dts) overlapping between fragments detected"), d = S, p -= L, m[0].dts = d, m[0].pts = p, o.logger.log("Video: First PTS/DTS adjusted: " + C(p, !0) + "/" + C(d, !0) + ", delta: " + C(L, !0) + " ms"))
												}
												d = Math.max(d, 0);
												for (var D = 0, I = 0, x = 0; x < y; x++) {
													for (var P = m[x], F = P.units, N = F.length, B = 0, U = 0; U < N; U++) B += F[U].data.length;
													I += B, D += N, P.length = B, P.dts = T ? d + x * R : Math.max(P.dts, d), P.pts = Math.max(P.pts, P.dts)
												}
												var j = I + 4 * D + 8;
												try {
													u = new Uint8Array(j)
												} catch (e) {
													return void this.observer.trigger(i.default.ERROR, {
														type: n.ErrorTypes.MUX_ERROR,
														details: n.ErrorDetails.REMUX_ALLOC_ERROR,
														fatal: !1,
														bytes: j,
														reason: "fail allocating video mdat " + j
													})
												}
												var G = new DataView(u.buffer);
												G.setUint32(0, j), u.set(O.types.mdat, 4);
												for (var V = 0; V < y; V++) {
													for (var K = m[V], H = K.units, W = 0, z = void 0, q = 0, Y = H.length; q < Y; q++) {
														var X = H[q],
															$ = X.data,
															J = X.data.byteLength;
														G.setUint32(f, J), f += 4, u.set($, f), f += J, W += 4 + J
													}
													if (T) z = Math.max(0, l * Math.round((K.pts - K.dts) / l));
													else {
														if (V < y - 1) l = m[V + 1].dts - K.dts;
														else {
															var Q = this.config,
																Z = K.dts - m[V > 0 ? V - 1 : V].dts;
															if (Q.stretchShortVideoTrack) {
																var ee = Q.maxBufferHole,
																	te = Math.floor(ee * v),
																	re = (a ? p + a * v : this.nextAudioPts) - K.pts;
																re > te ? ((l = re - Z) < 0 && (l = Z), o.logger.log("It is approximately " + C(re, !1) + " ms to the next segment; using duration " + C(l, !1) + " ms for the last video frame.")) : l = Z
															} else l = Z
														}
														z = Math.round(K.pts - K.dts)
													}
													_.push({
														size: W,
														duration: l,
														cts: z,
														flags: {
															isLeading: 0,
															isDependedOn: 0,
															hasRedundancy: 0,
															degradPrio: 0,
															dependsOn: K.key ? 2 : 1,
															isNonSync: K.key ? 0 : 1
														}
													})
												}
												this.nextAvcDts = h + l;
												var ie = e.dropped;
												if (e.nbNalu = 0, e.dropped = 0, _.length && navigator.userAgent.toLowerCase()
													.indexOf("chrome") > -1) {
													var ne = _[0].flags;
													ne.dependsOn = 2, ne.isNonSync = 0
												}
												e.samples = _, c = O.moof(e.sequenceNumber++, d, e), e.samples = [];
												var ae = {
													data1: c,
													data2: u,
													startPTS: p / v,
													endPTS: (g + l) / v,
													startDTS: d / v,
													endDTS: this.nextAvcDts / v,
													type: "video",
													hasAudio: !1,
													hasVideo: !0,
													nb: _.length,
													dropped: ie
												};
												return this.observer.trigger(i.default.FRAG_PARSING_DATA, ae), ae
											}
										}, t.remuxAudio = function(e, t, r, a) {
											var s, l, u, c, d, h, f = e.inputTimeScale,
												p = e.timescale,
												g = f / p,
												v = (e.isAAC ? 1024 : 1152) * g,
												m = this._PTSNormalize,
												_ = this._initPTS,
												y = !e.isAAC && this.typeSupported.mpeg,
												E = y ? 0 : 8,
												b = e.samples,
												S = [],
												T = this.nextAudioPts;
											if (r |= b.length && T && (a && Math.abs(t - T / f) < .1 || Math.abs(b[0].pts - T - _) < 20 * v), b.forEach((function(e) {
													e.pts = e.dts = m(e.pts - _, t * f)
												})), 0 !== (b = b.filter((function(e) {
													return e.pts >= 0
												})))
												.length) {
												if (r || (T = a ? t * f : b[0].pts), e.isAAC)
													for (var A = this.config.maxAudioFramesDrift, w = 0, R = T; w < b.length;) {
														var k, D = b[w],
															I = D.pts;
														if ((k = I - R) <= -A * v) r ? (o.logger.warn("Dropping 1 audio frame @ " + C(R, !0) / 1e3 + "s due to " + C(k, !0) + " ms overlap."), b.splice(w, 1)) : (o.logger.warn("Audio frame @ " + C(I, !0) / 1e3 + "s overlaps nextAudioPts by " + C(k, !0) + " ms."), R = I + v, w++);
														else if (k >= A * v && k < P && R) {
															var x = Math.round(k / v);
															o.logger.warn("Injecting " + x + " audio frames @ " + C(R, !0) / 1e3 + "s due to " + C(k, !0) + " ms gap.");
															for (var M = 0; M < x; M++) {
																var F = Math.max(R, 0);
																(l = L.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (o.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), l = D.unit.subarray()), b.splice(w, 0, {
																	unit: l,
																	pts: F,
																	dts: F
																}), R += v, w++
															}
															D.pts = D.dts = R, R += v, w++
														} else Math.abs(k), D.pts = D.dts = R, R += v, w++
													}
												for (var N = b.length, B = 0; N--;) B += b[N].unit.byteLength;
												for (var U = 0, j = b.length; U < j; U++) {
													var G = b[U],
														V = G.unit,
														K = G.pts;
													if (void 0 !== h && s) s.duration = Math.round((K - h) / g);
													else {
														var H = K - T,
															W = 0;
														if (r && e.isAAC && H) {
															if (H > 0 && H < P) W = Math.round((K - T) / v), o.logger.log(C(H, !0) + " ms hole between AAC samples detected,filling it"), W > 0 && ((l = L.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (l = V.subarray()), B += W * l.length);
															else if (H < -12) {
																o.logger.log("drop overlapping AAC sample, expected/parsed/delta: " + C(T, !0) + " ms / " + C(K, !0) + " ms / " + C(-H, !0) + " ms"), B -= V.byteLength;
																continue
															}
															K = T
														}
														if (d = K, !(B > 0)) return;
														B += E;
														try {
															u = new Uint8Array(B)
														} catch (e) {
															return void this.observer.trigger(i.default.ERROR, {
																type: n.ErrorTypes.MUX_ERROR,
																details: n.ErrorDetails.REMUX_ALLOC_ERROR,
																fatal: !1,
																bytes: B,
																reason: "fail allocating audio mdat " + B
															})
														}
														y || (new DataView(u.buffer)
															.setUint32(0, B), u.set(O.types.mdat, 4));
														for (var z = 0; z < W; z++)(l = L.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (o.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), l = V.subarray()), u.set(l, E), E += l.byteLength, s = {
															size: l.byteLength,
															cts: 0,
															duration: 1024,
															flags: {
																isLeading: 0,
																isDependedOn: 0,
																hasRedundancy: 0,
																degradPrio: 0,
																dependsOn: 1
															}
														}, S.push(s)
													}
													u.set(V, E);
													var q = V.byteLength;
													E += q, s = {
														size: q,
														cts: 0,
														duration: 0,
														flags: {
															isLeading: 0,
															isDependedOn: 0,
															hasRedundancy: 0,
															degradPrio: 0,
															dependsOn: 1
														}
													}, S.push(s), h = K
												}
												var Y = 0;
												if ((N = S.length) >= 2 && (Y = S[N - 2].duration, s.duration = Y), N) {
													this.nextAudioPts = T = h + g * Y, e.samples = S, c = y ? new Uint8Array : O.moof(e.sequenceNumber++, d / g, e), e.samples = [];
													var X = d / f,
														$ = T / f,
														J = {
															data1: c,
															data2: u,
															startPTS: X,
															endPTS: $,
															startDTS: X,
															endDTS: $,
															type: "audio",
															hasAudio: !0,
															hasVideo: !1,
															nb: N
														};
													return this.observer.trigger(i.default.FRAG_PARSING_DATA, J), J
												}
												return null
											}
										}, t.remuxEmptyAudio = function(e, t, r, i) {
											var n = e.inputTimeScale,
												a = n / (e.samplerate ? e.samplerate : n),
												s = this.nextAudioPts,
												l = (void 0 !== s ? s : i.startDTS * n) + this._initDTS,
												u = i.endDTS * n + this._initDTS,
												c = 1024 * a,
												d = Math.ceil((u - l) / c),
												h = L.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
											if (o.logger.warn("remux empty Audio"), h) {
												for (var f = [], p = 0; p < d; p++) {
													var g = l + p * c;
													f.push({
														unit: h,
														pts: g,
														dts: g
													})
												}
												e.samples = f, this.remuxAudio(e, t, r)
											} else o.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
										}, t.remuxID3 = function(e) {
											var t = e.samples.length;
											if (t) {
												for (var r = e.inputTimeScale, n = this._initPTS, a = this._initDTS, s = 0; s < t; s++) {
													var o = e.samples[s];
													o.pts = (o.pts - n) / r, o.dts = (o.dts - a) / r
												}
												this.observer.trigger(i.default.FRAG_PARSING_METADATA, {
													samples: e.samples
												}), e.samples = []
											}
										}, t.remuxText = function(e) {
											e.samples.sort((function(e, t) {
												return e.pts - t.pts
											}));
											var t, r = e.samples.length,
												n = e.inputTimeScale,
												a = this._initPTS;
											if (r) {
												for (var s = 0; s < r; s++)(t = e.samples[s])
													.pts = (t.pts - a) / n;
												this.observer.trigger(i.default.FRAG_PARSING_USERDATA, {
													samples: e.samples
												})
											}
											e.samples = []
										}, t._PTSNormalize = function(e, t) {
											var r;
											if (void 0 === t) return e;
											for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += r;
											return e
										}, e
									}(),
									N = function() {
										function e(e) {
											this.observer = e
										}
										var t = e.prototype;
										return t.destroy = function() {}, t.resetTimeStamp = function() {}, t.resetInitSegment = function() {}, t.remux = function(e, t, r, n, a, s, o, l) {
											var u = this.observer,
												c = "";
											e && (c += "audio"), t && (c += "video"), u.trigger(i.default.FRAG_PARSING_DATA, {
												data1: l,
												startPTS: a,
												startDTS: a,
												type: c,
												hasAudio: !!e,
												hasVideo: !!t,
												nb: 1,
												dropped: 0
											}), u.trigger(i.default.FRAG_PARSED)
										}, e
									}(),
									B = Object(l.getSelfScope)();
								try {
									x = B.performance.now.bind(B.performance)
								} catch (e) {
									o.logger.debug("Unable to use Performance API on this environment"), x = B.Date.now
								}
								var U = function() {
									function e(e, t, r, i) {
										this.observer = e, this.typeSupported = t, this.config = r, this.vendor = i
									}
									var t = e.prototype;
									return t.destroy = function() {
										var e = this.demuxer;
										e && e.destroy()
									}, t.push = function(e, t, r, n, s, o, l, u, c, d, h, f) {
										var p = this;
										if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
											var g = this.decrypter;
											null == g && (g = this.decrypter = new a.default(this.observer, this.config));
											var v = x();
											g.decrypt(e, t.key.buffer, t.iv.buffer, (function(e) {
												var a = x();
												p.observer.trigger(i.default.FRAG_DECRYPTED, {
													stats: {
														tstart: v,
														tdecrypt: a
													}
												}), p.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), n, s, o, l, u, c, d, h, f)
											}))
										} else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), n, s, o, l, u, c, d, h, f)
									}, t.pushDecrypted = function(e, t, r, a, s, o, l, u, c, d, h, f) {
										var p = this.demuxer;
										if (!p || (l || u) && !this.probe(e)) {
											for (var g = this.observer, v = this.typeSupported, m = this.config, E = [{
												demux: w,
												remux: F
											}, {
												demux: y.default,
												remux: N
											}, {
												demux: _,
												remux: F
											}, {
												demux: R,
												remux: F
											}], b = 0, S = E.length; b < S; b++) {
												var T = E[b],
													A = T.demux.probe;
												if (A(e)) {
													var L = this.remuxer = new T.remux(g, m, v, this.vendor);
													p = new T.demux(g, L, m, v), this.probe = A;
													break
												}
											}
											if (!p) return void g.trigger(i.default.ERROR, {
												type: n.ErrorTypes.MEDIA_ERROR,
												details: n.ErrorDetails.FRAG_PARSING_ERROR,
												fatal: !0,
												reason: "no demux matching with content found"
											});
											this.demuxer = p
										}
										var k = this.remuxer;
										(l || u) && (p.resetInitSegment(r, a, s, d), k.resetInitSegment()), l && (p.resetTimeStamp(f), k.resetTimeStamp(f)), "function" == typeof p.setDecryptData && p.setDecryptData(t), p.append(e, o, c, h)
									}, e
								}();
								t.default = U
							},
						"./src/demux/demuxer-worker.js":
							/*!*************************************!*\
							  !*** ./src/demux/demuxer-worker.js ***!
							  \*************************************/
							/*! exports provided: default */
							/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/demux/demuxer.js (referenced with require.resolve) */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var i = r( /*! ../demux/demuxer-inline */ "./src/demux/demuxer-inline.js"),
									n = r( /*! ../events */ "./src/events.js"),
									a = r( /*! ../utils/logger */ "./src/utils/logger.js"),
									s = r( /*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
								t.default = function(e) {
									var t = new s.EventEmitter;
									t.trigger = function(e) {
										for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
										t.emit.apply(t, [e, e].concat(i))
									}, t.off = function(e) {
										for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
										t.removeListener.apply(t, [e].concat(i))
									};
									var r = function(t, r) {
										e.postMessage({
											event: t,
											data: r
										})
									};
									e.addEventListener("message", (function(n) {
										var s = n.data;
										switch (s.cmd) {
											case "init":
												var o = JSON.parse(s.config);
												e.demuxer = new i.default(t, s.typeSupported, o, s.vendor), Object(a.enableLogs)(o.debug), r("init", null);
												break;
											case "demux":
												e.demuxer.push(s.data, s.decryptdata, s.initSegment, s.audioCodec, s.videoCodec, s.timeOffset, s.discontinuity, s.trackSwitch, s.contiguous, s.duration, s.accurateTimeOffset, s.defaultInitPTS)
										}
									})), t.on(n.default.FRAG_DECRYPTED, r), t.on(n.default.FRAG_PARSING_INIT_SEGMENT, r), t.on(n.default.FRAG_PARSED, r), t.on(n.default.ERROR, r), t.on(n.default.FRAG_PARSING_METADATA, r), t.on(n.default.FRAG_PARSING_USERDATA, r), t.on(n.default.INIT_PTS_FOUND, r), t.on(n.default.FRAG_PARSING_DATA, (function(t, r) {
										var i = [],
											n = {
												event: t,
												data: r
											};
										r.data1 && (n.data1 = r.data1.buffer, i.push(r.data1.buffer), delete r.data1), r.data2 && (n.data2 = r.data2.buffer, i.push(r.data2.buffer), delete r.data2), e.postMessage(n, i)
									}))
								}
							},
						"./src/demux/id3.js":
							/*!**************************!*\
							  !*** ./src/demux/id3.js ***!
							  \**************************/
							/*! exports provided: default, utf8ArrayToStr */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "utf8ArrayToStr", (function() {
									return o
								}));
								var i, n = r( /*! ../utils/get-self-scope */ "./src/utils/get-self-scope.js"),
									a = function() {
										function e() {}
										return e.isHeader = function(e, t) {
											return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
										}, e.isFooter = function(e, t) {
											return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
										}, e.getID3Data = function(t, r) {
											for (var i = r, n = 0; e.isHeader(t, r);) n += 10, n += e._readSize(t, r + 6), e.isFooter(t, r + 10) && (n += 10), r += n;
											if (n > 0) return t.subarray(i, i + n)
										}, e._readSize = function(e, t) {
											var r = 0;
											return r = (127 & e[t]) << 21, r |= (127 & e[t + 1]) << 14, r |= (127 & e[t + 2]) << 7, r |= 127 & e[t + 3]
										}, e.getTimeStamp = function(t) {
											for (var r = e.getID3Frames(t), i = 0; i < r.length; i++) {
												var n = r[i];
												if (e.isTimeStampFrame(n)) return e._readTimeStamp(n)
											}
										}, e.isTimeStampFrame = function(e) {
											return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
										}, e._getFrameData = function(t) {
											var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
												i = e._readSize(t, 4);
											return {
												type: r,
												size: i,
												data: t.subarray(10, 10 + i)
											}
										}, e.getID3Frames = function(t) {
											for (var r = 0, i = []; e.isHeader(t, r);) {
												for (var n = e._readSize(t, r + 6), a = (r += 10) + n; r + 8 < a;) {
													var s = e._getFrameData(t.subarray(r)),
														o = e._decodeFrame(s);
													o && i.push(o), r += s.size + 10
												}
												e.isFooter(t, r) && (r += 10)
											}
											return i
										}, e._decodeFrame = function(t) {
											return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : void 0
										}, e._readTimeStamp = function(e) {
											if (8 === e.data.byteLength) {
												var t = new Uint8Array(e.data),
													r = 1 & t[3],
													i = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
												return i /= 45, r && (i += 47721858.84), Math.round(i)
											}
										}, e._decodePrivFrame = function(t) {
											if (!(t.size < 2)) {
												var r = e._utf8ArrayToStr(t.data, !0),
													i = new Uint8Array(t.data.subarray(r.length + 1));
												return {
													key: t.type,
													info: r,
													data: i.buffer
												}
											}
										}, e._decodeTextFrame = function(t) {
											if (!(t.size < 2)) {
												if ("TXXX" === t.type) {
													var r = 1,
														i = e._utf8ArrayToStr(t.data.subarray(r), !0);
													r += i.length + 1;
													var n = e._utf8ArrayToStr(t.data.subarray(r));
													return {
														key: t.type,
														info: i,
														data: n
													}
												}
												var a = e._utf8ArrayToStr(t.data.subarray(1));
												return {
													key: t.type,
													data: a
												}
											}
										}, e._decodeURLFrame = function(t) {
											if ("WXXX" === t.type) {
												if (t.size < 2) return;
												var r = 1,
													i = e._utf8ArrayToStr(t.data.subarray(r));
												r += i.length + 1;
												var n = e._utf8ArrayToStr(t.data.subarray(r));
												return {
													key: t.type,
													info: i,
													data: n
												}
											}
											var a = e._utf8ArrayToStr(t.data);
											return {
												key: t.type,
												data: a
											}
										}, e._utf8ArrayToStr = function(e, t) {
											void 0 === t && (t = !1);
											var r = s();
											if (r) {
												var i = r.decode(e);
												if (t) {
													var n = i.indexOf("\0");
													return -1 !== n ? i.substring(0, n) : i
												}
												return i.replace(/\0/g, "")
											}
											for (var a, o, l, u = e.length, c = "", d = 0; d < u;) {
												if (0 === (a = e[d++]) && t) return c;
												if (0 !== a && 3 !== a) switch (a >> 4) {
													case 0:
													case 1:
													case 2:
													case 3:
													case 4:
													case 5:
													case 6:
													case 7:
														c += String.fromCharCode(a);
														break;
													case 12:
													case 13:
														o = e[d++], c += String.fromCharCode((31 & a) << 6 | 63 & o);
														break;
													case 14:
														o = e[d++], l = e[d++], c += String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | (63 & l) << 0)
												}
											}
											return c
										}, e
									}();

								function s() {
									var e = Object(n.getSelfScope)();
									return i || void 0 === e.TextDecoder || (i = new e.TextDecoder("utf-8")), i
								}
								var o = a._utf8ArrayToStr;
								t.default = a
							},
						"./src/demux/mp4demuxer.js":
							/*!*********************************!*\
							  !*** ./src/demux/mp4demuxer.js ***!
							  \*********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var i = r( /*! ../utils/logger */ "./src/utils/logger.js"),
									n = r( /*! ../events */ "./src/events.js"),
									a = Math.pow(2, 32) - 1,
									s = function() {
										function e(e, t) {
											this.observer = e, this.remuxer = t
										}
										var t = e.prototype;
										return t.resetTimeStamp = function(e) {
											this.initPTS = e
										}, t.resetInitSegment = function(t, r, i, a) {
											if (t && t.byteLength) {
												var s = this.initData = e.parseInitSegment(t);
												null == r && (r = "mp4a.40.5"), null == i && (i = "avc1.42e01e");
												var o = {};
												s.audio && s.video ? o.audiovideo = {
													container: "video/mp4",
													codec: r + "," + i,
													initSegment: a ? t : null
												} : (s.audio && (o.audio = {
													container: "audio/mp4",
													codec: r,
													initSegment: a ? t : null
												}), s.video && (o.video = {
													container: "video/mp4",
													codec: i,
													initSegment: a ? t : null
												})), this.observer.trigger(n.default.FRAG_PARSING_INIT_SEGMENT, {
													tracks: o
												})
											} else r && (this.audioCodec = r), i && (this.videoCodec = i)
										}, e.probe = function(t) {
											return e.findBox({
													data: t,
													start: 0,
													end: Math.min(t.length, 16384)
												}, ["moof"])
												.length > 0
										}, e.bin2str = function(e) {
											return String.fromCharCode.apply(null, e)
										}, e.readUint16 = function(e, t) {
											e.data && (t += e.start, e = e.data);
											var r = e[t] << 8 | e[t + 1];
											return r < 0 ? 65536 + r : r
										}, e.readUint32 = function(e, t) {
											e.data && (t += e.start, e = e.data);
											var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
											return r < 0 ? 4294967296 + r : r
										}, e.writeUint32 = function(e, t, r) {
											e.data && (t += e.start, e = e.data), e[t] = r >> 24, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r
										}, e.findBox = function(t, r) {
											var i, n, a, s, o, l, u = [];
											if (t.data ? (o = t.start, a = t.end, t = t.data) : (o = 0, a = t.byteLength), !r.length) return null;
											for (i = o; i < a;) l = (n = e.readUint32(t, i)) > 1 ? i + n : a, e.bin2str(t.subarray(i + 4, i + 8)) === r[0] && (1 === r.length ? u.push({
													data: t,
													start: i + 8,
													end: l
												}) : (s = e.findBox({
													data: t,
													start: i + 8,
													end: l
												}, r.slice(1)))
												.length && (u = u.concat(s))), i = l;
											return u
										}, e.parseSegmentIndex = function(t) {
											var r, i = e.findBox(t, ["moov"])[0],
												n = i ? i.end : null,
												a = 0,
												s = e.findBox(t, ["sidx"]);
											if (!s || !s[0]) return null;
											r = [];
											var o = (s = s[0])
												.data[0];
											a = 0 === o ? 8 : 16;
											var l = e.readUint32(s, a);
											a += 4, a += 0 === o ? 8 : 16, a += 2;
											var u = s.end + 0,
												c = e.readUint16(s, a);
											a += 2;
											for (var d = 0; d < c; d++) {
												var h = a,
													f = e.readUint32(s, h);
												h += 4;
												var p = 2147483647 & f;
												if (1 == (2147483648 & f) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
												var g = e.readUint32(s, h);
												h += 4, r.push({
													referenceSize: p,
													subsegmentDuration: g,
													info: {
														duration: g / l,
														start: u,
														end: u + p - 1
													}
												}), u += p, a = h += 4
											}
											return {
												earliestPresentationTime: 0,
												timescale: l,
												version: o,
												referencesCount: c,
												references: r,
												moovEndOffset: n
											}
										}, e.parseInitSegment = function(t) {
											var r = [];
											return e.findBox(t, ["moov", "trak"])
												.forEach((function(t) {
													var n = e.findBox(t, ["tkhd"])[0];
													if (n) {
														var a = n.data[n.start],
															s = 0 === a ? 12 : 20,
															o = e.readUint32(n, s),
															l = e.findBox(t, ["mdia", "mdhd"])[0];
														if (l) {
															s = 0 === (a = l.data[l.start]) ? 12 : 20;
															var u = e.readUint32(l, s),
																c = e.findBox(t, ["mdia", "hdlr"])[0];
															if (c) {
																var d = {
																	soun: "audio",
																	vide: "video"
																} [e.bin2str(c.data.subarray(c.start + 8, c.start + 12))];
																if (d) {
																	var h = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
																	if (h.length) {
																		h = h[0];
																		var f = e.bin2str(h.data.subarray(h.start + 12, h.start + 16));
																		i.logger.log("MP4Demuxer:" + d + ":" + f + " found")
																	}
																	r[o] = {
																		timescale: u,
																		type: d
																	}, r[d] = {
																		timescale: u,
																		id: o
																	}
																}
															}
														}
													}
												})), r
										}, e.getStartDTS = function(t, r) {
											var i, n, a;
											return i = e.findBox(r, ["moof", "traf"]), n = [].concat.apply([], i.map((function(r) {
												return e.findBox(r, ["tfhd"])
													.map((function(i) {
														var n, a;
														return n = e.readUint32(i, 4), a = t[n].timescale || 9e4, e.findBox(r, ["tfdt"])
															.map((function(t) {
																var r, i;
																return r = t.data[t.start], i = e.readUint32(t, 4), 1 === r && (i *= Math.pow(2, 32), i += e.readUint32(t, 8)), i
															}))[0] / a
													}))
											}))), a = Math.min.apply(null, n), isFinite(a) ? a : 0
										}, e.offsetStartDTS = function(t, r, i) {
											e.findBox(r, ["moof", "traf"])
												.map((function(r) {
													return e.findBox(r, ["tfhd"])
														.map((function(n) {
															var s = e.readUint32(n, 4),
																o = t[s].timescale || 9e4;
															e.findBox(r, ["tfdt"])
																.map((function(t) {
																	var r = t.data[t.start],
																		n = e.readUint32(t, 4);
																	if (0 === r) e.writeUint32(t, 4, n - i * o);
																	else {
																		n *= Math.pow(2, 32), n += e.readUint32(t, 8), n -= i * o, n = Math.max(n, 0);
																		var s = Math.floor(n / (a + 1)),
																			l = Math.floor(n % (a + 1));
																		e.writeUint32(t, 4, s), e.writeUint32(t, 8, l)
																	}
																}))
														}))
												}))
										}, t.append = function(t, r, i, a) {
											var s = this.initData;
											s || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), s = this.initData);
											var o, l = this.initPTS;
											if (void 0 === l) {
												var u = e.getStartDTS(s, t);
												this.initPTS = l = u - r, this.observer.trigger(n.default.INIT_PTS_FOUND, {
													initPTS: l
												})
											}
											e.offsetStartDTS(s, t, l), o = e.getStartDTS(s, t), this.remuxer.remux(s.audio, s.video, null, null, o, i, a, t)
										}, t.destroy = function() {}, e
									}();
								t.default = s
							},
						"./src/errors.ts":
							/*!***********************!*\
							  !*** ./src/errors.ts ***!
							  \***********************/
							/*! exports provided: ErrorTypes, ErrorDetails */
							function(e, t, r) {
								"use strict";
								var i, n;
								r.r(t), r.d(t, "ErrorTypes", (function() {
										return i
									})), r.d(t, "ErrorDetails", (function() {
										return n
									})),
									function(e) {
										e.NETWORK_ERROR = "networkError", e.MEDIA_ERROR = "mediaError", e.KEY_SYSTEM_ERROR = "keySystemError", e.MUX_ERROR = "muxError", e.OTHER_ERROR = "otherError"
									}(i || (i = {})),
									function(e) {
										e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", e.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", e.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", e.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", e.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", e.MANIFEST_LOAD_ERROR = "manifestLoadError", e.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", e.MANIFEST_PARSING_ERROR = "manifestParsingError", e.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", e.LEVEL_EMPTY_ERROR = "levelEmptyError", e.LEVEL_LOAD_ERROR = "levelLoadError", e.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", e.LEVEL_SWITCH_ERROR = "levelSwitchError", e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", e.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", e.FRAG_LOAD_ERROR = "fragLoadError", e.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", e.FRAG_DECRYPT_ERROR = "fragDecryptError", e.FRAG_PARSING_ERROR = "fragParsingError", e.REMUX_ALLOC_ERROR = "remuxAllocError", e.KEY_LOAD_ERROR = "keyLoadError", e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", e.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", e.BUFFER_APPEND_ERROR = "bufferAppendError", e.BUFFER_APPENDING_ERROR = "bufferAppendingError", e.BUFFER_STALLED_ERROR = "bufferStalledError", e.BUFFER_FULL_ERROR = "bufferFullError", e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", e.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", e.INTERNAL_EXCEPTION = "internalException"
									}(n || (n = {}))
							},
						"./src/events.js":
							/*!***********************!*\
							  !*** ./src/events.js ***!
							  \***********************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), t.default = {
									MEDIA_ATTACHING: "hlsMediaAttaching",
									MEDIA_ATTACHED: "hlsMediaAttached",
									MEDIA_DETACHING: "hlsMediaDetaching",
									MEDIA_DETACHED: "hlsMediaDetached",
									BUFFER_RESET: "hlsBufferReset",
									BUFFER_CODECS: "hlsBufferCodecs",
									BUFFER_CREATED: "hlsBufferCreated",
									BUFFER_APPENDING: "hlsBufferAppending",
									BUFFER_APPENDED: "hlsBufferAppended",
									BUFFER_EOS: "hlsBufferEos",
									BUFFER_FLUSHING: "hlsBufferFlushing",
									BUFFER_FLUSHED: "hlsBufferFlushed",
									MANIFEST_LOADING: "hlsManifestLoading",
									MANIFEST_LOADED: "hlsManifestLoaded",
									MANIFEST_PARSED: "hlsManifestParsed",
									LEVEL_SWITCHING: "hlsLevelSwitching",
									LEVEL_SWITCHED: "hlsLevelSwitched",
									LEVEL_LOADING: "hlsLevelLoading",
									LEVEL_LOADED: "hlsLevelLoaded",
									LEVEL_UPDATED: "hlsLevelUpdated",
									LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
									LEVELS_UPDATED: "hlsLevelsUpdated",
									AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
									AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
									AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
									AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
									AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
									SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
									SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
									SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
									SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
									SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
									CUES_PARSED: "hlsCuesParsed",
									NON_NATIVE_TEXT_TRACKS_FOUND: "hlsNonNativeTextTracksFound",
									INIT_PTS_FOUND: "hlsInitPtsFound",
									FRAG_LOADING: "hlsFragLoading",
									FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
									FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
									FRAG_LOADED: "hlsFragLoaded",
									FRAG_DECRYPTED: "hlsFragDecrypted",
									FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
									FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
									FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
									FRAG_PARSING_DATA: "hlsFragParsingData",
									FRAG_PARSED: "hlsFragParsed",
									FRAG_BUFFERED: "hlsFragBuffered",
									FRAG_CHANGED: "hlsFragChanged",
									FPS_DROP: "hlsFpsDrop",
									FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
									ERROR: "hlsError",
									DESTROYING: "hlsDestroying",
									KEY_LOADING: "hlsKeyLoading",
									KEY_LOADED: "hlsKeyLoaded",
									STREAM_STATE_TRANSITION: "hlsStreamStateTransition",
									LIVE_BACK_BUFFER_REACHED: "hlsLiveBackBufferReached"
								}
							},
						"./src/hls.ts":
							/*!*********************************!*\
							  !*** ./src/hls.ts + 50 modules ***!
							  \*********************************/
							/*! exports provided: default */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/crypt/decrypter.js because of ./src/demux/demuxer-worker.js */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/demux/demuxer-inline.js because of ./src/demux/demuxer-worker.js */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/demux/id3.js because of ./src/demux/demuxer-worker.js */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/demux/mp4demuxer.js because of ./src/demux/demuxer-worker.js */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/errors.ts because of ./src/demux/demuxer-worker.js */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/events.js because of ./src/demux/demuxer-worker.js */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/polyfills/number.js because of ./src/demux/demuxer-worker.js */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/utils/get-self-scope.js because of ./src/demux/demuxer-worker.js */
							/*! ModuleConcatenation bailout: Cannot concat with ./src/utils/logger.js because of ./src/demux/demuxer-worker.js */
							/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/eventemitter3/index.js (<- Module is not an ECMAScript module) */
							/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/url-toolkit/src/url-toolkit.js (<- Module is not an ECMAScript module) */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return ar
								}));
								var i = {};
								r.r(i), r.d(i, "newCue", (function() {
									return ft
								}));
								var n, a, s = r("./node_modules/url-toolkit/src/url-toolkit.js"),
									o = r("./src/errors.ts"),
									l = r("./src/polyfills/number.js"),
									u = r("./src/events.js"),
									c = r("./src/utils/logger.js"),
									d = {
										hlsEventGeneric: !0,
										hlsHandlerDestroying: !0,
										hlsHandlerDestroyed: !0
									},
									h = function() {
										function e(e) {
											this.hls = void 0, this.handledEvents = void 0, this.useGenericHandler = void 0, this.hls = e, this.onEvent = this.onEvent.bind(this);
											for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
											this.handledEvents = r, this.useGenericHandler = !0, this.registerListeners()
										}
										var t = e.prototype;
										return t.destroy = function() {
											this.onHandlerDestroying(), this.unregisterListeners(), this.onHandlerDestroyed()
										}, t.onHandlerDestroying = function() {}, t.onHandlerDestroyed = function() {}, t.isEventHandler = function() {
											return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
										}, t.registerListeners = function() {
											this.isEventHandler() && this.handledEvents.forEach((function(e) {
												if (d[e]) throw new Error("Forbidden event-name: " + e);
												this.hls.on(e, this.onEvent)
											}), this)
										}, t.unregisterListeners = function() {
											this.isEventHandler() && this.handledEvents.forEach((function(e) {
												this.hls.off(e, this.onEvent)
											}), this)
										}, t.onEvent = function(e, t) {
											this.onEventGeneric(e, t)
										}, t.onEventGeneric = function(e, t) {
											try {
												(function(e, t) {
													var r = "on" + e.replace("hls", "");
													if ("function" != typeof this[r]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
													return this[r].bind(this, t)
												})
												.call(this, e, t)
													.call()
											} catch (t) {
												c.logger.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t), this.hls.trigger(u.default.ERROR, {
													type: o.ErrorTypes.OTHER_ERROR,
													details: o.ErrorDetails.INTERNAL_EXCEPTION,
													fatal: !1,
													event: e,
													err: t
												})
											}
										}, e
									}();
								! function(e) {
									e.MANIFEST = "manifest", e.LEVEL = "level", e.AUDIO_TRACK = "audioTrack", e.SUBTITLE_TRACK = "subtitleTrack"
								}(n || (n = {})),
								function(e) {
									e.MAIN = "main", e.AUDIO = "audio", e.SUBTITLE = "subtitle"
								}(a || (a = {}));
								var f = r("./src/demux/mp4demuxer.js");

								function p(e, t) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
									}
								}
								var g, v = function() {
									function e(e, t) {
										this._uri = null, this.baseuri = void 0, this.reluri = void 0, this.method = null, this.key = null, this.iv = null, this.baseuri = e, this.reluri = t
									}
									var t, r, i;
									return t = e, (r = [{
										key: "uri",
										get: function() {
											return !this._uri && this.reluri && (this._uri = Object(s.buildAbsoluteURL)(this.baseuri, this.reluri, {
												alwaysNormalize: !0
											})), this._uri
										}
									}]) && p(t.prototype, r), i && p(t, i), e
								}();

								function m(e, t) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
									}
								}! function(e) {
									e.AUDIO = "audio", e.VIDEO = "video"
								}(g || (g = {}));
								var _ = function() {
									function e() {
										var e;
										this._url = null, this._byteRange = null, this._decryptdata = null, this._elementaryStreams = ((e = {})[g.AUDIO] = !1, e[g.VIDEO] = !1, e), this.deltaPTS = 0, this.rawProgramDateTime = null, this.programDateTime = null, this.title = null, this.tagList = [], this.cc = void 0, this.type = void 0, this.relurl = void 0, this.baseurl = void 0, this.duration = void 0, this.start = void 0, this.sn = 0, this.urlId = 0, this.level = 0, this.levelkey = void 0, this.loader = void 0
									}
									var t, r, i, n = e.prototype;
									return n.setByteRange = function(e, t) {
										var r = e.split("@", 2),
											i = [];
										1 === r.length ? i[0] = t ? t.byteRangeEndOffset : 0 : i[0] = parseInt(r[1]), i[1] = parseInt(r[0]) + i[0], this._byteRange = i
									}, n.addElementaryStream = function(e) {
										this._elementaryStreams[e] = !0
									}, n.hasElementaryStream = function(e) {
										return !0 === this._elementaryStreams[e]
									}, n.createInitializationVector = function(e) {
										for (var t = new Uint8Array(16), r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255;
										return t
									}, n.setDecryptDataFromLevelKey = function(e, t) {
										var r = e;
										return (null == e ? void 0 : e.method) && e.uri && !e.iv && ((r = new v(e.baseuri, e.reluri))
											.method = e.method, r.iv = this.createInitializationVector(t)), r
									}, t = e, (r = [{
										key: "url",
										get: function() {
											return !this._url && this.relurl && (this._url = Object(s.buildAbsoluteURL)(this.baseurl, this.relurl, {
												alwaysNormalize: !0
											})), this._url
										},
										set: function(e) {
											this._url = e
										}
									}, {
										key: "byteRange",
										get: function() {
											return this._byteRange ? this._byteRange : []
										}
									}, {
										key: "byteRangeStartOffset",
										get: function() {
											return this.byteRange[0]
										}
									}, {
										key: "byteRangeEndOffset",
										get: function() {
											return this.byteRange[1]
										}
									}, {
										key: "decryptdata",
										get: function() {
											if (!this.levelkey && !this._decryptdata) return null;
											if (!this._decryptdata && this.levelkey) {
												var e = this.sn;
												"number" != typeof e && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && c.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), e = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, e)
											}
											return this._decryptdata
										}
									}, {
										key: "endProgramDateTime",
										get: function() {
											if (null === this.programDateTime) return null;
											if (!Object(l.isFiniteNumber)(this.programDateTime)) return null;
											var e = Object(l.isFiniteNumber)(this.duration) ? this.duration : 0;
											return this.programDateTime + 1e3 * e
										}
									}, {
										key: "encrypted",
										get: function() {
											return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
										}
									}]) && m(t.prototype, r), i && m(t, i), e
								}();

								function y(e, t) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
									}
								}
								var E = function() {
										function e(e) {
											this.endCC = 0, this.endSN = 0, this.fragments = [], this.initSegment = null, this.live = !0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = e, this.version = null
										}
										var t, r, i;
										return t = e, (r = [{
											key: "hasProgramDateTime",
											get: function() {
												return !(!this.fragments[0] || !Object(l.isFiniteNumber)(this.fragments[0].programDateTime))
											}
										}]) && y(t.prototype, r), i && y(t, i), e
									}(),
									b = /^(\d+)x(\d+)$/,
									S = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
									T = function() {
										function e(t) {
											for (var r in "string" == typeof t && (t = e.parseAttrList(t)), t) t.hasOwnProperty(r) && (this[r] = t[r])
										}
										var t = e.prototype;
										return t.decimalInteger = function(e) {
											var t = parseInt(this[e], 10);
											return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
										}, t.hexadecimalInteger = function(e) {
											if (this[e]) {
												var t = (this[e] || "0x")
													.slice(2);
												t = (1 & t.length ? "0" : "") + t;
												for (var r = new Uint8Array(t.length / 2), i = 0; i < t.length / 2; i++) r[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16);
												return r
											}
											return null
										}, t.hexadecimalIntegerAsNumber = function(e) {
											var t = parseInt(this[e], 16);
											return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
										}, t.decimalFloatingPoint = function(e) {
											return parseFloat(this[e])
										}, t.enumeratedString = function(e) {
											return this[e]
										}, t.decimalResolution = function(e) {
											var t = b.exec(this[e]);
											if (null !== t) return {
												width: parseInt(t[1], 10),
												height: parseInt(t[2], 10)
											}
										}, e.parseAttrList = function(e) {
											var t, r = {};
											for (S.lastIndex = 0; null !== (t = S.exec(e));) {
												var i = t[2];
												0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), r[t[1]] = i
											}
											return r
										}, e
									}(),
									A = {
										audio: {
											a3ds: !0,
											"ac-3": !0,
											"ac-4": !0,
											alac: !0,
											alaw: !0,
											dra1: !0,
											"dts+": !0,
											"dts-": !0,
											dtsc: !0,
											dtse: !0,
											dtsh: !0,
											"ec-3": !0,
											enca: !0,
											g719: !0,
											g726: !0,
											m4ae: !0,
											mha1: !0,
											mha2: !0,
											mhm1: !0,
											mhm2: !0,
											mlpa: !0,
											mp4a: !0,
											"raw ": !0,
											Opus: !0,
											samr: !0,
											sawb: !0,
											sawp: !0,
											sevc: !0,
											sqcp: !0,
											ssmv: !0,
											twos: !0,
											ulaw: !0
										},
										video: {
											avc1: !0,
											avc2: !0,
											avc3: !0,
											avc4: !0,
											avcp: !0,
											drac: !0,
											dvav: !0,
											dvhe: !0,
											encv: !0,
											hev1: !0,
											hvc1: !0,
											mjp2: !0,
											mp4v: !0,
											mvc1: !0,
											mvc2: !0,
											mvc3: !0,
											mvc4: !0,
											resv: !0,
											rv60: !0,
											s263: !0,
											svc1: !0,
											svc2: !0,
											"vc-1": !0,
											vp08: !0,
											vp09: !0
										}
									};

								function w(e, t) {
									return MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
								}
								var R = /(?:#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)|#EXT-X-SESSION-DATA:([^\n\r]*)[\r\n]+)/g,
									L = /#EXT-X-MEDIA:(.*)/g,
									k = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
									O = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
									D = /\.(mp4|m4s|m4v|m4a)$/i,
									C = function() {
										function e() {}
										return e.findGroup = function(e, t) {
											for (var r = 0; r < e.length; r++) {
												var i = e[r];
												if (i.id === t) return i
											}
										}, e.convertAVC1ToAVCOTI = function(e) {
											var t, r = e.split(".");
											return r.length > 2 ? (t = r.shift() + ".", t += parseInt(r.shift())
												.toString(16), t += ("000" + parseInt(r.shift())
													.toString(16))
												.substr(-4)) : t = e, t
										}, e.resolve = function(e, t) {
											return s.buildAbsoluteURL(t, e, {
												alwaysNormalize: !0
											})
										}, e.parseMasterPlaylist = function(t, r) {
											var i, n = [],
												a = {},
												s = !1;

											function o(e, t) {
												["video", "audio"].forEach((function(r) {
													var i = e.filter((function(e) {
														return function(e, t) {
															var r = A[t];
															return !!r && !0 === r[e.slice(0, 4)]
														}(e, r)
													}));
													if (i.length) {
														var n = i.filter((function(e) {
															return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
														}));
														t[r + "Codec"] = n.length > 0 ? n[0] : i[0], e = e.filter((function(e) {
															return -1 === i.indexOf(e)
														}))
													}
												})), t.unknownCodecs = e
											}
											for (R.lastIndex = 0; null != (i = R.exec(t));)
												if (i[1]) {
													var l = {},
														u = l.attrs = new T(i[1]);
													l.url = e.resolve(i[2], r);
													var c = u.decimalResolution("RESOLUTION");
													c && (l.width = c.width, l.height = c.height), l.bitrate = u.decimalInteger("AVERAGE-BANDWIDTH") || u.decimalInteger("BANDWIDTH"), l.name = u.NAME, o([].concat((u.CODECS || "")
														.split(/[ ,]+/)), l), l.videoCodec && -1 !== l.videoCodec.indexOf("avc1") && (l.videoCodec = e.convertAVC1ToAVCOTI(l.videoCodec)), n.push(l)
												} else if (i[3]) {
												var d = new T(i[3]);
												d["DATA-ID"] && (s = !0, a[d["DATA-ID"]] = d)
											}
											return {
												levels: n,
												sessionData: s ? a : null
											}
										}, e.parseMasterPlaylistMedia = function(t, r, i, n) {
											var a;
											void 0 === n && (n = []);
											var s = [],
												o = 0;
											for (L.lastIndex = 0; null !== (a = L.exec(t));) {
												var l = new T(a[1]);
												if (l.TYPE === i) {
													var u = {
														attrs: l,
														id: o++,
														groupId: l["GROUP-ID"],
														instreamId: l["INSTREAM-ID"],
														name: l.NAME || l.LANGUAGE,
														type: i,
														default: "YES" === l.DEFAULT,
														autoselect: "YES" === l.AUTOSELECT,
														forced: "YES" === l.FORCED,
														lang: l.LANGUAGE
													};
													if (l.URI && (u.url = e.resolve(l.URI, r)), n.length) {
														var c = e.findGroup(n, u.groupId);
														u.audioCodec = c ? c.codec : n[0].codec
													}
													s.push(u)
												}
											}
											return s
										}, e.parseLevelPlaylist = function(e, t, r, i, n) {
											var a, s, o, u = 0,
												d = 0,
												h = new E(t),
												f = 0,
												p = null,
												g = new _,
												m = null;
											for (k.lastIndex = 0; null !== (a = k.exec(e));) {
												var y = a[1];
												if (y) {
													g.duration = parseFloat(y);
													var b = (" " + a[2])
														.slice(1);
													g.title = b || null, g.tagList.push(b ? ["INF", y, b] : ["INF", y])
												} else if (a[3]) {
													if (Object(l.isFiniteNumber)(g.duration)) {
														var S = u++;
														g.type = i, g.start = d, o && (g.levelkey = o), g.sn = S, g.level = r, g.cc = f, g.urlId = n, g.baseurl = t, g.relurl = (" " + a[3])
															.slice(1), I(g, p), h.fragments.push(g), p = g, d += g.duration, g = new _
													}
												} else if (a[4]) {
													var A = (" " + a[4])
														.slice(1);
													p ? g.setByteRange(A, p) : g.setByteRange(A)
												} else if (a[5]) g.rawProgramDateTime = (" " + a[5])
													.slice(1), g.tagList.push(["PROGRAM-DATE-TIME", g.rawProgramDateTime]), null === m && (m = h.fragments.length);
												else {
													if (!(a = a[0].match(O))) {
														c.logger.warn("No matches on slow regex match for level playlist!");
														continue
													}
													for (s = 1; s < a.length && void 0 === a[s]; s++);
													var w = (" " + a[s + 1])
														.slice(1),
														R = (" " + a[s + 2])
														.slice(1);
													switch (a[s]) {
														case "#":
															g.tagList.push(R ? [w, R] : [w]);
															break;
														case "PLAYLIST-TYPE":
															h.type = w.toUpperCase();
															break;
														case "MEDIA-SEQUENCE":
															u = h.startSN = parseInt(w);
															break;
														case "TARGETDURATION":
															h.targetduration = parseFloat(w);
															break;
														case "VERSION":
															h.version = parseInt(w);
															break;
														case "EXTM3U":
															break;
														case "ENDLIST":
															h.live = !1;
															break;
														case "DIS":
															f++, g.tagList.push(["DIS"]);
															break;
														case "DISCONTINUITY-SEQ":
															f = parseInt(w);
															break;
														case "KEY":
															var L = new T(w),
																C = L.enumeratedString("METHOD"),
																x = L.URI,
																P = L.hexadecimalInteger("IV");
															if ("com.apple.streamingkeydelivery" === (L.KEYFORMAT || "identity")) {
																c.logger.warn("Keyformat com.apple.streamingkeydelivery is not supported");
																continue
															}
															C && (o = new v(t, x), x && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(C) >= 0 && (o.method = C, o.key = null, o.iv = P));
															break;
														case "START":
															var M = new T(w)
																.decimalFloatingPoint("TIME-OFFSET");
															Object(l.isFiniteNumber)(M) && (h.startTimeOffset = M);
															break;
														case "MAP":
															var F = new T(w);
															g.relurl = F.URI, F.BYTERANGE && g.setByteRange(F.BYTERANGE), g.baseurl = t, g.level = r, g.type = i, g.sn = "initSegment", h.initSegment = g, (g = new _)
																.rawProgramDateTime = h.initSegment.rawProgramDateTime;
															break;
														default:
															c.logger.warn("line parsed but not handled: " + a)
													}
												}
											}
											return (g = p) && !g.relurl && (h.fragments.pop(), d -= g.duration), h.totalduration = d, h.averagetargetduration = d / h.fragments.length, h.endSN = u - 1, h.startCC = h.fragments[0] ? h.fragments[0].cc : 0, h.endCC = f, !h.initSegment && h.fragments.length && h.fragments.every((function(e) {
												return D.test(e.relurl)
											})) && (c.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (g = new _)
												.relurl = h.fragments[0].relurl, g.baseurl = t, g.level = r, g.type = i, g.sn = "initSegment", h.initSegment = g, h.needSidxRanges = !0), m && function(e, t) {
												for (var r = e[t], i = t - 1; i >= 0; i--) {
													var n = e[i];
													n.programDateTime = r.programDateTime - 1e3 * n.duration, r = n
												}
											}(h.fragments, m), h
										}, e
									}();

								function I(e, t) {
									e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : (null == t ? void 0 : t.programDateTime) && (e.programDateTime = t.endProgramDateTime), Object(l.isFiniteNumber)(e.programDateTime) || (e.programDateTime = null, e.rawProgramDateTime = null)
								}
								var x = window.performance,
									P = function(e) {
										var t, r;

										function i(t) {
											var r;
											return (r = e.call(this, t, u.default.MANIFEST_LOADING, u.default.LEVEL_LOADING, u.default.AUDIO_TRACK_LOADING, u.default.SUBTITLE_TRACK_LOADING) || this)
												.loaders = {}, r
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, i.canHaveQualityLevels = function(e) {
												return e !== n.AUDIO_TRACK && e !== n.SUBTITLE_TRACK
											}, i.mapContextToLevelType = function(e) {
												switch (e.type) {
													case n.AUDIO_TRACK:
														return a.AUDIO;
													case n.SUBTITLE_TRACK:
														return a.SUBTITLE;
													default:
														return a.MAIN
												}
											}, i.getResponseUrl = function(e, t) {
												var r = e.url;
												return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url), r
											};
										var s = i.prototype;
										return s.createInternalLoader = function(e) {
											var t = this.hls.config,
												r = t.pLoader,
												i = t.loader,
												n = new(r || i)(t);
											return e.loader = n, this.loaders[e.type] = n, n
										}, s.getInternalLoader = function(e) {
											return this.loaders[e.type]
										}, s.resetInternalLoader = function(e) {
											this.loaders[e] && delete this.loaders[e]
										}, s.destroyInternalLoaders = function() {
											for (var e in this.loaders) {
												var t = this.loaders[e];
												t && t.destroy(), this.resetInternalLoader(e)
											}
										}, s.destroy = function() {
											this.destroyInternalLoaders(), e.prototype.destroy.call(this)
										}, s.onManifestLoading = function(e) {
											this.load({
												url: e.url,
												type: n.MANIFEST,
												level: 0,
												id: null,
												responseType: "text"
											})
										}, s.onLevelLoading = function(e) {
											this.load({
												url: e.url,
												type: n.LEVEL,
												level: e.level,
												id: e.id,
												responseType: "text"
											})
										}, s.onAudioTrackLoading = function(e) {
											this.load({
												url: e.url,
												type: n.AUDIO_TRACK,
												level: null,
												id: e.id,
												responseType: "text"
											})
										}, s.onSubtitleTrackLoading = function(e) {
											this.load({
												url: e.url,
												type: n.SUBTITLE_TRACK,
												level: null,
												id: e.id,
												responseType: "text"
											})
										}, s.load = function(e) {
											var t = this.hls.config;
											c.logger.debug("Loading playlist of type " + e.type + ", level: " + e.level + ", id: " + e.id);
											var r, i, a, s, o = this.getInternalLoader(e);
											if (o) {
												var l = o.context;
												if (l && l.url === e.url) return c.logger.trace("playlist request ongoing"), !1;
												c.logger.warn("aborting previous loader for type: " + e.type), o.abort()
											}
											switch (e.type) {
												case n.MANIFEST:
													r = t.manifestLoadingMaxRetry, i = t.manifestLoadingTimeOut, a = t.manifestLoadingRetryDelay, s = t.manifestLoadingMaxRetryTimeout;
													break;
												case n.LEVEL:
													r = 0, s = 0, a = 0, i = t.levelLoadingTimeOut;
													break;
												default:
													r = t.levelLoadingMaxRetry, i = t.levelLoadingTimeOut, a = t.levelLoadingRetryDelay, s = t.levelLoadingMaxRetryTimeout
											}
											o = this.createInternalLoader(e);
											var u = {
													timeout: i,
													maxRetry: r,
													retryDelay: a,
													maxRetryDelay: s
												},
												d = {
													onSuccess: this.loadsuccess.bind(this),
													onError: this.loaderror.bind(this),
													onTimeout: this.loadtimeout.bind(this)
												};
											return c.logger.debug("Calling internal loader delegate for URL: " + e.url), o.load(e, u, d), !0
										}, s.loadsuccess = function(e, t, r, i) {
											if (void 0 === i && (i = null), r.isSidxRequest) return this._handleSidxRequest(e, r), void this._handlePlaylistLoaded(e, t, r, i);
											if (this.resetInternalLoader(r.type), "string" != typeof e.data) throw new Error('expected responseType of "text" for PlaylistLoader');
											var n = e.data;
											t.tload = x.now(), 0 === n.indexOf("#EXTM3U") ? n.indexOf("#EXTINF:") > 0 || n.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, r, i) : this._handleMasterPlaylist(e, t, r, i) : this._handleManifestParsingError(e, r, "no EXTM3U delimiter", i)
										}, s.loaderror = function(e, t, r) {
											void 0 === r && (r = null), this._handleNetworkError(t, r, !1, e)
										}, s.loadtimeout = function(e, t, r) {
											void 0 === r && (r = null), this._handleNetworkError(t, r, !0)
										}, s._handleMasterPlaylist = function(e, t, r, n) {
											var a = this.hls,
												s = e.data,
												o = i.getResponseUrl(e, r),
												l = C.parseMasterPlaylist(s, o),
												d = l.levels,
												h = l.sessionData;
											if (d.length) {
												var f = d.map((function(e) {
														return {
															id: e.attrs.AUDIO,
															codec: e.audioCodec
														}
													})),
													p = C.parseMasterPlaylistMedia(s, o, "AUDIO", f),
													g = C.parseMasterPlaylistMedia(s, o, "SUBTITLES"),
													v = C.parseMasterPlaylistMedia(s, o, "CLOSED-CAPTIONS");
												if (p.length) {
													var m = !1;
													p.forEach((function(e) {
														e.url || (m = !0)
													})), !1 === m && d[0].audioCodec && !d[0].attrs.AUDIO && (c.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), p.unshift({
														type: "main",
														name: "main",
														default: !1,
														autoselect: !1,
														forced: !1,
														id: -1,
														attrs: {},
														url: ""
													}))
												}
												a.trigger(u.default.MANIFEST_LOADED, {
													levels: d,
													audioTracks: p,
													subtitles: g,
													captions: v,
													url: o,
													stats: t,
													networkDetails: n,
													sessionData: h
												})
											} else this._handleManifestParsingError(e, r, "no level found in manifest", n)
										}, s._handleTrackOrLevelPlaylist = function(e, t, r, a) {
											var s = this.hls,
												c = r.id,
												d = r.level,
												h = r.type,
												f = i.getResponseUrl(e, r),
												p = Object(l.isFiniteNumber)(c) ? c : 0,
												g = Object(l.isFiniteNumber)(d) ? d : p,
												v = i.mapContextToLevelType(r),
												m = C.parseLevelPlaylist(e.data, f, g, v, p);
											if (m.tload = t.tload, m.fragments.length) {
												if (h === n.MANIFEST) {
													var _ = {
														url: f,
														details: m
													};
													s.trigger(u.default.MANIFEST_LOADED, {
														levels: [_],
														audioTracks: [],
														url: f,
														stats: t,
														networkDetails: a,
														sessionData: null
													})
												}
												if (t.tparsed = x.now(), m.needSidxRanges) {
													var y = m.initSegment.url;
													this.load({
														url: y,
														isSidxRequest: !0,
														type: h,
														level: d,
														levelDetails: m,
														id: c,
														rangeStart: 0,
														rangeEnd: 2048,
														responseType: "arraybuffer"
													})
												} else r.levelDetails = m, this._handlePlaylistLoaded(e, t, r, a)
											} else s.trigger(u.default.ERROR, {
												type: o.ErrorTypes.NETWORK_ERROR,
												details: o.ErrorDetails.LEVEL_EMPTY_ERROR,
												fatal: !1,
												url: f,
												reason: "no fragments found in level",
												level: "number" == typeof r.level ? r.level : void 0
											})
										}, s._handleSidxRequest = function(e, t) {
											if ("string" == typeof e.data) throw new Error("sidx request must be made with responseType of array buffer");
											var r = f.default.parseSegmentIndex(new Uint8Array(e.data));
											if (r) {
												var i = r.references,
													n = t.levelDetails;
												i.forEach((function(e, t) {
													var r = e.info;
													if (n) {
														var i = n.fragments[t];
														0 === i.byteRange.length && i.setByteRange(String(1 + r.end - r.start) + "@" + String(r.start))
													}
												})), n && n.initSegment.setByteRange(String(r.moovEndOffset) + "@0")
											}
										}, s._handleManifestParsingError = function(e, t, r, i) {
											this.hls.trigger(u.default.ERROR, {
												type: o.ErrorTypes.NETWORK_ERROR,
												details: o.ErrorDetails.MANIFEST_PARSING_ERROR,
												fatal: !0,
												url: e.url,
												reason: r,
												networkDetails: i
											})
										}, s._handleNetworkError = function(e, t, r, i) {
											var a, s;
											void 0 === r && (r = !1), void 0 === i && (i = null), c.logger.info("A network error occured while loading a " + e.type + "-type playlist");
											var l = this.getInternalLoader(e);
											switch (e.type) {
												case n.MANIFEST:
													a = r ? o.ErrorDetails.MANIFEST_LOAD_TIMEOUT : o.ErrorDetails.MANIFEST_LOAD_ERROR, s = !0;
													break;
												case n.LEVEL:
													a = r ? o.ErrorDetails.LEVEL_LOAD_TIMEOUT : o.ErrorDetails.LEVEL_LOAD_ERROR, s = !1;
													break;
												case n.AUDIO_TRACK:
													a = r ? o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, s = !1;
													break;
												default:
													s = !1
											}
											l && (l.abort(), this.resetInternalLoader(e.type));
											var d = {
												type: o.ErrorTypes.NETWORK_ERROR,
												details: a,
												fatal: s,
												url: e.url,
												loader: l,
												context: e,
												networkDetails: t
											};
											i && (d.response = i), this.hls.trigger(u.default.ERROR, d)
										}, s._handlePlaylistLoaded = function(e, t, r, a) {
											var s = r.type,
												o = r.level,
												l = r.id,
												c = r.levelDetails;
											if (c && c.targetduration)
												if (i.canHaveQualityLevels(r.type)) this.hls.trigger(u.default.LEVEL_LOADED, {
													details: c,
													level: o || 0,
													id: l || 0,
													stats: t,
													networkDetails: a
												});
												else switch (s) {
													case n.AUDIO_TRACK:
														this.hls.trigger(u.default.AUDIO_TRACK_LOADED, {
															details: c,
															id: l,
															stats: t,
															networkDetails: a
														});
														break;
													case n.SUBTITLE_TRACK:
														this.hls.trigger(u.default.SUBTITLE_TRACK_LOADED, {
															details: c,
															id: l,
															stats: t,
															networkDetails: a
														})
												} else this._handleManifestParsingError(e, r, "invalid target duration", a)
										}, i
									}(h),
									M = function(e) {
										var t, r;

										function i(t) {
											var r;
											return (r = e.call(this, t, u.default.FRAG_LOADING) || this)
												.loaders = {}, r
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n = i.prototype;
										return n.destroy = function() {
											var t = this.loaders;
											for (var r in t) {
												var i = t[r];
												i && i.destroy()
											}
											this.loaders = {}, e.prototype.destroy.call(this)
										}, n.onFragLoading = function(e) {
											var t = e.frag,
												r = t.type,
												i = this.loaders,
												n = this.hls.config,
												a = n.fLoader,
												s = n.loader;
											t.loaded = 0;
											var o, u, d, h = i[r];
											h && (c.logger.warn("abort previous fragment loader for type: " + r), h.abort()), h = i[r] = t.loader = n.fLoader ? new a(n) : new s(n), o = {
												url: t.url,
												frag: t,
												responseType: "arraybuffer",
												progressData: !1
											};
											var f = t.byteRangeStartOffset,
												p = t.byteRangeEndOffset;
											Object(l.isFiniteNumber)(f) && Object(l.isFiniteNumber)(p) && (o.rangeStart = f, o.rangeEnd = p), u = {
												timeout: n.fragLoadingTimeOut,
												maxRetry: 0,
												retryDelay: 0,
												maxRetryDelay: n.fragLoadingMaxRetryTimeout
											}, d = {
												onSuccess: this.loadsuccess.bind(this),
												onError: this.loaderror.bind(this),
												onTimeout: this.loadtimeout.bind(this),
												onProgress: this.loadprogress.bind(this)
											}, h.load(o, u, d)
										}, n.loadsuccess = function(e, t, r, i) {
											void 0 === i && (i = null);
											var n = e.data,
												a = r.frag;
											a.loader = void 0, this.loaders[a.type] = void 0, this.hls.trigger(u.default.FRAG_LOADED, {
												payload: n,
												frag: a,
												stats: t,
												networkDetails: i
											})
										}, n.loaderror = function(e, t, r) {
											void 0 === r && (r = null);
											var i = t.frag,
												n = i.loader;
											n && n.abort(), this.loaders[i.type] = void 0, this.hls.trigger(u.default.ERROR, {
												type: o.ErrorTypes.NETWORK_ERROR,
												details: o.ErrorDetails.FRAG_LOAD_ERROR,
												fatal: !1,
												frag: t.frag,
												response: e,
												networkDetails: r
											})
										}, n.loadtimeout = function(e, t, r) {
											void 0 === r && (r = null);
											var i = t.frag,
												n = i.loader;
											n && n.abort(), this.loaders[i.type] = void 0, this.hls.trigger(u.default.ERROR, {
												type: o.ErrorTypes.NETWORK_ERROR,
												details: o.ErrorDetails.FRAG_LOAD_TIMEOUT,
												fatal: !1,
												frag: t.frag,
												networkDetails: r
											})
										}, n.loadprogress = function(e, t, r, i) {
											void 0 === i && (i = null);
											var n = t.frag;
											n.loaded = e.loaded, this.hls.trigger(u.default.FRAG_LOAD_PROGRESS, {
												frag: n,
												stats: e,
												networkDetails: i
											})
										}, i
									}(h),
									F = function(e) {
										var t, r;

										function i(t) {
											var r;
											return (r = e.call(this, t, u.default.KEY_LOADING) || this)
												.loaders = {}, r.decryptkey = null, r.decrypturl = null, r
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n = i.prototype;
										return n.destroy = function() {
											for (var t in this.loaders) {
												var r = this.loaders[t];
												r && r.destroy()
											}
											this.loaders = {}, e.prototype.destroy.call(this)
										}, n.onKeyLoading = function(e) {
											var t = e.frag,
												r = t.type,
												i = this.loaders[r];
											if (t.decryptdata) {
												var n = t.decryptdata.uri;
												if (n !== this.decrypturl || null === this.decryptkey) {
													var a = this.hls.config;
													if (i && (c.logger.warn("abort previous key loader for type:" + r), i.abort()), !n) return void c.logger.warn("key uri is falsy");
													t.loader = this.loaders[r] = new a.loader(a), this.decrypturl = n, this.decryptkey = null;
													var s = {
															url: n,
															frag: t,
															responseType: "arraybuffer"
														},
														o = {
															timeout: a.fragLoadingTimeOut,
															maxRetry: 0,
															retryDelay: a.fragLoadingRetryDelay,
															maxRetryDelay: a.fragLoadingMaxRetryTimeout
														},
														l = {
															onSuccess: this.loadsuccess.bind(this),
															onError: this.loaderror.bind(this),
															onTimeout: this.loadtimeout.bind(this)
														};
													t.loader.load(s, o, l)
												} else this.decryptkey && (t.decryptdata.key = this.decryptkey, this.hls.trigger(u.default.KEY_LOADED, {
													frag: t
												}))
											} else c.logger.warn("Missing decryption data on fragment in onKeyLoading")
										}, n.loadsuccess = function(e, t, r) {
											var i = r.frag;
											i.decryptdata ? (this.decryptkey = i.decryptdata.key = new Uint8Array(e.data), i.loader = void 0, delete this.loaders[i.type], this.hls.trigger(u.default.KEY_LOADED, {
												frag: i
											})) : c.logger.error("after key load, decryptdata unset")
										}, n.loaderror = function(e, t) {
											var r = t.frag,
												i = r.loader;
											i && i.abort(), delete this.loaders[r.type], this.hls.trigger(u.default.ERROR, {
												type: o.ErrorTypes.NETWORK_ERROR,
												details: o.ErrorDetails.KEY_LOAD_ERROR,
												fatal: !1,
												frag: r,
												response: e
											})
										}, n.loadtimeout = function(e, t) {
											var r = t.frag,
												i = r.loader;
											i && i.abort(), delete this.loaders[r.type], this.hls.trigger(u.default.ERROR, {
												type: o.ErrorTypes.NETWORK_ERROR,
												details: o.ErrorDetails.KEY_LOAD_TIMEOUT,
												fatal: !1,
												frag: r
											})
										}, i
									}(h),
									N = "NOT_LOADED",
									B = "APPENDING",
									U = "PARTIAL",
									j = "OK",
									G = function(e) {
										var t, r;

										function i(t) {
											var r;
											return (r = e.call(this, t, u.default.BUFFER_APPENDED, u.default.FRAG_BUFFERED, u.default.FRAG_LOADED) || this)
												.bufferPadding = .2, r.fragments = Object.create(null), r.timeRanges = Object.create(null), r.config = t.config, r
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n = i.prototype;
										return n.destroy = function() {
											this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.config = null, h.prototype.destroy.call(this), e.prototype.destroy.call(this)
										}, n.getBufferedFrag = function(e, t) {
											var r = this.fragments,
												i = Object.keys(r)
												.filter((function(i) {
													var n = r[i];
													if (n.body.type !== t) return !1;
													if (!n.buffered) return !1;
													var a = n.body;
													return a.startPTS <= e && e <= a.endPTS
												}));
											if (0 === i.length) return null;
											var n = i.pop();
											return r[n].body
										}, n.detectEvictedFragments = function(e, t) {
											var r = this;
											Object.keys(this.fragments)
												.forEach((function(i) {
													var n = r.fragments[i];
													if (n && n.buffered) {
														var a = n.range[e];
														if (a)
															for (var s = a.time, o = 0; o < s.length; o++) {
																var l = s[o];
																if (!r.isTimeBuffered(l.startPTS, l.endPTS, t)) {
																	r.removeFragment(n.body);
																	break
																}
															}
													}
												}))
										}, n.detectPartialFragments = function(e) {
											var t = this,
												r = this.getFragmentKey(e),
												i = this.fragments[r];
											i && (i.buffered = !0, Object.keys(this.timeRanges)
												.forEach((function(r) {
													if (e.hasElementaryStream(r)) {
														var n = t.timeRanges[r];
														i.range[r] = t.getBufferedTimes(e.startPTS, e.endPTS, n)
													}
												})))
										}, n.getBufferedTimes = function(e, t, r) {
											for (var i, n, a = [], s = !1, o = 0; o < r.length; o++) {
												if (i = r.start(o) - this.bufferPadding, n = r.end(o) + this.bufferPadding, e >= i && t <= n) {
													a.push({
														startPTS: Math.max(e, r.start(o)),
														endPTS: Math.min(t, r.end(o))
													});
													break
												}
												if (e < n && t > i) a.push({
													startPTS: Math.max(e, r.start(o)),
													endPTS: Math.min(t, r.end(o))
												}), s = !0;
												else if (t <= i) break
											}
											return {
												time: a,
												partial: s
											}
										}, n.getFragmentKey = function(e) {
											return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
										}, n.getPartialFragment = function(e) {
											var t, r, i, n = this,
												a = null,
												s = 0;
											return Object.keys(this.fragments)
												.forEach((function(o) {
													var l = n.fragments[o];
													n.isPartial(l) && (r = l.body.startPTS - n.bufferPadding, i = l.body.endPTS + n.bufferPadding, e >= r && e <= i && (t = Math.min(e - r, i - e), s <= t && (a = l.body, s = t)))
												})), a
										}, n.getState = function(e) {
											var t = this.getFragmentKey(e),
												r = this.fragments[t],
												i = N;
											return void 0 !== r && (i = r.buffered ? !0 === this.isPartial(r) ? U : j : B), i
										}, n.isPartial = function(e) {
											return !0 === e.buffered && (void 0 !== e.range.video && !0 === e.range.video.partial || void 0 !== e.range.audio && !0 === e.range.audio.partial)
										}, n.isTimeBuffered = function(e, t, r) {
											for (var i, n, a = 0; a < r.length; a++) {
												if (i = r.start(a) - this.bufferPadding, n = r.end(a) + this.bufferPadding, e >= i && t <= n) return !0;
												if (t <= i) return !1
											}
											return !1
										}, n.onFragLoaded = function(e) {
											var t = e.frag;
											Object(l.isFiniteNumber)(t.sn) && !t.bitrateTest && (this.fragments[this.getFragmentKey(t)] = {
												body: t,
												range: Object.create(null),
												buffered: !1
											})
										}, n.onBufferAppended = function(e) {
											var t = this;
											this.timeRanges = e.timeRanges, Object.keys(this.timeRanges)
												.forEach((function(e) {
													var r = t.timeRanges[e];
													t.detectEvictedFragments(e, r)
												}))
										}, n.onFragBuffered = function(e) {
											this.detectPartialFragments(e.frag)
										}, n.hasFragment = function(e) {
											var t = this.getFragmentKey(e);
											return void 0 !== this.fragments[t]
										}, n.removeFragment = function(e) {
											var t = this.getFragmentKey(e);
											delete this.fragments[t]
										}, n.removeAllFragments = function() {
											this.fragments = Object.create(null)
										}, i
									}(h),
									V = {
										search: function(e, t) {
											for (var r = 0, i = e.length - 1, n = null, a = null; r <= i;) {
												var s = t(a = e[n = (r + i) / 2 | 0]);
												if (s > 0) r = n + 1;
												else {
													if (!(s < 0)) return a;
													i = n - 1
												}
											}
											return null
										}
									},
									K = function() {
										function e() {}
										return e.isBuffered = function(e, t) {
											try {
												if (e)
													for (var r = e.buffered, i = 0; i < r.length; i++)
														if (t >= r.start(i) && t <= r.end(i)) return !0
											} catch (e) {}
											return !1
										}, e.bufferInfo = function(e, t, r) {
											try {
												if (e) {
													var i, n = e.buffered,
														a = [];
													for (i = 0; i < n.length; i++) a.push({
														start: n.start(i),
														end: n.end(i)
													});
													return this.bufferedInfo(a, t, r)
												}
											} catch (e) {}
											return {
												len: 0,
												start: t,
												end: t,
												nextStart: void 0
											}
										}, e.bufferedInfo = function(e, t, r) {
											e.sort((function(e, t) {
												var r = e.start - t.start;
												return r || t.end - e.end
											}));
											var i = [];
											if (r)
												for (var n = 0; n < e.length; n++) {
													var a = i.length;
													if (a) {
														var s = i[a - 1].end;
														e[n].start - s < r ? e[n].end > s && (i[a - 1].end = e[n].end) : i.push(e[n])
													} else i.push(e[n])
												} else i = e;
											for (var o, l = 0, u = t, c = t, d = 0; d < i.length; d++) {
												var h = i[d].start,
													f = i[d].end;
												if (t + r >= h && t < f) u = h, l = (c = f) - t;
												else if (t + r < h) {
													o = h;
													break
												}
											}
											return {
												len: l,
												start: u,
												end: c,
												nextStart: o
											}
										}, e
									}(),
									H = r("./node_modules/eventemitter3/index.js"),
									W = r("./node_modules/webworkify-webpack/index.js"),
									z = r("./src/demux/demuxer-inline.js");

								function q() {
									return window.MediaSource || window.WebKitMediaSource
								}
								var Y = r("./src/utils/get-self-scope.js"),
									X = function(e) {
										var t, r;

										function i() {
											return e.apply(this, arguments) || this
										}
										return r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, i.prototype.trigger = function(e) {
												for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
												this.emit.apply(this, [e, e].concat(r))
											}, i
									}(H.EventEmitter),
									$ = Object(Y.getSelfScope)(),
									J = q() || {
										isTypeSupported: function() {
											return !1
										}
									},
									Q = function() {
										function e(e, t) {
											var r = this;
											this.hls = e, this.id = t;
											var i = this.observer = new X,
												n = e.config,
												a = function(t, i) {
													(i = i || {})
													.frag = r.frag, i.id = r.id, e.trigger(t, i)
												};
											i.on(u.default.FRAG_DECRYPTED, a), i.on(u.default.FRAG_PARSING_INIT_SEGMENT, a), i.on(u.default.FRAG_PARSING_DATA, a), i.on(u.default.FRAG_PARSED, a), i.on(u.default.ERROR, a), i.on(u.default.FRAG_PARSING_METADATA, a), i.on(u.default.FRAG_PARSING_USERDATA, a), i.on(u.default.INIT_PTS_FOUND, a);
											var s = {
													mp4: J.isTypeSupported("video/mp4"),
													mpeg: J.isTypeSupported("audio/mpeg"),
													mp3: J.isTypeSupported('audio/mp4; codecs="mp3"')
												},
												l = navigator.vendor;
											if (n.enableWorker && "undefined" != typeof Worker) {
												var d;
												c.logger.log("demuxing in webworker");
												try {
													d = this.w = W( /*! ../demux/demuxer-worker.js */ "./src/demux/demuxer-worker.js"), this.onwmsg = this.onWorkerMessage.bind(this), d.addEventListener("message", this.onwmsg), d.onerror = function(t) {
														e.trigger(u.default.ERROR, {
															type: o.ErrorTypes.OTHER_ERROR,
															details: o.ErrorDetails.INTERNAL_EXCEPTION,
															fatal: !0,
															event: "demuxerWorker",
															err: {
																message: t.message + " (" + t.filename + ":" + t.lineno + ")"
															}
														})
													}, d.postMessage({
														cmd: "init",
														typeSupported: s,
														vendor: l,
														id: t,
														config: JSON.stringify(n)
													})
												} catch (e) {
													c.logger.warn("Error in worker:", e), c.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"), d && $.URL.revokeObjectURL(d.objectURL), this.demuxer = new z.default(i, s, n, l), this.w = void 0
												}
											} else this.demuxer = new z.default(i, s, n, l)
										}
										var t = e.prototype;
										return t.destroy = function() {
											var e = this.w;
											if (e) e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null;
											else {
												var t = this.demuxer;
												t && (t.destroy(), this.demuxer = null)
											}
											var r = this.observer;
											r && (r.removeAllListeners(), this.observer = null)
										}, t.push = function(e, t, r, i, n, a, s, o) {
											var u = this.w,
												d = Object(l.isFiniteNumber)(n.startPTS) ? n.startPTS : n.start,
												h = n.decryptdata,
												f = this.frag,
												p = !(f && n.cc === f.cc),
												g = !(f && n.level === f.level),
												v = f && n.sn === f.sn + 1,
												m = !g && v;
											if (p && c.logger.log(this.id + ":discontinuity detected"), g && c.logger.log(this.id + ":switch detected"), this.frag = n, u) u.postMessage({
												cmd: "demux",
												data: e,
												decryptdata: h,
												initSegment: t,
												audioCodec: r,
												videoCodec: i,
												timeOffset: d,
												discontinuity: p,
												trackSwitch: g,
												contiguous: m,
												duration: a,
												accurateTimeOffset: s,
												defaultInitPTS: o
											}, e instanceof ArrayBuffer ? [e] : []);
											else {
												var _ = this.demuxer;
												_ && _.push(e, h, t, r, i, d, p, g, m, a, s, o)
											}
										}, t.onWorkerMessage = function(e) {
											var t = e.data,
												r = this.hls;
											switch (t.event) {
												case "init":
													$.URL.revokeObjectURL(this.w.objectURL);
													break;
												case u.default.FRAG_PARSING_DATA:
													t.data.data1 = new Uint8Array(t.data1), t.data2 && (t.data.data2 = new Uint8Array(t.data2));
												default:
													t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, r.trigger(t.event, t.data)
											}
										}, e
									}();

								function Z(e, t, r) {
									switch (t) {
										case "audio":
											e.audioGroupIds || (e.audioGroupIds = []), e.audioGroupIds.push(r);
											break;
										case "text":
											e.textGroupIds || (e.textGroupIds = []), e.textGroupIds.push(r)
									}
								}

								function ee(e, t, r) {
									var i = e[t],
										n = e[r],
										a = n.startPTS;
									Object(l.isFiniteNumber)(a) ? r > t ? (i.duration = a - i.start, i.duration < 0 && c.logger.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : (n.duration = i.start - a, n.duration < 0 && c.logger.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!")) : n.start = r > t ? i.start + i.duration : Math.max(i.start - n.duration, 0)
								}

								function te(e, t, r, i, n, a) {
									var s = r;
									if (Object(l.isFiniteNumber)(t.startPTS)) {
										var o = Math.abs(t.startPTS - r);
										Object(l.isFiniteNumber)(t.deltaPTS) ? t.deltaPTS = Math.max(o, t.deltaPTS) : t.deltaPTS = o, s = Math.max(r, t.startPTS), r = Math.min(r, t.startPTS), i = Math.max(i, t.endPTS), n = Math.min(n, t.startDTS), a = Math.max(a, t.endDTS)
									}
									var u = r - t.start;
									t.start = t.startPTS = r, t.maxStartPTS = s, t.endPTS = i, t.startDTS = n, t.endDTS = a, t.duration = i - r;
									var c, d, h, f = t.sn;
									if (!e || f < e.startSN || f > e.endSN) return 0;
									for (c = f - e.startSN, (d = e.fragments)[c] = t, h = c; h > 0; h--) ee(d, h, h - 1);
									for (h = c; h < d.length - 1; h++) ee(d, h, h + 1);
									return e.PTSKnown = !0, u
								}

								function re(e, t) {
									t.initSegment && e.initSegment && (t.initSegment = e.initSegment);
									var r, i = 0;
									if (ie(e, t, (function(e, n) {
										i = e.cc - n.cc, Object(l.isFiniteNumber)(e.startPTS) && (n.start = n.startPTS = e.startPTS, n.endPTS = e.endPTS, n.duration = e.duration, n.backtracked = e.backtracked, n.dropped = e.dropped, r = n), t.PTSKnown = !0
									})), t.PTSKnown) {
										if (i) {
											c.logger.log("discontinuity sliding from playlist, take drift into account");
											for (var n = t.fragments, a = 0; a < n.length; a++) n[a].cc += i
										}
										r ? te(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : function(e, t) {
											var r = t.startSN - e.startSN,
												i = e.fragments,
												n = t.fragments;
											if (!(r < 0 || r > i.length))
												for (var a = 0; a < n.length; a++) n[a].start += i[r].start
										}(e, t), t.PTSKnown = e.PTSKnown
									}
								}

								function ie(e, t, r) {
									if (e && t)
										for (var i = Math.max(e.startSN, t.startSN) - t.startSN, n = Math.min(e.endSN, t.endSN) - t.startSN, a = t.startSN - e.startSN, s = i; s <= n; s++) {
											var o = e.fragments[a + s],
												l = t.fragments[s];
											if (!o || !l) break;
											r(o, l, s)
										}
								}

								function ne(e, t, r) {
									var i = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration),
										n = i / 2;
									return e && t.endSN === e.endSN && (i = n), r && (i = Math.max(n, i - (window.performance.now() - r))), Math.round(i)
								}
								var ae = {
									toString: function(e) {
										for (var t = "", r = e.length, i = 0; i < r; i++) t += "[" + e.start(i)
											.toFixed(3) + "," + e.end(i)
											.toFixed(3) + "]";
										return t
									}
								};

								function se(e, t) {
									t.fragments.forEach((function(t) {
										if (t) {
											var r = t.start + e;
											t.start = t.startPTS = r, t.endPTS = r + t.duration
										}
									})), t.PTSKnown = !0
								}

								function oe(e, t, r) {
									! function(e, t, r) {
										if (function(e, t, r) {
											var i = !1;
											return t && t.details && r && (r.endCC > r.startCC || e && e.cc < r.startCC) && (i = !0), i
										}(e, r, t)) {
											var i = function(e, t) {
												var r = e.fragments,
													i = t.fragments;
												if (i.length && r.length) {
													var n = function(e, t) {
														for (var r = null, i = 0; i < e.length; i += 1) {
															var n = e[i];
															if (n && n.cc === t) {
																r = n;
																break
															}
														}
														return r
													}(r, i[0].cc);
													if (n && (!n || n.startPTS)) return n;
													c.logger.log("No frag in previous level to align on")
												} else c.logger.log("No fragments to align")
											}(r.details, t);
											i && (c.logger.log("Adjusting PTS using last level due to CC increase within current level"), se(i.start, t))
										}
									}(e, r, t), !r.PTSKnown && t && function(e, t) {
										if (t && t.fragments.length) {
											if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
											var r = t.fragments[0].programDateTime,
												i = (e.fragments[0].programDateTime - r) / 1e3 + t.fragments[0].start;
											Object(l.isFiniteNumber)(i) && (c.logger.log("adjusting PTS using programDateTime delta, sliding:" + i.toFixed(3)), se(i, e))
										}
									}(r, t.details)
								}

								function le(e, t, r) {
									if (null === t || !Array.isArray(e) || !e.length || !Object(l.isFiniteNumber)(t)) return null;
									if (t < (e[0].programDateTime || 0)) return null;
									if (t >= (e[e.length - 1].endProgramDateTime || 0)) return null;
									r = r || 0;
									for (var i = 0; i < e.length; ++i) {
										var n = e[i];
										if (de(t, r, n)) return n
									}
									return null
								}

								function ue(e, t, r, i) {
									void 0 === r && (r = 0), void 0 === i && (i = 0);
									var n = null;
									if (e ? n = t[e.sn - t[0].sn + 1] : 0 === r && 0 === t[0].start && (n = t[0]), n && 0 === ce(r, i, n)) return n;
									var a = V.search(t, ce.bind(null, r, i));
									return a || n
								}

								function ce(e, t, r) {
									void 0 === e && (e = 0), void 0 === t && (t = 0);
									var i = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
									return r.start + r.duration - i <= e ? 1 : r.start - i > e && r.start ? -1 : 0
								}

								function de(e, t, r) {
									var i = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
									return (r.endProgramDateTime || 0) - i > e
								}
								var he = function() {
									function e(e, t, r, i) {
										this.config = e, this.media = t, this.fragmentTracker = r, this.hls = i, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1
									}
									var t = e.prototype;
									return t.poll = function(e) {
										var t = this.config,
											r = this.media,
											i = this.stalled,
											n = r.currentTime,
											a = r.seeking,
											s = this.seeking && !a,
											o = !this.seeking && a;
										if (this.seeking = a, n === e) {
											if ((o || s) && (this.stalled = null), !r.paused && !r.ended && 0 !== r.playbackRate && r.buffered.length) {
												var l = K.bufferInfo(r, n, 0),
													u = l.len > 0,
													d = l.nextStart || 0;
												if (u || d) {
													if (a) {
														var h = l.len > 2,
															f = !d || d - n > 2 && !this.fragmentTracker.getPartialFragment(n);
														if (h || f) return;
														this.moved = !1
													}
													if (!this.moved && this.stalled) {
														var p = Math.max(d, l.start || 0) - n;
														if (p > 0 && p <= 2) return void this._trySkipBufferHole(null)
													}
													var g = self.performance.now();
													if (null !== i) {
														var v = g - i;
														!a && v >= 250 && this._reportStall(l.len);
														var m = K.bufferInfo(r, n, t.maxBufferHole);
														this._tryFixBufferStall(m, v)
													} else this.stalled = g
												}
											}
										} else if (this.moved = !0, null !== i) {
											if (this.stallReported) {
												var _ = self.performance.now() - i;
												c.logger.warn("playback not stuck anymore @" + n + ", after " + Math.round(_) + "ms"), this.stallReported = !1
											}
											this.stalled = null, this.nudgeRetry = 0
										}
									}, t._tryFixBufferStall = function(e, t) {
										var r = this.config,
											i = this.fragmentTracker,
											n = this.media.currentTime,
											a = i.getPartialFragment(n);
										a && this._trySkipBufferHole(a) || e.len > r.maxBufferHole && t > 1e3 * r.highBufferWatchdogPeriod && (c.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
									}, t._reportStall = function(e) {
										var t = this.hls,
											r = this.media;
										this.stallReported || (this.stallReported = !0, c.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer (buffer=" + e + ")"), t.trigger(u.default.ERROR, {
											type: o.ErrorTypes.MEDIA_ERROR,
											details: o.ErrorDetails.BUFFER_STALLED_ERROR,
											fatal: !1,
											buffer: e
										}))
									}, t._trySkipBufferHole = function(e) {
										for (var t = this.config, r = this.hls, i = this.media, n = i.currentTime, a = 0, s = 0; s < i.buffered.length; s++) {
											var l = i.buffered.start(s);
											if (n + t.maxBufferHole >= a && n < l) {
												var d = Math.max(l + .05, i.currentTime + .1);
												return c.logger.warn("skipping hole, adjusting currentTime from " + n + " to " + d), this.moved = !0, this.stalled = null, i.currentTime = d, e && r.trigger(u.default.ERROR, {
													type: o.ErrorTypes.MEDIA_ERROR,
													details: o.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
													fatal: !1,
													reason: "fragment loaded with buffer holes, seeking from " + n + " to " + d,
													frag: e
												}), d
											}
											a = i.buffered.end(s)
										}
										return 0
									}, t._tryNudgeBuffer = function() {
										var e = this.config,
											t = this.hls,
											r = this.media,
											i = r.currentTime,
											n = (this.nudgeRetry || 0) + 1;
										if (this.nudgeRetry = n, n < e.nudgeMaxRetry) {
											var a = i + n * e.nudgeOffset;
											c.logger.warn("Nudging 'currentTime' from " + i + " to " + a), r.currentTime = a, t.trigger(u.default.ERROR, {
												type: o.ErrorTypes.MEDIA_ERROR,
												details: o.ErrorDetails.BUFFER_NUDGE_ON_STALL,
												fatal: !1
											})
										} else c.logger.error("Playhead still not moving while enough data buffered @" + i + " after " + e.nudgeMaxRetry + " nudges"), t.trigger(u.default.ERROR, {
											type: o.ErrorTypes.MEDIA_ERROR,
											details: o.ErrorDetails.BUFFER_STALLED_ERROR,
											fatal: !0
										})
									}, e
								}();

								function fe(e) {
									if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return e
								}
								var pe = function(e) {
										var t, r;

										function i(t) {
											for (var r, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
											return (r = e.call.apply(e, [this, t].concat(n)) || this)
												._boundTick = void 0, r._tickTimer = null, r._tickInterval = null, r._tickCallCount = 0, r._boundTick = r.tick.bind(fe(r)), r
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n = i.prototype;
										return n.onHandlerDestroying = function() {
											this.clearNextTick(), this.clearInterval()
										}, n.hasInterval = function() {
											return !!this._tickInterval
										}, n.hasNextTick = function() {
											return !!this._tickTimer
										}, n.setInterval = function(e) {
											return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, e), !0)
										}, n.clearInterval = function() {
											return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
										}, n.clearNextTick = function() {
											return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
										}, n.tick = function() {
											this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && (this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)), this._tickCallCount = 0)
										}, n.doTick = function() {}, i
									}(h),
									ge = "STOPPED",
									ve = "STARTING",
									me = "IDLE",
									_e = "PAUSED",
									ye = "KEY_LOADING",
									Ee = "FRAG_LOADING",
									be = "FRAG_LOADING_WAITING_RETRY",
									Se = "WAITING_TRACK",
									Te = "PARSING",
									Ae = "PARSED",
									we = "BUFFER_FLUSHING",
									Re = "ENDED",
									Le = "ERROR",
									ke = "WAITING_INIT_PTS",
									Oe = "WAITING_LEVEL",
									De = function(e) {
										var t, r;

										function i() {
											return e.apply(this, arguments) || this
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n = i.prototype;
										return n.doTick = function() {}, n.startLoad = function() {}, n.stopLoad = function() {
											var e = this.fragCurrent;
											e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e)), this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = ge
										}, n._streamEnded = function(e, t) {
											var r = this.fragCurrent,
												i = this.fragmentTracker;
											if (!t.live && r && !r.backtracked && r.sn === t.endSN && !e.nextStart) {
												var n = i.getState(r);
												return n === U || n === j
											}
											return !1
										}, n.onMediaSeeking = function() {
											var e = this.config,
												t = this.media,
												r = this.mediaBuffer,
												i = this.state,
												n = t ? t.currentTime : null,
												a = K.bufferInfo(r || t, n, this.config.maxBufferHole);
											if (Object(l.isFiniteNumber)(n) && c.logger.log("media seeking to " + n.toFixed(3)), i === Ee) {
												var s = this.fragCurrent;
												if (0 === a.len && s) {
													var o = e.maxFragLookUpTolerance,
														u = s.start - o,
														d = s.start + s.duration + o;
													n < u || n > d ? (s.loader && (c.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), s.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = me) : c.logger.log("seeking outside of buffer but within currently loaded fragment range")
												}
											} else i === Re && (0 === a.len && (this.fragPrevious = null, this.fragCurrent = null), this.state = me);
											t && (this.lastCurrentTime = n), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = n), this.tick()
										}, n.onMediaEnded = function() {
											this.startPosition = this.lastCurrentTime = 0
										}, n.onHandlerDestroying = function() {
											this.stopLoad(), e.prototype.onHandlerDestroying.call(this)
										}, n.onHandlerDestroyed = function() {
											this.state = ge, this.fragmentTracker = null
										}, n.computeLivePosition = function(e, t) {
											var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
											return e + Math.max(0, t.totalduration - r)
										}, i
									}(pe);

								function Ce(e, t) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
									}
								}
								var Ie, xe = function(e) {
									var t, r;

									function i(t, r) {
										var i;
										return (i = e.call(this, t, u.default.MEDIA_ATTACHED, u.default.MEDIA_DETACHING, u.default.MANIFEST_LOADING, u.default.MANIFEST_PARSED, u.default.LEVEL_LOADED, u.default.LEVELS_UPDATED, u.default.KEY_LOADED, u.default.FRAG_LOADED, u.default.FRAG_LOAD_EMERGENCY_ABORTED, u.default.FRAG_PARSING_INIT_SEGMENT, u.default.FRAG_PARSING_DATA, u.default.FRAG_PARSED, u.default.ERROR, u.default.AUDIO_TRACK_SWITCHING, u.default.AUDIO_TRACK_SWITCHED, u.default.BUFFER_CREATED, u.default.BUFFER_APPENDED, u.default.BUFFER_FLUSHED) || this)
											.fragmentTracker = r, i.config = t.config, i.audioCodecSwap = !1, i._state = ge, i.stallReported = !1, i.gapController = null, i.altAudio = !1, i.audioOnly = !1, i.bitrateTest = !1, i
									}
									r = e, (t = i)
										.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
									var n, s, d, h = i.prototype;
									return h.startLoad = function(e) {
										if (this.levels) {
											var t = this.lastCurrentTime,
												r = this.hls;
											if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
												var i = r.startLevel; - 1 === i && (r.config.testBandwidth ? (i = 0, this.bitrateTest = !0) : i = r.nextAutoLevel), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1
											}
											t > 0 && -1 === e && (c.logger.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t), this.state = me, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
										} else this.forceStartLoad = !0, this.state = ge
									}, h.stopLoad = function() {
										this.forceStartLoad = !1, e.prototype.stopLoad.call(this)
									}, h.doTick = function() {
										switch (this.state) {
											case we:
												this.fragLoadError = 0;
												break;
											case me:
												this._doTickIdle();
												break;
											case Oe:
												var e = this.levels[this.level];
												e && e.details && (this.state = me);
												break;
											case be:
												var t = window.performance.now(),
													r = this.retryDate;
												(!r || t >= r || this.media && this.media.seeking) && (c.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = me)
										}
										this._checkBuffer(), this._checkFragmentChanged()
									}, h._doTickIdle = function() {
										var e = this.hls,
											t = e.config,
											r = this.media;
										if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && t.startFragPrefetch))
											if (this.altAudio && this.audioOnly) this.demuxer.frag = null;
											else {
												var i;
												i = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
												var n = e.nextLoadLevel,
													a = this.levels[n];
												if (a) {
													var s, o = a.bitrate;
													s = o ? Math.max(8 * t.maxBufferSize / o, t.maxBufferLength) : t.maxBufferLength, s = Math.min(s, t.maxMaxBufferLength);
													var l = i < t.maxBufferHole ? Math.max(2, t.maxBufferHole) : t.maxBufferHole,
														d = K.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, i, l),
														h = d.len;
													if (!(h >= s)) {
														c.logger.trace("buffer length of " + h.toFixed(3) + " is below max of " + s.toFixed(3) + ". checking for more payload ..."), this.level = e.nextLoadLevel = n;
														var f = a.details;
														if (!f || f.live && this.levelLastLoaded !== n) this.state = Oe;
														else {
															if (this._streamEnded(d, f)) {
																var p = {};
																return this.altAudio && (p.type = "video"), this.hls.trigger(u.default.BUFFER_EOS, p), void(this.state = Re)
															}
															this._fetchPayloadOrEos(i, d, f)
														}
													}
												}
											}
									}, h._fetchPayloadOrEos = function(e, t, r) {
										var i = this.fragPrevious,
											n = (this.level, r.fragments),
											a = n.length;
										if (0 !== a) {
											var s, o = n[0].start,
												l = n[a - 1].start + n[a - 1].duration,
												u = t.end;
											if (r.initSegment && !r.initSegment.data) s = r.initSegment;
											else if (r.live) {
												var d = this.config.initialLiveManifestSize;
												if (a < d) return void c.logger.warn("Can not start playback of a level, reason: not enough fragments " + a + " < " + d);
												if (null === (s = this._ensureFragmentAtLivePoint(r, u, o, l, i, n))) return
											} else u < o && (s = n[0]);
											s || (s = this._findFragment(o, i, a, n, u, l, r)), s && (s.encrypted ? this._loadKey(s, r) : this._loadFragment(s, r, e, u))
										}
									}, h._ensureFragmentAtLivePoint = function(e, t, r, i, n, a) {
										var s, o = this.hls.config,
											u = this.media,
											d = 1 / 0;
										if (void 0 !== o.liveMaxLatencyDuration ? d = o.liveMaxLatencyDuration : Object(l.isFiniteNumber)(o.liveMaxLatencyDurationCount) && (d = o.liveMaxLatencyDurationCount * e.targetduration), t < Math.max(r - o.maxFragLookUpTolerance, i - d)) {
											var h = this.liveSyncPosition = this.computeLivePosition(r, e);
											t = h, u && !u.paused && u.readyState && u.duration > h && h > u.currentTime && (c.logger.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)), u.currentTime = h), this.nextLoadPosition = h
										}
										if (e.PTSKnown && t > i && u && u.readyState) return null;
										if (this.startFragRequested && !e.PTSKnown && n)
											if (e.hasProgramDateTime) c.logger.log("live playlist, switching playlist, load frag with same PDT: " + n.programDateTime), s = le(a, n.endProgramDateTime, o.maxFragLookUpTolerance);
											else {
												var f = n.sn + 1;
												if (f >= e.startSN && f <= e.endSN) {
													var p = a[f - e.startSN];
													n.cc === p.cc && (s = p, c.logger.log("live playlist, switching playlist, load frag with next SN: " + s.sn))
												}
												s || (s = V.search(a, (function(e) {
													return n.cc - e.cc
												}))) && c.logger.log("live playlist, switching playlist, load frag with same CC: " + s.sn)
											} return s
									}, h._findFragment = function(e, t, r, i, n, a, s) {
										var o, l = this.hls.config;
										if (o = n < a ? ue(t, i, n, n > a - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance) : i[r - 1]) {
											var u = o.sn - s.startSN,
												d = t && o.level === t.level,
												h = i[u - 1],
												f = i[u + 1];
											if (t && o.sn === t.sn)
												if (d && !o.backtracked)
													if (o.sn < s.endSN) {
														var p = t.deltaPTS;
														p && p > l.maxBufferHole && t.dropped && u ? (o = h, c.logger.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")) : (o = f, c.logger.log("Re-loading fragment with SN: " + o.sn))
													} else o = null;
											else o.backtracked && (f && f.backtracked ? (c.logger.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + o.sn + ". Loading fragment " + f.sn), o = f) : (c.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), o.dropped = 0, h ? (o = h)
												.backtracked = !0 : u && (o = null)))
										}
										return o
									}, h._loadKey = function(e, t) {
										c.logger.log("Loading key for " + e.sn + " of [" + t.startSN + " ," + t.endSN + "],level " + this.level), this.state = ye, this.hls.trigger(u.default.KEY_LOADING, {
											frag: e
										})
									}, h._loadFragment = function(e, t, r, i) {
										var n = this.fragmentTracker.getState(e);
										this.fragCurrent = e, "initSegment" !== e.sn && (this.startFragRequested = !0), Object(l.isFiniteNumber)(e.sn) && !e.bitrateTest && (this.nextLoadPosition = e.start + e.duration), e.backtracked || n === N || n === U ? (e.autoLevel = this.hls.autoLevelEnabled, e.bitrateTest = this.bitrateTest, c.logger.log("Loading " + e.sn + " of [" + t.startSN + " ," + t.endSN + "],level " + this.level + ", currentTime:" + r.toFixed(3) + ",bufferEnd:" + i.toFixed(3)), this.hls.trigger(u.default.FRAG_LOADING, {
											frag: e
										}), this.demuxer || (this.demuxer = new Q(this.hls, "main")), this.state = Ee) : n === B && this._reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e)
									}, h.getBufferedFrag = function(e) {
										return this.fragmentTracker.getBufferedFrag(e, a.MAIN)
									}, h.followingBufferedFrag = function(e) {
										return e ? this.getBufferedFrag(e.endPTS + .5) : null
									}, h._checkFragmentChanged = function() {
										var e, t, r = this.media;
										if (r && r.readyState && !1 === r.seeking && ((t = r.currentTime) > this.lastCurrentTime && (this.lastCurrentTime = t), K.isBuffered(r, t) ? e = this.getBufferedFrag(t) : K.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) {
											var i = e;
											if (i !== this.fragPlaying) {
												this.hls.trigger(u.default.FRAG_CHANGED, {
													frag: i
												});
												var n = i.level;
												this.fragPlaying && this.fragPlaying.level === n || this.hls.trigger(u.default.LEVEL_SWITCHED, {
													level: n
												}), this.fragPlaying = i
											}
										}
									}, h.immediateLevelSwitch = function() {
										if (c.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {
											this.immediateSwitch = !0;
											var e, t = this.media;
											t ? (e = t.paused, t.pause()) : e = !0, this.previouslyPaused = e
										}
										var r = this.fragCurrent;
										r && r.loader && r.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
									}, h.immediateLevelSwitchEnd = function() {
										var e = this.media;
										e && e.buffered.length && (this.immediateSwitch = !1, K.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
									}, h.nextLevelSwitch = function() {
										var e = this.media;
										if (e && e.readyState) {
											var t, r, i;
											if ((r = this.getBufferedFrag(e.currentTime)) && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), e.paused) t = 0;
											else {
												var n = this.hls.nextLoadLevel,
													a = this.levels[n],
													s = this.fragLastKbps;
												t = s && this.fragCurrent ? this.fragCurrent.duration * a.bitrate / (1e3 * s) + 1 : 0
											}
											if ((i = this.getBufferedFrag(e.currentTime + t)) && (i = this.followingBufferedFrag(i))) {
												var o = this.fragCurrent;
												o && o.loader && o.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(i.maxStartPTS, Number.POSITIVE_INFINITY)
											}
										}
									}, h.flushMainBuffer = function(e, t) {
										this.state = we;
										var r = {
											startOffset: e,
											endOffset: t
										};
										this.altAudio && (r.type = "video"), this.hls.trigger(u.default.BUFFER_FLUSHING, r)
									}, h.onMediaAttached = function(e) {
										var t = this.media = this.mediaBuffer = e.media;
										this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("seeked", this.onvseeked), t.addEventListener("ended", this.onvended);
										var r = this.config;
										this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition), this.gapController = new he(r, t, this.fragmentTracker, this.hls)
									}, h.onMediaDetaching = function() {
										var e = this.media;
										e && e.ended && (c.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
										var t = this.levels;
										t && t.forEach((function(e) {
											e.details && e.details.fragments.forEach((function(e) {
												e.backtracked = void 0
											}))
										})), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.fragmentTracker.removeAllFragments(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
									}, h.onMediaSeeked = function() {
										var e = this.media,
											t = e ? e.currentTime : void 0;
										Object(l.isFiniteNumber)(t) && c.logger.log("media seeked to " + t.toFixed(3)), this.tick()
									}, h.onManifestLoading = function() {
										c.logger.log("trigger BUFFER_RESET"), this.hls.trigger(u.default.BUFFER_RESET), this.fragmentTracker.removeAllFragments(), this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
									}, h.onManifestParsed = function(e) {
										var t, r = !1,
											i = !1;
										e.levels.forEach((function(e) {
											(t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (r = !0), -1 !== t.indexOf("mp4a.40.5") && (i = !0))
										})), this.audioCodecSwitch = r && i, this.audioCodecSwitch && c.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.altAudio = e.altAudio, this.levels = e.levels, this.startFragRequested = !1;
										var n = this.config;
										(n.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(n.startPosition)
									}, h.onLevelLoaded = function(e) {
										var t = e.details,
											r = e.level,
											i = this.levels[this.levelLastLoaded],
											n = this.levels[r],
											a = t.totalduration,
											s = 0;
										if (c.logger.log("level " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + a), t.live) {
											var o = n.details;
											o && t.fragments.length > 0 ? (re(o, t), s = t.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(s, o), t.PTSKnown && Object(l.isFiniteNumber)(s) ? c.logger.log("live playlist sliding:" + s.toFixed(3)) : (c.logger.log("live playlist - outdated PTS, unknown sliding"), oe(this.fragPrevious, i, t))) : (c.logger.log("live playlist - first load, unknown sliding"), t.PTSKnown = !1, oe(this.fragPrevious, i, t))
										} else t.PTSKnown = !1;
										if (n.details = t, this.levelLastLoaded = r, this.hls.trigger(u.default.LEVEL_UPDATED, {
											details: t,
											level: r
										}), !1 === this.startFragRequested) {
											if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
												var d = t.startTimeOffset;
												Object(l.isFiniteNumber)(d) ? (d < 0 && (c.logger.log("negative start time offset " + d + ", count from end of last fragment"), d = s + a + d), c.logger.log("start time offset found in playlist, adjust startPosition to " + d), this.startPosition = d) : t.live ? (this.startPosition = this.computeLivePosition(s, t), c.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0, this.lastCurrentTime = this.startPosition
											}
											this.nextLoadPosition = this.startPosition
										}
										this.state === Oe && (this.state = me), this.tick()
									}, h.onKeyLoaded = function() {
										this.state === ye && (this.state = me, this.tick())
									}, h.onFragLoaded = function(e) {
										var t = this.fragCurrent,
											r = this.hls,
											i = this.levels,
											n = this.media,
											a = e.frag;
										if (this.state === Ee && t && "main" === a.type && a.level === t.level && a.sn === t.sn) {
											var s = e.stats,
												o = i[t.level],
												l = o.details;
											if (this.bitrateTest = !1, this.stats = s, c.logger.log("Loaded " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level), a.bitrateTest && r.nextLoadLevel) this.state = me, this.startFragRequested = !1, s.tparsed = s.tbuffered = window.performance.now(), r.trigger(u.default.FRAG_BUFFERED, {
												stats: s,
												frag: t,
												id: "main"
											}), this.tick();
											else if ("initSegment" === a.sn) this.state = me, s.tparsed = s.tbuffered = window.performance.now(), l.initSegment.data = e.payload, r.trigger(u.default.FRAG_BUFFERED, {
												stats: s,
												frag: t,
												id: "main"
											}), this.tick();
											else {
												c.logger.log("Parsing " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level + ", cc " + t.cc), this.state = Te, this.pendingBuffering = !0, this.appended = !1, a.bitrateTest && (a.bitrateTest = !1, this.fragmentTracker.onFragLoaded({
													frag: a
												}));
												var d = !(n && n.seeking) && (l.PTSKnown || !l.live),
													h = l.initSegment ? l.initSegment.data : [],
													f = this._getAudioCodec(o);
												(this.demuxer = this.demuxer || new Q(this.hls, "main"))
												.push(e.payload, h, f, o.videoCodec, t, l.totalduration, d)
											}
										}
										this.fragLoadError = 0
									}, h.onFragParsingInitSegment = function(e) {
										var t = this.fragCurrent,
											r = e.frag;
										if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === Te) {
											var i, n, a = e.tracks;
											if (this.audioOnly = a.audio && !a.video, this.altAudio && !this.audioOnly && delete a.audio, n = a.audio) {
												var s = this.levels[this.level].audioCodec,
													o = navigator.userAgent.toLowerCase();
												s && this.audioCodecSwap && (c.logger.log("swapping playlist audio codec"), s = -1 !== s.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== n.metadata.channelCount && -1 === o.indexOf("firefox") && (s = "mp4a.40.5"), -1 !== o.indexOf("android") && "audio/mpeg" !== n.container && (s = "mp4a.40.2", c.logger.log("Android: force audio codec to " + s)), n.levelCodec = s, n.id = e.id
											}
											for (i in (n = a.video) && (n.levelCodec = this.levels[this.level].videoCodec, n.id = e.id), this.hls.trigger(u.default.BUFFER_CODECS, a), a) {
												n = a[i], c.logger.log("main track:" + i + ",container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
												var l = n.initSegment;
												l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(u.default.BUFFER_APPENDING, {
													type: i,
													data: l,
													parent: "main",
													content: "initSegment"
												}))
											}
											this.tick()
										}
									}, h.onFragParsingData = function(e) {
										var t = this,
											r = this.fragCurrent,
											i = e.frag;
										if (r && "main" === e.id && i.sn === r.sn && i.level === r.level && ("audio" !== e.type || !this.altAudio) && this.state === Te) {
											var n = this.levels[this.level],
												a = r;
											if (Object(l.isFiniteNumber)(e.endPTS) || (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), !0 === e.hasAudio && a.addElementaryStream(g.AUDIO), !0 === e.hasVideo && a.addElementaryStream(g.VIDEO), c.logger.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0)), "video" === e.type)
												if (a.dropped = e.dropped, a.dropped)
													if (a.backtracked) c.logger.warn("Already backtracked on this fragment, appending with the gap", a.sn);
													else {
														var s = n.details;
														if (!s || a.sn !== s.startSN) return c.logger.warn("missing video frame(s), backtracking fragment", a.sn), this.fragmentTracker.removeFragment(a), a.backtracked = !0, this.nextLoadPosition = e.startPTS, this.state = me, this.fragPrevious = a, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), void this.tick();
														c.logger.warn("missing video frame(s) on first frag, appending with gap", a.sn)
													}
											else a.backtracked = !1;
											var o = te(n.details, a, e.startPTS, e.endPTS, e.startDTS, e.endDTS),
												d = this.hls;
											d.trigger(u.default.LEVEL_PTS_UPDATED, {
												details: n.details,
												level: this.level,
												drift: o,
												type: e.type,
												start: e.startPTS,
												end: e.endPTS
											}), [e.data1, e.data2].forEach((function(r) {
												r && r.length && t.state === Te && (t.appended = !0, t.pendingBuffering = !0, d.trigger(u.default.BUFFER_APPENDING, {
													type: e.type,
													data: r,
													parent: "main",
													content: "data"
												}))
											})), this.tick()
										}
									}, h.onFragParsed = function(e) {
										var t = this.fragCurrent,
											r = e.frag;
										t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === Te && (this.stats.tparsed = window.performance.now(), this.state = Ae, this._checkAppendedParsed())
									}, h.onAudioTrackSwitching = function(e) {
										var t = !!e.url,
											r = e.id;
										if (!t) {
											if (this.mediaBuffer !== this.media) {
												c.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
												var i = this.fragCurrent;
												i.loader && (c.logger.log("switching to main audio track, cancel main fragment load"), i.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = me
											}
											var n = this.hls;
											n.trigger(u.default.BUFFER_FLUSHING, {
												startOffset: 0,
												endOffset: Number.POSITIVE_INFINITY,
												type: "audio"
											}), n.trigger(u.default.AUDIO_TRACK_SWITCHED, {
												id: r
											}), this.altAudio = !1
										}
									}, h.onAudioTrackSwitched = function(e) {
										var t = e.id,
											r = !!this.hls.audioTracks[t].url;
										if (r) {
											var i = this.videoBuffer;
											i && this.mediaBuffer !== i && (c.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i)
										}
										this.altAudio = r, this.tick()
									}, h.onBufferCreated = function(e) {
										var t, r, i = e.tracks,
											n = !1;
										for (var a in i) {
											var s = i[a];
											"main" === s.id ? (r = a, t = s, "video" === a && (this.videoBuffer = i[a].buffer)) : n = !0
										}
										n && t ? (c.logger.log("alternate track found, use " + r + ".buffered to schedule main fragment loading"), this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
									}, h.onBufferAppended = function(e) {
										if ("main" === e.parent) {
											var t = this.state;
											t !== Te && t !== Ae || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
										}
									}, h._checkAppendedParsed = function() {
										if (!(this.state !== Ae || this.appended && this.pendingBuffering)) {
											var e = this.fragCurrent;
											if (e) {
												var t = this.mediaBuffer ? this.mediaBuffer : this.media;
												c.logger.log("main buffered : " + ae.toString(t.buffered)), this.fragPrevious = e;
												var r = this.stats;
												r.tbuffered = window.performance.now(), this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)), this.hls.trigger(u.default.FRAG_BUFFERED, {
													stats: r,
													frag: e,
													id: "main"
												}), this.state = me
											}(this.loadedmetadata || this.startPosition <= 0) && this.tick()
										}
									}, h.onError = function(e) {
										var t = e.frag || this.fragCurrent;
										if (!t || "main" === t.type) {
											var r = !!this.media && K.isBuffered(this.media, this.media.currentTime) && K.isBuffered(this.media, this.media.currentTime + .5);
											switch (e.details) {
												case o.ErrorDetails.FRAG_LOAD_ERROR:
												case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
												case o.ErrorDetails.KEY_LOAD_ERROR:
												case o.ErrorDetails.KEY_LOAD_TIMEOUT:
													if (!e.fatal)
														if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
															var i = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
															c.logger.warn("mediaController: frag loading failed, retry in " + i + " ms"), this.retryDate = window.performance.now() + i, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = be
														} else c.logger.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = Le;
													break;
												case o.ErrorDetails.LEVEL_LOAD_ERROR:
												case o.ErrorDetails.LEVEL_LOAD_TIMEOUT:
													this.state !== Le && (e.fatal ? (this.state = Le, c.logger.warn("streamController: " + e.details + ",switch to " + this.state + " state ...")) : e.levelRetry || this.state !== Oe || (this.state = me));
													break;
												case o.ErrorDetails.BUFFER_FULL_ERROR:
													"main" !== e.parent || this.state !== Te && this.state !== Ae || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = me) : (c.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
											}
										}
									}, h._reduceMaxBufferLength = function(e) {
										var t = this.config;
										return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, c.logger.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0)
									}, h._checkBuffer = function() {
										var e = this.media;
										if (e && 0 !== e.readyState) {
											var t = (this.mediaBuffer ? this.mediaBuffer : e)
												.buffered;
											!this.loadedmetadata && t.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, t)
										}
									}, h.onFragLoadEmergencyAborted = function() {
										this.state = me, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
									}, h.onBufferFlushed = function() {
										var e = this.mediaBuffer ? this.mediaBuffer : this.media;
										if (e) {
											var t = this.audioOnly ? g.AUDIO : g.VIDEO;
											this.fragmentTracker.detectEvictedFragments(t, e.buffered)
										}
										this.state = me, this.fragPrevious = null
									}, h.onLevelsUpdated = function(e) {
										this.levels = e.levels
									}, h.swapAudioCodec = function() {
										this.audioCodecSwap = !this.audioCodecSwap
									}, h._seekToStartPos = function() {
										var e = this.media,
											t = this.startPosition,
											r = e.currentTime;
										if (r !== t && t >= 0) {
											if (e.seeking) return void c.logger.log("could not seek to " + t + ", already seeking at " + r);
											c.logger.log("seek to target start position " + t + " from current time " + r + ". ready state " + e.readyState), e.currentTime = t
										}
									}, h._getAudioCodec = function(e) {
										var t = this.config.defaultAudioCodec || e.audioCodec;
										return this.audioCodecSwap && (c.logger.log("swapping playlist audio codec"), t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), t
									}, n = i, (s = [{
										key: "state",
										set: function(e) {
											if (this.state !== e) {
												var t = this.state;
												this._state = e, c.logger.log("main stream-controller: " + t + "->" + e), this.hls.trigger(u.default.STREAM_STATE_TRANSITION, {
													previousState: t,
													nextState: e
												})
											}
										},
										get: function() {
											return this._state
										}
									}, {
										key: "currentLevel",
										get: function() {
											var e = this.media;
											if (e) {
												var t = this.getBufferedFrag(e.currentTime);
												if (t) return t.level
											}
											return -1
										}
									}, {
										key: "nextBufferedFrag",
										get: function() {
											var e = this.media;
											return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
										}
									}, {
										key: "nextLevel",
										get: function() {
											var e = this.nextBufferedFrag;
											return e ? e.level : -1
										}
									}, {
										key: "liveSyncPosition",
										get: function() {
											return this._liveSyncPosition
										},
										set: function(e) {
											this._liveSyncPosition = e
										}
									}]) && Ce(n.prototype, s), d && Ce(n, d), i
								}(De);

								function Pe(e, t) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
									}
								}
								var Me = function(e) {
										var t, r;

										function i(t) {
											var r;
											return (r = e.call(this, t, u.default.MANIFEST_LOADED, u.default.LEVEL_LOADED, u.default.AUDIO_TRACK_SWITCHED, u.default.FRAG_LOADED, u.default.ERROR) || this)
												.canload = !1, r.currentLevelIndex = null, r.manualLevelIndex = -1, r.timer = null, Ie = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), r
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n, a, s, l = i.prototype;
										return l.onHandlerDestroying = function() {
											this.clearTimer(), this.manualLevelIndex = -1
										}, l.clearTimer = function() {
											null !== this.timer && (clearTimeout(this.timer), this.timer = null)
										}, l.startLoad = function() {
											var e = this._levels;
											this.canload = !0, this.levelRetryCount = 0, e && e.forEach((function(e) {
												e.loadError = 0;
												var t = e.details;
												t && t.live && (e.details = void 0)
											})), null !== this.timer && this.loadLevel()
										}, l.stopLoad = function() {
											this.canload = !1
										}, l.onManifestLoaded = function(e) {
											var t, r = [],
												i = [],
												n = {},
												a = null,
												s = !1,
												l = !1;
											if (e.levels.forEach((function(e) {
													var t = e.attrs;
													e.loadError = 0, e.fragmentError = !1, s = s || !!e.videoCodec, l = l || !!e.audioCodec, Ie && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0), (a = n[e.bitrate]) ? a.url.push(e.url) : (e.url = [e.url], e.urlId = 0, n[e.bitrate] = e, r.push(e)), t && (t.AUDIO && Z(a || e, "audio", t.AUDIO), t.SUBTITLES && Z(a || e, "text", t.SUBTITLES))
												})), s && l && (r = r.filter((function(e) {
													return !!e.videoCodec
												}))), r = r.filter((function(e) {
													var t = e.audioCodec,
														r = e.videoCodec;
													return (!t || w(t, "audio")) && (!r || w(r, "video"))
												})), e.audioTracks && (i = e.audioTracks.filter((function(e) {
													return !e.audioCodec || w(e.audioCodec, "audio")
												})))
												.forEach((function(e, t) {
													e.id = t
												})), r.length > 0) {
												t = r[0].bitrate, r.sort((function(e, t) {
													return e.bitrate - t.bitrate
												})), this._levels = r;
												for (var d = 0; d < r.length; d++)
													if (r[d].bitrate === t) {
														this._firstLevel = d, c.logger.log("manifest loaded," + r.length + " level(s) found, first bitrate:" + t);
														break
													} var h = l && !s;
												this.hls.trigger(u.default.MANIFEST_PARSED, {
													levels: r,
													audioTracks: i,
													firstLevel: this._firstLevel,
													stats: e.stats,
													audio: l,
													video: s,
													altAudio: !h && i.some((function(e) {
														return !!e.url
													}))
												})
											} else this.hls.trigger(u.default.ERROR, {
												type: o.ErrorTypes.MEDIA_ERROR,
												details: o.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
												fatal: !0,
												url: this.hls.url,
												reason: "no level with compatible codecs found in manifest"
											})
										}, l.setLevelInternal = function(e) {
											var t = this._levels,
												r = this.hls;
											if (e >= 0 && e < t.length) {
												if (this.clearTimer(), this.currentLevelIndex !== e) {
													c.logger.log("switching to level " + e), this.currentLevelIndex = e;
													var i = t[e];
													i.level = e, r.trigger(u.default.LEVEL_SWITCHING, i)
												}
												var n = t[e],
													a = n.details;
												if (!a || a.live) {
													var s = n.urlId;
													r.trigger(u.default.LEVEL_LOADING, {
														url: n.url[s],
														level: e,
														id: s
													})
												}
											} else r.trigger(u.default.ERROR, {
												type: o.ErrorTypes.OTHER_ERROR,
												details: o.ErrorDetails.LEVEL_SWITCH_ERROR,
												level: e,
												fatal: !1,
												reason: "invalid level idx"
											})
										}, l.onError = function(e) {
											if (e.fatal) e.type === o.ErrorTypes.NETWORK_ERROR && this.clearTimer();
											else {
												var t, r = !1,
													i = !1;
												switch (e.details) {
													case o.ErrorDetails.FRAG_LOAD_ERROR:
													case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
													case o.ErrorDetails.KEY_LOAD_ERROR:
													case o.ErrorDetails.KEY_LOAD_TIMEOUT:
														t = e.frag.level, i = !0;
														break;
													case o.ErrorDetails.LEVEL_LOAD_ERROR:
													case o.ErrorDetails.LEVEL_LOAD_TIMEOUT:
														t = e.context.level, r = !0;
														break;
													case o.ErrorDetails.REMUX_ALLOC_ERROR:
														t = e.level, r = !0
												}
												void 0 !== t && this.recoverLevel(e, t, r, i)
											}
										}, l.recoverLevel = function(e, t, r, i) {
											var n, a, s, o = this,
												l = this.hls.config,
												u = e.details,
												d = this._levels[t];
											if (d.loadError++, d.fragmentError = i, r) {
												if (!(this.levelRetryCount + 1 <= l.levelLoadingMaxRetry)) return c.logger.error("level controller, cannot recover from " + u + " error"), this.currentLevelIndex = null, this.clearTimer(), void(e.fatal = !0);
												a = Math.min(Math.pow(2, this.levelRetryCount) * l.levelLoadingRetryDelay, l.levelLoadingMaxRetryTimeout), this.timer = setTimeout((function() {
													return o.loadLevel()
												}), a), e.levelRetry = !0, this.levelRetryCount++, c.logger.warn("level controller, " + u + ", retry in " + a + " ms, current retry count is " + this.levelRetryCount)
											}(r || i) && ((n = d.url.length) > 1 && d.loadError < n ? (d.urlId = (d.urlId + 1) % n, d.details = void 0, c.logger.warn("level controller, " + u + " for level " + t + ": switching to redundant URL-id " + d.urlId)) : -1 === this.manualLevelIndex ? (s = 0 === t ? this._levels.length - 1 : t - 1, c.logger.warn("level controller, " + u + ": switch to " + s), this.hls.nextAutoLevel = this.currentLevelIndex = s) : i && (c.logger.warn("level controller, " + u + ": reload a fragment"), this.currentLevelIndex = null))
										}, l.onFragLoaded = function(e) {
											var t = e.frag;
											if (void 0 !== t && "main" === t.type) {
												var r = this._levels[t.level];
												void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0)
											}
										}, l.onLevelLoaded = function(e) {
											var t = this,
												r = e.level,
												i = e.details;
											if (r === this.currentLevelIndex) {
												var n = this._levels[r];
												if (n.fragmentError || (n.loadError = 0, this.levelRetryCount = 0), i.live) {
													var a = ne(n.details, i, e.stats.trequest);
													c.logger.log("live playlist, reload in " + Math.round(a) + " ms"), this.timer = setTimeout((function() {
														return t.loadLevel()
													}), a)
												} else this.clearTimer()
											}
										}, l.onAudioTrackSwitched = function(e) {
											var t = this.hls.audioTracks[e.id].groupId,
												r = this.hls.levels[this.currentLevelIndex];
											if (r && r.audioGroupIds) {
												for (var i = -1, n = 0; n < r.audioGroupIds.length; n++)
													if (r.audioGroupIds[n] === t) {
														i = n;
														break
													} i !== r.urlId && (r.urlId = i, this.startLoad())
											}
										}, l.loadLevel = function() {
											if (c.logger.debug("call to loadLevel"), null !== this.currentLevelIndex && this.canload) {
												var e = this._levels[this.currentLevelIndex];
												if ("object" == typeof e && e.url.length > 0) {
													var t = this.currentLevelIndex,
														r = e.urlId,
														i = e.url[r];
													c.logger.log("Attempt loading level index " + t + " with URL-id " + r), this.hls.trigger(u.default.LEVEL_LOADING, {
														url: i,
														level: t,
														id: r
													})
												}
											}
										}, l.removeLevel = function(e, t) {
											var r = this.levels.filter((function(r, i) {
													return i !== e || r.url.length > 1 && void 0 !== t && (r.url = r.url.filter((function(e, r) {
														return r !== t
													})), r.urlId = 0, !0)
												}))
												.map((function(e, t) {
													var r = e.details;
													return r && r.fragments && r.fragments.forEach((function(e) {
														e.level = t
													})), e
												}));
											this._levels = r, this.hls.trigger(u.default.LEVELS_UPDATED, {
												levels: r
											})
										}, n = i, (a = [{
											key: "levels",
											get: function() {
												return this._levels
											}
										}, {
											key: "level",
											get: function() {
												return this.currentLevelIndex
											},
											set: function(e) {
												var t = this._levels;
												t && (e = Math.min(e, t.length - 1), this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
											}
										}, {
											key: "manualLevel",
											get: function() {
												return this.manualLevelIndex
											},
											set: function(e) {
												this.manualLevelIndex = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e)
											}
										}, {
											key: "firstLevel",
											get: function() {
												return this._firstLevel
											},
											set: function(e) {
												this._firstLevel = e
											}
										}, {
											key: "startLevel",
											get: function() {
												if (void 0 === this._startLevel) {
													var e = this.hls.config.startLevel;
													return void 0 !== e ? e : this._firstLevel
												}
												return this._startLevel
											},
											set: function(e) {
												this._startLevel = e
											}
										}, {
											key: "nextLoadLevel",
											get: function() {
												return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
											},
											set: function(e) {
												this.level = e, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
											}
										}]) && Pe(n.prototype, a), s && Pe(n, s), i
									}(h),
									Fe = r("./src/demux/id3.js");

								function Ne(e, t) {
									var r;
									try {
										r = new Event("addtrack")
									} catch (e) {
										(r = document.createEvent("Event"))
										.initEvent("addtrack", !1, !1)
									}
									r.track = e, t.dispatchEvent(r)
								}

								function Be(e) {
									if (null == e ? void 0 : e.cues)
										for (; e.cues.length > 0;) e.removeCue(e.cues[0])
								}
								var Ue = function(e) {
										var t, r;

										function i(t) {
											var r;
											return (r = e.call(this, t, u.default.MEDIA_ATTACHED, u.default.MEDIA_DETACHING, u.default.FRAG_PARSING_METADATA, u.default.LIVE_BACK_BUFFER_REACHED) || this)
												.id3Track = void 0, r.media = void 0, r
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n = i.prototype;
										return n.destroy = function() {
											h.prototype.destroy.call(this)
										}, n.onMediaAttached = function(e) {
											this.media = e.media, this.media
										}, n.onMediaDetaching = function() {
											Be(this.id3Track), this.id3Track = void 0, this.media = void 0
										}, n.getID3Track = function(e) {
											for (var t = 0; t < e.length; t++) {
												var r = e[t];
												if ("metadata" === r.kind && "id3" === r.label) return Ne(r, this.media), r
											}
											return this.media.addTextTrack("metadata", "id3")
										}, n.onFragParsingMetadata = function(e) {
											var t = e.frag,
												r = e.samples;
											this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
											for (var i = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, n = 0; n < r.length; n++) {
												var a = Fe.default.getID3Frames(r[n].data);
												if (a) {
													var s = Math.max(r[n].pts, 0),
														o = n < r.length - 1 ? r[n + 1].pts : t.endPTS;
													o || (o = t.start + t.duration), s === o ? o += 1e-4 : s > o && (c.logger.warn("detected an id3 sample with endTime < startTime, adjusting endTime to (startTime + 0.25)"), o = s + .25);
													for (var l = 0; l < a.length; l++) {
														var u = a[l];
														if (!Fe.default.isTimeStampFrame(u)) {
															var d = new i(s, o, "");
															d.value = u, this.id3Track.addCue(d)
														}
													}
												}
											}
										}, n.onLiveBackBufferReached = function(e) {
											var t = e.bufferEnd,
												r = this.id3Track;
											if (r && r.cues && r.cues.length) {
												var i = function(e, t) {
													if (t < e[0].endTime) return e[0];
													if (t > e[e.length - 1].endTime) return e[e.length - 1];
													for (var r = 0, i = e.length - 1; r <= i;) {
														var n = Math.floor((i + r) / 2);
														if (t < e[n].endTime) i = n - 1;
														else {
															if (!(t > e[n].endTime)) return e[n];
															r = n + 1
														}
													}
													return e[r].endTime - t < t - e[i].endTime ? e[r] : e[i]
												}(r.cues, t);
												if (i)
													for (; r.cues[0] !== i;) r.removeCue(r.cues[0])
											}
										}, i
									}(h),
									je = function() {
										function e(e) {
											this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0
										}
										var t = e.prototype;
										return t.sample = function(e, t) {
											var r = Math.pow(this.alpha_, e);
											this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e
										}, t.getTotalWeight = function() {
											return this.totalWeight_
										}, t.getEstimate = function() {
											if (this.alpha_) {
												var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
												return this.estimate_ / e
											}
											return this.estimate_
										}, e
									}(),
									Ge = function() {
										function e(e, t, r, i) {
											this.hls = void 0, this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.hls = e, this.defaultEstimate_ = i, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new je(t), this.fast_ = new je(r)
										}
										var t = e.prototype;
										return t.sample = function(e, t) {
											var r = (e = Math.max(e, this.minDelayMs_)) / 1e3,
												i = 8 * t / r;
											this.fast_.sample(r, i), this.slow_.sample(r, i)
										}, t.canEstimate = function() {
											var e = this.fast_;
											return e && e.getTotalWeight() >= this.minWeight_
										}, t.getEstimate = function() {
											return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
										}, t.destroy = function() {}, e
									}();

								function Ve(e, t) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
									}
								}
								var Ke = window.performance,
									He = function(e) {
										var t, r;

										function i(t) {
											var r;
											return (r = e.call(this, t, u.default.FRAG_LOADING, u.default.FRAG_LOADED, u.default.FRAG_BUFFERED, u.default.ERROR) || this)
												.lastLoadedFragLevel = 0, r._nextAutoLevel = -1, r.hls = t, r.timer = null, r._bwEstimator = null, r.onCheck = r._abandonRulesCheck.bind(function(e) {
													if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
													return e
												}(r)), r
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n, a, s, d = i.prototype;
										return d.destroy = function() {
											this.clearTimer(), h.prototype.destroy.call(this)
										}, d.onFragLoading = function(e) {
											var t = e.frag;
											if ("main" === t.type && (this.timer || (this.fragCurrent = t, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
												var r, i, n = this.hls,
													a = n.config,
													s = t.level;
												n.levels[s].details.live ? (r = a.abrEwmaFastLive, i = a.abrEwmaSlowLive) : (r = a.abrEwmaFastVoD, i = a.abrEwmaSlowVoD), this._bwEstimator = new Ge(n, i, r, a.abrEwmaDefaultEstimate)
											}
										}, d._abandonRulesCheck = function() {
											var e = this.hls,
												t = e.media,
												r = this.fragCurrent;
											if (r) {
												var i = r.loader;
												if (!i || i.stats && i.stats.aborted) return c.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
												var n = i.stats;
												if (t && n && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
													var a = Ke.now() - n.trequest,
														s = Math.abs(t.playbackRate);
													if (a > 500 * r.duration / s) {
														var o = e.levels,
															l = Math.max(1, n.bw ? n.bw / 8 : 1e3 * n.loaded / a),
															d = o[r.level];
														if (!d) return;
														var h = d.realBitrate ? Math.max(d.realBitrate, d.bitrate) : d.bitrate,
															f = n.total ? n.total : Math.max(n.loaded, Math.round(r.duration * h / 8)),
															p = t.currentTime,
															g = (f - n.loaded) / l,
															v = (K.bufferInfo(t, p, e.config.maxBufferHole)
																.end - p) / s;
														if (v < 2 * r.duration / s && g > v) {
															var m, _ = e.minAutoLevel;
															for (m = r.level - 1; m > _; m--) {
																var y = o[m].realBitrate ? Math.max(o[m].realBitrate, o[m].bitrate) : o[m].bitrate;
																if (r.duration * y / (6.4 * l) < v) break
															}
															void 0 < g && (c.logger.warn("loading too slow, abort fragment loading and switch to level " + m + ":fragLoadedDelay[" + m + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + (void 0)
																.toFixed(1) + "<" + g.toFixed(1) + ":" + v.toFixed(1)), e.nextLoadLevel = m, this._bwEstimator.sample(a, n.loaded), i.abort(), this.clearTimer(), e.trigger(u.default.FRAG_LOAD_EMERGENCY_ABORTED, {
																frag: r,
																stats: n
															}))
														}
													}
												}
											}
										}, d.onFragLoaded = function(e) {
											var t = e.frag;
											if ("main" === t.type && Object(l.isFiniteNumber)(t.sn)) {
												if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
													var r = this.hls.levels[t.level],
														i = (r.loaded ? r.loaded.bytes : 0) + e.stats.loaded,
														n = (r.loaded ? r.loaded.duration : 0) + e.frag.duration;
													r.loaded = {
														bytes: i,
														duration: n
													}, r.realBitrate = Math.round(8 * i / n)
												}
												if (e.frag.bitrateTest) {
													var a = e.stats;
													a.tparsed = a.tbuffered = a.tload, this.onFragBuffered(e)
												}
											}
										}, d.onFragBuffered = function(e) {
											var t = e.stats,
												r = e.frag;
											if (!0 !== t.aborted && "main" === r.type && Object(l.isFiniteNumber)(r.sn) && (!r.bitrateTest || t.tload === t.tbuffered)) {
												var i = t.tparsed - t.trequest;
												c.logger.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))), this._bwEstimator.sample(i, t.loaded), t.bwEstimate = this._bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0
											}
										}, d.onError = function(e) {
											switch (e.details) {
												case o.ErrorDetails.FRAG_LOAD_ERROR:
												case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
													this.clearTimer()
											}
										}, d.clearTimer = function() {
											clearInterval(this.timer), this.timer = null
										}, d._findBestLevel = function(e, t, r, i, n, a, s, o, l) {
											for (var u = n; u >= i; u--) {
												var d = l[u];
												if (d) {
													var h = d.details,
														f = h ? h.totalduration / h.fragments.length : t,
														p = !!h && h.live,
														g = void 0;
													g = u <= e ? s * r : o * r;
													var v = l[u].realBitrate ? Math.max(l[u].realBitrate, l[u].bitrate) : l[u].bitrate,
														m = v * f / g;
													if (c.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(g) + "/" + v + "/" + f + "/" + a + "/" + m), g > v && (!m || p && !this.bitrateTestDelay || m < a)) return u
												}
											}
											return -1
										}, n = i, (a = [{
											key: "nextAutoLevel",
											get: function() {
												var e = this._nextAutoLevel,
													t = this._bwEstimator;
												if (!(-1 === e || t && t.canEstimate())) return e;
												var r = this._nextABRAutoLevel;
												return -1 !== e && (r = Math.min(e, r)), r
											},
											set: function(e) {
												this._nextAutoLevel = e
											}
										}, {
											key: "_nextABRAutoLevel",
											get: function() {
												var e = this.hls,
													t = e.maxAutoLevel,
													r = e.levels,
													i = e.config,
													n = e.minAutoLevel,
													a = e.media,
													s = this.lastLoadedFragLevel,
													o = this.fragCurrent ? this.fragCurrent.duration : 0,
													l = a ? a.currentTime : 0,
													u = a && 0 !== a.playbackRate ? Math.abs(a.playbackRate) : 1,
													d = this._bwEstimator ? this._bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate,
													h = (K.bufferInfo(a, l, i.maxBufferHole)
														.end - l) / u,
													f = this._findBestLevel(s, o, d, n, t, h, i.abrBandWidthFactor, i.abrBandWidthUpFactor, r);
												if (f >= 0) return f;
												c.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
												var p = o ? Math.min(o, i.maxStarvationDelay) : i.maxStarvationDelay,
													g = i.abrBandWidthFactor,
													v = i.abrBandWidthUpFactor;
												if (0 === h) {
													var m = this.bitrateTestDelay;
													m && (p = (o ? Math.min(o, i.maxLoadingDelay) : i.maxLoadingDelay) - m, c.logger.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * p) + " ms"), g = v = 1)
												}
												return f = this._findBestLevel(s, o, d, n, t, h + p, g, v, r), Math.max(f, 0)
											}
										}]) && Ve(n.prototype, a), s && Ve(n, s), i
									}(h),
									We = q(),
									ze = function(e) {
										var t, r;

										function i(t) {
											var r;
											return (r = e.call(this, t, u.default.MEDIA_ATTACHING, u.default.MEDIA_DETACHING, u.default.MANIFEST_PARSED, u.default.BUFFER_RESET, u.default.BUFFER_APPENDING, u.default.BUFFER_CODECS, u.default.BUFFER_EOS, u.default.BUFFER_FLUSHING, u.default.LEVEL_PTS_UPDATED, u.default.LEVEL_UPDATED) || this)
												._msDuration = null, r._levelDuration = null, r._levelTargetDuration = 10, r._live = null, r._objectUrl = null, r._needsFlush = !1, r._needsEos = !1, r.config = void 0, r.audioTimestampOffset = void 0, r.bufferCodecEventsExpected = 0, r._bufferCodecEventsTotal = 0, r.media = null, r.mediaSource = null, r.segments = [], r.parent = void 0, r.appending = !1, r.appended = 0, r.appendError = 0, r.flushBufferCounter = 0, r.tracks = {}, r.pendingTracks = {}, r.sourceBuffer = {}, r.flushRange = [], r._onMediaSourceOpen = function() {
													c.logger.log("media source opened"), r.hls.trigger(u.default.MEDIA_ATTACHED, {
														media: r.media
													});
													var e = r.mediaSource;
													e && e.removeEventListener("sourceopen", r._onMediaSourceOpen), r.checkPendingTracks()
												}, r._onMediaSourceClose = function() {
													c.logger.log("media source closed")
												}, r._onMediaSourceEnded = function() {
													c.logger.log("media source ended")
												}, r._onSBUpdateEnd = function() {
													if (r.audioTimestampOffset && r.sourceBuffer.audio) {
														var e = r.sourceBuffer.audio;
														c.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + r.audioTimestampOffset), e.timestampOffset = r.audioTimestampOffset, delete r.audioTimestampOffset
													}
													r._needsFlush && r.doFlush(), r._needsEos && r.checkEos(), r.appending = !1;
													var t = r.parent,
														i = r.segments.reduce((function(e, r) {
															return r.parent === t ? e + 1 : e
														}), 0),
														n = {},
														a = r.sourceBuffer;
													for (var s in a) {
														var o = a[s];
														if (!o) throw Error("handling source buffer update end error: source buffer for " + s + " uninitilized and unable to update buffered TimeRanges.");
														n[s] = o.buffered
													}
													r.hls.trigger(u.default.BUFFER_APPENDED, {
														parent: t,
														pending: i,
														timeRanges: n
													}), r._needsFlush || r.doAppending(), r.updateMediaElementDuration(), 0 === i && r.flushLiveBackBuffer()
												}, r._onSBUpdateError = function(e) {
													c.logger.error("sourceBuffer error:", e), r.hls.trigger(u.default.ERROR, {
														type: o.ErrorTypes.MEDIA_ERROR,
														details: o.ErrorDetails.BUFFER_APPENDING_ERROR,
														fatal: !1
													})
												}, r.config = t.config, r
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n = i.prototype;
										return n.destroy = function() {
											h.prototype.destroy.call(this)
										}, n.onLevelPtsUpdated = function(e) {
											var t = e.type,
												r = this.tracks.audio;
											if ("audio" === t && r && "audio/mpeg" === r.container) {
												var i = this.sourceBuffer.audio;
												if (!i) throw Error("Level PTS Updated and source buffer for audio uninitalized");
												if (Math.abs(i.timestampOffset - e.start) > .1) {
													var n = i.updating;
													try {
														i.abort()
													} catch (e) {
														c.logger.warn("can not abort audio buffer: " + e)
													}
													n ? this.audioTimestampOffset = e.start : (c.logger.warn("change mpeg audio timestamp offset from " + i.timestampOffset + " to " + e.start), i.timestampOffset = e.start)
												}
											}
										}, n.onManifestParsed = function(e) {
											var t = 2;
											(e.audio && !e.video || !e.altAudio) && (t = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = t, c.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
										}, n.onMediaAttaching = function(e) {
											var t = this.media = e.media;
											if (t && We) {
												var r = this.mediaSource = new We;
												r.addEventListener("sourceopen", this._onMediaSourceOpen), r.addEventListener("sourceended", this._onMediaSourceEnded), r.addEventListener("sourceclose", this._onMediaSourceClose), t.src = window.URL.createObjectURL(r), this._objectUrl = t.src
											}
										}, n.onMediaDetaching = function() {
											c.logger.log("media source detaching");
											var e = this.mediaSource;
											if (e) {
												if ("open" === e.readyState) try {
													e.endOfStream()
												} catch (e) {
													c.logger.warn("onMediaDetaching:" + e.message + " while calling endOfStream")
												}
												e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), this.media && (this._objectUrl && window.URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : c.logger.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
											}
											this.hls.trigger(u.default.MEDIA_DETACHED)
										}, n.checkPendingTracks = function() {
											var e = this.bufferCodecEventsExpected,
												t = this.pendingTracks,
												r = Object.keys(t)
												.length;
											(r && !e || 2 === r) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending())
										}, n.onBufferReset = function() {
											var e = this.sourceBuffer;
											for (var t in e) {
												var r = e[t];
												try {
													r && (this.mediaSource && this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this._onSBUpdateEnd), r.removeEventListener("error", this._onSBUpdateError))
												} catch (e) {}
											}
											this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
										}, n.onBufferCodecs = function(e) {
											var t = this;
											Object.keys(this.sourceBuffer)
												.length || (Object.keys(e)
													.forEach((function(r) {
														t.pendingTracks[r] = e[r]
													})), this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
										}, n.createSourceBuffers = function(e) {
											var t = this.sourceBuffer,
												r = this.mediaSource;
											if (!r) throw Error("createSourceBuffers called when mediaSource was null");
											for (var i in e)
												if (!t[i]) {
													var n = e[i];
													if (!n) throw Error("source buffer exists for track " + i + ", however track does not");
													var a = n.levelCodec || n.codec,
														s = n.container + ";codecs=" + a;
													c.logger.log("creating sourceBuffer(" + s + ")");
													try {
														var l = t[i] = r.addSourceBuffer(s);
														l.addEventListener("updateend", this._onSBUpdateEnd), l.addEventListener("error", this._onSBUpdateError), this.tracks[i] = {
															buffer: l,
															codec: a,
															id: n.id,
															container: n.container,
															levelCodec: n.levelCodec
														}
													} catch (e) {
														c.logger.error("error while trying to add sourceBuffer:" + e.message), this.hls.trigger(u.default.ERROR, {
															type: o.ErrorTypes.MEDIA_ERROR,
															details: o.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
															fatal: !1,
															err: e,
															mimeType: s
														})
													}
												} this.hls.trigger(u.default.BUFFER_CREATED, {
												tracks: this.tracks
											})
										}, n.onBufferAppending = function(e) {
											this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending())
										}, n.onBufferEos = function(e) {
											for (var t in this.sourceBuffer)
												if (!e.type || e.type === t) {
													var r = this.sourceBuffer[t];
													r && !r.ended && (r.ended = !0, c.logger.log(t + " sourceBuffer now EOS"))
												} this.checkEos()
										}, n.checkEos = function() {
											var e = this.sourceBuffer,
												t = this.mediaSource;
											if (t && "open" === t.readyState) {
												for (var r in e) {
													var i = e[r];
													if (i) {
														if (!i.ended) return;
														if (i.updating) return void(this._needsEos = !0)
													}
												}
												c.logger.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");
												try {
													t.endOfStream()
												} catch (e) {
													c.logger.warn("exception while calling mediaSource.endOfStream()")
												}
												this._needsEos = !1
											} else this._needsEos = !1
										}, n.onBufferFlushing = function(e) {
											e.type ? this.flushRange.push({
												start: e.startOffset,
												end: e.endOffset,
												type: e.type
											}) : (this.flushRange.push({
												start: e.startOffset,
												end: e.endOffset,
												type: "video"
											}), this.flushRange.push({
												start: e.startOffset,
												end: e.endOffset,
												type: "audio"
											})), this.flushBufferCounter = 0, this.doFlush()
										}, n.flushLiveBackBuffer = function() {
											if (this._live) {
												var e = this.config.liveBackBufferLength;
												if (isFinite(e) && !(e < 0))
													if (this.media)
														for (var t = this.media.currentTime, r = this.sourceBuffer, i = Object.keys(r), n = t - Math.max(e, this._levelTargetDuration), a = i.length - 1; a >= 0; a--) {
															var s = i[a],
																o = r[s];
															if (o) {
																var l = o.buffered;
																l.length > 0 && n > l.start(0) && this.removeBufferRange(s, o, 0, n) && this.hls.trigger(u.default.LIVE_BACK_BUFFER_REACHED, {
																	bufferEnd: n
																})
															}
														} else c.logger.error("flushLiveBackBuffer called without attaching media")
											}
										}, n.onLevelUpdated = function(e) {
											var t = e.details;
											t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start, this._levelTargetDuration = t.averagetargetduration || t.targetduration || 10, this._live = t.live, this.updateMediaElementDuration())
										}, n.updateMediaElementDuration = function() {
											var e, t = this.config;
											if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
												for (var r in this.sourceBuffer) {
													var i = this.sourceBuffer[r];
													if (i && !0 === i.updating) return
												}
												e = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), !0 === this._live && !0 === t.liveDurationInfinity ? (c.logger.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > e || !Object(l.isFiniteNumber)(e)) && (c.logger.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
											}
										}, n.doFlush = function() {
											for (; this.flushRange.length;) {
												var e = this.flushRange[0];
												if (!this.flushBuffer(e.start, e.end, e.type)) return void(this._needsFlush = !0);
												this.flushRange.shift(), this.flushBufferCounter = 0
											}
											if (0 === this.flushRange.length) {
												this._needsFlush = !1;
												var t = 0,
													r = this.sourceBuffer;
												try {
													for (var i in r) {
														var n = r[i];
														n && (t += n.buffered.length)
													}
												} catch (e) {
													c.logger.error("error while accessing sourceBuffer.buffered")
												}
												this.appended = t, this.hls.trigger(u.default.BUFFER_FLUSHED)
											}
										}, n.doAppending = function() {
											var e = this.config,
												t = this.hls,
												r = this.segments,
												i = this.sourceBuffer;
											if (Object.keys(i)
												.length) {
												if (!this.media || this.media.error) return this.segments = [], void c.logger.error("trying to append although a media error occured, flush segment and abort");
												if (!this.appending) {
													var n = r.shift();
													if (n) try {
														var a = i[n.type];
														if (!a) return void this._onSBUpdateEnd();
														if (a.updating) return void r.unshift(n);
														a.ended = !1, this.parent = n.parent, a.appendBuffer(n.data), this.appendError = 0, this.appended++, this.appending = !0
													} catch (i) {
														c.logger.error("error while trying to append buffer:" + i.message), r.unshift(n);
														var s = {
															type: o.ErrorTypes.MEDIA_ERROR,
															parent: n.parent,
															details: "",
															fatal: !1
														};
														22 === i.code ? (this.segments = [], s.details = o.ErrorDetails.BUFFER_FULL_ERROR) : (this.appendError++, s.details = o.ErrorDetails.BUFFER_APPEND_ERROR, this.appendError > e.appendErrorMaxRetry && (c.logger.log("fail " + e.appendErrorMaxRetry + " times to append segment in sourceBuffer"), this.segments = [], s.fatal = !0)), t.trigger(u.default.ERROR, s)
													}
												}
											}
										}, n.flushBuffer = function(e, t, r) {
											var i = this.sourceBuffer;
											if (!Object.keys(i)
												.length) return !0;
											var n = "null";
											if (this.media && (n = this.media.currentTime.toFixed(3)), c.logger.log("flushBuffer,pos/start/end: " + n + "/" + e + "/" + t), this.flushBufferCounter >= this.appended) return c.logger.warn("abort flushing too many retries"), !0;
											var a = i[r];
											if (a) {
												if (a.ended = !1, a.updating) return c.logger.warn("cannot flush, sb updating in progress"), !1;
												if (this.removeBufferRange(r, a, e, t)) return this.flushBufferCounter++, !1
											}
											return c.logger.log("buffer flushed"), !0
										}, n.removeBufferRange = function(e, t, r, i) {
											try {
												for (var n = 0; n < t.buffered.length; n++) {
													var a = t.buffered.start(n),
														s = t.buffered.end(n),
														o = Math.max(a, r),
														l = Math.min(s, i);
													if (Math.min(l, s) - o > .5) {
														var u = "null";
														return this.media && (u = this.media.currentTime.toString()), c.logger.log("sb remove " + e + " [" + o + "," + l + "], of [" + a + "," + s + "], pos:" + u), t.remove(o, l), !0
													}
												}
											} catch (e) {
												c.logger.warn("removeBufferRange failed", e)
											}
											return !1
										}, i
									}(h);

								function qe(e, t) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
									}
								}
								var Ye = function(e) {
										var t, r;

										function i(t) {
											var r;
											return (r = e.call(this, t, u.default.FPS_DROP_LEVEL_CAPPING, u.default.MEDIA_ATTACHING, u.default.MANIFEST_PARSED, u.default.LEVELS_UPDATED, u.default.BUFFER_CODECS, u.default.MEDIA_DETACHING) || this)
												.autoLevelCapping = Number.POSITIVE_INFINITY, r.firstLevel = null, r.levels = [], r.media = null, r.restrictedLevels = [], r.timer = null, r.clientRect = null, r
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n, a, s, o = i.prototype;
										return o.destroy = function() {
											this.hls.config.capLevelToPlayerSize && (this.media = null, this.clientRect = null, this.stopCapping())
										}, o.onFpsDropLevelCapping = function(e) {
											i.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
										}, o.onMediaAttaching = function(e) {
											this.media = e.media instanceof window.HTMLVideoElement ? e.media : null
										}, o.onManifestParsed = function(e) {
											var t = this.hls;
											this.restrictedLevels = [], this.levels = e.levels, this.firstLevel = e.firstLevel, t.config.capLevelToPlayerSize && e.video && this.startCapping()
										}, o.onBufferCodecs = function(e) {
											this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
										}, o.onLevelsUpdated = function(e) {
											this.levels = e.levels
										}, o.onMediaDetaching = function() {
											this.stopCapping()
										}, o.detectPlayerSize = function() {
											if (this.media) {
												var e = this.levels ? this.levels.length : 0;
												if (e) {
													var t = this.hls;
													t.autoLevelCapping = this.getMaxLevel(e - 1), t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping
												}
											}
										}, o.getMaxLevel = function(e) {
											var t = this;
											if (!this.levels) return -1;
											var r = this.levels.filter((function(r, n) {
												return i.isLevelAllowed(n, t.restrictedLevels) && n <= e
											}));
											return this.clientRect = null, i.getMaxLevelByMediaSize(r, this.mediaWidth, this.mediaHeight)
										}, o.startCapping = function() {
											this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
										}, o.stopCapping = function() {
											this.restrictedLevels = [], this.firstLevel = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer), this.timer = null)
										}, o.getDimensions = function() {
											if (this.clientRect) return this.clientRect;
											var e = this.media,
												t = {
													width: 0,
													height: 0
												};
											if (e) {
												var r = e.getBoundingClientRect();
												t.width = r.width, t.height = r.height, t.width || t.height || (t.width = r.right - r.left || e.width || 0, t.height = r.bottom - r.top || e.height || 0)
											}
											return this.clientRect = t, t
										}, i.isLevelAllowed = function(e, t) {
											return void 0 === t && (t = []), -1 === t.indexOf(e)
										}, i.getMaxLevelByMediaSize = function(e, t, r) {
											if (!e || e && !e.length) return -1;
											for (var i, n, a = e.length - 1, s = 0; s < e.length; s += 1) {
												var o = e[s];
												if ((o.width >= t || o.height >= r) && (i = o, !(n = e[s + 1]) || i.width !== n.width || i.height !== n.height)) {
													a = s;
													break
												}
											}
											return a
										}, n = i, s = [{
											key: "contentScaleFactor",
											get: function() {
												var e = 1;
												try {
													e = window.devicePixelRatio
												} catch (e) {}
												return e
											}
										}], (a = [{
											key: "mediaWidth",
											get: function() {
												return this.getDimensions()
													.width * i.contentScaleFactor
											}
										}, {
											key: "mediaHeight",
											get: function() {
												return this.getDimensions()
													.height * i.contentScaleFactor
											}
										}]) && qe(n.prototype, a), s && qe(n, s), i
									}(h),
									Xe = window.performance,
									$e = function(e) {
										var t, r;

										function i(t) {
											return e.call(this, t, u.default.MEDIA_ATTACHING) || this
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n = i.prototype;
										return n.destroy = function() {
											this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
										}, n.onMediaAttaching = function(e) {
											var t = this.hls.config;
											t.capLevelOnFPSDrop && ("function" == typeof(this.video = e.media instanceof window.HTMLVideoElement ? e.media : null)
												.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod))
										}, n.checkFPS = function(e, t, r) {
											var i = Xe.now();
											if (t) {
												if (this.lastTime) {
													var n = i - this.lastTime,
														a = r - this.lastDroppedFrames,
														s = t - this.lastDecodedFrames,
														o = 1e3 * a / n,
														l = this.hls;
													if (l.trigger(u.default.FPS_DROP, {
														currentDropped: a,
														currentDecoded: s,
														totalDroppedFrames: r
													}), o > 0 && a > l.config.fpsDroppedMonitoringThreshold * s) {
														var d = l.currentLevel;
														c.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (-1 === l.autoLevelCapping || l.autoLevelCapping >= d) && (d -= 1, l.trigger(u.default.FPS_DROP_LEVEL_CAPPING, {
															level: d,
															droppedLevel: l.currentLevel
														}), l.autoLevelCapping = d, l.streamController.nextLevelSwitch())
													}
												}
												this.lastTime = i, this.lastDroppedFrames = r, this.lastDecodedFrames = t
											}
										}, n.checkFPSInterval = function() {
											var e = this.video;
											if (e)
												if (this.isVideoPlaybackQualityAvailable) {
													var t = e.getVideoPlaybackQuality();
													this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
												} else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
										}, i
									}(h),
									Je = function() {
										function e(e) {
											e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
										}
										var t = e.prototype;
										return t.destroy = function() {
											this.abort(), this.loader = null
										}, t.abort = function() {
											var e = this.loader;
											e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
										}, t.load = function(e, t, r) {
											this.context = e, this.config = t, this.callbacks = r, this.stats = {
												trequest: window.performance.now(),
												retry: 0
											}, this.retryDelay = t.retryDelay, this.loadInternal()
										}, t.loadInternal = function() {
											var e, t = this.context;
											e = this.loader = new window.XMLHttpRequest;
											var r = this.stats;
											r.tfirst = 0, r.loaded = 0;
											var i = this.xhrSetup;
											try {
												if (i) try {
													i(e, t.url)
												} catch (r) {
													e.open("GET", t.url, !0), i(e, t.url)
												}
												e.readyState || e.open("GET", t.url, !0)
											} catch (r) {
												return void this.callbacks.onError({
													code: e.status,
													text: r.message
												}, t, e)
											}
											t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send()
										}, t.readystatechange = function(e) {
											var t = e.currentTarget,
												r = t.readyState,
												i = this.stats,
												n = this.context,
												a = this.config;
											if (!i.aborted && r >= 2)
												if (window.clearTimeout(this.requestTimeout), 0 === i.tfirst && (i.tfirst = Math.max(window.performance.now(), i.trequest)), 4 === r) {
													var s = t.status;
													if (s >= 200 && s < 300) {
														var o, l;
														i.tload = Math.max(i.tfirst, window.performance.now()), l = "arraybuffer" === n.responseType ? (o = t.response)
															.byteLength : (o = t.responseText)
															.length, i.loaded = i.total = l;
														var u = {
															url: t.responseURL,
															data: o
														};
														this.callbacks.onSuccess(u, i, n, t)
													} else i.retry >= a.maxRetry || s >= 400 && s < 499 ? (c.logger.error(s + " while loading " + n.url), this.callbacks.onError({
														code: s,
														text: t.statusText
													}, n, t)) : (c.logger.warn(s + " while loading " + n.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), i.retry++)
												} else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
										}, t.loadtimeout = function() {
											c.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
										}, t.loadprogress = function(e) {
											var t = e.currentTarget,
												r = this.stats;
											r.loaded = e.loaded, e.lengthComputable && (r.total = e.total);
											var i = this.callbacks.onProgress;
											i && i(r, this.context, null, t)
										}, e
									}();

								function Qe(e, t) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
									}
								}
								var Ze = function(e) {
									var t, r;

									function i(t) {
										var r;
										return (r = e.call(this, t, u.default.MANIFEST_LOADING, u.default.MANIFEST_PARSED, u.default.AUDIO_TRACK_LOADED, u.default.AUDIO_TRACK_SWITCHED, u.default.LEVEL_LOADED, u.default.ERROR) || this)
											._trackId = -1, r._selectDefaultTrack = !0, r.tracks = [], r.trackIdBlacklist = Object.create(null), r.audioGroupId = null, r
									}
									r = e, (t = i)
										.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
									var n, a, s, l = i.prototype;
									return l.onManifestLoading = function() {
										this.tracks = [], this._trackId = -1, this._selectDefaultTrack = !0
									}, l.onManifestParsed = function(e) {
										var t = this.tracks = e.audioTracks || [];
										this.hls.trigger(u.default.AUDIO_TRACKS_UPDATED, {
											audioTracks: t
										}), this._selectAudioGroup(this.hls.nextLoadLevel)
									}, l.onAudioTrackLoaded = function(e) {
										if (e.id >= this.tracks.length) c.logger.warn("Invalid audio track id:", e.id);
										else {
											if (c.logger.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.hasInterval()) {
												var t = 1e3 * e.details.targetduration;
												this.setInterval(t)
											}!e.details.live && this.hasInterval() && this.clearInterval()
										}
									}, l.onAudioTrackSwitched = function(e) {
										var t = this.tracks[e.id].groupId;
										t && this.audioGroupId !== t && (this.audioGroupId = t)
									}, l.onLevelLoaded = function(e) {
										this._selectAudioGroup(e.level)
									}, l.onError = function(e) {
										e.type === o.ErrorTypes.NETWORK_ERROR && (e.fatal && this.clearInterval(), e.details === o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && (c.logger.warn("Network failure on audio-track id:", e.context.id), this._handleLoadError()))
									}, l._setAudioTrack = function(e) {
										if (this._trackId === e && this.tracks[this._trackId].details) c.logger.debug("Same id as current audio-track passed, and track details available -> no-op");
										else if (e < 0 || e >= this.tracks.length) c.logger.warn("Invalid id passed to audio-track controller");
										else {
											var t = this.tracks[e];
											c.logger.log("Now switching to audio-track index " + e), this.clearInterval(), this._trackId = e;
											var r = t.url,
												i = t.type,
												n = t.id;
											this.hls.trigger(u.default.AUDIO_TRACK_SWITCHING, {
												id: n,
												type: i,
												url: r
											}), this._loadTrackDetailsIfNeeded(t)
										}
									}, l.doTick = function() {
										this._updateTrack(this._trackId)
									}, l._selectAudioGroup = function(e) {
										var t = this.hls.levels[e];
										if (t && t.audioGroupIds) {
											var r = t.audioGroupIds[t.urlId];
											this.audioGroupId !== r && (this.audioGroupId = r, this._selectInitialAudioTrack())
										}
									}, l._selectInitialAudioTrack = function() {
										var e = this,
											t = this.tracks;
										if (t.length) {
											var r = this.tracks[this._trackId],
												i = null;
											if (r && (i = r.name), this._selectDefaultTrack) {
												var n = t.filter((function(e) {
													return e.default
												}));
												n.length ? t = n : c.logger.warn("No default audio tracks defined")
											}
											var a = !1,
												s = function() {
													t.forEach((function(t) {
														a || e.audioGroupId && t.groupId !== e.audioGroupId || i && i !== t.name || (e._setAudioTrack(t.id), a = !0)
													}))
												};
											s(), a || (i = null, s()), a || (c.logger.error("No track found for running audio group-ID: " + this.audioGroupId), this.hls.trigger(u.default.ERROR, {
												type: o.ErrorTypes.MEDIA_ERROR,
												details: o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
												fatal: !0
											}))
										}
									}, l._needsTrackLoading = function(e) {
										var t = e.details,
											r = e.url;
										return !(t && !t.live || !r)
									}, l._loadTrackDetailsIfNeeded = function(e) {
										if (this._needsTrackLoading(e)) {
											var t = e.url,
												r = e.id;
											c.logger.log("loading audio-track playlist for id: " + r), this.hls.trigger(u.default.AUDIO_TRACK_LOADING, {
												url: t,
												id: r
											})
										}
									}, l._updateTrack = function(e) {
										if (!(e < 0 || e >= this.tracks.length)) {
											this.clearInterval(), this._trackId = e, c.logger.log("trying to update audio-track " + e);
											var t = this.tracks[e];
											this._loadTrackDetailsIfNeeded(t)
										}
									}, l._handleLoadError = function() {
										this.trackIdBlacklist[this._trackId] = !0;
										var e = this._trackId,
											t = this.tracks[e],
											r = t.name,
											i = t.language,
											n = t.groupId;
										c.logger.warn("Loading failed on audio track id: " + e + ", group-id: " + n + ', name/language: "' + r + '" / "' + i + '"');
										for (var a = e, s = 0; s < this.tracks.length; s++)
											if (!this.trackIdBlacklist[s] && this.tracks[s].name === r) {
												a = s;
												break
											} a !== e ? (c.logger.log("Attempting audio-track fallback id:", a, "group-id:", this.tracks[a].groupId), this._setAudioTrack(a)) : c.logger.warn('No fallback audio-track found for name/language: "' + r + '" / "' + i + '"')
									}, n = i, (a = [{
										key: "audioTracks",
										get: function() {
											return this.tracks
										}
									}, {
										key: "audioTrack",
										get: function() {
											return this._trackId
										},
										set: function(e) {
											this._setAudioTrack(e), this._selectDefaultTrack = !1
										}
									}]) && Qe(n.prototype, a), s && Qe(n, s), i
								}(pe);

								function et(e, t) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
									}
								}
								var tt = window.performance,
									rt = function(e) {
										var t, r;

										function i(t, r) {
											var i;
											return (i = e.call(this, t, u.default.MEDIA_ATTACHED, u.default.MEDIA_DETACHING, u.default.AUDIO_TRACKS_UPDATED, u.default.AUDIO_TRACK_SWITCHING, u.default.AUDIO_TRACK_LOADED, u.default.KEY_LOADED, u.default.FRAG_LOADED, u.default.FRAG_PARSING_INIT_SEGMENT, u.default.FRAG_PARSING_DATA, u.default.FRAG_PARSED, u.default.ERROR, u.default.BUFFER_RESET, u.default.BUFFER_CREATED, u.default.BUFFER_APPENDED, u.default.BUFFER_FLUSHED, u.default.INIT_PTS_FOUND) || this)
												.fragmentTracker = r, i.config = t.config, i.audioCodecSwap = !1, i._state = ge, i.initPTS = [], i.waitingFragment = null, i.videoTrackCC = null, i
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n, a, s, d = i.prototype;
										return d.onInitPtsFound = function(e) {
											var t = e.id,
												r = e.frag.cc,
												i = e.initPTS;
											"main" === t && (this.initPTS[r] = i, this.videoTrackCC = r, c.logger.log("InitPTS for cc: " + r + " found from video track: " + i), this.state === ke && this.tick())
										}, d.startLoad = function(e) {
											if (this.tracks) {
												var t = this.lastCurrentTime;
												this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, t > 0 && -1 === e ? (c.logger.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = me) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e, this.state = ve), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
											} else this.startPosition = e, this.state = ge
										}, d.doTick = function() {
											var e, t, r, i = this.hls,
												n = i.config;
											switch (this.state) {
												case Le:
												case _e:
												case we:
													break;
												case ve:
													this.state = Se, this.loadedmetadata = !1;
													break;
												case me:
													var a = this.tracks;
													if (!a) break;
													if (!this.media && (this.startFragRequested || !n.startFragPrefetch)) break;
													if (this.loadedmetadata) e = this.media.currentTime;
													else if (void 0 === (e = this.nextLoadPosition)) break;
													var s = this.mediaBuffer ? this.mediaBuffer : this.media,
														o = this.videoBuffer ? this.videoBuffer : this.media,
														d = e < n.maxBufferHole ? Math.max(2, n.maxBufferHole) : n.maxBufferHole,
														h = K.bufferInfo(s, e, d),
														f = K.bufferInfo(o, e, d),
														p = h.len,
														g = h.end,
														v = this.fragPrevious,
														m = Math.min(n.maxBufferLength, n.maxMaxBufferLength),
														_ = Math.max(m, f.len),
														y = this.audioSwitch,
														E = this.trackId;
													if ((p < _ || y) && E < a.length) {
														if (void 0 === (r = a[E].details)) {
															this.state = Se;
															break
														}
														if (!y && this._streamEnded(h, r)) return this.hls.trigger(u.default.BUFFER_EOS, {
															type: "audio"
														}), void(this.state = Re);
														var b, S = r.fragments,
															T = S.length,
															A = S[0].start,
															w = S[T - 1].start + S[T - 1].duration;
														if (y)
															if (r.live && !r.PTSKnown) c.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"), g = 0;
															else if (g = e, r.PTSKnown && e < A) {
															if (!(h.end > A || h.nextStart)) return;
															c.logger.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = A + .05
														}
														if (r.initSegment && !r.initSegment.data) b = r.initSegment;
														else if (g <= A) {
															if (b = S[0], null !== this.videoTrackCC && b.cc !== this.videoTrackCC && (b = function(e, t) {
																return V.search(e, (function(e) {
																	return e.cc < t ? 1 : e.cc > t ? -1 : 0
																}))
															}(S, this.videoTrackCC)), r.live && b.loadIdx && b.loadIdx === this.fragLoadIdx) {
																var R = h.nextStart ? h.nextStart : A;
																return c.logger.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (R + .05)), void(this.media.currentTime = R + .05)
															}
														} else {
															var L, k = n.maxFragLookUpTolerance,
																O = v ? S[v.sn - S[0].sn + 1] : void 0,
																D = function(e) {
																	var t = Math.min(k, e.duration);
																	return e.start + e.duration - t <= g ? 1 : e.start - t > g && e.start ? -1 : 0
																};
															g < w ? (g > w - k && (k = 0), L = O && !D(O) ? O : V.search(S, D)) : L = S[T - 1], L && (b = L, A = L.start, v && b.level === v.level && b.sn === v.sn && (b.sn < r.endSN ? (b = S[b.sn + 1 - r.startSN], c.logger.log("SN just loaded, load next one: " + b.sn)) : b = null))
														}
														b && (b.encrypted ? (c.logger.log("Loading key for " + b.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + E), this.state = ye, i.trigger(u.default.KEY_LOADING, {
															frag: b
														})) : (this.fragCurrent = b, (y || this.fragmentTracker.getState(b) === N) && (c.logger.log("Loading " + b.sn + ", cc: " + b.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + E + ", currentTime:" + e + ",bufferEnd:" + g.toFixed(3)), "initSegment" !== b.sn && (this.startFragRequested = !0), Object(l.isFiniteNumber)(b.sn) && (this.nextLoadPosition = b.start + b.duration), i.trigger(u.default.FRAG_LOADING, {
															frag: b
														}), this.state = Ee)))
													}
													break;
												case Se:
													(t = this.tracks[this.trackId]) && t.details && (this.state = me);
													break;
												case be:
													var C = tt.now(),
														I = this.retryDate,
														x = (s = this.media) && s.seeking;
													(!I || C >= I || x) && (c.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = me);
													break;
												case ke:
													var P = this.videoTrackCC;
													if (void 0 === this.initPTS[P]) break;
													var M = this.waitingFragment;
													if (M) {
														var F = M.frag.cc;
														P !== F ? (t = this.tracks[this.trackId])
															.details && t.details.live && (c.logger.warn("Waiting fragment CC (" + F + ") does not match video track CC (" + P + ")"), this.waitingFragment = null, this.state = me) : (this.state = Ee, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
													} else this.state = me
											}
										}, d.onMediaAttached = function(e) {
											var t = this.media = this.mediaBuffer = e.media;
											this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("ended", this.onvended);
											var r = this.config;
											this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
										}, d.onMediaDetaching = function() {
											var e = this.media;
											e && e.ended && (c.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
										}, d.onAudioTracksUpdated = function(e) {
											c.logger.log("audio tracks updated"), this.tracks = e.audioTracks
										}, d.onAudioTrackSwitching = function(e) {
											var t = !!e.url;
											this.trackId = e.id, this.fragCurrent = null, this.state = _e, this.waitingFragment = null, t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), t && (this.audioSwitch = !0, this.state = me), this.tick()
										}, d.onAudioTrackLoaded = function(e) {
											var t = e.details,
												r = e.id,
												i = this.tracks[r],
												n = t.totalduration,
												a = 0;
											if (c.logger.log("track " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + n), t.live) {
												var s = i.details;
												s && t.fragments.length > 0 ? (re(s, t), a = t.fragments[0].start, t.PTSKnown ? c.logger.log("live audio playlist sliding:" + a.toFixed(3)) : c.logger.log("live audio playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1, c.logger.log("live audio playlist - first load, unknown sliding"))
											} else t.PTSKnown = !1;
											if (i.details = t, !this.startFragRequested) {
												if (-1 === this.startPosition) {
													var o = t.startTimeOffset;
													Object(l.isFiniteNumber)(o) ? (c.logger.log("start time offset found in playlist, adjust startPosition to " + o), this.startPosition = o) : t.live ? (this.startPosition = this.computeLivePosition(a, t), c.logger.log("compute startPosition for audio-track to " + this.startPosition)) : this.startPosition = 0
												}
												this.nextLoadPosition = this.startPosition
											}
											this.state === Se && (this.state = me), this.tick()
										}, d.onKeyLoaded = function() {
											this.state === ye && (this.state = me, this.tick())
										}, d.onFragLoaded = function(e) {
											var t = this.fragCurrent,
												r = e.frag;
											if (this.state === Ee && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) {
												var i = this.tracks[this.trackId],
													n = i.details,
													a = n.totalduration,
													s = t.level,
													o = t.sn,
													l = t.cc,
													d = this.config.defaultAudioCodec || i.audioCodec || "mp4a.40.2",
													h = this.stats = e.stats;
												if ("initSegment" === o) this.state = me, h.tparsed = h.tbuffered = tt.now(), n.initSegment.data = e.payload, this.hls.trigger(u.default.FRAG_BUFFERED, {
													stats: h,
													frag: t,
													id: "audio"
												}), this.tick();
												else {
													this.state = Te, this.appended = !1, this.demuxer || (this.demuxer = new Q(this.hls, "audio"));
													var f = this.initPTS[l],
														p = n.initSegment ? n.initSegment.data : [];
													n.initSegment || void 0 !== f ? (this.pendingBuffering = !0, c.logger.log("Demuxing " + o + " of [" + n.startSN + " ," + n.endSN + "],track " + s), this.demuxer.push(e.payload, p, d, null, t, a, !1, f)) : (c.logger.log("unknown video PTS for continuity counter " + l + ", waiting for video PTS before demuxing audio frag " + o + " of [" + n.startSN + " ," + n.endSN + "],track " + s), this.waitingFragment = e, this.state = ke)
												}
											}
											this.fragLoadError = 0
										}, d.onFragParsingInitSegment = function(e) {
											var t = this.fragCurrent,
												r = e.frag;
											if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === Te) {
												var i, n = e.tracks;
												if (n.video && delete n.video, i = n.audio) {
													i.levelCodec = i.codec, i.id = e.id, this.hls.trigger(u.default.BUFFER_CODECS, n), c.logger.log("audio track:audio,container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
													var a = i.initSegment;
													if (a) {
														var s = {
															type: "audio",
															data: a,
															parent: "audio",
															content: "initSegment"
														};
														this.audioSwitch ? this.pendingData = [s] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(u.default.BUFFER_APPENDING, s))
													}
													this.tick()
												}
											}
										}, d.onFragParsingData = function(e) {
											var t = this,
												r = this.fragCurrent,
												i = e.frag;
											if (r && "audio" === e.id && "audio" === e.type && i.sn === r.sn && i.level === r.level && this.state === Te) {
												var n = this.trackId,
													a = this.tracks[n],
													s = this.hls;
												Object(l.isFiniteNumber)(e.endPTS) || (e.endPTS = e.startPTS + r.duration, e.endDTS = e.startDTS + r.duration), r.addElementaryStream(g.AUDIO), c.logger.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb), te(a.details, r, e.startPTS, e.endPTS);
												var d = this.audioSwitch,
													h = this.media,
													f = !1;
												if (d)
													if (h && h.readyState) {
														var p = h.currentTime;
														c.logger.log("switching audio track : currentTime:" + p), p >= e.startPTS && (c.logger.log("switching audio track : flushing all audio"), this.state = we, s.trigger(u.default.BUFFER_FLUSHING, {
															startOffset: 0,
															endOffset: Number.POSITIVE_INFINITY,
															type: "audio"
														}), f = !0, this.audioSwitch = !1, s.trigger(u.default.AUDIO_TRACK_SWITCHED, {
															id: n
														}))
													} else this.audioSwitch = !1, s.trigger(u.default.AUDIO_TRACK_SWITCHED, {
														id: n
													});
												var v = this.pendingData;
												if (!v) return c.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"), void s.trigger(u.default.ERROR, {
													type: o.ErrorTypes.MEDIA_ERROR,
													details: null,
													fatal: !0
												});
												this.audioSwitch || ([e.data1, e.data2].forEach((function(t) {
													t && t.length && v.push({
														type: e.type,
														data: t,
														parent: "audio",
														content: "data"
													})
												})), !f && v.length && (v.forEach((function(e) {
													t.state === Te && (t.pendingBuffering = !0, t.hls.trigger(u.default.BUFFER_APPENDING, e))
												})), this.pendingData = [], this.appended = !0)), this.tick()
											}
										}, d.onFragParsed = function(e) {
											var t = this.fragCurrent,
												r = e.frag;
											t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === Te && (this.stats.tparsed = tt.now(), this.state = Ae, this._checkAppendedParsed())
										}, d.onBufferReset = function() {
											this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
										}, d.onBufferCreated = function(e) {
											var t = e.tracks.audio;
											t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
										}, d.onBufferAppended = function(e) {
											if ("audio" === e.parent) {
												var t = this.state;
												t !== Te && t !== Ae || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
											}
										}, d._checkAppendedParsed = function() {
											if (!(this.state !== Ae || this.appended && this.pendingBuffering)) {
												var e = this.fragCurrent,
													t = this.stats,
													r = this.hls;
												if (e) {
													this.fragPrevious = e, t.tbuffered = tt.now(), r.trigger(u.default.FRAG_BUFFERED, {
														stats: t,
														frag: e,
														id: "audio"
													});
													var i = this.mediaBuffer ? this.mediaBuffer : this.media;
													i && c.logger.log("audio buffered : " + ae.toString(i.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(u.default.AUDIO_TRACK_SWITCHED, {
														id: this.trackId
													})), this.state = me
												}
												this.tick()
											}
										}, d.onError = function(e) {
											var t = e.frag;
											if (!t || "audio" === t.type) switch (e.details) {
												case o.ErrorDetails.FRAG_LOAD_ERROR:
												case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
													var r = e.frag;
													if (r && "audio" !== r.type) break;
													if (!e.fatal) {
														var i = this.fragLoadError;
														i ? i++ : i = 1;
														var n = this.config;
														if (i <= n.fragLoadingMaxRetry) {
															this.fragLoadError = i;
															var a = Math.min(Math.pow(2, i - 1) * n.fragLoadingRetryDelay, n.fragLoadingMaxRetryTimeout);
															c.logger.warn("AudioStreamController: frag loading failed, retry in " + a + " ms"), this.retryDate = tt.now() + a, this.state = be
														} else c.logger.error("AudioStreamController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = Le
													}
													break;
												case o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
												case o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
												case o.ErrorDetails.KEY_LOAD_ERROR:
												case o.ErrorDetails.KEY_LOAD_TIMEOUT:
													this.state !== Le && (this.state = e.fatal ? Le : me, c.logger.warn("AudioStreamController: " + e.details + " while loading frag, now switching to " + this.state + " state ..."));
													break;
												case o.ErrorDetails.BUFFER_FULL_ERROR:
													if ("audio" === e.parent && (this.state === Te || this.state === Ae)) {
														var s = this.mediaBuffer,
															l = this.media.currentTime;
														if (s && K.isBuffered(s, l) && K.isBuffered(s, l + .5)) {
															var d = this.config;
															d.maxMaxBufferLength >= d.maxBufferLength && (d.maxMaxBufferLength /= 2, c.logger.warn("AudioStreamController: reduce max buffer length to " + d.maxMaxBufferLength + "s")), this.state = me
														} else c.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = we, this.hls.trigger(u.default.BUFFER_FLUSHING, {
															startOffset: 0,
															endOffset: Number.POSITIVE_INFINITY,
															type: "audio"
														})
													}
											}
										}, d.onBufferFlushed = function() {
											var e = this,
												t = this.pendingData;
											t && t.length ? (c.logger.log("AudioStreamController: appending pending audio data after buffer flushed"), t.forEach((function(t) {
												e.hls.trigger(u.default.BUFFER_APPENDING, t)
											})), this.appended = !0, this.pendingData = [], this.state = Ae) : (this.state = me, this.fragPrevious = null, this.tick())
										}, n = i, (a = [{
											key: "state",
											set: function(e) {
												if (this.state !== e) {
													var t = this.state;
													this._state = e, c.logger.log("audio stream:" + t + "->" + e)
												}
											},
											get: function() {
												return this._state
											}
										}]) && et(n.prototype, a), s && et(n, s), i
									}(De),
									it = function() {
										if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
										var e = {
												"": !0,
												lr: !0,
												rl: !0
											},
											t = {
												start: !0,
												middle: !0,
												end: !0,
												left: !0,
												right: !0
											};

										function r(e) {
											return "string" == typeof e && !!t[e.toLowerCase()] && e.toLowerCase()
										}

										function i(e) {
											for (var t = 1; t < arguments.length; t++) {
												var r = arguments[t];
												for (var i in r) e[i] = r[i]
											}
											return e
										}

										function n(t, n, a) {
											var s = this,
												o = {
													enumerable: !0
												};
											s.hasBeenReset = !1;
											var l = "",
												u = !1,
												c = t,
												d = n,
												h = a,
												f = null,
												p = "",
												g = !0,
												v = "auto",
												m = "start",
												_ = 50,
												y = "middle",
												E = 50,
												b = "middle";
											Object.defineProperty(s, "id", i({}, o, {
												get: function() {
													return l
												},
												set: function(e) {
													l = "" + e
												}
											})), Object.defineProperty(s, "pauseOnExit", i({}, o, {
												get: function() {
													return u
												},
												set: function(e) {
													u = !!e
												}
											})), Object.defineProperty(s, "startTime", i({}, o, {
												get: function() {
													return c
												},
												set: function(e) {
													if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
													c = e, this.hasBeenReset = !0
												}
											})), Object.defineProperty(s, "endTime", i({}, o, {
												get: function() {
													return d
												},
												set: function(e) {
													if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
													d = e, this.hasBeenReset = !0
												}
											})), Object.defineProperty(s, "text", i({}, o, {
												get: function() {
													return h
												},
												set: function(e) {
													h = "" + e, this.hasBeenReset = !0
												}
											})), Object.defineProperty(s, "region", i({}, o, {
												get: function() {
													return f
												},
												set: function(e) {
													f = e, this.hasBeenReset = !0
												}
											})), Object.defineProperty(s, "vertical", i({}, o, {
												get: function() {
													return p
												},
												set: function(t) {
													var r = function(t) {
														return "string" == typeof t && !!e[t.toLowerCase()] && t.toLowerCase()
													}(t);
													if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
													p = r, this.hasBeenReset = !0
												}
											})), Object.defineProperty(s, "snapToLines", i({}, o, {
												get: function() {
													return g
												},
												set: function(e) {
													g = !!e, this.hasBeenReset = !0
												}
											})), Object.defineProperty(s, "line", i({}, o, {
												get: function() {
													return v
												},
												set: function(e) {
													if ("number" != typeof e && "auto" !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
													v = e, this.hasBeenReset = !0
												}
											})), Object.defineProperty(s, "lineAlign", i({}, o, {
												get: function() {
													return m
												},
												set: function(e) {
													var t = r(e);
													if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
													m = t, this.hasBeenReset = !0
												}
											})), Object.defineProperty(s, "position", i({}, o, {
												get: function() {
													return _
												},
												set: function(e) {
													if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
													_ = e, this.hasBeenReset = !0
												}
											})), Object.defineProperty(s, "positionAlign", i({}, o, {
												get: function() {
													return y
												},
												set: function(e) {
													var t = r(e);
													if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
													y = t, this.hasBeenReset = !0
												}
											})), Object.defineProperty(s, "size", i({}, o, {
												get: function() {
													return E
												},
												set: function(e) {
													if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
													E = e, this.hasBeenReset = !0
												}
											})), Object.defineProperty(s, "align", i({}, o, {
												get: function() {
													return b
												},
												set: function(e) {
													var t = r(e);
													if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
													b = t, this.hasBeenReset = !0
												}
											})), s.displayState = void 0
										}
										return n.prototype.getCueAsHTML = function() {
											return window.WebVTT.convertCueToDOMTree(window, this.text)
										}, n
									}(),
									nt = function() {
										return {
											decode: function(e) {
												if (!e) return "";
												if ("string" != typeof e) throw new Error("Error - expected string data.");
												return decodeURIComponent(encodeURIComponent(e))
											}
										}
									};

								function at() {
									this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new nt, this.regionList = []
								}

								function st() {
									this.values = Object.create(null)
								}

								function ot(e, t, r, i) {
									var n = i ? e.split(i) : [e];
									for (var a in n)
										if ("string" == typeof n[a]) {
											var s = n[a].split(r);
											2 === s.length && t(s[0], s[1])
										}
								}
								st.prototype = {
									set: function(e, t) {
										this.get(e) || "" === t || (this.values[e] = t)
									},
									get: function(e, t, r) {
										return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t
									},
									has: function(e) {
										return e in this.values
									},
									alt: function(e, t, r) {
										for (var i = 0; i < r.length; ++i)
											if (t === r[i]) {
												this.set(e, t);
												break
											}
									},
									integer: function(e, t) {
										/^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
									},
									percent: function(e, t) {
										return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0)
									}
								};
								var lt = new it(0, 0, 0),
									ut = "middle" === lt.align ? "middle" : "center";

								function ct(e, t, r) {
									var i = e;

									function n() {
										var t = function(e) {
											function t(e, t, r, i) {
												return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | i) / 1e3
											}
											var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
											return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
										}(e);
										if (null === t) throw new Error("Malformed timestamp: " + i);
										return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
									}

									function a() {
										e = e.replace(/^\s+/, "")
									}
									if (a(), t.startTime = n(), a(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
									e = e.substr(3), a(), t.endTime = n(), a(),
										function(e, t) {
											var i = new st;
											ot(e, (function(e, t) {
												switch (e) {
													case "region":
														for (var n = r.length - 1; n >= 0; n--)
															if (r[n].id === t) {
																i.set(e, r[n].region);
																break
															} break;
													case "vertical":
														i.alt(e, t, ["rl", "lr"]);
														break;
													case "line":
														var a = t.split(","),
															s = a[0];
														i.integer(e, s), i.percent(e, s) && i.set("snapToLines", !1), i.alt(e, s, ["auto"]), 2 === a.length && i.alt("lineAlign", a[1], ["start", ut, "end"]);
														break;
													case "position":
														a = t.split(","), i.percent(e, a[0]), 2 === a.length && i.alt("positionAlign", a[1], ["start", ut, "end", "line-left", "line-right", "auto"]);
														break;
													case "size":
														i.percent(e, t);
														break;
													case "align":
														i.alt(e, t, ["start", ut, "end", "left", "right"])
												}
											}), /:/, /\s/), t.region = i.get("region", null), t.vertical = i.get("vertical", "");
											var n = i.get("line", "auto");
											"auto" === n && -1 === lt.line && (n = -1), t.line = n, t.lineAlign = i.get("lineAlign", "start"), t.snapToLines = i.get("snapToLines", !0), t.size = i.get("size", 100), t.align = i.get("align", ut);
											var a = i.get("position", "auto");
											"auto" === a && 50 === lt.position && (a = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = a
										}(e, t)
								}

								function dt(e) {
									return e.replace(/<br(?: \/)?>/gi, "\n")
								}
								at.prototype = {
									parse: function(e) {
										var t = this;

										function r() {
											var e = t.buffer,
												r = 0;
											for (e = dt(e); r < e.length && "\r" !== e[r] && "\n" !== e[r];) ++r;
											var i = e.substr(0, r);
											return "\r" === e[r] && ++r, "\n" === e[r] && ++r, t.buffer = e.substr(r), i
										}
										e && (t.buffer += t.decoder.decode(e, {
											stream: !0
										}));
										try {
											var i;
											if ("INITIAL" === t.state) {
												if (!/\r\n|\n/.test(t.buffer)) return this;
												var n = (i = r())
													.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
												if (!n || !n[0]) throw new Error("Malformed WebVTT signature.");
												t.state = "HEADER"
											}
											for (var a = !1; t.buffer;) {
												if (!/\r\n|\n/.test(t.buffer)) return this;
												switch (a ? a = !1 : i = r(), t.state) {
													case "HEADER":
														/:/.test(i) ? ot(i, (function(e, t) {}), /:/) : i || (t.state = "ID");
														continue;
													case "NOTE":
														i || (t.state = "ID");
														continue;
													case "ID":
														if (/^NOTE($|[ \t])/.test(i)) {
															t.state = "NOTE";
															break
														}
														if (!i) continue;
														if (t.cue = new it(0, 0, ""), t.state = "CUE", -1 === i.indexOf("--\x3e")) {
															t.cue.id = i;
															continue
														}
													case "CUE":
														try {
															ct(i, t.cue, t.regionList)
														} catch (e) {
															t.cue = null, t.state = "BADCUE";
															continue
														}
														t.state = "CUETEXT";
														continue;
													case "CUETEXT":
														var s = -1 !== i.indexOf("--\x3e");
														if (!i || s && (a = !0)) {
															t.oncue && t.oncue(t.cue), t.cue = null, t.state = "ID";
															continue
														}
														t.cue.text && (t.cue.text += "\n"), t.cue.text += i;
														continue;
													case "BADCUE":
														i || (t.state = "ID");
														continue
												}
											}
										} catch (e) {
											"CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
										}
										return this
									},
									flush: function() {
										try {
											if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new Error("Malformed WebVTT signature.")
										} catch (e) {
											throw e
										}
										return this.onflush && this.onflush(), this
									}
								};
								var ht = at;

								function ft(e, t, r, i) {
									for (var n, a, s, o, l, u = [], c = window.VTTCue || TextTrackCue, d = 0; d < i.rows.length; d++)
										if (s = !0, o = 0, l = "", !(n = i.rows[d])
											.isEmpty()) {
											for (var h = 0; h < n.chars.length; h++) n.chars[h].uchar.match(/\s/) && s ? o++ : (l += n.chars[h].uchar, s = !1);
											n.cueStartTime = t, t === r && (r += 1e-4), a = new c(t, r, dt(l.trim())), o >= 16 ? o-- : o++, navigator.userAgent.match(/Firefox\//) ? a.line = d + 1 : a.line = d > 7 ? d - 2 : d + 1, a.align = "left", a.position = Math.max(0, Math.min(100, o / 32 * 100)), u.push(a), e && e.addCue(a)
										} return u
								}
								var pt, gt = {
										42: 225,
										92: 233,
										94: 237,
										95: 243,
										96: 250,
										123: 231,
										124: 247,
										125: 209,
										126: 241,
										127: 9608,
										128: 174,
										129: 176,
										130: 189,
										131: 191,
										132: 8482,
										133: 162,
										134: 163,
										135: 9834,
										136: 224,
										137: 32,
										138: 232,
										139: 226,
										140: 234,
										141: 238,
										142: 244,
										143: 251,
										144: 193,
										145: 201,
										146: 211,
										147: 218,
										148: 220,
										149: 252,
										150: 8216,
										151: 161,
										152: 42,
										153: 8217,
										154: 9473,
										155: 169,
										156: 8480,
										157: 8226,
										158: 8220,
										159: 8221,
										160: 192,
										161: 194,
										162: 199,
										163: 200,
										164: 202,
										165: 203,
										166: 235,
										167: 206,
										168: 207,
										169: 239,
										170: 212,
										171: 217,
										172: 249,
										173: 219,
										174: 171,
										175: 187,
										176: 195,
										177: 227,
										178: 205,
										179: 204,
										180: 236,
										181: 210,
										182: 242,
										183: 213,
										184: 245,
										185: 123,
										186: 125,
										187: 92,
										188: 94,
										189: 95,
										190: 124,
										191: 8764,
										192: 196,
										193: 228,
										194: 214,
										195: 246,
										196: 223,
										197: 165,
										198: 164,
										199: 9475,
										200: 197,
										201: 229,
										202: 216,
										203: 248,
										204: 9487,
										205: 9491,
										206: 9495,
										207: 9499
									},
									vt = function(e) {
										var t = e;
										return gt.hasOwnProperty(e) && (t = gt[e]), String.fromCharCode(t)
									},
									mt = {
										17: 1,
										18: 3,
										21: 5,
										22: 7,
										23: 9,
										16: 11,
										19: 12,
										20: 14
									},
									_t = {
										17: 2,
										18: 4,
										21: 6,
										22: 8,
										23: 10,
										19: 13,
										20: 15
									},
									yt = {
										25: 1,
										26: 3,
										29: 5,
										30: 7,
										31: 9,
										24: 11,
										27: 12,
										28: 14
									},
									Et = {
										25: 2,
										26: 4,
										29: 6,
										30: 8,
										31: 10,
										27: 13,
										28: 15
									},
									bt = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
								! function(e) {
									e[e.ERROR = 0] = "ERROR", e[e.TEXT = 1] = "TEXT", e[e.WARNING = 2] = "WARNING", e[e.INFO = 2] = "INFO", e[e.DEBUG = 3] = "DEBUG", e[e.DATA = 3] = "DATA"
								}(pt || (pt = {}));
								var St = function() {
										function e() {
											this.time = null, this.verboseLevel = pt.ERROR
										}
										return e.prototype.log = function(e, t) {
											this.verboseLevel >= e && c.logger.log(this.time + " [" + e + "] " + t)
										}, e
									}(),
									Tt = function(e) {
										for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16));
										return t
									},
									At = function() {
										function e(e, t, r, i, n) {
											this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = e || "white", this.underline = t || !1, this.italics = r || !1, this.background = i || "black", this.flash = n || !1
										}
										var t = e.prototype;
										return t.reset = function() {
											this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
										}, t.setStyles = function(e) {
											for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
												var i = t[r];
												e.hasOwnProperty(i) && (this[i] = e[i])
											}
										}, t.isDefault = function() {
											return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
										}, t.equals = function(e) {
											return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
										}, t.copy = function(e) {
											this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
										}, t.toString = function() {
											return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
										}, e
									}(),
									wt = function() {
										function e(e, t, r, i, n, a) {
											this.uchar = void 0, this.penState = void 0, this.uchar = e || " ", this.penState = new At(t, r, i, n, a)
										}
										var t = e.prototype;
										return t.reset = function() {
											this.uchar = " ", this.penState.reset()
										}, t.setChar = function(e, t) {
											this.uchar = e, this.penState.copy(t)
										}, t.setPenState = function(e) {
											this.penState.copy(e)
										}, t.equals = function(e) {
											return this.uchar === e.uchar && this.penState.equals(e.penState)
										}, t.copy = function(e) {
											this.uchar = e.uchar, this.penState.copy(e.penState)
										}, t.isEmpty = function() {
											return " " === this.uchar && this.penState.isDefault()
										}, e
									}(),
									Rt = function() {
										function e(e) {
											this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
											for (var t = 0; t < 100; t++) this.chars.push(new wt);
											this.logger = e, this.pos = 0, this.currPenState = new At
										}
										var t = e.prototype;
										return t.equals = function(e) {
											for (var t = !0, r = 0; r < 100; r++)
												if (!this.chars[r].equals(e.chars[r])) {
													t = !1;
													break
												} return t
										}, t.copy = function(e) {
											for (var t = 0; t < 100; t++) this.chars[t].copy(e.chars[t])
										}, t.isEmpty = function() {
											for (var e = !0, t = 0; t < 100; t++)
												if (!this.chars[t].isEmpty()) {
													e = !1;
													break
												} return e
										}, t.setCursor = function(e) {
											this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(pt.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > 100 && (this.logger.log(pt.DEBUG, "Too large cursor position " + this.pos), this.pos = 100)
										}, t.moveCursor = function(e) {
											var t = this.pos + e;
											if (e > 1)
												for (var r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState);
											this.setCursor(t)
										}, t.backSpace = function() {
											this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
										}, t.insertChar = function(e) {
											e >= 144 && this.backSpace();
											var t = vt(e);
											this.pos >= 100 ? this.logger.log(pt.ERROR, "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1))
										}, t.clearFromPos = function(e) {
											var t;
											for (t = e; t < 100; t++) this.chars[t].reset()
										}, t.clear = function() {
											this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
										}, t.clearToEndOfRow = function() {
											this.clearFromPos(this.pos)
										}, t.getTextString = function() {
											for (var e = [], t = !0, r = 0; r < 100; r++) {
												var i = this.chars[r].uchar;
												" " !== i && (t = !1), e.push(i)
											}
											return t ? "" : e.join("")
										}, t.setPenStyles = function(e) {
											this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState)
										}, e
									}(),
									Lt = function() {
										function e(e) {
											this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
											for (var t = 0; t < 15; t++) this.rows.push(new Rt(e));
											this.logger = e, this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset()
										}
										var t = e.prototype;
										return t.reset = function() {
											for (var e = 0; e < 15; e++) this.rows[e].clear();
											this.currRow = 14
										}, t.equals = function(e) {
											for (var t = !0, r = 0; r < 15; r++)
												if (!this.rows[r].equals(e.rows[r])) {
													t = !1;
													break
												} return t
										}, t.copy = function(e) {
											for (var t = 0; t < 15; t++) this.rows[t].copy(e.rows[t])
										}, t.isEmpty = function() {
											for (var e = !0, t = 0; t < 15; t++)
												if (!this.rows[t].isEmpty()) {
													e = !1;
													break
												} return e
										}, t.backSpace = function() {
											this.rows[this.currRow].backSpace()
										}, t.clearToEndOfRow = function() {
											this.rows[this.currRow].clearToEndOfRow()
										}, t.insertChar = function(e) {
											this.rows[this.currRow].insertChar(e)
										}, t.setPen = function(e) {
											this.rows[this.currRow].setPenStyles(e)
										}, t.moveCursor = function(e) {
											this.rows[this.currRow].moveCursor(e)
										}, t.setCursor = function(e) {
											this.logger.log(pt.INFO, "setCursor: " + e), this.rows[this.currRow].setCursor(e)
										}, t.setPAC = function(e) {
											this.logger.log(pt.INFO, "pacData = " + JSON.stringify(e));
											var t = e.row - 1;
											if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
												for (var r = 0; r < 15; r++) this.rows[r].clear();
												var i = this.currRow + 1 - this.nrRollUpRows,
													n = this.lastOutputScreen;
												if (n) {
													var a = n.rows[i].cueStartTime,
														s = this.logger.time;
													if (a && null !== s && a < s)
														for (var o = 0; o < this.nrRollUpRows; o++) this.rows[t - this.nrRollUpRows + o + 1].copy(n.rows[i + o])
												}
											}
											this.currRow = t;
											var l = this.rows[this.currRow];
											if (null !== e.indent) {
												var u = e.indent,
													c = Math.max(u - 1, 0);
												l.setCursor(e.indent), e.color = l.chars[c].penState.foreground
											}
											var d = {
												foreground: e.color,
												underline: e.underline,
												italics: e.italics,
												background: "black",
												flash: !1
											};
											this.setPen(d)
										}, t.setBkgData = function(e) {
											this.logger.log(pt.INFO, "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
										}, t.setRollUpRows = function(e) {
											this.nrRollUpRows = e
										}, t.rollUp = function() {
											if (null !== this.nrRollUpRows) {
												this.logger.log(pt.TEXT, this.getDisplayText());
												var e = this.currRow + 1 - this.nrRollUpRows,
													t = this.rows.splice(e, 1)[0];
												t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(pt.INFO, "Rolling up")
											} else this.logger.log(pt.DEBUG, "roll_up but nrRollUpRows not set yet")
										}, t.getDisplayText = function(e) {
											e = e || !1;
											for (var t = [], r = "", i = -1, n = 0; n < 15; n++) {
												var a = this.rows[n].getTextString();
												a && (i = n + 1, e ? t.push("Row " + i + ": '" + a + "'") : t.push(a.trim()))
											}
											return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")), r
										}, t.getTextAndFormat = function() {
											return this.rows
										}, e
									}(),
									kt = function() {
										function e(e, t, r) {
											this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new Lt(r), this.nonDisplayedMemory = new Lt(r), this.lastOutputScreen = new Lt(r), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r
										}
										var t = e.prototype;
										return t.reset = function() {
											this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
										}, t.getHandler = function() {
											return this.outputFilter
										}, t.setHandler = function(e) {
											this.outputFilter = e
										}, t.setPAC = function(e) {
											this.writeScreen.setPAC(e)
										}, t.setBkgData = function(e) {
											this.writeScreen.setBkgData(e)
										}, t.setMode = function(e) {
											e !== this.mode && (this.mode = e, this.logger.log(pt.INFO, "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
										}, t.insertChars = function(e) {
											for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
											var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
											this.logger.log(pt.INFO, r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(pt.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
										}, t.ccRCL = function() {
											this.logger.log(pt.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
										}, t.ccBS = function() {
											this.logger.log(pt.INFO, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
										}, t.ccAOF = function() {}, t.ccAON = function() {}, t.ccDER = function() {
											this.logger.log(pt.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
										}, t.ccRU = function(e) {
											this.logger.log(pt.INFO, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
										}, t.ccFON = function() {
											this.logger.log(pt.INFO, "FON - Flash On"), this.writeScreen.setPen({
												flash: !0
											})
										}, t.ccRDC = function() {
											this.logger.log(pt.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
										}, t.ccTR = function() {
											this.logger.log(pt.INFO, "TR"), this.setMode("MODE_TEXT")
										}, t.ccRTD = function() {
											this.logger.log(pt.INFO, "RTD"), this.setMode("MODE_TEXT")
										}, t.ccEDM = function() {
											this.logger.log(pt.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
										}, t.ccCR = function() {
											this.logger.log(pt.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
										}, t.ccENM = function() {
											this.logger.log(pt.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
										}, t.ccEOC = function() {
											if (this.logger.log(pt.INFO, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
												var e = this.displayedMemory;
												this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(pt.TEXT, "DISP: " + this.displayedMemory.getDisplayText())
											}
											this.outputDataUpdate(!0)
										}, t.ccTO = function(e) {
											this.logger.log(pt.INFO, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e)
										}, t.ccMIDROW = function(e) {
											var t = {
												flash: !1
											};
											if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
											else {
												var r = Math.floor(e / 2) - 16;
												t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
											}
											this.logger.log(pt.INFO, "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
										}, t.outputDataUpdate = function(e) {
											void 0 === e && (e = !1);
											var t = this.logger.time;
											null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
										}, t.cueSplitAtTime = function(e) {
											this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
										}, e
									}();

								function Ot(e, t, r) {
									r.a = e, r.b = t
								}

								function Dt(e, t, r) {
									return r.a === e && r.b === t
								}
								var Ct = function() {
										function e(e, t, r) {
											this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
											var i = new St;
											this.channels = [null, new kt(e, t, i), new kt(e + 1, r, i)], this.cmdHistory = {
												a: null,
												b: null
											}, this.logger = i
										}
										var t = e.prototype;
										return t.getHandler = function(e) {
											return this.channels[e].getHandler()
										}, t.setHandler = function(e, t) {
											this.channels[e].setHandler(t)
										}, t.addData = function(e, t) {
											var r, i, n, a = !1;
											this.logger.time = e;
											for (var s = 0; s < t.length; s += 2)
												if (i = 127 & t[s], n = 127 & t[s + 1], 0 !== i || 0 !== n) {
													if (this.logger.log(pt.DATA, "[" + Tt([t[s], t[s + 1]]) + "] -> (" + Tt([i, n]) + ")"), (r = this.parseCmd(i, n)) || (r = this.parseMidrow(i, n)), r || (r = this.parsePAC(i, n)), r || (r = this.parseBackgroundAttributes(i, n)), !r && (a = this.parseChars(i, n))) {
														var o = this.currentChannel;
														o && o > 0 ? this.channels[o].insertChars(a) : this.logger.log(pt.WARNING, "No channel found yet. TEXT-MODE?")
													}
													r || a || this.logger.log(pt.WARNING, "Couldn't parse cleaned data " + Tt([i, n]) + " orig: " + Tt([t[s], t[s + 1]]))
												}
										}, t.parseCmd = function(e, t) {
											var r = this.cmdHistory;
											if (!((20 === e || 28 === e || 21 === e || 29 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 33 && t <= 35)) return !1;
											if (Dt(e, t, r)) return Ot(null, null, r), this.logger.log(pt.DEBUG, "Repeated command (" + Tt([e, t]) + ") is dropped"), !0;
											var i = 20 === e || 21 === e || 23 === e ? 1 : 2,
												n = this.channels[i];
											return 20 === e || 21 === e || 28 === e || 29 === e ? 32 === t ? n.ccRCL() : 33 === t ? n.ccBS() : 34 === t ? n.ccAOF() : 35 === t ? n.ccAON() : 36 === t ? n.ccDER() : 37 === t ? n.ccRU(2) : 38 === t ? n.ccRU(3) : 39 === t ? n.ccRU(4) : 40 === t ? n.ccFON() : 41 === t ? n.ccRDC() : 42 === t ? n.ccTR() : 43 === t ? n.ccRTD() : 44 === t ? n.ccEDM() : 45 === t ? n.ccCR() : 46 === t ? n.ccENM() : 47 === t && n.ccEOC() : n.ccTO(t - 32), Ot(e, t, r), this.currentChannel = i, !0
										}, t.parseMidrow = function(e, t) {
											var r = 0;
											if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
												if ((r = 17 === e ? 1 : 2) !== this.currentChannel) return this.logger.log(pt.ERROR, "Mismatch channel in midrow parsing"), !1;
												var i = this.channels[r];
												return !!i && (i.ccMIDROW(t), this.logger.log(pt.DEBUG, "MIDROW (" + Tt([e, t]) + ")"), !0)
											}
											return !1
										}, t.parsePAC = function(e, t) {
											var r, i = this.cmdHistory;
											if (!((e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127 || (16 === e || 24 === e) && t >= 64 && t <= 95)) return !1;
											if (Dt(e, t, i)) return Ot(null, null, i), !0;
											var n = e <= 23 ? 1 : 2;
											r = t >= 64 && t <= 95 ? 1 === n ? mt[e] : yt[e] : 1 === n ? _t[e] : Et[e];
											var a = this.channels[n];
											return !!a && (a.setPAC(this.interpretPAC(r, t)), Ot(e, t, i), this.currentChannel = n, !0)
										}, t.interpretPAC = function(e, t) {
											var r = t,
												i = {
													color: null,
													italics: !1,
													indent: null,
													underline: !1,
													row: e
												};
											return r = t > 95 ? t - 96 : t - 64, i.underline = 1 == (1 & r), r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i
										}, t.parseChars = function(e, t) {
											var r, i = null,
												n = null;
											if (e >= 25 ? (r = 2, n = e - 8) : (r = 1, n = e), n >= 17 && n <= 19) {
												var a = t;
												a = 17 === n ? t + 80 : 18 === n ? t + 112 : t + 144, this.logger.log(pt.INFO, "Special char '" + vt(a) + "' in channel " + r), i = [a]
											} else e >= 32 && e <= 127 && (i = 0 === t ? [e] : [e, t]);
											if (i) {
												var s = Tt(i);
												this.logger.log(pt.DEBUG, "Char codes =  " + s.join(",")), Ot(e, t, this.cmdHistory)
											}
											return i
										}, t.parseBackgroundAttributes = function(e, t) {
											var r;
											if (!((16 === e || 24 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 45 && t <= 47)) return !1;
											var i = {};
											16 === e || 24 === e ? (r = Math.floor((t - 32) / 2), i.background = bt[r], t % 2 == 1 && (i.background = i.background + "_semi")) : 45 === t ? i.background = "transparent" : (i.foreground = "black", 47 === t && (i.underline = !0));
											var n = e <= 23 ? 1 : 2;
											return this.channels[n].setBkgData(i), Ot(e, t, this.cmdHistory), !0
										}, t.reset = function() {
											for (var e = 0; e < Object.keys(this.channels)
												.length; e++) {
												var t = this.channels[e];
												t && t.reset()
											}
											this.cmdHistory = {
												a: null,
												b: null
											}
										}, t.cueSplitAtTime = function(e) {
											for (var t = 0; t < this.channels.length; t++) {
												var r = this.channels[t];
												r && r.cueSplitAtTime(e)
											}
										}, e
									}(),
									It = function() {
										function e(e, t) {
											this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t
										}
										var t = e.prototype;
										return t.dispatchCue = function() {
											null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
										}, t.newCue = function(e, t, r) {
											(null === this.startTime || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
										}, t.reset = function() {
											this.cueRanges = []
										}, e
									}(),
									xt = function(e, t, r) {
										return e.substr(r || 0, t.length) === t
									},
									Pt = function(e) {
										for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
										return (t >>> 0)
											.toString()
									},
									Mt = {
										parse: function(e, t, r, i, n, a) {
											var s, o = Object(Fe.utf8ArrayToStr)(new Uint8Array(e))
												.trim()
												.replace(/\r\n|\n\r|\n|\r/g, "\n")
												.split("\n"),
												u = "00:00.000",
												c = 0,
												d = 0,
												h = 0,
												f = [],
												p = !0,
												g = !1,
												v = new ht;
											v.oncue = function(e) {
												var t = r[i],
													n = r.ccOffset;
												t && t.new && (void 0 !== d ? n = r.ccOffset = t.start : function(e, t, r) {
													var i = e[t],
														n = e[i.prevCC];
													if (!n || !n.new && i.new) return e.ccOffset = e.presentationOffset = i.start, void(i.new = !1);
													for (; n && n.new;) e.ccOffset += i.start - n.start, i.new = !1, n = e[(i = n)
														.prevCC];
													e.presentationOffset = r
												}(r, i, h)), h && (n = h - r.presentationOffset), g && (e.startTime += n - d, e.endTime += n - d), e.id = Pt(e.startTime.toString()) + Pt(e.endTime.toString()) + Pt(e.text), e.text = decodeURIComponent(encodeURIComponent(e.text)), e.endTime > 0 && f.push(e)
											}, v.onparsingerror = function(e) {
												s = e
											}, v.onflush = function() {
												s && a ? a(s) : n(f)
											}, o.forEach((function(e) {
												if (p) {
													if (xt(e, "X-TIMESTAMP-MAP=")) {
														p = !1, g = !0, e.substr(16)
															.split(",")
															.forEach((function(e) {
																xt(e, "LOCAL:") ? u = e.substr(6) : xt(e, "MPEGTS:") && (c = parseInt(e.substr(7)))
															}));
														try {
															t + (9e4 * r[i].start || 0) < 0 && (t += 8589934592), c -= t, d = function(e) {
																var t = parseInt(e.substr(-3)),
																	r = parseInt(e.substr(-6, 2)),
																	i = parseInt(e.substr(-9, 2)),
																	n = e.length > 9 ? parseInt(e.substr(0, e.indexOf(":"))) : 0;
																if (!(Object(l.isFiniteNumber)(t) && Object(l.isFiniteNumber)(r) && Object(l.isFiniteNumber)(i) && Object(l.isFiniteNumber)(n))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + e);
																return t += 1e3 * r, t += 6e4 * i, t += 36e5 * n
															}(u) / 1e3, h = c / 9e4
														} catch (e) {
															g = !1, s = e
														}
														return
													}
													"" === e && (p = !1)
												}
												v.parse(e + "\n")
											})), v.flush()
										}
									};

								function Ft(e) {
									if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return e
								}

								function Nt(e, t) {
									return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
								}
								var Bt = function(e) {
									var t, r;

									function i(t) {
										var r;
										if ((r = e.call(this, t, u.default.MEDIA_ATTACHING, u.default.MEDIA_DETACHING, u.default.FRAG_PARSING_USERDATA, u.default.FRAG_DECRYPTED, u.default.MANIFEST_LOADING, u.default.MANIFEST_LOADED, u.default.FRAG_LOADED, u.default.INIT_PTS_FOUND) || this)
											.media = null, r.config = void 0, r.enabled = !0, r.Cues = void 0, r.textTracks = [], r.tracks = [], r.initPTS = [], r.unparsedVttFrags = [], r.captionsTracks = {}, r.nonNativeCaptionsTracks = {}, r.captionsProperties = void 0, r.cea608Parser1 = void 0, r.cea608Parser2 = void 0, r.lastSn = -1, r.prevCC = -1, r.vttCCs = {
												ccOffset: 0,
												presentationOffset: 0,
												0: {
													start: 0,
													prevCC: -1,
													new: !1
												}
											}, r.hls = t, r.config = t.config, r.Cues = t.config.cueHandler, r.captionsProperties = {
												textTrack1: {
													label: r.config.captionsTextTrack1Label,
													languageCode: r.config.captionsTextTrack1LanguageCode
												},
												textTrack2: {
													label: r.config.captionsTextTrack2Label,
													languageCode: r.config.captionsTextTrack2LanguageCode
												},
												textTrack3: {
													label: r.config.captionsTextTrack3Label,
													languageCode: r.config.captionsTextTrack3LanguageCode
												},
												textTrack4: {
													label: r.config.captionsTextTrack4Label,
													languageCode: r.config.captionsTextTrack4LanguageCode
												}
											}, r.config.enableCEA708Captions) {
											var i = new It(Ft(r), "textTrack1"),
												n = new It(Ft(r), "textTrack2"),
												a = new It(Ft(r), "textTrack3"),
												s = new It(Ft(r), "textTrack4");
											r.cea608Parser1 = new Ct(1, i, n), r.cea608Parser2 = new Ct(3, a, s)
										}
										return r
									}
									r = e, (t = i)
										.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
									var n = i.prototype;
									return n.addCues = function(e, t, r, i, n) {
										for (var a, s, o, l, c = !1, d = n.length; d--;) {
											var h = n[d],
												f = (a = h[0], s = h[1], o = t, l = r, Math.min(s, l) - Math.max(a, o));
											if (f >= 0 && (h[0] = Math.min(h[0], t), h[1] = Math.max(h[1], r), c = !0, f / (r - t) > .5)) return
										}
										if (c || n.push([t, r]), this.config.renderTextTracksNatively) this.Cues.newCue(this.captionsTracks[e], t, r, i);
										else {
											var p = this.Cues.newCue(null, t, r, i);
											this.hls.trigger(u.default.CUES_PARSED, {
												type: "captions",
												cues: p,
												track: e
											})
										}
									}, n.onInitPtsFound = function(e) {
										var t = this,
											r = e.frag,
											i = e.id,
											n = e.initPTS,
											a = this.unparsedVttFrags;
										"main" === i && (this.initPTS[r.cc] = n), a.length && (this.unparsedVttFrags = [], a.forEach((function(e) {
											t.onFragLoaded(e)
										})))
									}, n.getExistingTrack = function(e) {
										var t = this.media;
										if (t)
											for (var r = 0; r < t.textTracks.length; r++) {
												var i = t.textTracks[r];
												if (i[e]) return i
											}
										return null
									}, n.createCaptionsTrack = function(e) {
										this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e)
									}, n.createNativeTrack = function(e) {
										if (!this.captionsTracks[e]) {
											var t = this.captionsProperties,
												r = this.captionsTracks,
												i = this.media,
												n = t[e],
												a = n.label,
												s = n.languageCode,
												o = this.getExistingTrack(e);
											if (o) r[e] = o, Be(r[e]), Ne(r[e], i);
											else {
												var l = this.createTextTrack("captions", a, s);
												l && (l[e] = !0, r[e] = l)
											}
										}
									}, n.createNonNativeTrack = function(e) {
										if (!this.nonNativeCaptionsTracks[e]) {
											var t = this.captionsProperties[e];
											if (t) {
												var r = {
													_id: e,
													label: t.label,
													kind: "captions",
													default: !!t.media && !!t.media.default,
													closedCaptions: t.media
												};
												this.nonNativeCaptionsTracks[e] = r, this.hls.trigger(u.default.NON_NATIVE_TEXT_TRACKS_FOUND, {
													tracks: [r]
												})
											}
										}
									}, n.createTextTrack = function(e, t, r) {
										var i = this.media;
										if (i) return i.addTextTrack(e, t, r)
									}, n.destroy = function() {
										e.prototype.destroy.call(this)
									}, n.onMediaAttaching = function(e) {
										this.media = e.media, this._cleanTracks()
									}, n.onMediaDetaching = function() {
										var e = this.captionsTracks;
										Object.keys(e)
											.forEach((function(t) {
												Be(e[t]), delete e[t]
											})), this.nonNativeCaptionsTracks = {}
									}, n.onManifestLoading = function() {
										this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
											ccOffset: 0,
											presentationOffset: 0,
											0: {
												start: 0,
												prevCC: -1,
												new: !1
											}
										}, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}
									}, n._cleanTracks = function() {
										var e = this.media;
										if (e) {
											var t = e.textTracks;
											if (t)
												for (var r = 0; r < t.length; r++) Be(t[r])
										}
									}, n.onManifestLoaded = function(e) {
										var t = this;
										if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset()), this.config.enableWebVTT) {
											var r = e.subtitles || [],
												i = this.tracks && r && this.tracks.length === r.length;
											if (this.tracks = e.subtitles || [], this.config.renderTextTracksNatively) {
												var n = this.media ? this.media.textTracks : [];
												this.tracks.forEach((function(e, r) {
													var i;
													if (r < n.length) {
														for (var a = null, s = 0; s < n.length; s++)
															if (Nt(n[s], e)) {
																a = n[s];
																break
															} a && (i = a)
													}
													i || (i = t.createTextTrack("subtitles", e.name, e.lang)), e.default ? i.mode = t.hls.subtitleDisplay ? "showing" : "hidden" : i.mode = "disabled", t.textTracks.push(i)
												}))
											} else if (!i && this.tracks && this.tracks.length) {
												var a = this.tracks.map((function(e) {
													return {
														label: e.name,
														kind: e.type.toLowerCase(),
														default: e.default,
														subtitleTrack: e
													}
												}));
												this.hls.trigger(u.default.NON_NATIVE_TEXT_TRACKS_FOUND, {
													tracks: a
												})
											}
										}
										this.config.enableCEA708Captions && e.captions && e.captions.forEach((function(e) {
											var r = /(?:CC|SERVICE)([1-4])/.exec(e.instreamId);
											if (r) {
												var i = "textTrack" + r[1],
													n = t.captionsProperties[i];
												n && (n.label = e.name, e.lang && (n.languageCode = e.lang), n.media = e)
											}
										}))
									}, n.onFragLoaded = function(e) {
										var t = e.frag,
											r = e.payload,
											i = this.cea608Parser1,
											n = this.cea608Parser2,
											a = this.initPTS,
											s = this.lastSn,
											o = this.unparsedVttFrags;
										if ("main" === t.type) {
											var c = t.sn;
											t.sn !== s + 1 && i && n && (i.reset(), n.reset()), this.lastSn = c
										} else if ("subtitle" === t.type)
											if (r.byteLength) {
												if (!Object(l.isFiniteNumber)(a[t.cc])) return o.push(e), void(a.length && this.hls.trigger(u.default.SUBTITLE_FRAG_PROCESSED, {
													success: !1,
													frag: t
												}));
												var d = t.decryptdata;
												null != d && null != d.key && "AES-128" === d.method || this._parseVTTs(t, r)
											} else this.hls.trigger(u.default.SUBTITLE_FRAG_PROCESSED, {
												success: !1,
												frag: t
											})
									}, n._parseVTTs = function(e, t) {
										var r = this,
											i = this.hls,
											n = this.prevCC,
											a = this.textTracks,
											s = this.vttCCs;
										s[e.cc] || (s[e.cc] = {
											start: e.start,
											prevCC: n,
											new: !0
										}, this.prevCC = e.cc), Mt.parse(t, this.initPTS[e.cc], s, e.cc, (function(t) {
											if (r.config.renderTextTracksNatively) {
												var n = a[e.level];
												if ("disabled" === n.mode) return void i.trigger(u.default.SUBTITLE_FRAG_PROCESSED, {
													success: !1,
													frag: e
												});
												t.forEach((function(e) {
													if (!n.cues.getCueById(e.id)) try {
														if (n.addCue(e), !n.cues.getCueById(e.id)) throw new Error("addCue is failed for: " + e)
													} catch (r) {
														c.logger.debug("Failed occurred on adding cues: " + r);
														var t = new window.TextTrackCue(e.startTime, e.endTime, e.text);
														t.id = e.id, n.addCue(t)
													}
												}))
											} else {
												var s = r.tracks[e.level].default ? "default" : "subtitles" + e.level;
												i.trigger(u.default.CUES_PARSED, {
													type: "subtitles",
													cues: t,
													track: s
												})
											}
											i.trigger(u.default.SUBTITLE_FRAG_PROCESSED, {
												success: !0,
												frag: e
											})
										}), (function(t) {
											c.logger.log("Failed to parse VTT cue: " + t), i.trigger(u.default.SUBTITLE_FRAG_PROCESSED, {
												success: !1,
												frag: e
											})
										}))
									}, n.onFragDecrypted = function(e) {
										var t = e.frag,
											r = e.payload;
										if ("subtitle" === t.type) {
											if (!Object(l.isFiniteNumber)(this.initPTS[t.cc])) return void this.unparsedVttFrags.push(e);
											this._parseVTTs(t, r)
										}
									}, n.onFragParsingUserdata = function(e) {
										var t = this.cea608Parser1,
											r = this.cea608Parser2;
										if (this.enabled && t && r)
											for (var i = 0; i < e.samples.length; i++) {
												var n = e.samples[i].bytes;
												if (n) {
													var a = this.extractCea608Data(n);
													t.addData(e.samples[i].pts, a[0]), r.addData(e.samples[i].pts, a[1])
												}
											}
									}, n.extractCea608Data = function(e) {
										for (var t = 31 & e[0], r = 2, i = [
											[],
											[]
										], n = 0; n < t; n++) {
											var a = e[r++],
												s = 127 & e[r++],
												o = 127 & e[r++],
												l = 3 & a;
											0 === s && 0 === o || 0 != (4 & a) && (0 !== l && 1 !== l || (i[l].push(s), i[l].push(o)))
										}
										return i
									}, i
								}(h);

								function Ut(e, t) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
									}
								}

								function jt(e) {
									for (var t = [], r = 0; r < e.length; r++) {
										var i = e[r];
										"subtitles" === i.kind && i.label && t.push(e[r])
									}
									return t
								}
								var Gt, Vt = function(e) {
										var t, r;

										function i(t) {
											var r;
											return (r = e.call(this, t, u.default.MEDIA_ATTACHED, u.default.MEDIA_DETACHING, u.default.MANIFEST_LOADED, u.default.SUBTITLE_TRACK_LOADED) || this)
												.tracks = [], r.trackId = -1, r.media = null, r.stopped = !0, r.subtitleDisplay = !0, r.queuedDefaultTrack = null, r
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n, a, s, o = i.prototype;
										return o.destroy = function() {
											h.prototype.destroy.call(this)
										}, o.onMediaAttached = function(e) {
											var t = this;
											this.media = e.media, this.media && (Object(l.isFiniteNumber)(this.queuedDefaultTrack) && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = null), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval((function() {
												t.trackChangeListener()
											}), 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
										}, o.onMediaDetaching = function() {
											this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), Object(l.isFiniteNumber)(this.subtitleTrack) && (this.queuedDefaultTrack = this.subtitleTrack), jt(this.media.textTracks)
												.forEach((function(e) {
													Be(e)
												})), this.subtitleTrack = -1, this.media = null)
										}, o.onManifestLoaded = function(e) {
											var t = this,
												r = e.subtitles || [];
											this.tracks = r, this.hls.trigger(u.default.SUBTITLE_TRACKS_UPDATED, {
												subtitleTracks: r
											}), r.forEach((function(e) {
												e.default && (t.media ? t.subtitleTrack = e.id : t.queuedDefaultTrack = e.id)
											}))
										}, o.onSubtitleTrackLoaded = function(e) {
											var t = this,
												r = e.id,
												i = e.details,
												n = this.trackId,
												a = this.tracks,
												s = a[n];
											if (r >= a.length || r !== n || !s || this.stopped) this._clearReloadTimer();
											else if (c.logger.log("subtitle track " + r + " loaded"), i.live) {
												var o = ne(s.details, i, e.stats.trequest);
												c.logger.log("Reloading live subtitle playlist in " + o + "ms"), this.timer = setTimeout((function() {
													t._loadCurrentTrack()
												}), o)
											} else this._clearReloadTimer()
										}, o.startLoad = function() {
											this.stopped = !1, this._loadCurrentTrack()
										}, o.stopLoad = function() {
											this.stopped = !0, this._clearReloadTimer()
										}, o._clearReloadTimer = function() {
											this.timer && (clearTimeout(this.timer), this.timer = null)
										}, o._loadCurrentTrack = function() {
											var e = this.trackId,
												t = this.tracks,
												r = this.hls,
												i = t[e];
											e < 0 || !i || i.details && !i.details.live || (c.logger.log("Loading subtitle track " + e), r.trigger(u.default.SUBTITLE_TRACK_LOADING, {
												url: i.url,
												id: e
											}))
										}, o._toggleTrackModes = function(e) {
											var t = this.media,
												r = this.subtitleDisplay,
												i = this.trackId;
											if (t) {
												var n = jt(t.textTracks);
												if (-1 === e)[].slice.call(n)
													.forEach((function(e) {
														e.mode = "disabled"
													}));
												else {
													var a = n[i];
													a && (a.mode = "disabled")
												}
												var s = n[e];
												s && (s.mode = r ? "showing" : "hidden")
											}
										}, o._setSubtitleTrackInternal = function(e) {
											var t = this.hls,
												r = this.tracks;
											!Object(l.isFiniteNumber)(e) || e < -1 || e >= r.length || (this.trackId = e, c.logger.log("Switching to subtitle track " + e), t.trigger(u.default.SUBTITLE_TRACK_SWITCH, {
												id: e
											}), this._loadCurrentTrack())
										}, o._onTextTracksChanged = function() {
											if (this.media && this.hls.config.renderTextTracksNatively) {
												for (var e = -1, t = jt(this.media.textTracks), r = 0; r < t.length; r++)
													if ("hidden" === t[r].mode) e = r;
													else if ("showing" === t[r].mode) {
													e = r;
													break
												}
												this.subtitleTrack = e
											}
										}, n = i, (a = [{
											key: "subtitleTracks",
											get: function() {
												return this.tracks
											}
										}, {
											key: "subtitleTrack",
											get: function() {
												return this.trackId
											},
											set: function(e) {
												this.trackId !== e && (this._toggleTrackModes(e), this._setSubtitleTrackInternal(e))
											}
										}]) && Ut(n.prototype, a), s && Ut(n, s), i
									}(h),
									Kt = r("./src/crypt/decrypter.js"),
									Ht = window.performance,
									Wt = function(e) {
										var t, r;

										function i(t, r) {
											var i;
											return (i = e.call(this, t, u.default.MEDIA_ATTACHED, u.default.MEDIA_DETACHING, u.default.ERROR, u.default.KEY_LOADED, u.default.FRAG_LOADED, u.default.SUBTITLE_TRACKS_UPDATED, u.default.SUBTITLE_TRACK_SWITCH, u.default.SUBTITLE_TRACK_LOADED, u.default.SUBTITLE_FRAG_PROCESSED, u.default.LEVEL_UPDATED) || this)
												.fragmentTracker = r, i.config = t.config, i.state = ge, i.tracks = [], i.tracksBuffered = [], i.currentTrackId = -1, i.decrypter = new Kt.default(t, t.config), i.lastAVStart = 0, i._onMediaSeeking = i.onMediaSeeking.bind(function(e) {
													if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
													return e
												}(i)), i
										}
										r = e, (t = i)
											.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
										var n = i.prototype;
										return n.onSubtitleFragProcessed = function(e) {
											var t = e.frag,
												r = e.success;
											if (this.fragPrevious = t, this.state = me, r) {
												var i = this.tracksBuffered[this.currentTrackId];
												if (i) {
													for (var n, a = t.start, s = 0; s < i.length; s++)
														if (a >= i[s].start && a <= i[s].end) {
															n = i[s];
															break
														} var o = t.start + t.duration;
													n ? n.end = o : (n = {
														start: a,
														end: o
													}, i.push(n))
												}
											}
										}, n.onMediaAttached = function(e) {
											var t = e.media;
											this.media = t, t.addEventListener("seeking", this._onMediaSeeking), this.state = me
										}, n.onMediaDetaching = function() {
											var e = this;
											this.media && (this.media.removeEventListener("seeking", this._onMediaSeeking), this.fragmentTracker.removeAllFragments(), this.currentTrackId = -1, this.tracks.forEach((function(t) {
												e.tracksBuffered[t.id] = []
											})), this.media = null, this.state = ge)
										}, n.onError = function(e) {
											var t = e.frag;
											t && "subtitle" === t.type && (this.state = me)
										}, n.onSubtitleTracksUpdated = function(e) {
											var t = this;
											c.logger.log("subtitle tracks updated"), this.tracksBuffered = [], this.tracks = e.subtitleTracks, this.tracks.forEach((function(e) {
												t.tracksBuffered[e.id] = []
											}))
										}, n.onSubtitleTrackSwitch = function(e) {
											if (this.currentTrackId = e.id, this.tracks && this.tracks.length && -1 !== this.currentTrackId) {
												var t = this.tracks[this.currentTrackId];
												t && t.details && this.setInterval(500)
											} else this.clearInterval()
										}, n.onSubtitleTrackLoaded = function(e) {
											var t = e.id,
												r = e.details,
												i = this.currentTrackId,
												n = this.tracks,
												a = n[i];
											t >= n.length || t !== i || !a || (r.live && function(e, t, r) {
												void 0 === r && (r = 0);
												var i = -1;
												ie(e, t, (function(e, t, r) {
													t.start = e.start, i = r
												}));
												var n = t.fragments;
												if (i < 0) n.forEach((function(e) {
													e.start += r
												}));
												else
													for (var a = i + 1; a < n.length; a++) n[a].start = n[a - 1].start + n[a - 1].duration
											}(a.details, r, this.lastAVStart), a.details = r, this.setInterval(500))
										}, n.onKeyLoaded = function() {
											this.state === ye && (this.state = me)
										}, n.onFragLoaded = function(e) {
											var t = this.fragCurrent,
												r = e.frag.decryptdata,
												i = e.frag,
												n = this.hls;
											if (this.state === Ee && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && r && r.key && "AES-128" === r.method) {
												var a = Ht.now();
												this.decrypter.decrypt(e.payload, r.key.buffer, r.iv.buffer, (function(e) {
													var t = Ht.now();
													n.trigger(u.default.FRAG_DECRYPTED, {
														frag: i,
														payload: e,
														stats: {
															tstart: a,
															tdecrypt: t
														}
													})
												}))
											}
										}, n.onLevelUpdated = function(e) {
											var t = e.details.fragments;
											this.lastAVStart = t.length ? t[0].start : 0
										}, n.doTick = function() {
											if (this.media) switch (this.state) {
												case me:
													var e = this.config,
														t = this.currentTrackId,
														r = this.fragmentTracker,
														i = this.media,
														n = this.tracks;
													if (!n || !n[t] || !n[t].details) break;
													var a, s = e.maxBufferHole,
														o = e.maxFragLookUpTolerance,
														l = Math.min(e.maxBufferLength, e.maxMaxBufferLength),
														d = K.bufferedInfo(this._getBuffered(), i.currentTime, s),
														h = d.end,
														f = d.len,
														p = n[t].details,
														g = p.fragments,
														v = g.length,
														m = g[v - 1].start + g[v - 1].duration;
													if (f > l) return;
													var _ = this.fragPrevious;
													h < m ? (_ && p.hasProgramDateTime && (a = le(g, _.endProgramDateTime, o)), a || (a = ue(_, g, h, o))) : a = g[v - 1], a && a.encrypted ? (c.logger.log("Loading key for " + a.sn), this.state = ye, this.hls.trigger(u.default.KEY_LOADING, {
														frag: a
													})) : a && r.getState(a) === N && (this.fragCurrent = a, this.state = Ee, this.hls.trigger(u.default.FRAG_LOADING, {
														frag: a
													}))
											} else this.state = me
										}, n.stopLoad = function() {
											this.lastAVStart = 0, e.prototype.stopLoad.call(this)
										}, n._getBuffered = function() {
											return this.tracksBuffered[this.currentTrackId] || []
										}, n.onMediaSeeking = function() {
											this.fragPrevious = null
										}, i
									}(De);
								! function(e) {
									e.WIDEVINE = "com.widevine.alpha", e.PLAYREADY = "com.microsoft.playready"
								}(Gt || (Gt = {}));
								var zt = "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null;

								function qt(e, t) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
									}
								}
								var Yt = function(e) {
									var t, r;

									function i(t) {
										var r;
										return (r = e.call(this, t, u.default.MEDIA_ATTACHED, u.default.MEDIA_DETACHED, u.default.MANIFEST_PARSED) || this)
											._widevineLicenseUrl = void 0, r._licenseXhrSetup = void 0, r._emeEnabled = void 0, r._requestMediaKeySystemAccess = void 0, r._drmSystemOptions = void 0, r._config = void 0, r._mediaKeysList = [], r._media = null, r._hasSetMediaKeys = !1, r._requestLicenseFailureCount = 0, r.mediaKeysPromise = null, r._onMediaEncrypted = function(e) {
												if (c.logger.log('Media is encrypted using "' + e.initDataType + '" init data type'), !r.mediaKeysPromise) return c.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), void r.hls.trigger(u.default.ERROR, {
													type: o.ErrorTypes.KEY_SYSTEM_ERROR,
													details: o.ErrorDetails.KEY_SYSTEM_NO_KEYS,
													fatal: !0
												});
												var t = function(t) {
													r._media && (r._attemptSetMediaKeys(t), r._generateRequestWithPreferredKeySession(e.initDataType, e.initData))
												};
												r.mediaKeysPromise.then(t)
													.catch(t)
											}, r._config = t.config, r._widevineLicenseUrl = r._config.widevineLicenseUrl, r._licenseXhrSetup = r._config.licenseXhrSetup, r._emeEnabled = r._config.emeEnabled, r._requestMediaKeySystemAccess = r._config.requestMediaKeySystemAccessFunc, r._drmSystemOptions = t.config.drmSystemOptions, r
									}
									r = e, (t = i)
										.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
									var n, a, s, l = i.prototype;
									return l.getLicenseServerUrl = function(e) {
										switch (e) {
											case Gt.WIDEVINE:
												if (!this._widevineLicenseUrl) break;
												return this._widevineLicenseUrl
										}
										throw new Error('no license server URL configured for key-system "' + e + '"')
									}, l._attemptKeySystemAccess = function(e, t, r) {
										var i = this,
											n = function(e, t, r, i) {
												switch (e) {
													case Gt.WIDEVINE:
														return function(e, t, r) {
															var i = {
																audioCapabilities: [],
																videoCapabilities: []
															};
															return e.forEach((function(e) {
																i.audioCapabilities.push({
																	contentType: 'audio/mp4; codecs="' + e + '"',
																	robustness: r.audioRobustness || ""
																})
															})), t.forEach((function(e) {
																i.videoCapabilities.push({
																	contentType: 'video/mp4; codecs="' + e + '"',
																	robustness: r.videoRobustness || ""
																})
															})), [i]
														}(t, r, i);
													default:
														throw new Error("Unknown key-system: " + e)
												}
											}(e, t, r, this._drmSystemOptions);
										c.logger.log("Requesting encrypted media key-system access");
										var a = this.requestMediaKeySystemAccess(e, n);
										this.mediaKeysPromise = a.then((function(t) {
											return i._onMediaKeySystemAccessObtained(e, t)
										})), a.catch((function(t) {
											c.logger.error('Failed to obtain key-system "' + e + '" access:', t)
										}))
									}, l._onMediaKeySystemAccessObtained = function(e, t) {
										var r = this;
										c.logger.log('Access for key-system "' + e + '" obtained');
										var i = {
											mediaKeysSessionInitialized: !1,
											mediaKeySystemAccess: t,
											mediaKeySystemDomain: e
										};
										this._mediaKeysList.push(i);
										var n = Promise.resolve()
											.then((function() {
												return t.createMediaKeys()
											}))
											.then((function(t) {
												return i.mediaKeys = t, c.logger.log('Media-keys created for key-system "' + e + '"'), r._onMediaKeysCreated(), t
											}));
										return n.catch((function(e) {
											c.logger.error("Failed to create media-keys:", e)
										})), n
									}, l._onMediaKeysCreated = function() {
										var e = this;
										this._mediaKeysList.forEach((function(t) {
											t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession))
										}))
									}, l._onNewMediaKeySession = function(e) {
										var t = this;
										c.logger.log("New key-system session " + e.sessionId), e.addEventListener("message", (function(r) {
											t._onKeySessionMessage(e, r.message)
										}), !1)
									}, l._onKeySessionMessage = function(e, t) {
										c.logger.log("Got EME message event, creating license request"), this._requestLicense(t, (function(t) {
											c.logger.log("Received license data (length: " + (t ? t.byteLength : t) + "), updating key-session"), e.update(t)
										}))
									}, l._attemptSetMediaKeys = function(e) {
										if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
										if (!this._hasSetMediaKeys) {
											var t = this._mediaKeysList[0];
											if (!t || !t.mediaKeys) return c.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(u.default.ERROR, {
												type: o.ErrorTypes.KEY_SYSTEM_ERROR,
												details: o.ErrorDetails.KEY_SYSTEM_NO_KEYS,
												fatal: !0
											});
											c.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(t.mediaKeys), this._hasSetMediaKeys = !0
										}
									}, l._generateRequestWithPreferredKeySession = function(e, t) {
										var r = this,
											i = this._mediaKeysList[0];
										if (!i) return c.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(u.default.ERROR, {
											type: o.ErrorTypes.KEY_SYSTEM_ERROR,
											details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
											fatal: !0
										});
										if (i.mediaKeysSessionInitialized) c.logger.warn("Key-Session already initialized but requested again");
										else {
											var n = i.mediaKeysSession;
											if (!n) return c.logger.error("Fatal: Media is encrypted but no key-session existing"), void this.hls.trigger(u.default.ERROR, {
												type: o.ErrorTypes.KEY_SYSTEM_ERROR,
												details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
												fatal: !0
											});
											if (!t) return c.logger.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger(u.default.ERROR, {
												type: o.ErrorTypes.KEY_SYSTEM_ERROR,
												details: o.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
												fatal: !0
											});
											c.logger.log('Generating key-session request for "' + e + '" init data type'), i.mediaKeysSessionInitialized = !0, n.generateRequest(e, t)
												.then((function() {
													c.logger.debug("Key-session generation succeeded")
												}))
												.catch((function(e) {
													c.logger.error("Error generating key-session request:", e), r.hls.trigger(u.default.ERROR, {
														type: o.ErrorTypes.KEY_SYSTEM_ERROR,
														details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
														fatal: !1
													})
												}))
										}
									}, l._createLicenseXhr = function(e, t, r) {
										var i = new XMLHttpRequest,
											n = this._licenseXhrSetup;
										try {
											if (n) try {
												n(i, e)
											} catch (t) {
												i.open("POST", e, !0), n(i, e)
											}
											i.readyState || i.open("POST", e, !0)
										} catch (e) {
											throw new Error("issue setting up KeySystem license XHR " + e)
										}
										return i.responseType = "arraybuffer", i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, e, t, r), i
									}, l._onLicenseRequestReadyStageChange = function(e, t, r, i) {
										switch (e.readyState) {
											case 4:
												if (200 === e.status) this._requestLicenseFailureCount = 0, c.logger.log("License request succeeded"), "arraybuffer" !== e.responseType && c.logger.warn("xhr response type was not set to the expected arraybuffer for license request"), i(e.response);
												else {
													if (c.logger.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3) return void this.hls.trigger(u.default.ERROR, {
														type: o.ErrorTypes.KEY_SYSTEM_ERROR,
														details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
														fatal: !0
													});
													var n = 3 - this._requestLicenseFailureCount + 1;
													c.logger.warn("Retrying license request, " + n + " attempts left"), this._requestLicense(r, i)
												}
										}
									}, l._generateLicenseRequestChallenge = function(e, t) {
										switch (e.mediaKeySystemDomain) {
											case Gt.WIDEVINE:
												return t
										}
										throw new Error("unsupported key-system: " + e.mediaKeySystemDomain)
									}, l._requestLicense = function(e, t) {
										c.logger.log("Requesting content license for key-system");
										var r = this._mediaKeysList[0];
										if (!r) return c.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(u.default.ERROR, {
											type: o.ErrorTypes.KEY_SYSTEM_ERROR,
											details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
											fatal: !0
										});
										try {
											var i = this.getLicenseServerUrl(r.mediaKeySystemDomain),
												n = this._createLicenseXhr(i, e, t);
											c.logger.log("Sending license request to URL: " + i);
											var a = this._generateLicenseRequestChallenge(r, e);
											n.send(a)
										} catch (e) {
											c.logger.error("Failure requesting DRM license: " + e), this.hls.trigger(u.default.ERROR, {
												type: o.ErrorTypes.KEY_SYSTEM_ERROR,
												details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
												fatal: !0
											})
										}
									}, l.onMediaAttached = function(e) {
										if (this._emeEnabled) {
											var t = e.media;
											this._media = t, t.addEventListener("encrypted", this._onMediaEncrypted)
										}
									}, l.onMediaDetached = function() {
										var e = this._media,
											t = this._mediaKeysList;
										e && (e.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(t.map((function(e) {
												if (e.mediaKeysSession) return e.mediaKeysSession.close()
													.catch((function() {}))
											})))
											.then((function() {
												return e.setMediaKeys(null)
											}))
											.catch((function() {})))
									}, l.onManifestParsed = function(e) {
										if (this._emeEnabled) {
											var t = e.levels.map((function(e) {
													return e.audioCodec
												})),
												r = e.levels.map((function(e) {
													return e.videoCodec
												}));
											this._attemptKeySystemAccess(Gt.WIDEVINE, t, r)
										}
									}, n = i, (a = [{
										key: "requestMediaKeySystemAccess",
										get: function() {
											if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
											return this._requestMediaKeySystemAccess
										}
									}]) && qt(n.prototype, a), s && qt(n, s), i
								}(h);

								function Xt(e, t) {
									var r = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var i = Object.getOwnPropertySymbols(e);
										t && (i = i.filter((function(t) {
											return Object.getOwnPropertyDescriptor(e, t)
												.enumerable
										}))), r.push.apply(r, i)
									}
									return r
								}

								function $t(e) {
									for (var t = 1; t < arguments.length; t++) {
										var r = null != arguments[t] ? arguments[t] : {};
										t % 2 ? Xt(Object(r), !0)
											.forEach((function(t) {
												Jt(e, t, r[t])
											})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xt(Object(r))
											.forEach((function(t) {
												Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
											}))
									}
									return e
								}

								function Jt(e, t, r) {
									return t in e ? Object.defineProperty(e, t, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : e[t] = r, e
								}
								var Qt = $t($t({
									autoStartLoad: !0,
									startPosition: -1,
									defaultAudioCodec: void 0,
									debug: !1,
									capLevelOnFPSDrop: !1,
									capLevelToPlayerSize: !1,
									initialLiveManifestSize: 1,
									maxBufferLength: 30,
									maxBufferSize: 6e7,
									maxBufferHole: .5,
									lowBufferWatchdogPeriod: .5,
									highBufferWatchdogPeriod: 3,
									nudgeOffset: .1,
									nudgeMaxRetry: 3,
									maxFragLookUpTolerance: .25,
									liveSyncDurationCount: 3,
									liveMaxLatencyDurationCount: 1 / 0,
									liveSyncDuration: void 0,
									liveMaxLatencyDuration: void 0,
									liveDurationInfinity: !1,
									liveBackBufferLength: 1 / 0,
									maxMaxBufferLength: 600,
									enableWorker: !0,
									enableSoftwareAES: !0,
									manifestLoadingTimeOut: 1e4,
									manifestLoadingMaxRetry: 1,
									manifestLoadingRetryDelay: 1e3,
									manifestLoadingMaxRetryTimeout: 64e3,
									startLevel: void 0,
									levelLoadingTimeOut: 1e4,
									levelLoadingMaxRetry: 4,
									levelLoadingRetryDelay: 1e3,
									levelLoadingMaxRetryTimeout: 64e3,
									fragLoadingTimeOut: 2e4,
									fragLoadingMaxRetry: 6,
									fragLoadingRetryDelay: 1e3,
									fragLoadingMaxRetryTimeout: 64e3,
									startFragPrefetch: !1,
									fpsDroppedMonitoringPeriod: 5e3,
									fpsDroppedMonitoringThreshold: .2,
									appendErrorMaxRetry: 3,
									loader: Je,
									fLoader: void 0,
									pLoader: void 0,
									xhrSetup: void 0,
									licenseXhrSetup: void 0,
									abrController: He,
									bufferController: ze,
									capLevelController: Ye,
									fpsController: $e,
									stretchShortVideoTrack: !1,
									maxAudioFramesDrift: 1,
									forceKeyFrameOnDiscontinuity: !0,
									abrEwmaFastLive: 3,
									abrEwmaSlowLive: 9,
									abrEwmaFastVoD: 3,
									abrEwmaSlowVoD: 9,
									abrEwmaDefaultEstimate: 5e5,
									abrBandWidthFactor: .95,
									abrBandWidthUpFactor: .7,
									abrMaxWithRealBitrate: !1,
									maxStarvationDelay: 4,
									maxLoadingDelay: 4,
									minAutoBitrate: 0,
									emeEnabled: !1,
									widevineLicenseUrl: void 0,
									drmSystemOptions: {},
									requestMediaKeySystemAccessFunc: zt,
									testBandwidth: !0
								}, {
									cueHandler: i,
									enableCEA708Captions: !0,
									enableWebVTT: !0,
									captionsTextTrack1Label: "English",
									captionsTextTrack1LanguageCode: "en",
									captionsTextTrack2Label: "Spanish",
									captionsTextTrack2LanguageCode: "es",
									captionsTextTrack3Label: "Unknown CC",
									captionsTextTrack3LanguageCode: "",
									captionsTextTrack4Label: "Unknown CC",
									captionsTextTrack4LanguageCode: "",
									renderTextTracksNatively: !0
								}), {}, {
									subtitleStreamController: Wt,
									subtitleTrackController: Vt,
									timelineController: Bt,
									audioStreamController: rt,
									audioTrackController: Ze,
									emeController: Yt
								});

								function Zt(e, t) {
									var r = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var i = Object.getOwnPropertySymbols(e);
										t && (i = i.filter((function(t) {
											return Object.getOwnPropertyDescriptor(e, t)
												.enumerable
										}))), r.push.apply(r, i)
									}
									return r
								}

								function er(e) {
									for (var t = 1; t < arguments.length; t++) {
										var r = null != arguments[t] ? arguments[t] : {};
										t % 2 ? Zt(Object(r), !0)
											.forEach((function(t) {
												tr(e, t, r[t])
											})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zt(Object(r))
											.forEach((function(t) {
												Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
											}))
									}
									return e
								}

								function tr(e, t, r) {
									return t in e ? Object.defineProperty(e, t, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : e[t] = r, e
								}

								function rr(e) {
									if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
									return e
								}

								function ir(e, t) {
									for (var r = 0; r < t.length; r++) {
										var i = t[r];
										i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
									}
								}

								function nr(e, t, r) {
									return t && ir(e.prototype, t), r && ir(e, r), e
								}
								var ar = function(e) {
									var t, r;

									function i(t) {
										var r;
										void 0 === t && (t = {}), (r = e.call(this) || this)
											.config = void 0, r._autoLevelCapping = void 0, r.abrController = void 0, r.capLevelController = void 0, r.levelController = void 0, r.streamController = void 0, r.networkControllers = void 0, r.audioTrackController = void 0, r.subtitleTrackController = void 0, r.emeController = void 0, r.coreComponents = void 0, r.media = null, r.url = null;
										var n = i.DefaultConfig;
										if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
										r.config = er(er({}, n), t);
										var a = rr(r)
											.config;
										if (void 0 !== a.liveMaxLatencyDurationCount && a.liveMaxLatencyDurationCount <= a.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
										if (void 0 !== a.liveMaxLatencyDuration && (void 0 === a.liveSyncDuration || a.liveMaxLatencyDuration <= a.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
										Object(c.enableLogs)(a.debug), r._autoLevelCapping = -1;
										var s = r.abrController = new a.abrController(rr(r)),
											o = new a.bufferController(rr(r)),
											l = r.capLevelController = new a.capLevelController(rr(r)),
											u = new a.fpsController(rr(r)),
											d = new P(rr(r)),
											h = new M(rr(r)),
											f = new F(rr(r)),
											p = new Ue(rr(r)),
											g = r.levelController = new Me(rr(r)),
											v = new G(rr(r)),
											m = [g, r.streamController = new xe(rr(r), v)],
											_ = a.audioStreamController;
										_ && m.push(new _(rr(r), v)), r.networkControllers = m;
										var y = [d, h, f, s, o, l, u, p, v];
										if (_ = a.audioTrackController) {
											var E = new _(rr(r));
											r.audioTrackController = E, y.push(E)
										}
										if (_ = a.subtitleTrackController) {
											var b = new _(rr(r));
											r.subtitleTrackController = b, m.push(b)
										}
										if (_ = a.emeController) {
											var S = new _(rr(r));
											r.emeController = S, y.push(S)
										}
										return (_ = a.subtitleStreamController) && m.push(new _(rr(r), v)), (_ = a.timelineController) && y.push(new _(rr(r))), r.coreComponents = y, r
									}
									r = e, (t = i)
										.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, i.isSupported = function() {
											return function() {
												var e = q();
												if (!e) return !1;
												var t = self.SourceBuffer || self.WebKitSourceBuffer,
													r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
													i = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
												return !!r && !!i
											}()
										}, nr(i, null, [{
											key: "version",
											get: function() {
												return "0.14.3"
											}
										}, {
											key: "Events",
											get: function() {
												return u.default
											}
										}, {
											key: "ErrorTypes",
											get: function() {
												return o.ErrorTypes
											}
										}, {
											key: "ErrorDetails",
											get: function() {
												return o.ErrorDetails
											}
										}, {
											key: "DefaultConfig",
											get: function() {
												return i.defaultConfig ? i.defaultConfig : Qt
											},
											set: function(e) {
												i.defaultConfig = e
											}
										}]);
									var n = i.prototype;
									return n.destroy = function() {
										c.logger.log("destroy"), this.trigger(u.default.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers)
											.forEach((function(e) {
												e.destroy()
											})), this.url = null, this.removeAllListeners(), this._autoLevelCapping = -1
									}, n.attachMedia = function(e) {
										c.logger.log("attachMedia"), this.media = e, this.trigger(u.default.MEDIA_ATTACHING, {
											media: e
										})
									}, n.detachMedia = function() {
										c.logger.log("detachMedia"), this.trigger(u.default.MEDIA_DETACHING), this.media = null
									}, n.loadSource = function(e) {
										e = s.buildAbsoluteURL(window.location.href, e, {
											alwaysNormalize: !0
										}), c.logger.log("loadSource:" + e), this.url = e, this.trigger(u.default.MANIFEST_LOADING, {
											url: e
										})
									}, n.startLoad = function(e) {
										void 0 === e && (e = -1), c.logger.log("startLoad(" + e + ")"), this.networkControllers.forEach((function(t) {
											t.startLoad(e)
										}))
									}, n.stopLoad = function() {
										c.logger.log("stopLoad"), this.networkControllers.forEach((function(e) {
											e.stopLoad()
										}))
									}, n.swapAudioCodec = function() {
										c.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
									}, n.recoverMediaError = function() {
										c.logger.log("recoverMediaError");
										var e = this.media;
										this.detachMedia(), e && this.attachMedia(e)
									}, n.removeLevel = function(e, t) {
										void 0 === t && (t = 0), this.levelController.removeLevel(e, t)
									}, nr(i, [{
										key: "levels",
										get: function() {
											return this.levelController.levels
										}
									}, {
										key: "currentLevel",
										get: function() {
											return this.streamController.currentLevel
										},
										set: function(e) {
											c.logger.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch()
										}
									}, {
										key: "nextLevel",
										get: function() {
											return this.streamController.nextLevel
										},
										set: function(e) {
											c.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
										}
									}, {
										key: "loadLevel",
										get: function() {
											return this.levelController.level
										},
										set: function(e) {
											c.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e
										}
									}, {
										key: "nextLoadLevel",
										get: function() {
											return this.levelController.nextLoadLevel
										},
										set: function(e) {
											this.levelController.nextLoadLevel = e
										}
									}, {
										key: "firstLevel",
										get: function() {
											return Math.max(this.levelController.firstLevel, this.minAutoLevel)
										},
										set: function(e) {
											c.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e
										}
									}, {
										key: "startLevel",
										get: function() {
											return this.levelController.startLevel
										},
										set: function(e) {
											c.logger.log("set startLevel:" + e), -1 !== e && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e
										}
									}, {
										key: "capLevelToPlayerSize",
										set: function(e) {
											var t = !!e;
											t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t)
										}
									}, {
										key: "autoLevelCapping",
										get: function() {
											return this._autoLevelCapping
										},
										set: function(e) {
											c.logger.log("set autoLevelCapping:" + e), this._autoLevelCapping = e
										}
									}, {
										key: "bandwidthEstimate",
										get: function() {
											var e = this.abrController._bwEstimator;
											return e ? e.getEstimate() : NaN
										}
									}, {
										key: "autoLevelEnabled",
										get: function() {
											return -1 === this.levelController.manualLevel
										}
									}, {
										key: "manualLevel",
										get: function() {
											return this.levelController.manualLevel
										}
									}, {
										key: "minAutoLevel",
										get: function() {
											for (var e = this.levels, t = this.config.minAutoBitrate, r = e ? e.length : 0, i = 0; i < r; i++)
												if ((e[i].realBitrate ? Math.max(e[i].realBitrate, e[i].bitrate) : e[i].bitrate) > t) return i;
											return 0
										}
									}, {
										key: "maxAutoLevel",
										get: function() {
											var e = this.levels,
												t = this.autoLevelCapping;
											return -1 === t && e && e.length ? e.length - 1 : t
										}
									}, {
										key: "nextAutoLevel",
										get: function() {
											return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
										},
										set: function(e) {
											this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
										}
									}, {
										key: "audioTracks",
										get: function() {
											var e = this.audioTrackController;
											return e ? e.audioTracks : []
										}
									}, {
										key: "audioTrack",
										get: function() {
											var e = this.audioTrackController;
											return e ? e.audioTrack : -1
										},
										set: function(e) {
											var t = this.audioTrackController;
											t && (t.audioTrack = e)
										}
									}, {
										key: "liveSyncPosition",
										get: function() {
											return this.streamController.liveSyncPosition
										}
									}, {
										key: "subtitleTracks",
										get: function() {
											var e = this.subtitleTrackController;
											return e ? e.subtitleTracks : []
										}
									}, {
										key: "subtitleTrack",
										get: function() {
											var e = this.subtitleTrackController;
											return e ? e.subtitleTrack : -1
										},
										set: function(e) {
											var t = this.subtitleTrackController;
											t && (t.subtitleTrack = e)
										}
									}, {
										key: "subtitleDisplay",
										get: function() {
											var e = this.subtitleTrackController;
											return !!e && e.subtitleDisplay
										},
										set: function(e) {
											var t = this.subtitleTrackController;
											t && (t.subtitleDisplay = e)
										}
									}]), i
								}(X);
								ar.defaultConfig = void 0
							},
						"./src/polyfills/number.js":
							/*!*********************************!*\
							  !*** ./src/polyfills/number.js ***!
							  \*********************************/
							/*! exports provided: isFiniteNumber, MAX_SAFE_INTEGER */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "isFiniteNumber", (function() {
									return i
								})), r.d(t, "MAX_SAFE_INTEGER", (function() {
									return n
								}));
								var i = Number.isFinite || function(e) {
										return "number" == typeof e && isFinite(e)
									},
									n = Number.MAX_SAFE_INTEGER || 9007199254740991
							},
						"./src/utils/get-self-scope.js":
							/*!*************************************!*\
							  !*** ./src/utils/get-self-scope.js ***!
							  \*************************************/
							/*! exports provided: getSelfScope */
							function(e, t, r) {
								"use strict";

								function i() {
									return "undefined" == typeof window ? self : window
								}
								r.r(t), r.d(t, "getSelfScope", (function() {
									return i
								}))
							},
						"./src/utils/logger.js":
							/*!*****************************!*\
							  !*** ./src/utils/logger.js ***!
							  \*****************************/
							/*! exports provided: enableLogs, logger */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "enableLogs", (function() {
									return c
								})), r.d(t, "logger", (function() {
									return d
								}));
								var i = r( /*! ./get-self-scope */ "./src/utils/get-self-scope.js");

								function n() {}
								var a = {
										trace: n,
										debug: n,
										log: n,
										warn: n,
										info: n,
										error: n
									},
									s = a;

								function o(e, t) {
									return t = "[" + e + "] > " + t
								}
								var l = Object(i.getSelfScope)();

								function u(e) {
									var t = l.console[e];
									return t ? function() {
										for (var r = arguments.length, i = new Array(r), n = 0; n < r; n++) i[n] = arguments[n];
										i[0] && (i[0] = o(e, i[0])), t.apply(l.console, i)
									} : n
								}
								var c = function(e) {
										if (l.console && !0 === e || "object" == typeof e) {
											! function(e) {
												for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
												r.forEach((function(t) {
													s[t] = e[t] ? e[t].bind(e) : u(t)
												}))
											}(e, "debug", "log", "info", "warn", "error");
											try {
												s.log()
											} catch (e) {
												s = a
											}
										} else s = a
									},
									d = s
							}
					})
					.default
			}, e.exports = i())
		}, function(e, t, r) {
			(function(t, r) {
				/*!
				 * @overview es6-promise - a tiny implementation of Promises/A+.
				 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
				 * @license   Licensed under MIT license
				 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
				 * @version   v4.2.8+1e68dce6
				 */
				var i;
				i = function() {
					"use strict";

					function e(e) {
						return "function" == typeof e
					}
					var i = Array.isArray ? Array.isArray : function(e) {
							return "[object Array]" === Object.prototype.toString.call(e)
						},
						n = 0,
						a = void 0,
						s = void 0,
						o = function(e, t) {
							p[n] = e, p[n + 1] = t, 2 === (n += 2) && (s ? s(g) : E())
						},
						l = "undefined" != typeof window ? window : void 0,
						u = l || {},
						c = u.MutationObserver || u.WebKitMutationObserver,
						d = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t),
						h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

					function f() {
						var e = setTimeout;
						return function() {
							return e(g, 1)
						}
					}
					var p = new Array(1e3);

					function g() {
						for (var e = 0; e < n; e += 2)(0, p[e])(p[e + 1]), p[e] = void 0, p[e + 1] = void 0;
						n = 0
					}
					var v, m, _, y, E = void 0;

					function b(e, t) {
						var r = this,
							i = new this.constructor(A);
						void 0 === i[T] && P(i);
						var n = r._state;
						if (n) {
							var a = arguments[n - 1];
							o((function() {
								return I(n, i, a, r._result)
							}))
						} else D(r, i, e, t);
						return i
					}

					function S(e) {
						if (e && "object" == typeof e && e.constructor === this) return e;
						var t = new this(A);
						return R(t, e), t
					}
					d ? E = function() {
						return t.nextTick(g)
					} : c ? (m = 0, _ = new c(g), y = document.createTextNode(""), _.observe(y, {
						characterData: !0
					}), E = function() {
						y.data = m = ++m % 2
					}) : h ? ((v = new MessageChannel)
						.port1.onmessage = g, E = function() {
							return v.port2.postMessage(0)
						}) : E = void 0 === l ? function() {
						try {
							var e = Function("return this")()
								.require("vertx");
							return void 0 !== (a = e.runOnLoop || e.runOnContext) ? function() {
								a(g)
							} : f()
						} catch (e) {
							return f()
						}
					}() : f();
					var T = Math.random()
						.toString(36)
						.substring(2);

					function A() {}

					function w(t, r, i) {
						r.constructor === t.constructor && i === b && r.constructor.resolve === S ? function(e, t) {
							1 === t._state ? k(e, t._result) : 2 === t._state ? O(e, t._result) : D(t, void 0, (function(t) {
								return R(e, t)
							}), (function(t) {
								return O(e, t)
							}))
						}(t, r) : void 0 === i ? k(t, r) : e(i) ? function(e, t, r) {
							o((function(e) {
								var i = !1,
									n = function(e, t, r, i) {
										try {
											e.call(t, r, i)
										} catch (e) {
											return e
										}
									}(r, t, (function(r) {
										i || (i = !0, t !== r ? R(e, r) : k(e, r))
									}), (function(t) {
										i || (i = !0, O(e, t))
									}), e._label);
								!i && n && (i = !0, O(e, n))
							}), e)
						}(t, r, i) : k(t, r)
					}

					function R(e, t) {
						if (e === t) O(e, new TypeError("You cannot resolve a promise with itself"));
						else if (n = typeof(i = t), null === i || "object" !== n && "function" !== n) k(e, t);
						else {
							var r = void 0;
							try {
								r = t.then
							} catch (t) {
								return void O(e, t)
							}
							w(e, t, r)
						}
						var i, n
					}

					function L(e) {
						e._onerror && e._onerror(e._result), C(e)
					}

					function k(e, t) {
						void 0 === e._state && (e._result = t, e._state = 1, 0 !== e._subscribers.length && o(C, e))
					}

					function O(e, t) {
						void 0 === e._state && (e._state = 2, e._result = t, o(L, e))
					}

					function D(e, t, r, i) {
						var n = e._subscribers,
							a = n.length;
						e._onerror = null, n[a] = t, n[a + 1] = r, n[a + 2] = i, 0 === a && e._state && o(C, e)
					}

					function C(e) {
						var t = e._subscribers,
							r = e._state;
						if (0 !== t.length) {
							for (var i = void 0, n = void 0, a = e._result, s = 0; s < t.length; s += 3) i = t[s], n = t[s + r], i ? I(r, i, n, a) : n(a);
							e._subscribers.length = 0
						}
					}

					function I(t, r, i, n) {
						var a = e(i),
							s = void 0,
							o = void 0,
							l = !0;
						if (a) {
							try {
								s = i(n)
							} catch (e) {
								l = !1, o = e
							}
							if (r === s) return void O(r, new TypeError("A promises callback cannot return that same promise."))
						} else s = n;
						void 0 !== r._state || (a && l ? R(r, s) : !1 === l ? O(r, o) : 1 === t ? k(r, s) : 2 === t && O(r, s))
					}
					var x = 0;

					function P(e) {
						e[T] = x++, e._state = void 0, e._result = void 0, e._subscribers = []
					}
					var M = function() {
							function e(e, t) {
								this._instanceConstructor = e, this.promise = new e(A), this.promise[T] || P(this.promise), i(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && k(this.promise, this._result))) : O(this.promise, new Error("Array Methods must be provided an Array"))
							}
							return e.prototype._enumerate = function(e) {
								for (var t = 0; void 0 === this._state && t < e.length; t++) this._eachEntry(e[t], t)
							}, e.prototype._eachEntry = function(e, t) {
								var r = this._instanceConstructor,
									i = r.resolve;
								if (i === S) {
									var n = void 0,
										a = void 0,
										s = !1;
									try {
										n = e.then
									} catch (e) {
										s = !0, a = e
									}
									if (n === b && void 0 !== e._state) this._settledAt(e._state, t, e._result);
									else if ("function" != typeof n) this._remaining--, this._result[t] = e;
									else if (r === F) {
										var o = new r(A);
										s ? O(o, a) : w(o, e, n), this._willSettleAt(o, t)
									} else this._willSettleAt(new r((function(t) {
										return t(e)
									})), t)
								} else this._willSettleAt(i(e), t)
							}, e.prototype._settledAt = function(e, t, r) {
								var i = this.promise;
								void 0 === i._state && (this._remaining--, 2 === e ? O(i, r) : this._result[t] = r), 0 === this._remaining && k(i, this._result)
							}, e.prototype._willSettleAt = function(e, t) {
								var r = this;
								D(e, void 0, (function(e) {
									return r._settledAt(1, t, e)
								}), (function(e) {
									return r._settledAt(2, t, e)
								}))
							}, e
						}(),
						F = function() {
							function t(e) {
								this[T] = x++, this._result = this._state = void 0, this._subscribers = [], A !== e && ("function" != typeof e && function() {
									throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
								}(), this instanceof t ? function(e, t) {
									try {
										t((function(t) {
											R(e, t)
										}), (function(t) {
											O(e, t)
										}))
									} catch (t) {
										O(e, t)
									}
								}(this, e) : function() {
									throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
								}())
							}
							return t.prototype.catch = function(e) {
								return this.then(null, e)
							}, t.prototype.finally = function(t) {
								var r = this.constructor;
								return e(t) ? this.then((function(e) {
									return r.resolve(t())
										.then((function() {
											return e
										}))
								}), (function(e) {
									return r.resolve(t())
										.then((function() {
											throw e
										}))
								})) : this.then(t, t)
							}, t
						}();
					return F.prototype.then = b, F.all = function(e) {
						return new M(this, e)
							.promise
					}, F.race = function(e) {
						var t = this;
						return i(e) ? new t((function(r, i) {
							for (var n = e.length, a = 0; a < n; a++) t.resolve(e[a])
								.then(r, i)
						})) : new t((function(e, t) {
							return t(new TypeError("You must pass an array to race."))
						}))
					}, F.resolve = S, F.reject = function(e) {
						var t = new this(A);
						return O(t, e), t
					}, F._setScheduler = function(e) {
						s = e
					}, F._setAsap = function(e) {
						o = e
					}, F._asap = o, F.polyfill = function() {
						var e = void 0;
						if (void 0 !== r) e = r;
						else if ("undefined" != typeof self) e = self;
						else try {
							e = Function("return this")()
						} catch (e) {
							throw new Error("polyfill failed because global object is unavailable in this environment")
						}
						var t = e.Promise;
						if (t) {
							var i = null;
							try {
								i = Object.prototype.toString.call(t.resolve())
							} catch (e) {}
							if ("[object Promise]" === i && !t.cast) return
						}
						e.Promise = F
					}, F.Promise = F, F
				}, e.exports = i()
			})
			.call(this, r(352), r(70))
		}, function(e, t) {
			var r, i, n = e.exports = {};

			function a() {
				throw new Error("setTimeout has not been defined")
			}

			function s() {
				throw new Error("clearTimeout has not been defined")
			}

			function o(e) {
				if (r === setTimeout) return setTimeout(e, 0);
				if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
				try {
					return r(e, 0)
				} catch (t) {
					try {
						return r.call(null, e, 0)
					} catch (t) {
						return r.call(this, e, 0)
					}
				}
			}! function() {
				try {
					r = "function" == typeof setTimeout ? setTimeout : a
				} catch (e) {
					r = a
				}
				try {
					i = "function" == typeof clearTimeout ? clearTimeout : s
				} catch (e) {
					i = s
				}
			}();
			var l, u = [],
				c = !1,
				d = -1;

			function h() {
				c && l && (c = !1, l.length ? u = l.concat(u) : d = -1, u.length && f())
			}

			function f() {
				if (!c) {
					var e = o(h);
					c = !0;
					for (var t = u.length; t;) {
						for (l = u, u = []; ++d < t;) l && l[d].run();
						d = -1, t = u.length
					}
					l = null, c = !1,
						function(e) {
							if (i === clearTimeout) return clearTimeout(e);
							if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
							try {
								i(e)
							} catch (t) {
								try {
									return i.call(null, e)
								} catch (t) {
									return i.call(this, e)
								}
							}
						}(e)
				}
			}

			function p(e, t) {
				this.fun = e, this.array = t
			}

			function g() {}
			n.nextTick = function(e) {
				var t = new Array(arguments.length - 1);
				if (arguments.length > 1)
					for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
				u.push(new p(e, t)), 1 !== u.length || c || o(f)
			}, p.prototype.run = function() {
				this.fun.apply(null, this.array)
			}, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = g, n.addListener = g, n.once = g, n.off = g, n.removeListener = g, n.removeAllListeners = g, n.emit = g, n.prependListener = g, n.prependOnceListener = g, n.listeners = function(e) {
				return []
			}, n.binding = function(e) {
				throw new Error("process.binding is not supported")
			}, n.cwd = function() {
				return "/"
			}, n.chdir = function(e) {
				throw new Error("process.chdir is not supported")
			}, n.umask = function() {
				return 0
			}
		}, function(e, t) {
			var r = arguments[3],
				i = arguments[4],
				n = arguments[5],
				a = JSON.stringify;
			e.exports = function(e, t) {
				for (var s, o = Object.keys(n), l = 0, u = o.length; l < u; l++) {
					var c = o[l],
						d = n[c].exports;
					if (d === e || d && d.default === e) {
						s = c;
						break
					}
				}
				if (!s) {
					s = Math.floor(Math.pow(16, 8) * Math.random())
						.toString(16);
					var h = {};
					for (l = 0, u = o.length; l < u; l++) {
						h[c = o[l]] = c
					}
					i[s] = ["function(require,module,exports){" + e + "(self); }", h]
				}
				var f = Math.floor(Math.pow(16, 8) * Math.random())
					.toString(16),
					p = {};
				p[s] = s, i[f] = ["function(require,module,exports){var f = require(" + a(s) + ");(f.default ? f.default : f)(self);}", p];
				var g = {};
				! function e(t) {
					for (var r in g[t] = !0, i[t][1]) {
						var n = i[t][1][r];
						g[n] || e(n)
					}
				}(f);
				var v = "(" + r + ")({" + Object.keys(g)
					.map((function(e) {
						return a(e) + ":[" + i[e][0] + "," + a(i[e][1]) + "]"
					}))
					.join(",") + "},{},[" + a(f) + "])",
					m = window.URL || window.webkitURL || window.mozURL || window.msURL,
					_ = new Blob([v], {
						type: "text/javascript"
					});
				if (t && t.bare) return _;
				var y = m.createObjectURL(_),
					E = new Worker(y);
				return E.objectURL = y, E
			}
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = function() {
				for (var e = navigator.userAgent, t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], r = !0, i = 0; i < t.length; i++)
					if (e.indexOf(t[i]) > 0) {
						r = !1;
						break
					} return r
			}
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}(),
				n = r(69);

			function a(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			var s = function() {
				function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
						r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					a(this, e);
					var i = {
						color: "#ffffff",
						fontSize: 14,
						fontFamily: "微软雅黑",
						fontWeight: 600,
						text: t,
						area: .5,
						leftDom: null,
						rightDom: null
					};
					this.option = (0, n.assign)({}, i, r)
				}
				return i(e, [{
					key: "getText",
					value: function() {
						return this.option.text
					}
				}, {
					key: "getColor",
					value: function() {
						return this.option.color
					}
				}, {
					key: "getFontSize",
					value: function() {
						return this.option.fontSize + "px"
					}
				}, {
					key: "getFontFamily",
					value: function() {
						return this.option.fontFamily
					}
				}, {
					key: "getMinTop",
					value: function(e) {
						return e.clientHeight - e.clientHeight * (1 - this.option.area) + 80
					}
				}, {
					key: "getLeftDom",
					value: function() {
						return this.option.leftDom
					}
				}, {
					key: "getRightDom",
					value: function() {
						return this.option.rightDom
					}
				}, {
					key: "getFontWeight",
					value: function() {
						return this.option.fontWeight
					}
				}]), e
			}();
			t.default = s
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}(),
				n = s(r(48)),
				a = s(r(54));

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = function(e) {
				function t() {
					return function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t),
						function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, (t.__proto__ || Object.getPrototypeOf(t))
							.call(this))
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), i(t, [{
					key: "create_",
					value: function() {
						var e = this,
							t = document.createElement("button");
						t.className = "sv-nextBtn sv-font sv-next", t.innerHTML = "&#xe67d;", this.element_.appendChild(t), t.onclick = function() {
							e.dispatchEvent(a.default.CLICK)
						}
					}
				}]), t
			}(n.default);
			t.default = o
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}(),
				n = s(r(48)),
				a = s(r(54));

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = function(e) {
				function t() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					var e = function(e, t) {
						if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !t || "object" != typeof t && "function" != typeof t ? e : t
					}(this, (t.__proto__ || Object.getPrototypeOf(t))
						.call(this));
					return e.isFull_ = !1, e.type_ = "fullScreenMenu", e
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), i(t, [{
					key: "create_",
					value: function() {
						var e = this,
							t = this.fullScreenBtn_ = document.createElement("button");
						t.className = "sv-nextBtn sv-font sv-fullScreen", t.innerHTML = "&#xe6cc;", this.element_.appendChild(t), t.onclick = function() {
							e.isFull_ ? (e.video_.cancelFullScreen_(), t.innerHTML = "&#xe6cc;", e.dispatchEvent(a.default.CANCELFULLSCREEN), e.isFull_ = !1) : (e.video_.fullScreen_(), t.innerHTML = "&#xe71f;", e.dispatchEvent(a.default.FULLSCREEN), e.isFull_ = !0)
						}
					}
				}]), t
			}(n.default);
			t.default = o
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i, n = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}(),
				a = r(48);

			function s(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function o(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var l = function(e) {
				function t() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					s(this, t);
					var r = {
							speeds: ["0.5", "1.0", "1.25", "1.5", "2.0"]
						},
						i = o(this, (t.__proto__ || Object.getPrototypeOf(t))
							.call(this));
					return i.option = Object.assign({}, r, e), i.active_ = "1.0", i.activeLi_ = null, i.icon_ = {
						"1.0": "&#xe752;",
						.5: "&#xe754;",
						1.25: "&#xe757;",
						1.5: "&#xe758;",
						"2.0": "&#xe759;"
					}, i
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), n(t, [{
					key: "create_",
					value: function() {
						var e = this,
							t = this.speed_ = document.createElement("div");
						t.className = "sv-speedBtn sv-font sv-next";
						var r = this.span_ = document.createElement("span");
						t.appendChild(r), r.innerHTML = this.icon_[this.active_], this.element_.appendChild(t);
						var i = document.createElement("div");
						i.className = "sv-speed-btn hide", t.appendChild(i);
						var n = document.createElement("ul");
						this.option.speeds.forEach((function(t) {
							var i = document.createElement("li");
							i.setAttribute("id", t), e.active_ === t && (i.className = "sv-active", e.activeLi_ = i), i.innerHTML = t + "X", i.onclick = function() {
								e.video_.setPlaybackRate_(Number(t)), e.active_ = t, r.innerHTML = e.icon_[e.active_], e.activeLi_.classList.remove("sv-active"), i.className = "sv-active", e.activeLi_ = i
							}, n.appendChild(i)
						})), i.appendChild(n), t.onmouseover = function() {
							i.classList.remove("hide")
						};
						var a = null;
						t.onmouseleave = function() {
							a = setTimeout((function() {
								i.classList.add("hide"), clearTimeout(a)
							}), 500)
						}, i.onmouseover = function(t) {
							i.classList.remove("hide"), null !== e.video_.timer_ && clearTimeout(e.video_.timer_), e.video_.control_.classList.remove("hide"), e.video_.progressBar_.classList.remove("hide"), clearTimeout(a), (t || window.event)
								.stopPropagation()
						}, i.onmouseleave = function() {
							i.classList.remove("hide")
						}
					}
				}, {
					key: "setSpeed",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1.0";
						if (this.option.speeds.indexOf(e) >= 0) {
							this.active_ = e, this.span_.innerHTML = this.icon_[this.active_];
							var t = document.getElementById(e);
							null !== this.activeLi_ && this.activeLi_.classList.remove("sv-active"), this.activeLi_ = t, this.video_.setPlaybackRate_(Number(e))
						}
					}
				}]), t
			}(((i = a) && i.__esModule ? i : {
					default: i
				})
				.default);
			t.default = l
		}, function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}(),
				n = l(r(48)),
				a = l(r(54)),
				s = l(r(139)),
				o = r(69);

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function u(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function c(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var d = function(e) {
				function t() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					u(this, t);
					var r = {
							width: 240,
							colors: ["#FE0302", "#FF7204", "#FFAA02", "#FFD302", "#00CD00", "#A0EE00", "#00CD00", "#019899", "#4266BE", "#89D5FF", "#CC0273", "#222222", "#9B9B9B", "#FFFFFF"],
							activeColor: "#FFFFFF",
							value: ""
						},
						i = c(this, (t.__proto__ || Object.getPrototypeOf(t))
							.call(this));
					return i.option = (0, o.assign)({}, r, e), i.activeLi_ = null, i
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), i(t, [{
					key: "create_",
					value: function() {
						var e = this,
							t = document.createElement("div");
						t.className = "sv-barrage", this.element_.appendChild(t);
						var r = document.createElement("div");
						r.className = "sv-barrage-a", t.appendChild(r);
						var i = this.barrageInput_ = document.createElement("input");
						i.className = "sv-barrage-input", i.placeholder = "发个弹幕见证当下", t.appendChild(i);
						var n = document.createElement("button");
						n.className = "sv-barrage-button", n.innerHTML = "发送", t.appendChild(n);
						var o = document.createElement("div");
						o.innerHTML = "&#xe62b;", o.className = "sv-barrage-font sv-font sv-fontBtn", t.appendChild(o);
						var l = document.createElement("div");
						l.className = "sv-apanel hide", t.appendChild(l);
						var u = document.createElement("div");
						u.className = "sv-apanel-item", l.appendChild(u);
						var c = document.createElement("span");
						c.innerHTML = "颜色", u.appendChild(c);
						var d = document.createElement("ul");
						this.option.colors.forEach((function(t) {
							var r = document.createElement("li");
							r.setAttribute("color", t), r.style.backgroundColor = t, d.appendChild(r), r.onclick = function() {
								e.option.activeColor = r.getAttribute("color"), r.classList.add("activeColor"), e.activeLi_.classList.remove("activeColor"), e.activeLi_ = r
							}, "#FFFFFF" === t && (e.activeLi_ = r, r.classList.add("activeColor"))
						})), u.appendChild(d), this.setWidth(), n.onclick = function() {
							var t = e.option.activeColor;
							e.video_.addBarrage_(new s.default(i.value, {
								color: t
							})), e.option.value = i.value, i.value = "", e.dispatchEvent(a.default.SEND)
						}, i.onkeydown = function(e) {
							13 === e.keyCode && n.click()
						}, o.onmouseover = function() {
							l.classList.remove("hide")
						};
						var h = null;
						o.onmouseleave = function() {
							h = setTimeout((function() {
								l.classList.add("hide"), clearTimeout(h)
							}), 500)
						}, l.onmouseover = function() {
							l.classList.remove("hide"), clearTimeout(h)
						}, l.onmouseleave = function() {
							l.classList.add("hide")
						}
					}
				}, {
					key: "setBarrage_",
					value: function(e) {
						this.video_.addBarrage_(e)
					}
				}, {
					key: "setWidth",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 240;
						this.barrageInput_.style.width = e + "px", this.option.width = e
					}
				}]), t
			}(n.default);
			t.default = d
		}, function(e, t, r) {
			"use strict";
			r.r(t);
			class i {
				static install() {
					Object.setPrototypeOf = Object.setPrototypeOf || function(e, t) {
							return e.__proto__ = t, e
						}, Object.assign = Object.assign || function(e) {
							if (null == e) throw new TypeError("Cannot convert undefined or null to object");
							let t = Object(e);
							for (let e = 1; e < arguments.length; e++) {
								let r = arguments[e];
								if (null != r)
									for (let e in r) r.hasOwnProperty(e) && (t[e] = r[e])
							}
							return t
						}, "function" != typeof self.Promise && r(351)
						.polyfill()
				}
			}
			i.install();
			var n = i,
				a = r(11),
				s = r.n(a);
			class o {
				static e(e, t) {
					e && !o.FORCE_GLOBAL_TAG || (e = o.GLOBAL_TAG);
					let r = `[${e}] > ${t}`;
					o.ENABLE_CALLBACK && o.emitter.emit("log", "error", r), o.ENABLE_ERROR && (console.error ? console.error(r) : console.warn ? console.warn(r) : console.log(r))
				}
				static i(e, t) {
					e && !o.FORCE_GLOBAL_TAG || (e = o.GLOBAL_TAG);
					let r = `[${e}] > ${t}`;
					o.ENABLE_CALLBACK && o.emitter.emit("log", "info", r), o.ENABLE_INFO && (console.info ? console.info(r) : console.log(r))
				}
				static w(e, t) {
					e && !o.FORCE_GLOBAL_TAG || (e = o.GLOBAL_TAG);
					let r = `[${e}] > ${t}`;
					o.ENABLE_CALLBACK && o.emitter.emit("log", "warn", r), o.ENABLE_WARN && (console.warn ? console.warn(r) : console.log(r))
				}
				static d(e, t) {
					e && !o.FORCE_GLOBAL_TAG || (e = o.GLOBAL_TAG);
					let r = `[${e}] > ${t}`;
					o.ENABLE_CALLBACK && o.emitter.emit("log", "debug", r), o.ENABLE_DEBUG && (console.debug ? console.debug(r) : console.log(r))
				}
				static v(e, t) {
					e && !o.FORCE_GLOBAL_TAG || (e = o.GLOBAL_TAG);
					let r = `[${e}] > ${t}`;
					o.ENABLE_CALLBACK && o.emitter.emit("log", "verbose", r), o.ENABLE_VERBOSE && console.log(r)
				}
			}
			o.GLOBAL_TAG = "flv.js", o.FORCE_GLOBAL_TAG = !1, o.ENABLE_ERROR = !0, o.ENABLE_INFO = !0, o.ENABLE_WARN = !0, o.ENABLE_DEBUG = !0, o.ENABLE_VERBOSE = !0, o.ENABLE_CALLBACK = !1, o.emitter = new s.a;
			var l = o;
			var u = class {
				constructor() {
					this._firstCheckpoint = 0, this._lastCheckpoint = 0, this._intervalBytes = 0, this._totalBytes = 0, this._lastSecondBytes = 0, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now
				}
				reset() {
					this._firstCheckpoint = this._lastCheckpoint = 0, this._totalBytes = this._intervalBytes = 0, this._lastSecondBytes = 0
				}
				addBytes(e) {
					0 === this._firstCheckpoint ? (this._firstCheckpoint = this._now(), this._lastCheckpoint = this._firstCheckpoint, this._intervalBytes += e, this._totalBytes += e) : this._now() - this._lastCheckpoint < 1e3 ? (this._intervalBytes += e, this._totalBytes += e) : (this._lastSecondBytes = this._intervalBytes, this._intervalBytes = e, this._totalBytes += e, this._lastCheckpoint = this._now())
				}
				get currentKBps() {
					this.addBytes(0);
					let e = (this._now() - this._lastCheckpoint) / 1e3;
					return 0 == e && (e = 1), this._intervalBytes / e / 1024
				}
				get lastSecondKBps() {
					return this.addBytes(0), 0 !== this._lastSecondBytes ? this._lastSecondBytes / 1024 : this._now() - this._lastCheckpoint >= 500 ? this.currentKBps : 0
				}
				get averageKBps() {
					let e = (this._now() - this._firstCheckpoint) / 1e3;
					return this._totalBytes / e / 1024
				}
			};
			class c {
				constructor(e) {
					this._message = e
				}
				get name() {
					return "RuntimeException"
				}
				get message() {
					return this._message
				}
				toString() {
					return this.name + ": " + this.message
				}
			}
			class d extends c {
				constructor(e) {
					super(e)
				}
				get name() {
					return "IllegalStateException"
				}
			}
			class h extends c {
				constructor(e) {
					super(e)
				}
				get name() {
					return "InvalidArgumentException"
				}
			}
			class f extends c {
				constructor(e) {
					super(e)
				}
				get name() {
					return "NotImplementedException"
				}
			}
			const p = {
					kIdle: 0,
					kConnecting: 1,
					kBuffering: 2,
					kError: 3,
					kComplete: 4
				},
				g = {
					OK: "OK",
					EXCEPTION: "Exception",
					HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid",
					CONNECTING_TIMEOUT: "ConnectingTimeout",
					EARLY_EOF: "EarlyEof",
					UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof"
				};
			class v {
				constructor(e) {
					this._type = e || "undefined", this._status = p.kIdle, this._needStash = !1, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null
				}
				destroy() {
					this._status = p.kIdle, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null
				}
				isWorking() {
					return this._status === p.kConnecting || this._status === p.kBuffering
				}
				get type() {
					return this._type
				}
				get status() {
					return this._status
				}
				get needStashBuffer() {
					return this._needStash
				}
				get onContentLengthKnown() {
					return this._onContentLengthKnown
				}
				set onContentLengthKnown(e) {
					this._onContentLengthKnown = e
				}
				get onURLRedirect() {
					return this._onURLRedirect
				}
				set onURLRedirect(e) {
					this._onURLRedirect = e
				}
				get onDataArrival() {
					return this._onDataArrival
				}
				set onDataArrival(e) {
					this._onDataArrival = e
				}
				get onError() {
					return this._onError
				}
				set onError(e) {
					this._onError = e
				}
				get onComplete() {
					return this._onComplete
				}
				set onComplete(e) {
					this._onComplete = e
				}
				open(e, t) {
					throw new f("Unimplemented abstract function!")
				}
				abort() {
					throw new f("Unimplemented abstract function!")
				}
			}
			let m = {};
			! function() {
				let e = self.navigator.userAgent.toLowerCase(),
					t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(e) || [],
					r = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(android)/.exec(e) || /(windows)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || [],
					i = {
						browser: t[5] || t[3] || t[1] || "",
						version: t[2] || t[4] || "0",
						majorVersion: t[4] || t[2] || "0",
						platform: r[0] || ""
					},
					n = {};
				if (i.browser) {
					n[i.browser] = !0;
					let e = i.majorVersion.split(".");
					n.version = {
						major: parseInt(i.majorVersion, 10),
						string: i.version
					}, e.length > 1 && (n.version.minor = parseInt(e[1], 10)), e.length > 2 && (n.version.build = parseInt(e[2], 10))
				}
				if (i.platform && (n[i.platform] = !0), (n.chrome || n.opr || n.safari) && (n.webkit = !0), n.rv || n.iemobile) {
					n.rv && delete n.rv;
					let e = "msie";
					i.browser = e, n[e] = !0
				}
				if (n.edge) {
					delete n.edge;
					let e = "msedge";
					i.browser = e, n[e] = !0
				}
				if (n.opr) {
					let e = "opera";
					i.browser = e, n[e] = !0
				}
				if (n.safari && n.android) {
					let e = "android";
					i.browser = e, n[e] = !0
				}
				n.name = i.browser, n.platform = i.platform;
				for (let e in m) m.hasOwnProperty(e) && delete m[e];
				Object.assign(m, n)
			}();
			var _ = m;
			var y = class extends v {
				static isSupported() {
					try {
						let e = _.msedge && _.version.minor >= 15048,
							t = !_.msedge || e;
						return self.fetch && self.ReadableStream && t
					} catch (e) {
						return !1
					}
				}
				constructor(e, t) {
					super("fetch-stream-loader"), this.TAG = "FetchStreamLoader", this._seekHandler = e, this._config = t, this._needStash = !0, this._requestAbort = !1, this._contentLength = null, this._receivedLength = 0
				}
				destroy() {
					this.isWorking() && this.abort(), super.destroy()
				}
				open(e, t) {
					this._dataSource = e, this._range = t;
					let r = e.url;
					this._config.reuseRedirectedURL && null != e.redirectedURL && (r = e.redirectedURL);
					let i = this._seekHandler.getConfig(r, t),
						n = new self.Headers;
					if ("object" == typeof i.headers) {
						let e = i.headers;
						for (let t in e) e.hasOwnProperty(t) && n.append(t, e[t])
					}
					let a = {
						method: "GET",
						headers: n,
						mode: "cors",
						cache: "default",
						referrerPolicy: "no-referrer-when-downgrade"
					};
					if ("object" == typeof this._config.headers)
						for (let e in this._config.headers) n.append(e, this._config.headers[e]);
					!1 === e.cors && (a.mode = "same-origin"), e.withCredentials && (a.credentials = "include"), e.referrerPolicy && (a.referrerPolicy = e.referrerPolicy), this._status = p.kConnecting, self.fetch(i.url, a)
						.then(e => {
							if (this._requestAbort) return this._requestAbort = !1, void(this._status = p.kIdle);
							if (e.ok && e.status >= 200 && e.status <= 299) {
								if (e.url !== i.url && this._onURLRedirect) {
									let t = this._seekHandler.removeURLParameters(e.url);
									this._onURLRedirect(t)
								}
								let t = e.headers.get("Content-Length");
								return null != t && (this._contentLength = parseInt(t), 0 !== this._contentLength && this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength)), this._pump.call(this, e.body.getReader())
							}
							if (this._status = p.kError, !this._onError) throw new c("FetchStreamLoader: Http code invalid, " + e.status + " " + e.statusText);
							this._onError(g.HTTP_STATUS_CODE_INVALID, {
								code: e.status,
								msg: e.statusText
							})
						})
						.catch(e => {
							if (this._status = p.kError, !this._onError) throw e;
							this._onError(g.EXCEPTION, {
								code: -1,
								msg: e.message
							})
						})
				}
				abort() {
					this._requestAbort = !0
				}
				_pump(e) {
					return e.read()
						.then(t => {
							if (t.done)
								if (null !== this._contentLength && this._receivedLength < this._contentLength) {
									this._status = p.kError;
									let e = g.EARLY_EOF,
										t = {
											code: -1,
											msg: "Fetch stream meet Early-EOF"
										};
									if (!this._onError) throw new c(t.msg);
									this._onError(e, t)
								} else this._status = p.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1);
							else {
								if (!0 === this._requestAbort) return this._requestAbort = !1, this._status = p.kComplete, e.cancel();
								this._status = p.kBuffering;
								let r = t.value.buffer,
									i = this._range.from + this._receivedLength;
								this._receivedLength += r.byteLength, this._onDataArrival && this._onDataArrival(r, i, this._receivedLength), this._pump(e)
							}
						})
						.catch(e => {
							if (11 === e.code && _.msedge) return;
							this._status = p.kError;
							let t = 0,
								r = null;
							if (19 !== e.code && "network error" !== e.message || !(null === this._contentLength || null !== this._contentLength && this._receivedLength < this._contentLength) ? (t = g.EXCEPTION, r = {
								code: e.code,
								msg: e.message
							}) : (t = g.EARLY_EOF, r = {
								code: e.code,
								msg: "Fetch stream meet Early-EOF"
							}), !this._onError) throw new c(r.msg);
							this._onError(t, r)
						})
				}
			};
			var E = class extends v {
				static isSupported() {
					try {
						let e = new XMLHttpRequest;
						return e.open("GET", "https://example.com", !0), e.responseType = "moz-chunked-arraybuffer", "moz-chunked-arraybuffer" === e.responseType
					} catch (e) {
						return l.w("MozChunkedLoader", e.message), !1
					}
				}
				constructor(e, t) {
					super("xhr-moz-chunked-loader"), this.TAG = "MozChunkedLoader", this._seekHandler = e, this._config = t, this._needStash = !0, this._xhr = null, this._requestAbort = !1, this._contentLength = null, this._receivedLength = 0
				}
				destroy() {
					this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onloadend = null, this._xhr.onerror = null, this._xhr = null), super.destroy()
				}
				open(e, t) {
					this._dataSource = e, this._range = t;
					let r = e.url;
					this._config.reuseRedirectedURL && null != e.redirectedURL && (r = e.redirectedURL);
					let i = this._seekHandler.getConfig(r, t);
					this._requestURL = i.url;
					let n = this._xhr = new XMLHttpRequest;
					if (n.open("GET", i.url, !0), n.responseType = "moz-chunked-arraybuffer", n.onreadystatechange = this._onReadyStateChange.bind(this), n.onprogress = this._onProgress.bind(this), n.onloadend = this._onLoadEnd.bind(this), n.onerror = this._onXhrError.bind(this), e.withCredentials && (n.withCredentials = !0), "object" == typeof i.headers) {
						let e = i.headers;
						for (let t in e) e.hasOwnProperty(t) && n.setRequestHeader(t, e[t])
					}
					if ("object" == typeof this._config.headers) {
						let e = this._config.headers;
						for (let t in e) e.hasOwnProperty(t) && n.setRequestHeader(t, e[t])
					}
					this._status = p.kConnecting, n.send()
				}
				abort() {
					this._requestAbort = !0, this._xhr && this._xhr.abort(), this._status = p.kComplete
				}
				_onReadyStateChange(e) {
					let t = e.target;
					if (2 === t.readyState) {
						if (null != t.responseURL && t.responseURL !== this._requestURL && this._onURLRedirect) {
							let e = this._seekHandler.removeURLParameters(t.responseURL);
							this._onURLRedirect(e)
						}
						if (0 !== t.status && (t.status < 200 || t.status > 299)) {
							if (this._status = p.kError, !this._onError) throw new c("MozChunkedLoader: Http code invalid, " + t.status + " " + t.statusText);
							this._onError(g.HTTP_STATUS_CODE_INVALID, {
								code: t.status,
								msg: t.statusText
							})
						} else this._status = p.kBuffering
					}
				}
				_onProgress(e) {
					if (this._status === p.kError) return;
					null === this._contentLength && null !== e.total && 0 !== e.total && (this._contentLength = e.total, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));
					let t = e.target.response,
						r = this._range.from + this._receivedLength;
					this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, r, this._receivedLength)
				}
				_onLoadEnd(e) {
					!0 !== this._requestAbort ? this._status !== p.kError && (this._status = p.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1)) : this._requestAbort = !1
				}
				_onXhrError(e) {
					this._status = p.kError;
					let t = 0,
						r = null;
					if (this._contentLength && e.loaded < this._contentLength ? (t = g.EARLY_EOF, r = {
						code: -1,
						msg: "Moz-Chunked stream meet Early-Eof"
					}) : (t = g.EXCEPTION, r = {
						code: -1,
						msg: e.constructor.name + " " + e.type
					}), !this._onError) throw new c(r.msg);
					this._onError(t, r)
				}
			};
			var b = class extends v {
				static isSupported() {
					try {
						let e = new XMLHttpRequest;
						return e.open("GET", "https://example.com", !0), e.responseType = "arraybuffer", "arraybuffer" === e.responseType
					} catch (e) {
						return l.w("RangeLoader", e.message), !1
					}
				}
				constructor(e, t) {
					super("xhr-range-loader"), this.TAG = "RangeLoader", this._seekHandler = e, this._config = t, this._needStash = !1, this._chunkSizeKBList = [128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 5120, 6144, 7168, 8192], this._currentChunkSizeKB = 384, this._currentSpeedNormalized = 0, this._zeroSpeedChunkCount = 0, this._xhr = null, this._speedSampler = new u, this._requestAbort = !1, this._waitForTotalLength = !1, this._totalLengthReceived = !1, this._currentRequestURL = null, this._currentRedirectedURL = null, this._currentRequestRange = null, this._totalLength = null, this._contentLength = null, this._receivedLength = 0, this._lastTimeLoaded = 0
				}
				destroy() {
					this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr = null), super.destroy()
				}
				get currentSpeed() {
					return this._speedSampler.lastSecondKBps
				}
				open(e, t) {
					this._dataSource = e, this._range = t, this._status = p.kConnecting;
					let r = !1;
					null != this._dataSource.filesize && 0 !== this._dataSource.filesize && (r = !0, this._totalLength = this._dataSource.filesize), this._totalLengthReceived || r ? this._openSubRange() : (this._waitForTotalLength = !0, this._internalOpen(this._dataSource, {
						from: 0,
						to: -1
					}))
				}
				_openSubRange() {
					let e = 1024 * this._currentChunkSizeKB,
						t = this._range.from + this._receivedLength,
						r = t + e;
					null != this._contentLength && r - this._range.from >= this._contentLength && (r = this._range.from + this._contentLength - 1), this._currentRequestRange = {
						from: t,
						to: r
					}, this._internalOpen(this._dataSource, this._currentRequestRange)
				}
				_internalOpen(e, t) {
					this._lastTimeLoaded = 0;
					let r = e.url;
					this._config.reuseRedirectedURL && (null != this._currentRedirectedURL ? r = this._currentRedirectedURL : null != e.redirectedURL && (r = e.redirectedURL));
					let i = this._seekHandler.getConfig(r, t);
					this._currentRequestURL = i.url;
					let n = this._xhr = new XMLHttpRequest;
					if (n.open("GET", i.url, !0), n.responseType = "arraybuffer", n.onreadystatechange = this._onReadyStateChange.bind(this), n.onprogress = this._onProgress.bind(this), n.onload = this._onLoad.bind(this), n.onerror = this._onXhrError.bind(this), e.withCredentials && (n.withCredentials = !0), "object" == typeof i.headers) {
						let e = i.headers;
						for (let t in e) e.hasOwnProperty(t) && n.setRequestHeader(t, e[t])
					}
					if ("object" == typeof this._config.headers) {
						let e = this._config.headers;
						for (let t in e) e.hasOwnProperty(t) && n.setRequestHeader(t, e[t])
					}
					n.send()
				}
				abort() {
					this._requestAbort = !0, this._internalAbort(), this._status = p.kComplete
				}
				_internalAbort() {
					this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr.abort(), this._xhr = null)
				}
				_onReadyStateChange(e) {
					let t = e.target;
					if (2 === t.readyState) {
						if (null != t.responseURL) {
							let e = this._seekHandler.removeURLParameters(t.responseURL);
							t.responseURL !== this._currentRequestURL && e !== this._currentRedirectedURL && (this._currentRedirectedURL = e, this._onURLRedirect && this._onURLRedirect(e))
						}
						if (t.status >= 200 && t.status <= 299) {
							if (this._waitForTotalLength) return;
							this._status = p.kBuffering
						} else {
							if (this._status = p.kError, !this._onError) throw new c("RangeLoader: Http code invalid, " + t.status + " " + t.statusText);
							this._onError(g.HTTP_STATUS_CODE_INVALID, {
								code: t.status,
								msg: t.statusText
							})
						}
					}
				}
				_onProgress(e) {
					if (this._status === p.kError) return;
					if (null === this._contentLength) {
						let t = !1;
						if (this._waitForTotalLength) {
							this._waitForTotalLength = !1, this._totalLengthReceived = !0, t = !0;
							let r = e.total;
							this._internalAbort(), null != r & 0 !== r && (this._totalLength = r)
						}
						if (-1 === this._range.to ? this._contentLength = this._totalLength - this._range.from : this._contentLength = this._range.to - this._range.from + 1, t) return void this._openSubRange();
						this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength)
					}
					let t = e.loaded - this._lastTimeLoaded;
					this._lastTimeLoaded = e.loaded, this._speedSampler.addBytes(t)
				}
				_normalizeSpeed(e) {
					let t = this._chunkSizeKBList,
						r = t.length - 1,
						i = 0,
						n = 0,
						a = r;
					if (e < t[0]) return t[0];
					for (; n <= a;) {
						if (i = n + Math.floor((a - n) / 2), i === r || e >= t[i] && e < t[i + 1]) return t[i];
						t[i] < e ? n = i + 1 : a = i - 1
					}
				}
				_onLoad(e) {
					if (this._status === p.kError) return;
					if (this._waitForTotalLength) return void(this._waitForTotalLength = !1);
					this._lastTimeLoaded = 0;
					let t = this._speedSampler.lastSecondKBps;
					if (0 === t && (this._zeroSpeedChunkCount++, this._zeroSpeedChunkCount >= 3 && (t = this._speedSampler.currentKBps)), 0 !== t) {
						let e = this._normalizeSpeed(t);
						this._currentSpeedNormalized !== e && (this._currentSpeedNormalized = e, this._currentChunkSizeKB = e)
					}
					let r = e.target.response,
						i = this._range.from + this._receivedLength;
					this._receivedLength += r.byteLength;
					let n = !1;
					null != this._contentLength && this._receivedLength < this._contentLength ? this._openSubRange() : n = !0, this._onDataArrival && this._onDataArrival(r, i, this._receivedLength), n && (this._status = p.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1))
				}
				_onXhrError(e) {
					this._status = p.kError;
					let t = 0,
						r = null;
					if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength ? (t = g.EARLY_EOF, r = {
						code: -1,
						msg: "RangeLoader meet Early-Eof"
					}) : (t = g.EXCEPTION, r = {
						code: -1,
						msg: e.constructor.name + " " + e.type
					}), !this._onError) throw new c(r.msg);
					this._onError(t, r)
				}
			};
			var S = class extends v {
				static isSupported() {
					try {
						return void 0 !== self.WebSocket
					} catch (e) {
						return !1
					}
				}
				constructor() {
					super("websocket-loader"), this.TAG = "WebSocketLoader", this._needStash = !0, this._ws = null, this._requestAbort = !1, this._receivedLength = 0
				}
				destroy() {
					this._ws && this.abort(), super.destroy()
				}
				open(e) {
					try {
						let t = this._ws = new self.WebSocket(e.url);
						t.binaryType = "arraybuffer", t.onopen = this._onWebSocketOpen.bind(this), t.onclose = this._onWebSocketClose.bind(this), t.onmessage = this._onWebSocketMessage.bind(this), t.onerror = this._onWebSocketError.bind(this), this._status = p.kConnecting
					} catch (e) {
						this._status = p.kError;
						let t = {
							code: e.code,
							msg: e.message
						};
						if (!this._onError) throw new c(t.msg);
						this._onError(g.EXCEPTION, t)
					}
				}
				abort() {
					let e = this._ws;
					!e || 0 !== e.readyState && 1 !== e.readyState || (this._requestAbort = !0, e.close()), this._ws = null, this._status = p.kComplete
				}
				_onWebSocketOpen(e) {
					this._status = p.kBuffering
				}
				_onWebSocketClose(e) {
					!0 !== this._requestAbort ? (this._status = p.kComplete, this._onComplete && this._onComplete(0, this._receivedLength - 1)) : this._requestAbort = !1
				}
				_onWebSocketMessage(e) {
					if (e.data instanceof ArrayBuffer) this._dispatchArrayBuffer(e.data);
					else if (e.data instanceof Blob) {
						let t = new FileReader;
						t.onload = () => {
							this._dispatchArrayBuffer(t.result)
						}, t.readAsArrayBuffer(e.data)
					} else {
						this._status = p.kError;
						let t = {
							code: -1,
							msg: "Unsupported WebSocket message type: " + e.data.constructor.name
						};
						if (!this._onError) throw new c(t.msg);
						this._onError(g.EXCEPTION, t)
					}
				}
				_dispatchArrayBuffer(e) {
					let t = e,
						r = this._receivedLength;
					this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, r, this._receivedLength)
				}
				_onWebSocketError(e) {
					this._status = p.kError;
					let t = {
						code: e.code,
						msg: e.message
					};
					if (!this._onError) throw new c(t.msg);
					this._onError(g.EXCEPTION, t)
				}
			};
			var T = class {
				constructor(e) {
					this._zeroStart = e || !1
				}
				getConfig(e, t) {
					let r = {};
					if (0 !== t.from || -1 !== t.to) {
						let e;
						e = -1 !== t.to ? `bytes=${t.from.toString()}-${t.to.toString()}` : `bytes=${t.from.toString()}-`, r.Range = e
					} else this._zeroStart && (r.Range = "bytes=0-");
					return {
						url: e,
						headers: r
					}
				}
				removeURLParameters(e) {
					return e
				}
			};
			var A = class {
				constructor(e, t) {
					this._startName = e, this._endName = t
				}
				getConfig(e, t) {
					let r = e;
					if (0 !== t.from || -1 !== t.to) {
						let e = !0; - 1 === r.indexOf("?") && (r += "?", e = !1), e && (r += "&"), r += `${this._startName}=${t.from.toString()}`, -1 !== t.to && (r += `&${this._endName}=${t.to.toString()}`)
					}
					return {
						url: r,
						headers: {}
					}
				}
				removeURLParameters(e) {
					let t = e.split("?")[0],
						r = void 0,
						i = e.indexOf("?"); - 1 !== i && (r = e.substring(i + 1));
					let n = "";
					if (null != r && r.length > 0) {
						let e = r.split("&");
						for (let t = 0; t < e.length; t++) {
							let r = e[t].split("="),
								i = t > 0;
							r[0] !== this._startName && r[0] !== this._endName && (i && (n += "&"), n += e[t])
						}
					}
					return 0 === n.length ? t : t + "?" + n
				}
			};
			var w = class {
				constructor(e, t, r) {
					this.TAG = "IOController", this._config = t, this._extraData = r, this._stashInitialSize = 393216, null != t.stashInitialSize && t.stashInitialSize > 0 && (this._stashInitialSize = t.stashInitialSize), this._stashUsed = 0, this._stashSize = this._stashInitialSize, this._bufferSize = 3145728, this._stashBuffer = new ArrayBuffer(this._bufferSize), this._stashByteStart = 0, this._enableStash = !0, !1 === t.enableStashBuffer && (this._enableStash = !1), this._loader = null, this._loaderClass = null, this._seekHandler = null, this._dataSource = e, this._isWebSocketURL = /wss?:\/\/(.+?)/.test(e.url), this._refTotalLength = e.filesize ? e.filesize : null, this._totalLength = this._refTotalLength, this._fullRequestFlag = !1, this._currentRange = null, this._redirectedURL = null, this._speedNormalized = 0, this._speedSampler = new u, this._speedNormalizeList = [64, 128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096], this._isEarlyEofReconnecting = !1, this._paused = !1, this._resumeFrom = 0, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._selectSeekHandler(), this._selectLoader(), this._createLoader()
				}
				destroy() {
					this._loader.isWorking() && this._loader.abort(), this._loader.destroy(), this._loader = null, this._loaderClass = null, this._dataSource = null, this._stashBuffer = null, this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0, this._currentRange = null, this._speedSampler = null, this._isEarlyEofReconnecting = !1, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._extraData = null
				}
				isWorking() {
					return this._loader && this._loader.isWorking() && !this._paused
				}
				isPaused() {
					return this._paused
				}
				get status() {
					return this._loader.status
				}
				get extraData() {
					return this._extraData
				}
				set extraData(e) {
					this._extraData = e
				}
				get onDataArrival() {
					return this._onDataArrival
				}
				set onDataArrival(e) {
					this._onDataArrival = e
				}
				get onSeeked() {
					return this._onSeeked
				}
				set onSeeked(e) {
					this._onSeeked = e
				}
				get onError() {
					return this._onError
				}
				set onError(e) {
					this._onError = e
				}
				get onComplete() {
					return this._onComplete
				}
				set onComplete(e) {
					this._onComplete = e
				}
				get onRedirect() {
					return this._onRedirect
				}
				set onRedirect(e) {
					this._onRedirect = e
				}
				get onRecoveredEarlyEof() {
					return this._onRecoveredEarlyEof
				}
				set onRecoveredEarlyEof(e) {
					this._onRecoveredEarlyEof = e
				}
				get currentURL() {
					return this._dataSource.url
				}
				get hasRedirect() {
					return null != this._redirectedURL || null != this._dataSource.redirectedURL
				}
				get currentRedirectedURL() {
					return this._redirectedURL || this._dataSource.redirectedURL
				}
				get currentSpeed() {
					return this._loaderClass === b ? this._loader.currentSpeed : this._speedSampler.lastSecondKBps
				}
				get loaderType() {
					return this._loader.type
				}
				_selectSeekHandler() {
					let e = this._config;
					if ("range" === e.seekType) this._seekHandler = new T(this._config.rangeLoadZeroStart);
					else if ("param" === e.seekType) {
						let t = e.seekParamStart || "bstart",
							r = e.seekParamEnd || "bend";
						this._seekHandler = new A(t, r)
					} else {
						if ("custom" !== e.seekType) throw new h("Invalid seekType in config: " + e.seekType);
						if ("function" != typeof e.customSeekHandler) throw new h("Custom seekType specified in config but invalid customSeekHandler!");
						this._seekHandler = new e.customSeekHandler
					}
				}
				_selectLoader() {
					if (null != this._config.customLoader) this._loaderClass = this._config.customLoader;
					else if (this._isWebSocketURL) this._loaderClass = S;
					else if (y.isSupported()) this._loaderClass = y;
					else if (E.isSupported()) this._loaderClass = E;
					else {
						if (!b.isSupported()) throw new c("Your browser doesn't support xhr with arraybuffer responseType!");
						this._loaderClass = b
					}
				}
				_createLoader() {
					this._loader = new this._loaderClass(this._seekHandler, this._config), !1 === this._loader.needStashBuffer && (this._enableStash = !1), this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this), this._loader.onURLRedirect = this._onURLRedirect.bind(this), this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this), this._loader.onComplete = this._onLoaderComplete.bind(this), this._loader.onError = this._onLoaderError.bind(this)
				}
				open(e) {
					this._currentRange = {
						from: 0,
						to: -1
					}, e && (this._currentRange.from = e), this._speedSampler.reset(), e || (this._fullRequestFlag = !0), this._loader.open(this._dataSource, Object.assign({}, this._currentRange))
				}
				abort() {
					this._loader.abort(), this._paused && (this._paused = !1, this._resumeFrom = 0)
				}
				pause() {
					this.isWorking() && (this._loader.abort(), 0 !== this._stashUsed ? (this._resumeFrom = this._stashByteStart, this._currentRange.to = this._stashByteStart - 1) : this._resumeFrom = this._currentRange.to + 1, this._stashUsed = 0, this._stashByteStart = 0, this._paused = !0)
				}
				resume() {
					if (this._paused) {
						this._paused = !1;
						let e = this._resumeFrom;
						this._resumeFrom = 0, this._internalSeek(e, !0)
					}
				}
				seek(e) {
					this._paused = !1, this._stashUsed = 0, this._stashByteStart = 0, this._internalSeek(e, !0)
				}
				_internalSeek(e, t) {
					this._loader.isWorking() && this._loader.abort(), this._flushStashBuffer(t), this._loader.destroy(), this._loader = null;
					let r = {
						from: e,
						to: -1
					};
					this._currentRange = {
						from: r.from,
						to: -1
					}, this._speedSampler.reset(), this._stashSize = this._stashInitialSize, this._createLoader(), this._loader.open(this._dataSource, r), this._onSeeked && this._onSeeked()
				}
				updateUrl(e) {
					if (!e || "string" != typeof e || 0 === e.length) throw new h("Url must be a non-empty string!");
					this._dataSource.url = e
				}
				_expandBuffer(e) {
					let t = this._stashSize;
					for (; t + 1048576 < e;) t *= 2;
					if (t += 1048576, t === this._bufferSize) return;
					let r = new ArrayBuffer(t);
					if (this._stashUsed > 0) {
						let e = new Uint8Array(this._stashBuffer, 0, this._stashUsed);
						new Uint8Array(r, 0, t)
							.set(e, 0)
					}
					this._stashBuffer = r, this._bufferSize = t
				}
				_normalizeSpeed(e) {
					let t = this._speedNormalizeList,
						r = t.length - 1,
						i = 0,
						n = 0,
						a = r;
					if (e < t[0]) return t[0];
					for (; n <= a;) {
						if (i = n + Math.floor((a - n) / 2), i === r || e >= t[i] && e < t[i + 1]) return t[i];
						t[i] < e ? n = i + 1 : a = i - 1
					}
				}
				_adjustStashSize(e) {
					let t = 0;
					t = this._config.isLive || e < 512 ? e : e >= 512 && e <= 1024 ? Math.floor(1.5 * e) : 2 * e, t > 8192 && (t = 8192);
					let r = 1024 * t + 1048576;
					this._bufferSize < r && this._expandBuffer(r), this._stashSize = 1024 * t
				}
				_dispatchChunks(e, t) {
					return this._currentRange.to = t + e.byteLength - 1, this._onDataArrival(e, t)
				}
				_onURLRedirect(e) {
					this._redirectedURL = e, this._onRedirect && this._onRedirect(e)
				}
				_onContentLengthKnown(e) {
					e && this._fullRequestFlag && (this._totalLength = e, this._fullRequestFlag = !1)
				}
				_onLoaderChunkArrival(e, t, r) {
					if (!this._onDataArrival) throw new d("IOController: No existing consumer (onDataArrival) callback!");
					if (this._paused) return;
					this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()), this._speedSampler.addBytes(e.byteLength);
					let i = this._speedSampler.lastSecondKBps;
					if (0 !== i) {
						let e = this._normalizeSpeed(i);
						this._speedNormalized !== e && (this._speedNormalized = e, this._adjustStashSize(e))
					}
					if (this._enableStash)
						if (0 === this._stashUsed && 0 === this._stashByteStart && (this._stashByteStart = t), this._stashUsed + e.byteLength <= this._stashSize) {
							new Uint8Array(this._stashBuffer, 0, this._stashSize)
								.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength
						} else {
							let r = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
							if (this._stashUsed > 0) {
								let t = this._stashBuffer.slice(0, this._stashUsed),
									i = this._dispatchChunks(t, this._stashByteStart);
								if (i < t.byteLength) {
									if (i > 0) {
										let e = new Uint8Array(t, i);
										r.set(e, 0), this._stashUsed = e.byteLength, this._stashByteStart += i
									}
								} else this._stashUsed = 0, this._stashByteStart += i;
								this._stashUsed + e.byteLength > this._bufferSize && (this._expandBuffer(this._stashUsed + e.byteLength), r = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), r.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength
							} else {
								let i = this._dispatchChunks(e, t);
								if (i < e.byteLength) {
									let n = e.byteLength - i;
									n > this._bufferSize && (this._expandBuffer(n), r = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), r.set(new Uint8Array(e, i), 0), this._stashUsed += n, this._stashByteStart = t + i
								}
							}
						}
					else if (0 === this._stashUsed) {
						let r = this._dispatchChunks(e, t);
						if (r < e.byteLength) {
							let i = e.byteLength - r;
							i > this._bufferSize && this._expandBuffer(i), new Uint8Array(this._stashBuffer, 0, this._bufferSize)
								.set(new Uint8Array(e, r), 0), this._stashUsed += i, this._stashByteStart = t + r
						}
					} else {
						this._stashUsed + e.byteLength > this._bufferSize && this._expandBuffer(this._stashUsed + e.byteLength);
						let t = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
						t.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;
						let r = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart);
						if (r < this._stashUsed && r > 0) {
							let e = new Uint8Array(this._stashBuffer, r);
							t.set(e, 0)
						}
						this._stashUsed -= r, this._stashByteStart += r
					}
				}
				_flushStashBuffer(e) {
					if (this._stashUsed > 0) {
						let t = this._stashBuffer.slice(0, this._stashUsed),
							r = this._dispatchChunks(t, this._stashByteStart),
							i = t.byteLength - r;
						if (r < t.byteLength) {
							if (!e) {
								if (r > 0) {
									let e = new Uint8Array(this._stashBuffer, 0, this._bufferSize),
										i = new Uint8Array(t, r);
									e.set(i, 0), this._stashUsed = i.byteLength, this._stashByteStart += r
								}
								return 0
							}
							l.w(this.TAG, i + " bytes unconsumed data remain when flush buffer, dropped")
						}
						return this._stashUsed = 0, this._stashByteStart = 0, i
					}
					return 0
				}
				_onLoaderComplete(e, t) {
					this._flushStashBuffer(!0), this._onComplete && this._onComplete(this._extraData)
				}
				_onLoaderError(e, t) {
					switch (l.e(this.TAG, `Loader error, code = ${t.code}, msg = ${t.msg}`), this._flushStashBuffer(!1), this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, e = g.UNRECOVERABLE_EARLY_EOF), e) {
						case g.EARLY_EOF:
							if (!this._config.isLive && this._totalLength) {
								let e = this._currentRange.to + 1;
								return void(e < this._totalLength && (l.w(this.TAG, "Connection lost, trying reconnect..."), this._isEarlyEofReconnecting = !0, this._internalSeek(e, !1)))
							}
							e = g.UNRECOVERABLE_EARLY_EOF
					}
					if (!this._onError) throw new c("IOException: " + t.msg);
					this._onError(e, t)
				}
			};
			const R = {
				enableWorker: !1,
				enableStashBuffer: !0,
				stashInitialSize: void 0,
				isLive: !1,
				lazyLoad: !0,
				lazyLoadMaxDuration: 180,
				lazyLoadRecoverDuration: 30,
				deferLoadAfterSourceOpen: !0,
				autoCleanupMaxBackwardDuration: 180,
				autoCleanupMinBackwardDuration: 120,
				statisticsInfoReportInterval: 600,
				fixAudioTimestampGap: !0,
				accurateSeek: !1,
				seekType: "range",
				seekParamStart: "bstart",
				seekParamEnd: "bend",
				rangeLoadZeroStart: !1,
				customSeekHandler: void 0,
				reuseRedirectedURL: !1,
				headers: void 0,
				customLoader: void 0
			};

			function L() {
				return Object.assign({}, R)
			}
			class k {
				static supportMSEH264Playback() {
					return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
				}
				static supportNetworkStreamIO() {
					let e = new w({}, L()),
						t = e.loaderType;
					return e.destroy(), "fetch-stream-loader" == t || "xhr-moz-chunked-loader" == t
				}
				static getNetworkLoaderTypeName() {
					let e = new w({}, L()),
						t = e.loaderType;
					return e.destroy(), t
				}
				static supportNativeMediaPlayback(e) {
					null == k.videoElement && (k.videoElement = window.document.createElement("video"));
					let t = k.videoElement.canPlayType(e);
					return "probably" === t || "maybe" == t
				}
				static getFeatureList() {
					let e = {
						mseFlvPlayback: !1,
						mseLiveFlvPlayback: !1,
						networkStreamIO: !1,
						networkLoaderName: "",
						nativeMP4H264Playback: !1,
						nativeWebmVP8Playback: !1,
						nativeWebmVP9Playback: !1
					};
					return e.mseFlvPlayback = k.supportMSEH264Playback(), e.networkStreamIO = k.supportNetworkStreamIO(), e.networkLoaderName = k.getNetworkLoaderTypeName(), e.mseLiveFlvPlayback = e.mseFlvPlayback && e.networkStreamIO, e.nativeMP4H264Playback = k.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'), e.nativeWebmVP8Playback = k.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'), e.nativeWebmVP9Playback = k.supportNativeMediaPlayback('video/webm; codecs="vp9"'), e
				}
			}
			var O = k;
			var D = {
				ERROR: "error",
				LOADING_COMPLETE: "loading_complete",
				RECOVERED_EARLY_EOF: "recovered_early_eof",
				MEDIA_INFO: "media_info",
				METADATA_ARRIVED: "metadata_arrived",
				SCRIPTDATA_ARRIVED: "scriptdata_arrived",
				STATISTICS_INFO: "statistics_info"
			};
			class C {
				static get forceGlobalTag() {
					return l.FORCE_GLOBAL_TAG
				}
				static set forceGlobalTag(e) {
					l.FORCE_GLOBAL_TAG = e, C._notifyChange()
				}
				static get globalTag() {
					return l.GLOBAL_TAG
				}
				static set globalTag(e) {
					l.GLOBAL_TAG = e, C._notifyChange()
				}
				static get enableAll() {
					return l.ENABLE_VERBOSE && l.ENABLE_DEBUG && l.ENABLE_INFO && l.ENABLE_WARN && l.ENABLE_ERROR
				}
				static set enableAll(e) {
					l.ENABLE_VERBOSE = e, l.ENABLE_DEBUG = e, l.ENABLE_INFO = e, l.ENABLE_WARN = e, l.ENABLE_ERROR = e, C._notifyChange()
				}
				static get enableDebug() {
					return l.ENABLE_DEBUG
				}
				static set enableDebug(e) {
					l.ENABLE_DEBUG = e, C._notifyChange()
				}
				static get enableVerbose() {
					return l.ENABLE_VERBOSE
				}
				static set enableVerbose(e) {
					l.ENABLE_VERBOSE = e, C._notifyChange()
				}
				static get enableInfo() {
					return l.ENABLE_INFO
				}
				static set enableInfo(e) {
					l.ENABLE_INFO = e, C._notifyChange()
				}
				static get enableWarn() {
					return l.ENABLE_WARN
				}
				static set enableWarn(e) {
					l.ENABLE_WARN = e, C._notifyChange()
				}
				static get enableError() {
					return l.ENABLE_ERROR
				}
				static set enableError(e) {
					l.ENABLE_ERROR = e, C._notifyChange()
				}
				static getConfig() {
					return {
						globalTag: l.GLOBAL_TAG,
						forceGlobalTag: l.FORCE_GLOBAL_TAG,
						enableVerbose: l.ENABLE_VERBOSE,
						enableDebug: l.ENABLE_DEBUG,
						enableInfo: l.ENABLE_INFO,
						enableWarn: l.ENABLE_WARN,
						enableError: l.ENABLE_ERROR,
						enableCallback: l.ENABLE_CALLBACK
					}
				}
				static applyConfig(e) {
					l.GLOBAL_TAG = e.globalTag, l.FORCE_GLOBAL_TAG = e.forceGlobalTag, l.ENABLE_VERBOSE = e.enableVerbose, l.ENABLE_DEBUG = e.enableDebug, l.ENABLE_INFO = e.enableInfo, l.ENABLE_WARN = e.enableWarn, l.ENABLE_ERROR = e.enableError, l.ENABLE_CALLBACK = e.enableCallback
				}
				static _notifyChange() {
					let e = C.emitter;
					if (e.listenerCount("change") > 0) {
						let t = C.getConfig();
						e.emit("change", t)
					}
				}
				static registerListener(e) {
					C.emitter.addListener("change", e)
				}
				static removeListener(e) {
					C.emitter.removeListener("change", e)
				}
				static addLogListener(e) {
					l.emitter.addListener("log", e), l.emitter.listenerCount("log") > 0 && (l.ENABLE_CALLBACK = !0, C._notifyChange())
				}
				static removeLogListener(e) {
					l.emitter.removeListener("log", e), 0 === l.emitter.listenerCount("log") && (l.ENABLE_CALLBACK = !1, C._notifyChange())
				}
			}
			C.emitter = new s.a;
			var I = C;
			var x = class {
				constructor() {
					this.mimeType = null, this.duration = null, this.hasAudio = null, this.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate = null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount = null, this.width = null, this.height = null, this.fps = null, this.profile = null, this.level = null, this.refFrames = null, this.chromaFormat = null, this.sarNum = null, this.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null, this.hasKeyframesIndex = null, this.keyframesIndex = null
				}
				isComplete() {
					let e = !1 === this.hasAudio || !0 === this.hasAudio && null != this.audioCodec && null != this.audioSampleRate && null != this.audioChannelCount,
						t = !1 === this.hasVideo || !0 === this.hasVideo && null != this.videoCodec && null != this.width && null != this.height && null != this.fps && null != this.profile && null != this.level && null != this.refFrames && null != this.chromaFormat && null != this.sarNum && null != this.sarDen;
					return null != this.mimeType && null != this.duration && null != this.metadata && null != this.hasKeyframesIndex && e && t
				}
				isSeekable() {
					return !0 === this.hasKeyframesIndex
				}
				getNearestKeyframe(e) {
					if (null == this.keyframesIndex) return null;
					let t = this.keyframesIndex,
						r = this._search(t.times, e);
					return {
						index: r,
						milliseconds: t.times[r],
						fileposition: t.filepositions[r]
					}
				}
				_search(e, t) {
					let r = 0,
						i = e.length - 1,
						n = 0,
						a = 0,
						s = i;
					for (t < e[0] && (r = 0, a = s + 1); a <= s;) {
						if (n = a + Math.floor((s - a) / 2), n === i || t >= e[n] && t < e[n + 1]) {
							r = n;
							break
						}
						e[n] < t ? a = n + 1 : s = n - 1
					}
					return r
				}
			};

			function P(e, t, r) {
				let i = e;
				if (t + r < i.length) {
					for (; r--;)
						if (128 != (192 & i[++t])) return !1;
					return !0
				}
				return !1
			}
			var M = function(e) {
				let t = [],
					r = e,
					i = 0,
					n = e.length;
				for (; i < n;)
					if (r[i] < 128) t.push(String.fromCharCode(r[i])), ++i;
					else {
						if (r[i] < 192);
						else if (r[i] < 224) {
							if (P(r, i, 1)) {
								let e = (31 & r[i]) << 6 | 63 & r[i + 1];
								if (e >= 128) {
									t.push(String.fromCharCode(65535 & e)), i += 2;
									continue
								}
							}
						} else if (r[i] < 240) {
							if (P(r, i, 2)) {
								let e = (15 & r[i]) << 12 | (63 & r[i + 1]) << 6 | 63 & r[i + 2];
								if (e >= 2048 && 55296 != (63488 & e)) {
									t.push(String.fromCharCode(65535 & e)), i += 3;
									continue
								}
							}
						} else if (r[i] < 248 && P(r, i, 3)) {
							let e = (7 & r[i]) << 18 | (63 & r[i + 1]) << 12 | (63 & r[i + 2]) << 6 | 63 & r[i + 3];
							if (e > 65536 && e < 1114112) {
								e -= 65536, t.push(String.fromCharCode(e >>> 10 | 55296)), t.push(String.fromCharCode(1023 & e | 56320)), i += 4;
								continue
							}
						}
						t.push(String.fromCharCode(65533)), ++i
					} return t.join("")
			};
			let F = function() {
				let e = new ArrayBuffer(2);
				return new DataView(e)
					.setInt16(0, 256, !0), 256 === new Int16Array(e)[0]
			}();
			class N {
				static parseScriptData(e, t, r) {
					let i = {};
					try {
						let n = N.parseValue(e, t, r),
							a = N.parseValue(e, t + n.size, r - n.size);
						i[n.data] = a.data
					} catch (e) {
						l.e("AMF", e.toString())
					}
					return i
				}
				static parseObject(e, t, r) {
					if (r < 3) throw new d("Data not enough when parse ScriptDataObject");
					let i = N.parseString(e, t, r),
						n = N.parseValue(e, t + i.size, r - i.size),
						a = n.objectEnd;
					return {
						data: {
							name: i.data,
							value: n.data
						},
						size: i.size + n.size,
						objectEnd: a
					}
				}
				static parseVariable(e, t, r) {
					return N.parseObject(e, t, r)
				}
				static parseString(e, t, r) {
					if (r < 2) throw new d("Data not enough when parse String");
					let i, n = new DataView(e, t, r)
						.getUint16(0, !F);
					return i = n > 0 ? M(new Uint8Array(e, t + 2, n)) : "", {
						data: i,
						size: 2 + n
					}
				}
				static parseLongString(e, t, r) {
					if (r < 4) throw new d("Data not enough when parse LongString");
					let i, n = new DataView(e, t, r)
						.getUint32(0, !F);
					return i = n > 0 ? M(new Uint8Array(e, t + 4, n)) : "", {
						data: i,
						size: 4 + n
					}
				}
				static parseDate(e, t, r) {
					if (r < 10) throw new d("Data size invalid when parse Date");
					let i = new DataView(e, t, r),
						n = i.getFloat64(0, !F);
					return n += 60 * i.getInt16(8, !F) * 1e3, {
						data: new Date(n),
						size: 10
					}
				}
				static parseValue(e, t, r) {
					if (r < 1) throw new d("Data not enough when parse Value");
					let i, n = new DataView(e, t, r),
						a = 1,
						s = n.getUint8(0),
						o = !1;
					try {
						switch (s) {
							case 0:
								i = n.getFloat64(1, !F), a += 8;
								break;
							case 1:
								i = !!n.getUint8(1), a += 1;
								break;
							case 2:
								{
									let n = N.parseString(e, t + 1, r - 1);i = n.data,
									a += n.size;
									break
								}
							case 3:
								{
									i = {};
									let s = 0;
									for (9 == (16777215 & n.getUint32(r - 4, !F)) && (s = 3); a < r - 4;) {
										let n = N.parseObject(e, t + a, r - a - s);
										if (n.objectEnd) break;
										i[n.data.name] = n.data.value, a += n.size
									}
									if (a <= r - 3) {
										9 === (16777215 & n.getUint32(a - 1, !F)) && (a += 3)
									}
									break
								}
							case 8:
								{
									i = {},
									a += 4;
									let s = 0;
									for (9 == (16777215 & n.getUint32(r - 4, !F)) && (s = 3); a < r - 8;) {
										let n = N.parseVariable(e, t + a, r - a - s);
										if (n.objectEnd) break;
										i[n.data.name] = n.data.value, a += n.size
									}
									if (a <= r - 3) {
										9 === (16777215 & n.getUint32(a - 1, !F)) && (a += 3)
									}
									break
								}
							case 9:
								i = void 0, a = 1, o = !0;
								break;
							case 10:
								{
									i = [];
									let s = n.getUint32(1, !F);a += 4;
									for (let n = 0; n < s; n++) {
										let n = N.parseValue(e, t + a, r - a);
										i.push(n.data), a += n.size
									}
									break
								}
							case 11:
								{
									let n = N.parseDate(e, t + 1, r - 1);i = n.data,
									a += n.size;
									break
								}
							case 12:
								{
									let n = N.parseString(e, t + 1, r - 1);i = n.data,
									a += n.size;
									break
								}
							default:
								a = r, l.w("AMF", "Unsupported AMF value type " + s)
						}
					} catch (e) {
						l.e("AMF", e.toString())
					}
					return {
						data: i,
						size: a,
						objectEnd: o
					}
				}
			}
			var B = N;
			var U = class {
				constructor(e) {
					this.TAG = "ExpGolomb", this._buffer = e, this._buffer_index = 0, this._total_bytes = e.byteLength, this._total_bits = 8 * e.byteLength, this._current_word = 0, this._current_word_bits_left = 0
				}
				destroy() {
					this._buffer = null
				}
				_fillCurrentWord() {
					let e = this._total_bytes - this._buffer_index;
					if (e <= 0) throw new d("ExpGolomb: _fillCurrentWord() but no bytes available");
					let t = Math.min(4, e),
						r = new Uint8Array(4);
					r.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)), this._current_word = new DataView(r.buffer)
						.getUint32(0, !1), this._buffer_index += t, this._current_word_bits_left = 8 * t
				}
				readBits(e) {
					if (e > 32) throw new h("ExpGolomb: readBits() bits exceeded max 32bits!");
					if (e <= this._current_word_bits_left) {
						let t = this._current_word >>> 32 - e;
						return this._current_word <<= e, this._current_word_bits_left -= e, t
					}
					let t = this._current_word_bits_left ? this._current_word : 0;
					t >>>= 32 - this._current_word_bits_left;
					let r = e - this._current_word_bits_left;
					this._fillCurrentWord();
					let i = Math.min(r, this._current_word_bits_left),
						n = this._current_word >>> 32 - i;
					return this._current_word <<= i, this._current_word_bits_left -= i, t = t << i | n, t
				}
				readBool() {
					return 1 === this.readBits(1)
				}
				readByte() {
					return this.readBits(8)
				}
				_skipLeadingZero() {
					let e;
					for (e = 0; e < this._current_word_bits_left; e++)
						if (0 != (this._current_word & 2147483648 >>> e)) return this._current_word <<= e, this._current_word_bits_left -= e, e;
					return this._fillCurrentWord(), e + this._skipLeadingZero()
				}
				readUEG() {
					let e = this._skipLeadingZero();
					return this.readBits(e + 1) - 1
				}
				readSEG() {
					let e = this.readUEG();
					return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1)
				}
			};
			class j {
				static _ebsp2rbsp(e) {
					let t = e,
						r = t.byteLength,
						i = new Uint8Array(r),
						n = 0;
					for (let e = 0; e < r; e++) e >= 2 && 3 === t[e] && 0 === t[e - 1] && 0 === t[e - 2] || (i[n] = t[e], n++);
					return new Uint8Array(i.buffer, 0, n)
				}
				static parseSPS(e) {
					let t = j._ebsp2rbsp(e),
						r = new U(t);
					r.readByte();
					let i = r.readByte();
					r.readByte();
					let n = r.readByte();
					r.readUEG();
					let a = j.getProfileString(i),
						s = j.getLevelString(n),
						o = 1,
						l = 420,
						u = [0, 420, 422, 444],
						c = 8;
					if ((100 === i || 110 === i || 122 === i || 244 === i || 44 === i || 83 === i || 86 === i || 118 === i || 128 === i || 138 === i || 144 === i) && (o = r.readUEG(), 3 === o && r.readBits(1), o <= 3 && (l = u[o]), c = r.readUEG() + 8, r.readUEG(), r.readBits(1), r.readBool())) {
						let e = 3 !== o ? 8 : 12;
						for (let t = 0; t < e; t++) r.readBool() && (t < 6 ? j._skipScalingList(r, 16) : j._skipScalingList(r, 64))
					}
					r.readUEG();
					let d = r.readUEG();
					if (0 === d) r.readUEG();
					else if (1 === d) {
						r.readBits(1), r.readSEG(), r.readSEG();
						let e = r.readUEG();
						for (let t = 0; t < e; t++) r.readSEG()
					}
					let h = r.readUEG();
					r.readBits(1);
					let f = r.readUEG(),
						p = r.readUEG(),
						g = r.readBits(1);
					0 === g && r.readBits(1), r.readBits(1);
					let v = 0,
						m = 0,
						_ = 0,
						y = 0;
					r.readBool() && (v = r.readUEG(), m = r.readUEG(), _ = r.readUEG(), y = r.readUEG());
					let E = 1,
						b = 1,
						S = 0,
						T = !0,
						A = 0,
						w = 0;
					if (r.readBool()) {
						if (r.readBool()) {
							let e = r.readByte(),
								t = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2],
								i = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
							e > 0 && e < 16 ? (E = t[e - 1], b = i[e - 1]) : 255 === e && (E = r.readByte() << 8 | r.readByte(), b = r.readByte() << 8 | r.readByte())
						}
						if (r.readBool() && r.readBool(), r.readBool() && (r.readBits(4), r.readBool() && r.readBits(24)), r.readBool() && (r.readUEG(), r.readUEG()), r.readBool()) {
							let e = r.readBits(32),
								t = r.readBits(32);
							T = r.readBool(), A = t, w = 2 * e, S = A / w
						}
					}
					let R = 1;
					1 === E && 1 === b || (R = E / b);
					let L = 0,
						k = 0;
					if (0 === o) L = 1, k = 2 - g;
					else {
						L = 3 === o ? 1 : 2, k = (1 === o ? 2 : 1) * (2 - g)
					}
					let O = 16 * (f + 1),
						D = 16 * (p + 1) * (2 - g);
					O -= (v + m) * L, D -= (_ + y) * k;
					let C = Math.ceil(O * R);
					return r.destroy(), r = null, {
						profile_string: a,
						level_string: s,
						bit_depth: c,
						ref_frames: h,
						chroma_format: l,
						chroma_format_string: j.getChromaFormatString(l),
						frame_rate: {
							fixed: T,
							fps: S,
							fps_den: w,
							fps_num: A
						},
						sar_ratio: {
							width: E,
							height: b
						},
						codec_size: {
							width: O,
							height: D
						},
						present_size: {
							width: C,
							height: D
						}
					}
				}
				static _skipScalingList(e, t) {
					let r = 8,
						i = 8,
						n = 0;
					for (let a = 0; a < t; a++) 0 !== i && (n = e.readSEG(), i = (r + n + 256) % 256), r = 0 === i ? r : i
				}
				static getProfileString(e) {
					switch (e) {
						case 66:
							return "Baseline";
						case 77:
							return "Main";
						case 88:
							return "Extended";
						case 100:
							return "High";
						case 110:
							return "High10";
						case 122:
							return "High422";
						case 244:
							return "High444";
						default:
							return "Unknown"
					}
				}
				static getLevelString(e) {
					return (e / 10)
						.toFixed(1)
				}
				static getChromaFormatString(e) {
					switch (e) {
						case 420:
							return "4:2:0";
						case 422:
							return "4:2:2";
						case 444:
							return "4:4:4";
						default:
							return "Unknown"
					}
				}
			}
			var G = j;
			var V = {
				OK: "OK",
				FORMAT_ERROR: "FormatError",
				FORMAT_UNSUPPORTED: "FormatUnsupported",
				CODEC_UNSUPPORTED: "CodecUnsupported"
			};
			class K {
				constructor(e, t) {
					this.TAG = "FLVDemuxer", this._config = t, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null, this._dataOffset = e.dataOffset, this._firstParse = !0, this._dispatch = !1, this._hasAudio = e.hasAudioTrack, this._hasVideo = e.hasVideoTrack, this._hasAudioFlagOverrided = !1, this._hasVideoFlagOverrided = !1, this._audioInitialMetadataDispatched = !1, this._videoInitialMetadataDispatched = !1, this._mediaInfo = new x, this._mediaInfo.hasAudio = this._hasAudio, this._mediaInfo.hasVideo = this._hasVideo, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._naluLengthSize = 4, this._timestampBase = 0, this._timescale = 1e3, this._duration = 0, this._durationOverrided = !1, this._referenceFrameRate = {
						fixed: !0,
						fps: 23.976,
						fps_num: 23976,
						fps_den: 1e3
					}, this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3], this._mpegSamplingRates = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0], this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0], this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0], this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1], this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1], this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], this._videoTrack = {
						type: "video",
						id: 1,
						sequenceNumber: 0,
						samples: [],
						length: 0
					}, this._audioTrack = {
						type: "audio",
						id: 2,
						sequenceNumber: 0,
						samples: [],
						length: 0
					}, this._littleEndian = function() {
						let e = new ArrayBuffer(2);
						return new DataView(e)
							.setInt16(0, 256, !0), 256 === new Int16Array(e)[0]
					}()
				}
				destroy() {
					this._mediaInfo = null, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._videoTrack = null, this._audioTrack = null, this._onError = null, this._onMediaInfo = null, this._onMetaDataArrived = null, this._onScriptDataArrived = null, this._onTrackMetadata = null, this._onDataAvailable = null
				}
				static probe(e) {
					let t = new Uint8Array(e),
						r = {
							match: !1
						};
					if (70 !== t[0] || 76 !== t[1] || 86 !== t[2] || 1 !== t[3]) return r;
					let i = (4 & t[4]) >>> 2 != 0,
						n = 0 != (1 & t[4]),
						a = (s = t)[o = 5] << 24 | s[o + 1] << 16 | s[o + 2] << 8 | s[o + 3];
					var s, o;
					return a < 9 ? r : {
						match: !0,
						consumed: a,
						dataOffset: a,
						hasAudioTrack: i,
						hasVideoTrack: n
					}
				}
				bindDataSource(e) {
					return e.onDataArrival = this.parseChunks.bind(this), this
				}
				get onTrackMetadata() {
					return this._onTrackMetadata
				}
				set onTrackMetadata(e) {
					this._onTrackMetadata = e
				}
				get onMediaInfo() {
					return this._onMediaInfo
				}
				set onMediaInfo(e) {
					this._onMediaInfo = e
				}
				get onMetaDataArrived() {
					return this._onMetaDataArrived
				}
				set onMetaDataArrived(e) {
					this._onMetaDataArrived = e
				}
				get onScriptDataArrived() {
					return this._onScriptDataArrived
				}
				set onScriptDataArrived(e) {
					this._onScriptDataArrived = e
				}
				get onError() {
					return this._onError
				}
				set onError(e) {
					this._onError = e
				}
				get onDataAvailable() {
					return this._onDataAvailable
				}
				set onDataAvailable(e) {
					this._onDataAvailable = e
				}
				get timestampBase() {
					return this._timestampBase
				}
				set timestampBase(e) {
					this._timestampBase = e
				}
				get overridedDuration() {
					return this._duration
				}
				set overridedDuration(e) {
					this._durationOverrided = !0, this._duration = e, this._mediaInfo.duration = e
				}
				set overridedHasAudio(e) {
					this._hasAudioFlagOverrided = !0, this._hasAudio = e, this._mediaInfo.hasAudio = e
				}
				set overridedHasVideo(e) {
					this._hasVideoFlagOverrided = !0, this._hasVideo = e, this._mediaInfo.hasVideo = e
				}
				resetMediaInfo() {
					this._mediaInfo = new x
				}
				_isInitialMetadataDispatched() {
					return this._hasAudio && this._hasVideo ? this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched : this._hasAudio && !this._hasVideo ? this._audioInitialMetadataDispatched : !(this._hasAudio || !this._hasVideo) && this._videoInitialMetadataDispatched
				}
				parseChunks(e, t) {
					if (!(this._onError && this._onMediaInfo && this._onTrackMetadata && this._onDataAvailable)) throw new d("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
					let r = 0,
						i = this._littleEndian;
					if (0 === t) {
						if (!(e.byteLength > 13)) return 0;
						r = K.probe(e)
							.dataOffset
					}
					if (this._firstParse) {
						this._firstParse = !1, t + r !== this._dataOffset && l.w(this.TAG, "First time parsing but chunk byteStart invalid!"), 0 !== new DataView(e, r)
							.getUint32(0, !i) && l.w(this.TAG, "PrevTagSize0 !== 0 !!!"), r += 4
					}
					for (; r < e.byteLength;) {
						this._dispatch = !0;
						let n = new DataView(e, r);
						if (r + 11 + 4 > e.byteLength) break;
						let a = n.getUint8(0),
							s = 16777215 & n.getUint32(0, !i);
						if (r + 11 + s + 4 > e.byteLength) break;
						if (8 !== a && 9 !== a && 18 !== a) {
							l.w(this.TAG, `Unsupported tag type ${a}, skipped`), r += 11 + s + 4;
							continue
						}
						let o = n.getUint8(4),
							u = n.getUint8(5),
							c = n.getUint8(6) | u << 8 | o << 16 | n.getUint8(7) << 24;
						0 !== (16777215 & n.getUint32(7, !i)) && l.w(this.TAG, "Meet tag which has StreamID != 0!");
						let d = r + 11;
						switch (a) {
							case 8:
								this._parseAudioData(e, d, s, c);
								break;
							case 9:
								this._parseVideoData(e, d, s, c, t + r);
								break;
							case 18:
								this._parseScriptData(e, d, s)
						}
						let h = n.getUint32(11 + s, !i);
						h !== 11 + s && l.w(this.TAG, "Invalid PrevTagSize " + h), r += 11 + s + 4
					}
					return this._isInitialMetadataDispatched() && this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack), r
				}
				_parseScriptData(e, t, r) {
					let i = B.parseScriptData(e, t, r);
					if (i.hasOwnProperty("onMetaData")) {
						if (null == i.onMetaData || "object" != typeof i.onMetaData) return void l.w(this.TAG, "Invalid onMetaData structure!");
						this._metadata && l.w(this.TAG, "Found another onMetaData tag!"), this._metadata = i;
						let e = this._metadata.onMetaData;
						if (this._onMetaDataArrived && this._onMetaDataArrived(Object.assign({}, e)), "boolean" == typeof e.hasAudio && !1 === this._hasAudioFlagOverrided && (this._hasAudio = e.hasAudio, this._mediaInfo.hasAudio = this._hasAudio), "boolean" == typeof e.hasVideo && !1 === this._hasVideoFlagOverrided && (this._hasVideo = e.hasVideo, this._mediaInfo.hasVideo = this._hasVideo), "number" == typeof e.audiodatarate && (this._mediaInfo.audioDataRate = e.audiodatarate), "number" == typeof e.videodatarate && (this._mediaInfo.videoDataRate = e.videodatarate), "number" == typeof e.width && (this._mediaInfo.width = e.width), "number" == typeof e.height && (this._mediaInfo.height = e.height), "number" == typeof e.duration) {
							if (!this._durationOverrided) {
								let t = Math.floor(e.duration * this._timescale);
								this._duration = t, this._mediaInfo.duration = t
							}
						} else this._mediaInfo.duration = 0;
						if ("number" == typeof e.framerate) {
							let t = Math.floor(1e3 * e.framerate);
							if (t > 0) {
								let e = t / 1e3;
								this._referenceFrameRate.fixed = !0, this._referenceFrameRate.fps = e, this._referenceFrameRate.fps_num = t, this._referenceFrameRate.fps_den = 1e3, this._mediaInfo.fps = e
							}
						}
						if ("object" == typeof e.keyframes) {
							this._mediaInfo.hasKeyframesIndex = !0;
							let t = e.keyframes;
							this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(t), e.keyframes = null
						} else this._mediaInfo.hasKeyframesIndex = !1;
						this._dispatch = !1, this._mediaInfo.metadata = e, l.v(this.TAG, "Parsed onMetaData"), this._mediaInfo.isComplete() && this._onMediaInfo(this._mediaInfo)
					}
					Object.keys(i)
						.length > 0 && this._onScriptDataArrived && this._onScriptDataArrived(Object.assign({}, i))
				}
				_parseKeyframesIndex(e) {
					let t = [],
						r = [];
					for (let i = 1; i < e.times.length; i++) {
						let n = this._timestampBase + Math.floor(1e3 * e.times[i]);
						t.push(n), r.push(e.filepositions[i])
					}
					return {
						times: t,
						filepositions: r
					}
				}
				_parseAudioData(e, t, r, i) {
					if (r <= 1) return void l.w(this.TAG, "Flv: Invalid audio packet, missing SoundData payload!");
					if (!0 === this._hasAudioFlagOverrided && !1 === this._hasAudio) return;
					this._littleEndian;
					let n = new DataView(e, t, r)
						.getUint8(0),
						a = n >>> 4;
					if (2 !== a && 10 !== a) return void this._onError(V.CODEC_UNSUPPORTED, "Flv: Unsupported audio codec idx: " + a);
					let s = 0,
						o = (12 & n) >>> 2;
					if (!(o >= 0 && o <= 4)) return void this._onError(V.FORMAT_ERROR, "Flv: Invalid audio sample rate idx: " + o);
					s = this._flvSoundRateTable[o];
					let u = 1 & n,
						c = this._audioMetadata,
						d = this._audioTrack;
					if (c || (!1 === this._hasAudio && !1 === this._hasAudioFlagOverrided && (this._hasAudio = !0, this._mediaInfo.hasAudio = !0), c = this._audioMetadata = {}, c.type = "audio", c.id = d.id, c.timescale = this._timescale, c.duration = this._duration, c.audioSampleRate = s, c.channelCount = 0 === u ? 1 : 2), 10 === a) {
						let n = this._parseAACAudioData(e, t + 1, r - 1);
						if (null == n) return;
						if (0 === n.packetType) {
							c.config && l.w(this.TAG, "Found another AudioSpecificConfig!");
							let e = n.data;
							c.audioSampleRate = e.samplingRate, c.channelCount = e.channelCount, c.codec = e.codec, c.originalCodec = e.originalCodec, c.config = e.config, c.refSampleDuration = 1024 / c.audioSampleRate * c.timescale, l.v(this.TAG, "Parsed AudioSpecificConfig"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._audioInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("audio", c);
							let t = this._mediaInfo;
							t.audioCodec = c.originalCodec, t.audioSampleRate = c.audioSampleRate, t.audioChannelCount = c.channelCount, t.hasVideo ? null != t.videoCodec && (t.mimeType = 'video/x-flv; codecs="' + t.videoCodec + "," + t.audioCodec + '"') : t.mimeType = 'video/x-flv; codecs="' + t.audioCodec + '"', t.isComplete() && this._onMediaInfo(t)
						} else if (1 === n.packetType) {
							let e = this._timestampBase + i,
								t = {
									unit: n.data,
									length: n.data.byteLength,
									dts: e,
									pts: e
								};
							d.samples.push(t), d.length += n.data.length
						} else l.e(this.TAG, "Flv: Unsupported AAC data type " + n.packetType)
					} else if (2 === a) {
						if (!c.codec) {
							let i = this._parseMP3AudioData(e, t + 1, r - 1, !0);
							if (null == i) return;
							c.audioSampleRate = i.samplingRate, c.channelCount = i.channelCount, c.codec = i.codec, c.originalCodec = i.originalCodec, c.refSampleDuration = 1152 / c.audioSampleRate * c.timescale, l.v(this.TAG, "Parsed MPEG Audio Frame Header"), this._audioInitialMetadataDispatched = !0, this._onTrackMetadata("audio", c);
							let n = this._mediaInfo;
							n.audioCodec = c.codec, n.audioSampleRate = c.audioSampleRate, n.audioChannelCount = c.channelCount, n.audioDataRate = i.bitRate, n.hasVideo ? null != n.videoCodec && (n.mimeType = 'video/x-flv; codecs="' + n.videoCodec + "," + n.audioCodec + '"') : n.mimeType = 'video/x-flv; codecs="' + n.audioCodec + '"', n.isComplete() && this._onMediaInfo(n)
						}
						let n = this._parseMP3AudioData(e, t + 1, r - 1, !1);
						if (null == n) return;
						let a = this._timestampBase + i,
							s = {
								unit: n,
								length: n.byteLength,
								dts: a,
								pts: a
							};
						d.samples.push(s), d.length += n.length
					}
				}
				_parseAACAudioData(e, t, r) {
					if (r <= 1) return void l.w(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!");
					let i = {},
						n = new Uint8Array(e, t, r);
					return i.packetType = n[0], 0 === n[0] ? i.data = this._parseAACAudioSpecificConfig(e, t + 1, r - 1) : i.data = n.subarray(1), i
				}
				_parseAACAudioSpecificConfig(e, t, r) {
					let i = new Uint8Array(e, t, r),
						n = null,
						a = 0,
						s = 0,
						o = null,
						l = 0,
						u = null;
					if (a = s = i[0] >>> 3, l = (7 & i[0]) << 1 | i[1] >>> 7, l < 0 || l >= this._mpegSamplingRates.length) return void this._onError(V.FORMAT_ERROR, "Flv: AAC invalid sampling frequency index!");
					let c = this._mpegSamplingRates[l],
						d = (120 & i[1]) >>> 3;
					if (d < 0 || d >= 8) return void this._onError(V.FORMAT_ERROR, "Flv: AAC invalid channel configuration");
					5 === a && (u = (7 & i[1]) << 1 | i[2] >>> 7, o = (124 & i[2]) >>> 2);
					let h = self.navigator.userAgent.toLowerCase();
					return -1 !== h.indexOf("firefox") ? l >= 6 ? (a = 5, n = new Array(4), u = l - 3) : (a = 2, n = new Array(2), u = l) : -1 !== h.indexOf("android") ? (a = 2, n = new Array(2), u = l) : (a = 5, u = l, n = new Array(4), l >= 6 ? u = l - 3 : 1 === d && (a = 2, n = new Array(2), u = l)), n[0] = a << 3, n[0] |= (15 & l) >>> 1, n[1] = (15 & l) << 7, n[1] |= (15 & d) << 3, 5 === a && (n[1] |= (15 & u) >>> 1, n[2] = (1 & u) << 7, n[2] |= 8, n[3] = 0), {
						config: n,
						samplingRate: c,
						channelCount: d,
						codec: "mp4a.40." + a,
						originalCodec: "mp4a.40." + s
					}
				}
				_parseMP3AudioData(e, t, r, i) {
					if (r < 4) return void l.w(this.TAG, "Flv: Invalid MP3 packet, header missing!");
					this._littleEndian;
					let n = new Uint8Array(e, t, r),
						a = null;
					if (i) {
						if (255 !== n[0]) return;
						let e = n[1] >>> 3 & 3,
							t = (6 & n[1]) >> 1,
							r = (240 & n[2]) >>> 4,
							i = (12 & n[2]) >>> 2,
							s = 3 !== (n[3] >>> 6 & 3) ? 2 : 1,
							o = 0,
							l = 0,
							u = 34,
							c = "mp3";
						switch (e) {
							case 0:
								o = this._mpegAudioV25SampleRateTable[i];
								break;
							case 2:
								o = this._mpegAudioV20SampleRateTable[i];
								break;
							case 3:
								o = this._mpegAudioV10SampleRateTable[i]
						}
						switch (t) {
							case 1:
								u = 34, r < this._mpegAudioL3BitRateTable.length && (l = this._mpegAudioL3BitRateTable[r]);
								break;
							case 2:
								u = 33, r < this._mpegAudioL2BitRateTable.length && (l = this._mpegAudioL2BitRateTable[r]);
								break;
							case 3:
								u = 32, r < this._mpegAudioL1BitRateTable.length && (l = this._mpegAudioL1BitRateTable[r])
						}
						a = {
							bitRate: l,
							samplingRate: o,
							channelCount: s,
							codec: c,
							originalCodec: c
						}
					} else a = n;
					return a
				}
				_parseVideoData(e, t, r, i, n) {
					if (r <= 1) return void l.w(this.TAG, "Flv: Invalid video packet, missing VideoData payload!");
					if (!0 === this._hasVideoFlagOverrided && !1 === this._hasVideo) return;
					let a = new Uint8Array(e, t, r)[0],
						s = (240 & a) >>> 4,
						o = 15 & a;
					7 === o ? this._parseAVCVideoPacket(e, t + 1, r - 1, i, n, s) : this._onError(V.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + o)
				}
				_parseAVCVideoPacket(e, t, r, i, n, a) {
					if (r < 4) return void l.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");
					let s = this._littleEndian,
						o = new DataView(e, t, r),
						u = o.getUint8(0),
						c = (16777215 & o.getUint32(0, !s)) << 8 >> 8;
					if (0 === u) this._parseAVCDecoderConfigurationRecord(e, t + 4, r - 4);
					else if (1 === u) this._parseAVCVideoData(e, t + 4, r - 4, i, n, a, c);
					else if (2 !== u) return void this._onError(V.FORMAT_ERROR, "Flv: Invalid video packet type " + u)
				}
				_parseAVCDecoderConfigurationRecord(e, t, r) {
					if (r < 7) return void l.w(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
					let i = this._videoMetadata,
						n = this._videoTrack,
						a = this._littleEndian,
						s = new DataView(e, t, r);
					i ? void 0 !== i.avcc && l.w(this.TAG, "Found another AVCDecoderConfigurationRecord!") : (!1 === this._hasVideo && !1 === this._hasVideoFlagOverrided && (this._hasVideo = !0, this._mediaInfo.hasVideo = !0), i = this._videoMetadata = {}, i.type = "video", i.id = n.id, i.timescale = this._timescale, i.duration = this._duration);
					let o = s.getUint8(0),
						u = s.getUint8(1);
					s.getUint8(2), s.getUint8(3);
					if (1 !== o || 0 === u) return void this._onError(V.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord");
					if (this._naluLengthSize = 1 + (3 & s.getUint8(4)), 3 !== this._naluLengthSize && 4 !== this._naluLengthSize) return void this._onError(V.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
					let c = 31 & s.getUint8(5);
					if (0 === c) return void this._onError(V.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No SPS");
					c > 1 && l.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " + c);
					let d = 6;
					for (let r = 0; r < c; r++) {
						let n = s.getUint16(d, !a);
						if (d += 2, 0 === n) continue;
						let o = new Uint8Array(e, t + d, n);
						d += n;
						let l = G.parseSPS(o);
						if (0 !== r) continue;
						i.codecWidth = l.codec_size.width, i.codecHeight = l.codec_size.height, i.presentWidth = l.present_size.width, i.presentHeight = l.present_size.height, i.profile = l.profile_string, i.level = l.level_string, i.bitDepth = l.bit_depth, i.chromaFormat = l.chroma_format, i.sarRatio = l.sar_ratio, i.frameRate = l.frame_rate, !1 !== l.frame_rate.fixed && 0 !== l.frame_rate.fps_num && 0 !== l.frame_rate.fps_den || (i.frameRate = this._referenceFrameRate);
						let u = i.frameRate.fps_den,
							c = i.frameRate.fps_num;
						i.refSampleDuration = i.timescale * (u / c);
						let h = o.subarray(1, 4),
							f = "avc1.";
						for (let e = 0; e < 3; e++) {
							let t = h[e].toString(16);
							t.length < 2 && (t = "0" + t), f += t
						}
						i.codec = f;
						let p = this._mediaInfo;
						p.width = i.codecWidth, p.height = i.codecHeight, p.fps = i.frameRate.fps, p.profile = i.profile, p.level = i.level, p.refFrames = l.ref_frames, p.chromaFormat = l.chroma_format_string, p.sarNum = i.sarRatio.width, p.sarDen = i.sarRatio.height, p.videoCodec = f, p.hasAudio ? null != p.audioCodec && (p.mimeType = 'video/x-flv; codecs="' + p.videoCodec + "," + p.audioCodec + '"') : p.mimeType = 'video/x-flv; codecs="' + p.videoCodec + '"', p.isComplete() && this._onMediaInfo(p)
					}
					let h = s.getUint8(d);
					if (0 !== h) {
						h > 1 && l.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " + h), d++;
						for (let e = 0; e < h; e++) {
							let e = s.getUint16(d, !a);
							d += 2, 0 !== e && (d += e)
						}
						i.avcc = new Uint8Array(r), i.avcc.set(new Uint8Array(e, t, r), 0), l.v(this.TAG, "Parsed AVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("video", i)
					} else this._onError(V.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No PPS")
				}
				_parseAVCVideoData(e, t, r, i, n, a, s) {
					let o = this._littleEndian,
						u = new DataView(e, t, r),
						c = [],
						d = 0,
						h = 0;
					const f = this._naluLengthSize;
					let p = this._timestampBase + i,
						g = 1 === a;
					for (; h < r;) {
						if (h + 4 >= r) {
							l.w(this.TAG, `Malformed Nalu near timestamp ${p}, offset = ${h}, dataSize = ${r}`);
							break
						}
						let i = u.getUint32(h, !o);
						if (3 === f && (i >>>= 8), i > r - f) return void l.w(this.TAG, `Malformed Nalus near timestamp ${p}, NaluSize > DataSize!`);
						let n = 31 & u.getUint8(h + f);
						5 === n && (g = !0);
						let a = new Uint8Array(e, t + h, f + i),
							s = {
								type: n,
								data: a
							};
						c.push(s), d += a.byteLength, h += f + i
					}
					if (c.length) {
						let e = this._videoTrack,
							t = {
								units: c,
								length: d,
								isKeyframe: g,
								dts: p,
								cts: s,
								pts: p + s
							};
						g && (t.fileposition = n), e.samples.push(t), e.length += d
					}
				}
			}
			var H = K;
			class W {
				static init() {
					W.types = {
						avc1: [],
						avcC: [],
						btrt: [],
						dinf: [],
						dref: [],
						esds: [],
						ftyp: [],
						hdlr: [],
						mdat: [],
						mdhd: [],
						mdia: [],
						mfhd: [],
						minf: [],
						moof: [],
						moov: [],
						mp4a: [],
						mvex: [],
						mvhd: [],
						sdtp: [],
						stbl: [],
						stco: [],
						stsc: [],
						stsd: [],
						stsz: [],
						stts: [],
						tfdt: [],
						tfhd: [],
						traf: [],
						trak: [],
						trun: [],
						trex: [],
						tkhd: [],
						vmhd: [],
						smhd: [],
						".mp3": []
					};
					for (let e in W.types) W.types.hasOwnProperty(e) && (W.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
					let e = W.constants = {};
					e.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]), e.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), e.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSC = e.STCO = e.STTS, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.HDLR_VIDEO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), e.HDLR_AUDIO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), e.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
				}
				static box(e) {
					let t = 8,
						r = null,
						i = Array.prototype.slice.call(arguments, 1),
						n = i.length;
					for (let e = 0; e < n; e++) t += i[e].byteLength;
					r = new Uint8Array(t), r[0] = t >>> 24 & 255, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = 255 & t, r.set(e, 4);
					let a = 8;
					for (let e = 0; e < n; e++) r.set(i[e], a), a += i[e].byteLength;
					return r
				}
				static generateInitSegment(e) {
					let t = W.box(W.types.ftyp, W.constants.FTYP),
						r = W.moov(e),
						i = new Uint8Array(t.byteLength + r.byteLength);
					return i.set(t, 0), i.set(r, t.byteLength), i
				}
				static moov(e) {
					let t = W.mvhd(e.timescale, e.duration),
						r = W.trak(e),
						i = W.mvex(e);
					return W.box(W.types.moov, t, r, i)
				}
				static mvhd(e, t) {
					return W.box(W.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]))
				}
				static trak(e) {
					return W.box(W.types.trak, W.tkhd(e), W.mdia(e))
				}
				static tkhd(e) {
					let t = e.id,
						r = e.duration,
						i = e.presentWidth,
						n = e.presentHeight;
					return W.box(W.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 0, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >>> 8 & 255, 255 & i, 0, 0, n >>> 8 & 255, 255 & n, 0, 0]))
				}
				static mdia(e) {
					return W.box(W.types.mdia, W.mdhd(e), W.hdlr(e), W.minf(e))
				}
				static mdhd(e) {
					let t = e.timescale,
						r = e.duration;
					return W.box(W.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, 85, 196, 0, 0]))
				}
				static hdlr(e) {
					let t = null;
					return t = "audio" === e.type ? W.constants.HDLR_AUDIO : W.constants.HDLR_VIDEO, W.box(W.types.hdlr, t)
				}
				static minf(e) {
					let t = null;
					return t = "audio" === e.type ? W.box(W.types.smhd, W.constants.SMHD) : W.box(W.types.vmhd, W.constants.VMHD), W.box(W.types.minf, t, W.dinf(), W.stbl(e))
				}
				static dinf() {
					return W.box(W.types.dinf, W.box(W.types.dref, W.constants.DREF))
				}
				static stbl(e) {
					return W.box(W.types.stbl, W.stsd(e), W.box(W.types.stts, W.constants.STTS), W.box(W.types.stsc, W.constants.STSC), W.box(W.types.stsz, W.constants.STSZ), W.box(W.types.stco, W.constants.STCO))
				}
				static stsd(e) {
					return "audio" === e.type ? "mp3" === e.codec ? W.box(W.types.stsd, W.constants.STSD_PREFIX, W.mp3(e)) : W.box(W.types.stsd, W.constants.STSD_PREFIX, W.mp4a(e)) : W.box(W.types.stsd, W.constants.STSD_PREFIX, W.avc1(e))
				}
				static mp3(e) {
					let t = e.channelCount,
						r = e.audioSampleRate,
						i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, r >>> 8 & 255, 255 & r, 0, 0]);
					return W.box(W.types[".mp3"], i)
				}
				static mp4a(e) {
					let t = e.channelCount,
						r = e.audioSampleRate,
						i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 16, 0, 0, 0, 0, r >>> 8 & 255, 255 & r, 0, 0]);
					return W.box(W.types.mp4a, i, W.esds(e))
				}
				static esds(e) {
					let t = e.config || [],
						r = t.length,
						i = new Uint8Array([0, 0, 0, 0, 3, 23 + r, 0, 1, 0, 4, 15 + r, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([r])
							.concat(t)
							.concat([6, 1, 2]));
					return W.box(W.types.esds, i)
				}
				static avc1(e) {
					let t = e.avcc,
						r = e.codecWidth,
						i = e.codecHeight,
						n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, r >>> 8 & 255, 255 & r, i >>> 8 & 255, 255 & i, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
					return W.box(W.types.avc1, n, W.box(W.types.avcC, t))
				}
				static mvex(e) {
					return W.box(W.types.mvex, W.trex(e))
				}
				static trex(e) {
					let t = e.id,
						r = new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
					return W.box(W.types.trex, r)
				}
				static moof(e, t) {
					return W.box(W.types.moof, W.mfhd(e.sequenceNumber), W.traf(e, t))
				}
				static mfhd(e) {
					let t = new Uint8Array([0, 0, 0, 0, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e]);
					return W.box(W.types.mfhd, t)
				}
				static traf(e, t) {
					let r = e.id,
						i = W.box(W.types.tfhd, new Uint8Array([0, 0, 0, 0, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r])),
						n = W.box(W.types.tfdt, new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t])),
						a = W.sdtp(e),
						s = W.trun(e, a.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
					return W.box(W.types.traf, i, n, s, a)
				}
				static sdtp(e) {
					let t = e.samples || [],
						r = t.length,
						i = new Uint8Array(4 + r);
					for (let e = 0; e < r; e++) {
						let r = t[e].flags;
						i[e + 4] = r.isLeading << 6 | r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy
					}
					return W.box(W.types.sdtp, i)
				}
				static trun(e, t) {
					let r = e.samples || [],
						i = r.length,
						n = 12 + 16 * i,
						a = new Uint8Array(n);
					t += 8 + n, a.set([0, 0, 15, 1, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0);
					for (let e = 0; e < i; e++) {
						let t = r[e].duration,
							i = r[e].size,
							n = r[e].flags,
							s = r[e].cts;
						a.set([t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, n.isLeading << 2 | n.dependsOn, n.isDependedOn << 6 | n.hasRedundancy << 4 | n.isNonSync, 0, 0, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s], 12 + 16 * e)
					}
					return W.box(W.types.trun, a)
				}
				static mdat(e) {
					return W.box(W.types.mdat, e)
				}
			}
			W.init();
			var z = W;
			var q = class {
				static getSilentFrame(e, t) {
					if ("mp4a.40.2" === e) {
						if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
						if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
						if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
						if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
						if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
						if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
					} else {
						if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
						if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
						if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
					}
					return null
				}
			};
			class Y {
				constructor(e, t, r, i, n) {
					this.dts = e, this.pts = t, this.duration = r, this.originalDts = i, this.isSyncPoint = n, this.fileposition = null
				}
			}
			class X {
				constructor() {
					this.beginDts = 0, this.endDts = 0, this.beginPts = 0, this.endPts = 0, this.originalBeginDts = 0, this.originalEndDts = 0, this.syncPoints = [], this.firstSample = null, this.lastSample = null
				}
				appendSyncPoint(e) {
					e.isSyncPoint = !0, this.syncPoints.push(e)
				}
			}
			class $ {
				constructor() {
					this._list = []
				}
				clear() {
					this._list = []
				}
				appendArray(e) {
					let t = this._list;
					0 !== e.length && (t.length > 0 && e[0].originalDts < t[t.length - 1].originalDts && this.clear(), Array.prototype.push.apply(t, e))
				}
				getLastSyncPointBeforeDts(e) {
					if (0 == this._list.length) return null;
					let t = this._list,
						r = 0,
						i = t.length - 1,
						n = 0,
						a = 0,
						s = i;
					for (e < t[0].dts && (r = 0, a = s + 1); a <= s;) {
						if (n = a + Math.floor((s - a) / 2), n === i || e >= t[n].dts && e < t[n + 1].dts) {
							r = n;
							break
						}
						t[n].dts < e ? a = n + 1 : s = n - 1
					}
					return this._list[r]
				}
			}
			class J {
				constructor(e) {
					this._type = e, this._list = [], this._lastAppendLocation = -1
				}
				get type() {
					return this._type
				}
				get length() {
					return this._list.length
				}
				isEmpty() {
					return 0 === this._list.length
				}
				clear() {
					this._list = [], this._lastAppendLocation = -1
				}
				_searchNearestSegmentBefore(e) {
					let t = this._list;
					if (0 === t.length) return -2;
					let r = t.length - 1,
						i = 0,
						n = 0,
						a = r,
						s = 0;
					if (e < t[0].originalBeginDts) return s = -1, s;
					for (; n <= a;) {
						if (i = n + Math.floor((a - n) / 2), i === r || e > t[i].lastSample.originalDts && e < t[i + 1].originalBeginDts) {
							s = i;
							break
						}
						t[i].originalBeginDts < e ? n = i + 1 : a = i - 1
					}
					return s
				}
				_searchNearestSegmentAfter(e) {
					return this._searchNearestSegmentBefore(e) + 1
				}
				append(e) {
					let t = this._list,
						r = e,
						i = this._lastAppendLocation,
						n = 0; - 1 !== i && i < t.length && r.originalBeginDts >= t[i].lastSample.originalDts && (i === t.length - 1 || i < t.length - 1 && r.originalBeginDts < t[i + 1].originalBeginDts) ? n = i + 1 : t.length > 0 && (n = this._searchNearestSegmentBefore(r.originalBeginDts) + 1), this._lastAppendLocation = n, this._list.splice(n, 0, r)
				}
				getLastSegmentBefore(e) {
					let t = this._searchNearestSegmentBefore(e);
					return t >= 0 ? this._list[t] : null
				}
				getLastSampleBefore(e) {
					let t = this.getLastSegmentBefore(e);
					return null != t ? t.lastSample : null
				}
				getLastSyncPointBefore(e) {
					let t = this._searchNearestSegmentBefore(e),
						r = this._list[t].syncPoints;
					for (; 0 === r.length && t > 0;) t--, r = this._list[t].syncPoints;
					return r.length > 0 ? r[r.length - 1] : null
				}
			}
			var Q = class {
				constructor(e) {
					this.TAG = "MP4Remuxer", this._config = e, this._isLive = !0 === e.isLive, this._dtsBase = -1, this._dtsBaseInited = !1, this._audioDtsBase = 1 / 0, this._videoDtsBase = 1 / 0, this._audioNextDts = void 0, this._videoNextDts = void 0, this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList = new J("audio"), this._videoSegmentInfoList = new J("video"), this._onInitSegment = null, this._onMediaSegment = null, this._forceFirstIDR = !(!_.chrome || !(_.version.major < 50 || 50 === _.version.major && _.version.build < 2661)), this._fillSilentAfterSeek = _.msedge || _.msie, this._mp3UseMpegAudio = !_.firefox, this._fillAudioTimestampGap = this._config.fixAudioTimestampGap
				}
				destroy() {
					this._dtsBase = -1, this._dtsBaseInited = !1, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList.clear(), this._audioSegmentInfoList = null, this._videoSegmentInfoList.clear(), this._videoSegmentInfoList = null, this._onInitSegment = null, this._onMediaSegment = null
				}
				bindDataSource(e) {
					return e.onDataAvailable = this.remux.bind(this), e.onTrackMetadata = this._onTrackMetadataReceived.bind(this), this
				}
				get onInitSegment() {
					return this._onInitSegment
				}
				set onInitSegment(e) {
					this._onInitSegment = e
				}
				get onMediaSegment() {
					return this._onMediaSegment
				}
				set onMediaSegment(e) {
					this._onMediaSegment = e
				}
				insertDiscontinuity() {
					this._audioNextDts = this._videoNextDts = void 0
				}
				seek(e) {
					this._audioStashedLastSample = null, this._videoStashedLastSample = null, this._videoSegmentInfoList.clear(), this._audioSegmentInfoList.clear()
				}
				remux(e, t) {
					if (!this._onMediaSegment) throw new d("MP4Remuxer: onMediaSegment callback must be specificed!");
					this._dtsBaseInited || this._calculateDtsBase(e, t), this._remuxVideo(t), this._remuxAudio(e)
				}
				_onTrackMetadataReceived(e, t) {
					let r = null,
						i = "mp4",
						n = t.codec;
					if ("audio" === e) this._audioMeta = t, "mp3" === t.codec && this._mp3UseMpegAudio ? (i = "mpeg", n = "", r = new Uint8Array) : r = z.generateInitSegment(t);
					else {
						if ("video" !== e) return;
						this._videoMeta = t, r = z.generateInitSegment(t)
					}
					if (!this._onInitSegment) throw new d("MP4Remuxer: onInitSegment callback must be specified!");
					this._onInitSegment(e, {
						type: e,
						data: r.buffer,
						codec: n,
						container: `${e}/${i}`,
						mediaDuration: t.duration
					})
				}
				_calculateDtsBase(e, t) {
					this._dtsBaseInited || (e.samples && e.samples.length && (this._audioDtsBase = e.samples[0].dts), t.samples && t.samples.length && (this._videoDtsBase = t.samples[0].dts), this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase), this._dtsBaseInited = !0)
				}
				flushStashedSamples() {
					let e = this._videoStashedLastSample,
						t = this._audioStashedLastSample,
						r = {
							type: "video",
							id: 1,
							sequenceNumber: 0,
							samples: [],
							length: 0
						};
					null != e && (r.samples.push(e), r.length = e.length);
					let i = {
						type: "audio",
						id: 2,
						sequenceNumber: 0,
						samples: [],
						length: 0
					};
					null != t && (i.samples.push(t), i.length = t.length), this._videoStashedLastSample = null, this._audioStashedLastSample = null, this._remuxVideo(r, !0), this._remuxAudio(i, !0)
				}
				_remuxAudio(e, t) {
					if (null == this._audioMeta) return;
					let r = e,
						i = r.samples,
						n = void 0,
						a = -1,
						s = -1,
						o = this._audioMeta.refSampleDuration,
						u = "mp3" === this._audioMeta.codec && this._mp3UseMpegAudio,
						c = this._dtsBaseInited && void 0 === this._audioNextDts,
						d = !1;
					if (!i || 0 === i.length) return;
					if (1 === i.length && !t) return;
					let h = 0,
						f = null,
						p = 0;
					u ? (h = 0, p = r.length) : (h = 8, p = 8 + r.length);
					let g = null;
					if (i.length > 1 && (g = i.pop(), p -= g.length), null != this._audioStashedLastSample) {
						let e = this._audioStashedLastSample;
						this._audioStashedLastSample = null, i.unshift(e), p += e.length
					}
					null != g && (this._audioStashedLastSample = g);
					let v = i[0].dts - this._dtsBase;
					if (this._audioNextDts) n = v - this._audioNextDts;
					else if (this._audioSegmentInfoList.isEmpty()) n = 0, this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty() && "mp3" !== this._audioMeta.originalCodec && (d = !0);
					else {
						let e = this._audioSegmentInfoList.getLastSampleBefore(v);
						if (null != e) {
							let t = v - (e.originalDts + e.duration);
							t <= 3 && (t = 0), n = v - (e.dts + e.duration + t)
						} else n = 0
					}
					if (d) {
						let e = v - n,
							t = this._videoSegmentInfoList.getLastSegmentBefore(v);
						if (null != t && t.beginDts < e) {
							let r = q.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
							if (r) {
								let n = t.beginDts,
									a = e - t.beginDts;
								l.v(this.TAG, `InsertPrefixSilentAudio: dts: ${n}, duration: ${a}`), i.unshift({
									unit: r,
									dts: n,
									pts: n
								}), p += r.byteLength
							}
						} else d = !1
					}
					let m = [];
					for (let e = 0; e < i.length; e++) {
						let t = i[e],
							r = t.unit,
							s = t.dts - this._dtsBase,
							u = s - n; - 1 === a && (a = u);
						let c = 0;
						if (e !== i.length - 1) {
							c = i[e + 1].dts - this._dtsBase - n - u
						} else if (null != g) {
							c = g.dts - this._dtsBase - n - u
						} else c = m.length >= 1 ? m[m.length - 1].duration : Math.floor(o);
						let d = !1,
							h = null;
						if (c > 1.5 * o && "mp3" !== this._audioMeta.codec && this._fillAudioTimestampGap && !_.safari) {
							d = !0;
							let e = Math.abs(c - o),
								t = Math.ceil(e / o),
								i = u + o;
							l.w(this.TAG, `Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\ndts: ${u+c} ms, expected: ${u+Math.round(o)} ms, delta: ${Math.round(e)} ms, generate: ${t} frames`);
							let n = q.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
							null == n && (l.w(this.TAG, `Unable to generate silent frame for ${this._audioMeta.originalCodec} with ${this._audioMeta.channelCount} channels, repeat last frame`), n = r), h = [];
							for (let e = 0; e < t; e++) {
								let e = Math.round(i);
								if (h.length > 0) {
									let t = h[h.length - 1];
									t.duration = e - t.dts
								}
								let t = {
									dts: e,
									pts: e,
									cts: 0,
									unit: n,
									size: n.byteLength,
									duration: 0,
									originalDts: s,
									flags: {
										isLeading: 0,
										dependsOn: 1,
										isDependedOn: 0,
										hasRedundancy: 0
									}
								};
								h.push(t), p += t.size, i += o
							}
							let a = h[h.length - 1];
							a.duration = u + c - a.dts, c = Math.round(o)
						}
						m.push({
							dts: u,
							pts: u,
							cts: 0,
							unit: t.unit,
							size: t.unit.byteLength,
							duration: c,
							originalDts: s,
							flags: {
								isLeading: 0,
								dependsOn: 1,
								isDependedOn: 0,
								hasRedundancy: 0
							}
						}), d && m.push.apply(m, h)
					}
					u ? f = new Uint8Array(p) : (f = new Uint8Array(p), f[0] = p >>> 24 & 255, f[1] = p >>> 16 & 255, f[2] = p >>> 8 & 255, f[3] = 255 & p, f.set(z.types.mdat, 4));
					for (let e = 0; e < m.length; e++) {
						let t = m[e].unit;
						f.set(t, h), h += t.byteLength
					}
					let y = m[m.length - 1];
					s = y.dts + y.duration, this._audioNextDts = s;
					let E = new X;
					E.beginDts = a, E.endDts = s, E.beginPts = a, E.endPts = s, E.originalBeginDts = m[0].originalDts, E.originalEndDts = y.originalDts + y.duration, E.firstSample = new Y(m[0].dts, m[0].pts, m[0].duration, m[0].originalDts, !1), E.lastSample = new Y(y.dts, y.pts, y.duration, y.originalDts, !1), this._isLive || this._audioSegmentInfoList.append(E), r.samples = m, r.sequenceNumber++;
					let b = null;
					b = u ? new Uint8Array : z.moof(r, a), r.samples = [], r.length = 0;
					let S = {
						type: "audio",
						data: this._mergeBoxes(b, f)
							.buffer,
						sampleCount: m.length,
						info: E
					};
					u && c && (S.timestampOffset = a), this._onMediaSegment("audio", S)
				}
				_remuxVideo(e, t) {
					if (null == this._videoMeta) return;
					let r = e,
						i = r.samples,
						n = void 0,
						a = -1,
						s = -1,
						o = -1,
						l = -1;
					if (!i || 0 === i.length) return;
					if (1 === i.length && !t) return;
					let u = 8,
						c = null,
						d = 8 + e.length,
						h = null;
					if (i.length > 1 && (h = i.pop(), d -= h.length), null != this._videoStashedLastSample) {
						let e = this._videoStashedLastSample;
						this._videoStashedLastSample = null, i.unshift(e), d += e.length
					}
					null != h && (this._videoStashedLastSample = h);
					let f = i[0].dts - this._dtsBase;
					if (this._videoNextDts) n = f - this._videoNextDts;
					else if (this._videoSegmentInfoList.isEmpty()) n = 0;
					else {
						let e = this._videoSegmentInfoList.getLastSampleBefore(f);
						if (null != e) {
							let t = f - (e.originalDts + e.duration);
							t <= 3 && (t = 0), n = f - (e.dts + e.duration + t)
						} else n = 0
					}
					let p = new X,
						g = [];
					for (let e = 0; e < i.length; e++) {
						let t = i[e],
							r = t.dts - this._dtsBase,
							s = t.isKeyframe,
							l = r - n,
							u = t.cts,
							c = l + u; - 1 === a && (a = l, o = c);
						let d = 0;
						if (e !== i.length - 1) {
							d = i[e + 1].dts - this._dtsBase - n - l
						} else if (null != h) {
							d = h.dts - this._dtsBase - n - l
						} else d = g.length >= 1 ? g[g.length - 1].duration : Math.floor(this._videoMeta.refSampleDuration);
						if (s) {
							let e = new Y(l, c, d, t.dts, !0);
							e.fileposition = t.fileposition, p.appendSyncPoint(e)
						}
						g.push({
							dts: l,
							pts: c,
							cts: u,
							units: t.units,
							size: t.length,
							isKeyframe: s,
							duration: d,
							originalDts: r,
							flags: {
								isLeading: 0,
								dependsOn: s ? 2 : 1,
								isDependedOn: s ? 1 : 0,
								hasRedundancy: 0,
								isNonSync: s ? 0 : 1
							}
						})
					}
					c = new Uint8Array(d), c[0] = d >>> 24 & 255, c[1] = d >>> 16 & 255, c[2] = d >>> 8 & 255, c[3] = 255 & d, c.set(z.types.mdat, 4);
					for (let e = 0; e < g.length; e++) {
						let t = g[e].units;
						for (; t.length;) {
							let e = t.shift()
								.data;
							c.set(e, u), u += e.byteLength
						}
					}
					let v = g[g.length - 1];
					if (s = v.dts + v.duration, l = v.pts + v.duration, this._videoNextDts = s, p.beginDts = a, p.endDts = s, p.beginPts = o, p.endPts = l, p.originalBeginDts = g[0].originalDts, p.originalEndDts = v.originalDts + v.duration, p.firstSample = new Y(g[0].dts, g[0].pts, g[0].duration, g[0].originalDts, g[0].isKeyframe), p.lastSample = new Y(v.dts, v.pts, v.duration, v.originalDts, v.isKeyframe), this._isLive || this._videoSegmentInfoList.append(p), r.samples = g, r.sequenceNumber++, this._forceFirstIDR) {
						let e = g[0].flags;
						e.dependsOn = 2, e.isNonSync = 0
					}
					let m = z.moof(r, a);
					r.samples = [], r.length = 0, this._onMediaSegment("video", {
						type: "video",
						data: this._mergeBoxes(m, c)
							.buffer,
						sampleCount: g.length,
						info: p
					})
				}
				_mergeBoxes(e, t) {
					let r = new Uint8Array(e.byteLength + t.byteLength);
					return r.set(e, 0), r.set(t, e.byteLength), r
				}
			};
			var Z = {
				IO_ERROR: "io_error",
				DEMUX_ERROR: "demux_error",
				INIT_SEGMENT: "init_segment",
				MEDIA_SEGMENT: "media_segment",
				LOADING_COMPLETE: "loading_complete",
				RECOVERED_EARLY_EOF: "recovered_early_eof",
				MEDIA_INFO: "media_info",
				METADATA_ARRIVED: "metadata_arrived",
				SCRIPTDATA_ARRIVED: "scriptdata_arrived",
				STATISTICS_INFO: "statistics_info",
				RECOMMEND_SEEKPOINT: "recommend_seekpoint"
			};
			var ee = class {
				constructor(e, t) {
					this.TAG = "TransmuxingController", this._emitter = new s.a, this._config = t, e.segments || (e.segments = [{
						duration: e.duration,
						filesize: e.filesize,
						url: e.url
					}]), "boolean" != typeof e.cors && (e.cors = !0), "boolean" != typeof e.withCredentials && (e.withCredentials = !1), this._mediaDataSource = e, this._currentSegmentIndex = 0;
					let r = 0;
					this._mediaDataSource.segments.forEach(i => {
						i.timestampBase = r, r += i.duration, i.cors = e.cors, i.withCredentials = e.withCredentials, t.referrerPolicy && (i.referrerPolicy = t.referrerPolicy)
					}), isNaN(r) || this._mediaDataSource.duration === r || (this._mediaDataSource.duration = r), this._mediaInfo = null, this._demuxer = null, this._remuxer = null, this._ioctl = null, this._pendingSeekTime = null, this._pendingResolveSeekPoint = null, this._statisticsReporter = null
				}
				destroy() {
					this._mediaInfo = null, this._mediaDataSource = null, this._statisticsReporter && this._disableStatisticsReporter(), this._ioctl && (this._ioctl.destroy(), this._ioctl = null), this._demuxer && (this._demuxer.destroy(), this._demuxer = null), this._remuxer && (this._remuxer.destroy(), this._remuxer = null), this._emitter.removeAllListeners(), this._emitter = null
				}
				on(e, t) {
					this._emitter.addListener(e, t)
				}
				off(e, t) {
					this._emitter.removeListener(e, t)
				}
				start() {
					this._loadSegment(0), this._enableStatisticsReporter()
				}
				_loadSegment(e, t) {
					this._currentSegmentIndex = e;
					let r = this._mediaDataSource.segments[e],
						i = this._ioctl = new w(r, this._config, e);
					i.onError = this._onIOException.bind(this), i.onSeeked = this._onIOSeeked.bind(this), i.onComplete = this._onIOComplete.bind(this), i.onRedirect = this._onIORedirect.bind(this), i.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this), t ? this._demuxer.bindDataSource(this._ioctl) : i.onDataArrival = this._onInitChunkArrival.bind(this), i.open(t)
				}
				stop() {
					this._internalAbort(), this._disableStatisticsReporter()
				}
				_internalAbort() {
					this._ioctl && (this._ioctl.destroy(), this._ioctl = null)
				}
				pause() {
					this._ioctl && this._ioctl.isWorking() && (this._ioctl.pause(), this._disableStatisticsReporter())
				}
				resume() {
					this._ioctl && this._ioctl.isPaused() && (this._ioctl.resume(), this._enableStatisticsReporter())
				}
				seek(e) {
					if (null == this._mediaInfo || !this._mediaInfo.isSeekable()) return;
					let t = this._searchSegmentIndexContains(e);
					if (t === this._currentSegmentIndex) {
						let r = this._mediaInfo.segments[t];
						if (null == r) this._pendingSeekTime = e;
						else {
							let t = r.getNearestKeyframe(e);
							this._remuxer.seek(t.milliseconds), this._ioctl.seek(t.fileposition), this._pendingResolveSeekPoint = t.milliseconds
						}
					} else {
						let r = this._mediaInfo.segments[t];
						if (null == r) this._pendingSeekTime = e, this._internalAbort(), this._remuxer.seek(), this._remuxer.insertDiscontinuity(), this._loadSegment(t);
						else {
							let i = r.getNearestKeyframe(e);
							this._internalAbort(), this._remuxer.seek(e), this._remuxer.insertDiscontinuity(), this._demuxer.resetMediaInfo(), this._demuxer.timestampBase = this._mediaDataSource.segments[t].timestampBase, this._loadSegment(t, i.fileposition), this._pendingResolveSeekPoint = i.milliseconds, this._reportSegmentMediaInfo(t)
						}
					}
					this._enableStatisticsReporter()
				}
				_searchSegmentIndexContains(e) {
					let t = this._mediaDataSource.segments,
						r = t.length - 1;
					for (let i = 0; i < t.length; i++)
						if (e < t[i].timestampBase) {
							r = i - 1;
							break
						} return r
				}
				_onInitChunkArrival(e, t) {
					let r = null,
						i = 0;
					if (t > 0) this._demuxer.bindDataSource(this._ioctl), this._demuxer.timestampBase = this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase, i = this._demuxer.parseChunks(e, t);
					else if ((r = H.probe(e))
						.match) {
						this._demuxer = new H(r, this._config), this._remuxer || (this._remuxer = new Q(this._config));
						let n = this._mediaDataSource;
						null == n.duration || isNaN(n.duration) || (this._demuxer.overridedDuration = n.duration), "boolean" == typeof n.hasAudio && (this._demuxer.overridedHasAudio = n.hasAudio), "boolean" == typeof n.hasVideo && (this._demuxer.overridedHasVideo = n.hasVideo), this._demuxer.timestampBase = n.segments[this._currentSegmentIndex].timestampBase, this._demuxer.onError = this._onDemuxException.bind(this), this._demuxer.onMediaInfo = this._onMediaInfo.bind(this), this._demuxer.onMetaDataArrived = this._onMetaDataArrived.bind(this), this._demuxer.onScriptDataArrived = this._onScriptDataArrived.bind(this), this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this), i = this._demuxer.parseChunks(e, t)
					} else r = null, l.e(this.TAG, "Non-FLV, Unsupported media type!"), Promise.resolve()
						.then(() => {
							this._internalAbort()
						}), this._emitter.emit(Z.DEMUX_ERROR, V.FORMAT_UNSUPPORTED, "Non-FLV, Unsupported media type"), i = 0;
					return i
				}
				_onMediaInfo(e) {
					null == this._mediaInfo && (this._mediaInfo = Object.assign({}, e), this._mediaInfo.keyframesIndex = null, this._mediaInfo.segments = [], this._mediaInfo.segmentCount = this._mediaDataSource.segments.length, Object.setPrototypeOf(this._mediaInfo, x.prototype));
					let t = Object.assign({}, e);
					Object.setPrototypeOf(t, x.prototype), this._mediaInfo.segments[this._currentSegmentIndex] = t, this._reportSegmentMediaInfo(this._currentSegmentIndex), null != this._pendingSeekTime && Promise.resolve()
						.then(() => {
							let e = this._pendingSeekTime;
							this._pendingSeekTime = null, this.seek(e)
						})
				}
				_onMetaDataArrived(e) {
					this._emitter.emit(Z.METADATA_ARRIVED, e)
				}
				_onScriptDataArrived(e) {
					this._emitter.emit(Z.SCRIPTDATA_ARRIVED, e)
				}
				_onIOSeeked() {
					this._remuxer.insertDiscontinuity()
				}
				_onIOComplete(e) {
					let t = e + 1;
					t < this._mediaDataSource.segments.length ? (this._internalAbort(), this._remuxer.flushStashedSamples(), this._loadSegment(t)) : (this._remuxer.flushStashedSamples(), this._emitter.emit(Z.LOADING_COMPLETE), this._disableStatisticsReporter())
				}
				_onIORedirect(e) {
					let t = this._ioctl.extraData;
					this._mediaDataSource.segments[t].redirectedURL = e
				}
				_onIORecoveredEarlyEof() {
					this._emitter.emit(Z.RECOVERED_EARLY_EOF)
				}
				_onIOException(e, t) {
					l.e(this.TAG, `IOException: type = ${e}, code = ${t.code}, msg = ${t.msg}`), this._emitter.emit(Z.IO_ERROR, e, t), this._disableStatisticsReporter()
				}
				_onDemuxException(e, t) {
					l.e(this.TAG, `DemuxException: type = ${e}, info = ${t}`), this._emitter.emit(Z.DEMUX_ERROR, e, t)
				}
				_onRemuxerInitSegmentArrival(e, t) {
					this._emitter.emit(Z.INIT_SEGMENT, e, t)
				}
				_onRemuxerMediaSegmentArrival(e, t) {
					if (null == this._pendingSeekTime && (this._emitter.emit(Z.MEDIA_SEGMENT, e, t), null != this._pendingResolveSeekPoint && "video" === e)) {
						let e = t.info.syncPoints,
							r = this._pendingResolveSeekPoint;
						this._pendingResolveSeekPoint = null, _.safari && e.length > 0 && e[0].originalDts === r && (r = e[0].pts), this._emitter.emit(Z.RECOMMEND_SEEKPOINT, r)
					}
				}
				_enableStatisticsReporter() {
					null == this._statisticsReporter && (this._statisticsReporter = self.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval))
				}
				_disableStatisticsReporter() {
					this._statisticsReporter && (self.clearInterval(this._statisticsReporter), this._statisticsReporter = null)
				}
				_reportSegmentMediaInfo(e) {
					let t = this._mediaInfo.segments[e],
						r = Object.assign({}, t);
					r.duration = this._mediaInfo.duration, r.segmentCount = this._mediaInfo.segmentCount, delete r.segments, delete r.keyframesIndex, this._emitter.emit(Z.MEDIA_INFO, r)
				}
				_reportStatisticsInfo() {
					let e = {};
					e.url = this._ioctl.currentURL, e.hasRedirect = this._ioctl.hasRedirect, e.hasRedirect && (e.redirectedURL = this._ioctl.currentRedirectedURL), e.speed = this._ioctl.currentSpeed, e.loaderType = this._ioctl.loaderType, e.currentSegmentIndex = this._currentSegmentIndex, e.totalSegmentCount = this._mediaDataSource.segments.length, this._emitter.emit(Z.STATISTICS_INFO, e)
				}
			};
			var te = function(e) {
				let t = null,
					r = function(t, r) {
						e.postMessage({
							msg: "logcat_callback",
							data: {
								type: t,
								logcat: r
							}
						})
					}.bind(this);

				function i(t, r) {
					let i = {
						msg: Z.INIT_SEGMENT,
						data: {
							type: t,
							data: r
						}
					};
					e.postMessage(i, [r.data])
				}

				function a(t, r) {
					let i = {
						msg: Z.MEDIA_SEGMENT,
						data: {
							type: t,
							data: r
						}
					};
					e.postMessage(i, [r.data])
				}

				function s() {
					let t = {
						msg: Z.LOADING_COMPLETE
					};
					e.postMessage(t)
				}

				function o() {
					let t = {
						msg: Z.RECOVERED_EARLY_EOF
					};
					e.postMessage(t)
				}

				function l(t) {
					let r = {
						msg: Z.MEDIA_INFO,
						data: t
					};
					e.postMessage(r)
				}

				function u(t) {
					let r = {
						msg: Z.METADATA_ARRIVED,
						data: t
					};
					e.postMessage(r)
				}

				function c(t) {
					let r = {
						msg: Z.SCRIPTDATA_ARRIVED,
						data: t
					};
					e.postMessage(r)
				}

				function d(t) {
					let r = {
						msg: Z.STATISTICS_INFO,
						data: t
					};
					e.postMessage(r)
				}

				function h(t, r) {
					e.postMessage({
						msg: Z.IO_ERROR,
						data: {
							type: t,
							info: r
						}
					})
				}

				function f(t, r) {
					e.postMessage({
						msg: Z.DEMUX_ERROR,
						data: {
							type: t,
							info: r
						}
					})
				}

				function p(t) {
					e.postMessage({
						msg: Z.RECOMMEND_SEEKPOINT,
						data: t
					})
				}
				n.install(), e.addEventListener("message", (function(n) {
					switch (n.data.cmd) {
						case "init":
							t = new ee(n.data.param[0], n.data.param[1]), t.on(Z.IO_ERROR, h.bind(this)), t.on(Z.DEMUX_ERROR, f.bind(this)), t.on(Z.INIT_SEGMENT, i.bind(this)), t.on(Z.MEDIA_SEGMENT, a.bind(this)), t.on(Z.LOADING_COMPLETE, s.bind(this)), t.on(Z.RECOVERED_EARLY_EOF, o.bind(this)), t.on(Z.MEDIA_INFO, l.bind(this)), t.on(Z.METADATA_ARRIVED, u.bind(this)), t.on(Z.SCRIPTDATA_ARRIVED, c.bind(this)), t.on(Z.STATISTICS_INFO, d.bind(this)), t.on(Z.RECOMMEND_SEEKPOINT, p.bind(this));
							break;
						case "destroy":
							t && (t.destroy(), t = null), e.postMessage({
								msg: "destroyed"
							});
							break;
						case "start":
							t.start();
							break;
						case "stop":
							t.stop();
							break;
						case "seek":
							t.seek(n.data.param);
							break;
						case "pause":
							t.pause();
							break;
						case "resume":
							t.resume();
							break;
						case "logging_config":
							{
								let e = n.data.param;I.applyConfig(e),
								!0 === e.enableCallback ? I.addLogListener(r) : I.removeLogListener(r);
								break
							}
					}
				}))
			};
			var re = class {
				constructor(e, t) {
					if (this.TAG = "Transmuxer", this._emitter = new s.a, t.enableWorker && "undefined" != typeof Worker) try {
						let i = r(353);
						this._worker = i(te), this._workerDestroying = !1, this._worker.addEventListener("message", this._onWorkerMessage.bind(this)), this._worker.postMessage({
							cmd: "init",
							param: [e, t]
						}), this.e = {
							onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this)
						}, I.registerListener(this.e.onLoggingConfigChanged), this._worker.postMessage({
							cmd: "logging_config",
							param: I.getConfig()
						})
					} catch (r) {
						l.e(this.TAG, "Error while initialize transmuxing worker, fallback to inline transmuxing"), this._worker = null, this._controller = new ee(e, t)
					} else this._controller = new ee(e, t);
					if (this._controller) {
						let e = this._controller;
						e.on(Z.IO_ERROR, this._onIOError.bind(this)), e.on(Z.DEMUX_ERROR, this._onDemuxError.bind(this)), e.on(Z.INIT_SEGMENT, this._onInitSegment.bind(this)), e.on(Z.MEDIA_SEGMENT, this._onMediaSegment.bind(this)), e.on(Z.LOADING_COMPLETE, this._onLoadingComplete.bind(this)), e.on(Z.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this)), e.on(Z.MEDIA_INFO, this._onMediaInfo.bind(this)), e.on(Z.METADATA_ARRIVED, this._onMetaDataArrived.bind(this)), e.on(Z.SCRIPTDATA_ARRIVED, this._onScriptDataArrived.bind(this)), e.on(Z.STATISTICS_INFO, this._onStatisticsInfo.bind(this)), e.on(Z.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this))
					}
				}
				destroy() {
					this._worker ? this._workerDestroying || (this._workerDestroying = !0, this._worker.postMessage({
						cmd: "destroy"
					}), I.removeListener(this.e.onLoggingConfigChanged), this.e = null) : (this._controller.destroy(), this._controller = null), this._emitter.removeAllListeners(), this._emitter = null
				}
				on(e, t) {
					this._emitter.addListener(e, t)
				}
				off(e, t) {
					this._emitter.removeListener(e, t)
				}
				hasWorker() {
					return null != this._worker
				}
				open() {
					this._worker ? this._worker.postMessage({
						cmd: "start"
					}) : this._controller.start()
				}
				close() {
					this._worker ? this._worker.postMessage({
						cmd: "stop"
					}) : this._controller.stop()
				}
				seek(e) {
					this._worker ? this._worker.postMessage({
						cmd: "seek",
						param: e
					}) : this._controller.seek(e)
				}
				pause() {
					this._worker ? this._worker.postMessage({
						cmd: "pause"
					}) : this._controller.pause()
				}
				resume() {
					this._worker ? this._worker.postMessage({
						cmd: "resume"
					}) : this._controller.resume()
				}
				_onInitSegment(e, t) {
					Promise.resolve()
						.then(() => {
							this._emitter.emit(Z.INIT_SEGMENT, e, t)
						})
				}
				_onMediaSegment(e, t) {
					Promise.resolve()
						.then(() => {
							this._emitter.emit(Z.MEDIA_SEGMENT, e, t)
						})
				}
				_onLoadingComplete() {
					Promise.resolve()
						.then(() => {
							this._emitter.emit(Z.LOADING_COMPLETE)
						})
				}
				_onRecoveredEarlyEof() {
					Promise.resolve()
						.then(() => {
							this._emitter.emit(Z.RECOVERED_EARLY_EOF)
						})
				}
				_onMediaInfo(e) {
					Promise.resolve()
						.then(() => {
							this._emitter.emit(Z.MEDIA_INFO, e)
						})
				}
				_onMetaDataArrived(e) {
					Promise.resolve()
						.then(() => {
							this._emitter.emit(Z.METADATA_ARRIVED, e)
						})
				}
				_onScriptDataArrived(e) {
					Promise.resolve()
						.then(() => {
							this._emitter.emit(Z.SCRIPTDATA_ARRIVED, e)
						})
				}
				_onStatisticsInfo(e) {
					Promise.resolve()
						.then(() => {
							this._emitter.emit(Z.STATISTICS_INFO, e)
						})
				}
				_onIOError(e, t) {
					Promise.resolve()
						.then(() => {
							this._emitter.emit(Z.IO_ERROR, e, t)
						})
				}
				_onDemuxError(e, t) {
					Promise.resolve()
						.then(() => {
							this._emitter.emit(Z.DEMUX_ERROR, e, t)
						})
				}
				_onRecommendSeekpoint(e) {
					Promise.resolve()
						.then(() => {
							this._emitter.emit(Z.RECOMMEND_SEEKPOINT, e)
						})
				}
				_onLoggingConfigChanged(e) {
					this._worker && this._worker.postMessage({
						cmd: "logging_config",
						param: e
					})
				}
				_onWorkerMessage(e) {
					let t = e.data,
						r = t.data;
					if ("destroyed" === t.msg || this._workerDestroying) return this._workerDestroying = !1, this._worker.terminate(), void(this._worker = null);
					switch (t.msg) {
						case Z.INIT_SEGMENT:
						case Z.MEDIA_SEGMENT:
							this._emitter.emit(t.msg, r.type, r.data);
							break;
						case Z.LOADING_COMPLETE:
						case Z.RECOVERED_EARLY_EOF:
							this._emitter.emit(t.msg);
							break;
						case Z.MEDIA_INFO:
							Object.setPrototypeOf(r, x.prototype), this._emitter.emit(t.msg, r);
							break;
						case Z.METADATA_ARRIVED:
						case Z.SCRIPTDATA_ARRIVED:
						case Z.STATISTICS_INFO:
							this._emitter.emit(t.msg, r);
							break;
						case Z.IO_ERROR:
						case Z.DEMUX_ERROR:
							this._emitter.emit(t.msg, r.type, r.info);
							break;
						case Z.RECOMMEND_SEEKPOINT:
							this._emitter.emit(t.msg, r);
							break;
						case "logcat_callback":
							l.emitter.emit("log", r.type, r.logcat)
					}
				}
			};
			var ie = {
				ERROR: "error",
				SOURCE_OPEN: "source_open",
				UPDATE_END: "update_end",
				BUFFER_FULL: "buffer_full"
			};
			var ne = class {
				constructor(e) {
					this.TAG = "MSEController", this._config = e, this._emitter = new s.a, this._config.isLive && null == this._config.autoCleanupSourceBuffer && (this._config.autoCleanupSourceBuffer = !0), this.e = {
						onSourceOpen: this._onSourceOpen.bind(this),
						onSourceEnded: this._onSourceEnded.bind(this),
						onSourceClose: this._onSourceClose.bind(this),
						onSourceBufferError: this._onSourceBufferError.bind(this),
						onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this)
					}, this._mediaSource = null, this._mediaSourceObjectURL = null, this._mediaElement = null, this._isBufferFull = !1, this._hasPendingEos = !1, this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0, this._pendingSourceBufferInit = [], this._mimeTypes = {
						video: null,
						audio: null
					}, this._sourceBuffers = {
						video: null,
						audio: null
					}, this._lastInitSegments = {
						video: null,
						audio: null
					}, this._pendingSegments = {
						video: [],
						audio: []
					}, this._pendingRemoveRanges = {
						video: [],
						audio: []
					}, this._idrList = new $
				}
				destroy() {
					(this._mediaElement || this._mediaSource) && this.detachMediaElement(), this.e = null, this._emitter.removeAllListeners(), this._emitter = null
				}
				on(e, t) {
					this._emitter.addListener(e, t)
				}
				off(e, t) {
					this._emitter.removeListener(e, t)
				}
				attachMediaElement(e) {
					if (this._mediaSource) throw new d("MediaSource has been attached to an HTMLMediaElement!");
					let t = this._mediaSource = new window.MediaSource;
					t.addEventListener("sourceopen", this.e.onSourceOpen), t.addEventListener("sourceended", this.e.onSourceEnded), t.addEventListener("sourceclose", this.e.onSourceClose), this._mediaElement = e, this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource), e.src = this._mediaSourceObjectURL
				}
				detachMediaElement() {
					if (this._mediaSource) {
						let e = this._mediaSource;
						for (let t in this._sourceBuffers) {
							let r = this._pendingSegments[t];
							r.splice(0, r.length), this._pendingSegments[t] = null, this._pendingRemoveRanges[t] = null, this._lastInitSegments[t] = null;
							let i = this._sourceBuffers[t];
							if (i) {
								if ("closed" !== e.readyState) {
									try {
										e.removeSourceBuffer(i)
									} catch (e) {
										l.e(this.TAG, e.message)
									}
									i.removeEventListener("error", this.e.onSourceBufferError), i.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd)
								}
								this._mimeTypes[t] = null, this._sourceBuffers[t] = null
							}
						}
						if ("open" === e.readyState) try {
							e.endOfStream()
						} catch (e) {
							l.e(this.TAG, e.message)
						}
						e.removeEventListener("sourceopen", this.e.onSourceOpen), e.removeEventListener("sourceended", this.e.onSourceEnded), e.removeEventListener("sourceclose", this.e.onSourceClose), this._pendingSourceBufferInit = [], this._isBufferFull = !1, this._idrList.clear(), this._mediaSource = null
					}
					this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement = null), this._mediaSourceObjectURL && (window.URL.revokeObjectURL(this._mediaSourceObjectURL), this._mediaSourceObjectURL = null)
				}
				appendInitSegment(e, t) {
					if (!this._mediaSource || "open" !== this._mediaSource.readyState) return this._pendingSourceBufferInit.push(e), void this._pendingSegments[e.type].push(e);
					let r = e,
						i = "" + r.container;
					r.codec && r.codec.length > 0 && (i += ";codecs=" + r.codec);
					let n = !1;
					if (l.v(this.TAG, "Received Initialization Segment, mimeType: " + i), this._lastInitSegments[r.type] = r, i !== this._mimeTypes[r.type]) {
						if (this._mimeTypes[r.type]) l.v(this.TAG, `Notice: ${r.type} mimeType changed, origin: ${this._mimeTypes[r.type]}, target: ${i}`);
						else {
							n = !0;
							try {
								let e = this._sourceBuffers[r.type] = this._mediaSource.addSourceBuffer(i);
								e.addEventListener("error", this.e.onSourceBufferError), e.addEventListener("updateend", this.e.onSourceBufferUpdateEnd)
							} catch (e) {
								return l.e(this.TAG, e.message), void this._emitter.emit(ie.ERROR, {
									code: e.code,
									msg: e.message
								})
							}
						}
						this._mimeTypes[r.type] = i
					}
					t || this._pendingSegments[r.type].push(r), n || this._sourceBuffers[r.type] && !this._sourceBuffers[r.type].updating && this._doAppendSegments(), _.safari && "audio/mpeg" === r.container && r.mediaDuration > 0 && (this._requireSetMediaDuration = !0, this._pendingMediaDuration = r.mediaDuration / 1e3, this._updateMediaSourceDuration())
				}
				appendMediaSegment(e) {
					let t = e;
					this._pendingSegments[t.type].push(t), this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer() && this._doCleanupSourceBuffer();
					let r = this._sourceBuffers[t.type];
					!r || r.updating || this._hasPendingRemoveRanges() || this._doAppendSegments()
				}
				seek(e) {
					for (let e in this._sourceBuffers) {
						if (!this._sourceBuffers[e]) continue;
						let t = this._sourceBuffers[e];
						if ("open" === this._mediaSource.readyState) try {
							t.abort()
						} catch (e) {
							l.e(this.TAG, e.message)
						}
						this._idrList.clear();
						let r = this._pendingSegments[e];
						if (r.splice(0, r.length), "closed" !== this._mediaSource.readyState) {
							for (let r = 0; r < t.buffered.length; r++) {
								let i = t.buffered.start(r),
									n = t.buffered.end(r);
								this._pendingRemoveRanges[e].push({
									start: i,
									end: n
								})
							}
							if (t.updating || this._doRemoveRanges(), _.safari) {
								let r = this._lastInitSegments[e];
								r && (this._pendingSegments[e].push(r), t.updating || this._doAppendSegments())
							}
						}
					}
				}
				endOfStream() {
					let e = this._mediaSource,
						t = this._sourceBuffers;
					e && "open" === e.readyState ? t.video && t.video.updating || t.audio && t.audio.updating ? this._hasPendingEos = !0 : (this._hasPendingEos = !1, e.endOfStream()) : e && "closed" === e.readyState && this._hasPendingSegments() && (this._hasPendingEos = !0)
				}
				getNearestKeyframe(e) {
					return this._idrList.getLastSyncPointBeforeDts(e)
				}
				_needCleanupSourceBuffer() {
					if (!this._config.autoCleanupSourceBuffer) return !1;
					let e = this._mediaElement.currentTime;
					for (let t in this._sourceBuffers) {
						let r = this._sourceBuffers[t];
						if (r) {
							let t = r.buffered;
							if (t.length >= 1 && e - t.start(0) >= this._config.autoCleanupMaxBackwardDuration) return !0
						}
					}
					return !1
				}
				_doCleanupSourceBuffer() {
					let e = this._mediaElement.currentTime;
					for (let t in this._sourceBuffers) {
						let r = this._sourceBuffers[t];
						if (r) {
							let i = r.buffered,
								n = !1;
							for (let r = 0; r < i.length; r++) {
								let a = i.start(r),
									s = i.end(r);
								if (a <= e && e < s + 3) {
									if (e - a >= this._config.autoCleanupMaxBackwardDuration) {
										n = !0;
										let r = e - this._config.autoCleanupMinBackwardDuration;
										this._pendingRemoveRanges[t].push({
											start: a,
											end: r
										})
									}
								} else s < e && (n = !0, this._pendingRemoveRanges[t].push({
									start: a,
									end: s
								}))
							}
							n && !r.updating && this._doRemoveRanges()
						}
					}
				}
				_updateMediaSourceDuration() {
					let e = this._sourceBuffers;
					if (0 === this._mediaElement.readyState || "open" !== this._mediaSource.readyState) return;
					if (e.video && e.video.updating || e.audio && e.audio.updating) return;
					let t = this._mediaSource.duration,
						r = this._pendingMediaDuration;
					r > 0 && (isNaN(t) || r > t) && (l.v(this.TAG, `Update MediaSource duration from ${t} to ${r}`), this._mediaSource.duration = r), this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0
				}
				_doRemoveRanges() {
					for (let e in this._pendingRemoveRanges) {
						if (!this._sourceBuffers[e] || this._sourceBuffers[e].updating) continue;
						let t = this._sourceBuffers[e],
							r = this._pendingRemoveRanges[e];
						for (; r.length && !t.updating;) {
							let e = r.shift();
							t.remove(e.start, e.end)
						}
					}
				}
				_doAppendSegments() {
					let e = this._pendingSegments;
					for (let t in e)
						if (this._sourceBuffers[t] && !this._sourceBuffers[t].updating && e[t].length > 0) {
							let r = e[t].shift();
							if (r.timestampOffset) {
								let e = this._sourceBuffers[t].timestampOffset,
									i = r.timestampOffset / 1e3;
								Math.abs(e - i) > .1 && (l.v(this.TAG, `Update MPEG audio timestampOffset from ${e} to ${i}`), this._sourceBuffers[t].timestampOffset = i), delete r.timestampOffset
							}
							if (!r.data || 0 === r.data.byteLength) continue;
							try {
								this._sourceBuffers[t].appendBuffer(r.data), this._isBufferFull = !1, "video" === t && r.hasOwnProperty("info") && this._idrList.appendArray(r.info.syncPoints)
							} catch (e) {
								this._pendingSegments[t].unshift(r), 22 === e.code ? (this._isBufferFull || this._emitter.emit(ie.BUFFER_FULL), this._isBufferFull = !0) : (l.e(this.TAG, e.message), this._emitter.emit(ie.ERROR, {
									code: e.code,
									msg: e.message
								}))
							}
						}
				}
				_onSourceOpen() {
					if (l.v(this.TAG, "MediaSource onSourceOpen"), this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._pendingSourceBufferInit.length > 0) {
						let e = this._pendingSourceBufferInit;
						for (; e.length;) {
							let t = e.shift();
							this.appendInitSegment(t, !0)
						}
					}
					this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(ie.SOURCE_OPEN)
				}
				_onSourceEnded() {
					l.v(this.TAG, "MediaSource onSourceEnded")
				}
				_onSourceClose() {
					l.v(this.TAG, "MediaSource onSourceClose"), this._mediaSource && null != this.e && (this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded), this._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose))
				}
				_hasPendingSegments() {
					let e = this._pendingSegments;
					return e.video.length > 0 || e.audio.length > 0
				}
				_hasPendingRemoveRanges() {
					let e = this._pendingRemoveRanges;
					return e.video.length > 0 || e.audio.length > 0
				}
				_onSourceBufferUpdateEnd() {
					this._requireSetMediaDuration ? this._updateMediaSourceDuration() : this._hasPendingRemoveRanges() ? this._doRemoveRanges() : this._hasPendingSegments() ? this._doAppendSegments() : this._hasPendingEos && this.endOfStream(), this._emitter.emit(ie.UPDATE_END)
				}
				_onSourceBufferError(e) {
					l.e(this.TAG, "SourceBuffer Error: " + e)
				}
			};
			const ae = {
					NETWORK_ERROR: "NetworkError",
					MEDIA_ERROR: "MediaError",
					OTHER_ERROR: "OtherError"
				},
				se = {
					NETWORK_EXCEPTION: g.EXCEPTION,
					NETWORK_STATUS_CODE_INVALID: g.HTTP_STATUS_CODE_INVALID,
					NETWORK_TIMEOUT: g.CONNECTING_TIMEOUT,
					NETWORK_UNRECOVERABLE_EARLY_EOF: g.UNRECOVERABLE_EARLY_EOF,
					MEDIA_MSE_ERROR: "MediaMSEError",
					MEDIA_FORMAT_ERROR: V.FORMAT_ERROR,
					MEDIA_FORMAT_UNSUPPORTED: V.FORMAT_UNSUPPORTED,
					MEDIA_CODEC_UNSUPPORTED: V.CODEC_UNSUPPORTED
				};
			var oe = class {
				constructor(e, t) {
					if (this.TAG = "FlvPlayer", this._type = "FlvPlayer", this._emitter = new s.a, this._config = L(), "object" == typeof t && Object.assign(this._config, t), "flv" !== e.type.toLowerCase()) throw new h("FlvPlayer requires an flv MediaDataSource input!");
					!0 === e.isLive && (this._config.isLive = !0), this.e = {
						onvLoadedMetadata: this._onvLoadedMetadata.bind(this),
						onvSeeking: this._onvSeeking.bind(this),
						onvCanPlay: this._onvCanPlay.bind(this),
						onvStalled: this._onvStalled.bind(this),
						onvProgress: this._onvProgress.bind(this)
					}, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now, this._pendingSeekTime = null, this._requestSetTime = !1, this._seekpointRecord = null, this._progressChecker = null, this._mediaDataSource = e, this._mediaElement = null, this._msectl = null, this._transmuxer = null, this._mseSourceOpened = !1, this._hasPendingLoad = !1, this._receivedCanPlay = !1, this._mediaInfo = null, this._statisticsInfo = null;
					let r = _.chrome && (_.version.major < 50 || 50 === _.version.major && _.version.build < 2661);
					this._alwaysSeekKeyframe = !!(r || _.msedge || _.msie), this._alwaysSeekKeyframe && (this._config.accurateSeek = !1)
				}
				destroy() {
					null != this._progressChecker && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._transmuxer && this.unload(), this._mediaElement && this.detachMediaElement(), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null
				}
				on(e, t) {
					e === D.MEDIA_INFO ? null != this._mediaInfo && Promise.resolve()
						.then(() => {
							this._emitter.emit(D.MEDIA_INFO, this.mediaInfo)
						}) : e === D.STATISTICS_INFO && null != this._statisticsInfo && Promise.resolve()
						.then(() => {
							this._emitter.emit(D.STATISTICS_INFO, this.statisticsInfo)
						}), this._emitter.addListener(e, t)
				}
				off(e, t) {
					this._emitter.removeListener(e, t)
				}
				attachMediaElement(e) {
					if (this._mediaElement = e, e.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), e.addEventListener("seeking", this.e.onvSeeking), e.addEventListener("canplay", this.e.onvCanPlay), e.addEventListener("stalled", this.e.onvStalled), e.addEventListener("progress", this.e.onvProgress), this._msectl = new ne(this._config), this._msectl.on(ie.UPDATE_END, this._onmseUpdateEnd.bind(this)), this._msectl.on(ie.BUFFER_FULL, this._onmseBufferFull.bind(this)), this._msectl.on(ie.SOURCE_OPEN, () => {
						this._mseSourceOpened = !0, this._hasPendingLoad && (this._hasPendingLoad = !1, this.load())
					}), this._msectl.on(ie.ERROR, e => {
						this._emitter.emit(D.ERROR, ae.MEDIA_ERROR, se.MEDIA_MSE_ERROR, e)
					}), this._msectl.attachMediaElement(e), null != this._pendingSeekTime) try {
						e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null
					} catch (e) {}
				}
				detachMediaElement() {
					this._mediaElement && (this._msectl.detachMediaElement(), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement.removeEventListener("seeking", this.e.onvSeeking), this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay), this._mediaElement.removeEventListener("stalled", this.e.onvStalled), this._mediaElement.removeEventListener("progress", this.e.onvProgress), this._mediaElement = null), this._msectl && (this._msectl.destroy(), this._msectl = null)
				}
				load() {
					if (!this._mediaElement) throw new d("HTMLMediaElement must be attached before load()!");
					if (this._transmuxer) throw new d("FlvPlayer.load() has been called, please call unload() first!");
					this._hasPendingLoad || (this._config.deferLoadAfterSourceOpen && !1 === this._mseSourceOpened ? this._hasPendingLoad = !0 : (this._mediaElement.readyState > 0 && (this._requestSetTime = !0, this._mediaElement.currentTime = 0), this._transmuxer = new re(this._mediaDataSource, this._config), this._transmuxer.on(Z.INIT_SEGMENT, (e, t) => {
						this._msectl.appendInitSegment(t)
					}), this._transmuxer.on(Z.MEDIA_SEGMENT, (e, t) => {
						if (this._msectl.appendMediaSegment(t), this._config.lazyLoad && !this._config.isLive) {
							let e = this._mediaElement.currentTime;
							t.info.endDts >= 1e3 * (e + this._config.lazyLoadMaxDuration) && null == this._progressChecker && (l.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), this._suspendTransmuxer())
						}
					}), this._transmuxer.on(Z.LOADING_COMPLETE, () => {
						this._msectl.endOfStream(), this._emitter.emit(D.LOADING_COMPLETE)
					}), this._transmuxer.on(Z.RECOVERED_EARLY_EOF, () => {
						this._emitter.emit(D.RECOVERED_EARLY_EOF)
					}), this._transmuxer.on(Z.IO_ERROR, (e, t) => {
						this._emitter.emit(D.ERROR, ae.NETWORK_ERROR, e, t)
					}), this._transmuxer.on(Z.DEMUX_ERROR, (e, t) => {
						this._emitter.emit(D.ERROR, ae.MEDIA_ERROR, e, {
							code: -1,
							msg: t
						})
					}), this._transmuxer.on(Z.MEDIA_INFO, e => {
						this._mediaInfo = e, this._emitter.emit(D.MEDIA_INFO, Object.assign({}, e))
					}), this._transmuxer.on(Z.METADATA_ARRIVED, e => {
						this._emitter.emit(D.METADATA_ARRIVED, e)
					}), this._transmuxer.on(Z.SCRIPTDATA_ARRIVED, e => {
						this._emitter.emit(D.SCRIPTDATA_ARRIVED, e)
					}), this._transmuxer.on(Z.STATISTICS_INFO, e => {
						this._statisticsInfo = this._fillStatisticsInfo(e), this._emitter.emit(D.STATISTICS_INFO, Object.assign({}, this._statisticsInfo))
					}), this._transmuxer.on(Z.RECOMMEND_SEEKPOINT, e => {
						this._mediaElement && !this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = e / 1e3)
					}), this._transmuxer.open()))
				}
				unload() {
					this._mediaElement && this._mediaElement.pause(), this._msectl && this._msectl.seek(0), this._transmuxer && (this._transmuxer.close(), this._transmuxer.destroy(), this._transmuxer = null)
				}
				play() {
					return this._mediaElement.play()
				}
				pause() {
					this._mediaElement.pause()
				}
				get type() {
					return this._type
				}
				get buffered() {
					return this._mediaElement.buffered
				}
				get duration() {
					return this._mediaElement.duration
				}
				get volume() {
					return this._mediaElement.volume
				}
				set volume(e) {
					this._mediaElement.volume = e
				}
				get muted() {
					return this._mediaElement.muted
				}
				set muted(e) {
					this._mediaElement.muted = e
				}
				get currentTime() {
					return this._mediaElement ? this._mediaElement.currentTime : 0
				}
				set currentTime(e) {
					this._mediaElement ? this._internalSeek(e) : this._pendingSeekTime = e
				}
				get mediaInfo() {
					return Object.assign({}, this._mediaInfo)
				}
				get statisticsInfo() {
					return null == this._statisticsInfo && (this._statisticsInfo = {}), this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo), Object.assign({}, this._statisticsInfo)
				}
				_fillStatisticsInfo(e) {
					if (e.playerType = this._type, !(this._mediaElement instanceof HTMLVideoElement)) return e;
					let t = !0,
						r = 0,
						i = 0;
					if (this._mediaElement.getVideoPlaybackQuality) {
						let e = this._mediaElement.getVideoPlaybackQuality();
						r = e.totalVideoFrames, i = e.droppedVideoFrames
					} else null != this._mediaElement.webkitDecodedFrameCount ? (r = this._mediaElement.webkitDecodedFrameCount, i = this._mediaElement.webkitDroppedFrameCount) : t = !1;
					return t && (e.decodedFrames = r, e.droppedFrames = i), e
				}
				_onmseUpdateEnd() {
					if (!this._config.lazyLoad || this._config.isLive) return;
					let e = this._mediaElement.buffered,
						t = this._mediaElement.currentTime,
						r = 0,
						i = 0;
					for (let n = 0; n < e.length; n++) {
						let a = e.start(n),
							s = e.end(n);
						if (a <= t && t < s) {
							r = a, i = s;
							break
						}
					}
					i >= t + this._config.lazyLoadMaxDuration && null == this._progressChecker && (l.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), this._suspendTransmuxer())
				}
				_onmseBufferFull() {
					l.v(this.TAG, "MSE SourceBuffer is full, suspend transmuxing task"), null == this._progressChecker && this._suspendTransmuxer()
				}
				_suspendTransmuxer() {
					this._transmuxer && (this._transmuxer.pause(), null == this._progressChecker && (this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1e3)))
				}
				_checkProgressAndResume() {
					let e = this._mediaElement.currentTime,
						t = this._mediaElement.buffered,
						r = !1;
					for (let i = 0; i < t.length; i++) {
						let n = t.start(i),
							a = t.end(i);
						if (e >= n && e < a) {
							e >= a - this._config.lazyLoadRecoverDuration && (r = !0);
							break
						}
					}
					r && (window.clearInterval(this._progressChecker), this._progressChecker = null, r && (l.v(this.TAG, "Continue loading from paused position"), this._transmuxer.resume()))
				}
				_isTimepointBuffered(e) {
					let t = this._mediaElement.buffered;
					for (let r = 0; r < t.length; r++) {
						let i = t.start(r),
							n = t.end(r);
						if (e >= i && e < n) return !0
					}
					return !1
				}
				_internalSeek(e) {
					let t = this._isTimepointBuffered(e),
						r = !1,
						i = 0;
					if (e < 1 && this._mediaElement.buffered.length > 0) {
						let t = this._mediaElement.buffered.start(0);
						(t < 1 && e < t || _.safari) && (r = !0, i = _.safari ? .1 : t)
					}
					if (r) this._requestSetTime = !0, this._mediaElement.currentTime = i;
					else if (t) {
						if (this._alwaysSeekKeyframe) {
							let t = this._msectl.getNearestKeyframe(Math.floor(1e3 * e));
							this._requestSetTime = !0, this._mediaElement.currentTime = null != t ? t.dts / 1e3 : e
						} else this._requestSetTime = !0, this._mediaElement.currentTime = e;
						null != this._progressChecker && this._checkProgressAndResume()
					} else null != this._progressChecker && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._msectl.seek(e), this._transmuxer.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = e)
				}
				_checkAndApplyUnbufferedSeekpoint() {
					if (this._seekpointRecord)
						if (this._seekpointRecord.recordTime <= this._now() - 100) {
							let e = this._mediaElement.currentTime;
							this._seekpointRecord = null, this._isTimepointBuffered(e) || (null != this._progressChecker && (window.clearTimeout(this._progressChecker), this._progressChecker = null), this._msectl.seek(e), this._transmuxer.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = e))
						} else window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50)
				}
				_checkAndResumeStuckPlayback(e) {
					let t = this._mediaElement;
					if (e || !this._receivedCanPlay || t.readyState < 2) {
						let e = t.buffered;
						e.length > 0 && t.currentTime < e.start(0) && (l.w(this.TAG, `Playback seems stuck at ${t.currentTime}, seek to ${e.start(0)}`), this._requestSetTime = !0, this._mediaElement.currentTime = e.start(0), this._mediaElement.removeEventListener("progress", this.e.onvProgress))
					} else this._mediaElement.removeEventListener("progress", this.e.onvProgress)
				}
				_onvLoadedMetadata(e) {
					null != this._pendingSeekTime && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null)
				}
				_onvSeeking(e) {
					let t = this._mediaElement.currentTime,
						r = this._mediaElement.buffered;
					if (this._requestSetTime) this._requestSetTime = !1;
					else {
						if (t < 1 && r.length > 0) {
							let e = r.start(0);
							if (e < 1 && t < e || _.safari) return this._requestSetTime = !0, void(this._mediaElement.currentTime = _.safari ? .1 : e)
						}
						if (this._isTimepointBuffered(t)) {
							if (this._alwaysSeekKeyframe) {
								let e = this._msectl.getNearestKeyframe(Math.floor(1e3 * t));
								null != e && (this._requestSetTime = !0, this._mediaElement.currentTime = e.dts / 1e3)
							}
							null != this._progressChecker && this._checkProgressAndResume()
						} else this._seekpointRecord = {
							seekPoint: t,
							recordTime: this._now()
						}, window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50)
					}
				}
				_onvCanPlay(e) {
					this._receivedCanPlay = !0, this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay)
				}
				_onvStalled(e) {
					this._checkAndResumeStuckPlayback(!0)
				}
				_onvProgress(e) {
					this._checkAndResumeStuckPlayback()
				}
			};
			var le = class {
				constructor(e, t) {
					if (this.TAG = "NativePlayer", this._type = "NativePlayer", this._emitter = new s.a, this._config = L(), "object" == typeof t && Object.assign(this._config, t), "flv" === e.type.toLowerCase()) throw new h("NativePlayer does't support flv MediaDataSource input!");
					if (e.hasOwnProperty("segments")) throw new h(`NativePlayer(${e.type}) doesn't support multipart playback!`);
					this.e = {
						onvLoadedMetadata: this._onvLoadedMetadata.bind(this)
					}, this._pendingSeekTime = null, this._statisticsReporter = null, this._mediaDataSource = e, this._mediaElement = null
				}
				destroy() {
					this._mediaElement && (this.unload(), this.detachMediaElement()), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null
				}
				on(e, t) {
					e === D.MEDIA_INFO ? null != this._mediaElement && 0 !== this._mediaElement.readyState && Promise.resolve()
						.then(() => {
							this._emitter.emit(D.MEDIA_INFO, this.mediaInfo)
						}) : e === D.STATISTICS_INFO && null != this._mediaElement && 0 !== this._mediaElement.readyState && Promise.resolve()
						.then(() => {
							this._emitter.emit(D.STATISTICS_INFO, this.statisticsInfo)
						}), this._emitter.addListener(e, t)
				}
				off(e, t) {
					this._emitter.removeListener(e, t)
				}
				attachMediaElement(e) {
					if (this._mediaElement = e, e.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), null != this._pendingSeekTime) try {
						e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null
					} catch (e) {}
				}
				detachMediaElement() {
					this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement = null), null != this._statisticsReporter && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null)
				}
				load() {
					if (!this._mediaElement) throw new d("HTMLMediaElement must be attached before load()!");
					this._mediaElement.src = this._mediaDataSource.url, this._mediaElement.readyState > 0 && (this._mediaElement.currentTime = 0), this._mediaElement.preload = "auto", this._mediaElement.load(), this._statisticsReporter = window.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval)
				}
				unload() {
					this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src")), null != this._statisticsReporter && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null)
				}
				play() {
					return this._mediaElement.play()
				}
				pause() {
					this._mediaElement.pause()
				}
				get type() {
					return this._type
				}
				get buffered() {
					return this._mediaElement.buffered
				}
				get duration() {
					return this._mediaElement.duration
				}
				get volume() {
					return this._mediaElement.volume
				}
				set volume(e) {
					this._mediaElement.volume = e
				}
				get muted() {
					return this._mediaElement.muted
				}
				set muted(e) {
					this._mediaElement.muted = e
				}
				get currentTime() {
					return this._mediaElement ? this._mediaElement.currentTime : 0
				}
				set currentTime(e) {
					this._mediaElement ? this._mediaElement.currentTime = e : this._pendingSeekTime = e
				}
				get mediaInfo() {
					let e = {
						mimeType: (this._mediaElement instanceof HTMLAudioElement ? "audio/" : "video/") + this._mediaDataSource.type
					};
					return this._mediaElement && (e.duration = Math.floor(1e3 * this._mediaElement.duration), this._mediaElement instanceof HTMLVideoElement && (e.width = this._mediaElement.videoWidth, e.height = this._mediaElement.videoHeight)), e
				}
				get statisticsInfo() {
					let e = {
						playerType: this._type,
						url: this._mediaDataSource.url
					};
					if (!(this._mediaElement instanceof HTMLVideoElement)) return e;
					let t = !0,
						r = 0,
						i = 0;
					if (this._mediaElement.getVideoPlaybackQuality) {
						let e = this._mediaElement.getVideoPlaybackQuality();
						r = e.totalVideoFrames, i = e.droppedVideoFrames
					} else null != this._mediaElement.webkitDecodedFrameCount ? (r = this._mediaElement.webkitDecodedFrameCount, i = this._mediaElement.webkitDroppedFrameCount) : t = !1;
					return t && (e.decodedFrames = r, e.droppedFrames = i), e
				}
				_onvLoadedMetadata(e) {
					null != this._pendingSeekTime && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null), this._emitter.emit(D.MEDIA_INFO, this.mediaInfo)
				}
				_reportStatisticsInfo() {
					this._emitter.emit(D.STATISTICS_INFO, this.statisticsInfo)
				}
			};
			n.install();
			let ue = {
				createPlayer: function(e, t) {
					let r = e;
					if (null == r || "object" != typeof r) throw new h("MediaDataSource must be an javascript object!");
					if (!r.hasOwnProperty("type")) throw new h("MediaDataSource must has type field to indicate video file type!");
					switch (r.type) {
						case "flv":
							return new oe(r, t);
						default:
							return new le(r, t)
					}
				},
				isSupported: function() {
					return O.supportMSEH264Playback()
				},
				getFeatureList: function() {
					return O.getFeatureList()
				}
			};
			ue.BaseLoader = v, ue.LoaderStatus = p, ue.LoaderErrors = g, ue.Events = D, ue.ErrorTypes = ae, ue.ErrorDetails = se, ue.FlvPlayer = oe, ue.NativePlayer = le, ue.LoggingControl = I, Object.defineProperty(ue, "version", {
				enumerable: !0,
				get: function() {
					return "__VERSION__"
				}
			});
			t.default = ue
		}, function(e, t) {}, , , , , function(e, t) {}])
		.default
}));