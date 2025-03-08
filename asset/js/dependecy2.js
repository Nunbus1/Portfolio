/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var QE = Object.create;
  var Pn = Object.defineProperty;
  var ZE = Object.getOwnPropertyDescriptor;
  var JE = Object.getOwnPropertyNames;
  var ey = Object.getPrototypeOf,
    ty = Object.prototype.hasOwnProperty;
  var ny = ((e) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(e, { get: (t, n) => (typeof require < "u" ? require : t)[n] })
      : e)(function (e) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
  });
  var pe = (e, t) => () => (e && (t = e((e = 0))), t);
  var f = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    xe = (e, t) => {
      for (var n in t) Pn(e, n, { get: t[n], enumerable: !0 });
    },
    ha = (e, t, n, r) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of JE(t))
          !ty.call(e, i) &&
            i !== n &&
            Pn(e, i, {
              get: () => t[i],
              enumerable: !(r = ZE(t, i)) || r.enumerable,
            });
      return e;
    };
  var ue = (e, t, n) => (
      (n = e != null ? QE(ey(e)) : {}),
      ha(
        t || !e || !e.__esModule
          ? Pn(n, "default", { value: e, enumerable: !0 })
          : n,
        e
      )
    ),
    We = (e) => ha(Pn({}, "__esModule", { value: !0 }), e);
  var jr = f(() => {
    "use strict";
    window.tram = (function (e) {
      function t(c, y) {
        var _ = new ie.Bare();
        return _.init(c, y);
      }
      function n(c) {
        return c.replace(/[A-Z]/g, function (y) {
          return "-" + y.toLowerCase();
        });
      }
      function r(c) {
        var y = parseInt(c.slice(1), 16),
          _ = (y >> 16) & 255,
          S = (y >> 8) & 255,
          P = 255 & y;
        return [_, S, P];
      }
      function i(c, y, _) {
        return (
          "#" + ((1 << 24) | (c << 16) | (y << 8) | _).toString(16).slice(1)
        );
      }
      function o() {}
      function a(c, y) {
        l("Type warning: Expected: [" + c + "] Got: [" + typeof y + "] " + y);
      }
      function s(c, y, _) {
        l("Units do not match [" + c + "]: " + y + ", " + _);
      }
      function u(c, y, _) {
        if ((y !== void 0 && (_ = y), c === void 0)) return _;
        var S = _;
        return (
          Rn.test(c) || !$t.test(c)
            ? (S = parseInt(c, 10))
            : $t.test(c) && (S = 1e3 * parseFloat(c)),
          0 > S && (S = 0),
          S === S ? S : _
        );
      }
      function l(c) {
        z.debug && window && window.console.warn(c);
      }
      function g(c) {
        for (var y = -1, _ = c ? c.length : 0, S = []; ++y < _; ) {
          var P = c[y];
          P && S.push(P);
        }
        return S;
      }
      var p = (function (c, y, _) {
          function S(te) {
            return typeof te == "object";
          }
          function P(te) {
            return typeof te == "function";
          }
          function O() {}
          function $(te, Q) {
            function F() {
              var Te = new ne();
              return P(Te.init) && Te.init.apply(Te, arguments), Te;
            }
            function ne() {}
            Q === _ && ((Q = te), (te = Object)), (F.Bare = ne);
            var oe,
              ye = (O[c] = te[c]),
              Le = (ne[c] = F[c] = new O());
            return (
              (Le.constructor = F),
              (F.mixin = function (Te) {
                return (ne[c] = F[c] = $(F, Te)[c]), F;
              }),
              (F.open = function (Te) {
                if (
                  ((oe = {}),
                  P(Te) ? (oe = Te.call(F, Le, ye, F, te)) : S(Te) && (oe = Te),
                  S(oe))
                )
                  for (var Qt in oe) y.call(oe, Qt) && (Le[Qt] = oe[Qt]);
                return P(Le.init) || (Le.init = te), F;
              }),
              F.open(Q)
            );
          }
          return $;
        })("prototype", {}.hasOwnProperty),
        d = {
          ease: [
            "ease",
            function (c, y, _, S) {
              var P = (c /= S) * c,
                O = P * c;
              return (
                y +
                _ * (-2.75 * O * P + 11 * P * P + -15.5 * O + 8 * P + 0.25 * c)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (c, y, _, S) {
              var P = (c /= S) * c,
                O = P * c;
              return y + _ * (-1 * O * P + 3 * P * P + -3 * O + 2 * P);
            },
          ],
          "ease-out": [
            "ease-out",
            function (c, y, _, S) {
              var P = (c /= S) * c,
                O = P * c;
              return (
                y +
                _ * (0.3 * O * P + -1.6 * P * P + 2.2 * O + -1.8 * P + 1.9 * c)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (c, y, _, S) {
              var P = (c /= S) * c,
                O = P * c;
              return y + _ * (2 * O * P + -5 * P * P + 2 * O + 2 * P);
            },
          ],
          linear: [
            "linear",
            function (c, y, _, S) {
              return (_ * c) / S + y;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (c, y, _, S) {
              return _ * (c /= S) * c + y;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (c, y, _, S) {
              return -_ * (c /= S) * (c - 2) + y;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (c, y, _, S) {
              return (c /= S / 2) < 1
                ? (_ / 2) * c * c + y
                : (-_ / 2) * (--c * (c - 2) - 1) + y;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (c, y, _, S) {
              return _ * (c /= S) * c * c + y;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (c, y, _, S) {
              return _ * ((c = c / S - 1) * c * c + 1) + y;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (c, y, _, S) {
              return (c /= S / 2) < 1
                ? (_ / 2) * c * c * c + y
                : (_ / 2) * ((c -= 2) * c * c + 2) + y;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (c, y, _, S) {
              return _ * (c /= S) * c * c * c + y;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (c, y, _, S) {
              return -_ * ((c = c / S - 1) * c * c * c - 1) + y;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (c, y, _, S) {
              return (c /= S / 2) < 1
                ? (_ / 2) * c * c * c * c + y
                : (-_ / 2) * ((c -= 2) * c * c * c - 2) + y;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (c, y, _, S) {
              return _ * (c /= S) * c * c * c * c + y;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (c, y, _, S) {
              return _ * ((c = c / S - 1) * c * c * c * c + 1) + y;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (c, y, _, S) {
              return (c /= S / 2) < 1
                ? (_ / 2) * c * c * c * c * c + y
                : (_ / 2) * ((c -= 2) * c * c * c * c + 2) + y;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (c, y, _, S) {
              return -_ * Math.cos((c / S) * (Math.PI / 2)) + _ + y;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (c, y, _, S) {
              return _ * Math.sin((c / S) * (Math.PI / 2)) + y;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (c, y, _, S) {
              return (-_ / 2) * (Math.cos((Math.PI * c) / S) - 1) + y;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (c, y, _, S) {
              return c === 0 ? y : _ * Math.pow(2, 10 * (c / S - 1)) + y;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (c, y, _, S) {
              return c === S
                ? y + _
                : _ * (-Math.pow(2, (-10 * c) / S) + 1) + y;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (c, y, _, S) {
              return c === 0
                ? y
                : c === S
                ? y + _
                : (c /= S / 2) < 1
                ? (_ / 2) * Math.pow(2, 10 * (c - 1)) + y
                : (_ / 2) * (-Math.pow(2, -10 * --c) + 2) + y;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (c, y, _, S) {
              return -_ * (Math.sqrt(1 - (c /= S) * c) - 1) + y;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (c, y, _, S) {
              return _ * Math.sqrt(1 - (c = c / S - 1) * c) + y;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (c, y, _, S) {
              return (c /= S / 2) < 1
                ? (-_ / 2) * (Math.sqrt(1 - c * c) - 1) + y
                : (_ / 2) * (Math.sqrt(1 - (c -= 2) * c) + 1) + y;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (c, y, _, S, P) {
              return (
                P === void 0 && (P = 1.70158),
                _ * (c /= S) * c * ((P + 1) * c - P) + y
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (c, y, _, S, P) {
              return (
                P === void 0 && (P = 1.70158),
                _ * ((c = c / S - 1) * c * ((P + 1) * c + P) + 1) + y
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (c, y, _, S, P) {
              return (
                P === void 0 && (P = 1.70158),
                (c /= S / 2) < 1
                  ? (_ / 2) * c * c * (((P *= 1.525) + 1) * c - P) + y
                  : (_ / 2) *
                      ((c -= 2) * c * (((P *= 1.525) + 1) * c + P) + 2) +
                    y
              );
            },
          ],
        },
        h = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        m = document,
        E = window,
        b = "bkwld-tram",
        v = /[\-\.0-9]/g,
        w = /[A-Z]/,
        A = "number",
        R = /^(rgb|#)/,
        C = /(em|cm|mm|in|pt|pc|px)$/,
        x = /(em|cm|mm|in|pt|pc|px|%)$/,
        U = /(deg|rad|turn)$/,
        k = "unitless",
        H = /(all|none) 0s ease 0s/,
        K = /^(width|height)$/,
        ee = " ",
        M = m.createElement("a"),
        T = ["Webkit", "Moz", "O", "ms"],
        L = ["-webkit-", "-moz-", "-o-", "-ms-"],
        W = function (c) {
          if (c in M.style) return { dom: c, css: c };
          var y,
            _,
            S = "",
            P = c.split("-");
          for (y = 0; y < P.length; y++)
            S += P[y].charAt(0).toUpperCase() + P[y].slice(1);
          for (y = 0; y < T.length; y++)
            if (((_ = T[y] + S), _ in M.style))
              return { dom: _, css: L[y] + c };
        },
        V = (t.support = {
          bind: Function.prototype.bind,
          transform: W("transform"),
          transition: W("transition"),
          backface: W("backface-visibility"),
          timing: W("transition-timing-function"),
        });
      if (V.transition) {
        var D = V.timing.dom;
        if (((M.style[D] = d["ease-in-back"][0]), !M.style[D]))
          for (var N in h) d[N][0] = h[N];
      }
      var B = (t.frame = (function () {
          var c =
            E.requestAnimationFrame ||
            E.webkitRequestAnimationFrame ||
            E.mozRequestAnimationFrame ||
            E.oRequestAnimationFrame ||
            E.msRequestAnimationFrame;
          return c && V.bind
            ? c.bind(E)
            : function (y) {
                E.setTimeout(y, 16);
              };
        })()),
        ae = (t.now = (function () {
          var c = E.performance,
            y = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
          return y && V.bind
            ? y.bind(c)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        ce = p(function (c) {
          function y(J, se) {
            var ge = g(("" + J).split(ee)),
              le = ge[0];
            se = se || {};
            var be = it[le];
            if (!be) return l("Unsupported property: " + le);
            if (!se.weak || !this.props[le]) {
              var Fe = be[0],
                Oe = this.props[le];
              return (
                Oe || (Oe = this.props[le] = new Fe.Bare()),
                Oe.init(this.$el, ge, be, se),
                Oe
              );
            }
          }
          function _(J, se, ge) {
            if (J) {
              var le = typeof J;
              if (
                (se ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                le == "number" && se)
              )
                return (
                  (this.timer = new Y({
                    duration: J,
                    context: this,
                    complete: O,
                  })),
                  void (this.active = !0)
                );
              if (le == "string" && se) {
                switch (J) {
                  case "hide":
                    F.call(this);
                    break;
                  case "stop":
                    $.call(this);
                    break;
                  case "redraw":
                    ne.call(this);
                    break;
                  default:
                    y.call(this, J, ge && ge[1]);
                }
                return O.call(this);
              }
              if (le == "function") return void J.call(this, this);
              if (le == "object") {
                var be = 0;
                Le.call(
                  this,
                  J,
                  function (ve, $E) {
                    ve.span > be && (be = ve.span), ve.stop(), ve.animate($E);
                  },
                  function (ve) {
                    "wait" in ve && (be = u(ve.wait, 0));
                  }
                ),
                  ye.call(this),
                  be > 0 &&
                    ((this.timer = new Y({ duration: be, context: this })),
                    (this.active = !0),
                    se && (this.timer.complete = O));
                var Fe = this,
                  Oe = !1,
                  Cn = {};
                B(function () {
                  Le.call(Fe, J, function (ve) {
                    ve.active && ((Oe = !0), (Cn[ve.name] = ve.nextStyle));
                  }),
                    Oe && Fe.$el.css(Cn);
                });
              }
            }
          }
          function S(J) {
            (J = u(J, 0)),
              this.active
                ? this.queue.push({ options: J })
                : ((this.timer = new Y({
                    duration: J,
                    context: this,
                    complete: O,
                  })),
                  (this.active = !0));
          }
          function P(J) {
            return this.active
              ? (this.queue.push({ options: J, args: arguments }),
                void (this.timer.complete = O))
              : l(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function O() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var J = this.queue.shift();
              _.call(this, J.options, !0, J.args);
            }
          }
          function $(J) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var se;
            typeof J == "string"
              ? ((se = {}), (se[J] = 1))
              : (se = typeof J == "object" && J != null ? J : this.props),
              Le.call(this, se, Te),
              ye.call(this);
          }
          function te(J) {
            $.call(this, J), Le.call(this, J, Qt, jE);
          }
          function Q(J) {
            typeof J != "string" && (J = "block"), (this.el.style.display = J);
          }
          function F() {
            $.call(this), (this.el.style.display = "none");
          }
          function ne() {
            this.el.offsetHeight;
          }
          function oe() {
            $.call(this), e.removeData(this.el, b), (this.$el = this.el = null);
          }
          function ye() {
            var J,
              se,
              ge = [];
            this.upstream && ge.push(this.upstream);
            for (J in this.props)
              (se = this.props[J]), se.active && ge.push(se.string);
            (ge = ge.join(",")),
              this.style !== ge &&
                ((this.style = ge), (this.el.style[V.transition.dom] = ge));
          }
          function Le(J, se, ge) {
            var le,
              be,
              Fe,
              Oe,
              Cn = se !== Te,
              ve = {};
            for (le in J)
              (Fe = J[le]),
                le in He
                  ? (ve.transform || (ve.transform = {}),
                    (ve.transform[le] = Fe))
                  : (w.test(le) && (le = n(le)),
                    le in it
                      ? (ve[le] = Fe)
                      : (Oe || (Oe = {}), (Oe[le] = Fe)));
            for (le in ve) {
              if (((Fe = ve[le]), (be = this.props[le]), !be)) {
                if (!Cn) continue;
                be = y.call(this, le);
              }
              se.call(this, be, Fe);
            }
            ge && Oe && ge.call(this, Oe);
          }
          function Te(J) {
            J.stop();
          }
          function Qt(J, se) {
            J.set(se);
          }
          function jE(J) {
            this.$el.css(J);
          }
          function De(J, se) {
            c[J] = function () {
              return this.children
                ? YE.call(this, se, arguments)
                : (this.el && se.apply(this, arguments), this);
            };
          }
          function YE(J, se) {
            var ge,
              le = this.children.length;
            for (ge = 0; le > ge; ge++) J.apply(this.children[ge], se);
            return this;
          }
          (c.init = function (J) {
            if (
              ((this.$el = e(J)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              z.keepInherited && !z.fallback)
            ) {
              var se = Ee(this.el, "transition");
              se && !H.test(se) && (this.upstream = se);
            }
            V.backface &&
              z.hideBackface &&
              Z(this.el, V.backface.css, "hidden");
          }),
            De("add", y),
            De("start", _),
            De("wait", S),
            De("then", P),
            De("next", O),
            De("stop", $),
            De("set", te),
            De("show", Q),
            De("hide", F),
            De("redraw", ne),
            De("destroy", oe);
        }),
        ie = p(ce, function (c) {
          function y(_, S) {
            var P = e.data(_, b) || e.data(_, b, new ce.Bare());
            return P.el || P.init(_), S ? P.start(S) : P;
          }
          c.init = function (_, S) {
            var P = e(_);
            if (!P.length) return this;
            if (P.length === 1) return y(P[0], S);
            var O = [];
            return (
              P.each(function ($, te) {
                O.push(y(te, S));
              }),
              (this.children = O),
              this
            );
          };
        }),
        I = p(function (c) {
          function y() {
            var O = this.get();
            this.update("auto");
            var $ = this.get();
            return this.update(O), $;
          }
          function _(O, $, te) {
            return $ !== void 0 && (te = $), O in d ? O : te;
          }
          function S(O) {
            var $ = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(O);
            return ($ ? i($[1], $[2], $[3]) : O).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var P = { duration: 500, ease: "ease", delay: 0 };
          (c.init = function (O, $, te, Q) {
            (this.$el = O), (this.el = O[0]);
            var F = $[0];
            te[2] && (F = te[2]),
              _t[F] && (F = _t[F]),
              (this.name = F),
              (this.type = te[1]),
              (this.duration = u($[1], this.duration, P.duration)),
              (this.ease = _($[2], this.ease, P.ease)),
              (this.delay = u($[3], this.delay, P.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = K.test(this.name)),
              (this.unit = Q.unit || this.unit || z.defaultUnit),
              (this.angle = Q.angle || this.angle || z.defaultAngle),
              z.fallback || Q.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    ee +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? ee + d[this.ease][0] : "") +
                    (this.delay ? ee + this.delay + "ms" : "")));
          }),
            (c.set = function (O) {
              (O = this.convert(O, this.type)), this.update(O), this.redraw();
            }),
            (c.transition = function (O) {
              (this.active = !0),
                (O = this.convert(O, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  O == "auto" && (O = y.call(this))),
                (this.nextStyle = O);
            }),
            (c.fallback = function (O) {
              var $ =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (O = this.convert(O, this.type)),
                this.auto &&
                  ($ == "auto" && ($ = this.convert(this.get(), this.type)),
                  O == "auto" && (O = y.call(this))),
                (this.tween = new j({
                  from: $,
                  to: O,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (c.get = function () {
              return Ee(this.el, this.name);
            }),
            (c.update = function (O) {
              Z(this.el, this.name, O);
            }),
            (c.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                Z(this.el, this.name, this.get()));
              var O = this.tween;
              O && O.context && O.destroy();
            }),
            (c.convert = function (O, $) {
              if (O == "auto" && this.auto) return O;
              var te,
                Q = typeof O == "number",
                F = typeof O == "string";
              switch ($) {
                case A:
                  if (Q) return O;
                  if (F && O.replace(v, "") === "") return +O;
                  te = "number(unitless)";
                  break;
                case R:
                  if (F) {
                    if (O === "" && this.original) return this.original;
                    if ($.test(O))
                      return O.charAt(0) == "#" && O.length == 7 ? O : S(O);
                  }
                  te = "hex or rgb string";
                  break;
                case C:
                  if (Q) return O + this.unit;
                  if (F && $.test(O)) return O;
                  te = "number(px) or string(unit)";
                  break;
                case x:
                  if (Q) return O + this.unit;
                  if (F && $.test(O)) return O;
                  te = "number(px) or string(unit or %)";
                  break;
                case U:
                  if (Q) return O + this.angle;
                  if (F && $.test(O)) return O;
                  te = "number(deg) or string(angle)";
                  break;
                case k:
                  if (Q || (F && x.test(O))) return O;
                  te = "number(unitless) or string(unit or %)";
              }
              return a(te, O), O;
            }),
            (c.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        X = p(I, function (c, y) {
          c.init = function () {
            y.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), R));
          };
        }),
        q = p(I, function (c, y) {
          (c.init = function () {
            y.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (c.get = function () {
              return this.$el[this.name]();
            }),
            (c.update = function (_) {
              this.$el[this.name](_);
            });
        }),
        G = p(I, function (c, y) {
          function _(S, P) {
            var O, $, te, Q, F;
            for (O in S)
              (Q = He[O]),
                (te = Q[0]),
                ($ = Q[1] || O),
                (F = this.convert(S[O], te)),
                P.call(this, $, F, te);
          }
          (c.init = function () {
            y.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                He.perspective &&
                  z.perspective &&
                  ((this.current.perspective = z.perspective),
                  Z(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (c.set = function (S) {
              _.call(this, S, function (P, O) {
                this.current[P] = O;
              }),
                Z(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (c.transition = function (S) {
              var P = this.values(S);
              this.tween = new re({
                current: this.current,
                values: P,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var O,
                $ = {};
              for (O in this.current) $[O] = O in P ? P[O] : this.current[O];
              (this.active = !0), (this.nextStyle = this.style($));
            }),
            (c.fallback = function (S) {
              var P = this.values(S);
              this.tween = new re({
                current: this.current,
                values: P,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (c.update = function () {
              Z(this.el, this.name, this.style(this.current));
            }),
            (c.style = function (S) {
              var P,
                O = "";
              for (P in S) O += P + "(" + S[P] + ") ";
              return O;
            }),
            (c.values = function (S) {
              var P,
                O = {};
              return (
                _.call(this, S, function ($, te, Q) {
                  (O[$] = te),
                    this.current[$] === void 0 &&
                      ((P = 0),
                      ~$.indexOf("scale") && (P = 1),
                      (this.current[$] = this.convert(P, Q)));
                }),
                O
              );
            });
        }),
        j = p(function (c) {
          function y(F) {
            te.push(F) === 1 && B(_);
          }
          function _() {
            var F,
              ne,
              oe,
              ye = te.length;
            if (ye)
              for (B(_), ne = ae(), F = ye; F--; )
                (oe = te[F]), oe && oe.render(ne);
          }
          function S(F) {
            var ne,
              oe = e.inArray(F, te);
            oe >= 0 &&
              ((ne = te.slice(oe + 1)),
              (te.length = oe),
              ne.length && (te = te.concat(ne)));
          }
          function P(F) {
            return Math.round(F * Q) / Q;
          }
          function O(F, ne, oe) {
            return i(
              F[0] + oe * (ne[0] - F[0]),
              F[1] + oe * (ne[1] - F[1]),
              F[2] + oe * (ne[2] - F[2])
            );
          }
          var $ = { ease: d.ease[1], from: 0, to: 1 };
          (c.init = function (F) {
            (this.duration = F.duration || 0), (this.delay = F.delay || 0);
            var ne = F.ease || $.ease;
            d[ne] && (ne = d[ne][1]),
              typeof ne != "function" && (ne = $.ease),
              (this.ease = ne),
              (this.update = F.update || o),
              (this.complete = F.complete || o),
              (this.context = F.context || this),
              (this.name = F.name);
            var oe = F.from,
              ye = F.to;
            oe === void 0 && (oe = $.from),
              ye === void 0 && (ye = $.to),
              (this.unit = F.unit || ""),
              typeof oe == "number" && typeof ye == "number"
                ? ((this.begin = oe), (this.change = ye - oe))
                : this.format(ye, oe),
              (this.value = this.begin + this.unit),
              (this.start = ae()),
              F.autoplay !== !1 && this.play();
          }),
            (c.play = function () {
              this.active ||
                (this.start || (this.start = ae()),
                (this.active = !0),
                y(this));
            }),
            (c.stop = function () {
              this.active && ((this.active = !1), S(this));
            }),
            (c.render = function (F) {
              var ne,
                oe = F - this.start;
              if (this.delay) {
                if (oe <= this.delay) return;
                oe -= this.delay;
              }
              if (oe < this.duration) {
                var ye = this.ease(oe, 0, 1, this.duration);
                return (
                  (ne = this.startRGB
                    ? O(this.startRGB, this.endRGB, ye)
                    : P(this.begin + ye * this.change)),
                  (this.value = ne + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ne = this.endHex || this.begin + this.change),
                (this.value = ne + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (c.format = function (F, ne) {
              if (((ne += ""), (F += ""), F.charAt(0) == "#"))
                return (
                  (this.startRGB = r(ne)),
                  (this.endRGB = r(F)),
                  (this.endHex = F),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var oe = ne.replace(v, ""),
                  ye = F.replace(v, "");
                oe !== ye && s("tween", ne, F), (this.unit = oe);
              }
              (ne = parseFloat(ne)),
                (F = parseFloat(F)),
                (this.begin = this.value = ne),
                (this.change = F - ne);
            }),
            (c.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var te = [],
            Q = 1e3;
        }),
        Y = p(j, function (c) {
          (c.init = function (y) {
            (this.duration = y.duration || 0),
              (this.complete = y.complete || o),
              (this.context = y.context),
              this.play();
          }),
            (c.render = function (y) {
              var _ = y - this.start;
              _ < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        re = p(j, function (c, y) {
          (c.init = function (_) {
            (this.context = _.context),
              (this.update = _.update),
              (this.tweens = []),
              (this.current = _.current);
            var S, P;
            for (S in _.values)
              (P = _.values[S]),
                this.current[S] !== P &&
                  this.tweens.push(
                    new j({
                      name: S,
                      from: this.current[S],
                      to: P,
                      duration: _.duration,
                      delay: _.delay,
                      ease: _.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (c.render = function (_) {
              var S,
                P,
                O = this.tweens.length,
                $ = !1;
              for (S = O; S--; )
                (P = this.tweens[S]),
                  P.context &&
                    (P.render(_), (this.current[P.name] = P.value), ($ = !0));
              return $
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (c.destroy = function () {
              if ((y.destroy.call(this), this.tweens)) {
                var _,
                  S = this.tweens.length;
                for (_ = S; _--; ) this.tweens[_].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        z = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !V.transition,
          agentTests: [],
        });
      (t.fallback = function (c) {
        if (!V.transition) return (z.fallback = !0);
        z.agentTests.push("(" + c + ")");
        var y = new RegExp(z.agentTests.join("|"), "i");
        z.fallback = y.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (c) {
          return new j(c);
        }),
        (t.delay = function (c, y, _) {
          return new Y({ complete: y, duration: c, context: _ });
        }),
        (e.fn.tram = function (c) {
          return t.call(null, this, c);
        });
      var Z = e.style,
        Ee = e.css,
        _t = { transform: V.transform && V.transform.css },
        it = {
          color: [X, R],
          background: [X, R, "background-color"],
          "outline-color": [X, R],
          "border-color": [X, R],
          "border-top-color": [X, R],
          "border-right-color": [X, R],
          "border-bottom-color": [X, R],
          "border-left-color": [X, R],
          "border-width": [I, C],
          "border-top-width": [I, C],
          "border-right-width": [I, C],
          "border-bottom-width": [I, C],
          "border-left-width": [I, C],
          "border-spacing": [I, C],
          "letter-spacing": [I, C],
          margin: [I, C],
          "margin-top": [I, C],
          "margin-right": [I, C],
          "margin-bottom": [I, C],
          "margin-left": [I, C],
          padding: [I, C],
          "padding-top": [I, C],
          "padding-right": [I, C],
          "padding-bottom": [I, C],
          "padding-left": [I, C],
          "outline-width": [I, C],
          opacity: [I, A],
          top: [I, x],
          right: [I, x],
          bottom: [I, x],
          left: [I, x],
          "font-size": [I, x],
          "text-indent": [I, x],
          "word-spacing": [I, x],
          width: [I, x],
          "min-width": [I, x],
          "max-width": [I, x],
          height: [I, x],
          "min-height": [I, x],
          "max-height": [I, x],
          "line-height": [I, k],
          "scroll-top": [q, A, "scrollTop"],
          "scroll-left": [q, A, "scrollLeft"],
        },
        He = {};
      V.transform &&
        ((it.transform = [G]),
        (He = {
          x: [x, "translateX"],
          y: [x, "translateY"],
          rotate: [U],
          rotateX: [U],
          rotateY: [U],
          scale: [A],
          scaleX: [A],
          scaleY: [A],
          skew: [U],
          skewX: [U],
          skewY: [U],
        })),
        V.transform &&
          V.backface &&
          ((He.z = [x, "translateZ"]),
          (He.rotateZ = [U]),
          (He.scaleZ = [A]),
          (He.perspective = [C]));
      var Rn = /ms/,
        $t = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var ya = f((HF, Ea) => {
    "use strict";
    var ry = window.$,
      iy = jr() && ry.tram;
    Ea.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        n = Array.prototype,
        r = Object.prototype,
        i = Function.prototype,
        o = n.push,
        a = n.slice,
        s = n.concat,
        u = r.toString,
        l = r.hasOwnProperty,
        g = n.forEach,
        p = n.map,
        d = n.reduce,
        h = n.reduceRight,
        m = n.filter,
        E = n.every,
        b = n.some,
        v = n.indexOf,
        w = n.lastIndexOf,
        A = Array.isArray,
        R = Object.keys,
        C = i.bind,
        x =
          (e.each =
          e.forEach =
            function (T, L, W) {
              if (T == null) return T;
              if (g && T.forEach === g) T.forEach(L, W);
              else if (T.length === +T.length) {
                for (var V = 0, D = T.length; V < D; V++)
                  if (L.call(W, T[V], V, T) === t) return;
              } else
                for (var N = e.keys(T), V = 0, D = N.length; V < D; V++)
                  if (L.call(W, T[N[V]], N[V], T) === t) return;
              return T;
            });
      (e.map = e.collect =
        function (T, L, W) {
          var V = [];
          return T == null
            ? V
            : p && T.map === p
            ? T.map(L, W)
            : (x(T, function (D, N, B) {
                V.push(L.call(W, D, N, B));
              }),
              V);
        }),
        (e.find = e.detect =
          function (T, L, W) {
            var V;
            return (
              U(T, function (D, N, B) {
                if (L.call(W, D, N, B)) return (V = D), !0;
              }),
              V
            );
          }),
        (e.filter = e.select =
          function (T, L, W) {
            var V = [];
            return T == null
              ? V
              : m && T.filter === m
              ? T.filter(L, W)
              : (x(T, function (D, N, B) {
                  L.call(W, D, N, B) && V.push(D);
                }),
                V);
          });
      var U =
        (e.some =
        e.any =
          function (T, L, W) {
            L || (L = e.identity);
            var V = !1;
            return T == null
              ? V
              : b && T.some === b
              ? T.some(L, W)
              : (x(T, function (D, N, B) {
                  if (V || (V = L.call(W, D, N, B))) return t;
                }),
                !!V);
          });
      (e.contains = e.include =
        function (T, L) {
          return T == null
            ? !1
            : v && T.indexOf === v
            ? T.indexOf(L) != -1
            : U(T, function (W) {
                return W === L;
              });
        }),
        (e.delay = function (T, L) {
          var W = a.call(arguments, 2);
          return setTimeout(function () {
            return T.apply(null, W);
          }, L);
        }),
        (e.defer = function (T) {
          return e.delay.apply(e, [T, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (T) {
          var L, W, V;
          return function () {
            L ||
              ((L = !0),
              (W = arguments),
              (V = this),
              iy.frame(function () {
                (L = !1), T.apply(V, W);
              }));
          };
        }),
        (e.debounce = function (T, L, W) {
          var V,
            D,
            N,
            B,
            ae,
            ce = function () {
              var ie = e.now() - B;
              ie < L
                ? (V = setTimeout(ce, L - ie))
                : ((V = null), W || ((ae = T.apply(N, D)), (N = D = null)));
            };
          return function () {
            (N = this), (D = arguments), (B = e.now());
            var ie = W && !V;
            return (
              V || (V = setTimeout(ce, L)),
              ie && ((ae = T.apply(N, D)), (N = D = null)),
              ae
            );
          };
        }),
        (e.defaults = function (T) {
          if (!e.isObject(T)) return T;
          for (var L = 1, W = arguments.length; L < W; L++) {
            var V = arguments[L];
            for (var D in V) T[D] === void 0 && (T[D] = V[D]);
          }
          return T;
        }),
        (e.keys = function (T) {
          if (!e.isObject(T)) return [];
          if (R) return R(T);
          var L = [];
          for (var W in T) e.has(T, W) && L.push(W);
          return L;
        }),
        (e.has = function (T, L) {
          return l.call(T, L);
        }),
        (e.isObject = function (T) {
          return T === Object(T);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var k = /(.)^/,
        H = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        K = /\\|'|\r|\n|\u2028|\u2029/g,
        ee = function (T) {
          return "\\" + H[T];
        },
        M = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (T, L, W) {
          !L && W && (L = W), (L = e.defaults({}, L, e.templateSettings));
          var V = RegExp(
              [
                (L.escape || k).source,
                (L.interpolate || k).source,
                (L.evaluate || k).source,
              ].join("|") + "|$",
              "g"
            ),
            D = 0,
            N = "__p+='";
          T.replace(V, function (ie, I, X, q, G) {
            return (
              (N += T.slice(D, G).replace(K, ee)),
              (D = G + ie.length),
              I
                ? (N +=
                    `'+
    ((__t=(` +
                    I +
                    `))==null?'':_.escape(__t))+
    '`)
                : X
                ? (N +=
                    `'+
    ((__t=(` +
                    X +
                    `))==null?'':__t)+
    '`)
                : q &&
                  (N +=
                    `';
    ` +
                    q +
                    `
    __p+='`),
              ie
            );
          }),
            (N += `';
    `);
          var B = L.variable;
          if (B) {
            if (!M.test(B))
              throw new Error("variable is not a bare identifier: " + B);
          } else
            (N =
              `with(obj||{}){
    ` +
              N +
              `}
    `),
              (B = "obj");
          N =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            N +
            `return __p;
    `;
          var ae;
          try {
            ae = new Function(L.variable || "obj", "_", N);
          } catch (ie) {
            throw ((ie.source = N), ie);
          }
          var ce = function (ie) {
            return ae.call(this, ie, e);
          };
          return (
            (ce.source =
              "function(" +
              B +
              `){
    ` +
              N +
              "}"),
            ce
          );
        }),
        e
      );
    })();
  });
  var Ne = f((WF, Sa) => {
    "use strict";
    var fe = {},
      It = {},
      Tt = [],
      $r = window.Webflow || [],
      ot = window.jQuery,
      Ge = ot(window),
      oy = ot(document),
      ze = ot.isFunction,
      qe = (fe._ = ya()),
      ma = (fe.tram = jr() && ot.tram),
      Nn = !1,
      Qr = !1;
    ma.config.hideBackface = !1;
    ma.config.keepInherited = !0;
    fe.define = function (e, t, n) {
      It[e] && Ia(It[e]);
      var r = (It[e] = t(ot, qe, n) || {});
      return _a(r), r;
    };
    fe.require = function (e) {
      return It[e];
    };
    function _a(e) {
      fe.env() &&
        (ze(e.design) && Ge.on("__wf_design", e.design),
        ze(e.preview) && Ge.on("__wf_preview", e.preview)),
        ze(e.destroy) && Ge.on("__wf_destroy", e.destroy),
        e.ready && ze(e.ready) && ay(e);
    }
    function ay(e) {
      if (Nn) {
        e.ready();
        return;
      }
      qe.contains(Tt, e.ready) || Tt.push(e.ready);
    }
    function Ia(e) {
      ze(e.design) && Ge.off("__wf_design", e.design),
        ze(e.preview) && Ge.off("__wf_preview", e.preview),
        ze(e.destroy) && Ge.off("__wf_destroy", e.destroy),
        e.ready && ze(e.ready) && sy(e);
    }
    function sy(e) {
      Tt = qe.filter(Tt, function (t) {
        return t !== e.ready;
      });
    }
    fe.push = function (e) {
      if (Nn) {
        ze(e) && e();
        return;
      }
      $r.push(e);
    };
    fe.env = function (e) {
      var t = window.__wf_design,
        n = typeof t < "u";
      if (!e) return n;
      if (e === "design") return n && t;
      if (e === "preview") return n && !t;
      if (e === "slug") return n && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var Ln = navigator.userAgent.toLowerCase(),
      Ta = (fe.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      uy = (fe.env.chrome =
        /chrome/.test(Ln) &&
        /Google/.test(navigator.vendor) &&
        parseInt(Ln.match(/chrome\/(\d+)\./)[1], 10)),
      cy = (fe.env.ios = /(ipod|iphone|ipad)/.test(Ln));
    fe.env.safari = /safari/.test(Ln) && !uy && !cy;
    var Yr;
    Ta &&
      oy.on("touchstart mousedown", function (e) {
        Yr = e.target;
      });
    fe.validClick = Ta
      ? function (e) {
          return e === Yr || ot.contains(e, Yr);
        }
      : function () {
          return !0;
        };
    var ba = "resize.webflow orientationchange.webflow load.webflow",
      ly = "scroll.webflow " + ba;
    fe.resize = Zr(Ge, ba);
    fe.scroll = Zr(Ge, ly);
    fe.redraw = Zr();
    function Zr(e, t) {
      var n = [],
        r = {};
      return (
        (r.up = qe.throttle(function (i) {
          qe.each(n, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, r.up),
        (r.on = function (i) {
          typeof i == "function" && (qe.contains(n, i) || n.push(i));
        }),
        (r.off = function (i) {
          if (!arguments.length) {
            n = [];
            return;
          }
          n = qe.filter(n, function (o) {
            return o !== i;
          });
        }),
        r
      );
    }
    fe.location = function (e) {
      window.location = e;
    };
    fe.env() && (fe.location = function () {});
    fe.ready = function () {
      (Nn = !0), Qr ? fy() : qe.each(Tt, va), qe.each($r, va), fe.resize.up();
    };
    function va(e) {
      ze(e) && e();
    }
    function fy() {
      (Qr = !1), qe.each(It, _a);
    }
    var ft;
    fe.load = function (e) {
      ft.then(e);
    };
    function Aa() {
      ft && (ft.reject(), Ge.off("load", ft.resolve)),
        (ft = new ot.Deferred()),
        Ge.on("load", ft.resolve);
    }
    fe.destroy = function (e) {
      (e = e || {}),
        (Qr = !0),
        Ge.triggerHandler("__wf_destroy"),
        e.domready != null && (Nn = e.domready),
        qe.each(It, Ia),
        fe.resize.off(),
        fe.scroll.off(),
        fe.redraw.off(),
        (Tt = []),
        ($r = []),
        ft.state() === "pending" && Aa();
    };
    ot(fe.ready);
    Aa();
    Sa.exports = window.Webflow = fe;
  });
  var Ca = f((ti) => {
    "use strict";
    Object.defineProperty(ti, "__esModule", { value: !0 });
    function dy(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    dy(ti, {
      createInstance: function () {
        return Oa;
      },
      destroy: function () {
        return yy;
      },
      destroyInstance: function () {
        return xa;
      },
      getInstance: function () {
        return hy;
      },
      init: function () {
        return Ra;
      },
      ready: function () {
        return vy;
      },
      setLoadHandler: function () {
        return Ey;
      },
    });
    var Jr;
    async function py() {
      let { Application: e } = await import(
        "https://unpkg.com/@splinetool/runtime/build/runtime.js"
      );
      Jr = e;
    }
    var Jt = new Map(),
      Zt = new Map(),
      gy = new Event("w-spline-load"),
      ei = class {
        spline;
        container;
        destroy() {
          this.container &&
            (Jt.delete(this.container), Zt.delete(this.container)),
            this.spline?.dispose?.();
        }
        async load(t, n) {
          Jr || (await py());
          let r = t.querySelector("canvas"),
            i = new Jr(r);
          await i.load(n),
            Jt.set(t, this),
            (this.container = t),
            (this.spline = i),
            t.dispatchEvent(gy),
            Zt.has(t) && (Zt.get(t)(i), Zt.delete(t));
        }
      },
      wa = () =>
        Array.from(document.querySelectorAll('[data-animation-type="spline"]')),
      Oa = async (e, t) => {
        let n = Jt.get(e);
        return n == null && (n = new ei()), await n.load(e, t), n;
      },
      xa = (e) => {
        Jt.get(e)?.destroy();
      },
      hy = (e) => Jt.get(e),
      Ey = (e, t) => {
        Zt.set(e, t);
      },
      Ra = () => {
        wa().forEach((e) => {
          let t = e.getAttribute("data-spline-url");
          t && Oa(e, t);
        });
      },
      yy = () => {
        wa().forEach(xa);
      },
      vy = Ra;
  });
  var La = f((KF, Pa) => {
    "use strict";
    var my = Ne(),
      dt = Ca();
    my.define(
      "spline",
      (Pa.exports = function () {
        return {
          createInstance: dt.createInstance,
          destroyInstance: dt.destroyInstance,
          getInstance: dt.getInstance,
          setLoadHandler: dt.setLoadHandler,
          init: dt.init,
          destroy: dt.destroy,
          ready: dt.ready,
        };
      })
    );
  });
  var Da = f((jF, Ma) => {
    "use strict";
    var Na = Ne();
    Na.define(
      "brand",
      (Ma.exports = function (e) {
        var t = {},
          n = document,
          r = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          l;
        t.ready = function () {
          var h = r.attr("data-wf-status"),
            m = r.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(m) && a.hostname !== m && (h = !0),
            h &&
              !s &&
              ((l = l || p()),
              d(),
              setTimeout(d, 500),
              e(n).off(u, g).on(u, g));
        };
        function g() {
          var h =
            n.fullScreen ||
            n.mozFullScreen ||
            n.webkitIsFullScreen ||
            n.msFullscreenElement ||
            !!n.webkitFullscreenElement;
          e(l).attr("style", h ? "display: none !important;" : "");
        }
        function p() {
          var h = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            m = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            E = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return h.append(m, E), h[0];
        }
        function d() {
          var h = i.children(o),
            m = h.length && h.get(0) === l,
            E = Na.env("editor");
          if (m) {
            E && h.remove();
            return;
          }
          h.length && h.remove(), E || i.append(l);
        }
        return t;
      })
    );
  });
  var qa = f((YF, Fa) => {
    "use strict";
    var ni = Ne();
    ni.define(
      "edit",
      (Fa.exports = function (e, t, n) {
        if (
          ((n = n || {}),
          (ni.env("test") || ni.env("frame")) && !n.fixture && !_y())
        )
          return { exit: 1 };
        var r = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          l = n.load || d,
          g = !1;
        try {
          g =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        g
          ? l()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            l()
          : i.on(s, p).triggerHandler(s);
        function p() {
          u || (/\?edit/.test(a.hash) && l());
        }
        function d() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, p),
            w(function (R) {
              e.ajax({
                url: v("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: h(R),
              });
            });
        }
        function h(R) {
          return function (C) {
            if (!C) {
              console.error("Could not load editor data");
              return;
            }
            (C.thirdPartyCookiesSupported = R),
              m(b(C.scriptPath), function () {
                window.WebflowEditor(C);
              });
          };
        }
        function m(R, C) {
          e.ajax({ type: "GET", url: R, dataType: "script", cache: !0 }).then(
            C,
            E
          );
        }
        function E(R, C, x) {
          throw (console.error("Could not load editor script: " + C), x);
        }
        function b(R) {
          return R.indexOf("//") >= 0
            ? R
            : v("https://editor-api.webflow.com" + R);
        }
        function v(R) {
          return R.replace(/([^:])\/\//g, "$1/");
        }
        function w(R) {
          var C = window.document.createElement("iframe");
          (C.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (C.style.display = "none"),
            (C.sandbox = "allow-scripts allow-same-origin");
          var x = function (U) {
            U.data === "WF_third_party_cookies_unsupported"
              ? (A(C, x), R(!1))
              : U.data === "WF_third_party_cookies_supported" &&
                (A(C, x), R(!0));
          };
          (C.onerror = function () {
            A(C, x), R(!1);
          }),
            window.addEventListener("message", x, !1),
            window.document.body.appendChild(C);
        }
        function A(R, C) {
          window.removeEventListener("message", C, !1), R.remove();
        }
        return r;
      })
    );
    function _y() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Xa = f(($F, Ga) => {
    "use strict";
    var Iy = Ne();
    Iy.define(
      "focus-visible",
      (Ga.exports = function () {
        function e(n) {
          var r = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(A) {
            return !!(
              A &&
              A !== document &&
              A.nodeName !== "HTML" &&
              A.nodeName !== "BODY" &&
              "classList" in A &&
              "contains" in A.classList
            );
          }
          function u(A) {
            var R = A.type,
              C = A.tagName;
            return !!(
              (C === "INPUT" && a[R] && !A.readOnly) ||
              (C === "TEXTAREA" && !A.readOnly) ||
              A.isContentEditable
            );
          }
          function l(A) {
            A.getAttribute("data-wf-focus-visible") ||
              A.setAttribute("data-wf-focus-visible", "true");
          }
          function g(A) {
            A.getAttribute("data-wf-focus-visible") &&
              A.removeAttribute("data-wf-focus-visible");
          }
          function p(A) {
            A.metaKey ||
              A.altKey ||
              A.ctrlKey ||
              (s(n.activeElement) && l(n.activeElement), (r = !0));
          }
          function d() {
            r = !1;
          }
          function h(A) {
            s(A.target) && (r || u(A.target)) && l(A.target);
          }
          function m(A) {
            s(A.target) &&
              A.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              g(A.target));
          }
          function E() {
            document.visibilityState === "hidden" && (i && (r = !0), b());
          }
          function b() {
            document.addEventListener("mousemove", w),
              document.addEventListener("mousedown", w),
              document.addEventListener("mouseup", w),
              document.addEventListener("pointermove", w),
              document.addEventListener("pointerdown", w),
              document.addEventListener("pointerup", w),
              document.addEventListener("touchmove", w),
              document.addEventListener("touchstart", w),
              document.addEventListener("touchend", w);
          }
          function v() {
            document.removeEventListener("mousemove", w),
              document.removeEventListener("mousedown", w),
              document.removeEventListener("mouseup", w),
              document.removeEventListener("pointermove", w),
              document.removeEventListener("pointerdown", w),
              document.removeEventListener("pointerup", w),
              document.removeEventListener("touchmove", w),
              document.removeEventListener("touchstart", w),
              document.removeEventListener("touchend", w);
          }
          function w(A) {
            (A.target.nodeName && A.target.nodeName.toLowerCase() === "html") ||
              ((r = !1), v());
          }
          document.addEventListener("keydown", p, !0),
            document.addEventListener("mousedown", d, !0),
            document.addEventListener("pointerdown", d, !0),
            document.addEventListener("touchstart", d, !0),
            document.addEventListener("visibilitychange", E, !0),
            b(),
            n.addEventListener("focus", h, !0),
            n.addEventListener("blur", m, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ba = f((QF, Ua) => {
    "use strict";
    var Va = Ne();
    Va.define(
      "focus",
      (Ua.exports = function () {
        var e = [],
          t = !1;
        function n(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function r(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          r(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Va.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", n, !0),
            document.addEventListener("click", n, !0));
        }
        return { ready: o };
      })
    );
  });
  var Fn = f((ZF, Ha) => {
    "use strict";
    var ri = window.jQuery,
      Ke = {},
      Mn = [],
      ka = ".w-ix",
      Dn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), ri(t).triggerHandler(Ke.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), ri(t).triggerHandler(Ke.types.OUTRO));
        },
      };
    Ke.triggers = {};
    Ke.types = { INTRO: "w-ix-intro" + ka, OUTRO: "w-ix-outro" + ka };
    Ke.init = function () {
      for (var e = Mn.length, t = 0; t < e; t++) {
        var n = Mn[t];
        n[0](0, n[1]);
      }
      (Mn = []), ri.extend(Ke.triggers, Dn);
    };
    Ke.async = function () {
      for (var e in Dn) {
        var t = Dn[e];
        Dn.hasOwnProperty(e) &&
          (Ke.triggers[e] = function (n, r) {
            Mn.push([t, r]);
          });
      }
    };
    Ke.async();
    Ha.exports = Ke;
  });
  var za = f((JF, Wa) => {
    "use strict";
    var Xe = Ne(),
      qn = Fn();
    Xe.define(
      "ix",
      (Wa.exports = function (e, t) {
        var n = {},
          r,
          i = e(window),
          o = ".w-ix",
          a = e.tram,
          s = Xe.env,
          u = s(),
          l = s.chrome && s.chrome < 35,
          g = "none 0s ease 0s",
          p = e(),
          d = {},
          h = [],
          m = [],
          E = [],
          b,
          v = 1,
          w = {
            tabs: ".w-tab-link, .w-tab-pane",
            dropdown: ".w-dropdown",
            slider: ".w-slide",
            navbar: ".w-nav",
          };
        (n.init = function (D) {
          setTimeout(function () {
            A(D);
          }, 1);
        }),
          (n.preview = function () {
            (r = !1),
              (v = 100),
              setTimeout(function () {
                A(window.__wf_ix);
              }, 1);
          }),
          (n.design = function () {
            (r = !0), n.destroy();
          }),
          (n.destroy = function () {
            (b = !0),
              p.each(k),
              Xe.scroll.off(H),
              qn.async(),
              (h = []),
              (m = []),
              (E = []);
          }),
          (n.ready = function () {
            if (u) return s("design") ? n.design() : n.preview();
            d && b && ((b = !1), R());
          }),
          (n.run = M),
          (n.style = u ? L : W);
        function A(D) {
          D &&
            ((d = {}),
            t.each(D, function (N) {
              d[N.slug] = N.value;
            }),
            R());
        }
        function R() {
          C(), qn.init(), Xe.redraw.up();
        }
        function C() {
          var D = e("[data-ix]");
          D.length &&
            (D.each(k),
            D.each(x),
            h.length && (Xe.scroll.on(H), setTimeout(H, 1)),
            m.length && Xe.load(K),
            E.length && setTimeout(ee, v));
        }
        function x(D, N) {
          var B = e(N),
            ae = B.attr("data-ix"),
            ce = d[ae];
          if (ce) {
            var ie = ce.triggers;
            ie &&
              (n.style(B, ce.style),
              t.each(ie, function (I) {
                var X = {},
                  q = I.type,
                  G = I.stepsB && I.stepsB.length;
                function j() {
                  M(I, B, { group: "A" });
                }
                function Y() {
                  M(I, B, { group: "B" });
                }
                if (q === "load") {
                  I.preload && !u ? m.push(j) : E.push(j);
                  return;
                }
                if (q === "click") {
                  B.on("click" + o, function (Z) {
                    Xe.validClick(Z.currentTarget) &&
                      (B.attr("href") === "#" && Z.preventDefault(),
                      M(I, B, { group: X.clicked ? "B" : "A" }),
                      G && (X.clicked = !X.clicked));
                  }),
                    (p = p.add(B));
                  return;
                }
                if (q === "hover") {
                  B.on("mouseenter" + o, j),
                    B.on("mouseleave" + o, Y),
                    (p = p.add(B));
                  return;
                }
                if (q === "scroll") {
                  h.push({
                    el: B,
                    trigger: I,
                    state: { active: !1 },
                    offsetTop: U(I.offsetTop),
                    offsetBot: U(I.offsetBot),
                  });
                  return;
                }
                var re = w[q];
                if (re) {
                  var z = B.closest(re);
                  z.on(qn.types.INTRO, j).on(qn.types.OUTRO, Y), (p = p.add(z));
                  return;
                }
              }));
          }
        }
        function U(D) {
          if (!D) return 0;
          D = String(D);
          var N = parseInt(D, 10);
          return N !== N
            ? 0
            : (D.indexOf("%") > 0 && ((N /= 100), N >= 1 && (N = 0.999)), N);
        }
        function k(D, N) {
          e(N).off(o);
        }
        function H() {
          for (
            var D = i.scrollTop(), N = i.height(), B = h.length, ae = 0;
            ae < B;
            ae++
          ) {
            var ce = h[ae],
              ie = ce.el,
              I = ce.trigger,
              X = I.stepsB && I.stepsB.length,
              q = ce.state,
              G = ie.offset().top,
              j = ie.outerHeight(),
              Y = ce.offsetTop,
              re = ce.offsetBot;
            Y < 1 && Y > 0 && (Y *= N), re < 1 && re > 0 && (re *= N);
            var z = G + j - Y >= D && G + re <= D + N;
            z !== q.active &&
              ((z === !1 && !X) ||
                ((q.active = z), M(I, ie, { group: z ? "A" : "B" })));
          }
        }
        function K() {
          for (var D = m.length, N = 0; N < D; N++) m[N]();
        }
        function ee() {
          for (var D = E.length, N = 0; N < D; N++) E[N]();
        }
        function M(D, N, B, ae) {
          B = B || {};
          var ce = B.done,
            ie = D.preserve3d;
          if (r && !B.force) return;
          var I = B.group || "A",
            X = D["loop" + I],
            q = D["steps" + I];
          if (!q || !q.length) return;
          if ((q.length < 2 && (X = !1), !ae)) {
            var G = D.selector;
            G &&
              (D.descend
                ? (N = N.find(G))
                : D.siblings
                ? (N = N.siblings(G))
                : (N = e(G)),
              u && N.attr("data-ix-affect", 1)),
              l && N.addClass("w-ix-emptyfix"),
              ie && N.css("transform-style", "preserve-3d");
          }
          for (var j = a(N), Y = { omit3d: !ie }, re = 0; re < q.length; re++)
            T(j, q[re], Y);
          function z() {
            if (X) return M(D, N, B, !0);
            Y.width === "auto" && j.set({ width: "auto" }),
              Y.height === "auto" && j.set({ height: "auto" }),
              ce && ce();
          }
          Y.start ? j.then(z) : z();
        }
        function T(D, N, B) {
          var ae = "add",
            ce = "start";
          B.start && (ae = ce = "then");
          var ie = N.transition;
          if (ie) {
            ie = ie.split(",");
            for (var I = 0; I < ie.length; I++) {
              var X = ie[I];
              D[ae](X);
            }
          }
          var q = V(N, B) || {};
          if (
            (q.width != null && (B.width = q.width),
            q.height != null && (B.height = q.height),
            ie == null)
          ) {
            B.start
              ? D.then(function () {
                  var Y = this.queue;
                  this.set(q),
                    q.display && (D.redraw(), Xe.redraw.up()),
                    (this.queue = Y),
                    this.next();
                })
              : (D.set(q), q.display && (D.redraw(), Xe.redraw.up()));
            var G = q.wait;
            G != null && (D.wait(G), (B.start = !0));
          } else {
            if (q.display) {
              var j = q.display;
              delete q.display,
                B.start
                  ? D.then(function () {
                      var Y = this.queue;
                      this.set({ display: j }).redraw(),
                        Xe.redraw.up(),
                        (this.queue = Y),
                        this.next();
                    })
                  : (D.set({ display: j }).redraw(), Xe.redraw.up());
            }
            D[ce](q), (B.start = !0);
          }
        }
        function L(D, N) {
          var B = a(D);
          if (!e.isEmptyObject(N)) {
            D.css("transition", "");
            var ae = D.css("transition");
            ae === g && (ae = B.upstream = null),
              (B.upstream = g),
              B.set(V(N)),
              (B.upstream = ae);
          }
        }
        function W(D, N) {
          a(D).set(V(N));
        }
        function V(D, N) {
          var B = N && N.omit3d,
            ae = {},
            ce = !1;
          for (var ie in D)
            ie !== "transition" &&
              ie !== "keysort" &&
              ((B &&
                (ie === "z" ||
                  ie === "rotateX" ||
                  ie === "rotateY" ||
                  ie === "scaleZ")) ||
                ((ae[ie] = D[ie]), (ce = !0)));
          return ce ? ae : null;
        }
        return n;
      })
    );
  });
  var $a = f((e2, Ya) => {
    "use strict";
    var ii = Fn();
    function Ka(e, t) {
      var n = document.createEvent("CustomEvent");
      n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
    }
    var Ty = window.jQuery,
      Gn = {},
      ja = ".w-ix",
      by = {
        reset: function (e, t) {
          ii.triggers.reset(e, t);
        },
        intro: function (e, t) {
          ii.triggers.intro(e, t), Ka(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          ii.triggers.outro(e, t), Ka(t, "COMPONENT_INACTIVE");
        },
      };
    Gn.triggers = {};
    Gn.types = { INTRO: "w-ix-intro" + ja, OUTRO: "w-ix-outro" + ja };
    Ty.extend(Gn.triggers, by);
    Ya.exports = Gn;
  });
  var oi = f((t2, Qa) => {
    var Ay =
      typeof global == "object" && global && global.Object === Object && global;
    Qa.exports = Ay;
  });
  var Ve = f((n2, Za) => {
    var Sy = oi(),
      wy = typeof self == "object" && self && self.Object === Object && self,
      Oy = Sy || wy || Function("return this")();
    Za.exports = Oy;
  });
  var bt = f((r2, Ja) => {
    var xy = Ve(),
      Ry = xy.Symbol;
    Ja.exports = Ry;
  });
  var rs = f((i2, ns) => {
    var es = bt(),
      ts = Object.prototype,
      Cy = ts.hasOwnProperty,
      Py = ts.toString,
      en = es ? es.toStringTag : void 0;
    function Ly(e) {
      var t = Cy.call(e, en),
        n = e[en];
      try {
        e[en] = void 0;
        var r = !0;
      } catch {}
      var i = Py.call(e);
      return r && (t ? (e[en] = n) : delete e[en]), i;
    }
    ns.exports = Ly;
  });
  var os = f((o2, is) => {
    var Ny = Object.prototype,
      My = Ny.toString;
    function Dy(e) {
      return My.call(e);
    }
    is.exports = Dy;
  });
  var at = f((a2, us) => {
    var as = bt(),
      Fy = rs(),
      qy = os(),
      Gy = "[object Null]",
      Xy = "[object Undefined]",
      ss = as ? as.toStringTag : void 0;
    function Vy(e) {
      return e == null
        ? e === void 0
          ? Xy
          : Gy
        : ss && ss in Object(e)
        ? Fy(e)
        : qy(e);
    }
    us.exports = Vy;
  });
  var ai = f((s2, cs) => {
    function Uy(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    cs.exports = Uy;
  });
  var si = f((u2, ls) => {
    var By = ai(),
      ky = By(Object.getPrototypeOf, Object);
    ls.exports = ky;
  });
  var Je = f((c2, fs) => {
    function Hy(e) {
      return e != null && typeof e == "object";
    }
    fs.exports = Hy;
  });
  var ui = f((l2, ps) => {
    var Wy = at(),
      zy = si(),
      Ky = Je(),
      jy = "[object Object]",
      Yy = Function.prototype,
      $y = Object.prototype,
      ds = Yy.toString,
      Qy = $y.hasOwnProperty,
      Zy = ds.call(Object);
    function Jy(e) {
      if (!Ky(e) || Wy(e) != jy) return !1;
      var t = zy(e);
      if (t === null) return !0;
      var n = Qy.call(t, "constructor") && t.constructor;
      return typeof n == "function" && n instanceof n && ds.call(n) == Zy;
    }
    ps.exports = Jy;
  });
  var gs = f((ci) => {
    "use strict";
    Object.defineProperty(ci, "__esModule", { value: !0 });
    ci.default = ev;
    function ev(e) {
      var t,
        n = e.Symbol;
      return (
        typeof n == "function"
          ? n.observable
            ? (t = n.observable)
            : ((t = n("observable")), (n.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var hs = f((fi, li) => {
    "use strict";
    Object.defineProperty(fi, "__esModule", { value: !0 });
    var tv = gs(),
      nv = rv(tv);
    function rv(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var At;
    typeof self < "u"
      ? (At = self)
      : typeof window < "u"
      ? (At = window)
      : typeof global < "u"
      ? (At = global)
      : typeof li < "u"
      ? (At = li)
      : (At = Function("return this")());
    var iv = (0, nv.default)(At);
    fi.default = iv;
  });
  var di = f((tn) => {
    "use strict";
    tn.__esModule = !0;
    tn.ActionTypes = void 0;
    tn.default = ms;
    var ov = ui(),
      av = vs(ov),
      sv = hs(),
      Es = vs(sv);
    function vs(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ys = (tn.ActionTypes = { INIT: "@@redux/INIT" });
    function ms(e, t, n) {
      var r;
      if (
        (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
        typeof n < "u")
      ) {
        if (typeof n != "function")
          throw new Error("Expected the enhancer to be a function.");
        return n(ms)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function l() {
        s === a && (s = a.slice());
      }
      function g() {
        return o;
      }
      function p(E) {
        if (typeof E != "function")
          throw new Error("Expected listener to be a function.");
        var b = !0;
        return (
          l(),
          s.push(E),
          function () {
            if (b) {
              (b = !1), l();
              var w = s.indexOf(E);
              s.splice(w, 1);
            }
          }
        );
      }
      function d(E) {
        if (!(0, av.default)(E))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof E.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, E));
        } finally {
          u = !1;
        }
        for (var b = (a = s), v = 0; v < b.length; v++) b[v]();
        return E;
      }
      function h(E) {
        if (typeof E != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = E), d({ type: ys.INIT });
      }
      function m() {
        var E,
          b = p;
        return (
          (E = {
            subscribe: function (w) {
              if (typeof w != "object")
                throw new TypeError("Expected the observer to be an object.");
              function A() {
                w.next && w.next(g());
              }
              A();
              var R = b(A);
              return { unsubscribe: R };
            },
          }),
          (E[Es.default] = function () {
            return this;
          }),
          E
        );
      }
      return (
        d({ type: ys.INIT }),
        (r = { dispatch: d, subscribe: p, getState: g, replaceReducer: h }),
        (r[Es.default] = m),
        r
      );
    }
  });
  var gi = f((pi) => {
    "use strict";
    pi.__esModule = !0;
    pi.default = uv;
    function uv(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Ts = f((hi) => {
    "use strict";
    hi.__esModule = !0;
    hi.default = pv;
    var _s = di(),
      cv = ui(),
      g2 = Is(cv),
      lv = gi(),
      h2 = Is(lv);
    function Is(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function fv(e, t) {
      var n = t && t.type,
        r = (n && '"' + n.toString() + '"') || "an action";
      return (
        "Given action " +
        r +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function dv(e) {
      Object.keys(e).forEach(function (t) {
        var n = e[t],
          r = n(void 0, { type: _s.ActionTypes.INIT });
        if (typeof r > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof n(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                _s.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function pv(e) {
      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        typeof e[i] == "function" && (n[i] = e[i]);
      }
      var o = Object.keys(n);
      if (!1) var a;
      var s;
      try {
        dv(n);
      } catch (u) {
        s = u;
      }
      return function () {
        var l =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          g = arguments[1];
        if (s) throw s;
        if (!1) var p;
        for (var d = !1, h = {}, m = 0; m < o.length; m++) {
          var E = o[m],
            b = n[E],
            v = l[E],
            w = b(v, g);
          if (typeof w > "u") {
            var A = fv(E, g);
            throw new Error(A);
          }
          (h[E] = w), (d = d || w !== v);
        }
        return d ? h : l;
      };
    }
  });
  var As = f((Ei) => {
    "use strict";
    Ei.__esModule = !0;
    Ei.default = gv;
    function bs(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function gv(e, t) {
      if (typeof e == "function") return bs(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(e), r = {}, i = 0; i < n.length; i++) {
        var o = n[i],
          a = e[o];
        typeof a == "function" && (r[o] = bs(a, t));
      }
      return r;
    }
  });
  var vi = f((yi) => {
    "use strict";
    yi.__esModule = !0;
    yi.default = hv;
    function hv() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var r = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, r.apply(void 0, arguments));
      };
    }
  });
  var Ss = f((mi) => {
    "use strict";
    mi.__esModule = !0;
    var Ev =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    mi.default = _v;
    var yv = vi(),
      vv = mv(yv);
    function mv(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function _v() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (r) {
        return function (i, o, a) {
          var s = r(i, o, a),
            u = s.dispatch,
            l = [],
            g = {
              getState: s.getState,
              dispatch: function (d) {
                return u(d);
              },
            };
          return (
            (l = t.map(function (p) {
              return p(g);
            })),
            (u = vv.default.apply(void 0, l)(s.dispatch)),
            Ev({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var _i = f((Me) => {
    "use strict";
    Me.__esModule = !0;
    Me.compose =
      Me.applyMiddleware =
      Me.bindActionCreators =
      Me.combineReducers =
      Me.createStore =
        void 0;
    var Iv = di(),
      Tv = St(Iv),
      bv = Ts(),
      Av = St(bv),
      Sv = As(),
      wv = St(Sv),
      Ov = Ss(),
      xv = St(Ov),
      Rv = vi(),
      Cv = St(Rv),
      Pv = gi(),
      _2 = St(Pv);
    function St(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Me.createStore = Tv.default;
    Me.combineReducers = Av.default;
    Me.bindActionCreators = wv.default;
    Me.applyMiddleware = xv.default;
    Me.compose = Cv.default;
  });
  var Ue,
    Ii,
    je,
    Lv,
    Nv,
    Xn,
    Mv,
    Ti = pe(() => {
      "use strict";
      (Ue = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Ii = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (je = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Lv = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (Nv = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Xn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (Mv = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ae,
    Dv,
    Vn = pe(() => {
      "use strict";
      (Ae = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (Dv = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var Fv,
    ws = pe(() => {
      "use strict";
      Fv = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var qv,
    Gv,
    Xv,
    Vv,
    Uv,
    Bv,
    kv,
    bi,
    Os = pe(() => {
      "use strict";
      Vn();
      ({
        TRANSFORM_MOVE: qv,
        TRANSFORM_SCALE: Gv,
        TRANSFORM_ROTATE: Xv,
        TRANSFORM_SKEW: Vv,
        STYLE_SIZE: Uv,
        STYLE_FILTER: Bv,
        STYLE_FONT_VARIATION: kv,
      } = Ae),
        (bi = {
          [qv]: !0,
          [Gv]: !0,
          [Xv]: !0,
          [Vv]: !0,
          [Uv]: !0,
          [Bv]: !0,
          [kv]: !0,
        });
    });
  var me = {};
  xe(me, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => am,
    IX2_ANIMATION_FRAME_CHANGED: () => em,
    IX2_CLEAR_REQUESTED: () => Qv,
    IX2_ELEMENT_STATE_CHANGED: () => om,
    IX2_EVENT_LISTENER_ADDED: () => Zv,
    IX2_EVENT_STATE_CHANGED: () => Jv,
    IX2_INSTANCE_ADDED: () => nm,
    IX2_INSTANCE_REMOVED: () => im,
    IX2_INSTANCE_STARTED: () => rm,
    IX2_MEDIA_QUERIES_DEFINED: () => um,
    IX2_PARAMETER_CHANGED: () => tm,
    IX2_PLAYBACK_REQUESTED: () => Yv,
    IX2_PREVIEW_REQUESTED: () => jv,
    IX2_RAW_DATA_IMPORTED: () => Hv,
    IX2_SESSION_INITIALIZED: () => Wv,
    IX2_SESSION_STARTED: () => zv,
    IX2_SESSION_STOPPED: () => Kv,
    IX2_STOP_REQUESTED: () => $v,
    IX2_TEST_FRAME_RENDERED: () => cm,
    IX2_VIEWPORT_WIDTH_CHANGED: () => sm,
  });
  var Hv,
    Wv,
    zv,
    Kv,
    jv,
    Yv,
    $v,
    Qv,
    Zv,
    Jv,
    em,
    tm,
    nm,
    rm,
    im,
    om,
    am,
    sm,
    um,
    cm,
    xs = pe(() => {
      "use strict";
      (Hv = "IX2_RAW_DATA_IMPORTED"),
        (Wv = "IX2_SESSION_INITIALIZED"),
        (zv = "IX2_SESSION_STARTED"),
        (Kv = "IX2_SESSION_STOPPED"),
        (jv = "IX2_PREVIEW_REQUESTED"),
        (Yv = "IX2_PLAYBACK_REQUESTED"),
        ($v = "IX2_STOP_REQUESTED"),
        (Qv = "IX2_CLEAR_REQUESTED"),
        (Zv = "IX2_EVENT_LISTENER_ADDED"),
        (Jv = "IX2_EVENT_STATE_CHANGED"),
        (em = "IX2_ANIMATION_FRAME_CHANGED"),
        (tm = "IX2_PARAMETER_CHANGED"),
        (nm = "IX2_INSTANCE_ADDED"),
        (rm = "IX2_INSTANCE_STARTED"),
        (im = "IX2_INSTANCE_REMOVED"),
        (om = "IX2_ELEMENT_STATE_CHANGED"),
        (am = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (sm = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (um = "IX2_MEDIA_QUERIES_DEFINED"),
        (cm = "IX2_TEST_FRAME_RENDERED");
    });
  var Ie = {};
  xe(Ie, {
    ABSTRACT_NODE: () => s_,
    AUTO: () => $m,
    BACKGROUND: () => Hm,
    BACKGROUND_COLOR: () => km,
    BAR_DELIMITER: () => Jm,
    BORDER_COLOR: () => Wm,
    BOUNDARY_SELECTOR: () => gm,
    CHILDREN: () => e_,
    COLON_DELIMITER: () => Zm,
    COLOR: () => zm,
    COMMA_DELIMITER: () => Qm,
    CONFIG_UNIT: () => Tm,
    CONFIG_VALUE: () => vm,
    CONFIG_X_UNIT: () => mm,
    CONFIG_X_VALUE: () => hm,
    CONFIG_Y_UNIT: () => _m,
    CONFIG_Y_VALUE: () => Em,
    CONFIG_Z_UNIT: () => Im,
    CONFIG_Z_VALUE: () => ym,
    DISPLAY: () => Km,
    FILTER: () => Xm,
    FLEX: () => jm,
    FONT_VARIATION_SETTINGS: () => Vm,
    HEIGHT: () => Bm,
    HTML_ELEMENT: () => o_,
    IMMEDIATE_CHILDREN: () => t_,
    IX2_ID_DELIMITER: () => lm,
    OPACITY: () => Gm,
    PARENT: () => r_,
    PLAIN_OBJECT: () => a_,
    PRESERVE_3D: () => i_,
    RENDER_GENERAL: () => c_,
    RENDER_PLUGIN: () => f_,
    RENDER_STYLE: () => l_,
    RENDER_TRANSFORM: () => u_,
    ROTATE_X: () => Lm,
    ROTATE_Y: () => Nm,
    ROTATE_Z: () => Mm,
    SCALE_3D: () => Pm,
    SCALE_X: () => xm,
    SCALE_Y: () => Rm,
    SCALE_Z: () => Cm,
    SIBLINGS: () => n_,
    SKEW: () => Dm,
    SKEW_X: () => Fm,
    SKEW_Y: () => qm,
    TRANSFORM: () => bm,
    TRANSLATE_3D: () => Om,
    TRANSLATE_X: () => Am,
    TRANSLATE_Y: () => Sm,
    TRANSLATE_Z: () => wm,
    WF_PAGE: () => fm,
    WIDTH: () => Um,
    WILL_CHANGE: () => Ym,
    W_MOD_IX: () => pm,
    W_MOD_JS: () => dm,
  });
  var lm,
    fm,
    dm,
    pm,
    gm,
    hm,
    Em,
    ym,
    vm,
    mm,
    _m,
    Im,
    Tm,
    bm,
    Am,
    Sm,
    wm,
    Om,
    xm,
    Rm,
    Cm,
    Pm,
    Lm,
    Nm,
    Mm,
    Dm,
    Fm,
    qm,
    Gm,
    Xm,
    Vm,
    Um,
    Bm,
    km,
    Hm,
    Wm,
    zm,
    Km,
    jm,
    Ym,
    $m,
    Qm,
    Zm,
    Jm,
    e_,
    t_,
    n_,
    r_,
    i_,
    o_,
    a_,
    s_,
    u_,
    c_,
    l_,
    f_,
    Rs = pe(() => {
      "use strict";
      (lm = "|"),
        (fm = "data-wf-page"),
        (dm = "w-mod-js"),
        (pm = "w-mod-ix"),
        (gm = ".w-dyn-item"),
        (hm = "xValue"),
        (Em = "yValue"),
        (ym = "zValue"),
        (vm = "value"),
        (mm = "xUnit"),
        (_m = "yUnit"),
        (Im = "zUnit"),
        (Tm = "unit"),
        (bm = "transform"),
        (Am = "translateX"),
        (Sm = "translateY"),
        (wm = "translateZ"),
        (Om = "translate3d"),
        (xm = "scaleX"),
        (Rm = "scaleY"),
        (Cm = "scaleZ"),
        (Pm = "scale3d"),
        (Lm = "rotateX"),
        (Nm = "rotateY"),
        (Mm = "rotateZ"),
        (Dm = "skew"),
        (Fm = "skewX"),
        (qm = "skewY"),
        (Gm = "opacity"),
        (Xm = "filter"),
        (Vm = "font-variation-settings"),
        (Um = "width"),
        (Bm = "height"),
        (km = "backgroundColor"),
        (Hm = "background"),
        (Wm = "borderColor"),
        (zm = "color"),
        (Km = "display"),
        (jm = "flex"),
        (Ym = "willChange"),
        ($m = "AUTO"),
        (Qm = ","),
        (Zm = ":"),
        (Jm = "|"),
        (e_ = "CHILDREN"),
        (t_ = "IMMEDIATE_CHILDREN"),
        (n_ = "SIBLINGS"),
        (r_ = "PARENT"),
        (i_ = "preserve-3d"),
        (o_ = "HTML_ELEMENT"),
        (a_ = "PLAIN_OBJECT"),
        (s_ = "ABSTRACT_NODE"),
        (u_ = "RENDER_TRANSFORM"),
        (c_ = "RENDER_GENERAL"),
        (l_ = "RENDER_STYLE"),
        (f_ = "RENDER_PLUGIN");
    });
  var Cs = {};
  xe(Cs, {
    ActionAppliesTo: () => Dv,
    ActionTypeConsts: () => Ae,
    EventAppliesTo: () => Ii,
    EventBasedOn: () => je,
    EventContinuousMouseAxes: () => Lv,
    EventLimitAffectedElements: () => Nv,
    EventTypeConsts: () => Ue,
    IX2EngineActionTypes: () => me,
    IX2EngineConstants: () => Ie,
    InteractionTypeConsts: () => Fv,
    QuickEffectDirectionConsts: () => Mv,
    QuickEffectIds: () => Xn,
    ReducedMotionTypes: () => bi,
  });
  var Re = pe(() => {
    "use strict";
    Ti();
    Vn();
    ws();
    Os();
    xs();
    Rs();
    Vn();
    Ti();
  });
  var d_,
    Ps,
    Ls = pe(() => {
      "use strict";
      Re();
      ({ IX2_RAW_DATA_IMPORTED: d_ } = me),
        (Ps = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case d_:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var wt = f((he) => {
    "use strict";
    Object.defineProperty(he, "__esModule", { value: !0 });
    var p_ =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    he.clone = Bn;
    he.addLast = Ds;
    he.addFirst = Fs;
    he.removeLast = qs;
    he.removeFirst = Gs;
    he.insert = Xs;
    he.removeAt = Vs;
    he.replaceAt = Us;
    he.getIn = kn;
    he.set = Hn;
    he.setIn = Wn;
    he.update = ks;
    he.updateIn = Hs;
    he.merge = Ws;
    he.mergeDeep = zs;
    he.mergeIn = Ks;
    he.omit = js;
    he.addDefaults = Ys;
    var Ns = "INVALID_ARGS";
    function Ms(e) {
      throw new Error(e);
    }
    function Ai(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var g_ = {}.hasOwnProperty;
    function Bn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Ai(e), n = {}, r = 0; r < t.length; r++) {
        var i = t[r];
        n[i] = e[i];
      }
      return n;
    }
    function Ce(e, t, n) {
      var r = n;
      r == null && Ms(Ns);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var l = a[u];
        if (l != null) {
          var g = Ai(l);
          if (g.length)
            for (var p = 0; p <= g.length; p++) {
              var d = g[p];
              if (!(e && r[d] !== void 0)) {
                var h = l[d];
                t && Un(r[d]) && Un(h) && (h = Ce(e, t, r[d], h)),
                  !(h === void 0 || h === r[d]) &&
                    (i || ((i = !0), (r = Bn(r))), (r[d] = h));
              }
            }
        }
      }
      return r;
    }
    function Un(e) {
      var t = typeof e > "u" ? "undefined" : p_(e);
      return e != null && (t === "object" || t === "function");
    }
    function Ds(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Fs(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function qs(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Gs(e) {
      return e.length ? e.slice(1) : e;
    }
    function Xs(e, t, n) {
      return e
        .slice(0, t)
        .concat(Array.isArray(n) ? n : [n])
        .concat(e.slice(t));
    }
    function Vs(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Us(e, t, n) {
      if (e[t] === n) return e;
      for (var r = e.length, i = Array(r), o = 0; o < r; o++) i[o] = e[o];
      return (i[t] = n), i;
    }
    function kn(e, t) {
      if ((!Array.isArray(t) && Ms(Ns), e != null)) {
        for (var n = e, r = 0; r < t.length; r++) {
          var i = t[r];
          if (((n = n?.[i]), n === void 0)) return n;
        }
        return n;
      }
    }
    function Hn(e, t, n) {
      var r = typeof t == "number" ? [] : {},
        i = e ?? r;
      if (i[t] === n) return i;
      var o = Bn(i);
      return (o[t] = n), o;
    }
    function Bs(e, t, n, r) {
      var i = void 0,
        o = t[r];
      if (r === t.length - 1) i = n;
      else {
        var a =
          Un(e) && Un(e[o]) ? e[o] : typeof t[r + 1] == "number" ? [] : {};
        i = Bs(a, t, n, r + 1);
      }
      return Hn(e, o, i);
    }
    function Wn(e, t, n) {
      return t.length ? Bs(e, t, n, 0) : n;
    }
    function ks(e, t, n) {
      var r = e?.[t],
        i = n(r);
      return Hn(e, t, i);
    }
    function Hs(e, t, n) {
      var r = kn(e, t),
        i = n(r);
      return Wn(e, t, i);
    }
    function Ws(e, t, n, r, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ce.call.apply(Ce, [null, !1, !1, e, t, n, r, i, o].concat(s))
        : Ce(!1, !1, e, t, n, r, i, o);
    }
    function zs(e, t, n, r, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ce.call.apply(Ce, [null, !1, !0, e, t, n, r, i, o].concat(s))
        : Ce(!1, !0, e, t, n, r, i, o);
    }
    function Ks(e, t, n, r, i, o, a) {
      var s = kn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          l = arguments.length,
          g = Array(l > 7 ? l - 7 : 0),
          p = 7;
        p < l;
        p++
      )
        g[p - 7] = arguments[p];
      return (
        g.length
          ? (u = Ce.call.apply(Ce, [null, !1, !1, s, n, r, i, o, a].concat(g)))
          : (u = Ce(!1, !1, s, n, r, i, o, a)),
        Wn(e, t, u)
      );
    }
    function js(e, t) {
      for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
        if (g_.call(e, n[i])) {
          r = !0;
          break;
        }
      if (!r) return e;
      for (var o = {}, a = Ai(e), s = 0; s < a.length; s++) {
        var u = a[s];
        n.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Ys(e, t, n, r, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ce.call.apply(Ce, [null, !0, !1, e, t, n, r, i, o].concat(s))
        : Ce(!0, !1, e, t, n, r, i, o);
    }
    var h_ = {
      clone: Bn,
      addLast: Ds,
      addFirst: Fs,
      removeLast: qs,
      removeFirst: Gs,
      insert: Xs,
      removeAt: Vs,
      replaceAt: Us,
      getIn: kn,
      set: Hn,
      setIn: Wn,
      update: ks,
      updateIn: Hs,
      merge: Ws,
      mergeDeep: zs,
      mergeIn: Ks,
      omit: js,
      addDefaults: Ys,
    };
    he.default = h_;
  });
  var Qs,
    E_,
    y_,
    v_,
    m_,
    __,
    $s,
    Zs,
    Js = pe(() => {
      "use strict";
      Re();
      (Qs = ue(wt())),
        ({
          IX2_PREVIEW_REQUESTED: E_,
          IX2_PLAYBACK_REQUESTED: y_,
          IX2_STOP_REQUESTED: v_,
          IX2_CLEAR_REQUESTED: m_,
        } = me),
        (__ = { preview: {}, playback: {}, stop: {}, clear: {} }),
        ($s = Object.create(null, {
          [E_]: { value: "preview" },
          [y_]: { value: "playback" },
          [v_]: { value: "stop" },
          [m_]: { value: "clear" },
        })),
        (Zs = (e = __, t) => {
          if (t.type in $s) {
            let n = [$s[t.type]];
            return (0, Qs.setIn)(e, [n], { ...t.payload });
          }
          return e;
        });
    });
  var Se,
    I_,
    T_,
    b_,
    A_,
    S_,
    w_,
    O_,
    x_,
    R_,
    C_,
    eu,
    P_,
    tu,
    nu = pe(() => {
      "use strict";
      Re();
      (Se = ue(wt())),
        ({
          IX2_SESSION_INITIALIZED: I_,
          IX2_SESSION_STARTED: T_,
          IX2_TEST_FRAME_RENDERED: b_,
          IX2_SESSION_STOPPED: A_,
          IX2_EVENT_LISTENER_ADDED: S_,
          IX2_EVENT_STATE_CHANGED: w_,
          IX2_ANIMATION_FRAME_CHANGED: O_,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: x_,
          IX2_VIEWPORT_WIDTH_CHANGED: R_,
          IX2_MEDIA_QUERIES_DEFINED: C_,
        } = me),
        (eu = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (P_ = 20),
        (tu = (e = eu, t) => {
          switch (t.type) {
            case I_: {
              let { hasBoundaryNodes: n, reducedMotion: r } = t.payload;
              return (0, Se.merge)(e, {
                hasBoundaryNodes: n,
                reducedMotion: r,
              });
            }
            case T_:
              return (0, Se.set)(e, "active", !0);
            case b_: {
              let {
                payload: { step: n = P_ },
              } = t;
              return (0, Se.set)(e, "tick", e.tick + n);
            }
            case A_:
              return eu;
            case O_: {
              let {
                payload: { now: n },
              } = t;
              return (0, Se.set)(e, "tick", n);
            }
            case S_: {
              let n = (0, Se.addLast)(e.eventListeners, t.payload);
              return (0, Se.set)(e, "eventListeners", n);
            }
            case w_: {
              let { stateKey: n, newState: r } = t.payload;
              return (0, Se.setIn)(e, ["eventState", n], r);
            }
            case x_: {
              let { actionListId: n, isPlaying: r } = t.payload;
              return (0, Se.setIn)(e, ["playbackState", n], r);
            }
            case R_: {
              let { width: n, mediaQueries: r } = t.payload,
                i = r.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: l } = r[a];
                if (n >= u && n <= l) {
                  o = s;
                  break;
                }
              }
              return (0, Se.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case C_:
              return (0, Se.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var iu = f((V2, ru) => {
    function L_() {
      (this.__data__ = []), (this.size = 0);
    }
    ru.exports = L_;
  });
  var zn = f((U2, ou) => {
    function N_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    ou.exports = N_;
  });
  var nn = f((B2, au) => {
    var M_ = zn();
    function D_(e, t) {
      for (var n = e.length; n--; ) if (M_(e[n][0], t)) return n;
      return -1;
    }
    au.exports = D_;
  });
  var uu = f((k2, su) => {
    var F_ = nn(),
      q_ = Array.prototype,
      G_ = q_.splice;
    function X_(e) {
      var t = this.__data__,
        n = F_(t, e);
      if (n < 0) return !1;
      var r = t.length - 1;
      return n == r ? t.pop() : G_.call(t, n, 1), --this.size, !0;
    }
    su.exports = X_;
  });
  var lu = f((H2, cu) => {
    var V_ = nn();
    function U_(e) {
      var t = this.__data__,
        n = V_(t, e);
      return n < 0 ? void 0 : t[n][1];
    }
    cu.exports = U_;
  });
  var du = f((W2, fu) => {
    var B_ = nn();
    function k_(e) {
      return B_(this.__data__, e) > -1;
    }
    fu.exports = k_;
  });
  var gu = f((z2, pu) => {
    var H_ = nn();
    function W_(e, t) {
      var n = this.__data__,
        r = H_(n, e);
      return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
    }
    pu.exports = W_;
  });
  var rn = f((K2, hu) => {
    var z_ = iu(),
      K_ = uu(),
      j_ = lu(),
      Y_ = du(),
      $_ = gu();
    function Ot(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Ot.prototype.clear = z_;
    Ot.prototype.delete = K_;
    Ot.prototype.get = j_;
    Ot.prototype.has = Y_;
    Ot.prototype.set = $_;
    hu.exports = Ot;
  });
  var yu = f((j2, Eu) => {
    var Q_ = rn();
    function Z_() {
      (this.__data__ = new Q_()), (this.size = 0);
    }
    Eu.exports = Z_;
  });
  var mu = f((Y2, vu) => {
    function J_(e) {
      var t = this.__data__,
        n = t.delete(e);
      return (this.size = t.size), n;
    }
    vu.exports = J_;
  });
  var Iu = f(($2, _u) => {
    function eI(e) {
      return this.__data__.get(e);
    }
    _u.exports = eI;
  });
  var bu = f((Q2, Tu) => {
    function tI(e) {
      return this.__data__.has(e);
    }
    Tu.exports = tI;
  });
  var Ye = f((Z2, Au) => {
    function nI(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Au.exports = nI;
  });
  var Si = f((J2, Su) => {
    var rI = at(),
      iI = Ye(),
      oI = "[object AsyncFunction]",
      aI = "[object Function]",
      sI = "[object GeneratorFunction]",
      uI = "[object Proxy]";
    function cI(e) {
      if (!iI(e)) return !1;
      var t = rI(e);
      return t == aI || t == sI || t == oI || t == uI;
    }
    Su.exports = cI;
  });
  var Ou = f((eq, wu) => {
    var lI = Ve(),
      fI = lI["__core-js_shared__"];
    wu.exports = fI;
  });
  var Cu = f((tq, Ru) => {
    var wi = Ou(),
      xu = (function () {
        var e = /[^.]+$/.exec((wi && wi.keys && wi.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function dI(e) {
      return !!xu && xu in e;
    }
    Ru.exports = dI;
  });
  var Oi = f((nq, Pu) => {
    var pI = Function.prototype,
      gI = pI.toString;
    function hI(e) {
      if (e != null) {
        try {
          return gI.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Pu.exports = hI;
  });
  var Nu = f((rq, Lu) => {
    var EI = Si(),
      yI = Cu(),
      vI = Ye(),
      mI = Oi(),
      _I = /[\\^$.*+?()[\]{}|]/g,
      II = /^\[object .+?Constructor\]$/,
      TI = Function.prototype,
      bI = Object.prototype,
      AI = TI.toString,
      SI = bI.hasOwnProperty,
      wI = RegExp(
        "^" +
          AI.call(SI)
            .replace(_I, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function OI(e) {
      if (!vI(e) || yI(e)) return !1;
      var t = EI(e) ? wI : II;
      return t.test(mI(e));
    }
    Lu.exports = OI;
  });
  var Du = f((iq, Mu) => {
    function xI(e, t) {
      return e?.[t];
    }
    Mu.exports = xI;
  });
  var st = f((oq, Fu) => {
    var RI = Nu(),
      CI = Du();
    function PI(e, t) {
      var n = CI(e, t);
      return RI(n) ? n : void 0;
    }
    Fu.exports = PI;
  });
  var Kn = f((aq, qu) => {
    var LI = st(),
      NI = Ve(),
      MI = LI(NI, "Map");
    qu.exports = MI;
  });
  var on = f((sq, Gu) => {
    var DI = st(),
      FI = DI(Object, "create");
    Gu.exports = FI;
  });
  var Uu = f((uq, Vu) => {
    var Xu = on();
    function qI() {
      (this.__data__ = Xu ? Xu(null) : {}), (this.size = 0);
    }
    Vu.exports = qI;
  });
  var ku = f((cq, Bu) => {
    function GI(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Bu.exports = GI;
  });
  var Wu = f((lq, Hu) => {
    var XI = on(),
      VI = "__lodash_hash_undefined__",
      UI = Object.prototype,
      BI = UI.hasOwnProperty;
    function kI(e) {
      var t = this.__data__;
      if (XI) {
        var n = t[e];
        return n === VI ? void 0 : n;
      }
      return BI.call(t, e) ? t[e] : void 0;
    }
    Hu.exports = kI;
  });
  var Ku = f((fq, zu) => {
    var HI = on(),
      WI = Object.prototype,
      zI = WI.hasOwnProperty;
    function KI(e) {
      var t = this.__data__;
      return HI ? t[e] !== void 0 : zI.call(t, e);
    }
    zu.exports = KI;
  });
  var Yu = f((dq, ju) => {
    var jI = on(),
      YI = "__lodash_hash_undefined__";
    function $I(e, t) {
      var n = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (n[e] = jI && t === void 0 ? YI : t),
        this
      );
    }
    ju.exports = $I;
  });
  var Qu = f((pq, $u) => {
    var QI = Uu(),
      ZI = ku(),
      JI = Wu(),
      eT = Ku(),
      tT = Yu();
    function xt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    xt.prototype.clear = QI;
    xt.prototype.delete = ZI;
    xt.prototype.get = JI;
    xt.prototype.has = eT;
    xt.prototype.set = tT;
    $u.exports = xt;
  });
  var ec = f((gq, Ju) => {
    var Zu = Qu(),
      nT = rn(),
      rT = Kn();
    function iT() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Zu(),
          map: new (rT || nT)(),
          string: new Zu(),
        });
    }
    Ju.exports = iT;
  });
  var nc = f((hq, tc) => {
    function oT(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    tc.exports = oT;
  });
  var an = f((Eq, rc) => {
    var aT = nc();
    function sT(e, t) {
      var n = e.__data__;
      return aT(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
    }
    rc.exports = sT;
  });
  var oc = f((yq, ic) => {
    var uT = an();
    function cT(e) {
      var t = uT(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    ic.exports = cT;
  });
  var sc = f((vq, ac) => {
    var lT = an();
    function fT(e) {
      return lT(this, e).get(e);
    }
    ac.exports = fT;
  });
  var cc = f((mq, uc) => {
    var dT = an();
    function pT(e) {
      return dT(this, e).has(e);
    }
    uc.exports = pT;
  });
  var fc = f((_q, lc) => {
    var gT = an();
    function hT(e, t) {
      var n = gT(this, e),
        r = n.size;
      return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
    }
    lc.exports = hT;
  });
  var jn = f((Iq, dc) => {
    var ET = ec(),
      yT = oc(),
      vT = sc(),
      mT = cc(),
      _T = fc();
    function Rt(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    Rt.prototype.clear = ET;
    Rt.prototype.delete = yT;
    Rt.prototype.get = vT;
    Rt.prototype.has = mT;
    Rt.prototype.set = _T;
    dc.exports = Rt;
  });
  var gc = f((Tq, pc) => {
    var IT = rn(),
      TT = Kn(),
      bT = jn(),
      AT = 200;
    function ST(e, t) {
      var n = this.__data__;
      if (n instanceof IT) {
        var r = n.__data__;
        if (!TT || r.length < AT - 1)
          return r.push([e, t]), (this.size = ++n.size), this;
        n = this.__data__ = new bT(r);
      }
      return n.set(e, t), (this.size = n.size), this;
    }
    pc.exports = ST;
  });
  var xi = f((bq, hc) => {
    var wT = rn(),
      OT = yu(),
      xT = mu(),
      RT = Iu(),
      CT = bu(),
      PT = gc();
    function Ct(e) {
      var t = (this.__data__ = new wT(e));
      this.size = t.size;
    }
    Ct.prototype.clear = OT;
    Ct.prototype.delete = xT;
    Ct.prototype.get = RT;
    Ct.prototype.has = CT;
    Ct.prototype.set = PT;
    hc.exports = Ct;
  });
  var yc = f((Aq, Ec) => {
    var LT = "__lodash_hash_undefined__";
    function NT(e) {
      return this.__data__.set(e, LT), this;
    }
    Ec.exports = NT;
  });
  var mc = f((Sq, vc) => {
    function MT(e) {
      return this.__data__.has(e);
    }
    vc.exports = MT;
  });
  var Ic = f((wq, _c) => {
    var DT = jn(),
      FT = yc(),
      qT = mc();
    function Yn(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.__data__ = new DT(); ++t < n; ) this.add(e[t]);
    }
    Yn.prototype.add = Yn.prototype.push = FT;
    Yn.prototype.has = qT;
    _c.exports = Yn;
  });
  var bc = f((Oq, Tc) => {
    function GT(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
        if (t(e[n], n, e)) return !0;
      return !1;
    }
    Tc.exports = GT;
  });
  var Sc = f((xq, Ac) => {
    function XT(e, t) {
      return e.has(t);
    }
    Ac.exports = XT;
  });
  var Ri = f((Rq, wc) => {
    var VT = Ic(),
      UT = bc(),
      BT = Sc(),
      kT = 1,
      HT = 2;
    function WT(e, t, n, r, i, o) {
      var a = n & kT,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var l = o.get(e),
        g = o.get(t);
      if (l && g) return l == t && g == e;
      var p = -1,
        d = !0,
        h = n & HT ? new VT() : void 0;
      for (o.set(e, t), o.set(t, e); ++p < s; ) {
        var m = e[p],
          E = t[p];
        if (r) var b = a ? r(E, m, p, t, e, o) : r(m, E, p, e, t, o);
        if (b !== void 0) {
          if (b) continue;
          d = !1;
          break;
        }
        if (h) {
          if (
            !UT(t, function (v, w) {
              if (!BT(h, w) && (m === v || i(m, v, n, r, o))) return h.push(w);
            })
          ) {
            d = !1;
            break;
          }
        } else if (!(m === E || i(m, E, n, r, o))) {
          d = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), d;
    }
    wc.exports = WT;
  });
  var xc = f((Cq, Oc) => {
    var zT = Ve(),
      KT = zT.Uint8Array;
    Oc.exports = KT;
  });
  var Cc = f((Pq, Rc) => {
    function jT(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r, i) {
          n[++t] = [i, r];
        }),
        n
      );
    }
    Rc.exports = jT;
  });
  var Lc = f((Lq, Pc) => {
    function YT(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (r) {
          n[++t] = r;
        }),
        n
      );
    }
    Pc.exports = YT;
  });
  var qc = f((Nq, Fc) => {
    var Nc = bt(),
      Mc = xc(),
      $T = zn(),
      QT = Ri(),
      ZT = Cc(),
      JT = Lc(),
      eb = 1,
      tb = 2,
      nb = "[object Boolean]",
      rb = "[object Date]",
      ib = "[object Error]",
      ob = "[object Map]",
      ab = "[object Number]",
      sb = "[object RegExp]",
      ub = "[object Set]",
      cb = "[object String]",
      lb = "[object Symbol]",
      fb = "[object ArrayBuffer]",
      db = "[object DataView]",
      Dc = Nc ? Nc.prototype : void 0,
      Ci = Dc ? Dc.valueOf : void 0;
    function pb(e, t, n, r, i, o, a) {
      switch (n) {
        case db:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case fb:
          return !(e.byteLength != t.byteLength || !o(new Mc(e), new Mc(t)));
        case nb:
        case rb:
        case ab:
          return $T(+e, +t);
        case ib:
          return e.name == t.name && e.message == t.message;
        case sb:
        case cb:
          return e == t + "";
        case ob:
          var s = ZT;
        case ub:
          var u = r & eb;
          if ((s || (s = JT), e.size != t.size && !u)) return !1;
          var l = a.get(e);
          if (l) return l == t;
          (r |= tb), a.set(e, t);
          var g = QT(s(e), s(t), r, i, o, a);
          return a.delete(e), g;
        case lb:
          if (Ci) return Ci.call(e) == Ci.call(t);
      }
      return !1;
    }
    Fc.exports = pb;
  });
  var $n = f((Mq, Gc) => {
    function gb(e, t) {
      for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
      return e;
    }
    Gc.exports = gb;
  });
  var _e = f((Dq, Xc) => {
    var hb = Array.isArray;
    Xc.exports = hb;
  });
  var Pi = f((Fq, Vc) => {
    var Eb = $n(),
      yb = _e();
    function vb(e, t, n) {
      var r = t(e);
      return yb(e) ? r : Eb(r, n(e));
    }
    Vc.exports = vb;
  });
  var Bc = f((qq, Uc) => {
    function mb(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
        var a = e[n];
        t(a, n, e) && (o[i++] = a);
      }
      return o;
    }
    Uc.exports = mb;
  });
  var Li = f((Gq, kc) => {
    function _b() {
      return [];
    }
    kc.exports = _b;
  });
  var Ni = f((Xq, Wc) => {
    var Ib = Bc(),
      Tb = Li(),
      bb = Object.prototype,
      Ab = bb.propertyIsEnumerable,
      Hc = Object.getOwnPropertySymbols,
      Sb = Hc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                Ib(Hc(e), function (t) {
                  return Ab.call(e, t);
                }));
          }
        : Tb;
    Wc.exports = Sb;
  });
  var Kc = f((Vq, zc) => {
    function wb(e, t) {
      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
      return r;
    }
    zc.exports = wb;
  });
  var Yc = f((Uq, jc) => {
    var Ob = at(),
      xb = Je(),
      Rb = "[object Arguments]";
    function Cb(e) {
      return xb(e) && Ob(e) == Rb;
    }
    jc.exports = Cb;
  });
  var sn = f((Bq, Zc) => {
    var $c = Yc(),
      Pb = Je(),
      Qc = Object.prototype,
      Lb = Qc.hasOwnProperty,
      Nb = Qc.propertyIsEnumerable,
      Mb = $c(
        (function () {
          return arguments;
        })()
      )
        ? $c
        : function (e) {
            return Pb(e) && Lb.call(e, "callee") && !Nb.call(e, "callee");
          };
    Zc.exports = Mb;
  });
  var el = f((kq, Jc) => {
    function Db() {
      return !1;
    }
    Jc.exports = Db;
  });
  var Qn = f((un, Pt) => {
    var Fb = Ve(),
      qb = el(),
      rl = typeof un == "object" && un && !un.nodeType && un,
      tl = rl && typeof Pt == "object" && Pt && !Pt.nodeType && Pt,
      Gb = tl && tl.exports === rl,
      nl = Gb ? Fb.Buffer : void 0,
      Xb = nl ? nl.isBuffer : void 0,
      Vb = Xb || qb;
    Pt.exports = Vb;
  });
  var Zn = f((Hq, il) => {
    var Ub = 9007199254740991,
      Bb = /^(?:0|[1-9]\d*)$/;
    function kb(e, t) {
      var n = typeof e;
      return (
        (t = t ?? Ub),
        !!t &&
          (n == "number" || (n != "symbol" && Bb.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    il.exports = kb;
  });
  var Jn = f((Wq, ol) => {
    var Hb = 9007199254740991;
    function Wb(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Hb;
    }
    ol.exports = Wb;
  });
  var sl = f((zq, al) => {
    var zb = at(),
      Kb = Jn(),
      jb = Je(),
      Yb = "[object Arguments]",
      $b = "[object Array]",
      Qb = "[object Boolean]",
      Zb = "[object Date]",
      Jb = "[object Error]",
      eA = "[object Function]",
      tA = "[object Map]",
      nA = "[object Number]",
      rA = "[object Object]",
      iA = "[object RegExp]",
      oA = "[object Set]",
      aA = "[object String]",
      sA = "[object WeakMap]",
      uA = "[object ArrayBuffer]",
      cA = "[object DataView]",
      lA = "[object Float32Array]",
      fA = "[object Float64Array]",
      dA = "[object Int8Array]",
      pA = "[object Int16Array]",
      gA = "[object Int32Array]",
      hA = "[object Uint8Array]",
      EA = "[object Uint8ClampedArray]",
      yA = "[object Uint16Array]",
      vA = "[object Uint32Array]",
      de = {};
    de[lA] =
      de[fA] =
      de[dA] =
      de[pA] =
      de[gA] =
      de[hA] =
      de[EA] =
      de[yA] =
      de[vA] =
        !0;
    de[Yb] =
      de[$b] =
      de[uA] =
      de[Qb] =
      de[cA] =
      de[Zb] =
      de[Jb] =
      de[eA] =
      de[tA] =
      de[nA] =
      de[rA] =
      de[iA] =
      de[oA] =
      de[aA] =
      de[sA] =
        !1;
    function mA(e) {
      return jb(e) && Kb(e.length) && !!de[zb(e)];
    }
    al.exports = mA;
  });
  var cl = f((Kq, ul) => {
    function _A(e) {
      return function (t) {
        return e(t);
      };
    }
    ul.exports = _A;
  });
  var fl = f((cn, Lt) => {
    var IA = oi(),
      ll = typeof cn == "object" && cn && !cn.nodeType && cn,
      ln = ll && typeof Lt == "object" && Lt && !Lt.nodeType && Lt,
      TA = ln && ln.exports === ll,
      Mi = TA && IA.process,
      bA = (function () {
        try {
          var e = ln && ln.require && ln.require("util").types;
          return e || (Mi && Mi.binding && Mi.binding("util"));
        } catch {}
      })();
    Lt.exports = bA;
  });
  var er = f((jq, gl) => {
    var AA = sl(),
      SA = cl(),
      dl = fl(),
      pl = dl && dl.isTypedArray,
      wA = pl ? SA(pl) : AA;
    gl.exports = wA;
  });
  var Di = f((Yq, hl) => {
    var OA = Kc(),
      xA = sn(),
      RA = _e(),
      CA = Qn(),
      PA = Zn(),
      LA = er(),
      NA = Object.prototype,
      MA = NA.hasOwnProperty;
    function DA(e, t) {
      var n = RA(e),
        r = !n && xA(e),
        i = !n && !r && CA(e),
        o = !n && !r && !i && LA(e),
        a = n || r || i || o,
        s = a ? OA(e.length, String) : [],
        u = s.length;
      for (var l in e)
        (t || MA.call(e, l)) &&
          !(
            a &&
            (l == "length" ||
              (i && (l == "offset" || l == "parent")) ||
              (o &&
                (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
              PA(l, u))
          ) &&
          s.push(l);
      return s;
    }
    hl.exports = DA;
  });
  var tr = f(($q, El) => {
    var FA = Object.prototype;
    function qA(e) {
      var t = e && e.constructor,
        n = (typeof t == "function" && t.prototype) || FA;
      return e === n;
    }
    El.exports = qA;
  });
  var vl = f((Qq, yl) => {
    var GA = ai(),
      XA = GA(Object.keys, Object);
    yl.exports = XA;
  });
  var nr = f((Zq, ml) => {
    var VA = tr(),
      UA = vl(),
      BA = Object.prototype,
      kA = BA.hasOwnProperty;
    function HA(e) {
      if (!VA(e)) return UA(e);
      var t = [];
      for (var n in Object(e)) kA.call(e, n) && n != "constructor" && t.push(n);
      return t;
    }
    ml.exports = HA;
  });
  var pt = f((Jq, _l) => {
    var WA = Si(),
      zA = Jn();
    function KA(e) {
      return e != null && zA(e.length) && !WA(e);
    }
    _l.exports = KA;
  });
  var fn = f((e1, Il) => {
    var jA = Di(),
      YA = nr(),
      $A = pt();
    function QA(e) {
      return $A(e) ? jA(e) : YA(e);
    }
    Il.exports = QA;
  });
  var bl = f((t1, Tl) => {
    var ZA = Pi(),
      JA = Ni(),
      e0 = fn();
    function t0(e) {
      return ZA(e, e0, JA);
    }
    Tl.exports = t0;
  });
  var wl = f((n1, Sl) => {
    var Al = bl(),
      n0 = 1,
      r0 = Object.prototype,
      i0 = r0.hasOwnProperty;
    function o0(e, t, n, r, i, o) {
      var a = n & n0,
        s = Al(e),
        u = s.length,
        l = Al(t),
        g = l.length;
      if (u != g && !a) return !1;
      for (var p = u; p--; ) {
        var d = s[p];
        if (!(a ? d in t : i0.call(t, d))) return !1;
      }
      var h = o.get(e),
        m = o.get(t);
      if (h && m) return h == t && m == e;
      var E = !0;
      o.set(e, t), o.set(t, e);
      for (var b = a; ++p < u; ) {
        d = s[p];
        var v = e[d],
          w = t[d];
        if (r) var A = a ? r(w, v, d, t, e, o) : r(v, w, d, e, t, o);
        if (!(A === void 0 ? v === w || i(v, w, n, r, o) : A)) {
          E = !1;
          break;
        }
        b || (b = d == "constructor");
      }
      if (E && !b) {
        var R = e.constructor,
          C = t.constructor;
        R != C &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof R == "function" &&
            R instanceof R &&
            typeof C == "function" &&
            C instanceof C
          ) &&
          (E = !1);
      }
      return o.delete(e), o.delete(t), E;
    }
    Sl.exports = o0;
  });
  var xl = f((r1, Ol) => {
    var a0 = st(),
      s0 = Ve(),
      u0 = a0(s0, "DataView");
    Ol.exports = u0;
  });
  var Cl = f((i1, Rl) => {
    var c0 = st(),
      l0 = Ve(),
      f0 = c0(l0, "Promise");
    Rl.exports = f0;
  });
  var Ll = f((o1, Pl) => {
    var d0 = st(),
      p0 = Ve(),
      g0 = d0(p0, "Set");
    Pl.exports = g0;
  });
  var Fi = f((a1, Nl) => {
    var h0 = st(),
      E0 = Ve(),
      y0 = h0(E0, "WeakMap");
    Nl.exports = y0;
  });
  var rr = f((s1, Vl) => {
    var qi = xl(),
      Gi = Kn(),
      Xi = Cl(),
      Vi = Ll(),
      Ui = Fi(),
      Xl = at(),
      Nt = Oi(),
      Ml = "[object Map]",
      v0 = "[object Object]",
      Dl = "[object Promise]",
      Fl = "[object Set]",
      ql = "[object WeakMap]",
      Gl = "[object DataView]",
      m0 = Nt(qi),
      _0 = Nt(Gi),
      I0 = Nt(Xi),
      T0 = Nt(Vi),
      b0 = Nt(Ui),
      gt = Xl;
    ((qi && gt(new qi(new ArrayBuffer(1))) != Gl) ||
      (Gi && gt(new Gi()) != Ml) ||
      (Xi && gt(Xi.resolve()) != Dl) ||
      (Vi && gt(new Vi()) != Fl) ||
      (Ui && gt(new Ui()) != ql)) &&
      (gt = function (e) {
        var t = Xl(e),
          n = t == v0 ? e.constructor : void 0,
          r = n ? Nt(n) : "";
        if (r)
          switch (r) {
            case m0:
              return Gl;
            case _0:
              return Ml;
            case I0:
              return Dl;
            case T0:
              return Fl;
            case b0:
              return ql;
          }
        return t;
      });
    Vl.exports = gt;
  });
  var jl = f((u1, Kl) => {
    var Bi = xi(),
      A0 = Ri(),
      S0 = qc(),
      w0 = wl(),
      Ul = rr(),
      Bl = _e(),
      kl = Qn(),
      O0 = er(),
      x0 = 1,
      Hl = "[object Arguments]",
      Wl = "[object Array]",
      ir = "[object Object]",
      R0 = Object.prototype,
      zl = R0.hasOwnProperty;
    function C0(e, t, n, r, i, o) {
      var a = Bl(e),
        s = Bl(t),
        u = a ? Wl : Ul(e),
        l = s ? Wl : Ul(t);
      (u = u == Hl ? ir : u), (l = l == Hl ? ir : l);
      var g = u == ir,
        p = l == ir,
        d = u == l;
      if (d && kl(e)) {
        if (!kl(t)) return !1;
        (a = !0), (g = !1);
      }
      if (d && !g)
        return (
          o || (o = new Bi()),
          a || O0(e) ? A0(e, t, n, r, i, o) : S0(e, t, u, n, r, i, o)
        );
      if (!(n & x0)) {
        var h = g && zl.call(e, "__wrapped__"),
          m = p && zl.call(t, "__wrapped__");
        if (h || m) {
          var E = h ? e.value() : e,
            b = m ? t.value() : t;
          return o || (o = new Bi()), i(E, b, n, r, o);
        }
      }
      return d ? (o || (o = new Bi()), w0(e, t, n, r, i, o)) : !1;
    }
    Kl.exports = C0;
  });
  var ki = f((c1, Ql) => {
    var P0 = jl(),
      Yl = Je();
    function $l(e, t, n, r, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Yl(e) && !Yl(t))
        ? e !== e && t !== t
        : P0(e, t, n, r, $l, i);
    }
    Ql.exports = $l;
  });
  var Jl = f((l1, Zl) => {
    var L0 = xi(),
      N0 = ki(),
      M0 = 1,
      D0 = 2;
    function F0(e, t, n, r) {
      var i = n.length,
        o = i,
        a = !r;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = n[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = n[i];
        var u = s[0],
          l = e[u],
          g = s[1];
        if (a && s[2]) {
          if (l === void 0 && !(u in e)) return !1;
        } else {
          var p = new L0();
          if (r) var d = r(l, g, u, e, t, p);
          if (!(d === void 0 ? N0(g, l, M0 | D0, r, p) : d)) return !1;
        }
      }
      return !0;
    }
    Zl.exports = F0;
  });
  var Hi = f((f1, ef) => {
    var q0 = Ye();
    function G0(e) {
      return e === e && !q0(e);
    }
    ef.exports = G0;
  });
  var nf = f((d1, tf) => {
    var X0 = Hi(),
      V0 = fn();
    function U0(e) {
      for (var t = V0(e), n = t.length; n--; ) {
        var r = t[n],
          i = e[r];
        t[n] = [r, i, X0(i)];
      }
      return t;
    }
    tf.exports = U0;
  });
  var Wi = f((p1, rf) => {
    function B0(e, t) {
      return function (n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
      };
    }
    rf.exports = B0;
  });
  var af = f((g1, of) => {
    var k0 = Jl(),
      H0 = nf(),
      W0 = Wi();
    function z0(e) {
      var t = H0(e);
      return t.length == 1 && t[0][2]
        ? W0(t[0][0], t[0][1])
        : function (n) {
            return n === e || k0(n, e, t);
          };
    }
    of.exports = z0;
  });
  var dn = f((h1, sf) => {
    var K0 = at(),
      j0 = Je(),
      Y0 = "[object Symbol]";
    function $0(e) {
      return typeof e == "symbol" || (j0(e) && K0(e) == Y0);
    }
    sf.exports = $0;
  });
  var or = f((E1, uf) => {
    var Q0 = _e(),
      Z0 = dn(),
      J0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      eS = /^\w*$/;
    function tS(e, t) {
      if (Q0(e)) return !1;
      var n = typeof e;
      return n == "number" ||
        n == "symbol" ||
        n == "boolean" ||
        e == null ||
        Z0(e)
        ? !0
        : eS.test(e) || !J0.test(e) || (t != null && e in Object(t));
    }
    uf.exports = tS;
  });
  var ff = f((y1, lf) => {
    var cf = jn(),
      nS = "Expected a function";
    function zi(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(nS);
      var n = function () {
        var r = arguments,
          i = t ? t.apply(this, r) : r[0],
          o = n.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, r);
        return (n.cache = o.set(i, a) || o), a;
      };
      return (n.cache = new (zi.Cache || cf)()), n;
    }
    zi.Cache = cf;
    lf.exports = zi;
  });
  var pf = f((v1, df) => {
    var rS = ff(),
      iS = 500;
    function oS(e) {
      var t = rS(e, function (r) {
          return n.size === iS && n.clear(), r;
        }),
        n = t.cache;
      return t;
    }
    df.exports = oS;
  });
  var hf = f((m1, gf) => {
    var aS = pf(),
      sS =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      uS = /\\(\\)?/g,
      cS = aS(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(sS, function (n, r, i, o) {
            t.push(i ? o.replace(uS, "$1") : r || n);
          }),
          t
        );
      });
    gf.exports = cS;
  });
  var Ki = f((_1, Ef) => {
    function lS(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
        i[n] = t(e[n], n, e);
      return i;
    }
    Ef.exports = lS;
  });
  var Tf = f((I1, If) => {
    var yf = bt(),
      fS = Ki(),
      dS = _e(),
      pS = dn(),
      gS = 1 / 0,
      vf = yf ? yf.prototype : void 0,
      mf = vf ? vf.toString : void 0;
    function _f(e) {
      if (typeof e == "string") return e;
      if (dS(e)) return fS(e, _f) + "";
      if (pS(e)) return mf ? mf.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -gS ? "-0" : t;
    }
    If.exports = _f;
  });
  var Af = f((T1, bf) => {
    var hS = Tf();
    function ES(e) {
      return e == null ? "" : hS(e);
    }
    bf.exports = ES;
  });
  var pn = f((b1, Sf) => {
    var yS = _e(),
      vS = or(),
      mS = hf(),
      _S = Af();
    function IS(e, t) {
      return yS(e) ? e : vS(e, t) ? [e] : mS(_S(e));
    }
    Sf.exports = IS;
  });
  var Mt = f((A1, wf) => {
    var TS = dn(),
      bS = 1 / 0;
    function AS(e) {
      if (typeof e == "string" || TS(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -bS ? "-0" : t;
    }
    wf.exports = AS;
  });
  var ar = f((S1, Of) => {
    var SS = pn(),
      wS = Mt();
    function OS(e, t) {
      t = SS(t, e);
      for (var n = 0, r = t.length; e != null && n < r; ) e = e[wS(t[n++])];
      return n && n == r ? e : void 0;
    }
    Of.exports = OS;
  });
  var sr = f((w1, xf) => {
    var xS = ar();
    function RS(e, t, n) {
      var r = e == null ? void 0 : xS(e, t);
      return r === void 0 ? n : r;
    }
    xf.exports = RS;
  });
  var Cf = f((O1, Rf) => {
    function CS(e, t) {
      return e != null && t in Object(e);
    }
    Rf.exports = CS;
  });
  var Lf = f((x1, Pf) => {
    var PS = pn(),
      LS = sn(),
      NS = _e(),
      MS = Zn(),
      DS = Jn(),
      FS = Mt();
    function qS(e, t, n) {
      t = PS(t, e);
      for (var r = -1, i = t.length, o = !1; ++r < i; ) {
        var a = FS(t[r]);
        if (!(o = e != null && n(e, a))) break;
        e = e[a];
      }
      return o || ++r != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && DS(i) && MS(a, i) && (NS(e) || LS(e)));
    }
    Pf.exports = qS;
  });
  var Mf = f((R1, Nf) => {
    var GS = Cf(),
      XS = Lf();
    function VS(e, t) {
      return e != null && XS(e, t, GS);
    }
    Nf.exports = VS;
  });
  var Ff = f((C1, Df) => {
    var US = ki(),
      BS = sr(),
      kS = Mf(),
      HS = or(),
      WS = Hi(),
      zS = Wi(),
      KS = Mt(),
      jS = 1,
      YS = 2;
    function $S(e, t) {
      return HS(e) && WS(t)
        ? zS(KS(e), t)
        : function (n) {
            var r = BS(n, e);
            return r === void 0 && r === t ? kS(n, e) : US(t, r, jS | YS);
          };
    }
    Df.exports = $S;
  });
  var ur = f((P1, qf) => {
    function QS(e) {
      return e;
    }
    qf.exports = QS;
  });
  var ji = f((L1, Gf) => {
    function ZS(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Gf.exports = ZS;
  });
  var Vf = f((N1, Xf) => {
    var JS = ar();
    function ew(e) {
      return function (t) {
        return JS(t, e);
      };
    }
    Xf.exports = ew;
  });
  var Bf = f((M1, Uf) => {
    var tw = ji(),
      nw = Vf(),
      rw = or(),
      iw = Mt();
    function ow(e) {
      return rw(e) ? tw(iw(e)) : nw(e);
    }
    Uf.exports = ow;
  });
  var ut = f((D1, kf) => {
    var aw = af(),
      sw = Ff(),
      uw = ur(),
      cw = _e(),
      lw = Bf();
    function fw(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? uw
        : typeof e == "object"
        ? cw(e)
          ? sw(e[0], e[1])
          : aw(e)
        : lw(e);
    }
    kf.exports = fw;
  });
  var Yi = f((F1, Hf) => {
    var dw = ut(),
      pw = pt(),
      gw = fn();
    function hw(e) {
      return function (t, n, r) {
        var i = Object(t);
        if (!pw(t)) {
          var o = dw(n, 3);
          (t = gw(t)),
            (n = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, n, r);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Hf.exports = hw;
  });
  var $i = f((q1, Wf) => {
    function Ew(e, t, n, r) {
      for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Wf.exports = Ew;
  });
  var Kf = f((G1, zf) => {
    var yw = /\s/;
    function vw(e) {
      for (var t = e.length; t-- && yw.test(e.charAt(t)); );
      return t;
    }
    zf.exports = vw;
  });
  var Yf = f((X1, jf) => {
    var mw = Kf(),
      _w = /^\s+/;
    function Iw(e) {
      return e && e.slice(0, mw(e) + 1).replace(_w, "");
    }
    jf.exports = Iw;
  });
  var cr = f((V1, Zf) => {
    var Tw = Yf(),
      $f = Ye(),
      bw = dn(),
      Qf = 0 / 0,
      Aw = /^[-+]0x[0-9a-f]+$/i,
      Sw = /^0b[01]+$/i,
      ww = /^0o[0-7]+$/i,
      Ow = parseInt;
    function xw(e) {
      if (typeof e == "number") return e;
      if (bw(e)) return Qf;
      if ($f(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = $f(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = Tw(e);
      var n = Sw.test(e);
      return n || ww.test(e) ? Ow(e.slice(2), n ? 2 : 8) : Aw.test(e) ? Qf : +e;
    }
    Zf.exports = xw;
  });
  var td = f((U1, ed) => {
    var Rw = cr(),
      Jf = 1 / 0,
      Cw = 17976931348623157e292;
    function Pw(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = Rw(e)), e === Jf || e === -Jf)) {
        var t = e < 0 ? -1 : 1;
        return t * Cw;
      }
      return e === e ? e : 0;
    }
    ed.exports = Pw;
  });
  var Qi = f((B1, nd) => {
    var Lw = td();
    function Nw(e) {
      var t = Lw(e),
        n = t % 1;
      return t === t ? (n ? t - n : t) : 0;
    }
    nd.exports = Nw;
  });
  var id = f((k1, rd) => {
    var Mw = $i(),
      Dw = ut(),
      Fw = Qi(),
      qw = Math.max;
    function Gw(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var i = n == null ? 0 : Fw(n);
      return i < 0 && (i = qw(r + i, 0)), Mw(e, Dw(t, 3), i);
    }
    rd.exports = Gw;
  });
  var Zi = f((H1, od) => {
    var Xw = Yi(),
      Vw = id(),
      Uw = Xw(Vw);
    od.exports = Uw;
  });
  var ud = {};
  xe(ud, {
    ELEMENT_MATCHES: () => Bw,
    FLEX_PREFIXED: () => Ji,
    IS_BROWSER_ENV: () => Be,
    TRANSFORM_PREFIXED: () => ct,
    TRANSFORM_STYLE_PREFIXED: () => fr,
    withBrowser: () => lr,
  });
  var sd,
    Be,
    lr,
    Bw,
    Ji,
    ct,
    ad,
    fr,
    dr = pe(() => {
      "use strict";
      (sd = ue(Zi())),
        (Be = typeof window < "u"),
        (lr = (e, t) => (Be ? e() : t)),
        (Bw = lr(() =>
          (0, sd.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Ji = lr(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            n = "";
          try {
            let { length: r } = t;
            for (let i = 0; i < r; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return n;
          } catch {
            return n;
          }
        }, "flex")),
        (ct = lr(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              n = "Transform",
              { length: r } = t;
            for (let i = 0; i < r; i++) {
              let o = t[i] + n;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (ad = ct.split("transform")[0]),
        (fr = ad ? ad + "TransformStyle" : "transformStyle");
    });
  var eo = f((W1, pd) => {
    var kw = 4,
      Hw = 0.001,
      Ww = 1e-7,
      zw = 10,
      gn = 11,
      pr = 1 / (gn - 1),
      Kw = typeof Float32Array == "function";
    function cd(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function ld(e, t) {
      return 3 * t - 6 * e;
    }
    function fd(e) {
      return 3 * e;
    }
    function gr(e, t, n) {
      return ((cd(t, n) * e + ld(t, n)) * e + fd(t)) * e;
    }
    function dd(e, t, n) {
      return 3 * cd(t, n) * e * e + 2 * ld(t, n) * e + fd(t);
    }
    function jw(e, t, n, r, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (n - t) / 2), (o = gr(a, r, i) - e), o > 0 ? (n = a) : (t = a);
      while (Math.abs(o) > Ww && ++s < zw);
      return a;
    }
    function Yw(e, t, n, r) {
      for (var i = 0; i < kw; ++i) {
        var o = dd(t, n, r);
        if (o === 0) return t;
        var a = gr(t, n, r) - e;
        t -= a / o;
      }
      return t;
    }
    pd.exports = function (t, n, r, i) {
      if (!(0 <= t && t <= 1 && 0 <= r && r <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = Kw ? new Float32Array(gn) : new Array(gn);
      if (t !== n || r !== i)
        for (var a = 0; a < gn; ++a) o[a] = gr(a * pr, t, r);
      function s(u) {
        for (var l = 0, g = 1, p = gn - 1; g !== p && o[g] <= u; ++g) l += pr;
        --g;
        var d = (u - o[g]) / (o[g + 1] - o[g]),
          h = l + d * pr,
          m = dd(h, t, r);
        return m >= Hw ? Yw(u, h, t, r) : m === 0 ? h : jw(u, l, l + pr, t, r);
      }
      return function (l) {
        return t === n && r === i
          ? l
          : l === 0
          ? 0
          : l === 1
          ? 1
          : gr(s(l), n, i);
      };
    };
  });
  var En = {};
  xe(En, {
    bounce: () => PO,
    bouncePast: () => LO,
    ease: () => $w,
    easeIn: () => Qw,
    easeInOut: () => Jw,
    easeOut: () => Zw,
    inBack: () => TO,
    inCirc: () => vO,
    inCubic: () => rO,
    inElastic: () => SO,
    inExpo: () => hO,
    inOutBack: () => AO,
    inOutCirc: () => _O,
    inOutCubic: () => oO,
    inOutElastic: () => OO,
    inOutExpo: () => yO,
    inOutQuad: () => nO,
    inOutQuart: () => uO,
    inOutQuint: () => fO,
    inOutSine: () => gO,
    inQuad: () => eO,
    inQuart: () => aO,
    inQuint: () => cO,
    inSine: () => dO,
    outBack: () => bO,
    outBounce: () => IO,
    outCirc: () => mO,
    outCubic: () => iO,
    outElastic: () => wO,
    outExpo: () => EO,
    outQuad: () => tO,
    outQuart: () => sO,
    outQuint: () => lO,
    outSine: () => pO,
    swingFrom: () => RO,
    swingFromTo: () => xO,
    swingTo: () => CO,
  });
  function eO(e) {
    return Math.pow(e, 2);
  }
  function tO(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function nO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function rO(e) {
    return Math.pow(e, 3);
  }
  function iO(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function oO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function aO(e) {
    return Math.pow(e, 4);
  }
  function sO(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function uO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function cO(e) {
    return Math.pow(e, 5);
  }
  function lO(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function fO(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function dO(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function pO(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function gO(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function hO(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function EO(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function yO(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function vO(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function mO(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function _O(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function IO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function TO(e) {
    let t = et;
    return e * e * ((t + 1) * e - t);
  }
  function bO(e) {
    let t = et;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function AO(e) {
    let t = et;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function SO(e) {
    let t = et,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (n || (n = 0.3),
        r < 1
          ? ((r = 1), (t = n / 4))
          : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
        -(
          r *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / n)
        ));
  }
  function wO(e) {
    let t = et,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (n || (n = 0.3),
        r < 1
          ? ((r = 1), (t = n / 4))
          : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
        r * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / n) + 1);
  }
  function OO(e) {
    let t = et,
      n = 0,
      r = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (n || (n = 0.3 * 1.5),
        r < 1
          ? ((r = 1), (t = n / 4))
          : (t = (n / (2 * Math.PI)) * Math.asin(1 / r)),
        e < 1
          ? -0.5 *
            (r *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / n))
          : r *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / n) *
              0.5 +
            1);
  }
  function xO(e) {
    let t = et;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function RO(e) {
    let t = et;
    return e * e * ((t + 1) * e - t);
  }
  function CO(e) {
    let t = et;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function PO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function LO(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var hn,
    et,
    $w,
    Qw,
    Zw,
    Jw,
    to = pe(() => {
      "use strict";
      (hn = ue(eo())),
        (et = 1.70158),
        ($w = (0, hn.default)(0.25, 0.1, 0.25, 1)),
        (Qw = (0, hn.default)(0.42, 0, 1, 1)),
        (Zw = (0, hn.default)(0, 0, 0.58, 1)),
        (Jw = (0, hn.default)(0.42, 0, 0.58, 1));
    });
  var hd = {};
  xe(hd, {
    applyEasing: () => MO,
    createBezierEasing: () => NO,
    optimizeFloat: () => yn,
  });
  function yn(e, t = 5, n = 10) {
    let r = Math.pow(n, t),
      i = Number(Math.round(e * r) / r);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function NO(e) {
    return (0, gd.default)(...e);
  }
  function MO(e, t, n) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : yn(n ? (t > 0 ? n(t) : t) : t > 0 && e && En[e] ? En[e](t) : t);
  }
  var gd,
    no = pe(() => {
      "use strict";
      to();
      gd = ue(eo());
    });
  var vd = {};
  xe(vd, {
    createElementState: () => yd,
    ixElements: () => jO,
    mergeActionState: () => ro,
  });
  function yd(e, t, n, r, i) {
    let o =
      n === DO ? (0, Dt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Dt.mergeIn)(e, [r], { id: r, ref: t, refId: o, refType: n });
  }
  function ro(e, t, n, r, i) {
    let o = $O(i);
    return (0, Dt.mergeIn)(e, [t, KO, n], r, o);
  }
  function $O(e) {
    let { config: t } = e;
    return YO.reduce((n, r) => {
      let i = r[0],
        o = r[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (n[o] = s), n;
    }, {});
  }
  var Dt,
    K1,
    DO,
    j1,
    FO,
    qO,
    GO,
    XO,
    VO,
    UO,
    BO,
    kO,
    HO,
    WO,
    zO,
    Ed,
    KO,
    jO,
    YO,
    md = pe(() => {
      "use strict";
      Dt = ue(wt());
      Re();
      ({
        HTML_ELEMENT: K1,
        PLAIN_OBJECT: DO,
        ABSTRACT_NODE: j1,
        CONFIG_X_VALUE: FO,
        CONFIG_Y_VALUE: qO,
        CONFIG_Z_VALUE: GO,
        CONFIG_VALUE: XO,
        CONFIG_X_UNIT: VO,
        CONFIG_Y_UNIT: UO,
        CONFIG_Z_UNIT: BO,
        CONFIG_UNIT: kO,
      } = Ie),
        ({
          IX2_SESSION_STOPPED: HO,
          IX2_INSTANCE_ADDED: WO,
          IX2_ELEMENT_STATE_CHANGED: zO,
        } = me),
        (Ed = {}),
        (KO = "refState"),
        (jO = (e = Ed, t = {}) => {
          switch (t.type) {
            case HO:
              return Ed;
            case WO: {
              let {
                  elementId: n,
                  element: r,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, Dt.getIn)(u, [n, r]) !== r && (u = yd(u, r, a, n, o)),
                ro(u, n, s, i, o)
              );
            }
            case zO: {
              let {
                elementId: n,
                actionTypeId: r,
                current: i,
                actionItem: o,
              } = t.payload;
              return ro(e, n, r, i, o);
            }
            default:
              return e;
          }
        });
      YO = [
        [FO, VO],
        [qO, UO],
        [GO, BO],
        [XO, kO],
      ];
    });
  var _d = f((io) => {
    "use strict";
    Object.defineProperty(io, "__esModule", { value: !0 });
    function QO(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    QO(io, {
      clearPlugin: function () {
        return ix;
      },
      createPluginInstance: function () {
        return nx;
      },
      getPluginConfig: function () {
        return ZO;
      },
      getPluginDestination: function () {
        return tx;
      },
      getPluginDuration: function () {
        return JO;
      },
      getPluginOrigin: function () {
        return ex;
      },
      renderPlugin: function () {
        return rx;
      },
    });
    var ZO = (e) => e.value,
      JO = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let n = parseFloat(e.getAttribute("data-duration"));
        return n > 0
          ? n * 1e3
          : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      ex = (e) => e || { value: 0 },
      tx = (e) => ({ value: e.value }),
      nx = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      rx = (e, t, n) => {
        if (!e) return;
        let r = t[n.actionTypeId].value / 100;
        e.goToFrame(e.frames * r);
      },
      ix = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var Td = f((oo) => {
    "use strict";
    Object.defineProperty(oo, "__esModule", { value: !0 });
    function ox(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    ox(oo, {
      clearPlugin: function () {
        return hx;
      },
      createPluginInstance: function () {
        return px;
      },
      getPluginConfig: function () {
        return cx;
      },
      getPluginDestination: function () {
        return dx;
      },
      getPluginDuration: function () {
        return lx;
      },
      getPluginOrigin: function () {
        return fx;
      },
      renderPlugin: function () {
        return gx;
      },
    });
    var ax = (e) => document.querySelector(`[data-w-id="${e}"]`),
      sx = () => window.Webflow.require("spline"),
      ux = (e, t) => e.filter((n) => !t.includes(n)),
      cx = (e, t) => e.value[t],
      lx = () => null,
      Id = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      fx = (e, t) => {
        let n = t.config.value,
          r = Object.keys(n);
        if (e) {
          let o = Object.keys(e),
            a = ux(r, o);
          return a.length ? a.reduce((u, l) => ((u[l] = Id[l]), u), e) : e;
        }
        return r.reduce((o, a) => ((o[a] = Id[a]), o), {});
      },
      dx = (e) => e.value,
      px = (e, t) => {
        let n = t?.config?.target?.pluginElement;
        return n ? ax(n) : null;
      },
      gx = (e, t, n) => {
        let r = sx(),
          i = r.getInstance(e),
          o = n.config.target.objectId,
          a = (s) => {
            if (!s)
              throw new Error("Invalid spline app passed to renderSpline");
            let u = o && s.findObjectById(o);
            if (!u) return;
            let { PLUGIN_SPLINE: l } = t;
            l.positionX != null && (u.position.x = l.positionX),
              l.positionY != null && (u.position.y = l.positionY),
              l.positionZ != null && (u.position.z = l.positionZ),
              l.rotationX != null && (u.rotation.x = l.rotationX),
              l.rotationY != null && (u.rotation.y = l.rotationY),
              l.rotationZ != null && (u.rotation.z = l.rotationZ),
              l.scaleX != null && (u.scale.x = l.scaleX),
              l.scaleY != null && (u.scale.y = l.scaleY),
              l.scaleZ != null && (u.scale.z = l.scaleZ);
          };
        i ? a(i.spline) : r.setLoadHandler(e, a);
      },
      hx = () => null;
  });
  var bd = f((uo) => {
    "use strict";
    Object.defineProperty(uo, "__esModule", { value: !0 });
    function Ex(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Ex(uo, {
      clearPlugin: function () {
        return Sx;
      },
      createPluginInstance: function () {
        return bx;
      },
      getPluginConfig: function () {
        return mx;
      },
      getPluginDestination: function () {
        return Tx;
      },
      getPluginDuration: function () {
        return _x;
      },
      getPluginOrigin: function () {
        return Ix;
      },
      renderPlugin: function () {
        return Ax;
      },
    });
    var ao = "--wf-rive-fit",
      so = "--wf-rive-alignment",
      yx = (e) => document.querySelector(`[data-w-id="${e}"]`),
      vx = () => window.Webflow.require("rive"),
      mx = (e, t) => e.value.inputs[t],
      _x = () => null,
      Ix = (e, t) => {
        if (e) return e;
        let n = {},
          { inputs: r = {} } = t.config.value;
        for (let i in r) r[i] == null && (n[i] = 0);
        return n;
      },
      Tx = (e) => e.value.inputs ?? {},
      bx = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let r = t?.config?.target?.pluginElement;
        return r ? yx(r) : null;
      },
      Ax = (e, { PLUGIN_RIVE: t }, n) => {
        let r = vx(),
          i = r.getInstance(e),
          o = r.rive.StateMachineInputType,
          { name: a, inputs: s = {} } = n.config.value || {};
        function u(l) {
          if (l.loaded) g();
          else {
            let p = () => {
              g(), l?.off("load", p);
            };
            l?.on("load", p);
          }
          function g() {
            let p = l.stateMachineInputs(a);
            if (p != null) {
              if ((l.isPlaying || l.play(a, !1), ao in s || so in s)) {
                let d = l.layout,
                  h = s[ao] ?? d.fit,
                  m = s[so] ?? d.alignment;
                (h !== d.fit || m !== d.alignment) &&
                  (l.layout = d.copyWith({ fit: h, alignment: m }));
              }
              for (let d in s) {
                if (d === ao || d === so) continue;
                let h = p.find((m) => m.name === d);
                if (h != null)
                  switch (h.type) {
                    case o.Boolean: {
                      if (s[d] != null) {
                        let m = !!s[d];
                        h.value = m;
                      }
                      break;
                    }
                    case o.Number: {
                      let m = t[d];
                      m != null && (h.value = m);
                      break;
                    }
                    case o.Trigger: {
                      s[d] && h.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        i?.rive ? u(i.rive) : r.setLoadHandler(e, u);
      },
      Sx = (e, t) => null;
  });
  var lo = f((co) => {
    "use strict";
    Object.defineProperty(co, "__esModule", { value: !0 });
    Object.defineProperty(co, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return wx;
      },
    });
    var Ad = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function wx(e) {
      let t,
        n,
        r,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof Ad[o] == "string" ? Ad[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3 || u.length === 4
          ? ((t = parseInt(u[0] + u[0], 16)),
            (n = parseInt(u[1] + u[1], 16)),
            (r = parseInt(u[2] + u[2], 16)),
            u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255))
          : (u.length === 6 || u.length === 8) &&
            ((t = parseInt(u.substring(0, 2), 16)),
            (n = parseInt(u.substring(2, 4), 16)),
            (r = parseInt(u.substring(4, 6), 16)),
            u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (n = parseInt(u[1], 10)),
          (r = parseInt(u[2], 10)),
          (i = parseFloat(u[3]));
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(u[0], 10)),
          (n = parseInt(u[1], 10)),
          (r = parseInt(u[2], 10));
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          g = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let d = (1 - Math.abs(2 * p - 1)) * g,
          h = d * (1 - Math.abs(((l / 60) % 2) - 1)),
          m = p - d / 2,
          E,
          b,
          v;
        l >= 0 && l < 60
          ? ((E = d), (b = h), (v = 0))
          : l >= 60 && l < 120
          ? ((E = h), (b = d), (v = 0))
          : l >= 120 && l < 180
          ? ((E = 0), (b = d), (v = h))
          : l >= 180 && l < 240
          ? ((E = 0), (b = h), (v = d))
          : l >= 240 && l < 300
          ? ((E = h), (b = 0), (v = d))
          : ((E = d), (b = 0), (v = h)),
          (t = Math.round((E + m) * 255)),
          (n = Math.round((b + m) * 255)),
          (r = Math.round((v + m) * 255));
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          g = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100,
          d = (1 - Math.abs(2 * p - 1)) * g,
          h = d * (1 - Math.abs(((l / 60) % 2) - 1)),
          m = p - d / 2,
          E,
          b,
          v;
        l >= 0 && l < 60
          ? ((E = d), (b = h), (v = 0))
          : l >= 60 && l < 120
          ? ((E = h), (b = d), (v = 0))
          : l >= 120 && l < 180
          ? ((E = 0), (b = d), (v = h))
          : l >= 180 && l < 240
          ? ((E = 0), (b = h), (v = d))
          : l >= 240 && l < 300
          ? ((E = h), (b = 0), (v = d))
          : ((E = d), (b = 0), (v = h)),
          (t = Math.round((E + m) * 255)),
          (n = Math.round((b + m) * 255)),
          (r = Math.round((v + m) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(r))
        throw new Error(
          `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
        );
      return { red: t, green: n, blue: r, alpha: i };
    }
  });
  var Sd = f((fo) => {
    "use strict";
    Object.defineProperty(fo, "__esModule", { value: !0 });
    function Ox(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    Ox(fo, {
      clearPlugin: function () {
        return Fx;
      },
      createPluginInstance: function () {
        return Nx;
      },
      getPluginConfig: function () {
        return Rx;
      },
      getPluginDestination: function () {
        return Lx;
      },
      getPluginDuration: function () {
        return Cx;
      },
      getPluginOrigin: function () {
        return Px;
      },
      renderPlugin: function () {
        return Dx;
      },
    });
    var xx = lo(),
      Rx = (e, t) => e.value[t],
      Cx = () => null,
      Px = (e, t) => {
        if (e) return e;
        let n = t.config.value,
          r = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(r);
        if (n.size != null) return { size: parseInt(i, 10) };
        if (n.unit === "%" || n.unit === "-") return { size: parseFloat(i) };
        if (n.red != null && n.green != null && n.blue != null)
          return (0, xx.normalizeColor)(i);
      },
      Lx = (e) => e.value,
      Nx = () => null,
      Mx = {
        color: {
          match: ({ red: e, green: t, blue: n, alpha: r }) =>
            [e, t, n, r].every((i) => i != null),
          getValue: ({ red: e, green: t, blue: n, alpha: r }) =>
            `rgba(${e}, ${t}, ${n}, ${r})`,
        },
        size: {
          match: ({ size: e }) => e != null,
          getValue: ({ size: e }, t) => {
            switch (t) {
              case "-":
                return e;
              default:
                return `${e}${t}`;
            }
          },
        },
      },
      Dx = (e, t, n) => {
        let {
            target: { objectId: r },
            value: { unit: i },
          } = n.config,
          o = t.PLUGIN_VARIABLE,
          a = Object.values(Mx).find((s) => s.match(o, i));
        a && document.documentElement.style.setProperty(r, a.getValue(o, i));
      },
      Fx = (e, t) => {
        let n = t.config.target.objectId;
        document.documentElement.style.removeProperty(n);
      };
  });
  var Od = f((po) => {
    "use strict";
    Object.defineProperty(po, "__esModule", { value: !0 });
    Object.defineProperty(po, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return Ux;
      },
    });
    var hr = (Re(), We(Cs)),
      qx = Er(_d()),
      Gx = Er(Td()),
      Xx = Er(bd()),
      Vx = Er(Sd());
    function wd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (wd = function (r) {
        return r ? n : t;
      })(e);
    }
    function Er(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = wd(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, o, a)
            : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var Ux = new Map([
      [hr.ActionTypeConsts.PLUGIN_LOTTIE, { ...qx }],
      [hr.ActionTypeConsts.PLUGIN_SPLINE, { ...Gx }],
      [hr.ActionTypeConsts.PLUGIN_RIVE, { ...Xx }],
      [hr.ActionTypeConsts.PLUGIN_VARIABLE, { ...Vx }],
    ]);
  });
  var xd = {};
  xe(xd, {
    clearPlugin: () => mo,
    createPluginInstance: () => kx,
    getPluginConfig: () => ho,
    getPluginDestination: () => yo,
    getPluginDuration: () => Bx,
    getPluginOrigin: () => Eo,
    isPluginType: () => ht,
    renderPlugin: () => vo,
  });
  function ht(e) {
    return go.pluginMethodMap.has(e);
  }
  var go,
    Et,
    ho,
    Eo,
    Bx,
    yo,
    kx,
    vo,
    mo,
    _o = pe(() => {
      "use strict";
      dr();
      go = ue(Od());
      (Et = (e) => (t) => {
        if (!Be) return () => null;
        let n = go.pluginMethodMap.get(t);
        if (!n) throw new Error(`IX2 no plugin configured for: ${t}`);
        let r = n[e];
        if (!r) throw new Error(`IX2 invalid plugin method: ${e}`);
        return r;
      }),
        (ho = Et("getPluginConfig")),
        (Eo = Et("getPluginOrigin")),
        (Bx = Et("getPluginDuration")),
        (yo = Et("getPluginDestination")),
        (kx = Et("createPluginInstance")),
        (vo = Et("renderPlugin")),
        (mo = Et("clearPlugin"));
    });
  var Cd = f((nG, Rd) => {
    function Hx(e, t) {
      return e == null || e !== e ? t : e;
    }
    Rd.exports = Hx;
  });
  var Ld = f((rG, Pd) => {
    function Wx(e, t, n, r) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
      return n;
    }
    Pd.exports = Wx;
  });
  var Md = f((iG, Nd) => {
    function zx(e) {
      return function (t, n, r) {
        for (var i = -1, o = Object(t), a = r(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (n(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Nd.exports = zx;
  });
  var Fd = f((oG, Dd) => {
    var Kx = Md(),
      jx = Kx();
    Dd.exports = jx;
  });
  var Io = f((aG, qd) => {
    var Yx = Fd(),
      $x = fn();
    function Qx(e, t) {
      return e && Yx(e, t, $x);
    }
    qd.exports = Qx;
  });
  var Xd = f((sG, Gd) => {
    var Zx = pt();
    function Jx(e, t) {
      return function (n, r) {
        if (n == null) return n;
        if (!Zx(n)) return e(n, r);
        for (
          var i = n.length, o = t ? i : -1, a = Object(n);
          (t ? o-- : ++o < i) && r(a[o], o, a) !== !1;

        );
        return n;
      };
    }
    Gd.exports = Jx;
  });
  var To = f((uG, Vd) => {
    var eR = Io(),
      tR = Xd(),
      nR = tR(eR);
    Vd.exports = nR;
  });
  var Bd = f((cG, Ud) => {
    function rR(e, t, n, r, i) {
      return (
        i(e, function (o, a, s) {
          n = r ? ((r = !1), o) : t(n, o, a, s);
        }),
        n
      );
    }
    Ud.exports = rR;
  });
  var Hd = f((lG, kd) => {
    var iR = Ld(),
      oR = To(),
      aR = ut(),
      sR = Bd(),
      uR = _e();
    function cR(e, t, n) {
      var r = uR(e) ? iR : sR,
        i = arguments.length < 3;
      return r(e, aR(t, 4), n, i, oR);
    }
    kd.exports = cR;
  });
  var zd = f((fG, Wd) => {
    var lR = $i(),
      fR = ut(),
      dR = Qi(),
      pR = Math.max,
      gR = Math.min;
    function hR(e, t, n) {
      var r = e == null ? 0 : e.length;
      if (!r) return -1;
      var i = r - 1;
      return (
        n !== void 0 &&
          ((i = dR(n)), (i = n < 0 ? pR(r + i, 0) : gR(i, r - 1))),
        lR(e, fR(t, 3), i, !0)
      );
    }
    Wd.exports = hR;
  });
  var jd = f((dG, Kd) => {
    var ER = Yi(),
      yR = zd(),
      vR = ER(yR);
    Kd.exports = vR;
  });
  function Yd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function mR(e, t) {
    if (Yd(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (let i = 0; i < n.length; i++)
      if (!Object.hasOwn(t, n[i]) || !Yd(e[n[i]], t[n[i]])) return !1;
    return !0;
  }
  var bo,
    $d = pe(() => {
      "use strict";
      bo = mR;
    });
  var gp = {};
  xe(gp, {
    cleanupHTMLElement: () => EC,
    clearAllStyles: () => hC,
    clearObjectCache: () => FR,
    getActionListProgress: () => vC,
    getAffectedElements: () => xo,
    getComputedStyle: () => HR,
    getDestinationValues: () => QR,
    getElementId: () => VR,
    getInstanceId: () => GR,
    getInstanceOrigin: () => KR,
    getItemConfigByKey: () => $R,
    getMaxDurationItemIndex: () => pp,
    getNamespacedParameterId: () => IC,
    getRenderType: () => lp,
    getStyleProp: () => ZR,
    mediaQueriesEqual: () => bC,
    observeStore: () => kR,
    reduceListToGroup: () => mC,
    reifyState: () => UR,
    renderHTMLElement: () => JR,
    shallowEqual: () => bo,
    shouldAllowMediaQuery: () => TC,
    shouldNamespaceEventParameter: () => _C,
    stringifyTarget: () => AC,
  });
  function FR() {
    yr.clear();
  }
  function GR() {
    return "i" + qR++;
  }
  function VR(e, t) {
    for (let n in e) {
      let r = e[n];
      if (r && r.ref === t) return r.id;
    }
    return "e" + XR++;
  }
  function UR({ events: e, actionLists: t, site: n } = {}) {
    let r = (0, Ir.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = n && n.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: r,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function kR({ store: e, select: t, onChange: n, comparator: r = BR }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let l = t(i());
      if (l == null) {
        a();
        return;
      }
      r(l, s) || ((s = l), n(s, e));
    }
    return a;
  }
  function Jd(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: n,
        objectId: r,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: n,
        objectId: r,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function xo({
    config: e,
    event: t,
    eventTarget: n,
    elementRoot: r,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (M, T) =>
          M.concat(
            xo({
              config: { target: T },
              event: t,
              eventTarget: n,
              elementRoot: r,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: l,
        getSiblingElements: g,
        matchSelector: p,
        elementContains: d,
        isSiblingNode: h,
      } = i,
      { target: m } = e;
    if (!m) return [];
    let {
      id: E,
      objectId: b,
      selector: v,
      selectorGuids: w,
      appliesTo: A,
      useEventTarget: R,
    } = Jd(m);
    if (b) return [yr.has(b) ? yr.get(b) : yr.set(b, {}).get(b)];
    if (A === Ii.PAGE) {
      let M = a(E);
      return M ? [M] : [];
    }
    let x = (t?.action?.config?.affectedElements ?? {})[E || v] || {},
      U = !!(x.id || x.selector),
      k,
      H,
      K,
      ee = t && s(Jd(t.target));
    if (
      (U
        ? ((k = x.limitAffectedElements), (H = ee), (K = s(x)))
        : (H = K = s({ id: E, selector: v, selectorGuids: w })),
      t && R)
    ) {
      let M = n && (K || R === !0) ? [n] : u(ee);
      if (K) {
        if (R === NR) return u(K).filter((T) => M.some((L) => d(T, L)));
        if (R === Qd) return u(K).filter((T) => M.some((L) => d(L, T)));
        if (R === Zd) return u(K).filter((T) => M.some((L) => h(L, T)));
      }
      return M;
    }
    return H == null || K == null
      ? []
      : Be && r
      ? u(K).filter((M) => r.contains(M))
      : k === Qd
      ? u(H, K)
      : k === LR
      ? l(u(H)).filter(p(K))
      : k === Zd
      ? g(u(H)).filter(p(K))
      : u(K);
  }
  function HR({ element: e, actionItem: t }) {
    if (!Be) return {};
    let { actionTypeId: n } = t;
    switch (n) {
      case Vt:
      case Ut:
      case Bt:
      case kt:
      case br:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function KR(e, t = {}, n = {}, r, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = r;
    if (ht(a)) return Eo(a)(t[a], r);
    switch (r.actionTypeId) {
      case qt:
      case Gt:
      case Xt:
      case In:
        return t[r.actionTypeId] || Ro[r.actionTypeId];
      case Tn:
        return WR(t[r.actionTypeId], r.config.filters);
      case bn:
        return zR(t[r.actionTypeId], r.config.fontVariations);
      case sp:
        return { value: (0, tt.default)(parseFloat(o(e, mr)), 1) };
      case Vt: {
        let s = o(e, $e),
          u = o(e, Qe),
          l,
          g;
        return (
          r.config.widthUnit === lt
            ? (l = ep.test(s) ? parseFloat(s) : parseFloat(n.width))
            : (l = (0, tt.default)(parseFloat(s), parseFloat(n.width))),
          r.config.heightUnit === lt
            ? (g = ep.test(u) ? parseFloat(u) : parseFloat(n.height))
            : (g = (0, tt.default)(parseFloat(u), parseFloat(n.height))),
          { widthValue: l, heightValue: g }
        );
      }
      case Ut:
      case Bt:
      case kt:
        return dC({
          element: e,
          actionTypeId: r.actionTypeId,
          computedStyle: n,
          getStyle: o,
        });
      case br:
        return { value: (0, tt.default)(o(e, _r), n.display) };
      case DR:
        return t[r.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function QR({ element: e, actionItem: t, elementApi: n }) {
    if (ht(t.actionTypeId)) return yo(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case qt:
      case Gt:
      case Xt:
      case In: {
        let { xValue: r, yValue: i, zValue: o } = t.config;
        return { xValue: r, yValue: i, zValue: o };
      }
      case Vt: {
        let { getStyle: r, setStyle: i, getProperty: o } = n,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: l } = t.config;
        if (!Be) return { widthValue: u, heightValue: l };
        if (a === lt) {
          let g = r(e, $e);
          i(e, $e, ""), (u = o(e, "offsetWidth")), i(e, $e, g);
        }
        if (s === lt) {
          let g = r(e, Qe);
          i(e, Qe, ""), (l = o(e, "offsetHeight")), i(e, Qe, g);
        }
        return { widthValue: u, heightValue: l };
      }
      case Ut:
      case Bt:
      case kt: {
        let {
          rValue: r,
          gValue: i,
          bValue: o,
          aValue: a,
          globalSwatchId: s,
        } = t.config;
        if (s && s.startsWith("--")) {
          let { getStyle: u } = n,
            l = u(e, s),
            g = (0, rp.normalizeColor)(l);
          return {
            rValue: g.red,
            gValue: g.green,
            bValue: g.blue,
            aValue: g.alpha,
          };
        }
        return { rValue: r, gValue: i, bValue: o, aValue: a };
      }
      case Tn:
        return t.config.filters.reduce(jR, {});
      case bn:
        return t.config.fontVariations.reduce(YR, {});
      default: {
        let { value: r } = t.config;
        return { value: r };
      }
    }
  }
  function lp(e) {
    if (/^TRANSFORM_/.test(e)) return op;
    if (/^STYLE_/.test(e)) return wo;
    if (/^GENERAL_/.test(e)) return So;
    if (/^PLUGIN_/.test(e)) return ap;
  }
  function ZR(e, t) {
    return e === wo ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function JR(e, t, n, r, i, o, a, s, u) {
    switch (s) {
      case op:
        return iC(e, t, n, i, a);
      case wo:
        return pC(e, t, n, i, o, a);
      case So:
        return gC(e, i, a);
      case ap: {
        let { actionTypeId: l } = i;
        if (ht(l)) return vo(l)(u, t, i);
      }
    }
  }
  function iC(e, t, n, r, i) {
    let o = rC
        .map((s) => {
          let u = Ro[s],
            {
              xValue: l = u.xValue,
              yValue: g = u.yValue,
              zValue: p = u.zValue,
              xUnit: d = "",
              yUnit: h = "",
              zUnit: m = "",
            } = t[s] || {};
          switch (s) {
            case qt:
              return `${TR}(${l}${d}, ${g}${h}, ${p}${m})`;
            case Gt:
              return `${bR}(${l}${d}, ${g}${h}, ${p}${m})`;
            case Xt:
              return `${AR}(${l}${d}) ${SR}(${g}${h}) ${wR}(${p}${m})`;
            case In:
              return `${OR}(${l}${d}, ${g}${h})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    yt(e, ct, i), a(e, ct, o), sC(r, n) && a(e, fr, xR);
  }
  function oC(e, t, n, r) {
    let i = (0, Ir.default)(t, (a, s, u) => `${a} ${u}(${s}${nC(u, n)})`, ""),
      { setStyle: o } = r;
    yt(e, vn, r), o(e, vn, i);
  }
  function aC(e, t, n, r) {
    let i = (0, Ir.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = r;
    yt(e, mn, r), o(e, mn, i);
  }
  function sC({ actionTypeId: e }, { xValue: t, yValue: n, zValue: r }) {
    return (
      (e === qt && r !== void 0) ||
      (e === Gt && r !== void 0) ||
      (e === Xt && (t !== void 0 || n !== void 0))
    );
  }
  function fC(e, t) {
    let n = e.exec(t);
    return n ? n[1] : "";
  }
  function dC({ element: e, actionTypeId: t, computedStyle: n, getStyle: r }) {
    let i = Oo[t],
      o = r(e, i),
      a = cC.test(o) ? o : n[i],
      s = fC(lC, a).split(_n);
    return {
      rValue: (0, tt.default)(parseInt(s[0], 10), 255),
      gValue: (0, tt.default)(parseInt(s[1], 10), 255),
      bValue: (0, tt.default)(parseInt(s[2], 10), 255),
      aValue: (0, tt.default)(parseFloat(s[3]), 1),
    };
  }
  function pC(e, t, n, r, i, o) {
    let { setStyle: a } = o;
    switch (r.actionTypeId) {
      case Vt: {
        let { widthUnit: s = "", heightUnit: u = "" } = r.config,
          { widthValue: l, heightValue: g } = n;
        l !== void 0 && (s === lt && (s = "px"), yt(e, $e, o), a(e, $e, l + s)),
          g !== void 0 &&
            (u === lt && (u = "px"), yt(e, Qe, o), a(e, Qe, g + u));
        break;
      }
      case Tn: {
        oC(e, n, r.config, o);
        break;
      }
      case bn: {
        aC(e, n, r.config, o);
        break;
      }
      case Ut:
      case Bt:
      case kt: {
        let s = Oo[r.actionTypeId],
          u = Math.round(n.rValue),
          l = Math.round(n.gValue),
          g = Math.round(n.bValue),
          p = n.aValue;
        yt(e, s, o),
          a(e, s, p >= 1 ? `rgb(${u},${l},${g})` : `rgba(${u},${l},${g},${p})`);
        break;
      }
      default: {
        let { unit: s = "" } = r.config;
        yt(e, i, o), a(e, i, n.value + s);
        break;
      }
    }
  }
  function gC(e, t, n) {
    let { setStyle: r } = n;
    switch (t.actionTypeId) {
      case br: {
        let { value: i } = t.config;
        i === RR && Be ? r(e, _r, Ji) : r(e, _r, i);
        return;
      }
    }
  }
  function yt(e, t, n) {
    if (!Be) return;
    let r = cp[t];
    if (!r) return;
    let { getStyle: i, setStyle: o } = n,
      a = i(e, Ft);
    if (!a) {
      o(e, Ft, r);
      return;
    }
    let s = a.split(_n).map(up);
    s.indexOf(r) === -1 && o(e, Ft, s.concat(r).join(_n));
  }
  function fp(e, t, n) {
    if (!Be) return;
    let r = cp[t];
    if (!r) return;
    let { getStyle: i, setStyle: o } = n,
      a = i(e, Ft);
    !a ||
      a.indexOf(r) === -1 ||
      o(
        e,
        Ft,
        a
          .split(_n)
          .map(up)
          .filter((s) => s !== r)
          .join(_n)
      );
  }
  function hC({ store: e, elementApi: t }) {
    let { ixData: n } = e.getState(),
      { events: r = {}, actionLists: i = {} } = n;
    Object.keys(r).forEach((o) => {
      let a = r[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        l = i[u];
      l && tp({ actionList: l, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        tp({ actionList: i[o], elementApi: t });
      });
  }
  function tp({ actionList: e = {}, event: t, elementApi: n }) {
    let { actionItemGroups: r, continuousParameterGroups: i } = e;
    r &&
      r.forEach((o) => {
        np({ actionGroup: o, event: t, elementApi: n });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            np({ actionGroup: s, event: t, elementApi: n });
          });
        });
  }
  function np({ actionGroup: e, event: t, elementApi: n }) {
    let { actionItems: r } = e;
    r.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      ht(o)
        ? (s = (u) => mo(o)(u, i))
        : (s = dp({ effect: yC, actionTypeId: o, elementApi: n })),
        xo({ config: a, event: t, elementApi: n }).forEach(s);
    });
  }
  function EC(e, t, n) {
    let { setStyle: r, getStyle: i } = n,
      { actionTypeId: o } = t;
    if (o === Vt) {
      let { config: a } = t;
      a.widthUnit === lt && r(e, $e, ""), a.heightUnit === lt && r(e, Qe, "");
    }
    i(e, Ft) && dp({ effect: fp, actionTypeId: o, elementApi: n })(e);
  }
  function yC(e, t, n) {
    let { setStyle: r } = n;
    fp(e, t, n), r(e, t, ""), t === ct && r(e, fr, "");
  }
  function pp(e) {
    let t = 0,
      n = 0;
    return (
      e.forEach((r, i) => {
        let { config: o } = r,
          a = o.delay + o.duration;
        a >= t && ((t = a), (n = i));
      }),
      n
    );
  }
  function vC(e, t) {
    let { actionItemGroups: n, useFirstGroupAsInitialState: r } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      n.forEach((u, l) => {
        if (r && l === 0) return;
        let { actionItems: g } = u,
          p = g[pp(g)],
          { config: d, actionTypeId: h } = p;
        i.id === p.id && (s = a + o);
        let m = lp(h) === So ? 0 : d.duration;
        a += d.delay + m;
      }),
      a > 0 ? yn(s / a) : 0
    );
  }
  function mC({ actionList: e, actionItemId: t, rawData: n }) {
    let { actionItemGroups: r, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, Tr.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      r && r.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: l }) => l.some(a));
        }),
      (0, Tr.setIn)(n, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function _C(e, { basedOn: t }) {
    return (
      (e === Ue.SCROLLING_IN_VIEW && (t === je.ELEMENT || t == null)) ||
      (e === Ue.MOUSE_MOVE && t === je.ELEMENT)
    );
  }
  function IC(e, t) {
    return e + MR + t;
  }
  function TC(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function bC(e, t) {
    return bo(e && e.sort(), t && t.sort());
  }
  function AC(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ao + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: n = "", useEventTarget: r = "" } = e;
    return t + Ao + n + Ao + r;
  }
  var tt,
    Ir,
    vr,
    Tr,
    rp,
    _R,
    IR,
    TR,
    bR,
    AR,
    SR,
    wR,
    OR,
    xR,
    RR,
    mr,
    vn,
    mn,
    $e,
    Qe,
    ip,
    CR,
    PR,
    Qd,
    LR,
    Zd,
    NR,
    _r,
    Ft,
    lt,
    _n,
    MR,
    Ao,
    op,
    So,
    wo,
    ap,
    qt,
    Gt,
    Xt,
    In,
    sp,
    Tn,
    bn,
    Vt,
    Ut,
    Bt,
    kt,
    br,
    DR,
    up,
    Oo,
    cp,
    yr,
    qR,
    XR,
    BR,
    ep,
    WR,
    zR,
    jR,
    YR,
    $R,
    Ro,
    eC,
    tC,
    nC,
    rC,
    uC,
    cC,
    lC,
    dp,
    hp = pe(() => {
      "use strict";
      (tt = ue(Cd())), (Ir = ue(Hd())), (vr = ue(jd())), (Tr = ue(wt()));
      Re();
      $d();
      no();
      rp = ue(lo());
      _o();
      dr();
      ({
        BACKGROUND: _R,
        TRANSFORM: IR,
        TRANSLATE_3D: TR,
        SCALE_3D: bR,
        ROTATE_X: AR,
        ROTATE_Y: SR,
        ROTATE_Z: wR,
        SKEW: OR,
        PRESERVE_3D: xR,
        FLEX: RR,
        OPACITY: mr,
        FILTER: vn,
        FONT_VARIATION_SETTINGS: mn,
        WIDTH: $e,
        HEIGHT: Qe,
        BACKGROUND_COLOR: ip,
        BORDER_COLOR: CR,
        COLOR: PR,
        CHILDREN: Qd,
        IMMEDIATE_CHILDREN: LR,
        SIBLINGS: Zd,
        PARENT: NR,
        DISPLAY: _r,
        WILL_CHANGE: Ft,
        AUTO: lt,
        COMMA_DELIMITER: _n,
        COLON_DELIMITER: MR,
        BAR_DELIMITER: Ao,
        RENDER_TRANSFORM: op,
        RENDER_GENERAL: So,
        RENDER_STYLE: wo,
        RENDER_PLUGIN: ap,
      } = Ie),
        ({
          TRANSFORM_MOVE: qt,
          TRANSFORM_SCALE: Gt,
          TRANSFORM_ROTATE: Xt,
          TRANSFORM_SKEW: In,
          STYLE_OPACITY: sp,
          STYLE_FILTER: Tn,
          STYLE_FONT_VARIATION: bn,
          STYLE_SIZE: Vt,
          STYLE_BACKGROUND_COLOR: Ut,
          STYLE_BORDER: Bt,
          STYLE_TEXT_COLOR: kt,
          GENERAL_DISPLAY: br,
          OBJECT_VALUE: DR,
        } = Ae),
        (up = (e) => e.trim()),
        (Oo = Object.freeze({ [Ut]: ip, [Bt]: CR, [kt]: PR })),
        (cp = Object.freeze({
          [ct]: IR,
          [ip]: _R,
          [mr]: mr,
          [vn]: vn,
          [$e]: $e,
          [Qe]: Qe,
          [mn]: mn,
        })),
        (yr = new Map());
      qR = 1;
      XR = 1;
      BR = (e, t) => e === t;
      (ep = /px/),
        (WR = (e, t) =>
          t.reduce(
            (n, r) => (n[r.type] == null && (n[r.type] = eC[r.type]), n),
            e || {}
          )),
        (zR = (e, t) =>
          t.reduce(
            (n, r) => (
              n[r.type] == null &&
                (n[r.type] = tC[r.type] || r.defaultValue || 0),
              n
            ),
            e || {}
          ));
      (jR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (YR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        ($R = (e, t, n) => {
          if (ht(e)) return ho(e)(n, t);
          switch (e) {
            case Tn: {
              let r = (0, vr.default)(n.filters, ({ type: i }) => i === t);
              return r ? r.value : 0;
            }
            case bn: {
              let r = (0, vr.default)(
                n.fontVariations,
                ({ type: i }) => i === t
              );
              return r ? r.value : 0;
            }
            default:
              return n[t];
          }
        });
      (Ro = {
        [qt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Gt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [Xt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [In]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (eC = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (tC = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (nC = (e, t) => {
          let n = (0, vr.default)(t.filters, ({ type: r }) => r === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (rC = Object.keys(Ro));
      (uC = "\\(([^)]+)\\)"), (cC = /^rgb/), (lC = RegExp(`rgba?${uC}`));
      dp =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (r) => {
          switch (t) {
            case qt:
            case Gt:
            case Xt:
            case In:
              e(r, ct, n);
              break;
            case Tn:
              e(r, vn, n);
              break;
            case bn:
              e(r, mn, n);
              break;
            case sp:
              e(r, mr, n);
              break;
            case Vt:
              e(r, $e, n), e(r, Qe, n);
              break;
            case Ut:
            case Bt:
            case kt:
              e(r, Oo[t], n);
              break;
            case br:
              e(r, _r, n);
              break;
          }
        };
    });
  var vt = f((Co) => {
    "use strict";
    Object.defineProperty(Co, "__esModule", { value: !0 });
    function SC(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    SC(Co, {
      IX2BrowserSupport: function () {
        return wC;
      },
      IX2EasingUtils: function () {
        return xC;
      },
      IX2Easings: function () {
        return OC;
      },
      IX2ElementsReducer: function () {
        return RC;
      },
      IX2VanillaPlugins: function () {
        return CC;
      },
      IX2VanillaUtils: function () {
        return PC;
      },
    });
    var wC = Ht((dr(), We(ud))),
      OC = Ht((to(), We(En))),
      xC = Ht((no(), We(hd))),
      RC = Ht((md(), We(vd))),
      CC = Ht((_o(), We(xd))),
      PC = Ht((hp(), We(gp)));
    function Ep(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (Ep = function (r) {
        return r ? n : t;
      })(e);
    }
    function Ht(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = Ep(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, o, a)
            : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
  });
  var Sr,
    nt,
    LC,
    NC,
    MC,
    DC,
    FC,
    qC,
    Ar,
    yp,
    GC,
    XC,
    Po,
    VC,
    UC,
    BC,
    kC,
    vp,
    mp = pe(() => {
      "use strict";
      Re();
      (Sr = ue(vt())),
        (nt = ue(wt())),
        ({
          IX2_RAW_DATA_IMPORTED: LC,
          IX2_SESSION_STOPPED: NC,
          IX2_INSTANCE_ADDED: MC,
          IX2_INSTANCE_STARTED: DC,
          IX2_INSTANCE_REMOVED: FC,
          IX2_ANIMATION_FRAME_CHANGED: qC,
        } = me),
        ({
          optimizeFloat: Ar,
          applyEasing: yp,
          createBezierEasing: GC,
        } = Sr.IX2EasingUtils),
        ({ RENDER_GENERAL: XC } = Ie),
        ({
          getItemConfigByKey: Po,
          getRenderType: VC,
          getStyleProp: UC,
        } = Sr.IX2VanillaUtils),
        (BC = (e, t) => {
          let {
              position: n,
              parameterId: r,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: l,
              skipMotion: g,
              skipToValue: p,
            } = e,
            { parameters: d } = t.payload,
            h = Math.max(1 - a, 0.01),
            m = d[r];
          m == null && ((h = 1), (m = s));
          let E = Math.max(m, 0) || 0,
            b = Ar(E - n),
            v = g ? p : Ar(n + b * h),
            w = v * 100;
          if (v === n && e.current) return e;
          let A, R, C, x;
          for (let k = 0, { length: H } = i; k < H; k++) {
            let { keyframe: K, actionItems: ee } = i[k];
            if ((k === 0 && (A = ee[0]), w >= K)) {
              A = ee[0];
              let M = i[k + 1],
                T = M && w !== K;
              (R = T ? M.actionItems[0] : null),
                T && ((C = K / 100), (x = (M.keyframe - K) / 100));
            }
          }
          let U = {};
          if (A && !R)
            for (let k = 0, { length: H } = o; k < H; k++) {
              let K = o[k];
              U[K] = Po(u, K, A.config);
            }
          else if (A && R && C !== void 0 && x !== void 0) {
            let k = (v - C) / x,
              H = A.config.easing,
              K = yp(H, k, l);
            for (let ee = 0, { length: M } = o; ee < M; ee++) {
              let T = o[ee],
                L = Po(u, T, A.config),
                D = (Po(u, T, R.config) - L) * K + L;
              U[T] = D;
            }
          }
          return (0, nt.merge)(e, { position: v, current: U });
        }),
        (kC = (e, t) => {
          let {
              active: n,
              origin: r,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: l,
              destinationKeys: g,
              pluginDuration: p,
              instanceDelay: d,
              customEasingFn: h,
              skipMotion: m,
            } = e,
            E = u.config.easing,
            { duration: b, delay: v } = u.config;
          p != null && (b = p),
            (v = d ?? v),
            a === XC ? (b = 0) : (o || m) && (b = v = 0);
          let { now: w } = t.payload;
          if (n && r) {
            let A = w - (i + v);
            if (s) {
              let k = w - i,
                H = b + v,
                K = Ar(Math.min(Math.max(0, k / H), 1));
              e = (0, nt.set)(e, "verboseTimeElapsed", H * K);
            }
            if (A < 0) return e;
            let R = Ar(Math.min(Math.max(0, A / b), 1)),
              C = yp(E, R, h),
              x = {},
              U = null;
            return (
              g.length &&
                (U = g.reduce((k, H) => {
                  let K = l[H],
                    ee = parseFloat(r[H]) || 0,
                    T = (parseFloat(K) - ee) * C + ee;
                  return (k[H] = T), k;
                }, {})),
              (x.current = U),
              (x.position = R),
              R === 1 && ((x.active = !1), (x.complete = !0)),
              (0, nt.merge)(e, x)
            );
          }
          return e;
        }),
        (vp = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case LC:
              return t.payload.ixInstances || Object.freeze({});
            case NC:
              return Object.freeze({});
            case MC: {
              let {
                  instanceId: n,
                  elementId: r,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: l,
                  isCarrier: g,
                  origin: p,
                  destination: d,
                  immediate: h,
                  verbose: m,
                  continuous: E,
                  parameterId: b,
                  actionGroups: v,
                  smoothing: w,
                  restingValue: A,
                  pluginInstance: R,
                  pluginDuration: C,
                  instanceDelay: x,
                  skipMotion: U,
                  skipToValue: k,
                } = t.payload,
                { actionTypeId: H } = i,
                K = VC(H),
                ee = UC(K, H),
                M = Object.keys(d).filter(
                  (L) => d[L] != null && typeof d[L] != "string"
                ),
                { easing: T } = i.config;
              return (0, nt.set)(e, n, {
                id: n,
                elementId: r,
                active: !1,
                position: 0,
                start: 0,
                origin: p,
                destination: d,
                destinationKeys: M,
                immediate: h,
                verbose: m,
                current: null,
                actionItem: i,
                actionTypeId: H,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: l,
                renderType: K,
                isCarrier: g,
                styleProp: ee,
                continuous: E,
                parameterId: b,
                actionGroups: v,
                smoothing: w,
                restingValue: A,
                pluginInstance: R,
                pluginDuration: C,
                instanceDelay: x,
                skipMotion: U,
                skipToValue: k,
                customEasingFn:
                  Array.isArray(T) && T.length === 4 ? GC(T) : void 0,
              });
            }
            case DC: {
              let { instanceId: n, time: r } = t.payload;
              return (0, nt.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: r,
              });
            }
            case FC: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let r = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== n && (r[s] = e[s]);
              }
              return r;
            }
            case qC: {
              let n = e,
                r = Object.keys(e),
                { length: i } = r;
              for (let o = 0; o < i; o++) {
                let a = r[o],
                  s = e[a],
                  u = s.continuous ? BC : kC;
                n = (0, nt.set)(n, a, u(s, t));
              }
              return n;
            }
            default:
              return e;
          }
        });
    });
  var HC,
    WC,
    zC,
    _p,
    Ip = pe(() => {
      "use strict";
      Re();
      ({
        IX2_RAW_DATA_IMPORTED: HC,
        IX2_SESSION_STOPPED: WC,
        IX2_PARAMETER_CHANGED: zC,
      } = me),
        (_p = (e = {}, t) => {
          switch (t.type) {
            case HC:
              return t.payload.ixParameters || {};
            case WC:
              return {};
            case zC: {
              let { key: n, value: r } = t.payload;
              return (e[n] = r), e;
            }
            default:
              return e;
          }
        });
    });
  var Ap = {};
  xe(Ap, { default: () => jC });
  var Tp,
    bp,
    KC,
    jC,
    Sp = pe(() => {
      "use strict";
      Tp = ue(_i());
      Ls();
      Js();
      nu();
      bp = ue(vt());
      mp();
      Ip();
      ({ ixElements: KC } = bp.IX2ElementsReducer),
        (jC = (0, Tp.combineReducers)({
          ixData: Ps,
          ixRequest: Zs,
          ixSession: tu,
          ixElements: KC,
          ixInstances: vp,
          ixParameters: _p,
        }));
    });
  var Op = f((CG, wp) => {
    var YC = at(),
      $C = _e(),
      QC = Je(),
      ZC = "[object String]";
    function JC(e) {
      return typeof e == "string" || (!$C(e) && QC(e) && YC(e) == ZC);
    }
    wp.exports = JC;
  });
  var Rp = f((PG, xp) => {
    var eP = ji(),
      tP = eP("length");
    xp.exports = tP;
  });
  var Pp = f((LG, Cp) => {
    var nP = "\\ud800-\\udfff",
      rP = "\\u0300-\\u036f",
      iP = "\\ufe20-\\ufe2f",
      oP = "\\u20d0-\\u20ff",
      aP = rP + iP + oP,
      sP = "\\ufe0e\\ufe0f",
      uP = "\\u200d",
      cP = RegExp("[" + uP + nP + aP + sP + "]");
    function lP(e) {
      return cP.test(e);
    }
    Cp.exports = lP;
  });
  var Vp = f((NG, Xp) => {
    var Np = "\\ud800-\\udfff",
      fP = "\\u0300-\\u036f",
      dP = "\\ufe20-\\ufe2f",
      pP = "\\u20d0-\\u20ff",
      gP = fP + dP + pP,
      hP = "\\ufe0e\\ufe0f",
      EP = "[" + Np + "]",
      Lo = "[" + gP + "]",
      No = "\\ud83c[\\udffb-\\udfff]",
      yP = "(?:" + Lo + "|" + No + ")",
      Mp = "[^" + Np + "]",
      Dp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Fp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      vP = "\\u200d",
      qp = yP + "?",
      Gp = "[" + hP + "]?",
      mP = "(?:" + vP + "(?:" + [Mp, Dp, Fp].join("|") + ")" + Gp + qp + ")*",
      _P = Gp + qp + mP,
      IP = "(?:" + [Mp + Lo + "?", Lo, Dp, Fp, EP].join("|") + ")",
      Lp = RegExp(No + "(?=" + No + ")|" + IP + _P, "g");
    function TP(e) {
      for (var t = (Lp.lastIndex = 0); Lp.test(e); ) ++t;
      return t;
    }
    Xp.exports = TP;
  });
  var Bp = f((MG, Up) => {
    var bP = Rp(),
      AP = Pp(),
      SP = Vp();
    function wP(e) {
      return AP(e) ? SP(e) : bP(e);
    }
    Up.exports = wP;
  });
  var Hp = f((DG, kp) => {
    var OP = nr(),
      xP = rr(),
      RP = pt(),
      CP = Op(),
      PP = Bp(),
      LP = "[object Map]",
      NP = "[object Set]";
    function MP(e) {
      if (e == null) return 0;
      if (RP(e)) return CP(e) ? PP(e) : e.length;
      var t = xP(e);
      return t == LP || t == NP ? e.size : OP(e).length;
    }
    kp.exports = MP;
  });
  var zp = f((FG, Wp) => {
    var DP = "Expected a function";
    function FP(e) {
      if (typeof e != "function") throw new TypeError(DP);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Wp.exports = FP;
  });
  var Mo = f((qG, Kp) => {
    var qP = st(),
      GP = (function () {
        try {
          var e = qP(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Kp.exports = GP;
  });
  var Do = f((GG, Yp) => {
    var jp = Mo();
    function XP(e, t, n) {
      t == "__proto__" && jp
        ? jp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (e[t] = n);
    }
    Yp.exports = XP;
  });
  var Qp = f((XG, $p) => {
    var VP = Do(),
      UP = zn(),
      BP = Object.prototype,
      kP = BP.hasOwnProperty;
    function HP(e, t, n) {
      var r = e[t];
      (!(kP.call(e, t) && UP(r, n)) || (n === void 0 && !(t in e))) &&
        VP(e, t, n);
    }
    $p.exports = HP;
  });
  var eg = f((VG, Jp) => {
    var WP = Qp(),
      zP = pn(),
      KP = Zn(),
      Zp = Ye(),
      jP = Mt();
    function YP(e, t, n, r) {
      if (!Zp(e)) return e;
      t = zP(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = jP(t[i]),
          l = n;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var g = s[u];
          (l = r ? r(g, u, s) : void 0),
            l === void 0 && (l = Zp(g) ? g : KP(t[i + 1]) ? [] : {});
        }
        WP(s, u, l), (s = s[u]);
      }
      return e;
    }
    Jp.exports = YP;
  });
  var ng = f((UG, tg) => {
    var $P = ar(),
      QP = eg(),
      ZP = pn();
    function JP(e, t, n) {
      for (var r = -1, i = t.length, o = {}; ++r < i; ) {
        var a = t[r],
          s = $P(e, a);
        n(s, a) && QP(o, ZP(a, e), s);
      }
      return o;
    }
    tg.exports = JP;
  });
  var ig = f((BG, rg) => {
    var eL = $n(),
      tL = si(),
      nL = Ni(),
      rL = Li(),
      iL = Object.getOwnPropertySymbols,
      oL = iL
        ? function (e) {
            for (var t = []; e; ) eL(t, nL(e)), (e = tL(e));
            return t;
          }
        : rL;
    rg.exports = oL;
  });
  var ag = f((kG, og) => {
    function aL(e) {
      var t = [];
      if (e != null) for (var n in Object(e)) t.push(n);
      return t;
    }
    og.exports = aL;
  });
  var ug = f((HG, sg) => {
    var sL = Ye(),
      uL = tr(),
      cL = ag(),
      lL = Object.prototype,
      fL = lL.hasOwnProperty;
    function dL(e) {
      if (!sL(e)) return cL(e);
      var t = uL(e),
        n = [];
      for (var r in e)
        (r == "constructor" && (t || !fL.call(e, r))) || n.push(r);
      return n;
    }
    sg.exports = dL;
  });
  var lg = f((WG, cg) => {
    var pL = Di(),
      gL = ug(),
      hL = pt();
    function EL(e) {
      return hL(e) ? pL(e, !0) : gL(e);
    }
    cg.exports = EL;
  });
  var dg = f((zG, fg) => {
    var yL = Pi(),
      vL = ig(),
      mL = lg();
    function _L(e) {
      return yL(e, mL, vL);
    }
    fg.exports = _L;
  });
  var gg = f((KG, pg) => {
    var IL = Ki(),
      TL = ut(),
      bL = ng(),
      AL = dg();
    function SL(e, t) {
      if (e == null) return {};
      var n = IL(AL(e), function (r) {
        return [r];
      });
      return (
        (t = TL(t)),
        bL(e, n, function (r, i) {
          return t(r, i[0]);
        })
      );
    }
    pg.exports = SL;
  });
  var Eg = f((jG, hg) => {
    var wL = ut(),
      OL = zp(),
      xL = gg();
    function RL(e, t) {
      return xL(e, OL(wL(t)));
    }
    hg.exports = RL;
  });
  var vg = f((YG, yg) => {
    var CL = nr(),
      PL = rr(),
      LL = sn(),
      NL = _e(),
      ML = pt(),
      DL = Qn(),
      FL = tr(),
      qL = er(),
      GL = "[object Map]",
      XL = "[object Set]",
      VL = Object.prototype,
      UL = VL.hasOwnProperty;
    function BL(e) {
      if (e == null) return !0;
      if (
        ML(e) &&
        (NL(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          DL(e) ||
          qL(e) ||
          LL(e))
      )
        return !e.length;
      var t = PL(e);
      if (t == GL || t == XL) return !e.size;
      if (FL(e)) return !CL(e).length;
      for (var n in e) if (UL.call(e, n)) return !1;
      return !0;
    }
    yg.exports = BL;
  });
  var _g = f(($G, mg) => {
    var kL = Do(),
      HL = Io(),
      WL = ut();
    function zL(e, t) {
      var n = {};
      return (
        (t = WL(t, 3)),
        HL(e, function (r, i, o) {
          kL(n, i, t(r, i, o));
        }),
        n
      );
    }
    mg.exports = zL;
  });
  var Tg = f((QG, Ig) => {
    function KL(e, t) {
      for (
        var n = -1, r = e == null ? 0 : e.length;
        ++n < r && t(e[n], n, e) !== !1;

      );
      return e;
    }
    Ig.exports = KL;
  });
  var Ag = f((ZG, bg) => {
    var jL = ur();
    function YL(e) {
      return typeof e == "function" ? e : jL;
    }
    bg.exports = YL;
  });
  var wg = f((JG, Sg) => {
    var $L = Tg(),
      QL = To(),
      ZL = Ag(),
      JL = _e();
    function eN(e, t) {
      var n = JL(e) ? $L : QL;
      return n(e, ZL(t));
    }
    Sg.exports = eN;
  });
  var xg = f((eX, Og) => {
    var tN = Ve(),
      nN = function () {
        return tN.Date.now();
      };
    Og.exports = nN;
  });
  var Pg = f((tX, Cg) => {
    var rN = Ye(),
      Fo = xg(),
      Rg = cr(),
      iN = "Expected a function",
      oN = Math.max,
      aN = Math.min;
    function sN(e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l = 0,
        g = !1,
        p = !1,
        d = !0;
      if (typeof e != "function") throw new TypeError(iN);
      (t = Rg(t) || 0),
        rN(n) &&
          ((g = !!n.leading),
          (p = "maxWait" in n),
          (o = p ? oN(Rg(n.maxWait) || 0, t) : o),
          (d = "trailing" in n ? !!n.trailing : d));
      function h(x) {
        var U = r,
          k = i;
        return (r = i = void 0), (l = x), (a = e.apply(k, U)), a;
      }
      function m(x) {
        return (l = x), (s = setTimeout(v, t)), g ? h(x) : a;
      }
      function E(x) {
        var U = x - u,
          k = x - l,
          H = t - U;
        return p ? aN(H, o - k) : H;
      }
      function b(x) {
        var U = x - u,
          k = x - l;
        return u === void 0 || U >= t || U < 0 || (p && k >= o);
      }
      function v() {
        var x = Fo();
        if (b(x)) return w(x);
        s = setTimeout(v, E(x));
      }
      function w(x) {
        return (s = void 0), d && r ? h(x) : ((r = i = void 0), a);
      }
      function A() {
        s !== void 0 && clearTimeout(s), (l = 0), (r = u = i = s = void 0);
      }
      function R() {
        return s === void 0 ? a : w(Fo());
      }
      function C() {
        var x = Fo(),
          U = b(x);
        if (((r = arguments), (i = this), (u = x), U)) {
          if (s === void 0) return m(u);
          if (p) return clearTimeout(s), (s = setTimeout(v, t)), h(u);
        }
        return s === void 0 && (s = setTimeout(v, t)), a;
      }
      return (C.cancel = A), (C.flush = R), C;
    }
    Cg.exports = sN;
  });
  var Ng = f((nX, Lg) => {
    var uN = Pg(),
      cN = Ye(),
      lN = "Expected a function";
    function fN(e, t, n) {
      var r = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(lN);
      return (
        cN(n) &&
          ((r = "leading" in n ? !!n.leading : r),
          (i = "trailing" in n ? !!n.trailing : i)),
        uN(e, t, { leading: r, maxWait: t, trailing: i })
      );
    }
    Lg.exports = fN;
  });
  var Dg = {};
  xe(Dg, {
    actionListPlaybackChanged: () => zt,
    animationFrameChanged: () => Or,
    clearRequested: () => FN,
    elementStateChanged: () => Ho,
    eventListenerAdded: () => wr,
    eventStateChanged: () => Uo,
    instanceAdded: () => Bo,
    instanceRemoved: () => ko,
    instanceStarted: () => xr,
    mediaQueriesDefined: () => zo,
    parameterChanged: () => Wt,
    playbackRequested: () => MN,
    previewRequested: () => NN,
    rawDataImported: () => qo,
    sessionInitialized: () => Go,
    sessionStarted: () => Xo,
    sessionStopped: () => Vo,
    stopRequested: () => DN,
    testFrameRendered: () => qN,
    viewportWidthChanged: () => Wo,
  });
  var Mg,
    dN,
    pN,
    gN,
    hN,
    EN,
    yN,
    vN,
    mN,
    _N,
    IN,
    TN,
    bN,
    AN,
    SN,
    wN,
    ON,
    xN,
    RN,
    CN,
    PN,
    LN,
    qo,
    Go,
    Xo,
    Vo,
    NN,
    MN,
    DN,
    FN,
    wr,
    qN,
    Uo,
    Or,
    Wt,
    Bo,
    xr,
    ko,
    Ho,
    zt,
    Wo,
    zo,
    Rr = pe(() => {
      "use strict";
      Re();
      (Mg = ue(vt())),
        ({
          IX2_RAW_DATA_IMPORTED: dN,
          IX2_SESSION_INITIALIZED: pN,
          IX2_SESSION_STARTED: gN,
          IX2_SESSION_STOPPED: hN,
          IX2_PREVIEW_REQUESTED: EN,
          IX2_PLAYBACK_REQUESTED: yN,
          IX2_STOP_REQUESTED: vN,
          IX2_CLEAR_REQUESTED: mN,
          IX2_EVENT_LISTENER_ADDED: _N,
          IX2_TEST_FRAME_RENDERED: IN,
          IX2_EVENT_STATE_CHANGED: TN,
          IX2_ANIMATION_FRAME_CHANGED: bN,
          IX2_PARAMETER_CHANGED: AN,
          IX2_INSTANCE_ADDED: SN,
          IX2_INSTANCE_STARTED: wN,
          IX2_INSTANCE_REMOVED: ON,
          IX2_ELEMENT_STATE_CHANGED: xN,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: RN,
          IX2_VIEWPORT_WIDTH_CHANGED: CN,
          IX2_MEDIA_QUERIES_DEFINED: PN,
        } = me),
        ({ reifyState: LN } = Mg.IX2VanillaUtils),
        (qo = (e) => ({ type: dN, payload: { ...LN(e) } })),
        (Go = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: pN,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Xo = () => ({ type: gN })),
        (Vo = () => ({ type: hN })),
        (NN = ({ rawData: e, defer: t }) => ({
          type: EN,
          payload: { defer: t, rawData: e },
        })),
        (MN = ({
          actionTypeId: e = Ae.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: r,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: yN,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: a,
            eventId: r,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (DN = (e) => ({ type: vN, payload: { actionListId: e } })),
        (FN = () => ({ type: mN })),
        (wr = (e, t) => ({
          type: _N,
          payload: { target: e, listenerParams: t },
        })),
        (qN = (e = 1) => ({ type: IN, payload: { step: e } })),
        (Uo = (e, t) => ({ type: TN, payload: { stateKey: e, newState: t } })),
        (Or = (e, t) => ({ type: bN, payload: { now: e, parameters: t } })),
        (Wt = (e, t) => ({ type: AN, payload: { key: e, value: t } })),
        (Bo = (e) => ({ type: SN, payload: { ...e } })),
        (xr = (e, t) => ({ type: wN, payload: { instanceId: e, time: t } })),
        (ko = (e) => ({ type: ON, payload: { instanceId: e } })),
        (Ho = (e, t, n, r) => ({
          type: xN,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: r },
        })),
        (zt = ({ actionListId: e, isPlaying: t }) => ({
          type: RN,
          payload: { actionListId: e, isPlaying: t },
        })),
        (Wo = ({ width: e, mediaQueries: t }) => ({
          type: CN,
          payload: { width: e, mediaQueries: t },
        })),
        (zo = () => ({ type: PN }));
    });
  var we = {};
  xe(we, {
    elementContains: () => Yo,
    getChildElements: () => KN,
    getClosestElement: () => An,
    getProperty: () => BN,
    getQuerySelector: () => jo,
    getRefType: () => $o,
    getSiblingElements: () => jN,
    getStyle: () => UN,
    getValidDocument: () => HN,
    isSiblingNode: () => zN,
    matchSelector: () => kN,
    queryDocument: () => WN,
    setStyle: () => VN,
  });
  function VN(e, t, n) {
    e.style[t] = n;
  }
  function UN(e, t) {
    return t.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
      : e.style[t];
  }
  function BN(e, t) {
    return e[t];
  }
  function kN(e) {
    return (t) => t[Ko](e);
  }
  function jo({ id: e, selector: t }) {
    if (e) {
      let n = e;
      if (e.indexOf(Fg) !== -1) {
        let r = e.split(Fg),
          i = r[0];
        if (((n = r[1]), i !== document.documentElement.getAttribute(Gg)))
          return null;
      }
      return `[data-w-id="${n}"], [data-w-id^="${n}_instance"]`;
    }
    return t;
  }
  function HN(e) {
    return e == null || e === document.documentElement.getAttribute(Gg)
      ? document
      : null;
  }
  function WN(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function Yo(e, t) {
    return e.contains(t);
  }
  function zN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function KN(e) {
    let t = [];
    for (let n = 0, { length: r } = e || []; n < r; n++) {
      let { children: i } = e[n],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function jN(e = []) {
    let t = [],
      n = [];
    for (let r = 0, { length: i } = e; r < i; r++) {
      let { parentNode: o } = e[r];
      if (!o || !o.children || !o.children.length || n.indexOf(o) !== -1)
        continue;
      n.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function $o(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? GN
        : XN
      : null;
  }
  var qg,
    Ko,
    Fg,
    GN,
    XN,
    Gg,
    An,
    Xg = pe(() => {
      "use strict";
      qg = ue(vt());
      Re();
      ({ ELEMENT_MATCHES: Ko } = qg.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Fg,
          HTML_ELEMENT: GN,
          PLAIN_OBJECT: XN,
          WF_PAGE: Gg,
        } = Ie);
      An = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[Ko] && n[Ko](t)) return n;
              n = n.parentNode;
            } while (n != null);
            return null;
          };
    });
  var Qo = f((oX, Ug) => {
    var YN = Ye(),
      Vg = Object.create,
      $N = (function () {
        function e() {}
        return function (t) {
          if (!YN(t)) return {};
          if (Vg) return Vg(t);
          e.prototype = t;
          var n = new e();
          return (e.prototype = void 0), n;
        };
      })();
    Ug.exports = $N;
  });
  var Cr = f((aX, Bg) => {
    function QN() {}
    Bg.exports = QN;
  });
  var Lr = f((sX, kg) => {
    var ZN = Qo(),
      JN = Cr();
    function Pr(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    Pr.prototype = ZN(JN.prototype);
    Pr.prototype.constructor = Pr;
    kg.exports = Pr;
  });
  var Kg = f((uX, zg) => {
    var Hg = bt(),
      eM = sn(),
      tM = _e(),
      Wg = Hg ? Hg.isConcatSpreadable : void 0;
    function nM(e) {
      return tM(e) || eM(e) || !!(Wg && e && e[Wg]);
    }
    zg.exports = nM;
  });
  var $g = f((cX, Yg) => {
    var rM = $n(),
      iM = Kg();
    function jg(e, t, n, r, i) {
      var o = -1,
        a = e.length;
      for (n || (n = iM), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && n(s)
          ? t > 1
            ? jg(s, t - 1, n, r, i)
            : rM(i, s)
          : r || (i[i.length] = s);
      }
      return i;
    }
    Yg.exports = jg;
  });
  var Zg = f((lX, Qg) => {
    var oM = $g();
    function aM(e) {
      var t = e == null ? 0 : e.length;
      return t ? oM(e, 1) : [];
    }
    Qg.exports = aM;
  });
  var eh = f((fX, Jg) => {
    function sM(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    Jg.exports = sM;
  });
  var rh = f((dX, nh) => {
    var uM = eh(),
      th = Math.max;
    function cM(e, t, n) {
      return (
        (t = th(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var r = arguments, i = -1, o = th(r.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = r[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = r[i];
          return (s[t] = n(a)), uM(e, this, s);
        }
      );
    }
    nh.exports = cM;
  });
  var oh = f((pX, ih) => {
    function lM(e) {
      return function () {
        return e;
      };
    }
    ih.exports = lM;
  });
  var uh = f((gX, sh) => {
    var fM = oh(),
      ah = Mo(),
      dM = ur(),
      pM = ah
        ? function (e, t) {
            return ah(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: fM(t),
              writable: !0,
            });
          }
        : dM;
    sh.exports = pM;
  });
  var lh = f((hX, ch) => {
    var gM = 800,
      hM = 16,
      EM = Date.now;
    function yM(e) {
      var t = 0,
        n = 0;
      return function () {
        var r = EM(),
          i = hM - (r - n);
        if (((n = r), i > 0)) {
          if (++t >= gM) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    ch.exports = yM;
  });
  var dh = f((EX, fh) => {
    var vM = uh(),
      mM = lh(),
      _M = mM(vM);
    fh.exports = _M;
  });
  var gh = f((yX, ph) => {
    var IM = Zg(),
      TM = rh(),
      bM = dh();
    function AM(e) {
      return bM(TM(e, void 0, IM), e + "");
    }
    ph.exports = AM;
  });
  var yh = f((vX, Eh) => {
    var hh = Fi(),
      SM = hh && new hh();
    Eh.exports = SM;
  });
  var mh = f((mX, vh) => {
    function wM() {}
    vh.exports = wM;
  });
  var Zo = f((_X, Ih) => {
    var _h = yh(),
      OM = mh(),
      xM = _h
        ? function (e) {
            return _h.get(e);
          }
        : OM;
    Ih.exports = xM;
  });
  var bh = f((IX, Th) => {
    var RM = {};
    Th.exports = RM;
  });
  var Jo = f((TX, Sh) => {
    var Ah = bh(),
      CM = Object.prototype,
      PM = CM.hasOwnProperty;
    function LM(e) {
      for (
        var t = e.name + "", n = Ah[t], r = PM.call(Ah, t) ? n.length : 0;
        r--;

      ) {
        var i = n[r],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    Sh.exports = LM;
  });
  var Mr = f((bX, wh) => {
    var NM = Qo(),
      MM = Cr(),
      DM = 4294967295;
    function Nr(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = DM),
        (this.__views__ = []);
    }
    Nr.prototype = NM(MM.prototype);
    Nr.prototype.constructor = Nr;
    wh.exports = Nr;
  });
  var xh = f((AX, Oh) => {
    function FM(e, t) {
      var n = -1,
        r = e.length;
      for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
      return t;
    }
    Oh.exports = FM;
  });
  var Ch = f((SX, Rh) => {
    var qM = Mr(),
      GM = Lr(),
      XM = xh();
    function VM(e) {
      if (e instanceof qM) return e.clone();
      var t = new GM(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = XM(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Rh.exports = VM;
  });
  var Nh = f((wX, Lh) => {
    var UM = Mr(),
      Ph = Lr(),
      BM = Cr(),
      kM = _e(),
      HM = Je(),
      WM = Ch(),
      zM = Object.prototype,
      KM = zM.hasOwnProperty;
    function Dr(e) {
      if (HM(e) && !kM(e) && !(e instanceof UM)) {
        if (e instanceof Ph) return e;
        if (KM.call(e, "__wrapped__")) return WM(e);
      }
      return new Ph(e);
    }
    Dr.prototype = BM.prototype;
    Dr.prototype.constructor = Dr;
    Lh.exports = Dr;
  });
  var Dh = f((OX, Mh) => {
    var jM = Mr(),
      YM = Zo(),
      $M = Jo(),
      QM = Nh();
    function ZM(e) {
      var t = $M(e),
        n = QM[t];
      if (typeof n != "function" || !(t in jM.prototype)) return !1;
      if (e === n) return !0;
      var r = YM(n);
      return !!r && e === r[0];
    }
    Mh.exports = ZM;
  });
  var Xh = f((xX, Gh) => {
    var Fh = Lr(),
      JM = gh(),
      eD = Zo(),
      ea = Jo(),
      tD = _e(),
      qh = Dh(),
      nD = "Expected a function",
      rD = 8,
      iD = 32,
      oD = 128,
      aD = 256;
    function sD(e) {
      return JM(function (t) {
        var n = t.length,
          r = n,
          i = Fh.prototype.thru;
        for (e && t.reverse(); r--; ) {
          var o = t[r];
          if (typeof o != "function") throw new TypeError(nD);
          if (i && !a && ea(o) == "wrapper") var a = new Fh([], !0);
        }
        for (r = a ? r : n; ++r < n; ) {
          o = t[r];
          var s = ea(o),
            u = s == "wrapper" ? eD(o) : void 0;
          u &&
          qh(u[0]) &&
          u[1] == (oD | rD | iD | aD) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[ea(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && qh(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var l = arguments,
            g = l[0];
          if (a && l.length == 1 && tD(g)) return a.plant(g).value();
          for (var p = 0, d = n ? t[p].apply(this, l) : g; ++p < n; )
            d = t[p].call(this, d);
          return d;
        };
      });
    }
    Gh.exports = sD;
  });
  var Uh = f((RX, Vh) => {
    var uD = Xh(),
      cD = uD();
    Vh.exports = cD;
  });
  var kh = f((CX, Bh) => {
    function lD(e, t, n) {
      return (
        e === e &&
          (n !== void 0 && (e = e <= n ? e : n),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Bh.exports = lD;
  });
  var Wh = f((PX, Hh) => {
    var fD = kh(),
      ta = cr();
    function dD(e, t, n) {
      return (
        n === void 0 && ((n = t), (t = void 0)),
        n !== void 0 && ((n = ta(n)), (n = n === n ? n : 0)),
        t !== void 0 && ((t = ta(t)), (t = t === t ? t : 0)),
        fD(ta(e), t, n)
      );
    }
    Hh.exports = dD;
  });
  var eE,
    tE,
    nE,
    rE,
    pD,
    gD,
    hD,
    ED,
    yD,
    vD,
    mD,
    _D,
    ID,
    TD,
    bD,
    AD,
    SD,
    wD,
    OD,
    iE,
    oE,
    xD,
    RD,
    CD,
    aE,
    PD,
    LD,
    sE,
    ND,
    na,
    uE,
    zh,
    Kh,
    cE,
    wn,
    MD,
    Ze,
    lE,
    DD,
    Pe,
    ke,
    On,
    fE,
    ra,
    jh,
    ia,
    FD,
    Sn,
    qD,
    GD,
    XD,
    dE,
    Yh,
    VD,
    $h,
    UD,
    BD,
    kD,
    Qh,
    Fr,
    qr,
    Zh,
    Jh,
    pE,
    gE = pe(() => {
      "use strict";
      (eE = ue(Uh())), (tE = ue(sr())), (nE = ue(Wh()));
      Re();
      oa();
      Rr();
      (rE = ue(vt())),
        ({
          MOUSE_CLICK: pD,
          MOUSE_SECOND_CLICK: gD,
          MOUSE_DOWN: hD,
          MOUSE_UP: ED,
          MOUSE_OVER: yD,
          MOUSE_OUT: vD,
          DROPDOWN_CLOSE: mD,
          DROPDOWN_OPEN: _D,
          SLIDER_ACTIVE: ID,
          SLIDER_INACTIVE: TD,
          TAB_ACTIVE: bD,
          TAB_INACTIVE: AD,
          NAVBAR_CLOSE: SD,
          NAVBAR_OPEN: wD,
          MOUSE_MOVE: OD,
          PAGE_SCROLL_DOWN: iE,
          SCROLL_INTO_VIEW: oE,
          SCROLL_OUT_OF_VIEW: xD,
          PAGE_SCROLL_UP: RD,
          SCROLLING_IN_VIEW: CD,
          PAGE_FINISH: aE,
          ECOMMERCE_CART_CLOSE: PD,
          ECOMMERCE_CART_OPEN: LD,
          PAGE_START: sE,
          PAGE_SCROLL: ND,
        } = Ue),
        (na = "COMPONENT_ACTIVE"),
        (uE = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: zh } = Ie),
        ({ getNamespacedParameterId: Kh } = rE.IX2VanillaUtils),
        (cE = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (wn = cE(({ element: e, nativeEvent: t }) => e === t.target)),
        (MD = cE(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (Ze = (0, eE.default)([wn, MD])),
        (lE = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: r } = n,
              i = r[t];
            if (i && !FD[i.eventTypeId]) return i;
          }
          return null;
        }),
        (DD = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: r } = n.config;
          return !!lE(e, r);
        }),
        (Pe = ({ store: e, event: t, element: n, eventStateKey: r }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            l = lE(e, u);
          return (
            l &&
              Kt({
                store: e,
                eventId: u,
                eventTarget: n,
                eventStateKey: u + zh + r.split(zh)[1],
                actionListId: (0, tE.default)(l, "action.config.actionListId"),
              }),
            Kt({
              store: e,
              eventId: a,
              eventTarget: n,
              eventStateKey: r,
              actionListId: s,
            }),
            xn({
              store: e,
              eventId: a,
              eventTarget: n,
              eventStateKey: r,
              actionListId: s,
            }),
            i
          );
        }),
        (ke = (e, t) => (n, r) => e(n, r) === !0 ? t(n, r) : r),
        (On = { handler: ke(Ze, Pe) }),
        (fE = { ...On, types: [na, uE].join(" ") }),
        (ra = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (jh = "mouseover mouseout"),
        (ia = { types: ra }),
        (FD = { PAGE_START: sE, PAGE_FINISH: aE }),
        (Sn = (() => {
          let e = window.pageXOffset !== void 0,
            n =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : n.scrollLeft,
            scrollTop: e ? window.pageYOffset : n.scrollTop,
            stiffScrollTop: (0, nE.default)(
              e ? window.pageYOffset : n.scrollTop,
              0,
              n.scrollHeight - window.innerHeight
            ),
            scrollWidth: n.scrollWidth,
            scrollHeight: n.scrollHeight,
            clientWidth: n.clientWidth,
            clientHeight: n.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (qD = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (GD = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: r, relatedTarget: i } = t,
            o = e.contains(r);
          if (n === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(n === "mouseout" && o && a);
        }),
        (XD = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: r, clientHeight: i } = Sn(),
            o = n.scrollOffsetValue,
            u = n.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return qD(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: r,
            bottom: i - u,
          });
        }),
        (dE = (e) => (t, n) => {
          let { type: r } = t.nativeEvent,
            i = [na, uE].indexOf(r) !== -1 ? r === na : n.isActive,
            o = { ...n, isActive: i };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        }),
        (Yh = (e) => (t, n) => {
          let r = { elementHovered: GD(t) };
          return (
            ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
              e(t, r)) ||
            r
          );
        }),
        (VD = (e) => (t, n) => {
          let r = { ...n, elementVisible: XD(t) };
          return (
            ((n ? r.elementVisible !== n.elementVisible : r.elementVisible) &&
              e(t, r)) ||
            r
          );
        }),
        ($h =
          (e) =>
          (t, n = {}) => {
            let { stiffScrollTop: r, scrollHeight: i, innerHeight: o } = Sn(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: l } = a,
              g = l === "PX",
              p = i - o,
              d = Number((r / p).toFixed(2));
            if (n && n.percentTop === d) return n;
            let h = (g ? u : (o * (u || 0)) / 100) / p,
              m,
              E,
              b = 0;
            n &&
              ((m = d > n.percentTop),
              (E = n.scrollingDown !== m),
              (b = E ? d : n.anchorTop));
            let v = s === iE ? d >= b + h : d <= b - h,
              w = {
                ...n,
                percentTop: d,
                inBounds: v,
                anchorTop: b,
                scrollingDown: m,
              };
            return (n && v && (E || w.inBounds !== n.inBounds) && e(t, w)) || w;
          }),
        (UD = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (BD = (e) => (t, n) => {
          let r = { finished: document.readyState === "complete" };
          return r.finished && !(n && n.finshed) && e(t), r;
        }),
        (kD = (e) => (t, n) => {
          let r = { started: !0 };
          return n || e(t), r;
        }),
        (Qh =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let r = { clickCount: (n.clickCount % 2) + 1 };
            return (r.clickCount !== n.clickCount && e(t, r)) || r;
          }),
        (Fr = (e = !0) => ({
          ...fE,
          handler: ke(
            e ? Ze : wn,
            dE((t, n) => (n.isActive ? On.handler(t, n) : n))
          ),
        })),
        (qr = (e = !0) => ({
          ...fE,
          handler: ke(
            e ? Ze : wn,
            dE((t, n) => (n.isActive ? n : On.handler(t, n)))
          ),
        })),
        (Zh = {
          ...ia,
          handler: VD((e, t) => {
            let { elementVisible: n } = t,
              { event: r, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[r.action.config.autoStopEventId] && t.triggered
              ? t
              : (r.eventTypeId === oE) === n
              ? (Pe(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (Jh = 0.05),
        (pE = {
          [ID]: Fr(),
          [TD]: qr(),
          [_D]: Fr(),
          [mD]: qr(),
          [wD]: Fr(!1),
          [SD]: qr(!1),
          [bD]: Fr(),
          [AD]: qr(),
          [LD]: { types: "ecommerce-cart-open", handler: ke(Ze, Pe) },
          [PD]: { types: "ecommerce-cart-close", handler: ke(Ze, Pe) },
          [pD]: {
            types: "click",
            handler: ke(
              Ze,
              Qh((e, { clickCount: t }) => {
                DD(e) ? t === 1 && Pe(e) : Pe(e);
              })
            ),
          },
          [gD]: {
            types: "click",
            handler: ke(
              Ze,
              Qh((e, { clickCount: t }) => {
                t === 2 && Pe(e);
              })
            ),
          },
          [hD]: { ...On, types: "mousedown" },
          [ED]: { ...On, types: "mouseup" },
          [yD]: {
            types: jh,
            handler: ke(
              Ze,
              Yh((e, t) => {
                t.elementHovered && Pe(e);
              })
            ),
          },
          [vD]: {
            types: jh,
            handler: ke(
              Ze,
              Yh((e, t) => {
                t.elementHovered || Pe(e);
              })
            ),
          },
          [OD]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: r,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: l,
                  restingState: g = 0,
                } = n,
                {
                  clientX: p = o.clientX,
                  clientY: d = o.clientY,
                  pageX: h = o.pageX,
                  pageY: m = o.pageY,
                } = r,
                E = s === "X_AXIS",
                b = r.type === "mouseout",
                v = g / 100,
                w = u,
                A = !1;
              switch (a) {
                case je.VIEWPORT: {
                  v = E
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(d, window.innerHeight) / window.innerHeight;
                  break;
                }
                case je.PAGE: {
                  let {
                    scrollLeft: R,
                    scrollTop: C,
                    scrollWidth: x,
                    scrollHeight: U,
                  } = Sn();
                  v = E ? Math.min(R + h, x) / x : Math.min(C + m, U) / U;
                  break;
                }
                case je.ELEMENT:
                default: {
                  w = Kh(i, u);
                  let R = r.type.indexOf("mouse") === 0;
                  if (R && Ze({ element: t, nativeEvent: r }) !== !0) break;
                  let C = t.getBoundingClientRect(),
                    { left: x, top: U, width: k, height: H } = C;
                  if (!R && !UD({ left: p, top: d }, C)) break;
                  (A = !0), (v = E ? (p - x) / k : (d - U) / H);
                  break;
                }
              }
              return (
                b && (v > 1 - Jh || v < Jh) && (v = Math.round(v)),
                (a !== je.ELEMENT || A || A !== o.elementHovered) &&
                  ((v = l ? 1 - v : v), e.dispatch(Wt(w, v))),
                {
                  elementHovered: A,
                  clientX: p,
                  clientY: d,
                  pageX: h,
                  pageY: m,
                }
              );
            },
          },
          [ND]: {
            types: ra,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: r } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Sn(),
                s = i / (o - a);
              (s = r ? 1 - s : s), e.dispatch(Wt(n, s));
            },
          },
          [CD]: {
            types: ra,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: r },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: l,
                } = Sn(),
                {
                  basedOn: g,
                  selectedAxis: p,
                  continuousParameterGroupId: d,
                  startsEntering: h,
                  startsExiting: m,
                  addEndOffset: E,
                  addStartOffset: b,
                  addOffsetValue: v = 0,
                  endOffsetValue: w = 0,
                } = n,
                A = p === "X_AXIS";
              if (g === je.VIEWPORT) {
                let R = A ? o / s : a / u;
                return (
                  R !== i.scrollPercent && t.dispatch(Wt(d, R)),
                  { scrollPercent: R }
                );
              } else {
                let R = Kh(r, d),
                  C = e.getBoundingClientRect(),
                  x = (b ? v : 0) / 100,
                  U = (E ? w : 0) / 100;
                (x = h ? x : 1 - x), (U = m ? U : 1 - U);
                let k = C.top + Math.min(C.height * x, l),
                  K = C.top + C.height * U - k,
                  ee = Math.min(l + K, u),
                  T = Math.min(Math.max(0, l - k), ee) / ee;
                return (
                  T !== i.scrollPercent && t.dispatch(Wt(R, T)),
                  { scrollPercent: T }
                );
              }
            },
          },
          [oE]: Zh,
          [xD]: Zh,
          [iE]: {
            ...ia,
            handler: $h((e, t) => {
              t.scrollingDown && Pe(e);
            }),
          },
          [RD]: {
            ...ia,
            handler: $h((e, t) => {
              t.scrollingDown || Pe(e);
            }),
          },
          [aE]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: ke(wn, BD(Pe)),
          },
          [sE]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: ke(wn, kD(Pe)),
          },
        });
    });
  var PE = {};
  xe(PE, {
    observeRequests: () => cF,
    startActionGroup: () => xn,
    startEngine: () => kr,
    stopActionGroup: () => Kt,
    stopAllActionGroups: () => xE,
    stopEngine: () => Hr,
  });
  function cF(e) {
    mt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: dF }),
      mt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: pF }),
      mt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: gF }),
      mt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: hF });
  }
  function lF(e) {
    mt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Hr(e),
          AE({ store: e, elementApi: we }),
          kr({ store: e, allowEvents: !0 }),
          SE();
      },
    });
  }
  function fF(e, t) {
    let n = mt({
      store: e,
      select: ({ ixSession: r }) => r.tick,
      onChange: (r) => {
        t(r), n();
      },
    });
  }
  function dF({ rawData: e, defer: t }, n) {
    let r = () => {
      kr({ store: n, rawData: e, allowEvents: !0 }), SE();
    };
    t ? setTimeout(r, 0) : r();
  }
  function SE() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function pF(e, t) {
    let {
        actionTypeId: n,
        actionListId: r,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: l = !0,
      } = e,
      { rawData: g } = e;
    if (r && i && g && s) {
      let p = g.actionLists[r];
      p && (g = ZD({ actionList: p, actionItemId: i, rawData: g }));
    }
    if (
      (kr({ store: t, rawData: g, allowEvents: a, testManual: u }),
      (r && n === Ae.GENERAL_START_ACTION) || aa(n))
    ) {
      Kt({ store: t, actionListId: r }),
        OE({ store: t, actionListId: r, eventId: o });
      let p = xn({
        store: t,
        eventId: o,
        actionListId: r,
        immediate: s,
        verbose: l,
      });
      l && p && t.dispatch(zt({ actionListId: r, isPlaying: !s }));
    }
  }
  function gF({ actionListId: e }, t) {
    e ? Kt({ store: t, actionListId: e }) : xE({ store: t }), Hr(t);
  }
  function hF(e, t) {
    Hr(t), AE({ store: t, elementApi: we });
  }
  function kr({ store: e, rawData: t, allowEvents: n, testManual: r }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(qo(t)),
      i.active ||
        (e.dispatch(
          Go({
            hasBoundaryNodes: !!document.querySelector(Xr),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        n &&
          (IF(e), EF(), e.getState().ixSession.hasDefinedMediaQueries && lF(e)),
        e.dispatch(Xo()),
        yF(e, r));
  }
  function EF() {
    let { documentElement: e } = document;
    e.className.indexOf(hE) === -1 && (e.className += ` ${hE}`);
  }
  function yF(e, t) {
    let n = (r) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(Or(r, o)), t ? fF(e, n) : requestAnimationFrame(n));
    };
    n(window.performance.now());
  }
  function Hr(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: n } = t;
      n.forEach(vF), nF(), e.dispatch(Vo());
    }
  }
  function vF({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function mF({
    store: e,
    eventStateKey: t,
    eventTarget: n,
    eventId: r,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: l, ixSession: g } = e.getState(),
      { events: p } = l,
      d = p[r],
      { eventTypeId: h } = d,
      m = {},
      E = {},
      b = [],
      { continuousActionGroups: v } = a,
      { id: w } = a;
    JD(h, i) && (w = eF(t, w));
    let A = g.hasBoundaryNodes && n ? An(n, Xr) : null;
    v.forEach((R) => {
      let { keyframe: C, actionItems: x } = R;
      x.forEach((U) => {
        let { actionTypeId: k } = U,
          { target: H } = U.config;
        if (!H) return;
        let K = H.boundaryMode ? A : null,
          ee = rF(H) + sa + k;
        if (((E[ee] = _F(E[ee], C, U)), !m[ee])) {
          m[ee] = !0;
          let { config: M } = U;
          Vr({
            config: M,
            event: d,
            eventTarget: n,
            elementRoot: K,
            elementApi: we,
          }).forEach((T) => {
            b.push({ element: T, key: ee });
          });
        }
      });
    }),
      b.forEach(({ element: R, key: C }) => {
        let x = E[C],
          U = (0, rt.default)(x, "[0].actionItems[0]", {}),
          { actionTypeId: k } = U,
          K = (
            k === Ae.PLUGIN_RIVE
              ? (U.config?.target?.selectorGuids || []).length === 0
              : Br(k)
          )
            ? ca(k)(R, U)
            : null,
          ee = ua({ element: R, actionItem: U, elementApi: we }, K);
        la({
          store: e,
          element: R,
          eventId: r,
          actionListId: o,
          actionItem: U,
          destination: ee,
          continuous: !0,
          parameterId: w,
          actionGroups: x,
          smoothing: s,
          restingValue: u,
          pluginInstance: K,
        });
      });
  }
  function _F(e = [], t, n) {
    let r = [...e],
      i;
    return (
      r.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = r.length), r.push({ keyframe: t, actionItems: [] })),
      r[i].actionItems.push(n),
      r
    );
  }
  function IF(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: n } = t;
    wE(e),
      (0, jt.default)(n, (i, o) => {
        let a = pE[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        OF({ logic: a, store: e, events: i });
      });
    let { ixSession: r } = e.getState();
    r.eventListeners.length && bF(e);
  }
  function bF(e) {
    let t = () => {
      wE(e);
    };
    TF.forEach((n) => {
      window.addEventListener(n, t), e.dispatch(wr(window, [n, t]));
    }),
      t();
  }
  function wE(e) {
    let { ixSession: t, ixData: n } = e.getState(),
      r = window.innerWidth;
    if (r !== t.viewportWidth) {
      let { mediaQueries: i } = n;
      e.dispatch(Wo({ width: r, mediaQueries: i }));
    }
  }
  function OF({ logic: e, store: t, events: n }) {
    xF(n);
    let { types: r, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = AF(n, wF);
    if (!(0, vE.default)(s)) return;
    (0, jt.default)(s, (p, d) => {
      let h = n[d],
        { action: m, id: E, mediaQueries: b = o.mediaQueryKeys } = h,
        { actionListId: v } = m.config;
      iF(b, o.mediaQueryKeys) || t.dispatch(zo()),
        m.actionTypeId === Ae.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(h.config) ? h.config : [h.config]).forEach((A) => {
            let { continuousParameterGroupId: R } = A,
              C = (0, rt.default)(a, `${v}.continuousParameterGroups`, []),
              x = (0, yE.default)(C, ({ id: H }) => H === R),
              U = (A.smoothing || 0) / 100,
              k = (A.restingState || 0) / 100;
            x &&
              p.forEach((H, K) => {
                let ee = E + sa + K;
                mF({
                  store: t,
                  eventStateKey: ee,
                  eventTarget: H,
                  eventId: E,
                  eventConfig: A,
                  actionListId: v,
                  parameterGroup: x,
                  smoothing: U,
                  restingValue: k,
                });
              });
          }),
        (m.actionTypeId === Ae.GENERAL_START_ACTION || aa(m.actionTypeId)) &&
          OE({ store: t, actionListId: v, eventId: E });
    });
    let u = (p) => {
        let { ixSession: d } = t.getState();
        SF(s, (h, m, E) => {
          let b = n[m],
            v = d.eventState[E],
            { action: w, mediaQueries: A = o.mediaQueryKeys } = b;
          if (!Ur(A, d.mediaQueryKey)) return;
          let R = (C = {}) => {
            let x = i(
              {
                store: t,
                element: h,
                event: b,
                eventConfig: C,
                nativeEvent: p,
                eventStateKey: E,
              },
              v
            );
            oF(x, v) || t.dispatch(Uo(E, x));
          };
          w.actionTypeId === Ae.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(b.config) ? b.config : [b.config]).forEach(R)
            : R();
        });
      },
      l = (0, TE.default)(u, uF),
      g = ({ target: p = document, types: d, throttle: h }) => {
        d.split(" ")
          .filter(Boolean)
          .forEach((m) => {
            let E = h ? l : u;
            p.addEventListener(m, E), t.dispatch(wr(p, [m, E]));
          });
      };
    Array.isArray(r) ? r.forEach(g) : typeof r == "string" && g(e);
  }
  function xF(e) {
    if (!sF) return;
    let t = {},
      n = "";
    for (let r in e) {
      let { eventTypeId: i, target: o } = e[r],
        a = jo(o);
      t[a] ||
        ((i === Ue.MOUSE_CLICK || i === Ue.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (n += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (n) {
      let r = document.createElement("style");
      (r.textContent = n), document.body.appendChild(r);
    }
  }
  function OE({ store: e, actionListId: t, eventId: n }) {
    let { ixData: r, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = r,
      s = a[n],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let l = (0, rt.default)(u, "actionItemGroups[0].actionItems", []),
        g = (0, rt.default)(s, "mediaQueries", r.mediaQueryKeys);
      if (!Ur(g, i.mediaQueryKey)) return;
      l.forEach((p) => {
        let { config: d, actionTypeId: h } = p,
          m =
            d?.target?.useEventTarget === !0 && d?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : d,
          E = Vr({ config: m, event: s, elementApi: we }),
          b = Br(h);
        E.forEach((v) => {
          let w = b ? ca(h)(v, p) : null;
          la({
            destination: ua({ element: v, actionItem: p, elementApi: we }, w),
            immediate: !0,
            store: e,
            element: v,
            eventId: n,
            actionItem: p,
            actionListId: t,
            pluginInstance: w,
          });
        });
      });
    }
  }
  function xE({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, jt.default)(t, (n) => {
      if (!n.continuous) {
        let { actionListId: r, verbose: i } = n;
        fa(n, e), i && e.dispatch(zt({ actionListId: r, isPlaying: !1 }));
      }
    });
  }
  function Kt({
    store: e,
    eventId: t,
    eventTarget: n,
    eventStateKey: r,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && n ? An(n, Xr) : null;
    (0, jt.default)(o, (u) => {
      let l = (0, rt.default)(u, "actionItem.config.target.boundaryMode"),
        g = r ? u.eventStateKey === r : !0;
      if (u.actionListId === i && u.eventId === t && g) {
        if (s && l && !Yo(s, u.element)) return;
        fa(u, e),
          u.verbose && e.dispatch(zt({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function xn({
    store: e,
    eventId: t,
    eventTarget: n,
    eventStateKey: r,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: l } = e.getState(),
      { events: g } = u,
      p = g[t] || {},
      { mediaQueries: d = u.mediaQueryKeys } = p,
      h = (0, rt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: m, useFirstGroupAsInitialState: E } = h;
    if (!m || !m.length) return !1;
    o >= m.length && (0, rt.default)(p, "config.loop") && (o = 0),
      o === 0 && E && o++;
    let v =
        (o === 0 || (o === 1 && E)) && aa(p.action?.actionTypeId)
          ? p.config.delay
          : void 0,
      w = (0, rt.default)(m, [o, "actionItems"], []);
    if (!w.length || !Ur(d, l.mediaQueryKey)) return !1;
    let A = l.hasBoundaryNodes && n ? An(n, Xr) : null,
      R = YD(w),
      C = !1;
    return (
      w.forEach((x, U) => {
        let { config: k, actionTypeId: H } = x,
          K = Br(H),
          { target: ee } = k;
        if (!ee) return;
        let M = ee.boundaryMode ? A : null;
        Vr({
          config: k,
          event: p,
          eventTarget: n,
          elementRoot: M,
          elementApi: we,
        }).forEach((L, W) => {
          let V = K ? ca(H)(L, x) : null,
            D = K ? aF(H)(L, x) : null;
          C = !0;
          let N = R === U && W === 0,
            B = $D({ element: L, actionItem: x }),
            ae = ua({ element: L, actionItem: x, elementApi: we }, V);
          la({
            store: e,
            element: L,
            actionItem: x,
            eventId: t,
            eventTarget: n,
            eventStateKey: r,
            actionListId: i,
            groupIndex: o,
            isCarrier: N,
            computedStyle: B,
            destination: ae,
            immediate: a,
            verbose: s,
            pluginInstance: V,
            pluginDuration: D,
            instanceDelay: v,
          });
        });
      }),
      C
    );
  }
  function la(e) {
    let { store: t, computedStyle: n, ...r } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: l,
        eventId: g,
      } = r,
      p = !u,
      d = KD(),
      { ixElements: h, ixSession: m, ixData: E } = t.getState(),
      b = zD(h, i),
      { refState: v } = h[b] || {},
      w = $o(i),
      A = m.reducedMotion && bi[o.actionTypeId],
      R;
    if (A && u)
      switch (E.events[g]?.eventTypeId) {
        case Ue.MOUSE_MOVE:
        case Ue.MOUSE_MOVE_IN_VIEWPORT:
          R = l;
          break;
        default:
          R = 0.5;
          break;
      }
    let C = QD(i, v, n, o, we, s);
    if (
      (t.dispatch(
        Bo({
          instanceId: d,
          elementId: b,
          origin: C,
          refType: w,
          skipMotion: A,
          skipToValue: R,
          ...r,
        })
      ),
      RE(document.body, "ix2-animation-started", d),
      a)
    ) {
      RF(t, d);
      return;
    }
    mt({ store: t, select: ({ ixInstances: x }) => x[d], onChange: CE }),
      p && t.dispatch(xr(d, m.tick));
  }
  function fa(e, t) {
    RE(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: n, actionItem: r } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[n] || {};
    a === bE && tF(o, r, we), t.dispatch(ko(e.id));
  }
  function RE(e, t, n) {
    let r = document.createEvent("CustomEvent");
    r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r);
  }
  function RF(e, t) {
    let { ixParameters: n } = e.getState();
    e.dispatch(xr(t, 0)), e.dispatch(Or(performance.now(), n));
    let { ixInstances: r } = e.getState();
    CE(r[t], e);
  }
  function CE(e, t) {
    let {
        active: n,
        continuous: r,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: l,
        groupIndex: g,
        eventId: p,
        eventTarget: d,
        eventStateKey: h,
        actionListId: m,
        isCarrier: E,
        styleProp: b,
        verbose: v,
        pluginInstance: w,
      } = e,
      { ixData: A, ixSession: R } = t.getState(),
      { events: C } = A,
      x = C && C[p] ? C[p] : {},
      { mediaQueries: U = A.mediaQueryKeys } = x;
    if (Ur(U, R.mediaQueryKey) && (r || n || i)) {
      if (l || (u === WD && i)) {
        t.dispatch(Ho(o, s, l, a));
        let { ixElements: k } = t.getState(),
          { ref: H, refType: K, refState: ee } = k[o] || {},
          M = ee && ee[s];
        (K === bE || Br(s)) && jD(H, ee, M, p, a, b, we, u, w);
      }
      if (i) {
        if (E) {
          let k = xn({
            store: t,
            eventId: p,
            eventTarget: d,
            eventStateKey: h,
            actionListId: m,
            groupIndex: g + 1,
            verbose: v,
          });
          v && !k && t.dispatch(zt({ actionListId: m, isPlaying: !1 }));
        }
        fa(e, t);
      }
    }
  }
  var yE,
    rt,
    vE,
    mE,
    _E,
    IE,
    jt,
    TE,
    Gr,
    HD,
    aa,
    sa,
    Xr,
    bE,
    WD,
    hE,
    Vr,
    zD,
    ua,
    mt,
    KD,
    jD,
    AE,
    YD,
    $D,
    QD,
    ZD,
    JD,
    eF,
    Ur,
    tF,
    nF,
    rF,
    iF,
    oF,
    Br,
    ca,
    aF,
    EE,
    sF,
    uF,
    TF,
    AF,
    SF,
    wF,
    oa = pe(() => {
      "use strict";
      (yE = ue(Zi())),
        (rt = ue(sr())),
        (vE = ue(Hp())),
        (mE = ue(Eg())),
        (_E = ue(vg())),
        (IE = ue(_g())),
        (jt = ue(wg())),
        (TE = ue(Ng()));
      Re();
      Gr = ue(vt());
      Rr();
      Xg();
      gE();
      (HD = Object.keys(Xn)),
        (aa = (e) => HD.includes(e)),
        ({
          COLON_DELIMITER: sa,
          BOUNDARY_SELECTOR: Xr,
          HTML_ELEMENT: bE,
          RENDER_GENERAL: WD,
          W_MOD_IX: hE,
        } = Ie),
        ({
          getAffectedElements: Vr,
          getElementId: zD,
          getDestinationValues: ua,
          observeStore: mt,
          getInstanceId: KD,
          renderHTMLElement: jD,
          clearAllStyles: AE,
          getMaxDurationItemIndex: YD,
          getComputedStyle: $D,
          getInstanceOrigin: QD,
          reduceListToGroup: ZD,
          shouldNamespaceEventParameter: JD,
          getNamespacedParameterId: eF,
          shouldAllowMediaQuery: Ur,
          cleanupHTMLElement: tF,
          clearObjectCache: nF,
          stringifyTarget: rF,
          mediaQueriesEqual: iF,
          shallowEqual: oF,
        } = Gr.IX2VanillaUtils),
        ({
          isPluginType: Br,
          createPluginInstance: ca,
          getPluginDuration: aF,
        } = Gr.IX2VanillaPlugins),
        (EE = navigator.userAgent),
        (sF = EE.match(/iPad/i) || EE.match(/iPhone/)),
        (uF = 12);
      TF = ["resize", "orientationchange"];
      (AF = (e, t) => (0, mE.default)((0, IE.default)(e, t), _E.default)),
        (SF = (e, t) => {
          (0, jt.default)(e, (n, r) => {
            n.forEach((i, o) => {
              let a = r + sa + o;
              t(i, r, a);
            });
          });
        }),
        (wF = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Vr({ config: t, elementApi: we });
        });
    });
  var ME = f((pa) => {
    "use strict";
    Object.defineProperty(pa, "__esModule", { value: !0 });
    function CF(e, t) {
      for (var n in t)
        Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }
    CF(pa, {
      actions: function () {
        return NF;
      },
      destroy: function () {
        return NE;
      },
      init: function () {
        return qF;
      },
      setEnv: function () {
        return FF;
      },
      store: function () {
        return Wr;
      },
    });
    var PF = _i(),
      LF = MF((Sp(), We(Ap))),
      da = (oa(), We(PE)),
      NF = DF((Rr(), We(Dg)));
    function MF(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function LE(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (LE = function (r) {
        return r ? n : t;
      })(e);
    }
    function DF(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function"))
        return { default: e };
      var n = LE(t);
      if (n && n.has(e)) return n.get(e);
      var r = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(r, o, a)
            : (r[o] = e[o]);
        }
      return (r.default = e), n && n.set(e, r), r;
    }
    var Wr = (0, PF.createStore)(LF.default);
    function FF(e) {
      e() && (0, da.observeRequests)(Wr);
    }
    function qF(e) {
      NE(), (0, da.startEngine)({ store: Wr, rawData: e, allowEvents: !0 });
    }
    function NE() {
      (0, da.stopEngine)(Wr);
    }
  });
  var GE = f((UX, qE) => {
    "use strict";
    var DE = Ne(),
      FE = ME();
    FE.setEnv(DE.env);
    DE.define(
      "ix2",
      (qE.exports = function () {
        return FE;
      })
    );
  });
  var VE = f((BX, XE) => {
    "use strict";
    var Yt = Ne();
    Yt.define(
      "links",
      (XE.exports = function (e, t) {
        var n = {},
          r = e(window),
          i,
          o = Yt.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          l = /index\.(html|php)$/,
          g = /\/$/,
          p,
          d;
        n.ready = n.design = n.preview = h;
        function h() {
          (i = o && Yt.env("design")),
            (d = Yt.env("slug") || a.pathname || ""),
            Yt.scroll.off(E),
            (p = []);
          for (var v = document.links, w = 0; w < v.length; ++w) m(v[w]);
          p.length && (Yt.scroll.on(E), E());
        }
        function m(v) {
          if (!v.getAttribute("hreflang")) {
            var w =
              (i && v.getAttribute("href-disabled")) || v.getAttribute("href");
            if (((s.href = w), !(w.indexOf(":") >= 0))) {
              var A = e(v);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var R = e(s.hash);
                R.length && p.push({ link: A, sec: R, active: !1 });
                return;
              }
              if (!(w === "#" || w === "")) {
                var C =
                  s.href === a.href || w === d || (l.test(w) && g.test(d));
                b(A, u, C);
              }
            }
          }
        }
        function E() {
          var v = r.scrollTop(),
            w = r.height();
          t.each(p, function (A) {
            if (!A.link.attr("hreflang")) {
              var R = A.link,
                C = A.sec,
                x = C.offset().top,
                U = C.outerHeight(),
                k = w * 0.5,
                H = C.is(":visible") && x + U - k >= v && x + k <= v + w;
              A.active !== H && ((A.active = H), b(R, u, H));
            }
          });
        }
        function b(v, w, A) {
          var R = v.hasClass(w);
          (A && R) || (!A && !R) || (A ? v.addClass(w) : v.removeClass(w));
        }
        return n;
      })
    );
  });
  var BE = f((kX, UE) => {
    "use strict";
    var zr = Ne();
    zr.define(
      "scroll",
      (UE.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          n = window.location,
          r = m() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (M) {
              window.setTimeout(M, 15);
            },
          u = zr.env("editor") ? ".w-editor-body" : "body",
          l =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          g = 'a[href="#"]',
          p = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
          d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          h = document.createElement("style");
        h.appendChild(document.createTextNode(d));
        function m() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var E = /^#[a-zA-Z0-9][\w:.-]*$/;
        function b(M) {
          return E.test(M.hash) && M.host + M.pathname === n.host + n.pathname;
        }
        let v =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function w() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            v.matches
          );
        }
        function A(M, T) {
          var L;
          switch (T) {
            case "add":
              (L = M.attr("tabindex")),
                L
                  ? M.attr("data-wf-tabindex-swap", L)
                  : M.attr("tabindex", "-1");
              break;
            case "remove":
              (L = M.attr("data-wf-tabindex-swap")),
                L
                  ? (M.attr("tabindex", L),
                    M.removeAttr("data-wf-tabindex-swap"))
                  : M.removeAttr("tabindex");
              break;
          }
          M.toggleClass("wf-force-outline-none", T === "add");
        }
        function R(M) {
          var T = M.currentTarget;
          if (
            !(
              zr.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))
            )
          ) {
            var L = b(T) ? T.hash : "";
            if (L !== "") {
              var W = e(L);
              W.length &&
                (M && (M.preventDefault(), M.stopPropagation()),
                C(L, M),
                window.setTimeout(
                  function () {
                    x(W, function () {
                      A(W, "add"),
                        W.get(0).focus({ preventScroll: !0 }),
                        A(W, "remove");
                    });
                  },
                  M ? 0 : 300
                ));
            }
          }
        }
        function C(M) {
          if (
            n.hash !== M &&
            r &&
            r.pushState &&
            !(zr.env.chrome && n.protocol === "file:")
          ) {
            var T = r.state && r.state.hash;
            T !== M && r.pushState({ hash: M }, "", M);
          }
        }
        function x(M, T) {
          var L = i.scrollTop(),
            W = U(M);
          if (L !== W) {
            var V = k(M, L, W),
              D = Date.now(),
              N = function () {
                var B = Date.now() - D;
                window.scroll(0, H(L, W, B, V)),
                  B <= V ? s(N) : typeof T == "function" && T();
              };
            s(N);
          }
        }
        function U(M) {
          var T = e(l),
            L = T.css("position") === "fixed" ? T.outerHeight() : 0,
            W = M.offset().top - L;
          if (M.data("scroll") === "mid") {
            var V = i.height() - L,
              D = M.outerHeight();
            D < V && (W -= Math.round((V - D) / 2));
          }
          return W;
        }
        function k(M, T, L) {
          if (w()) return 0;
          var W = 1;
          return (
            a.add(M).each(function (V, D) {
              var N = parseFloat(D.getAttribute("data-scroll-time"));
              !isNaN(N) && N >= 0 && (W = N);
            }),
            (472.143 * Math.log(Math.abs(T - L) + 125) - 2e3) * W
          );
        }
        function H(M, T, L, W) {
          return L > W ? T : M + (T - M) * K(L / W);
        }
        function K(M) {
          return M < 0.5
            ? 4 * M * M * M
            : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1;
        }
        function ee() {
          var { WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: T } = t;
          o.on(T, p, R),
            o.on(M, g, function (L) {
              L.preventDefault();
            }),
            document.head.insertBefore(h, document.head.firstChild);
        }
        return { ready: ee };
      })
    );
  });
  var HE = f((HX, kE) => {
    "use strict";
    var GF = Ne();
    GF.define(
      "touch",
      (kE.exports = function (e) {
        var t = {},
          n = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new r(o) : null
            );
          });
        function r(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            l,
            g;
          o.addEventListener("touchstart", p, !1),
            o.addEventListener("touchmove", d, !1),
            o.addEventListener("touchend", h, !1),
            o.addEventListener("touchcancel", m, !1),
            o.addEventListener("mousedown", p, !1),
            o.addEventListener("mousemove", d, !1),
            o.addEventListener("mouseup", h, !1),
            o.addEventListener("mouseout", m, !1);
          function p(b) {
            var v = b.touches;
            (v && v.length > 1) ||
              ((a = !0),
              v ? ((s = !0), (l = v[0].clientX)) : (l = b.clientX),
              (g = l));
          }
          function d(b) {
            if (a) {
              if (s && b.type === "mousemove") {
                b.preventDefault(), b.stopPropagation();
                return;
              }
              var v = b.touches,
                w = v ? v[0].clientX : b.clientX,
                A = w - g;
              (g = w),
                Math.abs(A) > u &&
                  n &&
                  String(n()) === "" &&
                  (i("swipe", b, { direction: A > 0 ? "right" : "left" }), m());
            }
          }
          function h(b) {
            if (a && ((a = !1), s && b.type === "mouseup")) {
              b.preventDefault(), b.stopPropagation(), (s = !1);
              return;
            }
          }
          function m() {
            a = !1;
          }
          function E() {
            o.removeEventListener("touchstart", p, !1),
              o.removeEventListener("touchmove", d, !1),
              o.removeEventListener("touchend", h, !1),
              o.removeEventListener("touchcancel", m, !1),
              o.removeEventListener("mousedown", p, !1),
              o.removeEventListener("mousemove", d, !1),
              o.removeEventListener("mouseup", h, !1),
              o.removeEventListener("mouseout", m, !1),
              (o = null);
          }
          this.destroy = E;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var WE = f((ga) => {
    "use strict";
    Object.defineProperty(ga, "__esModule", { value: !0 });
    Object.defineProperty(ga, "default", {
      enumerable: !0,
      get: function () {
        return XF;
      },
    });
    function XF(e, t, n, r, i, o, a, s, u, l, g, p, d) {
      return function (h) {
        e(h);
        var m = h.form,
          E = {
            name: m.attr("data-name") || m.attr("name") || "Untitled Form",
            pageId: m.attr("data-wf-page-id") || "",
            elementId: m.attr("data-wf-element-id") || "",
            source: t.href,
            test: n.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              m.html()
            ),
            trackingCookies: r(),
          };
        let b = m.attr("data-wf-flow");
        b && (E.wfFlow = b), i(h);
        var v = o(m, E.fields);
        if (v) return a(v);
        if (((E.fileUploads = s(m)), u(h), !l)) {
          g(h);
          return;
        }
        p.ajax({
          url: d,
          type: "POST",
          data: E,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (w) {
            w && w.code === 200 && (h.success = !0), g(h);
          })
          .fail(function () {
            g(h);
          });
      };
    }
  });
  var KE = f((zX, zE) => {
    "use strict";
    var Kr = Ne(),
      VF = (e, t, n, r) => {
        let i = document.createElement("div");
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (o) {
              n(o);
            },
            "error-callback": function () {
              r();
            },
          });
      };
    Kr.define(
      "forms",
      (zE.exports = function (e, t) {
        let n = "TURNSTILE_LOADED";
        var r = {},
          i = e(document),
          o,
          a = window.location,
          s = window.XDomainRequest && !window.atob,
          u = ".w-form",
          l,
          g = /e(-)?mail/i,
          p = /^\S+@\S+$/,
          d = window.alert,
          h = Kr.env(),
          m,
          E,
          b;
        let v = i.find("[data-turnstile-sitekey]").data("turnstile-sitekey"),
          w;
        var A = /list-manage[1-9]?.com/i,
          R = t.debounce(function () {
            d(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              x(), C(), !h && !m && k();
            };
        function C() {
          (l = e("html").attr("data-wf-site")),
            (E = "https://webflow.com/api/v1/form/" + l),
            s &&
              E.indexOf("https://webflow.com") >= 0 &&
              (E = E.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (b = `${E}/signFile`),
            (o = e(u + " form")),
            o.length && o.each(U);
        }
        function x() {
          v &&
            ((w = document.createElement("script")),
            (w.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"),
            document.head.appendChild(w),
            (w.onload = () => {
              i.trigger(n);
            }));
        }
        function U(I, X) {
          var q = e(X),
            G = e.data(X, u);
          G || (G = e.data(X, u, { form: q })), H(G);
          var j = q.closest("div.w-form");
          (G.done = j.find("> .w-form-done")),
            (G.fail = j.find("> .w-form-fail")),
            (G.fileUploads = j.find(".w-file-upload")),
            G.fileUploads.each(function (z) {
              ae(z, G);
            }),
            v &&
              ((G.wait = !1),
              K(G),
              i.on(typeof turnstile < "u" ? "ready" : n, function () {
                VF(
                  v,
                  X,
                  (z) => {
                    (G.turnstileToken = z), H(G);
                  },
                  () => {
                    K(G);
                  }
                );
              }));
          var Y =
            G.form.attr("aria-label") || G.form.attr("data-name") || "Form";
          G.done.attr("aria-label") || G.form.attr("aria-label", Y),
            G.done.attr("tabindex", "-1"),
            G.done.attr("role", "region"),
            G.done.attr("aria-label") ||
              G.done.attr("aria-label", Y + " success"),
            G.fail.attr("tabindex", "-1"),
            G.fail.attr("role", "region"),
            G.fail.attr("aria-label") ||
              G.fail.attr("aria-label", Y + " failure");
          var re = (G.action = q.attr("action"));
          if (
            ((G.handler = null),
            (G.redirect = q.attr("data-redirect")),
            A.test(re))
          ) {
            G.handler = D;
            return;
          }
          if (!re) {
            if (l) {
              G.handler = (() => {
                let z = WE().default;
                return z(H, a, Kr, L, B, ee, d, M, K, l, N, e, E);
              })();
              return;
            }
            R();
          }
        }
        function k() {
          (m = !0),
            i.on("submit", u + " form", function (z) {
              var Z = e.data(this, u);
              Z.handler && ((Z.evt = z), Z.handler(Z));
            });
          let I = ".w-checkbox-input",
            X = ".w-radio-input",
            q = "w--redirected-checked",
            G = "w--redirected-focus",
            j = "w--redirected-focus-visible",
            Y = ":focus-visible, [data-wf-focus-visible]",
            re = [
              ["checkbox", I],
              ["radio", X],
            ];
          i.on(
            "change",
            u + ' form input[type="checkbox"]:not(' + I + ")",
            (z) => {
              e(z.target).siblings(I).toggleClass(q);
            }
          ),
            i.on("change", u + ' form input[type="radio"]', (z) => {
              e(`input[name="${z.target.name}"]:not(${I})`).map((Ee, _t) =>
                e(_t).siblings(X).removeClass(q)
              );
              let Z = e(z.target);
              Z.hasClass("w-radio-input") || Z.siblings(X).addClass(q);
            }),
            re.forEach(([z, Z]) => {
              i.on(
                "focus",
                u + ` form input[type="${z}"]:not(` + Z + ")",
                (Ee) => {
                  e(Ee.target).siblings(Z).addClass(G),
                    e(Ee.target).filter(Y).siblings(Z).addClass(j);
                }
              ),
                i.on(
                  "blur",
                  u + ` form input[type="${z}"]:not(` + Z + ")",
                  (Ee) => {
                    e(Ee.target).siblings(Z).removeClass(`${G} ${j}`);
                  }
                );
            });
        }
        function H(I) {
          var X = (I.btn = I.form.find(':input[type="submit"]'));
          (I.wait = I.btn.attr("data-wait") || null),
            (I.success = !1),
            X.prop("disabled", !!(v && !I.turnstileToken)),
            I.label && X.val(I.label);
        }
        function K(I) {
          var X = I.btn,
            q = I.wait;
          X.prop("disabled", !0), q && ((I.label = X.val()), X.val(q));
        }
        function ee(I, X) {
          var q = null;
          return (
            (X = X || {}),
            I.find(':input:not([type="submit"]):not([type="file"])').each(
              function (G, j) {
                var Y = e(j),
                  re = Y.attr("type"),
                  z =
                    Y.attr("data-name") || Y.attr("name") || "Field " + (G + 1);
                z = encodeURIComponent(z);
                var Z = Y.val();
                if (re === "checkbox") Z = Y.is(":checked");
                else if (re === "radio") {
                  if (X[z] === null || typeof X[z] == "string") return;
                  Z =
                    I.find(
                      'input[name="' + Y.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof Z == "string" && (Z = e.trim(Z)),
                  (X[z] = Z),
                  (q = q || W(Y, re, z, Z));
              }
            ),
            q
          );
        }
        function M(I) {
          var X = {};
          return (
            I.find(':input[type="file"]').each(function (q, G) {
              var j = e(G),
                Y = j.attr("data-name") || j.attr("name") || "File " + (q + 1),
                re = j.attr("data-value");
              typeof re == "string" && (re = e.trim(re)), (X[Y] = re);
            }),
            X
          );
        }
        let T = { _mkto_trk: "marketo" };
        function L() {
          return document.cookie.split("; ").reduce(function (X, q) {
            let G = q.split("="),
              j = G[0];
            if (j in T) {
              let Y = T[j],
                re = G.slice(1).join("=");
              X[Y] = re;
            }
            return X;
          }, {});
        }
        function W(I, X, q, G) {
          var j = null;
          return (
            X === "password"
              ? (j = "Passwords cannot be submitted.")
              : I.attr("required")
              ? G
                ? g.test(I.attr("type")) &&
                  (p.test(G) ||
                    (j = "Please enter a valid email address for: " + q))
                : (j = "Please fill out the required field: " + q)
              : q === "g-recaptcha-response" &&
                !G &&
                (j = "Please confirm you\u2019re not a robot."),
            j
          );
        }
        function V(I) {
          B(I), N(I);
        }
        function D(I) {
          H(I);
          var X = I.form,
            q = {};
          if (/^https/.test(a.href) && !/^https/.test(I.action)) {
            X.attr("method", "post");
            return;
          }
          B(I);
          var G = ee(X, q);
          if (G) return d(G);
          K(I);
          var j;
          t.each(q, function (Z, Ee) {
            g.test(Ee) && (q.EMAIL = Z),
              /^((full[ _-]?)?name)$/i.test(Ee) && (j = Z),
              /^(first[ _-]?name)$/i.test(Ee) && (q.FNAME = Z),
              /^(last[ _-]?name)$/i.test(Ee) && (q.LNAME = Z);
          }),
            j &&
              !q.FNAME &&
              ((j = j.split(" ")),
              (q.FNAME = j[0]),
              (q.LNAME = q.LNAME || j[1]));
          var Y = I.action.replace("/post?", "/post-json?") + "&c=?",
            re = Y.indexOf("u=") + 2;
          re = Y.substring(re, Y.indexOf("&", re));
          var z = Y.indexOf("id=") + 3;
          (z = Y.substring(z, Y.indexOf("&", z))),
            (q["b_" + re + "_" + z] = ""),
            e
              .ajax({ url: Y, data: q, dataType: "jsonp" })
              .done(function (Z) {
                (I.success = Z.result === "success" || /already/.test(Z.msg)),
                  I.success || console.info("MailChimp error: " + Z.msg),
                  N(I);
              })
              .fail(function () {
                N(I);
              });
        }
        function N(I) {
          var X = I.form,
            q = I.redirect,
            G = I.success;
          if (G && q) {
            Kr.location(q);
            return;
          }
          I.done.toggle(G),
            I.fail.toggle(!G),
            G ? I.done.focus() : I.fail.focus(),
            X.toggle(!G),
            H(I);
        }
        function B(I) {
          I.evt && I.evt.preventDefault(), (I.evt = null);
        }
        function ae(I, X) {
          if (!X.fileUploads || !X.fileUploads[I]) return;
          var q,
            G = e(X.fileUploads[I]),
            j = G.find("> .w-file-upload-default"),
            Y = G.find("> .w-file-upload-uploading"),
            re = G.find("> .w-file-upload-success"),
            z = G.find("> .w-file-upload-error"),
            Z = j.find(".w-file-upload-input"),
            Ee = j.find(".w-file-upload-label"),
            _t = Ee.children(),
            it = z.find(".w-file-upload-error-msg"),
            He = re.find(".w-file-upload-file"),
            Rn = re.find(".w-file-remove-link"),
            $t = He.find(".w-file-upload-file-name"),
            c = it.attr("data-w-size-error"),
            y = it.attr("data-w-type-error"),
            _ = it.attr("data-w-generic-error");
          if (
            (h ||
              Ee.on("click keydown", function (Q) {
                (Q.type === "keydown" && Q.which !== 13 && Q.which !== 32) ||
                  (Q.preventDefault(), Z.click());
              }),
            Ee.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            Rn.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            h)
          )
            Z.on("click", function (Q) {
              Q.preventDefault();
            }),
              Ee.on("click", function (Q) {
                Q.preventDefault();
              }),
              _t.on("click", function (Q) {
                Q.preventDefault();
              });
          else {
            Rn.on("click keydown", function (Q) {
              if (Q.type === "keydown") {
                if (Q.which !== 13 && Q.which !== 32) return;
                Q.preventDefault();
              }
              Z.removeAttr("data-value"),
                Z.val(""),
                $t.html(""),
                j.toggle(!0),
                re.toggle(!1),
                Ee.focus();
            }),
              Z.on("change", function (Q) {
                (q = Q.target && Q.target.files && Q.target.files[0]),
                  q &&
                    (j.toggle(!1),
                    z.toggle(!1),
                    Y.toggle(!0),
                    Y.focus(),
                    $t.text(q.name),
                    te() || K(X),
                    (X.fileUploads[I].uploading = !0),
                    ce(q, O));
              });
            var S = Ee.outerHeight();
            Z.height(S), Z.width(1);
          }
          function P(Q) {
            var F = Q.responseJSON && Q.responseJSON.msg,
              ne = _;
            typeof F == "string" && F.indexOf("InvalidFileTypeError") === 0
              ? (ne = y)
              : typeof F == "string" &&
                F.indexOf("MaxFileSizeError") === 0 &&
                (ne = c),
              it.text(ne),
              Z.removeAttr("data-value"),
              Z.val(""),
              Y.toggle(!1),
              j.toggle(!0),
              z.toggle(!0),
              z.focus(),
              (X.fileUploads[I].uploading = !1),
              te() || H(X);
          }
          function O(Q, F) {
            if (Q) return P(Q);
            var ne = F.fileName,
              oe = F.postData,
              ye = F.fileId,
              Le = F.s3Url;
            Z.attr("data-value", ye), ie(Le, oe, q, ne, $);
          }
          function $(Q) {
            if (Q) return P(Q);
            Y.toggle(!1),
              re.css("display", "inline-block"),
              re.focus(),
              (X.fileUploads[I].uploading = !1),
              te() || H(X);
          }
          function te() {
            var Q = (X.fileUploads && X.fileUploads.toArray()) || [];
            return Q.some(function (F) {
              return F.uploading;
            });
          }
        }
        function ce(I, X) {
          var q = new URLSearchParams({ name: I.name, size: I.size });
          e.ajax({ type: "GET", url: `${b}?${q}`, crossDomain: !0 })
            .done(function (G) {
              X(null, G);
            })
            .fail(function (G) {
              X(G);
            });
        }
        function ie(I, X, q, G, j) {
          var Y = new FormData();
          for (var re in X) Y.append(re, X[re]);
          Y.append("file", q, G),
            e
              .ajax({
                type: "POST",
                url: I,
                data: Y,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                j(null);
              })
              .fail(function (z) {
                j(z);
              });
        }
        return r;
      })
    );
  });
  La();
  Da();
  qa();
  Xa();
  Ba();
  Fn();
  za();
  $a();
  GE();
  VE();
  BE();
  HE();
  KE();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require("ix").init([
  {
    slug: "new-interaction",
    name: "New Interaction",
    value: { style: {}, triggers: [] },
  },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-973": {
      id: "e-973",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-30", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d9661271520a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d9661271520a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-30-p",
          selectedAxis: "X_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-30-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "VIEWPORT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1595423183186,
    },
    "e-1346": {
      id: "e-1346",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-33", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".button",
        originalId:
          "62b9596469a13e04a8e14572|08f05cee-629f-53ac-b7e7-eb0bd861c054",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".button",
          originalId:
            "62b9596469a13e04a8e14572|08f05cee-629f-53ac-b7e7-eb0bd861c054",
          appliesTo: "CLASS",
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-33-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-33-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1656657702795,
    },
    "e-1356": {
      id: "e-1356",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1357",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".underline-links",
        originalId: "d2e2c4db-a338-3697-b72c-31b7f5f97230",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".underline-links",
          originalId: "d2e2c4db-a338-3697-b72c-31b7f5f97230",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699988453325,
    },
    "e-1357": {
      id: "e-1357",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1356",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".underline-links",
        originalId: "d2e2c4db-a338-3697-b72c-31b7f5f97230",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".underline-links",
          originalId: "d2e2c4db-a338-3697-b72c-31b7f5f97230",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1699988453325,
    },
    "e-1385": {
      id: "e-1385",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-71",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1386",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b10efb4026d96612715227",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d96612715227",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703022055939,
    },
    "e-1389": {
      id: "e-1389",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-71",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1390",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b10efb4026d96612715238",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d96612715238",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703278670452,
    },
    "e-1391": {
      id: "e-1391",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-71",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1392",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b10efb4026d9661271522b",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d9661271522b",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1703617793259,
    },
    "e-1393": {
      id: "e-1393",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-71",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1394",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b10efb4026d9661271522a",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d9661271522a",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1704207781849,
    },
    "e-1399": {
      id: "e-1399",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-75",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1400",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".footer",
        originalId: "cf473283-8ebc-2801-b95f-44ccfe405caa",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".footer",
          originalId: "cf473283-8ebc-2801-b95f-44ccfe405caa",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705268617001,
    },
    "e-1401": {
      id: "e-1401",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-71",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1402",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "f1a2b3c4-d5e6-7890-abcd-ef1234567890",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "f1a2b3c4-d5e6-7890-abcd-ef1234567890",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705269628981,
    },
    "e-1403": {
      id: "e-1403",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-76",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1404",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b10efb4026d9661271521d",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d9661271521d",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705506235581,
    },
    "e-1405": {
      id: "e-1405",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-77",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1406",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".testimony-item",
        originalId:
          "65b10efb4026d9661271521d|bb3040b6-ddf4-14c1-3948-34379589b553",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimony-item",
          originalId:
            "65b10efb4026d9661271521d|bb3040b6-ddf4-14c1-3948-34379589b553",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705579112402,
    },
    "e-1406": {
      id: "e-1406",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-78",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1405",
        },
      },
      mediaQueries: ["main", "medium"],
      target: {
        selector: ".testimony-item",
        originalId:
          "65b10efb4026d9661271521d|bb3040b6-ddf4-14c1-3948-34379589b553",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimony-item",
          originalId:
            "65b10efb4026d9661271521d|bb3040b6-ddf4-14c1-3948-34379589b553",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705579112403,
    },
    "e-1409": {
      id: "e-1409",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-80",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1410",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".testimony-item",
        originalId:
          "65b10efb4026d9661271521d|bb3040b6-ddf4-14c1-3948-34379589b553",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".testimony-item",
          originalId:
            "65b10efb4026d9661271521d|bb3040b6-ddf4-14c1-3948-34379589b553",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705611976039,
    },
    "e-1411": {
      id: "e-1411",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-79",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1412",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".divider",
        originalId:
          "65b10efb4026d9661271521d|d6fedc02-3174-3723-40a0-4782796baa3a",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".divider",
          originalId:
            "65b10efb4026d9661271521d|d6fedc02-3174-3723-40a0-4782796baa3a",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705612165917,
    },
    "e-1413": {
      id: "e-1413",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-81",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1414",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".underline-links.menu",
        originalId: "ca87effe-dfa5-1f64-5f7a-bd15088d23e0",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".underline-links.menu",
          originalId: "ca87effe-dfa5-1f64-5f7a-bd15088d23e0",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705691361786,
    },
    "e-1414": {
      id: "e-1414",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-82",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1413",
        },
      },
      mediaQueries: ["main"],
      target: {
        selector: ".underline-links.menu",
        originalId: "ca87effe-dfa5-1f64-5f7a-bd15088d23e0",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".underline-links.menu",
          originalId: "ca87effe-dfa5-1f64-5f7a-bd15088d23e0",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705691361787,
    },
    "e-1417": {
      id: "e-1417",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-81",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1418",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".underline-links.open",
        originalId: "ca87effe-dfa5-1f64-5f7a-bd15088d23e0",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".underline-links.open",
          originalId: "ca87effe-dfa5-1f64-5f7a-bd15088d23e0",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705696199627,
    },
    "e-1419": {
      id: "e-1419",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-82",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1420",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".underline-links.close",
        originalId: "ca87effe-dfa5-1f64-5f7a-bd15088d23e4",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".underline-links.close",
          originalId: "ca87effe-dfa5-1f64-5f7a-bd15088d23e4",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705698429649,
    },
    "e-1425": {
      id: "e-1425",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-83",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1426",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "ca87effe-dfa5-1f64-5f7a-bd15088d240a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "ca87effe-dfa5-1f64-5f7a-bd15088d240a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705945810453,
    },
    "e-1426": {
      id: "e-1426",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-84",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1425",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "ca87effe-dfa5-1f64-5f7a-bd15088d240a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "ca87effe-dfa5-1f64-5f7a-bd15088d240a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1705945810454,
    },
    "e-1427": {
      id: "e-1427",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-85",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1428",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "ca87effe-dfa5-1f64-5f7a-bd15088d23ef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "ca87effe-dfa5-1f64-5f7a-bd15088d23ef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706021443504,
    },
    "e-1428": {
      id: "e-1428",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-86",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1427",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "ca87effe-dfa5-1f64-5f7a-bd15088d23ef",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "ca87effe-dfa5-1f64-5f7a-bd15088d23ef",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706021443504,
    },
    "e-1429": {
      id: "e-1429",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-87",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1430",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "ca87effe-dfa5-1f64-5f7a-bd15088d243d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "ca87effe-dfa5-1f64-5f7a-bd15088d243d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706022331959,
    },
    "e-1430": {
      id: "e-1430",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-88",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1429",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "ca87effe-dfa5-1f64-5f7a-bd15088d243d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "ca87effe-dfa5-1f64-5f7a-bd15088d243d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706022331959,
    },
    "e-1437": {
      id: "e-1437",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-83",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1438",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "277ef4ec-cdec-afbb-fed3-df25b9029e7e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "277ef4ec-cdec-afbb-fed3-df25b9029e7e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706023752155,
    },
    "e-1438": {
      id: "e-1438",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-84",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1437",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "277ef4ec-cdec-afbb-fed3-df25b9029e7e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "277ef4ec-cdec-afbb-fed3-df25b9029e7e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706023752155,
    },
    "e-1439": {
      id: "e-1439",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-85",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1440",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "277ef4ec-cdec-afbb-fed3-df25b9029e63",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "277ef4ec-cdec-afbb-fed3-df25b9029e63",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706023752155,
    },
    "e-1440": {
      id: "e-1440",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-86",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1439",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "277ef4ec-cdec-afbb-fed3-df25b9029e63",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "277ef4ec-cdec-afbb-fed3-df25b9029e63",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706023752155,
    },
    "e-1441": {
      id: "e-1441",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-87",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1442",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "277ef4ec-cdec-afbb-fed3-df25b9029eb1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "277ef4ec-cdec-afbb-fed3-df25b9029eb1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706023752155,
    },
    "e-1442": {
      id: "e-1442",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-88",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1441",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "277ef4ec-cdec-afbb-fed3-df25b9029eb1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "277ef4ec-cdec-afbb-fed3-df25b9029eb1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706023752155,
    },
    "e-1447": {
      id: "e-1447",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-72",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1448",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "277ef4ec-cdec-afbb-fed3-df25b9029e17",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "277ef4ec-cdec-afbb-fed3-df25b9029e17",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706023800537,
    },
    "e-1448": {
      id: "e-1448",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-73",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1447",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "277ef4ec-cdec-afbb-fed3-df25b9029e17",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "277ef4ec-cdec-afbb-fed3-df25b9029e17",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706023800537,
    },
    "e-1451": {
      id: "e-1451",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-89", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b34",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b34",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-89-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1706194829205,
    },
    "e-1452": {
      id: "e-1452",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-69",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1453",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706194829205,
    },
    "e-1453": {
      id: "e-1453",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-70",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1452",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b62",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b62",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706194829205,
    },
    "e-1454": {
      id: "e-1454",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-51",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1455",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b67",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b67",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706194829205,
    },
    "e-1455": {
      id: "e-1455",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-52",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1454",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b67",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b67",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706194829205,
    },
    "e-1456": {
      id: "e-1456",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-53",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1457",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b6c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b6c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706194829205,
    },
    "e-1457": {
      id: "e-1457",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1456",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b6c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b6c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706194829205,
    },
    "e-1458": {
      id: "e-1458",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1459",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b71",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b71",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706194829205,
    },
    "e-1459": {
      id: "e-1459",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1458",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b71",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b71",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706194829205,
    },
    "e-1460": {
      id: "e-1460",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1461",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b76",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b76",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706194829205,
    },
    "e-1461": {
      id: "e-1461",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-58",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1460",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b76",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b76",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706194829205,
    },
    "e-1462": {
      id: "e-1462",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-59",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1463",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b7b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b7b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706194829205,
    },
    "e-1463": {
      id: "e-1463",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-60",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1462",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b7b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b7b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706194829205,
    },
    "e-1479": {
      id: "e-1479",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-91",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1480",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b122dcfcadbe2eb4f4c7f2",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b122dcfcadbe2eb4f4c7f2",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706633951205,
    },
    "e-1481": {
      id: "e-1481",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLLING_IN_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-50", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5c98",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5c98",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-50-p",
          smoothing: 50,
          startsEntering: false,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50,
        },
      ],
      createdOn: 1706729048246,
    },
    "e-1482": {
      id: "e-1482",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-69",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1483",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cc6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cc6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729048246,
    },
    "e-1483": {
      id: "e-1483",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-70",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1482",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cc6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cc6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729048246,
    },
    "e-1484": {
      id: "e-1484",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-51",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1485",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5ccb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5ccb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729048246,
    },
    "e-1485": {
      id: "e-1485",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-52",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1484",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5ccb",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5ccb",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729048246,
    },
    "e-1486": {
      id: "e-1486",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-53",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1487",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cd0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cd0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729048246,
    },
    "e-1487": {
      id: "e-1487",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1486",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cd0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cd0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729048246,
    },
    "e-1488": {
      id: "e-1488",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1489",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cd5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cd5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729048246,
    },
    "e-1489": {
      id: "e-1489",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-56",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1488",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cd5",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cd5",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729048246,
    },
    "e-1490": {
      id: "e-1490",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-57",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1491",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cda",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cda",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729048246,
    },
    "e-1491": {
      id: "e-1491",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-58",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1490",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cda",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cda",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729048246,
    },
    "e-1492": {
      id: "e-1492",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-59",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1493",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cdf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cdf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729048246,
    },
    "e-1493": {
      id: "e-1493",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-60",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1492",
        },
      },
      mediaQueries: ["main"],
      target: {
        id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cdf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9|e614cebe-4960-cafb-5540-3ae6417b5cdf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729048246,
    },
    "e-1494": {
      id: "e-1494",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-66",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1495",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "65b10efb4026d966127151c9",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "65b10efb4026d966127151c9",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1706729095986,
    },
    "e-1496": {
      id: "e-1496",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-71",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-1497",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "674aa2c78357cd742ecad2e8",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1732944584201,
    },
  },
  actionLists: {
    "a-30": {
      id: "a-30",
      title: "cursor animation - inner dot",
      continuousParameterGroups: [
        {
          id: "a-30-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-30-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    xValue: -50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-30-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    xValue: 50,
                    xUnit: "VW",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-30-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-30-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    yValue: -50,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-30-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    yValue: 50,
                    xUnit: "PX",
                    yUnit: "VH",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1589816402301,
    },
    "a-33": {
      id: "a-33",
      title: "Button Mouse",
      continuousParameterGroups: [
        {
          id: "a-33-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-33-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    xValue: -25,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-33-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    xValue: 25,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-33-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-33-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    yValue: -25,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-33-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {},
                    yValue: 25,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1656652776102,
    },
    "a-34": {
      id: "a-34",
      title: "Underline - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699651581672,
    },
    "a-35": {
      id: "a-35",
      title: "Underline - Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 350,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-35-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699651664799,
    },
    "a-71": {
      id: "a-71",
      title: "Loading - Projects",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-71-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._10",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "3b261295-ecfe-384d-83f8-7037247868bf",
                  ],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._10",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "3b261295-ecfe-384d-83f8-7037247868bf",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._11",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "f158bc58-fead-b64f-86bb-eaae17d49fc0",
                  ],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._11",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "f158bc58-fead-b64f-86bb-eaae17d49fc0",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._12",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9a032165-f40b-317f-ed50-af073af7b4a5",
                  ],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._12",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9a032165-f40b-317f-ed50-af073af7b4a5",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-26",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._13",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "09c59371-6dc4-c40b-2705-3ad95715728e",
                  ],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-27",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._13",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "09c59371-6dc4-c40b-2705-3ad95715728e",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-30",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._14",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9d650bc4-fcb2-4070-af17-7aa812cd1fe5",
                  ],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-31",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._14",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9d650bc4-fcb2-4070-af17-7aa812cd1fe5",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-46",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._15",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9ec3e8d5-f917-c244-c1d5-2a1ba61d6447",
                  ],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-47",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._15",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9ec3e8d5-f917-c244-c1d5-2a1ba61d6447",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-50",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._16",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "68ce3edf-7cfe-0b85-21af-bcdec2136ddc",
                  ],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-51",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._16",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "68ce3edf-7cfe-0b85-21af-bcdec2136ddc",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-54",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._17",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "bf4cb495-ecde-9687-db40-8a171d8016a2",
                  ],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-55",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._17",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "bf4cb495-ecde-9687-db40-8a171d8016a2",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-58",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._18",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "32e72a04-3cb4-d775-02dd-61b9a198432b",
                  ],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-59",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._18",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "32e72a04-3cb4-d775-02dd-61b9a198432b",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-62",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".underline-links.back",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "981cf703-385e-969e-c6f4-aa7016352acc",
                  ],
                },
                xValue: null,
                yValue: 110,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-63",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".underline-links.back",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "981cf703-385e-969e-c6f4-aa7016352acc",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-66",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".underline-links.theme",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "c296db4b-ed21-d1a4-026d-9bc33ef87632",
                  ],
                },
                xValue: null,
                yValue: 110,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-67",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".underline-links.theme",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "c296db4b-ed21-d1a4-026d-9bc33ef87632",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-70",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".underline-links.open",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "2e449544-bffe-65dc-127f-b05930edfb6e",
                  ],
                },
                xValue: null,
                yValue: 110,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-71",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".underline-links.open",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "2e449544-bffe-65dc-127f-b05930edfb6e",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-74",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".a.align-right",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "60c8b838-a67e-b28d-7046-f49bfc932af1",
                  ],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-75",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".a.align-right",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "60c8b838-a67e-b28d-7046-f49bfc932af1",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-71-n-78",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".text-color-tertiary",
                  selectorGuids: ["d302a968-0c38-fc26-1e97-7019c1834ccb"],
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-79",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".text-color-tertiary",
                  selectorGuids: ["d302a968-0c38-fc26-1e97-7019c1834ccb"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-71-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._10",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "3b261295-ecfe-384d-83f8-7037247868bf",
                  ],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._10",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "3b261295-ecfe-384d-83f8-7037247868bf",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._11",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "f158bc58-fead-b64f-86bb-eaae17d49fc0",
                  ],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._11",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "f158bc58-fead-b64f-86bb-eaae17d49fc0",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._12",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9a032165-f40b-317f-ed50-af073af7b4a5",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._12",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9a032165-f40b-317f-ed50-af073af7b4a5",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._13",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "09c59371-6dc4-c40b-2705-3ad95715728e",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-29",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._13",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "09c59371-6dc4-c40b-2705-3ad95715728e",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-32",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._14",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9d650bc4-fcb2-4070-af17-7aa812cd1fe5",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-33",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._14",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9d650bc4-fcb2-4070-af17-7aa812cd1fe5",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-49",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._15",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9ec3e8d5-f917-c244-c1d5-2a1ba61d6447",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-48",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._15",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9ec3e8d5-f917-c244-c1d5-2a1ba61d6447",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-52",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._16",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "68ce3edf-7cfe-0b85-21af-bcdec2136ddc",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-53",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 1050,
                target: {
                  selector: ".span._16",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "68ce3edf-7cfe-0b85-21af-bcdec2136ddc",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-57",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 350,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._17",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "bf4cb495-ecde-9687-db40-8a171d8016a2",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-56",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 350,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._17",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "bf4cb495-ecde-9687-db40-8a171d8016a2",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-64",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 350,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".underline-links.back",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "981cf703-385e-969e-c6f4-aa7016352acc",
                  ],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-65",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 350,
                easing: "outCirc",
                duration: 600,
                target: {
                  selector: ".underline-links.back",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "981cf703-385e-969e-c6f4-aa7016352acc",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-61",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".span._18",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "32e72a04-3cb4-d775-02dd-61b9a198432b",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-60",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 1050,
                target: {
                  selector: ".span._18",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "32e72a04-3cb4-d775-02dd-61b9a198432b",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-68",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 450,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".underline-links.theme",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "c296db4b-ed21-d1a4-026d-9bc33ef87632",
                  ],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-69",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 450,
                easing: "outCirc",
                duration: 600,
                target: {
                  selector: ".underline-links.theme",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "c296db4b-ed21-d1a4-026d-9bc33ef87632",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-72",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 550,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".underline-links.open",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "2e449544-bffe-65dc-127f-b05930edfb6e",
                  ],
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-73",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 550,
                easing: "outCirc",
                duration: 600,
                target: {
                  selector: ".underline-links.open",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "2e449544-bffe-65dc-127f-b05930edfb6e",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-76",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".a.align-right",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "60c8b838-a67e-b28d-7046-f49bfc932af1",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-77",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "outCirc",
                duration: 1050,
                target: {
                  selector: ".a.align-right",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "60c8b838-a67e-b28d-7046-f49bfc932af1",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-71-n-80",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "outCirc",
                duration: 1000,
                target: {
                  selector: ".text-color-tertiary",
                  selectorGuids: ["d302a968-0c38-fc26-1e97-7019c1834ccb"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-71-n-81",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "outCirc",
                duration: 1050,
                target: {
                  selector: ".text-color-tertiary",
                  selectorGuids: ["d302a968-0c38-fc26-1e97-7019c1834ccb"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1701361188825,
    },
    "a-75": {
      id: "a-75",
      title: "Footer",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-75-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405caf",
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-75-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405caf",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-75-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cb4",
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-75-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cb4",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-75-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cb9",
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-75-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cb9",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-75-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cbf",
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-75-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cbf",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-75-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "487eb7ec-65bb-3f48-687e-581adea6fa2e",
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-75-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "487eb7ec-65bb-3f48-687e-581adea6fa2e",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-75-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cc9",
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-75-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cc9",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-75-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405caf",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-75-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 850,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405caf",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-75-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cb4",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-75-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 850,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cb4",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-75-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outCirc",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cb9",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-75-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outCirc",
                duration: 850,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cb9",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-75-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outCirc",
                duration: 850,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cbf",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-75-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outCirc",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cbf",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-75-n-24",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cc9",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-75-n-23",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 850,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "cf473283-8ebc-2801-b95f-44ccfe405cc9",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-75-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 850,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "487eb7ec-65bb-3f48-687e-581adea6fa2e",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-75-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 1000,
                target: {
                  useEventTarget: "CHILDREN",
                  id: "487eb7ec-65bb-3f48-687e-581adea6fa2e",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705268624704,
    },
    "a-76": {
      id: "a-76",
      title: "Loading - About",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-76-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|e57fde28-90c1-9931-7e3a-334c9b3b17e3",
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|e57fde28-90c1-9931-7e3a-334c9b3b17e3",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-76-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|0f0bcb20-fe2e-3ebb-1a30-5b9f52a715c2",
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|0f0bcb20-fe2e-3ebb-1a30-5b9f52a715c2",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-76-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e16" },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e16" },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-76-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "776d07bb-b571-0a84-d159-19048b077844" },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "776d07bb-b571-0a84-d159-19048b077844" },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-76-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e54" },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e54" },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-76-n-33",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|2c2d4f1f-75b8-7589-d0da-a231950db349",
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|2c2d4f1f-75b8-7589-d0da-a231950db349",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-76-n-37",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|ab8c6c1d-29a5-049a-b0fa-b2ee22932c0b",
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-38",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|ab8c6c1d-29a5-049a-b0fa-b2ee22932c0b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-76-n-41",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|3f9562ea-2f92-039b-40c5-4e8f1678605a",
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-42",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|3f9562ea-2f92-039b-40c5-4e8f1678605a",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-76-n-45",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|d7433e4a-6899-c51c-76dd-bcea8d50bbe5",
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-46",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|d7433e4a-6899-c51c-76dd-bcea8d50bbe5",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-76-n-49",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|483a61f6-5e43-e492-ed44-f647e9084489",
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-50",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d9661271521d|483a61f6-5e43-e492-ed44-f647e9084489",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-76-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d9661271521d|e57fde28-90c1-9931-7e3a-334c9b3b17e3",
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d9661271521d|e57fde28-90c1-9931-7e3a-334c9b3b17e3",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-76-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d9661271521d|0f0bcb20-fe2e-3ebb-1a30-5b9f52a715c2",
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d9661271521d|0f0bcb20-fe2e-3ebb-1a30-5b9f52a715c2",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-76-n-35",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d9661271521d|2c2d4f1f-75b8-7589-d0da-a231950db349",
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-36",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d9661271521d|2c2d4f1f-75b8-7589-d0da-a231950db349",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-76-n-39",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d9661271521d|ab8c6c1d-29a5-049a-b0fa-b2ee22932c0b",
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-40",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d9661271521d|ab8c6c1d-29a5-049a-b0fa-b2ee22932c0b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-76-n-43",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d9661271521d|3f9562ea-2f92-039b-40c5-4e8f1678605a",
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-44",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d9661271521d|3f9562ea-2f92-039b-40c5-4e8f1678605a",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-76-n-52",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d9661271521d|483a61f6-5e43-e492-ed44-f647e9084489",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-51",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 600,
                target: {
                  id: "65b10efb4026d9661271521d|483a61f6-5e43-e492-ed44-f647e9084489",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-76-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "outCirc",
                duration: 800,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e16" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "outCirc",
                duration: 600,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e16" },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-76-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "outCirc",
                duration: 800,
                target: { id: "776d07bb-b571-0a84-d159-19048b077844" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-29",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "outCirc",
                duration: 600,
                target: { id: "776d07bb-b571-0a84-d159-19048b077844" },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-76-n-47",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "outCirc",
                duration: 600,
                target: {
                  id: "65b10efb4026d9661271521d|d7433e4a-6899-c51c-76dd-bcea8d50bbe5",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-76-n-48",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d9661271521d|d7433e4a-6899-c51c-76dd-bcea8d50bbe5",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "outCirc",
                duration: 800,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e54" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-76-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "outCirc",
                duration: 600,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e54" },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1701361188825,
    },
    "a-77": {
      id: "a-77",
      title: "Testimony - Hover In",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-77-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 250,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".testimony-item",
                  selectorGuids: ["c2ce7136-18ba-6370-c56b-cf89a6c69a44"],
                },
                value: 0.44,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705579118607,
    },
    "a-78": {
      id: "a-78",
      title: "Testimony - Hover Out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-78-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 100,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".testimony-item",
                  selectorGuids: ["c2ce7136-18ba-6370-c56b-cf89a6c69a44"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705579118607,
    },
    "a-80": {
      id: "a-80",
      title: "TÃ©moignage apparition",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-80-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".medium",
                  selectorGuids: ["c40944fb-4812-2e83-cfed-0b1939bf9f11"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-80-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".paragraph-2",
                  selectorGuids: ["7f1e7383-ff4c-d766-38b3-8c94b1371c74"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-80-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".medium",
                  selectorGuids: ["c40944fb-4812-2e83-cfed-0b1939bf9f11"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-80-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".paragraph-2",
                  selectorGuids: ["7f1e7383-ff4c-d766-38b3-8c94b1371c74"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705611980773,
    },
    "a-79": {
      id: "a-79",
      title: "Divider apparition",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-79-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".divider",
                  selectorGuids: ["5d7119df-ab9e-78fc-aeb1-0e5d3b5b52bb"],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-79-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 600,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".divider",
                  selectorGuids: ["5d7119df-ab9e-78fc-aeb1-0e5d3b5b52bb"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705611826042,
    },
    "a-81": {
      id: "a-81",
      title: "Menu - Open",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-81-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".bg-menu",
                  selectorGuids: ["4f7cbeb0-b137-08e1-f5ed-23297cd0c890"],
                },
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-81-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m1",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m1",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-8",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m2",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m2",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-12",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m3",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m3",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m4",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m4",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".a.menu.m",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "53f0a3db-ee6b-dc6a-70d1-41e47f9c2ffd",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".a.menu.m",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "53f0a3db-ee6b-dc6a-70d1-41e47f9c2ffd",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-24",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m5",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-25",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m5",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m6",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-29",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m6",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-32",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m7",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-33",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m7",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-36",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m8",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-37",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m8",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-40",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m9",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-41",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m9",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-44",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".a.menu.v",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "1bdf0462-e874-3a26-27f2-e5c81bc8c2b2",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-45",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".a.menu.v",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "1bdf0462-e874-3a26-27f2-e5c81bc8c2b2",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-48",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m10",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-49",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m10",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-52",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m11",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-53",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m11",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-56",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m12",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-57",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m12",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-60",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m13",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-61",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m13",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-64",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m14",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-65",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".h-menu.m14",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-68",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".a.menu.c",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "7aba6f9c-3039-1624-bf0b-017c1ee3ddee",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-69",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".a.menu.c",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "7aba6f9c-3039-1624-bf0b-017c1ee3ddee",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-72",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".paragraph-2.menu",
                  selectorGuids: [
                    "7f1e7383-ff4c-d766-38b3-8c94b1371c74",
                    "40af9222-e8ec-93f0-0593-e7d97ea12491",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-73",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".paragraph-2.menu",
                  selectorGuids: [
                    "7f1e7383-ff4c-d766-38b3-8c94b1371c74",
                    "40af9222-e8ec-93f0-0593-e7d97ea12491",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-76",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".underline-links.navlinks.mail",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "86487cfd-bdc8-3955-cecb-cb8242ff2d3c",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-77",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".underline-links.navlinks.mail",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "86487cfd-bdc8-3955-cecb-cb8242ff2d3c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-80",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".underline-links.navlinks.lk",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "a7cb9c5a-4ffe-44c6-51c6-f2317026fa58",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-81",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".underline-links.navlinks.lk",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "a7cb9c5a-4ffe-44c6-51c6-f2317026fa58",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-84",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".underline-links.navlinks.drb",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "b57ecdd0-c665-1020-34bc-16227d9839d9",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-85",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".underline-links.navlinks.drb",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "b57ecdd0-c665-1020-34bc-16227d9839d9",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-88",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".overlay",
                  selectorGuids: ["abb5a009-00e6-d0c9-b354-2d97e5ca1fb0"],
                },
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-81-n-94",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".underline-links.close",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "6af417fe-f4a2-b213-98a2-fa67eaa9e980",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-81-n-99",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".underline-links.close",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "6af417fe-f4a2-b213-98a2-fa67eaa9e980",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-100",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".underline-links.close",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "6af417fe-f4a2-b213-98a2-fa67eaa9e980",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-81-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu-wrapper",
                  selectorGuids: ["21ee0410-9298-d82d-a6ef-0aed52b3819f"],
                },
                value: "grid",
              },
            },
            {
              id: "a-81-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 900,
                target: {
                  selector: ".bg-menu",
                  selectorGuids: ["4f7cbeb0-b137-08e1-f5ed-23297cd0c890"],
                },
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-81-n-89",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 900,
                target: {
                  selector: ".overlay",
                  selectorGuids: ["abb5a009-00e6-d0c9-b354-2d97e5ca1fb0"],
                },
                yValue: 1,
                locked: false,
              },
            },
            {
              id: "a-81-n-97",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inCirc",
                duration: 300,
                target: {
                  selector: ".underline-links.open",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "2e449544-bffe-65dc-127f-b05930edfb6e",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-98",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inCirc",
                duration: 300,
                target: {
                  selector: ".underline-links.open",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "2e449544-bffe-65dc-127f-b05930edfb6e",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-81-n-23",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".a.menu.m",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "53f0a3db-ee6b-dc6a-70d1-41e47f9c2ffd",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m1",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m1",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".a.menu.m",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "53f0a3db-ee6b-dc6a-70d1-41e47f9c2ffd",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m2",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-10",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m2",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-91",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 300,
                easing: "",
                duration: 0,
                target: {
                  selector: ".underline-links.open",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "2e449544-bffe-65dc-127f-b05930edfb6e",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-81-n-93",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 300,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".underline-links.close",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "6af417fe-f4a2-b213-98a2-fa67eaa9e980",
                  ],
                },
                value: "inline-block",
              },
            },
            {
              id: "a-81-n-101",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 900,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".underline-links.close",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "6af417fe-f4a2-b213-98a2-fa67eaa9e980",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-102",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 900,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".underline-links.close",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "6af417fe-f4a2-b213-98a2-fa67eaa9e980",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 350,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m3",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-14",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 350,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m3",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-47",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".a.menu.v",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "1bdf0462-e874-3a26-27f2-e5c81bc8c2b2",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m4",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m4",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-26",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m5",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-27",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m5",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-46",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".a.menu.v",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "1bdf0462-e874-3a26-27f2-e5c81bc8c2b2",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 450,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m6",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 450,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m6",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-71",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".a.menu.c",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "7aba6f9c-3039-1624-bf0b-017c1ee3ddee",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-35",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m7",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m7",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-50",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m10",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-51",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m10",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-70",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".a.menu.c",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "7aba6f9c-3039-1624-bf0b-017c1ee3ddee",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-55",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 550,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m11",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-39",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 550,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m11",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-38",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 550,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m8",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-54",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 550,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m8",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-43",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m9",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-42",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m9",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-58",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m12",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-59",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m12",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-63",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 650,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m13",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-62",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 650,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m13",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-75",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 700,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".paragraph-2.menu",
                  selectorGuids: [
                    "7f1e7383-ff4c-d766-38b3-8c94b1371c74",
                    "40af9222-e8ec-93f0-0593-e7d97ea12491",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-66",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 700,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m14",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-67",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 700,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".h-menu.m14",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-74",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 700,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".paragraph-2.menu",
                  selectorGuids: [
                    "7f1e7383-ff4c-d766-38b3-8c94b1371c74",
                    "40af9222-e8ec-93f0-0593-e7d97ea12491",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-79",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 750,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".underline-links.navlinks.mail",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "86487cfd-bdc8-3955-cecb-cb8242ff2d3c",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-78",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 750,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".underline-links.navlinks.mail",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "86487cfd-bdc8-3955-cecb-cb8242ff2d3c",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-82",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 800,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".underline-links.navlinks.lk",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "a7cb9c5a-4ffe-44c6-51c6-f2317026fa58",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-83",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 800,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".underline-links.navlinks.lk",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "a7cb9c5a-4ffe-44c6-51c6-f2317026fa58",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-81-n-86",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 850,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".underline-links.navlinks.drb",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "b57ecdd0-c665-1020-34bc-16227d9839d9",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-81-n-87",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 850,
                easing: "outCirc",
                duration: 900,
                target: {
                  selector: ".underline-links.navlinks.drb",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "b57ecdd0-c665-1020-34bc-16227d9839d9",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705691373504,
    },
    "a-82": {
      id: "a-82",
      title: "Menu - Close",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-82-n-86",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".underline-links.navlinks.drb",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "b57ecdd0-c665-1020-34bc-16227d9839d9",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-87",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".underline-links.navlinks.drb",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "b57ecdd0-c665-1020-34bc-16227d9839d9",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-84",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".underline-links.navlinks.lk",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "a7cb9c5a-4ffe-44c6-51c6-f2317026fa58",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-85",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".underline-links.navlinks.lk",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "a7cb9c5a-4ffe-44c6-51c6-f2317026fa58",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-83",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".underline-links.navlinks.mail",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "86487cfd-bdc8-3955-cecb-cb8242ff2d3c",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-82",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".underline-links.navlinks.mail",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "579a74f9-4ecd-c736-2a07-a758d452144c",
                    "86487cfd-bdc8-3955-cecb-cb8242ff2d3c",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-78",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m14",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-79",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m14",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-80",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".paragraph-2.menu",
                  selectorGuids: [
                    "7f1e7383-ff4c-d766-38b3-8c94b1371c74",
                    "40af9222-e8ec-93f0-0593-e7d97ea12491",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-81",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".paragraph-2.menu",
                  selectorGuids: [
                    "7f1e7383-ff4c-d766-38b3-8c94b1371c74",
                    "40af9222-e8ec-93f0-0593-e7d97ea12491",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-77",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m13",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-76",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m13",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-72",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m9",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-73",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m9",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-74",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m12",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-75",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m12",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-68",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m8",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-69",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m8",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-70",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m11",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-71",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m11",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-62",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 350,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m7",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-63",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 350,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m7",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-64",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 350,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m10",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-65",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 350,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m10",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-66",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 350,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".a.menu.c",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "7aba6f9c-3039-1624-bf0b-017c1ee3ddee",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-67",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 350,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".a.menu.c",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "7aba6f9c-3039-1624-bf0b-017c1ee3ddee",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-61",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m6",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-60",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m6",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-54",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 450,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m4",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-55",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 450,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m4",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-56",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 450,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m5",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-57",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 450,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m5",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-58",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 450,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".a.menu.v",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "1bdf0462-e874-3a26-27f2-e5c81bc8c2b2",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-59",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 450,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".a.menu.v",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "1bdf0462-e874-3a26-27f2-e5c81bc8c2b2",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-53",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m3",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-52",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m3",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-51",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 550,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m2",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-50",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 550,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m2",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-46",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m1",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-47",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".h-menu.m1",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-49",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".a.menu.m",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "53f0a3db-ee6b-dc6a-70d1-41e47f9c2ffd",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-48",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "inCirc",
                duration: 500,
                target: {
                  selector: ".a.menu.m",
                  selectorGuids: [
                    "bf223304-1709-cd1d-bd7d-4f28b15b8188",
                    "2db5cad9-ced1-7e63-7c26-18575928a2b6",
                    "53f0a3db-ee6b-dc6a-70d1-41e47f9c2ffd",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-91",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "inCirc",
                duration: 400,
                target: {
                  selector: ".underline-links.close",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "6af417fe-f4a2-b213-98a2-fa67eaa9e980",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-82-n-92",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "inCirc",
                duration: 400,
                target: {
                  selector: ".underline-links.close",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "6af417fe-f4a2-b213-98a2-fa67eaa9e980",
                  ],
                },
                yValue: -100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-45",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 900,
                easing: "outCirc",
                duration: 600,
                target: {
                  selector: ".bg-menu",
                  selectorGuids: ["4f7cbeb0-b137-08e1-f5ed-23297cd0c890"],
                },
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-82-n-88",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 900,
                easing: "outCirc",
                duration: 600,
                target: {
                  selector: ".overlay",
                  selectorGuids: ["abb5a009-00e6-d0c9-b354-2d97e5ca1fb0"],
                },
                yValue: 0,
                locked: false,
              },
            },
            {
              id: "a-82-n-90",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 900,
                easing: "",
                duration: 0,
                target: {
                  selector: ".underline-links.close",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "6af417fe-f4a2-b213-98a2-fa67eaa9e980",
                  ],
                },
                value: "none",
              },
            },
            {
              id: "a-82-n-89",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 1000,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".underline-links.open",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "2e449544-bffe-65dc-127f-b05930edfb6e",
                  ],
                },
                value: "inline-block",
              },
            },
            {
              id: "a-82-n-94",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 1000,
                easing: "outCirc",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".underline-links.open",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "2e449544-bffe-65dc-127f-b05930edfb6e",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-82-n-93",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "inCirc",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".underline-links.open",
                  selectorGuids: [
                    "09aab106-8c6f-351b-bc76-a36682295e59",
                    "2e449544-bffe-65dc-127f-b05930edfb6e",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-82-n-44",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".menu-wrapper",
                  selectorGuids: ["21ee0410-9298-d82d-a6ef-0aed52b3819f"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705691373504,
    },
    "a-83": {
      id: "a-83",
      title: "About Menu - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-83-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m5",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-46",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m5",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-83-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m5.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                    "0e6c7d3d-6aa4-c699-aaff-d5417f8e073e",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-36",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m5.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                    "0e6c7d3d-6aa4-c699-aaff-d5417f8e073e",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m6",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-48",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m6",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-83-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m6.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                    "cf9c8fce-db91-b526-32c2-adf5e24d31a2",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-38",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m6.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                    "cf9c8fce-db91-b526-32c2-adf5e24d31a2",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m7",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-50",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m7",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-83-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m7.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                    "9591bb87-f122-eff5-d7a6-ed7d7098b878",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-40",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m7.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                    "9591bb87-f122-eff5-d7a6-ed7d7098b878",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m8",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-52",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m8",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-83-n-29",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m8.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                    "55f493bd-aa53-9d3c-3608-e025784f88e8",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-42",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m8.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                    "55f493bd-aa53-9d3c-3608-e025784f88e8",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-32",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m9",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-54",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m9",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-83-n-34",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m9.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                    "083af1b9-03d7-367d-fce4-9c89e2d1061f",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-44",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m9.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                    "083af1b9-03d7-367d-fce4-9c89e2d1061f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-83-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m5",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-47",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m5",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-4",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m5.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                    "0e6c7d3d-6aa4-c699-aaff-d5417f8e073e",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-37",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m5.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                    "0e6c7d3d-6aa4-c699-aaff-d5417f8e073e",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-83-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m6",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-49",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m6",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m6.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                    "cf9c8fce-db91-b526-32c2-adf5e24d31a2",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-39",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m6.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                    "cf9c8fce-db91-b526-32c2-adf5e24d31a2",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-83-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m7",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-51",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m7",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m7.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                    "9591bb87-f122-eff5-d7a6-ed7d7098b878",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-41",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m7.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                    "9591bb87-f122-eff5-d7a6-ed7d7098b878",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-83-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m8",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-53",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m8",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m8.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                    "55f493bd-aa53-9d3c-3608-e025784f88e8",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-43",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m8.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                    "55f493bd-aa53-9d3c-3608-e025784f88e8",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-83-n-33",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m9",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-83-n-55",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m9",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-83-n-45",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m9.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                    "083af1b9-03d7-367d-fce4-9c89e2d1061f",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-83-n-35",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m9.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                    "083af1b9-03d7-367d-fce4-9c89e2d1061f",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705945819385,
    },
    "a-84": {
      id: "a-84",
      title: "About Menu - Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-84-n-16",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m5",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-84-n-31",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m5",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-84-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m5.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                    "0e6c7d3d-6aa4-c699-aaff-d5417f8e073e",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-84-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m5.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "d795f15d-75a7-031b-8b5d-ced0c6dbb278",
                    "0e6c7d3d-6aa4-c699-aaff-d5417f8e073e",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-84-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m6",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-84-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m6",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-84-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m6.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                    "cf9c8fce-db91-b526-32c2-adf5e24d31a2",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-84-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m6.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "860a896f-b3e9-ac35-f447-9867331b9d45",
                    "cf9c8fce-db91-b526-32c2-adf5e24d31a2",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-84-n-22",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m7",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-84-n-33",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m7",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-84-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m7.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                    "9591bb87-f122-eff5-d7a6-ed7d7098b878",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-84-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m7.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cb00ed22-5219-7752-1035-46226d98fafc",
                    "9591bb87-f122-eff5-d7a6-ed7d7098b878",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-84-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m8",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-84-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m8",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-84-n-26",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m8.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                    "55f493bd-aa53-9d3c-3608-e025784f88e8",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-84-n-27",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m8.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "b054a89c-05d2-a3d5-dab1-655a0aaa5d05",
                    "55f493bd-aa53-9d3c-3608-e025784f88e8",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-84-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m9",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-84-n-35",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m9",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-84-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m9.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                    "083af1b9-03d7-367d-fce4-9c89e2d1061f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-84-n-29",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m9.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "2cfcb278-579e-ab56-fc58-ae3192c0e2ff",
                    "083af1b9-03d7-367d-fce4-9c89e2d1061f",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705945819385,
    },
    "a-85": {
      id: "a-85",
      title: "Home Menu - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-85-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m1",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m1",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-85-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m1.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                    "0cbbb287-6363-335e-742c-29a3821e5c59",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m1.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                    "0cbbb287-6363-335e-742c-29a3821e5c59",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-85-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m2",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m2",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-85-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m2.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                    "ed3867d4-7d7b-e539-482c-b700a85f73e2",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m2.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                    "ed3867d4-7d7b-e539-482c-b700a85f73e2",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-85-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m3",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m3",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-85-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m3.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                    "8b894dc5-de19-5559-abcc-7df77a8c3631",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m3.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                    "8b894dc5-de19-5559-abcc-7df77a8c3631",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-85-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m4",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m4",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-85-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m4.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                    "a1df31c3-4cc0-fe1d-0846-90af8c57f261",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m4.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                    "a1df31c3-4cc0-fe1d-0846-90af8c57f261",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-85-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m1",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m1",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-85-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m1.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                    "0cbbb287-6363-335e-742c-29a3821e5c59",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m1.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                    "0cbbb287-6363-335e-742c-29a3821e5c59",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-85-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m2",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m2",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-85-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m2.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                    "ed3867d4-7d7b-e539-482c-b700a85f73e2",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m2.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                    "ed3867d4-7d7b-e539-482c-b700a85f73e2",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-85-n-29",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m3",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m3",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-85-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m3.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                    "8b894dc5-de19-5559-abcc-7df77a8c3631",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m3.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                    "8b894dc5-de19-5559-abcc-7df77a8c3631",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-85-n-33",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m4",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m4",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-85-n-35",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m4.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                    "a1df31c3-4cc0-fe1d-0846-90af8c57f261",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-85-n-36",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m4.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                    "a1df31c3-4cc0-fe1d-0846-90af8c57f261",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705945819385,
    },
    "a-86": {
      id: "a-86",
      title: "Home Menu - Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-86-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m1",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-86-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m1",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-86-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m1.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                    "0cbbb287-6363-335e-742c-29a3821e5c59",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-86-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m1.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3692ad4d-bb01-1ed7-c1ee-72421ae22d8f",
                    "0cbbb287-6363-335e-742c-29a3821e5c59",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-86-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m2",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-86-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m2",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-86-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m2.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                    "ed3867d4-7d7b-e539-482c-b700a85f73e2",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-86-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m2.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "cd6d2570-adfe-201d-04ca-ec623e557503",
                    "ed3867d4-7d7b-e539-482c-b700a85f73e2",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-86-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m3",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-86-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m3",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-86-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m3.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                    "8b894dc5-de19-5559-abcc-7df77a8c3631",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-86-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m3.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "74b1dbe5-5f7a-3587-567d-c550830e0512",
                    "8b894dc5-de19-5559-abcc-7df77a8c3631",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-86-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m4",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-86-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m4",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-86-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m4.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                    "a1df31c3-4cc0-fe1d-0846-90af8c57f261",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-86-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m4.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "56f95a4a-df68-9175-25b9-cb2f443252fb",
                    "a1df31c3-4cc0-fe1d-0846-90af8c57f261",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705945819385,
    },
    "a-87": {
      id: "a-87",
      title: "Works Menu - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-87-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m10",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m10",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-87-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m10.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                    "53542742-9dda-1d61-59c5-27e69f871e3f",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m10.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                    "53542742-9dda-1d61-59c5-27e69f871e3f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-87-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m11",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m11",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-87-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m11.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                    "c05c8765-7a83-c1bb-41c0-c4561ba17d08",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m11.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                    "c05c8765-7a83-c1bb-41c0-c4561ba17d08",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-87-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m12",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m12",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-87-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m12.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                    "ef8ae5c2-27c5-42d1-0f88-63f7f606d9b0",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m12.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                    "ef8ae5c2-27c5-42d1-0f88-63f7f606d9b0",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-87-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m13",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m13",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-87-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m13.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                    "07f4a29c-7582-d4df-1603-8e35c6e2520f",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m13.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                    "07f4a29c-7582-d4df-1603-8e35c6e2520f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-87-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m14",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m14",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-87-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m14.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                    "591b28fb-38aa-d4a7-53b6-ddc4750fd0fa",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m14.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                    "591b28fb-38aa-d4a7-53b6-ddc4750fd0fa",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-87-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m10",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m10",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-87-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m10.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                    "53542742-9dda-1d61-59c5-27e69f871e3f",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m10.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                    "53542742-9dda-1d61-59c5-27e69f871e3f",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-87-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m11",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m11",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-87-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m11.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                    "c05c8765-7a83-c1bb-41c0-c4561ba17d08",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m11.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                    "c05c8765-7a83-c1bb-41c0-c4561ba17d08",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-87-n-29",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m12",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m12",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-87-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m12.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                    "ef8ae5c2-27c5-42d1-0f88-63f7f606d9b0",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m12.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                    "ef8ae5c2-27c5-42d1-0f88-63f7f606d9b0",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-87-n-33",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m13",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m13",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-87-n-35",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m13.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                    "07f4a29c-7582-d4df-1603-8e35c6e2520f",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-36",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m13.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                    "07f4a29c-7582-d4df-1603-8e35c6e2520f",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-87-n-37",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m14",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                  ],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-87-n-38",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m14",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-87-n-39",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m14.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                    "591b28fb-38aa-d4a7-53b6-ddc4750fd0fa",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-87-n-40",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 550,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m14.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                    "591b28fb-38aa-d4a7-53b6-ddc4750fd0fa",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1705945819385,
    },
    "a-88": {
      id: "a-88",
      title: "Works Menu - Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-88-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m10",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-88-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m10",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-88-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m10.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                    "53542742-9dda-1d61-59c5-27e69f871e3f",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-88-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m10.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "91c9a854-9e58-41e1-e499-82c7b02e2bda",
                    "53542742-9dda-1d61-59c5-27e69f871e3f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-88-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m11",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-88-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m11",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-88-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m11.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                    "c05c8765-7a83-c1bb-41c0-c4561ba17d08",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-88-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m11.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "5663a86f-f090-2924-03c8-9c3222de7496",
                    "c05c8765-7a83-c1bb-41c0-c4561ba17d08",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-88-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m12",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-88-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m12",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-88-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m12.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                    "ef8ae5c2-27c5-42d1-0f88-63f7f606d9b0",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-88-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m12.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "3c567723-7305-1e43-d2aa-be87fc838fbd",
                    "ef8ae5c2-27c5-42d1-0f88-63f7f606d9b0",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-88-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m13",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-88-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m13",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-88-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m13.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                    "07f4a29c-7582-d4df-1603-8e35c6e2520f",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-88-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m13.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "9692acf7-9414-c86f-bdc6-87e21f98fedb",
                    "07f4a29c-7582-d4df-1603-8e35c6e2520f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-88-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m14",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                  ],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-88-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m14",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-88-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m14.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                    "591b28fb-38aa-d4a7-53b6-ddc4750fd0fa",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-88-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".h-menu.m14.abso",
                  selectorGuids: [
                    "16b38cb8-b161-87a6-18dd-adb93f42201e",
                    "523b3b5d-a85e-b38c-e71c-16310c38a712",
                    "591b28fb-38aa-d4a7-53b6-ddc4750fd0fa",
                  ],
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1705945819385,
    },
    "a-72": {
      id: "a-72",
      title: "Logo - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-72-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._1",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "67828fc5-3f3f-a75b-8bc7-b8e8e9e05ac4",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._1",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "67828fc5-3f3f-a75b-8bc7-b8e8e9e05ac4",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._2",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6a70c8f3-2de8-2c06-2cbd-c901ca8ea40e",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._2",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6a70c8f3-2de8-2c06-2cbd-c901ca8ea40e",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._3",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "85dca897-1c0d-96dc-1ccd-30219e97d72d",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._3",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "85dca897-1c0d-96dc-1ccd-30219e97d72d",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._4",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "d58118bb-0790-351a-7273-c6cf26b6c8b6",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._4",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "d58118bb-0790-351a-7273-c6cf26b6c8b6",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._5",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "537f435e-20c9-6f43-360c-f06da0d420c1",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._5",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "537f435e-20c9-6f43-360c-f06da0d420c1",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._6",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "9b49e5ac-f013-4147-85f3-565ffb37f545",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._6",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "9b49e5ac-f013-4147-85f3-565ffb37f545",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._7",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "66575a90-6221-4a3a-d3f0-6f97c8203633",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._7",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "66575a90-6221-4a3a-d3f0-6f97c8203633",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-29",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._8",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6524e28c-e474-4af1-4de0-18aa091a85b2",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._8",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6524e28c-e474-4af1-4de0-18aa091a85b2",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-33",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._9",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "e39e634f-675d-7461-868b-ec9943b4583d",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._9",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "e39e634f-675d-7461-868b-ec9943b4583d",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-37",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._10",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6493063d-f8b0-34d5-73bd-e771beaf0777",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-38",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._10",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6493063d-f8b0-34d5-73bd-e771beaf0777",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-41",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._11",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "2642bce0-ea50-27de-60b8-0b7babae71de",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-42",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._11",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "2642bce0-ea50-27de-60b8-0b7babae71de",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-45",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._12",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "061c78ea-e818-ffe4-047c-ecfc4f03a80a",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-46",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._12",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "061c78ea-e818-ffe4-047c-ecfc4f03a80a",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-49",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._13",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "f79a7da6-0935-9534-4f4b-888312ad7799",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-50",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._13",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "f79a7da6-0935-9534-4f4b-888312ad7799",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-53",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._14",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "ecaf40c1-a1dd-c0ec-9bbf-303f47915710",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-54",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._14",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "ecaf40c1-a1dd-c0ec-9bbf-303f47915710",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-57",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._15",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "9fe92083-d214-77b6-b746-fe413dda3c54",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-58",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._15",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "9fe92083-d214-77b6-b746-fe413dda3c54",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-61",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._16",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "c55b7655-d244-affc-6a1c-63cd785c9000",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-62",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._16",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "c55b7655-d244-affc-6a1c-63cd785c9000",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-72-n-65",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._17",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "de7c2daf-73d1-ed3c-3eb8-d2f6665e99db",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-66",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".sp._17",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "de7c2daf-73d1-ed3c-3eb8-d2f6665e99db",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-72-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._1",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "67828fc5-3f3f-a75b-8bc7-b8e8e9e05ac4",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._1",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "67828fc5-3f3f-a75b-8bc7-b8e8e9e05ac4",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 10,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._2",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6a70c8f3-2de8-2c06-2cbd-c901ca8ea40e",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 10,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._2",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6a70c8f3-2de8-2c06-2cbd-c901ca8ea40e",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 20,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._3",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "85dca897-1c0d-96dc-1ccd-30219e97d72d",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 20,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._3",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "85dca897-1c0d-96dc-1ccd-30219e97d72d",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 30,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._4",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "d58118bb-0790-351a-7273-c6cf26b6c8b6",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 30,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._4",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "d58118bb-0790-351a-7273-c6cf26b6c8b6",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 40,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._5",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "537f435e-20c9-6f43-360c-f06da0d420c1",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-20",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 40,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._5",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "537f435e-20c9-6f43-360c-f06da0d420c1",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-23",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._6",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "9b49e5ac-f013-4147-85f3-565ffb37f545",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-24",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._6",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "9b49e5ac-f013-4147-85f3-565ffb37f545",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-27",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 60,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._7",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "66575a90-6221-4a3a-d3f0-6f97c8203633",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 60,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._7",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "66575a90-6221-4a3a-d3f0-6f97c8203633",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-31",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 70,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._8",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6524e28c-e474-4af1-4de0-18aa091a85b2",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-32",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 70,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._8",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6524e28c-e474-4af1-4de0-18aa091a85b2",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-35",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 80,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._9",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "e39e634f-675d-7461-868b-ec9943b4583d",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-36",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 80,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._9",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "e39e634f-675d-7461-868b-ec9943b4583d",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-39",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 90,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._10",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6493063d-f8b0-34d5-73bd-e771beaf0777",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-40",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 90,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._10",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6493063d-f8b0-34d5-73bd-e771beaf0777",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-43",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._11",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "2642bce0-ea50-27de-60b8-0b7babae71de",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-44",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._11",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "2642bce0-ea50-27de-60b8-0b7babae71de",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-47",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 110,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._12",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "061c78ea-e818-ffe4-047c-ecfc4f03a80a",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-48",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 110,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._12",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "061c78ea-e818-ffe4-047c-ecfc4f03a80a",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-51",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 120,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._13",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "f79a7da6-0935-9534-4f4b-888312ad7799",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-52",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 120,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._13",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "f79a7da6-0935-9534-4f4b-888312ad7799",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-55",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 130,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._14",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "ecaf40c1-a1dd-c0ec-9bbf-303f47915710",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-56",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 130,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._14",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "ecaf40c1-a1dd-c0ec-9bbf-303f47915710",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-59",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 140,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._15",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "9fe92083-d214-77b6-b746-fe413dda3c54",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-60",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 140,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._15",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "9fe92083-d214-77b6-b746-fe413dda3c54",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-64",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._16",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "c55b7655-d244-affc-6a1c-63cd785c9000",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-63",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._16",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "c55b7655-d244-affc-6a1c-63cd785c9000",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-72-n-67",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 160,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._17",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "de7c2daf-73d1-ed3c-3eb8-d2f6665e99db",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-72-n-68",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 160,
                easing: "outCirc",
                duration: 400,
                target: {
                  selector: ".sp._17",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "de7c2daf-73d1-ed3c-3eb8-d2f6665e99db",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1704225706555,
    },
    "a-73": {
      id: "a-73",
      title: "Logo - Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-73-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._1",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "67828fc5-3f3f-a75b-8bc7-b8e8e9e05ac4",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._1",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "67828fc5-3f3f-a75b-8bc7-b8e8e9e05ac4",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 10,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._2",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6a70c8f3-2de8-2c06-2cbd-c901ca8ea40e",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 10,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._2",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6a70c8f3-2de8-2c06-2cbd-c901ca8ea40e",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 20,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._3",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "85dca897-1c0d-96dc-1ccd-30219e97d72d",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 20,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._3",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "85dca897-1c0d-96dc-1ccd-30219e97d72d",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 30,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._4",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "d58118bb-0790-351a-7273-c6cf26b6c8b6",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 30,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._4",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "d58118bb-0790-351a-7273-c6cf26b6c8b6",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 40,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._5",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "537f435e-20c9-6f43-360c-f06da0d420c1",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 40,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._5",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "537f435e-20c9-6f43-360c-f06da0d420c1",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 50,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._6",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "9b49e5ac-f013-4147-85f3-565ffb37f545",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 50,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._6",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "9b49e5ac-f013-4147-85f3-565ffb37f545",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 60,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._7",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "66575a90-6221-4a3a-d3f0-6f97c8203633",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 60,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._7",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "66575a90-6221-4a3a-d3f0-6f97c8203633",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 70,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._8",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6524e28c-e474-4af1-4de0-18aa091a85b2",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 70,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._8",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6524e28c-e474-4af1-4de0-18aa091a85b2",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 80,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._9",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "e39e634f-675d-7461-868b-ec9943b4583d",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 80,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._9",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "e39e634f-675d-7461-868b-ec9943b4583d",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 90,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._10",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6493063d-f8b0-34d5-73bd-e771beaf0777",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 90,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._10",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "6493063d-f8b0-34d5-73bd-e771beaf0777",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._11",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "2642bce0-ea50-27de-60b8-0b7babae71de",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._11",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "2642bce0-ea50-27de-60b8-0b7babae71de",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 110,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._12",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "061c78ea-e818-ffe4-047c-ecfc4f03a80a",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 110,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._12",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "061c78ea-e818-ffe4-047c-ecfc4f03a80a",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 120,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._13",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "f79a7da6-0935-9534-4f4b-888312ad7799",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 120,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._13",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "f79a7da6-0935-9534-4f4b-888312ad7799",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 130,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._14",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "ecaf40c1-a1dd-c0ec-9bbf-303f47915710",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 130,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._14",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "ecaf40c1-a1dd-c0ec-9bbf-303f47915710",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 140,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._15",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "9fe92083-d214-77b6-b746-fe413dda3c54",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-29",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 140,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._15",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "9fe92083-d214-77b6-b746-fe413dda3c54",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._16",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "c55b7655-d244-affc-6a1c-63cd785c9000",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._16",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "c55b7655-d244-affc-6a1c-63cd785c9000",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-73-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 160,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._17",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "de7c2daf-73d1-ed3c-3eb8-d2f6665e99db",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-73-n-33",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 160,
                easing: "",
                duration: 300,
                target: {
                  selector: ".sp._17",
                  selectorGuids: [
                    "dab5b9fc-a90b-467c-fedd-afe7494cc148",
                    "de7c2daf-73d1-ed3c-3eb8-d2f6665e99db",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1704225706555,
    },
    "a-89": {
      id: "a-89",
      title: "Spline - Works",
      continuousParameterGroups: [
        {
          id: "a-89-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-89-n",
                  actionTypeId: "PLUGIN_SPLINE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      pluginElement: "fdf637a2-8abb-acf8-547e-f69b17820b38",
                      objectId: "aee546a6-ce1c-42e4-8934-42267c63087c",
                      useEventTarget: "CHILDREN",
                      selector: ".spline-works",
                      selectorGuids: ["462b8e8a-e217-9e76-3de4-4667bfb50f73"],
                    },
                    value: {
                      rotationY: -0.4,
                      rotationX: null,
                      rotationZ: null,
                    },
                  },
                },
              ],
            },
            {
              keyframe: 90,
              actionItems: [
                {
                  id: "a-89-n-2",
                  actionTypeId: "PLUGIN_SPLINE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      pluginElement: "fdf637a2-8abb-acf8-547e-f69b17820b38",
                      objectId: "aee546a6-ce1c-42e4-8934-42267c63087c",
                      useEventTarget: "CHILDREN",
                      selector: ".spline-works",
                      selectorGuids: ["462b8e8a-e217-9e76-3de4-4667bfb50f73"],
                    },
                    value: {
                      rotationY: -6.3,
                      rotationX: null,
                      rotationZ: null,
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1699977812633,
    },
    "a-69": {
      id: "a-69",
      title: "Five Keys - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-69-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-69-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "c2fb5233-c041-46ed-af07-9b292c3d4452",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-69-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-69-n-4",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "c2fb5233-c041-46ed-af07-9b292c3d4452",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699651581672,
    },
    "a-70": {
      id: "a-70",
      title: "Five Keys - Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-70-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 350,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-70-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "c2fb5233-c041-46ed-af07-9b292c3d4452",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-70-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699651664799,
    },
    "a-51": {
      id: "a-51",
      title: "GL - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-51-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-51-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "0cd67463-b5f0-4003-9f6b-8cf080854333",
                  useEventTarget: "SIBLINGS",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-51-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-51-n-4",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "0cd67463-b5f0-4003-9f6b-8cf080854333",
                  useEventTarget: "SIBLINGS",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 32 },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699651581672,
    },
    "a-52": {
      id: "a-52",
      title: "GL - Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-52-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 350,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-52-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "0cd67463-b5f0-4003-9f6b-8cf080854333",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-52-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699651664799,
    },
    "a-53": {
      id: "a-53",
      title: "Flex - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-53-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-53-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "c92d54dc-d55a-4726-9935-29565842d75c",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-53-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-53-n-4",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "c92d54dc-d55a-4726-9935-29565842d75c",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 32 },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699651581672,
    },
    "a-54": {
      id: "a-54",
      title: "Flex - Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-54-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 350,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-54-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "c92d54dc-d55a-4726-9935-29565842d75c",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-54-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699651664799,
    },
    "a-55": {
      id: "a-55",
      title: "Valurbain - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-55-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-55-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "73537052-33b2-4c26-937d-5a9e58cddc14",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-55-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-55-n-4",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "73537052-33b2-4c26-937d-5a9e58cddc14",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 32 },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699651581672,
    },
    "a-56": {
      id: "a-56",
      title: "Valurbain - Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-56-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 350,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-56-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "73537052-33b2-4c26-937d-5a9e58cddc14",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-56-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699651664799,
    },
    "a-57": {
      id: "a-57",
      title: "Geoptis - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-57-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-57-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "11e9b6f0-c644-4462-86c5-2f71e30514e2",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-57-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-57-n-4",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "11e9b6f0-c644-4462-86c5-2f71e30514e2",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 32 },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699651581672,
    },
    "a-58": {
      id: "a-58",
      title: "Geoptis - Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-58-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 350,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-58-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "11e9b6f0-c644-4462-86c5-2f71e30514e2",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-58-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699651664799,
    },
    "a-59": {
      id: "a-59",
      title: "Goodjour - Hover in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-59-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-59-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "9f3614d2-c0a8-4973-beed-067e0559868e",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-59-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuint",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-59-n-4",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 1000,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "9f3614d2-c0a8-4973-beed-067e0559868e",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 32 },
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1699651581672,
    },
    "a-60": {
      id: "a-60",
      title: "Goodjour - Hover out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-60-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "inOutQuart",
                duration: 350,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: 100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-60-n-2",
              actionTypeId: "PLUGIN_SPLINE",
              config: {
                delay: 0,
                easing: "outExpo",
                duration: 800,
                target: {
                  pluginElement: "d16d4f65-0e86-906b-203c-54e8e8ae1535",
                  objectId: "9f3614d2-c0a8-4973-beed-067e0559868e",
                  useEventTarget: "CHILDREN",
                  selector: ".spline-scene",
                  selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                },
                value: { positionY: 0 },
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-60-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".underline-div",
                  selectorGuids: ["c2c685a8-a1c2-d5ef-bb6e-b9311412acaf"],
                },
                xValue: -104,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1699651664799,
    },
    "a-91": {
      id: "a-91",
      title: "Works loading",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-91-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._50",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "66cc06b3-a2da-47e9-d1c3-eaa050940f7f",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._50",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "66cc06b3-a2da-47e9-d1c3-eaa050940f7f",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._51",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "dddaee64-2119-87f1-f560-f223f03bb729",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._51",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "dddaee64-2119-87f1-f560-f223f03bb729",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._52",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "c76ee999-0c2a-5db6-24c8-e3c3708a3885",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._52",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "c76ee999-0c2a-5db6-24c8-e3c3708a3885",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._53",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "bfe881e2-05d3-e528-8908-1b10e548278b",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._53",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "bfe881e2-05d3-e528-8908-1b10e548278b",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-17",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._54",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "cd2632ef-7e7f-ed03-b764-0f9c85ba8d3a",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._54",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "cd2632ef-7e7f-ed03-b764-0f9c85ba8d3a",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._55",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "4d85c320-2d35-ca48-39ab-c6acc0910534",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._55",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "4d85c320-2d35-ca48-39ab-c6acc0910534",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._56",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "b2fbe2b9-e085-f9f7-1678-4868d642ed30",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._56",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "b2fbe2b9-e085-f9f7-1678-4868d642ed30",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-29",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._57",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9a8053fa-c848-0767-5087-801010bbe365",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._57",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9a8053fa-c848-0767-5087-801010bbe365",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-33",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._58",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "0b1fb0be-be69-9dcd-8399-599aecd5ef76",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._58",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "0b1fb0be-be69-9dcd-8399-599aecd5ef76",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-37",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._59",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "d6edb804-4ea0-eafa-2fba-2a1758488330",
                  ],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-38",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".span._59",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "d6edb804-4ea0-eafa-2fba-2a1758488330",
                  ],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-41",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-42",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-45",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-46",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {},
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-57",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".impact",
                  selectorGuids: ["41f68f93-3208-6af0-0285-f5f058495260"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-58",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".impact",
                  selectorGuids: ["41f68f93-3208-6af0-0285-f5f058495260"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-61",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".btn-wrapper",
                  selectorGuids: ["fa7a94e3-6643-38aa-da33-c7b931e58801"],
                },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-62",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".btn-wrapper",
                  selectorGuids: ["fa7a94e3-6643-38aa-da33-c7b931e58801"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-67",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e16" },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-68",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e16" },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-71",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "776d07bb-b571-0a84-d159-19048b077844" },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-72",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "776d07bb-b571-0a84-d159-19048b077844" },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-75",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e54" },
                yValue: 100,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-76",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e54" },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-79",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b39",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-81",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b3b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-83",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b7f",
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-84",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b7f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-91-n-87",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b82",
                },
                xValue: -100,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-88",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b82",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-91-n-86",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b7f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._50",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "66cc06b3-a2da-47e9-d1c3-eaa050940f7f",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._50",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "66cc06b3-a2da-47e9-d1c3-eaa050940f7f",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-69",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 600,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e16" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-70",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 100,
                easing: "outCirc",
                duration: 600,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e16" },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-85",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 100,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b7f",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 150,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._51",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "dddaee64-2119-87f1-f560-f223f03bb729",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 150,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._51",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "dddaee64-2119-87f1-f560-f223f03bb729",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 200,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._52",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "c76ee999-0c2a-5db6-24c8-e3c3708a3885",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 200,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._52",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "c76ee999-0c2a-5db6-24c8-e3c3708a3885",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 250,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._53",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "bfe881e2-05d3-e528-8908-1b10e548278b",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 250,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._53",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "bfe881e2-05d3-e528-8908-1b10e548278b",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-74",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 600,
                target: { id: "776d07bb-b571-0a84-d159-19048b077844" },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._54",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "cd2632ef-7e7f-ed03-b764-0f9c85ba8d3a",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._54",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "cd2632ef-7e7f-ed03-b764-0f9c85ba8d3a",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-73",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 300,
                easing: "outCirc",
                duration: 600,
                target: { id: "776d07bb-b571-0a84-d159-19048b077844" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 350,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._55",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "4d85c320-2d35-ca48-39ab-c6acc0910534",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 350,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._55",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "4d85c320-2d35-ca48-39ab-c6acc0910534",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-28",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._56",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "b2fbe2b9-e085-f9f7-1678-4868d642ed30",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-27",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 400,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._56",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "b2fbe2b9-e085-f9f7-1678-4868d642ed30",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-32",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 450,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._57",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9a8053fa-c848-0767-5087-801010bbe365",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-31",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 450,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._57",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "9a8053fa-c848-0767-5087-801010bbe365",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-90",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b82",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-35",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._58",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "0b1fb0be-be69-9dcd-8399-599aecd5ef76",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-36",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._58",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "0b1fb0be-be69-9dcd-8399-599aecd5ef76",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-59",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 600,
                target: {
                  selector: ".impact",
                  selectorGuids: ["41f68f93-3208-6af0-0285-f5f058495260"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-60",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 600,
                target: {
                  selector: ".impact",
                  selectorGuids: ["41f68f93-3208-6af0-0285-f5f058495260"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-77",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 600,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e54" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-78",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "outCirc",
                duration: 600,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e54" },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-89",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 500,
                easing: "inOutCirc",
                duration: 500,
                target: {
                  id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b82",
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-82",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 550,
                easing: "inOutCirc",
                duration: 400,
                target: {
                  id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b3b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-39",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 550,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._59",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "d6edb804-4ea0-eafa-2fba-2a1758488330",
                  ],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-40",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 550,
                easing: "outCirc",
                duration: 800,
                target: {
                  selector: ".span._59",
                  selectorGuids: [
                    "cf02126c-1c2c-8ded-6731-36e1fcf62a72",
                    "d6edb804-4ea0-eafa-2fba-2a1758488330",
                  ],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-64",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "outCirc",
                duration: 600,
                target: {
                  selector: ".btn-wrapper",
                  selectorGuids: ["fa7a94e3-6643-38aa-da33-c7b931e58801"],
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-44",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 600,
                easing: "outCirc",
                duration: 800,
                target: {},
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-43",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "outCirc",
                duration: 800,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-63",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 600,
                easing: "outCirc",
                duration: 600,
                target: {
                  selector: ".btn-wrapper",
                  selectorGuids: ["fa7a94e3-6643-38aa-da33-c7b931e58801"],
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-91-n-80",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 650,
                easing: "inOutCirc",
                duration: 400,
                target: {
                  id: "65b122dcfcadbe2eb4f4c7f2|fdf637a2-8abb-acf8-547e-f69b17820b39",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-48",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 650,
                easing: "outCirc",
                duration: 800,
                target: {},
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-91-n-47",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 650,
                easing: "outCirc",
                duration: 800,
                target: {},
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1706633962624,
    },
    "a-50": {
      id: "a-50",
      title: "Spline - Showcase",
      continuousParameterGroups: [
        {
          id: "a-50-p",
          type: "SCROLL_PROGRESS",
          parameterLabel: "Scroll",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-50-n",
                  actionTypeId: "PLUGIN_SPLINE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      pluginElement: "e614cebe-4960-cafb-5540-3ae6417b5c9c",
                      objectId: "aee546a6-ce1c-42e4-8934-42267c63087c",
                      useEventTarget: "CHILDREN",
                      selector: ".spline-scene",
                      selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                    },
                    value: {
                      rotationY: -0.4,
                      rotationX: null,
                      rotationZ: null,
                    },
                  },
                },
              ],
            },
            {
              keyframe: 90,
              actionItems: [
                {
                  id: "a-50-n-30",
                  actionTypeId: "PLUGIN_SPLINE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      pluginElement: "e614cebe-4960-cafb-5540-3ae6417b5c9c",
                      objectId: "aee546a6-ce1c-42e4-8934-42267c63087c",
                      useEventTarget: "CHILDREN",
                      selector: ".spline-scene",
                      selectorGuids: ["f585286c-d613-2378-b41e-1a795f066eb0"],
                    },
                    value: {
                      rotationY: -6.3,
                      rotationX: null,
                      rotationZ: null,
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1699977812633,
    },
    "a-66": {
      id: "a-66",
      title: "Loading - Home",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-66-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f34d",
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f34d",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-66-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f34f",
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f34f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-66-n-5",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f351",
                },
                xValue: null,
                yValue: 100,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f351",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-66-n-7",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "776d07bb-b571-0a84-d159-19048b077844" },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "776d07bb-b571-0a84-d159-19048b077844" },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-66-n-9",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e54" },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e54" },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-66-n-11",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e16" },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e16" },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-66-n-25",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f346",
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-26",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f346",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-66-n-29",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f354",
                },
                yValue: 110,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-30",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f354",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-66-n-33",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f343",
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-66-n-13",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2800,
                easing: "outCirc",
                duration: 1050,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f34d",
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2800,
                easing: "outCirc",
                duration: 1050,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f34d",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-66-n-15",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2900,
                easing: "outCirc",
                duration: 1050,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f34f",
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2900,
                easing: "outCirc",
                duration: 1050,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f34f",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-66-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2900,
                easing: "outCirc",
                duration: 600,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e16" },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-66-n-18",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2900,
                easing: "outCirc",
                duration: 800,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e16" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-27",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2900,
                easing: "outCirc",
                duration: 600,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f346",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-66-n-28",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 2900,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f346",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-19",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 3000,
                easing: "outCirc",
                duration: 1050,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f351",
                },
                xValue: null,
                yValue: 0,
                xUnit: "%",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 3000,
                easing: "outCirc",
                duration: 1050,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f351",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-66-n-21",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 3000,
                easing: "outCirc",
                duration: 800,
                target: { id: "776d07bb-b571-0a84-d159-19048b077844" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 3000,
                easing: "outCirc",
                duration: 600,
                target: { id: "776d07bb-b571-0a84-d159-19048b077844" },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-66-n-34",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 3000,
                easing: "",
                duration: 0,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f343",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-66-n-23",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 3100,
                easing: "outCirc",
                duration: 800,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e54" },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-66-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 3100,
                easing: "outCirc",
                duration: 600,
                target: { id: "277ef4ec-cdec-afbb-fed3-df25b9029e54" },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-66-n-31",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 3100,
                easing: "outCirc",
                duration: 600,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f354",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-66-n-32",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 3100,
                easing: "outCirc",
                duration: 800,
                target: {
                  id: "65b10efb4026d966127151c9|94d7b892-59f1-204c-cc8a-64ba8c66f354",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1701361188825,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
