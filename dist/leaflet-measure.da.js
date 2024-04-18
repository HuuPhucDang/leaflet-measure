!(function(e) {
  function t(o) {
    if (r[o]) return r[o].exports;
    var n = (r[o] = { i: o, l: !1, exports: {} });
    return e[o].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
  }
  var r = {};
  (t.m = e),
    (t.c = r),
    (t.d = function(e, r, o) {
      t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: o });
    }),
    (t.n = function(e) {
      var r =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(r, 'a', r), r;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = '/dist/'),
    t((t.s = 28));
})([
  function(e, t, r) {
    function o(e) {
      return null == e ? (void 0 === e ? l : i) : u && u in Object(e) ? s(e) : a(e);
    }
    var n = r(4),
      s = r(38),
      a = r(39),
      i = '[object Null]',
      l = '[object Undefined]',
      u = n ? n.toStringTag : void 0;
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      return null != e && 'object' == typeof e;
    }
    e.exports = r;
  },
  function(e, t) {
    function r(e) {
      var t = typeof e;
      return null != e && ('object' == t || 'function' == t);
    }
    e.exports = r;
  },
  function(e, t, r) {
    'use strict';
    function o(e, t, r) {
      if (((r = r || {}), !p(r))) throw new Error('options is invalid');
      var o = r.bbox,
        n = r.id;
      if (void 0 === e) throw new Error('geometry is required');
      if (t && t.constructor !== Object) throw new Error('properties must be an Object');
      o && m(o), n && h(n);
      var s = { type: 'Feature' };
      return n && (s.id = n), o && (s.bbox = o), (s.properties = t || {}), (s.geometry = e), s;
    }
    function n(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      if (!Array.isArray(e)) throw new Error('coordinates must be an Array');
      if (e.length < 2) throw new Error('coordinates must be at least 2 numbers long');
      if (!f(e[0]) || !f(e[1])) throw new Error('coordinates must contain numbers');
      return o({ type: 'Point', coordinates: e }, t, r);
    }
    function s(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      for (var n = 0; n < e.length; n++) {
        var s = e[n];
        if (s.length < 4)
          throw new Error('Each LinearRing of a Polygon must have 4 or more Positions.');
        for (var a = 0; a < s[s.length - 1].length; a++) {
          if ((0 === n && 0 === a && !f(s[0][0])) || !f(s[0][1]))
            throw new Error('coordinates must contain numbers');
          if (s[s.length - 1][a] !== s[0][a])
            throw new Error('First and last Position are not equivalent.');
        }
      }
      return o({ type: 'Polygon', coordinates: e }, t, r);
    }
    function a(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      if (e.length < 2) throw new Error('coordinates must be an array of two or more positions');
      if (!f(e[0][1]) || !f(e[0][1])) throw new Error('coordinates must contain numbers');
      return o({ type: 'LineString', coordinates: e }, t, r);
    }
    function i(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return o({ type: 'MultiLineString', coordinates: e }, t, r);
    }
    function l(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return o({ type: 'MultiPoint', coordinates: e }, t, r);
    }
    function u(e, t, r) {
      if (!e) throw new Error('coordinates is required');
      return o({ type: 'MultiPolygon', coordinates: e }, t, r);
    }
    function c(e, t) {
      if (void 0 === e || null === e) throw new Error('radians is required');
      if (t && 'string' != typeof t) throw new Error('units must be a string');
      var r = y[t || 'kilometers'];
      if (!r) throw new Error(t + ' units is invalid');
      return e * r;
    }
    function d(e) {
      if (null === e || void 0 === e) throw new Error('degrees is required');
      return (e % 360) * Math.PI / 180;
    }
    function f(e) {
      return !isNaN(e) && null !== e && !Array.isArray(e);
    }
    function p(e) {
      return !!e && e.constructor === Object;
    }
    function m(e) {
      if (!e) throw new Error('bbox is required');
      if (!Array.isArray(e)) throw new Error('bbox must be an Array');
      if (4 !== e.length && 6 !== e.length)
        throw new Error('bbox must be an Array of 4 or 6 numbers');
      e.forEach(function(e) {
        if (!f(e)) throw new Error('bbox must only contain numbers');
      });
    }
    function h(e) {
      if (!e) throw new Error('id is required');
      if (-1 === ['string', 'number'].indexOf(typeof e))
        throw new Error('id must be a number or a string');
    }
    r.d(t, 'b', function() {
      return o;
    }),
      r.d(t, 'f', function() {
        return n;
      }),
      r.d(t, 'e', function() {
        return a;
      }),
      r.d(t, 'g', function() {
        return c;
      }),
      r.d(t, 'a', function() {
        return d;
      }),
      r.d(t, 'c', function() {
        return f;
      }),
      r.d(t, 'd', function() {
        return p;
      });
    var y = {
      meters: 6371008.8,
      metres: 6371008.8,
      millimeters: 6371008800,
      millimetres: 6371008800,
      centimeters: 637100880,
      centimetres: 637100880,
      kilometers: 6371.0088,
      kilometres: 6371.0088,
      miles: 3958.761333810546,
      nauticalmiles: 6371008.8 / 1852,
      inches: 6371008.8 * 39.37,
      yards: 6371008.8 / 1.0936,
      feet: 20902260.511392,
      radians: 1,
      degrees: 6371008.8 / 111325
    };
  },
  function(e, t, r) {
    var o = r(5),
      n = o.Symbol;
    e.exports = n;
  },
  function(e, t, r) {
    var o = r(11),
      n = 'object' == typeof self && self && self.Object === Object && self,
      s = o || n || Function('return this')();
    e.exports = s;
  },
  function(e, t) {
    function r(e, t) {
      return e === t || (e !== e && t !== t);
    }
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      return null != e && s(e.length) && !n(e);
    }
    var n = r(10),
      s = r(16);
    e.exports = o;
  },
  function(e, t, r) {
    function o(e, t, r) {
      '__proto__' == t && n
        ? n(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    var n = r(9);
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(35),
      n = (function() {
        try {
          var e = o(Object, 'defineProperty');
          return e({}, '', {}), e;
        } catch (e) {}
      })();
    e.exports = n;
  },
  function(e, t, r) {
    function o(e) {
      if (!s(e)) return !1;
      var t = n(e);
      return t == i || t == l || t == a || t == u;
    }
    var n = r(0),
      s = r(2),
      a = '[object AsyncFunction]',
      i = '[object Function]',
      l = '[object GeneratorFunction]',
      u = '[object Proxy]';
    e.exports = o;
  },
  function(e, t, r) {
    (function(t) {
      var r = 'object' == typeof t && t && t.Object === Object && t;
      e.exports = r;
    }.call(t, r(37)));
  },
  function(e, t, r) {
    function o(e, t) {
      return a(s(e, t, n), e + '');
    }
    var n = r(13),
      s = r(45),
      a = r(46);
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      return e;
    }
    e.exports = r;
  },
  function(e, t) {
    function r(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    e.exports = r;
  },
  function(e, t, r) {
    function o(e, t, r) {
      if (!i(r)) return !1;
      var o = typeof t;
      return !!('number' == o ? s(r) && a(t, r.length) : 'string' == o && t in r) && n(r[t], e);
    }
    var n = r(6),
      s = r(7),
      a = r(17),
      i = r(2);
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= o;
    }
    var o = 9007199254740991;
    e.exports = r;
  },
  function(e, t) {
    function r(e, t) {
      var r = typeof e;
      return (
        !!(t = null == t ? o : t) &&
        ('number' == r || ('symbol' != r && n.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
      );
    }
    var o = 9007199254740991,
      n = /^(?:0|[1-9]\d*)$/;
    e.exports = r;
  },
  function(e, t, r) {
    function o(e, t) {
      var r = a(e),
        o = !r && s(e),
        c = !r && !o && i(e),
        f = !r && !o && !c && u(e),
        p = r || o || c || f,
        m = p ? n(e.length, String) : [],
        h = m.length;
      for (var y in e)
        (!t && !d.call(e, y)) ||
          (p &&
            ('length' == y ||
              (c && ('offset' == y || 'parent' == y)) ||
              (f && ('buffer' == y || 'byteLength' == y || 'byteOffset' == y)) ||
              l(y, h))) ||
          m.push(y);
      return m;
    }
    var n = r(51),
      s = r(52),
      a = r(19),
      i = r(54),
      l = r(17),
      u = r(56),
      c = Object.prototype,
      d = c.hasOwnProperty;
    e.exports = o;
  },
  function(e, t) {
    var r = Array.isArray;
    e.exports = r;
  },
  function(e, t) {
    e.exports = function(e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function() {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function() {
              return e.l;
            }
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function() {
              return e.i;
            }
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function(e, t) {
    function r(e) {
      var t = e && e.constructor;
      return e === (('function' == typeof t && t.prototype) || o);
    }
    var o = Object.prototype;
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      if (!s(e)) return !1;
      var t = n(e);
      return (
        t == l || t == i || ('string' == typeof e.message && 'string' == typeof e.name && !a(e))
      );
    }
    var n = r(0),
      s = r(1),
      a = r(63),
      i = '[object DOMException]',
      l = '[object Error]';
    e.exports = o;
  },
  function(e, t) {
    function r(e, t) {
      return function(r) {
        return e(t(r));
      };
    }
    e.exports = r;
  },
  function(e, t) {
    function r(e, t) {
      for (var r = -1, o = null == e ? 0 : e.length, n = Array(o); ++r < o; ) n[r] = t(e[r], r, e);
      return n;
    }
    e.exports = r;
  },
  function(e, t) {
    var r = /<%=([\s\S]+?)%>/g;
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      return null == e ? '' : n(e);
    }
    var n = r(75);
    e.exports = o;
  },
  function(e, t, r) {
    'use strict';
    function o(e, t, r) {
      if (null !== e)
        for (
          var n,
            s,
            a,
            i,
            l,
            u,
            c,
            d,
            f = 0,
            p = 0,
            m = e.type,
            h = 'FeatureCollection' === m,
            y = 'Feature' === m,
            b = h ? e.features.length : 1,
            v = 0;
          v < b;
          v++
        ) {
          (c = h ? e.features[v].geometry : y ? e.geometry : e),
            (d = !!c && 'GeometryCollection' === c.type),
            (l = d ? c.geometries.length : 1);
          for (var g = 0; g < l; g++) {
            var _ = 0,
              j = 0;
            if (null !== (i = d ? c.geometries[g] : c)) {
              u = i.coordinates;
              var M = i.type;
              switch (((f = !r || ('Polygon' !== M && 'MultiPolygon' !== M) ? 0 : 1), M)) {
                case null:
                  break;
                case 'Point':
                  if (!1 === t(u, p, v, _, j)) return !1;
                  p++, _++;
                  break;
                case 'LineString':
                case 'MultiPoint':
                  for (n = 0; n < u.length; n++) {
                    if (!1 === t(u[n], p, v, _, j)) return !1;
                    p++, 'MultiPoint' === M && _++;
                  }
                  'LineString' === M && _++;
                  break;
                case 'Polygon':
                case 'MultiLineString':
                  for (n = 0; n < u.length; n++) {
                    for (s = 0; s < u[n].length - f; s++) {
                      if (!1 === t(u[n][s], p, v, _, j)) return !1;
                      p++;
                    }
                    'MultiLineString' === M && _++, 'Polygon' === M && j++;
                  }
                  'Polygon' === M && _++;
                  break;
                case 'MultiPolygon':
                  for (n = 0; n < u.length; n++) {
                    for ('MultiPolygon' === M && (j = 0), s = 0; s < u[n].length; s++) {
                      for (a = 0; a < u[n][s].length - f; a++) {
                        if (!1 === t(u[n][s][a], p, v, _, j)) return !1;
                        p++;
                      }
                      j++;
                    }
                    _++;
                  }
                  break;
                case 'GeometryCollection':
                  for (n = 0; n < i.geometries.length; n++)
                    if (!1 === o(i.geometries[n], t, r)) return !1;
                  break;
                default:
                  throw new Error('Unknown Geometry Type');
              }
            }
          }
        }
    }
    function n(e, t) {
      var r,
        o,
        n,
        s,
        a,
        i,
        l,
        u,
        c,
        d,
        f = 0,
        p = 'FeatureCollection' === e.type,
        m = 'Feature' === e.type,
        h = p ? e.features.length : 1;
      for (r = 0; r < h; r++) {
        for (
          i = p ? e.features[r].geometry : m ? e.geometry : e,
            u = p ? e.features[r].properties : m ? e.properties : {},
            c = p ? e.features[r].bbox : m ? e.bbox : void 0,
            d = p ? e.features[r].id : m ? e.id : void 0,
            l = !!i && 'GeometryCollection' === i.type,
            a = l ? i.geometries.length : 1,
            n = 0;
          n < a;
          n++
        )
          if (null !== (s = l ? i.geometries[n] : i))
            switch (s.type) {
              case 'Point':
              case 'LineString':
              case 'MultiPoint':
              case 'Polygon':
              case 'MultiLineString':
              case 'MultiPolygon':
                if (!1 === t(s, f, u, c, d)) return !1;
                break;
              case 'GeometryCollection':
                for (o = 0; o < s.geometries.length; o++)
                  if (!1 === t(s.geometries[o], f, u, c, d)) return !1;
                break;
              default:
                throw new Error('Unknown Geometry Type');
            }
          else if (!1 === t(null, f, u, c, d)) return !1;
        f++;
      }
    }
    function s(e, t, r) {
      var o = r;
      return (
        n(e, function(e, n, s, a, i) {
          o = 0 === n && void 0 === r ? e : t(o, e, n, s, a, i);
        }),
        o
      );
    }
    function a(e, t) {
      n(e, function(e, r, o, n, s) {
        var a = null === e ? null : e.type;
        switch (a) {
          case null:
          case 'Point':
          case 'LineString':
          case 'Polygon':
            if (!1 === t(Object(u.b)(e, o, { bbox: n, id: s }), r, 0)) return !1;
            return;
        }
        var i;
        switch (a) {
          case 'MultiPoint':
            i = 'Point';
            break;
          case 'MultiLineString':
            i = 'LineString';
            break;
          case 'MultiPolygon':
            i = 'Polygon';
        }
        for (var l = 0; l < e.coordinates.length; l++) {
          var c = e.coordinates[l],
            d = { type: i, coordinates: c };
          if (!1 === t(Object(u.b)(d, o), r, l)) return !1;
        }
      });
    }
    function i(e, t) {
      a(e, function(e, r, n) {
        var s = 0;
        if (e.geometry) {
          var a = e.geometry.type;
          if ('Point' !== a && 'MultiPoint' !== a) {
            var i;
            return (
              !1 !==
                o(e, function(o, a, l, c, d) {
                  if (void 0 === i) return void (i = o);
                  var f = Object(u.e)([i, o], e.properties);
                  if (!1 === t(f, r, n, d, s)) return !1;
                  s++, (i = o);
                }) && void 0
            );
          }
        }
      });
    }
    function l(e, t, r) {
      var o = r,
        n = !1;
      return (
        i(e, function(e, s, a, i, l) {
          (o = !1 === n && void 0 === r ? e : t(o, e, s, a, i, l)), (n = !0);
        }),
        o
      );
    }
    r.d(t, 'a', function() {
      return s;
    }),
      r.d(t, 'b', function() {
        return l;
      });
    var u = r(3);
  },
  function(e, t, r) {
    e.exports = r(29);
  },
  function(e, t, r) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    r(30);
    var n = r(31),
      s = o(n),
      a = r(79),
      i = o(a),
      l = r(80),
      u = o(l),
      c = r(85),
      d = (function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
      })(c),
      f = r(86),
      p = o(f),
      m = r(87),
      h = r(88),
      y = { imports: { numberFormat: m.numberFormat }, interpolate: /{{([\s\S]+?)}}/g },
      b = (0, s.default)(h.controlTemplate, y),
      v = (0, s.default)(h.resultsTemplate, y),
      g = (0, s.default)(h.pointPopupTemplate, y),
      _ = (0, s.default)(h.linePopupTemplate, y),
      j = (0, s.default)(h.areaPopupTemplate, y);
    (L.Control.Measure = L.Control.extend({
      _className: 'leaflet-control-measure',
      options: {
        units: {},
        position: 'topright',
        primaryLengthUnit: 'feet',
        secondaryLengthUnit: 'miles',
        primaryAreaUnit: 'acres',
        activeColor: '#ABE67E',
        completedColor: '#C8F2BE',
        captureZIndex: 1e4,
        popupOptions: { className: 'leaflet-measure-resultpopup', autoPanPadding: [10, 10] }
      },
      initialize: function(e) {
        L.setOptions(this, e);
        var t = this.options,
          r = t.activeColor,
          o = t.completedColor;
        (this._symbols = new p.default({ activeColor: r, completedColor: o })),
          (this.options.units = L.extend({}, i.default, this.options.units));
      },
      onAdd: function(e) {
        return (
          (this._map = e),
          (this._latlngs = []),
          this._initLayout(),
          e.on('click', this._collapse, this),
          (this._layer = L.layerGroup().addTo(e)),
          this._container
        );
      },
      onRemove: function(e) {
        e.off('click', this._collapse, this), e.removeLayer(this._layer);
      },
      _initLayout: function() {
        var e = this._className,
          t = (this._container = L.DomUtil.create('div', e + ' leaflet-bar'));
        (t.innerHTML = b({ model: { className: e } })),
          t.setAttribute('aria-haspopup', !0),
          L.DomEvent.disableClickPropagation(t),
          L.DomEvent.disableScrollPropagation(t);
        var r = (this.$toggle = (0, c.selectOne)('.js-toggle', t));
        this.$interaction = (0, c.selectOne)('.js-interaction', t);
        var o = (0, c.selectOne)('.js-start', t),
          n = (0, c.selectOne)('.js-cancel', t),
          s = (0, c.selectOne)('.js-finish', t);
        (this.$startPrompt = (0, c.selectOne)('.js-startprompt', t)),
          (this.$measuringPrompt = (0, c.selectOne)('.js-measuringprompt', t)),
          (this.$startHelp = (0, c.selectOne)('.js-starthelp', t)),
          (this.$results = (0, c.selectOne)('.js-results', t)),
          (this.$measureTasks = (0, c.selectOne)('.js-measuretasks', t)),
          this._collapse(),
          this._updateMeasureNotStarted(),
          L.Browser.android ||
            (L.DomEvent.on(t, 'mouseenter', this._expand, this),
            L.DomEvent.on(t, 'mouseleave', this._collapse, this)),
          L.DomEvent.on(r, 'click', L.DomEvent.stop),
          L.Browser.touch
            ? L.DomEvent.on(r, 'click', this._expand, this)
            : L.DomEvent.on(r, 'focus', this._expand, this),
          L.DomEvent.on(o, 'click', L.DomEvent.stop),
          L.DomEvent.on(o, 'click', this._startMeasure, this),
          L.DomEvent.on(n, 'click', L.DomEvent.stop),
          L.DomEvent.on(n, 'click', this._finishMeasure, this),
          L.DomEvent.on(s, 'click', L.DomEvent.stop),
          L.DomEvent.on(s, 'click', this._handleMeasureDoubleClick, this);
      },
      _expand: function() {
        d.hide(this.$toggle), d.show(this.$interaction);
      },
      _collapse: function() {
        this._locked || (d.hide(this.$interaction), d.show(this.$toggle));
      },
      _updateMeasureNotStarted: function() {
        d.hide(this.$startHelp),
          d.hide(this.$results),
          d.hide(this.$measureTasks),
          d.hide(this.$measuringPrompt),
          d.show(this.$startPrompt);
      },
      _updateMeasureStartedNoPoints: function() {
        d.hide(this.$results),
          d.show(this.$startHelp),
          d.show(this.$measureTasks),
          d.hide(this.$startPrompt),
          d.show(this.$measuringPrompt);
      },
      _updateMeasureStartedWithPoints: function() {
        d.hide(this.$startHelp),
          d.show(this.$results),
          d.show(this.$measureTasks),
          d.hide(this.$startPrompt),
          d.show(this.$measuringPrompt);
      },
      _startMeasure: function() {
        (this._locked = !0),
          (this._measureVertexes = L.featureGroup().addTo(this._layer)),
          (this._captureMarker = L.marker(this._map.getCenter(), {
            clickable: !0,
            zIndexOffset: this.options.captureZIndex,
            opacity: 0,
            autoPanOnFocus: !1
          }).addTo(this._layer)),
          this._setCaptureMarkerIcon(),
          this._captureMarker
            .on('mouseout', this._handleMapMouseOut, this)
            .on('dblclick', this._handleMeasureDoubleClick, this)
            .on('click', this._handleMeasureClick, this),
          this._map
            .on('mousemove', this._handleMeasureMove, this)
            .on('mouseout', this._handleMapMouseOut, this)
            .on('move', this._centerCaptureMarker, this)
            .on('resize', this._setCaptureMarkerIcon, this),
          L.DomEvent.on(this._container, 'mouseenter', this._handleMapMouseOut, this),
          this._updateMeasureStartedNoPoints(),
          this._map.fire('measurestart', null, !1);
      },
      _finishMeasure: function() {
        var e = L.extend({}, this._resultsModel, { points: this._latlngs });
        (this._locked = !1),
          L.DomEvent.off(this._container, 'mouseover', this._handleMapMouseOut, this),
          this._clearMeasure(),
          this._captureMarker
            .off('mouseout', this._handleMapMouseOut, this)
            .off('dblclick', this._handleMeasureDoubleClick, this)
            .off('click', this._handleMeasureClick, this),
          this._map
            .off('mousemove', this._handleMeasureMove, this)
            .off('mouseout', this._handleMapMouseOut, this)
            .off('move', this._centerCaptureMarker, this)
            .off('resize', this._setCaptureMarkerIcon, this),
          this._layer.removeLayer(this._measureVertexes).removeLayer(this._captureMarker),
          (this._measureVertexes = null),
          this._updateMeasureNotStarted(),
          this._collapse(),
          this._map.fire('measurefinish', e, !1);
      },
      _clearMeasure: function() {
        (this._latlngs = []),
          (this._resultsModel = null),
          this._measureVertexes.clearLayers(),
          this._measureDrag && this._layer.removeLayer(this._measureDrag),
          this._measureArea && this._layer.removeLayer(this._measureArea),
          this._measureBoundary && this._layer.removeLayer(this._measureBoundary),
          (this._measureDrag = null),
          (this._measureArea = null),
          (this._measureBoundary = null);
      },
      _centerCaptureMarker: function() {
        this._captureMarker.setLatLng(this._map.getCenter());
      },
      _setCaptureMarkerIcon: function() {
        this._captureMarker.setIcon(L.divIcon({ iconSize: this._map.getSize().multiplyBy(2) }));
      },
      _getMeasurementDisplayStrings: function(e) {
        function t(e, t, n, s, a) {
          if (t && o[t]) {
            var i = r(e, o[t], s, a);
            if (n && o[n]) {
              i = i + ' (' + r(e, o[n], s, a) + ')';
            }
            return i;
          }
          return r(e, null, s, a);
        }
        function r(e, t, r, o) {
          var n = {
              acres: 'acre',
              feet: 'fod',
              kilometers: 'km',
              hectares: 'ha',
              meters: 'm',
              miles: 'mil',
              sqfeet: 'kvadratfod',
              sqmeters: 'm²',
              sqmiles: 'kvadratmil'
            },
            s = L.extend({ factor: 1, decimals: 0 }, t);
          return [
            (0, m.numberFormat)(e * s.factor, s.decimals, r || ',', o || '.'),
            n[s.display] || s.display
          ].join(' ');
        }
        var o = this.options.units;
        return {
          lengthDisplay: t(
            e.length,
            this.options.primaryLengthUnit,
            this.options.secondaryLengthUnit,
            this.options.decPoint,
            this.options.thousandsSep
          ),
          areaDisplay: t(
            e.area,
            this.options.primaryAreaUnit,
            this.options.secondaryAreaUnit,
            this.options.decPoint,
            this.options.thousandsSep
          )
        };
      },
      _updateResults: function() {
        var e = (0, u.default)(this._latlngs),
          t = (this._resultsModel = L.extend({}, e, this._getMeasurementDisplayStrings(e), {
            pointCount: this._latlngs.length
          }));
        this.$results.innerHTML = v({ model: t });
      },
      _handleMeasureMove: function(e) {
        this._measureDrag
          ? this._measureDrag.setLatLng(e.latlng)
          : (this._measureDrag = L.circleMarker(
              e.latlng,
              this._symbols.getSymbol('measureDrag')
            ).addTo(this._layer)),
          this._measureDrag.bringToFront();
      },
      _handleMeasureDoubleClick: function() {
        var e = this._latlngs,
          t = void 0,
          r = void 0;
        if ((this._finishMeasure(), e.length)) {
          e.length > 2 && e.push(e[0]);
          var o = (0, u.default)(e);
          1 === e.length
            ? ((t = L.circleMarker(e[0], this._symbols.getSymbol('resultPoint'))),
              (r = g({ model: o })))
            : 2 === e.length
              ? ((t = L.polyline(e, this._symbols.getSymbol('resultLine'))),
                (r = _({ model: L.extend({}, o, this._getMeasurementDisplayStrings(o)) })))
              : ((t = L.polygon(e, this._symbols.getSymbol('resultArea'))),
                (r = j({ model: L.extend({}, o, this._getMeasurementDisplayStrings(o)) })));
          var n = L.DomUtil.create('div', '');
          n.innerHTML = r;
          var s = (0, c.selectOne)('.js-zoomto', n);
          s &&
            (L.DomEvent.on(s, 'click', L.DomEvent.stop),
            L.DomEvent.on(
              s,
              'click',
              function() {
                t.getBounds
                  ? this._map.fitBounds(t.getBounds(), { padding: [20, 20], maxZoom: 17 })
                  : t.getLatLng && this._map.panTo(t.getLatLng());
              },
              this
            ));
          var a = (0, c.selectOne)('.js-deletemarkup', n);
          a &&
            (L.DomEvent.on(a, 'click', L.DomEvent.stop),
            L.DomEvent.on(
              a,
              'click',
              function() {
                this._layer.removeLayer(t);
              },
              this
            )),
            t.addTo(this._layer),
            t.bindPopup(n, this.options.popupOptions),
            t.getBounds
              ? t.openPopup(t.getBounds().getCenter())
              : t.getLatLng && t.openPopup(t.getLatLng());
        }
      },
      _handleMeasureClick: function(e) {
        var t = this._map.mouseEventToLatLng(e.originalEvent),
          r = this._latlngs[this._latlngs.length - 1],
          o = this._symbols.getSymbol('measureVertex');
        (r && t.equals(r)) ||
          (this._latlngs.push(t),
          this._addMeasureArea(this._latlngs),
          this._addMeasureBoundary(this._latlngs),
          this._measureVertexes.eachLayer(function(e) {
            e.setStyle(o), e._path && e._path.setAttribute('class', o.className);
          }),
          this._addNewVertex(t),
          this._measureBoundary && this._measureBoundary.bringToFront(),
          this._measureVertexes.bringToFront()),
          this._updateResults(),
          this._updateMeasureStartedWithPoints();
      },
      _handleMapMouseOut: function() {
        this._measureDrag &&
          (this._layer.removeLayer(this._measureDrag), (this._measureDrag = null));
      },
      _addNewVertex: function(e) {
        L.circleMarker(e, this._symbols.getSymbol('measureVertexActive')).addTo(
          this._measureVertexes
        );
      },
      _addMeasureArea: function(e) {
        if (e.length < 3)
          return void (
            this._measureArea &&
            (this._layer.removeLayer(this._measureArea), (this._measureArea = null))
          );
        this._measureArea
          ? this._measureArea.setLatLngs(e)
          : (this._measureArea = L.polygon(e, this._symbols.getSymbol('measureArea')).addTo(
              this._layer
            ));
      },
      _addMeasureBoundary: function(e) {
        if (e.length < 2)
          return void (
            this._measureBoundary &&
            (this._layer.removeLayer(this._measureBoundary), (this._measureBoundary = null))
          );
        this._measureBoundary
          ? this._measureBoundary.setLatLngs(e)
          : (this._measureBoundary = L.polyline(
              e,
              this._symbols.getSymbol('measureBoundary')
            ).addTo(this._layer));
      }
    })),
      L.Map.mergeOptions({ measureControl: !1 }),
      L.Map.addInitHook(function() {
        this.options.measureControl && (this.measureControl = new L.Control.Measure().addTo(this));
      }),
      (L.control.measure = function(e) {
        return new L.Control.Measure(e);
      });
  },
  function(e, t) {
    throw new Error(
      'Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: OS X Unsupported architecture (arm64) with Unsupported runtime (93)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.7.2\n    at module.exports (/Users/mac/WorkCollections/LeafletMeasure/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/Users/mac/WorkCollections/LeafletMeasure/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (node:internal/modules/cjs/loader:1103:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Module.require (node:internal/modules/cjs/loader:1005:19)\n    at require (node:internal/modules/cjs/helpers:102:18)\n    at Object.<anonymous> (/Users/mac/WorkCollections/LeafletMeasure/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (node:internal/modules/cjs/loader:1103:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Module.require (node:internal/modules/cjs/loader:1005:19)\n    at require (node:internal/modules/cjs/helpers:102:18)\n    at loadLoader (/Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/Compilation.js:151:10)\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/Compilation.js:456:10\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/NormalModuleFactory.js:241:5\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/NormalModuleFactory.js:94:13\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.<anonymous> (/Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/mac/WorkCollections/LeafletMeasure/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/Compilation.js:151:10)\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/Compilation.js:456:10\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/NormalModuleFactory.js:241:5\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/NormalModuleFactory.js:94:13\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.<anonymous> (/Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/mac/WorkCollections/LeafletMeasure/node_modules/tapable/lib/Tapable.js:272:13)\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/NormalModuleFactory.js:69:10\n    at /Users/mac/WorkCollections/LeafletMeasure/node_modules/webpack/lib/NormalModuleFactory.js:194:7\n    at processTicksAndRejections (node:internal/process/task_queues:78:11)'
    );
  },
  function(e, t, r) {
    function o(e, t, r) {
      var o = p.imports._.templateSettings || p;
      r && c(e, t, r) && (t = void 0), (e = m(e)), (t = n({}, t, o, i));
      var j,
        M,
        L = n({}, t.imports, o.imports, i),
        k = d(L),
        w = a(L, k),
        x = 0,
        C = t.interpolate || g,
        O = "__p += '",
        P = RegExp(
          (t.escape || g).source +
            '|' +
            C.source +
            '|' +
            (C === f ? v : g).source +
            '|' +
            (t.evaluate || g).source +
            '|$',
          'g'
        ),
        E = 'sourceURL' in t ? '//# sourceURL=' + t.sourceURL + '\n' : '';
      e.replace(P, function(t, r, o, n, s, a) {
        return (
          o || (o = n),
          (O += e.slice(x, a).replace(_, l)),
          r && ((j = !0), (O += "' +\n__e(" + r + ") +\n'")),
          s && ((M = !0), (O += "';\n" + s + ";\n__p += '")),
          o && (O += "' +\n((__t = (" + o + ")) == null ? '' : __t) +\n'"),
          (x = a + t.length),
          t
        );
      }),
        (O += "';\n");
      var S = t.variable;
      S || (O = 'with (obj) {\n' + O + '\n}\n'),
        (O = (M ? O.replace(h, '') : O).replace(y, '$1').replace(b, '$1;')),
        (O =
          'function(' +
          (S || 'obj') +
          ') {\n' +
          (S ? '' : 'obj || (obj = {});\n') +
          "var __t, __p = ''" +
          (j ? ', __e = _.escape' : '') +
          (M
            ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
            : ';\n') +
          O +
          'return __p\n}');
      var A = s(function() {
        return Function(k, E + 'return ' + O).apply(void 0, w);
      });
      if (((A.source = O), u(A))) throw A;
      return A;
    }
    var n = r(32),
      s = r(62),
      a = r(65),
      i = r(66),
      l = r(67),
      u = r(22),
      c = r(15),
      d = r(68),
      f = r(25),
      p = r(71),
      m = r(26),
      h = /\b__p \+= '';/g,
      y = /\b(__p \+=) '' \+/g,
      b = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      v = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      g = /($^)/,
      _ = /['\n\r\u2028\u2029\\]/g;
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(33),
      n = r(44),
      s = r(50),
      a = n(function(e, t, r, n) {
        o(t, s(t), e, n);
      });
    e.exports = a;
  },
  function(e, t, r) {
    function o(e, t, r, o) {
      var a = !r;
      r || (r = {});
      for (var i = -1, l = t.length; ++i < l; ) {
        var u = t[i],
          c = o ? o(r[u], e[u], u, r, e) : void 0;
        void 0 === c && (c = e[u]), a ? s(r, u, c) : n(r, u, c);
      }
      return r;
    }
    var n = r(34),
      s = r(8);
    e.exports = o;
  },
  function(e, t, r) {
    function o(e, t, r) {
      var o = e[t];
      (i.call(e, t) && s(o, r) && (void 0 !== r || t in e)) || n(e, t, r);
    }
    var n = r(8),
      s = r(6),
      a = Object.prototype,
      i = a.hasOwnProperty;
    e.exports = o;
  },
  function(e, t, r) {
    function o(e, t) {
      var r = s(e, t);
      return n(r) ? r : void 0;
    }
    var n = r(36),
      s = r(43);
    e.exports = o;
  },
  function(e, t, r) {
    function o(e) {
      return !(!a(e) || s(e)) && (n(e) ? m : u).test(i(e));
    }
    var n = r(10),
      s = r(40),
      a = r(2),
      i = r(42),
      l = /[\\^$.*+?()[\]{}|]/g,
      u = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      d = Object.prototype,
      f = c.toString,
      p = d.hasOwnProperty,
      m = RegExp(
        '^' +
          f
            .call(p)
            .replace(l, '\\$&')
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
          '$'
      );
    e.exports = o;
  },
  function(e, t) {
    var r;
    r = (function() {
      return this;
    })();
    try {
      r = r || Function('return this')() || (0, eval)('this');
    } catch (e) {
      'object' == typeof window && (r = window);
    }
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      var t = a.call(e, l),
        r = e[l];
      try {
        e[l] = void 0;
        var o = !0;
      } catch (e) {}
      var n = i.call(e);
      return o && (t ? (e[l] = r) : delete e[l]), n;
    }
    var n = r(4),
      s = Object.prototype,
      a = s.hasOwnProperty,
      i = s.toString,
      l = n ? n.toStringTag : void 0;
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      return n.call(e);
    }
    var o = Object.prototype,
      n = o.toString;
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      return !!s && s in e;
    }
    var n = r(41),
      s = (function() {
        var e = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || '');
        return e ? 'Symbol(src)_1.' + e : '';
      })();
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(5),
      n = o['__core-js_shared__'];
    e.exports = n;
  },
  function(e, t) {
    function r(e) {
      if (null != e) {
        try {
          return n.call(e);
        } catch (e) {}
        try {
          return e + '';
        } catch (e) {}
      }
      return '';
    }
    var o = Function.prototype,
      n = o.toString;
    e.exports = r;
  },
  function(e, t) {
    function r(e, t) {
      return null == e ? void 0 : e[t];
    }
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      return n(function(t, r) {
        var o = -1,
          n = r.length,
          a = n > 1 ? r[n - 1] : void 0,
          i = n > 2 ? r[2] : void 0;
        for (
          a = e.length > 3 && 'function' == typeof a ? (n--, a) : void 0,
            i && s(r[0], r[1], i) && ((a = n < 3 ? void 0 : a), (n = 1)),
            t = Object(t);
          ++o < n;

        ) {
          var l = r[o];
          l && e(t, l, o, a);
        }
        return t;
      });
    }
    var n = r(12),
      s = r(15);
    e.exports = o;
  },
  function(e, t, r) {
    function o(e, t, r) {
      return (
        (t = s(void 0 === t ? e.length - 1 : t, 0)),
        function() {
          for (var o = arguments, a = -1, i = s(o.length - t, 0), l = Array(i); ++a < i; )
            l[a] = o[t + a];
          a = -1;
          for (var u = Array(t + 1); ++a < t; ) u[a] = o[a];
          return (u[t] = r(l)), n(e, this, u);
        }
      );
    }
    var n = r(14),
      s = Math.max;
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(47),
      n = r(49),
      s = n(o);
    e.exports = s;
  },
  function(e, t, r) {
    var o = r(48),
      n = r(9),
      s = r(13),
      a = n
        ? function(e, t) {
            return n(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: o(t),
              writable: !0
            });
          }
        : s;
    e.exports = a;
  },
  function(e, t) {
    function r(e) {
      return function() {
        return e;
      };
    }
    e.exports = r;
  },
  function(e, t) {
    function r(e) {
      var t = 0,
        r = 0;
      return function() {
        var a = s(),
          i = n - (a - r);
        if (((r = a), i > 0)) {
          if (++t >= o) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    var o = 800,
      n = 16,
      s = Date.now;
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      return a(e) ? n(e, !0) : s(e);
    }
    var n = r(18),
      s = r(60),
      a = r(7);
    e.exports = o;
  },
  function(e, t) {
    function r(e, t) {
      for (var r = -1, o = Array(e); ++r < e; ) o[r] = t(r);
      return o;
    }
    e.exports = r;
  },
  function(e, t, r) {
    var o = r(53),
      n = r(1),
      s = Object.prototype,
      a = s.hasOwnProperty,
      i = s.propertyIsEnumerable,
      l = o(
        (function() {
          return arguments;
        })()
      )
        ? o
        : function(e) {
            return n(e) && a.call(e, 'callee') && !i.call(e, 'callee');
          };
    e.exports = l;
  },
  function(e, t, r) {
    function o(e) {
      return s(e) && n(e) == a;
    }
    var n = r(0),
      s = r(1),
      a = '[object Arguments]';
    e.exports = o;
  },
  function(e, t, r) {
    (function(e) {
      var o = r(5),
        n = r(55),
        s = 'object' == typeof t && t && !t.nodeType && t,
        a = s && 'object' == typeof e && e && !e.nodeType && e,
        i = a && a.exports === s,
        l = i ? o.Buffer : void 0,
        u = l ? l.isBuffer : void 0,
        c = u || n;
      e.exports = c;
    }.call(t, r(20)(e)));
  },
  function(e, t) {
    function r() {
      return !1;
    }
    e.exports = r;
  },
  function(e, t, r) {
    var o = r(57),
      n = r(58),
      s = r(59),
      a = s && s.isTypedArray,
      i = a ? n(a) : o;
    e.exports = i;
  },
  function(e, t, r) {
    function o(e) {
      return a(e) && s(e.length) && !!i[n(e)];
    }
    var n = r(0),
      s = r(16),
      a = r(1),
      i = {};
    (i['[object Float32Array]'] = i['[object Float64Array]'] = i['[object Int8Array]'] = i[
      '[object Int16Array]'
    ] = i['[object Int32Array]'] = i['[object Uint8Array]'] = i['[object Uint8ClampedArray]'] = i[
      '[object Uint16Array]'
    ] = i['[object Uint32Array]'] = !0),
      (i['[object Arguments]'] = i['[object Array]'] = i['[object ArrayBuffer]'] = i[
        '[object Boolean]'
      ] = i['[object DataView]'] = i['[object Date]'] = i['[object Error]'] = i[
        '[object Function]'
      ] = i['[object Map]'] = i['[object Number]'] = i['[object Object]'] = i[
        '[object RegExp]'
      ] = i['[object Set]'] = i['[object String]'] = i['[object WeakMap]'] = !1),
      (e.exports = o);
  },
  function(e, t) {
    function r(e) {
      return function(t) {
        return e(t);
      };
    }
    e.exports = r;
  },
  function(e, t, r) {
    (function(e) {
      var o = r(11),
        n = 'object' == typeof t && t && !t.nodeType && t,
        s = n && 'object' == typeof e && e && !e.nodeType && e,
        a = s && s.exports === n,
        i = a && o.process,
        l = (function() {
          try {
            return i && i.binding && i.binding('util');
          } catch (e) {}
        })();
      e.exports = l;
    }.call(t, r(20)(e)));
  },
  function(e, t, r) {
    function o(e) {
      if (!n(e)) return a(e);
      var t = s(e),
        r = [];
      for (var o in e) ('constructor' != o || (!t && l.call(e, o))) && r.push(o);
      return r;
    }
    var n = r(2),
      s = r(21),
      a = r(61),
      i = Object.prototype,
      l = i.hasOwnProperty;
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      var t = [];
      if (null != e) for (var r in Object(e)) t.push(r);
      return t;
    }
    e.exports = r;
  },
  function(e, t, r) {
    var o = r(14),
      n = r(12),
      s = r(22),
      a = n(function(e, t) {
        try {
          return o(e, void 0, t);
        } catch (e) {
          return s(e) ? e : new Error(e);
        }
      });
    e.exports = a;
  },
  function(e, t, r) {
    function o(e) {
      if (!a(e) || n(e) != i) return !1;
      var t = s(e);
      if (null === t) return !0;
      var r = d.call(t, 'constructor') && t.constructor;
      return 'function' == typeof r && r instanceof r && c.call(r) == f;
    }
    var n = r(0),
      s = r(64),
      a = r(1),
      i = '[object Object]',
      l = Function.prototype,
      u = Object.prototype,
      c = l.toString,
      d = u.hasOwnProperty,
      f = c.call(Object);
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(23),
      n = o(Object.getPrototypeOf, Object);
    e.exports = n;
  },
  function(e, t, r) {
    function o(e, t) {
      return n(t, function(t) {
        return e[t];
      });
    }
    var n = r(24);
    e.exports = o;
  },
  function(e, t, r) {
    function o(e, t, r, o) {
      return void 0 === e || (n(e, s[r]) && !a.call(o, r)) ? t : e;
    }
    var n = r(6),
      s = Object.prototype,
      a = s.hasOwnProperty;
    e.exports = o;
  },
  function(e, t) {
    function r(e) {
      return '\\' + o[e];
    }
    var o = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' };
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      return a(e) ? n(e) : s(e);
    }
    var n = r(18),
      s = r(69),
      a = r(7);
    e.exports = o;
  },
  function(e, t, r) {
    function o(e) {
      if (!n(e)) return s(e);
      var t = [];
      for (var r in Object(e)) i.call(e, r) && 'constructor' != r && t.push(r);
      return t;
    }
    var n = r(21),
      s = r(70),
      a = Object.prototype,
      i = a.hasOwnProperty;
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(23),
      n = o(Object.keys, Object);
    e.exports = n;
  },
  function(e, t, r) {
    var o = r(72),
      n = r(77),
      s = r(78),
      a = r(25),
      i = { escape: n, evaluate: s, interpolate: a, variable: '', imports: { _: { escape: o } } };
    e.exports = i;
  },
  function(e, t, r) {
    function o(e) {
      return (e = s(e)), e && i.test(e) ? e.replace(a, n) : e;
    }
    var n = r(73),
      s = r(26),
      a = /[&<>"']/g,
      i = RegExp(a.source);
    e.exports = o;
  },
  function(e, t, r) {
    var o = r(74),
      n = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
      s = o(n);
    e.exports = s;
  },
  function(e, t) {
    function r(e) {
      return function(t) {
        return null == e ? void 0 : e[t];
      };
    }
    e.exports = r;
  },
  function(e, t, r) {
    function o(e) {
      if ('string' == typeof e) return e;
      if (a(e)) return s(e, o) + '';
      if (i(e)) return c ? c.call(e) : '';
      var t = e + '';
      return '0' == t && 1 / e == -l ? '-0' : t;
    }
    var n = r(4),
      s = r(24),
      a = r(19),
      i = r(76),
      l = 1 / 0,
      u = n ? n.prototype : void 0,
      c = u ? u.toString : void 0;
    e.exports = o;
  },
  function(e, t, r) {
    function o(e) {
      return 'symbol' == typeof e || (s(e) && n(e) == a);
    }
    var n = r(0),
      s = r(1),
      a = '[object Symbol]';
    e.exports = o;
  },
  function(e, t) {
    var r = /<%-([\s\S]+?)%>/g;
    e.exports = r;
  },
  function(e, t) {
    var r = /<%([\s\S]+?)%>/g;
    e.exports = r;
  },
  function(e, t, r) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = {
        acres: { factor: 24711e-8, display: 'acres', decimals: 2 },
        feet: { factor: 3.2808, display: 'feet', decimals: 0 },
        kilometers: { factor: 0.001, display: 'kilometers', decimals: 2 },
        hectares: { factor: 1e-4, display: 'hectares', decimals: 2 },
        meters: { factor: 1, display: 'meters', decimals: 0 },
        miles: { factor: 3.2808 / 5280, display: 'miles', decimals: 2 },
        sqfeet: { factor: 10.7639, display: 'sqfeet', decimals: 0 },
        sqmeters: { factor: 1, display: 'sqmeters', decimals: 0 },
        sqmiles: { factor: 3.86102e-7, display: 'sqmiles', decimals: 2 }
      });
  },
  function(e, t, r) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function n(e) {
      return e < 10 ? '0' + e.toString() : e.toString();
    }
    function s(e, t, r) {
      var o = Math.abs(e),
        s = Math.floor(o),
        a = Math.floor(60 * (o - s)),
        i = Math.round(3600 * (o - s - a / 60) * 100) / 100,
        l = o === e ? t : r;
      return n(s) + '&deg; ' + n(a) + "' " + n(i) + '" ' + l;
    }
    function a(e) {
      var t = e[e.length - 1],
        r = e.map(function(e) {
          return [e.lat, e.lng];
        }),
        o = L.polyline(r),
        n = L.polygon(r),
        a = 1e3 * (0, l.default)(o.toGeoJSON(), { units: 'kilometers' }),
        i = (0, c.default)(n.toGeoJSON());
      return {
        lastCoord: {
          dd: { x: t.lng, y: t.lat },
          dms: { x: s(t.lng, 'E', 'W'), y: s(t.lat, 'N', 'S') }
        },
        length: a,
        area: i
      };
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = a);
    var i = r(81),
      l = o(i),
      u = r(84),
      c = o(u);
  },
  function(e, t, r) {
    'use strict';
    function o(e, t) {
      if (((t = t || {}), !Object(a.d)(t))) throw new Error('options is invalid');
      if (!e) throw new Error('geojson is required');
      return Object(s.b)(
        e,
        function(e, r) {
          var o = r.geometry.coordinates;
          return e + Object(n.a)(o[0], o[1], t);
        },
        0
      );
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = r(82),
      s = r(27),
      a = r(3);
    t.default = o;
  },
  function(e, t, r) {
    'use strict';
    function o(e, t, r) {
      if (((r = r || {}), !Object(s.d)(r))) throw new Error('options is invalid');
      var o = r.units,
        a = Object(n.a)(e),
        i = Object(n.a)(t),
        l = Object(s.a)(i[1] - a[1]),
        u = Object(s.a)(i[0] - a[0]),
        c = Object(s.a)(a[1]),
        d = Object(s.a)(i[1]),
        f = Math.pow(Math.sin(l / 2), 2) + Math.pow(Math.sin(u / 2), 2) * Math.cos(c) * Math.cos(d);
      return Object(s.g)(2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f)), o);
    }
    var n = r(83),
      s = r(3);
    t.a = o;
  },
  function(e, t, r) {
    'use strict';
    function o(e) {
      if (!e) throw new Error('coord is required');
      if ('Feature' === e.type && null !== e.geometry && 'Point' === e.geometry.type)
        return e.geometry.coordinates;
      if ('Point' === e.type) return e.coordinates;
      if (Array.isArray(e) && e.length >= 2 && void 0 === e[0].length && void 0 === e[1].length)
        return e;
      throw new Error('coord must be GeoJSON Point or an Array of numbers');
    }
    r.d(t, 'a', function() {
      return o;
    });
    r(3);
  },
  function(e, t, r) {
    'use strict';
    function o(e) {
      return Object(l.a)(
        e,
        function(e, t) {
          return e + n(t);
        },
        0
      );
    }
    function n(e) {
      var t,
        r = 0;
      switch (e.type) {
        case 'Polygon':
          return s(e.coordinates);
        case 'MultiPolygon':
          for (t = 0; t < e.coordinates.length; t++) r += s(e.coordinates[t]);
          return r;
        case 'Point':
        case 'MultiPoint':
        case 'LineString':
        case 'MultiLineString':
          return 0;
        case 'GeometryCollection':
          for (t = 0; t < e.geometries.length; t++) r += n(e.geometries[t]);
          return r;
      }
    }
    function s(e) {
      var t = 0;
      if (e && e.length > 0) {
        t += Math.abs(a(e[0]));
        for (var r = 1; r < e.length; r++) t -= Math.abs(a(e[r]));
      }
      return t;
    }
    function a(e) {
      var t,
        r,
        o,
        n,
        s,
        a,
        l,
        c = 0,
        d = e.length;
      if (d > 2) {
        for (l = 0; l < d; l++)
          l === d - 2
            ? ((n = d - 2), (s = d - 1), (a = 0))
            : l === d - 1 ? ((n = d - 1), (s = 0), (a = 1)) : ((n = l), (s = l + 1), (a = l + 2)),
            (t = e[n]),
            (r = e[s]),
            (o = e[a]),
            (c += (i(o[0]) - i(t[0])) * Math.sin(i(r[1])));
        c = c * u * u / 2;
      }
      return c;
    }
    function i(e) {
      return e * Math.PI / 180;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = r(27),
      u = 6378137;
    t.default = o;
  },
  function(e, t, r) {
    'use strict';
    function o(e, t) {
      return t || (t = document), t.querySelector(e);
    }
    function n(e, t) {
      return t || (t = document), Array.prototype.slice.call(t.querySelectorAll(e));
    }
    function s(e) {
      if (e) return e.setAttribute('style', 'display:none;'), e;
    }
    function a(e) {
      if (e) return e.removeAttribute('style'), e;
    }
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.selectOne = o),
      (t.selectAll = n),
      (t.hide = s),
      (t.show = a);
  },
  function(e, t, r) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = (function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function(t, r, o) {
          return r && e(t.prototype, r), o && e(t, o), t;
        };
      })(),
      s = { activeColor: '#ABE67E', completedColor: '#C8F2BE' },
      a = (function() {
        function e(t) {
          o(this, e), (this._options = L.extend({}, s, this._options, t));
        }
        return (
          n(e, [
            {
              key: 'getSymbol',
              value: function(e) {
                return {
                  measureDrag: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 0.7,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.5,
                    className: 'layer-measuredrag'
                  },
                  measureArea: {
                    clickable: !1,
                    stroke: !1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.2,
                    className: 'layer-measurearea'
                  },
                  measureBoundary: {
                    clickable: !1,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 0.9,
                    fill: !1,
                    className: 'layer-measureboundary'
                  },
                  measureVertex: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 0.7,
                    className: 'layer-measurevertex'
                  },
                  measureVertexActive: {
                    clickable: !1,
                    radius: 4,
                    color: this._options.activeColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.activeColor,
                    fillOpacity: 1,
                    className: 'layer-measurevertex active'
                  },
                  resultArea: {
                    clickable: !0,
                    color: this._options.completedColor,
                    weight: 2,
                    opacity: 0.9,
                    fillColor: this._options.completedColor,
                    fillOpacity: 0.2,
                    className: 'layer-measure-resultarea'
                  },
                  resultLine: {
                    clickable: !0,
                    color: this._options.completedColor,
                    weight: 3,
                    opacity: 0.9,
                    fill: !1,
                    className: 'layer-measure-resultline'
                  },
                  resultPoint: {
                    clickable: !0,
                    radius: 4,
                    color: this._options.completedColor,
                    weight: 2,
                    opacity: 1,
                    fillColor: this._options.completedColor,
                    fillOpacity: 0.7,
                    className: 'layer-measure-resultpoint'
                  }
                }[e];
              }
            }
          ]),
          e
        );
      })();
    t.default = a;
  },
  function(e, t, r) {
    'use strict';
    function o(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.',
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ',',
        n = e < 0 ? '-' : '',
        s = Math.abs(+e || 0),
        a = parseInt(s.toFixed(t), 10) + '',
        i = a.length > 3 ? a.length % 3 : 0;
      return [
        n,
        i ? a.substr(0, i) + o : '',
        a.substr(i).replace(/(\d{3})(?=\d)/g, '$1' + o),
        t
          ? '' +
            r +
            Math.abs(s - a)
              .toFixed(t)
              .slice(2)
          : ''
      ].join('');
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.numberFormat = o);
  },
  function(e, t, r) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = r(89);
    Object.defineProperty(t, 'controlTemplate', {
      enumerable: !0,
      get: function() {
        return o(n).default;
      }
    });
    var s = r(90);
    Object.defineProperty(t, 'resultsTemplate', {
      enumerable: !0,
      get: function() {
        return o(s).default;
      }
    });
    var a = r(91);
    Object.defineProperty(t, 'pointPopupTemplate', {
      enumerable: !0,
      get: function() {
        return o(a).default;
      }
    });
    var i = r(92);
    Object.defineProperty(t, 'linePopupTemplate', {
      enumerable: !0,
      get: function() {
        return o(i).default;
      }
    });
    var l = r(93);
    Object.defineProperty(t, 'areaPopupTemplate', {
      enumerable: !0,
      get: function() {
        return o(l).default;
      }
    });
  },
  function(e, t, r) {
    e.exports =
      '<a class="{{ model.className }}-toggle js-toggle" href=# title="Mål afstande og arealer">Mål</a> <div class="{{ model.className }}-interaction js-interaction"> <div class="js-startprompt startprompt"> <h3>Mål afstande og arealer</h3> <ul class=tasks> <a href=# class="js-start start">Lav en ny måling</a> </ul> </div> <div class=js-measuringprompt> <h3>Mål afstande og arealer</h3> <p class=js-starthelp>Begynd målingen ved at tilføje punkter på kortet</p> <div class="js-results results"></div> <ul class="js-measuretasks tasks"> <li><a href=# class="js-cancel cancel">Annuller</a></li> <li><a href=# class="js-finish finish">Afslut måling</a></li> </ul> </div> </div> ';
  },
  function(e, t, r) {
    e.exports =
      '<div class=group> <p class="lastpoint heading">Sidste punkt</p> <p>{{ model.lastCoord.dms.y }} <span class=coorddivider>/</span> {{ model.lastCoord.dms.x }}</p> <p>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class=coorddivider>/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }}</p> </div> <% if (model.pointCount > 1) { %> <div class=group> <p><span class=heading>Sti afstand</span> {{ model.lengthDisplay }}</p> </div> <% } %> <% if (model.pointCount > 2) { %> <div class=group> <p><span class=heading>Areal</span> {{ model.areaDisplay }}</p> </div> <% } %> ';
  },
  function(e, t, r) {
    e.exports =
      '<h3>Punkt</h3> <p>{{ model.lastCoord.dms.y }} <span class=coorddivider>/</span> {{ model.lastCoord.dms.x }}</p> <p>{{ numberFormat(model.lastCoord.dd.y, 6) }} <span class=coorddivider>/</span> {{ numberFormat(model.lastCoord.dd.x, 6) }}</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">Centrér dette punkt</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Slet</a></li> </ul> ';
  },
  function(e, t, r) {
    e.exports =
      '<h3>Linje</h3> <p>{{ model.lengthDisplay }}</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">Centrér denne linje</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Slet</a></li> </ul> ';
  },
  function(e, t, r) {
    e.exports =
      '<h3>Areal</h3> <p>{{ model.areaDisplay }}</p> <p>{{ model.lengthDisplay }} Omkreds</p> <ul class=tasks> <li><a href=# class="js-zoomto zoomto">Centrér dette område</a></li> <li><a href=# class="js-deletemarkup deletemarkup">Slet</a></li> </ul> ';
  }
]);
