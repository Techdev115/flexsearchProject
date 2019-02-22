/*
 FlexSearch v0.6.2
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/flexsearch
*/
'use strict';
(function(m, H, I) {
  let z;
  (z = I.define) && z.amd ? z([], function() {
    return H;
  }) : (z = I.modules) ? z[m.toLowerCase()] = H : "object" === typeof exports ? module.exports = H : I[m] = H;
})("FlexSearch", function() {
  function m(a, b) {
    const c = b ? b.id : a && a.id;
    this.id = c || 0 === c ? c : aa++;
    this.init(a, b);
    z(this, "index", function() {
      return this.a ? Object.keys(this.a.index[this.a.keys[0]].f) : Object.keys(this.f);
    });
    z(this, "length", function() {
      return this.index.length;
    });
  }
  function H(a, b) {
    const c = a.length, d = J(b), e = [];
    for (let g = 0, f = 0; g < c; g++) {
      const c = a[g];
      if (d && b(c) || !d && !b[c]) {
        e[f++] = c;
      }
    }
    return e;
  }
  function I(a, b, c, d, e, g, f, k, r, p) {
    c = V(c, f ? 0 : e, k, g, b, r, p);
    let q;
    k && (k = c.page, q = c.next, c = c.result);
    if (f) {
      b = this.where(f, null, e, c);
    } else {
      b = c;
      c = this.g;
      e = b.length;
      g = Array(e);
      for (f = 0; f < e; f++) {
        g[f] = c[b[f]];
      }
      b = g;
    }
    c = b;
    d && (J(d) || (y = d.split(":"), 1 < y.length ? d = ba : (y = y[0], d = ca)), c.sort(d));
    c = L(k, q, c);
    this.cache && this.j.set(a, c);
    return c;
  }
  function z(a, b, c) {
    Object.defineProperty(a, b, {get:c});
  }
  function h(a) {
    return new RegExp(a, "g");
  }
  function K(a, b) {
    for (let c = 0; c < b.length; c += 2) {
      a = a.replace(b[c], b[c + 1]);
    }
    return a;
  }
  function P(a, b, c, d, e, g, f, k) {
    if (b[c]) {
      return b[c];
    }
    e = e ? (k - (f || k / 1.5)) * g + (f || k / 1.5) * e : g;
    b[c] = e;
    e >= f && (a = a[k - (e + 0.5 >> 0)], a = a[c] || (a[c] = []), a[a.length] = d);
    return e;
  }
  function T(a, b) {
    if (a) {
      const c = Object.keys(a);
      for (let d = 0, e = c.length; d < e; d++) {
        const e = c[d], f = a[e];
        if (f) {
          for (let c = 0, d = f.length; c < d; c++) {
            if (f[c] === b) {
              1 === d ? delete a[e] : f.splice(c, 1);
              break;
            } else {
              A(f[c]) && T(f[c], b);
            }
          }
        }
      }
    }
  }
  function U(a) {
    let b = "", c = "";
    var d = "";
    for (let e = 0; e < a.length; e++) {
      const g = a[e];
      if (g !== c) {
        if (e && "h" === g) {
          if (d = "a" === d || "e" === d || "i" === d || "o" === d || "u" === d || "y" === d, ("a" === c || "e" === c || "i" === c || "o" === c || "u" === c || "y" === c) && d || " " === c) {
            b += g;
          }
        } else {
          b += g;
        }
      }
      d = e === a.length - 1 ? "" : a[e + 1];
      c = g;
    }
    return b;
  }
  function da(a, b) {
    a = a.length - b.length;
    return 0 > a ? 1 : a ? -1 : 0;
  }
  function ca(a, b) {
    a = a[y];
    b = b[y];
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function ba(a, b) {
    const c = y.length;
    for (let d = 0; d < c; d++) {
      a = a[y[d]], b = b[y[d]];
    }
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function L(a, b, c) {
    return a ? {page:a, next:b ? "" + b : null, result:c} : c;
  }
  function V(a, b, c, d, e, g, f) {
    let k, r = [];
    if (!0 === c) {
      c = "0";
      var p = "";
    } else {
      p = c && c.split(":");
    }
    const q = a.length;
    if (1 < q) {
      const R = u();
      let B = [], M, G;
      var n = 0, l;
      let N;
      var h = !0;
      let D, E = 0, x, w, y, A;
      p && (2 === p.length ? (y = p, p = !1) : p = A = parseInt(p[0], 10));
      if (f) {
        for (M = u(); n < q; n++) {
          if ("not" === e[n]) {
            for (G = a[n], N = G.length, l = 0; l < N; l++) {
              M["@" + G[l]] = 1;
            }
          } else {
            w = n + 1;
          }
        }
        if (C(w)) {
          return L(c, k, r);
        }
        n = 0;
      } else {
        x = F(e) && e;
      }
      let z;
      for (; n < q; n++) {
        const u = n === (w || q) - 1;
        if (!x || !n) {
          if ((l = x || e && e[n]) && "and" !== l) {
            if ("or" === l) {
              z = !1;
            } else {
              continue;
            }
          } else {
            z = g = !0;
          }
        }
        G = a[n];
        if (N = G.length) {
          if (h) {
            if (D) {
              var t = D.length;
              for (l = 0; l < t; l++) {
                h = D[l];
                var m = "@" + h;
                f && M[m] || (R[m] = 1, g || (r[E++] = h));
              }
              D = null;
              h = !1;
            } else {
              D = G;
              continue;
            }
          }
          m = !1;
          for (l = 0; l < N; l++) {
            t = G[l];
            var v = "@" + t;
            const a = g ? R[v] || 0 : n;
            if (!(!a && !d || f && M[v] || !g && R[v])) {
              if (a === n) {
                if (u) {
                  if (!A || --A < E) {
                    if (r[E++] = t, b && E === b) {
                      return L(c, E + (p || 0), r);
                    }
                  }
                } else {
                  R[v] = n + 1;
                }
                m = !0;
              } else {
                d && (v = B[a] || (B[a] = []), v[v.length] = t);
              }
            }
          }
          if (z && !m && !d) {
            break;
          }
        } else {
          if (z && !d) {
            return L(c, k, G);
          }
        }
      }
      if (D) {
        if (n = D.length, f) {
          for (l = p ? parseInt(p, 10) : 0; l < n; l++) {
            a = D[l], M["@" + a] || (r[E++] = a);
          }
        } else {
          r = D;
        }
      }
      if (d) {
        for (E = r.length, y ? (n = parseInt(y[0], 10) + 1, l = parseInt(y[1], 10) + 1) : (n = B.length, l = 0); n--;) {
          if (t = B[n]) {
            for (N = t.length; l < N; l++) {
              if (d = t[l], !f || !M["@" + d]) {
                if (r[E++] = d, b && E === b) {
                  return L(c, n + ":" + l, r);
                }
              }
            }
            l = 0;
          }
        }
      }
    } else {
      !q || e && "not" === e[0] || (r = a[0], p && (p = parseInt(p[0], 10)));
    }
    b && (f = r.length, p && p > f && (p = 0), p = p || 0, k = p + b, k < f ? r = r.slice(p, k) : (k = 0, p && (r = r.slice(p))));
    return L(c, k, r);
  }
  function F(a) {
    return "string" === typeof a;
  }
  function x(a) {
    return a.constructor === Array;
  }
  function J(a) {
    return "function" === typeof a;
  }
  function A(a) {
    return "object" === typeof a;
  }
  function C(a) {
    return "undefined" === typeof a;
  }
  function W(a) {
    const b = Array(a);
    for (let c = 0; c < a; c++) {
      b[c] = u();
    }
    return b;
  }
  function u() {
    return Object.create(null);
  }
  const w = {encode:"icase", c:"forward", split:/\W+/, cache:!1, async:!1, C:!1, v:!1, a:!1, b:9, threshold:0, depth:0}, X = {memory:{encode:"extra", c:"strict", threshold:0, b:1}, speed:{encode:"icase", c:"strict", threshold:1, b:3, depth:2}, match:{encode:"extra", c:"full", threshold:1, b:3}, score:{encode:"extra", c:"strict", threshold:1, b:9, depth:4}, balance:{encode:"balance", c:"strict", threshold:0, b:3, depth:3}, fast:{encode:"icase", c:"strict", threshold:8, b:9, depth:1}}, S = [];
  let aa = 0;
  const Y = {}, Z = {};
  m.create = function(a, b) {
    return new m(a, b);
  };
  m.registerMatcher = function(a) {
    for (const b in a) {
      a.hasOwnProperty(b) && S.push(h(b), a[b]);
    }
    return this;
  };
  m.registerEncoder = function(a, b) {
    O[a] = b.bind(O);
    return this;
  };
  m.registerLanguage = function(a, b) {
    Y[a] = b.filter;
    Z[a] = b.stemmer;
    return this;
  };
  m.encode = function(a, b) {
    return O[a](b);
  };
  m.prototype.init = function(a, b) {
    this.m = [];
    if (b) {
      var c = b.preset;
      a = b;
    } else {
      a || (a = w), c = a.preset;
    }
    b = {};
    F(a) ? (b = X[a], a = {}) : c && (b = X[c]);
    this.c = a.tokenize || b.c || this.c || w.c;
    this.split = a.split || this.split || w.split;
    this.v = a.rtl || this.v || w.v;
    this.async = "undefined" === typeof Promise || C(c = a.async) ? this.async || w.async : c;
    this.threshold = C(c = a.threshold) ? b.threshold || this.threshold || w.threshold : c;
    this.b = C(c = a.resolution) ? c = b.b || this.b || w.b : c;
    c <= this.threshold && (this.b = this.threshold + 1);
    this.depth = "strict" !== this.c || C(c = a.depth) ? b.depth || this.depth || w.depth : c;
    this.o = (c = C(c = a.encode) ? b.encode || w.encode : c) && O[c] && O[c].bind(O) || (J(c) ? c : this.o || !1);
    (c = a.matcher) && this.addMatcher(c);
    if (c = (b = a.lang) || a.filter) {
      F(c) && (c = Y[c]);
      if (x(c)) {
        var d = this.o, e = u();
        for (var g = 0; g < c.length; g++) {
          var f = d ? d(c[g]) : c[g];
          e[f] = 1;
        }
        c = e;
      }
      this.filter = c;
    }
    if (c = b || a.stemmer) {
      var k;
      b = F(c) ? Z[c] : c;
      d = this.o;
      e = [];
      for (k in b) {
        b.hasOwnProperty(k) && (g = d ? d(k) : k, e.push(h(g + "($|\\W)"), d ? d(b[k]) : b[k]));
      }
      this.stemmer = k = e;
    }
    this.a = e = (c = a.doc) ? c : this.a || w.a;
    this.i = W(this.b - (this.threshold || 0));
    this.h = u();
    this.f = u();
    if (e) {
      this.g = u();
      a.doc = null;
      k = e.index = {};
      b = e.keys = [];
      d = e.field;
      g = e.tag;
      x(e.id) || (e.id = e.id.split(":"));
      if (g) {
        this.w = u();
        f = u();
        if (d) {
          if (F(d)) {
            f[d] = a;
          } else {
            if (x(d)) {
              for (let b = 0; b < d.length; b++) {
                f[d[b]] = a;
              }
            } else {
              A(d) && (f = d);
            }
          }
        }
        x(g) || (e.tag = g = [g]);
        for (d = 0; d < g.length; d++) {
          this.w[g[d]] = u();
        }
        this.B = g;
        d = f;
      }
      if (d) {
        let c;
        x(d) || (A(d) ? (c = d, e.field = d = Object.keys(d)) : e.field = d = [d]);
        for (e = 0; e < d.length; e++) {
          g = d[e], x(g) || (c && (a = c[g]), b[e] = g, d[e] = g.split(":")), k[g] = new m(a), k[g].g = this.g;
        }
      }
    }
    this.u = !0;
    this.j = (this.cache = c = C(c = a.cache) ? this.cache || w.cache : c) ? new ea(c) : !1;
    return this;
  };
  m.prototype.encode = function(a) {
    a && S.length && (a = K(a, S));
    a && this.m.length && (a = K(a, this.m));
    a && this.o && (a = this.o(a));
    a && this.stemmer && (a = K(a, this.stemmer));
    return a;
  };
  m.prototype.addMatcher = function(a) {
    const b = this.m;
    for (const c in a) {
      a.hasOwnProperty(c) && b.push(h(c), a[c]);
    }
    return this;
  };
  m.prototype.add = function(a, b, c, d, e) {
    if (this.a && A(a)) {
      return this.s("add", a, b);
    }
    if (b && F(b) && (a || 0 === a)) {
      var g = "@" + a;
      if (this.f[g] && !d) {
        return this.update(a, b);
      }
      if (!e) {
        if (this.async) {
          let e = this;
          g = new Promise(function(c) {
            setTimeout(function() {
              e.add(a, b, null, d, !0);
              e = null;
              c();
            });
          });
          if (c) {
            g.then(c);
          } else {
            return g;
          }
          return this;
        }
        if (c) {
          return this.add(a, b, null, d, !0), c(), this;
        }
      }
      b = this.encode(b);
      if (!b.length) {
        return this;
      }
      c = this.c;
      e = J(c) ? c(b) : b.split(this.split);
      this.filter && (e = H(e, this.filter));
      const n = u();
      n._ctx = u();
      const l = e.length, h = this.threshold, t = this.depth, m = this.b, v = this.i, Q = this.v;
      for (let b = 0; b < l; b++) {
        var f = e[b];
        if (f) {
          var k = f.length, r = (Q ? b + 1 : l - b) / l, p = "";
          switch(c) {
            case "reverse":
            case "both":
              for (var q = k; --q;) {
                p = f[q] + p, P(v, n, p, a, Q ? 1 : (k - q) / k, r, h, m - 1);
              }
              p = "";
            case "forward":
              for (q = 0; q < k; q++) {
                p += f[q], P(v, n, p, a, Q ? (q + 1) / k : 1, r, h, m - 1);
              }
              break;
            case "full":
              for (q = 0; q < k; q++) {
                const b = (Q ? q + 1 : k - q) / k;
                for (let c = k; c > q; c--) {
                  p = f.substring(q, c), P(v, n, p, a, b, r, h, m - 1);
                }
              }
              break;
            default:
              if (k = P(v, n, f, a, 1, r, h, m - 1), t && 1 < l && k >= h) {
                for (k = n._ctx[f] || (n._ctx[f] = u()), f = this.h[f] || (this.h[f] = W(m - (h || 0))), r = b - t, p = b + t + 1, 0 > r && (r = 0), p > l && (p = l); r < p; r++) {
                  r !== b && P(f, k, e[r], a, 0, m - (r < b ? b - r : r - b), h, m - 1);
                }
              }
          }
        }
      }
      this.f[g] = 1;
      this.u = !1;
    }
    return this;
  };
  m.prototype.s = function(a, b, c) {
    if (x(b)) {
      for (let d = 0, e = b.length; d < e; d++) {
        if (d === e - 1) {
          return this.s(a, b[d], c);
        }
        this.s(a, b[d]);
      }
    } else {
      const h = this.a.index, p = this.a.keys;
      var d = this.a.tag, e = this.a.id;
      let q;
      let n;
      for (var g = 0; g < e.length; g++) {
        q = (q || b)[e[g]];
      }
      if (d) {
        for (e = 0; e < d.length; e++) {
          var f = d[e];
          var k = f.split(":");
          for (g = 0; g < k.length; g++) {
            n = (n || b)[k[g]];
          }
          n = "@" + n;
        }
        k = this.w[f];
        k = k[n] || (k[n] = []);
      }
      if ("remove" === a) {
        delete this.g[q];
        for (let b = 0, a = p.length; b < a; b++) {
          if (b === a - 1) {
            return h[p[b]].remove(q, c), this;
          }
          h[p[b]].remove(q);
        }
      }
      e = this.a.field;
      k && (k[k.length] = b);
      this.g[q] = b;
      for (let g = 0, k = e.length; g < k; g++) {
        d = e[g];
        let l;
        for (f = 0; f < d.length; f++) {
          l = (l || b)[d[f]];
        }
        d = h[p[g]];
        f = "add" === a ? d.add : d.update;
        g === k - 1 ? f.call(d, q, l, c) : f.call(d, q, l);
      }
    }
    return this;
  };
  m.prototype.update = function(a, b, c) {
    if (this.a && A(a)) {
      return this.s("update", a, b);
    }
    this.f["@" + a] && F(b) && (this.remove(a), this.add(a, b, c, !0));
    return this;
  };
  m.prototype.remove = function(a, b, c) {
    if (this.a && A(a)) {
      return this.s("remove", a, b);
    }
    var d = "@" + a;
    if (this.f[d]) {
      if (!c) {
        if (this.async && "function" !== typeof importScripts) {
          let c = this;
          d = new Promise(function(b) {
            setTimeout(function() {
              c.remove(a, null, !0);
              c = null;
              b();
            });
          });
          if (b) {
            d.then(b);
          } else {
            return d;
          }
          return this;
        }
        if (b) {
          return this.remove(a, null, !0), b(), this;
        }
      }
      for (b = 0; b < this.b - (this.threshold || 0); b++) {
        T(this.i[b], a);
      }
      this.depth && T(this.h, a);
      delete this.f[d];
      this.u = !1;
    }
    return this;
  };
  let y;
  m.prototype.search = function(a, b, c, d) {
    if (A(b)) {
      if (x(b)) {
        for (var e = 0; e < b.length; e++) {
          b[e].query = a;
        }
      } else {
        b.query = a;
      }
      a = b;
      b = 1000;
    } else {
      b && J(b) ? (c = b, b = 1000) : b || 0 === b || (b = 1000);
    }
    let g = [], f = a;
    let k, h, p;
    if (A(a) && !x(a)) {
      c || (c = a.callback) && (f.callback = null);
      h = a.sort;
      k = a.page;
      b = a.limit;
      var q = a.threshold;
      p = a.suggest;
      a = a.query;
    }
    if (this.a) {
      q = this.a.index;
      const r = f.where;
      var n = f.bool || "or", l = f.field;
      let B = n;
      let v, u;
      if (l) {
        x(l) || (l = [l]);
      } else {
        if (x(f)) {
          var m = f;
          l = [];
          B = [];
          for (var t = 0; t < f.length; t++) {
            d = f[t], e = d.bool || n, l[t] = d.field, B[t] = e, "not" === e ? v = !0 : "and" === e && (u = !0);
          }
        } else {
          l = this.a.keys;
        }
      }
      n = l.length;
      for (t = 0; t < n; t++) {
        m && (f = m[t]), k && !F(f) && (f.page = null, f.limit = 0), g[t] = q[l[t]].search(f, 0);
      }
      if (c) {
        return c(I.call(this, a, B, g, h, b, p, r, k, u, v));
      }
      if (this.async) {
        const c = this;
        return new Promise(function(d) {
          Promise.all(g).then(function(e) {
            d(I.call(c, a, B, e, h, b, p, r, k, u, v));
          });
        });
      }
      return I.call(this, a, B, g, h, b, p, r, k, u, v);
    }
    q || (q = this.threshold || 0);
    if (!d) {
      if (this.async && "function" !== typeof importScripts) {
        let a = this;
        q = new Promise(function(c) {
          setTimeout(function() {
            c(a.search(f, b, null, !0));
            a = null;
          });
        });
        if (c) {
          q.then(c);
        } else {
          return q;
        }
        return this;
      }
      if (c) {
        return c(this.search(f, b, null, !0)), this;
      }
    }
    if (!a || !F(a)) {
      return g;
    }
    f = a;
    if (this.cache) {
      if (this.u) {
        if (c = this.j.get(a)) {
          return c;
        }
      } else {
        this.j.clear(), this.u = !0;
      }
    }
    f = this.encode(f);
    if (!f.length) {
      return g;
    }
    c = this.c;
    c = J(c) ? c(f) : f.split(this.split);
    this.filter && (c = H(c, this.filter));
    m = c.length;
    d = !0;
    e = [];
    const w = u();
    let v = 0;
    1 < m && (this.depth && "strict" === this.c ? n = !0 : c.sort(da));
    if (!n || (t = this.h)) {
      const b = this.b;
      for (; v < m; v++) {
        let a = c[v];
        if (a) {
          if (n) {
            if (!l) {
              if (t[a]) {
                l = a, w[a] = 1;
              } else {
                if (!p) {
                  return g;
                }
              }
            }
            if (p && v === m - 1 && !e.length) {
              n = !1, a = l || a, w[a] = 0;
            } else {
              if (!l) {
                continue;
              }
            }
          }
          if (!w[a]) {
            const c = [];
            let f = !1, g = 0;
            const k = n ? t[l] : this.i;
            if (k) {
              let d;
              for (let e = 0; e < b - q; e++) {
                if (d = k[e][a]) {
                  c[g++] = d, f = !0;
                }
              }
            }
            if (f) {
              l = a, e[e.length] = 1 < g ? c.concat.apply([], c) : c[0];
            } else {
              if (!p) {
                d = !1;
                break;
              }
            }
            w[a] = 1;
          }
        }
      }
    } else {
      d = !1;
    }
    d && (g = V(e, b, k, p));
    this.cache && this.j.set(a, g);
    return g;
  };
  m.prototype.find = function(a, b) {
    return this.where(a, b, 1)[0] || null;
  };
  m.prototype.where = function(a, b, c, d) {
    const e = this.g, g = [];
    let f = 0;
    let k;
    var h;
    let p;
    if (A(a)) {
      c || (c = b);
      var q = Object.keys(a);
      var n = q.length;
      k = !1;
      if (1 === n && "id" === q[0]) {
        return [e[a.id]];
      }
      if ((h = this.B) && !d) {
        for (var l = 0; l < h.length; l++) {
          var m = h[l], t = a[m];
          if (!C(t)) {
            p = this.w[m]["@" + t];
            if (0 === --n) {
              return p;
            }
            q.splice(q.indexOf(m), 1);
            delete a[m];
            break;
          }
        }
      }
      h = Array(n);
      for (l = 0; l < n; l++) {
        h[l] = q[l].split(":");
      }
    } else {
      if (J(a)) {
        b = d || Object.keys(e);
        c = b.length;
        for (q = 0; q < c; q++) {
          n = e[b[q]], a(n) && (g[f++] = n);
        }
        return g;
      }
      if (C(b)) {
        return [e[a]];
      }
      if ("id" === a) {
        return [e[b]];
      }
      q = [a];
      n = 1;
      h = [a.split(":")];
      k = !0;
    }
    d = p || d || Object.keys(e);
    l = d.length;
    for (m = 0; m < l; m++) {
      t = p ? d[m] : e[d[m]];
      let l = !0;
      for (let c = 0; c < n; c++) {
        k || (b = a[q[c]]);
        const d = h[c], e = d.length;
        let f = t;
        if (1 < e) {
          for (let a = 0; a < e; a++) {
            f = f[d[a]];
          }
        } else {
          f = f[d[0]];
        }
        if (f !== b) {
          l = !1;
          break;
        }
      }
      if (l && (g[f++] = t, c && f === c)) {
        break;
      }
    }
    return g;
  };
  m.prototype.info = function() {
    return {id:this.id, items:this.length, cache:this.cache && this.cache.l ? this.cache.l.length : !1, matcher:S.length + (this.m ? this.m.length : 0), worker:this.C, threshold:this.threshold, depth:this.depth, resolution:this.b, contextual:this.depth && "strict" === this.c};
  };
  m.prototype.clear = function() {
    return this.destroy().init();
  };
  m.prototype.destroy = function() {
    this.cache && (this.j.clear(), this.j = null);
    this.i = this.h = this.f = null;
    if (this.a) {
      const a = this.a.keys;
      for (let b = 0; b < a.length; b++) {
        this.a.index[a[b]].destroy();
      }
      this.a = this.g = null;
    }
    return this;
  };
  m.prototype.export = function() {
    let a;
    if (this.a) {
      const b = this.a.keys;
      a = Array(b.length + 1);
      let c = 0;
      for (; c < b.length; c++) {
        const d = this.a.index[b[c]];
        a[c] = [d.i, d.h, Object.keys(d.f)];
      }
      a[c] = this.g;
    } else {
      a = [this.i, this.h, Object.keys(this.f)];
    }
    return JSON.stringify(a);
  };
  m.prototype.import = function(a) {
    a = JSON.parse(a);
    const b = u();
    if (this.a) {
      var c = this.a.keys, d = c.length, e = a[0][2];
      for (var g = 0; g < e.length; g++) {
        b[e[g]] = 1;
      }
      for (e = 0; e < d; e++) {
        g = this.a.index[c[e]], g.i = a[e][0], g.h = a[e][1], g.f = b, g.g = a[d];
      }
      this.g = a[d];
    } else {
      c = a[2];
      for (d = 0; d < c.length; d++) {
        b[c[d]] = 1;
      }
      this.i = a[0];
      this.h = a[1];
      this.f = b;
    }
  };
  const O = {icase:function(a) {
    return a.toLowerCase();
  }, simple:function() {
    const a = [h("[\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5]"), "a", h("[\u00e8\u00e9\u00ea\u00eb]"), "e", h("[\u00ec\u00ed\u00ee\u00ef]"), "i", h("[\u00f2\u00f3\u00f4\u00f5\u00f6\u0151]"), "o", h("[\u00f9\u00fa\u00fb\u00fc\u0171]"), "u", h("[\u00fd\u0177\u00ff]"), "y", h("\u00f1"), "n", h("\u00e7"), "c", h("\u00df"), "s", h(" & "), " and ", h("[-/]"), " ", h("[^a-z0-9 ]"), "", h("\\s+"), " "];
    return function(b) {
      b = K(b.toLowerCase(), a);
      return " " === b ? "" : b;
    };
  }(), advanced:function() {
    const a = [h("ae"), "a", h("ai"), "ei", h("ay"), "ei", h("ey"), "ei", h("oe"), "o", h("ue"), "u", h("ie"), "i", h("sz"), "s", h("zs"), "s", h("sh"), "s", h("ck"), "k", h("cc"), "k", h("dt"), "t", h("ph"), "f", h("pf"), "f", h("ou"), "o", h("uo"), "u"];
    return function(b, c) {
      if (!b) {
        return b;
      }
      b = this.simple(b);
      2 < b.length && (b = K(b, a));
      c || 1 < b.length && (b = U(b));
      return b;
    };
  }(), extra:function() {
    const a = [h("p"), "b", h("z"), "s", h("[cgq]"), "k", h("n"), "m", h("d"), "t", h("[vw]"), "f", h("[aeiouy]"), ""];
    return function(b) {
      if (!b) {
        return b;
      }
      b = this.advanced(b, !0);
      if (1 < b.length) {
        b = b.split(" ");
        for (let c = 0; c < b.length; c++) {
          const d = b[c];
          1 < d.length && (b[c] = d[0] + K(d.substring(1), a));
        }
        b = b.join(" ");
        b = U(b);
      }
      return b;
    };
  }(), balance:function() {
    const a = [h("[-/]"), " ", h("[^a-z0-9 ]"), "", h("\\s+"), " "];
    return function(b) {
      return U(K(b.toLowerCase(), a));
    };
  }()}, ea = function() {
    function a(a) {
      this.clear();
      this.A = !0 !== a && a;
    }
    a.prototype.clear = function() {
      this.cache = u();
      this.count = u();
      this.index = u();
      this.l = [];
    };
    a.prototype.set = function(a, c) {
      if (this.A && C(this.cache[a])) {
        let b = this.l.length;
        if (b === this.A) {
          b--;
          const a = this.l[b];
          delete this.cache[a];
          delete this.count[a];
          delete this.index[a];
        }
        this.index[a] = b;
        this.l[b] = a;
        this.count[a] = -1;
        this.cache[a] = c;
        this.get(a);
      } else {
        this.cache[a] = c;
      }
    };
    a.prototype.get = function(a) {
      const b = this.cache[a];
      if (this.A && b) {
        var d = ++this.count[a];
        const b = this.index;
        let c = b[a];
        if (0 < c) {
          const f = this.l;
          for (var e = c; this.count[f[--c]] <= d && -1 !== c;) {
          }
          c++;
          if (c !== e) {
            for (d = e; d > c; d--) {
              e = f[d - 1], f[d] = e, b[e] = d;
            }
            f[c] = a;
            b[a] = c;
          }
        }
      }
      return b;
    };
    return a;
  }();
  return m;
}(!1), this);

