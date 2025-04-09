/*! For license information please see 3408dbc55d1f0bf173c15e381583409c775fdc6d-6f9723fe43096660ccb3.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
   [1], {
      "+JCI": function (e, t, a) {
         "use strict"
      },
      "2dVK": function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("VvCP");
         a("kMXd"), i.__exportStar(a("4W0n"), t)
      },
      "2gR7": function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("Wn9d");

         function n(e, t) {
            return e && e !== document.body ? t(e) ? e : n(Object(i.a)(e), t) : null
         }
      },
      "3hj/": function (e, t, a) {
         var i;
         i = function () {
            return function (e) {
               var t = {};

               function a(i) {
                  if (t[i]) return t[i].exports;
                  var n = t[i] = {
                     i: i,
                     l: !1,
                     exports: {}
                  };
                  return e[i].call(n.exports, n, n.exports, a), n.l = !0, n.exports
               }
               return a.m = e, a.c = t, a.i = function (e) {
                  return e
               }, a.d = function (e, t, i) {
                  a.o(e, t) || Object.defineProperty(e, t, {
                     configurable: !1,
                     enumerable: !0,
                     get: i
                  })
               }, a.n = function (e) {
                  var t = e && e.__esModule ? function () {
                     return e.default
                  } : function () {
                     return e
                  };
                  return a.d(t, "a", t), t
               }, a.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t)
               }, a.p = "", a(a.s = 30)
            }([function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                     value: !0
                  }),
                  function (e) {
                     e[e.Unspecified = 0] = "Unspecified", e[e.String = 1] = "String", e[e.Int64 = 2] = "Int64", e[e.Double = 3] = "Double", e[e.Boolean = 4] = "Boolean", e[e.Date = 5] = "Date"
                  }(t.AWTPropertyType || (t.AWTPropertyType = {})),
                  function (e) {
                     e[e.NotSet = 0] = "NotSet", e[e.DistinguishedName = 1] = "DistinguishedName", e[e.GenericData = 2] = "GenericData", e[e.IPV4Address = 3] = "IPV4Address", e[e.IPv6Address = 4] = "IPv6Address", e[e.MailSubject = 5] = "MailSubject", e[e.PhoneNumber = 6] = "PhoneNumber", e[e.QueryString = 7] = "QueryString", e[e.SipAddress = 8] = "SipAddress", e[e.SmtpAddress = 9] = "SmtpAddress", e[e.Identity = 10] = "Identity", e[e.Uri = 11] = "Uri", e[e.Fqdn = 12] = "Fqdn", e[e.IPV4AddressLegacy = 13] = "IPV4AddressLegacy"
                  }(t.AWTPiiKind || (t.AWTPiiKind = {})),
                  function (e) {
                     e[e.NotSet = 0] = "NotSet", e[e.GenericContent = 1] = "GenericContent"
                  }(t.AWTCustomerContentKind || (t.AWTCustomerContentKind = {})),
                  function (e) {
                     e[e.Low = 1] = "Low", e[e.Normal = 2] = "Normal", e[e.High = 3] = "High", e[e.Immediate_sync = 5] = "Immediate_sync"
                  }(t.AWTEventPriority || (t.AWTEventPriority = {})),
                  function (e) {
                     e[e.NonRetryableStatus = 1] = "NonRetryableStatus", e[e.QueueFull = 3] = "QueueFull"
                  }(t.AWTEventsDroppedReason || (t.AWTEventsDroppedReason = {})),
                  function (e) {
                     e[e.InvalidEvent = 1] = "InvalidEvent", e[e.SizeLimitExceeded = 2] = "SizeLimitExceeded", e[e.KillSwitch = 3] = "KillSwitch"
                  }(t.AWTEventsRejectedReason || (t.AWTEventsRejectedReason = {}))
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(4),
                  n = a(0),
                  o = /[xy]/g;
               t.EventNameAndTypeRegex = /^[a-zA-Z]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/, t.EventNameDotRegex = /\./g, t.PropertyNameRegex = /^[a-zA-Z](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/, t.StatsApiKey = "a387cfcf60114a43a7699f9fbb49289e-9bceb9fe-1c06-460f-96c5-6a0b247358bc-7238";
               var r = null,
                  s = null,
                  _ = null;

               function l(e) {
                  return "string" == typeof e
               }

               function u(e) {
                  return "number" == typeof e
               }

               function c(e) {
                  return "boolean" == typeof e
               }

               function g(e) {
                  return e instanceof Date
               }

               function h(e) {
                  return 1e4 * (e + 621355968e5)
               }

               function p() {
                  return !("undefined" == typeof navigator || !navigator.product) && "ReactNative" === navigator.product
               }

               function b(e) {
                  return e < 10 ? "0" + e : e.toString()
               }

               function d(e) {
                  return null == e || "" === e
               }
               t.numberToBondInt64 = function (e) {
                  var t = new i.Int64("0");
                  return t.low = 4294967295 & e, t.high = Math.floor(e / 4294967296), t
               }, t.newGuid = function () {
                  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(o, (function (e) {
                     var t = 16 * Math.random() | 0;
                     return ("x" === e ? t : 3 & t | 8).toString(16)
                  }))
               }, t.isString = l, t.isNumber = u, t.isBoolean = c, t.isDate = g, t.msToTicks = h, t.getTenantId = function (e) {
                  var t = e.indexOf("-");
                  return t > -1 ? e.substring(0, t) : ""
               }, t.isBeaconsSupported = function () {
                  return null === r && (r = "undefined" != typeof navigator && Boolean(navigator.sendBeacon)), r
               }, t.isUint8ArrayAvailable = function () {
                  return null === s && (s = "undefined" != typeof Uint8Array && ! function () {
                     if ("undefined" != typeof navigator && navigator.userAgent) {
                        var e = navigator.userAgent.toLowerCase();
                        if ((e.indexOf("safari") >= 0 || e.indexOf("firefox") >= 0) && e.indexOf("chrome") < 0) return !0
                     }
                     return !1
                  }() && !p()), s
               }, t.isPriority = function (e) {
                  return !(!u(e) || !(e >= 1 && e <= 3 || 5 === e))
               }, t.sanitizeProperty = function (e, a) {
                  return !t.PropertyNameRegex.test(e) || d(a) ? null : (d(a.value) && (a = {
                     value: a,
                     type: n.AWTPropertyType.Unspecified
                  }), a.type = function (e, t) {
                     switch (t = function (e) {
                           return !!(u(e) && e >= 0 && e <= 4)
                        }(t) ? t : n.AWTPropertyType.Unspecified) {
                        case n.AWTPropertyType.Unspecified:
                           return function (e) {
                              switch (typeof e) {
                                 case "string":
                                    return n.AWTPropertyType.String;
                                 case "boolean":
                                    return n.AWTPropertyType.Boolean;
                                 case "number":
                                    return n.AWTPropertyType.Double;
                                 case "object":
                                    return g(e) ? n.AWTPropertyType.Date : null
                              }
                              return null
                           }(e);
                        case n.AWTPropertyType.String:
                           return l(e) ? t : null;
                        case n.AWTPropertyType.Boolean:
                           return c(e) ? t : null;
                        case n.AWTPropertyType.Date:
                           return g(e) && NaN !== e.getTime() ? t : null;
                        case n.AWTPropertyType.Int64:
                           return u(e) && e % 1 == 0 ? t : null;
                        case n.AWTPropertyType.Double:
                           return u(e) ? t : null
                     }
                     return null
                  }(a.value, a.type), a.type ? (g(a.value) && (a.value = h(a.value.getTime())), a.pii > 0 && a.cc > 0 ? null : a.pii ? u(i = a.pii) && i >= 0 && i <= 13 ? a : null : a.cc ? function (e) {
                     return !!(u(e) && e >= 0 && e <= 1)
                  }(a.cc) ? a : null : a) : null);
                  var i
               }, t.getISOString = function (e) {
                  return e.getUTCFullYear() + "-" + b(e.getUTCMonth() + 1) + "-" + b(e.getUTCDate()) + "T" + b(e.getUTCHours()) + ":" + b(e.getUTCMinutes()) + ":" + b(e.getUTCSeconds()) + "." + (((t = e.getUTCMilliseconds()) < 10 ? "00" + t : t < 100 ? "0" + t : t.toString()) + "Z");
                  var t
               }, t.useXDomainRequest = function () {
                  if (null === _) {
                     var e = new XMLHttpRequest;
                     _ = void 0 === e.withCredentials && "undefined" != typeof XDomainRequest
                  }
                  return _
               }, t.isReactNative = p
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = function () {
                  function e() {}
                  return e.addNotificationListener = function (e) {
                     this.listeners.push(e)
                  }, e.removeNotificationListener = function (e) {
                     for (var t = this.listeners.indexOf(e); t > -1;) this.listeners.splice(t, 1), t = this.listeners.indexOf(e)
                  }, e.eventsSent = function (e) {
                     for (var t = this, a = function (a) {
                           i.listeners[a].eventsSent && setTimeout((function () {
                              return t.listeners[a].eventsSent(e)
                           }), 0)
                        }, i = this, n = 0; n < this.listeners.length; ++n) a(n)
                  }, e.eventsDropped = function (e, t) {
                     for (var a = this, i = function (i) {
                           n.listeners[i].eventsDropped && setTimeout((function () {
                              return a.listeners[i].eventsDropped(e, t)
                           }), 0)
                        }, n = this, o = 0; o < this.listeners.length; ++o) i(o)
                  }, e.eventsRetrying = function (e) {
                     for (var t = this, a = function (a) {
                           i.listeners[a].eventsRetrying && setTimeout((function () {
                              return t.listeners[a].eventsRetrying(e)
                           }), 0)
                        }, i = this, n = 0; n < this.listeners.length; ++n) a(n)
                  }, e.eventsRejected = function (e, t) {
                     for (var a = this, i = function (i) {
                           n.listeners[i].eventsRejected && setTimeout((function () {
                              return a.listeners[i].eventsRejected(e, t)
                           }), 0)
                        }, n = this, o = 0; o < this.listeners.length; ++o) i(o)
                  }, e.listeners = [], e
               }();
               t.default = i
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(14),
                  n = a(0),
                  o = a(28),
                  r = a(10),
                  s = a(5),
                  _ = a(11),
                  l = a(1),
                  u = function () {
                     function e() {}
                     return e.setEventsHandler = function (e) {
                        this._eventHandler = e
                     }, e.getEventsHandler = function () {
                        return this._eventHandler
                     }, e.scheduleTimer = function () {
                        var e = this,
                           t = this._profiles[this._currentProfile][2];
                        this._timeout < 0 && t >= 0 && !this._paused && (this._eventHandler.hasEvents() ? (0 === t && this._currentBackoffCount > 0 && (t = 1), this._timeout = setTimeout((function () {
                           return e._batchAndSendEvents()
                        }), t * (1 << this._currentBackoffCount) * 1e3)) : this._timerCount = 0)
                     }, e.initialize = function (e) {
                        var t = this;
                        this._newEventsAllowed = !0, this._config = e, this._eventHandler = new o.default(e.collectorUri, e.cacheMemorySizeLimitInNumberOfEvents, e.httpXHROverride, e.clockSkewRefreshDurationInMins), this._initializeProfiles(), r.default.initialize((function (e, a) {
                           if (t._config.canSendStatEvent("awt_stats")) {
                              var i = new s.default("awt_stats");
                              for (var o in i.setEventPriority(n.AWTEventPriority.High), i.setProperty("TenantId", a), e) e.hasOwnProperty(o) && i.setProperty(o, e[o].toString());
                              _.default.getLogger(l.StatsApiKey).logEvent(i)
                           }
                        }))
                     }, e.setTransmitProfile = function (e) {
                        this._currentProfile !== e && void 0 !== this._profiles[e] && (this.clearTimeout(), this._currentProfile = e, this.scheduleTimer())
                     }, e.loadTransmitProfiles = function (e) {
                        for (var t in this._resetTransmitProfiles(), e)
                           if (e.hasOwnProperty(t)) {
                              if (3 !== e[t].length) continue;
                              for (var a = 2; a >= 0; --a)
                                 if (e[t][a] < 0) {
                                    for (var i = a; i >= 0; --i) e[t][i] = -1;
                                    break
                                 } for (a = 2; a > 0; --a)
                                 if (e[t][a] > 0 && e[t][a - 1] > 0) {
                                    var n = e[t][a - 1] / e[t][a];
                                    e[t][a - 1] = Math.ceil(n) * e[t][a]
                                 } this._profiles[t] = e[t]
                           }
                     }, e.sendEvent = function (e) {
                        this._newEventsAllowed && (this._currentBackoffCount > 0 && e.priority === n.AWTEventPriority.Immediate_sync && (e.priority = n.AWTEventPriority.High), this._eventHandler.addEvent(e), this.scheduleTimer())
                     }, e.flush = function (e) {
                        var t = (new Date).getTime();
                        !this._paused && this._lastUploadNowCall + 3e4 < t && (this._lastUploadNowCall = t, this._timeout > -1 && (clearTimeout(this._timeout), this._timeout = -1), this._eventHandler.uploadNow(e))
                     }, e.pauseTransmission = function () {
                        this._paused || (this.clearTimeout(), this._eventHandler.pauseTransmission(), this._paused = !0)
                     }, e.resumeTransmision = function () {
                        this._paused && (this._paused = !1, this._eventHandler.resumeTransmission(), this.scheduleTimer())
                     }, e.flushAndTeardown = function () {
                        r.default.teardown(), this._newEventsAllowed = !1, this.clearTimeout(), this._eventHandler.teardown()
                     }, e.backOffTransmission = function () {
                        this._currentBackoffCount < 4 && (this._currentBackoffCount++, this.clearTimeout(), this.scheduleTimer())
                     }, e.clearBackOff = function () {
                        this._currentBackoffCount > 0 && (this._currentBackoffCount = 0, this.clearTimeout(), this.scheduleTimer())
                     }, e._resetTransmitProfiles = function () {
                        this.clearTimeout(), this._initializeProfiles(), this._currentProfile = i.AWT_REAL_TIME, this.scheduleTimer()
                     }, e.clearTimeout = function () {
                        this._timeout > 0 && (clearTimeout(this._timeout), this._timeout = -1, this._timerCount = 0)
                     }, e._batchAndSendEvents = function () {
                        var e = n.AWTEventPriority.High;
                        this._timerCount++, this._timerCount * this._profiles[this._currentProfile][2] === this._profiles[this._currentProfile][0] ? (e = n.AWTEventPriority.Low, this._timerCount = 0) : this._timerCount * this._profiles[this._currentProfile][2] === this._profiles[this._currentProfile][1] && (e = n.AWTEventPriority.Normal), this._eventHandler.sendEventsForPriorityAndAbove(e), this._timeout = -1, this.scheduleTimer()
                     }, e._initializeProfiles = function () {
                        this._profiles = {}, this._profiles[i.AWT_REAL_TIME] = [4, 2, 1], this._profiles[i.AWT_NEAR_REAL_TIME] = [12, 6, 3], this._profiles[i.AWT_BEST_EFFORT] = [36, 18, 9]
                     }, e._newEventsAllowed = !1, e._currentProfile = i.AWT_REAL_TIME, e._timeout = -1, e._currentBackoffCount = 0, e._paused = !1, e._timerCount = 0, e._lastUploadNowCall = 0, e
                  }();
               t.default = u
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = function () {
                  function e(e) {
                     this.low = 0, this.high = 0, this.low = parseInt(e, 10), this.low < 0 && (this.high = -1)
                  }
                  return e.prototype._Equals = function (t) {
                     var a = new e(t);
                     return this.low === a.low && this.high === a.high
                  }, e
               }();
               t.Int64 = i;
               var n = function () {
                  function e(e) {
                     this.low = 0, this.high = 0, this.low = parseInt(e, 10)
                  }
                  return e.prototype._Equals = function (t) {
                     var a = new e(t);
                     return this.low === a.low && this.high === a.high
                  }, e
               }();
               t.UInt64 = n;
               var o = function () {
                  function e() {}
                  return e._ToByte = function (e) {
                     return this._ToUInt8(e)
                  }, e._ToUInt8 = function (e) {
                     return 255 & e
                  }, e._ToInt32 = function (e) {
                     return 2147483647 & e | 2147483648 & e
                  }, e._ToUInt32 = function (e) {
                     return 4294967295 & e
                  }, e
               }();
               t.Number = o
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(1),
                  n = a(0),
                  o = function () {
                     function e(e) {
                        this._event = {
                           name: "",
                           properties: {}
                        }, e && this.setName(e)
                     }
                     return e.prototype.setName = function (e) {
                        this._event.name = e
                     }, e.prototype.getName = function () {
                        return this._event.name
                     }, e.prototype.setType = function (e) {
                        this._event.type = e
                     }, e.prototype.getType = function () {
                        return this._event.type
                     }, e.prototype.setTimestamp = function (e) {
                        this._event.timestamp = e
                     }, e.prototype.getTimestamp = function () {
                        return this._event.timestamp
                     }, e.prototype.setEventPriority = function (e) {
                        this._event.priority = e
                     }, e.prototype.getEventPriority = function () {
                        return this._event.priority
                     }, e.prototype.setProperty = function (e, t, a) {
                        void 0 === a && (a = n.AWTPropertyType.Unspecified);
                        var o = {
                           value: t,
                           type: a,
                           pii: n.AWTPiiKind.NotSet,
                           cc: n.AWTCustomerContentKind.NotSet
                        };
                        null !== (o = i.sanitizeProperty(e, o)) ? this._event.properties[e] = o : delete this._event.properties[e]
                     }, e.prototype.setPropertyWithPii = function (e, t, a, o) {
                        void 0 === o && (o = n.AWTPropertyType.Unspecified);
                        var r = {
                           value: t,
                           type: o,
                           pii: a,
                           cc: n.AWTCustomerContentKind.NotSet
                        };
                        null !== (r = i.sanitizeProperty(e, r)) ? this._event.properties[e] = r : delete this._event.properties[e]
                     }, e.prototype.setPropertyWithCustomerContent = function (e, t, a, o) {
                        void 0 === o && (o = n.AWTPropertyType.Unspecified);
                        var r = {
                           value: t,
                           type: o,
                           pii: n.AWTPiiKind.NotSet,
                           cc: a
                        };
                        null !== (r = i.sanitizeProperty(e, r)) ? this._event.properties[e] = r : delete this._event.properties[e]
                     }, e.prototype.getPropertyMap = function () {
                        return this._event.properties
                     }, e.prototype.getEvent = function () {
                        return this._event
                     }, e
                  }();
               t.default = o
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                     value: !0
                  }),
                  function (e) {
                     e[e.Unknown = 0] = "Unknown", e[e.MSACID = 1] = "MSACID", e[e.MSAPUID = 2] = "MSAPUID", e[e.ANID = 3] = "ANID", e[e.OrgIdCID = 4] = "OrgIdCID", e[e.OrgIdPUID = 5] = "OrgIdPUID", e[e.UserObjectId = 6] = "UserObjectId", e[e.Skype = 7] = "Skype", e[e.Yammer = 8] = "Yammer", e[e.EmailAddress = 9] = "EmailAddress", e[e.PhoneNumber = 10] = "PhoneNumber", e[e.SipAddress = 11] = "SipAddress", e[e.MUID = 12] = "MUID"
                  }(t.AWTUserIdType || (t.AWTUserIdType = {})),
                  function (e) {
                     e[e.Started = 0] = "Started", e[e.Ended = 1] = "Ended"
                  }(t.AWTSessionState || (t.AWTSessionState = {}))
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(1),
                  n = "MicrosoftApplicationsTelemetryDeviceId",
                  o = "MicrosoftApplicationsTelemetryFirstLaunchTime",
                  r = "MSIE",
                  s = "Chrome",
                  _ = "Firefox",
                  l = "Safari",
                  u = "Edge",
                  c = "Electron",
                  g = "SkypeShell",
                  h = "PhantomJS",
                  p = "Opera",
                  b = "Windows",
                  d = "Mac OS X",
                  M = "Windows Phone",
                  m = "Windows RT",
                  S = "iOS",
                  T = "Android",
                  f = "Linux",
                  y = "Chrome OS",
                  v = /(windows|win32)/i,
                  W = / arm;/i,
                  L = /windows\sphone\s\d+\.\d+/i,
                  E = /(macintosh|mac os x)/i,
                  C = /(iPad|iPhone|iPod)(?=.*like Mac OS X)/i,
                  w = /(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,
                  k = /android/i,
                  P = /CrOS/i,
                  A = {
                     5.1: "XP",
                     "6.0": "Vista",
                     6.1: "7",
                     6.2: "8",
                     6.3: "8.1",
                     "10.0": "10"
                  },
                  I = function () {
                     function e() {}
                     return e.addPropertyStorageOverride = function (e) {
                        return !!e && (this._propertyStorage = e, !0)
                     }, e.autoCollect = function (e, t, a) {
                        if (this._semanticContext = e, this._disableCookies = t, this._autoCollect(), a || "undefined" == typeof navigator || (a = navigator.userAgent || ""), this._autoCollectFromUserAgent(a), this._disableCookies && !this._propertyStorage) return this._deleteCookie(n), void this._deleteCookie(o);
                        (this._propertyStorage || this._areCookiesAvailable && !this._disableCookies) && this._autoCollectDeviceId()
                     }, e.checkAndSaveDeviceId = function (e) {
                        if (e) {
                           var t = this._getData(n),
                              a = this._getData(o);
                           t !== e && (a = i.getISOString(new Date)), this._saveData(n, e), this._saveData(o, a), this._setFirstLaunchTime(a)
                        }
                     }, e._autoCollectDeviceId = function () {
                        var e = this._getData(n);
                        e || (e = i.newGuid()), this._semanticContext.setDeviceId(e)
                     }, e._autoCollect = function () {
                        "undefined" != typeof document && document.documentElement && this._semanticContext.setAppLanguage(document.documentElement.lang), "undefined" != typeof navigator && this._semanticContext.setUserLanguage(navigator.userLanguage || navigator.language);
                        var e = (new Date).getTimezoneOffset(),
                           t = e % 60,
                           a = (e - t) / 60,
                           i = "+";
                        a > 0 && (i = "-"), a = Math.abs(a), t = Math.abs(t), this._semanticContext.setUserTimeZone(i + (a < 10 ? "0" + a : a.toString()) + ":" + (t < 10 ? "0" + t : t.toString()))
                     }, e._autoCollectFromUserAgent = function (e) {
                        if (e) {
                           var t = this._getBrowserName(e);
                           this._semanticContext.setDeviceBrowserName(t), this._semanticContext.setDeviceBrowserVersion(this._getBrowserVersion(e, t));
                           var a = this._getOsName(e);
                           this._semanticContext.setDeviceOsName(a), this._semanticContext.setDeviceOsVersion(this._getOsVersion(e, a))
                        }
                     }, e._getBrowserName = function (e) {
                        return this._userAgentContainsString("OPR/", e) ? p : this._userAgentContainsString(h, e) ? h : this._userAgentContainsString(u, e) ? u : this._userAgentContainsString(c, e) ? c : this._userAgentContainsString(s, e) ? s : this._userAgentContainsString("Trident", e) ? r : this._userAgentContainsString(_, e) ? _ : this._userAgentContainsString(l, e) ? l : this._userAgentContainsString(g, e) ? g : "Unknown"
                     }, e._setFirstLaunchTime = function (e) {
                        if (!isNaN(e)) {
                           var t = new Date;
                           t.setTime(parseInt(e, 10)), e = i.getISOString(t)
                        }
                        this.firstLaunchTime = e
                     }, e._userAgentContainsString = function (e, t) {
                        return t.indexOf(e) > -1
                     }, e._getBrowserVersion = function (e, t) {
                        return t === r ? this._getIeVersion(e) : this._getOtherVersion(t, e)
                     }, e._getIeVersion = function (e) {
                        var t = e.match(new RegExp(r + " ([\\d,.]+)"));
                        if (t) return t[1];
                        var a = e.match(new RegExp("rv:([\\d,.]+)"));
                        return a ? a[1] : void 0
                     }, e._getOtherVersion = function (e, t) {
                        e === l && (e = "Version");
                        var a = t.match(new RegExp(e + "/([\\d,.]+)"));
                        return a ? a[1] : "Unknown"
                     }, e._getOsName = function (e) {
                        return e.match(L) ? M : e.match(W) ? m : e.match(C) ? S : e.match(k) ? T : e.match(w) ? f : e.match(E) ? d : e.match(v) ? b : e.match(P) ? y : "Unknown"
                     }, e._getOsVersion = function (e, t) {
                        return t === b ? this._getGenericOsVersion(e, "Windows NT") : t === T ? this._getGenericOsVersion(e, t) : t === d ? this._getMacOsxVersion(e) : "Unknown"
                     }, e._getGenericOsVersion = function (e, t) {
                        var a = e.match(new RegExp(t + " ([\\d,.]+)"));
                        return a ? A[a[1]] ? A[a[1]] : a[1] : "Unknown"
                     }, e._getMacOsxVersion = function (e) {
                        var t = e.match(new RegExp(d + " ([\\d,_,.]+)"));
                        if (t) {
                           var a = t[1].replace(/_/g, ".");
                           if (a) {
                              var i = this._getDelimiter(a);
                              return i ? a.split(i)[0] : a
                           }
                        }
                        return "Unknown"
                     }, e._getDelimiter = function (e) {
                        return e.indexOf(".") > -1 ? "." : e.indexOf("_") > -1 ? "_" : null
                     }, e._saveData = function (e, t) {
                        if (this._propertyStorage) this._propertyStorage.setProperty(e, t);
                        else if (this._areCookiesAvailable) {
                           var a = new Date;
                           a.setTime(a.getTime() + 31536e6);
                           var i = "expires=" + a.toUTCString();
                           document.cookie = e + "=" + t + "; " + i
                        }
                     }, e._getData = function (e) {
                        if (this._propertyStorage) return this._propertyStorage.getProperty(e) || "";
                        if (this._areCookiesAvailable) {
                           e += "=";
                           for (var t = document.cookie.split(";"), a = 0; a < t.length; a++) {
                              for (var i = t[a], n = 0;
                                 " " === i.charAt(n);) n++;
                              if (0 === (i = i.substring(n)).indexOf(e)) return i.substring(e.length, i.length)
                           }
                        }
                        return ""
                     }, e._deleteCookie = function (e) {
                        this._areCookiesAvailable && (document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;")
                     }, e._disableCookies = !1, e._areCookiesAvailable = "undefined" != typeof document && void 0 !== document.cookie, e
                  }();
               t.default = I
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(7),
                  n = a(0),
                  o = a(6),
                  r = function () {
                     function e(e, t) {
                        this._allowDeviceFields = e, this._properties = t
                     }
                     return e.prototype.setAppId = function (e) {
                        this._addContext("AppInfo.Id", e)
                     }, e.prototype.setAppVersion = function (e) {
                        this._addContext("AppInfo.Version", e)
                     }, e.prototype.setAppLanguage = function (e) {
                        this._addContext("AppInfo.Language", e)
                     }, e.prototype.setDeviceId = function (e) {
                        this._allowDeviceFields && (i.default.checkAndSaveDeviceId(e), this._addContext("DeviceInfo.Id", e))
                     }, e.prototype.setDeviceOsName = function (e) {
                        this._allowDeviceFields && this._addContext("DeviceInfo.OsName", e)
                     }, e.prototype.setDeviceOsVersion = function (e) {
                        this._allowDeviceFields && this._addContext("DeviceInfo.OsVersion", e)
                     }, e.prototype.setDeviceBrowserName = function (e) {
                        this._allowDeviceFields && this._addContext("DeviceInfo.BrowserName", e)
                     }, e.prototype.setDeviceBrowserVersion = function (e) {
                        this._allowDeviceFields && this._addContext("DeviceInfo.BrowserVersion", e)
                     }, e.prototype.setDeviceMake = function (e) {
                        this._allowDeviceFields && this._addContext("DeviceInfo.Make", e)
                     }, e.prototype.setDeviceModel = function (e) {
                        this._allowDeviceFields && this._addContext("DeviceInfo.Model", e)
                     }, e.prototype.setUserId = function (e, t, a) {
                        if (!isNaN(a) && null !== a && a >= 0 && a <= 12) this._addContext("UserInfo.IdType", a.toString());
                        else {
                           var i = void 0;
                           switch (t) {
                              case n.AWTPiiKind.SipAddress:
                                 i = o.AWTUserIdType.SipAddress;
                                 break;
                              case n.AWTPiiKind.PhoneNumber:
                                 i = o.AWTUserIdType.PhoneNumber;
                                 break;
                              case n.AWTPiiKind.SmtpAddress:
                                 i = o.AWTUserIdType.EmailAddress;
                                 break;
                              default:
                                 i = o.AWTUserIdType.Unknown
                           }
                           this._addContext("UserInfo.IdType", i.toString())
                        }
                        if (isNaN(t) || null === t || t === n.AWTPiiKind.NotSet || t > 13) switch (a) {
                           case o.AWTUserIdType.Skype:
                              t = n.AWTPiiKind.Identity;
                              break;
                           case o.AWTUserIdType.EmailAddress:
                              t = n.AWTPiiKind.SmtpAddress;
                              break;
                           case o.AWTUserIdType.PhoneNumber:
                              t = n.AWTPiiKind.PhoneNumber;
                              break;
                           case o.AWTUserIdType.SipAddress:
                              t = n.AWTPiiKind.SipAddress;
                              break;
                           default:
                              t = n.AWTPiiKind.NotSet
                        }
                        this._addContextWithPii("UserInfo.Id", e, t)
                     }, e.prototype.setUserAdvertisingId = function (e) {
                        this._addContext("UserInfo.AdvertisingId", e)
                     }, e.prototype.setUserTimeZone = function (e) {
                        this._addContext("UserInfo.TimeZone", e)
                     }, e.prototype.setUserLanguage = function (e) {
                        this._addContext("UserInfo.Language", e)
                     }, e.prototype._addContext = function (e, t) {
                        "string" == typeof t && this._properties.setProperty(e, t)
                     }, e.prototype._addContextWithPii = function (e, t, a) {
                        "string" == typeof t && this._properties.setPropertyWithPii(e, t, a)
                     }, e
                  }();
               t.default = r
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(21),
                  n = a(0),
                  o = a(2),
                  r = a(1),
                  s = function () {
                     function e() {}
                     return e.getPayloadBlob = function (e, t) {
                        var a, s = !1,
                           _ = new i.IO.MemoryStream,
                           l = new i.CompactBinaryProtocolWriter(_);
                        for (var u in l._WriteFieldBegin(i._BondDataType._BT_MAP, 3, null), l._WriteMapContainerBegin(t, i._BondDataType._BT_STRING, i._BondDataType._BT_LIST), e)
                           if (s) a || (a = {}), a[u] = e[u], delete e[u];
                           else if (e.hasOwnProperty(u)) {
                           l._WriteString(u);
                           var c = e[u];
                           l._WriteContainerBegin(1, i._BondDataType._BT_STRUCT), l._WriteFieldBegin(i._BondDataType._BT_STRING, 2, null), l._WriteString("act_default_source"), l._WriteFieldBegin(i._BondDataType._BT_STRING, 5, null), l._WriteString(r.newGuid()), l._WriteFieldBegin(i._BondDataType._BT_INT64, 6, null), l._WriteInt64(r.numberToBondInt64(Date.now())), l._WriteFieldBegin(i._BondDataType._BT_LIST, 8, null);
                           var g = _._GetBuffer().length + 1;
                           l._WriteContainerBegin(e[u].length, i._BondDataType._BT_STRUCT);
                           for (var h = _._GetBuffer().length - g, p = 0; p < c.length; ++p) {
                              var b = _._GetBuffer().length;
                              if (this.writeEvent(c[p], l), _._GetBuffer().length - b > 2936012) o.default.eventsRejected([c[p]], n.AWTEventsRejectedReason.SizeLimitExceeded), c.splice(p--, 1), _._GetBuffer().splice(b), this._addNewDataPackageSize(c.length, _, h, g);
                              else if (_._GetBuffer().length > 2936012) {
                                 _._GetBuffer().splice(b), a || (a = {}), e[u] = c.splice(0, p), a[u] = c, this._addNewDataPackageSize(e[u].length, _, h, g), s = !0;
                                 break
                              }
                           }
                           l._WriteStructEnd(!1)
                        }
                        return l._WriteStructEnd(!1), {
                           payloadBlob: _._GetBuffer(),
                           remainingRequest: a
                        }
                     }, e._addNewDataPackageSize = function (e, t, a, n) {
                        for (var o = i._Encoding._Varint_GetBytes(i.Number._ToUInt32(e)), r = 0; r < a; ++r) {
                           if (!(r < o.length)) {
                              t._GetBuffer().slice(n + r, a - r);
                              break
                           }
                           t._GetBuffer()[n + r] = o[r]
                        }
                     }, e.writeEvent = function (e, t) {
                        t._WriteFieldBegin(i._BondDataType._BT_STRING, 1, null), t._WriteString(e.id), t._WriteFieldBegin(i._BondDataType._BT_INT64, 3, null), t._WriteInt64(r.numberToBondInt64(e.timestamp)), t._WriteFieldBegin(i._BondDataType._BT_STRING, 5, null), t._WriteString(e.type), t._WriteFieldBegin(i._BondDataType._BT_STRING, 6, null), t._WriteString(e.name);
                        var a = {},
                           o = 0,
                           s = {},
                           _ = 0,
                           l = {},
                           u = 0,
                           c = {},
                           g = 0,
                           h = {},
                           p = 0,
                           b = {},
                           d = 0,
                           M = {},
                           m = 0;
                        for (var S in e.properties)
                           if (e.properties.hasOwnProperty(S))
                              if ((f = e.properties[S]).cc > 0) M[S] = f, m++;
                              else if (f.pii > 0) b[S] = f, d++;
                        else switch (f.type) {
                           case n.AWTPropertyType.String:
                              a[S] = f.value, o++;
                              break;
                           case n.AWTPropertyType.Int64:
                              s[S] = f.value, _++;
                              break;
                           case n.AWTPropertyType.Double:
                              l[S] = f.value, u++;
                              break;
                           case n.AWTPropertyType.Boolean:
                              c[S] = f.value, g++;
                              break;
                           case n.AWTPropertyType.Date:
                              h[S] = f.value, p++
                        }
                        if (o)
                           for (var S in t._WriteFieldBegin(i._BondDataType._BT_MAP, 13, null), t._WriteMapContainerBegin(o, i._BondDataType._BT_STRING, i._BondDataType._BT_STRING), a)
                              if (a.hasOwnProperty(S)) {
                                 var T = a[S];
                                 t._WriteString(S), t._WriteString(T.toString())
                              } if (d)
                           for (var S in t._WriteFieldBegin(i._BondDataType._BT_MAP, 30, null), t._WriteMapContainerBegin(d, i._BondDataType._BT_STRING, i._BondDataType._BT_STRUCT), b)
                              if (b.hasOwnProperty(S)) {
                                 var f = b[S];
                                 t._WriteString(S), t._WriteFieldBegin(i._BondDataType._BT_INT32, 1, null), t._WriteInt32(1), t._WriteFieldBegin(i._BondDataType._BT_INT32, 2, null), t._WriteInt32(f.pii), t._WriteFieldBegin(i._BondDataType._BT_STRING, 3, null), t._WriteString(f.value.toString()), t._WriteStructEnd(!1)
                              } if (g)
                           for (var S in t._WriteFieldBegin(i._BondDataType._BT_MAP, 31, null), t._WriteMapContainerBegin(g, i._BondDataType._BT_STRING, i._BondDataType._BT_BOOL), c) c.hasOwnProperty(S) && (T = c[S], t._WriteString(S), t._WriteBool(T));
                        if (p)
                           for (var S in t._WriteFieldBegin(i._BondDataType._BT_MAP, 32, null), t._WriteMapContainerBegin(p, i._BondDataType._BT_STRING, i._BondDataType._BT_INT64), h) h.hasOwnProperty(S) && (T = h[S], t._WriteString(S), t._WriteInt64(r.numberToBondInt64(T)));
                        if (_)
                           for (var S in t._WriteFieldBegin(i._BondDataType._BT_MAP, 33, null), t._WriteMapContainerBegin(_, i._BondDataType._BT_STRING, i._BondDataType._BT_INT64), s) s.hasOwnProperty(S) && (T = s[S], t._WriteString(S), t._WriteInt64(r.numberToBondInt64(T)));
                        if (u)
                           for (var S in t._WriteFieldBegin(i._BondDataType._BT_MAP, 34, null), t._WriteMapContainerBegin(u, i._BondDataType._BT_STRING, i._BondDataType._BT_DOUBLE), l) l.hasOwnProperty(S) && (T = l[S], t._WriteString(S), t._WriteDouble(T));
                        if (m)
                           for (var S in t._WriteFieldBegin(i._BondDataType._BT_MAP, 36, null), t._WriteMapContainerBegin(m, i._BondDataType._BT_STRING, i._BondDataType._BT_STRUCT), M) M.hasOwnProperty(S) && (f = M[S], t._WriteString(S), t._WriteFieldBegin(i._BondDataType._BT_INT32, 1, null), t._WriteInt32(f.cc), t._WriteFieldBegin(i._BondDataType._BT_STRING, 2, null), t._WriteString(f.value.toString()), t._WriteStructEnd(!1));
                        t._WriteStructEnd(!1)
                     }, e.base64Encode = function (e) {
                        return i._Encoding._Base64_GetString(e)
                     }, e
                  }();
               t.default = s
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(1),
                  n = a(2),
                  o = a(0),
                  r = function () {
                     function e() {}
                     return e.initialize = function (e) {
                        var t = this;
                        this._sendStats = e, this._isInitalized = !0, n.default.addNotificationListener({
                           eventsSent: function (e) {
                              t._addStat("records_sent_count", e.length, e[0].apiKey)
                           },
                           eventsDropped: function (e, a) {
                              switch (a) {
                                 case o.AWTEventsDroppedReason.NonRetryableStatus:
                                    t._addStat("d_send_fail", e.length, e[0].apiKey), t._addStat("records_dropped_count", e.length, e[0].apiKey);
                                    break;
                                 case o.AWTEventsDroppedReason.QueueFull:
                                    t._addStat("d_queue_full", e.length, e[0].apiKey)
                              }
                           },
                           eventsRejected: function (e, a) {
                              switch (a) {
                                 case o.AWTEventsRejectedReason.InvalidEvent:
                                    t._addStat("r_inv", e.length, e[0].apiKey);
                                    break;
                                 case o.AWTEventsRejectedReason.KillSwitch:
                                    t._addStat("r_kl", e.length, e[0].apiKey);
                                    break;
                                 case o.AWTEventsRejectedReason.SizeLimitExceeded:
                                    t._addStat("r_size", e.length, e[0].apiKey)
                              }
                              t._addStat("r_count", e.length, e[0].apiKey)
                           },
                           eventsRetrying: null
                        }), setTimeout((function () {
                           return t.flush()
                        }), 6e4)
                     }, e.teardown = function () {
                        this._isInitalized && (this.flush(), this._isInitalized = !1)
                     }, e.eventReceived = function (t) {
                        e._addStat("records_received_count", 1, t)
                     }, e.flush = function () {
                        var e = this;
                        if (this._isInitalized) {
                           for (var t in this._stats) this._stats.hasOwnProperty(t) && this._sendStats(this._stats[t], t);
                           this._stats = {}, setTimeout((function () {
                              return e.flush()
                           }), 6e4)
                        }
                     }, e._addStat = function (e, t, a) {
                        if (this._isInitalized && a !== i.StatsApiKey) {
                           var n = i.getTenantId(a);
                           this._stats[n] || (this._stats[n] = {}), this._stats[n][e] ? this._stats[n][e] = this._stats[n][e] + t : this._stats[n][e] = t
                        }
                     }, e._isInitalized = !1, e._stats = {}, e
                  }();
               t.default = r
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(0),
                  n = a(6),
                  o = a(12),
                  r = a(13),
                  s = a(3),
                  _ = a(2),
                  l = a(7),
                  u = function () {
                     function e() {}
                     return e.initialize = function (e, t) {
                        if (void 0 === t && (t = {}), !this._isInitialized) return this._isInitialized = !0, o.default.defaultTenantToken = e, this._overrideValuesFromConfig(t), this._config.disableCookiesUsage && !this._config.propertyStorageOverride && (o.default.sessionEnabled = !1), l.default.addPropertyStorageOverride(this._config.propertyStorageOverride), l.default.autoCollect(o.default.semanticContext, this._config.disableCookiesUsage, this._config.userAgent), s.default.initialize(this._config), o.default.loggingEnabled = !0, this._config.enableAutoUserSession && (this.getLogger().logSession(n.AWTSessionState.Started), window.addEventListener("beforeunload", this.flushAndTeardown)), this.getLogger()
                     }, e.getSemanticContext = function () {
                        return o.default.semanticContext
                     }, e.flush = function (e) {
                        this._isInitialized && !this._isDestroyed && s.default.flush(e)
                     }, e.flushAndTeardown = function () {
                        this._isInitialized && !this._isDestroyed && (this._config.enableAutoUserSession && this.getLogger().logSession(n.AWTSessionState.Ended), s.default.flushAndTeardown(), o.default.loggingEnabled = !1, this._isDestroyed = !0)
                     }, e.pauseTransmission = function () {
                        this._isInitialized && !this._isDestroyed && s.default.pauseTransmission()
                     }, e.resumeTransmision = function () {
                        this._isInitialized && !this._isDestroyed && s.default.resumeTransmision()
                     }, e.setTransmitProfile = function (e) {
                        this._isInitialized && !this._isDestroyed && s.default.setTransmitProfile(e)
                     }, e.loadTransmitProfiles = function (e) {
                        this._isInitialized && !this._isDestroyed && s.default.loadTransmitProfiles(e)
                     }, e.setContext = function (e, t, a) {
                        void 0 === a && (a = i.AWTPropertyType.Unspecified), o.default.logManagerContext.setProperty(e, t, a)
                     }, e.setContextWithPii = function (e, t, a, n) {
                        void 0 === n && (n = i.AWTPropertyType.Unspecified), o.default.logManagerContext.setPropertyWithPii(e, t, a, n)
                     }, e.setContextWithCustomerContent = function (e, t, a, n) {
                        void 0 === n && (n = i.AWTPropertyType.Unspecified), o.default.logManagerContext.setPropertyWithCustomerContent(e, t, a, n)
                     }, e.getLogger = function (e) {
                        var t = e;
                        return t && t !== o.default.defaultTenantToken || (t = ""), this._loggers[t] || (this._loggers[t] = new r.default(t)), this._loggers[t]
                     }, e.addNotificationListener = function (e) {
                        _.default.addNotificationListener(e)
                     }, e.removeNotificationListener = function (e) {
                        _.default.removeNotificationListener(e)
                     }, e._overrideValuesFromConfig = function (e) {
                        e.collectorUri && (this._config.collectorUri = e.collectorUri), e.cacheMemorySizeLimitInNumberOfEvents > 0 && (this._config.cacheMemorySizeLimitInNumberOfEvents = e.cacheMemorySizeLimitInNumberOfEvents), e.httpXHROverride && e.httpXHROverride.sendPOST && (this._config.httpXHROverride = e.httpXHROverride), e.propertyStorageOverride && e.propertyStorageOverride.getProperty && e.propertyStorageOverride.setProperty && (this._config.propertyStorageOverride = e.propertyStorageOverride), e.userAgent && (this._config.userAgent = e.userAgent), e.disableCookiesUsage && (this._config.disableCookiesUsage = e.disableCookiesUsage), e.canSendStatEvent && (this._config.canSendStatEvent = e.canSendStatEvent), e.enableAutoUserSession && "undefined" != typeof window && window.addEventListener && (this._config.enableAutoUserSession = e.enableAutoUserSession), e.clockSkewRefreshDurationInMins > 0 && (this._config.clockSkewRefreshDurationInMins = e.clockSkewRefreshDurationInMins)
                     }, e._loggers = {}, e._isInitialized = !1, e._isDestroyed = !1, e._config = {
                        collectorUri: "https://browser.pipe.aria.microsoft.com/Collector/3.0/",
                        cacheMemorySizeLimitInNumberOfEvents: 1e4,
                        disableCookiesUsage: !1,
                        canSendStatEvent: function (e) {
                           return !0
                        },
                        clockSkewRefreshDurationInMins: 0
                     }, e
                  }();
               t.default = u
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(5),
                  n = a(8),
                  o = function () {
                     function e() {}
                     return e.logManagerContext = new i.default, e.sessionEnabled = !0, e.loggingEnabled = !1, e.defaultTenantToken = "", e.semanticContext = new n.default(!0, e.logManagerContext), e
                  }();
               t.default = o
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(0),
                  n = a(6),
                  o = a(5),
                  r = a(1),
                  s = a(10),
                  _ = a(2),
                  l = a(3),
                  u = a(12),
                  c = a(15),
                  g = a(8),
                  h = a(7),
                  p = function () {
                     function e(e) {
                        this._apiKey = e, this._contextProperties = new o.default, this._semanticContext = new g.default(!1, this._contextProperties), this._sessionStartTime = 0, this._createInitId()
                     }
                     return e.prototype.setContext = function (e, t, a) {
                        void 0 === a && (a = i.AWTPropertyType.Unspecified), this._contextProperties.setProperty(e, t, a)
                     }, e.prototype.setContextWithPii = function (e, t, a, n) {
                        void 0 === n && (n = i.AWTPropertyType.Unspecified), this._contextProperties.setPropertyWithPii(e, t, a, n)
                     }, e.prototype.setContextWithCustomerContent = function (e, t, a, n) {
                        void 0 === n && (n = i.AWTPropertyType.Unspecified), this._contextProperties.setPropertyWithCustomerContent(e, t, a, n)
                     }, e.prototype.getSemanticContext = function () {
                        return this._semanticContext
                     }, e.prototype.logEvent = function (t) {
                        if (u.default.loggingEnabled) {
                           this._apiKey || (this._apiKey = u.default.defaultTenantToken, this._createInitId());
                           var a = !0;
                           r.isString(t) ? t = {
                              name: t
                           } : t instanceof o.default && (t = t.getEvent(), a = !1), s.default.eventReceived(this._apiKey), e._logEvent(e._getInternalEvent(t, this._apiKey, a), this._contextProperties)
                        }
                     }, e.prototype.logSession = function (t, a) {
                        if (u.default.sessionEnabled) {
                           var o = {
                              name: "session",
                              type: "session",
                              properties: {}
                           };
                           if (e._addPropertiesToEvent(o, a), o.priority = i.AWTEventPriority.High, t === n.AWTSessionState.Started) {
                              if (this._sessionStartTime > 0) return;
                              this._sessionStartTime = (new Date).getTime(), this._sessionId = r.newGuid(), this.setContext("Session.Id", this._sessionId), o.properties["Session.State"] = "Started"
                           } else {
                              if (t !== n.AWTSessionState.Ended) return;
                              if (0 === this._sessionStartTime) return;
                              var s = Math.floor(((new Date).getTime() - this._sessionStartTime) / 1e3);
                              o.properties["Session.Id"] = this._sessionId, o.properties["Session.State"] = "Ended", o.properties["Session.Duration"] = s.toString(), o.properties["Session.DurationBucket"] = e._getSessionDurationFromTime(s), this._sessionStartTime = 0, this.setContext("Session.Id", null), this._sessionId = void 0
                           }
                           o.properties["Session.FirstLaunchTime"] = h.default.firstLaunchTime, this.logEvent(o)
                        }
                     }, e.prototype.getSessionId = function () {
                        return this._sessionId
                     }, e.prototype.logFailure = function (t, a, n, o, r) {
                        if (t && a) {
                           var s = {
                              name: "failure",
                              type: "failure",
                              properties: {}
                           };
                           e._addPropertiesToEvent(s, r), s.properties["Failure.Signature"] = t, s.properties["Failure.Detail"] = a, n && (s.properties["Failure.Category"] = n), o && (s.properties["Failure.Id"] = o), s.priority = i.AWTEventPriority.High, this.logEvent(s)
                        }
                     }, e.prototype.logPageView = function (t, a, i, n, o, r) {
                        if (t && a) {
                           var s = {
                              name: "pageview",
                              type: "pageview",
                              properties: {}
                           };
                           e._addPropertiesToEvent(s, r), s.properties["PageView.Id"] = t, s.properties["PageView.Name"] = a, i && (s.properties["PageView.Category"] = i), n && (s.properties["PageView.Uri"] = n), o && (s.properties["PageView.ReferrerUri"] = o), this.logEvent(s)
                        }
                     }, e.prototype._createInitId = function () {
                        !e._initIdMap[this._apiKey] && this._apiKey && (e._initIdMap[this._apiKey] = r.newGuid())
                     }, e._addPropertiesToEvent = function (e, t) {
                        if (t)
                           for (var a in t instanceof o.default && (t = t.getEvent()), t.name && (e.name = t.name), t.priority && (e.priority = t.priority), t.properties) t.properties.hasOwnProperty(a) && (e.properties[a] = t.properties[a])
                     }, e._getSessionDurationFromTime = function (e) {
                        return e < 0 ? "Undefined" : e <= 3 ? "UpTo3Sec" : e <= 10 ? "UpTo10Sec" : e <= 30 ? "UpTo30Sec" : e <= 60 ? "UpTo60Sec" : e <= 180 ? "UpTo3Min" : e <= 600 ? "UpTo10Min" : e <= 1800 ? "UpTo30Min" : "Above30Min"
                     }, e._logEvent = function (e, t) {
                        e.name && r.isString(e.name) ? (e.name = e.name.toLowerCase(), e.name = e.name.replace(r.EventNameDotRegex, "_"), e.type && r.isString(e.type) ? e.type = e.type.toLowerCase() : e.type = "custom", r.EventNameAndTypeRegex.test(e.name) && r.EventNameAndTypeRegex.test(e.type) ? ((!r.isNumber(e.timestamp) || e.timestamp < 0) && (e.timestamp = (new Date).getTime()), e.properties || (e.properties = {}), this._addContextIfAbsent(e, t.getPropertyMap()), this._addContextIfAbsent(e, u.default.logManagerContext.getPropertyMap()), this._setDefaultProperty(e, "EventInfo.InitId", this._getInitId(e.apiKey)), this._setDefaultProperty(e, "EventInfo.Sequence", this._getSequenceId(e.apiKey)), this._setDefaultProperty(e, "EventInfo.SdkVersion", c.FullVersionString), this._setDefaultProperty(e, "EventInfo.Name", e.name), this._setDefaultProperty(e, "EventInfo.Time", new Date(e.timestamp).toISOString()), r.isPriority(e.priority) || (e.priority = i.AWTEventPriority.Normal), this._sendEvent(e)) : _.default.eventsRejected([e], i.AWTEventsRejectedReason.InvalidEvent)) : _.default.eventsRejected([e], i.AWTEventsRejectedReason.InvalidEvent)
                     }, e._addContextIfAbsent = function (e, t) {
                        if (t)
                           for (var a in t) t.hasOwnProperty(a) && (e.properties[a] || (e.properties[a] = t[a]))
                     }, e._setDefaultProperty = function (e, t, a) {
                        e.properties[t] = {
                           value: a,
                           pii: i.AWTPiiKind.NotSet,
                           type: i.AWTPropertyType.String
                        }
                     }, e._sendEvent = function (e) {
                        l.default.sendEvent(e)
                     }, e._getInternalEvent = function (e, t, a) {
                        if (e.properties = e.properties || {}, a)
                           for (var i in e.properties) e.properties.hasOwnProperty(i) && (e.properties[i] = r.sanitizeProperty(i, e.properties[i]), null === e.properties[i] && delete e.properties[i]);
                        var n = e;
                        return n.id = r.newGuid(), n.apiKey = t, n
                     }, e._getInitId = function (t) {
                        return e._initIdMap[t]
                     }, e._getSequenceId = function (t) {
                        return void 0 === e._sequenceIdMap[t] && (e._sequenceIdMap[t] = 0), (++e._sequenceIdMap[t]).toString()
                     }, e._sequenceIdMap = {}, e._initIdMap = {}, e
                  }();
               t.default = p
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               }), t.AWT_REAL_TIME = "REAL_TIME", t.AWT_NEAR_REAL_TIME = "NEAR_REAL_TIME", t.AWT_BEST_EFFORT = "BEST_EFFORT"
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               }), t.Version = "1.8.3", t.FullVersionString = "AWT-Web-JS-" + t.Version
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(0);
               t.AWTPropertyType = i.AWTPropertyType, t.AWTPiiKind = i.AWTPiiKind, t.AWTEventPriority = i.AWTEventPriority, t.AWTEventsDroppedReason = i.AWTEventsDroppedReason, t.AWTEventsRejectedReason = i.AWTEventsRejectedReason, t.AWTCustomerContentKind = i.AWTCustomerContentKind;
               var n = a(6);
               t.AWTUserIdType = n.AWTUserIdType, t.AWTSessionState = n.AWTSessionState;
               var o = a(14);
               t.AWT_BEST_EFFORT = o.AWT_BEST_EFFORT, t.AWT_NEAR_REAL_TIME = o.AWT_NEAR_REAL_TIME, t.AWT_REAL_TIME = o.AWT_REAL_TIME;
               var r = a(5);
               t.AWTEventProperties = r.default;
               var s = a(13);
               t.AWTLogger = s.default;
               var _ = a(11);
               t.AWTLogManager = _.default;
               var l = a(29);
               t.AWTTransmissionManager = l.default;
               var u = a(9);
               t.AWTSerializer = u.default;
               var c = a(8);
               t.AWTSemanticContext = c.default, t.AWT_COLLECTOR_URL_UNITED_STATES = "https://us.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_GERMANY = "https://de.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_JAPAN = "https://jp.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_AUSTRALIA = "https://au.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_EUROPE = "https://eu.pipe.aria.microsoft.com/Collector/3.0/", t.AWT_COLLECTOR_URL_USGOV_DOD = "https://pf.pipe.aria.microsoft.com/Collector/3.0", t.AWT_COLLECTOR_URL_USGOV_DOJ = "https://tb.pipe.aria.microsoft.com/Collector/3.0"
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                     value: !0
                  }),
                  function (e) {
                     e[e._BT_STOP = 0] = "_BT_STOP", e[e._BT_STOP_BASE = 1] = "_BT_STOP_BASE", e[e._BT_BOOL = 2] = "_BT_BOOL", e[e._BT_DOUBLE = 8] = "_BT_DOUBLE", e[e._BT_STRING = 9] = "_BT_STRING", e[e._BT_STRUCT = 10] = "_BT_STRUCT", e[e._BT_LIST = 11] = "_BT_LIST", e[e._BT_MAP = 13] = "_BT_MAP", e[e._BT_INT32 = 16] = "_BT_INT32", e[e._BT_INT64 = 17] = "_BT_INT64"
                  }(t._BondDataType || (t._BondDataType = {}))
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(4),
                  n = a(19),
                  o = a(22);
               t._Utf8_GetBytes = function (e) {
                  for (var t = [], a = 0; a < e.length; ++a) {
                     var i = e.charCodeAt(a);
                     i < 128 ? t.push(i) : i < 2048 ? t.push(192 | i >> 6, 128 | 63 & i) : i < 55296 || i >= 57344 ? t.push(224 | i >> 12, 128 | i >> 6 & 63, 128 | 63 & i) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++a)), t.push(240 | i >> 18, 128 | i >> 12 & 63, 128 | i >> 6 & 63, 128 | 63 & i))
                  }
                  return t
               }, t._Base64_GetString = function (e) {
                  for (var t, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = [], n = e.length % 3, o = 0, r = e.length - n; o < r; o += 3) {
                     var s = (e[o] << 16) + (e[o + 1] << 8) + e[o + 2];
                     i.push([a.charAt((t = s) >> 18 & 63), a.charAt(t >> 12 & 63), a.charAt(t >> 6 & 63), a.charAt(63 & t)].join(""))
                  }
                  switch (n) {
                     case 1:
                        s = e[e.length - 1], i.push(a.charAt(s >> 2)), i.push(a.charAt(s << 4 & 63)), i.push("==");
                        break;
                     case 2:
                        var _ = (e[e.length - 2] << 8) + e[e.length - 1];
                        i.push(a.charAt(_ >> 10)), i.push(a.charAt(_ >> 4 & 63)), i.push(a.charAt(_ << 2 & 63)), i.push("=")
                  }
                  return i.join("")
               }, t._Varint_GetBytes = function (e) {
                  for (var t = []; 4294967168 & e;) t.push(127 & e | 128), e >>>= 7;
                  return t.push(127 & e), t
               }, t._Varint64_GetBytes = function (e) {
                  for (var t = e.low, a = e.high, i = []; a || 4294967168 & t;) i.push(127 & t | 128), t = (127 & a) << 25 | t >>> 7, a >>>= 7;
                  return i.push(127 & t), i
               }, t._Double_GetBytes = function (e) {
                  if (o.BrowserChecker._IsDataViewSupport()) {
                     var t = new DataView(new ArrayBuffer(8));
                     t.setFloat64(0, e, !0);
                     for (var a = [], i = 0; i < 8; ++i) a.push(t.getUint8(i));
                     return a
                  }
                  return n.FloatUtils._ConvertNumberToArray(e, !0)
               }, t._Zigzag_EncodeZigzag32 = function (e) {
                  return (e = i.Number._ToInt32(e)) << 1 ^ e >> 31
               }, t._Zigzag_EncodeZigzag64 = function (e) {
                  var t = e.low,
                     a = e.high,
                     n = a << 1 | t >>> 31,
                     o = t << 1;
                  2147483648 & a && (n = ~n, o = ~o);
                  var r = new i.UInt64("0");
                  return r.low = o, r.high = n, r
               }
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = function () {
                  function e() {}
                  return e._ConvertNumberToArray = function (e, t) {
                     if (!e) return t ? this._doubleZero : this._floatZero;
                     var a = t ? 52 : 23,
                        i = (1 << (t ? 11 : 8) - 1) - 1,
                        n = 1 - i,
                        o = i,
                        r = e < 0 ? 1 : 0;
                     e = Math.abs(e);
                     for (var s = Math.floor(e), _ = e - s, l = 2 * (i + 2) + a, u = new Array(l), c = 0; c < l;) u[c++] = 0;
                     for (c = i + 2; c && s;) u[--c] = s % 2, s = Math.floor(s / 2);
                     for (c = i + 1; c < l - 1 && _ > 0;)(_ *= 2) >= 1 ? (u[++c] = 1, --_) : u[++c] = 0;
                     for (var g = 0; g < l && !u[g];) g++;
                     var h = i + 1 - g,
                        p = g + a;
                     if (u[p + 1]) {
                        for (c = p; c > g && (u[c] = 1 - u[c], !u); --c);
                        c === g && ++h
                     }
                     if (h > o || s) return r ? t ? this._doubleNegInifinity : this._floatNegInifinity : t ? this._doubleInifinity : this._floatInifinity;
                     if (h < n) return t ? this._doubleZero : this._floatZero;
                     if (t) {
                        var b = 0;
                        for (c = 0; c < 20; ++c) b = b << 1 | u[++g];
                        for (var d = 0; c < 52; ++c) d = d << 1 | u[++g];
                        return [255 & d, d >> 8 & 255, d >> 16 & 255, d >>> 24, 255 & (b = r << 31 | 2147483647 & (b |= h + i << 20)), b >> 8 & 255, b >> 16 & 255, b >>> 24]
                     }
                     var M = 0;
                     for (c = 0; c < 23; ++c) M = M << 1 | u[++g];
                     return [255 & (M = r << 31 | 2147483647 & (M |= h + i << 23)), M >> 8 & 255, M >> 16 & 255, M >>> 24]
                  }, e._floatZero = [0, 0, 0, 0], e._doubleZero = [0, 0, 0, 0, 0, 0, 0, 0], e._floatInifinity = [0, 0, 128, 127], e._floatNegInifinity = [0, 0, 128, 255], e._doubleInifinity = [0, 0, 0, 0, 0, 0, 240, 127], e._doubleNegInifinity = [0, 0, 0, 0, 0, 0, 240, 255], e
               }();
               t.FloatUtils = i
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(4),
                  n = function () {
                     function e() {
                        this._buffer = []
                     }
                     return e.prototype._WriteByte = function (e) {
                        this._buffer.push(i.Number._ToByte(e))
                     }, e.prototype._Write = function (e, t, a) {
                        for (; a--;) this._WriteByte(e[t++])
                     }, e.prototype._GetBuffer = function () {
                        return this._buffer
                     }, e
                  }();
               t.MemoryStream = n
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(17);
               t._BondDataType = i._BondDataType;
               var n = a(18);
               t._Encoding = n;
               var o = a(20);
               t.IO = o;
               var r = a(4);
               t.Int64 = r.Int64, t.UInt64 = r.UInt64, t.Number = r.Number;
               var s = function () {
                  function e(e) {
                     this._stream = e
                  }
                  return e.prototype._WriteBlob = function (e) {
                     this._stream._Write(e, 0, e.length)
                  }, e.prototype._WriteBool = function (e) {
                     this._stream._WriteByte(e ? 1 : 0)
                  }, e.prototype._WriteContainerBegin = function (e, t) {
                     this._WriteUInt8(t), this._WriteUInt32(e)
                  }, e.prototype._WriteMapContainerBegin = function (e, t, a) {
                     this._WriteUInt8(t), this._WriteUInt8(a), this._WriteUInt32(e)
                  }, e.prototype._WriteDouble = function (e) {
                     var t = n._Double_GetBytes(e);
                     this._stream._Write(t, 0, t.length)
                  }, e.prototype._WriteFieldBegin = function (e, t, a) {
                     t <= 5 ? this._stream._WriteByte(e | t << 5) : t <= 255 ? (this._stream._WriteByte(192 | e), this._stream._WriteByte(t)) : (this._stream._WriteByte(224 | e), this._stream._WriteByte(t), this._stream._WriteByte(t >> 8))
                  }, e.prototype._WriteInt32 = function (e) {
                     e = n._Zigzag_EncodeZigzag32(e), this._WriteUInt32(e)
                  }, e.prototype._WriteInt64 = function (e) {
                     this._WriteUInt64(n._Zigzag_EncodeZigzag64(e))
                  }, e.prototype._WriteString = function (e) {
                     if ("" === e) this._WriteUInt32(0);
                     else {
                        var t = n._Utf8_GetBytes(e);
                        this._WriteUInt32(t.length), this._stream._Write(t, 0, t.length)
                     }
                  }, e.prototype._WriteStructEnd = function (e) {
                     this._WriteUInt8(e ? i._BondDataType._BT_STOP_BASE : i._BondDataType._BT_STOP)
                  }, e.prototype._WriteUInt32 = function (e) {
                     var t = n._Varint_GetBytes(r.Number._ToUInt32(e));
                     this._stream._Write(t, 0, t.length)
                  }, e.prototype._WriteUInt64 = function (e) {
                     var t = n._Varint64_GetBytes(e);
                     this._stream._Write(t, 0, t.length)
                  }, e.prototype._WriteUInt8 = function (e) {
                     this._stream._WriteByte(r.Number._ToUInt8(e))
                  }, e
               }();
               t.CompactBinaryProtocolWriter = s
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = function () {
                  function e() {}
                  return e._IsDataViewSupport = function () {
                     return "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
                  }, e
               }();
               t.BrowserChecker = i
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = function () {
                  function e(e) {
                     this.clockSkewRefreshDurationInMins = e, this._reset()
                  }
                  return e.prototype.allowRequestSending = function () {
                     return this._isFirstRequest && !this._clockSkewSet ? (this._isFirstRequest = !1, this._allowRequestSending = !1, !0) : this._allowRequestSending
                  }, e.prototype.shouldAddClockSkewHeaders = function () {
                     return this._shouldAddClockSkewHeaders
                  }, e.prototype.getClockSkewHeaderValue = function () {
                     return this._clockSkewHeaderValue
                  }, e.prototype.setClockSkew = function (e) {
                     this._clockSkewSet || (e ? this._clockSkewHeaderValue = e : this._shouldAddClockSkewHeaders = !1, this._clockSkewSet = !0, this._allowRequestSending = !0)
                  }, e.prototype._reset = function () {
                     var e = this;
                     this._isFirstRequest = !0, this._clockSkewSet = !1, this._allowRequestSending = !0, this._shouldAddClockSkewHeaders = !0, this._clockSkewHeaderValue = "use-collector-delta", this.clockSkewRefreshDurationInMins > 0 && setTimeout((function () {
                        return e._reset()
                     }), 6e4 * this.clockSkewRefreshDurationInMins)
                  }, e
               }();
               t.default = i
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = function () {
                  function e() {
                     this._killedTokenDictionary = {}
                  }
                  return e.prototype.setKillSwitchTenants = function (e, t) {
                     if (e && t) try {
                        var a = e.split(",");
                        if ("this-request-only" === t) return a;
                        for (var i = 1e3 * parseInt(t, 10), n = 0; n < a.length; ++n) this._killedTokenDictionary[a[n]] = Date.now() + i
                     } catch (o) {
                        return []
                     }
                     return []
                  }, e.prototype.isTenantKilled = function (e) {
                     return void 0 !== this._killedTokenDictionary[e] && this._killedTokenDictionary[e] > Date.now() || (delete this._killedTokenDictionary[e], !1)
                  }, e
               }();
               t.default = i
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(0),
                  n = function () {
                     function e(e, t) {
                        this._outboundQueue = e, this._maxNumberOfEvents = t, this._currentBatch = {}, this._currentNumEventsInBatch = 0
                     }
                     return e.prototype.addEventToBatch = function (e) {
                        if (e.priority === i.AWTEventPriority.Immediate_sync) {
                           var t = {};
                           return t[e.apiKey] = [e], t
                        }
                        return this._currentNumEventsInBatch >= this._maxNumberOfEvents && this.flushBatch(), void 0 === this._currentBatch[e.apiKey] && (this._currentBatch[e.apiKey] = []), this._currentBatch[e.apiKey].push(e), this._currentNumEventsInBatch++, null
                     }, e.prototype.flushBatch = function () {
                        this._currentNumEventsInBatch > 0 && (this._outboundQueue.push(this._currentBatch), this._currentBatch = {}, this._currentNumEventsInBatch = 0)
                     }, e.prototype.hasBatch = function () {
                        return this._currentNumEventsInBatch > 0
                     }, e
                  }();
               t.default = n
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = function () {
                  function e() {}
                  return e.shouldRetryForStatus = function (e) {
                     return !(e >= 300 && e < 500 && 408 !== e || 501 === e || 505 === e)
                  }, e.getMillisToBackoffForRetry = function (e) {
                     var t, a = Math.floor(1200 * Math.random()) + 2400;
                     return t = Math.pow(4, e) * a, Math.min(t, 12e4)
                  }, e
               }();
               t.default = i
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(0),
                  n = a(9),
                  o = a(26),
                  r = a(24),
                  s = a(23),
                  _ = a(15),
                  l = a(1),
                  u = a(2),
                  c = a(3),
                  g = function () {
                     function e(e, t, a, i, n) {
                        var o = this;
                        this._requestQueue = e, this._queueManager = a, this._httpInterface = i, this._urlString = "?qsp=true&content-type=application%2Fbond-compact-binary&client-id=NO_AUTH&sdk-version=" + _.FullVersionString, this._killSwitch = new r.default, this._paused = !1, this._useBeacons = !1, this._activeConnections = 0, this._clockSkewManager = new s.default(n), l.isUint8ArrayAvailable() || (this._urlString += "&content-encoding=base64"), this._urlString = t + this._urlString, this._httpInterface || (this._useBeacons = !l.isReactNative(), this._httpInterface = {
                           sendPOST: function (e, t, a, i, n, r) {
                              try {
                                 if (l.useXDomainRequest()) {
                                    var s = new XDomainRequest;
                                    s.open("POST", e), s.onload = function () {
                                       n(200, null)
                                    }, s.onerror = function () {
                                       i(400, null)
                                    }, s.ontimeout = function () {
                                       a(500, null)
                                    }, s.send(t)
                                 } else if (l.isReactNative()) fetch(e, {
                                    body: t,
                                    method: "POST"
                                 }).then((function (e) {
                                    var t = {};
                                    e.headers && e.headers.forEach((function (e, a) {
                                       t[a] = e
                                    })), n(e.status, t)
                                 })).catch((function (e) {
                                    i(0, {})
                                 }));
                                 else {
                                    var _ = new XMLHttpRequest;
                                    _.open("POST", e, !r), _.onload = function () {
                                       n(_.status, o._convertAllHeadersToMap(_.getAllResponseHeaders()))
                                    }, _.onerror = function () {
                                       i(_.status, o._convertAllHeadersToMap(_.getAllResponseHeaders()))
                                    }, _.ontimeout = function () {
                                       a(_.status, o._convertAllHeadersToMap(_.getAllResponseHeaders()))
                                    }, _.send(t)
                                 }
                              } catch (u) {
                                 i(400, null)
                              }
                           }
                        })
                     }
                     return e.prototype.hasIdleConnection = function () {
                        return this._activeConnections < 2
                     }, e.prototype.sendQueuedRequests = function () {
                        for (; this.hasIdleConnection() && !this._paused && this._requestQueue.length > 0 && this._clockSkewManager.allowRequestSending();) this._activeConnections++, this._sendRequest(this._requestQueue.shift(), 0, !1);
                        this.hasIdleConnection() && c.default.scheduleTimer()
                     }, e.prototype.isCompletelyIdle = function () {
                        return 0 === this._activeConnections
                     }, e.prototype.teardown = function () {
                        for (; this._requestQueue.length > 0;) this._sendRequest(this._requestQueue.shift(), 0, !0)
                     }, e.prototype.pause = function () {
                        this._paused = !0
                     }, e.prototype.resume = function () {
                        this._paused = !1, this.sendQueuedRequests()
                     }, e.prototype.removeQueuedRequests = function () {
                        this._requestQueue.length = 0
                     }, e.prototype.sendSynchronousRequest = function (e, t) {
                        this._paused && (e[t][0].priority = i.AWTEventPriority.High), this._activeConnections++, this._sendRequest(e, 0, !1, !0)
                     }, e.prototype._sendRequest = function (e, t, a, o) {
                        var r = this;
                        void 0 === o && (o = !1);
                        try {
                           if (this._paused) return this._activeConnections--, void this._queueManager.addBackRequest(e);
                           var s = 0,
                              _ = "";
                           for (var c in e) e.hasOwnProperty(c) && (this._killSwitch.isTenantKilled(c) ? (u.default.eventsRejected(e[c], i.AWTEventsRejectedReason.KillSwitch), delete e[c]) : (_.length > 0 && (_ += ","), _ += c, s++));
                           if (s > 0) {
                              var g = n.default.getPayloadBlob(e, s);
                              g.remainingRequest && this._requestQueue.push(g.remainingRequest);
                              var h = this._urlString + "&x-apikey=" + _ + "&client-time-epoch-millis=" + Date.now().toString();
                              this._clockSkewManager.shouldAddClockSkewHeaders() && (h = h + "&time-delta-to-apply-millis=" + this._clockSkewManager.getClockSkewHeaderValue());
                              var p = void 0;
                              for (var c in p = l.isUint8ArrayAvailable() ? new Uint8Array(g.payloadBlob) : n.default.base64Encode(g.payloadBlob), e)
                                 if (e.hasOwnProperty(c))
                                    for (var b = 0; b < e[c].length; ++b) e[c][b].sendAttempt > 0 ? e[c][b].sendAttempt++ : e[c][b].sendAttempt = 1;
                              if (this._useBeacons && a && l.isBeaconsSupported() && navigator.sendBeacon(h, p)) return;
                              this._httpInterface.sendPOST(h, p, (function (i, n) {
                                 r._retryRequestIfNeeded(i, n, e, s, _, t, a, o)
                              }), (function (i, n) {
                                 r._retryRequestIfNeeded(i, n, e, s, _, t, a, o)
                              }), (function (i, n) {
                                 r._retryRequestIfNeeded(i, n, e, s, _, t, a, o)
                              }), a || o)
                           } else a || this._handleRequestFinished(!1, {}, a, o)
                        } catch (d) {
                           this._handleRequestFinished(!1, {}, a, o)
                        }
                     }, e.prototype._retryRequestIfNeeded = function (e, t, a, n, r, s, _, l) {
                        var g = this,
                           h = !0;
                        if (void 0 !== e) {
                           if (t) {
                              var p = this._killSwitch.setKillSwitchTenants(t["kill-tokens"], t["kill-duration-seconds"]);
                              this._clockSkewManager.setClockSkew(t["time-delta-millis"]);
                              for (var b = 0; b < p.length; ++b) u.default.eventsRejected(a[p[b]], i.AWTEventsRejectedReason.KillSwitch), delete a[p[b]], n--
                           } else this._clockSkewManager.setClockSkew(null);
                           if (200 === e) return void this._handleRequestFinished(!0, a, _, l);
                           (!o.default.shouldRetryForStatus(e) || n <= 0) && (h = !1)
                        }
                        if (h)
                           if (l) this._activeConnections--, a[r][0].priority = i.AWTEventPriority.High, this._queueManager.addBackRequest(a);
                           else if (s < 1) {
                           for (var d in a) a.hasOwnProperty(d) && u.default.eventsRetrying(a[d]);
                           setTimeout((function () {
                              return g._sendRequest(a, s + 1, !1)
                           }), o.default.getMillisToBackoffForRetry(s))
                        } else this._activeConnections--, c.default.backOffTransmission(), this._queueManager.addBackRequest(a);
                        else this._handleRequestFinished(!1, a, _, l)
                     }, e.prototype._handleRequestFinished = function (e, t, a, n) {
                        for (var o in e && c.default.clearBackOff(), t) t.hasOwnProperty(o) && (e ? u.default.eventsSent(t[o]) : u.default.eventsDropped(t[o], i.AWTEventsDroppedReason.NonRetryableStatus));
                        this._activeConnections--, n || a || this.sendQueuedRequests()
                     }, e.prototype._convertAllHeadersToMap = function (e) {
                        var t = {};
                        if (e)
                           for (var a = e.split("\n"), i = 0; i < a.length; ++i) {
                              var n = a[i].split(": ");
                              t[n[0]] = n[1]
                           }
                        return t
                     }, e
                  }();
               t.default = g
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(0),
                  n = a(27),
                  o = a(3),
                  r = a(25),
                  s = a(2),
                  _ = a(1),
                  l = function () {
                     function e(e, t, a, o) {
                        this._queueSizeLimit = t, this._isCurrentlyUploadingNow = !1, this._uploadNowQueue = [], this._shouldDropEventsOnPause = !1, this._paused = !1, this._queueSize = 0, this._outboundQueue = [], this._inboundQueues = {}, this._inboundQueues[i.AWTEventPriority.High] = [], this._inboundQueues[i.AWTEventPriority.Normal] = [], this._inboundQueues[i.AWTEventPriority.Low] = [], this._addEmptyQueues(), this._batcher = new r.default(this._outboundQueue, 500), this._httpManager = new n.default(this._outboundQueue, e, this, a, o)
                     }
                     return e.prototype.addEvent = function (e) {
                        _.isPriority(e.priority) || (e.priority = i.AWTEventPriority.Normal), e.priority === i.AWTEventPriority.Immediate_sync ? this._httpManager.sendSynchronousRequest(this._batcher.addEventToBatch(e), e.apiKey) : this._queueSize < this._queueSizeLimit || this._dropEventWithPriorityOrLess(e.priority) ? this._addEventToProperQueue(e) : s.default.eventsDropped([e], i.AWTEventsDroppedReason.QueueFull)
                     }, e.prototype.sendEventsForPriorityAndAbove = function (e) {
                        this._batchEvents(e), this._httpManager.sendQueuedRequests()
                     }, e.prototype.hasEvents = function () {
                        return (this._inboundQueues[i.AWTEventPriority.High][0].length > 0 || this._inboundQueues[i.AWTEventPriority.Normal][0].length > 0 || this._inboundQueues[i.AWTEventPriority.Low][0].length > 0 || this._batcher.hasBatch()) && this._httpManager.hasIdleConnection()
                     }, e.prototype.addBackRequest = function (e) {
                        if (!this._paused || !this._shouldDropEventsOnPause) {
                           for (var t in e)
                              if (e.hasOwnProperty(t))
                                 for (var a = 0; a < e[t].length; ++a) e[t][a].sendAttempt < 6 ? this.addEvent(e[t][a]) : s.default.eventsDropped([e[t][a]], i.AWTEventsDroppedReason.NonRetryableStatus);
                           o.default.scheduleTimer()
                        }
                     }, e.prototype.teardown = function () {
                        this._paused || (this._batchEvents(i.AWTEventPriority.Low), this._httpManager.teardown())
                     }, e.prototype.uploadNow = function (e) {
                        var t = this;
                        this._addEmptyQueues(), this._isCurrentlyUploadingNow ? this._uploadNowQueue.push(e) : (this._isCurrentlyUploadingNow = !0, setTimeout((function () {
                           return t._uploadNow(e)
                        }), 0))
                     }, e.prototype.pauseTransmission = function () {
                        this._paused = !0, this._httpManager.pause(), this.shouldDropEventsOnPause && (this._queueSize -= this._inboundQueues[i.AWTEventPriority.High][0].length + this._inboundQueues[i.AWTEventPriority.Normal][0].length + this._inboundQueues[i.AWTEventPriority.Low][0].length, this._inboundQueues[i.AWTEventPriority.High][0] = [], this._inboundQueues[i.AWTEventPriority.Normal][0] = [], this._inboundQueues[i.AWTEventPriority.Low][0] = [], this._httpManager.removeQueuedRequests())
                     }, e.prototype.resumeTransmission = function () {
                        this._paused = !1, this._httpManager.resume()
                     }, e.prototype.shouldDropEventsOnPause = function (e) {
                        this._shouldDropEventsOnPause = e
                     }, e.prototype._removeFirstQueues = function () {
                        this._inboundQueues[i.AWTEventPriority.High].shift(), this._inboundQueues[i.AWTEventPriority.Normal].shift(), this._inboundQueues[i.AWTEventPriority.Low].shift()
                     }, e.prototype._addEmptyQueues = function () {
                        this._inboundQueues[i.AWTEventPriority.High].push([]), this._inboundQueues[i.AWTEventPriority.Normal].push([]), this._inboundQueues[i.AWTEventPriority.Low].push([])
                     }, e.prototype._addEventToProperQueue = function (e) {
                        this._paused && this._shouldDropEventsOnPause || (this._queueSize++, this._inboundQueues[e.priority][this._inboundQueues[e.priority].length - 1].push(e))
                     }, e.prototype._dropEventWithPriorityOrLess = function (e) {
                        for (var t = i.AWTEventPriority.Low; t <= e;) {
                           if (this._inboundQueues[t][this._inboundQueues[t].length - 1].length > 0) return s.default.eventsDropped([this._inboundQueues[t][this._inboundQueues[t].length - 1].shift()], i.AWTEventsDroppedReason.QueueFull), !0;
                           t++
                        }
                        return !1
                     }, e.prototype._batchEvents = function (e) {
                        for (var t = i.AWTEventPriority.High; t >= e;) {
                           for (; this._inboundQueues[t][0].length > 0;) {
                              var a = this._inboundQueues[t][0].pop();
                              this._queueSize--, this._batcher.addEventToBatch(a)
                           }
                           t--
                        }
                        this._batcher.flushBatch()
                     }, e.prototype._uploadNow = function (e) {
                        var t = this;
                        this.hasEvents() && this.sendEventsForPriorityAndAbove(i.AWTEventPriority.Low), this._checkOutboundQueueEmptyAndSent((function () {
                           t._removeFirstQueues(), null != e && e(), t._uploadNowQueue.length > 0 ? setTimeout((function () {
                              return t._uploadNow(t._uploadNowQueue.shift())
                           }), 0) : (t._isCurrentlyUploadingNow = !1, t.hasEvents() && o.default.scheduleTimer())
                        }))
                     }, e.prototype._checkOutboundQueueEmptyAndSent = function (e) {
                        var t = this;
                        this._httpManager.isCompletelyIdle() ? e() : setTimeout((function () {
                           return t._checkOutboundQueueEmptyAndSent(e)
                        }), 250)
                     }, e
                  }();
               t.default = l
            }, function (e, t, a) {
               "use strict";
               Object.defineProperty(t, "__esModule", {
                  value: !0
               });
               var i = a(3),
                  n = function () {
                     function e() {}
                     return e.setEventsHandler = function (e) {
                        i.default.setEventsHandler(e)
                     }, e.getEventsHandler = function () {
                        return i.default.getEventsHandler()
                     }, e.scheduleTimer = function () {
                        i.default.scheduleTimer()
                     }, e
                  }();
               t.default = n
            }, function (e, t, a) {
               e.exports = a(16)
            }])
         }, e.exports = i()
      },
      "3yOz": function (e, t, a) {
         "use strict";

         function i(e) {
            var t;
            return e && (e === window ? t = {
               left: 0,
               top: 0,
               width: window.innerWidth,
               height: window.innerHeight,
               right: window.innerWidth,
               bottom: window.innerHeight
            } : e.getBoundingClientRect && (t = e.getBoundingClientRect())), t
         }
         a.d(t, "a", (function () {
            return i
         }))
      },
      "4A6G": function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("agCW");

         function n(e) {
            for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
            for (var n = [], o = 0, r = t; o < r.length; o++) {
               var s = r[o];
               s && n.push("function" == typeof s ? s(e) : s)
            }
            return 1 === n.length ? n[0] : n.length ? i.a.apply(void 0, n) : {}
         }
      },
      "4W0n": function (e, t, a) {
         "use strict";
         a.r(t), a.d(t, "Async", (function () {
            return i.a
         })), a.d(t, "AutoScroll", (function () {
            return h
         })), a.d(t, "BaseComponent", (function () {
            return S
         })), a.d(t, "nullRender", (function () {
            return f
         })), a.d(t, "DelayedRender", (function () {
            return y
         })), a.d(t, "EventGroup", (function () {
            return u
         })), a.d(t, "FabricPerformance", (function () {
            return W
         })), a.d(t, "GlobalSettings", (function () {
            return L.a
         })), a.d(t, "KeyCodes", (function () {
            return E.a
         })), a.d(t, "Rectangle", (function () {
            return C
         })), a.d(t, "appendFunction", (function () {
            return w.a
         })), a.d(t, "mergeAriaAttributeValues", (function () {
            return k
         })), a.d(t, "findIndex", (function () {
            return P
         })), a.d(t, "find", (function () {
            return A
         })), a.d(t, "createArray", (function () {
            return I
         })), a.d(t, "toMatrix", (function () {
            return O
         })), a.d(t, "removeIndex", (function () {
            return R
         })), a.d(t, "replaceElement", (function () {
            return D
         })), a.d(t, "addElementAtIndex", (function () {
            return z
         })), a.d(t, "flatten", (function () {
            return N
         })), a.d(t, "arraysEqual", (function () {
            return G
         })), a.d(t, "asAsync", (function () {
            return F
         })), a.d(t, "assertNever", (function () {
            return Q
         })), a.d(t, "classNamesFunction", (function () {
            return j.a
         })), a.d(t, "composeComponentAs", (function () {
            return V
         })), a.d(t, "isControlled", (function () {
            return H.a
         })), a.d(t, "css", (function () {
            return K.a
         })), a.d(t, "Customizations", (function () {
            return q.a
         })), a.d(t, "Customizer", (function () {
            return X
         })), a.d(t, "CustomizerContext", (function () {
            return Y.a
         })), a.d(t, "customizable", (function () {
            return te
         })), a.d(t, "useCustomizationSettings", (function () {
            return ae
         })), a.d(t, "mergeCustomizations", (function () {
            return Z
         })), a.d(t, "mergeSettings", (function () {
            return J.b
         })), a.d(t, "mergeScopedSettings", (function () {
            return J.a
         })), a.d(t, "elementContains", (function () {
            return ie.b
         })), a.d(t, "elementContainsAttribute", (function () {
            return ie.c
         })), a.d(t, "findElementRecursive", (function () {
            return ie.d
         })), a.d(t, "getChildren", (function () {
            return ie.e
         })), a.d(t, "getDocument", (function () {
            return ie.f
         })), a.d(t, "getParent", (function () {
            return ie.g
         })), a.d(t, "getRect", (function () {
            return ie.h
         })), a.d(t, "getVirtualParent", (function () {
            return ie.i
         })), a.d(t, "getWindow", (function () {
            return ie.j
         })), a.d(t, "isVirtualElement", (function () {
            return ie.k
         })), a.d(t, "on", (function () {
            return ie.l
         })), a.d(t, "portalContainsElement", (function () {
            return ie.m
         })), a.d(t, "raiseClick", (function () {
            return ie.n
         })), a.d(t, "DATA_PORTAL_ATTRIBUTE", (function () {
            return ie.a
         })), a.d(t, "setPortalAttribute", (function () {
            return ie.o
         })), a.d(t, "setVirtualParent", (function () {
            return ie.p
         })), a.d(t, "extendComponent", (function () {
            return ne.a
         })), a.d(t, "getFirstFocusable", (function () {
            return oe.e
         })), a.d(t, "getLastFocusable", (function () {
            return oe.h
         })), a.d(t, "getFirstTabbable", (function () {
            return oe.f
         })), a.d(t, "getLastTabbable", (function () {
            return oe.i
         })), a.d(t, "focusFirstChild", (function () {
            return oe.c
         })), a.d(t, "getPreviousElement", (function () {
            return oe.k
         })), a.d(t, "getNextElement", (function () {
            return oe.j
         })), a.d(t, "isElementVisible", (function () {
            return oe.o
         })), a.d(t, "isElementTabbable", (function () {
            return oe.n
         })), a.d(t, "isElementFocusZone", (function () {
            return oe.m
         })), a.d(t, "isElementFocusSubZone", (function () {
            return oe.l
         })), a.d(t, "doesElementContainFocus", (function () {
            return oe.a
         })), a.d(t, "shouldWrapFocus", (function () {
            return oe.p
         })), a.d(t, "focusAsync", (function () {
            return oe.b
         })), a.d(t, "getFocusableByIndexPath", (function () {
            return oe.g
         })), a.d(t, "getElementIndexPath", (function () {
            return oe.d
         })), a.d(t, "getId", (function () {
            return re.a
         })), a.d(t, "resetIds", (function () {
            return re.b
         })), a.d(t, "getNativeElementProps", (function () {
            return le
         })), a.d(t, "hoistMethods", (function () {
            return ce
         })), a.d(t, "unhoistMethods", (function () {
            return ge
         })), a.d(t, "hoistStatics", (function () {
            return $
         })), a.d(t, "initializeComponentRef", (function () {
            return pe.a
         })), a.d(t, "initializeFocusRects", (function () {
            return Te
         })), a.d(t, "useFocusRects", (function () {
            return Ee
         })), a.d(t, "FocusRects", (function () {
            return Ce
         })), a.d(t, "getInitials", (function () {
            return De
         })), a.d(t, "isDirectionalKeyCode", (function () {
            return Me
         })), a.d(t, "addDirectionalKeyCode", (function () {
            return me
         })), a.d(t, "getLanguage", (function () {
            return ze.a
         })), a.d(t, "setLanguage", (function () {
            return ze.b
         })), a.d(t, "getDistanceBetweenPoints", (function () {
            return Ne
         })), a.d(t, "fitContentToBounds", (function () {
            return Ge
         })), a.d(t, "calculatePrecision", (function () {
            return Be
         })), a.d(t, "precisionRound", (function () {
            return Fe
         })), a.d(t, "setMemoizeWeakMap", (function () {
            return x.e
         })), a.d(t, "resetMemoizations", (function () {
            return x.d
         })), a.d(t, "memoize", (function () {
            return x.b
         })), a.d(t, "memoizeFunction", (function () {
            return x.c
         })), a.d(t, "createMemoizer", (function () {
            return x.a
         })), a.d(t, "merge", (function () {
            return je.a
         })), a.d(t, "isIOS", (function () {
            return xe
         })), a.d(t, "modalize", (function () {
            return Ve
         })), a.d(t, "assign", (function () {
            return o
         })), a.d(t, "filteredAssign", (function () {
            return r
         })), a.d(t, "mapEnumByName", (function () {
            return s
         })), a.d(t, "shallowCompare", (function () {
            return n
         })), a.d(t, "values", (function () {
            return _
         })), a.d(t, "omit", (function () {
            return l
         })), a.d(t, "isMac", (function () {
            return He
         })), a.d(t, "hasHorizontalOverflow", (function () {
            return Ke
         })), a.d(t, "hasVerticalOverflow", (function () {
            return qe
         })), a.d(t, "hasOverflow", (function () {
            return Ye
         })), a.d(t, "baseElementEvents", (function () {
            return se.c
         })), a.d(t, "baseElementProperties", (function () {
            return se.d
         })), a.d(t, "htmlElementProperties", (function () {
            return se.k
         })), a.d(t, "labelProperties", (function () {
            return se.p
         })), a.d(t, "audioProperties", (function () {
            return se.b
         })), a.d(t, "videoProperties", (function () {
            return se.z
         })), a.d(t, "olProperties", (function () {
            return se.r
         })), a.d(t, "liProperties", (function () {
            return se.q
         })), a.d(t, "anchorProperties", (function () {
            return se.a
         })), a.d(t, "buttonProperties", (function () {
            return se.e
         })), a.d(t, "inputProperties", (function () {
            return se.o
         })), a.d(t, "textAreaProperties", (function () {
            return se.w
         })), a.d(t, "selectProperties", (function () {
            return se.t
         })), a.d(t, "optionProperties", (function () {
            return se.s
         })), a.d(t, "tableProperties", (function () {
            return se.u
         })), a.d(t, "trProperties", (function () {
            return se.y
         })), a.d(t, "thProperties", (function () {
            return se.x
         })), a.d(t, "tdProperties", (function () {
            return se.v
         })), a.d(t, "colGroupProperties", (function () {
            return se.f
         })), a.d(t, "colProperties", (function () {
            return se.g
         })), a.d(t, "formProperties", (function () {
            return se.i
         })), a.d(t, "iframeProperties", (function () {
            return se.l
         })), a.d(t, "imgProperties", (function () {
            return se.n
         })), a.d(t, "imageProperties", (function () {
            return se.m
         })), a.d(t, "divProperties", (function () {
            return se.h
         })), a.d(t, "getNativeProps", (function () {
            return se.j
         })), a.d(t, "composeRenderFunction", (function () {
            return Ze
         })), a.d(t, "getResourceUrl", (function () {
            return $e
         })), a.d(t, "setBaseUrl", (function () {
            return et
         })), a.d(t, "getRTL", (function () {
            return it.a
         })), a.d(t, "setRTL", (function () {
            return it.c
         })), a.d(t, "getRTLSafeKeyCode", (function () {
            return it.b
         })), a.d(t, "safeRequestAnimationFrame", (function () {
            return nt
         })), a.d(t, "safeSetTimeout", (function () {
            return ot
         })), a.d(t, "DATA_IS_SCROLLABLE_ATTRIBUTE", (function () {
            return c.a
         })), a.d(t, "allowScrollOnElement", (function () {
            return c.c
         })), a.d(t, "allowOverscrollOnElement", (function () {
            return c.b
         })), a.d(t, "disableBodyScroll", (function () {
            return c.d
         })), a.d(t, "enableBodyScroll", (function () {
            return c.e
         })), a.d(t, "getScrollbarWidth", (function () {
            return c.g
         })), a.d(t, "findScrollableParent", (function () {
            return c.f
         })), a.d(t, "SELECTION_CHANGE", (function () {
            return rt
         })), a.d(t, "SelectionMode", (function () {
            return tt
         })), a.d(t, "SelectionDirection", (function () {
            return at
         })), a.d(t, "Selection", (function () {
            return st
         })), a.d(t, "format", (function () {
            return ct
         })), a.d(t, "styled", (function () {
            return gt.a
         })), a.d(t, "warn", (function () {
            return ht.c
         })), a.d(t, "setWarningCallback", (function () {
            return ht.b
         })), a.d(t, "warnConditionallyRequiredProps", (function () {
            return ht.d
         })), a.d(t, "resetControlledWarnings", (function () {
            return ht.a
         })), a.d(t, "warnControlledUsage", (function () {
            return ht.e
         })), a.d(t, "warnDeprecations", (function () {
            return ht.f
         })), a.d(t, "warnMutuallyExclusive", (function () {
            return ht.g
         })), a.d(t, "isIE11", (function () {
            return pt
         })), a.d(t, "getPropsWithDefaults", (function () {
            return bt
         })), a.d(t, "setFocusVisibility", (function () {
            return Se.b
         })), a.d(t, "IsFocusVisibleClassName", (function () {
            return Se.a
         })), a.d(t, "setSSR", (function () {
            return dt.b
         }));
         var i = a("GMhO");

         function n(e, t) {
            for (var a in e)
               if (e.hasOwnProperty(a) && (!t.hasOwnProperty(a) || t[a] !== e[a])) return !1;
            for (var a in t)
               if (t.hasOwnProperty(a) && !e.hasOwnProperty(a)) return !1;
            return !0
         }

         function o(e) {
            for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
            return r.apply(this, [null, e].concat(t))
         }

         function r(e, t) {
            for (var a = [], i = 2; i < arguments.length; i++) a[i - 2] = arguments[i];
            t = t || {};
            for (var n = 0, o = a; n < o.length; n++) {
               var r = o[n];
               if (r)
                  for (var s in r) !r.hasOwnProperty(s) || e && !e(s) || (t[s] = r[s])
            }
            return t
         }

         function s(e, t) {
            return Object.keys(e).map((function (a) {
               if (String(Number(a)) !== a) return t(a, e[a])
            })).filter((function (e) {
               return !!e
            }))
         }

         function _(e) {
            return Object.keys(e).reduce((function (t, a) {
               return t.push(e[a]), t
            }), [])
         }

         function l(e, t) {
            var a = {};
            for (var i in e) - 1 === t.indexOf(i) && e.hasOwnProperty(i) && (a[i] = e[i]);
            return a
         }
         var u = function () {
               function e(t) {
                  this._id = e._uniqueId++, this._parent = t, this._eventRecords = []
               }
               return e.raise = function (t, a, i, n) {
                  var r;
                  if (e._isElement(t)) {
                     if ("undefined" != typeof document && document.createEvent) {
                        var s = document.createEvent("HTMLEvents");
                        s.initEvent(a, n || !1, !0), o(s, i), r = t.dispatchEvent(s)
                     } else if ("undefined" != typeof document && document.createEventObject) {
                        var _ = document.createEventObject(i);
                        t.fireEvent("on" + a, _)
                     }
                  } else
                     for (; t && !1 !== r;) {
                        var l = t.__events__,
                           u = l ? l[a] : null;
                        if (u)
                           for (var c in u)
                              if (u.hasOwnProperty(c))
                                 for (var g = u[c], h = 0; !1 !== r && h < g.length; h++) {
                                    var p = g[h];
                                    p.objectCallback && (r = p.objectCallback.call(p.parent, i))
                                 }
                        t = n ? t.parent : null
                     }
                  return r
               }, e.isObserved = function (e, t) {
                  var a = e && e.__events__;
                  return !!a && !!a[t]
               }, e.isDeclared = function (e, t) {
                  var a = e && e.__declaredEvents;
                  return !!a && !!a[t]
               }, e.stopPropagation = function (e) {
                  e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
               }, e._isElement = function (e) {
                  return !!e && (!!e.addEventListener || "undefined" != typeof HTMLElement && e instanceof HTMLElement)
               }, e.prototype.dispose = function () {
                  this._isDisposed || (this._isDisposed = !0, this.off(), this._parent = null)
               }, e.prototype.onAll = function (e, t, a) {
                  for (var i in t) t.hasOwnProperty(i) && this.on(e, i, t[i], a)
               }, e.prototype.on = function (t, a, i, n) {
                  var o = this;
                  if (a.indexOf(",") > -1)
                     for (var r = a.split(/[ ,]+/), s = 0; s < r.length; s++) this.on(t, r[s], i, n);
                  else {
                     var _ = this._parent,
                        l = {
                           target: t,
                           eventName: a,
                           parent: _,
                           callback: i,
                           options: n
                        };
                     if ((r = t.__events__ = t.__events__ || {})[a] = r[a] || {
                           count: 0
                        }, r[a][this._id] = r[a][this._id] || [], r[a][this._id].push(l), r[a].count++, e._isElement(t)) {
                        var u = function () {
                           for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                           if (!o._isDisposed) {
                              var a;
                              try {
                                 if (!1 === (a = i.apply(_, e)) && e[0]) {
                                    var n = e[0];
                                    n.preventDefault && n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0
                                 }
                              } catch (n) {}
                              return a
                           }
                        };
                        l.elementCallback = u, t.addEventListener ? t.addEventListener(a, u, n) : t.attachEvent && t.attachEvent("on" + a, u)
                     } else {
                        l.objectCallback = function () {
                           for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                           if (!o._isDisposed) return i.apply(_, e)
                        }
                     }
                     this._eventRecords.push(l)
                  }
               }, e.prototype.off = function (e, t, a, i) {
                  for (var n = 0; n < this._eventRecords.length; n++) {
                     var o = this._eventRecords[n];
                     if (!(e && e !== o.target || t && t !== o.eventName || a && a !== o.callback || "boolean" == typeof i && i !== o.options)) {
                        var r = o.target.__events__,
                           s = r[o.eventName],
                           _ = s ? s[this._id] : null;
                        _ && (1 !== _.length && a ? (s.count--, _.splice(_.indexOf(o), 1)) : (s.count -= _.length, delete r[o.eventName][this._id]), s.count || delete r[o.eventName]), o.elementCallback && (o.target.removeEventListener ? o.target.removeEventListener(o.eventName, o.elementCallback, o.options) : o.target.detachEvent && o.target.detachEvent("on" + o.eventName, o.elementCallback)), this._eventRecords.splice(n--, 1)
                     }
                  }
               }, e.prototype.raise = function (t, a, i) {
                  return e.raise(this._parent, t, a, i)
               }, e.prototype.declare = function (e) {
                  var t = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
                  if ("string" == typeof e) t[e] = !0;
                  else
                     for (var a = 0; a < e.length; a++) t[e[a]] = !0
               }, e._uniqueId = 0, e
            }(),
            c = a("AXUM"),
            g = a("3yOz"),
            h = function () {
               function e(e) {
                  this._events = new u(this), this._scrollableParent = Object(c.f)(e), this._incrementScroll = this._incrementScroll.bind(this), this._scrollRect = Object(g.a)(this._scrollableParent), this._scrollableParent === window && (this._scrollableParent = document.body), this._scrollableParent && (this._events.on(window, "mousemove", this._onMouseMove, !0), this._events.on(window, "touchmove", this._onTouchMove, !0))
               }
               return e.prototype.dispose = function () {
                  this._events.dispose(), this._stopScroll()
               }, e.prototype._onMouseMove = function (e) {
                  this._computeScrollVelocity(e)
               }, e.prototype._onTouchMove = function (e) {
                  e.touches.length > 0 && this._computeScrollVelocity(e)
               }, e.prototype._computeScrollVelocity = function (e) {
                  if (this._scrollRect) {
                     var t, a;
                     "clientX" in e ? (t = e.clientX, a = e.clientY) : (t = e.touches[0].clientX, a = e.touches[0].clientY);
                     var i, n, o, r = this._scrollRect.top,
                        s = this._scrollRect.left,
                        _ = r + this._scrollRect.height - 100,
                        l = s + this._scrollRect.width - 100;
                     a < r + 100 || a > _ ? (n = a, i = r, o = _, this._isVerticalScroll = !0) : (n = t, i = s, o = l, this._isVerticalScroll = !1), this._scrollVelocity = n < i + 100 ? Math.max(-15, (100 - (n - i)) / 100 * -15) : n > o ? Math.min(15, (n - o) / 100 * 15) : 0, this._scrollVelocity ? this._startScroll() : this._stopScroll()
                  }
               }, e.prototype._startScroll = function () {
                  this._timeoutId || this._incrementScroll()
               }, e.prototype._incrementScroll = function () {
                  this._scrollableParent && (this._isVerticalScroll ? this._scrollableParent.scrollTop += Math.round(this._scrollVelocity) : this._scrollableParent.scrollLeft += Math.round(this._scrollVelocity)), this._timeoutId = setTimeout(this._incrementScroll, 16)
               }, e.prototype._stopScroll = function () {
                  this._timeoutId && (clearTimeout(this._timeoutId), delete this._timeoutId)
               }, e
            }(),
            p = a("VvCP"),
            b = a("IcFl"),
            d = a("bAdm"),
            M = a("Sfa5"),
            m = a("VF84"),
            S = function (e) {
               function t(a, i) {
                  var n = e.call(this, a, i) || this;
                  return function (e, t, a) {
                     for (var i = 0, n = a.length; i < n; i++) T(e, t, a[i])
                  }(n, t.prototype, ["componentDidMount", "shouldComponentUpdate", "getSnapshotBeforeUpdate", "render", "componentDidUpdate", "componentWillUnmount"]), n
               }
               return Object(p.__extends)(t, e), t.prototype.componentDidUpdate = function (e, t) {
                  this._updateComponentRef(e, this.props)
               }, t.prototype.componentDidMount = function () {
                  this._setComponentRef(this.props.componentRef, this)
               }, t.prototype.componentWillUnmount = function () {
                  if (this._setComponentRef(this.props.componentRef, null), this.__disposables) {
                     for (var e = 0, t = this._disposables.length; e < t; e++) {
                        var a = this.__disposables[e];
                        a.dispose && a.dispose()
                     }
                     this.__disposables = null
                  }
               }, Object.defineProperty(t.prototype, "className", {
                  get: function () {
                     if (!this.__className) {
                        var e = /function (.{1,})\(/.exec(this.constructor.toString());
                        this.__className = e && e.length > 1 ? e[1] : ""
                     }
                     return this.__className
                  },
                  enumerable: !0,
                  configurable: !0
               }), Object.defineProperty(t.prototype, "_disposables", {
                  get: function () {
                     return this.__disposables || (this.__disposables = []), this.__disposables
                  },
                  enumerable: !0,
                  configurable: !0
               }), Object.defineProperty(t.prototype, "_async", {
                  get: function () {
                     return this.__async || (this.__async = new i.a(this), this._disposables.push(this.__async)), this.__async
                  },
                  enumerable: !0,
                  configurable: !0
               }), Object.defineProperty(t.prototype, "_events", {
                  get: function () {
                     return this.__events || (this.__events = new u(this), this._disposables.push(this.__events)), this.__events
                  },
                  enumerable: !0,
                  configurable: !0
               }), t.prototype._resolveRef = function (e) {
                  var t = this;
                  return this.__resolves || (this.__resolves = {}), this.__resolves[e] || (this.__resolves[e] = function (a) {
                     return t[e] = a
                  }), this.__resolves[e]
               }, t.prototype._updateComponentRef = function (e, t) {
                  void 0 === t && (t = {}), e && t && e.componentRef !== t.componentRef && (this._setComponentRef(e.componentRef, null), this._setComponentRef(t.componentRef, this))
               }, t.prototype._warnDeprecations = function (e) {
                  Object(m.a)(this.className, this.props, e)
               }, t.prototype._warnMutuallyExclusive = function (e) {
                  Object(M.a)(this.className, this.props, e)
               }, t.prototype._warnConditionallyRequiredProps = function (e, t, a) {
                  Object(d.a)(this.className, this.props, e, t, a)
               }, t.prototype._setComponentRef = function (e, t) {
                  !this._skipComponentRefResolution && e && ("function" == typeof e && e(t), "object" == typeof e && (e.current = t))
               }, t
            }(b.Component);

         function T(e, t, a) {
            var i = e[a],
               n = t[a];
            (i || n) && (e[a] = function () {
               for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
               return n && (e = n.apply(this, t)), i !== n && (e = i.apply(this, t)), e
            })
         }

         function f() {
            return null
         }
         var y = function (e) {
               function t(t) {
                  var a = e.call(this, t) || this;
                  return a.state = {
                     isRendered: !1
                  }, a
               }
               return Object(p.__extends)(t, e), t.prototype.componentDidMount = function () {
                  var e = this,
                     t = this.props.delay;
                  this._timeoutId = window.setTimeout((function () {
                     e.setState({
                        isRendered: !0
                     })
                  }), t)
               }, t.prototype.componentWillUnmount = function () {
                  this._timeoutId && clearTimeout(this._timeoutId)
               }, t.prototype.render = function () {
                  return this.state.isRendered ? b.Children.only(this.props.children) : null
               }, t.defaultProps = {
                  delay: 0
               }, t
            }(b.Component),
            v = function () {
               return "undefined" != typeof performance && performance.now ? performance.now() : Date.now()
            },
            W = function () {
               function e() {}
               return e.measure = function (t, a) {
                  e._timeoutId && e.setPeriodicReset();
                  var i = v();
                  a();
                  var n = v(),
                     o = e.summary[t] || {
                        totalDuration: 0,
                        count: 0,
                        all: []
                     },
                     r = n - i;
                  o.totalDuration += r, o.count++, o.all.push({
                     duration: r,
                     timeStamp: n
                  }), e.summary[t] = o
               }, e.reset = function () {
                  e.summary = {}, clearTimeout(e._timeoutId), e._timeoutId = NaN
               }, e.setPeriodicReset = function () {
                  e._timeoutId = setTimeout((function () {
                     return e.reset()
                  }), 18e4)
               }, e.summary = {}, e
            }(),
            L = a("t4P/"),
            E = a("kdvQ"),
            C = function () {
               function e(e, t, a, i) {
                  void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === a && (a = 0), void 0 === i && (i = 0), this.top = a, this.bottom = i, this.left = e, this.right = t
               }
               return Object.defineProperty(e.prototype, "width", {
                  get: function () {
                     return this.right - this.left
                  },
                  enumerable: !0,
                  configurable: !0
               }), Object.defineProperty(e.prototype, "height", {
                  get: function () {
                     return this.bottom - this.top
                  },
                  enumerable: !0,
                  configurable: !0
               }), e.prototype.equals = function (e) {
                  return parseFloat(this.top.toFixed(4)) === parseFloat(e.top.toFixed(4)) && parseFloat(this.bottom.toFixed(4)) === parseFloat(e.bottom.toFixed(4)) && parseFloat(this.left.toFixed(4)) === parseFloat(e.left.toFixed(4)) && parseFloat(this.right.toFixed(4)) === parseFloat(e.right.toFixed(4))
               }, e
            }(),
            w = a("r4xH");

         function k() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var a = e.filter((function (e) {
               return e
            })).join(" ").trim();
            return "" === a ? void 0 : a
         }

         function P(e, t, a) {
            void 0 === a && (a = 0);
            for (var i = -1, n = a; e && n < e.length; n++)
               if (t(e[n], n)) {
                  i = n;
                  break
               } return i
         }

         function A(e, t) {
            var a = P(e, t);
            if (!(a < 0)) return e[a]
         }

         function I(e, t) {
            for (var a = [], i = 0; i < e; i++) a.push(t(i));
            return a
         }

         function O(e, t) {
            return e.reduce((function (e, a, i) {
               return i % t == 0 ? e.push([a]) : e[e.length - 1].push(a), e
            }), [])
         }

         function R(e, t) {
            return e.filter((function (e, a) {
               return t !== a
            }))
         }

         function D(e, t, a) {
            var i = e.slice();
            return i[a] = t, i
         }

         function z(e, t, a) {
            var i = e.slice();
            return i.splice(t, 0, a), i
         }

         function N(e) {
            var t = [];
            return e.forEach((function (e) {
               return t = t.concat(e)
            })), t
         }

         function G(e, t) {
            if (e.length !== t.length) return !1;
            for (var a = 0; a < e.length; a++)
               if (e[a] !== t[a]) return !1;
            return !0
         }
         var B = "undefined" != typeof WeakMap ? new WeakMap : void 0;

         function F(e) {
            var t = function (t) {
               function a() {
                  var a = null !== t && t.apply(this, arguments) || this;
                  return a.state = {
                     Component: B ? B.get(e.load) : void 0
                  }, a
               }
               return Object(p.__extends)(a, t), a.prototype.render = function () {
                  var e = this.props,
                     t = e.forwardedRef,
                     a = e.asyncPlaceholder,
                     i = Object(p.__rest)(e, ["forwardedRef", "asyncPlaceholder"]),
                     n = this.state.Component;
                  return n ? b.createElement(n, Object(p.__assign)(Object(p.__assign)({}, i), {
                     ref: t
                  })) : a ? b.createElement(a, null) : null
               }, a.prototype.componentDidMount = function () {
                  var t = this;
                  this.state.Component || e.load().then((function (a) {
                     a && (B && B.set(e.load, a), t.setState({
                        Component: a
                     }, e.onLoad))
                  })).catch(e.onError)
               }, a
            }(b.Component);
            return b.forwardRef((function (e, a) {
               return b.createElement(t, Object(p.__assign)({}, e, {
                  forwardedRef: a
               }))
            }))
         }

         function Q(e) {
            throw new Error("Unexpected object: " + e)
         }
         var j = a("A6sO"),
            x = a("gAQy");
         var U = Object(x.a)((function (e) {
            var t = e;
            return Object(x.a)((function (a) {
               if (e === a) throw new Error("Attempted to compose a component with itself.");
               var i = a,
                  n = Object(x.a)((function (e) {
                     return function (t) {
                        return b.createElement(i, Object(p.__assign)({}, t, {
                           defaultRender: e
                        }))
                     }
                  }));
               return function (e) {
                  var a = e.defaultRender;
                  return b.createElement(t, Object(p.__assign)({}, e, {
                     defaultRender: a ? n(a) : i
                  }))
               }
            }))
         }));

         function V(e, t) {
            return U(e)(t)
         }
         var H = a("oG1V"),
            K = a("PH9+"),
            q = a("w52g"),
            Y = a("DNp4"),
            J = a("XBd5");

         function Z(e, t) {
            var a = (t || {}).customizations,
               i = void 0 === a ? {
                  settings: {},
                  scopedSettings: {}
               } : a;
            return {
               customizations: {
                  settings: Object(J.b)(i.settings, e.settings),
                  scopedSettings: Object(J.a)(i.scopedSettings, e.scopedSettings),
                  inCustomizerContext: !0
               }
            }
         }
         var X = function (e) {
            function t() {
               var t = null !== e && e.apply(this, arguments) || this;
               return t._onCustomizationChange = function () {
                  return t.forceUpdate()
               }, t
            }
            return Object(p.__extends)(t, e), t.prototype.componentDidMount = function () {
               q.a.observe(this._onCustomizationChange)
            }, t.prototype.componentWillUnmount = function () {
               q.a.unobserve(this._onCustomizationChange)
            }, t.prototype.render = function () {
               var e = this,
                  t = this.props.contextTransform;
               return b.createElement(Y.a.Consumer, null, (function (a) {
                  var i = Z(e.props, a);
                  return t && (i = t(i)), b.createElement(Y.a.Provider, {
                     value: i
                  }, e.props.children)
               }))
            }, t
         }(b.Component);

         function $(e, t) {
            for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
            return t
         }
         var ee = a("agCW");

         function te(e, t, a) {
            return function (i) {
               var n, o = ((n = function (n) {
                  function o(e) {
                     var t = n.call(this, e) || this;
                     return t._styleCache = {}, t._onSettingChanged = t._onSettingChanged.bind(t), t
                  }
                  return Object(p.__extends)(o, n), o.prototype.componentDidMount = function () {
                     q.a.observe(this._onSettingChanged)
                  }, o.prototype.componentWillUnmount = function () {
                     q.a.unobserve(this._onSettingChanged)
                  }, o.prototype.render = function () {
                     var n = this;
                     return b.createElement(Y.a.Consumer, null, (function (o) {
                        var r = q.a.getSettings(t, e, o.customizations),
                           s = n.props;
                        if (r.styles && "function" == typeof r.styles && (r.styles = r.styles(Object(p.__assign)(Object(p.__assign)({}, r), s))), a && r.styles) {
                           if (n._styleCache.default !== r.styles || n._styleCache.component !== s.styles) {
                              var _ = Object(ee.a)(r.styles, s.styles);
                              n._styleCache.default = r.styles, n._styleCache.component = s.styles, n._styleCache.merged = _
                           }
                           return b.createElement(i, Object(p.__assign)({}, r, s, {
                              styles: n._styleCache.merged
                           }))
                        }
                        return b.createElement(i, Object(p.__assign)({}, r, s))
                     }))
                  }, o.prototype._onSettingChanged = function () {
                     this.forceUpdate()
                  }, o
               }(b.Component)).displayName = "Customized" + e, n);
               return $(i, o)
            }
         }

         function ae(e, t) {
            var a = b.useContext(Y.a).customizations,
               i = b.useState(q.a.getSettings(e, t, a)),
               n = i[0],
               o = i[1],
               r = b.useCallback((function () {
                  var i = q.a.getSettings(e, t, a);
                  o(i)
               }), [e, t, a]);
            return b.useEffect((function () {
               return q.a.observe(r),
                  function () {
                     return q.a.unobserve(r)
                  }
            }), [r]), n
         }
         var ie = a("DWxB"),
            ne = a("BXid"),
            oe = a("HCFE"),
            re = a("gg26"),
            se = a("k7jI"),
            _e = {
               label: se.p,
               audio: se.b,
               video: se.z,
               ol: se.r,
               li: se.q,
               a: se.a,
               button: se.e,
               input: se.o,
               textarea: se.w,
               select: se.t,
               option: se.s,
               table: se.u,
               tr: se.y,
               th: se.x,
               td: se.v,
               colGroup: se.f,
               col: se.g,
               form: se.i,
               iframe: se.l,
               img: se.n
            };

         function le(e, t, a) {
            var i = e && _e[e] || se.k;
            return Object(se.j)(t, i, a)
         }
         var ue = ["setState", "render", "componentWillMount", "UNSAFE_componentWillMount", "componentDidMount", "componentWillReceiveProps", "UNSAFE_componentWillReceiveProps", "shouldComponentUpdate", "componentWillUpdate", "getSnapshotBeforeUpdate", "UNSAFE_componentWillUpdate", "componentDidUpdate", "componentWillUnmount"];

         function ce(e, t, a) {
            void 0 === a && (a = ue);
            var i = [],
               n = function (n) {
                  "function" != typeof t[n] || void 0 !== e[n] || a && -1 !== a.indexOf(n) || (i.push(n), e[n] = function () {
                     for (var e = [], a = 0; a < arguments.length; a++) e[a] = arguments[a];
                     t[n].apply(t, e)
                  })
               };
            for (var o in t) n(o);
            return i
         }

         function ge(e, t) {
            t.forEach((function (t) {
               return delete e[t]
            }))
         }
         var he, pe = a("gW68"),
            be = a("d6cv"),
            de = ((he = {})[E.a.up] = 1, he[E.a.down] = 1, he[E.a.left] = 1, he[E.a.right] = 1, he[E.a.home] = 1, he[E.a.end] = 1, he[E.a.tab] = 1, he[E.a.pageUp] = 1, he[E.a.pageDown] = 1, he);

         function Me(e) {
            return !!de[e]
         }

         function me(e) {
            de[e] = 1
         }
         var Se = a("o5Fl");

         function Te(e) {
            var t, a = e || Object(be.a)();
            a && !0 !== (null === (t = a.FabricConfig) || void 0 === t ? void 0 : t.disableFocusRects) && (a.__hasInitializeFocusRects__ || (a.__hasInitializeFocusRects__ = !0, a.addEventListener("mousedown", fe, !0), a.addEventListener("pointerdown", ye, !0), a.addEventListener("keydown", ve, !0)))
         }

         function fe(e) {
            Object(Se.b)(!1, e.target)
         }

         function ye(e) {
            "mouse" !== e.pointerType && Object(Se.b)(!1, e.target)
         }

         function ve(e) {
            Me(e.which) && Object(Se.b)(!0, e.target)
         }
         var We = new WeakMap;

         function Le(e, t) {
            var a, i = We.get(e);
            return a = i ? i + t : 1, We.set(e, a), a
         }

         function Ee(e) {
            b.useEffect((function () {
               var t, a, i = Object(be.a)(null === (t = e) || void 0 === t ? void 0 : t.current);
               if (i && !0 !== (null === (a = i.FabricConfig) || void 0 === a ? void 0 : a.disableFocusRects)) {
                  var n = Le(i, 1);
                  return n <= 1 && (i.addEventListener("mousedown", we, !0), i.addEventListener("pointerdown", ke, !0), i.addEventListener("keydown", Pe, !0)),
                     function () {
                        var e;
                        i && !0 !== (null === (e = i.FabricConfig) || void 0 === e ? void 0 : e.disableFocusRects) && 0 === (n = Le(i, -1)) && (i.removeEventListener("mousedown", we, !0), i.removeEventListener("pointerdown", ke, !0), i.removeEventListener("keydown", Pe, !0))
                     }
               }
            }), [e])
         }
         var Ce = function (e) {
            return Ee(e.rootRef), null
         };

         function we(e) {
            Object(Se.b)(!1, e.target)
         }

         function ke(e) {
            "mouse" !== e.pointerType && Object(Se.b)(!1, e.target)
         }

         function Pe(e) {
            Me(e.which) && Object(Se.b)(!0, e.target)
         }
         var Ae = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g,
            Ie = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i,
            Oe = /\s+/g,
            Re = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;

         function De(e, t, a) {
            return e ? (e = function (e) {
               return e = (e = (e = e.replace(Ae, "")).replace(Oe, " ")).trim()
            }(e), Re.test(e) || !a && Ie.test(e) ? "" : function (e, t) {
               var a = "",
                  i = e.split(" ");
               return 2 === i.length ? (a += i[0].charAt(0).toUpperCase(), a += i[1].charAt(0).toUpperCase()) : 3 === i.length ? (a += i[0].charAt(0).toUpperCase(), a += i[2].charAt(0).toUpperCase()) : 0 !== i.length && (a += i[0].charAt(0).toUpperCase()), t && a.length > 1 ? a.charAt(1) + a.charAt(0) : a
            }(e, t)) : ""
         }
         var ze = a("bAv5");

         function Ne(e, t) {
            var a = e.left || e.x || 0,
               i = e.top || e.y || 0,
               n = t.left || t.x || 0,
               o = t.top || t.y || 0;
            return Math.sqrt(Math.pow(a - n, 2) + Math.pow(i - o, 2))
         }

         function Ge(e) {
            var t, a = e.contentSize,
               i = e.boundsSize,
               n = e.mode,
               o = void 0 === n ? "contain" : n,
               r = e.maxScale,
               s = void 0 === r ? 1 : r,
               _ = a.width / a.height,
               l = i.width / i.height;
            t = ("contain" === o ? _ > l : _ < l) ? i.width / a.width : i.height / a.height;
            var u = Math.min(s, t);
            return {
               width: a.width * u,
               height: a.height * u
            }
         }

         function Be(e) {
            var t = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(e));
            return t ? t[1] ? -t[1].length : t[2] ? t[2].length : 0 : 0
         }

         function Fe(e, t, a) {
            void 0 === a && (a = 10);
            var i = Math.pow(a, t);
            return Math.round(e * i) / i
         }
         var Qe, je = a("FV21"),
            xe = function () {
               return !!(window && window.navigator && window.navigator.userAgent) && /iPad|iPhone|iPod/i.test(window.navigator.userAgent)
            },
            Ue = a("AJs4");

         function Ve(e) {
            for (var t, a = [], i = Object(Ue.a)(e) || document; e !== i.body;) {
               for (var n = 0, o = e.parentElement.children; n < o.length; n++) {
                  var r = o[n];
                  r !== e && "true" !== (null === (t = r.getAttribute("aria-hidden")) || void 0 === t ? void 0 : t.toLowerCase()) && a.push(r)
               }
               if (!e.parentElement) break;
               e = e.parentElement
            }
            return a.forEach((function (e) {
                  e.setAttribute("aria-hidden", "true")
               })),
               function () {
                  ! function (e) {
                     e.forEach((function (e) {
                        e.setAttribute("aria-hidden", "false")
                     }))
                  }(a), a = []
               }
         }

         function He(e) {
            if (void 0 === Qe || e) {
               var t = Object(be.a)(),
                  a = t && t.navigator.userAgent;
               Qe = !!a && -1 !== a.indexOf("Macintosh")
            }
            return !!Qe
         }

         function Ke(e) {
            return e.clientWidth < e.scrollWidth
         }

         function qe(e) {
            return e.clientHeight < e.scrollHeight
         }

         function Ye(e) {
            return Ke(e) || qe(e)
         }
         var Je = Object(x.a)((function (e) {
            return Object(x.a)((function (t) {
               var a = Object(x.a)((function (e) {
                  return function (a) {
                     return t(a, e)
                  }
               }));
               return function (i, n) {
                  return e(i, n ? a(n) : t)
               }
            }))
         }));

         function Ze(e, t) {
            return Je(e)(t)
         }
         var Xe = "";

         function $e(e) {
            return Xe + e
         }

         function et(e) {
            Xe = e
         }
         var tt, at, it = a("eHVd"),
            nt = function (e) {
               var t;
               return function (a) {
                  t || (t = new Set, Object(ne.a)(e, {
                     componentWillUnmount: function () {
                        t.forEach((function (e) {
                           return cancelAnimationFrame(e)
                        }))
                     }
                  }));
                  var i = requestAnimationFrame((function () {
                     t.delete(i), a()
                  }));
                  t.add(i)
               }
            },
            ot = function (e) {
               var t;
               return function (a, i) {
                  t || (t = new Set, Object(ne.a)(e, {
                     componentWillUnmount: function () {
                        t.forEach((function (e) {
                           return clearTimeout(e)
                        }))
                     }
                  }));
                  var n = setTimeout((function () {
                     t.delete(n), a()
                  }), i);
                  t.add(n)
               }
            },
            rt = "change";
         ! function (e) {
            e[e.none = 0] = "none", e[e.single = 1] = "single", e[e.multiple = 2] = "multiple"
         }(tt || (tt = {})),
         function (e) {
            e[e.horizontal = 0] = "horizontal", e[e.vertical = 1] = "vertical"
         }(at || (at = {}));
         var st = function () {
            function e() {
               for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
               var a = e[0] || {},
                  i = a.onSelectionChanged,
                  n = a.getKey,
                  o = a.canSelectItem,
                  r = void 0 === o ? function () {
                     return !0
                  } : o,
                  s = a.items,
                  _ = a.selectionMode,
                  l = void 0 === _ ? tt.multiple : _;
               this.mode = l, this._getKey = n || _t, this._changeEventSuppressionCount = 0, this._exemptedCount = 0, this._anchoredIndex = 0, this._unselectableCount = 0, this._onSelectionChanged = i, this._canSelectItem = r, this._isModal = !1, this.setItems(s || [], !0), this.count = this.getSelectedCount()
            }
            return e.prototype.canSelectItem = function (e, t) {
               return !("number" == typeof t && t < 0) && this._canSelectItem(e, t)
            }, e.prototype.getKey = function (e, t) {
               var a = this._getKey(e, t);
               return "number" == typeof a || a ? "" + a : ""
            }, e.prototype.setChangeEvents = function (e, t) {
               this._changeEventSuppressionCount += e ? -1 : 1, 0 === this._changeEventSuppressionCount && this._hasChanged && (this._hasChanged = !1, t || this._change())
            }, e.prototype.isModal = function () {
               return this._isModal
            }, e.prototype.setModal = function (e) {
               this._isModal !== e && (this.setChangeEvents(!1), this._isModal = e, e || this.setAllSelected(!1), this._change(), this.setChangeEvents(!0))
            }, e.prototype.setItems = function (e, t) {
               void 0 === t && (t = !0);
               var a = {},
                  i = {},
                  n = !1;
               this.setChangeEvents(!1), this._unselectableCount = 0;
               for (var o = 0; o < e.length; o++) {
                  if (u = e[o]) {
                     var r = this.getKey(u, o);
                     r && (a[r] = o)
                  }
                  i[o] = u && !this.canSelectItem(u), i[o] && this._unselectableCount++
               }(t || 0 === e.length) && this._setAllSelected(!1, !0);
               var s = {},
                  _ = 0;
               for (var l in this._exemptedIndices)
                  if (this._exemptedIndices.hasOwnProperty(l)) {
                     var u, c = Number(l),
                        g = (u = this._items[c]) ? this.getKey(u, Number(c)) : void 0,
                        h = g ? a[g] : c;
                     void 0 === h ? n = !0 : (s[h] = !0, _++, n = n || h !== c)
                  } this._items && 0 === this._exemptedCount && e.length !== this._items.length && this._isAllSelected && (n = !0), this._exemptedIndices = s, this._exemptedCount = _, this._keyToIndexMap = a, this._unselectableIndices = i, this._items = e, this._selectedItems = null, n && (this._updateCount(), this._change()), this.setChangeEvents(!0)
            }, e.prototype.getItems = function () {
               return this._items
            }, e.prototype.getSelection = function () {
               if (!this._selectedItems) {
                  this._selectedItems = [];
                  var e = this._items;
                  if (e)
                     for (var t = 0; t < e.length; t++) this.isIndexSelected(t) && this._selectedItems.push(e[t])
               }
               return this._selectedItems
            }, e.prototype.getSelectedCount = function () {
               return this._isAllSelected ? this._items.length - this._exemptedCount - this._unselectableCount : this._exemptedCount
            }, e.prototype.getSelectedIndices = function () {
               if (!this._selectedIndices) {
                  this._selectedIndices = [];
                  var e = this._items;
                  if (e)
                     for (var t = 0; t < e.length; t++) this.isIndexSelected(t) && this._selectedIndices.push(t)
               }
               return this._selectedIndices
            }, e.prototype.isRangeSelected = function (e, t) {
               if (0 === t) return !1;
               for (var a = e + t, i = e; i < a; i++)
                  if (!this.isIndexSelected(i)) return !1;
               return !0
            }, e.prototype.isAllSelected = function () {
               var e = this._items.length - this._unselectableCount;
               return this.mode === tt.single && (e = Math.min(e, 1)), this.count > 0 && this._isAllSelected && 0 === this._exemptedCount || !this._isAllSelected && this._exemptedCount === e && e > 0
            }, e.prototype.isKeySelected = function (e) {
               var t = this._keyToIndexMap[e];
               return this.isIndexSelected(t)
            }, e.prototype.isIndexSelected = function (e) {
               return !!(this.count > 0 && this._isAllSelected && !this._exemptedIndices[e] && !this._unselectableIndices[e] || !this._isAllSelected && this._exemptedIndices[e])
            }, e.prototype.setAllSelected = function (e) {
               if (!e || this.mode === tt.multiple) {
                  var t = this._items ? this._items.length - this._unselectableCount : 0;
                  this.setChangeEvents(!1), t > 0 && (this._exemptedCount > 0 || e !== this._isAllSelected) && (this._exemptedIndices = {}, (e !== this._isAllSelected || this._exemptedCount > 0) && (this._exemptedCount = 0, this._isAllSelected = e, this._change()), this._updateCount()), this.setChangeEvents(!0)
               }
            }, e.prototype.setKeySelected = function (e, t, a) {
               var i = this._keyToIndexMap[e];
               i >= 0 && this.setIndexSelected(i, t, a)
            }, e.prototype.setIndexSelected = function (e, t, a) {
               if (this.mode !== tt.none && !((e = Math.min(Math.max(0, e), this._items.length - 1)) < 0 || e >= this._items.length)) {
                  this.setChangeEvents(!1);
                  var i = this._exemptedIndices[e];
                  !this._unselectableIndices[e] && (t && this.mode === tt.single && this._setAllSelected(!1, !0), i && (t && this._isAllSelected || !t && !this._isAllSelected) && (delete this._exemptedIndices[e], this._exemptedCount--), !i && (t && !this._isAllSelected || !t && this._isAllSelected) && (this._exemptedIndices[e] = !0, this._exemptedCount++), a && (this._anchoredIndex = e)), this._updateCount(), this.setChangeEvents(!0)
               }
            }, e.prototype.selectToKey = function (e, t) {
               this.selectToIndex(this._keyToIndexMap[e], t)
            }, e.prototype.selectToIndex = function (e, t) {
               if (this.mode !== tt.none)
                  if (this.mode !== tt.single) {
                     var a = this._anchoredIndex || 0,
                        i = Math.min(e, a),
                        n = Math.max(e, a);
                     for (this.setChangeEvents(!1), t && this._setAllSelected(!1, !0); i <= n; i++) this.setIndexSelected(i, !0, !1);
                     this.setChangeEvents(!0)
                  } else this.setIndexSelected(e, !0, !0)
            }, e.prototype.toggleAllSelected = function () {
               this.setAllSelected(!this.isAllSelected())
            }, e.prototype.toggleKeySelected = function (e) {
               this.setKeySelected(e, !this.isKeySelected(e), !0)
            }, e.prototype.toggleIndexSelected = function (e) {
               this.setIndexSelected(e, !this.isIndexSelected(e), !0)
            }, e.prototype.toggleRangeSelected = function (e, t) {
               if (this.mode !== tt.none) {
                  var a = this.isRangeSelected(e, t),
                     i = e + t;
                  if (!(this.mode === tt.single && t > 1)) {
                     this.setChangeEvents(!1);
                     for (var n = e; n < i; n++) this.setIndexSelected(n, !a, !1);
                     this.setChangeEvents(!0)
                  }
               }
            }, e.prototype._updateCount = function (e) {
               void 0 === e && (e = !1);
               var t = this.getSelectedCount();
               t !== this.count && (this.count = t, this._change()), this.count || e || this.setModal(!1)
            }, e.prototype._setAllSelected = function (e, t) {
               if (void 0 === t && (t = !1), !e || this.mode === tt.multiple) {
                  var a = this._items ? this._items.length - this._unselectableCount : 0;
                  this.setChangeEvents(!1), a > 0 && (this._exemptedCount > 0 || e !== this._isAllSelected) && (this._exemptedIndices = {}, (e !== this._isAllSelected || this._exemptedCount > 0) && (this._exemptedCount = 0, this._isAllSelected = e, this._change()), this._updateCount(t)), this.setChangeEvents(!0)
               }
            }, e.prototype._change = function () {
               0 === this._changeEventSuppressionCount ? (this._selectedItems = null, this._selectedIndices = void 0, u.raise(this, rt), this._onSelectionChanged && this._onSelectionChanged()) : this._hasChanged = !0
            }, e
         }();

         function _t(e, t) {
            var a = (e || {}).key;
            return void 0 === a ? "" + t : a
         }
         var lt = /[\{\}]/g,
            ut = /\{\d+\}/g;

         function ct(e) {
            for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
            var i = t;

            function n(e) {
               var t = i[e.replace(lt, "")];
               return null == t && (t = ""), t
            }
            return e.replace(ut, n)
         }
         var gt = a("eMAO"),
            ht = a("R3oT"),
            pt = function () {
               return !("undefined" == typeof window || !window.navigator || !window.navigator.userAgent) && window.navigator.userAgent.indexOf("rv:11.0") > -1
            };

         function bt(e, t) {
            for (var a = Object(p.__assign)({}, t), i = 0, n = Object.keys(e); i < n.length; i++) {
               var o = n[i];
               void 0 === a[o] && (a[o] = e[o])
            }
            return a
         }
         var dt = a("KEqS"),
            Mt = a("G4/H");
         Object(Mt.setVersion)("@uifabric/utilities", "7.26.0")
      },
      "5b23": function (e, t) {
         e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDQ4IDIwNDgiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+DQogIDxwYXRoIGZpbGw9IiMxNDdGOEYiIGQ9Ik0xMjggNTc2cTAgNDAgMTUgNzV0NDEgNjEgNjEgNDEgNzUgMTVxMjYgMCA0NSAxOXQxOSA0NXEwIDI2LTE5IDQ1dC00NSAxOXEtNjYgMC0xMjQtMjVUOTQgODAzIDI1IDcwMSAwIDU3NnEwLTY2IDI1LTEyNHQ2OC0xMDEgMTAyLTY5IDEyNS0yNmg0NDh2MTI4SDMyMHEtNDAgMC03NSAxNXQtNjEgNDEtNDEgNjEtMTUgNzV6bTE3NzUgMjE4cTMyIDggNTggMjV0NDYgNDMgMzAgNTUgMTEgNjN2NDkycTAgMTE5LTQ1IDIyNHQtMTI0IDE4My0xODMgMTIzLTIyNCA0NnEtMTQ2IDAtMjY4LTU0dC0yMjYtMTU4bC00NzItNDcxcS0yOC0yOC00My02NXQtMTUtNzZxMC00MiAxNS03OHQ0My02MyA2My00MiA3OC0xNnE0MSAwIDc3IDE1dDY1IDQzcTI3IDI2IDUzIDUzdDU0IDUzVjIwMXEwLTQxIDE0LTc3dDM5LTY0IDYxLTQ0IDc4LTE2cTQwIDAgNzUgMTV0NjEgNDEgNDEgNjEgMTUgNzV2NDQ2bDYyMyAxNTZ6bTE3IDE4NnEwLTIzLTEzLTQwdC0zNi0yMmwtNTkxLTE0OHY0MHEwIDIyLTQgNDF0LTE5IDMyLTQxIDEzcS0yNiAwLTQ1LTE5dC0xOS00NVYxOTJxMC0yNi0xOS00NXQtNDUtMTlxLTI2IDAtNDUgMTl0LTE5IDQ1djEwNDNxMCAyMy04IDQzdC0yMyAzNC0zNSAyMy00MyA5cS0yMSAwLTQyLTh0LTM2LTI0bC0xMzgtMTM5cS0yMS0yMS01MS0yMS0yOSAwLTUwIDIxdC0yMiA1MXEwIDI5IDIxIDUwbDQ3MiA0NzNxODMgODQgMTgzIDEyOHQyMjAgNDVxOTMgMCAxNzQtMzV0MTQyLTk2IDk2LTE0MiAzNi0xNzVWOTgwem0tMTI4LTc4OHEwIDQwLTE1IDc1dC00MSA2MS02MSA0MS03NSAxNWgtMTkyVjI1NmgxOTJxMjYgMCA0NS0xOXQxOS00NXEwLTI0LTktMzZ0LTI0LTE4LTMxLTEwLTMxLTktMjMtMTktMTAtMzZxMC0yNiAxOS00NXQ0NS0xOXE0MCAwIDc1IDE1dDYxIDQxIDQxIDYxIDE1IDc1eiIgLz4NCjwvc3ZnPg=="
      },
      "73q9": function (e, t, a) {},
      "9ik2": function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
               value: !0
            }),
            function (e) {
               e[e.center = 0] = "center", e[e.contain = 1] = "contain", e[e.cover = 2] = "cover", e[e.none = 3] = "none", e[e.centerCover = 4] = "centerCover", e[e.centerContain = 5] = "centerContain"
            }(t.ImageFit || (t.ImageFit = {})),
            function (e) {
               e[e.landscape = 0] = "landscape", e[e.portrait = 1] = "portrait"
            }(t.ImageCoverStyle || (t.ImageCoverStyle = {})),
            function (e) {
               e[e.notLoaded = 0] = "notLoaded", e[e.loaded = 1] = "loaded", e[e.error = 2] = "error", e[e.errorLoaded = 3] = "errorLoaded"
            }(t.ImageLoadState || (t.ImageLoadState = {}))
      },
      A6sO: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return u
         }));
         var i = a("tnFO"),
            n = a("RkUh"),
            o = a("eHVd"),
            r = a("d6cv"),
            s = 0,
            _ = i.b.getInstance();
         _ && _.onReset && _.onReset((function () {
            return s++
         }));
         var l = "__retval__";

         function u(e) {
            void 0 === e && (e = {});
            var t = new Map,
               a = 0,
               i = 0,
               _ = s;
            return function (u, c) {
               var h, p;
               if (void 0 === c && (c = {}), e.useStaticStyles && "function" == typeof u && u.__noStyleOverride__) return u(c);
               i++;
               var b = t,
                  d = c.theme,
                  M = d && void 0 !== d.rtl ? d.rtl : Object(o.a)(),
                  m = e.disableCaching;
               (_ !== s && (_ = s, t = new Map, a = 0), e.disableCaching || (b = g(t, u), b = g(b, c)), !m && b[l] || (b[l] = void 0 === u ? {} : Object(n.a)(["function" == typeof u ? u(c) : u], {
                  rtl: !!M,
                  specificityMultiplier: e.useStaticStyles ? 5 : void 0
               }), m || a++), a > (e.cacheSize || 50)) && ((null === (p = null === (h = Object(r.a)()) || void 0 === h ? void 0 : h.FabricConfig) || void 0 === p ? void 0 : p.enableClassNameCacheFullWarning) && (console.warn("Styles are being recalculated too frequently. Cache miss rate is " + a + "/" + i + "."), console.trace()), t.clear(), a = 0, e.disableCaching = !0);
               return b[l]
            }
         }

         function c(e, t) {
            return t = function (e) {
               switch (e) {
                  case void 0:
                     return "__undefined__";
                  case null:
                     return "__null__";
                  default:
                     return e
               }
            }(t), e.has(t) || e.set(t, new Map), e.get(t)
         }

         function g(e, t) {
            if ("function" == typeof t)
               if (t.__cachedInputs__)
                  for (var a = 0, i = t.__cachedInputs__; a < i.length; a++) {
                     e = c(e, i[a])
                  } else e = c(e, t);
               else if ("object" == typeof t)
               for (var n in t) t.hasOwnProperty(n) && (e = c(e, t[n]));
            return e
         }
      },
      AJs4: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("KEqS");

         function n(e) {
            if (!i.a && "undefined" != typeof document) {
               var t = e;
               return t && t.ownerDocument ? t.ownerDocument : document
            }
         }
      },
      AXUM: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return l
         })), a.d(t, "c", (function () {
            return u
         })), a.d(t, "b", (function () {
            return c
         })), a.d(t, "d", (function () {
            return h
         })), a.d(t, "e", (function () {
            return p
         })), a.d(t, "g", (function () {
            return b
         })), a.d(t, "f", (function () {
            return d
         }));
         var i, n = a("AJs4"),
            o = a("sY4W"),
            r = a("d6cv"),
            s = 0,
            _ = Object(o.a)({
               overflow: "hidden !important"
            }),
            l = "data-is-scrollable",
            u = function (e, t) {
               if (e) {
                  var a = 0,
                     i = null;
                  t.on(e, "touchstart", (function (e) {
                     1 === e.targetTouches.length && (a = e.targetTouches[0].clientY)
                  }), {
                     passive: !1
                  }), t.on(e, "touchmove", (function (e) {
                     if (1 === e.targetTouches.length && (e.stopPropagation(), i)) {
                        var t = e.targetTouches[0].clientY - a,
                           n = d(e.target);
                        n && (i = n), 0 === i.scrollTop && t > 0 && e.preventDefault(), i.scrollHeight - Math.ceil(i.scrollTop) <= i.clientHeight && t < 0 && e.preventDefault()
                     }
                  }), {
                     passive: !1
                  }), i = e
               }
            },
            c = function (e, t) {
               if (e) {
                  t.on(e, "touchmove", (function (e) {
                     e.stopPropagation()
                  }), {
                     passive: !1
                  })
               }
            },
            g = function (e) {
               e.preventDefault()
            };

         function h() {
            var e = Object(n.a)();
            e && e.body && !s && (e.body.classList.add(_), e.body.addEventListener("touchmove", g, {
               passive: !1,
               capture: !1
            })), s++
         }

         function p() {
            if (s > 0) {
               var e = Object(n.a)();
               e && e.body && 1 === s && (e.body.classList.remove(_), e.body.removeEventListener("touchmove", g)), s--
            }
         }

         function b() {
            if (void 0 === i) {
               var e = document.createElement("div");
               e.style.setProperty("width", "100px"), e.style.setProperty("height", "100px"), e.style.setProperty("overflow", "scroll"), e.style.setProperty("position", "absolute"), e.style.setProperty("top", "-9999px"), document.body.appendChild(e), i = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return i
         }

         function d(e) {
            for (var t = e, a = Object(n.a)(e); t && t !== a.body;) {
               if ("true" === t.getAttribute(l)) return t;
               t = t.parentElement
            }
            for (t = e; t && t !== a.body;) {
               if ("false" !== t.getAttribute(l)) {
                  var i = getComputedStyle(t),
                     o = i ? i.getPropertyValue("overflow-y") : "";
                  if (o && ("scroll" === o || "auto" === o)) return t
               }
               t = t.parentElement
            }
            return t && t !== a.body || (t = Object(r.a)(e)), t
         }
      },
      BXid: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("r4xH");

         function n(e, t) {
            for (var a in t) t.hasOwnProperty(a) && (e[a] = Object(i.a)(e, e[a], t[a]))
         }
      },
      CbWY: function (e, t, a) {
         "use strict";
         var i = function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== i) return i;
            throw new Error("unable to locate global object")
         }();
         e.exports = t = i.fetch, i.fetch && (t.default = i.fetch.bind(i)), t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response
      },
      CjKy: function (e, t, a) {},
      CzYp: function (e, t, a) {
         "use strict";
         var i, n = a("3hj/"),
            o = a("MW4m");
         ! function (e) {
            e.Installed = "Installed", e.Browser = "Browser", e.Unknown = "Unknown"
         }(i || (i = {}));
         var r = i,
            s = function () {
               return "undefined" == typeof navigator ? r.Browser : navigator ? navigator.standalone || matchMedia("(display-mode: standalone)").matches ? r.Installed : r.Browser : r.Unknown
            },
            _ = a("D7qM"),
            l = function () {
               function e() {
                  var e = this;
                  this.clientType = "web", this.LogEvent = function (t, a) {
                     if ("undefined" != typeof window && "bing" !== e.clientType) {
                        var i, n, o = (i = window.location.pathname, (n = new RegExp("/([a-z-]+)([/a-z-]*)").exec(i)) && n.length > 2 ? {
                              language: n[1],
                              page: n[2] || "/"
                           } : {
                              language: "unknown",
                              page: "unknown"
                           }),
                           r = "mathweb";
                        "teams" === e.clientType && (r = "mathteams");
                        var l = {
                           name: r,
                           properties: Object.assign({
                              Event: t,
                              Host: window.location.host,
                              Language: o.language,
                              Page: o.page,
                              LaunchMode: s()
                           }, a)
                        };
                        "app" === e.clientType ? Object(_.b)(l) : e.getLogger().logEvent(l)
                     }
                  }, this.LogKeyboardExpressionSubmitted = function (t) {
                     e.LogEvent(o.a.MathInput_KeyboardSubmission, {
                        submitSource: t
                     })
                  }, this.OnPageLoad = function () {
                     e.logger = n.AWTLogManager.initialize("e536b6370b40487fa5dc77360490b500-af10d46e-a981-440e-8d79-603ee447cd8c-7192"), e.LogEvent("PageLoad")
                  }, this.SetClientType = function (t) {
                     e.clientType = t
                  }
               }
               return e.prototype.getLogger = function () {
                  return this.logger || (n.AWTLogManager.initialize("e536b6370b40487fa5dc77360490b500-af10d46e-a981-440e-8d79-603ee447cd8c-7192"), this.logger = n.AWTLogManager.getLogger()), this.logger
               }, e
            }();
         t.a = new l
      },
      D7qM: function (e, t, a) {
         "use strict";
         a.d(t, "c", (function () {
            return i
         })), a.d(t, "b", (function () {
            return n
         })), a.d(t, "a", (function () {
            return o
         }));
         var i = function (e) {
               var t, a;
               null === (t = window) || void 0 === t || null === (a = t.ReactNativeWebView) || void 0 === a || a.postMessage(e)
            },
            n = function (e) {
               i(JSON.stringify({
                  type: "Log",
                  logData: e
               }))
            },
            o = function (e) {
               i(JSON.stringify({
                  type: "Clipboard_Copy",
                  data: e
               }))
            }
      },
      DNp4: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("IcFl"),
            n = i.createContext({
               customizations: {
                  inCustomizerContext: !1,
                  settings: {},
                  scopedSettings: {}
               }
            })
      },
      DWxB: function (e, t, a) {
         "use strict";
         a.d(t, "b", (function () {
            return i.a
         })), a.d(t, "c", (function () {
            return n.a
         })), a.d(t, "d", (function () {
            return o.a
         })), a.d(t, "e", (function () {
            return s
         })), a.d(t, "f", (function () {
            return _.a
         })), a.d(t, "g", (function () {
            return l.a
         })), a.d(t, "h", (function () {
            return u.a
         })), a.d(t, "i", (function () {
            return c.a
         })), a.d(t, "j", (function () {
            return g.a
         })), a.d(t, "k", (function () {
            return r.a
         })), a.d(t, "l", (function () {
            return h.a
         })), a.d(t, "m", (function () {
            return p.a
         })), a.d(t, "n", (function () {
            return b.a
         })), a.d(t, "a", (function () {
            return d.a
         })), a.d(t, "o", (function () {
            return d.b
         })), a.d(t, "p", (function () {
            return M
         }));
         var i = a("Vq28"),
            n = a("JDi1"),
            o = a("2gR7"),
            r = a("cL4v");

         function s(e, t) {
            void 0 === t && (t = !0);
            var a = [];
            if (e) {
               for (var i = 0; i < e.children.length; i++) a.push(e.children.item(i));
               t && Object(r.a)(e) && a.push.apply(a, e._virtual.children)
            }
            return a
         }
         var _ = a("AJs4"),
            l = a("Wn9d"),
            u = a("3yOz"),
            c = a("VtL9"),
            g = a("d6cv"),
            h = a("ycBJ"),
            p = a("L6Cy"),
            b = a("PQqj"),
            d = a("tj/O");

         function M(e, t) {
            var a = e,
               i = t;
            a._virtual || (a._virtual = {
               children: []
            });
            var n = a._virtual.parent;
            if (n && n !== t) {
               var o = n._virtual.children.indexOf(a);
               o > -1 && n._virtual.children.splice(o, 1)
            }
            a._virtual.parent = i || void 0, i && (i._virtual || (i._virtual = {
               children: []
            }), i._virtual.children.push(a))
         }
      },
      Di8l: function (e) {         e.exports = JSON.parse('{"en":{"Generic_Back":"Back","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"Online math solver with free step by step solutions to algebra, calculus, and other math problems. Get help on the web or with our math app.","MathWeb_Download_MobileHeading":"Step-by-step solutions at your finger tips","MathWeb_Download_IOS":"Download for iOS","MathWeb_Download_Android":"Download for Android","MathWeb_Download_InstalledMessage":"App already installed","MathWeb_Download_Button":"Download desktop app","MathWeb_Download_Unavailable":"Desktop app unavailable","MathWeb_Download_MacMessage":"Currently, the Math Solver desktop app is only available via Chrome on MacOSX. Please open this page in Chrome to install the app.","MathWeb_Download_UnknownMessage":"Currently, the Math Solver desktop is only available via Microsoft Edge and Chrome. Please open this page in a compatible browser.","EDU_PROB_CATEGORY_LIN_EQ":"Linear equation","EDU_PROB_CATEGORY_QUAD_EQ":"Quadratic equation","EDU_PROB_CATEGORY_ARITHMETIC":"Arithmetic","EDU_PROB_CATEGORY_TRIG":"Trigonometry","EDU_PROB_CATEGORY_MATRIX":"Matrix","EDU_PROB_CATEGORY_SIM_EQ":"Simultaneous equation","EDU_PROB_CATEGORY_DIFF":"Differentiation","EDU_PROB_CATEGORY_INTEGRATION":"Integration","EDU_PROB_CATEGORY_LIMITS":"Limits","EDU_PROB_CATEGORY_COMPLEX":"Complex numbers","EDU_PROB_CATEGORY_LIST":"List","NotebookTab_Example":"Examples","MathWeb_GenericSolve":"Solve","MathResult_Graph_ReCenter":"Re-Center","MathWeb_Keyboard_Algebra":"algebra","MathWeb_Keyboard_Calculus":"calculus","MathWeb_Keyboard_List":"list","MathWeb_Keyboard_Matrices":"matrices","MathWeb_Keyboard_Numbers":"numbers","MathWeb_Keyboard_Operators":"operators","MathWeb_Keyboard_Statistics":"statistics","MathWeb_Keyboard_Trig":"trigonometry","MathWeb_Keyboard_Variables":"variables","KeyboardInput_Solve":"Solve","KeyboardInput_PlaceholderText":"Type a math problem","MathWeb_Section_Steps_Title":"Get step-by-step explanations","MathWeb_Section_Steps_Subtitle":"See how to solve problems and show your work—plus get definitions for mathematical concepts","MathWeb_Section_Graph_Title":"Graph your math problems","MathWeb_Section_Graph_Subtitle":"Instantly graph any equation to visualize your function and understand the relationship between variables","MathWeb_Section_Practice_Title":"Practice, practice, practice","MathWeb_Section_Practice_Subtitle":"Search for additional learning materials, such as related worksheets and video tutorials","MathWeb_Section_Language_Title":"Get math help in your language","MathWeb_Section_Language_Subtitle":"Works in Spanish, Hindi, German, and more","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Try Math Solver","MathAnswerView_Videos":"Videos","MathWeb_Section_Video_Subtitle":"Watch for new features, tips and more!","MathWeb_Title":"Get step-by-step solutions to your math problems","Results_Less":"Less {0}","Results_More":"More {0}","MathPracticeProblem_SectionHeader":"Practice","MathWeb_PopularProblems":"Popular Problems","MathWeb_SolveProblemTitleFormat":"Solve {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Solve your math problems using our free math solver with step-by-step solutions. Our math solver supports basic math, pre-algebra, algebra, trigonometry, calculus and more.","Generic_About":"About","MathWeb_Topics":"Topics","Generic_PrivacyPolicy":"Privacy Policy","Generic_TermOfUse":"Terms of service","Settings_Language":"Language","MathWeb_BackToTop":"Back to top","MathWeb_SimilarProblems":"Similar Problems","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Order of Operations","MathWeb_Topic_PrimeFactorization":"Prime Factorization","MathWeb_Topic_Fractions":"Fractions","MathWeb_Topic_LCM":"Least Common Multiple","MathWeb_Topic_GCF":"Greatest Common Factor","MathWeb_Topic_Mean":"Mean","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Exponents","MathWeb_Topic_Radicals":"Radicals","MathWeb_Topic_MixedFractions":"Mixed Fractions","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Combine Like Terms","MathWeb_Topic_SolveForVariable":"Solve for a Variable","MathWeb_Topic_LinearEquations":"Linear Equations","MathWeb_Topic_QuadraticEquations":"Quadratic Equations","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Inequalities","MathWeb_Topic_SystemsOfEquations":"Systems of Equations","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Expand","MathWeb_Topic_EvaluteFractions":"Evaluate Fractions","MathWeb_Topic_Trigonometry":"Trigonometry","MathWeb_Topic_Simplify":"Simplify","MathWeb_Topic_Evaluate":"Evaluate","MathWeb_Topic_Graphs":"Graphs","MathWeb_Topic_SolveEquations":"Solve Equations","MathWeb_Topic_Calculus":"Calculus","MathWeb_Topic_Derivatives":"Derivatives","MathWeb_Topic_Integrals":"Integrals","MathWeb_Topic_Limits":"Limits","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Algebra Calculator","MathWeb_TrigCalculator":"Trigonometry Calculator","MathWeb_CalculusCalculator":"Calculus Calculator","MathWeb_MatrixCalculator":"Matrix Calculator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Generating a quiz...","Quiz_Error_Header":"Oh snap! We weren’t able to generate a quiz based on this type of problem.","Quiz_Notebook_ProblemCount_Template":"{0} problems similar to:","NoResults_MathSolveError":"Something went wrong, please try again","Quiz_Completion_Date":"Completed {0}","Quiz_Result_Correct":"Correct","Quiz_Total_Score_Template":"You answered {0} out of {1} questions correctly.","Quiz_Complete_Header":"Quiz complete","Quiz_End_Finish":"Finish","KeyboardInput_Undo":"Undo","MathWeb_DeleteAll":"Delete all","MathWeb_MyQuizzes":"My quizzes","MathWeb_QuizNotFound":"Quiz not found","Quiz_NextProblem":"Next Problem","Quiz_CheckProblem":"Check","Quiz_Answer_Prompt":"Select the answer to the problem:","Quiz_HintButton":"Help me","MathWeb_NewQuiz":"New quiz","Quiz_StartScreen_Question_Count_Template":"{0} multiple-choice questions","Quiz_StartScreen_Header":"Ready for a quiz?","Quiz_StartScreen_Time_Template":"{0} minutes to complete","Quiz_Start":"Start","Quiz_Result_Incorrect":"Incorrect","Quiz_Result_Your_Answer":"Your answer:","Quiz_Result_See_Solution":"See solution","Quiz_Entity":"Quiz","MathWeb_InProgress":"In progress","MathWeb_ConfirmQuizDelete":"Are you sure you want to delete all quizzes?","Generic_Edit":"Edit","Generic_Close":"Close","MathResult_GraphHeader":"Graph","Teams_ViewInteractiveGraph":"View Interactive Graph","Network_Offline_Message":"You are offline. Please check your network.","NoResults_MathEquation":"Detected this equation:","NoResults_MathError":"We can\'t solve that type of equation or it may contain an error","NoResults_NoMath":"Sorry, we don\'t see an equation. Make sure it\'s clear and completely in the frame","MathWeb_ViewSteps":"View solution steps","Quiz_Try_Label":"Try a quiz","MathAnswerView_Concepts":"Related Concepts","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Worksheets from Web Search","MathAnswerView_Worksheets_Short":"Worksheets","MathAnswerView_RelatedPages":"Similar Problems from Web Search","Results_Items":"Items","Generic_Share":"Share","Generic_Copy":"Copy","Share_CopiedToClipboard":"Copied to clipboard","Accessibility_MathAnswerView_PoweredByBing":"Powered by Bing","MathAnswerView_PoweredByBing":"Powered by","MathAnswerView_EquationIsFalse":"False","MathAnswerView_EquationIsTrue":"True","Feedback_Thanks":"Thanks!","Feedback_Title":"Were these results useful?","MathAnswerView_DesktopUpsell_SectionHeader":"Desktop version available","SketchInput_ClearLabel":"Clear sketch","SketchInput_Clear":"CLR","SketchInput_PenLabel":"Use pen","SketchInput_EraserLabel":"Use eraser","SketchInput_UndoLabel":"Undo last stroke","SketchInput_Info":"Draw a problem below","SketchInput_SubmitLabel":"Submit expression","Teams_Solve_Waiting":"Solving this expression...","Teams_RelatedTo":"Related To","MathWeb_PageTopicRootTitle":"Explore Math Topics","MathWeb_PageTopicDescriptionFormat":"Learn about {0} using our free math solver with step-by-step solutions."},"de":{"Generic_Back":"Zurück","MathWeb_GenericDownload":"Herunterladen","MathWeb_PageTopicRootDescription":"Die Microsoft-App zur Lösung von Matheproblemen hilft Ihnen Schritt für Schritt beim Lösen verschiedener Probleme, wie Arithmetik, Algebra, Trigonometrie, Infinitesimalrechnung, Statistik und mehr. Dabei kommt fortschrittliche künstliche Intelligenz zum Einsatz.","MathWeb_Download_MobileHeading":"Schritt-für-Schritt-Lösungen an Den Fingerspitzen","MathWeb_Download_IOS":"Download für iOS","MathWeb_Download_Android":"Download für Android","MathWeb_Download_InstalledMessage":"App bereits installiert","MathWeb_Download_Button":"Desktop-App herunterladen","MathWeb_Download_Unavailable":"Desktop-App nicht verfügbar","MathWeb_Download_MacMessage":"Derzeit ist die Math Solver Desktop-App nur über Chrome auf MacOSX verfügbar. Öffnen Sie diese Seite in Chrome, um die App zu installieren.","MathWeb_Download_UnknownMessage":"Derzeit ist der Math Solver-Desktop nur über Microsoft Edge und Chrome verfügbar. Öffnen Sie diese Seite in einem kompatiblen Browser.","EDU_PROB_CATEGORY_LIN_EQ":"Lineare Gleichung","EDU_PROB_CATEGORY_QUAD_EQ":"Quadratische Gleichung","EDU_PROB_CATEGORY_ARITHMETIC":"Arithmetisch","EDU_PROB_CATEGORY_TRIG":"Trigonometrie","EDU_PROB_CATEGORY_MATRIX":"Matrix","EDU_PROB_CATEGORY_SIM_EQ":"Simultane Gleichung","EDU_PROB_CATEGORY_DIFF":"Differenzierung","EDU_PROB_CATEGORY_INTEGRATION":"Integration","EDU_PROB_CATEGORY_LIMITS":"Grenzwerte","EDU_PROB_CATEGORY_COMPLEX":"Komplexe Zahlen","EDU_PROB_CATEGORY_LIST":"Liste","NotebookTab_Example":"Beispiele","MathWeb_GenericSolve":"Lösen","MathResult_Graph_ReCenter":"Erneut zentrieren","MathWeb_Keyboard_Algebra":"Algebra","MathWeb_Keyboard_Calculus":"Kalkül","MathWeb_Keyboard_List":"Liste","MathWeb_Keyboard_Matrices":"Matrizen","MathWeb_Keyboard_Numbers":"Zahlen","MathWeb_Keyboard_Operators":"Operatoren","MathWeb_Keyboard_Statistics":"Statistiken","MathWeb_Keyboard_Trig":"Trigonometrie","MathWeb_Keyboard_Variables":"Variablen","KeyboardInput_Solve":"Lösen","KeyboardInput_PlaceholderText":"Geben Sie eine Mathematikaufgabe ein","MathWeb_Section_Steps_Title":"Schritt-für-Schritt-Erklärungen","MathWeb_Section_Steps_Subtitle":"Erhalten Sie Anleitungen zur Lösung von Problemen, und visualisieren Sie Ihre Arbeit. Und erhalten Sie Definitionen mathematischer Konzepte.","MathWeb_Section_Graph_Title":"Grafische Darstellung mathematischer Probleme","MathWeb_Section_Graph_Subtitle":"Sie können jede Gleichung unmittelbar visuell darstellen, um die Funktion zu visualisieren und die Beziehung zwischen Variablen aufzuzeigen.","MathWeb_Section_Practice_Title":"Übung, Übung, Übung","MathWeb_Section_Practice_Subtitle":"Suchen Sie nach zusätzlichen Lernmaterialien, wie zugehörige Arbeitsblätter und Videotutorials","MathWeb_Section_Language_Title":"Hilfe zu mathematischen Problemen in Ihrer Sprache","MathWeb_Section_Language_Subtitle":"Funktioniert in Spanisch, Hindi, Deutsch und anderen Sprachen","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Matheproblemlöser testen","MathAnswerView_Videos":"Videos","MathWeb_Section_Video_Subtitle":"Achten Sie auf neue Funktionen, Tipps und mehr!","MathWeb_Title":"Schritt-für-Schritt-Lösungen für Ihre Matheprobleme","Results_Less":"Weniger {0}","Results_More":"Weitere {0}","MathPracticeProblem_SectionHeader":"Übung","MathWeb_PopularProblems":"Beliebte Probleme","MathWeb_SolveProblemTitleFormat":"{0} lösen | Microsoft-Matheproblemlöser","MathWeb_SolveProblemDescription":"Lösen Sie Ihre Matheprobleme mit unserem kostenlosen Matheproblemlöser, der Sie Schritt für Schritt durch die Lösungen führt. Unser Matheproblemlöser unterstützt grundlegende mathematische Funktionen, Algebra-Vorkenntnisse, Algebra, Trigonometrie, Infinitesimalrechnung und mehr.","Generic_About":"Über","MathWeb_Topics":"Themen","Generic_PrivacyPolicy":"Datenschutzrichtlinie","Generic_TermOfUse":"Nutzungsbedingungen","Settings_Language":"Sprache","MathWeb_BackToTop":"Zurück nach oben","MathWeb_SimilarProblems":"Ähnliche Probleme","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Reihenfolge der Operationen","MathWeb_Topic_PrimeFactorization":"Prime Factorization","MathWeb_Topic_Fractions":"Brüche","MathWeb_Topic_LCM":"Least Common Multiple","MathWeb_Topic_GCF":"Größter gemeinsamer Faktor","MathWeb_Topic_Mean":"Bedeuten","MathWeb_Topic_Mode":"Modus","MathWeb_Topic_Exponents":"Exponenten","MathWeb_Topic_Radicals":"Radikale","MathWeb_Topic_MixedFractions":"Gemischte Brüche","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Kombinieren Sie like Terms","MathWeb_Topic_SolveForVariable":"Lösen für eine Variable","MathWeb_Topic_LinearEquations":"Lineare Gleichungen","MathWeb_Topic_QuadraticEquations":"Quadratische Gleichungen","MathWeb_Topic_Matrices":"Matrizen","MathWeb_Topic_Inequalities":"Ungleichheiten","MathWeb_Topic_SystemsOfEquations":"Systeme der Gleichungen","MathWeb_Topic_Factor":"Faktor","MathWeb_Topic_Expand":"Erweitern","MathWeb_Topic_EvaluteFractions":"Auswerten von Brüchen","MathWeb_Topic_Trigonometry":"Trigonometrie","MathWeb_Topic_Simplify":"Vereinfachen","MathWeb_Topic_Evaluate":"Bewerten","MathWeb_Topic_Graphs":"Diagramme","MathWeb_Topic_SolveEquations":"Lösen von Gleichungen","MathWeb_Topic_Calculus":"Kalkül","MathWeb_Topic_Derivatives":"Derivate","MathWeb_Topic_Integrals":"Integrale","MathWeb_Topic_Limits":"Grenzen","MathWeb_CalculatorTitle":"{0} | Microsoft-Matheproblemlöser","MathWeb_AlgebraCalculator":"Algebra-Rechner","MathWeb_TrigCalculator":"Trigonometrie-Rechner","MathWeb_CalculusCalculator":"Infinitesimalrechnung-Rechner","MathWeb_MatrixCalculator":"Matrix-Rechner","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Ein Quiz wird erstellt...","Quiz_Error_Header":"Leider konnten wir kein Quiz auf Basis dieses Problemtyps erstellen. Bitte versuchen Sie es mit einem anderen Problemtyp.","Quiz_Notebook_ProblemCount_Template":"{0} ähnliche Probleme wie:","NoResults_MathSolveError":"Ein Problem ist aufgetreten. Bitte versuchen Sie es erneut.","Quiz_Completion_Date":"Abgeschlossen am {0}","Quiz_Result_Correct":"Richtig","Quiz_Total_Score_Template":"Sie haben {0} von {1} Fragen richtig beantwortet.","Quiz_Complete_Header":"Quiz abgeschlossen","Quiz_End_Finish":"Fertig stellen","KeyboardInput_Undo":"Rückgängig","MathWeb_DeleteAll":"Löschen Sie alle","MathWeb_MyQuizzes":"Meine Quizfragen","MathWeb_QuizNotFound":"Quiz nicht gefunden","Quiz_NextProblem":"Nächstes Problem","Quiz_CheckProblem":"Prüfen","Quiz_Answer_Prompt":"Wählen Sie die Lösung des Problems aus:","Quiz_HintButton":"Bitte helfen","MathWeb_NewQuiz":"Neues Quiz","Quiz_StartScreen_Question_Count_Template":"{0} Multiple-Choice-Fragen","Quiz_StartScreen_Header":"Bereit für ein Quiz?","Quiz_StartScreen_Time_Template":"Lösungsdauer {0} Minuten","Quiz_Start":"Start","Quiz_Result_Incorrect":"Falsch","Quiz_Result_Your_Answer":"Ihre Antwort:","Quiz_Result_See_Solution":"Lösung anzeigen","Quiz_Entity":"Quiz","MathWeb_InProgress":"In Arbeit","MathWeb_ConfirmQuizDelete":"Möchten Sie wirklich alle Quizfragen löschen?","Generic_Edit":"Bearbeiten","Generic_Close":"Schließen","MathResult_GraphHeader":"Diagramm","Teams_ViewInteractiveGraph":"Interaktives Diagramm anzeigen","Network_Offline_Message":"Sie sind offline. Bitte überprüfen Sie Ihr Netzwerk.","NoResults_MathEquation":"Diese Gleichung wurde erkannt:","NoResults_MathError":"Diese Gleichung kann nicht gelöst werden, möglicherweise enthält sie einen Fehler","NoResults_NoMath":"Tut uns leid, wir können keine Gleichung erkennen. Stellen Sie sicher, dass sie deutlich zu sehen ist und sich vollständig innerhalb des Rahmens befindet.","MathWeb_ViewSteps":"Lösungsschritte anzeigen","Quiz_Try_Label":"Quiz absolvieren","MathAnswerView_Concepts":"Verwandte Begriffe","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Übungsfragen aus der Websuche","MathAnswerView_Worksheets_Short":"Übungsfragen","MathAnswerView_RelatedPages":"Ähnliche Aufgaben aus Websuche","Results_Items":"Elemente","Generic_Share":"Teilen","Generic_Copy":"Kopieren","Share_CopiedToClipboard":"In die Zwischenablage kopiert","Accessibility_MathAnswerView_PoweredByBing":"Unterstützt von Bing","MathAnswerView_PoweredByBing":"Unterstützt von","MathAnswerView_EquationIsFalse":"Falsch","MathAnswerView_EquationIsTrue":"Wahr","Feedback_Thanks":"Danke!","Feedback_Title":"Waren diese Ergebnisse nützlich?","MathAnswerView_DesktopUpsell_SectionHeader":"Desktop-Version verfügbar","SketchInput_ClearLabel":"Skizze löschen","SketchInput_Clear":"ENTF","SketchInput_PenLabel":"Stift verwenden","SketchInput_EraserLabel":"Radierer verwenden","SketchInput_UndoLabel":"Letzten Strich rückgängig machen","SketchInput_Info":"Zeichnen Sie unten ein Problem","SketchInput_SubmitLabel":"Ausdruck absenden","Teams_Solve_Waiting":"Diesen Ausdruck werden gelöst...","Teams_RelatedTo":"Verwandt mit","MathWeb_PageTopicRootTitle":"Mathethemen erkunden","MathWeb_PageTopicDescriptionFormat":"Erfahren Sie mehr über {0} mit unserem kostenlosen Matheproblemlöser, der Schritt-für-Schritt-Lösungen liefert."},"es":{"Generic_Back":"Atrás","MathWeb_GenericDownload":"Descargar","MathWeb_PageTopicRootDescription":"La aplicación Microsoft Math Solver te proporciona ayuda paso a paso con una variedad de problemas, como aritmética, álgebra, trigonometría, cálculo, estadística y otros temas, mediante un avanzado solucionador matemático de inteligencia artificial.","MathWeb_Download_MobileHeading":"Soluciones paso a paso en las puntas de los dedos","MathWeb_Download_IOS":"Descargar para iOS","MathWeb_Download_Android":"Descargar para Android","MathWeb_Download_InstalledMessage":"Aplicación ya instalada","MathWeb_Download_Button":"Descargar aplicación de escritorio","MathWeb_Download_Unavailable":"Aplicación de escritorio no disponible","MathWeb_Download_MacMessage":"Actualmente, la aplicación de escritorio Math Solver solo está disponible a través de Chrome en MacOSX. Abre esta página en Chrome para instalar la aplicación.","MathWeb_Download_UnknownMessage":"Actualmente, el escritorio de Math Solver solo está disponible a través de Microsoft Edge y Chrome. Abra esta página en un navegador compatible.","EDU_PROB_CATEGORY_LIN_EQ":"Ecuación lineal","EDU_PROB_CATEGORY_QUAD_EQ":"Ecuación cuadrática","EDU_PROB_CATEGORY_ARITHMETIC":"Aritmética","EDU_PROB_CATEGORY_TRIG":"Trigonometría","EDU_PROB_CATEGORY_MATRIX":"Matriz","EDU_PROB_CATEGORY_SIM_EQ":"Ecuación simultánea","EDU_PROB_CATEGORY_DIFF":"Diferenciación","EDU_PROB_CATEGORY_INTEGRATION":"Integración","EDU_PROB_CATEGORY_LIMITS":"Límites","EDU_PROB_CATEGORY_COMPLEX":"Números complejos","EDU_PROB_CATEGORY_LIST":"Lista","NotebookTab_Example":"Ejemplos","MathWeb_GenericSolve":"Resolver","MathResult_Graph_ReCenter":"Volver a centrar","MathWeb_Keyboard_Algebra":"Álgebra","MathWeb_Keyboard_Calculus":"Cálculo","MathWeb_Keyboard_List":"Lista","MathWeb_Keyboard_Matrices":"matrices","MathWeb_Keyboard_Numbers":"Números","MathWeb_Keyboard_Operators":"Operadores","MathWeb_Keyboard_Statistics":"Estadísticas","MathWeb_Keyboard_Trig":"Trigonometría","MathWeb_Keyboard_Variables":"Variables","KeyboardInput_Solve":"Resolver","KeyboardInput_PlaceholderText":"Escribe un problema matemático","MathWeb_Section_Steps_Title":"Obtén explicaciones paso a paso","MathWeb_Section_Steps_Subtitle":"Mira cómo resolver los problemas y mostrar tu trabajo, y obtén definiciones de los conceptos matemáticos","MathWeb_Section_Graph_Title":"Mostrar problemas matemáticos en gráficos","MathWeb_Section_Graph_Subtitle":"Crea un gráfico al instante de cualquier ecuación para visualizar su función y comprender la relación entre las variables","MathWeb_Section_Practice_Title":"Practica, practica, practica","MathWeb_Section_Practice_Subtitle":"Buscar materiales de aprendizaje adicionales, como hojas de cálculo y tutoriales en vídeo","MathWeb_Section_Language_Title":"Obtén ayuda con las matemáticas en tu idioma","MathWeb_Section_Language_Subtitle":"Funciona en español, hindi, alemán y muchos más","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Probar Math Solver","MathAnswerView_Videos":"Vídeos","MathWeb_Section_Video_Subtitle":"¡Cuidado con las nuevas características, consejos y mucho más!","MathWeb_Title":"Obtén soluciones paso a paso a tus problemas matemáticos","Results_Less":"Menos {0}","Results_More":"Más {0}","MathPracticeProblem_SectionHeader":"Práctica","MathWeb_PopularProblems":"Problemas populares","MathWeb_SolveProblemTitleFormat":"Solucionar {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Soluciona tus problemas matemáticos con nuestro solucionador matemático gratuito, que incluye soluciones paso a paso. Nuestro solucionador matemático admite matemáticas básicas, pre-álgebra, álgebra, trigonometría, cálculo y mucho más.","Generic_About":"acerca de","MathWeb_Topics":"Temas","Generic_PrivacyPolicy":"Directiva de privacidad","Generic_TermOfUse":"Condiciones de servicio","Settings_Language":"Idioma","MathWeb_BackToTop":"Volver a la cima","MathWeb_SimilarProblems":"Problemas similares","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Orden de Operaciones","MathWeb_Topic_PrimeFactorization":"Factorización prima","MathWeb_Topic_Fractions":"Fracciones","MathWeb_Topic_LCM":"Múltiples menos comunes","MathWeb_Topic_GCF":"Mayor factor común","MathWeb_Topic_Mean":"Decir","MathWeb_Topic_Mode":"Modo","MathWeb_Topic_Exponents":"Exponentes","MathWeb_Topic_Radicals":"Radicales","MathWeb_Topic_MixedFractions":"Fracciones mixtas","MathWeb_Topic_Algebra":"Álgebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Combinar términos similares","MathWeb_Topic_SolveForVariable":"Resolver para una variable","MathWeb_Topic_LinearEquations":"Ecuaciones lineales","MathWeb_Topic_QuadraticEquations":"Ecuaciones cuadráticas","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Desigualdades","MathWeb_Topic_SystemsOfEquations":"Sistemas de ecuaciones","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Ampliar","MathWeb_Topic_EvaluteFractions":"Evaluar fracciones","MathWeb_Topic_Trigonometry":"Trigonometría","MathWeb_Topic_Simplify":"Simplificar","MathWeb_Topic_Evaluate":"Evaluar","MathWeb_Topic_Graphs":"Gráficos","MathWeb_Topic_SolveEquations":"Resolver ecuaciones","MathWeb_Topic_Calculus":"Cálculo","MathWeb_Topic_Derivatives":"Derivados","MathWeb_Topic_Integrals":"Integrales","MathWeb_Topic_Limits":"Límites","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Calculadora de álgebra","MathWeb_TrigCalculator":"Calculadora de trigonometría","MathWeb_CalculusCalculator":"Calculadora de cálculo","MathWeb_MatrixCalculator":"Calculadora de matriz","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Generando cuestionario...","Quiz_Error_Header":"Lo sentimos, no hemos podido generar un cuestionario basado en ese tipo de problema. Prueba con otro tipo de problema.","Quiz_Notebook_ProblemCount_Template":"{0} problemas similares a:","NoResults_MathSolveError":"Se ha producido un problema. Vuelve a intentarlo.","Quiz_Completion_Date":"Completado el {0}","Quiz_Result_Correct":"Correcto","Quiz_Total_Score_Template":"Has respondido {0} de {1} preguntas correctamente.","Quiz_Complete_Header":"Cuestionario completado","Quiz_End_Finish":"Finalizar","KeyboardInput_Undo":"Deshacer","MathWeb_DeleteAll":"Eliminar todo","MathWeb_MyQuizzes":"Mis cuestionarios","MathWeb_QuizNotFound":"Quiz no encontrado","Quiz_NextProblem":"Siguiente problema","Quiz_CheckProblem":"Comprobar","Quiz_Answer_Prompt":"Selecciona la respuesta del problema:","Quiz_HintButton":"Ayúdame","MathWeb_NewQuiz":"Nuevo cuestionario","Quiz_StartScreen_Question_Count_Template":"{0} preguntas tipo test","Quiz_StartScreen_Header":"¿Listo para el cuestionario?","Quiz_StartScreen_Time_Template":"{0} minutos para completarse","Quiz_Start":"Iniciar","Quiz_Result_Incorrect":"Incorrecto","Quiz_Result_Your_Answer":"Tu respuesta:","Quiz_Result_See_Solution":"Ver solución","Quiz_Entity":"Cuestionario","MathWeb_InProgress":"En curso","MathWeb_ConfirmQuizDelete":"¿Está seguro de que desea eliminar todos los cuestionarios?","Generic_Edit":"Editar","Generic_Close":"Cerrar","MathResult_GraphHeader":"Gráfico","Teams_ViewInteractiveGraph":"Ver gráfico interactivo","Network_Offline_Message":"Estás sin conexión. Comprueba tu red.","NoResults_MathEquation":"Se ha detectado esta ecuación:","NoResults_MathError":"No podemos resolver este tipo de ecuación; es posible que tenga un error","NoResults_NoMath":"Lo sentimos, pero no vemos una ecuación. Asegúrate de que sea clara y esté bien encuadrada.","MathWeb_ViewSteps":"Ver los pasos de la solución","Quiz_Try_Label":"Probar un cuestionario","MathAnswerView_Concepts":"Conceptos relacionados","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Hojas de trabajo de la búsqueda web","MathAnswerView_Worksheets_Short":"Preguntas de práctica","MathAnswerView_RelatedPages":"Problemas similares de búsqueda web","Results_Items":"Elementos","Generic_Share":"Compartir","Generic_Copy":"Copiar","Share_CopiedToClipboard":"Copiado en el Portapapeles","Accessibility_MathAnswerView_PoweredByBing":"Con tecnología de bing","MathAnswerView_PoweredByBing":"Con tecnología de","MathAnswerView_EquationIsFalse":"Falso","MathAnswerView_EquationIsTrue":"Verdadero","Feedback_Thanks":"¡Gracias!","Feedback_Title":"¿Estos resultados han sido útiles?","MathAnswerView_DesktopUpsell_SectionHeader":"Versión de escritorio disponible","SketchInput_ClearLabel":"Borrar boceto","SketchInput_Clear":"BORRAR","SketchInput_PenLabel":"Usar lápiz","SketchInput_EraserLabel":"Usar goma de borrar","SketchInput_UndoLabel":"Deshacer último trazo","SketchInput_Info":"Dibuja un problema debajo","SketchInput_SubmitLabel":"Enviar expresión","Teams_Solve_Waiting":"Resolviendo esta expresión...","Teams_RelatedTo":"Relacionado con","MathWeb_PageTopicRootTitle":"Explorar temas matemáticos","MathWeb_PageTopicDescriptionFormat":"Obtén más información sobre {0} con nuestro solucionador matemático gratuito, que incluye soluciones paso a paso."},"fr":{"Generic_Back":"Retour","MathWeb_GenericDownload":"Télécharger","MathWeb_PageTopicRootDescription":"L’application Microsoft Math Solver fournit une aide détaillée pour divers problèmes, notamment en arithmétique, algèbre, trigonométrie, calcul, statistiques et autres sujets grâce à un outil de résolution de problèmes mathématiques avancé reposant sur l’intelligence artificielle.","MathWeb_Download_MobileHeading":"Des solutions étape par étape à vos bouts de doigts","MathWeb_Download_IOS":"Télécharger pour iOS","MathWeb_Download_Android":"Télécharger pour Android","MathWeb_Download_InstalledMessage":"Application déjà installée","MathWeb_Download_Button":"Télécharger l’application de bureau","MathWeb_Download_Unavailable":"Application de bureau indisponible","MathWeb_Download_MacMessage":"Actuellement, l’application de bureau Math Solver n’est disponible que via Chrome sur MacOSX. S’il vous plaît ouvrir cette page dans Chrome pour installer l’application.","MathWeb_Download_UnknownMessage":"Actuellement, le bureau Math Solver n’est disponible que via Microsoft Edge et Chrome. S’il vous plaît ouvrir cette page dans un navigateur compatible.","EDU_PROB_CATEGORY_LIN_EQ":"Équation linéaire","EDU_PROB_CATEGORY_QUAD_EQ":"Équation du second degré","EDU_PROB_CATEGORY_ARITHMETIC":"Arithmétique","EDU_PROB_CATEGORY_TRIG":"Trigonométrie","EDU_PROB_CATEGORY_MATRIX":"Matrice","EDU_PROB_CATEGORY_SIM_EQ":"Équation simultanée","EDU_PROB_CATEGORY_DIFF":"Différenciation","EDU_PROB_CATEGORY_INTEGRATION":"Intégration","EDU_PROB_CATEGORY_LIMITS":"Limites","EDU_PROB_CATEGORY_COMPLEX":"Nombres complexes","EDU_PROB_CATEGORY_LIST":"Liste","NotebookTab_Example":"Exemples","MathWeb_GenericSolve":"Résoudre","MathResult_Graph_ReCenter":"Re-centrer","MathWeb_Keyboard_Algebra":"Algèbre","MathWeb_Keyboard_Calculus":"Calcul","MathWeb_Keyboard_List":"Liste","MathWeb_Keyboard_Matrices":"Matrices","MathWeb_Keyboard_Numbers":"Numéros","MathWeb_Keyboard_Operators":"Opérateurs","MathWeb_Keyboard_Statistics":"Statistiques","MathWeb_Keyboard_Trig":"Trigonométrie","MathWeb_Keyboard_Variables":"Variables","KeyboardInput_Solve":"Résoudre","KeyboardInput_PlaceholderText":"Taper un problème mathématique","MathWeb_Section_Steps_Title":"Obtenez des explications détaillées","MathWeb_Section_Steps_Subtitle":"Découvrez comment résoudre des problèmes et afficher votre travail. Obtenez des définitions de concepts mathématiques","MathWeb_Section_Graph_Title":"Créez un graphique de vos problèmes mathématiques","MathWeb_Section_Graph_Subtitle":"Créez instantanément un graphique d’une équation pour visualiser votre fonction et comprendre la relation entre les variables","MathWeb_Section_Practice_Title":"Tout est une question de pratique","MathWeb_Section_Practice_Subtitle":"Recherchez des ressources pédagogiques, telles que des fiches de travail et des didacticiels vidéo","MathWeb_Section_Language_Title":"Obtenez de l’aide en maths dans votre langue","MathWeb_Section_Language_Subtitle":"Disponible en espagnol, hindi, allemand et plus encore","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Essayer Math Solver","MathAnswerView_Videos":"Vidéos","MathWeb_Section_Video_Subtitle":"Surveillez les nouvelles fonctionnalités, conseils et plus encore!","MathWeb_Title":"Obtenez des solutions détaillées à vos problèmes mathématiques","Results_Less":"Moins de {0}","Results_More":"Autres {0}","MathPracticeProblem_SectionHeader":"Entraînement","MathWeb_PopularProblems":"Problèmes populaires","MathWeb_SolveProblemTitleFormat":"Résoudre {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Résolvez vos problèmes mathématiques avec notre outil de résolution de problèmes mathématiques gratuit qui fournit des solutions détaillées. Notre outil prend en charge les mathématiques de base, la pré-algèbre, l’algèbre, la trigonométrie, le calcul et plus encore.","Generic_About":"Sur","MathWeb_Topics":"Sujets","Generic_PrivacyPolicy":"Politique de confidentialité","Generic_TermOfUse":"Conditions d’utilisation","Settings_Language":"Langue","MathWeb_BackToTop":"Retour au sommet","MathWeb_SimilarProblems":"Problèmes similaires","MathWeb_Topic_PreAlgebra":"Pré-algèbre","MathWeb_Topic_PreAlgebra2":"Pré-algèbre 2","MathWeb_Topic_OrderOfOperations":"Ordre des opérations","MathWeb_Topic_PrimeFactorization":"Facteur principal","MathWeb_Topic_Fractions":"Fractions","MathWeb_Topic_LCM":"Multiple le moins commun","MathWeb_Topic_GCF":"Le plus grand facteur commun","MathWeb_Topic_Mean":"Moyenne","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Exposants","MathWeb_Topic_Radicals":"Radicaux libres","MathWeb_Topic_MixedFractions":"Fractions mixtes","MathWeb_Topic_Algebra":"Algèbre","MathWeb_Topic_Algebra2":"Algèbre 2","MathWeb_Topic_CombineLikeTerms":"Combiner les termes","MathWeb_Topic_SolveForVariable":"Résoudre pour une variable","MathWeb_Topic_LinearEquations":"Équations linéaires","MathWeb_Topic_QuadraticEquations":"Équations quadratiques","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Inégalités","MathWeb_Topic_SystemsOfEquations":"Systèmes d’équations","MathWeb_Topic_Factor":"Facteur","MathWeb_Topic_Expand":"Développer","MathWeb_Topic_EvaluteFractions":"Évaluer les fractions","MathWeb_Topic_Trigonometry":"Trigonométrie","MathWeb_Topic_Simplify":"Simplifier","MathWeb_Topic_Evaluate":"Évaluer","MathWeb_Topic_Graphs":"Graphiques","MathWeb_Topic_SolveEquations":"Résoudre les équations","MathWeb_Topic_Calculus":"Calcul","MathWeb_Topic_Derivatives":"Dérivés","MathWeb_Topic_Integrals":"Intégrales","MathWeb_Topic_Limits":"Limites","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Calculatrice algébrique","MathWeb_TrigCalculator":"Calculatrice pour la trigonométrie","MathWeb_CalculusCalculator":"Calculatrice pour le calcul","MathWeb_MatrixCalculator":"Calculatrice de matrice","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Génération d’un quiz en cours...","Quiz_Error_Header":"Désolé, nous n’avons pas pu générer un quiz reposant sur ce type de problème. Choisissez un autre type de problème.","Quiz_Notebook_ProblemCount_Template":"{0} problèmes semblables à :","NoResults_MathSolveError":"Un problème est survenu, réessayez","Quiz_Completion_Date":"Terminé le {0}","Quiz_Result_Correct":"Correct(s)","Quiz_Total_Score_Template":"Vous avez correctement répondu à {0} questions sur {1}.","Quiz_Complete_Header":"Quiz terminé","Quiz_End_Finish":"Terminer","KeyboardInput_Undo":"Annuler","MathWeb_DeleteAll":"Supprimer tous les","MathWeb_MyQuizzes":"Mes quiz","MathWeb_QuizNotFound":"Quiz non trouvé","Quiz_NextProblem":"Problème suivant","Quiz_CheckProblem":"Vérifier","Quiz_Answer_Prompt":"Sélectionnez la réponse au problème :","Quiz_HintButton":"Aide","MathWeb_NewQuiz":"Nouveau quiz","Quiz_StartScreen_Question_Count_Template":"{0} questions à choix multiple","Quiz_StartScreen_Header":"Prêt pour un quiz ?","Quiz_StartScreen_Time_Template":"Réalisation en {0} minutes","Quiz_Start":"Commencer","Quiz_Result_Incorrect":"Incorrecte","Quiz_Result_Your_Answer":"Votre réponse :","Quiz_Result_See_Solution":"Voir la solution","Quiz_Entity":"Quiz","MathWeb_InProgress":"En cours","MathWeb_ConfirmQuizDelete":"Etes-vous sûr de vouloir supprimer tous les quiz?","Generic_Edit":"Modifier","Generic_Close":"Fermer","MathResult_GraphHeader":"Graphique","Teams_ViewInteractiveGraph":"Afficher le graphique interactif","Network_Offline_Message":"Vous êtes hors ligne. Vérifiez votre réseau.","NoResults_MathEquation":"Cette équation a été détectée :","NoResults_MathError":"Nous ne pouvons pas résoudre ce type d’équation, ou elle contient peut-être une erreur","NoResults_NoMath":"Désolés, nous ne voyons aucune équation. Assurez-vous qu’elle est nette et entièrement dans le cadre","MathWeb_ViewSteps":"Afficher les étapes de la solution","Quiz_Try_Label":"Tenter de répondre à un quiz","MathAnswerView_Concepts":"Concepts associés","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Feuilles de travail de la recherche Web","MathAnswerView_Worksheets_Short":"Questions pratiques","MathAnswerView_RelatedPages":"Problèmes similaires dans la recherche Web","Results_Items":"éléments","Generic_Share":"Partager","Generic_Copy":"Copier","Share_CopiedToClipboard":"Copié dans le Presse-papiers","Accessibility_MathAnswerView_PoweredByBing":"Avec Bing","MathAnswerView_PoweredByBing":"Avec","MathAnswerView_EquationIsFalse":"Faux","MathAnswerView_EquationIsTrue":"Vrai","Feedback_Thanks":"Merci !","Feedback_Title":"Ces résultats ont-ils été utiles ?","MathAnswerView_DesktopUpsell_SectionHeader":"Version de bureau disponible","SketchInput_ClearLabel":"Effacer le dessin","SketchInput_Clear":"EFF","SketchInput_PenLabel":"Utiliser le crayon","SketchInput_EraserLabel":"Utiliser la gomme","SketchInput_UndoLabel":"Annuler le dernier trait","SketchInput_Info":"Dessiner un problème ci-dessous","SketchInput_SubmitLabel":"Envoyer l’expression","Teams_Solve_Waiting":"Résoudre cette expression...","Teams_RelatedTo":"Relatif à","MathWeb_PageTopicRootTitle":"Explorer des sujets mathématiques","MathWeb_PageTopicDescriptionFormat":"Découvrez-en plus sur l’{0} grâce à notre outil de résolution de problèmes mathématiques qui fournit des solutions détaillées."},"hi":{"Generic_Back":"वापस","MathWeb_GenericDownload":"डाउनलोड","MathWeb_PageTopicRootDescription":"उन्नत AI संचालित गणित सोल्वर का उपयोग करके Microsoft गणित सोल्वर एप्लिकेशन अंकगणित, बीजगणित, त्रिकोणमिति, कैलक्युलस, सांख्यिकी और अन्य विषयों के विभिन्न सवालों में चरण-दर-चरण मदद प्रदान करता है.","MathWeb_Download_MobileHeading":"अपनी उंगलियों पर कदम से कदम समाधान","MathWeb_Download_IOS":"आईओएस के लिए डाउनलोड करें","MathWeb_Download_Android":"एंड्रॉयड के लिए डाउनलोड करें","MathWeb_Download_InstalledMessage":"ऐप पहले से इंस्टॉल","MathWeb_Download_Button":"डेस्कटॉप ऐप डाउनलोड करें","MathWeb_Download_Unavailable":"डेस्कटॉप ऐप अनुपलब्ध","MathWeb_Download_MacMessage":"वर्तमान में, मैथ सॉल्वर डेस्कटॉप ऐप केवल मैकओएसएक्स पर क्रोम के माध्यम से उपलब्ध है। ऐप इंस्टॉल करने के लिए क्रोम में इस पेज को खोल दें।","MathWeb_Download_UnknownMessage":"वर्तमान में, गणित सॉल्वर डेस्कटॉप केवल माइक्रोसॉफ्ट एज और क्रोम के माध्यम से उपलब्ध है। कृपया इस पृष्ठ को एक संगत ब्राउज़र में खोलें।","EDU_PROB_CATEGORY_LIN_EQ":"रैखिक समीकरण","EDU_PROB_CATEGORY_QUAD_EQ":"द्विघात समीकरण","EDU_PROB_CATEGORY_ARITHMETIC":"अंकगणित","EDU_PROB_CATEGORY_TRIG":"त्रिकोणमिति","EDU_PROB_CATEGORY_MATRIX":"मैट्रिक्स","EDU_PROB_CATEGORY_SIM_EQ":"समकालिक समीकरण","EDU_PROB_CATEGORY_DIFF":"अवकलन","EDU_PROB_CATEGORY_INTEGRATION":"समाकलन","EDU_PROB_CATEGORY_LIMITS":"सीमाएँ","EDU_PROB_CATEGORY_COMPLEX":"जटिल संख्याएँ","EDU_PROB_CATEGORY_LIST":"सूची","NotebookTab_Example":"उदाहरण","MathWeb_GenericSolve":"समाधान करें","MathResult_Graph_ReCenter":"फिर से मध्य में करें","MathWeb_Keyboard_Algebra":"बीजगणित","MathWeb_Keyboard_Calculus":"कैलकुलस","MathWeb_Keyboard_List":"सूची","MathWeb_Keyboard_Matrices":"Matrices","MathWeb_Keyboard_Numbers":"संख्या","MathWeb_Keyboard_Operators":"ऑपरेटरों","MathWeb_Keyboard_Statistics":"आँकड़े","MathWeb_Keyboard_Trig":"त्रिकोणमिति","MathWeb_Keyboard_Variables":"चर","KeyboardInput_Solve":"समाधान करें","KeyboardInput_PlaceholderText":"कोई गणित सवाल टाइप करें","MathWeb_Section_Steps_Title":"चरण-दर-चरण स्पष्टीकरण प्राप्त करें","MathWeb_Section_Steps_Subtitle":"सवालों को कैसे हल करें यह देखें और अपना कार्य दिखाएँ—साथ ही गणितीय अवधारणाओं की परिभाषाएँ प्राप्त करें","MathWeb_Section_Graph_Title":"अपनी गणितीय सवालों का ग्राफ़ बनाएँ","MathWeb_Section_Graph_Subtitle":"अपने फ़ंक्शन को विज़ुअलाइज़ करने के लिए और चरों के बीच संबंध को समझने के लिए किसी भी समीकरण का तुरंत ग्राफ़ बनाएँ","MathWeb_Section_Practice_Title":"अभ्यास, अभ्यास, अभ्यास","MathWeb_Section_Practice_Subtitle":"शिक्षा संबंधित अतिरिक्त सामग्री की खोज करें जैसे संबंधित कार्यपत्रक और वीडियो ट्यूटोरियल्स","MathWeb_Section_Language_Title":"अपनी भाषा में गणित से संबंधित मदद प्राप्त करें","MathWeb_Section_Language_Subtitle":"स्पेनी, हिन्दी, जर्मन और बहुत सी भाषाओं में कार्य करता है","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"गणित सोल्वर आज़माएं","MathAnswerView_Videos":"वीडियो","MathWeb_Section_Video_Subtitle":"नई सुविधाओं, सुझावों और अधिक के लिए देखो!","MathWeb_Title":"अपने गणित के सवालों के चरण-दर-चरण समाधान पाएँ","Results_Less":"कम {0}","Results_More":"अधिक {0}","MathPracticeProblem_SectionHeader":"अभ्यास","MathWeb_PopularProblems":"लोकप्रिय समस्याएं","MathWeb_SolveProblemTitleFormat":"{0} का समाधान करें | Microsoft गणित सोल्वर","MathWeb_SolveProblemDescription":"हमारे मुफ्त गणित सोल्वर का उपयोग करके चरण-दर-चरण समाधानों के ज़रिए अपने गणित के सवालों का समाधान करें. हमारा गणित सोल्वर, प्राथमिक गणित, प्रारंभिक-बीजगणित, बीजगणित, त्रिकोणमिति, कैलक्युलस आदि विषयों में कार्य करता है.","Generic_About":"करीबन","MathWeb_Topics":"विषय","Generic_PrivacyPolicy":"गोपनीयता नीति","Generic_TermOfUse":"सेवा की शर्तें","Settings_Language":"भाषा","MathWeb_BackToTop":"शीर्ष पर वापस","MathWeb_SimilarProblems":"इसी तरह की समस्याएं","MathWeb_Topic_PreAlgebra":"प्री-बीजगणित","MathWeb_Topic_PreAlgebra2":"प्री-बीजगणित 2","MathWeb_Topic_OrderOfOperations":"संचालन का आदेश","MathWeb_Topic_PrimeFactorization":"प्राइम फैक्टराइजेशन","MathWeb_Topic_Fractions":"अंश","MathWeb_Topic_LCM":"सबसे कम आम मल्टीपल","MathWeb_Topic_GCF":"सबसे बड़ा आम कारक","MathWeb_Topic_Mean":"मतलब","MathWeb_Topic_Mode":"मोड","MathWeb_Topic_Exponents":"Exponents","MathWeb_Topic_Radicals":"कण","MathWeb_Topic_MixedFractions":"मिश्रित अंश","MathWeb_Topic_Algebra":"बीजगणित","MathWeb_Topic_Algebra2":"बीजगणित 2","MathWeb_Topic_CombineLikeTerms":"शर्तों की तरह गठबंधन","MathWeb_Topic_SolveForVariable":"वेरिएबल के लिए सॉल्व करें","MathWeb_Topic_LinearEquations":"रेखीय समीकरण","MathWeb_Topic_QuadraticEquations":"चतुर्दक समीकरण","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"असमानता","MathWeb_Topic_SystemsOfEquations":"समीकरणों की प्रणाली","MathWeb_Topic_Factor":"कारक","MathWeb_Topic_Expand":"विस्तृत","MathWeb_Topic_EvaluteFractions":"अंशों का मूल्यांकन करें","MathWeb_Topic_Trigonometry":"त्रिकोणमिति","MathWeb_Topic_Simplify":"सरल","MathWeb_Topic_Evaluate":"मूल्यांकन","MathWeb_Topic_Graphs":"रेखांकन","MathWeb_Topic_SolveEquations":"समीकरणों को हल करें","MathWeb_Topic_Calculus":"कैलकुलस","MathWeb_Topic_Derivatives":"डेरिवेटिव","MathWeb_Topic_Integrals":"Integrals","MathWeb_Topic_Limits":"सीमा","MathWeb_CalculatorTitle":"{0} | Microsoft गणित सोल्वर","MathWeb_AlgebraCalculator":"बीजगणित कैलक्यूलेटर","MathWeb_TrigCalculator":"त्रिकोणमिति कैलक्यूलेटर","MathWeb_CalculusCalculator":"कैलकुलस कैलक्यूलेटर","MathWeb_MatrixCalculator":"मैट्रिक्स कैलकुलेटर","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"क्विज़ जनरेट किया जा रहा है...","Quiz_Error_Header":"क्षमा करें, हम उस प्रकार के सवाल के आधार पर कोई क्विज़ बना नहीं पाएँ. कृपया किसी अन्य प्रकार के सवाल का उपयोग करके देखें.","Quiz_Notebook_ProblemCount_Template":"इसके समान {0} सवाल:","NoResults_MathSolveError":"कुछ गलत हुआ, कृपया फिर से प्रयास करें","Quiz_Completion_Date":"{0} को पूरा किया गया","Quiz_Result_Correct":"सही","Quiz_Total_Score_Template":"आपने {1} में से {0} प्रश्नों का सही उत्तर दिया है.","Quiz_Complete_Header":"क्विज़ पूरा हो गया","Quiz_End_Finish":"समाप्त","KeyboardInput_Undo":"पूर्ववत करें","MathWeb_DeleteAll":"सभी को हटादें","MathWeb_MyQuizzes":"मेरी क्विज़","MathWeb_QuizNotFound":"प्रश्नोत्तरी नहीं मिली","Quiz_NextProblem":"अगला सवाल","Quiz_CheckProblem":"जाँचें","Quiz_Answer_Prompt":"इस सवाल के उत्तर का चयन करें:","Quiz_HintButton":"मेरी मदद करें","MathWeb_NewQuiz":"नई प्रश्नोत्तरी","Quiz_StartScreen_Question_Count_Template":"एकाधिक-विकल्प वाले {0} प्रश्न","Quiz_StartScreen_Header":"क्विज़ के लिए तैयार हैं?","Quiz_StartScreen_Time_Template":"पूरा करने के लिए {0} मिनट चाहिए","Quiz_Start":"प्रारंभ","Quiz_Result_Incorrect":"गलत","Quiz_Result_Your_Answer":"आपका उत्तर:","Quiz_Result_See_Solution":"समाधान देखें","Quiz_Entity":"क्विज़","MathWeb_InProgress":"प्रगति पर","MathWeb_ConfirmQuizDelete":"क्या आपसुनिश्चित हैं कि आप सभी क्विज़ हटाना चाहते हैं?","Generic_Edit":"संपादित करें","Generic_Close":"बंद करें","MathResult_GraphHeader":"ग्राफ़","Teams_ViewInteractiveGraph":"इंटरएक्टिव ग्राफ देखें","Network_Offline_Message":"आप ऑफ़लाइन हैं. कृपया अपना नेटवर्क जाँचें.","NoResults_MathEquation":"इस समीकरण का पता चला:","NoResults_MathError":"हम इस प्रकार के समीकरणों को हल नहीं कर सकते या इसमें कोई त्रुटि शामिल हो सकती है","NoResults_NoMath":"हमें खेद है, हमें कोई समीकरण दिखाई नहीं दे रहा है. सुनिश्चित करें कि यह साफ़ है और पूरी तरह से फ़्रेम में है","MathWeb_ViewSteps":"समाधान कदम देखें","Quiz_Try_Label":"किसी क्विज़ में भाग लें","MathAnswerView_Concepts":"संबंधित अवधारणाएँ","Generic_PDF":"PDF","MathAnswerView_Worksheets":"वेब खोज से कार्यपत्रक","MathAnswerView_Worksheets_Short":"प्रश्नों का अभ्यास करें","MathAnswerView_RelatedPages":"वेब खोज से समान सवाल","Results_Items":"आइटम","Generic_Share":"साझा करें","Generic_Copy":"प्रतिलिपि बनाएँ","Share_CopiedToClipboard":"क्लिपबोर्ड में प्रतिलिपि बनाई गई","Accessibility_MathAnswerView_PoweredByBing":"Bing द्वारा चालित","MathAnswerView_PoweredByBing":"द्वारा चालित","MathAnswerView_EquationIsFalse":"गलत","MathAnswerView_EquationIsTrue":"सही","Feedback_Thanks":"धन्यवाद!","Feedback_Title":"क्या इन परिणामों से आपको मदद मिली?","MathAnswerView_DesktopUpsell_SectionHeader":"डेस्कटॉप संस्करण उपलब्ध है","SketchInput_ClearLabel":"स्कैच साफ़ करें","SketchInput_Clear":"CLR","SketchInput_PenLabel":"पेन का उपयोग करें","SketchInput_EraserLabel":"इरेज़र का उपयोग करें","SketchInput_UndoLabel":"पिछला स्ट्रोक पूर्ववत करें","SketchInput_Info":"नीचे दिया गया सवाल आरेखित करें","SketchInput_SubmitLabel":"व्यंजक सबमिट करें","Teams_Solve_Waiting":"इस अभिव्यक्ति को सुलझाने...","Teams_RelatedTo":"से संबंधित","MathWeb_PageTopicRootTitle":"गणित से जुड़े विषयों का अन्वेषण करें","MathWeb_PageTopicDescriptionFormat":"हमारे मुफ्त गणित सोल्वर का उपयोग करके चरण-दर-चरण समाधानों के ज़रिए {0} सीखें."},"it":{"Generic_Back":"Indietro","MathWeb_GenericDownload":"Scaricare","MathWeb_PageTopicRootDescription":"L\'app Microsoft Math Solver offre soluzioni passo passo per vari problemi aritmetici, algebrici, trigonometrici, differenziali, statistici e relativi ad altri argomenti, utilizzando un risolutore matematico basato sull\'intelligenza artificiale avanzata.","MathWeb_Download_MobileHeading":"Soluzioni passo-passo a portata di mano","MathWeb_Download_IOS":"Scarica per iOS","MathWeb_Download_Android":"Scarica per Android","MathWeb_Download_InstalledMessage":"App già installata","MathWeb_Download_Button":"Scarica l\'app desktop","MathWeb_Download_Unavailable":"App desktop non disponibile","MathWeb_Download_MacMessage":"Attualmente, l\'app desktop Math Solver è disponibile solo tramite Chrome su MacOSX. Si prega di aprire questa pagina in Chrome per installare l\'applicazione.","MathWeb_Download_UnknownMessage":"Attualmente, il desktop Math Solver è disponibile solo tramite Microsoft Edge e Chrome. Si prega di aprire questa pagina in un browser compatibile.","EDU_PROB_CATEGORY_LIN_EQ":"Equazione lineare","EDU_PROB_CATEGORY_QUAD_EQ":"Equazione quadratica","EDU_PROB_CATEGORY_ARITHMETIC":"Aritmetica","EDU_PROB_CATEGORY_TRIG":"Trigonometria","EDU_PROB_CATEGORY_MATRIX":"Matrice","EDU_PROB_CATEGORY_SIM_EQ":"Equazione simultanea","EDU_PROB_CATEGORY_DIFF":"Differenziazione","EDU_PROB_CATEGORY_INTEGRATION":"Integrazione","EDU_PROB_CATEGORY_LIMITS":"Limiti","EDU_PROB_CATEGORY_COMPLEX":"Numeri complessi","EDU_PROB_CATEGORY_LIST":"Elenco","NotebookTab_Example":"Esempi","MathWeb_GenericSolve":"Risolvi","MathResult_Graph_ReCenter":"Centra di nuovo","MathWeb_Keyboard_Algebra":"Algebra","MathWeb_Keyboard_Calculus":"Calcolo","MathWeb_Keyboard_List":"Elenco","MathWeb_Keyboard_Matrices":"Matrici","MathWeb_Keyboard_Numbers":"Numeri","MathWeb_Keyboard_Operators":"Operatori","MathWeb_Keyboard_Statistics":"Statistiche","MathWeb_Keyboard_Trig":"Trigonometria","MathWeb_Keyboard_Variables":"Variabili","KeyboardInput_Solve":"Risolvi","KeyboardInput_PlaceholderText":"Digita un problema di matematica","MathWeb_Section_Steps_Title":"Ottieni spiegazioni passo-passo","MathWeb_Section_Steps_Subtitle":"Visualizza indicazioni per risolvere i problemi e mostrare il tuo lavoro oltre alle definizioni dei concetti matematici","MathWeb_Section_Graph_Title":"Crea grafici dei problemi matematici","MathWeb_Section_Graph_Subtitle":"Crea all\'istante un grafico di qualsiasi equazione per visualizzare la funzione e comprendere le relazioni tra le variabili","MathWeb_Section_Practice_Title":"Non smettere mai di esercitarti","MathWeb_Section_Practice_Subtitle":"Cerca altro materiale didattico, tra cui esercitazioni video e fogli di calcolo correlati","MathWeb_Section_Language_Title":"Visualizza indicazioni nella tua lingua","MathWeb_Section_Language_Subtitle":"Funziona in spagnolo, hindi, tedesco e molte altre lingue","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Prova Math Solver","MathAnswerView_Videos":"Video","MathWeb_Section_Video_Subtitle":"Guarda per nuove funzionalità, suggerimenti e altro ancora!","MathWeb_Title":"Visualizza soluzioni passo passo per i tuoi problemi matematici","Results_Less":"Meno {0}","Results_More":"Altri {0}","MathPracticeProblem_SectionHeader":"Esercizio","MathWeb_PopularProblems":"Problemi popolari","MathWeb_SolveProblemTitleFormat":"Risolvi {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Risolvi i problemi matematici utilizzando il risolutore gratuito che offre soluzioni passo passo e supporta operazioni matematiche di base pre-algebriche, algebriche, trigonometriche, differenziali e molte altre.","Generic_About":"Circa","MathWeb_Topics":"Argomenti","Generic_PrivacyPolicy":"Informativa sulla privacy","Generic_TermOfUse":"Condizioni per l\'utilizzo del servizio","Settings_Language":"Lingua","MathWeb_BackToTop":"Torna all\'inizio","MathWeb_SimilarProblems":"Problemi simili","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Ordine delle Operazioni","MathWeb_Topic_PrimeFactorization":"Fattorizzazione Prime","MathWeb_Topic_Fractions":"Frazioni","MathWeb_Topic_LCM":"Multiplo meno comune","MathWeb_Topic_GCF":"Il più grande fattore comune","MathWeb_Topic_Mean":"Significare","MathWeb_Topic_Mode":"Modalità","MathWeb_Topic_Exponents":"Esponenti","MathWeb_Topic_Radicals":"Radicali liberi","MathWeb_Topic_MixedFractions":"Frazioni miste","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Combina termini simili","MathWeb_Topic_SolveForVariable":"Risolvi per una variabile","MathWeb_Topic_LinearEquations":"Equazioni lineari","MathWeb_Topic_QuadraticEquations":"Equazioni quadratiche","MathWeb_Topic_Matrices":"Matrici","MathWeb_Topic_Inequalities":"Disuguaglianze","MathWeb_Topic_SystemsOfEquations":"Sistemi di Equazioni","MathWeb_Topic_Factor":"Fattore","MathWeb_Topic_Expand":"Espandere","MathWeb_Topic_EvaluteFractions":"Valuta frazioni","MathWeb_Topic_Trigonometry":"Trigonometria","MathWeb_Topic_Simplify":"Semplificare","MathWeb_Topic_Evaluate":"Valutare","MathWeb_Topic_Graphs":"Grafici","MathWeb_Topic_SolveEquations":"Risolvere le equazioni","MathWeb_Topic_Calculus":"Calcolo","MathWeb_Topic_Derivatives":"Derivati","MathWeb_Topic_Integrals":"Integrali","MathWeb_Topic_Limits":"Limiti","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Calcolatrice algebrica","MathWeb_TrigCalculator":"Calcolatrice trigonometrica","MathWeb_CalculusCalculator":"Calcolo differenziale","MathWeb_MatrixCalculator":"Matrice Calcolatrice","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Generazione di un quiz...","Quiz_Error_Header":"Non è possibile generare un quiz basato su questo tipo di problema. Prova con un altro tipo.","Quiz_Notebook_ProblemCount_Template":"{0} problemi simili a:","NoResults_MathSolveError":"Si è verificato un errore. Riprova.","Quiz_Completion_Date":"Completato il {0}","Quiz_Result_Correct":"Corretta","Quiz_Total_Score_Template":"Hai risposto correttamente a {0} domande su {1}.","Quiz_Complete_Header":"Quiz completato","Quiz_End_Finish":"Fine","KeyboardInput_Undo":"Annulla","MathWeb_DeleteAll":"Cancella tutto","MathWeb_MyQuizzes":"I miei quiz","MathWeb_QuizNotFound":"Quiz non trovato","Quiz_NextProblem":"Problema successivo","Quiz_CheckProblem":"Controlla","Quiz_Answer_Prompt":"Seleziona la risposta al problema:","Quiz_HintButton":"Aiutami","MathWeb_NewQuiz":"Nuovo quiz","Quiz_StartScreen_Question_Count_Template":"{0} domande a risposta multipla","Quiz_StartScreen_Header":"Sei pronto per il quiz?","Quiz_StartScreen_Time_Template":"Tempo: {0} minuti","Quiz_Start":"Inizia","Quiz_Result_Incorrect":"Non corretta","Quiz_Result_Your_Answer":"La tua risposta:","Quiz_Result_See_Solution":"Visualizza soluzione","Quiz_Entity":"Quiz","MathWeb_InProgress":"In corso","MathWeb_ConfirmQuizDelete":"Sei sicuro di voler eliminare tutti i quiz?","Generic_Edit":"Modifica","Generic_Close":"Chiudi","MathResult_GraphHeader":"Grafico","Teams_ViewInteractiveGraph":"Visualizza grafico interattivo","Network_Offline_Message":"Sei offline. Controlla la rete.","NoResults_MathEquation":"Rilevata questa equazione:","NoResults_MathError":"Questo tipo di equazione non può essere risolto o contiene un errore","NoResults_NoMath":"Non è possibile identificare alcuna equazione. Assicurati che sia chiara e completamente inclusa nella cornice.","MathWeb_ViewSteps":"Visualizzare i passaggi della soluzione","Quiz_Try_Label":"Prova un quiz","MathAnswerView_Concepts":"Concetti correlati","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Fogli di lavoro da Ricerca Web","MathAnswerView_Worksheets_Short":"Domande di pratica","MathAnswerView_RelatedPages":"Problemi simili da ricerca Web","Results_Items":"Elementi","Generic_Share":"Condividi","Generic_Copy":"Copia","Share_CopiedToClipboard":"Copiato negli Appunti","Accessibility_MathAnswerView_PoweredByBing":"Con tecnologia Bing","MathAnswerView_PoweredByBing":"Con tecnologia","MathAnswerView_EquationIsFalse":"Falso","MathAnswerView_EquationIsTrue":"Vero","Feedback_Thanks":"Grazie","Feedback_Title":"Questi risultati sono stati utili?","MathAnswerView_DesktopUpsell_SectionHeader":"Versione desktop disponibile","SketchInput_ClearLabel":"Cancella schizzo","SketchInput_Clear":"CANC","SketchInput_PenLabel":"Usa la penna","SketchInput_EraserLabel":"Usa la gomma","SketchInput_UndoLabel":"Annulla l\'ultimo tratto","SketchInput_Info":"Disegna un problema qui sotto","SketchInput_SubmitLabel":"Invia espressione","Teams_Solve_Waiting":"Risolvere questa espressione...","Teams_RelatedTo":"Correlati a","MathWeb_PageTopicRootTitle":"Esplora argomenti di matematica","MathWeb_PageTopicDescriptionFormat":"Visualizza informazioni su {0} utilizzando il risolutore matematico gratuito che offre soluzioni passo passo."},"ja":{"Generic_Back":"戻る","MathWeb_GenericDownload":"ダウンロード","MathWeb_PageTopicRootDescription":"Microsoft 数学ソルバー アプリは、AI を導入した高度な数学ソルバーを使用して、算術、代数、三角法、微積分、統計、およびその他のトピックを含むさまざまな問題に対して詳細なヘルプを提供します。","MathWeb_Download_MobileHeading":"指先でステップバイステップのソリューション","MathWeb_Download_IOS":"iOS 用ダウンロード","MathWeb_Download_Android":"アンドロイド用ダウンロード","MathWeb_Download_InstalledMessage":"アプリは既にインストールされています","MathWeb_Download_Button":"デスクトップ アプリをダウンロードする","MathWeb_Download_Unavailable":"デスクトップ アプリが利用できません","MathWeb_Download_MacMessage":"現在、数学ソルバーデスクトップアプリはMacOSXのChrome経由でのみ利用可能です。Chrome でこのページを開いてアプリをインストールしてください。","MathWeb_Download_UnknownMessage":"現在、数学ソルバーデスクトップは、マイクロソフトエッジとChrome経由でのみ利用可能です。互換性のあるブラウザでこのページを開いてください。","EDU_PROB_CATEGORY_LIN_EQ":"一次方程式","EDU_PROB_CATEGORY_QUAD_EQ":"二次方程式の公式","EDU_PROB_CATEGORY_ARITHMETIC":"算術","EDU_PROB_CATEGORY_TRIG":"三角法","EDU_PROB_CATEGORY_MATRIX":"マトリックス","EDU_PROB_CATEGORY_SIM_EQ":"連立方程式","EDU_PROB_CATEGORY_DIFF":"微分法","EDU_PROB_CATEGORY_INTEGRATION":"積分法","EDU_PROB_CATEGORY_LIMITS":"限界","EDU_PROB_CATEGORY_COMPLEX":"複素数","EDU_PROB_CATEGORY_LIST":"リスト","NotebookTab_Example":"例","MathWeb_GenericSolve":"解","MathResult_Graph_ReCenter":"再センタリング","MathWeb_Keyboard_Algebra":"代数","MathWeb_Keyboard_Calculus":"微積分","MathWeb_Keyboard_List":"リスト","MathWeb_Keyboard_Matrices":"行列","MathWeb_Keyboard_Numbers":"番号","MathWeb_Keyboard_Operators":"演算子","MathWeb_Keyboard_Statistics":"統計","MathWeb_Keyboard_Trig":"三角法","MathWeb_Keyboard_Variables":"変数","KeyboardInput_Solve":"解","KeyboardInput_PlaceholderText":"数学の問題を入力","MathWeb_Section_Steps_Title":"詳しい解説を取得","MathWeb_Section_Steps_Subtitle":"問題の解法を確認し、自分の回答を示すとともに、数学的概念の定義を取得します","MathWeb_Section_Graph_Title":"数学の問題をグラフで表示","MathWeb_Section_Graph_Subtitle":"関数を視覚化し、変数間の関係を把握するために、あらゆる数式を瞬時にグラフで表示します","MathWeb_Section_Practice_Title":"演習三昧","MathWeb_Section_Practice_Subtitle":"関連するワークシートやビデオ チュートリアルなどの、追加の学習資料を検索できます","MathWeb_Section_Language_Title":"数学に関するヘルプを各国語で表示","MathWeb_Section_Language_Subtitle":"スペイン語、ヒンディー語、ドイツ語などでも利用できます","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"数学ソルバーを試す","MathAnswerView_Videos":"動画","MathWeb_Section_Video_Subtitle":"新機能、ヒントなどを見てください!","MathWeb_Title":"数学の問題の詳細な解法を取得","Results_Less":"{0} の表示件数を減らす","Results_More":"その他の {0}","MathPracticeProblem_SectionHeader":"演習","MathWeb_PopularProblems":"一般的な問題","MathWeb_SolveProblemTitleFormat":"{0} を解きます| Microsoft 数学ソルバー","MathWeb_SolveProblemDescription":"詳細な解法を提供する Microsoft の無料の数学ソルバーを使用して、数学の問題を解きましょう。この数学ソルバーは、基本的な数学、前代数、代数、三角法、微積分などに対応します。","Generic_About":"に関しては","MathWeb_Topics":"トピック","Generic_PrivacyPolicy":"プライバシー ポリシー","Generic_TermOfUse":"サービス利用規約","Settings_Language":"言語","MathWeb_BackToTop":"トップに戻る","MathWeb_SimilarProblems":"類似の問題","MathWeb_Topic_PreAlgebra":"代数前","MathWeb_Topic_PreAlgebra2":"代数前2","MathWeb_Topic_OrderOfOperations":"操作の順序","MathWeb_Topic_PrimeFactorization":"主因子分解","MathWeb_Topic_Fractions":"分数","MathWeb_Topic_LCM":"最も一般的な倍数","MathWeb_Topic_GCF":"最大共通要因","MathWeb_Topic_Mean":"意味","MathWeb_Topic_Mode":"モード","MathWeb_Topic_Exponents":"指数","MathWeb_Topic_Radicals":"ラジカル","MathWeb_Topic_MixedFractions":"混合分数","MathWeb_Topic_Algebra":"代数","MathWeb_Topic_Algebra2":"代数2","MathWeb_Topic_CombineLikeTerms":"同じ用語を組み合わせる","MathWeb_Topic_SolveForVariable":"変数の解決","MathWeb_Topic_LinearEquations":"線形方程式","MathWeb_Topic_QuadraticEquations":"二次方程式","MathWeb_Topic_Matrices":"行列","MathWeb_Topic_Inequalities":"不平等","MathWeb_Topic_SystemsOfEquations":"方程式のシステム","MathWeb_Topic_Factor":"要因","MathWeb_Topic_Expand":"展開","MathWeb_Topic_EvaluteFractions":"分数を評価する","MathWeb_Topic_Trigonometry":"三角法","MathWeb_Topic_Simplify":"簡素 化","MathWeb_Topic_Evaluate":"評価","MathWeb_Topic_Graphs":"グラフ","MathWeb_Topic_SolveEquations":"方程式を解く","MathWeb_Topic_Calculus":"微積分","MathWeb_Topic_Derivatives":"誘導 体","MathWeb_Topic_Integrals":"積分","MathWeb_Topic_Limits":"制限","MathWeb_CalculatorTitle":"{0} | Microsoft 数学ソルバー","MathWeb_AlgebraCalculator":"代数電卓","MathWeb_TrigCalculator":"三角法電卓","MathWeb_CalculusCalculator":"微積分電卓","MathWeb_MatrixCalculator":"マトリックス電卓","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"テストを生成しています...","Quiz_Error_Header":"申し訳ありません、その問題タイプでのテストは作成できませんでした。別の問題タイプを試してください。","Quiz_Notebook_ProblemCount_Template":"次に類似した {0} 個の問題:","NoResults_MathSolveError":"不具合が発生しました。再度お試しください。","Quiz_Completion_Date":"完了日: {0}","Quiz_Result_Correct":"正解","Quiz_Total_Score_Template":"{1} 問中 {0} 問に正解しました。","Quiz_Complete_Header":"テスト完了","Quiz_End_Finish":"完了","KeyboardInput_Undo":"元に戻す","MathWeb_DeleteAll":"すべて削除","MathWeb_MyQuizzes":"私のクイズ","MathWeb_QuizNotFound":"クイズが見つかりません","Quiz_NextProblem":"次の問題","Quiz_CheckProblem":"チェック","Quiz_Answer_Prompt":"問題に対する答えを選択してください:","Quiz_HintButton":"私のお手伝い","MathWeb_NewQuiz":"新しいクイズ","Quiz_StartScreen_Question_Count_Template":"{0} 個の多肢選択式問題","Quiz_StartScreen_Header":"テストを受ける準備はできましたか?","Quiz_StartScreen_Time_Template":"{0} 分で完了","Quiz_Start":"開始","Quiz_Result_Incorrect":"不正解","Quiz_Result_Your_Answer":"あなたの答え:","Quiz_Result_See_Solution":"解法を表示","Quiz_Entity":"クイズ","MathWeb_InProgress":"進行中","MathWeb_ConfirmQuizDelete":"すべてのクイズを削除しますか?","Generic_Edit":"編集","Generic_Close":"閉じる","MathResult_GraphHeader":"グラフ","Teams_ViewInteractiveGraph":"インタラクティブグラフを表示","Network_Offline_Message":"オフライン状態です。ネットワークを確認してください。","NoResults_MathEquation":"次の方程式を検出しました:","NoResults_MathError":"解くことができない種類の方程式であるか、エラーがある可能性があります","NoResults_NoMath":"申し訳ありません、方程式を認識できません。フレーム内にはっきりとすべてが収まっていることを確認してください","MathWeb_ViewSteps":"ソリューションステップの表示","Quiz_Try_Label":"テストに挑戦","MathAnswerView_Concepts":"関連コンセプト","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Web検索の練習問題","MathAnswerView_Worksheets_Short":"練習問題","MathAnswerView_RelatedPages":"Web 検索からの類似の問題","Results_Items":"項目","Generic_Share":"共有","Generic_Copy":"コピー","Share_CopiedToClipboard":"クリップボードにコピー済み","Accessibility_MathAnswerView_PoweredByBing":"Bing 提供","MathAnswerView_PoweredByBing":"提供元","MathAnswerView_EquationIsFalse":"FALSE","MathAnswerView_EquationIsTrue":"TRUE","Feedback_Thanks":"ありがとうございました!","Feedback_Title":"これらの結果は役に立つものでしたか?","MathAnswerView_DesktopUpsell_SectionHeader":"利用可能なデスクトップバージョン","SketchInput_ClearLabel":"スケッチをクリア","SketchInput_Clear":"CLR","SketchInput_PenLabel":"ペンを使用","SketchInput_EraserLabel":"消しゴムを使用","SketchInput_UndoLabel":"直前のストロークを元に戻す","SketchInput_Info":"下に問題を描画します","SketchInput_SubmitLabel":"数式を送信","Teams_Solve_Waiting":"この表現を解く.","Teams_RelatedTo":"関連する","MathWeb_PageTopicRootTitle":"数学のトピックの探索","MathWeb_PageTopicDescriptionFormat":"詳細な解法を提供する Microsoft の無料の数学ソルバーを使用して{0}について学習しましょう。"},"pt":{"Generic_Back":"Voltar","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"O aplicativo Microsoft Math Solver fornece ajuda passo a passo para diversos problemas, incluindo aritmética, álgebra, trigonometria, cálculo, estatística e outros tópicos, usando um solucionador de matemática avançado com IA.","MathWeb_Download_MobileHeading":"Soluções passo a passo na ponta dos dedos","MathWeb_Download_IOS":"Download para iOS","MathWeb_Download_Android":"Download para Android","MathWeb_Download_InstalledMessage":"Aplicativo já instalado","MathWeb_Download_Button":"Baixar aplicativo de desktop","MathWeb_Download_Unavailable":"Aplicativo de desktop indisponível","MathWeb_Download_MacMessage":"Atualmente, o aplicativo de desktop Math Solver só está disponível via Chrome no MacOSX. Abra esta página no Chrome para instalar o aplicativo.","MathWeb_Download_UnknownMessage":"Atualmente, o desktop Math Solver só está disponível via Microsoft Edge e Chrome. Abra esta página em um navegador compatível.","EDU_PROB_CATEGORY_LIN_EQ":"Equação linear","EDU_PROB_CATEGORY_QUAD_EQ":"Equação quadrática","EDU_PROB_CATEGORY_ARITHMETIC":"Aritmética","EDU_PROB_CATEGORY_TRIG":"Trigonometria","EDU_PROB_CATEGORY_MATRIX":"Matriz","EDU_PROB_CATEGORY_SIM_EQ":"Equação simultânea","EDU_PROB_CATEGORY_DIFF":"Diferenciação","EDU_PROB_CATEGORY_INTEGRATION":"Integração","EDU_PROB_CATEGORY_LIMITS":"Limites","EDU_PROB_CATEGORY_COMPLEX":"Números complexos","EDU_PROB_CATEGORY_LIST":"Lista","NotebookTab_Example":"Exemplos","MathWeb_GenericSolve":"Solucionar","MathResult_Graph_ReCenter":"Centralizar Novamente","MathWeb_Keyboard_Algebra":"Álgebra","MathWeb_Keyboard_Calculus":"Cálculo","MathWeb_Keyboard_List":"Lista","MathWeb_Keyboard_Matrices":"Matrizes","MathWeb_Keyboard_Numbers":"Números","MathWeb_Keyboard_Operators":"Operadores","MathWeb_Keyboard_Statistics":"Estatísticas","MathWeb_Keyboard_Trig":"Trigonometria","MathWeb_Keyboard_Variables":"Variáveis","KeyboardInput_Solve":"Solucionar","KeyboardInput_PlaceholderText":"Digite um problema de matemática","MathWeb_Section_Steps_Title":"Obtenha explicações passo a passo","MathWeb_Section_Steps_Subtitle":"Veja como resolver problemas e mostrar seu trabalho, além de obter definições de conceitos matemáticos","MathWeb_Section_Graph_Title":"Crie um gráfico de seus problemas de matemática","MathWeb_Section_Graph_Subtitle":"Crie instantaneamente um gráfico de qualquer equação para visualizar sua função e entender a relação entre variáveis","MathWeb_Section_Practice_Title":"Pratique, pratique, pratique","MathWeb_Section_Practice_Subtitle":"Pesquise material de aprendizado adicional, como planilhas e tutoriais em vídeo relacionados","MathWeb_Section_Language_Title":"Obtenha ajuda para matemática em seu idioma","MathWeb_Section_Language_Subtitle":"Funciona em espanhol, híndi, alemão e muito mais","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Experimente o Math Solver","MathAnswerView_Videos":"Vídeos","MathWeb_Section_Video_Subtitle":"Fique atento a novidades, dicas e muito mais!","MathWeb_Title":"Obtenha soluções passo a passo para seus problemas de matemática","Results_Less":"Menos {0}","Results_More":"Mais {0}","MathPracticeProblem_SectionHeader":"Praticar","MathWeb_PopularProblems":"Problemas populares","MathWeb_SolveProblemTitleFormat":"Resolver {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Resolva seus problemas de matemática usando nosso solucionador de matemática gratuito com soluções passo a passo. Nosso solucionador de matemática dá suporte a matemática básica, pré-álgebra, álgebra, trigonometria, cálculo e muito mais.","Generic_About":"Sobre","MathWeb_Topics":"Tópicos","Generic_PrivacyPolicy":"Política de Privacidade","Generic_TermOfUse":"Termos de serviço","Settings_Language":"Idioma","MathWeb_BackToTop":"De volta ao topo","MathWeb_SimilarProblems":"Problemas semelhantes","MathWeb_Topic_PreAlgebra":"Pré-Álgebra","MathWeb_Topic_PreAlgebra2":"Pré-Álgebra 2","MathWeb_Topic_OrderOfOperations":"Ordem das Operações","MathWeb_Topic_PrimeFactorization":"Fatorização do Prime","MathWeb_Topic_Fractions":"Frações","MathWeb_Topic_LCM":"Múltiplo menos comum","MathWeb_Topic_GCF":"Maior Fator Comum","MathWeb_Topic_Mean":"Média","MathWeb_Topic_Mode":"Modo","MathWeb_Topic_Exponents":"Expoentes","MathWeb_Topic_Radicals":"Radicais","MathWeb_Topic_MixedFractions":"Frações Mistas","MathWeb_Topic_Algebra":"Álgebra","MathWeb_Topic_Algebra2":"Álgebra 2","MathWeb_Topic_CombineLikeTerms":"Combine termos de como","MathWeb_Topic_SolveForVariable":"Resolver para uma Variável","MathWeb_Topic_LinearEquations":"Equações Lineares","MathWeb_Topic_QuadraticEquations":"Equações quadráticas","MathWeb_Topic_Matrices":"Matrizes","MathWeb_Topic_Inequalities":"Desigualdades","MathWeb_Topic_SystemsOfEquations":"Sistemas de Equações","MathWeb_Topic_Factor":"Fator","MathWeb_Topic_Expand":"Expandir","MathWeb_Topic_EvaluteFractions":"Avaliar frações","MathWeb_Topic_Trigonometry":"Trigonometria","MathWeb_Topic_Simplify":"Simplificar","MathWeb_Topic_Evaluate":"Avaliar","MathWeb_Topic_Graphs":"Gráficos","MathWeb_Topic_SolveEquations":"Resolver equações","MathWeb_Topic_Calculus":"Cálculo","MathWeb_Topic_Derivatives":"Derivados","MathWeb_Topic_Integrals":"Integrais","MathWeb_Topic_Limits":"Limites","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Calculadora de Álgebra","MathWeb_TrigCalculator":"Calculadora de Trigonometria","MathWeb_CalculusCalculator":"Calculadora de Cálculo","MathWeb_MatrixCalculator":"Calculadora Matricial","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Gerando teste...","Quiz_Error_Header":"Não foi possível gerar um teste com base neste tipo de problema. Tente outro tipo de problema.","Quiz_Notebook_ProblemCount_Template":"{0} problemas semelhantes a:","NoResults_MathSolveError":"Houve algum problema. Tente novamente","Quiz_Completion_Date":"Conclusão: {0}","Quiz_Result_Correct":"Correto","Quiz_Total_Score_Template":"Você respondeu {0} de {1} perguntas corretamente.","Quiz_Complete_Header":"Teste concluído","Quiz_End_Finish":"Concluir","KeyboardInput_Undo":"Desfazer","MathWeb_DeleteAll":"Excluir todos","MathWeb_MyQuizzes":"Meus testes","MathWeb_QuizNotFound":"Quiz não encontrado","Quiz_NextProblem":"Próximo Problema","Quiz_CheckProblem":"Verificar","Quiz_Answer_Prompt":"Selecione a resposta para o problema:","Quiz_HintButton":"Ajude-me","MathWeb_NewQuiz":"Novo quiz","Quiz_StartScreen_Question_Count_Template":"{0} perguntas de múltipla escolha","Quiz_StartScreen_Header":"Pronto para um teste?","Quiz_StartScreen_Time_Template":"{0} minutos para conclusão","Quiz_Start":"Iniciar","Quiz_Result_Incorrect":"Incorreto","Quiz_Result_Your_Answer":"Sua resposta:","Quiz_Result_See_Solution":"Ver solução","Quiz_Entity":"Teste","MathWeb_InProgress":"Em andamento","MathWeb_ConfirmQuizDelete":"Tem certeza que quer apagar todos os testes?","Generic_Edit":"Editar","Generic_Close":"Fechar","MathResult_GraphHeader":"Gráfico","Teams_ViewInteractiveGraph":"Exibir gráfico interativo","Network_Offline_Message":"Você está offline. Verifique sua rede.","NoResults_MathEquation":"Esta equação foi detectada:","NoResults_MathError":"Não podemos resolver este tipo de equação ou pode haver um erro","NoResults_NoMath":"Não vemos uma equação. Verifique se ela está clara e completamente enquadrada","MathWeb_ViewSteps":"Ver etapas da solução","Quiz_Try_Label":"Experimentar um teste","MathAnswerView_Concepts":"Conceitos Relacionados","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Planilhas da Pesquisa na Web","MathAnswerView_Worksheets_Short":"Questões práticas","MathAnswerView_RelatedPages":"Problemas Semelhantes da Pesquisa na Web","Results_Items":"Itens","Generic_Share":"Compartilhar","Generic_Copy":"Copiar","Share_CopiedToClipboard":"Copiado para a área de transferência","Accessibility_MathAnswerView_PoweredByBing":"Da plataforma Bing","MathAnswerView_PoweredByBing":"Da plataforma","MathAnswerView_EquationIsFalse":"Falso","MathAnswerView_EquationIsTrue":"Verdadeiro","Feedback_Thanks":"Obrigado!","Feedback_Title":"Estes resultados foram úteis?","MathAnswerView_DesktopUpsell_SectionHeader":"Versão para desktop disponível","SketchInput_ClearLabel":"Limpar esboço","SketchInput_Clear":"CLR","SketchInput_PenLabel":"Usar caneta","SketchInput_EraserLabel":"Usar borracha","SketchInput_UndoLabel":"Desfazer o último traço","SketchInput_Info":"Desenhe um problema abaixo","SketchInput_SubmitLabel":"Enviar expressão","Teams_Solve_Waiting":"Resolvendo essa expressão...","Teams_RelatedTo":"Relacionados com","MathWeb_PageTopicRootTitle":"Explorar Tópicos de Matemática","MathWeb_PageTopicDescriptionFormat":"Saiba mais sobre {0} usando nosso solucionador de matemática gratuito com soluções passo a passo."},"zh-TW":{"Generic_Back":"返回","MathWeb_GenericDownload":"下載","MathWeb_PageTopicRootDescription":"微軟數學面向各個年齡層級和不同類型的數學問題，利用獨有的人工智能數學解題引擎為同學提供解題幫助，並為家長和老師提供輔導依據。你只需拍照掃描一個數學公式便能得到詳細的步驟解釋和坐標圖。你還可以通過手寫輸入方便地輸入你的數學算式求解。此外你還可以利用微軟數學為你生成同類型的習題以供你練習鞏固。","MathWeb_Download_MobileHeading":"手指提示處的分步解決方案","MathWeb_Download_IOS":"下載 iOS","MathWeb_Download_Android":"下載安卓","MathWeb_Download_InstalledMessage":"已安裝的應用程式。","MathWeb_Download_Button":"下載桌面應用程式","MathWeb_Download_Unavailable":"桌面應用無法使用","MathWeb_Download_MacMessage":"目前,數學解算器桌面應用程式只能通過 MacOSX 上的 Chrome 版獲得。請在 Chrome 中打開此頁面以安裝該應用程式。","MathWeb_Download_UnknownMessage":"目前,數學解算器桌面只能通過微軟邊緣和Chrome提供。請在相容的瀏覽器中打開此頁面。","EDU_PROB_CATEGORY_LIN_EQ":"線性方程","EDU_PROB_CATEGORY_QUAD_EQ":"二次方程式","EDU_PROB_CATEGORY_ARITHMETIC":"算術","EDU_PROB_CATEGORY_TRIG":"三角學","EDU_PROB_CATEGORY_MATRIX":"矩陣","EDU_PROB_CATEGORY_SIM_EQ":"聯立方程","EDU_PROB_CATEGORY_DIFF":"微分","EDU_PROB_CATEGORY_INTEGRATION":"積分","EDU_PROB_CATEGORY_LIMITS":"限制","EDU_PROB_CATEGORY_COMPLEX":"復數","EDU_PROB_CATEGORY_LIST":"列表","NotebookTab_Example":"示例","MathWeb_GenericSolve":"Solve","MathResult_Graph_ReCenter":"重新居中","MathWeb_Keyboard_Algebra":"代數","MathWeb_Keyboard_Calculus":"微積分","MathWeb_Keyboard_List":"清單","MathWeb_Keyboard_Matrices":"矩陣","MathWeb_Keyboard_Numbers":"公尺","MathWeb_Keyboard_Operators":"運營商","MathWeb_Keyboard_Statistics":"統計","MathWeb_Keyboard_Trig":"三角","MathWeb_Keyboard_Variables":"變數","KeyboardInput_Solve":"Solve","KeyboardInput_PlaceholderText":"鍵入數學問題","MathWeb_Section_Steps_Title":"Get step-by-step explanations","MathWeb_Section_Steps_Subtitle":"See how to solve problems and show your work—plus get definitions for mathematical concepts","MathWeb_Section_Graph_Title":"Graph your math problems","MathWeb_Section_Graph_Subtitle":"Instantly graph any equation to visualize your function and understand the relationship between variables","MathWeb_Section_Practice_Title":"Practice, practice, practice","MathWeb_Section_Practice_Subtitle":"Search for additional learning materials, such as related worksheets and video tutorials","MathWeb_Section_Language_Title":"Get math help in your language","MathWeb_Section_Language_Subtitle":"Works in Spanish, Hindi, German, and more","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"嘗試數學解算器","MathAnswerView_Videos":"視頻","MathWeb_Section_Video_Subtitle":"留意新功能、提示等！","MathWeb_Title":"Get step-by-step solutions to your math problems","Results_Less":"收起{0}","Results_More":"更多{0}","MathPracticeProblem_SectionHeader":"練習","MathWeb_PopularProblems":"熱門問題","MathWeb_SolveProblemTitleFormat":"Solve {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"使用我們的免費數學求解器和逐步解決方案來解決您的數學問題。 獲取有關算術，代數，圖形計算器，三角學，微積分等的幫助。 查看Microsoft Math Solver應用程序，該應用程序為我提供了免費的分步說明，圖表等。","Generic_About":"關於","MathWeb_Topics":"主題","Generic_PrivacyPolicy":"隱私策略","Generic_TermOfUse":"服務條款","Settings_Language":"語言","MathWeb_BackToTop":"返回頂部","MathWeb_SimilarProblems":"類似問題","MathWeb_Topic_PreAlgebra":"代數前","MathWeb_Topic_PreAlgebra2":"代數前 2","MathWeb_Topic_OrderOfOperations":"動作順序","MathWeb_Topic_PrimeFactorization":"優質保理","MathWeb_Topic_Fractions":"分數","MathWeb_Topic_LCM":"最小公共倍數","MathWeb_Topic_GCF":"最大的共同因素","MathWeb_Topic_Mean":"意味 著","MathWeb_Topic_Mode":"模式","MathWeb_Topic_Exponents":"指數","MathWeb_Topic_Radicals":"基","MathWeb_Topic_MixedFractions":"混合分數","MathWeb_Topic_Algebra":"代數","MathWeb_Topic_Algebra2":"代數 2","MathWeb_Topic_CombineLikeTerms":"組合類似條款","MathWeb_Topic_SolveForVariable":"變數的求解","MathWeb_Topic_LinearEquations":"線性方程","MathWeb_Topic_QuadraticEquations":"二次方程","MathWeb_Topic_Matrices":"矩陣","MathWeb_Topic_Inequalities":"不等式","MathWeb_Topic_SystemsOfEquations":"方程式系統","MathWeb_Topic_Factor":"因素","MathWeb_Topic_Expand":"擴大","MathWeb_Topic_EvaluteFractions":"評估分數","MathWeb_Topic_Trigonometry":"三角","MathWeb_Topic_Simplify":"簡化","MathWeb_Topic_Evaluate":"評價","MathWeb_Topic_Graphs":"圖","MathWeb_Topic_SolveEquations":"求解方程","MathWeb_Topic_Calculus":"微積分","MathWeb_Topic_Derivatives":"衍生物","MathWeb_Topic_Integrals":"積分","MathWeb_Topic_Limits":"限制","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"代數計算機","MathWeb_TrigCalculator":"三角計算機","MathWeb_CalculusCalculator":"微積分計算機","MathWeb_MatrixCalculator":"矩陣計算機","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"簡體中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"產生偵測驗...","Quiz_Error_Header":"很抱歉,我們無法為提供的輸入生成測驗","Quiz_Notebook_ProblemCount_Template":"{0}類似於:","NoResults_MathSolveError":"出錯了，請重試","Quiz_Completion_Date":"完成{0}","Quiz_Result_Correct":"正確","Quiz_Total_Score_Template":"您正確回答了{0}{1}問題。","Quiz_Complete_Header":"測驗完成","Quiz_End_Finish":"完成","KeyboardInput_Undo":"Undo","MathWeb_DeleteAll":"移除所有","MathWeb_MyQuizzes":"我的測驗","MathWeb_QuizNotFound":"未找到測驗","Quiz_NextProblem":"下一個問題","Quiz_CheckProblem":"檢查","Quiz_Answer_Prompt":"選擇問題的答案:","Quiz_HintButton":"幫幫我","MathWeb_NewQuiz":"新測驗","Quiz_StartScreen_Question_Count_Template":"{0}多項選擇問題","Quiz_StartScreen_Header":"準備好測驗了嗎?","Quiz_StartScreen_Time_Template":"{0}完成","Quiz_Start":"開始","Quiz_Result_Incorrect":"錯誤","Quiz_Result_Your_Answer":"您的答案:","Quiz_Result_See_Solution":"檢視解決方案","Quiz_Entity":"測驗","MathWeb_InProgress":"正在進行中","MathWeb_ConfirmQuizDelete":"是否確實要刪除所有測驗?","Generic_Edit":"編輯","Generic_Close":"關閉","MathResult_GraphHeader":"圖表","Teams_ViewInteractiveGraph":"查看互動式圖形。","Network_Offline_Message":"妳處於脫機狀態。請檢查網絡。","NoResults_MathEquation":"檢測到此方程:","NoResults_MathError":"無法對此類方程求解或其中可能包含錯誤","NoResults_NoMath":"抱歉，我們沒有看到方程。 請確保畫面清晰完整","MathWeb_ViewSteps":"檢視解決方案步驟","Quiz_Try_Label":"嘗試測驗","MathAnswerView_Concepts":"相關概念","Generic_PDF":"PDF","MathAnswerView_Worksheets":"來自 Web 搜索的測驗題","MathAnswerView_Worksheets_Short":"測驗題","MathAnswerView_RelatedPages":"來自 Web 搜索的類似問題","Results_Items":"結果","Generic_Share":"共享","Generic_Copy":"復制","Share_CopiedToClipboard":"已復制到剪貼板","Accessibility_MathAnswerView_PoweredByBing":"由必應提供支持","MathAnswerView_PoweredByBing":"由必應提供支持","MathAnswerView_EquationIsFalse":"False","MathAnswerView_EquationIsTrue":"True","Feedback_Thanks":"謝謝!","Feedback_Title":"這些結果有用嗎?","MathAnswerView_DesktopUpsell_SectionHeader":"提供桌面版本","SketchInput_ClearLabel":"清空手寫板","SketchInput_Clear":"清空","SketchInput_PenLabel":"切換到書寫模式","SketchInput_EraserLabel":"切換到橡皮模式","SketchInput_UndoLabel":"撤消上壹筆劃","SketchInput_Info":"在下面寫出算式","SketchInput_SubmitLabel":"提交表達式","Teams_Solve_Waiting":"正在解決此表示式...","Teams_RelatedTo":"相關。","MathWeb_PageTopicRootTitle":"Explore Math Topics","MathWeb_PageTopicDescriptionFormat":"Learn about {0} using our free math solver with step-by-step solutions."},"zh-HK":{"Generic_Back":"返回","MathWeb_GenericDownload":"下載","MathWeb_PageTopicRootDescription":"微軟數學面向各個年齡層級和不同類型的數學問題，利用獨有的人工智能數學解題引擎為同學提供解題幫助，並為家長和老師提供輔導依據。你只需拍照掃描一個數學公式便能得到詳細的步驟解釋和坐標圖。你還可以通過手寫輸入方便地輸入你的數學算式求解。此外你還可以利用微軟數學為你生成同類型的習題以供你練習鞏固。","MathWeb_Download_MobileHeading":"手指提示處的分步解決方案","MathWeb_Download_IOS":"下載 iOS","MathWeb_Download_Android":"下載安卓","MathWeb_Download_InstalledMessage":"已安裝的應用程式。","MathWeb_Download_Button":"下載桌面應用程式","MathWeb_Download_Unavailable":"桌面應用無法使用","MathWeb_Download_MacMessage":"目前,數學解算器桌面應用程式只能通過 MacOSX 上的 Chrome 版獲得。請在 Chrome 中打開此頁面以安裝該應用程式。","MathWeb_Download_UnknownMessage":"目前,數學解算器桌面只能通過微軟邊緣和Chrome提供。請在相容的瀏覽器中打開此頁面。","EDU_PROB_CATEGORY_LIN_EQ":"線性方程","EDU_PROB_CATEGORY_QUAD_EQ":"二次方程式","EDU_PROB_CATEGORY_ARITHMETIC":"算術","EDU_PROB_CATEGORY_TRIG":"三角學","EDU_PROB_CATEGORY_MATRIX":"矩陣","EDU_PROB_CATEGORY_SIM_EQ":"聯立方程","EDU_PROB_CATEGORY_DIFF":"微分","EDU_PROB_CATEGORY_INTEGRATION":"積分","EDU_PROB_CATEGORY_LIMITS":"限制","EDU_PROB_CATEGORY_COMPLEX":"復數","EDU_PROB_CATEGORY_LIST":"列表","NotebookTab_Example":"示例","MathWeb_GenericSolve":"Solve","MathResult_Graph_ReCenter":"重新居中","MathWeb_Keyboard_Algebra":"代數","MathWeb_Keyboard_Calculus":"微積分","MathWeb_Keyboard_List":"清單","MathWeb_Keyboard_Matrices":"矩陣","MathWeb_Keyboard_Numbers":"公尺","MathWeb_Keyboard_Operators":"運營商","MathWeb_Keyboard_Statistics":"統計","MathWeb_Keyboard_Trig":"三角","MathWeb_Keyboard_Variables":"變數","KeyboardInput_Solve":"Solve","KeyboardInput_PlaceholderText":"鍵入數學問題","MathWeb_Section_Steps_Title":"Get step-by-step explanations","MathWeb_Section_Steps_Subtitle":"See how to solve problems and show your work—plus get definitions for mathematical concepts","MathWeb_Section_Graph_Title":"Graph your math problems","MathWeb_Section_Graph_Subtitle":"Instantly graph any equation to visualize your function and understand the relationship between variables","MathWeb_Section_Practice_Title":"Practice, practice, practice","MathWeb_Section_Practice_Subtitle":"Search for additional learning materials, such as related worksheets and video tutorials","MathWeb_Section_Language_Title":"Get math help in your language","MathWeb_Section_Language_Subtitle":"Works in Spanish, Hindi, German, and more","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"嘗試數學解算器","MathAnswerView_Videos":"視頻","MathWeb_Section_Video_Subtitle":"留意新功能、提示等！","MathWeb_Title":"Get step-by-step solutions to your math problems","Results_Less":"收起{0}","Results_More":"更多{0}","MathPracticeProblem_SectionHeader":"練習","MathWeb_PopularProblems":"熱門問題","MathWeb_SolveProblemTitleFormat":"Solve {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"使用我們的免費數學求解器和逐步解決方案來解決您的數學問題。 獲取有關算術，代數，圖形計算器，三角學，微積分等的幫助。 查看Microsoft Math Solver應用程序，該應用程序為我提供了免費的分步說明，圖表等。","Generic_About":"關於","MathWeb_Topics":"主題","Generic_PrivacyPolicy":"隱私策略","Generic_TermOfUse":"服務條款","Settings_Language":"語言","MathWeb_BackToTop":"返回頂部","MathWeb_SimilarProblems":"類似問題","MathWeb_Topic_PreAlgebra":"代數前","MathWeb_Topic_PreAlgebra2":"代數前 2","MathWeb_Topic_OrderOfOperations":"動作順序","MathWeb_Topic_PrimeFactorization":"優質保理","MathWeb_Topic_Fractions":"分數","MathWeb_Topic_LCM":"最小公共倍數","MathWeb_Topic_GCF":"最大的共同因素","MathWeb_Topic_Mean":"意味 著","MathWeb_Topic_Mode":"模式","MathWeb_Topic_Exponents":"指數","MathWeb_Topic_Radicals":"基","MathWeb_Topic_MixedFractions":"混合分數","MathWeb_Topic_Algebra":"代數","MathWeb_Topic_Algebra2":"代數 2","MathWeb_Topic_CombineLikeTerms":"組合類似條款","MathWeb_Topic_SolveForVariable":"變數的求解","MathWeb_Topic_LinearEquations":"線性方程","MathWeb_Topic_QuadraticEquations":"二次方程","MathWeb_Topic_Matrices":"矩陣","MathWeb_Topic_Inequalities":"不等式","MathWeb_Topic_SystemsOfEquations":"方程式系統","MathWeb_Topic_Factor":"因素","MathWeb_Topic_Expand":"擴大","MathWeb_Topic_EvaluteFractions":"評估分數","MathWeb_Topic_Trigonometry":"三角","MathWeb_Topic_Simplify":"簡化","MathWeb_Topic_Evaluate":"評價","MathWeb_Topic_Graphs":"圖","MathWeb_Topic_SolveEquations":"求解方程","MathWeb_Topic_Calculus":"微積分","MathWeb_Topic_Derivatives":"衍生物","MathWeb_Topic_Integrals":"積分","MathWeb_Topic_Limits":"限制","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"代數計算機","MathWeb_TrigCalculator":"三角計算機","MathWeb_CalculusCalculator":"微積分計算機","MathWeb_MatrixCalculator":"矩陣計算機","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"簡體中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"產生偵測驗...","Quiz_Error_Header":"很抱歉,我們無法為提供的輸入生成測驗","Quiz_Notebook_ProblemCount_Template":"{0}類似於:","NoResults_MathSolveError":"出錯了，請重試","Quiz_Completion_Date":"完成{0}","Quiz_Result_Correct":"正確","Quiz_Total_Score_Template":"您正確回答了{0}{1}問題。","Quiz_Complete_Header":"測驗完成","Quiz_End_Finish":"完成","KeyboardInput_Undo":"Undo","MathWeb_DeleteAll":"移除所有","MathWeb_MyQuizzes":"我的測驗","MathWeb_QuizNotFound":"未找到測驗","Quiz_NextProblem":"下一個問題","Quiz_CheckProblem":"檢查","Quiz_Answer_Prompt":"選擇問題的答案:","Quiz_HintButton":"幫幫我","MathWeb_NewQuiz":"新測驗","Quiz_StartScreen_Question_Count_Template":"{0}多項選擇問題","Quiz_StartScreen_Header":"準備好測驗了嗎?","Quiz_StartScreen_Time_Template":"{0}完成","Quiz_Start":"開始","Quiz_Result_Incorrect":"錯誤","Quiz_Result_Your_Answer":"您的答案:","Quiz_Result_See_Solution":"檢視解決方案","Quiz_Entity":"測驗","MathWeb_InProgress":"正在進行中","MathWeb_ConfirmQuizDelete":"是否確實要刪除所有測驗?","Generic_Edit":"編輯","Generic_Close":"關閉","MathResult_GraphHeader":"圖表","Teams_ViewInteractiveGraph":"查看互動式圖形。","Network_Offline_Message":"妳處於脫機狀態。請檢查網絡。","NoResults_MathEquation":"檢測到此方程:","NoResults_MathError":"無法對此類方程求解或其中可能包含錯誤","NoResults_NoMath":"抱歉，我們沒有看到方程。 請確保畫面清晰完整","MathWeb_ViewSteps":"檢視解決方案步驟","Quiz_Try_Label":"嘗試測驗","MathAnswerView_Concepts":"相關概念","Generic_PDF":"PDF","MathAnswerView_Worksheets":"來自 Web 搜索的測驗題","MathAnswerView_Worksheets_Short":"測驗題","MathAnswerView_RelatedPages":"來自 Web 搜索的類似問題","Results_Items":"結果","Generic_Share":"共享","Generic_Copy":"復制","Share_CopiedToClipboard":"已復制到剪貼板","Accessibility_MathAnswerView_PoweredByBing":"由必應提供支持","MathAnswerView_PoweredByBing":"由必應提供支持","MathAnswerView_EquationIsFalse":"False","MathAnswerView_EquationIsTrue":"True","Feedback_Thanks":"謝謝!","Feedback_Title":"這些結果有用嗎?","MathAnswerView_DesktopUpsell_SectionHeader":"提供桌面版本","SketchInput_ClearLabel":"清空手寫板","SketchInput_Clear":"清空","SketchInput_PenLabel":"切換到書寫模式","SketchInput_EraserLabel":"切換到橡皮模式","SketchInput_UndoLabel":"撤消上壹筆劃","SketchInput_Info":"在下面寫出算式","SketchInput_SubmitLabel":"提交表達式","Teams_Solve_Waiting":"正在解決此表示式...","Teams_RelatedTo":"相關。","MathWeb_PageTopicRootTitle":"Explore Math Topics","MathWeb_PageTopicDescriptionFormat":"Learn about {0} using our free math solver with step-by-step solutions."},"zh-Hant":{"Generic_Back":"返回","MathWeb_GenericDownload":"下載","MathWeb_PageTopicRootDescription":"微軟數學面向各個年齡層級和不同類型的數學問題，利用獨有的人工智能數學解題引擎為同學提供解題幫助，並為家長和老師提供輔導依據。你只需拍照掃描一個數學公式便能得到詳細的步驟解釋和坐標圖。你還可以通過手寫輸入方便地輸入你的數學算式求解。此外你還可以利用微軟數學為你生成同類型的習題以供你練習鞏固。","MathWeb_Download_MobileHeading":"手指提示處的分步解決方案","MathWeb_Download_IOS":"下載 iOS","MathWeb_Download_Android":"下載安卓","MathWeb_Download_InstalledMessage":"已安裝的應用程式。","MathWeb_Download_Button":"下載桌面應用程式","MathWeb_Download_Unavailable":"桌面應用無法使用","MathWeb_Download_MacMessage":"目前,數學解算器桌面應用程式只能通過 MacOSX 上的 Chrome 版獲得。請在 Chrome 中打開此頁面以安裝該應用程式。","MathWeb_Download_UnknownMessage":"目前,數學解算器桌面只能通過微軟邊緣和Chrome提供。請在相容的瀏覽器中打開此頁面。","EDU_PROB_CATEGORY_LIN_EQ":"線性方程","EDU_PROB_CATEGORY_QUAD_EQ":"二次方程式","EDU_PROB_CATEGORY_ARITHMETIC":"算術","EDU_PROB_CATEGORY_TRIG":"三角學","EDU_PROB_CATEGORY_MATRIX":"矩陣","EDU_PROB_CATEGORY_SIM_EQ":"聯立方程","EDU_PROB_CATEGORY_DIFF":"微分","EDU_PROB_CATEGORY_INTEGRATION":"積分","EDU_PROB_CATEGORY_LIMITS":"限制","EDU_PROB_CATEGORY_COMPLEX":"復數","EDU_PROB_CATEGORY_LIST":"列表","NotebookTab_Example":"示例","MathWeb_GenericSolve":"Solve","MathResult_Graph_ReCenter":"重新居中","MathWeb_Keyboard_Algebra":"代數","MathWeb_Keyboard_Calculus":"微積分","MathWeb_Keyboard_List":"清單","MathWeb_Keyboard_Matrices":"矩陣","MathWeb_Keyboard_Numbers":"公尺","MathWeb_Keyboard_Operators":"運營商","MathWeb_Keyboard_Statistics":"統計","MathWeb_Keyboard_Trig":"三角","MathWeb_Keyboard_Variables":"變數","KeyboardInput_Solve":"Solve","KeyboardInput_PlaceholderText":"鍵入數學問題","MathWeb_Section_Steps_Title":"Get step-by-step explanations","MathWeb_Section_Steps_Subtitle":"See how to solve problems and show your work—plus get definitions for mathematical concepts","MathWeb_Section_Graph_Title":"Graph your math problems","MathWeb_Section_Graph_Subtitle":"Instantly graph any equation to visualize your function and understand the relationship between variables","MathWeb_Section_Practice_Title":"Practice, practice, practice","MathWeb_Section_Practice_Subtitle":"Search for additional learning materials, such as related worksheets and video tutorials","MathWeb_Section_Language_Title":"Get math help in your language","MathWeb_Section_Language_Subtitle":"Works in Spanish, Hindi, German, and more","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"嘗試數學解算器","MathAnswerView_Videos":"視頻","MathWeb_Section_Video_Subtitle":"留意新功能、提示等！","MathWeb_Title":"Get step-by-step solutions to your math problems","Results_Less":"收起{0}","Results_More":"更多{0}","MathPracticeProblem_SectionHeader":"練習","MathWeb_PopularProblems":"熱門問題","MathWeb_SolveProblemTitleFormat":"Solve {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"使用我們的免費數學求解器和逐步解決方案來解決您的數學問題。 獲取有關算術，代數，圖形計算器，三角學，微積分等的幫助。 查看Microsoft Math Solver應用程序，該應用程序為我提供了免費的分步說明，圖表等。","Generic_About":"關於","MathWeb_Topics":"主題","Generic_PrivacyPolicy":"隱私策略","Generic_TermOfUse":"服務條款","Settings_Language":"語言","MathWeb_BackToTop":"返回頂部","MathWeb_SimilarProblems":"類似問題","MathWeb_Topic_PreAlgebra":"代數前","MathWeb_Topic_PreAlgebra2":"代數前 2","MathWeb_Topic_OrderOfOperations":"動作順序","MathWeb_Topic_PrimeFactorization":"優質保理","MathWeb_Topic_Fractions":"分數","MathWeb_Topic_LCM":"最小公共倍數","MathWeb_Topic_GCF":"最大的共同因素","MathWeb_Topic_Mean":"意味 著","MathWeb_Topic_Mode":"模式","MathWeb_Topic_Exponents":"指數","MathWeb_Topic_Radicals":"基","MathWeb_Topic_MixedFractions":"混合分數","MathWeb_Topic_Algebra":"代數","MathWeb_Topic_Algebra2":"代數 2","MathWeb_Topic_CombineLikeTerms":"組合類似條款","MathWeb_Topic_SolveForVariable":"變數的求解","MathWeb_Topic_LinearEquations":"線性方程","MathWeb_Topic_QuadraticEquations":"二次方程","MathWeb_Topic_Matrices":"矩陣","MathWeb_Topic_Inequalities":"不等式","MathWeb_Topic_SystemsOfEquations":"方程式系統","MathWeb_Topic_Factor":"因素","MathWeb_Topic_Expand":"擴大","MathWeb_Topic_EvaluteFractions":"評估分數","MathWeb_Topic_Trigonometry":"三角","MathWeb_Topic_Simplify":"簡化","MathWeb_Topic_Evaluate":"評價","MathWeb_Topic_Graphs":"圖","MathWeb_Topic_SolveEquations":"求解方程","MathWeb_Topic_Calculus":"微積分","MathWeb_Topic_Derivatives":"衍生物","MathWeb_Topic_Integrals":"積分","MathWeb_Topic_Limits":"限制","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"代數計算機","MathWeb_TrigCalculator":"三角計算機","MathWeb_CalculusCalculator":"微積分計算機","MathWeb_MatrixCalculator":"矩陣計算機","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"簡體中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"產生偵測驗...","Quiz_Error_Header":"很抱歉,我們無法為提供的輸入生成測驗","Quiz_Notebook_ProblemCount_Template":"{0}類似於:","NoResults_MathSolveError":"出錯了，請重試","Quiz_Completion_Date":"完成{0}","Quiz_Result_Correct":"正確","Quiz_Total_Score_Template":"您正確回答了{0}{1}問題。","Quiz_Complete_Header":"測驗完成","Quiz_End_Finish":"完成","KeyboardInput_Undo":"Undo","MathWeb_DeleteAll":"移除所有","MathWeb_MyQuizzes":"我的測驗","MathWeb_QuizNotFound":"未找到測驗","Quiz_NextProblem":"下一個問題","Quiz_CheckProblem":"檢查","Quiz_Answer_Prompt":"選擇問題的答案:","Quiz_HintButton":"幫幫我","MathWeb_NewQuiz":"新測驗","Quiz_StartScreen_Question_Count_Template":"{0}多項選擇問題","Quiz_StartScreen_Header":"準備好測驗了嗎?","Quiz_StartScreen_Time_Template":"{0}完成","Quiz_Start":"開始","Quiz_Result_Incorrect":"錯誤","Quiz_Result_Your_Answer":"您的答案:","Quiz_Result_See_Solution":"檢視解決方案","Quiz_Entity":"測驗","MathWeb_InProgress":"正在進行中","MathWeb_ConfirmQuizDelete":"是否確實要刪除所有測驗?","Generic_Edit":"編輯","Generic_Close":"關閉","MathResult_GraphHeader":"圖表","Teams_ViewInteractiveGraph":"查看互動式圖形。","Network_Offline_Message":"妳處於脫機狀態。請檢查網絡。","NoResults_MathEquation":"檢測到此方程:","NoResults_MathError":"無法對此類方程求解或其中可能包含錯誤","NoResults_NoMath":"抱歉，我們沒有看到方程。 請確保畫面清晰完整","MathWeb_ViewSteps":"檢視解決方案步驟","Quiz_Try_Label":"嘗試測驗","MathAnswerView_Concepts":"相關概念","Generic_PDF":"PDF","MathAnswerView_Worksheets":"來自 Web 搜索的測驗題","MathAnswerView_Worksheets_Short":"測驗題","MathAnswerView_RelatedPages":"來自 Web 搜索的類似問題","Results_Items":"結果","Generic_Share":"共享","Generic_Copy":"復制","Share_CopiedToClipboard":"已復制到剪貼板","Accessibility_MathAnswerView_PoweredByBing":"由必應提供支持","MathAnswerView_PoweredByBing":"由必應提供支持","MathAnswerView_EquationIsFalse":"False","MathAnswerView_EquationIsTrue":"True","Feedback_Thanks":"謝謝!","Feedback_Title":"這些結果有用嗎?","MathAnswerView_DesktopUpsell_SectionHeader":"提供桌面版本","SketchInput_ClearLabel":"清空手寫板","SketchInput_Clear":"清空","SketchInput_PenLabel":"切換到書寫模式","SketchInput_EraserLabel":"切換到橡皮模式","SketchInput_UndoLabel":"撤消上壹筆劃","SketchInput_Info":"在下面寫出算式","SketchInput_SubmitLabel":"提交表達式","Teams_Solve_Waiting":"正在解決此表示式...","Teams_RelatedTo":"相關。","MathWeb_PageTopicRootTitle":"Explore Math Topics","MathWeb_PageTopicDescriptionFormat":"Learn about {0} using our free math solver with step-by-step solutions."},"zh":{"Generic_Back":"返回","MathWeb_GenericDownload":"下载","MathWeb_PageTopicRootDescription":"Microsoft Math Solver 应用使用高级 AI 数学求解器提供各种数学题的逐步求解帮助，包括算术、几何、三角函数、微积分、统计和其他主题。","MathWeb_Download_MobileHeading":"手指提示处的分步解决方案","MathWeb_Download_IOS":"下载 iOS","MathWeb_Download_Android":"下载安卓","MathWeb_Download_InstalledMessage":"已安装的应用程序","MathWeb_Download_Button":"下载桌面应用","MathWeb_Download_Unavailable":"桌面应用不可用","MathWeb_Download_MacMessage":"目前，数学解算器桌面应用程序只能通过 MacOSX 上的 Chrome 版获得。请在 Chrome 中打开此页面以安装该应用程序。","MathWeb_Download_UnknownMessage":"目前，数学解算器桌面只能通过微软边缘和Chrome提供。请在兼容的浏览器中打开此页面。","EDU_PROB_CATEGORY_LIN_EQ":"线性方程","EDU_PROB_CATEGORY_QUAD_EQ":"二次方程式","EDU_PROB_CATEGORY_ARITHMETIC":"算术","EDU_PROB_CATEGORY_TRIG":"三角学","EDU_PROB_CATEGORY_MATRIX":"矩阵","EDU_PROB_CATEGORY_SIM_EQ":"联立方程","EDU_PROB_CATEGORY_DIFF":"微分","EDU_PROB_CATEGORY_INTEGRATION":"积分","EDU_PROB_CATEGORY_LIMITS":"限制","EDU_PROB_CATEGORY_COMPLEX":"复数","EDU_PROB_CATEGORY_LIST":"列表","NotebookTab_Example":"示例","MathWeb_GenericSolve":"求解","MathResult_Graph_ReCenter":"重新居中","MathWeb_Keyboard_Algebra":"代数","MathWeb_Keyboard_Calculus":"微积分","MathWeb_Keyboard_List":"列表","MathWeb_Keyboard_Matrices":"矩阵","MathWeb_Keyboard_Numbers":"数字","MathWeb_Keyboard_Operators":"运营商","MathWeb_Keyboard_Statistics":"统计","MathWeb_Keyboard_Trig":"三角","MathWeb_Keyboard_Variables":"变量","KeyboardInput_Solve":"求解","KeyboardInput_PlaceholderText":"键入数学问题","MathWeb_Section_Steps_Title":"获取分步解释","MathWeb_Section_Steps_Subtitle":"查看如何解决问题并展示你的工作，并获取数学概念的定义","MathWeb_Section_Graph_Title":"画出数学题","MathWeb_Section_Graph_Subtitle":"立即画出任何公式以可视化函数并了解变量之间的关系","MathWeb_Section_Practice_Title":"练习、练习、练习","MathWeb_Section_Practice_Subtitle":"搜索其他学习材料，例如相关工作表和视频教程","MathWeb_Section_Language_Title":"获取你的语言的数学帮助","MathWeb_Section_Language_Subtitle":"工作语言为西班牙语、印地语和德语等","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"试用数学求解器","MathAnswerView_Videos":"视频","MathWeb_Section_Video_Subtitle":"留意新功能、提示等！","MathWeb_Title":"获取你的数学题的逐步求解过程","Results_Less":"收起{0}","Results_More":"更多{0}","MathPracticeProblem_SectionHeader":"练习","MathWeb_PopularProblems":"热门问题","MathWeb_SolveProblemTitleFormat":"求解 {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"使用包含逐步求解过程的免费数学求解器解算你的数学题。我们的数学求解器支持基础数学、算术、几何、三角函数和微积分等。","Generic_About":"关于","MathWeb_Topics":"主题","Generic_PrivacyPolicy":"隐私策略","Generic_TermOfUse":"服务条款","Settings_Language":"语言","MathWeb_BackToTop":"返回顶部","MathWeb_SimilarProblems":"类似问题","MathWeb_Topic_PreAlgebra":"代数前","MathWeb_Topic_PreAlgebra2":"代数前 2","MathWeb_Topic_OrderOfOperations":"操作顺序","MathWeb_Topic_PrimeFactorization":"优质保理","MathWeb_Topic_Fractions":"分数","MathWeb_Topic_LCM":"最小公共倍数","MathWeb_Topic_GCF":"最大的共同因素","MathWeb_Topic_Mean":"意味 着","MathWeb_Topic_Mode":"模式","MathWeb_Topic_Exponents":"指数","MathWeb_Topic_Radicals":"基","MathWeb_Topic_MixedFractions":"混合分数","MathWeb_Topic_Algebra":"代数","MathWeb_Topic_Algebra2":"代数 2","MathWeb_Topic_CombineLikeTerms":"组合类似条款","MathWeb_Topic_SolveForVariable":"变量的求解","MathWeb_Topic_LinearEquations":"线性方程","MathWeb_Topic_QuadraticEquations":"二次方程","MathWeb_Topic_Matrices":"矩阵","MathWeb_Topic_Inequalities":"不等式","MathWeb_Topic_SystemsOfEquations":"方程式系统","MathWeb_Topic_Factor":"因素","MathWeb_Topic_Expand":"扩大","MathWeb_Topic_EvaluteFractions":"评估分数","MathWeb_Topic_Trigonometry":"三角","MathWeb_Topic_Simplify":"简化","MathWeb_Topic_Evaluate":"评价","MathWeb_Topic_Graphs":"图","MathWeb_Topic_SolveEquations":"求解方程","MathWeb_Topic_Calculus":"微积分","MathWeb_Topic_Derivatives":"衍生物","MathWeb_Topic_Integrals":"积分","MathWeb_Topic_Limits":"限制","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"几何计算器","MathWeb_TrigCalculator":"三角函数计算器","MathWeb_CalculusCalculator":"微积分计算器","MathWeb_MatrixCalculator":"矩阵计算器","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"正在生成测验...","Quiz_Error_Header":"对不起，我们无法根据此题目类型生成测验。请尝试其他问题类型。","Quiz_Notebook_ProblemCount_Template":"{0} 道与此类似的题目:","NoResults_MathSolveError":"出错了，请重试","Quiz_Completion_Date":"完成日期 {0}","Quiz_Result_Correct":"正确","Quiz_Total_Score_Template":"你答对了 {0} 题，共 {1} 题。","Quiz_Complete_Header":"测验已完成","Quiz_End_Finish":"完成","KeyboardInput_Undo":"撤消","MathWeb_DeleteAll":"删除所有","MathWeb_MyQuizzes":"我的测验","MathWeb_QuizNotFound":"未找到测验","Quiz_NextProblem":"下一题","Quiz_CheckProblem":"检查","Quiz_Answer_Prompt":"选择题目答案:","Quiz_HintButton":"需要帮助","MathWeb_NewQuiz":"新测验","Quiz_StartScreen_Question_Count_Template":"{0} 道多选题","Quiz_StartScreen_Header":"准备好参加测验了吗?","Quiz_StartScreen_Time_Template":"需要 {0} 分钟完成","Quiz_Start":"开始","Quiz_Result_Incorrect":"错误","Quiz_Result_Your_Answer":"你的答案:","Quiz_Result_See_Solution":"查看答案","Quiz_Entity":"测验","MathWeb_InProgress":"正在进行中","MathWeb_ConfirmQuizDelete":"是否确实要删除所有测验？","Generic_Edit":"编辑","Generic_Close":"关闭","MathResult_GraphHeader":"图表","Teams_ViewInteractiveGraph":"查看交互式图形","Network_Offline_Message":"你处于脱机状态。请检查网络。","NoResults_MathEquation":"检测到此方程:","NoResults_MathError":"无法对此类方程求解或其中可能包含错误","NoResults_NoMath":"抱歉，我们没有看到方程。 请确保画面清晰完整","MathWeb_ViewSteps":"查看解决方案步骤","Quiz_Try_Label":"尝试测验","MathAnswerView_Concepts":"相关概念","Generic_PDF":"PDF","MathAnswerView_Worksheets":"来自 Web 搜索的练习题","MathAnswerView_Worksheets_Short":"练习题","MathAnswerView_RelatedPages":"来自 Web 搜索的类似问题","Results_Items":"结果","Generic_Share":"共享","Generic_Copy":"复制","Share_CopiedToClipboard":"已复制到剪贴板","Accessibility_MathAnswerView_PoweredByBing":"由必应提供支持","MathAnswerView_PoweredByBing":"由必应提供支持","MathAnswerView_EquationIsFalse":"不成立","MathAnswerView_EquationIsTrue":"成立","Feedback_Thanks":"谢谢!","Feedback_Title":"这些结果有用吗?","MathAnswerView_DesktopUpsell_SectionHeader":"提供桌面版本","SketchInput_ClearLabel":"清空手写板","SketchInput_Clear":"清空","SketchInput_PenLabel":"切换到书写模式","SketchInput_EraserLabel":"切换到橡皮模式","SketchInput_UndoLabel":"撤消上一笔划","SketchInput_Info":"在下面写出算式","SketchInput_SubmitLabel":"提交表达式","Teams_Solve_Waiting":"正在解决此表达式...","Teams_RelatedTo":"相关","MathWeb_PageTopicRootTitle":"探索数学主题","MathWeb_PageTopicDescriptionFormat":"使用包含逐步求解过程的免费数学求解器，了解有关{0}的更多信息。"},"ms":{"Generic_Back":"Kembali","MathWeb_GenericDownload":"Muat turun","MathWeb_PageTopicRootDescription":"Aplikasi Penyelesai Matematik Microsoft memberikan bantuan langkah demi langkah dengan pelbagai masalah termasuk aritmetik, algebra, trigonometri, kalkulus, statistik dan topik-topik lain menggunakan penyelesai matematik AI lanjutan.","MathWeb_Download_MobileHeading":"Penyelesaian langkah demi langkah pada Petua jari anda","MathWeb_Download_IOS":"Muat turun untuk iOS","MathWeb_Download_Android":"Muat turun untuk Android","MathWeb_Download_InstalledMessage":"Apl telah dipasang","MathWeb_Download_Button":"Muat turun aplikasi desktop","MathWeb_Download_Unavailable":"Apl desktop tidak tersedia","MathWeb_Download_MacMessage":"Pada masa ini, aplikasi desktop Solver matematik hanya boleh didapati melalui Chrome pada MacOSX. Sila Buka halaman ini dalam Chrome untuk memasang apl.","MathWeb_Download_UnknownMessage":"Pada masa ini, desktop Solver matematik hanya boleh didapati melalui Microsoft Edge dan Chrome. Sila Buka halaman ini dalam pelayar yang serasi.","EDU_PROB_CATEGORY_LIN_EQ":"Persamaan linear","EDU_PROB_CATEGORY_QUAD_EQ":"Persamaan kuadratik","EDU_PROB_CATEGORY_ARITHMETIC":"Aritmetik","EDU_PROB_CATEGORY_TRIG":"Trigonometri","EDU_PROB_CATEGORY_MATRIX":"Matriks","EDU_PROB_CATEGORY_SIM_EQ":"Persamaan serentak","EDU_PROB_CATEGORY_DIFF":"Pembezaan","EDU_PROB_CATEGORY_INTEGRATION":"Pengamiran","EDU_PROB_CATEGORY_LIMITS":"Had","EDU_PROB_CATEGORY_COMPLEX":"Nombor kompleks","EDU_PROB_CATEGORY_LIST":"Senarai","NotebookTab_Example":"Contoh","MathWeb_GenericSolve":"Selesaikan","MathResult_Graph_ReCenter":"Tengah Semula","MathWeb_Keyboard_Algebra":"algebra","MathWeb_Keyboard_Calculus":"Kalkulus","MathWeb_Keyboard_List":"Senarai","MathWeb_Keyboard_Matrices":"Matriks","MathWeb_Keyboard_Numbers":"Nombor","MathWeb_Keyboard_Operators":"Pengendali","MathWeb_Keyboard_Statistics":"Statistik","MathWeb_Keyboard_Trig":"trigonometri","MathWeb_Keyboard_Variables":"Pembolehubah","KeyboardInput_Solve":"Selesaikan","KeyboardInput_PlaceholderText":"Taipkan masalah matematik","MathWeb_Section_Steps_Title":"Dapatkan penerangan langkah demi langkah","MathWeb_Section_Steps_Subtitle":"Lihat cara menyelesaikan masalah dan tunjukkan kerja anda, serta dapatkan definisi untuk konsep matematik","MathWeb_Section_Graph_Title":"Grafkan masalah matematik anda","MathWeb_Section_Graph_Subtitle":"Grafkan dengan segera sebarang persamaan untuk memvisualkan fungsi anda dan memahami perhubungan antara pemboleh ubah","MathWeb_Section_Practice_Title":"Berlatih, berlatih, berlatih","MathWeb_Section_Practice_Subtitle":"Cari bahan pembelajaran tambahan, seperti lembaran kerja berkaitan dan tutorial video","MathWeb_Section_Language_Title":"Dapatkan bantuan matematik dalam bahasa anda","MathWeb_Section_Language_Subtitle":"Kerja dalam bahasa Sepanyol, Hindu, Jerman dan banyak lagi","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Cuba Penyelesai Matematik","MathAnswerView_Videos":"Video","MathWeb_Section_Video_Subtitle":"Watch untuk ciri baru, Tips dan banyak lagi!","MathWeb_Title":"Dapatkan penyelesaian langkah demi langkah untuk masalah matematik anda","Results_Less":"Kurang {0}","Results_More":"Lagi {0}","MathPracticeProblem_SectionHeader":"Latihan","MathWeb_PopularProblems":"Masalah popular","MathWeb_SolveProblemTitleFormat":"Selesaikan {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Selesaikan masalah matematik anda menggunakan penyelesai matematik percuma kami yang mempunyai penyelesaian langkah demi langkah. Penyelesai matematik kami menyokong matematik asas, praalgebra, algebra, trigonometri, kalkulus dan banyak lagi.","Generic_About":"Tentang","MathWeb_Topics":"Topik","Generic_PrivacyPolicy":"Dasar Privasi","Generic_TermOfUse":"Terma perkhidmatan","Settings_Language":"Bahasa","MathWeb_BackToTop":"Kembali ke atas","MathWeb_SimilarProblems":"Masalah yang sama","MathWeb_Topic_PreAlgebra":"Pra-algebra","MathWeb_Topic_PreAlgebra2":"Pra-algebra 2","MathWeb_Topic_OrderOfOperations":"Aturan operasi","MathWeb_Topic_PrimeFactorization":"Perdana Factorization","MathWeb_Topic_Fractions":"Pecahan","MathWeb_Topic_LCM":"Paling biasa berganda","MathWeb_Topic_GCF":"Faktor umum terhebat","MathWeb_Topic_Mean":"Bermakna","MathWeb_Topic_Mode":"Mod","MathWeb_Topic_Exponents":"Atlet","MathWeb_Topic_Radicals":"Radikal","MathWeb_Topic_MixedFractions":"Pecahan campuran","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Gabungkan seperti terma","MathWeb_Topic_SolveForVariable":"Selesaikan untuk pemboleh ubah","MathWeb_Topic_LinearEquations":"Persamaan linear","MathWeb_Topic_QuadraticEquations":"Persamaan quadatik","MathWeb_Topic_Matrices":"Matriks","MathWeb_Topic_Inequalities":"Ketaksamaan","MathWeb_Topic_SystemsOfEquations":"Sistem persamaan","MathWeb_Topic_Factor":"Faktor","MathWeb_Topic_Expand":"Mengembangkan","MathWeb_Topic_EvaluteFractions":"Menilai pecahan","MathWeb_Topic_Trigonometry":"Trigonometri","MathWeb_Topic_Simplify":"Memudahkan","MathWeb_Topic_Evaluate":"Menilai","MathWeb_Topic_Graphs":"Graf","MathWeb_Topic_SolveEquations":"Selesaikan persamaan","MathWeb_Topic_Calculus":"Kalkulus","MathWeb_Topic_Derivatives":"Derivatif","MathWeb_Topic_Integrals":"Kamiran","MathWeb_Topic_Limits":"Had","MathWeb_CalculatorTitle":"{0} | Penyelesai Matematik Microsoft","MathWeb_AlgebraCalculator":"Kalkulator Algebra","MathWeb_TrigCalculator":"Kalkulator Trigonometri","MathWeb_CalculusCalculator":"Kalkulator Kalkulus","MathWeb_MatrixCalculator":"Matriks Kalkulator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Menjana kuiz...","Quiz_Error_Header":"Maaf, kami tidak dapat menjana kuiz berdasarkan jenis masalah tersebut. Sila cuba jenis masalah lain.","Quiz_Notebook_ProblemCount_Template":"{0} masalah yang serupa dengan:","NoResults_MathSolveError":"Ada sesuatu yang tidak kena, sila cuba lagi","Quiz_Completion_Date":"Selesai {0}","Quiz_Result_Correct":"Betul","Quiz_Total_Score_Template":"Anda telah menjawab {0} daripada {1} soalan dengan betul.","Quiz_Complete_Header":"Kuiz selesai","Quiz_End_Finish":"Selesai","KeyboardInput_Undo":"Buat asal","MathWeb_DeleteAll":"Hapuskan semua","MathWeb_MyQuizzes":"Kuiz saya","MathWeb_QuizNotFound":"Kuiz tidak dijumpai","Quiz_NextProblem":"Masalah Seterusnya","Quiz_CheckProblem":"Semak","Quiz_Answer_Prompt":"Pilih jawapan untuk masalah:","Quiz_HintButton":"Bantu saya","MathWeb_NewQuiz":"Kuiz baru","Quiz_StartScreen_Question_Count_Template":"{0} soalan aneka pilihan","Quiz_StartScreen_Header":"Bersedia untuk kuiz?","Quiz_StartScreen_Time_Template":"{0} minit untuk menyelesaikan","Quiz_Start":"Mula","Quiz_Result_Incorrect":"Tidak betul","Quiz_Result_Your_Answer":"Jawapan anda:","Quiz_Result_See_Solution":"Lihat penyelesaian","Quiz_Entity":"Kuiz","MathWeb_InProgress":"Dalam kemajuan","MathWeb_ConfirmQuizDelete":"Adakah anda pasti hendak menghapuskan semua kuiz?","Generic_Edit":"Edit","Generic_Close":"Tutup","MathResult_GraphHeader":"Graf","Teams_ViewInteractiveGraph":"Lihat graf interaktif","Network_Offline_Message":"Anda di luar talian. Sila semak rangkaian anda.","NoResults_MathEquation":"Telah mengesan persamaan ini:","NoResults_MathError":"Kami tidak dapat menyelesaikan persamaan jenis itu atau ia mungkin mengandungi ralat","NoResults_NoMath":"Maaf, kami tidak nampak persamaan. Pastikan ia jelas dan sepenuhnya di dalam bingkai","MathWeb_ViewSteps":"Lihat langkah penyelesaian","Quiz_Try_Label":"Cuba kuiz","MathAnswerView_Concepts":"Konsep Berkaitan","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Lembaran kerja dari Carian Web","MathAnswerView_Worksheets_Short":"Soalan amalan","MathAnswerView_RelatedPages":"Masalah Sama dari Carian Web","Results_Items":"Item","Generic_Share":"Kongsi","Generic_Copy":"Salin","Share_CopiedToClipboard":"Disalin ke papan klip","Accessibility_MathAnswerView_PoweredByBing":"Dikuasakan oleh Bing","MathAnswerView_PoweredByBing":"Dikuasakan oleh","MathAnswerView_EquationIsFalse":"Palsu","MathAnswerView_EquationIsTrue":"Benar","Feedback_Thanks":"Terima kasih!","Feedback_Title":"Adakah keputusan ini berguna?","MathAnswerView_DesktopUpsell_SectionHeader":"Versi desktop yang ada","SketchInput_ClearLabel":"Kosongkan lakaran","SketchInput_Clear":"KSG","SketchInput_PenLabel":"Gunakan pen","SketchInput_EraserLabel":"Gunakan pemadam","SketchInput_UndoLabel":"Buat asal strok terakhir","SketchInput_Info":"Lukiskan masalah di bawah","SketchInput_SubmitLabel":"Serahkan ungkapan","Teams_Solve_Waiting":"Menyelesaikan Ungkapan ini...","Teams_RelatedTo":"Berkaitan dengan","MathWeb_PageTopicRootTitle":"Terokai Topik Matematik","MathWeb_PageTopicDescriptionFormat":"Ketahui tentang {0} menggunakan penyelesai matematik percuma kami yang mempunyai penyelesaian langkah demi langkah."},"in":{"Generic_Back":"Kembali","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"Aplikasi Microsoft Math Solver memberikan bantuan langkah demi langkah dengan berbagai soal termasuk aritmetika, aljabar, trigonometri, kalkulus, statistik, dan topik lainnya menggunakan pemecah soal matematika yang didukung AI canggih.","MathWeb_Download_MobileHeading":"Solusi langkah demi langkah di ujung jari Anda","MathWeb_Download_IOS":"Unduh untuk iOS","MathWeb_Download_Android":"Unduh untuk Android","MathWeb_Download_InstalledMessage":"App sudah terinstal","MathWeb_Download_Button":"Unduh aplikasi desktop","MathWeb_Download_Unavailable":"Aplikasi desktop tidak tersedia","MathWeb_Download_MacMessage":"Saat ini, Math Solver aplikasi desktop hanya tersedia melalui Chrome pada MacOSX. Silakan buka halaman ini di Chrome untuk menginstal aplikasi.","MathWeb_Download_UnknownMessage":"Saat ini, desktop Solver matematika hanya tersedia melalui Microsoft Edge dan Chrome. Silakan buka halaman ini di browser yang kompatibel.","EDU_PROB_CATEGORY_LIN_EQ":"Persamaan linear","EDU_PROB_CATEGORY_QUAD_EQ":"Persamaan kuadrat","EDU_PROB_CATEGORY_ARITHMETIC":"Aritmetika","EDU_PROB_CATEGORY_TRIG":"Trigonometri","EDU_PROB_CATEGORY_MATRIX":"Matriks","EDU_PROB_CATEGORY_SIM_EQ":"Persamaan simultan","EDU_PROB_CATEGORY_DIFF":"Diferensial","EDU_PROB_CATEGORY_INTEGRATION":"Integral","EDU_PROB_CATEGORY_LIMITS":"Limit","EDU_PROB_CATEGORY_COMPLEX":"Bilangan kompleks","EDU_PROB_CATEGORY_LIST":"Daftar","NotebookTab_Example":"Contoh","MathWeb_GenericSolve":"Selesaikan","MathResult_Graph_ReCenter":"Tengahkan Ulang","MathWeb_Keyboard_Algebra":"Aljabar","MathWeb_Keyboard_Calculus":"Kalkulus","MathWeb_Keyboard_List":"Daftar","MathWeb_Keyboard_Matrices":"Matriks","MathWeb_Keyboard_Numbers":"Nomor","MathWeb_Keyboard_Operators":"Operator","MathWeb_Keyboard_Statistics":"Statistik","MathWeb_Keyboard_Trig":"Trigonometri","MathWeb_Keyboard_Variables":"Variabel","KeyboardInput_Solve":"Selesaikan","KeyboardInput_PlaceholderText":"Ketik soal matematika","MathWeb_Section_Steps_Title":"Dapatkan penjelasan langkah demi langkah","MathWeb_Section_Steps_Subtitle":"Lihat cara menyelesaikan soal dan tampilkan hasil kerja Anda, serta dapatkan definisi konsep matematika","MathWeb_Section_Graph_Title":"Buat grafik soal matematika Anda","MathWeb_Section_Graph_Subtitle":"Buat grafik persamaan apa pun secara instan untuk memvisualisasikan fungsi dan memahami hubungan antara variabel","MathWeb_Section_Practice_Title":"Latihan, latihan, latihan","MathWeb_Section_Practice_Subtitle":"Cari materi pembelajaran tambahan, seperti lembar kerja dan tutorial video terkait","MathWeb_Section_Language_Title":"Dapatkan bantuan matematika dalam bahasa Anda","MathWeb_Section_Language_Subtitle":"Dapat digunakan dalam bahasa Spanyol, Hindi, Jerman, dan lainnya","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Coba Math Solver","MathAnswerView_Videos":"Video","MathWeb_Section_Video_Subtitle":"Perhatikan fitur baru, Tips dan banyak lagi!","MathWeb_Title":"Dapatkan solusi langkah demi langkah untuk soal matematika Anda","Results_Less":"Lebih sedikit {0}","Results_More":"Lebih banyak {0}","MathPracticeProblem_SectionHeader":"Berlatih","MathWeb_PopularProblems":"Masalah populer","MathWeb_SolveProblemTitleFormat":"Selesaikan {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Selesaikan soal matematika Anda menggunakan pemecah soal matematika gratis kami dengan solusi langkah demi langkah. Pemecah soal matematika kami mendukung matematika dasar, pra-ajabar, aljabar, trigonometri, kalkulus, dan lainnya.","Generic_About":"Tentang","MathWeb_Topics":"Topik","Generic_PrivacyPolicy":"Kebijakan Privasi","Generic_TermOfUse":"Ketentuan layanan","Settings_Language":"Bahasa","MathWeb_BackToTop":"Kembali ke atas","MathWeb_SimilarProblems":"Masalah serupa","MathWeb_Topic_PreAlgebra":"Pra-Aljabar","MathWeb_Topic_PreAlgebra2":"Pra-Aljabar 2","MathWeb_Topic_OrderOfOperations":"Urutan operasi","MathWeb_Topic_PrimeFactorization":"Utama faktorisasi","MathWeb_Topic_Fractions":"Pecahan","MathWeb_Topic_LCM":"Sedikit umum Multiple","MathWeb_Topic_GCF":"Faktor umum terbesar","MathWeb_Topic_Mean":"Berarti","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Eksponen","MathWeb_Topic_Radicals":"Radikal","MathWeb_Topic_MixedFractions":"Pecahan campuran","MathWeb_Topic_Algebra":"Aljabar","MathWeb_Topic_Algebra2":"Aljabar 2","MathWeb_Topic_CombineLikeTerms":"Kombinasikan seperti ketentuan","MathWeb_Topic_SolveForVariable":"Memecahkan untuk variabel","MathWeb_Topic_LinearEquations":"Persamaan Linear","MathWeb_Topic_QuadraticEquations":"Persamaan kuadrat","MathWeb_Topic_Matrices":"Matriks","MathWeb_Topic_Inequalities":"Ketidaksetaraan","MathWeb_Topic_SystemsOfEquations":"Sistem persamaan","MathWeb_Topic_Factor":"Faktor","MathWeb_Topic_Expand":"Memperluas","MathWeb_Topic_EvaluteFractions":"Evaluasi pecahan","MathWeb_Topic_Trigonometry":"Trigonometri","MathWeb_Topic_Simplify":"Menyederhanakan","MathWeb_Topic_Evaluate":"Mengevaluasi","MathWeb_Topic_Graphs":"Grafik","MathWeb_Topic_SolveEquations":"Memecahkan persamaan","MathWeb_Topic_Calculus":"Kalkulus","MathWeb_Topic_Derivatives":"Derivatif","MathWeb_Topic_Integrals":"Integral","MathWeb_Topic_Limits":"Batas","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Kalkulator Aljabar","MathWeb_TrigCalculator":"Kalkulator Trigonometri","MathWeb_CalculusCalculator":"Kalkulator Kalkulus","MathWeb_MatrixCalculator":"Matriks Kalkulator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Membuat kuis...","Quiz_Error_Header":"Maaf, kami tidak dapat membuat kuis berdasarkan jenis soal tersebut. Coba jenis soal lainnya.","Quiz_Notebook_ProblemCount_Template":"{0} soal serupa dengan:","NoResults_MathSolveError":"Terjadi kesalahan, coba lagi","Quiz_Completion_Date":"Diselesaikan {0}","Quiz_Result_Correct":"Benar","Quiz_Total_Score_Template":"Anda menjawab {0} dari {1} pertanyaan dengan benar.","Quiz_Complete_Header":"Kuis selesai","Quiz_End_Finish":"Selesai","KeyboardInput_Undo":"Batalkan","MathWeb_DeleteAll":"Hapus semua","MathWeb_MyQuizzes":"Kuis saya","MathWeb_QuizNotFound":"Kuis tidak ditemukan","Quiz_NextProblem":"Soal Berikutnya","Quiz_CheckProblem":"Periksa","Quiz_Answer_Prompt":"Pilih jawaban untuk soal:","Quiz_HintButton":"Bantu saya","MathWeb_NewQuiz":"Kuis baru","Quiz_StartScreen_Question_Count_Template":"{0} pertanyaan pilihan ganda","Quiz_StartScreen_Header":"Siap untuk kuis?","Quiz_StartScreen_Time_Template":"{0} menit untuk menyelesaikan","Quiz_Start":"Mulai","Quiz_Result_Incorrect":"Salah","Quiz_Result_Your_Answer":"Jawaban Anda:","Quiz_Result_See_Solution":"Lihat solusi","Quiz_Entity":"Kuis","MathWeb_InProgress":"Sedang berlangsung","MathWeb_ConfirmQuizDelete":"Apakah Anda yakin ingin menghapus semua kuis?","Generic_Edit":"Edit","Generic_Close":"Tutup","MathResult_GraphHeader":"Grafik","Teams_ViewInteractiveGraph":"Lihat grafik interaktif","Network_Offline_Message":"Anda sedang offline. Silakan periksa jaringan.","NoResults_MathEquation":"Mendeteksi persamaan ini:","NoResults_MathError":"Kami tidak dapat menyelesaikan jenis persamaan tersebut atau persamaan mungkin berisi kesalahan","NoResults_NoMath":"Maaf, kami tidak melihat persamaan. Pastikan gambar jelas dan sepenuhnya berada dalam bingkai","MathWeb_ViewSteps":"Lihat langkah solusi","Quiz_Try_Label":"Coba kuis","MathAnswerView_Concepts":"Konsep Terkait","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Lembar kerja dari Pencarian Web","MathAnswerView_Worksheets_Short":"Berlatih pertanyaan","MathAnswerView_RelatedPages":"Soal yang Mirip dari Pencarian Web","Results_Items":"Item","Generic_Share":"Bagikan","Generic_Copy":"Salin","Share_CopiedToClipboard":"Disalin ke clipboard","Accessibility_MathAnswerView_PoweredByBing":"Didukung oleh Bing","MathAnswerView_PoweredByBing":"Didukung oleh","MathAnswerView_EquationIsFalse":"Salah","MathAnswerView_EquationIsTrue":"Benar","Feedback_Thanks":"Terima kasih!","Feedback_Title":"Apakah hasil ini bermanfaat?","MathAnswerView_DesktopUpsell_SectionHeader":"Versi desktop tersedia","SketchInput_ClearLabel":"Hapus sketsa","SketchInput_Clear":"CLR","SketchInput_PenLabel":"Gunakan pena","SketchInput_EraserLabel":"Gunakan penghapus","SketchInput_UndoLabel":"Batalkan goresan terakhir","SketchInput_Info":"Gambar soal di bawah","SketchInput_SubmitLabel":"Kirim ekspresi","Teams_Solve_Waiting":"Memecahkan ekspresi ini...","Teams_RelatedTo":"Terkait untuk","MathWeb_PageTopicRootTitle":"Jelajahi Topik Matematika","MathWeb_PageTopicDescriptionFormat":"Pelajari tentang {0} dengan pemecah soal matematika gratis yang disertai solusi langkah demi langkah."},"id":{"Generic_Back":"Kembali","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"Aplikasi Microsoft Math Solver memberikan bantuan langkah demi langkah dengan berbagai soal termasuk aritmetika, aljabar, trigonometri, kalkulus, statistik, dan topik lainnya menggunakan pemecah soal matematika yang didukung AI canggih.","MathWeb_Download_MobileHeading":"Solusi langkah demi langkah di ujung jari Anda","MathWeb_Download_IOS":"Unduh untuk iOS","MathWeb_Download_Android":"Unduh untuk Android","MathWeb_Download_InstalledMessage":"App sudah terinstal","MathWeb_Download_Button":"Unduh aplikasi desktop","MathWeb_Download_Unavailable":"Aplikasi desktop tidak tersedia","MathWeb_Download_MacMessage":"Saat ini, Math Solver aplikasi desktop hanya tersedia melalui Chrome pada MacOSX. Silakan buka halaman ini di Chrome untuk menginstal aplikasi.","MathWeb_Download_UnknownMessage":"Saat ini, desktop Solver matematika hanya tersedia melalui Microsoft Edge dan Chrome. Silakan buka halaman ini di browser yang kompatibel.","EDU_PROB_CATEGORY_LIN_EQ":"Persamaan linear","EDU_PROB_CATEGORY_QUAD_EQ":"Persamaan kuadrat","EDU_PROB_CATEGORY_ARITHMETIC":"Aritmetika","EDU_PROB_CATEGORY_TRIG":"Trigonometri","EDU_PROB_CATEGORY_MATRIX":"Matriks","EDU_PROB_CATEGORY_SIM_EQ":"Persamaan simultan","EDU_PROB_CATEGORY_DIFF":"Diferensial","EDU_PROB_CATEGORY_INTEGRATION":"Integral","EDU_PROB_CATEGORY_LIMITS":"Limit","EDU_PROB_CATEGORY_COMPLEX":"Bilangan kompleks","EDU_PROB_CATEGORY_LIST":"Daftar","NotebookTab_Example":"Contoh","MathWeb_GenericSolve":"Selesaikan","MathResult_Graph_ReCenter":"Tengahkan Ulang","MathWeb_Keyboard_Algebra":"Aljabar","MathWeb_Keyboard_Calculus":"Kalkulus","MathWeb_Keyboard_List":"Daftar","MathWeb_Keyboard_Matrices":"Matriks","MathWeb_Keyboard_Numbers":"Nomor","MathWeb_Keyboard_Operators":"Operator","MathWeb_Keyboard_Statistics":"Statistik","MathWeb_Keyboard_Trig":"Trigonometri","MathWeb_Keyboard_Variables":"Variabel","KeyboardInput_Solve":"Selesaikan","KeyboardInput_PlaceholderText":"Ketik soal matematika","MathWeb_Section_Steps_Title":"Dapatkan penjelasan langkah demi langkah","MathWeb_Section_Steps_Subtitle":"Lihat cara menyelesaikan soal dan tampilkan hasil kerja Anda, serta dapatkan definisi konsep matematika","MathWeb_Section_Graph_Title":"Buat grafik soal matematika Anda","MathWeb_Section_Graph_Subtitle":"Buat grafik persamaan apa pun secara instan untuk memvisualisasikan fungsi dan memahami hubungan antara variabel","MathWeb_Section_Practice_Title":"Latihan, latihan, latihan","MathWeb_Section_Practice_Subtitle":"Cari materi pembelajaran tambahan, seperti lembar kerja dan tutorial video terkait","MathWeb_Section_Language_Title":"Dapatkan bantuan matematika dalam bahasa Anda","MathWeb_Section_Language_Subtitle":"Dapat digunakan dalam bahasa Spanyol, Hindi, Jerman, dan lainnya","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Coba Math Solver","MathAnswerView_Videos":"Video","MathWeb_Section_Video_Subtitle":"Perhatikan fitur baru, Tips dan banyak lagi!","MathWeb_Title":"Dapatkan solusi langkah demi langkah untuk soal matematika Anda","Results_Less":"Lebih sedikit {0}","Results_More":"Lebih banyak {0}","MathPracticeProblem_SectionHeader":"Berlatih","MathWeb_PopularProblems":"Masalah populer","MathWeb_SolveProblemTitleFormat":"Selesaikan {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Selesaikan soal matematika Anda menggunakan pemecah soal matematika gratis kami dengan solusi langkah demi langkah. Pemecah soal matematika kami mendukung matematika dasar, pra-ajabar, aljabar, trigonometri, kalkulus, dan lainnya.","Generic_About":"Tentang","MathWeb_Topics":"Topik","Generic_PrivacyPolicy":"Kebijakan Privasi","Generic_TermOfUse":"Ketentuan layanan","Settings_Language":"Bahasa","MathWeb_BackToTop":"Kembali ke atas","MathWeb_SimilarProblems":"Masalah serupa","MathWeb_Topic_PreAlgebra":"Pra-Aljabar","MathWeb_Topic_PreAlgebra2":"Pra-Aljabar 2","MathWeb_Topic_OrderOfOperations":"Urutan operasi","MathWeb_Topic_PrimeFactorization":"Utama faktorisasi","MathWeb_Topic_Fractions":"Pecahan","MathWeb_Topic_LCM":"Sedikit umum Multiple","MathWeb_Topic_GCF":"Faktor umum terbesar","MathWeb_Topic_Mean":"Berarti","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Eksponen","MathWeb_Topic_Radicals":"Radikal","MathWeb_Topic_MixedFractions":"Pecahan campuran","MathWeb_Topic_Algebra":"Aljabar","MathWeb_Topic_Algebra2":"Aljabar 2","MathWeb_Topic_CombineLikeTerms":"Kombinasikan seperti ketentuan","MathWeb_Topic_SolveForVariable":"Memecahkan untuk variabel","MathWeb_Topic_LinearEquations":"Persamaan Linear","MathWeb_Topic_QuadraticEquations":"Persamaan kuadrat","MathWeb_Topic_Matrices":"Matriks","MathWeb_Topic_Inequalities":"Ketidaksetaraan","MathWeb_Topic_SystemsOfEquations":"Sistem persamaan","MathWeb_Topic_Factor":"Faktor","MathWeb_Topic_Expand":"Memperluas","MathWeb_Topic_EvaluteFractions":"Evaluasi pecahan","MathWeb_Topic_Trigonometry":"Trigonometri","MathWeb_Topic_Simplify":"Menyederhanakan","MathWeb_Topic_Evaluate":"Mengevaluasi","MathWeb_Topic_Graphs":"Grafik","MathWeb_Topic_SolveEquations":"Memecahkan persamaan","MathWeb_Topic_Calculus":"Kalkulus","MathWeb_Topic_Derivatives":"Derivatif","MathWeb_Topic_Integrals":"Integral","MathWeb_Topic_Limits":"Batas","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Kalkulator Aljabar","MathWeb_TrigCalculator":"Kalkulator Trigonometri","MathWeb_CalculusCalculator":"Kalkulator Kalkulus","MathWeb_MatrixCalculator":"Matriks Kalkulator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Membuat kuis...","Quiz_Error_Header":"Maaf, kami tidak dapat membuat kuis berdasarkan jenis soal tersebut. Coba jenis soal lainnya.","Quiz_Notebook_ProblemCount_Template":"{0} soal serupa dengan:","NoResults_MathSolveError":"Terjadi kesalahan, coba lagi","Quiz_Completion_Date":"Diselesaikan {0}","Quiz_Result_Correct":"Benar","Quiz_Total_Score_Template":"Anda menjawab {0} dari {1} pertanyaan dengan benar.","Quiz_Complete_Header":"Kuis selesai","Quiz_End_Finish":"Selesai","KeyboardInput_Undo":"Batalkan","MathWeb_DeleteAll":"Hapus semua","MathWeb_MyQuizzes":"Kuis saya","MathWeb_QuizNotFound":"Kuis tidak ditemukan","Quiz_NextProblem":"Soal Berikutnya","Quiz_CheckProblem":"Periksa","Quiz_Answer_Prompt":"Pilih jawaban untuk soal:","Quiz_HintButton":"Bantu saya","MathWeb_NewQuiz":"Kuis baru","Quiz_StartScreen_Question_Count_Template":"{0} pertanyaan pilihan ganda","Quiz_StartScreen_Header":"Siap untuk kuis?","Quiz_StartScreen_Time_Template":"{0} menit untuk menyelesaikan","Quiz_Start":"Mulai","Quiz_Result_Incorrect":"Salah","Quiz_Result_Your_Answer":"Jawaban Anda:","Quiz_Result_See_Solution":"Lihat solusi","Quiz_Entity":"Kuis","MathWeb_InProgress":"Sedang berlangsung","MathWeb_ConfirmQuizDelete":"Apakah Anda yakin ingin menghapus semua kuis?","Generic_Edit":"Edit","Generic_Close":"Tutup","MathResult_GraphHeader":"Grafik","Teams_ViewInteractiveGraph":"Lihat grafik interaktif","Network_Offline_Message":"Anda sedang offline. Silakan periksa jaringan.","NoResults_MathEquation":"Mendeteksi persamaan ini:","NoResults_MathError":"Kami tidak dapat menyelesaikan jenis persamaan tersebut atau persamaan mungkin berisi kesalahan","NoResults_NoMath":"Maaf, kami tidak melihat persamaan. Pastikan gambar jelas dan sepenuhnya berada dalam bingkai","MathWeb_ViewSteps":"Lihat langkah solusi","Quiz_Try_Label":"Coba kuis","MathAnswerView_Concepts":"Konsep Terkait","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Lembar kerja dari Pencarian Web","MathAnswerView_Worksheets_Short":"Berlatih pertanyaan","MathAnswerView_RelatedPages":"Soal yang Mirip dari Pencarian Web","Results_Items":"Item","Generic_Share":"Bagikan","Generic_Copy":"Salin","Share_CopiedToClipboard":"Disalin ke clipboard","Accessibility_MathAnswerView_PoweredByBing":"Didukung oleh Bing","MathAnswerView_PoweredByBing":"Didukung oleh","MathAnswerView_EquationIsFalse":"Salah","MathAnswerView_EquationIsTrue":"Benar","Feedback_Thanks":"Terima kasih!","Feedback_Title":"Apakah hasil ini bermanfaat?","MathAnswerView_DesktopUpsell_SectionHeader":"Versi desktop tersedia","SketchInput_ClearLabel":"Hapus sketsa","SketchInput_Clear":"CLR","SketchInput_PenLabel":"Gunakan pena","SketchInput_EraserLabel":"Gunakan penghapus","SketchInput_UndoLabel":"Batalkan goresan terakhir","SketchInput_Info":"Gambar soal di bawah","SketchInput_SubmitLabel":"Kirim ekspresi","Teams_Solve_Waiting":"Memecahkan ekspresi ini...","Teams_RelatedTo":"Terkait untuk","MathWeb_PageTopicRootTitle":"Jelajahi Topik Matematika","MathWeb_PageTopicDescriptionFormat":"Pelajari tentang {0} dengan pemecah soal matematika gratis yang disertai solusi langkah demi langkah."},"ar":{"Generic_Back":"عودة","MathWeb_GenericDownload":"تحميل","MathWeb_PageTopicRootDescription":"يوفر تطبيق حلّال الرياضيات من Microsoft مساعدة مُفصلة خطوة بخطوة للعديد من المشاكل بما فيها الحساب والجبر وحساب المثلثات والتفاضل والتكامل والإحصاء وموضوعات أخرى باستخدام حلّال رياضيات متقدم مدار بالذكاء الاصطناعي.","MathWeb_Download_MobileHeading":"حلول خطوة بخطوة في نصائح إصبعك","MathWeb_Download_IOS":"تحميل لنظام التشغيل iOS","MathWeb_Download_Android":"تحميل لالروبوت","MathWeb_Download_InstalledMessage":"التطبيق مثبت بالفعل","MathWeb_Download_Button":"تنزيل تطبيق سطح المكتب","MathWeb_Download_Unavailable":"تطبيق سطح المكتب غير متوفر","MathWeb_Download_MacMessage":"حاليًا ، يتوفر تطبيق سطح المكتب Math Solver فقط عبر Chrome على MacOSX. يرجى فتح هذه الصفحة في Chrome لتثبيت التطبيق.","MathWeb_Download_UnknownMessage":"حاليا، يتوفر سطح مكتب ماكلر الرياضيات فقط عبر Microsoft Edge وChrome. الرجاء فتح هذه الصفحة في متصفح متوافق.","EDU_PROB_CATEGORY_LIN_EQ":"معادلة خطية","EDU_PROB_CATEGORY_QUAD_EQ":"معادلة تربيعية","EDU_PROB_CATEGORY_ARITHMETIC":"الحساب","EDU_PROB_CATEGORY_TRIG":"حساب المثلثات","EDU_PROB_CATEGORY_MATRIX":"المصفوفة","EDU_PROB_CATEGORY_SIM_EQ":"معادلة آنية","EDU_PROB_CATEGORY_DIFF":"التفاضل","EDU_PROB_CATEGORY_INTEGRATION":"التكامل","EDU_PROB_CATEGORY_LIMITS":"النهايات","EDU_PROB_CATEGORY_COMPLEX":"الأعداد المركبة","EDU_PROB_CATEGORY_LIST":"القائمة","NotebookTab_Example":"أمثلة","MathWeb_GenericSolve":"الحل","MathResult_Graph_ReCenter":"إعادة التوسيط","MathWeb_Keyboard_Algebra":"الجبر","MathWeb_Keyboard_Calculus":"حساب التفاضل","MathWeb_Keyboard_List":"قائمه","MathWeb_Keyboard_Matrices":"المصفوفات","MathWeb_Keyboard_Numbers":"ارقام","MathWeb_Keyboard_Operators":"مشغلي","MathWeb_Keyboard_Statistics":"الاحصاءات","MathWeb_Keyboard_Trig":"علم المثلثات","MathWeb_Keyboard_Variables":"المتغيرات","KeyboardInput_Solve":"الحل","KeyboardInput_PlaceholderText":"كتابة مسألة رياضية","MathWeb_Section_Steps_Title":"الحصول على شروح مفصّلة خطوة بخطوة","MathWeb_Section_Steps_Subtitle":"تعرّف على كيفية حل المسائل وعرض عملك، بالإضافة إلى الحصول على تعريفات للمفاهيم الرياضية","MathWeb_Section_Graph_Title":"تمثيل بياني لمسائلك الرياضية","MathWeb_Section_Graph_Subtitle":"مثِّل أي معادلة في الحال برسم بياني لعرض دالتك وفهم العلاقة بين المتغيرات","MathWeb_Section_Practice_Title":"تدرّب، تدرّب، تدرّب","MathWeb_Section_Practice_Subtitle":"ابحث عن مواد تعليمية إضافية، مثل أوراق العمل وبرامج الفيديو التعليمية ذات الصلة","MathWeb_Section_Language_Title":"الحصول على التعليمات المتعلقة بالرياضيات بلُغتك","MathWeb_Section_Language_Subtitle":"تُقدَّم باللغة الإسبانية والهندية والألمانية والمزيد","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"قم بتجربة حلّال الرياضيات","MathAnswerView_Videos":"مقاطع فيديو","MathWeb_Section_Video_Subtitle":"مشاهدة للحصول على ميزات جديدة، نصائح وأكثر!","MathWeb_Title":"احصل على حلول خطوة بخطوة لمشاكل الرياضيات الخاصة بك","Results_Less":"{0} أقل","Results_More":"المزيد من {0}","MathPracticeProblem_SectionHeader":"تدريب","MathWeb_PopularProblems":"المشاكل الشعبية","MathWeb_SolveProblemTitleFormat":"حل {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"قم بحل مشاكلك الرياضية باستخدام حلّال الرياضيات المجاني خاصتنا مع حلول مُفصلة خطوة بخطوة. يدعم حلّال الرياضيات خاصتنا الرياضيات الأساسية ومرحلة ما قبل الجبر والجبر وحساب المثلثات وحساب التفاضل والتكامل والمزيد.","Generic_About":"عن","MathWeb_Topics":"المواضيع","Generic_PrivacyPolicy":"نهج الخصوصية","Generic_TermOfUse":"شروط الخدمة","Settings_Language":"اللغة","MathWeb_BackToTop":"العودة إلى الأعلى","MathWeb_SimilarProblems":"مشاكل مماثلة","MathWeb_Topic_PreAlgebra":"ما قبل الجبر","MathWeb_Topic_PreAlgebra2":"ما قبل الجبر 2","MathWeb_Topic_OrderOfOperations":"ترتيب العمليات","MathWeb_Topic_PrimeFactorization":"العوملة الرئيسية","MathWeb_Topic_Fractions":"الكسور","MathWeb_Topic_LCM":"المضاعف الأقل شيوعاً","MathWeb_Topic_GCF":"أكبر عامل مشترك","MathWeb_Topic_Mean":"يعني","MathWeb_Topic_Mode":"وضع","MathWeb_Topic_Exponents":"الاسس","MathWeb_Topic_Radicals":"الجذور","MathWeb_Topic_MixedFractions":"كسور مختلطة","MathWeb_Topic_Algebra":"الجبر","MathWeb_Topic_Algebra2":"الجبر 2","MathWeb_Topic_CombineLikeTerms":"الجمع بين مثل المصطلحات","MathWeb_Topic_SolveForVariable":"حل لمتغير","MathWeb_Topic_LinearEquations":"المعادلات الخطية","MathWeb_Topic_QuadraticEquations":"المعادلات التربيعية","MathWeb_Topic_Matrices":"المصفوفات","MathWeb_Topic_Inequalities":"التفاوتات","MathWeb_Topic_SystemsOfEquations":"أنظمة المعادلات","MathWeb_Topic_Factor":"عامل","MathWeb_Topic_Expand":"توسيع","MathWeb_Topic_EvaluteFractions":"تقييم الكسور","MathWeb_Topic_Trigonometry":"علم المثلثات","MathWeb_Topic_Simplify":"تبسيط","MathWeb_Topic_Evaluate":"تقييم","MathWeb_Topic_Graphs":"الرسوم البيانيه","MathWeb_Topic_SolveEquations":"حل المعادلات","MathWeb_Topic_Calculus":"حساب التفاضل","MathWeb_Topic_Derivatives":"المشتقات","MathWeb_Topic_Integrals":"التكاملات","MathWeb_Topic_Limits":"حدود","MathWeb_CalculatorTitle":"{0} | حلّال الرياضيات من Microsoft","MathWeb_AlgebraCalculator":"حاسبة الجبر","MathWeb_TrigCalculator":"حاسبة حِساب المثلثات","MathWeb_CalculusCalculator":"حاسبة التفاضل والتكامل","MathWeb_MatrixCalculator":"مصفوفة حاسبة","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"جارٍ إنشاء اختبار...","Quiz_Error_Header":"عذرًا، لم نتمكن من إنشاء اختبار بناءً على هذا النوع من المسائل. ُيرجى محاولة نوع آخر من المسائل.","Quiz_Notebook_ProblemCount_Template":"{0} من المسائل المشابهة لـ :","NoResults_MathSolveError":"حدث خطأ ما، يُرجى إعادة المحاولة","Quiz_Completion_Date":"اكتملت في {0}","Quiz_Result_Correct":"صحيح","Quiz_Total_Score_Template":"لقد أجبت على {0} من {1} من الأسئلة بشكل صحيح.","Quiz_Complete_Header":"اكتمل الاختبار","Quiz_End_Finish":"إنهاء","KeyboardInput_Undo":"تراجع","MathWeb_DeleteAll":"حذف الكل","MathWeb_MyQuizzes":"مسابقاتي","MathWeb_QuizNotFound":"لم يتم العثور على اختبار","Quiz_NextProblem":"المسألة التالية","Quiz_CheckProblem":"التحقق","Quiz_Answer_Prompt":"حدد حل المسألة:","Quiz_HintButton":"ساعدني","MathWeb_NewQuiz":"مسابقة جديدة","Quiz_StartScreen_Question_Count_Template":"{0} من أسئلة الاختيار من متعدد","Quiz_StartScreen_Header":"هل أنت جاهز للاختبار؟","Quiz_StartScreen_Time_Template":"{0} من الدقائق للإكمال","Quiz_Start":"البداية","Quiz_Result_Incorrect":"غير صحيح","Quiz_Result_Your_Answer":"إجابتك:","Quiz_Result_See_Solution":"عرض الحل","Quiz_Entity":"اختبار","MathWeb_InProgress":"قيد التنفيذ","MathWeb_ConfirmQuizDelete":"هل أنت متأكد من أنك تريد حذف جميع الاختبارات؟","Generic_Edit":"تحرير","Generic_Close":"إغلاق","MathResult_GraphHeader":"رسم بياني","Teams_ViewInteractiveGraph":"عرض الرسم البياني التفاعلي","Network_Offline_Message":"أنت غير متصل بالإنترنت. يُرجى التحقق من شبكتك.","NoResults_MathEquation":"تم اكتشاف هذه المعادلة:","NoResults_MathError":"لا يمكننا حل ذلك النوع من المعادلات أو ربما تحتوي على خطأ","NoResults_NoMath":"آسف، لا نرى معادلة. تأكّد من وضوحها ووجودها بشكل كامل داخل الإطار","MathWeb_ViewSteps":"عرض خطوات الحل","Quiz_Try_Label":"تجربة اختبار","MathAnswerView_Concepts":"المفاهيم المرتبطة","Generic_PDF":"PDF","MathAnswerView_Worksheets":"أوراق العمل من بحث الويب","MathAnswerView_Worksheets_Short":"أسئلة الممارسة","MathAnswerView_RelatedPages":"مسائل مماثلة من البحث في الويب","Results_Items":"العناصر","Generic_Share":"مشاركة","Generic_Copy":"نسخ","Share_CopiedToClipboard":"تم النسخ للحافظة","Accessibility_MathAnswerView_PoweredByBing":"مُشغّل بواسطة Bing","MathAnswerView_PoweredByBing":"مُشغّل بواسطة","MathAnswerView_EquationIsFalse":"خطأ","MathAnswerView_EquationIsTrue":"صحيح","Feedback_Thanks":"شكرًا!","Feedback_Title":"هل كانت هذه النتائج مفيدة؟","MathAnswerView_DesktopUpsell_SectionHeader":"نسخة سطح المكتب المتاحة","SketchInput_ClearLabel":"مسح الرسم","SketchInput_Clear":"CLR","SketchInput_PenLabel":"استخدام قلم","SketchInput_EraserLabel":"استخدام الممحاة","SketchInput_UndoLabel":"تراجع عن آخر ضغطة مفتاح","SketchInput_Info":"ارسم مسألة أدناه","SketchInput_SubmitLabel":"إرسال مقدار","Teams_Solve_Waiting":"حل هذا التعبير...","Teams_RelatedTo":"ذات صلة بـ","MathWeb_PageTopicRootTitle":"اكتشف مواضيع رياضية","MathWeb_PageTopicDescriptionFormat":"تعرف على {0} باستخدام حلّال الرياضيات المجاني مع حلول مُفصلة خطوة بخطوة."},"as":{"Generic_Back":"পাছলৈ","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"Microsoft Math Solver এপ্পে অগ্ৰণী AI নিয়ন্ত্ৰিত গণিত সমাধানকাৰী ব্যৱহাৰ কৰি অংক, বীজগণিত, ত্ৰিকোণমিতি, কেলকুলাচ, পৰিসংখ্যা, আৰু অন্য বিষয় অন্তৰ্ভুক্ত কৰি বিভিন্ন সমস্যাৰে ক্ৰমে ক্ৰমে সহায় প্ৰদান কৰে।","MathWeb_Download_MobileHeading":"Step-by-step solutions at your finger tips","MathWeb_Download_IOS":"Download for iOS","MathWeb_Download_Android":"Download for Android","MathWeb_Download_InstalledMessage":"App already installed","MathWeb_Download_Button":"Download desktop app","MathWeb_Download_Unavailable":"Desktop app unavailable","MathWeb_Download_MacMessage":"Currently, the Math Solver desktop app is only available via Chrome on MacOSX. Please open this page in Chrome to install the app.","MathWeb_Download_UnknownMessage":"Currently, the Math Solver desktop is only available via Microsoft Edge and Chrome. Please open this page in a compatible browser.","EDU_PROB_CATEGORY_LIN_EQ":"ৰৈখিক সমীকৰণ","EDU_PROB_CATEGORY_QUAD_EQ":"দ্বিঘাত সমীকৰণ","EDU_PROB_CATEGORY_ARITHMETIC":"অঙ্ক","EDU_PROB_CATEGORY_TRIG":"ত্ৰিকোণমিতি","EDU_PROB_CATEGORY_MATRIX":"মেট্ৰিক্স","EDU_PROB_CATEGORY_SIM_EQ":"সমকালীন সমীকৰণ","EDU_PROB_CATEGORY_DIFF":"পৃথকীকৰণ","EDU_PROB_CATEGORY_INTEGRATION":"ইণ্টিগ্ৰেশ্বন","EDU_PROB_CATEGORY_LIMITS":"সীমা","EDU_PROB_CATEGORY_COMPLEX":"জটিল নম্বৰসমূহ","EDU_PROB_CATEGORY_LIST":"সূচী","NotebookTab_Example":"উদাহৰণসমূহ","MathWeb_GenericSolve":"সমাধান কৰক","MathResult_Graph_ReCenter":"পুনঃকেন্দ্ৰস্থ কৰক","MathWeb_Keyboard_Algebra":"algebra","MathWeb_Keyboard_Calculus":"calculus","MathWeb_Keyboard_List":"list","MathWeb_Keyboard_Matrices":"matrices","MathWeb_Keyboard_Numbers":"numbers","MathWeb_Keyboard_Operators":"operators","MathWeb_Keyboard_Statistics":"statistics","MathWeb_Keyboard_Trig":"trigonometry","MathWeb_Keyboard_Variables":"variables","KeyboardInput_Solve":"সমাধান কৰক","KeyboardInput_PlaceholderText":"এটা গণিতৰ সমস্যা টাইপ কৰক","MathWeb_Section_Steps_Title":"পদে-পদে বৰ্ণনা লাভ কৰক","MathWeb_Section_Steps_Subtitle":"সমস্যাবোৰ কেনেকৈ সমাধান কৰা হয় চাওক আৰু আপোনাৰ কাম দেখুৱাওক—লগতে গণিত সম্বন্ধীয় ধাৰণাৰ বাবে সংজ্ঞা লাভ কৰক","MathWeb_Section_Graph_Title":"আপোনাৰ গণিতৰ সমস্যাবোৰৰ গ্ৰাফ কৰক","MathWeb_Section_Graph_Subtitle":"আপোনাৰ ফাংছন ভিজুৱেলাইজ কৰিবলৈ আৰু ভেৰিয়েবলৰ মাজৰ সম্বন্ধ বুজিবলৈ যিকোনো সমীকৰণৰ তাৎক্ষণিকভাৱে গ্ৰাফ বনাওক","MathWeb_Section_Practice_Title":"অভ্যাস, অভ্যাস, অভ্যাস","MathWeb_Section_Practice_Subtitle":"সম্বন্ধিত ৱৰ্কশ্বীট আৰু ভিডিঅ\'ৰ টিউট\'ৰিয়েলৰ দৰে অতিৰিক্ত শিক্ষণৰ সামগ্ৰীসমূহৰ বাবে অনুসন্ধান কৰক","MathWeb_Section_Language_Title":"আপোনাৰ ভাষাত গণিতৰ সহায় লাভ কৰক","MathWeb_Section_Language_Subtitle":"স্পেনিচ, হিন্দী, জাৰ্মান আৰু অধিকত কাম কৰে","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"গণিতৰ সমাধানকাৰী চেষ্টা কৰক","MathAnswerView_Videos":"ভিডিঅ\'সমূহ","MathWeb_Section_Video_Subtitle":"Watch for new features, tips and more!","MathWeb_Title":"আপোনাৰ গণিতৰ সমস্যাসমূহৰ ক্ৰমে ক্ৰমে সমাধান লাভ কৰক","Results_Less":"কম {0}","Results_More":"অধিক {0}","MathPracticeProblem_SectionHeader":"অভ্যাস কৰক","MathWeb_PopularProblems":"Popular Problems","MathWeb_SolveProblemTitleFormat":"{0} সমাধান কৰক | Microsoft Math Solver","MathWeb_SolveProblemDescription":"ক্ৰমে ক্ৰমে সমাধানৰ সৈতে আমাৰ বিনামূলীয়া গণিত সমাধানকাৰী ব্যৱহাৰ কৰি আপোনাৰ গণিতৰ সমস্যাসমূহ সমাধান কৰক। আমাৰ গণিত সমাধানকাৰীয়ে প্ৰাথমিক গণিত, প্ৰাক-বীজগণিত, বীজগণিত, ত্ৰিকোণমিতি, কেলকুলাচ আৰু অধিক সমৰ্থন কৰে।","Generic_About":"About","MathWeb_Topics":"Topics","Generic_PrivacyPolicy":"গোপনীয়তা নীতি","Generic_TermOfUse":"সেৱাৰ চৰ্তাৱলী","Settings_Language":"ভাষা","MathWeb_BackToTop":"Back to top","MathWeb_SimilarProblems":"Similar Problems","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Order of Operations","MathWeb_Topic_PrimeFactorization":"Prime Factorization","MathWeb_Topic_Fractions":"Fractions","MathWeb_Topic_LCM":"Least Common Multiple","MathWeb_Topic_GCF":"Greatest Common Factor","MathWeb_Topic_Mean":"Mean","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Exponents","MathWeb_Topic_Radicals":"Radicals","MathWeb_Topic_MixedFractions":"Mixed Fractions","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Combine Like Terms","MathWeb_Topic_SolveForVariable":"Solve for a Variable","MathWeb_Topic_LinearEquations":"Linear Equations","MathWeb_Topic_QuadraticEquations":"Quadratic Equations","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Inequalities","MathWeb_Topic_SystemsOfEquations":"Systems of Equations","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Expand","MathWeb_Topic_EvaluteFractions":"Evaluate Fractions","MathWeb_Topic_Trigonometry":"Trigonometry","MathWeb_Topic_Simplify":"Simplify","MathWeb_Topic_Evaluate":"Evaluate","MathWeb_Topic_Graphs":"Graphs","MathWeb_Topic_SolveEquations":"Solve Equations","MathWeb_Topic_Calculus":"Calculus","MathWeb_Topic_Derivatives":"Derivatives","MathWeb_Topic_Integrals":"Integrals","MathWeb_Topic_Limits":"Limits","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"বীজগণিত কেলকুলেটৰ","MathWeb_TrigCalculator":"ত্ৰিকোণমিতি কেলকুলেটৰ","MathWeb_CalculusCalculator":"কেলকুলাচ কেলকুলেটৰ","MathWeb_MatrixCalculator":"Matrix Calculator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"এটা কুইজ সাজু হৈ আছে...","Quiz_Error_Header":"দুঃখিত, আমি তেনে প্ৰকাৰৰ সমস্যাৰ আধাৰত এটা কুইজ সাজু কৰিবলৈ সক্ষম হোৱা নাছিলো। অনুগ্ৰহ কৰি অন্য এটা সমস্যাৰ প্ৰকাৰ চেষ্টা কৰক।","Quiz_Notebook_ProblemCount_Template":"ইয়াৰ সৈতে একে {0} টা সমস্যা:","NoResults_MathSolveError":"কিবা ভুল হৈছে, অনুগ্ৰহ কৰি পুনঃচেষ্টা কৰক","Quiz_Completion_Date":"{0}-ত সম্পূৰ্ণ হৈছে","Quiz_Result_Correct":"শুদ্ধ","Quiz_Total_Score_Template":"আপুনি {1} টা প্ৰশ্নৰ ভিতৰত {0} টাৰ উত্তৰ শুদ্ধকৈ দিছে।","Quiz_Complete_Header":"কুইজ সম্পূৰ্ণ হৈছে","Quiz_End_Finish":"সমাপ্ত কৰক","KeyboardInput_Undo":"পূৰ্বৰ দৰে কৰক","MathWeb_DeleteAll":"Delete all","MathWeb_MyQuizzes":"My quizzes","MathWeb_QuizNotFound":"Quiz not found","Quiz_NextProblem":"পৰৱৰ্তী সমস্যা","Quiz_CheckProblem":"পৰীক্ষা কৰক","Quiz_Answer_Prompt":"সমস্যাটোৰ উত্তৰ চয়ন কৰক:","Quiz_HintButton":"মোক সহায় কৰক","MathWeb_NewQuiz":"New quiz","Quiz_StartScreen_Question_Count_Template":"{0} টা একাধিক-বিকল্পৰ প্ৰশ্ন","Quiz_StartScreen_Header":"কুইজৰ বাবে সাজুনে?","Quiz_StartScreen_Time_Template":"সম্পূৰ্ণ কৰিবলৈ {0} মিনিট","Quiz_Start":"আৰম্ভ কৰক","Quiz_Result_Incorrect":"অশুদ্ধ","Quiz_Result_Your_Answer":"আপোনাৰ উত্তৰ:","Quiz_Result_See_Solution":"সমাধান চাওক","Quiz_Entity":"কুইজ","MathWeb_InProgress":"In progress","MathWeb_ConfirmQuizDelete":"Are you sure you want to delete all quizzes?","Generic_Edit":"সম্পাদনা কৰক","Generic_Close":"বন্ধ কৰক","MathResult_GraphHeader":"গ্ৰাফ","Teams_ViewInteractiveGraph":"View Interactive Graph","Network_Offline_Message":"আপুনি অফলাইন আছে। অনুগ্ৰহ কৰি আপোনাৰ নেটৱৰ্ক পৰীক্ষা কৰক।","NoResults_MathEquation":"এই সমীকৰণ চিনাক্ত হৈছে:","NoResults_MathError":"আমি সেই ধৰণৰ সমীকৰণ সমাধান কৰিব নোৱাৰো বা ইয়াত এটা সমস্যা থাকিব পাৰে","NoResults_NoMath":"দুঃখিত, আমি এটা সমীকৰণ দেখা নাই। এইটো পৰিষ্কাৰ থকাটো আৰু সম্পূৰ্ণৰূপে ফ্ৰেমত থকাটো নিশ্চিত কৰক","MathWeb_ViewSteps":"View solution steps","Quiz_Try_Label":"কুইজ চেষ্টা কৰক","MathAnswerView_Concepts":"সম্বন্ধিত ধাৰণা","Generic_PDF":"PDF","MathAnswerView_Worksheets":"वेब खोज से कार्यपत्रक","MathAnswerView_Worksheets_Short":"কার্য্যশ্বীটসমূহ","MathAnswerView_RelatedPages":"ৱেব অনুসন্ধানৰ পৰা একেধৰণৰ সমস্যাসমূহ","Results_Items":"আইটেমসমূহ","Generic_Share":"ভাগ-বতৰা কৰক","Generic_Copy":"প্ৰতিলিপি কৰক","Share_CopiedToClipboard":"ক্লিপবোৰ্ডলৈ প্ৰতিলিপি হৈছে","Accessibility_MathAnswerView_PoweredByBing":"Bing-ৰ দ্বাৰা চালিত","MathAnswerView_PoweredByBing":"ইয়াৰ দ্বাৰা চলিত","MathAnswerView_EquationIsFalse":"ভুল","MathAnswerView_EquationIsTrue":"শুদ্ধ","Feedback_Thanks":"ধন্যবাদ!","Feedback_Title":"এই ফলাফলবোৰ উপকাৰী আছিলনে?","MathAnswerView_DesktopUpsell_SectionHeader":"ডেস্কটপ সংস্কৰণ উপলব্ধ","SketchInput_ClearLabel":"স্কেটচ্ পৰিষ্কাৰ কৰক","SketchInput_Clear":"CLR","SketchInput_PenLabel":"পেন ব্যৱহাৰ কৰক","SketchInput_EraserLabel":"ইৰেজাৰ ব্যৱহাৰ কৰক","SketchInput_UndoLabel":"অন্তিম ষ্ট্ৰ\'ক পূৰ্বৰ দৰে কৰক","SketchInput_Info":"তলত এটা সমস্যা অংকন কৰক","SketchInput_SubmitLabel":"অভিব্যক্তি দাখিল কৰক","Teams_Solve_Waiting":"Solving this expression...","Teams_RelatedTo":"Related To","MathWeb_PageTopicRootTitle":"গণিতৰ বিষয়সমূহ অন্বেষণ কৰক","MathWeb_PageTopicDescriptionFormat":"ক্ৰমে ক্ৰমে সমাধানসমূহৰে আমাৰ বিনামূলীয়া গণিত সমাধানকাৰী ব্যৱহাৰ কৰি {0}-ৰ বিষয়ে শিকক।"},"bn":{"Generic_Back":"ফিরে দেখা","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"Microsoft গণিত সমাধানকারী অ্যাপটি, একটি উন্নত AI সঞ্চালিত গণিত সমাধানকারীর মাধ্যমে, পাটিগণিত, বীজগণিত, ত্রিকোণমিতি, ক্যালকুলাস, স্ট্যাটিস্টিক্স এবং অন্যান্য বিষয়ের বিভিন্ন প্রশ্নের ধাপে ধাপে সহায়তা প্রদান করে।","MathWeb_Download_MobileHeading":"Step-by-step solutions at your finger tips","MathWeb_Download_IOS":"Download for iOS","MathWeb_Download_Android":"Download for Android","MathWeb_Download_InstalledMessage":"App already installed","MathWeb_Download_Button":"Download desktop app","MathWeb_Download_Unavailable":"Desktop app unavailable","MathWeb_Download_MacMessage":"Currently, the Math Solver desktop app is only available via Chrome on MacOSX. Please open this page in Chrome to install the app.","MathWeb_Download_UnknownMessage":"Currently, the Math Solver desktop is only available via Microsoft Edge and Chrome. Please open this page in a compatible browser.","EDU_PROB_CATEGORY_LIN_EQ":"রৈখিক সমীকরণ","EDU_PROB_CATEGORY_QUAD_EQ":"দ্বিঘাত সমীকরণ","EDU_PROB_CATEGORY_ARITHMETIC":"পাটিগণিত","EDU_PROB_CATEGORY_TRIG":"ত্রিকোণমিতি","EDU_PROB_CATEGORY_MATRIX":"মেট্রিক্স","EDU_PROB_CATEGORY_SIM_EQ":"সমকালীন সমীকরণ","EDU_PROB_CATEGORY_DIFF":"ডিফারেন্সিয়েশন","EDU_PROB_CATEGORY_INTEGRATION":"ইন্টিগ্রেশন","EDU_PROB_CATEGORY_LIMITS":"লিমিট","EDU_PROB_CATEGORY_COMPLEX":"জটিল সংখ্যা","EDU_PROB_CATEGORY_LIST":"তালিকা","NotebookTab_Example":"উদাহরণ","MathWeb_GenericSolve":"সমাধান করুন","MathResult_Graph_ReCenter":"আবার কেন্দ্রে নিয়ে আসুন","MathWeb_Keyboard_Algebra":"algebra","MathWeb_Keyboard_Calculus":"calculus","MathWeb_Keyboard_List":"list","MathWeb_Keyboard_Matrices":"matrices","MathWeb_Keyboard_Numbers":"numbers","MathWeb_Keyboard_Operators":"operators","MathWeb_Keyboard_Statistics":"statistics","MathWeb_Keyboard_Trig":"trigonometry","MathWeb_Keyboard_Variables":"variables","KeyboardInput_Solve":"সমাধান করুন","KeyboardInput_PlaceholderText":"গণিতের কোনো প্রশ্ন টাইপ করুন","MathWeb_Section_Steps_Title":"ধাপে ধাপে ব্যাখ্যাগুলি পান","MathWeb_Section_Steps_Subtitle":"বিভিন্ন প্রশ্নের সমাধান কীভাবে করতে হয় তা দেখুন এবং আপনার কাজ দেখান—তাছাড়া গাণিতিক ধারণাগুলির সংজ্ঞা পান","MathWeb_Section_Graph_Title":"গণিত সংক্রান্ত প্রশ্নগুলির গ্রাফ তৈরি করুন","MathWeb_Section_Graph_Subtitle":"আপনার ফাংশনটিকে দেখার জন্য এবং ভ্যারিয়েবলগুলির মধ্যে সম্পর্ক বোঝার জন্য তাৎক্ষণিকভাবে যেকোনও সমীকরণের গ্রাফ তৈরি করুন","MathWeb_Section_Practice_Title":"অনুশীলন, অনুশীলন, অনুশীলন","MathWeb_Section_Practice_Subtitle":"শিক্ষা সংক্রান্ত অতিরিক্ত বিষয়বস্তু সন্ধান করুন, যেমন সম্পর্কযুক্ত ওয়ার্কশিট এবং ভিডিও নির্ভর প্রশিক্ষণ","MathWeb_Section_Language_Title":"নিজের ভাষায় গণিত সংক্রান্ত সহায়তা পান","MathWeb_Section_Language_Subtitle":"স্প্যানিশ, হিন্দি, জার্মান এবং আরও অনেক ভাষায় কাজ করে","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"গণিত সমাধানকারী ব্যবহার করে দেখুন","MathAnswerView_Videos":"ভিডিও","MathWeb_Section_Video_Subtitle":"Watch for new features, tips and more!","MathWeb_Title":"আপনার গণিত সংক্রান্ত প্রশ্নগুলির ধাপে ধাপে সমাধান পান","Results_Less":"কম {0}","Results_More":"আরও {0}","MathPracticeProblem_SectionHeader":"অনুশীলন করুন","MathWeb_PopularProblems":"Popular Problems","MathWeb_SolveProblemTitleFormat":"{0}-এর সমাধান করুন | Microsoft গণিত সমাধানকারী","MathWeb_SolveProblemDescription":"আমাদের বিনামূল্যের গণিত সমাধানকারী ব্যবহার করে ধাপে ধাপে করা সমাধানগুলির মাধ্যমে আপনার গণিত সংক্রান্ত প্রশ্নগুলির সমাধান করুন। আমাদের গণিত সমাধানকারীটি প্রাথমিক গণিত, প্রারম্ভিক-বীজগণিত, বীজগণিত, ত্রিকোণমিতি, ক্যালকুলাস এবং আরও অনেক বিষয়ের উপর কাজ করতে পারে।","Generic_About":"About","MathWeb_Topics":"Topics","Generic_PrivacyPolicy":"গোপনীয়তা নীতি","Generic_TermOfUse":"পরিষেবার শর্তাবলী","Settings_Language":"ভাষা","MathWeb_BackToTop":"Back to top","MathWeb_SimilarProblems":"Similar Problems","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Order of Operations","MathWeb_Topic_PrimeFactorization":"Prime Factorization","MathWeb_Topic_Fractions":"Fractions","MathWeb_Topic_LCM":"Least Common Multiple","MathWeb_Topic_GCF":"Greatest Common Factor","MathWeb_Topic_Mean":"Mean","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Exponents","MathWeb_Topic_Radicals":"Radicals","MathWeb_Topic_MixedFractions":"Mixed Fractions","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Combine Like Terms","MathWeb_Topic_SolveForVariable":"Solve for a Variable","MathWeb_Topic_LinearEquations":"Linear Equations","MathWeb_Topic_QuadraticEquations":"Quadratic Equations","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Inequalities","MathWeb_Topic_SystemsOfEquations":"Systems of Equations","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Expand","MathWeb_Topic_EvaluteFractions":"Evaluate Fractions","MathWeb_Topic_Trigonometry":"Trigonometry","MathWeb_Topic_Simplify":"Simplify","MathWeb_Topic_Evaluate":"Evaluate","MathWeb_Topic_Graphs":"Graphs","MathWeb_Topic_SolveEquations":"Solve Equations","MathWeb_Topic_Calculus":"Calculus","MathWeb_Topic_Derivatives":"Derivatives","MathWeb_Topic_Integrals":"Integrals","MathWeb_Topic_Limits":"Limits","MathWeb_CalculatorTitle":"{0} | Microsoft গণিত সমাধানকারী","MathWeb_AlgebraCalculator":"বীজগণিত ক্যালকুলেটর","MathWeb_TrigCalculator":"ত্রিকোণমিতি ক্যালকুলেটর","MathWeb_CalculusCalculator":"ক্যালকুলাস ক্যালকুলেটর","MathWeb_MatrixCalculator":"Matrix Calculator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"কুইজ তৈরি করা হচ্ছে...","Quiz_Error_Header":"দুঃখিত, আমরা এই ধরনের প্রশ্নের উপর ভিত্তি করে কোনো কুইজ তৈরি করতে পারিনি। অনুগ্রহ করে অন্য ধরনের কোনো প্রশ্নের মাধ্যমে চেষ্টা করুন।","Quiz_Notebook_ProblemCount_Template":"এর অনুরূপ {0}টি প্রশ্ন:","NoResults_MathSolveError":"কিছু সমস্যা হয়েছে, অনুগ্রহ করে পরে আবার চেষ্টা করুন","Quiz_Completion_Date":"{0} তারিখে সম্পন্ন হয়েছে","Quiz_Result_Correct":"সঠিক","Quiz_Total_Score_Template":"আপনি {1}টি প্রশ্নের মধ্যে {0}টির উত্তর সঠিক দিয়েছেন।","Quiz_Complete_Header":"কুইজ সম্পন্ন হয়েছে","Quiz_End_Finish":"সমাপ্ত করুন","KeyboardInput_Undo":"পূর্বাবস্থা","MathWeb_DeleteAll":"Delete all","MathWeb_MyQuizzes":"My quizzes","MathWeb_QuizNotFound":"Quiz not found","Quiz_NextProblem":"পরবর্তী প্রশ্ন","Quiz_CheckProblem":"পরীক্ষা করুন","Quiz_Answer_Prompt":"এই প্রশ্নটির উত্তর নির্বাচন করুন:","Quiz_HintButton":"আমাকে সাহায্য করুন","MathWeb_NewQuiz":"New quiz","Quiz_StartScreen_Question_Count_Template":"{0}টি মাল্টিপল চয়েস প্রশ্ন","Quiz_StartScreen_Header":"কুইজের জন্য প্রস্তুত?","Quiz_StartScreen_Time_Template":"সম্পন্ন হতে {0} মিনিট লাগবে","Quiz_Start":"শুরু করুন","Quiz_Result_Incorrect":"ভুল","Quiz_Result_Your_Answer":"আপনার উত্তর:","Quiz_Result_See_Solution":"সমাধান দেখুন","Quiz_Entity":"কুইজ","MathWeb_InProgress":"In progress","MathWeb_ConfirmQuizDelete":"Are you sure you want to delete all quizzes?","Generic_Edit":"সম্পাদনা করুন","Generic_Close":"বন্ধ করুন","MathResult_GraphHeader":"গ্রাফ","Teams_ViewInteractiveGraph":"View Interactive Graph","Network_Offline_Message":"আপনি অফলাইন আছেন। অনুগ্রহ করে আপনার নেটওয়ার্ক পরীক্ষা করুন।","NoResults_MathEquation":"এই সমীকরণটি পাওয়া গেছে:","NoResults_MathError":"আমরা এই ধরনের সমীকরণ সমাধান করতে পারি না অথবা এতে কোনো ত্রুটি আছে","NoResults_NoMath":"দুঃখিত, আমরা কোনো সমীকরণ দেখতে পাচ্ছি না। এটি স্পষ্ট কিনা এবং সম্পূর্ণরূপে ফ্রেমের মধ্যে আছে কিনা তা সুনিশ্চিত করুন","MathWeb_ViewSteps":"View solution steps","Quiz_Try_Label":"একটি কুইজে অংশগ্রহণ করুন","MathAnswerView_Concepts":"সম্পর্কযুক্ত ধারণা","Generic_PDF":"PDF","MathAnswerView_Worksheets":"वेब खोज से कार्यपत्रक","MathAnswerView_Worksheets_Short":"কার্যপত্রক","MathAnswerView_RelatedPages":"ওয়েব সন্ধান থেকে অনুরূপ প্রশ্নাবলী","Results_Items":"আইটেম","Generic_Share":"শেয়ার করুন","Generic_Copy":"কপি করুন","Share_CopiedToClipboard":"ক্লিপবোর্ডে কপি করা হয়েছে","Accessibility_MathAnswerView_PoweredByBing":"Bing দ্বারা পরিচালিত","MathAnswerView_PoweredByBing":"এর দ্বারা পরিচালিত","MathAnswerView_EquationIsFalse":"অসত্য","MathAnswerView_EquationIsTrue":"সত্য","Feedback_Thanks":"ধন্যবাদ!","Feedback_Title":"এইসব ফলাফল উপযোগী হয়েছে?","MathAnswerView_DesktopUpsell_SectionHeader":"ডেস্কটপ সংস্করণ উপলব্ধ","SketchInput_ClearLabel":"স্কেচ সাফ করুন","SketchInput_Clear":"CLR","SketchInput_PenLabel":"পেন ব্যবহার করুন","SketchInput_EraserLabel":"ইরেজার ব্যবহার করুন","SketchInput_UndoLabel":"সর্বশেষ স্ট্রোকটি পূর্বাবস্থায় নিয়ে যান","SketchInput_Info":"নিচে একটি প্রশ্ন আঁকুন","SketchInput_SubmitLabel":"সমীকরণ জমা দিন","Teams_Solve_Waiting":"Solving this expression...","Teams_RelatedTo":"Related To","MathWeb_PageTopicRootTitle":"গণিত সংক্রান্ত বিষয়গুলি এক্সপ্লোর করুন","MathWeb_PageTopicDescriptionFormat":"আমাদের বিনামূল্যের গণিত সমাধানকারী ব্যবহার করে ধাপে ধাপে করা সমাধানগুলির মাধ্যমে {0} শিখুন।"},"gu":{"Generic_Back":"પાછળ","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"ઉન્નત AI સંચાલિત મૅથ સોલ્વરનો ઉપયોગ કરીને Microsoft મૅથ સોલ્વર એપ્લિકેશન, અંકગણિત, બીજગણિત, ત્રિકોણમિતિ, કૅલ્ક્યુલસ, સ્ટૅટિસ્ટિક્સ અને અન્ય વિષયોના વિવિધ પ્રશ્નોમાં પગલાંવાર મદદ કરે છે.","MathWeb_Download_MobileHeading":"Step-by-step solutions at your finger tips","MathWeb_Download_IOS":"Download for iOS","MathWeb_Download_Android":"Download for Android","MathWeb_Download_InstalledMessage":"App already installed","MathWeb_Download_Button":"Download desktop app","MathWeb_Download_Unavailable":"Desktop app unavailable","MathWeb_Download_MacMessage":"Currently, the Math Solver desktop app is only available via Chrome on MacOSX. Please open this page in Chrome to install the app.","MathWeb_Download_UnknownMessage":"Currently, the Math Solver desktop is only available via Microsoft Edge and Chrome. Please open this page in a compatible browser.","EDU_PROB_CATEGORY_LIN_EQ":"રેખીય સમીકરણ","EDU_PROB_CATEGORY_QUAD_EQ":"દ્વિઘાત સમીકરણ","EDU_PROB_CATEGORY_ARITHMETIC":"અંકગણિત","EDU_PROB_CATEGORY_TRIG":"ત્રિકોણમિતિ","EDU_PROB_CATEGORY_MATRIX":"મેટ્રિક્સ","EDU_PROB_CATEGORY_SIM_EQ":"યુગપત્ સમીકરણ","EDU_PROB_CATEGORY_DIFF":"ડિફરેન્શિએશન","EDU_PROB_CATEGORY_INTEGRATION":"ઇન્ટિગ્રેશન","EDU_PROB_CATEGORY_LIMITS":"લિમિટ્સ","EDU_PROB_CATEGORY_COMPLEX":"જટિલ સંખ્યાઓ","EDU_PROB_CATEGORY_LIST":"લિસ્ટ","NotebookTab_Example":"ઉદાહરણો","MathWeb_GenericSolve":"ઉકેલો","MathResult_Graph_ReCenter":"ફરી કેન્દ્રમાં લાવો","MathWeb_Keyboard_Algebra":"algebra","MathWeb_Keyboard_Calculus":"calculus","MathWeb_Keyboard_List":"list","MathWeb_Keyboard_Matrices":"matrices","MathWeb_Keyboard_Numbers":"numbers","MathWeb_Keyboard_Operators":"operators","MathWeb_Keyboard_Statistics":"statistics","MathWeb_Keyboard_Trig":"trigonometry","MathWeb_Keyboard_Variables":"variables","KeyboardInput_Solve":"ઉકેલો","KeyboardInput_PlaceholderText":"ગણિતનો પ્રશ્ન ટાઇપ કરો","MathWeb_Section_Steps_Title":"પગલાંવાર સ્પષ્ટીકરણ મેળવો","MathWeb_Section_Steps_Subtitle":"પ્રશ્નો કેવી રીતે ઉકેલવા તે જુઓ અને તમારું કાર્ય બતાવો—સાથે જ ગાણિતિક વિભાવનાઓની વ્યાખ્યાઓ મેળવો","MathWeb_Section_Graph_Title":"તમારા ગણિતના પ્રશ્નોનો ગ્રાફ બનાવો","MathWeb_Section_Graph_Subtitle":"તમારું ફંક્શન જોવા માટે અને વેરીએબલ્સ વચ્ચે સંબંધ સમજવા માટે કોઈપણ સમીકરણનો ત્વરિત ગ્રાફ બનાવો","MathWeb_Section_Practice_Title":"અભ્યાસ, અભ્યાસ, અભ્યાસ","MathWeb_Section_Practice_Subtitle":"શિક્ષણ સંબંધિત વધારાની સામગ્રી શોધો, જેમ કે સંબંધિત કાર્યપત્રકો અને વિડિયો ટ્યુટોરિયલ્સ","MathWeb_Section_Language_Title":"તમારી ભાષામાં ગણિત સંબંધિત મદદ મેળવો","MathWeb_Section_Language_Subtitle":"સ્પેનિશ, હિન્દી, જર્મન અને ઘણી ભાષામાં કામ કરે છે","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"મૅથ સોલ્વર અજમાવી જુઓ","MathAnswerView_Videos":"વિડિયોઝ","MathWeb_Section_Video_Subtitle":"Watch for new features, tips and more!","MathWeb_Title":"તમારા ગણિતના પ્રશ્નોના પગલાંવાર ઉકેલો મેળવો","Results_Less":"ઓછા/ઓછી {0}","Results_More":"વધુ {0}","MathPracticeProblem_SectionHeader":"અભ્યાસ","MathWeb_PopularProblems":"Popular Problems","MathWeb_SolveProblemTitleFormat":"{0} ઉકેલો | Microsoft મૅથ સોલ્વર","MathWeb_SolveProblemDescription":"અમારા મૅથ સોલ્વરનો ઉપયોગ કરીને પગલાંવાર ઉકેલો દ્વારા તમારા ગણિતના પ્રશ્નો ઉકેલો. અમારા મૅથ સોલ્વર, પ્રાથમિક ગણિત, પ્રારંભિક-બીજગણિત, બીજગણિત, ત્રિકોણમિતિ, કૅલ્ક્યુલસ વગેરે વિષયોમાં કામ કરે છે.","Generic_About":"About","MathWeb_Topics":"Topics","Generic_PrivacyPolicy":"ગોપનીયતા નીતિ","Generic_TermOfUse":"સેવાની શરતો","Settings_Language":"ભાષા","MathWeb_BackToTop":"Back to top","MathWeb_SimilarProblems":"Similar Problems","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Order of Operations","MathWeb_Topic_PrimeFactorization":"Prime Factorization","MathWeb_Topic_Fractions":"Fractions","MathWeb_Topic_LCM":"Least Common Multiple","MathWeb_Topic_GCF":"Greatest Common Factor","MathWeb_Topic_Mean":"Mean","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Exponents","MathWeb_Topic_Radicals":"Radicals","MathWeb_Topic_MixedFractions":"Mixed Fractions","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Combine Like Terms","MathWeb_Topic_SolveForVariable":"Solve for a Variable","MathWeb_Topic_LinearEquations":"Linear Equations","MathWeb_Topic_QuadraticEquations":"Quadratic Equations","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Inequalities","MathWeb_Topic_SystemsOfEquations":"Systems of Equations","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Expand","MathWeb_Topic_EvaluteFractions":"Evaluate Fractions","MathWeb_Topic_Trigonometry":"Trigonometry","MathWeb_Topic_Simplify":"Simplify","MathWeb_Topic_Evaluate":"Evaluate","MathWeb_Topic_Graphs":"Graphs","MathWeb_Topic_SolveEquations":"Solve Equations","MathWeb_Topic_Calculus":"Calculus","MathWeb_Topic_Derivatives":"Derivatives","MathWeb_Topic_Integrals":"Integrals","MathWeb_Topic_Limits":"Limits","MathWeb_CalculatorTitle":"{0} | Microsoft મૅથ સોલ્વર","MathWeb_AlgebraCalculator":"બીજગણિત કૅલ્ક્યુલેટર","MathWeb_TrigCalculator":"ત્રિકોણમિતિ કૅલ્ક્યુલેટર","MathWeb_CalculusCalculator":"કૅલ્ક્યુલસ કૅલ્ક્યુલેટર","MathWeb_MatrixCalculator":"Matrix Calculator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"ક્વિઝ બનાવવામાં આવી રહી છે...","Quiz_Error_Header":"ક્ષમા કરો, અમે આ પ્રકારના પ્રશ્નના આધારે કોઈ ક્વિઝ બનાવી શક્યા નહોતા. કૃપા કરીને અન્ય પ્રકારનો પ્રશ્ન અજમાવી જુઓ.","Quiz_Notebook_ProblemCount_Template":"આના જેવા {0} પ્રશ્ન:","NoResults_MathSolveError":"કંઈક ખોટું થયું છે, કૃપયા પછી ફરીથી પ્રયત્ન કરો","Quiz_Completion_Date":"{0} તારીખે પૂરી કરવામાં આવી છે","Quiz_Result_Correct":"સાચુ","Quiz_Total_Score_Template":"તમે {1} પ્રશ્નમાંથી {0} પ્રશ્નના સાચા ઉત્તર આપ્યા છે.","Quiz_Complete_Header":"ક્વિઝ પૂરી થઈ ગઈ","Quiz_End_Finish":"સમાપ્ત કરો","KeyboardInput_Undo":"પૂર્વવત્ કરો","MathWeb_DeleteAll":"Delete all","MathWeb_MyQuizzes":"My quizzes","MathWeb_QuizNotFound":"Quiz not found","Quiz_NextProblem":"આગામી પ્રશ્ન","Quiz_CheckProblem":"તપાસો","Quiz_Answer_Prompt":"આ પ્રશ્નનો ઉત્તર પસંદ કરો:","Quiz_HintButton":"મને મદદ કરો","MathWeb_NewQuiz":"New quiz","Quiz_StartScreen_Question_Count_Template":"બહુવિધ પસંદગી વાળા {0} પ્રશ્ન","Quiz_StartScreen_Header":"ક્વિઝ માટે તૈયાર છો?","Quiz_StartScreen_Time_Template":"પૂરું કરવા માટે {0} મિનિટ જોઇશે","Quiz_Start":"પ્રારંભ કરો","Quiz_Result_Incorrect":"ખોટું","Quiz_Result_Your_Answer":"તમારો ઉત્તર:","Quiz_Result_See_Solution":"ઉકેલ જુઓ","Quiz_Entity":"ક્વિઝ","MathWeb_InProgress":"In progress","MathWeb_ConfirmQuizDelete":"Are you sure you want to delete all quizzes?","Generic_Edit":"સંપાદિત કરો","Generic_Close":"બંધ કરો","MathResult_GraphHeader":"ગ્રાફ","Teams_ViewInteractiveGraph":"View Interactive Graph","Network_Offline_Message":"તમે ઑફલાઇન છો. કૃપયા તમારું નેટવર્ક તપાસો.","NoResults_MathEquation":"આ સમીકરણ મળ્યું:","NoResults_MathError":"અમે આ પ્રકારનું સમીકરણ ઉકેલી શકતા નથી અથવા આમાં કોઈ ત્રુટી હોઈ શકે છે","NoResults_NoMath":"ક્ષમા કરશો, અમને કોઈ સમીકરણ દેખાતું નથી. ખાતરી કરો કે આ સ્પષ્ટ છે અને સંપૂર્ણપણે ફ્રેમની અંદર છે","MathWeb_ViewSteps":"View solution steps","Quiz_Try_Label":"કોઈ ક્વિઝમાં ભાગ લો","MathAnswerView_Concepts":"સંબંધિત વિભાવના","Generic_PDF":"PDF","MathAnswerView_Worksheets":"वेब खोज से कार्यपत्रक","MathAnswerView_Worksheets_Short":"કાર્યપત્રકો","MathAnswerView_RelatedPages":"વેબ શોધમાંથી સમાન પ્રશ્નો","Results_Items":"આઇટમ્સ","Generic_Share":"શેર કરો","Generic_Copy":"કૉપિ કરો","Share_CopiedToClipboard":"ક્લિપબોર્ડ પર કૉપિ કરી","Accessibility_MathAnswerView_PoweredByBing":"Bing દ્વારા સંચાલિત","MathAnswerView_PoweredByBing":"આમના દ્વારા સંચાલિત","MathAnswerView_EquationIsFalse":"ખોટું","MathAnswerView_EquationIsTrue":"સાચુ","Feedback_Thanks":"આભાર!","Feedback_Title":"શું આ પરિણામો ઉપયોગી હતાં?","MathAnswerView_DesktopUpsell_SectionHeader":"ડેસ્કટ .પ સંસ્કરણ ઉપલબ્ધ છે","SketchInput_ClearLabel":"સ્કેચ સાફ કરો","SketchInput_Clear":"CLR","SketchInput_PenLabel":"પેનનો ઉપયોગ કરો","SketchInput_EraserLabel":"ઇરેઝરનો ઉપયોગ કરો","SketchInput_UndoLabel":"છેલ્લો સ્ટ્રોક પૂર્વવત્ કરો","SketchInput_Info":"કોઈ પ્રશ્ન નીચે દોરો","SketchInput_SubmitLabel":"સમીકરણ સબમિટ કરો","Teams_Solve_Waiting":"Solving this expression...","Teams_RelatedTo":"Related To","MathWeb_PageTopicRootTitle":"ગણિત સંબંધિત વિષયો એક્સપ્લોર કરો","MathWeb_PageTopicDescriptionFormat":"અમારા મફત મૅથ સોલ્વરનો ઉપયોગ કરીને પગલાંવાર ઉકેલો દ્વારા {0} શીખો."},"kn":{"Generic_Back":"ಹಿಂದೆ","MathWeb_GenericDownload":"ಡೌನ್ ಲೋಡ್","MathWeb_PageTopicRootDescription":"Microsoft ಮ್ಯಾಥ್ ಸಾಲ್ವರ್ ಅಪ್ಲಿಯು ಸುಧಾರಿತ AI ಪ್ರಾಯೋಜಿತ ಗಣಿತ ಸಾಲ್ವರ್ ಬಳಸುತ್ತಾ ಅಂಕಗಣಿತ, ಬೀಜಗಣಿತ, ಟ್ರಿಗ್ನಾಮೆಟ್ರಿ, ಕ್ಯಾಲ್ಕುಲಸ್, ಸ್ಟ್ಯಾಟಿಸ್ಟಿಕ್ಸ್, ಮತ್ತು ಇತರ ವಿಷಯಗಳನ್ನು ಒಳಗೊಂಡು ವೈವಿಧ್ಯ ಸಮಸ್ಯೆಗಳೊಂದಿಗೆ ಹಂತ-ಹಂತವಾದ ಸಹಾಯ ಒದಗಿಸುತ್ತದೆ.","MathWeb_Download_MobileHeading":"ನಿಮ್ಮ ಬೆರಳಿನ ಸಲಹೆಗಳಲ್ಲಿ ಹಂತ ಹಂತವಾದ ಪರಿಹಾರಗಳು","MathWeb_Download_IOS":"ಐಒಎಸ್ ಗೆ ಡೌನ್ ಲೋಡ್.","MathWeb_Download_Android":"ಆಂಡ್ರಾಯ್ಡ್ ಗೆ ಡೌನ್ ಲೋಡ್.","MathWeb_Download_InstalledMessage":"ಅಪ್ಲಿಕೇಶನ್ ಈಗಾಗಲೇ ಸ್ಥಾಪನೆಗೊಂಡಿದೆ","MathWeb_Download_Button":"ಗಣಕತೆರೆ app ಅನ್ನು ಡೌನ್ ಲೋಡ್ ಮಾಡಿ","MathWeb_Download_Unavailable":"ಡೆಸ್ಕ್ ಟಾಪ್ ಆಪ್ ಅಲಭ್ಯ","MathWeb_Download_MacMessage":"ಪ್ರಸ್ತುತ, ಮ್ಯಾಥ್ಸ್ ಸೋಲ್ವರ್ ಡೆಸ್ಕ್ ಟಾಪ್ ಆಪ್ ಕೇವಲ ಮ್ಯಾಕ್ ಒಎಕ್ಸ್ ನಲ್ಲಿ ಕ್ರೋಮ್ ಮೂಲಕ ಲಭ್ಯವಿದೆ. ಆಪ್ ಇನ್ಸ್ಟಾಲ್ ಮಾಡಲು ದಯವಿಟ್ಟು ಕ್ರೋಮ್ ನಲ್ಲಿ ಈ ಪುಟವನ್ನು ತೆರೆಯಿರಿ.","MathWeb_Download_UnknownMessage":"ಪ್ರಸ್ತುತ, ಮ್ಯಾಥ್ಸ್ ಸೋಲ್ವರ್ ಡೆಸ್ಕ್ ಟಾಪ್ ಕೇವಲ ಮೈಕ್ರೋಸಾಫ್ಟ್ ಎಡ್ಜ್ ಮತ್ತು ಕ್ರೋಮ್ ಮೂಲಕ ಲಭ್ಯವಿದೆ. ಹೊಂದಿಕೆಯಾಗುವ ಬ್ರೌಸರ್ ನಲ್ಲಿ ದಯವಿಟ್ಟು ಈ ಪುಟವನ್ನು ತೆರೆಯಿರಿ.","EDU_PROB_CATEGORY_LIN_EQ":"ರೇಖಾ ಸಮೀಕರಣ","EDU_PROB_CATEGORY_QUAD_EQ":"ವರ್ಗ ಸಮೀಕರಣ","EDU_PROB_CATEGORY_ARITHMETIC":"ಅಂಕಗಣಿತ","EDU_PROB_CATEGORY_TRIG":"ಟ್ರಿಗ್ನಾಮೆಟ್ರಿ","EDU_PROB_CATEGORY_MATRIX":"ಮ್ಯಾಟ್ರಿಕ್ಸ್","EDU_PROB_CATEGORY_SIM_EQ":"ಏಕಕಾಲಿಕ ಸಮೀಕರಣ","EDU_PROB_CATEGORY_DIFF":"ಡಿಫರೆನ್ಶಿಯೇಶನ್","EDU_PROB_CATEGORY_INTEGRATION":"ಇಂಟಿಗ್ರೇಶನ್","EDU_PROB_CATEGORY_LIMITS":"ಮಿತಿಗಳು","EDU_PROB_CATEGORY_COMPLEX":"ಸಂಕೀರ್ಣ ಸಂಖ್ಯೆಗಳು","EDU_PROB_CATEGORY_LIST":"ಪಟ್ಟಿ","NotebookTab_Example":"ಉದಾಹರಣೆಗಳು","MathWeb_GenericSolve":"ಪರಿಹರಿಸಿ","MathResult_Graph_ReCenter":"ಪುನಃ-ಕೇಂದ್ರೀಕರಿಸಿ","MathWeb_Keyboard_Algebra":"ಬೀಜಗಣಿತ","MathWeb_Keyboard_Calculus":"ಕಲನಶಾಸ್ತ್ರ","MathWeb_Keyboard_List":"ಪಟ್ಟಿ","MathWeb_Keyboard_Matrices":"ಮಾತೃಕೆಗಳು","MathWeb_Keyboard_Numbers":"ಸಂಖ್ಯೆಯಲ್ಲಿ","MathWeb_Keyboard_Operators":"ಆಪರೇಟರ್ ಗಳು","MathWeb_Keyboard_Statistics":"ಅಂಕಿ","MathWeb_Keyboard_Trig":"trigonometry","MathWeb_Keyboard_Variables":"ಚರಾಸ್ತಿಗಳನ್ನು","KeyboardInput_Solve":"ಪರಿಹರಿಸಿ","KeyboardInput_PlaceholderText":"ಗಣಿತದ ಸಮಸ್ಯೆಯನ್ನು ಟೈಪ್ ಮಾಡಿ","MathWeb_Section_Steps_Title":"ಹಂತ-ಹಂತವಾದ ವಿವರಣೆಗಳನ್ನು ಪಡೆಯಿರಿ","MathWeb_Section_Steps_Subtitle":"ಪ್ರಶ್ನೆಗಳನ್ನು ಹೇಗೆ ಪರಿಹರಿಸುವುದು ಮತ್ತು ನಿಮ್ಮ ಕೆಲಸವನ್ನು ಹೇಗೆ ತೋರಿಸುವುದು ಎಂಬುದನ್ನು ನೋಡಿ—ಜೊತೆಗೆ ಗಣಿತದ ಪರಿಕಲ್ಪನೆಗಳಿಗೆ ವ್ಯಾಖ್ಯೆಗಳನ್ನು ಪಡೆಯಿರಿ","MathWeb_Section_Graph_Title":"ನಿಮ್ಮ ಗಣಿತದ ಪ್ರಶ್ನೆಗಳನ್ನು ಗ್ರಾಫ್ ಮಾಡಿ","MathWeb_Section_Graph_Subtitle":"ನಿಮ್ಮ ಕಾರ್ಯವನ್ನು ದೃಶ್ಯೀಕರಿಸಲು ಮತ್ತು ವೇರಿಯೆಬಲ್‌ಗಳ ನಡುವಣದ ಸಂಬಂಧವನ್ನು ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಲು ಯಾವುದೇ ಸಮೀಕರಣವನ್ನು ತ್ವರಿತವಾಗಿ ಗ್ರಾಫ್ ಮಾಡಿ","MathWeb_Section_Practice_Title":"ಅಭ್ಯಾಸ, ಅಭ್ಯಾಸ, ಅಭ್ಯಾಸ","MathWeb_Section_Practice_Subtitle":"ಸಂಬಂಧಿತ ಕಾರ್ಯಹಾಳೆಗಳು ಮತ್ತು ವೀಡಿಯೊ ಟ್ಯುಟೋರಿಯಲ್‌ಗಳಂತಹ, ಹೆಚ್ಚುವರಿ ಕಲಿಕಾ ಸಾಮಗ್ರಿಗಳಿಗಾಗಿ ಶೋಧಿಸಿ","MathWeb_Section_Language_Title":"ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಗಣಿತದ ಸಹಾಯವನ್ನು ಪಡೆಯಿರಿ","MathWeb_Section_Language_Subtitle":"ಸ್ಪ್ಯಾನಿಷ್, ಹಿಂದಿ, ಜರ್ಮನ್, ಮತ್ತು ಹೆಚ್ಚಿನ ಭಾಷೆಗಳಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"ಗಣಿತ ಸಾಲ್ವರ್ ಅನ್ನು ಪ್ರಯತ್ನಿಸಿ","MathAnswerView_Videos":"ವೀಡಿಯೊಗಳು","MathWeb_Section_Video_Subtitle":"ಹೊಸ ಫೀಚರ್ಸ್, ಟಿಪ್ಸ್ ಮತ್ತು ಹೆಚ್ಚು ಹೊತ್ತು ವೀಕ್ಷಿಸಿ!","MathWeb_Title":"ನಿಮ್ಮ ಗಣಿತದ ಸಮಸ್ಯೆಗಳಿಗೆ ಹಂತ-ಹಂತವಾದ ಪರಿಹಾರ ಪಡೆಯಿರಿ","Results_Less":"ಕಡಿಮೆ {0}","Results_More":"ಇನ್ನಷ್ಟು {0}","MathPracticeProblem_SectionHeader":"ಅಭ್ಯಾಸ","MathWeb_PopularProblems":"ಜನಪ್ರಿಯ ಸಮಸ್ಯೆಗಳನ್ನು","MathWeb_SolveProblemTitleFormat":"{0} ಪರಿಹರಿಸಿ | Microsoft ಮ್ಯಾಥ್‌ ಸಾಲ್ವರ್","MathWeb_SolveProblemDescription":"ನಮ್ಮ ಉಚಿತ ಗಣಿತ ಸಾಲ್ವರ್ ಅನ್ನು ಬಳಸುತ್ತಾ ಹಂತ-ಹಂತವಾದ ಪರಿಹಾರಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಗಣಿತದ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹಾರ ಮಾಡಿಕೊಳ್ಳಿ. ನಮ್ಮ ಗಣಿತ ಸಾಲ್ವರ್ ಮೂಲ ಗಣಿತ, ಪೂರ್ವ-ಬೀಜಗಣಿತ, ಬೀಜಗಣಿತ, ಟ್ರಿಗ್ನಾಮೆಟ್ರಿ, ಕ್ಯಾಲ್ಕುಲಸ್ ಮತ್ತು ಹೆಚ್ಚಿನದನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.","Generic_About":"ಬಗ್ಗೆ","MathWeb_Topics":"ವಿಷಯಗಳ","Generic_PrivacyPolicy":"ಗೌಪ್ಯತೆ ನೀತಿ","Generic_TermOfUse":"ಸೇವಾ ನಿಯಮಗಳು","Settings_Language":"ಭಾಷೆ","MathWeb_BackToTop":"ಮತ್ತೆ ಮೇಲ್ದರ್ಜೆಗೆ","MathWeb_SimilarProblems":"ಇದೇ ರೀತಿಯ ಸಮಸ್ಯೆಗಳು","MathWeb_Topic_PreAlgebra":"ಪೂರ್ವ ಬೀಜಗಣಿತ","MathWeb_Topic_PreAlgebra2":"ಪೂರ್ವ ಬೀಜಗಣಿತ 2","MathWeb_Topic_OrderOfOperations":"ಆರ್ಡರ್ ಆಫ್ ಆಪರೇಶನ್ಸ್","MathWeb_Topic_PrimeFactorization":"ಪ್ರೈಮ್ ಫ್ಯಾಕ್ಟೋರೈಸೇಶನ್.","MathWeb_Topic_Fractions":"ಭಿನ್ನತೆಗಳು","MathWeb_Topic_LCM":"ಕನಿಷ್ಠ ಸಾಮಾನ್ಯ ಬಹು","MathWeb_Topic_GCF":"ಬಹುದೊಡ್ಡ ಸಾಮಾನ್ಯ ಅಂಶವಾಗಿದೆ","MathWeb_Topic_Mean":"ಅರ್ಥ","MathWeb_Topic_Mode":"ಮೋಡ್","MathWeb_Topic_Exponents":"ಪ್ರತಿಪಾದಕರು","MathWeb_Topic_Radicals":"ರ್ಯಾಡಿಕಲ್","MathWeb_Topic_MixedFractions":"ಮಿಶ್ರ ಭಿನ್ನತೆಗಳು","MathWeb_Topic_Algebra":"ಬೀಜಗಣಿತ","MathWeb_Topic_Algebra2":"ಬೀಜಗಣಿತ 2","MathWeb_Topic_CombineLikeTerms":"ಕರಾರಿನಂತೆ ಸಂಯೋಜನೆ ಮಾಡಿ","MathWeb_Topic_SolveForVariable":"ಒಂದು ವೇರಿಯೇಬಲ್ ಗೆ ಪರಿಹಾರ","MathWeb_Topic_LinearEquations":"ರೇಖೀಯ ಸಮೀಕರಣಗಳು","MathWeb_Topic_QuadraticEquations":"ಕ್ವಾಟಿಕ್ ಸಮೀಕರಣಗಳು","MathWeb_Topic_Matrices":"ಮಾತೃಕೆಗಳು","MathWeb_Topic_Inequalities":"ಅಸಮಾನತೆ","MathWeb_Topic_SystemsOfEquations":"ಸಮೀಕರಣಗಳ ವ್ಯವಸ್ಥೆಗಳು","MathWeb_Topic_Factor":"ಅಂಶ","MathWeb_Topic_Expand":"ವಿಸ್ತರಣೆ","MathWeb_Topic_EvaluteFractions":"-ಭಿನ್ನತೆಗಳ ಮೌಲ್ಯಮಾಪನ","MathWeb_Topic_Trigonometry":"Trigonometry","MathWeb_Topic_Simplify":"ಸರಳಗೊಳಿಸಲು","MathWeb_Topic_Evaluate":"ಮೌಲ್ಯಮಾಪನ","MathWeb_Topic_Graphs":"ಗ್ರಾಫ್","MathWeb_Topic_SolveEquations":"ಸಮೀಕರಣಗಳನ್ನು ಪರಿಹರಿಸುವುದು","MathWeb_Topic_Calculus":"ಕಲನಶಾಸ್ತ್ರ","MathWeb_Topic_Derivatives":"ಉತ್ಪನ್ನವಾಕ್ಯಗಳನ್ನು","MathWeb_Topic_Integrals":"ಇಂಟೆಗ್ರಲ್ಸ್","MathWeb_Topic_Limits":"ಮಿತಿಗಳನ್ನು","MathWeb_CalculatorTitle":"{0} | Microsoft ಮ್ಯಾಥ್‌ ಸಾಲ್ವರ್","MathWeb_AlgebraCalculator":"ಬೀಜಗಣಿತದ ಕ್ಯಾಲ್ಕುಲೇಟರ್","MathWeb_TrigCalculator":"ಟ್ರಿಗ್ನಾಮೆಟ್ರಿ ಕ್ಯಾಲ್ಕುಲೇಟರ್","MathWeb_CalculusCalculator":"ಕ್ಯಾಲ್ಕುಲಸ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್","MathWeb_MatrixCalculator":"ಮ್ಯಾಟ್ರಿಕ್ಸ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್.","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"ರಸಪ್ರಶ್ನೆ ರಚಿಸುತ್ತಿದೆ...","Quiz_Error_Header":"ಕ್ಷಮಿಸಿ, ಆ ಪ್ರಕಾರದ ಪ್ರಶ್ನೆಯ ಆಧಾರದ ಮೇಲೆ ರಸಪ್ರಶ್ನೆಯನ್ನು ರಚಿಸಲು ನಾವು ಸಮರ್ಥರಾಗಿಲ್ಲ. ದಯವಿಟ್ಟು ಇನ್ನೊಂದು ಪ್ರಶ್ನೆಯ ಪ್ರಕಾರವನ್ನು ಪ್ರಯತ್ನಿಸಿ.","Quiz_Notebook_ProblemCount_Template":"{0} ಇದೇ ತರಹದ ಪ್ರಶ್ನೆಗಳು:","NoResults_MathSolveError":"ಏನೋ ತಪ್ಪಾಗಿದೆ, ದಯವಿಟ್ಟು ಪುನಃ ಪ್ರಯತ್ನಿಸಿ","Quiz_Completion_Date":"{0} ರಂದು ಪೂರ್ಣಗೊಳಿಸಿದೆ","Quiz_Result_Correct":"ಸರಿ","Quiz_Total_Score_Template":"ನೀವು {1} ರಲ್ಲಿ {0} ಪ್ರಶ್ನೆಗಳನ್ನು ಸರಿಯಾಗಿ ಉತ್ತರಿಸಿದ್ದೀರಿ.","Quiz_Complete_Header":"ರಸಪ್ರಶ್ನೆ ಪೂರ್ಣವಾಗಿದೆ","Quiz_End_Finish":"ಮುಗಿಸು","KeyboardInput_Undo":"ರದ್ದು ಮಾಡು","MathWeb_DeleteAll":"ಡಿಲೀಟ್ ಆಲ್","MathWeb_MyQuizzes":"ನನ್ನ ಕ್ವಿಜ಼್","MathWeb_QuizNotFound":"ಕ್ವಿಜ್ ಕಂಡುಬಂದಿಲ್ಲ","Quiz_NextProblem":"ಮುಂದಿನ ಪ್ರಶ್ನೆ","Quiz_CheckProblem":"ಪರಿಶೀಲಿಸು","Quiz_Answer_Prompt":"ಪ್ರಶ್ನೆಗೆ ಉತ್ತರವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ:","Quiz_HintButton":"ನನಗೆ ಸಹಾಯ ಮಾಡಿ","MathWeb_NewQuiz":"ಹೊಸ ಕ್ವಿಜ್","Quiz_StartScreen_Question_Count_Template":"{0} ಬಹು ಆಯ್ಕೆಯ ಪ್ರಶ್ನೆಗಳು","Quiz_StartScreen_Header":"ರಸಪ್ರಶ್ನೆಗೆ ಸಿದ್ಧರಿದ್ದೀರಾ?","Quiz_StartScreen_Time_Template":"ಪೂರ್ಣಗೊಳಿಸಲು {0} ನಿಮಿಷಗಳು","Quiz_Start":"ಪ್ರಾರಂಭಿಸಿ","Quiz_Result_Incorrect":"ತಪ್ಪು","Quiz_Result_Your_Answer":"ನಿಮ್ಮ ಉತ್ತರ:","Quiz_Result_See_Solution":"ಪರಿಹಾರ ನೋಡಿ","Quiz_Entity":"ರಸಪ್ರಶ್ನೆ","MathWeb_InProgress":"ಪ್ರಗತಿಯಲ್ಲಿ","MathWeb_ConfirmQuizDelete":"ನೀವು ಖಚಿತವಾಗಿ ಎಲ್ಲಾ ಕ್ವಿಜ಼್ ಗಳನ್ನು ಅಳಿಸಲು ಬಯಸುತ್ತಿದ್ದೀರಿ?","Generic_Edit":"ಸಂಪಾದಿಸಿ","Generic_Close":"ಮುಚ್ಚು","MathResult_GraphHeader":"ಗ್ರಾಫ್‌","Teams_ViewInteractiveGraph":"ಸಂವಾದಾತ್ಮಕ ಗ್ರಾಫ್ ವೀಕ್ಷಿಸಿ","Network_Offline_Message":"ನೀವು ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿದ್ದೀರಿ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್ ಪರೀಕ್ಷಿಸಿ.","NoResults_MathEquation":"ಈ ಸಮೀಕರಣವನ್ನು ಪತ್ತೆ ಮಾಡಿದೆ:","NoResults_MathError":"ನಮಗೆ ಆ ಪ್ರಕಾರದ ಸಮೀಕರಣವನ್ನು ಪರಿಹರಿಸಲಾಗುವುದಿಲ್ಲ ಅಥವಾ ಅದು ದೋಷವನ್ನು ಒಳಗೊಂಡಿರಬಹುದು","NoResults_NoMath":"ಕ್ಷಮಿಸಿ, ನಾವು ಸಮೀಕರಣವನ್ನು ನೋಡುತ್ತಿಲ್ಲ. ಅದು ಸ್ವಚ್ಛವಾಗಿದೆ ಮತ್ತು ಸಂಪೂರ್ಣವಾಗಿ ಫ್ರೇಮ್‌ನಲ್ಲಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ","MathWeb_ViewSteps":"ಪರಿಹಾರ ಹಂತಗಳನ್ನು ವೀಕ್ಷ","Quiz_Try_Label":"ರಸಪ್ರಶ್ನೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿ","MathAnswerView_Concepts":"ಸಂಬಂಧಿತ ಪರಿಕಲ್ಪನೆಗಳು","Generic_PDF":"PDF","MathAnswerView_Worksheets":"ವೆಬ್ ಶೋಧದಿಂದ ಕಾರ್ಯಹಾಳೆಗಳು","MathAnswerView_Worksheets_Short":"ಕಾರ್ಯಹಾಳೆಗಳು","MathAnswerView_RelatedPages":"ವೆಬ್ ಶೋಧದಿಂದ ಅದೇ ತರಹದ ಸಮಸ್ಯೆಗಳು","Results_Items":"ಐಟಂಗಳು","Generic_Share":"ಹಂಚಿ","Generic_Copy":"ನಕಲಿಸಿ","Share_CopiedToClipboard":"ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಿ","Accessibility_MathAnswerView_PoweredByBing":"Bing ನಿಂದ ಪ್ರಾಯೋಜಿತವಾಗಿದೆ","MathAnswerView_PoweredByBing":"ಪ್ರಾಯೋಜಕರು","MathAnswerView_EquationIsFalse":"ತಪ್ಪು","MathAnswerView_EquationIsTrue":"ಸರಿ","Feedback_Thanks":"ಧನ್ಯವಾದಗಳು!","Feedback_Title":"ಈ ಫಲಿತಾಂಶಗಳು ಸಹಕಾರಿಯಾಗಿದ್ದವೇ?","MathAnswerView_DesktopUpsell_SectionHeader":"ಡೆಸ್ಕ್ಟಾಪ್ ಆವೃತ್ತಿ ಲಭ್ಯವಿದೆ","SketchInput_ClearLabel":"ಸ್ಕೆಚ್ ತೆರವುಗೊಳಿಸಿ","SketchInput_Clear":"CLR","SketchInput_PenLabel":"ಪೆನ್ ಬಳಸಿ","SketchInput_EraserLabel":"ಎರೇಸರ್ ಬಳಸಿ","SketchInput_UndoLabel":"ಕೊನೆಯ ಸ್ಟ್ರೋಕ್ ಅನ್ನು ರದ್ದು ಮಾಡಿ","SketchInput_Info":"ಕೆಳಗೆ ಸಮಸ್ಯೆಯನ್ನು ಚಿತ್ರಿಸಿ","SketchInput_SubmitLabel":"ಅಭಿವ್ಯಕ್ತತೆ ಸಲ್ಲಿಸಿ","Teams_Solve_Waiting":"ಈ ಅಭಿವ್ಯಕ್ತಿಯನ್ನು ಪರಿಹರಿಸುವುದು...","Teams_RelatedTo":"ಇದಕ್ಕೆ ಸಂಬಂಧಿಸಿದ","MathWeb_PageTopicRootTitle":"ಗಣಿತದ ವಿಷಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ","MathWeb_PageTopicDescriptionFormat":"ನಮ್ಮ ಉಚಿತ ಗಣಿತ ಸಾಲ್ವರ್ ಅನ್ನು ಬಳಸುತ್ತಾ ಹಂತ-ಹಂತವಾದ ಪರಿಹಾರಗಳೊಂದಿಗೆ {0} ಬಗ್ಗೆ ತಿಳಿಯಿರಿ."},"kok":{"Generic_Back":"फाटीं","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"अंकगणीत, बिजगणीत, त्रिकोणगणीत, कॅलकुलस्, आंकडेशास्त्र आनी हेर विशय प्रगत AI प्रस्तुत मॅथ सॉल्वर आनी मायक्रोसॉफ्ट मॅथ सॉल्वर ॲपच्या मजतीन पावंड्या पावंड्यान सोडोवपाक मजत जाता.","MathWeb_Download_MobileHeading":"Step-by-step solutions at your finger tips","MathWeb_Download_IOS":"Download for iOS","MathWeb_Download_Android":"Download for Android","MathWeb_Download_InstalledMessage":"App already installed","MathWeb_Download_Button":"Download desktop app","MathWeb_Download_Unavailable":"Desktop app unavailable","MathWeb_Download_MacMessage":"Currently, the Math Solver desktop app is only available via Chrome on MacOSX. Please open this page in Chrome to install the app.","MathWeb_Download_UnknownMessage":"Currently, the Math Solver desktop is only available via Microsoft Edge and Chrome. Please open this page in a compatible browser.","EDU_PROB_CATEGORY_LIN_EQ":"रेखीय समीकरण","EDU_PROB_CATEGORY_QUAD_EQ":"द्विघात समीकरण","EDU_PROB_CATEGORY_ARITHMETIC":"गणीत","EDU_PROB_CATEGORY_TRIG":"त्रिकोणमिती","EDU_PROB_CATEGORY_MATRIX":"मॅट्रिक्स","EDU_PROB_CATEGORY_SIM_EQ":"समकालीन समीकरण","EDU_PROB_CATEGORY_DIFF":"भेदभाव","EDU_PROB_CATEGORY_INTEGRATION":"एकीकरण","EDU_PROB_CATEGORY_LIMITS":"मर्यादा","EDU_PROB_CATEGORY_COMPLEX":"जटील आंकडे","EDU_PROB_CATEGORY_LIST":"सुची","NotebookTab_Example":"देखीक","MathWeb_GenericSolve":"सोडयात","MathResult_Graph_ReCenter":"परत-केंद्रीत","MathWeb_Keyboard_Algebra":"algebra","MathWeb_Keyboard_Calculus":"calculus","MathWeb_Keyboard_List":"list","MathWeb_Keyboard_Matrices":"matrices","MathWeb_Keyboard_Numbers":"numbers","MathWeb_Keyboard_Operators":"operators","MathWeb_Keyboard_Statistics":"statistics","MathWeb_Keyboard_Trig":"trigonometry","MathWeb_Keyboard_Variables":"variables","KeyboardInput_Solve":"सोडयात","KeyboardInput_PlaceholderText":"math समस्या टंक करची","MathWeb_Section_Steps_Title":"पांवड्या पांवड्या स्पश्टीकरण मेळोवचें","MathWeb_Section_Steps_Subtitle":"समस्या कशी सोडोवची ती पळोवची आनी तुमचें काम दाखोवचें—तशेंच गणिताच्या संकल्पनाक व्याख्या मेळोवची","MathWeb_Section_Graph_Title":"तुमची गणीत समस्या ग्राफ करची","MathWeb_Section_Graph_Subtitle":"तुमचें कार्य पळोवंक, खंयचेंय समीकरण रोखडेंच ग्राफ करचें आनी बदलप्यां मदलें नातें समजुचें","MathWeb_Section_Practice_Title":"सराव, सराव, सराव","MathWeb_Section_Practice_Subtitle":"कार्यपत्रकां आनी व्हिडिओ ट्युटोरियल्यस सारक्या अतिरिक्त अध्ययन सामायन सोदचें","MathWeb_Section_Language_Title":"तुमचे भाशेंतल्यान गणीत सोडोवंक आदार मेळोवचो","MathWeb_Section_Language_Subtitle":"स्पॅनीश, हिंदी, जर्मन आनी खूब भासांनी काम","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"मॅथ सॉल्वर वापरून पळयात","MathAnswerView_Videos":"व्हिडिओ","MathWeb_Section_Video_Subtitle":"Watch for new features, tips and more!","MathWeb_Title":"तुमच्या गणितांच्या प्रस्नांक खातीर पावंड्या पावंड्यान जापो मेळयात","Results_Less":"{0} कमी","Results_More":"{0} चड","MathPracticeProblem_SectionHeader":"सराव","MathWeb_PopularProblems":"Popular Problems","MathWeb_SolveProblemTitleFormat":"सोडोवचें {0} | मायक्रोसॉफ्ट मॅथ सॉलवर","MathWeb_SolveProblemDescription":"आमच्या मोफत मॅथ सॉल्वरान तुमच्या गणितांचे प्रस्न पावंड्या पावंड्यान सोडयात. आमचे मॅथ सॉल्वर मुळावे गणीत, पुर्व बीजगणीत, बीजगणीत, त्रिकोणमिती, गणीताचो एक वांटो आनी हेर सोडोवपाक मजत करता.","Generic_About":"About","MathWeb_Topics":"Topics","Generic_PrivacyPolicy":"गुप्तताय धोरण","Generic_TermOfUse":"सेवेचे नेम","Settings_Language":"भास","MathWeb_BackToTop":"Back to top","MathWeb_SimilarProblems":"Similar Problems","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Order of Operations","MathWeb_Topic_PrimeFactorization":"Prime Factorization","MathWeb_Topic_Fractions":"Fractions","MathWeb_Topic_LCM":"Least Common Multiple","MathWeb_Topic_GCF":"Greatest Common Factor","MathWeb_Topic_Mean":"Mean","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Exponents","MathWeb_Topic_Radicals":"Radicals","MathWeb_Topic_MixedFractions":"Mixed Fractions","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Combine Like Terms","MathWeb_Topic_SolveForVariable":"Solve for a Variable","MathWeb_Topic_LinearEquations":"Linear Equations","MathWeb_Topic_QuadraticEquations":"Quadratic Equations","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Inequalities","MathWeb_Topic_SystemsOfEquations":"Systems of Equations","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Expand","MathWeb_Topic_EvaluteFractions":"Evaluate Fractions","MathWeb_Topic_Trigonometry":"Trigonometry","MathWeb_Topic_Simplify":"Simplify","MathWeb_Topic_Evaluate":"Evaluate","MathWeb_Topic_Graphs":"Graphs","MathWeb_Topic_SolveEquations":"Solve Equations","MathWeb_Topic_Calculus":"Calculus","MathWeb_Topic_Derivatives":"Derivatives","MathWeb_Topic_Integrals":"Integrals","MathWeb_Topic_Limits":"Limits","MathWeb_CalculatorTitle":"{0} Microsoft मॅथ सॉल्वर","MathWeb_AlgebraCalculator":"बिजगणीत मेजपी","MathWeb_TrigCalculator":"त्रिकेणमिती मेजपी","MathWeb_CalculusCalculator":"गणिताचो एक वांटो मेजपी","MathWeb_MatrixCalculator":"Matrix Calculator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"प्रस्नमाची तयार करता...","Quiz_Error_Header":"माफ करता, आमी तश्या प्रकारच्या समस्येचेर आदारून प्रस्न माची तयार करूंक शकनात. उपकार करून दुसरी समस्या सोडयात.","Quiz_Notebook_ProblemCount_Template":"कडेन {0} समस्या समान:","NoResults_MathSolveError":"किदें तरी चुकीचें घडलां, उपकार करून परत येत्न करचो","Quiz_Completion_Date":"पुराय जाल्यात {0}","Quiz_Result_Correct":"बरोबर","Quiz_Total_Score_Template":"तुवें {1} प्रस्नांतलो {0} जापो बरोबर दिल्यात.","Quiz_Complete_Header":"प्रस्नमाची पुराय जाल्यात","Quiz_End_Finish":"समाप्त","KeyboardInput_Undo":"परत करचें","MathWeb_DeleteAll":"Delete all","MathWeb_MyQuizzes":"My quizzes","MathWeb_QuizNotFound":"Quiz not found","Quiz_NextProblem":"फुडलीं समस्या","Quiz_CheckProblem":"तपासचें","Quiz_Answer_Prompt":"समस्ये खातीर जाप वेंचात:","Quiz_HintButton":"म्हाका मदत करात","MathWeb_NewQuiz":"New quiz","Quiz_StartScreen_Question_Count_Template":"{0} भौविक्लपीय प्रस्न","Quiz_StartScreen_Header":"प्रस्नमाचये खातीर तयार?","Quiz_StartScreen_Time_Template":"पुराय करपाक {0} मिनटा","Quiz_Start":"सुरवात करची","Quiz_Result_Incorrect":"चूक","Quiz_Result_Your_Answer":"तुमची जाप:","Quiz_Result_See_Solution":"समाधान पळयात","Quiz_Entity":"प्रस्नमाची","MathWeb_InProgress":"In progress","MathWeb_ConfirmQuizDelete":"Are you sure you want to delete all quizzes?","Generic_Edit":"संपादन करचें","Generic_Close":"बंद करचें","MathResult_GraphHeader":"ग्राफ","Teams_ViewInteractiveGraph":"View Interactive Graph","Network_Offline_Message":"तुमी ऑफलायन आसात. उपकार करून तुमचें नॅटवर्क तपासचें.","NoResults_MathEquation":"हें समीकरण मेळ्ळां:","NoResults_MathError":"आमी तसल्या प्रकाराचें समीकरण सोडोवंक शकनात वा तातूंत घडये त्रुटी आसतली","NoResults_NoMath":"माफ करचें, आमकां एकूय समीकरण दिसना. तें सामकें आसा आनी पूर्ण फ्रेमींत आसा हाची खात्री करची.","MathWeb_ViewSteps":"View solution steps","Quiz_Try_Label":"प्रस्नमाची सोडोवन पळयात","MathAnswerView_Concepts":"संबंदीत विशय","Generic_PDF":"PDF","MathAnswerView_Worksheets":"वॅब सोदांतलें वर्कशीट","MathAnswerView_Worksheets_Short":"वर्कशीट","MathAnswerView_RelatedPages":"वॅब सोदांतल्यान समान समस्या","Results_Items":"आयटम्स","Generic_Share":"वांटचें","Generic_Copy":"प्रत","Share_CopiedToClipboard":"क्लिपबोर्डाचेर नक्कल केलां","Accessibility_MathAnswerView_PoweredByBing":"Bing हाचे कडल्यान समर्थीत","MathAnswerView_PoweredByBing":"प्रेरीत केलां","MathAnswerView_EquationIsFalse":"चुकीचें","MathAnswerView_EquationIsTrue":"खरें","Feedback_Thanks":"दिनवास!","Feedback_Title":"हे परिणाम उपयोगी आशिल्ले?","MathAnswerView_DesktopUpsell_SectionHeader":"डॅस्कटॉप वर्जन उपलब्द","SketchInput_ClearLabel":"स्कॅच नितळ करचो","SketchInput_Clear":"CLR","SketchInput_PenLabel":"पॅन वापरचें","SketchInput_EraserLabel":"इरेजर वापरचो","SketchInput_UndoLabel":"निमाणो स्ट्रोक परत करचो","SketchInput_Info":"सकयल एक समस्या रेखाटन करची","SketchInput_SubmitLabel":"ऍक्सप्रॅशन दाखल करचें","Teams_Solve_Waiting":"Solving this expression...","Teams_RelatedTo":"Related To","MathWeb_PageTopicRootTitle":"गणिती वशय सोदात","MathWeb_PageTopicDescriptionFormat":"पावंड्या पावंड्या समाधाना शकत आमचे मॅथ सॉल्वर वापरपा {0} विशीं जाणून घेयात."},"ml":{"Generic_Back":"പിന്നിലേക്ക്","MathWeb_GenericDownload":"ഡൗൺലോഡ്","MathWeb_PageTopicRootDescription":"നൂതന AI പവേർഡ് ഗണിത സോൾവർ ഉപയോഗിച്ച് അരിത്‌മറ്റിക്ക്, ആൽജിബ്ര, ട്രിഗണോമെട്രി, കാൽക്കുലസ്, സ്റ്റാറ്റിസ്റ്റിക്‌സ്, മറ്റ് ടോപ്പിക്കുകൾ എന്നിവ ഉൾപ്പെടെ വിവിധ പ്രോബ്ലങ്ങളിൽ ഘട്ടം ഘട്ടമായുള്ള സഹായം Microsoft ഗണിത സോൾവർ ആപ്പ് നൽകുന്നു.","MathWeb_Download_MobileHeading":"നിങ്ങളുടെ ഫിംഗർ ടിപ്പിൽ ചുവട്-സ്റ്റെപ്പ് സൊലൂഷനുകൾ","MathWeb_Download_IOS":"ഐഒഎസിനു വേണ്ടി ഡൗൺലോഡ് ചെയ്യുക","MathWeb_Download_Android":"ആൻഡ്രോയ്ഡിനു വേണ്ടി ഡൗൺലോഡ് ചെയ്യുക","MathWeb_Download_InstalledMessage":"ആപ്പ് ഇതിനകം ഇൻസ്റ്റാൾ ചെയ്തു","MathWeb_Download_Button":"പണിയിട ആപ് ഡൌണ് ലോഡ് ചെയ്യുക","MathWeb_Download_Unavailable":"പണിയിട ആപ് ലഭ്യമല്ല","MathWeb_Download_MacMessage":"നിലവിൽ, മാക് ഓക്സിൽ ക്രോം വഴി മാത്രമേ ഗണിത സോർ ഡെസ്ക്ടോപ്പ് ആപ്ലിക്കേഷൻ ലഭ്യമാകു. ആപ് ഇൻസ്റ്റാൾ ചെയ്യുന്നതിനായി ഈ പേജ് ക്രോമിൽ തുറക്കുക.","MathWeb_Download_UnknownMessage":"നിലവിൽ മൈക്രോസോഫ്റ്റ് എഡ്ജ്, ക്രോം എന്നിവ വഴി മാത്രമേ ഗണിത സൊർ ഡെസ്ക്ടോപ്പ് ലഭ്യമാകു. ദയവായി ഈ പേജ് അനുയോജ്യമല്ലാത്ത ബ്രൗസറിൽ തുറക്കുക.","EDU_PROB_CATEGORY_LIN_EQ":"ലീനിയർ സമവാക്യം","EDU_PROB_CATEGORY_QUAD_EQ":"വർഗ്ഗസംഖ്യയുള്ള സമവാക്യം","EDU_PROB_CATEGORY_ARITHMETIC":"അങ്കഗണിതം","EDU_PROB_CATEGORY_TRIG":"ത്രികോണമിതി","EDU_PROB_CATEGORY_MATRIX":"മെട്രിക്‌സ്","EDU_PROB_CATEGORY_SIM_EQ":"ഒരേസമയത്തെ സമവാക്യം","EDU_PROB_CATEGORY_DIFF":"വ്യത്യാസം","EDU_PROB_CATEGORY_INTEGRATION":"സമാകലനം","EDU_PROB_CATEGORY_LIMITS":"പരിധികൾ","EDU_PROB_CATEGORY_COMPLEX":"സങ്കീർണ്ണ സംഖ്യകൾ","EDU_PROB_CATEGORY_LIST":"ലിസ്റ്റ്","NotebookTab_Example":"ഉദാഹരണങ്ങൾ","MathWeb_GenericSolve":"സോൾവ് ചെയ്യുക","MathResult_Graph_ReCenter":"വീണ്ടും മധ്യത്തിലാക്കുക","MathWeb_Keyboard_Algebra":"ബീജഗണിതം","MathWeb_Keyboard_Calculus":"കാൽക്കുലസ്","MathWeb_Keyboard_List":"പട്ടിക","MathWeb_Keyboard_Matrices":"മാട്രിക്സുകൾ","MathWeb_Keyboard_Numbers":"നമ്പറുകൾ","MathWeb_Keyboard_Operators":"ഓപ്പറേറ്റർമാർ","MathWeb_Keyboard_Statistics":"സ്ഥിതിവിവരക്കണക്കുകൾ","MathWeb_Keyboard_Trig":"ത്രികോണമിതി","MathWeb_Keyboard_Variables":"വേരിയബിളുകൾ","KeyboardInput_Solve":"സോൾവ് ചെയ്യുക","KeyboardInput_PlaceholderText":"ഒരു ഗണിത പ്രശ്‌നം ടൈപ്പുചെയ്യുക","MathWeb_Section_Steps_Title":"ഘട്ടം ഘട്ടമായുള്ള വിശദീകരണങ്ങൾ ലഭ്യമാക്കുക","MathWeb_Section_Steps_Subtitle":"ചോദ്യങ്ങൾക്ക് ഉത്തരം ലഭിക്കുകയും നിങ്ങളുടെ വർക്ക് കാണിക്കുകയും ചെയ്യുന്ന വിധം കാണുക—ഒപ്പം ഗണിത ആശയങ്ങൾക്കായി നിർവചനങ്ങൾ നേടുക","MathWeb_Section_Graph_Title":"നിങ്ങളുടെ ഗണിത ചോദ്യങ്ങൾ ഗ്രാഫിലാക്കുക","MathWeb_Section_Graph_Subtitle":"നിങ്ങളുടെ ഫംഗ്‌ഷൻ വിഷ്വലൈസ് ചെയ്യാനും വേരിയബിളുകൾക്ക് ഇടയിലുള്ള ബന്ധം മനസ്സിലാക്കാനും ഏത് സമവാക്യവും തൽക്ഷണം ഗ്രാഫിലാക്കുക","MathWeb_Section_Practice_Title":"പരിശീലിക്കുക, പരിശീലിക്കുക, പരിശീലിക്കുക","MathWeb_Section_Practice_Subtitle":"അനുബന്ധ വർക്ക്‌ഷീറ്റുകളും വീഡിയോ ട്യൂട്ടോറിയലുകളും പോലുള്ള അധിക പഠന സാമഗ്രികൾ തിരയുക","MathWeb_Section_Language_Title":"നിങ്ങളുടെ ഭാഷയിൽ ഗണിതത്തിൽ സഹായം ലഭ്യമാക്കുക","MathWeb_Section_Language_Subtitle":"സ്‌പാനിഷ്, ഹിന്ദി, ജർമ്മൻ എന്നിവയിലും മറ്റ് ഭാഷകളിലും പ്രവർത്തിക്കുന്നു","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"ഗണിത സോൾവർ പരീക്ഷിക്കുക","MathAnswerView_Videos":"വീഡിയോകൾ","MathWeb_Section_Video_Subtitle":"പുതിയ ഫീച്ചറുകളും ടിപ്പുകളും മറ്റും കാണുക!","MathWeb_Title":"നിങ്ങളുടെ ഗണിത പ്രോബ്ലങ്ങൾക്ക് ഘട്ടം ഘട്ടമായുള്ള സൊല്യൂഷനുകൾ നേടുക","Results_Less":"കുറവ് {0}","Results_More":"കൂടുതൽ {0}","MathPracticeProblem_SectionHeader":"പരിശീലിക്കുക","MathWeb_PopularProblems":"ജനപ്രിയ പ്രശ് നങ്ങള്","MathWeb_SolveProblemTitleFormat":"{0} സോൾവ് ചെയ്യുക | Microsoft ഗണിത സോൾവർ","MathWeb_SolveProblemDescription":"ഘട്ടം ഘട്ടമായുള്ള സൊല്യൂഷനുകളിലൂടെ ഞങ്ങളുടെ സൗജന്യ ഗണിത സോൾവർ ഉപയോഗിച്ച് നിങ്ങളുടെ ഗണിത പ്രോബ്ലങ്ങൾ സോൾവ് ചെയ്യുക. ഞങ്ങളുടെ ഗണിത സോൾവർ അടിസ്ഥാന ഗണിതത്തെയും പ്രീ-ആൽജിബ്രയെയും ട്രിഗണോമെട്രിയെയും കാൽക്കസിനെയും മറ്റും പിന്തുണയ്ക്കുന്നു.","Generic_About":"കുറിച്ച്","MathWeb_Topics":"വിഷയങ്ങൾ","Generic_PrivacyPolicy":"സ്വകാര്യത നയം","Generic_TermOfUse":"സേവന നിബന്ധനകൾ","Settings_Language":"ഭാഷ","MathWeb_BackToTop":"വീണ്ടും മുകളിലേക്ക്","MathWeb_SimilarProblems":"സമാന പ്രശ് നങ്ങള്","MathWeb_Topic_PreAlgebra":"പൂർവ്വ ബീജഗണിതത്തിൽ","MathWeb_Topic_PreAlgebra2":"മുമ്പുള്ള ബീജഗണിതത്തിൽ 2","MathWeb_Topic_OrderOfOperations":"ഓപ്പറേഷൻസ് ഓർഡർ","MathWeb_Topic_PrimeFactorization":"പ്രധാന ഫേസ്പാക്ക്","MathWeb_Topic_Fractions":"ഭിന്നകങ്ങൾ","MathWeb_Topic_LCM":"ചുരുങ്ങിയത് പൊതുവായ ഒന്നിലധികം","MathWeb_Topic_GCF":"ഏറ്റവും വലിയ പൊതുവായ ഘടകം","MathWeb_Topic_Mean":"എന്നല്ല","MathWeb_Topic_Mode":"മോഡ്","MathWeb_Topic_Exponents":"ഒരാളായി എൻറീലെ കരുതപ്പെടുന്നു","MathWeb_Topic_Radicals":"റാഡിക്കലുകളെ","MathWeb_Topic_MixedFractions":"സമ്മിശ്ര ഭിന്നകങ്ങൾ","MathWeb_Topic_Algebra":"ബീജഗണിതം","MathWeb_Topic_Algebra2":"ബീജഗണിതം 2","MathWeb_Topic_CombineLikeTerms":"വ്യവസ്ഥകൾ പോലെ സംയോജിപ്പിക്കുക","MathWeb_Topic_SolveForVariable":"വേരിയബിളിന് പരിഹാരം","MathWeb_Topic_LinearEquations":"രേഖീയ സമവാക്യങ്ങള്.","MathWeb_Topic_QuadraticEquations":"ക്വാറട്ടിക് സമവാക്യങ്ങള്.","MathWeb_Topic_Matrices":"മാട്രിക്സുകൾ","MathWeb_Topic_Inequalities":"ഗുണങ്ങള്","MathWeb_Topic_SystemsOfEquations":"സമവാക്യങ്ങളുടെ സംവിധാനങ്ങൾ","MathWeb_Topic_Factor":"ഘടകമാണ്","MathWeb_Topic_Expand":"വിപുലീകരിക്കാൻ","MathWeb_Topic_EvaluteFractions":"ഭിന്നകങ്ങളെ വിലയിരുത്തുക","MathWeb_Topic_Trigonometry":"ത്രികോണമിതി","MathWeb_Topic_Simplify":"ലളിതമാക്കാൻ","MathWeb_Topic_Evaluate":"വിലയിരുത്തി","MathWeb_Topic_Graphs":"ഗ്രാഫുകൾ","MathWeb_Topic_SolveEquations":"സമവാക്യങ്ങള് പരിഹരിക്കുക","MathWeb_Topic_Calculus":"കാൽക്കുലസ്","MathWeb_Topic_Derivatives":"ഉത്പന്നങ്ങൾ","MathWeb_Topic_Integrals":"പരസ്പരം","MathWeb_Topic_Limits":"പരിധിയിൽ","MathWeb_CalculatorTitle":"{0} | Microsoft ഗണിത സോൾവർ","MathWeb_AlgebraCalculator":"ആൽജിബ്ര കാൽക്കുലേറ്റർ","MathWeb_TrigCalculator":"ട്രിഗണോമെട്രി കാൽക്കുലേറ്റർ","MathWeb_CalculusCalculator":"കാൽക്കുലസ് കാൽക്കുലേറ്റർ","MathWeb_MatrixCalculator":"മാതൃകാ കാല് ക്കുലേറ്റര്","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"ഒരു ക്വിസ് സൃഷ്‌ടിക്കുന്നു...","Quiz_Error_Header":"ക്ഷമിക്കണം, അത്തരം ചോദ്യത്തിന്‍റെ അടിസ്ഥാനത്തിൽ ഒരു ക്വിസ് സൃഷ്‌ടിക്കാൻ ഞങ്ങൾക്ക് സാധിച്ചില്ല. മറ്റൊരു ചോദ്യ തരം പരീക്ഷിക്കുക.","Quiz_Notebook_ProblemCount_Template":"ഇതിന് സമാനമായ {0} ചോദ്യങ്ങൾ:","NoResults_MathSolveError":"എന്തോ പ്രശ്‌നമുണ്ടായി, പിന്നീട് വീണ്ടും ശ്രമിക്കുക","Quiz_Completion_Date":"{0}-ന് പൂർത്തിയാക്കി","Quiz_Result_Correct":"ശരി","Quiz_Total_Score_Template":"നിങ്ങൾ {1}-ൽ {0} ചോദ്യങ്ങൾക്ക് ശരിയായി ഉത്തരം നൽകി.","Quiz_Complete_Header":"ക്വിസ് പൂർത്തിയായി","Quiz_End_Finish":"പൂർത്തിയാക്കുക","KeyboardInput_Undo":"പൂർവ്വാവസ്ഥയിലാക്കുക","MathWeb_DeleteAll":"എല്ലാം വെട്ടി മാറ്റുക","MathWeb_MyQuizzes":"മൈ ക്വിസെസ്","MathWeb_QuizNotFound":"ക്വിസ് കണ്ടെത്തിയില്ല","Quiz_NextProblem":"അടുത്ത ചോദ്യം","Quiz_CheckProblem":"പരിശോധിക്കുക","Quiz_Answer_Prompt":"ചോദ്യത്തിനുള്ള ഉത്തരം തിരഞ്ഞെടുക്കുക:","Quiz_HintButton":"എന്നെ സഹായിക്കൂ","MathWeb_NewQuiz":"പുതിയ ക്വിസ്","Quiz_StartScreen_Question_Count_Template":"{0} മൾട്ടിപ്പിൾ ചോയിസ് ചോദ്യങ്ങൾ","Quiz_StartScreen_Header":"ക്വിസിന് തയ്യാറാണോ?","Quiz_StartScreen_Time_Template":"പൂർത്തിയാകാൻ {0} മിനിറ്റ്","Quiz_Start":"തുടങ്ങുക","Quiz_Result_Incorrect":"തെറ്റ്","Quiz_Result_Your_Answer":"നിങ്ങളുടെ ഉത്തരം:","Quiz_Result_See_Solution":"സൊല്യൂഷൻ കാണുക","Quiz_Entity":"ക്വിസ്","MathWeb_InProgress":"പുരോഗതിയില്","MathWeb_ConfirmQuizDelete":"എല്ലാ ക്വിസും ഇല്ലാതാക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നുണ്ടോ?","Generic_Edit":"ചിട്ടപ്പെടുത്തുക","Generic_Close":"അടയ്ക്കുക","MathResult_GraphHeader":"ഗ്രാഫ്","Teams_ViewInteractiveGraph":"ഇന്ററാക്റ്റീവ് ഗ്രാഫ് കാണുക","Network_Offline_Message":"നിങ്ങൾ ഓഫ്‌ലൈനാണ്. നിങ്ങളുടെ നെറ്റ്‌വർക്ക് പരിശോധിക്കുക.","NoResults_MathEquation":"ഈ സമവാക്യം കണ്ടെത്തി:","NoResults_MathError":"ഞങ്ങൾക്ക് അത്തരം സമവാക്യം പരിഹരിക്കാൻ കഴിയില്ല അല്ലെങ്കിൽ അതിൽ ഒരു തെറ്റ് അടങ്ങിയിരിക്കാം","NoResults_NoMath":"ക്ഷമിക്കണം, ഞങ്ങൾ ഒരു സമവാക്യം കാണുന്നില്ല. ഇത് വ്യക്തവും പൂർണ്ണമായും ഫ്രെയിമിലാണെന്നും ഉറപ്പാക്കുക","MathWeb_ViewSteps":"സൊലൂഷന് നടപടികള് കാണുക","Quiz_Try_Label":"ഒരു ക്വിസിൽ പങ്കെടുക്കുക","MathAnswerView_Concepts":"അനുബന്ധ ആശയങ്ങൾ","Generic_PDF":"PDF","MathAnswerView_Worksheets":"വെബ് തിരയലിൽ നിന്നുള്ള വർക്ക്‌ഷീറ്റുകൾ","MathAnswerView_Worksheets_Short":"വർക്ക്‌ഷീറ്റുകൾ","MathAnswerView_RelatedPages":"വെബ് തിരയലിൽ നിന്നുള്ള സമാന പ്രശ്‌നങ്ങൾ","Results_Items":"ഇനങ്ങൾ","Generic_Share":"പങ്കിടുക","Generic_Copy":"പകർത്തുക","Share_CopiedToClipboard":"ക്ലിപ്പ്‌ബോർഡിലേക്ക് പകർത്തി","Accessibility_MathAnswerView_PoweredByBing":"Bing പിന്തുണയ്‌ക്കുന്നത്","MathAnswerView_PoweredByBing":"പിന്തുണയ്‌ക്കുന്നത്","MathAnswerView_EquationIsFalse":"തെറ്റ്","MathAnswerView_EquationIsTrue":"ശരി","Feedback_Thanks":"നന്ദി!","Feedback_Title":"ഈ ഫലങ്ങൾ ഉപയോഗപ്രദമായിരുന്നോ?","MathAnswerView_DesktopUpsell_SectionHeader":"ഡെസ്ക്ടോപ്പ് പതിപ്പ് ലഭ്യമാണ്","SketchInput_ClearLabel":"സ്‌കെച്ച് മായ്‌ക്കുക","SketchInput_Clear":"CLR","SketchInput_PenLabel":"പേന ഉപയോഗിക്കുക","SketchInput_EraserLabel":"ഇറേസർ ഉപയോഗിക്കുക","SketchInput_UndoLabel":"അവസാന സ്‌ട്രോക്ക് പഴയപടിയാക്കുക","SketchInput_Info":"താഴെ ഒരു പ്രശ്‌നം വരയ്‌ക്കുക","SketchInput_SubmitLabel":"വ്യഞ്ജകം സമർപ്പിക്കുക","Teams_Solve_Waiting":"ഈ പദപ്രയോഗം പരിഹരിക്കൽ...","Teams_RelatedTo":"ബന്ധപ്പെട്ട","MathWeb_PageTopicRootTitle":"ഗണിത ടോപ്പിക്കുകൾ അടുത്തറിയുക","MathWeb_PageTopicDescriptionFormat":"ഘട്ടം ഘട്ടമായുള്ള സൊല്യൂഷനുകളിലൂടെ ഞങ്ങളുടെ സൗജന്യ ഗണിത സോൾവർ ഉപയോഗിച്ച് {0} സംബന്ധിച്ച് അറിയുക."},"mr":{"Generic_Back":"मागे","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"Microsoft गणित सॉलव्हर अॅप, एक प्रगत AI समर्थित गणित सॉलव्हर वापरून अंकगणित, अल्जिब्रा, त्रिकोणमिती, कॅल्क्युलस, आकडेवारी आणि अन्य विषय समाविष्ट असलेल्या वेगवेगळ्या प्रश्नांमध्ये क्रमाक्रमाने मदत प्रदान करते.","MathWeb_Download_MobileHeading":"Step-by-step solutions at your finger tips","MathWeb_Download_IOS":"Download for iOS","MathWeb_Download_Android":"Download for Android","MathWeb_Download_InstalledMessage":"App already installed","MathWeb_Download_Button":"Download desktop app","MathWeb_Download_Unavailable":"Desktop app unavailable","MathWeb_Download_MacMessage":"Currently, the Math Solver desktop app is only available via Chrome on MacOSX. Please open this page in Chrome to install the app.","MathWeb_Download_UnknownMessage":"Currently, the Math Solver desktop is only available via Microsoft Edge and Chrome. Please open this page in a compatible browser.","EDU_PROB_CATEGORY_LIN_EQ":"रेषीय समीकरण","EDU_PROB_CATEGORY_QUAD_EQ":"क्वाड्रॅटिक समीकरण","EDU_PROB_CATEGORY_ARITHMETIC":"अंकगणित","EDU_PROB_CATEGORY_TRIG":"त्रिकोणमिती","EDU_PROB_CATEGORY_MATRIX":"मॅट्रिक्स","EDU_PROB_CATEGORY_SIM_EQ":"एकाच वेळी समीकरण","EDU_PROB_CATEGORY_DIFF":"डिफ्रेन्शिएशन","EDU_PROB_CATEGORY_INTEGRATION":"इंटीग्रेशन","EDU_PROB_CATEGORY_LIMITS":"सीमा","EDU_PROB_CATEGORY_COMPLEX":"जटिल संख्या","EDU_PROB_CATEGORY_LIST":"यादी","NotebookTab_Example":"उदाहरणे","MathWeb_GenericSolve":"सोडवा","MathResult_Graph_ReCenter":"री-सेंटर","MathWeb_Keyboard_Algebra":"algebra","MathWeb_Keyboard_Calculus":"calculus","MathWeb_Keyboard_List":"list","MathWeb_Keyboard_Matrices":"matrices","MathWeb_Keyboard_Numbers":"numbers","MathWeb_Keyboard_Operators":"operators","MathWeb_Keyboard_Statistics":"statistics","MathWeb_Keyboard_Trig":"trigonometry","MathWeb_Keyboard_Variables":"variables","KeyboardInput_Solve":"सोडवा","KeyboardInput_PlaceholderText":"एखादा गणिताचा प्रश्न टाइप करा","MathWeb_Section_Steps_Title":"क्रमाक्रमाने स्पष्टीकरणे मिळवा","MathWeb_Section_Steps_Subtitle":"प्रश्न कसे सोडवायचे ते पहा आणि आपले कार्य दाखवा—यशिवाय गणिताच्या संकल्पनांसाठी व्याख्या मिळवा","MathWeb_Section_Graph_Title":"आपल्या गणिताच्या प्रश्नांचा आलेख काढा","MathWeb_Section_Graph_Subtitle":"आपले फंक्शन पाहण्यासाठी आणि चलांमधील संबंध समजण्यासाठी त्वरित कोणत्याही समीकरणाचा आलेख काढा","MathWeb_Section_Practice_Title":"सराव, सराव, सराव","MathWeb_Section_Practice_Subtitle":"अतिरिक्त शिक्षणाचे साहित्य शोधा, जसे की संबंधित कार्यपत्रके आणि व्हिडिओ टूटोरियल्स","MathWeb_Section_Language_Title":"आपल्या भाषेमध्ये गणिताच्या संबंधित मदत मिळवा","MathWeb_Section_Language_Subtitle":"स्पॅनिश, हिंदी, जर्मन आणि बर्‍याच भाषांमध्ये कार्य करते","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"गणित सॉलव्हर वापरून पहा","MathAnswerView_Videos":"व्हिडिओ","MathWeb_Section_Video_Subtitle":"Watch for new features, tips and more!","MathWeb_Title":"आपल्या गणिताचा प्रश्नांसाठी क्रमाक्रमाने उत्तर मिळवा","Results_Less":"कमी {0}","Results_More":"अधिक {0}","MathPracticeProblem_SectionHeader":"सराव","MathWeb_PopularProblems":"Popular Problems","MathWeb_SolveProblemTitleFormat":"{0} सोडवा | Microsoft गणित सॉलव्हर","MathWeb_SolveProblemDescription":"क्रमाक्रमाने सोल्यूशनसह आमचे विनामूल्य गणित सॉलव्हर वापरून आपले गणिताचे प्रश्न सोडवा. आमचा गणित सॉलव्हर बेसिक गणित, प्री-अल्जिब्रा, अल्जिब्रा, त्रिकोणमिती, कॅल्क्युलस आणि इतर विषयांचे समर्थन करतो.","Generic_About":"About","MathWeb_Topics":"Topics","Generic_PrivacyPolicy":"गोपनीयता धोरण","Generic_TermOfUse":"सेवा अटी","Settings_Language":"भाषा","MathWeb_BackToTop":"Back to top","MathWeb_SimilarProblems":"Similar Problems","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Order of Operations","MathWeb_Topic_PrimeFactorization":"Prime Factorization","MathWeb_Topic_Fractions":"Fractions","MathWeb_Topic_LCM":"Least Common Multiple","MathWeb_Topic_GCF":"Greatest Common Factor","MathWeb_Topic_Mean":"Mean","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Exponents","MathWeb_Topic_Radicals":"Radicals","MathWeb_Topic_MixedFractions":"Mixed Fractions","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Combine Like Terms","MathWeb_Topic_SolveForVariable":"Solve for a Variable","MathWeb_Topic_LinearEquations":"Linear Equations","MathWeb_Topic_QuadraticEquations":"Quadratic Equations","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Inequalities","MathWeb_Topic_SystemsOfEquations":"Systems of Equations","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Expand","MathWeb_Topic_EvaluteFractions":"Evaluate Fractions","MathWeb_Topic_Trigonometry":"Trigonometry","MathWeb_Topic_Simplify":"Simplify","MathWeb_Topic_Evaluate":"Evaluate","MathWeb_Topic_Graphs":"Graphs","MathWeb_Topic_SolveEquations":"Solve Equations","MathWeb_Topic_Calculus":"Calculus","MathWeb_Topic_Derivatives":"Derivatives","MathWeb_Topic_Integrals":"Integrals","MathWeb_Topic_Limits":"Limits","MathWeb_CalculatorTitle":"{0} | Microsoft गणित सॉलव्हर","MathWeb_AlgebraCalculator":"अल्जिब्रा कॅलक्यूलेटर","MathWeb_TrigCalculator":"त्रिकोणमिती कॅल्क्युलेटर","MathWeb_CalculusCalculator":"कॅल्क्युलस कॅल्क्युलेटर","MathWeb_MatrixCalculator":"Matrix Calculator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"एक क्वीझ तयार करत आहे...","Quiz_Error_Header":"क्षमस्व, आम्ही त्या प्रकारच्या प्रश्नावर आधारित क्वीझ तयार करू शकलो नाही. कृपया दुसर्‍या प्रकारचा प्रश्न वापरून पहा.","Quiz_Notebook_ProblemCount_Template":"यासारखे {0} प्रश्न:","NoResults_MathSolveError":"काहीतरी चुकले, कृपया पुन्हा प्रयत्न करा","Quiz_Completion_Date":"{0} तारखेला पूर्ण केले","Quiz_Result_Correct":"बरोबर","Quiz_Total_Score_Template":"आपण {1} प्रश्नांपैकी {0} उत्तरे बरोबर दिले आहेत.","Quiz_Complete_Header":"क्वीझ पूर्ण केले","Quiz_End_Finish":"समाप्त","KeyboardInput_Undo":"पूर्ववत करा","MathWeb_DeleteAll":"Delete all","MathWeb_MyQuizzes":"My quizzes","MathWeb_QuizNotFound":"Quiz not found","Quiz_NextProblem":"पुढचा प्रश्न","Quiz_CheckProblem":"तपासा","Quiz_Answer_Prompt":"या प्रश्नाचे उत्तर निवडा:","Quiz_HintButton":"मला मदत करा","MathWeb_NewQuiz":"New quiz","Quiz_StartScreen_Question_Count_Template":"{0} बहुपर्यायी प्रश्न","Quiz_StartScreen_Header":"क्वीझसाठी तयार आहात?","Quiz_StartScreen_Time_Template":"पूर्ण होण्यासाठी {0} मिनिटे आवश्यक","Quiz_Start":"प्रारंभ करा","Quiz_Result_Incorrect":"चुकीचे","Quiz_Result_Your_Answer":"आपले उत्तर:","Quiz_Result_See_Solution":"सोल्यूशन पहा","Quiz_Entity":"क्वीझ","MathWeb_InProgress":"In progress","MathWeb_ConfirmQuizDelete":"Are you sure you want to delete all quizzes?","Generic_Edit":"संपादित करा","Generic_Close":"बंद करा","MathResult_GraphHeader":"आलेख","Teams_ViewInteractiveGraph":"View Interactive Graph","Network_Offline_Message":"आपण ऑफलाइन आहात. कृपया आपले नेटवर्क तपासा.","NoResults_MathEquation":"हे समीकरण सापडले:","NoResults_MathError":"आम्ही अशा प्रकारचे समीकरण सोडवू शकत नाही किंवा यामध्ये एखाद्या त्रुटीचा समावेश असण्याची शक्यता आहे","NoResults_NoMath":"क्षमस्व, आम्हाला कोणतेही समीकरण दिसत नाही. ते स्पष्ट असल्याचे आणि पूर्णपणे फ्रेममध्ये असल्याची खात्री करा","MathWeb_ViewSteps":"View solution steps","Quiz_Try_Label":"क्वीझमध्ये भाग घ्या","MathAnswerView_Concepts":"संबंधित संकल्पना","Generic_PDF":"PDF","MathAnswerView_Worksheets":"वेब शोधामधून कार्यपत्रके","MathAnswerView_Worksheets_Short":"कार्यपत्रके","MathAnswerView_RelatedPages":"वेब शोधामधून समान प्रश्न","Results_Items":"आयटम्स","Generic_Share":"शेअर करा","Generic_Copy":"प्रतिलिपी करा","Share_CopiedToClipboard":"क्लिपबोर्डमध्ये प्रतिलिपी करण्यात आली","Accessibility_MathAnswerView_PoweredByBing":"Bing द्वारे समर्थित","MathAnswerView_PoweredByBing":"द्वारे समर्थित","MathAnswerView_EquationIsFalse":"चुकीचे","MathAnswerView_EquationIsTrue":"बरोबर","Feedback_Thanks":"धन्यवाद!","Feedback_Title":"हे निकाल उपयोगी होते का?","MathAnswerView_DesktopUpsell_SectionHeader":"डेस्कटॉप आवृत्ती उपलब्ध","SketchInput_ClearLabel":"स्केच साफ करा","SketchInput_Clear":"CLR","SketchInput_PenLabel":"पेन वापरा","SketchInput_EraserLabel":"इरेसर वापरा","SketchInput_UndoLabel":"शेवटचा स्ट्रोक पूर्ववत करा","SketchInput_Info":"खाली एक प्रश्न आरेखित करा","SketchInput_SubmitLabel":"अभिव्यक्ती सबमिट करा","Teams_Solve_Waiting":"Solving this expression...","Teams_RelatedTo":"Related To","MathWeb_PageTopicRootTitle":"गणिताचे विषय एक्सप्लोर करा","MathWeb_PageTopicDescriptionFormat":"क्रमाक्रमाने सोल्यूशनसह आमचे विनामूल्य गणित सॉलव्हर वापरून {0} विषयी शिका."},"or":{"Generic_Back":"ପଛକୁ ଫେରଂତୁ","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"Microsoft ଗଣିତ ସମାଧାନକାରୀ ଆପ୍ଲିକେସନ୍ ଗଣିତ, ବୀଜଗଣିତ, ତ୍ରିକୋଣମିତି, କାଲକୁଲସ୍‌, ପରିସଂଖ୍ୟାନ, ଏବଂ ଅନ୍ୟାନ୍ୟ ବିଷୟକୁ ଅନ୍ତର୍ଭୁକ୍ତ କରି ଏକ ଉନ୍ନତ AI ପରିଚାଳିତ ଗଣିତ ସମାଧାନକାରୀ ବ୍ୟବହାର କରି ବିଭିନ୍ନ ପ୍ରକାରର ପ୍ରଶ୍ନ ସହିତ କ୍ରମାନୁସାରେ ସହାୟତା ପ୍ରଦାନ କରିଥାଏ।","MathWeb_Download_MobileHeading":"Step-by-step solutions at your finger tips","MathWeb_Download_IOS":"Download for iOS","MathWeb_Download_Android":"Download for Android","MathWeb_Download_InstalledMessage":"App already installed","MathWeb_Download_Button":"Download desktop app","MathWeb_Download_Unavailable":"Desktop app unavailable","MathWeb_Download_MacMessage":"Currently, the Math Solver desktop app is only available via Chrome on MacOSX. Please open this page in Chrome to install the app.","MathWeb_Download_UnknownMessage":"Currently, the Math Solver desktop is only available via Microsoft Edge and Chrome. Please open this page in a compatible browser.","EDU_PROB_CATEGORY_LIN_EQ":"ରୈଖିକ ସମୀକରଣ","EDU_PROB_CATEGORY_QUAD_EQ":"ଚତୁଷ୍ପଦୀ ସମୀକରଣ","EDU_PROB_CATEGORY_ARITHMETIC":"ବୀଜଗଣିତ","EDU_PROB_CATEGORY_TRIG":"ତ୍ରିକୋଣମିତି","EDU_PROB_CATEGORY_MATRIX":"ମାଟ୍ରିକ୍ସ୍","EDU_PROB_CATEGORY_SIM_EQ":"ସମକାଳୀନ ସମୀକରଣ","EDU_PROB_CATEGORY_DIFF":"ବିଭେଦୀକରଣ","EDU_PROB_CATEGORY_INTEGRATION":"ଇଣ୍ଟିଗ୍ରେସନ୍","EDU_PROB_CATEGORY_LIMITS":"ସୀମାଗୁଡ଼ିକ","EDU_PROB_CATEGORY_COMPLEX":"ଜଟିଳ ସଂଖ୍ୟାଗୁଡ଼ିକ","EDU_PROB_CATEGORY_LIST":"ତାଲିକା","NotebookTab_Example":"ଉଦାହରଣଗୁଡ଼ିକ","MathWeb_GenericSolve":"ସମାଧାନ","MathResult_Graph_ReCenter":"ପୁନଃକେନ୍ଦ୍ରିତ କରନ୍ତୁ","MathWeb_Keyboard_Algebra":"algebra","MathWeb_Keyboard_Calculus":"calculus","MathWeb_Keyboard_List":"list","MathWeb_Keyboard_Matrices":"matrices","MathWeb_Keyboard_Numbers":"numbers","MathWeb_Keyboard_Operators":"operators","MathWeb_Keyboard_Statistics":"statistics","MathWeb_Keyboard_Trig":"trigonometry","MathWeb_Keyboard_Variables":"variables","KeyboardInput_Solve":"ସମାଧାନ","KeyboardInput_PlaceholderText":"ଏକ ଅଙ୍କ ପ୍ରଶ୍ନ ଟାଇପ୍ କରନ୍ତୁ","MathWeb_Section_Steps_Title":"ପଦକ୍ଷେପ ଅନୁଯାୟୀ ସ୍ପଷ୍ଟିକରଣ ପ୍ରାପ୍ତ କରନ୍ତୁ","MathWeb_Section_Steps_Subtitle":"ପ୍ରଶ୍ନଗୁଡ଼ିକୁ କିପରି ସମାଧାନ କରିବେ ଦେଖନ୍ତୁ ଏବଂ ଆପଣଙ୍କର କାମକୁ ପ୍ରଦର୍ଶନ କରନ୍ତୁ—ଏହା ସହିତ ଗାଣିତିକ ବିଷୟବସ୍ତୁ ଉପରେ ସଜ୍ଞାସମୂହ ପ୍ରାପ୍ତ କରନ୍ତୁ","MathWeb_Section_Graph_Title":"ଆପଣଙ୍କର ଗଣିତ ପ୍ରଶ୍ନଗୁଡ଼ିକର ଗ୍ରାଫ୍ କରନ୍ତୁ","MathWeb_Section_Graph_Subtitle":"ଆପଣଙ୍କର ଫଳନକୁ ଦେଖିବା ପାଇଁ ଏବଂ ପ୍ରାଚଳଗୁଡ଼ିକ ମଧ୍ଯରେ ଥିବା ସମ୍ପର୍କକୁ ବୁଝିବା ପାଇଁ ତୁରନ୍ତ ଯେକୌଣସି ସମୀକରଣକୁ ଗ୍ରାଫ୍ କରନ୍ତୁ","MathWeb_Section_Practice_Title":"ଅଭ୍ୟାସ, ଅଭ୍ୟାସ, ଅଭ୍ୟାସ","MathWeb_Section_Practice_Subtitle":"ଅତିରିକ୍ତ ଶିକ୍ଷଣ ଉପାଦାନଗୁଡ଼ିକୁ ସନ୍ଧାନ କରନ୍ତୁ, ଯେପରିକି ସମ୍ପୃକ୍ତ ୱର୍କସିଟ୍ ଏବଂ ଭିଡିଓ ଟ୍ୟୁଟରିଆଲଗୁଡ଼ିକ","MathWeb_Section_Language_Title":"ନିଜ ଭାଷାରେ ଗଣିତ ସହାୟତା ପ୍ରାପ୍ତ କରନ୍ତୁ","MathWeb_Section_Language_Subtitle":"ସ୍ପେନିୟ, ହିନ୍ଦୀ, ଜର୍ମାନ, ଏବଂ ଆହୁରି ଅନେକରେ କାମ କରିଥାଏ","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"ଗଣିତ ସମାଧାନକାରୀକୁ ପରଖନ୍ତୁ","MathAnswerView_Videos":"ଭିଡିଓଗୁଡ଼ିକ","MathWeb_Section_Video_Subtitle":"Watch for new features, tips and more!","MathWeb_Title":"ଆପଣଙ୍କର ଗଣିତ ପ୍ରଶ୍ନଗୁଡ଼ିକ ପାଇଁ କ୍ରମାନୁସାରେ ସମାଧାନଗୁଡ଼ିକ ପ୍ରାପ୍ତ କରନ୍ତୁ","Results_Less":"କମ୍ {0}","Results_More":"ଅଧିକ {0}","MathPracticeProblem_SectionHeader":"ଅଭ୍ୟାସ କରନ୍ତୁ","MathWeb_PopularProblems":"Popular Problems","MathWeb_SolveProblemTitleFormat":"{0} କୁ ସମାଧାନ କରନ୍ତୁ | Microsoft ଗଣିତ ସମାଧାନକାରୀ","MathWeb_SolveProblemDescription":"ଆମର ମାଗଣା ଗଣିତ ସମାଧାନକାରୀକୁ ବ୍ୟବହାର କରି କ୍ରମାନୁସାରେ ଦିଆଯାଇଥିବା ସମାଧାନଗୁଡ଼ିକ ସହିତ ଆପଣଙ୍କର ଗଣିତ ପ୍ରଶ୍ନଗୁଡ଼ିକର ସମାଧାନ କରନ୍ତୁ। ଆମର ଗଣିତ ସମାଧାନକାରୀ ମୌଳିକ ଗଣିତ, ପୂର୍ବ-ବୀଜଗଣିତ, ବୀଜଗଣିତ, ତ୍ରକୋଣମିତି, କାଲକୁଲସ୍‌ ଏବଂ ସେହିପରି ଅନେକକୁ ସମର୍ଥନ କରିଥାଏ।","Generic_About":"About","MathWeb_Topics":"Topics","Generic_PrivacyPolicy":"ଗୋପନୀୟତା ନୀତି","Generic_TermOfUse":"ସେବାର ସର୍ତ୍ତାବଳି","Settings_Language":"ଭାଷା","MathWeb_BackToTop":"Back to top","MathWeb_SimilarProblems":"Similar Problems","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Order of Operations","MathWeb_Topic_PrimeFactorization":"Prime Factorization","MathWeb_Topic_Fractions":"Fractions","MathWeb_Topic_LCM":"Least Common Multiple","MathWeb_Topic_GCF":"Greatest Common Factor","MathWeb_Topic_Mean":"Mean","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Exponents","MathWeb_Topic_Radicals":"Radicals","MathWeb_Topic_MixedFractions":"Mixed Fractions","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Combine Like Terms","MathWeb_Topic_SolveForVariable":"Solve for a Variable","MathWeb_Topic_LinearEquations":"Linear Equations","MathWeb_Topic_QuadraticEquations":"Quadratic Equations","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Inequalities","MathWeb_Topic_SystemsOfEquations":"Systems of Equations","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Expand","MathWeb_Topic_EvaluteFractions":"Evaluate Fractions","MathWeb_Topic_Trigonometry":"Trigonometry","MathWeb_Topic_Simplify":"Simplify","MathWeb_Topic_Evaluate":"Evaluate","MathWeb_Topic_Graphs":"Graphs","MathWeb_Topic_SolveEquations":"Solve Equations","MathWeb_Topic_Calculus":"Calculus","MathWeb_Topic_Derivatives":"Derivatives","MathWeb_Topic_Integrals":"Integrals","MathWeb_Topic_Limits":"Limits","MathWeb_CalculatorTitle":"{0} | Microsoft ଗଣିତ ସମାଧାନକାରୀ","MathWeb_AlgebraCalculator":"ବୀଜଗଣିତ କାଲ୍‌କୁଲେଟେର୍","MathWeb_TrigCalculator":"ତ୍ରିକୋଣମିତି କାଲ୍‌କୁଲେଟେର୍","MathWeb_CalculusCalculator":"କାଲକୁଲସ୍‌ କାଲ୍‌କୁଲେଟେର୍","MathWeb_MatrixCalculator":"Matrix Calculator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"ଗୋଟିଏ କ୍ୱିଜ୍ ପ୍ରସ୍ତୁତ କରୁଅଛି...","Quiz_Error_Header":"ଆମେ ଦୁଃଖିତ, ସେହି ପ୍ରକାରର ପ୍ରଶ୍ନ ଉପରେ ଆଧାର କରି ଆମେ କୌଣସି କ୍ୱିଜ୍‌ ପ୍ରସ୍ତୁତ କରିବାରେ ସକ୍ଷମ ହେଲୁ ନାହିଁ। ଦୟାକରି ଅନ୍ୟ ଏକ ପ୍ରକାରର ପ୍ରଶ୍ନକୁ ଚେଷ୍ଟା କରନ୍ତୁ।","Quiz_Notebook_ProblemCount_Template":"{0} ଟି ପ୍ରଶ୍ନ ଏହି ପରି ଅଟେ:","NoResults_MathSolveError":"କିଛି ତ୍ରୁଟି ଘଟିଲା, ଦୟାକରି ପୁଣିଥରେ ଚେଷ୍ଟା କରନ୍ତୁ","Quiz_Completion_Date":"ସମ୍ପୂର୍ଣ୍ଣ ହେବା ତାରିଖ {0}","Quiz_Result_Correct":"ସଠିକ","Quiz_Total_Score_Template":"ଆପଣ {1} ଟି ପ୍ରଶ୍ନରୁ {0} ଟିର ଉତ୍ତର ଦେଇଛନ୍ତି।","Quiz_Complete_Header":"କ୍ୱିଜ୍‌ ସମ୍ପୂର୍ଣ୍ଣ ହୋଇଛି","Quiz_End_Finish":"ସମାପ୍ତ","KeyboardInput_Undo":"ପୂର୍ବବତ୍ କରନ୍ତୁ","MathWeb_DeleteAll":"Delete all","MathWeb_MyQuizzes":"My quizzes","MathWeb_QuizNotFound":"Quiz not found","Quiz_NextProblem":"ପରବର୍ତ୍ତୀ ପ୍ରଶ୍ନ","Quiz_CheckProblem":"ଯାଞ୍ଚ କରନ୍ତୁ","Quiz_Answer_Prompt":"ଏହି ପ୍ରଶ୍ନର ଉତ୍ତର ଚୟନ କରନ୍ତୁ:","Quiz_HintButton":"ମୋତେ ସହାୟତା କରନ୍ତୁ","MathWeb_NewQuiz":"New quiz","Quiz_StartScreen_Question_Count_Template":"{0} ବହୁ-ବିକଳ୍ପ ପ୍ରଶ୍ନଗୁଡ଼ିକ","Quiz_StartScreen_Header":"କ୍ୱିଜ୍‌ ପାଇଁ ପ୍ରସ୍ତୁତ କି?","Quiz_StartScreen_Time_Template":"ସମ୍ପୂର୍ଣ୍ଣ ହେବା ପାଇଁ {0} ମିନିଟ୍ ଅଛି","Quiz_Start":"ଆରମ୍ଭ","Quiz_Result_Incorrect":"ଭୁଲ","Quiz_Result_Your_Answer":"ଆପଣଙ୍କର ଉତ୍ତର:","Quiz_Result_See_Solution":"ଉତ୍ତର ଦେଖନ୍ତୁ","Quiz_Entity":"କ୍ୱିଜ୍‌","MathWeb_InProgress":"In progress","MathWeb_ConfirmQuizDelete":"Are you sure you want to delete all quizzes?","Generic_Edit":"ସଂପାଦନା କରନ୍ତୁ","Generic_Close":"ବନ୍ଦ କରନ୍ତୁ","MathResult_GraphHeader":"ଗ୍ରାଫ୍","Teams_ViewInteractiveGraph":"View Interactive Graph","Network_Offline_Message":"ଆପଣ ଅଫଲାଇନ୍ ଅଛନ୍ତି, ଦୟାକରି ଆପଣଙ୍କ ନେଟୱାର୍କ ପରୀକ୍ଷା କରନ୍ତୁ।","NoResults_MathEquation":"ଏହି ସମୀକରଣ ଚିହ୍ନଟ ହୋଇଛି:","NoResults_MathError":"ଆମେ ସେହି ପ୍ରକାରର ସମୀକରଣ ସମାଧାନ କରିପାରିଲୁ ନାହିଁ କିମ୍ବା ଏହା ତ୍ରୁଟି ଧାରଣ କରିପାରେ","NoResults_NoMath":"କ୍ଷମା କରିବେ, ଆମେ ଏକ ସମୀକରଣ ଦେଖୁନାହୁଁ। ସୁନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଏହା ଖାଲି ଅଛି ଏବଂ ସମ୍ପୂର୍ଣ୍ଣ ଭାବରେ ଫ୍ରେମ୍ ଭିତରେ ରହିଛି।","MathWeb_ViewSteps":"View solution steps","Quiz_Try_Label":"ଏକ କ୍ୱିଜ୍‌ ଦିଅନ୍ତୁ","MathAnswerView_Concepts":"ସମ୍ପର୍କିତ ବିଷୟଗୁଡ଼ିକ","Generic_PDF":"PDF","MathAnswerView_Worksheets":"ୱେବ୍‌ ସନ୍ଧାନରୁ ୱାର୍କସିଟ୍‌ଗୁଡ଼ିକ","MathAnswerView_Worksheets_Short":"ୱାର୍କସିଟ୍‌","MathAnswerView_RelatedPages":"ୱେବ୍ ସନ୍ଧାନରୁ ସମାନ ପ୍ରକାରର ସମସ୍ୟା","Results_Items":"ଆଇଟମ୍‌‌‌‌‌‌‌‌‌‌ଗୁଡ଼ିକ","Generic_Share":"ଅଂଶୀଦାର","Generic_Copy":"କପି","Share_CopiedToClipboard":"କ୍ଲିପ୍ ବୋର୍ଡ଼ରେ ନକଲ କରାଯାଇଛି","Accessibility_MathAnswerView_PoweredByBing":"Bing ଦ୍ୱାରା ପ୍ରସ୍ତୁତ ହୋଇଛି","MathAnswerView_PoweredByBing":"ଦ୍ୱାରା ପ୍ରସ୍ତୁତ ହୋଇଛି","MathAnswerView_EquationIsFalse":"ମିଥ୍ୟା","MathAnswerView_EquationIsTrue":"ସତ୍ୟ","Feedback_Thanks":"ଧନ୍ୟବାଦ!","Feedback_Title":"ଏହି ଫଳାଫଳ ଉପାଦେୟ କି?","MathAnswerView_DesktopUpsell_SectionHeader":"ଡେସ୍କଟପ୍ ସଂସ୍କରଣ ଉପଲବ୍ଧ","SketchInput_ClearLabel":"ସ୍କେଚ୍ ହଟାନ୍ତୁ","SketchInput_Clear":"CLR","SketchInput_PenLabel":"ପେନ୍ ବ୍ୟବହାର କରନ୍ତୁ","SketchInput_EraserLabel":"ଇରେଜର୍ ବ୍ୟବହାର କରନ୍ତୁ","SketchInput_UndoLabel":"ଗତ ଷ୍ଟ୍ରୋକ୍ ପୂର୍ବବତ୍ କରନ୍ତୁ","SketchInput_Info":"ନିମ୍ନରେ ଏକ ପ୍ରଶ୍ନ ଅଙ୍କନ କରନ୍ତୁ","SketchInput_SubmitLabel":"ଅଭିବ୍ୟକ୍ତି ଉପସ୍ଥାପନା କରନ୍ତୁ","Teams_Solve_Waiting":"Solving this expression...","Teams_RelatedTo":"Related To","MathWeb_PageTopicRootTitle":"ଗଣିତ ବିଷୟଗୁଡ଼ିକୁ ଏକ୍ସପ୍ଲୋର୍‌ କରନ୍ତୁ","MathWeb_PageTopicDescriptionFormat":"ଆମର ମାଗଣା ଗଣିତ ସମାଧାନକାରୀକୁ କ୍ରମାନୁସାରେ ଦିଆଯାଇଥିବା ସମାଧାନଗୁଡ଼ିକ ସହିତ ବ୍ୟବହାର କରି {0} ବିଷୟରେ ଶିଖନ୍ତୁ।"},"pa":{"Generic_Back":"ਵਾਪਸ ਜਾਓ","MathWeb_GenericDownload":"ਡਾਊਨਲੋਡ","MathWeb_PageTopicRootDescription":"Microsoft ਮੈਥ ਸੋਲਵਰ ਐਪ ਇੱਕ ਉਨੱਤ AI ਸੰਚਾਲਿਤ ਮੈਥ ਸੋਲਵਰ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅੰਕ-ਗਣਿਤ, ਬੀਜ-ਗਣਿਤ, ਟ੍ਰਿਗਨੋਮੈਟਰੀ, ਕੈਲਕੁਲਸ, ਅੰਕੜੇ, ਅਤੇ ਹੋਰ ਵਿਸ਼ਿਆਂ ਸਮੇਤ ਕਈ ਤਰ੍ਹਾਂ ਦੇ ਪ੍ਰਸ਼ਨਾਂ ਨੂੰ ਸੁਲਝਾਉਣ ਵਿੱਚ ਕਦਮ-ਦਰ-ਕਦਮ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।","MathWeb_Download_MobileHeading":"ਆਪਣੀ ਉਂਗਲ ਦੇ ਨੁਕਤਿਆਂ \'ਤੇ ਕਦਮ-ਦਰ-ਕਦਮ ਹੱਲ","MathWeb_Download_IOS":"iOS ਲਈ ਡਾਊਨਲੋਡ","MathWeb_Download_Android":"ਐਂਡਰਾਇਡ ਲਈ ਡਾਊਨਲੋਡ","MathWeb_Download_InstalledMessage":"ਐਪ ਪਹਿਲਾਂ ਹੀ ਇੰਸਟਾਲ ਕੀਤੀ ਗਈ ਹੈ","MathWeb_Download_Button":"ਡੈਸਕਟਾਪ ਐਪ ਡਾਊਨਲੋਡ ਕਰੋ","MathWeb_Download_Unavailable":"ਡੈਸਕਟਾਪ ਐਪ ਉਪਲਬਧ ਨਹੀਂ ਹੈ","MathWeb_Download_MacMessage":"ਵਰਤਮਾਨ ਸਮੇਂ, ਮੈਥ ਸਾਲਵਰ ਡੈਸਕਟਾਪ ਐਪ ਕੇਵਲ MacOSX \'ਤੇ ਕਰੋਮ ਰਾਹੀਂ ਉਪਲਬਧ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਐਪ ਨੂੰ ਇੰਸਟਾਲ ਕਰਨ ਲਈ ਇਸ ਪੰਨੇ ਨੂੰ ਕਰੋਮ ਵਿੱਚ ਖੋਲ੍ਹੋ।","MathWeb_Download_UnknownMessage":"ਵਰਤਮਾਨ ਸਮੇਂ, ਗਣਿਤ ਸਾਲਵਰ ਡੈਸਕਟਾਪ ਕੇਵਲ Microsoft Edge ਅਤੇ Chrome ਰਾਹੀਂ ਹੀ ਉਪਲਬਧ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਪੰਨੇ ਨੂੰ ਅਨੁਕੂਲ ਬਰਾਊਜ਼ਰ ਵਿੱਚ ਖੋਲ੍ਹੋ।","EDU_PROB_CATEGORY_LIN_EQ":"ਰੇਖਿਕ ਸਮੀਕਰਨ","EDU_PROB_CATEGORY_QUAD_EQ":"ਦੋ-ਘਾਤੀ ਸਮੀਕਰਨ","EDU_PROB_CATEGORY_ARITHMETIC":"ਐਰਿਥਮੈਟਿਕ","EDU_PROB_CATEGORY_TRIG":"ਟ੍ਰਿਗਨੋਮੈਟਰੀ","EDU_PROB_CATEGORY_MATRIX":"ਮੈਟਰਿਕਸ","EDU_PROB_CATEGORY_SIM_EQ":"ਸਮਕਾਲੀ ਸਮੀਕਰਨ","EDU_PROB_CATEGORY_DIFF":"ਵਖਰੇਵਾਂ","EDU_PROB_CATEGORY_INTEGRATION":"ਇੰਟੀਗ੍ਰੇਸ਼ਨ","EDU_PROB_CATEGORY_LIMITS":"ਸੀਮਾਵਾਂ","EDU_PROB_CATEGORY_COMPLEX":"ਜਟਿਲ ਸੰਖਿਆਵਾਂ","EDU_PROB_CATEGORY_LIST":"ਸੂਚੀ","NotebookTab_Example":"ਉਦਾਹਰਨ","MathWeb_GenericSolve":"ਹੱਲ ਕਰੋ","MathResult_Graph_ReCenter":"ਪੁਨਰ-ਕੇਂਦਰਿਤ ਕਰੋ","MathWeb_Keyboard_Algebra":"algebra","MathWeb_Keyboard_Calculus":"ਕੈਲਕੁਲਸ","MathWeb_Keyboard_List":"ਲਿਸਟ","MathWeb_Keyboard_Matrices":"ਮੈਟ੍ਰਿਕਸ","MathWeb_Keyboard_Numbers":"ਨੰਬਰ","MathWeb_Keyboard_Operators":"ਓਪਰੇਟਰ","MathWeb_Keyboard_Statistics":"ਅੰਕੜੇ","MathWeb_Keyboard_Trig":"trigonometry","MathWeb_Keyboard_Variables":"ਵੇਰੀਬਲ","KeyboardInput_Solve":"ਹੱਲ ਕਰੋ","KeyboardInput_PlaceholderText":"ਹਿਸਾਬ ਦੀ ਕੋਈ ਸਮੱਸਿਆ ਟਾਈਪ ਕਰੋ","MathWeb_Section_Steps_Title":"ਸਟੈਪ-ਬਾਈ-ਸਟੈਪ ਪਰਿਭਾਸ਼ਾਵਾਂ ਲੱਭੋ","MathWeb_Section_Steps_Subtitle":"ਵੇਖੋ ਕਿ ਕਿਵੇਂ ਪ੍ਰਸ਼ਨਾਂ ਨੂੰ ਹੱਲ ਕਰਨਾ ਹੈ ਅਤੇ ਆਪਣਾ ਕੰਮ ਵੇਖਣਾ ਹੈ—ਨਾਲ ਹੀ ਗਣਿਤੀ ਅਵਧਾਰਣਾਵਾਂ ਲਈ ਪਰਿਭਾਸ਼ਾਵਾਂ ਪ੍ਰਾਪਤ ਕਰੋ","MathWeb_Section_Graph_Title":"ਆਪਣੇ ਗਣਿਤ ਸਬੰਧੀ ਪ੍ਰਸ਼ਨਾਂ ਦਾ ਗ੍ਰਾਫ਼ ਬਣਾਓ","MathWeb_Section_Graph_Subtitle":"ਆਪਣੇ ਫੰਕਸ਼ਨ ਦੀ ਕਲਪਨਾ ਕਰਨ ਅਤੇ ਚਰਾਂ ਦੇ ਵਿਚਕਾਰ ਸਬੰਧ ਨੂੰ ਸਮਝਣ ਲਈ ਕਿਸੇ ਵੀ ਸਮੀਕਰਣ ਦਾ ਤੁਰੰਤ ਗ੍ਰਾਫ਼ ਬਣਾਓ","MathWeb_Section_Practice_Title":"ਅਭਿਆਸ, ਅਭਿਆਸ, ਅਭਿਆਸ","MathWeb_Section_Practice_Subtitle":"ਵਾਧੂ ਲਰਨਿੰਗ ਮੈਟੀਰੀਅਲ ਲਈ ਖੋਜੋ, ਜਿਵੇਂ ਕਿ ਸਬੰਧਿਤ ਵਰਕਸ਼ੀਟਸ ਅਤੇ ਵੀਡੀਓ ਟਿਊਟੋਰੀਅਲਸ","MathWeb_Section_Language_Title":"ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਗਣਿਤ ਸਬੰਧੀ ਮਦਦ ਪ੍ਰਾਪਤ ਕਰੋ","MathWeb_Section_Language_Subtitle":"ਸਪੇਨੀ, ਹਿੰਦੀ, ਜਰਮਨ ਅਤੇ ਹੋਰ ਬਹੁਤ ਸਾਰੀਆਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਕੰਮ ਕਰਦਾ ਹੈ","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"ਮੈਥ ਸੋਲਵਰ ਅਜ਼ਮਾਓ","MathAnswerView_Videos":"ਵੀਡੀਓਜ਼","MathWeb_Section_Video_Subtitle":"ਨਵੇਂ ਫੀਚਰਾਂ, ਨੁਕਤਿਆਂ ਅਤੇ ਹੋਰ ਵਧੇਰੇ ਵਾਸਤੇ ਦੇਖੋ!","MathWeb_Title":"ਆਪਣੀਆਂ ਗਣਿਤਕ ਪ੍ਰਸ਼ਨ ਦੇ ਕਦਮ-ਦਰ-ਕਦਮ ਹੱਲ ਲੱਭੋ","Results_Less":"ਘੱਟ {0}","Results_More":"ਹੋਰ {0}","MathPracticeProblem_SectionHeader":"ਅਭਿਆਸ","MathWeb_PopularProblems":"ਪ੍ਰਸਿੱਧ ਸਮੱਸਿਆਵਾਂ","MathWeb_SolveProblemTitleFormat":"{0} ਨੂੰ ਹੱਲ ਕਰੋ | Microsoft ਮੈਥ ਸੋਲਵਰ","MathWeb_SolveProblemDescription":"ਕਦਮ-ਦਰ-ਕਦਮ ਸੁਲਝਾ ਦੇ ਨਾਲ ਸਾਡੇ ਮੁਫ਼ਤ ਮੈਥ ਸੋਲਵਰ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਆਪਣੀਆਂ ਗਣਿਤਕ ਪ੍ਰਸ਼ਨਾਂ ਨੂੰ ਹੱਲ ਕਰੋ। ਸਾਡਾ ਮੈਥ ਸੋਲਵਰ ਬੁਨਿਆਦੀ ਗਣਿਤ, ਪੁਰਾਣੇ-ਬੀਜ ਗਣਿਤ, ਬੀਜ ਗਣਿਤ, ਟ੍ਰਿਗਨੋਮੈਟਰੀ, ਕੈਲਕੁਲਸ ਅਤੇ ਹੋਰ ਬਹੁਤ ਸਾਰੇ ਵਿਸ਼ਿਆਂ ਵਿੱਚ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।","Generic_About":"ਇਸ ਬਾਰੇ","MathWeb_Topics":"ਵਿਸ਼ਾ","Generic_PrivacyPolicy":"ਗੋਪਨੀਯਤਾ ਨੀਤੀ","Generic_TermOfUse":"ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ","Settings_Language":"ਭਾਸ਼ਾ","MathWeb_BackToTop":"ਉੱਪਰ ਵੱਲ ਵਾਪਸ","MathWeb_SimilarProblems":"ਇਹੋ ਜਿਹੀਆਂ ਸਮੱਸਿਆਵਾਂ","MathWeb_Topic_PreAlgebra":"ਅਲਜਬਰੇ ਤੋਂ ਪਹਿਲਾਂ","MathWeb_Topic_PreAlgebra2":"ਪੂਰਵ- ਅਲਜਬਰਾ 2","MathWeb_Topic_OrderOfOperations":"ਕਾਰਵਾਈਆਂ ਦਾ ਕ੍ਰਮ","MathWeb_Topic_PrimeFactorization":"ਪ੍ਰਾਈਮ ਫੈਕਟਰਾਈਜ਼ੇਸ਼ਨ","MathWeb_Topic_Fractions":"ਕੁਝ ਅੰਸ਼","MathWeb_Topic_LCM":"ਘੱਟ ਆਮ ਬਹੁ","MathWeb_Topic_GCF":"ਸਭ ਤੋਂ ਵੱਡਾ ਆਮ ਕਾਰਕ","MathWeb_Topic_Mean":"ਮੀਨ","MathWeb_Topic_Mode":"ਮੋਡ","MathWeb_Topic_Exponents":"ਐਕਸਪੋਨੈਂਟ","MathWeb_Topic_Radicals":"ਰੈਡੀਕਲਜ਼","MathWeb_Topic_MixedFractions":"ਮਿਸ਼ਰਤ ਅੰਸ਼","MathWeb_Topic_Algebra":"ਅਲਜਬਰਾ","MathWeb_Topic_Algebra2":"ਅਲਜਬਰਾ 2","MathWeb_Topic_CombineLikeTerms":"ਜਿਵੇਂ ਕਿ ਸ਼ਰਤਾਂ ਨੂੰ ਜੋੜੋ","MathWeb_Topic_SolveForVariable":"ਇੱਕ ਵੇਰੀਏਬਲ ਲਈ ਹੱਲ","MathWeb_Topic_LinearEquations":"ਰੇਖਿਕ ਇਕੁਏਸ਼ਨ","MathWeb_Topic_QuadraticEquations":"ਕੁਆਡਰੈਟਿਕ ਇਕੁਏਸ਼ਨ","MathWeb_Topic_Matrices":"ਮੈਟ੍ਰਿਕਸ","MathWeb_Topic_Inequalities":"ਅਸਮਾਨਤਾਵਾਂ","MathWeb_Topic_SystemsOfEquations":"ਸਮੀਕਰਨਾਂ ਦੇ ਸਿਸਟਮ","MathWeb_Topic_Factor":"ਫੈਕਟਰ","MathWeb_Topic_Expand":"ਫੈਲਾਓ","MathWeb_Topic_EvaluteFractions":"ਅੰਸ਼ਾਂ ਦਾ ਮੁਲਾਂਕਣ ਕਰੋ","MathWeb_Topic_Trigonometry":"ਤਿਕੋਣੀ","MathWeb_Topic_Simplify":"ਸਰਲ","MathWeb_Topic_Evaluate":"ਮੁਲਾਂਕਣ","MathWeb_Topic_Graphs":"ਗਰਾਫ਼","MathWeb_Topic_SolveEquations":"ਸਮੀਕਰਨ ਹੱਲ","MathWeb_Topic_Calculus":"ਕੈਲਕੂਲਸ","MathWeb_Topic_Derivatives":"ਡੈਰੀਵੇਟਿਵ","MathWeb_Topic_Integrals":"ਇੰਟੀਗਰਲ","MathWeb_Topic_Limits":"ਸੀਮਾਵਾਂ","MathWeb_CalculatorTitle":"{0} | Microsoft ਮੈਥ ਸੋਲਵਰ","MathWeb_AlgebraCalculator":"ਬੀਜ-ਗਣਿਤ ਕੈਲਕੂਲੇਟਰ","MathWeb_TrigCalculator":"ਟ੍ਰਿਗਨੋਮੈਟਰੀ ਕੈਲਕੂਲੇਟਰ","MathWeb_CalculusCalculator":"ਕੈਲਕੁਲਸ ਕੈਲਕੂਲੇਟਰ","MathWeb_MatrixCalculator":"ਮੈਟ੍ਰਿਕਸ ਕੈਲਕੂਲੇਟਰ","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"ਕੁਇਜ਼ ਸਿਰਜਿਆ ਜਾ ਰਿਹਾ ਹੈ...","Quiz_Error_Header":"ਮਾਫ਼ ਕਰਨਾ, ਅਸੀਂ ਉਸ ਕਿਸਮ ਦੇ ਪ੍ਰਸ਼ਨ \'ਤੇ ਆਧਾਰਿਤ ਕੁਇਜ਼ ਸਿਰਜਣ ਦੇ ਯੋਗ ਨਹੀਂ ਸੀ। ਕਿਰਪਾ ਕਰਕੇ ਕਿਸੇ ਹੋਰ ਕਿਸਮ ਦੇ ਪ੍ਰਸ਼ਨ ਨੂੰ ਅਜ਼ਮਾਓ।","Quiz_Notebook_ProblemCount_Template":"{0} ਪ੍ਰਸ਼ਨ ਇਸ ਵਰਗੇ ਹਨ:","NoResults_MathSolveError":"ਕੁੱਝ ਗਲਤ ਹੋਇਆ, ਕਿਰਪਾ ਕਰਕੇ ਬਾਅਦ ਵਿੱਚ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ","Quiz_Completion_Date":"{0} ਨੂੰ ਪੂਰਾ ਹੋਇਆ","Quiz_Result_Correct":"ਸਹੀ","Quiz_Total_Score_Template":"ਤੁਸੀਂ {1} ਵਿੱਚੋਂ {0} ਪ੍ਰਸ਼ਨਾਂ ਦੇ ਸਹੀ ਉੱਤਰ ਦਿੱਤੇ ਹਨ।","Quiz_Complete_Header":"ਕੁਇਜ਼ ਪੂਰਾ ਹੋਇਆ","Quiz_End_Finish":"ਖਤਮ ਕਰਨਾ","KeyboardInput_Undo":"ਪਹਿਲੇ ਵਰਗਾ ਕਰੋ","MathWeb_DeleteAll":"ਸਭ ਹਟਾਓ","MathWeb_MyQuizzes":"ਮੇਰੇ ਕੁਇਜ਼","MathWeb_QuizNotFound":"ਕੁਇੱਜ਼ ਨਹੀਂ ਲੱਭੀ","Quiz_NextProblem":"ਨਵਾਂ ਪ੍ਰਸ਼ਨ","Quiz_CheckProblem":"ਜਾਂਚ ਕਰੋ","Quiz_Answer_Prompt":"ਪ੍ਰਸ਼ਨ ਲਈ ਉੱਤਰ ਦੀ ਚੋਣ ਕਰੋ:","Quiz_HintButton":"ਮੇਰੀ ਮਦਦ ਕਰੋ","MathWeb_NewQuiz":"ਨਵਾਂ ਕੁਇਜ਼","Quiz_StartScreen_Question_Count_Template":"{0} ਬਹੁ-ਵਿਕਲਪੀ ਸਵਾਲ","Quiz_StartScreen_Header":"ਕੀ ਕੁਇਜ਼ ਲਈ ਤਿਆਰ ਹੋ?","Quiz_StartScreen_Time_Template":"ਪੂਰਾ ਹੋਣ ਵਿੱਚ {0} ਮਿੰਟ","Quiz_Start":"ਸ਼ੁਰੂ ਕਰੋ","Quiz_Result_Incorrect":"ਗਲਤ","Quiz_Result_Your_Answer":"ਤੁਹਾਡਾ ਉੱਤਰ:","Quiz_Result_See_Solution":"ਹੱਲ ਵੇਖੋ","Quiz_Entity":"ਕੁਇਜ਼","MathWeb_InProgress":"ਚੱਲ ਰਿਹਾ ਹੈ","MathWeb_ConfirmQuizDelete":"ਕੀ ਤੁਸੀਂ ਯਕੀਨੀ ਤੌਰ \'ਤੇ ਸਾਰੇ ਕਵਿੱਜ਼ਾਂ ਨੂੰ ਮਿਟਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?","Generic_Edit":"ਸੰਪਾਦਿਤ ਕਰੋ","Generic_Close":"ਬੰਦ ਕਰੋ","MathResult_GraphHeader":"ਗ੍ਰਾਫ","Teams_ViewInteractiveGraph":"ਇੰਟਰਐਕਟਿਵ ਗਰਾਫ਼ ਵੇਖੋ","Network_Offline_Message":"ਤੁਸੀਂ ਔਫਲਾਈਨ ਹੋ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਨੈੱਟਵਰਕ ਦੀ ਜਾਂਚ ਕਰੋ।","NoResults_MathEquation":"ਇਸ ਸਮੀਕਰਨ ਨੂੰ ਪਛਾਣਿਆ ਗਿਆ:","NoResults_MathError":"ਅਸੀਂ ਉਸ ਕਿਸਮ ਦੇ ਸਮੀਕਰਨ ਨੂੰ ਹੱਲ ਨਹੀਂ ਕਰ ਸਕਦੇ ਜਾਂ ਇਸ ਵਿੱਚ ਤਰੁੱਟੀ ਹੋ ਸਕਦੀ ਹੈ","NoResults_NoMath":"ਮੁਆਫ਼ ਕਰਨਾ, ਸਾਨੂੰ ਕੋਈ ਸਮੀਕਰਨ ਨਹੀਂ ਦਿਸਦਾ। ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਇਹ ਫਰੇਮ ਵਿੱਚ ਸਪਸ਼ਟ ਅਤੇ ਪੂਰਨ ਰੂਪ ਵਿੱਚ ਹੋਵੇ","MathWeb_ViewSteps":"ਹੱਲ ਼ ਕਦਮ ਵੇਖੋ","Quiz_Try_Label":"ਕੁਇਜ਼ ਵਿੱਚ ਹਿੱਸਾ ਲਓ","MathAnswerView_Concepts":"ਸੰਬੰਧਿਤ ਸਿਧਾਂਤ","Generic_PDF":"PDF","MathAnswerView_Worksheets":"ਵੈੱਬ ਖੋਜ ਤੋਂ ਵਰਕਸ਼ੀਟਾਂ","MathAnswerView_Worksheets_Short":"ਵਰਕਸ਼ੀਟ","MathAnswerView_RelatedPages":"ਵੈੱਬ ਖੋਜ ਤੋਂ ਸਮਾਨ ਸਮੱਸਿਆਵਾਂ","Results_Items":"ਆਇਟਮਾਂ","Generic_Share":"ਸਾਂਝਾ ਕਰੋ","Generic_Copy":"ਕਾਪੀ ਕਰੋ","Share_CopiedToClipboard":"ਕਲਿੱਪਬੋਰਡ \'ਤੇ ਕਾਪੀ ਕੀਤਾ ਗਿਆ","Accessibility_MathAnswerView_PoweredByBing":"Bing ਦੁਆਰਾ ਸੰਚਾਲਿਤ","MathAnswerView_PoweredByBing":"ਦੁਆਰਾ ਸੰਚਾਲਿਤ","MathAnswerView_EquationIsFalse":"ਗਲਤ","MathAnswerView_EquationIsTrue":"ਸਹੀ","Feedback_Thanks":"ਧੰਨਵਾਦ!","Feedback_Title":"ਕੀ ਇਹ ਪਰਿਣਾਮ ਉਪਯੋਗੀ ਸੀ?","MathAnswerView_DesktopUpsell_SectionHeader":"ਡੈਸਕਟਾਪ ਸੰਸਕਰਣ ਉਪਲਬਧ ਹੈ","SketchInput_ClearLabel":"ਸਕੈੱਚ ਨੂੰ ਸਾਫ਼ ਕਰੋ","SketchInput_Clear":"CLR","SketchInput_PenLabel":"ਪੈਨ ਦੀ ਵਰਤੋਂ ਕਰੋ","SketchInput_EraserLabel":"ਈਰੇਜ਼ਰ ਦੀ ਵਰਤੋਂ ਕਰੋ","SketchInput_UndoLabel":"ਅਖੀਰਲੀ ਸਟ੍ਰੋਕ ਨੂੰ ਪਹਿਲਾਂ ਵਰਗਾ ਕਰੋ","SketchInput_Info":"ਹੇਠਾਂ ਇੱਕ ਸਮੱਸਿਆ ਬਾਰੇ ਲਿਖੋ","SketchInput_SubmitLabel":"ਅਭਿਵਿਅਕਤੀ ਸਬਮਿਟ ਕਰੋ","Teams_Solve_Waiting":"ਇਹ ਸਮੀਕਰਨ ਹੱਲ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...","Teams_RelatedTo":"ਸੰਬੰਧਿਤ","MathWeb_PageTopicRootTitle":"ਗਣਿਤਕ ਵਿਸ਼ੇ ਖੋਜੋ","MathWeb_PageTopicDescriptionFormat":"ਕਦਮ-ਦਰ-ਕਦਮ ਸੁਲਝਾ ਦੇ ਨਾਲ ਸਾਡੇ ਮੁਫ਼ਤ ਮੈਥ ਸੋਲਵਰ ਦੀ ਵਰਤੋਂ ਕਰਕੇ {0} ਬਾਰੇ ਜਾਣੋ।"},"ru":{"Generic_Back":"Назад","MathWeb_GenericDownload":"Скачать","MathWeb_PageTopicRootDescription":"Приложение Microsoft Math Solver предоставляет пошаговые инструкции по решению ряда задач, включая арифметику, алгебру, тригонометрию, математический анализ, статистику и другие темы, используя расширенное средство решения математических задач на основе искусственного интеллекта (AI).","MathWeb_Download_MobileHeading":"Пошаговые решения на кончиках ваших пальцев","MathWeb_Download_IOS":"Скачать для iOS","MathWeb_Download_Android":"Скачать для Android","MathWeb_Download_InstalledMessage":"Приложение уже установлено","MathWeb_Download_Button":"Скачать настольное приложение","MathWeb_Download_Unavailable":"Настольное приложение недоступно","MathWeb_Download_MacMessage":"В настоящее время настольное приложение Math Solver доступно только через Chrome на MacOSX. Пожалуйста, откройте эту страницу в Chrome для установки приложения.","MathWeb_Download_UnknownMessage":"В настоящее время рабочий стол Math Solver доступен только через Microsoft Edge и Chrome. Пожалуйста, откройте эту страницу в совместимом браузере.","EDU_PROB_CATEGORY_LIN_EQ":"Линейное уравнение","EDU_PROB_CATEGORY_QUAD_EQ":"Квадратное уравнение","EDU_PROB_CATEGORY_ARITHMETIC":"Арифметика","EDU_PROB_CATEGORY_TRIG":"Тригонометрия","EDU_PROB_CATEGORY_MATRIX":"Матрица","EDU_PROB_CATEGORY_SIM_EQ":"Система уравнений","EDU_PROB_CATEGORY_DIFF":"Дифференцирование","EDU_PROB_CATEGORY_INTEGRATION":"Интегрирование","EDU_PROB_CATEGORY_LIMITS":"Пределы","EDU_PROB_CATEGORY_COMPLEX":"Комплексные числа","EDU_PROB_CATEGORY_LIST":"Список","NotebookTab_Example":"Примеры","MathWeb_GenericSolve":"Решить","MathResult_Graph_ReCenter":"Центрировать еще раз","MathWeb_Keyboard_Algebra":"Алгебра","MathWeb_Keyboard_Calculus":"Исчисление","MathWeb_Keyboard_List":"Список","MathWeb_Keyboard_Matrices":"Матриц","MathWeb_Keyboard_Numbers":"Номера","MathWeb_Keyboard_Operators":"Операторов","MathWeb_Keyboard_Statistics":"Статистика","MathWeb_Keyboard_Trig":"Тригонометрии","MathWeb_Keyboard_Variables":"Переменные","KeyboardInput_Solve":"Решить","KeyboardInput_PlaceholderText":"Введите математическую задачу","MathWeb_Section_Steps_Title":"Получите пошаговые объяснения","MathWeb_Section_Steps_Subtitle":"Узнайте, как решать задачи, и покажите свою работу, а также получите определения для математических понятий","MathWeb_Section_Graph_Title":"Создавайте графическое представление ваших математических задач","MathWeb_Section_Graph_Subtitle":"Мгновенно представьте любое уравнение в графическом виде, чтобы визуализировать вашу функцию и понять связь между переменными","MathWeb_Section_Practice_Title":"Практика, практика и ещё раз практика","MathWeb_Section_Practice_Subtitle":"Ищите дополнительные учебные материалы, такие как связанные журналы и видеоуроки","MathWeb_Section_Language_Title":"Получите справку по математике на своем языке","MathWeb_Section_Language_Subtitle":"Работает на испанском, хинди, немецком и других языках","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Попробуйте средство решения математических задач","MathAnswerView_Videos":"Видео","MathWeb_Section_Video_Subtitle":"Следите за новыми функциями, советами и многое другое!","MathWeb_Title":"Получите пошаговые решения математических задач","Results_Less":"Меньше результатов: {0}","Results_More":"Еще {0}","MathPracticeProblem_SectionHeader":"Упражнения","MathWeb_PopularProblems":"Популярные проблемы","MathWeb_SolveProblemTitleFormat":"Решить {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Решайте математические задачи, используя наше бесплатное средство решения с пошаговыми решениями. Поддерживаются базовая математика, начальная алгебра, алгебра, тригонометрия, математический анализ и многое другое.","Generic_About":"О","MathWeb_Topics":"Темы","Generic_PrivacyPolicy":"Политика конфиденциальности","Generic_TermOfUse":"Условия обслуживания","Settings_Language":"Язык","MathWeb_BackToTop":"Вернуться к началу","MathWeb_SimilarProblems":"Аналогичные проблемы","MathWeb_Topic_PreAlgebra":"До алгебра","MathWeb_Topic_PreAlgebra2":"Предварительная алгебра 2","MathWeb_Topic_OrderOfOperations":"Порядок действий","MathWeb_Topic_PrimeFactorization":"Прайм-факторизация","MathWeb_Topic_Fractions":"Фракций","MathWeb_Topic_LCM":"Наименее распространенные несколько","MathWeb_Topic_GCF":"Величайший общий фактор","MathWeb_Topic_Mean":"Означает","MathWeb_Topic_Mode":"Режим","MathWeb_Topic_Exponents":"Экспонентов","MathWeb_Topic_Radicals":"Радикалов","MathWeb_Topic_MixedFractions":"Смешанные фракции","MathWeb_Topic_Algebra":"Алгебра","MathWeb_Topic_Algebra2":"Алгебра 2","MathWeb_Topic_CombineLikeTerms":"Комбинат как термины","MathWeb_Topic_SolveForVariable":"Решите для переменной","MathWeb_Topic_LinearEquations":"Линейные уравнения","MathWeb_Topic_QuadraticEquations":"Квадратные уравнения","MathWeb_Topic_Matrices":"Матриц","MathWeb_Topic_Inequalities":"Неравенства","MathWeb_Topic_SystemsOfEquations":"Системы уравнений","MathWeb_Topic_Factor":"Фактор","MathWeb_Topic_Expand":"Разверните","MathWeb_Topic_EvaluteFractions":"Оценка фракций","MathWeb_Topic_Trigonometry":"Тригонометрии","MathWeb_Topic_Simplify":"Упростить","MathWeb_Topic_Evaluate":"Оценить","MathWeb_Topic_Graphs":"Графики","MathWeb_Topic_SolveEquations":"Решить уравнения","MathWeb_Topic_Calculus":"Исчисление","MathWeb_Topic_Derivatives":"Производные","MathWeb_Topic_Integrals":"Интегралы","MathWeb_Topic_Limits":"Ограничения","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Алгебраический калькулятор","MathWeb_TrigCalculator":"Тригонометрический калькулятор","MathWeb_CalculusCalculator":"Калькулятор исчислений","MathWeb_MatrixCalculator":"Матричные калькуляторы","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Создание викторины...","Quiz_Error_Header":"Не удалось создать викторину, основанную на задаче такого типа. Попробуйте использовать другой тип задач.","Quiz_Notebook_ProblemCount_Template":"{0} задач, подобных этой:","NoResults_MathSolveError":"Произошла ошибка, повторите попытку","Quiz_Completion_Date":"Завершено {0}","Quiz_Result_Correct":"Правильно","Quiz_Total_Score_Template":"Вы правильно ответили на {0} из {1} вопросов.","Quiz_Complete_Header":"Викторина завершена","Quiz_End_Finish":"Готово","KeyboardInput_Undo":"Отменить","MathWeb_DeleteAll":"Удалить все","MathWeb_MyQuizzes":"Мои викторины","MathWeb_QuizNotFound":"Викторина не найдена","Quiz_NextProblem":"Следующая задача","Quiz_CheckProblem":"Проверить","Quiz_Answer_Prompt":"Выберите ответ для задачи:","Quiz_HintButton":"Нужна помощь","MathWeb_NewQuiz":"Новая викторина","Quiz_StartScreen_Question_Count_Template":"Вопросы ({0}) с несколькими вариантами ответа","Quiz_StartScreen_Header":"Готовы к викторине?","Quiz_StartScreen_Time_Template":"{0} мин на выполнение","Quiz_Start":"Начать","Quiz_Result_Incorrect":"Неправильно","Quiz_Result_Your_Answer":"Ваш ответ:","Quiz_Result_See_Solution":"Показать решение","Quiz_Entity":"Викторина","MathWeb_InProgress":"В процессе","MathWeb_ConfirmQuizDelete":"Вы уверены, что хотите удалить все викторины?","Generic_Edit":"Изменить","Generic_Close":"Закрыть","MathResult_GraphHeader":"График","Teams_ViewInteractiveGraph":"Просмотр интерактивного графика","Network_Offline_Message":"Вы не в сети. Проверьте сеть.","NoResults_MathEquation":"Обнаружено это уравнение:","NoResults_MathError":"Мы не можем решить такой тип уравнения, или, возможно, в нем содержится ошибка","NoResults_NoMath":"К сожалению, уравнение не найдено. Убедитесь, что оно различимо и полностью попадает в кадр","MathWeb_ViewSteps":"Просмотр шагов решения","Quiz_Try_Label":"Попробуйте викторину","MathAnswerView_Concepts":"Связанные понятия","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Рабочие листы из веб-поиска","MathAnswerView_Worksheets_Short":"Вопросы практики","MathAnswerView_RelatedPages":"Подобные задачи из результатов поиска в Интернете","Results_Items":"элементов","Generic_Share":"Поделиться","Generic_Copy":"Копировать","Share_CopiedToClipboard":"Скопировано в буфер обмена","Accessibility_MathAnswerView_PoweredByBing":"На платформе Bing","MathAnswerView_PoweredByBing":"На платформе","MathAnswerView_EquationIsFalse":"Ложь","MathAnswerView_EquationIsTrue":"Истина","Feedback_Thanks":"Спасибо!","Feedback_Title":"Были ли эти результаты полезными?","MathAnswerView_DesktopUpsell_SectionHeader":"Доступна настольная версия","SketchInput_ClearLabel":"Очистить набросок","SketchInput_Clear":"Очистить","SketchInput_PenLabel":"Использовать перо","SketchInput_EraserLabel":"Использовать ластик","SketchInput_UndoLabel":"Отменить последний штрих","SketchInput_Info":"Изобразите задачу ниже","SketchInput_SubmitLabel":"Отправить выражение","Teams_Solve_Waiting":"Решение этого выражения...","Teams_RelatedTo":"Связанные с","MathWeb_PageTopicRootTitle":"Изучение математических тем","MathWeb_PageTopicDescriptionFormat":"{0}: учитесь, используя наше бесплатное средство для решения математических задач с пошаговыми решениями."},"ta":{"Generic_Back":"பின்னால்","MathWeb_GenericDownload":"பதிவிறக்க","MathWeb_PageTopicRootDescription":"Microsoft மேத் சால்வர் பயன்பாடு எண்கணிதம், இயற்கணிதம், முக்கோணவியல், நுண்கணிதம், புள்ளியியல் மற்றும் மேம்பட்ட AI வழங்கும் மேத் சால்வரைப் பயன்படுத்தி பிற தலைப்புகள் உள்ளிட்ட பல்வேறு கணக்குகளுக்குப் படிப்படியான உதவியை வழங்குகிறது.","MathWeb_Download_MobileHeading":"உங்கள் விரல் நுனிகளில் படிப்படியான தீர்வுகள்","MathWeb_Download_IOS":"IOS பதிவிறக்க","MathWeb_Download_Android":"அண்ட்ராய்டு பதிவிறக்க","MathWeb_Download_InstalledMessage":"பயன்பாடு ஏற்கனவே நிறுவப்பட்டுள்ளது","MathWeb_Download_Button":"திரைப்பலக பயன்பாட்டை பதிவிறக்கவும்","MathWeb_Download_Unavailable":"திரைப்பலக பயன்பாடு கிடைக்கப்பெறவில்லை","MathWeb_Download_MacMessage":"தற்போது, கணிதத் சொலவர் டெஸ்க்டாப் செயலி, MacOSX இல் மட்டுமே Chrome இன் வழியாக கிடைக்கிறது. இந்த பயன்பாட்டை நிறுவ Chrome இல் இந்தப் பக்கத்தை திறக்கவும்.","MathWeb_Download_UnknownMessage":"தற்போது, Microsoft Edge மற்றும் Chrome வழியாக மட்டுமே கணிதச் சொல்வர் டெஸ்க்டாப் கிடைக்கிறது. தயவுசெய்து இந்த பக்கத்தை இணக்கமான உலாவியில் திறக்கவும்.","EDU_PROB_CATEGORY_LIN_EQ":"ஒருபடி சமன்பாடு","EDU_PROB_CATEGORY_QUAD_EQ":"இருபடி சமன்பாடு","EDU_PROB_CATEGORY_ARITHMETIC":"எண் கணிதம்","EDU_PROB_CATEGORY_TRIG":"திரிகோணமதி","EDU_PROB_CATEGORY_MATRIX":"அணி","EDU_PROB_CATEGORY_SIM_EQ":"உடனிகழ்வு சமன்பாடு","EDU_PROB_CATEGORY_DIFF":"வகைக்கெழு","EDU_PROB_CATEGORY_INTEGRATION":"தொகையீடு","EDU_PROB_CATEGORY_LIMITS":"வரம்புகள்","EDU_PROB_CATEGORY_COMPLEX":"சிக்கல் எண்கள்","EDU_PROB_CATEGORY_LIST":"பட்டியல்","NotebookTab_Example":"எடுத்துக்காட்டுகள்","MathWeb_GenericSolve":"தீர்வு","MathResult_Graph_ReCenter":"மறு மையப்படுத்து","MathWeb_Keyboard_Algebra":"குறிக்கணக்கியல்","MathWeb_Keyboard_Calculus":"கல்லடைப்பு","MathWeb_Keyboard_List":"பட்டியல்","MathWeb_Keyboard_Matrices":"காப்பிகள்","MathWeb_Keyboard_Numbers":"சீர்த்தொகுதி செய்யுள்நடை","MathWeb_Keyboard_Operators":"ஆபரேட்டர்கள்","MathWeb_Keyboard_Statistics":"புள்ளித்தொகுப்பியல்","MathWeb_Keyboard_Trig":"கோணவியல்","MathWeb_Keyboard_Variables":"மாறிலிகள்","KeyboardInput_Solve":"தீர்வு","KeyboardInput_PlaceholderText":"கணித கணக்கின் வகை","MathWeb_Section_Steps_Title":"படிப்படியான விளக்கங்களைப் பெறுங்கள்","MathWeb_Section_Steps_Subtitle":"கணக்குகளை எவ்வாறு தீர்ப்பது மற்றும் உங்கள் படைப்பைக் காண்பிப்பது எப்படி என்பதைப் பார்க்கவும் - மேலும் கணிதக் கருத்துகளுக்கான வரையறைகளைப் பெறுங்கள்","MathWeb_Section_Graph_Title":"உங்கள் கணித கணக்குகளை வரைபடமாக்கவும்","MathWeb_Section_Graph_Subtitle":"உங்கள் செயல்பாட்டைக் காண்பதற்கு எந்தச் சமன்பாட்டையும் உடனடியாக வரைபடமாக்கி, மாறிகளுக்கிடையேயான உறவைப் புரிந்து கொள்ளுங்கள்","MathWeb_Section_Practice_Title":"பயிற்சி, பயிற்சி, பயிற்சி","MathWeb_Section_Practice_Subtitle":"தொடர்புடைய பணித்தாள்கள் மற்றும் வீடியோ பயிற்சிகள் போன்ற கூடுதலான கற்கும் பொருட்களைத் தேடவும்","MathWeb_Section_Language_Title":"உங்கள் மொழியில் கணித உதவியைப் பெறுங்கள்","MathWeb_Section_Language_Subtitle":"ஸ்பானிஷ், இந்தி, ஜெர்மன் மற்றும் பல மொழிகளில் வேலை செய்கிறது","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"மேத் சால்வரை முயற்சிக்கவும்","MathAnswerView_Videos":"வீடியோக்கள்","MathWeb_Section_Video_Subtitle":"புதிய அம்சங்கள், குறிப்புகள் மற்றும் மேலும் பார்க்க!","MathWeb_Title":"உங்கள் கணக்குகளுக்குப் படிப்படியான தீர்வுகளைப் பெறுங்கள்","Results_Less":"குறைவான {0}","Results_More":"மேலும் {0}","MathPracticeProblem_SectionHeader":"பயிற்சி","MathWeb_PopularProblems":"மக்கள் பிரச்சினைகள்","MathWeb_SolveProblemTitleFormat":"{0}-ஐ தீர்க்கவும் | Microsoft மேத் சால்வர்","MathWeb_SolveProblemDescription":"எங்கள் இலவச கணித சால்வரைப் பயன்படுத்தி உங்கள் கணக்குகளை படிப்படியான தீர்வுகளுடன் தீர்க்கவும். எங்கள் மேத் சால்வர் அடிப்படை கணிதம், முன்-இயற்கணிதம், இயற்கணிதம், முக்கோணவியல், நுண்கணிதம் மற்றும் பலவற்றை ஆதரிக்கிறது.","Generic_About":"குறித்து","MathWeb_Topics":"தலைப்புகளை","Generic_PrivacyPolicy":"தனியுரிமைக் கொள்கை","Generic_TermOfUse":"சேவை விதிமுறைகள்","Settings_Language":"மொழி","MathWeb_BackToTop":"மீண்டும் மேலே","MathWeb_SimilarProblems":"இதுபோன்ற பிரச்னைகள்","MathWeb_Topic_PreAlgebra":"முன்-அல்ஜிப்ரா","MathWeb_Topic_PreAlgebra2":"முன்-அல்ஜிப்ரா 2","MathWeb_Topic_OrderOfOperations":"செயற்பாட்டு ஒழுங்கு","MathWeb_Topic_PrimeFactorization":"பகா","MathWeb_Topic_Fractions":"பின்னங்கள்","MathWeb_Topic_LCM":"குறைந்தது பொதுவான பல","MathWeb_Topic_GCF":"மிகப் பெரிய பொதுவான காரணி","MathWeb_Topic_Mean":"இடைநிலை","MathWeb_Topic_Mode":"பயன்முறை","MathWeb_Topic_Exponents":"எக்ஸ்பான்கள்","MathWeb_Topic_Radicals":"தீவிரவாதிகள்","MathWeb_Topic_MixedFractions":"கலப்பு பின்னங்கள்","MathWeb_Topic_Algebra":"குறிக்கணக்கியல்","MathWeb_Topic_Algebra2":"அல்ஜிப்ரா 2","MathWeb_Topic_CombineLikeTerms":"விதிமுறைகளைப் போல ஒன்றுசேர்","MathWeb_Topic_SolveForVariable":"ஒரு மாறிக்கு தீர்வு","MathWeb_Topic_LinearEquations":"நேரியல் சமன்பாடுகள்","MathWeb_Topic_QuadraticEquations":"இருபடிச் சமன்பாடுகள்","MathWeb_Topic_Matrices":"காப்பிகள்","MathWeb_Topic_Inequalities":"ஏற்றத் தாழ்வுகள்","MathWeb_Topic_SystemsOfEquations":"சமன்பாடுகளின் முறைகள்","MathWeb_Topic_Factor":"வாணிகத்துறை ஆட்பேர்","MathWeb_Topic_Expand":"பரப்பு","MathWeb_Topic_EvaluteFractions":"பின்னசெயல்களை மதிப்பிடு","MathWeb_Topic_Trigonometry":"கோணவியல்","MathWeb_Topic_Simplify":"எளிமையாக்கு","MathWeb_Topic_Evaluate":"கணி","MathWeb_Topic_Graphs":"வரைபடங்கள்","MathWeb_Topic_SolveEquations":"சமன்பாடுகளை தீர்க்கவும்","MathWeb_Topic_Calculus":"கல்லடைப்பு","MathWeb_Topic_Derivatives":"பங்குகள்","MathWeb_Topic_Integrals":"தொகையீடுகளின்","MathWeb_Topic_Limits":"வரம்புகள்","MathWeb_CalculatorTitle":"{0} | Microsoft மேத் சால்வர்","MathWeb_AlgebraCalculator":"இயற்கணித கால்குலேட்டர்","MathWeb_TrigCalculator":"முக்கோணவியல் கால்குலேட்டர்","MathWeb_CalculusCalculator":"நுண்கணித கால்குலேட்டர்","MathWeb_MatrixCalculator":"அணி கணிப்பான்","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"வினாடி வினாவை உருவாக்குகிறது...","Quiz_Error_Header":"மன்னிக்கவும், அந்த கணக்கின் வகை அடிப்படையில் எங்களால் வினாடி வினாவை உருவாக்க முடியவில்லை. மற்றொரு கணக்கு வகையை முயற்சியுங்கள்.","Quiz_Notebook_ProblemCount_Template":"இதற்கு ஒத்த {0} கணக்குகள்:","NoResults_MathSolveError":"ஏதோ தவறாகிவிட்டது, மீண்டும் பிறகு முயற்சிக்கவும்","Quiz_Completion_Date":"{0} அன்று நிறைவடைந்தது","Quiz_Result_Correct":"சரியானது","Quiz_Total_Score_Template":"நீங்கள் {1} கேள்விகளில் {0}-க்குச் சரியாக பதிலளித்துள்ளீர்கள்.","Quiz_Complete_Header":"வினாடி வினா நிறைவடைந்தது","Quiz_End_Finish":"முடி","KeyboardInput_Undo":"செயல்தவிர்","MathWeb_DeleteAll":"அனைத்தையும் நீக்கு","MathWeb_MyQuizzes":"என் குயிலிகள்","MathWeb_QuizNotFound":"வினாடிவினா காணப்படவில்லை","Quiz_NextProblem":"அடுத்த கணக்கு","Quiz_CheckProblem":"சரிபார்","Quiz_Answer_Prompt":"கணக்கிற்கான பதிலைத் தேர்ந்தெடுக்கவும்:","Quiz_HintButton":"எனக்கு உதவு","MathWeb_NewQuiz":"புதிய வினாடி வினா","Quiz_StartScreen_Question_Count_Template":"{0} பல தேர்வு உள்ள கேள்விகள்","Quiz_StartScreen_Header":"வினாடி வினாவிற்குத் தயாரா?","Quiz_StartScreen_Time_Template":"முடிப்பதற்கு {0} நிமிடங்கள் உள்ளன","Quiz_Start":"தொடங்கவும்","Quiz_Result_Incorrect":"தவறானது","Quiz_Result_Your_Answer":"உங்கள் பதில்:","Quiz_Result_See_Solution":"தீர்வைப் பார்க்கவும்","Quiz_Entity":"வினாடி வினா","MathWeb_InProgress":"முன்னேற்றத்தில்","MathWeb_ConfirmQuizDelete":"அனைத்து quizzes களையும் நீக்க நிச்சயமாக விரும்புகிறீர்களா?","Generic_Edit":"திருத்து","Generic_Close":"மூடு","MathResult_GraphHeader":"விளக்கப்படம்","Teams_ViewInteractiveGraph":"ஊடாடும் வரைபடத்தை க்காணவும்","Network_Offline_Message":"ஆஃப்லைனில் உள்ளீர்கள். நெட்வொர்க்கைச் சரிபார்க்கவும்.","NoResults_MathEquation":"இந்த சமன்பாட்டைக் கண்டறியப்பட்டது:","NoResults_MathError":"அந்த வகையான சமன்பாட்டை எங்களால் தீர்க்க இயலாது அல்லது அதில் பிழை இருக்கலாம்","NoResults_NoMath":"மன்னிக்கவும், நாங்கள் சமன்பாட்டைப் பார்க்கவில்லை. இது தெளிவாகவும் முழுமையாகவும் ஃபிரேமில் இருப்பதை உறுதிப்படுத்தவும்","MathWeb_ViewSteps":"தீர்வு படிகளை காண்","Quiz_Try_Label":"வினாடி வினாவில் பங்குபெறுங்கள்","MathAnswerView_Concepts":"தொடர்புடைய கருத்துக்கள்","Generic_PDF":"PDF","MathAnswerView_Worksheets":"வலைத் தேடலில் இருந்து பணித்தாள்கள்","MathAnswerView_Worksheets_Short":"பணித்தாள்கள்","MathAnswerView_RelatedPages":"வலைத் தேடலில் இருந்து ஒரே மாதியான கணக்குகள்","Results_Items":"உருப்படிகள்","Generic_Share":"பகிர்","Generic_Copy":"நகலெடு","Share_CopiedToClipboard":"நகலகத்துக்கு நகலெடுக்கப்பட்டது","Accessibility_MathAnswerView_PoweredByBing":"Bing-ஆல் வழங்கப்படுகிறது","MathAnswerView_PoweredByBing":"வழங்குவது","MathAnswerView_EquationIsFalse":"தவறு","MathAnswerView_EquationIsTrue":"சரி","Feedback_Thanks":"நன்றி!","Feedback_Title":"இந்த முடிவுகள் பயனுள்ளதாக இருந்ததா?","MathAnswerView_DesktopUpsell_SectionHeader":"டெஸ்க்டாப் பதிப்பு கிடைக்கிறது","SketchInput_ClearLabel":"ஸ்கெட்சை அழி","SketchInput_Clear":"CLR","SketchInput_PenLabel":"பேனாவைப் பயன்படுத்தவும்","SketchInput_EraserLabel":"அழிப்பானைப் பயன்படுத்தவும்","SketchInput_UndoLabel":"கடைசி ஸ்ட்ரோக்கை செயல்தவிர்","SketchInput_Info":"கீழேயுள்ள கணக்கை வரையவும்","SketchInput_SubmitLabel":"சமன்பாட்டை சமர்ப்பிக்கவும்","Teams_Solve_Waiting":"இந்த வெளிப்பாடு தீர்க்கும்...","Teams_RelatedTo":"தொடர்புடைய","MathWeb_PageTopicRootTitle":"கணித தலைப்புகளில் உலவுங்கள்","MathWeb_PageTopicDescriptionFormat":"படிப்படியான தீர்வுகளுடன் எங்கள் இலவச மேத் சால்வரைப் பயன்படுத்தி {0} பற்றி அறிக."},"te":{"Generic_Back":"వెనుకకు","MathWeb_GenericDownload":"డౌన్ లోడ్","MathWeb_PageTopicRootDescription":"Microsoft గణితం సాల్వర్ యాప్ అన్నది అరిథ్మెటిక్, ఆల్జీబ్రా, త్రికోణమితి, కాలిక్యులస్, స్టాటిస్టిక్స్ ఇతర అంశాలకు సంబంధించిన వివిధ రకాల గణిత సమస్యలకు ఒక అధునాతమైన AI సామర్థ్యం గల గణితం సాల్వర్ ఉపయోగించి దశల వారీ సహాయం అందిస్తుంది.","MathWeb_Download_MobileHeading":"మీ వేలి చిట్కాల వద్ద దశలవారీ పరిష్కారాలు","MathWeb_Download_IOS":"IOS కోసం డౌన్లోడ్","MathWeb_Download_Android":"Android కోసం డౌన్లోడ్","MathWeb_Download_InstalledMessage":"యాప్ ఇప్పటికే ఇన్ స్టాల్ చేయబడింది","MathWeb_Download_Button":"డెస్క్ టాప్ యాప్ డౌన్ లోడ్","MathWeb_Download_Unavailable":"డెస్క్ టాప్ యాప్ లభ్యం కావడం లేదు","MathWeb_Download_MacMessage":"ప్రస్తుతం మ్యాథ్ సోల్వర్ డెస్క్ టాప్ యాప్ మాక్రోక్స్ పై క్రోమ్ ద్వారా మాత్రమే అందుబాటులో ఉంది. యాప్ ని ఇన్ స్టాల్ చేయడం కొరకు దయచేసి క్రోమ్ లో ఈ పేజీని తెరవండి.","MathWeb_Download_UnknownMessage":"ప్రస్తుతం మ్యాథ్ సోల్వర్ డెస్క్ టాప్ కేవలం మైక్రోసాఫ్ట్ ఎడ్జ్, క్రోమ్ ద్వారా మాత్రమే అందుబాటులో ఉంది. దయచేసి అనుకూల బ్రౌజర్ లో ఈ పేజీని తెరవండి.","EDU_PROB_CATEGORY_LIN_EQ":"రేఖీయ సమీకరణం","EDU_PROB_CATEGORY_QUAD_EQ":"వర్గ సమీకరణం","EDU_PROB_CATEGORY_ARITHMETIC":"అరిథ్మెటిక్","EDU_PROB_CATEGORY_TRIG":"త్రికోణమితి","EDU_PROB_CATEGORY_MATRIX":"మాత్రిక","EDU_PROB_CATEGORY_SIM_EQ":"ఏకకాల సమీకరణం","EDU_PROB_CATEGORY_DIFF":"అవకలనం","EDU_PROB_CATEGORY_INTEGRATION":"అనుకలనం","EDU_PROB_CATEGORY_LIMITS":"పరిమితులు","EDU_PROB_CATEGORY_COMPLEX":"సంకీర్ణ సంఖ్యలు","EDU_PROB_CATEGORY_LIST":"జాబితా","NotebookTab_Example":"ఉదాహరణలు","MathWeb_GenericSolve":"పరిష్కరించండి","MathResult_Graph_ReCenter":"తిరిగి కేంద్రానికి తీసుకెళ్లు","MathWeb_Keyboard_Algebra":"బీజగణితం","MathWeb_Keyboard_Calculus":"కాలిక్యులస్","MathWeb_Keyboard_List":"జాబితా","MathWeb_Keyboard_Matrices":"మాత్రికల","MathWeb_Keyboard_Numbers":"సంఖ్యలు","MathWeb_Keyboard_Operators":"ఆపరేటర్లు","MathWeb_Keyboard_Statistics":"గణాంకాలు","MathWeb_Keyboard_Trig":"త్రికోణమితి","MathWeb_Keyboard_Variables":"వేరియంట్లలో","KeyboardInput_Solve":"పరిష్కరించండి","KeyboardInput_PlaceholderText":"గణిత సంబంధమైన ప్రాబ్లెమ్ టైప్ చేయండి","MathWeb_Section_Steps_Title":"దశల వారీ వివరణలు పొందండి","MathWeb_Section_Steps_Subtitle":"సమస్యలు పరిష్కరించి, మీ పనితనం ఎలా చూపించాలో తెలుసుకోండి—అదే విధంగా, గణిత అంశాల నిర్వచనాలను పొందండి","MathWeb_Section_Graph_Title":"మీ గణిత సమస్యల గ్రాఫ్ గీయండి","MathWeb_Section_Graph_Subtitle":"మీ ఫంక్షన్‌ను విజువలైజ్ చేయడానికి, తద్వారా వేరియబుల్స్ మధ్య సంబంధం అర్థం చేసుకోవడానికి ఏదైనా సమీకరణానికి సంబంధించి గ్రాఫ్ తక్షణం గీయండి","MathWeb_Section_Practice_Title":"సాధన, సాధన, సాధన","MathWeb_Section_Practice_Subtitle":"సంబంధిత వర్క్‌షీట్‌లు, వీడియో ట్యుటోరియల్‌లు లాంటి అదనపు లెర్నింగ్ మెటీరియల్‌ల కోసం వెతకండి","MathWeb_Section_Language_Title":"మీ భాషలో గణిత సహాయం పొందండి","MathWeb_Section_Language_Subtitle":"స్పానిష్, హిందీ, జర్మన్, ఇంకా మరిన్ని భాషలలో పని చేస్తుంది","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"గణితం సాల్వర్‌ను ప్రయత్నించండి","MathAnswerView_Videos":"వీడియోలు","MathWeb_Section_Video_Subtitle":"కొత్త ఫీచర్లు, చిట్కాలు మరియు మరిన్ని చూడండి!","MathWeb_Title":"మీ గణిత సమస్యలకు సవివరమైన పరిష్కారాలు పొందండి","Results_Less":"తక్కువ {0}","Results_More":"మరిన్ని {0}","MathPracticeProblem_SectionHeader":"సాధన","MathWeb_PopularProblems":"ప్రజాదరణ సమస్యలు","MathWeb_SolveProblemTitleFormat":"{0} పరిష్కరించండి | Microsoft గణితం సాల్వర్","MathWeb_SolveProblemDescription":"మా ఉచిత గణితం సాల్వర్‌ను ఉపయోగించి సవివరమైన సమాధానాలతో మీ గణిత సమస్యలను పరిష్కరించండి. మా గణితం సాల్వర్‌లో ప్రాథమిక గణితం, ప్రీ-ఆల్జీబ్రా, తిక్రోణమితి, కాలిక్యులస్ మొదలైనవి పని చేస్తాయి.","Generic_About":"గురించి","MathWeb_Topics":"అంశాలు","Generic_PrivacyPolicy":"గోప్యతా విధానం","Generic_TermOfUse":"సేవా నిబంధనలు","Settings_Language":"భాష","MathWeb_BackToTop":"తిరిగి పైకి","MathWeb_SimilarProblems":"ఇలాంటి సమస్యలు","MathWeb_Topic_PreAlgebra":"ప్రీ ఆల్జీబ్రా","MathWeb_Topic_PreAlgebra2":"ప్రీ ఆల్జీబ్రా 2","MathWeb_Topic_OrderOfOperations":"ఆర్డర్ ఆఫ్ ఆపరేషన్స్","MathWeb_Topic_PrimeFactorization":"ప్రధాన కారణాంకాలు","MathWeb_Topic_Fractions":"భిన్నాలు","MathWeb_Topic_LCM":"కనీసం సాధారణ బహుళ","MathWeb_Topic_GCF":"అతిగొప్ప సామాన్య కారకం","MathWeb_Topic_Mean":"అంటే","MathWeb_Topic_Mode":"మోడ్","MathWeb_Topic_Exponents":"ఘాతాంకాలు","MathWeb_Topic_Radicals":"రాడికల్స్","MathWeb_Topic_MixedFractions":"మిశ్రమ భిన్నాలు","MathWeb_Topic_Algebra":"బీజగణితం","MathWeb_Topic_Algebra2":"ఆల్జీబ్రా 2","MathWeb_Topic_CombineLikeTerms":"వంటి పదాల కలయిక","MathWeb_Topic_SolveForVariable":"వేరియబుల్ కొరకు పరిష్కారం","MathWeb_Topic_LinearEquations":"సరళ సమీకరణాలు","MathWeb_Topic_QuadraticEquations":"వర్గ సమీకరణాలు","MathWeb_Topic_Matrices":"మాత్రికల","MathWeb_Topic_Inequalities":"అసమానతలు","MathWeb_Topic_SystemsOfEquations":"సమీకరణాల వ్యవస్థలు","MathWeb_Topic_Factor":"అంశం","MathWeb_Topic_Expand":"విస్తరించాలని","MathWeb_Topic_EvaluteFractions":"భిన్నాలను విశ్లేషించడానికి","MathWeb_Topic_Trigonometry":"త్రికోణమితి","MathWeb_Topic_Simplify":"సాదాసీదాగా","MathWeb_Topic_Evaluate":"మదింపు","MathWeb_Topic_Graphs":"గ్రాఫ్స్","MathWeb_Topic_SolveEquations":"సమీకరణాల పరిష్కారం","MathWeb_Topic_Calculus":"కాలిక్యులస్","MathWeb_Topic_Derivatives":"డెరివేటివ్స్","MathWeb_Topic_Integrals":"ఇంటెక్ వెల్స్","MathWeb_Topic_Limits":"పరిమితులు","MathWeb_CalculatorTitle":"{0} | Microsoft గణితం సాల్వర్","MathWeb_AlgebraCalculator":"ఆల్జీబ్రా కాలిక్యులేటర్","MathWeb_TrigCalculator":"త్రికోణమితి కాలిక్యులేటర్","MathWeb_CalculusCalculator":"కాలిక్యులస్ కాలిక్యులేటర్","MathWeb_MatrixCalculator":"మ్యాట్రిక్స్ కాలిక్యులేటర్","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"క్విజ్‌ను రూపొందిస్తోంది...","Quiz_Error_Header":"క్షమించండి, మేము ఆ రకమైన ప్రాబ్లెమ్ ఆధారంగా క్విజ్‌ను రూపొందించలేకపోయాము. దయచేసి మరొక ప్రాబ్లెమ్ రకాన్ని ప్రయత్నించండి.","Quiz_Notebook_ProblemCount_Template":"దీని మాదిరిగా {0} ప్రాబ్లెమ్‌లు ఉన్నాయి:","NoResults_MathSolveError":"ఏదో పొరపాటు జరిగింది, దయచేసి తర్వాత మళ్లీ ప్రయత్నించండి","Quiz_Completion_Date":"{0} తేదీన పూర్తి చేశారు","Quiz_Result_Correct":"ఒప్పు","Quiz_Total_Score_Template":"మీరు {1} ప్రశ్నలలో {0} వాటికి సరైన సమాధానం ఇచ్చారు.","Quiz_Complete_Header":"క్విజ్ పూర్తయింది","Quiz_End_Finish":"ముగించు","KeyboardInput_Undo":"చర్య రద్దు","MathWeb_DeleteAll":"మొత్తం తొలగించు","MathWeb_MyQuizzes":"నా క్విజ్ లు","MathWeb_QuizNotFound":"క్విజ్ దొరకలేదు","Quiz_NextProblem":"కొత్త ప్రాబ్లెమ్","Quiz_CheckProblem":"తనిఖీ చేయి","Quiz_Answer_Prompt":"ఈ ప్రాబ్లెమ్‌కు సమాధానం ఎంచుకోండి:","Quiz_HintButton":"నాకు సహాయం చేయండి","MathWeb_NewQuiz":"కొత్త క్విజ్","Quiz_StartScreen_Question_Count_Template":"{0} బహుళ ఐచ్ఛిక ప్రశ్నలు","Quiz_StartScreen_Header":"క్విజ్‌కు సిద్ధమా?","Quiz_StartScreen_Time_Template":"పూర్తి చేయడానికి {0} నిమిషాలు పడుతుంది","Quiz_Start":"ప్రారంభించండి","Quiz_Result_Incorrect":"తప్పు","Quiz_Result_Your_Answer":"మీ సమాధానం:","Quiz_Result_See_Solution":"సొల్యూషన్ చూడండి","Quiz_Entity":"క్విజ్","MathWeb_InProgress":"పురోగతిలో","MathWeb_ConfirmQuizDelete":"అన్ని క్విజ్ లను మీరు కచ్చితంగా తొలగించాలని అనుకుంటున్నారా?","Generic_Edit":"సవరించు","Generic_Close":"మూసివేయి","MathResult_GraphHeader":"గ్రాఫ్","Teams_ViewInteractiveGraph":"ఇంటరాక్టివ్ గ్రాఫ్ వీక్షించు","Network_Offline_Message":"మీరు ఆఫ్‌లైన్‌లో ఉన్నారు. దయచేసి మీ నెట్‌వర్క్ తనిఖీ చేయండి.","NoResults_MathEquation":"ఈ సమీకరణం గుర్తించబడింది:","NoResults_MathError":"మేము ఈ రకమైన సమీకరణం పరిష్కరించలేము లేదా అందులో దోషం ఉండవచ్చు","NoResults_NoMath":"క్షమించండి, మాకు సమీకరణం కనిపించలేదు. ఇది స్పష్టంగా, పూర్తిగా ఫ్రేమ్‌లో ఉందని నిర్ధారించుకోండి","MathWeb_ViewSteps":"పరిష్కార దశలను వీక్షించండి","Quiz_Try_Label":"క్విజ్‌లో పాల్గొనండి","MathAnswerView_Concepts":"సంబంధిత అంశాలు","Generic_PDF":"PDF","MathAnswerView_Worksheets":"వెబ్ శోధన నుండి వర్క్‌షీట్‌లు","MathAnswerView_Worksheets_Short":"వర్క్‌షీట్‌లు","MathAnswerView_RelatedPages":"వెబ్ శోధన నుండి ఇదే రకమైన ప్రాబ్లెమ్‌లు","Results_Items":"అంశాలు","Generic_Share":"షేర్ చేయి","Generic_Copy":"కాపీ చేయండి","Share_CopiedToClipboard":"క్లిప్‌బోర్డ్‌కు కాపీ చేయబడింది","Accessibility_MathAnswerView_PoweredByBing":"Bing ఆధారితం","MathAnswerView_PoweredByBing":"దీని ఆధారితం","MathAnswerView_EquationIsFalse":"తప్పు","MathAnswerView_EquationIsTrue":"ఒప్పు","Feedback_Thanks":"ధన్యవాదాలు!","Feedback_Title":"ఈ ఫలితాలు ఉపయోగకరంగా ఉన్నాయా?","MathAnswerView_DesktopUpsell_SectionHeader":"డెస్క్‌టాప్ వెర్షన్ అందుబాటులో ఉంది","SketchInput_ClearLabel":"స్కెచ్‌ను క్లియర్ చేయి","SketchInput_Clear":"CLR","SketchInput_PenLabel":"కలం ఉపయోగించండి","SketchInput_EraserLabel":"ఎరేజర్ ఉపయోగించండి","SketchInput_UndoLabel":"చివరి స్ట్రోక్ చర్య రద్దు చేయండి","SketchInput_Info":"ఎంచుకోవడానికి రెండు సార్లు నొక్కండి","SketchInput_SubmitLabel":"ఎక్స్‌ప్రెషన్‌ను సమర్పించండి","Teams_Solve_Waiting":"ఈ వ్యక్తీకరణను పరిష్కరిస్తుంది...","Teams_RelatedTo":"సంబంధిత","MathWeb_PageTopicRootTitle":"గణిత అంశాలు కనుగొనండి","MathWeb_PageTopicDescriptionFormat":"దశల వారీ పరిష్కారాలను అందించే మా ఉచిత గణితం సాల్వర్ ఉపయోగించి {0} గురించి తెలుసుకోండి."},"vi":{"Generic_Back":"Quay lại","MathWeb_GenericDownload":"Tải về","MathWeb_PageTopicRootDescription":"Ứng dụng Microsoft Math Solver trợ giúp từng bước cho nhiều loại bài toán khác nhau, bao gồm số học, đại số, lượng giác, vi tích phân, thống kê và các chủ đề khác sử dụng công cụ giải toán hỗ trợ AI tiên tiến.","MathWeb_Download_MobileHeading":"Giải pháp từng bước ở Mẹo ngón tay của bạn","MathWeb_Download_IOS":"Tải xuống cho iOS","MathWeb_Download_Android":"Tải xuống cho Android","MathWeb_Download_InstalledMessage":"Ứng dụng đã được cài đặt","MathWeb_Download_Button":"Tải ứng dụng máy tính","MathWeb_Download_Unavailable":"Ứng dụng trên máy tính không sẵn dùng","MathWeb_Download_MacMessage":"Hiện tại, ứng dụng máy tính để bàn Math Solver chỉ có sẵn qua Chrome trên MacOSX. Vui lòng mở trang này trong Chrome để cài đặt ứng dụng.","MathWeb_Download_UnknownMessage":"Hiện tại, máy tính để bàn Math Solver chỉ có sẵn qua Microsoft Edge và Chrome. Vui lòng mở trang này trong một trình duyệt tương thích.","EDU_PROB_CATEGORY_LIN_EQ":"Phương trình tuyến tính","EDU_PROB_CATEGORY_QUAD_EQ":"Phương trình bậc hai","EDU_PROB_CATEGORY_ARITHMETIC":"Số học","EDU_PROB_CATEGORY_TRIG":"Lượng giác","EDU_PROB_CATEGORY_MATRIX":"Ma trận","EDU_PROB_CATEGORY_SIM_EQ":"Phương trình đồng thời","EDU_PROB_CATEGORY_DIFF":"Lấy vi phân","EDU_PROB_CATEGORY_INTEGRATION":"Tích phân","EDU_PROB_CATEGORY_LIMITS":"Giới hạn","EDU_PROB_CATEGORY_COMPLEX":"Số phức","EDU_PROB_CATEGORY_LIST":"Danh sách","NotebookTab_Example":"Ví dụ","MathWeb_GenericSolve":"Giải","MathResult_Graph_ReCenter":"Căn giữa lại","MathWeb_Keyboard_Algebra":"đại số","MathWeb_Keyboard_Calculus":"Tính toán","MathWeb_Keyboard_List":"Danh sách","MathWeb_Keyboard_Matrices":"Ma trận","MathWeb_Keyboard_Numbers":"Số","MathWeb_Keyboard_Operators":"Vận hành","MathWeb_Keyboard_Statistics":"Thống kê","MathWeb_Keyboard_Trig":"lượng giác","MathWeb_Keyboard_Variables":"Biến","KeyboardInput_Solve":"Giải","KeyboardInput_PlaceholderText":"Nhập bài toán","MathWeb_Section_Steps_Title":"Lấy giải thích theo từng bước","MathWeb_Section_Steps_Subtitle":"Xem cách giải bài toán và hiển thị bài làm của bạn—cùng với lấy định nghĩa cho các khái niệm toán học","MathWeb_Section_Graph_Title":"Vẽ đồ thị bài toán của bạn","MathWeb_Section_Graph_Subtitle":"Ngay lập tức vẽ đồ thị bất kỳ phương trình nào để trực quan hóa hàm của bạn và hiểu mối quan hệ giữa các biến số","MathWeb_Section_Practice_Title":"Thực hành, thực hành, thực hành","MathWeb_Section_Practice_Subtitle":"Tìm kiếm tài liệu học tập bổ sung, như bảng tính và video hướng dẫn liên quan","MathWeb_Section_Language_Title":"Lấy trợ giúp toán học bằng ngôn ngữ của bạn","MathWeb_Section_Language_Subtitle":"Làm việc bằng tiếng Tây Ban Nha, tiếng Hindi, tiếng Đức và nhiều hơn thế nữa","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Thử công cụ giải toán","MathAnswerView_Videos":"Video","MathWeb_Section_Video_Subtitle":"Xem cho các tính năng mới, lời khuyên và nhiều hơn nữa!","MathWeb_Title":"Nhận lời giải theo từng bước cho bài toán của bạn","Results_Less":"Ít {0} hơn","Results_More":"Thêm {0}","MathPracticeProblem_SectionHeader":"Thực hành","MathWeb_PopularProblems":"Phổ biến vấn đề","MathWeb_SolveProblemTitleFormat":"Giải {0} | Ứng dụng giải toán Microsoft Math","MathWeb_SolveProblemDescription":"Giải các bài toán của bạn sử dụng công cụ giải toán miễn phí của chúng tôi với lời giải theo từng bước. Công cụ giải toán của chúng tôi hỗ trợ bài toán cơ bản, đại số sơ cấp, đại số, lượng giác, vi tích phân và nhiều hơn nữa.","Generic_About":"Về","MathWeb_Topics":"Chủ đề","Generic_PrivacyPolicy":"Chính sách về quyền riêng tư","Generic_TermOfUse":"Điều khoản dịch vụ","Settings_Language":"Ngôn ngữ","MathWeb_BackToTop":"Trở lại đầu trang","MathWeb_SimilarProblems":"Vấn đề tương tự","MathWeb_Topic_PreAlgebra":"Tiền đại số","MathWeb_Topic_PreAlgebra2":"Pre-đại số 2","MathWeb_Topic_OrderOfOperations":"Thứ tự các hoạt động","MathWeb_Topic_PrimeFactorization":"Prime factorization","MathWeb_Topic_Fractions":"Phân số","MathWeb_Topic_LCM":"Nhiều ít phổ biến nhất","MathWeb_Topic_GCF":"Yếu tố phổ biến nhất","MathWeb_Topic_Mean":"Là","MathWeb_Topic_Mode":"Chế độ","MathWeb_Topic_Exponents":"Số mũ","MathWeb_Topic_Radicals":"Gốc","MathWeb_Topic_MixedFractions":"Phân số hỗn hợp","MathWeb_Topic_Algebra":"Đại số","MathWeb_Topic_Algebra2":"Đại số 2","MathWeb_Topic_CombineLikeTerms":"Kết hợp các điều khoản giống","MathWeb_Topic_SolveForVariable":"Giải quyết cho một biến","MathWeb_Topic_LinearEquations":"Phương trình tuyến tính","MathWeb_Topic_QuadraticEquations":"Phương trình bậc hai","MathWeb_Topic_Matrices":"Ma trận","MathWeb_Topic_Inequalities":"Bất bình đẳng","MathWeb_Topic_SystemsOfEquations":"Hệ thống phương trình","MathWeb_Topic_Factor":"Yếu tố","MathWeb_Topic_Expand":"Mở rộng","MathWeb_Topic_EvaluteFractions":"Đánh giá phân số","MathWeb_Topic_Trigonometry":"Lượng giác","MathWeb_Topic_Simplify":"Đơn giản hóa","MathWeb_Topic_Evaluate":"Đánh giá","MathWeb_Topic_Graphs":"Đồ thị","MathWeb_Topic_SolveEquations":"Giải phương trình","MathWeb_Topic_Calculus":"Tính toán","MathWeb_Topic_Derivatives":"Derivatives","MathWeb_Topic_Integrals":"Tích phân","MathWeb_Topic_Limits":"Giới hạn","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Máy tính tay đại số","MathWeb_TrigCalculator":"Máy tính tay lượng giác","MathWeb_CalculusCalculator":"Máy tính tay vi tích phân","MathWeb_MatrixCalculator":"Máy tính ma trận","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Đang tạo bài kiểm tra...","Quiz_Error_Header":"Rất tiếc, chúng tôi không thể tạo bài kiểm tra dựa trên loại vấn đề đó. Vui lòng thử loại vấn đề khác.","Quiz_Notebook_ProblemCount_Template":"{0} bài toán tương tự với:","NoResults_MathSolveError":"Đã xảy ra lỗi, vui lòng thử lại","Quiz_Completion_Date":"Đã hoàn thành vào {0}","Quiz_Result_Correct":"Đúng","Quiz_Total_Score_Template":"Bạn đã trả lời chính xác {0} trong số {1} câu hỏi.","Quiz_Complete_Header":"Đã hoàn thành bài kiểm tra","Quiz_End_Finish":"Hoàn tất","KeyboardInput_Undo":"Hoàn tác","MathWeb_DeleteAll":"Xóa tất cả","MathWeb_MyQuizzes":"Câu đố của tôi","MathWeb_QuizNotFound":"Quiz không tìm thấy","Quiz_NextProblem":"Vấn đề tiếp theo","Quiz_CheckProblem":"Kiểm tra","Quiz_Answer_Prompt":"Chọn trả lời cho vấn đề:","Quiz_HintButton":"Trợ giúp tôi","MathWeb_NewQuiz":"Bài kiểm tra mới","Quiz_StartScreen_Question_Count_Template":"{0} câu hỏi trắc nghiệm","Quiz_StartScreen_Header":"Sẵn sàng làm bài kiểm tra?","Quiz_StartScreen_Time_Template":"{0} phút để hoàn thành","Quiz_Start":"Bắt đầu","Quiz_Result_Incorrect":"Sai","Quiz_Result_Your_Answer":"Trả lời của bạn:","Quiz_Result_See_Solution":"Xem giải pháp","Quiz_Entity":"Bài kiểm tra","MathWeb_InProgress":"Đang tiến triển","MathWeb_ConfirmQuizDelete":"Bạn có chắc chắn muốn xóa tất cả các câu đố không?","Generic_Edit":"Sửa","Generic_Close":"Đóng","MathResult_GraphHeader":"Đồ thị","Teams_ViewInteractiveGraph":"Xem biểu đồ tương tác","Network_Offline_Message":"Bạn đang ngoại tuyến. Vui lòng kiểm tra mạng của bạn.","NoResults_MathEquation":"Đã phát hiện phương trình này:","NoResults_MathError":"Chúng tôi không thể giải loại phương trình đó hoặc nó có thể có lỗi","NoResults_NoMath":"Rất tiếc, chúng tôi không thấy phương trình. Hãy đảm bảo rằng nó rõ ràng và hoàn toàn nằm trong khung","MathWeb_ViewSteps":"Xem các bước giải pháp","Quiz_Try_Label":"Thử bài kiểm tra","MathAnswerView_Concepts":"Các khái niệm liên quan","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Bảng tính từ Tìm kiếm web","MathAnswerView_Worksheets_Short":"Bảng tính","MathAnswerView_RelatedPages":"Các bài toán tương tự từ Tìm kiếm web","Results_Items":"Mục","Generic_Share":"Chia sẻ","Generic_Copy":"Sao chép","Share_CopiedToClipboard":"Đã sao chép vào bảng tạm","Accessibility_MathAnswerView_PoweredByBing":"Hoạt động trên nền tảng Bing","MathAnswerView_PoweredByBing":"Hoạt động trên nền tảng","MathAnswerView_EquationIsFalse":"Sai","MathAnswerView_EquationIsTrue":"Đúng","Feedback_Thanks":"Cảm ơn!","Feedback_Title":"Các kết quả này có hữu ích không?","MathAnswerView_DesktopUpsell_SectionHeader":"Phiên bản máy tính để bàn có sẵn","SketchInput_ClearLabel":"Xóa bản vẽ","SketchInput_Clear":"CLR","SketchInput_PenLabel":"Sử dụng bút","SketchInput_EraserLabel":"Sử dụng tẩy","SketchInput_UndoLabel":"Hoàn tác nét vẽ cuối cùng","SketchInput_Info":"Vẽ bài toán bên dưới","SketchInput_SubmitLabel":"Nộp biểu thức","Teams_Solve_Waiting":"Giải quyết các biểu thức này...","Teams_RelatedTo":"Liên quan đến","MathWeb_PageTopicRootTitle":"Khám phá các chủ đề toán học","MathWeb_PageTopicDescriptionFormat":"Tìm hiểu về {0} sử dụng công cụ giải toán miễn phí chứa lời giải từng bước của chúng tôi."},"tr":{"Generic_Back":"Geri","MathWeb_GenericDownload":"Indir","MathWeb_PageTopicRootDescription":"Microsoft Math Solver uygulaması, aritmetik, cebir, trigonometri, kalkülüs, istatistik ve diğer konulardaki çeşitli problemlerde gelişmiş yapay zeka ile güçlendirilmiş matematik çözücü kullanarak adım adım yardım sağlar.","MathWeb_Download_MobileHeading":"Adım adım çözümler parmaklarınızın ucunda","MathWeb_Download_IOS":"iOS için indirin","MathWeb_Download_Android":"Android için indirin","MathWeb_Download_InstalledMessage":"Uygulama zaten yüklü","MathWeb_Download_Button":"Masaüstü uygulamasını indirin","MathWeb_Download_Unavailable":"Masaüstü uygulaması kullanılamıyor","MathWeb_Download_MacMessage":"Şu anda Math Solver masaüstü uygulaması yalnızca MacOSX\'te Chrome üzerinden kullanılabiler. Uygulamayı yüklemek için lütfen bu sayfayı Chrome\'da açın.","MathWeb_Download_UnknownMessage":"Şu anda Math Solver masaüstü yalnızca Microsoft Edge ve Chrome üzerinden kullanılabilir. Lütfen bu sayfayı uyumlu bir tarayıcıda açın.","EDU_PROB_CATEGORY_LIN_EQ":"Doğrusal denklem","EDU_PROB_CATEGORY_QUAD_EQ":"İkinci dereceden denklem","EDU_PROB_CATEGORY_ARITHMETIC":"Aritmetik","EDU_PROB_CATEGORY_TRIG":"Trigonometri","EDU_PROB_CATEGORY_MATRIX":"Matris","EDU_PROB_CATEGORY_SIM_EQ":"Eş zamanlı denklem","EDU_PROB_CATEGORY_DIFF":"Türevleme","EDU_PROB_CATEGORY_INTEGRATION":"İntegralleme","EDU_PROB_CATEGORY_LIMITS":"Limitler","EDU_PROB_CATEGORY_COMPLEX":"Karmaşık sayılar","EDU_PROB_CATEGORY_LIST":"Liste","NotebookTab_Example":"Örnekler","MathWeb_GenericSolve":"Çözüm","MathResult_Graph_ReCenter":"Yeniden Ortala","MathWeb_Keyboard_Algebra":"Cebir","MathWeb_Keyboard_Calculus":"Matematik","MathWeb_Keyboard_List":"Liste","MathWeb_Keyboard_Matrices":"Matris","MathWeb_Keyboard_Numbers":"Numara","MathWeb_Keyboard_Operators":"Işleç","MathWeb_Keyboard_Statistics":"Istatistik","MathWeb_Keyboard_Trig":"Trigonometri","MathWeb_Keyboard_Variables":"Değişken","KeyboardInput_Solve":"Çözüm","KeyboardInput_PlaceholderText":"Bir matematik problemi yazın","MathWeb_Section_Steps_Title":"Adım adım açıklamalar alın","MathWeb_Section_Steps_Subtitle":"Problem çözmeyi ve çözüm adımlarını göstermeyi öğrenin ve matematiksel kavramların tanımlarını alın","MathWeb_Section_Graph_Title":"Matematik problemlerinizin grafiğini oluşturun","MathWeb_Section_Graph_Subtitle":"Fonksiyonunuzu görselleştirmek ve değişkenler arasındaki ilişkiyi anlamak için anında herhangi bir denklemin grafiğini oluşturun","MathWeb_Section_Practice_Title":"Pratik yapın","MathWeb_Section_Practice_Subtitle":"İlgili çalışma sayfaları ve video öğreticiler gibi diğer öğrenme materyallerini arayın","MathWeb_Section_Language_Title":"Kendi dilinizde matematik yardımı alın","MathWeb_Section_Language_Subtitle":"İspanyolca, Hintçe, Almanca ve diğer dillerde çalışır.","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Math Solver\'ı deneyin","MathAnswerView_Videos":"Videolar","MathWeb_Section_Video_Subtitle":"Yeni özellikler, ipuçları ve daha fazlası için izleyin!","MathWeb_Title":"Matematik problemlerinizin adım adım çözümlerini öğrenin","Results_Less":"Daha az {0}","Results_More":"{0} tane daha","MathPracticeProblem_SectionHeader":"Pratik","MathWeb_PopularProblems":"Popüler Sorunlar","MathWeb_SolveProblemTitleFormat":"{0} Denklemini Çözme | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Adım adım çözümleri içeren ücretsiz matematik çözücümüzü kullanarak matematik problemlerinizi çözün. Matematik çözücümüz temel matematik, cebir öncesi, cebir, trigonometri, kalkülüs konularını ve daha fazlasını destekler.","Generic_About":"Hakkı -nda","MathWeb_Topics":"Konu","Generic_PrivacyPolicy":"Gizlilik İlkesi","Generic_TermOfUse":"Hizmet koşulları","Settings_Language":"Dil","MathWeb_BackToTop":"Üste geri dön","MathWeb_SimilarProblems":"Benzer Sorunlar","MathWeb_Topic_PreAlgebra":"Cebir Öncesi","MathWeb_Topic_PreAlgebra2":"Cebir Öncesi 2","MathWeb_Topic_OrderOfOperations":"İşlem ler Sırası","MathWeb_Topic_PrimeFactorization":"Asal Çarpanlar","MathWeb_Topic_Fractions":"Kesir","MathWeb_Topic_LCM":"En Az Ortak Çoklu","MathWeb_Topic_GCF":"En Büyük Ortak Faktör","MathWeb_Topic_Mean":"Demek","MathWeb_Topic_Mode":"Modu","MathWeb_Topic_Exponents":"Üs","MathWeb_Topic_Radicals":"Radikaller","MathWeb_Topic_MixedFractions":"Karışık Kesirler","MathWeb_Topic_Algebra":"Cebir","MathWeb_Topic_Algebra2":"Cebir 2","MathWeb_Topic_CombineLikeTerms":"Benzer Terimleri Birleştir","MathWeb_Topic_SolveForVariable":"Bir Değişken için Çöz","MathWeb_Topic_LinearEquations":"Doğrusal Denklemler","MathWeb_Topic_QuadraticEquations":"Kuadratik Denklemler","MathWeb_Topic_Matrices":"Matris","MathWeb_Topic_Inequalities":"Eşitsizlikler","MathWeb_Topic_SystemsOfEquations":"Denklem Sistemleri","MathWeb_Topic_Factor":"Faktörü","MathWeb_Topic_Expand":"Genişletin","MathWeb_Topic_EvaluteFractions":"Kesirleri Değerlendir","MathWeb_Topic_Trigonometry":"Trigonometri","MathWeb_Topic_Simplify":"Basitleştirmek","MathWeb_Topic_Evaluate":"Değerlendirmek","MathWeb_Topic_Graphs":"Grafik","MathWeb_Topic_SolveEquations":"Denklemleri Çöz","MathWeb_Topic_Calculus":"Matematik","MathWeb_Topic_Derivatives":"Türev -leri","MathWeb_Topic_Integrals":"Integral","MathWeb_Topic_Limits":"Sınır -ları","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Cebir Hesap Makinesi","MathWeb_TrigCalculator":"Trigonometri Hesap Makinesi","MathWeb_CalculusCalculator":"Kalkülüs Hesap Makinesi","MathWeb_MatrixCalculator":"Matris Hesaplama","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Test oluşturuluyor...","Quiz_Error_Header":"Ne yazık ki bu problem türüne göre bir test oluşturamadık. Lütfen başka bir problem türü deneyin.","Quiz_Notebook_ProblemCount_Template":"Şuna benzer {0} problem:","NoResults_MathSolveError":"Bir sorun oluştu, lütfen tekrar deneyin","Quiz_Completion_Date":"{0} tarihinde tamamlandı","Quiz_Result_Correct":"Doğru","Quiz_Total_Score_Template":"{1} sorudan {0} tanesini yanıtladınız.","Quiz_Complete_Header":"Test tamamlandı","Quiz_End_Finish":"Bitir","KeyboardInput_Undo":"Geri al","MathWeb_DeleteAll":"Tümünü silme","MathWeb_MyQuizzes":"Benim sınavlar","MathWeb_QuizNotFound":"Sınav bulunamadı","Quiz_NextProblem":"Sonraki Problem","Quiz_CheckProblem":"Kontrol et","Quiz_Answer_Prompt":"Problemin cevabını seçin:","Quiz_HintButton":"Yardım","MathWeb_NewQuiz":"Yeni sınav","Quiz_StartScreen_Question_Count_Template":"Çoktan seçmeli {0} soru","Quiz_StartScreen_Header":"Teste hazır mısınız?","Quiz_StartScreen_Time_Template":"{0} dakikada tamamlanır","Quiz_Start":"Başlat","Quiz_Result_Incorrect":"Yanlış","Quiz_Result_Your_Answer":"Yanıtınız:","Quiz_Result_See_Solution":"Çözüme bakın","Quiz_Entity":"Test","MathWeb_InProgress":"Devam ediyor","MathWeb_ConfirmQuizDelete":"Tüm sınavları silmek istediğinizden emin misiniz?","Generic_Edit":"Düzenle","Generic_Close":"Kapat","MathResult_GraphHeader":"Grafik","Teams_ViewInteractiveGraph":"Etkileşimli Grafiği Görüntüle","Network_Offline_Message":"Çevrimdışısınız. Lütfen ağınızı kontrol edin.","NoResults_MathEquation":"Bu denklem algılandı:","NoResults_MathError":"Bu denklem türünü çözemiyoruz veya bir hata içeriyor olabilir","NoResults_NoMath":"Ne yazık ki bir denklem algılanamadı. Net ve tamamen çerçevenin içinde olduğundan emin olun.","MathWeb_ViewSteps":"Çözüm adımlarını görüntüleme","Quiz_Try_Label":"Bir test deneyin","MathAnswerView_Concepts":"İlgili Kavramlar","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Web Aramasından Çalışma Sayfaları","MathAnswerView_Worksheets_Short":"Çalışma sayfaları","MathAnswerView_RelatedPages":"Web Aramasından Benzer Problemler","Results_Items":"Öğeler","Generic_Share":"Paylaş","Generic_Copy":"Kopyala","Share_CopiedToClipboard":"Panoya kopyalandı","Accessibility_MathAnswerView_PoweredByBing":"Bing ile güçlendirilmiştir","MathAnswerView_PoweredByBing":"Destekleyen:","MathAnswerView_EquationIsFalse":"Yanlış","MathAnswerView_EquationIsTrue":"Doğru","Feedback_Thanks":"Teşekkürler!","Feedback_Title":"Bu sonuçlar faydalı oldu mu?","MathAnswerView_DesktopUpsell_SectionHeader":"Masaüstü sürümü mevcut","SketchInput_ClearLabel":"Taslağı temizle","SketchInput_Clear":"CLR","SketchInput_PenLabel":"Kalem kullan","SketchInput_EraserLabel":"Silgi kullan","SketchInput_UndoLabel":"Son çizgiyi geri al","SketchInput_Info":"Aşağıya bir problem çizin","SketchInput_SubmitLabel":"İfadeyi gönder","Teams_Solve_Waiting":"Bu ifadeyi çözme...","Teams_RelatedTo":"İlgili","MathWeb_PageTopicRootTitle":"Matematik Konularını Keşfedin","MathWeb_PageTopicDescriptionFormat":"Adım adım çözümleri barındıran ücretsiz matematik çözücümüzü kullanarak {0} hakkında bilgi edinin."},"th":{"Generic_Back":"ย้อนกลับ","MathWeb_GenericDownload":"ดาวน์โหลด","MathWeb_PageTopicRootDescription":"แอป Microsoft Math Solver ช่วยแก้โจทย์ปัญหาประเภทต่างๆ แบบทีละขั้นตอน ไม่ว่าจะเป็นเลขคณิต พีชคณิต ตรีโกณมิติ แคลคูลัส สถิติ หรือหัวข้ออื่นๆ โดยใช้โปรแกรมแก้โจทย์ปัญหาคณิตศาสตร์ซึ่งขับเคลื่อนด้วย AI ขั้นสูง","MathWeb_Download_MobileHeading":"วิธีแก้ปัญหาทีละขั้นตอนที่ปลายนิ้วของคุณ","MathWeb_Download_IOS":"ดาวน์โหลดสําหรับ iOS","MathWeb_Download_Android":"ดาวน์โหลดสําหรับแอนดรอยด์","MathWeb_Download_InstalledMessage":"แอปที่ติดตั้งแล้ว","MathWeb_Download_Button":"ดาวน์โหลดแอปเดสก์ท็อป","MathWeb_Download_Unavailable":"แอปเดสก์ท็อปไม่พร้อมใช้งาน","MathWeb_Download_MacMessage":"ปัจจุบันแอปพริปเดสก์ท็อปของโปรแกรมแก้ปัญหาคณิตศาสตร์มีให้บริการผ่าน Chrome บน MacOSX เท่านั้น โปรดเปิดหน้านี้ใน Chrome เพื่อติดตั้งแอป","MathWeb_Download_UnknownMessage":"ปัจจุบันสก์ท็อปคณิตศาสตร์ Solver สามารถใช้ได้ผ่านทาง Microsoft ขอบและโครเมียมเท่านั้น กรุณาเปิดหน้านี้ในเบราว์เซอร์ที่เข้ากันได้","EDU_PROB_CATEGORY_LIN_EQ":"สมการเชิงเส้น","EDU_PROB_CATEGORY_QUAD_EQ":"สมการกำลังสอง","EDU_PROB_CATEGORY_ARITHMETIC":"เลขคณิต","EDU_PROB_CATEGORY_TRIG":"ตรีโกณมิติ","EDU_PROB_CATEGORY_MATRIX":"เมทริกซ์","EDU_PROB_CATEGORY_SIM_EQ":"สมการหลายชั้น","EDU_PROB_CATEGORY_DIFF":"การหาอนุพันธ์","EDU_PROB_CATEGORY_INTEGRATION":"การหาปริพันธ์","EDU_PROB_CATEGORY_LIMITS":"ลิมิต","EDU_PROB_CATEGORY_COMPLEX":"จำนวนเชิงซ้อน","EDU_PROB_CATEGORY_LIST":"รายการ","NotebookTab_Example":"ตัวอย่าง","MathWeb_GenericSolve":"แก้โจทย์ปัญหา","MathResult_Graph_ReCenter":"ย้ายไปยังกึ่งกลางอีกครั้ง","MathWeb_Keyboard_Algebra":"พีชคณิต","MathWeb_Keyboard_Calculus":"แคลคูลัส","MathWeb_Keyboard_List":"รายการ","MathWeb_Keyboard_Matrices":"เมทริกซ์","MathWeb_Keyboard_Numbers":"หมาย เลข","MathWeb_Keyboard_Operators":"ผู้ ประกอบการ","MathWeb_Keyboard_Statistics":"สถิติ","MathWeb_Keyboard_Trig":"ตรีโกณมิติ","MathWeb_Keyboard_Variables":"ตัว แปร","KeyboardInput_Solve":"แก้โจทย์ปัญหา","KeyboardInput_PlaceholderText":"พิมพ์โจทย์ปัญหาคณิตศาสตร์","MathWeb_Section_Steps_Title":"รับคำอธิบายทีละขั้นตอน","MathWeb_Section_Steps_Subtitle":"ดูวิธีการแก้โจทย์ปัญหาและแสดงวิธีทำของคุณ พร้อมรับนิยามสำหรับแนวคิดทางคณิตศาสตร์","MathWeb_Section_Graph_Title":"สร้างกราฟให้โจทย์ปัญหาคณิตศาสตร์ของคุณ","MathWeb_Section_Graph_Subtitle":"สร้างกราฟสมการโดยทันทีเพื่อให้เห็นภาพฟังก์ชันของคุณและเข้าใจความสัมพันธ์ระหว่างตัวแปร","MathWeb_Section_Practice_Title":"ฝึกฝน ฝึกฝน ฝึกฝน","MathWeb_Section_Practice_Subtitle":"ค้นหาสื่อการเรียนรู้เพิ่มเติม เช่น เวิร์กชีตและวิดีโอบทช่วยสอนที่เกี่ยวข้อง","MathWeb_Section_Language_Title":"รับความช่วยเหลือสำหรับคณิตศาสตร์เป็นภาษาของคุณ","MathWeb_Section_Language_Subtitle":"ใช้งานเป็นภาษาสเปน ภาษาฮินดี ภาษาเยอรมัน และอื่นๆ","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"ลองใช้ Math Solver","MathAnswerView_Videos":"วิดีโอ","MathWeb_Section_Video_Subtitle":"ดูคุณสมบัติใหม่เคล็ดลับและอื่น ๆ !","MathWeb_Title":"รับวิธีแก้โจทย์ปัญหาคณิตศาสตร์ของคุณแบบทีละขั้นตอน","Results_Less":"{0} น้อยลง","Results_More":"{0} เพิ่มเติม","MathPracticeProblem_SectionHeader":"ฝึกฝน","MathWeb_PopularProblems":"ปัญหายอดนิยม","MathWeb_SolveProblemTitleFormat":"แก้โจทย์ {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"แก้โจทย์ปัญหาคณิตศาสตร์ของคุณโดยใช้โปรแกรมแก้โจทย์ปัญหาคณิตศาสตร์แบบไม่มีค่าใช้จ่ายและแสดงวิธีทำทีละขั้นตอน โปรแกรมแก้โจทย์ปัญหาคณิตศาสตร์ของเรารองรับคณิตศาสตร์พื้นฐาน พีชคณิตพื้นฐาน พีชคณิต ตรีโกณมิติ แคลคูลัส และอื่นๆ","Generic_About":"เกี่ยวกับ","MathWeb_Topics":"หัว ข้อ","Generic_PrivacyPolicy":"นโยบายความเป็นส่วนตัว","Generic_TermOfUse":"ข้อกำหนดการใช้บริการ","Settings_Language":"ภาษา","MathWeb_BackToTop":"เริ่มที่ 1,200","MathWeb_SimilarProblems":"ปัญหาที่คล้ายกัน","MathWeb_Topic_PreAlgebra":"พรีพีชคณิต","MathWeb_Topic_PreAlgebra2":"พรีพีชคณิต 2","MathWeb_Topic_OrderOfOperations":"ลําดับการดําเนินงาน","MathWeb_Topic_PrimeFactorization":"ปัจจัยสําคัญ","MathWeb_Topic_Fractions":"เศษส่วน","MathWeb_Topic_LCM":"จํานวนการคูณทั่วไปน้อยที่สุด","MathWeb_Topic_GCF":"ปัจจัยร่วมที่ยิ่งใหญ่ที่สุด","MathWeb_Topic_Mean":"เฉลี่ย","MathWeb_Topic_Mode":"โหมด","MathWeb_Topic_Exponents":"เลขชี้กําลัง","MathWeb_Topic_Radicals":"อนุมูล อิสระ","MathWeb_Topic_MixedFractions":"เศษส่วนผสม","MathWeb_Topic_Algebra":"พีชคณิต","MathWeb_Topic_Algebra2":"พีชคณิต 2","MathWeb_Topic_CombineLikeTerms":"รวมข้อกําหนดและเงื่อนไข","MathWeb_Topic_SolveForVariable":"แก้สําหรับตัวแปร","MathWeb_Topic_LinearEquations":"สมการเชิงเส้น","MathWeb_Topic_QuadraticEquations":"สมการกําลังสอง","MathWeb_Topic_Matrices":"เมทริกซ์","MathWeb_Topic_Inequalities":"ความอสมสม","MathWeb_Topic_SystemsOfEquations":"ระบบสมการ","MathWeb_Topic_Factor":"ปัจจัย","MathWeb_Topic_Expand":"ขยาย","MathWeb_Topic_EvaluteFractions":"ประเมินเศษส่วน","MathWeb_Topic_Trigonometry":"ตรีโกณมิติ","MathWeb_Topic_Simplify":"ทำ","MathWeb_Topic_Evaluate":"ประเมิน","MathWeb_Topic_Graphs":"กราฟ","MathWeb_Topic_SolveEquations":"แก้สมการ","MathWeb_Topic_Calculus":"แคลคูลัส","MathWeb_Topic_Derivatives":"อนุพันธ์","MathWeb_Topic_Integrals":"อวน","MathWeb_Topic_Limits":"ขีด จำกัด","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"โปรแกรมคำนวณพีชคณิต","MathWeb_TrigCalculator":"โปรแกรมคำนวณตรีโกณมิติ","MathWeb_CalculusCalculator":"โปรแกรมคำนวณแคลคูลัส","MathWeb_MatrixCalculator":"เครื่องคิดเลขเมทริกซ์","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"กำลังสร้างแบบทดสอบ...","Quiz_Error_Header":"ขออภัย เราไม่สามารถสร้างแบบทดสอบตามปัญหาประเภทนั้นได้ โปรดลองใช้ปัญหาประเภทอื่น","Quiz_Notebook_ProblemCount_Template":"ปัญหา {0} ข้อที่คล้ายคลึงกับ:","NoResults_MathSolveError":"เกิดข้อผิดพลาดบางอย่าง โปรดลองอีกครั้ง","Quiz_Completion_Date":"ทำเสร็จเมื่อวันที่ {0}","Quiz_Result_Correct":"ถูกต้อง","Quiz_Total_Score_Template":"คุณตอบคำถามถูก {0} จาก {1} ข้อ","Quiz_Complete_Header":"ทำแบบทดสอบเสร็จแล้ว","Quiz_End_Finish":"เสร็จสิ้น","KeyboardInput_Undo":"เลิกทำ","MathWeb_DeleteAll":"ลบทั้งหมด","MathWeb_MyQuizzes":"แบบทดสอบของฉัน","MathWeb_QuizNotFound":"ไม่พบแบบทดสอบ","Quiz_NextProblem":"ปัญหาถัดไป","Quiz_CheckProblem":"กาเครื่องหมาย","Quiz_Answer_Prompt":"เลือกคำตอบของปัญหา:","Quiz_HintButton":"ช่วยฉัน","MathWeb_NewQuiz":"แบบทดสอบใหม่","Quiz_StartScreen_Question_Count_Template":"คำถามแบบตัวเลือก {0} ข้อ","Quiz_StartScreen_Header":"พร้อมทำแบบทดสอบแล้วหรือไม่","Quiz_StartScreen_Time_Template":"เหลือเวลาในการทำแบบทดสอบ {0} นาที","Quiz_Start":"เริ่มต้น","Quiz_Result_Incorrect":"ไม่ถูกต้อง","Quiz_Result_Your_Answer":"คำตอบของคุณ:","Quiz_Result_See_Solution":"ดูเฉลย","Quiz_Entity":"แบบทดสอบ","MathWeb_InProgress":"อยู่ระหว่างดําเนินการ","MathWeb_ConfirmQuizDelete":"คุณแน่ใจหรือไม่ว่าคุณต้องการลบแบบทดสอบทั้งหมด","Generic_Edit":"แก้ไข","Generic_Close":"ปิด","MathResult_GraphHeader":"กราฟ","Teams_ViewInteractiveGraph":"ดูกราฟเชิงโต้ตอบ","Network_Offline_Message":"คุณออฟไลน์อยู่ โปรดตรวจสอบเครือข่ายของคุณ","NoResults_MathEquation":"Detected this equation:","NoResults_MathError":"เราไม่สามารถแก้สมการชนิดนั้นได้ หรือสมการดังกล่าวอาจมีข้อผิดพลาด","NoResults_NoMath":"ขออภัย เราไม่เห็นสมการ โปรดตรวจสอบให้แน่ใจว่าสมการดังกล่าวชัดเจนและอยู่ในเฟรมครบถ้วน","MathWeb_ViewSteps":"ดูขั้นตอนของโซลูชัน","Quiz_Try_Label":"ลองทำแบบทดสอบ","MathAnswerView_Concepts":"แนวคิดที่เกี่ยวข้อง","Generic_PDF":"PDF","MathAnswerView_Worksheets":"เวิร์กชีตจากการค้นหาในเว็บ","MathAnswerView_Worksheets_Short":"เวิร์กชีต","MathAnswerView_RelatedPages":"โจทย์ปัญหาที่คล้ายคลึงกันจากการค้นหาในเว็บ","Results_Items":"รายการ","Generic_Share":"แชร์","Generic_Copy":"คัดลอก","Share_CopiedToClipboard":"คัดลอกไปยังคลิปบอร์ดแล้ว","Accessibility_MathAnswerView_PoweredByBing":"Powered by Bing","MathAnswerView_PoweredByBing":"Powered by","MathAnswerView_EquationIsFalse":"เท็จ","MathAnswerView_EquationIsTrue":"จริง","Feedback_Thanks":"ขอบคุณ!","Feedback_Title":"ผลลัพธ์เหล่านี้มีประโยชน์หรือไม่","MathAnswerView_DesktopUpsell_SectionHeader":"มีรุ่นเดสก์ท็อป","SketchInput_ClearLabel":"ล้างข้อมูลภาพร่าง","SketchInput_Clear":"CLR","SketchInput_PenLabel":"ใช้ปากกา","SketchInput_EraserLabel":"ใช้ยางลบ","SketchInput_UndoLabel":"เลิกทำเส้นที่ขีดครั้งล่าสุด","SketchInput_Info":"วาดโจทย์ปัญหาด้านล่าง","SketchInput_SubmitLabel":"ส่งนิพจน์","Teams_Solve_Waiting":"กําลังแก้ไขนิพจน์นี้...","Teams_RelatedTo":"เกี่ยวข้องกับ","MathWeb_PageTopicRootTitle":"สำรวจหัวข้อทางคณิตศาสตร์","MathWeb_PageTopicDescriptionFormat":"เรียนรู้เกี่ยวกับ {0} โดยใช้โปรแกรมแก้โจทย์ปัญหาคณิตศาสตร์แบบไม่มีค่าใช้จ่ายและแสดงวิธีทำทีละขั้นตอนของเรา"},"sk":{"Generic_Back":"Späť","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"Aplikácia Microsoft Math Solver vás prevedie postupnými krokmi riešení rozličných problémov z oblastí, ako sú aritmetika, algebra, trigonometria, matematická analýza, štatistika a iné. Pri výpočtoch sa pritom využíva pokročilá umelá inteligencia.","MathWeb_Download_MobileHeading":"Step-by-step solutions at your finger tips","MathWeb_Download_IOS":"Download for iOS","MathWeb_Download_Android":"Download for Android","MathWeb_Download_InstalledMessage":"App already installed","MathWeb_Download_Button":"Download desktop app","MathWeb_Download_Unavailable":"Desktop app unavailable","MathWeb_Download_MacMessage":"Currently, the Math Solver desktop app is only available via Chrome on MacOSX. Please open this page in Chrome to install the app.","MathWeb_Download_UnknownMessage":"Currently, the Math Solver desktop is only available via Microsoft Edge and Chrome. Please open this page in a compatible browser.","EDU_PROB_CATEGORY_LIN_EQ":"Lineárna rovnica","EDU_PROB_CATEGORY_QUAD_EQ":"Kvadratická rovnica","EDU_PROB_CATEGORY_ARITHMETIC":"Aritmetické úlohy","EDU_PROB_CATEGORY_TRIG":"Trigonometria","EDU_PROB_CATEGORY_MATRIX":"Matica","EDU_PROB_CATEGORY_SIM_EQ":"Simultánna rovnica","EDU_PROB_CATEGORY_DIFF":"Diferenciálne rovnice","EDU_PROB_CATEGORY_INTEGRATION":"Integrácia","EDU_PROB_CATEGORY_LIMITS":"Limity","EDU_PROB_CATEGORY_COMPLEX":"Komplexné čísla","EDU_PROB_CATEGORY_LIST":"Zoznam","NotebookTab_Example":"Príklady","MathWeb_GenericSolve":"Vyriešiť","MathResult_Graph_ReCenter":"Vycentrovať","MathWeb_Keyboard_Algebra":"algebra","MathWeb_Keyboard_Calculus":"calculus","MathWeb_Keyboard_List":"list","MathWeb_Keyboard_Matrices":"matrices","MathWeb_Keyboard_Numbers":"numbers","MathWeb_Keyboard_Operators":"operators","MathWeb_Keyboard_Statistics":"statistics","MathWeb_Keyboard_Trig":"trigonometry","MathWeb_Keyboard_Variables":"variables","KeyboardInput_Solve":"Vyriešiť","KeyboardInput_PlaceholderText":"Zadajte matematickú úlohu","MathWeb_Section_Steps_Title":"Podrobné vysvetlenia","MathWeb_Section_Steps_Subtitle":"Zistite, ako riešiť úlohy, ukážte svoj postup a získajte definície matematických pojmov.","MathWeb_Section_Graph_Title":"Zobrazenie matematických úloh v grafe","MathWeb_Section_Graph_Subtitle":"Okamžite zobrazte ľubovoľnú rovnicu v grafe, aby ste získali predstavu o danej funkcii a pochopili vzťah medzi premennými.","MathWeb_Section_Practice_Title":"Opakovanie je matkou múdrosti","MathWeb_Section_Practice_Subtitle":"Vyhľadajte ďalšie vzdelávacie materiály, napríklad súvisiace hárky a videonávody.","MathWeb_Section_Language_Title":"Pomoc s matematikou vo vašom jazyku","MathWeb_Section_Language_Subtitle":"Aplikácia je dostupná v španielčine, hindčine, nemčine a ďalších jazykoch.","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Vyskúšajte Math Solver","MathAnswerView_Videos":"Videá","MathWeb_Section_Video_Subtitle":"Watch for new features, tips and more!","MathWeb_Title":"Získajte postupné kroky riešení matematických problémov","Results_Less":"Menej {0}","Results_More":"Viac {0}","MathPracticeProblem_SectionHeader":"Cvičenie","MathWeb_PopularProblems":"Popular Problems","MathWeb_SolveProblemTitleFormat":"Vyriešiť {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Vyriešte matematické problémy pomocou nášho bezplatného matematického nástroja, ktorý vás prevedie jednotlivými krokmi riešení. Podporované sú základné matematické funkcie, základná aj pokročilejšia algebra, trigonometria, matematická analýza a ďalšie oblasti.","Generic_About":"About","MathWeb_Topics":"Topics","Generic_PrivacyPolicy":"Zásady ochrany osobných údajov","Generic_TermOfUse":"Podmienky poskytovania služby","Settings_Language":"Jazyk","MathWeb_BackToTop":"Back to top","MathWeb_SimilarProblems":"Similar Problems","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Order of Operations","MathWeb_Topic_PrimeFactorization":"Prime Factorization","MathWeb_Topic_Fractions":"Fractions","MathWeb_Topic_LCM":"Least Common Multiple","MathWeb_Topic_GCF":"Greatest Common Factor","MathWeb_Topic_Mean":"Mean","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Exponents","MathWeb_Topic_Radicals":"Radicals","MathWeb_Topic_MixedFractions":"Mixed Fractions","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Combine Like Terms","MathWeb_Topic_SolveForVariable":"Solve for a Variable","MathWeb_Topic_LinearEquations":"Linear Equations","MathWeb_Topic_QuadraticEquations":"Quadratic Equations","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Inequalities","MathWeb_Topic_SystemsOfEquations":"Systems of Equations","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Expand","MathWeb_Topic_EvaluteFractions":"Evaluate Fractions","MathWeb_Topic_Trigonometry":"Trigonometry","MathWeb_Topic_Simplify":"Simplify","MathWeb_Topic_Evaluate":"Evaluate","MathWeb_Topic_Graphs":"Graphs","MathWeb_Topic_SolveEquations":"Solve Equations","MathWeb_Topic_Calculus":"Calculus","MathWeb_Topic_Derivatives":"Derivatives","MathWeb_Topic_Integrals":"Integrals","MathWeb_Topic_Limits":"Limits","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Kalkulačka algebraických výrazov","MathWeb_TrigCalculator":"Kalkulačka na výpočet trigonometrických funkcií","MathWeb_CalculusCalculator":"Kalkulačka na výpočet derivácií a integrálov","MathWeb_MatrixCalculator":"Matrix Calculator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Generuje sa kvíz...","Quiz_Error_Header":"Ľutujeme, ale na základe daného typu úlohy sa nám kvíz nepodarilo vygenerovať. Skúste to s iným typom úlohy.","Quiz_Notebook_ProblemCount_Template":"{0} úloh podobných ako:","NoResults_MathSolveError":"Vyskytla sa chyba, skúste to znova.","Quiz_Completion_Date":"Dokončené {0}","Quiz_Result_Correct":"Správne","Quiz_Total_Score_Template":"Odpovedali ste správne na {0} z {1} otázok.","Quiz_Complete_Header":"Kvíz je dokončený","Quiz_End_Finish":"Dokončiť","KeyboardInput_Undo":"Späť","MathWeb_DeleteAll":"Delete all","MathWeb_MyQuizzes":"My quizzes","MathWeb_QuizNotFound":"Quiz not found","Quiz_NextProblem":"Ďalší problém","Quiz_CheckProblem":"Skontrolovať","Quiz_Answer_Prompt":"Vyberte správne riešenie:","Quiz_HintButton":"Poraďte mi","MathWeb_NewQuiz":"New quiz","Quiz_StartScreen_Question_Count_Template":"{0} otázok s výberom možností","Quiz_StartScreen_Header":"Ste pripravení na kvíz?","Quiz_StartScreen_Time_Template":"Na dokončenie treba {0} min","Quiz_Start":"Spustiť","Quiz_Result_Incorrect":"Nesprávne","Quiz_Result_Your_Answer":"Vaša odpoveď:","Quiz_Result_See_Solution":"Zobraziť riešenie","Quiz_Entity":"Kvíz","MathWeb_InProgress":"In progress","MathWeb_ConfirmQuizDelete":"Are you sure you want to delete all quizzes?","Generic_Edit":"Upraviť","Generic_Close":"Zavrieť","MathResult_GraphHeader":"Graf","Teams_ViewInteractiveGraph":"View Interactive Graph","Network_Offline_Message":"Ste offline. Skontrolujte pripojenie k sieti.","NoResults_MathEquation":"Zistila sa táto rovnica:","NoResults_MathError":"Tento typ rovnice nedokážeme vyriešiť alebo rovnica obsahuje chybu.","NoResults_NoMath":"Nezistila sa žiadna rovnica. Uistite sa, že je zreteľná a nachádza sa celá v rámčeku.","MathWeb_ViewSteps":"View solution steps","Quiz_Try_Label":"Vyskúšať kvíz","MathAnswerView_Concepts":"Súvisiace pojmy","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Hárky z hľadania na webe","MathAnswerView_Worksheets_Short":"Hárky","MathAnswerView_RelatedPages":"Podobné úlohy z hľadania na webe","Results_Items":"položiek","Generic_Share":"Zdieľať","Generic_Copy":"Kopírovať","Share_CopiedToClipboard":"Skopírované do schránky","Accessibility_MathAnswerView_PoweredByBing":"Používa Bing","MathAnswerView_PoweredByBing":"Používa techonológiu","MathAnswerView_EquationIsFalse":"Nepravda","MathAnswerView_EquationIsTrue":"Pravda","Feedback_Thanks":"Ďakujeme!","Feedback_Title":"Boli tieto výsledky užitočné?","MathAnswerView_DesktopUpsell_SectionHeader":"K dispozícii je počítačová verzia","SketchInput_ClearLabel":"Vymazať náčrt","SketchInput_Clear":"CLR","SketchInput_PenLabel":"Použiť pero","SketchInput_EraserLabel":"Použiť gumu","SketchInput_UndoLabel":"Zrušiť posledný ťah","SketchInput_Info":"Nakreslite úlohu nižšie","SketchInput_SubmitLabel":"Odoslať výraz","Teams_Solve_Waiting":"Solving this expression...","Teams_RelatedTo":"Related To","MathWeb_PageTopicRootTitle":"Preskúmajte matematické témy","MathWeb_PageTopicDescriptionFormat":"Získajte vedomosti z oblasti {0} pomocou nášho bezplatného matematického nástroja, ktorý vás prevedie postupnými krokmi riešení."},"ro":{"Generic_Back":"Înapoi","MathWeb_GenericDownload":"Descărcaţi","MathWeb_PageTopicRootDescription":"Aplicația Microsoft Math Solver oferă ajutor pas cu pas pentru o varietate de probleme, inclusiv de aritmetică, algebră, trigonometrie, calcul infinitezimal, statistică și alte ramuri, utilizând un program avansat de rezolvare a problemelor de matematică susținut de inteligența artificială.","MathWeb_Download_MobileHeading":"Soluții pas cu pas la îndemână","MathWeb_Download_IOS":"Descărcați pentru iOS","MathWeb_Download_Android":"Descărcați pentru Android","MathWeb_Download_InstalledMessage":"Aplicație deja instalată","MathWeb_Download_Button":"Descărcați aplicația desktop","MathWeb_Download_Unavailable":"Aplicația Desktop nu este disponibilă","MathWeb_Download_MacMessage":"În prezent, aplicația desktop Math Solver este disponibilă numai prin Chrome pe MacOSX. Deschideți această pagină în Chrome pentru a instala aplicația.","MathWeb_Download_UnknownMessage":"În prezent, desktopul Math Solver este disponibil numai prin Microsoft Edge și Chrome. Deschideți această pagină într-un browser compatibil.","EDU_PROB_CATEGORY_LIN_EQ":"Ecuație liniară","EDU_PROB_CATEGORY_QUAD_EQ":"Ecuație de gradul 2","EDU_PROB_CATEGORY_ARITHMETIC":"Aritmetică","EDU_PROB_CATEGORY_TRIG":"Trigonometrie","EDU_PROB_CATEGORY_MATRIX":"Matrice","EDU_PROB_CATEGORY_SIM_EQ":"Sistem de ecuații","EDU_PROB_CATEGORY_DIFF":"Derivare","EDU_PROB_CATEGORY_INTEGRATION":"Integrare","EDU_PROB_CATEGORY_LIMITS":"Limite","EDU_PROB_CATEGORY_COMPLEX":"Numere complexe","EDU_PROB_CATEGORY_LIST":"Listă","NotebookTab_Example":"Exemple","MathWeb_GenericSolve":"Rezolvare","MathResult_Graph_ReCenter":"Recentrați","MathWeb_Keyboard_Algebra":"Algebra","MathWeb_Keyboard_Calculus":"Calcul","MathWeb_Keyboard_List":"Listă","MathWeb_Keyboard_Matrices":"Matrice","MathWeb_Keyboard_Numbers":"Numere","MathWeb_Keyboard_Operators":"Operatorii","MathWeb_Keyboard_Statistics":"Statistici","MathWeb_Keyboard_Trig":"Trigonometrie","MathWeb_Keyboard_Variables":"Variabile","KeyboardInput_Solve":"Rezolvare","KeyboardInput_PlaceholderText":"Introduceți o problemă de matematică","MathWeb_Section_Steps_Title":"Obțineți explicații pas cu pas","MathWeb_Section_Steps_Subtitle":"Aflați cum să rezolvați probleme și să vă prezentați lucrarea. În plus, obțineți definiții pentru conceptele matematice","MathWeb_Section_Graph_Title":"Realizați grafice cu problemele de matematică","MathWeb_Section_Graph_Subtitle":"Realizați instantaneu graficul oricărei ecuații pentru a vizualiza funcția și a înțelege relația dintre variabile","MathWeb_Section_Practice_Title":"Exersați, exersați, exersați","MathWeb_Section_Practice_Subtitle":"Căutați materiale de învățare suplimentare, cum ar fi foile de lucru și tutorialele video asociate","MathWeb_Section_Language_Title":"Obțineți ajutor la matematică în limba proprie","MathWeb_Section_Language_Subtitle":"Funcționează în spaniolă, hindi, germană și multe altele","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Încercați Math Solver","MathAnswerView_Videos":"Videoclipuri","MathWeb_Section_Video_Subtitle":"Uita-te pentru noi caracteristici, sfaturi și mai mult!","MathWeb_Title":"Obțineți rezolvări pas cu pas pentru problemele de matematică","Results_Less":"Mai puține {0}","Results_More":"Mai multe {0}","MathPracticeProblem_SectionHeader":"Exersați","MathWeb_PopularProblems":"Probleme populare","MathWeb_SolveProblemTitleFormat":"Rezolvați {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Rezolvați probleme de matematică cu programul nostru gratuit cu soluții pas cu pas. Programul nostru de rezolvare a problemelor de matematică acceptă probleme de matematică de bază, algebră elementară, algebră, trigonometrie, calcul infinitezimal și multe altele.","Generic_About":"Despre","MathWeb_Topics":"Subiecte","Generic_PrivacyPolicy":"Politică de confidențialitate","Generic_TermOfUse":"Condiții de furnizare a serviciului","Settings_Language":"Limbă","MathWeb_BackToTop":"Înapoi la început","MathWeb_SimilarProblems":"Probleme similare","MathWeb_Topic_PreAlgebra":"Pre-Algebră","MathWeb_Topic_PreAlgebra2":"Prealgebra 2 (Pre-Algebra 2)","MathWeb_Topic_OrderOfOperations":"Ordinea operațiunilor","MathWeb_Topic_PrimeFactorization":"Factorizare prim","MathWeb_Topic_Fractions":"Fracţii","MathWeb_Topic_LCM":"Cel mai puțin frecvente multiple","MathWeb_Topic_GCF":"Cel mai mare factor comun","MathWeb_Topic_Mean":"Înseamnă","MathWeb_Topic_Mode":"Modul","MathWeb_Topic_Exponents":"Exponenţii","MathWeb_Topic_Radicals":"Radicalilor liberi","MathWeb_Topic_MixedFractions":"Fracțiuni mixte","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2 (În )","MathWeb_Topic_CombineLikeTerms":"Combină termeni ca","MathWeb_Topic_SolveForVariable":"Rezolva pentru o variabilă","MathWeb_Topic_LinearEquations":"Ecuații liniare","MathWeb_Topic_QuadraticEquations":"Ecuații pătratice","MathWeb_Topic_Matrices":"Matrice","MathWeb_Topic_Inequalities":"Inegalităţilor","MathWeb_Topic_SystemsOfEquations":"Sisteme de ecuații","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Extinde","MathWeb_Topic_EvaluteFractions":"Evaluarea fracțiilor","MathWeb_Topic_Trigonometry":"Trigonometrie","MathWeb_Topic_Simplify":"Simplifica","MathWeb_Topic_Evaluate":"Evalua","MathWeb_Topic_Graphs":"Grafice","MathWeb_Topic_SolveEquations":"Rezolvarea ecuațiilor","MathWeb_Topic_Calculus":"Calcul","MathWeb_Topic_Derivatives":"Derivate","MathWeb_Topic_Integrals":"Integrale","MathWeb_Topic_Limits":"Limitele","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Calculator algebră","MathWeb_TrigCalculator":"Calculator trigonometrie","MathWeb_CalculusCalculator":"Calculator calcul infinitezimal","MathWeb_MatrixCalculator":"Calculator matrice","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Se generează un test...","Quiz_Error_Header":"Ne pare rău, nu putem genera un test pe baza acelui tip de problemă. Vă rugăm să încercați un alt tip de problemă.","Quiz_Notebook_ProblemCount_Template":"{0} probleme similare cu aceasta:","NoResults_MathSolveError":"A apărut o problemă, încercați din nou","Quiz_Completion_Date":"Finalizat pe {0}","Quiz_Result_Correct":"Corect","Quiz_Total_Score_Template":"Ați răspuns corect la {0} din {1} întrebări.","Quiz_Complete_Header":"Test finalizat","Quiz_End_Finish":"Finalizați","KeyboardInput_Undo":"Anulare","MathWeb_DeleteAll":"Ștergeți tot","MathWeb_MyQuizzes":"Chestionarele mele","MathWeb_QuizNotFound":"Testul nu a fost găsit","Quiz_NextProblem":"Problema următoare","Quiz_CheckProblem":"Verificați","Quiz_Answer_Prompt":"Selectați răspunsul problemei:","Quiz_HintButton":"Am nevoie de ajutor","MathWeb_NewQuiz":"Test nou","Quiz_StartScreen_Question_Count_Template":"{0} întrebări cu răspuns multiplu","Quiz_StartScreen_Header":"Sunteți pregătit pentru un test?","Quiz_StartScreen_Time_Template":"Poate fi finalizat în {0}","Quiz_Start":"Start","Quiz_Result_Incorrect":"Incorect","Quiz_Result_Your_Answer":"Răspunsul dvs.:","Quiz_Result_See_Solution":"Vedeți soluția","Quiz_Entity":"Test","MathWeb_InProgress":"În curs de desfășurare","MathWeb_ConfirmQuizDelete":"Sigur ștergeți toate chestionarele?","Generic_Edit":"Editați","Generic_Close":"Închideți","MathResult_GraphHeader":"Grafic","Teams_ViewInteractiveGraph":"Vizualizare grafic interactiv","Network_Offline_Message":"Sunteți offline. Vă rugăm să verificați rețeaua.","NoResults_MathEquation":"A fost detectată această ecuație:","NoResults_MathError":"Nu putem rezolva acest tip de ecuație sau este posibil ca aceasta să conțină o eroare","NoResults_NoMath":"Ne pare rău, nu putem vedea ecuația. Asigurați-vă că aceasta este clară și inclusă complet în cadru","MathWeb_ViewSteps":"Vizualizarea pașilor de soluție","Quiz_Try_Label":"Încercați un test","MathAnswerView_Concepts":"Concepte asociate","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Foi de lucru din căutarea web","MathAnswerView_Worksheets_Short":"Foi de lucru","MathAnswerView_RelatedPages":"Probleme similare din căutarea web","Results_Items":"Elemente","Generic_Share":"Partajați","Generic_Copy":"Copiați","Share_CopiedToClipboard":"Copiat în clipboard","Accessibility_MathAnswerView_PoweredByBing":"Pe platformă Bing","MathAnswerView_PoweredByBing":"Pe platformă","MathAnswerView_EquationIsFalse":"Fals","MathAnswerView_EquationIsTrue":"Adevărat","Feedback_Thanks":"Vă mulțumim!","Feedback_Title":"Au fost utile aceste rezultate?","MathAnswerView_DesktopUpsell_SectionHeader":"Versiune desktop disponibilă","SketchInput_ClearLabel":"Goliți schița","SketchInput_Clear":"CLR","SketchInput_PenLabel":"Utilizați stiloul","SketchInput_EraserLabel":"Utilizați radiera","SketchInput_UndoLabel":"Anulați ultima trăsătură","SketchInput_Info":"Desenați o problemă mai jos","SketchInput_SubmitLabel":"Trimiteți expresia","Teams_Solve_Waiting":"Rezolvarea acestei expresii...","Teams_RelatedTo":"Corelat cu","MathWeb_PageTopicRootTitle":"Explorați ramurile matematicii","MathWeb_PageTopicDescriptionFormat":"Aflați mai multe despre {0} utilizând programul nostru gratuit de rezolvare a problemelor de matematică cu soluții pas cu pas."},"nl":{"Generic_Back":"Terug","MathWeb_GenericDownload":"Downloaden","MathWeb_PageTopicRootDescription":"De Microsoft Wiskundehulp-app biedt stapsgewijze hulp bij diverse problemen met rekenkunde, algebra, trigonometrie, calculus, statistiek en andere onderwerpen met behulp van een geavanceerd op AI gebaseerd wiskundehulpprogramma.","MathWeb_Download_MobileHeading":"Stapsgewijze oplossingen op uw vingertoppen","MathWeb_Download_IOS":"Downloaden voor iOS","MathWeb_Download_Android":"Downloaden voor Android","MathWeb_Download_InstalledMessage":"App al geïnstalleerd","MathWeb_Download_Button":"Bureaublad-app downloaden","MathWeb_Download_Unavailable":"Bureaublad-app niet beschikbaar","MathWeb_Download_MacMessage":"Momenteel is de Math Solver-desktop-app alleen beschikbaar via Chrome op MacOSX. Open deze pagina in Chrome om de app te installeren.","MathWeb_Download_UnknownMessage":"Momenteel is het Math Solver-bureaublad alleen beschikbaar via Microsoft Edge en Chrome. Open deze pagina in een compatibele browser.","EDU_PROB_CATEGORY_LIN_EQ":"Lineaire vergelijking","EDU_PROB_CATEGORY_QUAD_EQ":"Vierkantsvergelijking","EDU_PROB_CATEGORY_ARITHMETIC":"Rekenen","EDU_PROB_CATEGORY_TRIG":"Trigonometrie","EDU_PROB_CATEGORY_MATRIX":"Matrix","EDU_PROB_CATEGORY_SIM_EQ":"Stelselvergelijking","EDU_PROB_CATEGORY_DIFF":"Differentiëren","EDU_PROB_CATEGORY_INTEGRATION":"Integreren","EDU_PROB_CATEGORY_LIMITS":"Limieten","EDU_PROB_CATEGORY_COMPLEX":"Complexe getallen","EDU_PROB_CATEGORY_LIST":"Rij","NotebookTab_Example":"Voorbeelden","MathWeb_GenericSolve":"Oplossen","MathResult_Graph_ReCenter":"Centreren","MathWeb_Keyboard_Algebra":"Algebra","MathWeb_Keyboard_Calculus":"Calculus","MathWeb_Keyboard_List":"Lijst","MathWeb_Keyboard_Matrices":"Matrices","MathWeb_Keyboard_Numbers":"Getallen","MathWeb_Keyboard_Operators":"Exploitanten","MathWeb_Keyboard_Statistics":"Statistieken","MathWeb_Keyboard_Trig":"Trigonometriefuncties","MathWeb_Keyboard_Variables":"Variabelen","KeyboardInput_Solve":"Oplossen","KeyboardInput_PlaceholderText":"Typ een wiskundig probleem","MathWeb_Section_Steps_Title":"Krijg een stapsgewijze uitleg","MathWeb_Section_Steps_Subtitle":"Bekijk hoe problemen worden opgelost en laat uw werk zien. Krijg ook nog eens definities van wiskundige concepten.","MathWeb_Section_Graph_Title":"Maak grafieken van uw wiskundige problemen","MathWeb_Section_Graph_Subtitle":"Maak direct een grafiek van elke vergelijking om uw functie te visualiseren en het verband tussen variabelen te begrijpen","MathWeb_Section_Practice_Title":"Oefenen, oefenen, oefenen","MathWeb_Section_Practice_Subtitle":"Zoek naar aanvullend leermateriaal, zoals gerelateerde werkbladen en instructievideo\'s","MathWeb_Section_Language_Title":"Krijg wiskundehulp in uw taal","MathWeb_Section_Language_Subtitle":"Werkt in het Spaans, Hindi, Duits, en meer","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Wiskundehulp proberen","MathAnswerView_Videos":"Video\'s","MathWeb_Section_Video_Subtitle":"Kijk uit voor nieuwe functies, tips en meer!","MathWeb_Title":"Krijg stapsgewijze oplossingen voor uw wiskundige problemen","Results_Less":"Minder {0}","Results_More":"Meer {0}","MathPracticeProblem_SectionHeader":"Oefenen","MathWeb_PopularProblems":"Populaire problemen","MathWeb_SolveProblemTitleFormat":"Los {0} op | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Los uw wiskundeproblemen op met onze gratis wiskundehulp met stapsgewijze oplossingen. Onze wiskundehulp ondersteunt eenvoudige wiskunde, pre-algebra, algebra, trigonometrie, calculus en nog veel meer.","Generic_About":"Over","MathWeb_Topics":"Onderwerpen","Generic_PrivacyPolicy":"Privacybeleid","Generic_TermOfUse":"Servicevoorwaarden","Settings_Language":"Taal","MathWeb_BackToTop":"Terug naar boven","MathWeb_SimilarProblems":"Soortgelijke problemen","MathWeb_Topic_PreAlgebra":"Pre-algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Volgorde van bewerkingen","MathWeb_Topic_PrimeFactorization":"Prime Factorization","MathWeb_Topic_Fractions":"Breuken","MathWeb_Topic_LCM":"Minst voorkomende veelvoud","MathWeb_Topic_GCF":"Grootste gemeenschappelijke factor","MathWeb_Topic_Mean":"Bedoel","MathWeb_Topic_Mode":"Modus","MathWeb_Topic_Exponents":"Exponenten","MathWeb_Topic_Radicals":"Radicalen","MathWeb_Topic_MixedFractions":"Gemengde fracties","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Like-termen combineren","MathWeb_Topic_SolveForVariable":"Oplossen voor een variabele","MathWeb_Topic_LinearEquations":"Lineaire vergelijkingen","MathWeb_Topic_QuadraticEquations":"Kwadratische vergelijkingen","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Ongelijkheden","MathWeb_Topic_SystemsOfEquations":"Systemen van vergelijkingen","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Uitbreiden","MathWeb_Topic_EvaluteFractions":"Fracties evalueren","MathWeb_Topic_Trigonometry":"Trigonometriefuncties","MathWeb_Topic_Simplify":"Vereenvoudigen","MathWeb_Topic_Evaluate":"Evalueren","MathWeb_Topic_Graphs":"Grafieken","MathWeb_Topic_SolveEquations":"Vergelijkingen oplossen","MathWeb_Topic_Calculus":"Calculus","MathWeb_Topic_Derivatives":"Derivaten","MathWeb_Topic_Integrals":"Integralen","MathWeb_Topic_Limits":"Grenzen","MathWeb_CalculatorTitle":"{0} | Microsoft Wiskundehulp","MathWeb_AlgebraCalculator":"Algebracalculator","MathWeb_TrigCalculator":"Trigonometrische calculator","MathWeb_CalculusCalculator":"Calculuscalculator","MathWeb_MatrixCalculator":"Matrixcalculator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Bezig met genereren van een quiz...","Quiz_Error_Header":"We konden helaas geen quiz genereren op basis van dit soort opgave. Probeer een ander soort opgave.","Quiz_Notebook_ProblemCount_Template":"{0} opgaven vergelijkbaar met:","NoResults_MathSolveError":"Er is iets misgegaan. Probeer het opnieuw.","Quiz_Completion_Date":"Voltooid op {0}","Quiz_Result_Correct":"Juist","Quiz_Total_Score_Template":"U hebt {0} van de {1} vragen juist beantwoord.","Quiz_Complete_Header":"Quiz voltooid","Quiz_End_Finish":"Voltooien","KeyboardInput_Undo":"Ongedaan maken","MathWeb_DeleteAll":"Alle verwijderen","MathWeb_MyQuizzes":"Mijn quizzen","MathWeb_QuizNotFound":"Quiz niet gevonden","Quiz_NextProblem":"Volgende opgave","Quiz_CheckProblem":"Controleren","Quiz_Answer_Prompt":"Selecteer het juiste antwoord:","Quiz_HintButton":"Help mij","MathWeb_NewQuiz":"Nieuwe quiz","Quiz_StartScreen_Question_Count_Template":"{0} meerkeuzevragen","Quiz_StartScreen_Header":"Klaar voor een quiz?","Quiz_StartScreen_Time_Template":"{0} minuten om te voltooien","Quiz_Start":"Starten","Quiz_Result_Incorrect":"Fout","Quiz_Result_Your_Answer":"Uw antwoord:","Quiz_Result_See_Solution":"Oplossing bekijken","Quiz_Entity":"Quiz","MathWeb_InProgress":"In uitvoering","MathWeb_ConfirmQuizDelete":"Weet je zeker dat je alle quizzen wilt verwijderen?","Generic_Edit":"Bewerken","Generic_Close":"Sluiten","MathResult_GraphHeader":"Grafiek","Teams_ViewInteractiveGraph":"Interactieve grafiek bekijken","Network_Offline_Message":"U bent niet verbonden. Controleer uw netwerk.","NoResults_MathEquation":"Deze vergelijking ontdekt:","NoResults_MathError":"We kunnen dit type vergelijking niet oplossen of deze bevat mogelijk een fout","NoResults_NoMath":"Sorry, we zien geen vergelijking. Zorg ervoor dat deze duidelijk is en volledig in het kader is geplaatst","MathWeb_ViewSteps":"Oplossingsstappen weergeven","Quiz_Try_Label":"Een quiz proberen","MathAnswerView_Concepts":"Gerelateerde concepten","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Werkbladen van Web Search","MathAnswerView_Worksheets_Short":"Werkbladen","MathAnswerView_RelatedPages":"Vergelijkbare problemen van Web Search","Results_Items":"Items","Generic_Share":"Delen","Generic_Copy":"Kopiëren","Share_CopiedToClipboard":"Gekopieerd naar klembord","Accessibility_MathAnswerView_PoweredByBing":"Aangeboden door Bing","MathAnswerView_PoweredByBing":"Aangeboden door","MathAnswerView_EquationIsFalse":"Onjuist","MathAnswerView_EquationIsTrue":"Juist","Feedback_Thanks":"Bedankt!","Feedback_Title":"Waren deze resultaten nuttig?","MathAnswerView_DesktopUpsell_SectionHeader":"Desktopversie beschikbaar","SketchInput_ClearLabel":"Tekening wissen","SketchInput_Clear":"WIS","SketchInput_PenLabel":"Pen gebruiken","SketchInput_EraserLabel":"Gum gebruiken","SketchInput_UndoLabel":"Laatste streek ongedaan maken","SketchInput_Info":"Teken hieronder een probleem","SketchInput_SubmitLabel":"Uitdrukking indienen","Teams_Solve_Waiting":"Het oplossen van deze uitdrukking...","Teams_RelatedTo":"Gerelateerd aan","MathWeb_PageTopicRootTitle":"Wiskundige onderwerpen verkennen","MathWeb_PageTopicDescriptionFormat":"Leer meer over {0} met onze gratis wiskundehulp met stapsgewijze oplossingen."},"ko":{"Generic_Back":"뒤로","MathWeb_GenericDownload":"다운로드","MathWeb_PageTopicRootDescription":"Microsoft Math Solver 앱은 고급 AI 기반의 수학 문제 풀이기를 사용하여 산술, 대수, 삼각법, 미적분, 통계, 기타 주제 등 다양한 문제의 단계별 풀이를 제공합니다.","MathWeb_Download_MobileHeading":"손가락 끝으로 단계별 솔루션","MathWeb_Download_IOS":"iOS용 다운로드","MathWeb_Download_Android":"안드로이드에 대한 다운로드","MathWeb_Download_InstalledMessage":"앱이 이미 설치되었습니다.","MathWeb_Download_Button":"데스크톱 앱 다운로드","MathWeb_Download_Unavailable":"데스크톱 앱을 사용할 수 없음","MathWeb_Download_MacMessage":"현재, 수학 솔버 데스크톱 응용 프로그램은 맥OSX에 크롬을 통해 사용할 수 있습니다. 앱을 설치하려면 Chrome에서 이 페이지를 열십시오.","MathWeb_Download_UnknownMessage":"현재, 수학 솔버 바탕 화면은 마이크로 소프트 에지와 크롬을 통해 사용할 수 있습니다. 호환되는 브라우저에서 이 페이지를 열십시오.","EDU_PROB_CATEGORY_LIN_EQ":"일차방정식","EDU_PROB_CATEGORY_QUAD_EQ":"이차방정식","EDU_PROB_CATEGORY_ARITHMETIC":"산수","EDU_PROB_CATEGORY_TRIG":"삼각법","EDU_PROB_CATEGORY_MATRIX":"행렬","EDU_PROB_CATEGORY_SIM_EQ":"연립방정식","EDU_PROB_CATEGORY_DIFF":"미분","EDU_PROB_CATEGORY_INTEGRATION":"적분","EDU_PROB_CATEGORY_LIMITS":"극한","EDU_PROB_CATEGORY_COMPLEX":"복소수","EDU_PROB_CATEGORY_LIST":"목록","NotebookTab_Example":"예제","MathWeb_GenericSolve":"풀이","MathResult_Graph_ReCenter":"중앙으로","MathWeb_Keyboard_Algebra":"대수학","MathWeb_Keyboard_Calculus":"미적분","MathWeb_Keyboard_List":"목록","MathWeb_Keyboard_Matrices":"행렬","MathWeb_Keyboard_Numbers":"숫자","MathWeb_Keyboard_Operators":"연산자","MathWeb_Keyboard_Statistics":"통계","MathWeb_Keyboard_Trig":"삼각","MathWeb_Keyboard_Variables":"변수","KeyboardInput_Solve":"풀이","KeyboardInput_PlaceholderText":"수학 문제를 입력하세요.","MathWeb_Section_Steps_Title":"단계별 설명을 확인합니다.","MathWeb_Section_Steps_Subtitle":"문제 풀이법을 확인하고 본인의 답을 표시합니다. 수학적 개념의 정의도 확인할 수 있습니다.","MathWeb_Section_Graph_Title":"수학 문제를 그래프로 작성합니다.","MathWeb_Section_Graph_Subtitle":"모든 수식을 즉시 그래프로 작성하여 함수를 시각화하고 변수 간의 관계를 이해합니다.","MathWeb_Section_Practice_Title":"연습 또 연습","MathWeb_Section_Practice_Subtitle":"관련 연습 문제지, 학습 동영상 등 기타 학습 자료를 검색합니다.","MathWeb_Section_Language_Title":"사용자 언어로 수학 관련 도움 받기","MathWeb_Section_Language_Subtitle":"스페인어, 힌디어, 독일어 등으로 사용 가능","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Math Solver를 사용해 보세요.","MathAnswerView_Videos":"동영상","MathWeb_Section_Video_Subtitle":"새로운 기능, 팁 등을 조심하세요!","MathWeb_Title":"수학 문제의 단계별 풀이를 확인하세요.","Results_Less":"{0} 간략히 보기","Results_More":"{0} 더 보기","MathPracticeProblem_SectionHeader":"연습","MathWeb_PopularProblems":"인기 있는 문제","MathWeb_SolveProblemTitleFormat":"다음을 풀어보세요: {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"단계별 풀이를 제공하는 무료 수학 문제 풀이기를 사용하여 수학 문제를 풀어보세요. 이 수학 문제 풀이기는 기초 수학, 기초 대수, 대수, 삼각법, 미적분 등을 지원합니다.","Generic_About":"에 대 한","MathWeb_Topics":"항목","Generic_PrivacyPolicy":"개인정보 처리방침","Generic_TermOfUse":"서비스 약관","Settings_Language":"언어","MathWeb_BackToTop":"맨 위로","MathWeb_SimilarProblems":"비슷한 문제","MathWeb_Topic_PreAlgebra":"대수 전","MathWeb_Topic_PreAlgebra2":"대수 전 2","MathWeb_Topic_OrderOfOperations":"작업 순서","MathWeb_Topic_PrimeFactorization":"프라임 분해","MathWeb_Topic_Fractions":"분수","MathWeb_Topic_LCM":"최소 공통 배수","MathWeb_Topic_GCF":"가장 큰 공통 요소","MathWeb_Topic_Mean":"의미","MathWeb_Topic_Mode":"모드","MathWeb_Topic_Exponents":"해설자","MathWeb_Topic_Radicals":"래 디 칼","MathWeb_Topic_MixedFractions":"혼합 분수","MathWeb_Topic_Algebra":"대수학","MathWeb_Topic_Algebra2":"대수 2","MathWeb_Topic_CombineLikeTerms":"좋아요를 결합","MathWeb_Topic_SolveForVariable":"변수에 대한 해결","MathWeb_Topic_LinearEquations":"선형 방정식","MathWeb_Topic_QuadraticEquations":"이차 방정식","MathWeb_Topic_Matrices":"행렬","MathWeb_Topic_Inequalities":"불평등","MathWeb_Topic_SystemsOfEquations":"방정식 시스템","MathWeb_Topic_Factor":"요소","MathWeb_Topic_Expand":"확장","MathWeb_Topic_EvaluteFractions":"분수 평가","MathWeb_Topic_Trigonometry":"삼각","MathWeb_Topic_Simplify":"단순화","MathWeb_Topic_Evaluate":"평가","MathWeb_Topic_Graphs":"그래프","MathWeb_Topic_SolveEquations":"방정식 해석","MathWeb_Topic_Calculus":"미적분","MathWeb_Topic_Derivatives":"파생 상품","MathWeb_Topic_Integrals":"전체","MathWeb_Topic_Limits":"제한","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"대수 계산기","MathWeb_TrigCalculator":"삼각법 계산기","MathWeb_CalculusCalculator":"미적분 계산기","MathWeb_MatrixCalculator":"매트릭스 계산기","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"퀴즈 생성 중...","Quiz_Error_Header":"죄송합니다. 해당 유형의 퀴즈를 생성할 수 없습니다. 다른 문제 유형을 시도해 보세요.","Quiz_Notebook_ProblemCount_Template":"다음과 비슷한 문제 {0}개:","NoResults_MathSolveError":"오류가 발생했습니다. 다시 시도하세요.","Quiz_Completion_Date":"{0} 완료","Quiz_Result_Correct":"정답","Quiz_Total_Score_Template":"{1}문제 중 {0}문제의 정답을 맞혔습니다.","Quiz_Complete_Header":"퀴즈 완료","Quiz_End_Finish":"종료","KeyboardInput_Undo":"실행 취소","MathWeb_DeleteAll":"모두 삭제","MathWeb_MyQuizzes":"내 퀴즈","MathWeb_QuizNotFound":"퀴즈를 찾을 수 없습니다.","Quiz_NextProblem":"다음 문제","Quiz_CheckProblem":"확인","Quiz_Answer_Prompt":"Select the answer to the problem:","Quiz_HintButton":"도움말","MathWeb_NewQuiz":"새로운 퀴즈","Quiz_StartScreen_Question_Count_Template":"선다형 문제 {0}개","Quiz_StartScreen_Header":"퀴즈를 푸시겠습니까?","Quiz_StartScreen_Time_Template":"제한 시간 {0}분","Quiz_Start":"시작","Quiz_Result_Incorrect":"오답","Quiz_Result_Your_Answer":"사용자의 답:","Quiz_Result_See_Solution":"풀이 보기","Quiz_Entity":"퀴즈","MathWeb_InProgress":"진행 중","MathWeb_ConfirmQuizDelete":"모든 퀴즈를 삭제하시겠습니까?","Generic_Edit":"편집","Generic_Close":"닫기","MathResult_GraphHeader":"그래프","Teams_ViewInteractiveGraph":"대화형 그래프 보기","Network_Offline_Message":"오프라인 상태입니다. 네트워크 상태를 확인하세요.","NoResults_MathEquation":"다음 수식이 인식되었습니다:","NoResults_MathError":"해당 유형의 수식을 풀 수 없거나 수식에 오류가 포함되어 있습니다.","NoResults_NoMath":"죄송합니다. 수식을 인식할 수 없습니다. 프레임 안에 전체 수식이 확실히 들어가도록 조정하세요.","MathWeb_ViewSteps":"솔루션 단계 보기","Quiz_Try_Label":"퀴즈 풀기","MathAnswerView_Concepts":"관련 개념","Generic_PDF":"PDF","MathAnswerView_Worksheets":"연습 문제지의 웹 검색 결과","MathAnswerView_Worksheets_Short":"연습 문제지","MathAnswerView_RelatedPages":"비슷한 문제의 웹 검색 결과","Results_Items":"항목","Generic_Share":"공유","Generic_Copy":"복사","Share_CopiedToClipboard":"클립보드에 복사됨","Accessibility_MathAnswerView_PoweredByBing":"제공: Bing","MathAnswerView_PoweredByBing":"제공:","MathAnswerView_EquationIsFalse":"거짓","MathAnswerView_EquationIsTrue":"참","Feedback_Thanks":"감사합니다!","Feedback_Title":"유용한 결과였습니까?","MathAnswerView_DesktopUpsell_SectionHeader":"사용 가능한 데스크톱 버전","SketchInput_ClearLabel":"스케치 지우기","SketchInput_Clear":"CLR","SketchInput_PenLabel":"펜 사용","SketchInput_EraserLabel":"지우개 사용","SketchInput_UndoLabel":"마지막 획 실행 취소","SketchInput_Info":"아래에 문제를 직접 쓰세요.","SketchInput_SubmitLabel":"수식 제출","Teams_Solve_Waiting":"이 표현식 해결...","Teams_RelatedTo":"관련","MathWeb_PageTopicRootTitle":"수학 주제를 탐색하세요.","MathWeb_PageTopicDescriptionFormat":"무료 수학 문제 풀이기를 사용하여 단계별 풀이와 함께 {0}에 관해 학습해 보세요."},"hu":{"Generic_Back":"Vissza","MathWeb_GenericDownload":"Letöltés","MathWeb_PageTopicRootDescription":"A Microsoft Math Solver alkalmazása egy korszerű AI alapú rendszerre támaszkodva lépésről lépésre segít különböző problémák megoldásában - számtan, algebra, trigonometria, differenciálszámítás, statisztika és más témák.","MathWeb_Download_MobileHeading":"Lépésről lépésre megoldások az ujjhegyeknél","MathWeb_Download_IOS":"Letöltés iOS-re","MathWeb_Download_Android":"Letöltés Androidra","MathWeb_Download_InstalledMessage":"Az alkalmazás már telepítve van","MathWeb_Download_Button":"Asztali alkalmazás letöltése","MathWeb_Download_Unavailable":"Az asztali alkalmazás nem érhető el","MathWeb_Download_MacMessage":"Jelenleg a Math Solver asztali alkalmazás csak a Chrome-on keresztül érhető el a MacOSX rendszeren. Az alkalmazás telepítéséhez nyissa meg ezt az oldalt a Chrome-ban.","MathWeb_Download_UnknownMessage":"Jelenleg a Math Solver asztal csak a Microsoft Edge és a Chrome segítségével érhető el. Nyissa meg ezt a lapot egy kompatibilis böngészőben.","EDU_PROB_CATEGORY_LIN_EQ":"Lineáris egyenlet","EDU_PROB_CATEGORY_QUAD_EQ":"Másodfokú egyenlet","EDU_PROB_CATEGORY_ARITHMETIC":"Számtan","EDU_PROB_CATEGORY_TRIG":"Trigonometria","EDU_PROB_CATEGORY_MATRIX":"Mátrix","EDU_PROB_CATEGORY_SIM_EQ":"Egyenletrendszer","EDU_PROB_CATEGORY_DIFF":"Differenciálszámítás","EDU_PROB_CATEGORY_INTEGRATION":"Integrálás","EDU_PROB_CATEGORY_LIMITS":"Határértékek","EDU_PROB_CATEGORY_COMPLEX":"Komplex számok","EDU_PROB_CATEGORY_LIST":"Lista","NotebookTab_Example":"Példák","MathWeb_GenericSolve":"Megoldás","MathResult_Graph_ReCenter":"Középre állítás újra","MathWeb_Keyboard_Algebra":"Algebra","MathWeb_Keyboard_Calculus":"Kalkulus","MathWeb_Keyboard_List":"Lista","MathWeb_Keyboard_Matrices":"Mátrixok","MathWeb_Keyboard_Numbers":"Számok","MathWeb_Keyboard_Operators":"Piaci szereplők","MathWeb_Keyboard_Statistics":"Statisztikák","MathWeb_Keyboard_Trig":"Trigonometria","MathWeb_Keyboard_Variables":"Változók","KeyboardInput_Solve":"Megoldás","KeyboardInput_PlaceholderText":"Írjon be egy matematikai feladatot","MathWeb_Section_Steps_Title":"Részletes magyarázatokat tekinthet meg","MathWeb_Section_Steps_Subtitle":"Megtekintheti a feladok megoldását és bemutathatja a munkáját, valamint megismerheti a matematikai fogalmak definícióit","MathWeb_Section_Graph_Title":"Grafikonon ábrázolhatja a matematikai feladatokat","MathWeb_Section_Graph_Subtitle":"Azonnal grafikonon ábrázolhat bármilyen egyenletet, hogy vizuálisan megjelenítse a függvényt, és megértse a változók közötti kapcsolatot.","MathWeb_Section_Practice_Title":"Gyakorolni, gyakorolni, gyakorolni","MathWeb_Section_Practice_Subtitle":"További oktatóanyagokat, például kapcsolódó feladatlapokat és oktatóvideókat kereshet","MathWeb_Section_Language_Title":"Matematikai segítség az anyanyelvén","MathWeb_Section_Language_Subtitle":"Hindi, német, spanyol és további nyelveken is működik","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Próbálja ki a Math Solver alkalmazást","MathAnswerView_Videos":"Videók","MathWeb_Section_Video_Subtitle":"Nézd meg az új funkciók, tippek és így tovább!","MathWeb_Title":"A Microsoft Math gyors segítség a matekban","Results_Less":"Kevesebb {0}","Results_More":"Több {0}","MathPracticeProblem_SectionHeader":"Gyakorlás","MathWeb_PopularProblems":"Népszerű problémák","MathWeb_SolveProblemTitleFormat":"{0} megoldása | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Oldja meg matematikai problémáit ingyenes Math Solver alkalmazásunkkal, amely részletes megoldást is ad, lépésről lépésre. A Math Solver támogatja az alapszintű matematika, algebra, trigonometria, számtan és más feladatokat.","Generic_About":"Körülbelül","MathWeb_Topics":"Témák","Generic_PrivacyPolicy":"Adatvédelmi szabályzat","Generic_TermOfUse":"Szolgáltatási feltételek","Settings_Language":"Nyelv","MathWeb_BackToTop":"Vissza a lap tetejére","MathWeb_SimilarProblems":"Hasonló problémák","MathWeb_Topic_PreAlgebra":"Algebra előtti","MathWeb_Topic_PreAlgebra2":"Algebra előtti 2","MathWeb_Topic_OrderOfOperations":"A műveletek sorrendje","MathWeb_Topic_PrimeFactorization":"Elsődleges faktorizáció","MathWeb_Topic_Fractions":"Frakciók","MathWeb_Topic_LCM":"Legkevésbé gyakori többszörös","MathWeb_Topic_GCF":"Legnagyobb közös tényező","MathWeb_Topic_Mean":"Jelent","MathWeb_Topic_Mode":"Mód","MathWeb_Topic_Exponents":"Kitevők","MathWeb_Topic_Radicals":"Gyökök","MathWeb_Topic_MixedFractions":"Vegyes frakciók","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra, 2.","MathWeb_Topic_CombineLikeTerms":"Kedvelési kifejezések kombinálása","MathWeb_Topic_SolveForVariable":"Megoldás változóhoz","MathWeb_Topic_LinearEquations":"Lineáris egyenletek","MathWeb_Topic_QuadraticEquations":"Másodfokú egyenletek","MathWeb_Topic_Matrices":"Mátrixok","MathWeb_Topic_Inequalities":"Egyenlőtlenségek","MathWeb_Topic_SystemsOfEquations":"Egyenletrendszerek","MathWeb_Topic_Factor":"Tényező","MathWeb_Topic_Expand":"Bontsa ki","MathWeb_Topic_EvaluteFractions":"Törtek kiértékelése","MathWeb_Topic_Trigonometry":"Trigonometria","MathWeb_Topic_Simplify":"Egyszerűsítése","MathWeb_Topic_Evaluate":"Értékelje","MathWeb_Topic_Graphs":"Grafikonok","MathWeb_Topic_SolveEquations":"Egyenletek megoldása","MathWeb_Topic_Calculus":"Kalkulus","MathWeb_Topic_Derivatives":"Származékok","MathWeb_Topic_Integrals":"Integrálok","MathWeb_Topic_Limits":"Határok","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Algebra számológép","MathWeb_TrigCalculator":"Trigonometriai kalkulátor","MathWeb_CalculusCalculator":"Számológép","MathWeb_MatrixCalculator":"Mátrix kalkulátor","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Teszt generálása folyamatban...","Quiz_Error_Header":"Sajnos az adott problématípus alapján nem tudtunk tesztet generálni. Próbálkozzon egy másik problématípussal.","Quiz_Notebook_ProblemCount_Template":"{0} ehhez hasonló probléma:","NoResults_MathSolveError":"Hiba történt, próbálkozzon újra","Quiz_Completion_Date":"Befejezés ideje: {0}","Quiz_Result_Correct":"Helyes","Quiz_Total_Score_Template":"{0} kérdésre válaszolt helyesen {1} kérdésből.","Quiz_Complete_Header":"Teszt befejezve","Quiz_End_Finish":"Befejezés","KeyboardInput_Undo":"Visszavonás","MathWeb_DeleteAll":"Az összes törlése","MathWeb_MyQuizzes":"Saját vetélkedők","MathWeb_QuizNotFound":"A kvíz nem található","Quiz_NextProblem":"Következő probléma","Quiz_CheckProblem":"Ellenőrzés","Quiz_Answer_Prompt":"Válassza ki a probléma megoldását:","Quiz_HintButton":"Segítséget kérek","MathWeb_NewQuiz":"Új kvíz","Quiz_StartScreen_Question_Count_Template":"{0} feleletválasztásos kérdés","Quiz_StartScreen_Header":"Indulhat a teszt?","Quiz_StartScreen_Time_Template":"Kitöltés ideje {0} perc","Quiz_Start":"Indítás","Quiz_Result_Incorrect":"Hibás","Quiz_Result_Your_Answer":"Ezt válaszolta:","Quiz_Result_See_Solution":"Mutassa a megoldást","Quiz_Entity":"Teszt","MathWeb_InProgress":"Folyamatban","MathWeb_ConfirmQuizDelete":"Biztosan törli az összes kvízt?","Generic_Edit":"Szerkesztés","Generic_Close":"Bezárás","MathResult_GraphHeader":"Grafikon","Teams_ViewInteractiveGraph":"Interaktív grafikon megtekintése","Network_Offline_Message":"Nincs internetkapcsolata. Ellenőrizze a hálózatát.","NoResults_MathEquation":"A következő egyenletet észleltük:","NoResults_MathError":"Ezt a fajta egyenletet nem tudjuk megoldani, vagy az egyenlet hibás","NoResults_NoMath":"Sajnáljuk, de nem találunk egyenletet. Győződjön meg arról, hogy az egyenlet tisztán látható, és az egész rajta van a képen","MathWeb_ViewSteps":"Megoldáslépéseinek megtekintése","Quiz_Try_Label":"Próbáljon ki egy tesztet","MathAnswerView_Concepts":"Kapcsolódó fogalmak","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Feladatlapok a webes keresésből","MathAnswerView_Worksheets_Short":"Feladatlapok","MathAnswerView_RelatedPages":"Hasonló feladatok a webes keresésből","Results_Items":"elem","Generic_Share":"Megosztás","Generic_Copy":"Másolás","Share_CopiedToClipboard":"Átmásolva a vágólapra","Accessibility_MathAnswerView_PoweredByBing":"Szolgáltató: Bing","MathAnswerView_PoweredByBing":"Szolgáltató:","MathAnswerView_EquationIsFalse":"Hamis","MathAnswerView_EquationIsTrue":"Igaz","Feedback_Thanks":"Köszönjük!","Feedback_Title":"Hasznosak voltak ezek az eredmények?","MathAnswerView_DesktopUpsell_SectionHeader":"Tekintse meg ezt a problémát az interneten","SketchInput_ClearLabel":"Rajz törlése","SketchInput_Clear":"TÖRLÉS","SketchInput_PenLabel":"Toll használata","SketchInput_EraserLabel":"Radír használata","SketchInput_UndoLabel":"Utolsó vonás visszavonása","SketchInput_Info":"Írjon be kézzel egy feladatot alább","SketchInput_SubmitLabel":"Kifejezés elküldése","Teams_Solve_Waiting":"Ennek a kifejezésnek a megoldása...","Teams_RelatedTo":"Kapcsolódó","MathWeb_PageTopicRootTitle":"Matematikai témák felfedezése","MathWeb_PageTopicDescriptionFormat":"Tanuljon a(z) {0} fogalmáról ingyenes Math Solver alkalmazásunkkal, amely lépésről lépésre levezeti a megoldást."},"he":{"Generic_Back":"הקודם","MathWeb_GenericDownload":"הוריד","MathWeb_PageTopicRootDescription":"אפליקציית Microsoft Math Solver מספקת עזרה שלב-אחר-שלב במגוון של בעיות, כולל אריתמטיקה, אלגברה, טריגונומטריה, חשבון, סטטיסטיקה ונושאים אחרים בעזרת כלי בינה מלאכותית מתקדם לפתרונות מתמטיים.","MathWeb_Download_MobileHeading":"פתרונות צעד-אחר-צעד בקצות אצבעותיך","MathWeb_Download_IOS":"הורד עבור iOS","MathWeb_Download_Android":"הורד לאנדרואיד","MathWeb_Download_InstalledMessage":"היישום כבר מותקן","MathWeb_Download_Button":"הורד יישום שולחן העבודה","MathWeb_Download_Unavailable":"יישום שולחן העבודה אינו זמין","MathWeb_Download_MacMessage":"כיום, יישום שולחן העבודה של מתמטיקה Solver זמין רק דרך Chrome על MacOSX. נא לפתוח דף זה ב Chrome כדי להתקין את האפליקציה.","MathWeb_Download_UnknownMessage":"כיום, שולחן העבודה של מתמטיקה Solver זמין רק באמצעות Microsoft Edge ו-Chrome. נא פתח דף זה בדפדפן תואם.","EDU_PROB_CATEGORY_LIN_EQ":"משוואה לינארית","EDU_PROB_CATEGORY_QUAD_EQ":"משוואה ממעלה שנייה","EDU_PROB_CATEGORY_ARITHMETIC":"אריתמטיקה","EDU_PROB_CATEGORY_TRIG":"טריגונומטריה","EDU_PROB_CATEGORY_MATRIX":"מטריצה","EDU_PROB_CATEGORY_SIM_EQ":"משוואה בו-זמנית","EDU_PROB_CATEGORY_DIFF":"גזירה","EDU_PROB_CATEGORY_INTEGRATION":"אינטגרציה","EDU_PROB_CATEGORY_LIMITS":"גבולות","EDU_PROB_CATEGORY_COMPLEX":"מספרים מרוכבים","EDU_PROB_CATEGORY_LIST":"רשימה","NotebookTab_Example":"דוגמאות","MathWeb_GenericSolve":"פתור","MathResult_Graph_ReCenter":"מרכז-מחדש","MathWeb_Keyboard_Algebra":"אלגברה","MathWeb_Keyboard_Calculus":"תחשיב","MathWeb_Keyboard_List":"רשימה","MathWeb_Keyboard_Matrices":"טריצות","MathWeb_Keyboard_Numbers":"מספרים","MathWeb_Keyboard_Operators":"אופרטורים","MathWeb_Keyboard_Statistics":"סטטיסטיקה","MathWeb_Keyboard_Trig":"טריגונומטריה","MathWeb_Keyboard_Variables":"משתנים","KeyboardInput_Solve":"פתור","KeyboardInput_PlaceholderText":"הקלד בעיה מתמטית","MathWeb_Section_Steps_Title":"קבל הסברים שלב-אחר-שלב","MathWeb_Section_Steps_Subtitle":"ראה כיצד לפתור בעיות והצג את העבודה שלך - וכן קבל הגדרות למושגים מתמטיים","MathWeb_Section_Graph_Title":"הצג גרף של הבעיות המתמטיות","MathWeb_Section_Graph_Subtitle":"צור מידית גרף של כל משוואה כדי להציג את הפונקציה ולהבין את הקשרים בין המשתנים","MathWeb_Section_Practice_Title":"תרגל, תרגל, תרגל","MathWeb_Section_Practice_Subtitle":"חפש חומרי לימוד נוספים, כגון דפי עבודה וערכות לימוד בווידאו בנושא","MathWeb_Section_Language_Title":"קבל סיוע במתמטיקה בשפה שלך","MathWeb_Section_Language_Subtitle":"עובד בספרדית, הינדי, גרמנית ועוד","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"נסה את Math Solver","MathAnswerView_Videos":"סרטונים","MathWeb_Section_Video_Subtitle":"צפה תכונות חדשות, טיפים ועוד!","MathWeb_Title":"קבל פתרונות שלב-אחר-שלב לבעיות מתמטיות","Results_Less":"פחות {0}","Results_More":"עוד {0}","MathPracticeProblem_SectionHeader":"תרגול","MathWeb_PopularProblems":"בעיות פופולריות","MathWeb_SolveProblemTitleFormat":"פתור את {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"פתור בעיות מתמטיות באמצעות כלי פתרון בעיות חופשי עם פתרונות שלב-אחר-שלב. כלי פתרון הבעיות שלנו תומך במתמטיקה בסיסית, טרום-אלגברה, אלגברה, טריגונומטריה, חשבון ועוד.","Generic_About":"על","MathWeb_Topics":"נושאים","Generic_PrivacyPolicy":"מדיניות פרטיות","Generic_TermOfUse":"תנאי שירות","Settings_Language":"שפה","MathWeb_BackToTop":"חזרה למעלה","MathWeb_SimilarProblems":"בעיות דומות","MathWeb_Topic_PreAlgebra":"טרום אלגברה","MathWeb_Topic_PreAlgebra2":"טרום אלגברה 2","MathWeb_Topic_OrderOfOperations":"מסדר הפעולות","MathWeb_Topic_PrimeFactorization":"פירוק ראש","MathWeb_Topic_Fractions":"שברים","MathWeb_Topic_LCM":"לפחות מספר שכיח","MathWeb_Topic_GCF":"הגורם השכיח הגדול ביותר","MathWeb_Topic_Mean":"תכוון","MathWeb_Topic_Mode":"מצב","MathWeb_Topic_Exponents":"עריכים","MathWeb_Topic_Radicals":"רדיקלים","MathWeb_Topic_MixedFractions":"שברים מעורבים","MathWeb_Topic_Algebra":"אלגברה","MathWeb_Topic_Algebra2":"אלגברה 2","MathWeb_Topic_CombineLikeTerms":"שלב כמו תנאים","MathWeb_Topic_SolveForVariable":"לפתור עבור משתנה","MathWeb_Topic_LinearEquations":"משוואות לינאריות","MathWeb_Topic_QuadraticEquations":"משוואות ריבועיות","MathWeb_Topic_Matrices":"טריצות","MathWeb_Topic_Inequalities":"יוויון","MathWeb_Topic_SystemsOfEquations":"מערכות משוואות","MathWeb_Topic_Factor":"גורם","MathWeb_Topic_Expand":"הרחיב","MathWeb_Topic_EvaluteFractions":"הערכת שברים","MathWeb_Topic_Trigonometry":"טריגונומטריה","MathWeb_Topic_Simplify":"פשט את","MathWeb_Topic_Evaluate":"העריך","MathWeb_Topic_Graphs":"גרפים","MathWeb_Topic_SolveEquations":"לפתור משוואות","MathWeb_Topic_Calculus":"תחשיב","MathWeb_Topic_Derivatives":"נגזרים","MathWeb_Topic_Integrals":"אינטגרלים","MathWeb_Topic_Limits":"גבולות","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"מחשבון אלגברה","MathWeb_TrigCalculator":"מחשבון טריגונומטריה","MathWeb_CalculusCalculator":"מחשבון חישוב","MathWeb_MatrixCalculator":"מטריקס מחשבון","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"מפיק בוחן...","Quiz_Error_Header":"מצטערים, לא הצלחנו להפיק בוחן על בסיס סוג בעיה זה. נסה סוג בעיה אחר.","Quiz_Notebook_ProblemCount_Template":"{0} בעיות דומות ל:","NoResults_MathSolveError":"משהו השתבש, נסה שוב","Quiz_Completion_Date":"הושלם בתאריך {0}","Quiz_Result_Correct":"נכון","Quiz_Total_Score_Template":"ענית נכון על {0} מתוך {1} שאלות.","Quiz_Complete_Header":"הבוחן הושלם","Quiz_End_Finish":"סיום","KeyboardInput_Undo":"בטל","MathWeb_DeleteAll":"מחק את כל","MathWeb_MyQuizzes":"החידונים שלי","MathWeb_QuizNotFound":"חידון לא נמצא","Quiz_NextProblem":"הבעיה הבאה","Quiz_CheckProblem":"בדוק","Quiz_Answer_Prompt":"בחר את התשובה לבעיה:","Quiz_HintButton":"עזרו לי","MathWeb_NewQuiz":"חידון חדש","Quiz_StartScreen_Question_Count_Template":"{0} שאלות אמריקאיות","Quiz_StartScreen_Header":"מוכן לבוחן?","Quiz_StartScreen_Time_Template":"{0} דקות להשלמה","Quiz_Start":"התחל","Quiz_Result_Incorrect":"לא נכון","Quiz_Result_Your_Answer":"התשובה שלך:","Quiz_Result_See_Solution":"דוח בוחן","Quiz_Entity":"בוחן","MathWeb_InProgress":"מתבצע","MathWeb_ConfirmQuizDelete":"האם אתה בטוח שברצונך למחוק את כל החידונים?","Generic_Edit":"ערוך","Generic_Close":"סגור","MathResult_GraphHeader":"גרף","Teams_ViewInteractiveGraph":"צפה בגרף אינטראקטיבי","Network_Offline_Message":"אתה במצב לא מקוון. בדוק את הרשת שלך.","NoResults_MathEquation":"זהה משוואה זו:","NoResults_MathError":"איננו יכולים לפתור סוג משוואה זה או שיש בה שגיאה","NoResults_NoMath":"מצטערים, איננו רואים משוואה. וודא שהיא ברורה וכלולה במלואה במסגרת","MathWeb_ViewSteps":"הצג צעדי פתרון","Quiz_Try_Label":"נסה בוחן","MathAnswerView_Concepts":"מושגים קשורים","Generic_PDF":"PDF","MathAnswerView_Worksheets":"דפי עבודה מחיפוש באינטרנט","MathAnswerView_Worksheets_Short":"דפי עבודה","MathAnswerView_RelatedPages":"בעיות דומות מחיפוש באינטרנט","Results_Items":"פריטים","Generic_Share":"שתף","Generic_Copy":"העתק","Share_CopiedToClipboard":"הועתק ללוח","Accessibility_MathAnswerView_PoweredByBing":"מופעל על ידי bing","MathAnswerView_PoweredByBing":"מופעל על ידי","MathAnswerView_EquationIsFalse":"לא נכון","MathAnswerView_EquationIsTrue":"נכון","Feedback_Thanks":"תודה!","Feedback_Title":"האם התוצאות האלה היו מועילות?","MathAnswerView_DesktopUpsell_SectionHeader":"גרסת שולחן עבודה זמינה","SketchInput_ClearLabel":"נקה את השרטוט","SketchInput_Clear":"נקה","SketchInput_PenLabel":"השתמש בעט","SketchInput_EraserLabel":"השתמש במחק","SketchInput_UndoLabel":"בטל את הקו האחרון","SketchInput_Info":"צייר בעיה להלן","SketchInput_SubmitLabel":"שלח ביטוי","Teams_Solve_Waiting":"פותר את הביטוי...","Teams_RelatedTo":"קשור","MathWeb_PageTopicRootTitle":"גלה נושאים במתמטיקה","MathWeb_PageTopicDescriptionFormat":"למד {0} באמצעות כלי הפתרונות המתמטיים החופשי שלנו עם פתרונות שלב-אחר-שלב."},"el":{"Generic_Back":"Πίσω","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"Η εφαρμογή Microsoft Math Solver παρέχει βοήθεια βήμα προς βήμα σε μια σειρά από προβλήματα, π.χ. αριθμητικής, άλγεβρας, τριγωνομετρίας, λογισμού, στατιστικής, και άλλα θέματα χρησιμοποιώντας έναν προηγμένο μηχανισμό επίλυσης μαθηματικών προβλημάτων με τεχνολογία AI.","MathWeb_Download_MobileHeading":"Step-by-step solutions at your finger tips","MathWeb_Download_IOS":"Download for iOS","MathWeb_Download_Android":"Download for Android","MathWeb_Download_InstalledMessage":"App already installed","MathWeb_Download_Button":"Download desktop app","MathWeb_Download_Unavailable":"Desktop app unavailable","MathWeb_Download_MacMessage":"Currently, the Math Solver desktop app is only available via Chrome on MacOSX. Please open this page in Chrome to install the app.","MathWeb_Download_UnknownMessage":"Currently, the Math Solver desktop is only available via Microsoft Edge and Chrome. Please open this page in a compatible browser.","EDU_PROB_CATEGORY_LIN_EQ":"Γραμμική εξίσωση","EDU_PROB_CATEGORY_QUAD_EQ":"Δευτεροβάθμια εξίσωση","EDU_PROB_CATEGORY_ARITHMETIC":"Αριθμητική","EDU_PROB_CATEGORY_TRIG":"Τριγωνομετρία","EDU_PROB_CATEGORY_MATRIX":"Πίνακας","EDU_PROB_CATEGORY_SIM_EQ":"Σύστημα εξισώσεων","EDU_PROB_CATEGORY_DIFF":"Παραγώγιση","EDU_PROB_CATEGORY_INTEGRATION":"Ολοκλήρωση","EDU_PROB_CATEGORY_LIMITS":"Όρια","EDU_PROB_CATEGORY_COMPLEX":"Μιγαδικοί αριθμοί","EDU_PROB_CATEGORY_LIST":"Λίστα","NotebookTab_Example":"Παραδείγματα","MathWeb_GenericSolve":"Λύση","MathResult_Graph_ReCenter":"Νέο κεντράρισμα","MathWeb_Keyboard_Algebra":"algebra","MathWeb_Keyboard_Calculus":"calculus","MathWeb_Keyboard_List":"list","MathWeb_Keyboard_Matrices":"matrices","MathWeb_Keyboard_Numbers":"numbers","MathWeb_Keyboard_Operators":"operators","MathWeb_Keyboard_Statistics":"statistics","MathWeb_Keyboard_Trig":"trigonometry","MathWeb_Keyboard_Variables":"variables","KeyboardInput_Solve":"Λύση","KeyboardInput_PlaceholderText":"Πληκτρολογήστε ένα μαθηματικό πρόβλημα","MathWeb_Section_Steps_Title":"Λήψη εξηγήσεων βήμα προς βήμα","MathWeb_Section_Steps_Subtitle":"Μάθετε πώς να λύνετε προβλήματα και να εμφανίζετε την εργασία σας. Επιπλέον, δείτε ορισμούς για μαθηματικές έννοιες","MathWeb_Section_Graph_Title":"Γραφήματα για τα μαθηματικά προβλήματά σας","MathWeb_Section_Graph_Subtitle":"Δημιουργήστε αμέσως το γράφημα οποιασδήποτε εξίσωσης, για να απεικονίσετε τη συνάρτησή σας και να κατανοήσετε τη σχέση μεταξύ των μεταβλητών","MathWeb_Section_Practice_Title":"Εξάσκηση, εξάσκηση, εξάσκηση","MathWeb_Section_Practice_Subtitle":"Κάντε αναζήτηση για πρόσθετο υλικό εκμάθησης, όπως σχετικά φύλλα εργασιών και βίντεο εκμάθησης","MathWeb_Section_Language_Title":"Λήψη βοήθειας για τα μαθηματικά στη γλώσσα σας","MathWeb_Section_Language_Subtitle":"Λειτουργεί στα Ισπανικά, τα Χίντι, τα Γερμανικά και άλλες γλώσσες","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Δοκιμάστε το Math Solver","MathAnswerView_Videos":"Βίντεο","MathWeb_Section_Video_Subtitle":"Watch for new features, tips and more!","MathWeb_Title":"Βρείτε λύσεις βήμα προς βήμα σε μαθηματικά προβλήματα","Results_Less":"Λιγότερα {0}","Results_More":"Περισσότερα {0}","MathPracticeProblem_SectionHeader":"Εξάσκηση","MathWeb_PopularProblems":"Popular Problems","MathWeb_SolveProblemTitleFormat":"Επίλυση {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Λύστε τα μαθηματικά σας προβλήματα χρησιμοποιώντας τον δωρεάν μηχανισμό επίλυσης μαθηματικών προβλημάτων με λύσεις βήμα προς βήμα. Ο μηχανισμός επίλυσης μαθηματικών προβλημάτων υποστηρίζει βασικά μαθηματικά, αριθμητική, άλγεβρα, τριγωνομετρία, λογισμό και άλλα.","Generic_About":"About","MathWeb_Topics":"Topics","Generic_PrivacyPolicy":"Πολιτική προστασίας προσωπικών δεδομένων","Generic_TermOfUse":"Όροι υπηρεσίας","Settings_Language":"Γλώσσα","MathWeb_BackToTop":"Back to top","MathWeb_SimilarProblems":"Similar Problems","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Order of Operations","MathWeb_Topic_PrimeFactorization":"Prime Factorization","MathWeb_Topic_Fractions":"Fractions","MathWeb_Topic_LCM":"Least Common Multiple","MathWeb_Topic_GCF":"Greatest Common Factor","MathWeb_Topic_Mean":"Mean","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Exponents","MathWeb_Topic_Radicals":"Radicals","MathWeb_Topic_MixedFractions":"Mixed Fractions","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Combine Like Terms","MathWeb_Topic_SolveForVariable":"Solve for a Variable","MathWeb_Topic_LinearEquations":"Linear Equations","MathWeb_Topic_QuadraticEquations":"Quadratic Equations","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Inequalities","MathWeb_Topic_SystemsOfEquations":"Systems of Equations","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Expand","MathWeb_Topic_EvaluteFractions":"Evaluate Fractions","MathWeb_Topic_Trigonometry":"Trigonometry","MathWeb_Topic_Simplify":"Simplify","MathWeb_Topic_Evaluate":"Evaluate","MathWeb_Topic_Graphs":"Graphs","MathWeb_Topic_SolveEquations":"Solve Equations","MathWeb_Topic_Calculus":"Calculus","MathWeb_Topic_Derivatives":"Derivatives","MathWeb_Topic_Integrals":"Integrals","MathWeb_Topic_Limits":"Limits","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Αλγεβρική αριθμομηχανή","MathWeb_TrigCalculator":"Αριθμομηχανή τριγωνομετρίας","MathWeb_CalculusCalculator":"Αριθμομηχανή λογισμού","MathWeb_MatrixCalculator":"Matrix Calculator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Δημιουργία κουίζ...","Quiz_Error_Header":"Δεν ήταν δυνατή η δημιουργία ενός κουίζ με βάση αυτόν τον τύπο προβλήματος. Δοκιμάστε άλλον τύπο προβλήματος.","Quiz_Notebook_ProblemCount_Template":"{0} προβλήματα όπως:","NoResults_MathSolveError":"Παρουσιάστηκε κάποιο πρόβλημα, δοκιμάστε ξανά","Quiz_Completion_Date":"Ολοκληρώθηκε στις {0}","Quiz_Result_Correct":"Σωστή","Quiz_Total_Score_Template":"Απαντήσατε σωστά σε {0} από τις {1} ερωτήσεις.","Quiz_Complete_Header":"Το κουίζ ολοκληρώθηκε","Quiz_End_Finish":"Τέλος","KeyboardInput_Undo":"Αναίρεση","MathWeb_DeleteAll":"Delete all","MathWeb_MyQuizzes":"My quizzes","MathWeb_QuizNotFound":"Quiz not found","Quiz_NextProblem":"Επόμενο πρόβλημα","Quiz_CheckProblem":"Έλεγχος","Quiz_Answer_Prompt":"Επιλέξτε την απάντηση στο πρόβλημα:","Quiz_HintButton":"Βοήθεια","MathWeb_NewQuiz":"New quiz","Quiz_StartScreen_Question_Count_Template":"{0} ερωτήσεις πολλαπλής επιλογής","Quiz_StartScreen_Header":"Είστε έτοιμοι για ένα κουίζ;","Quiz_StartScreen_Time_Template":"{0} λεπτά για να ολοκληρωθεί","Quiz_Start":"Έναρξη","Quiz_Result_Incorrect":"Λάθος","Quiz_Result_Your_Answer":"Η απάντησή σας:","Quiz_Result_See_Solution":"Εμφάνιση λύσης","Quiz_Entity":"Κουίζ","MathWeb_InProgress":"In progress","MathWeb_ConfirmQuizDelete":"Are you sure you want to delete all quizzes?","Generic_Edit":"Επεξεργασία","Generic_Close":"Κλείσιμο","MathResult_GraphHeader":"Γράφημα","Teams_ViewInteractiveGraph":"View Interactive Graph","Network_Offline_Message":"Είστε εκτός σύνδεσης. Ελέγξτε το δίκτυό σας.","NoResults_MathEquation":"Εντοπίστηκε αυτή η εξίσωση:","NoResults_MathError":"Δεν είναι δυνατή η επίλυση αυτού του τύπου εξίσωσης ή η εξίσωση μπορεί να περιέχει λάθος","NoResults_NoMath":"Δυστυχώς, δεν εντοπίστηκε κάποια εξίσωση. Βεβαιωθείτε ότι φαίνεται καθαρά και ότι βρίσκεται πλήρως εντός του πλαισίου","MathWeb_ViewSteps":"View solution steps","Quiz_Try_Label":"Δοκιμή κουίζ","MathAnswerView_Concepts":"Σχετικές έννοιες","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Φύλλα εργασίας από την Αναζήτηση στο web","MathAnswerView_Worksheets_Short":"Φύλλα εργασίας","MathAnswerView_RelatedPages":"Παρόμοια προβλήματα από την Αναζήτηση στο web","Results_Items":"Στοιχεία","Generic_Share":"Κοινοποίηση","Generic_Copy":"Αντιγραφή","Share_CopiedToClipboard":"Αντιγράφηκε στο πρόχειρο","Accessibility_MathAnswerView_PoweredByBing":"Παρέχεται από το Bing","MathAnswerView_PoweredByBing":"Παρέχεται από το","MathAnswerView_EquationIsFalse":"Ψευδές","MathAnswerView_EquationIsTrue":"Αληθές","Feedback_Thanks":"Ευχαριστούμε!","Feedback_Title":"Ήταν χρήσιμα αυτά τα αποτελέσματα;","MathAnswerView_DesktopUpsell_SectionHeader":"Διαθέσιμη έκδοση επιτραπέζιου υπολογιστή","SketchInput_ClearLabel":"Διαγραφή σχεδίου","SketchInput_Clear":"Διαγραφή","SketchInput_PenLabel":"Χρήση πένας","SketchInput_EraserLabel":"Χρήση γόμας","SketchInput_UndoLabel":"Αναίρεση τελευταίας μολυβιάς","SketchInput_Info":"Σχεδιάστε ένα πρόβλημα παρακάτω","SketchInput_SubmitLabel":"Υποβολή παράστασης","Teams_Solve_Waiting":"Solving this expression...","Teams_RelatedTo":"Related To","MathWeb_PageTopicRootTitle":"Εξερευνήστε μαθηματικά θέματα","MathWeb_PageTopicDescriptionFormat":"Μάθετε {0} χρησιμοποιώντας τον δωρεάν μηχανισμό επίλυσης μαθηματικών προβλημάτων με λύσεις βήμα προς βήμα."},"cs":{"Generic_Back":"Zpět","MathWeb_GenericDownload":"Ke stažení","MathWeb_PageTopicRootDescription":"Aplikace Microsoft Math Solver obsahuje postupy krok za krokem na spoustu matematických úloh z aritmetiky, algebry, trigonometrie, kalkulu, statistiky a dalších oblastí za použití pokročilé technologie AI.","MathWeb_Download_MobileHeading":"Krok za krokem řešení na špičkách prstů","MathWeb_Download_IOS":"Stáhnout pro iOS","MathWeb_Download_Android":"Stáhnout pro Android","MathWeb_Download_InstalledMessage":"Aplikace je již nainstalována","MathWeb_Download_Button":"Stažení aplikace pro stolní počítače","MathWeb_Download_Unavailable":"Aplikace Plocha není k dispozici.","MathWeb_Download_MacMessage":"V současné době je desktopová aplikace Math Solver dostupná pouze prostřednictvím Chromu v MacOSXu. Chcete-li aplikaci nainstalovat, otevřete tuto stránku v Chromu.","MathWeb_Download_UnknownMessage":"V současné době je plocha Matematického řešitele k dispozici pouze prostřednictvím aplikací Microsoft Edge a Chrome. Otevřete tuto stránku v kompatibilním prohlížeči.","EDU_PROB_CATEGORY_LIN_EQ":"Lineární rovnice","EDU_PROB_CATEGORY_QUAD_EQ":"Kvadratická rovnice","EDU_PROB_CATEGORY_ARITHMETIC":"Aritmetika","EDU_PROB_CATEGORY_TRIG":"Trigonometrie","EDU_PROB_CATEGORY_MATRIX":"Matice","EDU_PROB_CATEGORY_SIM_EQ":"Soustava rovnic","EDU_PROB_CATEGORY_DIFF":"Derivace","EDU_PROB_CATEGORY_INTEGRATION":"Integrace","EDU_PROB_CATEGORY_LIMITS":"Limity","EDU_PROB_CATEGORY_COMPLEX":"Komplexní čísla","EDU_PROB_CATEGORY_LIST":"Seznam","NotebookTab_Example":"Příklady","MathWeb_GenericSolve":"Vyřešit","MathResult_Graph_ReCenter":"Znovu vystředit","MathWeb_Keyboard_Algebra":"Algebra","MathWeb_Keyboard_Calculus":"Kalkul","MathWeb_Keyboard_List":"Seznamu","MathWeb_Keyboard_Matrices":"Matice","MathWeb_Keyboard_Numbers":"Čísla","MathWeb_Keyboard_Operators":"Operátory","MathWeb_Keyboard_Statistics":"Statistiky","MathWeb_Keyboard_Trig":"Trigonometrie","MathWeb_Keyboard_Variables":"Proměnné","KeyboardInput_Solve":"Vyřešit","KeyboardInput_PlaceholderText":"Zadejte matematický problém.","MathWeb_Section_Steps_Title":"Získejte vysvětlení krok za krokem","MathWeb_Section_Steps_Subtitle":"Podívejte se, jak řešit úlohy, a předveďte svou práci – navíc získáte definice matematických konceptů","MathWeb_Section_Graph_Title":"Převeďte matematické úlohy do grafů.","MathWeb_Section_Graph_Subtitle":"Okamžitě převeďte jakoukoli rovnici na graf, prohlédněte si funkci a porozumějte vztahu proměnných.","MathWeb_Section_Practice_Title":"Procvičovat, procvičovat, procvičovat","MathWeb_Section_Practice_Subtitle":"Vyhledejte si další studijní materiály, jako jsou související pracovní listy a videonávody.","MathWeb_Section_Language_Title":"Matematická pomoc ve vašem jazyce","MathWeb_Section_Language_Subtitle":"Funguje ve španělštině, hindštině, němčině a dalších jazycích","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Vyzkoušet Math Solver","MathAnswerView_Videos":"Videa","MathWeb_Section_Video_Subtitle":"Sledujte nové funkce, tipy a další!","MathWeb_Title":"Získejte podrobná řešení matematických úloh.","Results_Less":"Méně {0}","Results_More":"Více {0}","MathPracticeProblem_SectionHeader":"Cvičení","MathWeb_PopularProblems":"Populární problémy","MathWeb_SolveProblemTitleFormat":"Vyřešit {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Řešte matematické úlohy pomocí naší bezplatné aplikace s podrobnými řešeními. Math Solver podporuje základní matematiku, aritmetiku, algebru, trigonometrii, kalkulus a další oblasti.","Generic_About":"O","MathWeb_Topics":"Témata","Generic_PrivacyPolicy":"Zásady ochrany osobních údajů","Generic_TermOfUse":"Podmínky služby","Settings_Language":"Jazyk","MathWeb_BackToTop":"Zpět na začátek","MathWeb_SimilarProblems":"Podobné problémy","MathWeb_Topic_PreAlgebra":"Před algebra","MathWeb_Topic_PreAlgebra2":"Před algebra 2","MathWeb_Topic_OrderOfOperations":"Pořadí operací","MathWeb_Topic_PrimeFactorization":"Primární faktorizace","MathWeb_Topic_Fractions":"Frakce","MathWeb_Topic_LCM":"Nejmenší společný násobek","MathWeb_Topic_GCF":"Největší společný faktor","MathWeb_Topic_Mean":"Znamená","MathWeb_Topic_Mode":"Režimu","MathWeb_Topic_Exponents":"Exponenty","MathWeb_Topic_Radicals":"Radikály","MathWeb_Topic_MixedFractions":"Smíšené frakce","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Kombinovat podobné podmínky","MathWeb_Topic_SolveForVariable":"Řešení pro proměnnou","MathWeb_Topic_LinearEquations":"Lineární rovnice","MathWeb_Topic_QuadraticEquations":"Kvadratické rovnice","MathWeb_Topic_Matrices":"Matice","MathWeb_Topic_Inequalities":"Nerovnosti","MathWeb_Topic_SystemsOfEquations":"Soustavy rovnic","MathWeb_Topic_Factor":"Faktor","MathWeb_Topic_Expand":"Rozbalte","MathWeb_Topic_EvaluteFractions":"Vyhodnotit zlomky","MathWeb_Topic_Trigonometry":"Trigonometrie","MathWeb_Topic_Simplify":"Zjednodušit","MathWeb_Topic_Evaluate":"Vyhodnotit","MathWeb_Topic_Graphs":"Grafy","MathWeb_Topic_SolveEquations":"Řešit rovnice","MathWeb_Topic_Calculus":"Kalkul","MathWeb_Topic_Derivatives":"Deriváty","MathWeb_Topic_Integrals":"Integrály","MathWeb_Topic_Limits":"Limity","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Kalkulačka – algebra","MathWeb_TrigCalculator":"Kalkulačka – trigonometrie","MathWeb_CalculusCalculator":"Kalkulačka – kalkulus","MathWeb_MatrixCalculator":"Maticová kalkulačka","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Generování kvízu...","Quiz_Error_Header":"Je nám líto, ale na základě daného typu úlohy se nám kvíz nepodařilo vygenerovat. Zkuste to s jiným typem úlohy.","Quiz_Notebook_ProblemCount_Template":"{0} úloh podobných jako:","NoResults_MathSolveError":"Něco se nepovedlo. Zkuste to znovu.","Quiz_Completion_Date":"Dokončeno {0}","Quiz_Result_Correct":"Správně","Quiz_Total_Score_Template":"Odpověděli jste správně na {0} z {1} otázek.","Quiz_Complete_Header":"Kvíz dokončen","Quiz_End_Finish":"Dokončit","KeyboardInput_Undo":"Zpět","MathWeb_DeleteAll":"Odstranit vše","MathWeb_MyQuizzes":"Moje kvízy","MathWeb_QuizNotFound":"Kvíz nebyl nalezen.","Quiz_NextProblem":"Následující úloha","Quiz_CheckProblem":"Zkontrolovat","Quiz_Answer_Prompt":"Zvolte správné řešení:","Quiz_HintButton":"Poraďte mi","MathWeb_NewQuiz":"Nový kvíz","Quiz_StartScreen_Question_Count_Template":"{0} otázek s výběrem možností","Quiz_StartScreen_Header":"Připraveni na kvíz?","Quiz_StartScreen_Time_Template":"Dokončení zabere {0} min.","Quiz_Start":"Spustit","Quiz_Result_Incorrect":"Nesprávně","Quiz_Result_Your_Answer":"Vaše odpověď:","Quiz_Result_See_Solution":"Zobrazit řešení","Quiz_Entity":"Kvíz","MathWeb_InProgress":"Probíhá","MathWeb_ConfirmQuizDelete":"Opravdu chcete odstranit všechny kvízy?","Generic_Edit":"Upravit","Generic_Close":"Zavřít","MathResult_GraphHeader":"Graf","Teams_ViewInteractiveGraph":"Zobrazit interaktivní graf","Network_Offline_Message":"Jste offline. Zkontrolujte připojení k síti.","NoResults_MathEquation":"Rozpoznali jsme tuto rovnici:","NoResults_MathError":"Tento typ rovnice nedokážeme vyřešit nebo je v něm chyba.","NoResults_NoMath":"Je nám líto, ale rovnici nevidíme. Ujistěte se, že je ostrá a celá v rámečku.","MathWeb_ViewSteps":"Zobrazit kroky řešení","Quiz_Try_Label":"Vyzkoušet kvíz","MathAnswerView_Concepts":"Související koncepty","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Pracovní listy z vyhledávání na webu","MathAnswerView_Worksheets_Short":"Pracovní listy","MathAnswerView_RelatedPages":"Podobné úlohy z vyhledávání na webu","Results_Items":"položek","Generic_Share":"Sdílet","Generic_Copy":"Kopírovat","Share_CopiedToClipboard":"Zkopírováno do schránky","Accessibility_MathAnswerView_PoweredByBing":"Využívá službu Bing","MathAnswerView_PoweredByBing":"Poskytuje","MathAnswerView_EquationIsFalse":"Nepravda","MathAnswerView_EquationIsTrue":"Pravda","Feedback_Thanks":"Děkujeme.","Feedback_Title":"Byly tyto výsledky užitečné?","MathAnswerView_DesktopUpsell_SectionHeader":"Desktop verze k dispozici","SketchInput_ClearLabel":"Vymazat náčrtek","SketchInput_Clear":"SMAZAT","SketchInput_PenLabel":"Použít pero","SketchInput_EraserLabel":"Použít gumu","SketchInput_UndoLabel":"Vrátit poslední tah zpět","SketchInput_Info":"Níže nakreslete úlohu.","SketchInput_SubmitLabel":"Odeslat výraz","Teams_Solve_Waiting":"Řešení tohoto výrazu...","Teams_RelatedTo":"Související","MathWeb_PageTopicRootTitle":"Prozkoumejte matematická témata","MathWeb_PageTopicDescriptionFormat":"Poznejte téma {0} s naší bezplatnou matematickou aplikací s podrobnými řešeními."},"pl":{"Generic_Back":"Wstecz","MathWeb_GenericDownload":"Download","MathWeb_PageTopicRootDescription":"Aplikacja Microsoft Math Solver pomaga rozwiązywać krok po kroku różne zadania — między innymi z arytmetyki, algebry, trygonometrii, rachunku różniczkowego, statystyki i innych dziedzin — przy użyciu zaawansowanego mechanizmu matematycznego opartego na sztucznej inteligencji.","MathWeb_Download_MobileHeading":"Step-by-step solutions at your finger tips","MathWeb_Download_IOS":"Download for iOS","MathWeb_Download_Android":"Download for Android","MathWeb_Download_InstalledMessage":"App already installed","MathWeb_Download_Button":"Download desktop app","MathWeb_Download_Unavailable":"Desktop app unavailable","MathWeb_Download_MacMessage":"Currently, the Math Solver desktop app is only available via Chrome on MacOSX. Please open this page in Chrome to install the app.","MathWeb_Download_UnknownMessage":"Currently, the Math Solver desktop is only available via Microsoft Edge and Chrome. Please open this page in a compatible browser.","EDU_PROB_CATEGORY_LIN_EQ":"Równanie liniowe","EDU_PROB_CATEGORY_QUAD_EQ":"Równanie kwadratowe","EDU_PROB_CATEGORY_ARITHMETIC":"Arytmetyka","EDU_PROB_CATEGORY_TRIG":"Trygonometria","EDU_PROB_CATEGORY_MATRIX":"Macierz","EDU_PROB_CATEGORY_SIM_EQ":"Równania równoważne","EDU_PROB_CATEGORY_DIFF":"Różniczkowanie","EDU_PROB_CATEGORY_INTEGRATION":"Całkowanie","EDU_PROB_CATEGORY_LIMITS":"Granice","EDU_PROB_CATEGORY_COMPLEX":"Liczby zespolone","EDU_PROB_CATEGORY_LIST":"Lista","NotebookTab_Example":"Przykłady","MathWeb_GenericSolve":"Rozwiąż","MathResult_Graph_ReCenter":"Wyśrodkuj z powrotem","MathWeb_Keyboard_Algebra":"algebra","MathWeb_Keyboard_Calculus":"calculus","MathWeb_Keyboard_List":"list","MathWeb_Keyboard_Matrices":"matrices","MathWeb_Keyboard_Numbers":"numbers","MathWeb_Keyboard_Operators":"operators","MathWeb_Keyboard_Statistics":"statistics","MathWeb_Keyboard_Trig":"trigonometry","MathWeb_Keyboard_Variables":"variables","KeyboardInput_Solve":"Rozwiąż","KeyboardInput_PlaceholderText":"Wpisz zadanie matematyczne","MathWeb_Section_Steps_Title":"Uzyskaj wyjaśnienia krok po kroku","MathWeb_Section_Steps_Subtitle":"Zobacz, jak rozwiązywać zadania i zaprezentować swoją pracę — dodatkowo możesz wyświetlić definicje pojęć matematycznych","MathWeb_Section_Graph_Title":"Twórz wykresy do zadań matematycznych","MathWeb_Section_Graph_Subtitle":"Błyskawicznie twórz wykresy dowolnych równań, aby zwizualizować funkcję i poznać zależności między zmiennymi","MathWeb_Section_Practice_Title":"Ćwicz, ćwicz, ćwicz","MathWeb_Section_Practice_Subtitle":"Wyszukaj dodatkowe materiały edukacyjne, takie jak powiązane arkusze i samouczki wideo","MathWeb_Section_Language_Title":"Uzyskaj pomoc matematyczną w swoim języku","MathWeb_Section_Language_Subtitle":"Działa w językach hiszpańskim, hindi, niemieckim i innych","MathWeb_RootPageTitle":"Microsoft Math Solver - Math Problem Solver & Calculator","MathWeb_InputHeader":"Wypróbuj aplikację Math Solver","MathAnswerView_Videos":"Filmy","MathWeb_Section_Video_Subtitle":"Watch for new features, tips and more!","MathWeb_Title":"Uzyskuj rozwiązania krok po kroku zadań matematycznych","Results_Less":"Mniej {0}","Results_More":"Więcej {0}","MathPracticeProblem_SectionHeader":"Ćwiczenie","MathWeb_PopularProblems":"Popular Problems","MathWeb_SolveProblemTitleFormat":"Rozwiąż {0} | Microsoft Math Solver","MathWeb_SolveProblemDescription":"Rozwiązuj zadania matematyczne, korzystając z naszej bezpłatnej aplikacji, która wyświetla rozwiązania krok po kroku. Obsługuje ona zadania z podstaw matematyki, algebry, trygonometrii, rachunku różniczkowego i innych dziedzin.","Generic_About":"About","MathWeb_Topics":"Topics","Generic_PrivacyPolicy":"Zasady ochrony prywatności","Generic_TermOfUse":"Warunki użytkowania usługi","Settings_Language":"Język","MathWeb_BackToTop":"Back to top","MathWeb_SimilarProblems":"Similar Problems","MathWeb_Topic_PreAlgebra":"Pre-Algebra","MathWeb_Topic_PreAlgebra2":"Pre-Algebra 2","MathWeb_Topic_OrderOfOperations":"Order of Operations","MathWeb_Topic_PrimeFactorization":"Prime Factorization","MathWeb_Topic_Fractions":"Fractions","MathWeb_Topic_LCM":"Least Common Multiple","MathWeb_Topic_GCF":"Greatest Common Factor","MathWeb_Topic_Mean":"Mean","MathWeb_Topic_Mode":"Mode","MathWeb_Topic_Exponents":"Exponents","MathWeb_Topic_Radicals":"Radicals","MathWeb_Topic_MixedFractions":"Mixed Fractions","MathWeb_Topic_Algebra":"Algebra","MathWeb_Topic_Algebra2":"Algebra 2","MathWeb_Topic_CombineLikeTerms":"Combine Like Terms","MathWeb_Topic_SolveForVariable":"Solve for a Variable","MathWeb_Topic_LinearEquations":"Linear Equations","MathWeb_Topic_QuadraticEquations":"Quadratic Equations","MathWeb_Topic_Matrices":"Matrices","MathWeb_Topic_Inequalities":"Inequalities","MathWeb_Topic_SystemsOfEquations":"Systems of Equations","MathWeb_Topic_Factor":"Factor","MathWeb_Topic_Expand":"Expand","MathWeb_Topic_EvaluteFractions":"Evaluate Fractions","MathWeb_Topic_Trigonometry":"Trigonometry","MathWeb_Topic_Simplify":"Simplify","MathWeb_Topic_Evaluate":"Evaluate","MathWeb_Topic_Graphs":"Graphs","MathWeb_Topic_SolveEquations":"Solve Equations","MathWeb_Topic_Calculus":"Calculus","MathWeb_Topic_Derivatives":"Derivatives","MathWeb_Topic_Integrals":"Integrals","MathWeb_Topic_Limits":"Limits","MathWeb_CalculatorTitle":"{0} | Microsoft Math Solver","MathWeb_AlgebraCalculator":"Kalkulator algebry","MathWeb_TrigCalculator":"Kalkulator trygonometrii","MathWeb_CalculusCalculator":"Kalkulator rachunku różniczkowego","MathWeb_MatrixCalculator":"Matrix Calculator","Settings_Language_AR":"العربية","Settings_Language_AS":"অসমীয়া","Settings_Language_BN":"বাংলা","Settings_Language_CS":"Čeština","Settings_Language_DE":"Deutsch","Settings_Language_EL":"ελληνικά","Settings_Language_EN":"English","Settings_Language_ES":"Español","Settings_Language_FR":"Français","Settings_Language_GU":"ગુજરાતી","Settings_Language_HE":"עברית","Settings_Language_HI":"हिन्दी","Settings_Language_HU":"Magyar Nyelv","Settings_Language_ID":"Bahasa Indonesia","Settings_Language_IT":"Italiano","Settings_Language_JA":"日本語","Settings_Language_KN":"ಕನ್ನಡ","Settings_Language_KO":"한국어","Settings_Language_KOK":"कोंकणी","Settings_Language_ML":"മലയാളം","Settings_Language_MR":"मराठी","Settings_Language_MS":"Bahasa Melayu","Settings_Language_NL":"Nederlands","Settings_Language_OR":"ଓଡ଼ିଆ","Settings_Language_PA":"ਪੰਜਾਬੀ","Settings_Language_PL":"Polski","Settings_Language_PT":"Português","Settings_Language_RO":"Română","Settings_Language_RU":"Русский","Settings_Language_SK":"Slovenčina","Settings_Language_TA":"தமிழ்","Settings_Language_TE":"తెలుగు","Settings_Language_TH":"ไทย","Settings_Language_TR":"Türkçe","Settings_Language_VI":"Tiếng Việt","Settings_Language_ZH":"简体中文","Settings_Language_ZHHant":"繁體中文","Quiz_Loading_Text":"Trwa generowanie quizu...","Quiz_Error_Header":"Niestety, nie udało nam się wygenerować quizu na podstawie tego typu działania. Spróbuj użyć działania innego typu.","Quiz_Notebook_ProblemCount_Template":"{0} działań(-nia) podobnych(-ne) do:","NoResults_MathSolveError":"Coś poszło nie tak, spróbuj ponownie","Quiz_Completion_Date":"Ukończono {0}","Quiz_Result_Correct":"Prawidłowa","Quiz_Total_Score_Template":"Udzielono prawidłowych odpowiedzi na {0} z {1} pytań.","Quiz_Complete_Header":"Quiz ukończony","Quiz_End_Finish":"Zakończ","KeyboardInput_Undo":"Cofnij","MathWeb_DeleteAll":"Delete all","MathWeb_MyQuizzes":"My quizzes","MathWeb_QuizNotFound":"Quiz not found","Quiz_NextProblem":"Następne działanie","Quiz_CheckProblem":"Sprawdź","Quiz_Answer_Prompt":"Wybierz rozwiązanie działania:","Quiz_HintButton":"Pomóż mi","MathWeb_NewQuiz":"New quiz","Quiz_StartScreen_Question_Count_Template":"Liczba pytań typu Wybór wielokrotny: {0}","Quiz_StartScreen_Header":"Chcesz rozwiązać quiz?","Quiz_StartScreen_Time_Template":"{0} min na ukończenie","Quiz_Start":"Rozpocznij","Quiz_Result_Incorrect":"Nieprawidłowa","Quiz_Result_Your_Answer":"Twoja odpowiedź:","Quiz_Result_See_Solution":"Zobacz rozwiązanie","Quiz_Entity":"Quiz","MathWeb_InProgress":"In progress","MathWeb_ConfirmQuizDelete":"Are you sure you want to delete all quizzes?","Generic_Edit":"Edytuj","Generic_Close":"Zamknij","MathResult_GraphHeader":"Wykres","Teams_ViewInteractiveGraph":"View Interactive Graph","Network_Offline_Message":"Jesteś offline. Sprawdź połączenie sieciowe.","NoResults_MathEquation":"Wykryto to równanie:","NoResults_MathError":"Nie możemy rozwiązać równania tego typu lub być może zawiera ono błąd","NoResults_NoMath":"Niestety nie widzimy równania. Upewnij się, że jest wyraźne i w całości mieści się w ramce","MathWeb_ViewSteps":"View solution steps","Quiz_Try_Label":"Spróbuj rozwiązać quiz","MathAnswerView_Concepts":"Pojęcia powiązane","Generic_PDF":"PDF","MathAnswerView_Worksheets":"Arkusze z wyszukiwania w sieci web","MathAnswerView_Worksheets_Short":"Arkusze","MathAnswerView_RelatedPages":"Podobne zadania z wyszukiwania w sieci web","Results_Items":"elementów","Generic_Share":"Udostępnij","Generic_Copy":"Kopiuj","Share_CopiedToClipboard":"Skopiowano do schowka","Accessibility_MathAnswerView_PoweredByBing":"Obsługiwane przez Bing","MathAnswerView_PoweredByBing":"Obsługiwane przez","MathAnswerView_EquationIsFalse":"Fałsz","MathAnswerView_EquationIsTrue":"Prawda","Feedback_Thanks":"Dziękujemy!","Feedback_Title":"Czy te wyniki były przydatne?","MathAnswerView_DesktopUpsell_SectionHeader":"Dostępna wersja na komputer","SketchInput_ClearLabel":"Wyczyść szkic","SketchInput_Clear":"WYCZYŚĆ","SketchInput_PenLabel":"Użyj pióra","SketchInput_EraserLabel":"Użyj gumki","SketchInput_UndoLabel":"Cofnij ostatnie pociągnięcie","SketchInput_Info":"Narysuj zadanie poniżej","SketchInput_SubmitLabel":"Prześlij wyrażenie","Teams_Solve_Waiting":"Solving this expression...","Teams_RelatedTo":"Related To","MathWeb_PageTopicRootTitle":"Odkryj tematy matematyczne","MathWeb_PageTopicDescriptionFormat":"Poznaj {0} dzięki naszej bezpłatnej aplikacji matematycznej, która wyświetla rozwiązania krok po kroku."}}')

      },
      ERsv: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), a("VvCP").__exportStar(a("rLwW"), t)
      },
      FV21: function (e, t, a) {
         "use strict";

         function i(e) {
            for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
            for (var i = 0, o = t; i < o.length; i++) {
               var r = o[i];
               n(e || {}, r)
            }
            return e
         }

         function n(e, t, a) {
            for (var i in void 0 === a && (a = []), a.push(t), t)
               if (t.hasOwnProperty(i) && "__proto__" !== i && "constructor" !== i && "prototype" !== i) {
                  var o = t[i];
                  if ("object" == typeof o && null !== o) {
                     var r = a.indexOf(o) > -1;
                     e[i] = r ? o : n(e[i] || {}, o, a)
                  } else e[i] = o
               } return a.pop(), e
         }
         a.d(t, "a", (function () {
            return i
         }))
      },
      Ffok: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return Qe
         }));
         var i, n, o, r, s, _, l, u, c, g, h, p, b, d, M, m, S, T, f, y, v, W, L, E, C, w, k, P, A, I, O, R, D, z, N, G, B, F, Q, j, x, U, V, H, K, q, Y, J, Z, X, $, ee, te, ae, ie, ne, oe, re, se, _e, le, ue, ce, ge, he, pe, be, de, Me, me, Se, Te, fe, ye, ve, We, Le, Ee, Ce = a("a3ss"),
            we = a("Y65e"),
            ke = (a("+JCI"), a("eExt")),
            Pe = a("Sfje"),
            Ae = a("P95r"),
            Ie = (i = Object(ke.JsonProperty)("problemType", String, !0), n = Object(ke.JsonProperty)("stepTypes", [String], !0), o = Object(ke.JsonProperty)("market", String, !0), Object(ke.JsonObject)((s = function () {
               Object(Ce.a)(this, "problemType", _, this), Object(Ce.a)(this, "stepTypes", l, this), Object(Ce.a)(this, "market", u, this)
            }, _ = Object(we.a)(s.prototype, "problemType", [i], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), l = Object(we.a)(s.prototype, "stepTypes", [n], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), u = Object(we.a)(s.prototype, "market", [o], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return "en-us"
               }
            }), r = s)) || r),
            Oe = a("qkR8"),
            Re = (c = Object(ke.JsonProperty)("templateName", String, !0), g = Object(ke.JsonProperty)("steps", [Oe.a], !0), Object(ke.JsonObject)((p = function () {
               Object(Ce.a)(this, "templateName", b, this), Object(Ce.a)(this, "steps", d, this)
            }, b = Object(we.a)(p.prototype, "templateName", [c], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), d = Object(we.a)(p.prototype, "steps", [g], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), h = p)) || h),
            De = (M = Object(ke.JsonProperty)("actionName", String, !0), m = Object(ke.JsonProperty)("solution", String, !0), S = Object(ke.JsonProperty)("templateSteps", [Re], !0), T = Object(ke.JsonProperty)("shouldContainSteps", Boolean, !0), Object(ke.JsonObject)((y = function () {
               Object(Ce.a)(this, "actionName", v, this), Object(Ce.a)(this, "solution", W, this), Object(Ce.a)(this, "templateSteps", L, this), Object(Ce.a)(this, "shouldContainSteps", E, this)
            }, v = Object(we.a)(y.prototype, "actionName", [M], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), W = Object(we.a)(y.prototype, "solution", [m], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), L = Object(we.a)(y.prototype, "templateSteps", [S], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), E = Object(we.a)(y.prototype, "shouldContainSteps", [T], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return !1
               }
            }), f = y)) || f),
            ze = a("qNI8"),
            Ne = (C = Object(ke.JsonProperty)("problem", String, !0), w = Object(ke.JsonProperty)("problemCategory", String, !0), k = Object(ke.JsonProperty)("isError", Boolean, !0), P = Object(ke.JsonProperty)("errorCode", Number, !0), A = Object(ke.JsonProperty)("errorMessage", String, !0), I = Object(ke.JsonProperty)("actions", [De], !0), O = Object(ke.JsonProperty)("allGraphData", [ze.a], !0), R = Object(ke.JsonProperty)("bingWebAnswerUrl", String, !0), D = Object(ke.JsonProperty)("keyboardLatexInput", String, !0), z = Object(ke.JsonProperty)("hasBingWebAnswer", Boolean, !0), N = Object(ke.JsonProperty)("bingWebAnswerHeading", String, !0), G = Object(ke.JsonProperty)("shouldContainGraphs", Boolean, !0), B = Object(ke.JsonProperty)("detectedLatex", String, !0), Object(ke.JsonObject)((Q = function () {
               Object(Ce.a)(this, "problem", j, this), Object(Ce.a)(this, "problemCategory", x, this), Object(Ce.a)(this, "isError", U, this), Object(Ce.a)(this, "errorCode", V, this), Object(Ce.a)(this, "errorMessage", H, this), Object(Ce.a)(this, "actions", K, this), Object(Ce.a)(this, "allGraphData", q, this), Object(Ce.a)(this, "bingWebAnswerUrl", Y, this), Object(Ce.a)(this, "keyboardLatexInput", J, this), Object(Ce.a)(this, "hasBingWebAnswer", Z, this), Object(Ce.a)(this, "bingWebAnswerHeading", X, this), Object(Ce.a)(this, "shouldContainGraphs", $, this), Object(Ce.a)(this, "detectedLatex", ee, this)
            }, j = Object(we.a)(Q.prototype, "problem", [C], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), x = Object(we.a)(Q.prototype, "problemCategory", [w], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), U = Object(we.a)(Q.prototype, "isError", [k], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return !1
               }
            }), V = Object(we.a)(Q.prototype, "errorCode", [P], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return -1
               }
            }), H = Object(we.a)(Q.prototype, "errorMessage", [A], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), K = Object(we.a)(Q.prototype, "actions", [I], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), q = Object(we.a)(Q.prototype, "allGraphData", [O], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), Y = Object(we.a)(Q.prototype, "bingWebAnswerUrl", [R], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), J = Object(we.a)(Q.prototype, "keyboardLatexInput", [D], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), Z = Object(we.a)(Q.prototype, "hasBingWebAnswer", [z], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return !1
               }
            }), X = Object(we.a)(Q.prototype, "bingWebAnswerHeading", [N], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), $ = Object(we.a)(Q.prototype, "shouldContainGraphs", [G], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return !1
               }
            }), ee = Object(we.a)(Q.prototype, "detectedLatex", [B], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), F = Q)) || F),
            Ge = a("vWrG"),
            Be = a("XWgi"),
            Fe = a("Z/w7"),
            Qe = (te = Object(ke.JsonProperty)("topResult", Be.a, !0), ae = Object(ke.JsonProperty)("mathSolverResult", Ne, !0), ie = Object(ke.JsonProperty)("webResults", [Fe.a], !0), ne = Object(ke.JsonProperty)("errorMessage", String, !0), oe = Object(ke.JsonProperty)("isError", Boolean, !0), re = Object(ke.JsonProperty)("entities", [Pe.a], !0), se = Object(ke.JsonProperty)("videos", [Ae.a], !0), _e = Object(ke.JsonProperty)("generatedEquations", [String], !0), le = Object(ke.JsonProperty)("bingEduAnswerUrl", String, !0), ue = Object(ke.JsonProperty)("equationId", String, !0), ce = Object(ke.JsonProperty)("customBingQueries", Ie, !0), ge = Object(ke.JsonProperty)("workSheets", [Ge.a], !0), Object(ke.JsonObject)((pe = function () {
               function e() {
                  Object(Ce.a)(this, "topResult", be, this), Object(Ce.a)(this, "mathSolverResult", de, this), Object(Ce.a)(this, "webResults", Me, this), Object(Ce.a)(this, "errorMessage", me, this), Object(Ce.a)(this, "isError", Se, this), Object(Ce.a)(this, "entities", Te, this), Object(Ce.a)(this, "videos", fe, this), Object(Ce.a)(this, "generatedEquations", ye, this), Object(Ce.a)(this, "bingEduAnswerUrl", ve, this), Object(Ce.a)(this, "equationId", We, this), Object(Ce.a)(this, "customBingQueries", Le, this), Object(Ce.a)(this, "workSheets", Ee, this)
               }
               return e.HasGraph = function (e) {
                  return !!(e && e.mathSolverResult && e.mathSolverResult.allGraphData && e.mathSolverResult.allGraphData.length > 0)
               }, e.HasRelatedEntities = function (e) {
                  return !!(e.entities && e.entities.length > 0)
               }, e.HasRelatedVideos = function (e) {
                  return !!(e.videos && e.videos.length > 0)
               }, e.GraphData = function (e) {
                  return e.mathSolverResult ? e.mathSolverResult.allGraphData : []
               }, e.HasSteps = function (e) {
                  return e && null != e.mathSolverResult && e.mathSolverResult.actions && e.mathSolverResult.actions.length > 0 && e.mathSolverResult.actions[0].templateSteps && e.mathSolverResult.actions[0].templateSteps.length > 0
               }, e.HasWorksheets = function (e) {
                  return e && e.workSheets && e.workSheets.length > 0
               }, e.HasRelatedProblems = function (e) {
                  return e && e.webResults && e.webResults.length > 0
               }, e
            }(), be = Object(we.a)(pe.prototype, "topResult", [te], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return null
               }
            }), de = Object(we.a)(pe.prototype, "mathSolverResult", [ae], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return null
               }
            }), Me = Object(we.a)(pe.prototype, "webResults", [ie], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), me = Object(we.a)(pe.prototype, "errorMessage", [ne], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), Se = Object(we.a)(pe.prototype, "isError", [oe], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return !1
               }
            }), Te = Object(we.a)(pe.prototype, "entities", [re], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), fe = Object(we.a)(pe.prototype, "videos", [se], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), ye = Object(we.a)(pe.prototype, "generatedEquations", [_e], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), ve = Object(we.a)(pe.prototype, "bingEduAnswerUrl", [le], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), We = Object(we.a)(pe.prototype, "equationId", [ue], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), Le = Object(we.a)(pe.prototype, "customBingQueries", [ce], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return null
               }
            }), Ee = Object(we.a)(pe.prototype, "workSheets", [ge], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), he = pe)) || he)
      },
      Fw86: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("VvCP"),
            n = a("IcFl"),
            o = a("2dVK"),
            r = a("9ik2"),
            s = o.classNamesFunction(),
            _ = function (e) {
               function t(t) {
                  var a = e.call(this, t) || this;
                  return a._coverStyle = r.ImageCoverStyle.portrait, a._imageElement = n.createRef(), a._frameElement = n.createRef(), a._onImageLoaded = function (e) {
                     var t = a.props,
                        i = t.src,
                        n = t.onLoad;
                     n && n(e), a._computeCoverStyle(a.props), i && a.setState({
                        loadState: r.ImageLoadState.loaded
                     })
                  }, a._onImageError = function (e) {
                     a.props.onError && a.props.onError(e), a.setState({
                        loadState: r.ImageLoadState.error
                     })
                  }, a.state = {
                     loadState: r.ImageLoadState.notLoaded
                  }, a
               }
               return i.__extends(t, e), t.prototype.UNSAFE_componentWillReceiveProps = function (e) {
                  e.src !== this.props.src ? this.setState({
                     loadState: r.ImageLoadState.notLoaded
                  }) : this.state.loadState === r.ImageLoadState.loaded && this._computeCoverStyle(e)
               }, t.prototype.componentDidUpdate = function (e, t) {
                  this._checkImageLoaded(), this.props.onLoadingStateChange && t.loadState !== this.state.loadState && this.props.onLoadingStateChange(this.state.loadState)
               }, t.prototype.render = function () {
                  var e = o.getNativeProps(this.props, o.imgProperties, ["width", "height"]),
                     t = this.props,
                     a = t.src,
                     _ = t.alt,
                     l = t.width,
                     u = t.height,
                     c = t.shouldFadeIn,
                     g = t.shouldStartVisible,
                     h = t.className,
                     p = t.imageFit,
                     b = t.role,
                     d = t.maximizeFrame,
                     M = t.styles,
                     m = t.theme,
                     S = this.state.loadState,
                     T = void 0 !== this.props.coverStyle ? this.props.coverStyle : this._coverStyle,
                     f = s(M, {
                        theme: m,
                        className: h,
                        width: l,
                        height: u,
                        maximizeFrame: d,
                        shouldFadeIn: c,
                        shouldStartVisible: g,
                        isLoaded: S === r.ImageLoadState.loaded || S === r.ImageLoadState.notLoaded && this.props.shouldStartVisible,
                        isLandscape: T === r.ImageCoverStyle.landscape,
                        isCenter: p === r.ImageFit.center,
                        isCenterContain: p === r.ImageFit.centerContain,
                        isCenterCover: p === r.ImageFit.centerCover,
                        isContain: p === r.ImageFit.contain,
                        isCover: p === r.ImageFit.cover,
                        isNone: p === r.ImageFit.none,
                        isError: S === r.ImageLoadState.error,
                        isNotImageFit: void 0 === p
                     });
                  return n.createElement("div", {
                     className: f.root,
                     style: {
                        width: l,
                        height: u
                     },
                     ref: this._frameElement
                  }, n.createElement("img", i.__assign({}, e, {
                     onLoad: this._onImageLoaded,
                     onError: this._onImageError,
                     key: "fabricImage" + this.props.src || "",
                     className: f.image,
                     ref: this._imageElement,
                     src: a,
                     alt: _,
                     role: b
                  })))
               }, t.prototype._checkImageLoaded = function () {
                  var e = this.props.src;
                  this.state.loadState === r.ImageLoadState.notLoaded && (!!this._imageElement.current && (e && this._imageElement.current.naturalWidth > 0 && this._imageElement.current.naturalHeight > 0 || this._imageElement.current.complete && t._svgRegex.test(e)) && (this._computeCoverStyle(this.props), this.setState({
                     loadState: r.ImageLoadState.loaded
                  })))
               }, t.prototype._computeCoverStyle = function (e) {
                  var t = e.imageFit,
                     a = e.width,
                     i = e.height;
                  if ((t === r.ImageFit.cover || t === r.ImageFit.contain || t === r.ImageFit.centerContain || t === r.ImageFit.centerCover) && void 0 === this.props.coverStyle && this._imageElement.current && this._frameElement.current) {
                     var n = void 0;
                     n = "number" == typeof a && "number" == typeof i && t !== r.ImageFit.centerContain && t !== r.ImageFit.centerCover ? a / i : this._frameElement.current.clientWidth / this._frameElement.current.clientHeight;
                     var o = this._imageElement.current.naturalWidth / this._imageElement.current.naturalHeight;
                     this._coverStyle = o > n ? r.ImageCoverStyle.landscape : r.ImageCoverStyle.portrait
                  }
               }, t.defaultProps = {
                  shouldFadeIn: !0
               }, t._svgRegex = /\.svg$/i, t
            }(n.Component);
         t.ImageBase = _
      },
      "G4/H": function (e, t, a) {
         "use strict";
         a.r(t), a.d(t, "setVersion", (function () {
            return o
         }));
         var i = {},
            n = void 0;
         try {
            n = window
         } catch (r) {}

         function o(e, t) {
            if (void 0 !== n) {
               var a = n.__packages__ = n.__packages__ || {};
               if (!a[e] || !i[e]) i[e] = t, (a[e] = a[e] || []).push(t)
            }
         }
         o("@uifabric/set-version", "6.0.0")
      },
      GMhO: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("d6cv"),
            n = function () {
               function e(e, t) {
                  this._timeoutIds = null, this._immediateIds = null, this._intervalIds = null, this._animationFrameIds = null, this._isDisposed = !1, this._parent = e || null, this._onErrorHandler = t, this._noop = function () {}
               }
               return e.prototype.dispose = function () {
                  var e;
                  if (this._isDisposed = !0, this._parent = null, this._timeoutIds) {
                     for (e in this._timeoutIds) this._timeoutIds.hasOwnProperty(e) && this.clearTimeout(parseInt(e, 10));
                     this._timeoutIds = null
                  }
                  if (this._immediateIds) {
                     for (e in this._immediateIds) this._immediateIds.hasOwnProperty(e) && this.clearImmediate(parseInt(e, 10));
                     this._immediateIds = null
                  }
                  if (this._intervalIds) {
                     for (e in this._intervalIds) this._intervalIds.hasOwnProperty(e) && this.clearInterval(parseInt(e, 10));
                     this._intervalIds = null
                  }
                  if (this._animationFrameIds) {
                     for (e in this._animationFrameIds) this._animationFrameIds.hasOwnProperty(e) && this.cancelAnimationFrame(parseInt(e, 10));
                     this._animationFrameIds = null
                  }
               }, e.prototype.setTimeout = function (e, t) {
                  var a = this,
                     i = 0;
                  return this._isDisposed || (this._timeoutIds || (this._timeoutIds = {}), i = setTimeout((function () {
                     try {
                        a._timeoutIds && delete a._timeoutIds[i], e.apply(a._parent)
                     } catch (t) {
                        a._onErrorHandler && a._onErrorHandler(t)
                     }
                  }), t), this._timeoutIds[i] = !0), i
               }, e.prototype.clearTimeout = function (e) {
                  this._timeoutIds && this._timeoutIds[e] && (clearTimeout(e), delete this._timeoutIds[e])
               }, e.prototype.setImmediate = function (e, t) {
                  var a = this,
                     n = 0,
                     o = Object(i.a)(t);
                  if (!this._isDisposed) {
                     this._immediateIds || (this._immediateIds = {});
                     n = o.setTimeout((function () {
                        try {
                           a._immediateIds && delete a._immediateIds[n], e.apply(a._parent)
                        } catch (t) {
                           a._logError(t)
                        }
                     }), 0), this._immediateIds[n] = !0
                  }
                  return n
               }, e.prototype.clearImmediate = function (e, t) {
                  var a = Object(i.a)(t);
                  this._immediateIds && this._immediateIds[e] && (a.clearTimeout(e), delete this._immediateIds[e])
               }, e.prototype.setInterval = function (e, t) {
                  var a = this,
                     i = 0;
                  return this._isDisposed || (this._intervalIds || (this._intervalIds = {}), i = setInterval((function () {
                     try {
                        e.apply(a._parent)
                     } catch (t) {
                        a._logError(t)
                     }
                  }), t), this._intervalIds[i] = !0), i
               }, e.prototype.clearInterval = function (e) {
                  this._intervalIds && this._intervalIds[e] && (clearInterval(e), delete this._intervalIds[e])
               }, e.prototype.throttle = function (e, t, a) {
                  var i = this;
                  if (this._isDisposed) return this._noop;
                  var n, o, r = t || 0,
                     s = !0,
                     _ = !0,
                     l = 0,
                     u = null;
                  a && "boolean" == typeof a.leading && (s = a.leading), a && "boolean" == typeof a.trailing && (_ = a.trailing);
                  var c = function t(a) {
                     var c = (new Date).getTime(),
                        g = c - l,
                        h = s ? r - g : r;
                     return g >= r && (!a || s) ? (l = c, u && (i.clearTimeout(u), u = null), n = e.apply(i._parent, o)) : null === u && _ && (u = i.setTimeout(t, h)), n
                  };
                  return function () {
                     for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                     return o = e, c(!0)
                  }
               }, e.prototype.debounce = function (e, t, a) {
                  var i = this;
                  if (this._isDisposed) {
                     var n = function () {};
                     return n.cancel = function () {}, n.flush = function () {
                        return null
                     }, n.pending = function () {
                        return !1
                     }, n
                  }
                  var o, r, s = t || 0,
                     _ = !1,
                     l = !0,
                     u = null,
                     c = 0,
                     g = (new Date).getTime(),
                     h = null;
                  a && "boolean" == typeof a.leading && (_ = a.leading), a && "boolean" == typeof a.trailing && (l = a.trailing), a && "number" == typeof a.maxWait && !isNaN(a.maxWait) && (u = a.maxWait);
                  var p = function (e) {
                        h && (i.clearTimeout(h), h = null), g = e
                     },
                     b = function (t) {
                        p(t), o = e.apply(i._parent, r)
                     },
                     d = function e(t) {
                        var a = (new Date).getTime(),
                           n = !1;
                        t && (_ && a - c >= s && (n = !0), c = a);
                        var r = a - c,
                           p = s - r,
                           d = a - g,
                           M = !1;
                        return null !== u && (d >= u && h ? M = !0 : p = Math.min(p, u - d)), r >= s || M || n ? b(a) : null !== h && t || !l || (h = i.setTimeout(e, p)), o
                     },
                     M = function () {
                        return !!h
                     },
                     m = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return r = e, d(!0)
                     };
                  return m.cancel = function () {
                     M() && p((new Date).getTime())
                  }, m.flush = function () {
                     return M() && b((new Date).getTime()), o
                  }, m.pending = M, m
               }, e.prototype.requestAnimationFrame = function (e, t) {
                  var a = this,
                     n = 0,
                     o = Object(i.a)(t);
                  if (!this._isDisposed) {
                     this._animationFrameIds || (this._animationFrameIds = {});
                     var r = function () {
                        try {
                           a._animationFrameIds && delete a._animationFrameIds[n], e.apply(a._parent)
                        } catch (t) {
                           a._logError(t)
                        }
                     };
                     n = o.requestAnimationFrame ? o.requestAnimationFrame(r) : o.setTimeout(r, 0), this._animationFrameIds[n] = !0
                  }
                  return n
               }, e.prototype.cancelAnimationFrame = function (e, t) {
                  var a = Object(i.a)(t);
                  this._animationFrameIds && this._animationFrameIds[e] && (a.cancelAnimationFrame ? a.cancelAnimationFrame(e) : a.clearTimeout(e), delete this._animationFrameIds[e])
               }, e.prototype._logError = function (e) {
                  this._onErrorHandler && this._onErrorHandler(e)
               }, e
            }()
      },
      H8nO: function (e, t, a) {
         "use strict";
         var i = a("IcFl"),
            n = a.n(i),
            o = a("LmFU"),
            r = a("JEKr"),
            s = a("jPdf"),
            _ = a.n(s),
            l = a("ytTp"),
            u = a("D7qM"),
            c = a("rOzn"),
            g = a.n(c),
            h = a("HwWL"),
            p = a.n(h),
            b = function (e) {
               var t = e.children,
                  a = e.onPress,
                  i = void 0 === a ? function () {} : a,
                  o = e.onLongPress,
                  r = void 0 === o ? function () {} : o;
               return n.a.createElement(g.a, {
                  onLongPress: r,
                  onShortPress: i,
                  longPressTime: 700
               }, n.a.createElement("div", {
                  className: p.a.touchableOpacity
               }, t))
            };
         t.a = function (e) {
            var t = e.className,
               a = e.expression,
               s = e.isScrollable,
               c = e.disableHint,
               g = Object(i.useContext)(l.a).clientType,
               h = {
                  strict: !1,
                  output: "html",
                  delimiters: [{
                     left: "$$",
                     right: "$$",
                     display: !0
                  }, {
                     left: "$",
                     right: "$",
                     display: !1
                  }]
               };
            if (!a) return null;
            return n.a.createElement(n.a.Fragment, null, !0 !== c && n.a.createElement("div", {
               className: "hidden"
            }, " ", a.replace(/\$/g, "")), n.a.createElement("div", {
               className: t
            }, n.a.createElement(b, {
               onLongPress: function () {
                  if ("app" === g) {
                     var e = a;
                     try {
                        e = Object(r.b)(a)
                     } catch (t) {}
                     Object(u.a)(e)
                  }
               }
            }, n.a.createElement("div", {
               role: "math",
               dangerouslySetInnerHTML: {
                  __html: Object(o.a)(a, h)
               },
               "aria-label": Object(r.a)(a, h),
               className: _.a.mathExpression + " " + (s ? _.a.scrollable : "")
            }))))
         }
      },
      HCFE: function (e, t, a) {
         "use strict";
         a.d(t, "e", (function () {
            return _
         })), a.d(t, "h", (function () {
            return l
         })), a.d(t, "f", (function () {
            return u
         })), a.d(t, "i", (function () {
            return c
         })), a.d(t, "c", (function () {
            return g
         })), a.d(t, "k", (function () {
            return h
         })), a.d(t, "j", (function () {
            return p
         })), a.d(t, "o", (function () {
            return b
         })), a.d(t, "n", (function () {
            return d
         })), a.d(t, "m", (function () {
            return M
         })), a.d(t, "l", (function () {
            return m
         })), a.d(t, "a", (function () {
            return S
         })), a.d(t, "p", (function () {
            return T
         })), a.d(t, "b", (function () {
            return y
         })), a.d(t, "g", (function () {
            return v
         })), a.d(t, "d", (function () {
            return W
         }));
         var i = a("JDi1"),
            n = a("Vq28"),
            o = a("Wn9d"),
            r = a("d6cv"),
            s = a("AJs4");

         function _(e, t, a) {
            return p(e, t, !0, !1, !1, a)
         }

         function l(e, t, a) {
            return h(e, t, !0, !1, !0, a)
         }

         function u(e, t, a, i) {
            return void 0 === i && (i = !0), p(e, t, i, !1, !1, a, !1, !0)
         }

         function c(e, t, a, i) {
            return void 0 === i && (i = !0), h(e, t, i, !1, !0, a, !1, !0)
         }

         function g(e) {
            var t = p(e, e, !0, !1, !1, !0);
            return !!t && (y(t), !0)
         }

         function h(e, t, a, i, n, o, r, s) {
            if (!t || !r && t === e) return null;
            var _ = b(t);
            if (n && _ && (o || !M(t) && !m(t))) {
               var l = h(e, t.lastElementChild, !0, !0, !0, o, r, s);
               if (l) {
                  if (s && d(l, !0) || !s) return l;
                  var u = h(e, l.previousElementSibling, !0, !0, !0, o, r, s);
                  if (u) return u;
                  for (var c = l.parentElement; c && c !== t;) {
                     var g = h(e, c.previousElementSibling, !0, !0, !0, o, r, s);
                     if (g) return g;
                     c = c.parentElement
                  }
               }
            }
            if (a && _ && d(t, s)) return t;
            var p = h(e, t.previousElementSibling, !0, !0, !0, o, r, s);
            return p || (i ? null : h(e, t.parentElement, !0, !1, !1, o, r, s))
         }

         function p(e, t, a, i, n, o, r, s) {
            if (!t || t === e && n && !r) return null;
            var _ = b(t);
            if (a && _ && d(t, s)) return t;
            if (!n && _ && (o || !M(t) && !m(t))) {
               var l = p(e, t.firstElementChild, !0, !0, !1, o, r, s);
               if (l) return l
            }
            if (t === e) return null;
            var u = p(e, t.nextElementSibling, !0, !0, !1, o, r, s);
            return u || (i ? null : p(e, t.parentElement, !1, !1, !0, o, r, s))
         }

         function b(e) {
            if (!e || !e.getAttribute) return !1;
            var t = e.getAttribute("data-is-visible");
            return null != t ? "true" === t : 0 !== e.offsetHeight || null !== e.offsetParent || !0 === e.isVisible
         }

         function d(e, t) {
            if (!e || e.disabled) return !1;
            var a = 0,
               i = null;
            e && e.getAttribute && (i = e.getAttribute("tabIndex")) && (a = parseInt(i, 10));
            var n = e.getAttribute ? e.getAttribute("data-is-focusable") : null,
               o = null !== i && a >= 0,
               r = !!e && "false" !== n && ("A" === e.tagName || "BUTTON" === e.tagName || "INPUT" === e.tagName || "TEXTAREA" === e.tagName || "SELECT" === e.tagName || "true" === n || o);
            return t ? -1 !== a && r : r
         }

         function M(e) {
            return !!(e && e.getAttribute && e.getAttribute("data-focuszone-id"))
         }

         function m(e) {
            return !(!e || !e.getAttribute || "true" !== e.getAttribute("data-is-sub-focuszone"))
         }

         function S(e) {
            var t = Object(s.a)(e),
               a = t && t.activeElement;
            return !(!a || !Object(n.a)(e, a))
         }

         function T(e, t) {
            return "true" !== Object(i.a)(e, t)
         }
         var f = void 0;

         function y(e) {
            if (e) {
               if (f) return void(f = e);
               f = e;
               var t = Object(r.a)(e);
               t && t.requestAnimationFrame((function () {
                  f && f.focus(), f = void 0
               }))
            }
         }

         function v(e, t) {
            for (var a = e, i = 0, n = t; i < n.length; i++) {
               var o = n[i],
                  r = a.children[Math.min(o, a.children.length - 1)];
               if (!r) break;
               a = r
            }
            return a = d(a) && b(a) ? a : p(e, a, !0) || h(e, a)
         }

         function W(e, t) {
            for (var a = []; t && e && t !== e;) {
               var i = Object(o.a)(t, !0);
               if (null === i) return [];
               a.unshift(Array.prototype.indexOf.call(i.children, t)), t = i
            }
            return a
         }
      },
      "HaE+": function (e, t, a) {
         "use strict";

         function i(e, t, a, i, n, o, r) {
            try {
               var s = e[o](r),
                  _ = s.value
            } catch (l) {
               return void a(l)
            }
            s.done ? t(_) : Promise.resolve(_).then(i, n)
         }

         function n(e) {
            return function () {
               var t = this,
                  a = arguments;
               return new Promise((function (n, o) {
                  var r = e.apply(t, a);

                  function s(e) {
                     i(r, n, o, s, _, "next", e)
                  }

                  function _(e) {
                     i(r, n, o, s, _, "throw", e)
                  }
                  s(void 0)
               }))
            }
         }
         a.d(t, "a", (function () {
            return n
         }))
      },
      HwWL: function (e, t, a) {
         e.exports = {
            touchableOpacity: "TouchableOpacity-module--touchableOpacity--3QImZ"
         }
      },
      IMtK: function (e, t, a) {
         "use strict";
         var i = a("IcFl"),
            n = a.n(i).a.createContext({});
         t.a = n
      },
      JDi1: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("2gR7");

         function n(e, t) {
            var a = Object(i.a)(e, (function (e) {
               return e.hasAttribute(t)
            }));
            return a && a.getAttribute(t)
         }
      },
      JEKr: function (e, t, a) {
         "use strict";
         a.d(t, "b", (function () {
            return S
         }));
         var i = a("Juo3"),
            n = a.n(i),
            o = {
               "(": "left parenthesis",
               ")": "right parenthesis",
               "[": "open bracket",
               "]": "close bracket",
               "\\{": "left brace",
               "\\}": "right brace",
               "\\lvert": "open vertical bar",
               "\\rvert": "close vertical bar",
               "|": "vertical bar",
               "\\uparrow": "up arrow",
               "\\Uparrow": "up arrow",
               "\\downarrow": "down arrow",
               "\\Downarrow": "down arrow",
               "\\updownarrow": "up down arrow",
               "\\leftarrow": "left arrow",
               "\\Leftarrow": "left arrow",
               "\\rightarrow": "right arrow",
               "\\Rightarrow": "right arrow",
               "\\langle": "open angle",
               "\\rangle": "close angle",
               "\\lfloor": "open floor",
               "\\rfloor": "close floor",
               "\\int": "integral",
               "\\intop": "integral",
               "\\lim": "limit",
               "\\ln": "natural log",
               "\\log": "log",
               "\\sin": "sine",
               "\\cos": "cosine",
               "\\tan": "tangent",
               "\\cot": "cotangent",
               "\\sum": "sum",
               "/": "slash",
               ",": "comma",
               ".": "point",
               "-": "negative",
               "+": "plus",
               "~": "tilde",
               ":": "colon",
               "?": "question mark",
               "'": "apostrophe",
               "\\%": "percent",
               " ": "space",
               "\\ ": "space",
               "\\$": "dollar sign",
               "\\angle": "angle",
               "\\degree": "degree",
               "\\circ": "circle",
               "\\vec": "vector",
               "\\triangle": "triangle",
               "\\pi": "pi",
               "\\prime": "prime",
               "\\infty": "infinity",
               "\\alpha": "alpha",
               "\\beta": "beta",
               "\\gamma": "gamma",
               "\\omega": "omega",
               "\\theta": "theta",
               "\\sigma": "sigma",
               "\\lambda": "lambda",
               "\\tau": "tau",
               "\\Delta": "delta",
               "\\delta": "delta",
               "\\mu": "mu",
               "\\rho": "rho",
               "\\nabla": "del",
               "\\ell": "ell",
               "\\ldots": "dots",
               "\\hat": "hat",
               "\\acute": "acute"
            },
            r = {
               prime: "prime",
               degree: "degrees",
               circle: "degrees",
               2: "squared",
               3: "cubed"
            },
            s = {
               "|": "open vertical bar",
               ".": ""
            },
            _ = {
               "|": "close vertical bar",
               ".": ""
            },
            l = {
               "+": "plus",
               "-": "minus",
               "\\pm": "plus minus",
               "\\cdot": "dot",
               "*": "times",
               "/": "divided by",
               "\\times": "times",
               "\\div": "divided by",
               "\\circ": "circle",
               "\\bullet": "bullet"
            },
            u = {
               "=": "equals",
               "\\approx": "approximately equals",
               "≠": "does not equal",
               "\\geq": "is greater than or equal to",
               "\\ge": "is greater than or equal to",
               "\\leq": "is less than or equal to",
               "\\le": "is less than or equal to",
               ">": "is greater than",
               "<": "is less than",
               "\\leftarrow": "left arrow",
               "\\Leftarrow": "left arrow",
               "\\rightarrow": "right arrow",
               "\\Rightarrow": "right arrow",
               ":": "colon"
            },
            c = {
               "\\underleftarrow": "left arrow",
               "\\underrightarrow": "right arrow",
               "\\underleftrightarrow": "left-right arrow",
               "\\undergroup": "group",
               "\\underlinesegment": "line segment",
               "\\utilde": "tilde"
            },
            g = function (e, t, a) {
               var i;
               e && (/^\d+$/.test(i = "open" === t ? e in s ? s[e] : o[e] || e : "close" === t ? e in _ ? _[e] : o[e] || e : "bin" === t ? l[e] || e : "rel" === t ? u[e] || e : o[e] || e) && a.length > 0 && /^\d+$/.test(a[a.length - 1]) ? a[a.length - 1] += i : i && a.push(i))
            },
            h = function (e, t) {
               var a = [];
               e.push(a), t(a)
            },
            p = function (e, t, a) {
               switch (e.type) {
                  case "accent":
                     h(t, (function (t) {
                        b(e.base, t, a), t.push("with"), g(e.label, "normal", t), t.push("on top")
                     }));
                     break;
                  case "accentUnder":
                     h(t, (function (t) {
                        b(e.base, t, a), t.push("with"), g(c[e.label], "normal", t), t.push("underneath")
                     }));
                     break;
                  case "accent-token":
                     break;
                  case "atom":
                     var i = e.text;
                     switch (e.family) {
                        case "bin":
                           g(i, "bin", t);
                           break;
                        case "close":
                           g(i, "close", t);
                           break;
                        case "inner":
                           g(e.text, "inner", t);
                           break;
                        case "open":
                           g(i, "open", t);
                           break;
                        case "punct":
                           g(i, "punct", t);
                           break;
                        case "rel":
                           g(i, "rel", t);
                           break;
                        default:
                           throw e.family, new Error('"' + e.family + '" is not a valid atom type')
                     }
                     break;
                  case "color":
                     var n = e.color.replace(/katex-/, "");
                     h(t, (function (t) {
                        t.push("start color " + n), b(e.body, t, a), t.push("end color " + n)
                     }));
                     break;
                  case "color-token":
                     break;
                  case "delimsizing":
                     e.delim && "." !== e.delim && g(e.delim, "normal", t);
                     break;
                  case "genfrac":
                     h(t, (function (t) {
                        var i = e.leftDelim,
                           n = e.rightDelim;
                        e.hasBarLine ? (t.push("start fraction"), i && g(i, "open", t), b(e.numer, t, a), t.push("divided by"), b(e.denom, t, a), n && g(n, "close", t), t.push("end fraction")) : (t.push("start binomial"), i && g(i, "open", t), b(e.numer, t, a), t.push("over"), b(e.denom, t, a), n && g(n, "close", t), t.push("end binomial"))
                     }));
                     break;
                  case "kern":
                     break;
                  case "leftright":
                     h(t, (function (t) {
                        g(e.left, "open", t), b(e.body, t, a), g(e.right, "close", t)
                     }));
                     break;
                  case "leftright-right":
                     break;
                  case "lap":
                     b(e.body, t, a);
                     break;
                  case "mathord":
                     g(e.text, "normal", t);
                     break;
                  case "op":
                     var o = e.body,
                        s = e.name;
                     o ? b(o, t, a) : s && g(s, "normal", t);
                     break;
                  case "op-token":
                     g(e.text, a, t);
                     break;
                  case "ordgroup":
                     b(e.body, t, a);
                     break;
                  case "overline":
                     h(t, (function (t) {
                        t.push("start overline"), b(e.body, t, a), t.push("end overline")
                     }));
                     break;
                  case "phantom":
                     t.push("empty space");
                     break;
                  case "raisebox":
                     b(e.body, t, a);
                     break;
                  case "rule":
                     t.push("rectangle");
                     break;
                  case "sizing":
                     b(e.body, t, a);
                     break;
                  case "spacing":
                     t.push("space");
                     break;
                  case "styling":
                     b(e.body, t, a);
                     break;
                  case "sqrt":
                     h(t, (function (t) {
                        var i = e.body,
                           n = e.index;
                        if (n) return "3" === d(b(n, [], a)).join(",") ? (t.push("cube root of"), b(i, t, a), void t.push("end cube root")) : (t.push("root"), t.push("start index"), b(n, t, a), void t.push("end index"));
                        t.push("square root of"), b(i, t, a), t.push("end square root")
                     }));
                     break;
                  case "supsub":
                     var _ = e.base,
                        l = e.sub,
                        u = e.sup,
                        p = !1;
                     if (_ && (b(_, t, a), p = "op" === _.type && "\\log" === _.name), l) {
                        var M = p ? "base" : "subscript";
                        h(t, (function (e) {
                           e.push("start " + M), b(l, e, a), e.push("end " + M)
                        }))
                     }
                     u && h(t, (function (e) {
                        var t = d(b(u, [], a)).join(",");
                        t in r ? e.push(r[t]) : (e.push("start superscript"), b(u, e, a), e.push("end superscript"))
                     }));
                     break;
                  case "text":
                     if ("\\textbf" === e.font) {
                        h(t, (function (t) {
                           t.push("start bold text"), b(e.body, t, a), t.push("end bold text")
                        }));
                        break
                     }
                     h(t, (function (t) {
                        t.push("start text"), b(e.body, t, a), t.push("end text")
                     }));
                     break;
                  case "textord":
                     g(e.text, a, t);
                     break;
                  case "smash":
                     b(e.body, t, a);
                     break;
                  case "enclose":
                     if (/cancel/.test(e.label)) {
                        h(t, (function (t) {
                           t.push("start cancel"), b(e.body, t, a), t.push("end cancel")
                        }));
                        break
                     }
                     if (/box/.test(e.label)) {
                        h(t, (function (t) {
                           t.push("start box"), b(e.body, t, a), t.push("end box")
                        }));
                        break
                     }
                     if (/sout/.test(e.label)) {
                        h(t, (function (t) {
                           t.push("start strikeout"), b(e.body, t, a), t.push("end strikeout")
                        }));
                        break
                     }
                     throw new Error("KaTeX-a11y: enclose node with " + e.label + " not supported yet");
                  case "vphantom":
                     throw new Error("KaTeX-a11y: vphantom not implemented yet");
                  case "hphantom":
                     throw new Error("KaTeX-a11y: hphantom not implemented yet");
                  case "operatorname":
                     b(e.body, t, a);
                     break;
                  case "array":
                     throw new Error("KaTeX-a11y: array not implemented yet");
                  case "raw":
                     throw new Error("KaTeX-a11y: raw not implemented yet");
                  case "size":
                     break;
                  case "url":
                     throw new Error("KaTeX-a11y: url not implemented yet");
                  case "tag":
                     throw new Error("KaTeX-a11y: tag not implemented yet");
                  case "verb":
                     g("start verbatim", "normal", t), g(e.body, "normal", t), g("end verbatim", "normal", t);
                     break;
                  case "environment":
                     throw new Error("KaTeX-a11y: environment not implemented yet");
                  case "horizBrace":
                     g("start " + e.label.slice(1), "normal", t), b(e.base, t, a), g("end " + e.label.slice(1), "normal", t);
                     break;
                  case "infix":
                     break;
                  case "includegraphics":
                     throw new Error("KaTeX-a11y: includegraphics not implemented yet");
                  case "font":
                     b(e.body, t, a);
                     break;
                  case "href":
                     throw new Error("KaTeX-a11y: href not implemented yet");
                  case "cr":
                     throw new Error("KaTeX-a11y: cr not implemented yet");
                  case "underline":
                     h(t, (function (t) {
                        t.push("start underline"), b(e.body, t, a), t.push("end underline")
                     }));
                     break;
                  case "xArrow":
                     throw new Error("KaTeX-a11y: xArrow not implemented yet");
                  case "mclass":
                     var m = e.mclass.slice(1);
                     b(e.body, t, m);
                     break;
                  case "mathchoice":
                     b(e.text, t, a);
                     break;
                  case "htmlmathml":
                     b(e.mathml, t, a);
                     break;
                  case "middle":
                     g(e.delim, a, t);
                     break;
                  case "internal":
                     break;
                  case "html":
                     b(e.body, t, a);
                     break;
                  default:
                     throw e.type, new Error("KaTeX a11y un-recognized type: " + e.type)
               }
            },
            b = function e(t, a, i) {
               if (void 0 === a && (a = []), t instanceof Array)
                  for (var n = 0; n < t.length; n++) e(t[n], a, i);
               else p(t, a, i);
               return a
            },
            d = function e(t) {
               var a = [];
               return t.forEach((function (t) {
                  t instanceof Array ? a = a.concat(e(t)) : a.push(t)
               })), a
            },
            M = function (e, t) {
               var a = n.a.__parse(e, t),
                  i = b(a, [], "normal");
               return d(i).join(", ")
            },
            m = a("CzYp"),
            S = function (e, t) {
               void 0 === t && (t = function (e) {
                  return e
               });
               for (var a, i = /\$+(.*?)\$+/g, n = []; null !== (a = i.exec(e));) a.index === i.lastIndex && i.lastIndex++, n.push(a);
               for (var o = [], r = e.length; n.length > 0;) {
                  var s = n.pop();
                  if (!s) break;
                  var _ = s.index,
                     l = _ + s[0].length;
                  o.push(e.slice(l, r)), o.push(t(s[1])), r = _
               }
               return o.push(e.slice(0, r)), o.reduceRight((function (e, t) {
                  return e + t
               }))
            };
         t.a = function (e, t) {
            void 0 === t && (t = {});
            try {
               return S(e, (function (e) {
                  return M(e, t)
               }))
            } catch (a) {
               m.a.LogEvent("SafeRenderA11yError", a)
            }
            return e
         }
      },
      JhVl: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("vwdj"),
            n = a("X4G7"),
            o = a("vdsK"),
            r = function () {
               function e(e, t, a, n) {
                  this._operationMode = i.OperationMode.ENABLE, this._valueCheckingMode = i.ValueCheckingMode.ALLOW_OBJECT_NULL, this._ignorePrimitiveChecks = !1, this._propertyMatchingRule = i.PropertyMatchingRule.CASE_STRICT, void 0 !== e && e in i.OperationMode && (this.operationMode = e), void 0 !== t && t in i.ValueCheckingMode && (this.valueCheckingMode = t), void 0 !== a && (this.ignorePrimitiveChecks = a), void 0 !== n && (this.propertyMatchingRule = n)
               }
               return Object.defineProperty(e.prototype, "operationMode", {
                  get: function () {
                     return this._operationMode
                  },
                  set: function (e) {
                     e in i.OperationMode && (this._operationMode = e)
                  },
                  enumerable: !0,
                  configurable: !0
               }), Object.defineProperty(e.prototype, "valueCheckingMode", {
                  get: function () {
                     return this._valueCheckingMode
                  },
                  set: function (e) {
                     e in i.ValueCheckingMode && (this._valueCheckingMode = e)
                  },
                  enumerable: !0,
                  configurable: !0
               }), Object.defineProperty(e.prototype, "ignorePrimitiveChecks", {
                  get: function () {
                     return this._ignorePrimitiveChecks
                  },
                  set: function (e) {
                     this._ignorePrimitiveChecks = e
                  },
                  enumerable: !0,
                  configurable: !0
               }), Object.defineProperty(e.prototype, "propertyMatchingRule", {
                  get: function () {
                     return this._propertyMatchingRule
                  },
                  set: function (e) {
                     e in i.PropertyMatchingRule && (this._propertyMatchingRule = e)
                  },
                  enumerable: !0,
                  configurable: !0
               }), e.prototype.serialize = function (e) {
                  if (this.operationMode === i.OperationMode.DISABLE) return e;
                  if (e instanceof Array) return this.serializeArray(e);
                  if ("object" == typeof e) return this.serializeObject(e);
                  throw new Error("Fatal error in JsonConvert. Passed parameter data in JsonConvert.serialize() is not in valid format (object or array).\n")
               }, e.prototype.serializeObject = function (e) {
                  if (this.operationMode === i.OperationMode.DISABLE) return e;
                  if (void 0 === e) throw new Error("Fatal error in JsonConvert. Passed parameter instance in JsonConvert.serializeObject() is undefined. This is not a valid JSON format.\n");
                  if (null === e) {
                     if (this.valueCheckingMode === i.ValueCheckingMode.DISALLOW_NULL) throw new Error("Fatal error in JsonConvert. Passed parameter instance in JsonConvert.serializeObject() is undefined. You have specified to disallow null values.\n");
                     return e
                  }
                  if ("object" != typeof e || e instanceof Array) throw new Error("Fatal error in JsonConvert. Passed parameter instance in JsonConvert.serializeObject() is not of type object.\n");
                  this.operationMode === i.OperationMode.LOGGING && (console.log("----------"), console.log("Receiving JavaScript instance:"), console.log(e));
                  for (var t = {}, a = 0, n = Object.keys(e); a < n.length; a++) {
                     var o = n[a];
                     this.serializeObject_loopProperty(e, o, t)
                  }
                  return this.operationMode === i.OperationMode.LOGGING && (console.log("Returning JSON object:"), console.log(t), console.log("----------")), t
               }, e.prototype.serializeArray = function (e) {
                  if (this.operationMode === i.OperationMode.DISABLE) return e;
                  if (void 0 === e) throw new Error("Fatal error in JsonConvert. Passed parameter instanceArray in JsonConvert.serializeArray() is undefined. This is not a valid JSON format.\n");
                  if (null === e) {
                     if (this.valueCheckingMode === i.ValueCheckingMode.DISALLOW_NULL) throw new Error("Fatal error in JsonConvert. Passed parameter instanceArray in JsonConvert.serializeArray() is undefined. You have specified to disallow null values.\n");
                     return e
                  }
                  if ("object" != typeof e || e instanceof Array == !1) throw new Error("Fatal error in JsonConvert. Passed parameter instanceArray in JsonConvert.serializeArray() is not of type array.\n");
                  this.operationMode === i.OperationMode.LOGGING && (console.log("----------"), console.log("Receiving JavaScript array:"), console.log(e));
                  for (var t = [], a = 0, n = e; a < n.length; a++) {
                     var o = n[a];
                     t.push(this.serializeObject(o))
                  }
                  return this.operationMode === i.OperationMode.LOGGING && (console.log("Returning JSON array:"), console.log(t), console.log("----------")), t
               }, e.prototype.deserialize = function (e, t) {
                  if (this.operationMode === i.OperationMode.DISABLE) return e;
                  if (e instanceof Array) return this.deserializeArray(e, t);
                  if ("object" == typeof e) return this.deserializeObject(e, t);
                  throw new Error("Fatal error in JsonConvert. Passed parameter json in JsonConvert.deserialize() is not in valid JSON format (object or array).\n")
               }, e.prototype.deserializeObject = function (e, t) {
                  if (this.operationMode === i.OperationMode.DISABLE) return e;
                  if (void 0 === e) throw new Error("Fatal error in JsonConvert. Passed parameter jsonObject in JsonConvert.deserializeObject() is undefined. This is not a valid JSON format.\n");
                  if (null === e) {
                     if (this.valueCheckingMode === i.ValueCheckingMode.DISALLOW_NULL) throw new Error("Fatal error in JsonConvert. Passed parameter jsonObject in JsonConvert.deserializeObject() is undefined. You have specified to disallow null values.\n");
                     return e
                  }
                  if ("object" != typeof e || e instanceof Array) throw new Error("Fatal error in JsonConvert. Passed parameter jsonObject in JsonConvert.deserializeObject() is not of type object.\n");
                  this.operationMode === i.OperationMode.LOGGING && (console.log("----------"), console.log("Receiving JSON object:"), console.log(e));
                  for (var a = new t, n = 0, o = Object.keys(a); n < o.length; n++) {
                     var r = o[n];
                     this.deserializeObject_loopProperty(a, r, e)
                  }
                  return this.operationMode === i.OperationMode.LOGGING && (console.log("Returning CLASS instance:"), console.log(a), console.log("----------")), a
               }, e.prototype.deserializeArray = function (e, t) {
                  if (this.operationMode === i.OperationMode.DISABLE) return e;
                  if (void 0 === e) throw new Error("Fatal error in JsonConvert. Passed parameter jsonArray in JsonConvert.deserializeObject() is undefined. This is not a valid JSON format.\n");
                  if (null === e) {
                     if (this.valueCheckingMode === i.ValueCheckingMode.DISALLOW_NULL) throw new Error("Fatal error in JsonConvert. Passed parameter jsonArray in JsonConvert.deserializeObject() is undefined. You have specified to disallow null values.\n");
                     return e
                  }
                  if ("object" != typeof e || e instanceof Array == !1) throw new Error("Fatal error in JsonConvert. Passed parameter jsonArray in JsonConvert.deserializeArray() is not of type array.\n");
                  if (this.operationMode === i.OperationMode.DISABLE) return e;
                  this.operationMode === i.OperationMode.LOGGING && (console.log("----------"), console.log("Receiving JSON array:"), console.log(e));
                  for (var a = [], n = 0, o = e; n < o.length; n++) {
                     var r = o[n];
                     a.push(this.deserializeObject(r, t))
                  }
                  return this.operationMode === i.OperationMode.LOGGING && (console.log("Returning array of CLASS instances:"), console.log(a), console.log("----------")), a
               }, e.prototype.serializeObject_loopProperty = function (e, t, a) {
                  var i = this.getClassPropertyMappingOptions(e, t);
                  if (null !== i) {
                     var o = i.jsonPropertyName,
                        r = i.expectedJsonType,
                        s = i.isOptional,
                        _ = i.customConverter,
                        l = e[t];
                     if (void 0 === l) {
                        if (s) return;
                        throw new Error('Fatal error in JsonConvert. Failed to map the JavaScript instance of class "' + e[n.Settings.CLASS_IDENTIFIER] + '" to JSON because the defined class property "' + t + '" does not exist or is not defined:\n\n\tClass property: \n\t\t' + t + "\n\n\tJSON property: \n\t\t" + o + "\n\n")
                     }
                     if (!s || null !== l) try {
                        a[o] = null !== _ ? _.serialize(l) : this.verifyProperty(r, l, !0)
                     } catch (u) {
                        throw new Error('Fatal error in JsonConvert. Failed to map the JavaScript instance of class "' + e[n.Settings.CLASS_IDENTIFIER] + '" to JSON because of a type error.\n\n\tClass property: \n\t\t' + t + "\n\n\tClass property value: \n\t\t" + l + "\n\n\tExpected type: \n\t\t" + this.getExpectedType(r) + "\n\n\tRuntime type: \n\t\t" + this.getTrueType(l) + "\n\n\tJSON property: \n\t\t" + o + "\n\n" + u.message + "\n")
                     }
                  }
               }, e.prototype.deserializeObject_loopProperty = function (e, t, a) {
                  var i = this.getClassPropertyMappingOptions(e, t);
                  if (null !== i) {
                     var o = i.jsonPropertyName,
                        r = i.expectedJsonType,
                        s = i.isOptional,
                        _ = i.customConverter,
                        l = void 0;
                     try {
                        l = this.getObjectValue(a, o)
                     } catch (u) {}
                     if (void 0 === l) {
                        if (s) return;
                        throw new Error('Fatal error in JsonConvert. Failed to map the JSON object to the class "' + e[n.Settings.CLASS_IDENTIFIER] + '" because the defined JSON property "' + o + '" does not exist:\n\n\tClass property: \n\t\t' + t + "\n\n\tJSON property: \n\t\t" + o + "\n\n")
                     }
                     if (!s || null !== l) try {
                        e[t] = null !== _ ? _.deserialize(l) : this.verifyProperty(r, l)
                     } catch (c) {
                        throw new Error('Fatal error in JsonConvert. Failed to map the JSON object to the class "' + e[n.Settings.CLASS_IDENTIFIER] + '" because of a type error.\n\n\tClass property: \n\t\t' + t + "\n\n\tExpected type: \n\t\t" + this.getExpectedType(r) + "\n\n\tJSON property: \n\t\t" + o + "\n\n\tJSON type: \n\t\t" + this.getJsonType(l) + "\n\n\tJSON value: \n\t\t" + JSON.stringify(l) + "\n\n" + c.message + "\n")
                     }
                  }
               }, e.prototype.getClassPropertyMappingOptions = function (e, t) {
                  var a = e[n.Settings.MAPPING_PROPERTY];
                  if (void 0 === a) return null;
                  var i = e[n.Settings.CLASS_IDENTIFIER] + "." + t;
                  if (void 0 !== a[i]) return a[i];
                  var o = Object.keys(a).filter((function (e) {
                     return e.match("\\." + t + "$")
                  }));
                  return o.length > 0 ? a[o[0]] : null
               }, e.prototype.verifyProperty = function (e, t, a) {
                  if (e === o.Any || null === e || e === Object) return t;
                  if (e instanceof Array == !1 && t instanceof Array == !1) {
                     if (void 0 !== e && e.prototype.hasOwnProperty(n.Settings.CLASS_IDENTIFIER)) {
                        if (null === t) {
                           if (this.valueCheckingMode !== i.ValueCheckingMode.DISALLOW_NULL) return null;
                           throw new Error("\tReason: Given value is null.")
                        }
                        return a ? this.serializeObject(t) : this.deserializeObject(t, e)
                     }
                     if (e === o.Any || null === e || e === Object) {
                        if (null === t) {
                           if (this.valueCheckingMode !== i.ValueCheckingMode.DISALLOW_NULL) return null;
                           throw new Error("\tReason: Given value is null.")
                        }
                        return t
                     }
                     if (e === String || e === Number || e === Boolean) {
                        if (null === t) {
                           if (this.valueCheckingMode === i.ValueCheckingMode.ALLOW_NULL) return null;
                           throw new Error("\tReason: Given value is null.")
                        }
                        if (e === String && "string" == typeof t || e === Number && "number" == typeof t || e === Boolean && "boolean" == typeof t) return t;
                        if (this.ignorePrimitiveChecks) return t;
                        throw new Error("\tReason: Given object does not match the expected primitive type.")
                     }
                     throw new Error("\tReason: Expected type is unknown. There might be multiple reasons for this:\n\t- You are missing the decorator @JsonObject (for object mapping)\n\t- You are missing the decorator @JsonConverter (for custom mapping) before your class definition\n\t- Your given class is undefined in the decorator because of circular dependencies")
                  }
                  if (e instanceof Array && t instanceof Array) {
                     var r = [];
                     if (0 === t.length) return r;
                     if (0 === e.length) return t;
                     for (var s = e.length < t.length, _ = 0; _ < t.length; _++) s && _ >= e.length && (e[_] = e[_ - 1]), r[_] = this.verifyProperty(e[_], t[_], a);
                     return r
                  }
                  if (e instanceof Array && t instanceof Object) {
                     r = [];
                     if (0 === t.length) return r;
                     if (0 === e.length) return t;
                     s = e.length < Object.keys(t).length, _ = 0;
                     for (var l in t) s && _ >= e.length && (e[_] = e[_ - 1]), r[l] = this.verifyProperty(e[_], t[l]), _++;
                     return r
                  }
                  if (e instanceof Array) {
                     if (null === t) {
                        if (this.valueCheckingMode !== i.ValueCheckingMode.DISALLOW_NULL) return null;
                        throw new Error("\tReason: Given value is null.")
                     }
                     throw new Error("\tReason: Expected type is array, but given value is non-array.")
                  }
                  if (t instanceof Array) throw new Error("\tReason: Given value is array, but expected a non-array type.");
                  throw new Error("\tReason: Mapping failed because of an unknown error.")
               }, e.prototype.getObjectValue = function (e, t) {
                  if (this.propertyMatchingRule === i.PropertyMatchingRule.CASE_INSENSITIVE) {
                     var a = Object.keys(e).reduce((function (e, t) {
                        return e[t.toLowerCase()] = t, e
                     }), {});
                     t = a[t.toLowerCase()]
                  }
                  if (t in e == !1) throw new Error;
                  return e[t]
               }, e.prototype.getExpectedType = function (e) {
                  var t = "";
                  if (e instanceof Array) {
                     t = "[";
                     for (var a = 0; a < e.length; a++) a > 0 && (t += ","), t += this.getExpectedType(e[a]);
                     return t += "]"
                  }
                  return e === o.Any || null === e || e === Object ? "any" : e === String || e === Boolean || e === Number ? (new e).constructor.name.toLowerCase() : "function" == typeof e ? (new e).constructor.name : void 0 === e ? "undefined" : "?????"
               }, e.prototype.getJsonType = function (e) {
                  if (null === e) return "null";
                  var t = "";
                  if (e instanceof Array) {
                     t = "[";
                     for (var a = 0; a < e.length; a++) a > 0 && (t += ","), t += this.getJsonType(e[a]);
                     return t += "]"
                  }
                  return typeof e
               }, e.prototype.getTrueType = function (e) {
                  return typeof e
               }, e
            }();
         t.JsonConvert = r
      },
      KEqS: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return i
         })), a.d(t, "b", (function () {
            return n
         }));
         var i = !1;

         function n(e) {
            i = e
         }
      },
      L2rz: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
               value: !0
            }),
            function (e) {
               e[e.default = 0] = "default", e[e.image = 1] = "image", e[e.Default = 1e5] = "Default", e[e.Image = 100001] = "Image"
            }(t.IconType || (t.IconType = {}))
      },
      L6Cy: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return o
         }));
         var i = a("2gR7"),
            n = a("tj/O");

         function o(e, t) {
            var a = Object(i.a)(e, (function (e) {
               return t === e || e.hasAttribute(n.a)
            }));
            return null !== a && a.hasAttribute(n.a)
         }
      },
      LmFU: function (e, t, a) {
         "use strict";
         var i = a("Juo3"),
            n = a.n(i),
            o = function (e, t, a) {
               for (var i = a, n = 0, o = e.length; i < t.length;) {
                  var r = t[i];
                  if (n <= 0 && t.slice(i, i + o) === e) return i;
                  "\\" === r ? i++ : "{" === r ? n++ : "}" === r && n--, i++
               }
               return -1
            },
            r = function (e, t, a, i) {
               for (var n = [], r = 0; r < e.length; r++)
                  if ("text" === e[r].type) {
                     var s = e[r].data,
                        _ = !0,
                        l = 0,
                        u = void 0;
                     for (-1 !== (u = s.indexOf(t)) && (l = u, n.push({
                           type: "text",
                           data: s.slice(0, l)
                        }), _ = !1);;) {
                        if (_) {
                           if (-1 === (u = s.indexOf(t, l))) break;
                           n.push({
                              type: "text",
                              data: s.slice(l, u)
                           }), l = u
                        } else {
                           if (-1 === (u = o(a, s, l + t.length))) break;
                           n.push({
                              type: "math",
                              data: s.slice(l + t.length, u),
                              rawData: s.slice(l, u + a.length),
                              display: i
                           }), l = u + a.length
                        }
                        _ = !_
                     }
                     n.push({
                        type: "text",
                        data: s.slice(l)
                     })
                  } else n.push(e[r]);
               return n
            },
            s = function (e, t) {
               var a = function (e, t) {
                  for (var a = [{
                        type: "text",
                        data: e
                     }], i = 0; i < t.length; i++) {
                     var n = t[i];
                     a = r(a, n.left, n.right, n.display || !1)
                  }
                  return a
               }(e, t.delimiters);
               if (1 === a.length && "text" === a[0].type) return e;
               for (var i = "", o = 0; o < a.length; o++)
                  if ("text" === a[o].type) i += a[o].data;
                  else {
                     t.displayMode = a[o].display;
                     try {
                        i += n.a.renderToString(a[o].data, t)
                     } catch (s) {}
                  } return i
            };
         t.a = function (e, t) {
            if (!e) throw new Error("No element provided to render");
            var a = {};
            for (var i in t) t.hasOwnProperty(i) && (a[i] = t[i]);
            return a.delimiters = a.delimiters || [{
               left: "$$",
               right: "$$",
               display: !0
            }, {
               left: "\\(",
               right: "\\)",
               display: !1
            }, {
               left: "\\[",
               right: "\\]",
               display: !0
            }], a.ignoredTags = a.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code", "option"], a.ignoredClasses = a.ignoredClasses || [], a.errorCallback = a.errorCallback || console.error, a.macros = a.macros || {}, s(e, a)
         }
      },
      M50z: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("b3tr");
         t.classNames = i.mergeStyleSets({
            root: {
               display: "inline-block"
            },
            placeholder: ["ms-Icon-placeHolder", {
               width: "1em"
            }],
            image: ["ms-Icon-imageContainer", {
               overflow: "hidden"
            }]
         }), t.MS_ICON = "ms-Icon", t.getStyles = function (e) {
            var a = e.className,
               i = e.iconClassName,
               n = e.isPlaceholder,
               o = e.isImage,
               r = e.styles;
            return {
               root: [n && t.classNames.placeholder, t.classNames.root, o && t.classNames.image, i, a, r && r.root, r && r.imageContainer]
            }
         }
      },
      MW4m: function (e, t, a) {
         "use strict";
         var i;
         ! function (e) {
            e.ExpressionSolve_Start = "ExpressionSolve_Start", e.ImmersiveReader_Viewed = "ImmersiveReader_Viewed", e.LandingPageVideo_Click = "LandingPageVideo_Click", e.MathInput_ImportError = "MathInput_ImportError", e.MathInput_KeyboardButtonClick = "MathInput_KeyboardButtonClick", e.MathInput_KeyboardSubmission = "MathInput_KeyboardSubmission", e.Keyboard_KeyClicked = "Keyboard_KeyClicked", e.Keyboard_TabChanged = "Keyboard_TabChanged", e.MathSteps_ActionButtonClicked = "MathSteps_ActionButtonClicked", e.MathSteps_StepClicked = "MathSteps_StepClicked", e.MathSteps_StepsOpened = "MathSteps_StepsOpened", e.MathSteps_TemplateDropdownOpened = "MathSteps_TemplateDropdownOpened", e.MathSteps_TemplateDropdownClosed = "MathSteps_TemplateDropdownClosed", e.NotebookExample_OnClick = "NotebookExample_OnClick", e.PWA_Installed = "PWA_Installed", e.PWA_InstallPromptApproved = "PWA_InstallPromptApproved", e.PWA_InstallPromptDeclined = "PWA_InstallPromptDeclined", e.PWA_InstallPromptShown = "PWA_InstallPromptShown", e.RelatedContent_Engagement = "RelatedContent_Engagement", e.Quiz_Complete = "Quiz_Complete", e.Quiz_GenerationComplete = "Quiz_GenerationComplete", e.Quiz_HintViewed = "Quiz_HintViewed", e.Quiz_ProblemAnswered = "Quiz_ProblemAnswered", e.Quiz_New = "Quiz_New", e.Quiz_Start = "Quiz_Start", e.Share_Interaction = "Share_Interaction", e.Topic_LinkClicked = "Topic_LinkClicked", e.UpsellBanner_DismissMobile = "UpsellBanner_DismissMobile", e.UpsellBanner_MobileInstallClick = "UpsellBanner_MobileInstallClick", e.SketchInputPage_RecognizeError = "SketchInputPage_RecognizeError", e.ExpressionSolve_Success = "ExpressionSolve_Success", e.ExpressionSolve_Error = "ExpressionSolve_Error", e.ExpressionSolve_Retry = "ExpressionSolve_Retry", e.LocalizedString_Error = "LocalizedString_Error", e.Upsell_Impression = "Upsell_Impression", e.Upsell_Click = "Upsell_Click"
         }(i || (i = {})), t.a = i
      },
      "O/Yb": function (e, t, a) {
         "use strict";
         a.d(t, "b", (function () {
            return i
         })), a.d(t, "a", (function () {
            return n
         }));

         function i(e) {
            console && console.warn && console.warn(e)
         }

         function n(e) {
            e
         }
      },
      O9bg: function (e, t, a) {
         var i = function (e) {
            "use strict";
            var t = Object.prototype,
               a = t.hasOwnProperty,
               i = "function" == typeof Symbol ? Symbol : {},
               n = i.iterator || "@@iterator",
               o = i.asyncIterator || "@@asyncIterator",
               r = i.toStringTag || "@@toStringTag";

            function s(e, t, a, i) {
               var n = t && t.prototype instanceof u ? t : u,
                  o = Object.create(n.prototype),
                  r = new y(i || []);
               return o._invoke = function (e, t, a) {
                  var i = "suspendedStart";
                  return function (n, o) {
                     if ("executing" === i) throw new Error("Generator is already running");
                     if ("completed" === i) {
                        if ("throw" === n) throw o;
                        return W()
                     }
                     for (a.method = n, a.arg = o;;) {
                        var r = a.delegate;
                        if (r) {
                           var s = S(r, a);
                           if (s) {
                              if (s === l) continue;
                              return s
                           }
                        }
                        if ("next" === a.method) a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                           if ("suspendedStart" === i) throw i = "completed", a.arg;
                           a.dispatchException(a.arg)
                        } else "return" === a.method && a.abrupt("return", a.arg);
                        i = "executing";
                        var u = _(e, t, a);
                        if ("normal" === u.type) {
                           if (i = a.done ? "completed" : "suspendedYield", u.arg === l) continue;
                           return {
                              value: u.arg,
                              done: a.done
                           }
                        }
                        "throw" === u.type && (i = "completed", a.method = "throw", a.arg = u.arg)
                     }
                  }
               }(e, a, r), o
            }

            function _(e, t, a) {
               try {
                  return {
                     type: "normal",
                     arg: e.call(t, a)
                  }
               } catch (i) {
                  return {
                     type: "throw",
                     arg: i
                  }
               }
            }
            e.wrap = s;
            var l = {};

            function u() {}

            function c() {}

            function g() {}
            var h = {};
            h[n] = function () {
               return this
            };
            var p = Object.getPrototypeOf,
               b = p && p(p(v([])));
            b && b !== t && a.call(b, n) && (h = b);
            var d = g.prototype = u.prototype = Object.create(h);

            function M(e) {
               ["next", "throw", "return"].forEach((function (t) {
                  e[t] = function (e) {
                     return this._invoke(t, e)
                  }
               }))
            }

            function m(e, t) {
               var i;
               this._invoke = function (n, o) {
                  function r() {
                     return new t((function (i, r) {
                        ! function i(n, o, r, s) {
                           var l = _(e[n], e, o);
                           if ("throw" !== l.type) {
                              var u = l.arg,
                                 c = u.value;
                              return c && "object" == typeof c && a.call(c, "__await") ? t.resolve(c.__await).then((function (e) {
                                 i("next", e, r, s)
                              }), (function (e) {
                                 i("throw", e, r, s)
                              })) : t.resolve(c).then((function (e) {
                                 u.value = e, r(u)
                              }), (function (e) {
                                 return i("throw", e, r, s)
                              }))
                           }
                           s(l.arg)
                        }(n, o, i, r)
                     }))
                  }
                  return i = i ? i.then(r, r) : r()
               }
            }

            function S(e, t) {
               var a = e.iterator[t.method];
               if (void 0 === a) {
                  if (t.delegate = null, "throw" === t.method) {
                     if (e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method)) return l;
                     t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                  }
                  return l
               }
               var i = _(a, e.iterator, t.arg);
               if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, l;
               var n = i.arg;
               return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
            }

            function T(e) {
               var t = {
                  tryLoc: e[0]
               };
               1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function f(e) {
               var t = e.completion || {};
               t.type = "normal", delete t.arg, e.completion = t
            }

            function y(e) {
               this.tryEntries = [{
                  tryLoc: "root"
               }], e.forEach(T, this), this.reset(!0)
            }

            function v(e) {
               if (e) {
                  var t = e[n];
                  if (t) return t.call(e);
                  if ("function" == typeof e.next) return e;
                  if (!isNaN(e.length)) {
                     var i = -1,
                        o = function t() {
                           for (; ++i < e.length;)
                              if (a.call(e, i)) return t.value = e[i], t.done = !1, t;
                           return t.value = void 0, t.done = !0, t
                        };
                     return o.next = o
                  }
               }
               return {
                  next: W
               }
            }

            function W() {
               return {
                  value: void 0,
                  done: !0
               }
            }
            return c.prototype = d.constructor = g, g.constructor = c, g[r] = c.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
               var t = "function" == typeof e && e.constructor;
               return !!t && (t === c || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
               return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, r in e || (e[r] = "GeneratorFunction")), e.prototype = Object.create(d), e
            }, e.awrap = function (e) {
               return {
                  __await: e
               }
            }, M(m.prototype), m.prototype[o] = function () {
               return this
            }, e.AsyncIterator = m, e.async = function (t, a, i, n, o) {
               void 0 === o && (o = Promise);
               var r = new m(s(t, a, i, n), o);
               return e.isGeneratorFunction(a) ? r : r.next().then((function (e) {
                  return e.done ? e.value : r.next()
               }))
            }, M(d), d[r] = "Generator", d[n] = function () {
               return this
            }, d.toString = function () {
               return "[object Generator]"
            }, e.keys = function (e) {
               var t = [];
               for (var a in e) t.push(a);
               return t.reverse(),
                  function a() {
                     for (; t.length;) {
                        var i = t.pop();
                        if (i in e) return a.value = i, a.done = !1, a
                     }
                     return a.done = !0, a
                  }
            }, e.values = v, y.prototype = {
               constructor: y,
               reset: function (e) {
                  if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(f), !e)
                     for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
               },
               stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval
               },
               dispatchException: function (e) {
                  if (this.done) throw e;
                  var t = this;

                  function i(a, i) {
                     return r.type = "throw", r.arg = e, t.next = a, i && (t.method = "next", t.arg = void 0), !!i
                  }
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                     var o = this.tryEntries[n],
                        r = o.completion;
                     if ("root" === o.tryLoc) return i("end");
                     if (o.tryLoc <= this.prev) {
                        var s = a.call(o, "catchLoc"),
                           _ = a.call(o, "finallyLoc");
                        if (s && _) {
                           if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                           if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                        } else if (s) {
                           if (this.prev < o.catchLoc) return i(o.catchLoc, !0)
                        } else {
                           if (!_) throw new Error("try statement without catch or finally");
                           if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                        }
                     }
                  }
               },
               abrupt: function (e, t) {
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                     var n = this.tryEntries[i];
                     if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var o = n;
                        break
                     }
                  }
                  o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                  var r = o ? o.completion : {};
                  return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(r)
               },
               complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
               },
               finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                     var a = this.tryEntries[t];
                     if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), f(a), l
                  }
               },
               catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                     var a = this.tryEntries[t];
                     if (a.tryLoc === e) {
                        var i = a.completion;
                        if ("throw" === i.type) {
                           var n = i.arg;
                           f(a)
                        }
                        return n
                     }
                  }
                  throw new Error("illegal catch attempt")
               },
               delegateYield: function (e, t, a) {
                  return this.delegate = {
                     iterator: v(e),
                     resultName: t,
                     nextLoc: a
                  }, "next" === this.method && (this.arg = void 0), l
               }
            }, e
         }(e.exports);
         try {
            regeneratorRuntime = i
         } catch (n) {
            Function("r", "regeneratorRuntime = r")(i)
         }
      },
      OXwN: function (e, t) {
         e.exports = "data:image/svg+xml;base64,PCEtLSBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC4NCiAgICAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiAtLT4NCg0KPHN2ZyB2aWV3Qm94PSIwIDAgNDAgMzciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGZpbGwtcnVsZT0ibm9uemVybyI+DQogICAgICAgICAgICA8cGF0aCBkPSJNMzcuNCwwLjkgTDM3LjQsOS42IEwzNS40LDkuNiBMMzUuNCwyLjkgTDI0LjQsMi45IEMyMi45LDMuMyAyMCw0LjUgMjAsNiBMMjAsMTcuMiBMMTgsMTcuMiBMMTgsNiBDMTgsNSAxNS42LDMuNiAxMy44LDIuOSBMMiwyLjkgTDIsMjkgTDEyLjQsMjkgTDEyLjQsMzEgTDAsMzEgTDAsMC45IEwxNC4xLDAuOSBMMTQuMywxIEMxNSwxLjIgMTcuNSwyLjIgMTguOSwzLjcgQzIwLjUsMS45IDIzLjUsMS4xIDIzLjksMSBMMjQuMSwxIEwzNy40LDEgTDM3LjQsMC45IFoiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNy40LDM3IEwyNS44LDM3IEwxOC40LDI5LjQgTDE0LDI5LjQgTDE0LDIxIEwxOC40LDIwLjkgTDI2LjEsMTMgTDI3LjQsMTMgTDI3LjQsMzcgWiBNMTYsMjcuNCBMMTkuMiwyNy40IEwyNS4zLDMzLjcgTDI1LjMsMTYuNiBMMTkuMiwyMi45IEwxNS45LDIyLjkgTDE1LjksMjcuNCBMMTYsMjcuNCBaIiBmaWxsPSIjMDE5N0YyIj48L3BhdGg+DQogICAgICAgICAgICA8cGF0aCBkPSJNMzEuMywzMi43IEwyOS42LDMxLjcgQzI5LjYsMzEuNyAzMS43LDI4LjMgMzEuNywyNS4yIEMzMS43LDIxLjkgMjkuNiwxOC41IDI5LjYsMTguNCBMMzEuMywxNy40IEMzMS40LDE3LjYgMzMuNywyMS4zIDMzLjcsMjUuMiBDMzMuNywyOC44IDMxLjQsMzIuNiAzMS4zLDMyLjcgWiIgZmlsbD0iIzAxOTdGMiI+PC9wYXRoPg0KICAgICAgICAgICAgPHBhdGggZD0iTTM2LjQsMzYuMiBMMzQuOCwzNSBDMzQuOCwzNSAzOCwzMC44IDM4LDI1LjIgQzM4LDE5LjYgMzQuOCwxNS40IDM0LjgsMTUuNCBMMzYuNCwxNC4yIEMzNi41LDE0LjQgNDAsMTkgNDAsMjUuMyBDNDAsMzEuNSAzNi41LDM2IDM2LjQsMzYuMiBaIiBmaWxsPSIjMDE5N0YyIj48L3BhdGg+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="
      },
      P95r: function (e, t, a) {
         "use strict";
         var i, n, o, r, s, _, l, u, c, g, h, p, b, d, M = a("a3ss"),
            m = a("Y65e"),
            S = (a("+JCI"), a("eExt")),
            T = a("mhro"),
            f = (i = Object(S.JsonProperty)("name", String, !0), n = Object(S.JsonProperty)("description", String, !0), o = Object(S.JsonProperty)("url", String, !0), r = Object(S.JsonProperty)("publisher", String, !0), s = Object(S.JsonProperty)("thumbnail", T.a, !0), _ = Object(S.JsonProperty)("webSearchUrl", String, !0), Object(S.JsonObject)((u = function () {
               Object(M.a)(this, "name", c, this), Object(M.a)(this, "description", g, this), Object(M.a)(this, "url", h, this), Object(M.a)(this, "publisher", p, this), Object(M.a)(this, "thumbnail", b, this), Object(M.a)(this, "webSearchUrl", d, this)
            }, c = Object(m.a)(u.prototype, "name", [i], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), g = Object(m.a)(u.prototype, "description", [n], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), h = Object(m.a)(u.prototype, "url", [o], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), p = Object(m.a)(u.prototype, "publisher", [r], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), b = Object(m.a)(u.prototype, "thumbnail", [s], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: null
            }), d = Object(m.a)(u.prototype, "webSearchUrl", [_], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), l = u)) || l);
         t.a = f
      },
      PAXR: function (e, t) {
         e.exports = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4Ij4NCiAgPGcgaWQ9IvCflI0tU3lzdGVtLUljb25zIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICA8ZyBpZD0iaWNfZmx1ZW50X2tleWJvYXJkXzIwX3JlZ3VsYXIiIGZpbGw9IiMxNDdGOEYiIGZpbGwtcnVsZT0ibm9uemVybyI+DQogICAgICA8cGF0aCBkPSJNMTYuNSw0IEMxNy4zMjg0LDQgMTgsNC42NzE1NyAxOCw1LjUgTDE4LDEzLjUgQzE4LDE0LjMyODQgMTcuMzI4NCwxNSAxNi41LDE1IEwzLjUsMTUgQzIuNjcxNTcsMTUgMiwxNC4zMjg0IDIsMTMuNSBMMiw1LjUgQzIsNC42NzE1NyAyLjY3MTU3LDQgMy41LDQgTDE2LjUsNCBaIE0xNi41LDUgTDMuNSw1IEMzLjIyMzg2LDUgMyw1LjIyMzg2IDMsNS41IEwzLDEzLjUgQzMsMTMuNzc2MSAzLjIyMzg2LDE0IDMuNSwxNCBMMTYuNSwxNCBDMTYuNzc2MSwxNCAxNywxMy43NzYxIDE3LDEzLjUgTDE3LDUuNSBDMTcsNS4yMjM4NiAxNi43NzYxLDUgMTYuNSw1IFogTTE0LjUsMTIgQzE0Ljc3NjEsMTIgMTUsMTIuMjIzOSAxNSwxMi41IEMxNSwxMi43NzYxIDE0Ljc3NjEsMTMgMTQuNSwxMyBMNS41LDEzIEM1LjIyMzg2LDEzIDUsMTIuNzc2MSA1LDEyLjUgQzUsMTIuMjIzOSA1LjIyMzg2LDEyIDUuNSwxMiBMMTQuNSwxMiBaIE02Ljk5NzYxLDguOTk5OTQgQzcuNDEzMTMsOC45OTk5NCA3Ljc0OTk4LDkuMzM2NzkgNy43NDk5OCw5Ljc1MjMxIEM3Ljc0OTk4LDEwLjE2NzggNy40MTMxMywxMC41MDQ3IDYuOTk3NjEsMTAuNTA0NyBDNi41ODIwOSwxMC41MDQ3IDYuMjQ1MjQsMTAuMTY3OCA2LjI0NTI0LDkuNzUyMzEgQzYuMjQ1MjQsOS4zMzY3OSA2LjU4MjA5LDguOTk5OTQgNi45OTc2MSw4Ljk5OTk0IFogTTEwLjAwMjQsOC45OTk5NCBDMTAuNDE3OSw4Ljk5OTk0IDEwLjc1NDcsOS4zMzY3OSAxMC43NTQ3LDkuNzUyMzEgQzEwLjc1NDcsMTAuMTY3OCAxMC40MTc5LDEwLjUwNDcgMTAuMDAyNCwxMC41MDQ3IEM5LjU4Njg1LDEwLjUwNDcgOS4yNSwxMC4xNjc4IDkuMjUsOS43NTIzMSBDOS4yNSw5LjMzNjc5IDkuNTg2ODUsOC45OTk5NCAxMC4wMDI0LDguOTk5OTQgWiBNMTMuMDA3MSw4Ljk5OTk0IEMxMy40MjI3LDguOTk5OTQgMTMuNzU5NSw5LjMzNjc5IDEzLjc1OTUsOS43NTIzMSBDMTMuNzU5NSwxMC4xNjc4IDEzLjQyMjcsMTAuNTA0NyAxMy4wMDcxLDEwLjUwNDcgQzEyLjU5MTYsMTAuNTA0NyAxMi4yNTQ4LDEwLjE2NzggMTIuMjU0OCw5Ljc1MjMxIEMxMi4yNTQ4LDkuMzM2NzkgMTIuNTkxNiw4Ljk5OTk0IDEzLjAwNzEsOC45OTk5NCBaIE0xMS41MDI0LDYuNDk5OTQgQzExLjkxNzksNi40OTk5NCAxMi4yNTQ3LDYuODM2NzkgMTIuMjU0Nyw3LjI1MjMxIEMxMi4yNTQ3LDcuNjY3ODMgMTEuOTE3OSw4LjAwNDY4IDExLjUwMjQsOC4wMDQ2OCBDMTEuMDg2OCw4LjAwNDY4IDEwLjc1LDcuNjY3ODMgMTAuNzUsNy4yNTIzMSBDMTAuNzUsNi44MzY3OSAxMS4wODY4LDYuNDk5OTQgMTEuNTAyNCw2LjQ5OTk0IFogTTE0LjUwMjQsNi40OTk5NCBDMTQuOTE3OSw2LjQ5OTk0IDE1LjI1NDcsNi44MzY3OSAxNS4yNTQ3LDcuMjUyMzEgQzE1LjI1NDcsNy42Njc4MyAxNC45MTc5LDguMDA0NjggMTQuNTAyNCw4LjAwNDY4IEMxNC4wODY4LDguMDA0NjggMTMuNzUsNy42Njc4MyAxMy43NSw3LjI1MjMxIEMxMy43NSw2LjgzNjc5IDE0LjA4NjgsNi40OTk5NCAxNC41MDI0LDYuNDk5OTQgWiBNNS41MDIzNyw2LjQ5OTk0IEM1LjkxNzg5LDYuNDk5OTQgNi4yNTQ3NCw2LjgzNjc5IDYuMjU0NzQsNy4yNTIzMSBDNi4yNTQ3NCw3LjY2NzgzIDUuOTE3ODksOC4wMDQ2OCA1LjUwMjM3LDguMDA0NjggQzUuMDg2ODUsOC4wMDQ2OCA0Ljc1LDcuNjY3ODMgNC43NSw3LjI1MjMxIEM0Ljc1LDYuODM2NzkgNS4wODY4NSw2LjQ5OTk0IDUuNTAyMzcsNi40OTk5NCBaIE04LjUwMjM3LDYuNDk5OTQgQzguOTE3ODksNi40OTk5NCA5LjI1NDc0LDYuODM2NzkgOS4yNTQ3NCw3LjI1MjMxIEM5LjI1NDc0LDcuNjY3ODMgOC45MTc4OSw4LjAwNDY4IDguNTAyMzcsOC4wMDQ2OCBDOC4wODY4NSw4LjAwNDY4IDcuNzUsNy42Njc4MyA3Ljc1LDcuMjUyMzEgQzcuNzUsNi44MzY3OSA4LjA4Njg1LDYuNDk5OTQgOC41MDIzNyw2LjQ5OTk0IFoiIGlkPSLwn46oLUNvbG9yIj48L3BhdGg+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4="
      },
      "PH9+": function (e, t, a) {
         "use strict";

         function i() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            for (var a = [], i = 0, n = e; i < n.length; i++) {
               var o = n[i];
               if (o)
                  if ("string" == typeof o) a.push(o);
                  else if (o.hasOwnProperty("toString") && "function" == typeof o.toString) a.push(o.toString());
               else
                  for (var r in o) o[r] && a.push(r)
            }
            return a.join(" ")
         }
         a.d(t, "a", (function () {
            return i
         }))
      },
      PQqj: function (e, t, a) {
         "use strict";

         function i(e) {
            var t = function (e) {
               var t;
               "function" == typeof Event ? t = new Event(e) : (t = document.createEvent("Event")).initEvent(e, !0, !0);
               return t
            }("MouseEvents");
            t.initEvent("click", !0, !0), e.dispatchEvent(t)
         }
         a.d(t, "a", (function () {
            return i
         }))
      },
      R3oT: function (e, t, a) {
         "use strict";
         a.d(t, "c", (function () {
            return i.b
         })), a.d(t, "b", (function () {
            return i.a
         })), a.d(t, "d", (function () {
            return n.a
         })), a.d(t, "a", (function () {
            return o
         })), a.d(t, "e", (function () {
            return r
         })), a.d(t, "f", (function () {
            return s.a
         })), a.d(t, "g", (function () {
            return _.a
         }));
         var i = a("O/Yb"),
            n = a("bAdm");

         function o() {
            0
         }

         function r(e) {}
         var s = a("VF84"),
            _ = a("Sfa5")
      },
      RaQO: function (e, t, a) {
         "use strict";
         a.r(t), a.d(t, "AnimationClassNames", (function () {
            return J
         })), a.d(t, "FontClassNames", (function () {
            return de
         })), a.d(t, "ColorClassNames", (function () {
            return Re
         })), a.d(t, "AnimationStyles", (function () {
            return U
         })), a.d(t, "AnimationVariables", (function () {
            return x
         })), a.d(t, "DefaultPalette", (function () {
            return Me
         })), a.d(t, "DefaultEffects", (function () {
            return ve
         })), a.d(t, "DefaultFontStyles", (function () {
            return ge
         })), a.d(t, "registerDefaultFontFaces", (function () {
            return be
         })), a.d(t, "FontSizes", (function () {
            return ee
         })), a.d(t, "FontWeights", (function () {
            return te
         })), a.d(t, "IconFontSizes", (function () {
            return ae
         })), a.d(t, "createFontStyles", (function () {
            return oe
         })), a.d(t, "getFocusStyle", (function () {
            return it
         })), a.d(t, "focusClear", (function () {
            return ot
         })), a.d(t, "getFocusOutlineStyle", (function () {
            return rt
         })), a.d(t, "getInputFocusStyle", (function () {
            return st
         })), a.d(t, "hiddenContentStyle", (function () {
            return _t
         })), a.d(t, "PulsingBeaconAnimationStyles", (function () {
            return ht
         })), a.d(t, "getGlobalClassNames", (function () {
            return dt
         })), a.d(t, "getThemedContext", (function () {
            return mt
         })), a.d(t, "ThemeSettingName", (function () {
            return Ee
         })), a.d(t, "getTheme", (function () {
            return we
         })), a.d(t, "loadTheme", (function () {
            return Ae
         })), a.d(t, "createTheme", (function () {
            return Ie
         })), a.d(t, "registerOnThemeChangeCallback", (function () {
            return ke
         })), a.d(t, "removeOnThemeChangeCallback", (function () {
            return Pe
         })), a.d(t, "HighContrastSelector", (function () {
            return Ne
         })), a.d(t, "HighContrastSelectorWhite", (function () {
            return Ge
         })), a.d(t, "HighContrastSelectorBlack", (function () {
            return Be
         })), a.d(t, "EdgeChromiumHighContrastSelector", (function () {
            return Fe
         })), a.d(t, "ScreenWidthMinSmall", (function () {
            return Qe
         })), a.d(t, "ScreenWidthMinMedium", (function () {
            return je
         })), a.d(t, "ScreenWidthMinLarge", (function () {
            return xe
         })), a.d(t, "ScreenWidthMinXLarge", (function () {
            return Ue
         })), a.d(t, "ScreenWidthMinXXLarge", (function () {
            return Ve
         })), a.d(t, "ScreenWidthMinXXXLarge", (function () {
            return He
         })), a.d(t, "ScreenWidthMaxSmall", (function () {
            return Ke
         })), a.d(t, "ScreenWidthMaxMedium", (function () {
            return qe
         })), a.d(t, "ScreenWidthMaxLarge", (function () {
            return Ye
         })), a.d(t, "ScreenWidthMaxXLarge", (function () {
            return Je
         })), a.d(t, "ScreenWidthMaxXXLarge", (function () {
            return Ze
         })), a.d(t, "ScreenWidthMinUhfMobile", (function () {
            return Xe
         })), a.d(t, "getScreenSelector", (function () {
            return $e
         })), a.d(t, "getEdgeChromiumNoHighContrastAdjustSelector", (function () {
            return et
         })), a.d(t, "normalize", (function () {
            return St
         })), a.d(t, "noWrap", (function () {
            return Tt
         })), a.d(t, "getFadedOverflowStyle", (function () {
            return ft
         })), a.d(t, "getPlaceholderStyles", (function () {
            return vt
         })), a.d(t, "ZIndexes", (function () {
            return tt
         })), a.d(t, "buildClassMap", (function () {
            return n
         })), a.d(t, "getIcon", (function () {
            return It
         })), a.d(t, "registerIcons", (function () {
            return kt
         })), a.d(t, "registerIconAlias", (function () {
            return At
         })), a.d(t, "unregisterIcons", (function () {
            return Pt
         })), a.d(t, "setIconOptions", (function () {
            return Ot
         })), a.d(t, "getIconClassName", (function () {
            return Gt
         })), a.d(t, "InjectionMode", (function () {
            return r.a
         })), a.d(t, "Stylesheet", (function () {
            return r.b
         })), a.d(t, "concatStyleSets", (function () {
            return Bt.a
         })), a.d(t, "concatStyleSetsWithProps", (function () {
            return Ft.a
         })), a.d(t, "fontFace", (function () {
            return Z
         })), a.d(t, "keyframes", (function () {
            return _
         })), a.d(t, "mergeStyleSets", (function () {
            return Qt.b
         })), a.d(t, "mergeStyles", (function () {
            return i.a
         }));
         var i = a("sY4W");

         function n(e) {
            var t = {},
               a = function (a) {
                  var n;
                  e.hasOwnProperty(a) && Object.defineProperty(t, a, {
                     get: function () {
                        return void 0 === n && (n = Object(i.a)(e[a]).toString()), n
                     },
                     enumerable: !0,
                     configurable: !0
                  })
               };
            for (var n in e) a(n);
            return t
         }
         var o = a("pxsQ"),
            r = a("tnFO"),
            s = a("lhp9");

         function _(e) {
            var t = r.b.getInstance(),
               a = t.getClassName(),
               i = [];
            for (var n in e) e.hasOwnProperty(n) && i.push(n, "{", Object(s.b)(Object(o.a)(), e[n]), "}");
            var _ = i.join("");
            return t.insertRule("@keyframes " + a + "{" + _ + "}", !0), t.cacheClassName(a, _, [], ["keyframes", _]), a
         }
         var l = "cubic-bezier(.1,.9,.2,1)",
            u = "cubic-bezier(.1,.25,.75,.9)",
            c = _({
               from: {
                  opacity: 0
               },
               to: {
                  opacity: 1
               }
            }),
            g = _({
               from: {
                  opacity: 1
               },
               to: {
                  opacity: 0,
                  visibility: "hidden"
               }
            }),
            h = H(-10),
            p = H(-20),
            b = H(-40),
            d = H(-400),
            M = H(10),
            m = H(20),
            S = H(40),
            T = H(400),
            f = K(10),
            y = K(20),
            v = K(-10),
            W = K(-20),
            L = q(10),
            E = q(20),
            C = q(40),
            w = q(400),
            k = q(-10),
            P = q(-20),
            A = q(-40),
            I = q(-400),
            O = Y(-10),
            R = Y(-20),
            D = Y(10),
            z = Y(20),
            N = _({
               from: {
                  transform: "scale3d(.98,.98,1)"
               },
               to: {
                  transform: "scale3d(1,1,1)"
               }
            }),
            G = _({
               from: {
                  transform: "scale3d(1,1,1)"
               },
               to: {
                  transform: "scale3d(.98,.98,1)"
               }
            }),
            B = _({
               from: {
                  transform: "scale3d(1.03,1.03,1)"
               },
               to: {
                  transform: "scale3d(1,1,1)"
               }
            }),
            F = _({
               from: {
                  transform: "scale3d(1,1,1)"
               },
               to: {
                  transform: "scale3d(1.03,1.03,1)"
               }
            }),
            Q = _({
               from: {
                  transform: "rotateZ(0deg)"
               },
               to: {
                  transform: "rotateZ(90deg)"
               }
            }),
            j = _({
               from: {
                  transform: "rotateZ(0deg)"
               },
               to: {
                  transform: "rotateZ(-90deg)"
               }
            }),
            x = {
               easeFunction1: l,
               easeFunction2: u,
               durationValue1: "0.167s",
               durationValue2: "0.267s",
               durationValue3: "0.367s",
               durationValue4: "0.467s"
            },
            U = {
               slideRightIn10: V(c + "," + h, "0.367s", l),
               slideRightIn20: V(c + "," + p, "0.367s", l),
               slideRightIn40: V(c + "," + b, "0.367s", l),
               slideRightIn400: V(c + "," + d, "0.367s", l),
               slideLeftIn10: V(c + "," + M, "0.367s", l),
               slideLeftIn20: V(c + "," + m, "0.367s", l),
               slideLeftIn40: V(c + "," + S, "0.367s", l),
               slideLeftIn400: V(c + "," + T, "0.367s", l),
               slideUpIn10: V(c + "," + f, "0.367s", l),
               slideUpIn20: V(c + "," + y, "0.367s", l),
               slideDownIn10: V(c + "," + v, "0.367s", l),
               slideDownIn20: V(c + "," + W, "0.367s", l),
               slideRightOut10: V(g + "," + L, "0.367s", l),
               slideRightOut20: V(g + "," + E, "0.367s", l),
               slideRightOut40: V(g + "," + C, "0.367s", l),
               slideRightOut400: V(g + "," + w, "0.367s", l),
               slideLeftOut10: V(g + "," + k, "0.367s", l),
               slideLeftOut20: V(g + "," + P, "0.367s", l),
               slideLeftOut40: V(g + "," + A, "0.367s", l),
               slideLeftOut400: V(g + "," + I, "0.367s", l),
               slideUpOut10: V(g + "," + O, "0.367s", l),
               slideUpOut20: V(g + "," + R, "0.367s", l),
               slideDownOut10: V(g + "," + D, "0.367s", l),
               slideDownOut20: V(g + "," + z, "0.367s", l),
               scaleUpIn100: V(c + "," + N, "0.367s", l),
               scaleDownIn100: V(c + "," + B, "0.367s", l),
               scaleUpOut103: V(g + "," + F, "0.167s", u),
               scaleDownOut98: V(g + "," + G, "0.167s", u),
               fadeIn100: V(c, "0.167s", u),
               fadeIn200: V(c, "0.267s", u),
               fadeIn400: V(c, "0.367s", u),
               fadeIn500: V(c, "0.467s", u),
               fadeOut100: V(g, "0.167s", u),
               fadeOut200: V(g, "0.267s", u),
               fadeOut400: V(g, "0.367s", u),
               fadeOut500: V(g, "0.467s", u),
               rotate90deg: V(Q, "0.1s", u),
               rotateN90deg: V(j, "0.1s", u)
            };

         function V(e, t, a) {
            return {
               animationName: e,
               animationDuration: t,
               animationTimingFunction: a,
               animationFillMode: "both"
            }
         }

         function H(e) {
            return _({
               from: {
                  transform: "translate3d(" + e + "px,0,0)"
               },
               to: {
                  transform: "translate3d(0,0,0)"
               }
            })
         }

         function K(e) {
            return _({
               from: {
                  transform: "translate3d(0," + e + "px,0)"
               },
               to: {
                  transform: "translate3d(0,0,0)"
               }
            })
         }

         function q(e) {
            return _({
               from: {
                  transform: "translate3d(0,0,0)"
               },
               to: {
                  transform: "translate3d(" + e + "px,0,0)"
               }
            })
         }

         function Y(e) {
            return _({
               from: {
                  transform: "translate3d(0,0,0)"
               },
               to: {
                  transform: "translate3d(0," + e + "px,0)"
               }
            })
         }
         var J = n(U);

         function Z(e) {
            r.b.getInstance().insertRule("@font-face{" + Object(s.b)(Object(o.a)(), e) + "}", !0)
         }
         var X, $;
         ! function (e) {
            e.Arabic = "Segoe UI Web (Arabic)", e.Cyrillic = "Segoe UI Web (Cyrillic)", e.EastEuropean = "Segoe UI Web (East European)", e.Greek = "Segoe UI Web (Greek)", e.Hebrew = "Segoe UI Web (Hebrew)", e.Thai = "Leelawadee UI Web", e.Vietnamese = "Segoe UI Web (Vietnamese)", e.WestEuropean = "Segoe UI Web (West European)", e.Selawik = "Selawik Web", e.Armenian = "Segoe UI Web (Armenian)", e.Georgian = "Segoe UI Web (Georgian)"
         }(X || (X = {})),
         function (e) {
            e.Arabic = "'" + X.Arabic + "'", e.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun", e.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu", e.Cyrillic = "'" + X.Cyrillic + "'", e.EastEuropean = "'" + X.EastEuropean + "'", e.Greek = "'" + X.Greek + "'", e.Hebrew = "'" + X.Hebrew + "'", e.Hindi = "'Nirmala UI'", e.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka", e.Korean = "'Malgun Gothic', Gulim", e.Selawik = "'" + X.Selawik + "'", e.Thai = "'Leelawadee UI Web', 'Kmer UI'", e.Vietnamese = "'" + X.Vietnamese + "'", e.WestEuropean = "'" + X.WestEuropean + "'", e.Armenian = "'" + X.Armenian + "'", e.Georgian = "'" + X.Georgian + "'"
         }($ || ($ = {}));
         var ee, te, ae, ie = "'Segoe UI', '" + X.WestEuropean + "'",
            ne = {
               ar: $.Arabic,
               bg: $.Cyrillic,
               cs: $.EastEuropean,
               el: $.Greek,
               et: $.EastEuropean,
               he: $.Hebrew,
               hi: $.Hindi,
               hr: $.EastEuropean,
               hu: $.EastEuropean,
               ja: $.Japanese,
               kk: $.EastEuropean,
               ko: $.Korean,
               lt: $.EastEuropean,
               lv: $.EastEuropean,
               pl: $.EastEuropean,
               ru: $.Cyrillic,
               sk: $.EastEuropean,
               "sr-latn": $.EastEuropean,
               th: $.Thai,
               tr: $.EastEuropean,
               uk: $.Cyrillic,
               vi: $.Vietnamese,
               "zh-hans": $.ChineseSimplified,
               "zh-hant": $.ChineseTraditional,
               hy: $.Armenian,
               ka: $.Georgian
            };

         function oe(e) {
            var t = function (e) {
                  for (var t in ne)
                     if (ne.hasOwnProperty(t) && e && 0 === t.indexOf(e)) return ne[t];
                  return ie
               }(e),
               a = t + ", 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
            return {
               tiny: re(ee.mini, te.regular, a),
               xSmall: re(ee.xSmall, te.regular, a),
               small: re(ee.small, te.regular, a),
               smallPlus: re(ee.smallPlus, te.regular, a),
               medium: re(ee.medium, te.regular, a),
               mediumPlus: re(ee.mediumPlus, te.regular, a),
               large: re(ee.large, te.regular, a),
               xLarge: re(ee.xLarge, te.semibold, a),
               xLargePlus: re(ee.xLargePlus, te.semibold, a),
               xxLarge: re(ee.xxLarge, te.semibold, a),
               xxLargePlus: re(ee.xxLargePlus, te.semibold, a),
               superLarge: re(ee.superLarge, te.semibold, a),
               mega: re(ee.mega, te.semibold, a)
            }
         }

         function re(e, t, a) {
            return {
               fontFamily: a,
               MozOsxFontSmoothing: "grayscale",
               WebkitFontSmoothing: "antialiased",
               fontSize: e,
               fontWeight: t
            }
         }! function (e) {
            e.mini = "10px", e.xSmall = "10px", e.small = "12px", e.smallPlus = "12px", e.medium = "14px", e.mediumPlus = "16px", e.icon = "16px", e.large = "18px", e.xLarge = "20px", e.xLargePlus = "24px", e.xxLarge = "28px", e.xxLargePlus = "32px", e.superLarge = "42px", e.mega = "68px"
         }(ee || (ee = {})),
         function (e) {
            e.light = 100, e.semilight = 300, e.regular = 400, e.semibold = 600, e.bold = 700
         }(te || (te = {})),
         function (e) {
            e.xSmall = "10px", e.small = "12px", e.medium = "16px", e.large = "20px"
         }(ae || (ae = {}));
         var se, _e, le, ue = a("bAv5"),
            ce = a("d6cv"),
            ge = oe(Object(ue.a)());

         function he(e, t, a, i) {
            Z({
               fontFamily: e = "'" + e + "'",
               src: (void 0 !== i ? "local('" + i + "')," : "") + "url('" + t + ".woff2') format('woff2'),url('" + t + ".woff') format('woff')",
               fontWeight: a,
               fontStyle: "normal",
               fontDisplay: "swap"
            })
         }

         function pe(e, t, a, i, n) {
            void 0 === i && (i = "segoeui");
            var o = e + "/" + a + "/" + i;
            he(t, o + "-light", te.light, n && n + " Light"), he(t, o + "-semilight", te.semilight, n && n + " SemiLight"), he(t, o + "-regular", te.regular, n), he(t, o + "-semibold", te.semibold, n && n + " SemiBold"), he(t, o + "-bold", te.bold, n && n + " Bold")
         }

         function be(e) {
            if (e) {
               var t = e + "/fonts";
               pe(t, X.Thai, "leelawadeeui-thai", "leelawadeeui"), pe(t, X.Arabic, "segoeui-arabic"), pe(t, X.Cyrillic, "segoeui-cyrillic"), pe(t, X.EastEuropean, "segoeui-easteuropean"), pe(t, X.Greek, "segoeui-greek"), pe(t, X.Hebrew, "segoeui-hebrew"), pe(t, X.Vietnamese, "segoeui-vietnamese"), pe(t, X.WestEuropean, "segoeui-westeuropean", "segoeui", "Segoe UI"), pe(t, $.Selawik, "selawik", "selawik"), pe(t, X.Armenian, "segoeui-armenian"), pe(t, X.Georgian, "segoeui-georgian"), he("Leelawadee UI Web", t + "/leelawadeeui-thai/leelawadeeui-semilight", te.light), he("Leelawadee UI Web", t + "/leelawadeeui-thai/leelawadeeui-bold", te.semibold)
            }
         }
         be(null != (le = null === (_e = null === (se = Object(ce.a)()) || void 0 === se ? void 0 : se.FabricConfig) || void 0 === _e ? void 0 : _e.fontBaseUrl) ? le : "https://static2.sharepointonline.com/files/fabric/assets");
         var de = n(ge),
            Me = {
               themeDarker: "#004578",
               themeDark: "#005a9e",
               themeDarkAlt: "#106ebe",
               themePrimary: "#0078d4",
               themeSecondary: "#2b88d8",
               themeTertiary: "#71afe5",
               themeLight: "#c7e0f4",
               themeLighter: "#deecf9",
               themeLighterAlt: "#eff6fc",
               black: "#000000",
               blackTranslucent40: "rgba(0,0,0,.4)",
               neutralDark: "#201f1e",
               neutralPrimary: "#323130",
               neutralPrimaryAlt: "#3b3a39",
               neutralSecondary: "#605e5c",
               neutralSecondaryAlt: "#8a8886",
               neutralTertiary: "#a19f9d",
               neutralTertiaryAlt: "#c8c6c4",
               neutralQuaternary: "#d2d0ce",
               neutralQuaternaryAlt: "#e1dfdd",
               neutralLight: "#edebe9",
               neutralLighter: "#f3f2f1",
               neutralLighterAlt: "#faf9f8",
               accent: "#0078d4",
               white: "#ffffff",
               whiteTranslucent40: "rgba(255,255,255,.4)",
               yellowDark: "#d29200",
               yellow: "#ffb900",
               yellowLight: "#fff100",
               orange: "#d83b01",
               orangeLight: "#ea4300",
               orangeLighter: "#ff8c00",
               redDark: "#a4262c",
               red: "#e81123",
               magentaDark: "#5c005c",
               magenta: "#b4009e",
               magentaLight: "#e3008c",
               purpleDark: "#32145a",
               purple: "#5c2d91",
               purpleLight: "#b4a0ff",
               blueDark: "#002050",
               blueMid: "#00188f",
               blue: "#0078d4",
               blueLight: "#00bcf2",
               tealDark: "#004b50",
               teal: "#008272",
               tealLight: "#00b294",
               greenDark: "#004b1c",
               green: "#107c10",
               greenLight: "#bad80a"
            },
            me = a("VvCP"),
            Se = a("w52g"),
            Te = a("FV21"),
            fe = {
               s2: "4px",
               s1: "8px",
               m: "16px",
               l1: "20px",
               l2: "32px"
            },
            ye = a("h8r0"),
            ve = {
               elevation4: "0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)",
               elevation8: "0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)",
               elevation16: "0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)",
               elevation64: "0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)",
               roundedCorner2: "2px",
               roundedCorner4: "4px",
               roundedCorner6: "6px"
            },
            We = Ie({
               palette: Me,
               semanticColors: Oe(Me, ve, void 0, !1, !1),
               fonts: ge,
               isInverted: !1,
               disableGlobalClassNames: !1
            }),
            Le = [],
            Ee = "theme";

         function Ce() {
            var e, t, a;
            if (!Se.a.getSettings([Ee]).theme) {
               var i = Object(ce.a)();
               (null === (a = null === (t = i) || void 0 === t ? void 0 : t.FabricConfig) || void 0 === a ? void 0 : a.theme) && (We = Ie(i.FabricConfig.theme)), Se.a.applySettings(((e = {})[Ee] = We, e))
            }
         }

         function we(e) {
            return void 0 === e && (e = !1), !0 === e && (We = Ie({}, e)), We
         }

         function ke(e) {
            -1 === Le.indexOf(e) && Le.push(e)
         }

         function Pe(e) {
            var t = Le.indexOf(e); - 1 !== t && Le.splice(t, 1)
         }

         function Ae(e, t) {
            var a;
            return void 0 === t && (t = !1), We = Ie(e, t), Object(ye.a)(Object(me.__assign)(Object(me.__assign)(Object(me.__assign)(Object(me.__assign)({}, We.palette), We.semanticColors), We.effects), function (e) {
               for (var t = {}, a = 0, i = Object.keys(e.fonts); a < i.length; a++)
                  for (var n = i[a], o = e.fonts[n], r = 0, s = Object.keys(o); r < s.length; r++) {
                     var _ = s[r],
                        l = n + _.charAt(0).toUpperCase() + _.slice(1),
                        u = o[_];
                     "fontSize" === _ && "number" == typeof u && (u += "px"), t[l] = u
                  }
               return t
            }(We))), Se.a.applySettings(((a = {})[Ee] = We, a)), Le.forEach((function (e) {
               try {
                  e(We)
               } catch (t) {}
            })), We
         }

         function Ie(e, t) {
            void 0 === t && (t = !1);
            var a = Object(me.__assign)(Object(me.__assign)({}, Me), e.palette),
               i = Object(me.__assign)(Object(me.__assign)({}, ve), e.effects);
            e.palette && e.palette.accent || (a.accent = a.themePrimary);
            var n = Object(me.__assign)(Object(me.__assign)({}, Oe(a, i, e.semanticColors, !!e.isInverted, t)), e.semanticColors),
               o = Object(me.__assign)({}, ge);
            if (e.defaultFontStyle)
               for (var r = 0, s = Object.keys(o); r < s.length; r++) {
                  o[u = s[r]] = Object(Te.a)({}, o[u], e.defaultFontStyle)
               }
            if (e.fonts)
               for (var _ = 0, l = Object.keys(e.fonts); _ < l.length; _++) {
                  var u;
                  o[u = l[_]] = Object(Te.a)({}, o[u], e.fonts[u])
               }
            return {
               palette: a,
               fonts: Object(me.__assign)({}, o),
               rtl: e.rtl,
               semanticColors: n,
               isInverted: !!e.isInverted,
               disableGlobalClassNames: !!e.disableGlobalClassNames,
               spacing: Object(me.__assign)(Object(me.__assign)({}, fe), e.spacing),
               effects: i
            }
         }

         function Oe(e, t, a, i, n) {
            var o = Object(me.__assign)({
               bodyBackground: e.white,
               bodyBackgroundHovered: e.neutralLighter,
               bodyBackgroundChecked: e.neutralLight,
               bodyStandoutBackground: e.neutralLighterAlt,
               bodyFrameBackground: e.white,
               bodyFrameDivider: e.neutralLight,
               bodyText: e.neutralPrimary,
               bodyTextChecked: e.black,
               bodySubtext: e.neutralSecondary,
               bodyDivider: e.neutralLight,
               disabledBodyText: e.neutralTertiary,
               disabledBodySubtext: e.neutralTertiaryAlt,
               disabledBorder: e.neutralTertiaryAlt,
               focusBorder: e.neutralSecondary,
               cardStandoutBackground: e.white,
               cardShadow: t.elevation4,
               cardShadowHovered: "",
               variantBorder: e.neutralLight,
               variantBorderHovered: e.neutralTertiary,
               defaultStateBackground: e.neutralLighterAlt,
               actionLink: e.neutralPrimary,
               actionLinkHovered: e.neutralDark,
               link: e.themePrimary,
               linkHovered: e.themeDarker,
               buttonBackground: e.white,
               buttonBackgroundChecked: e.neutralTertiaryAlt,
               buttonBackgroundHovered: e.neutralLighter,
               buttonBackgroundCheckedHovered: e.neutralLight,
               buttonBackgroundPressed: e.neutralLight,
               buttonBackgroundDisabled: e.neutralLighter,
               buttonBorder: e.neutralSecondaryAlt,
               buttonText: e.neutralPrimary,
               buttonTextHovered: e.neutralDark,
               buttonTextChecked: e.neutralDark,
               buttonTextCheckedHovered: e.black,
               buttonTextPressed: e.neutralDark,
               buttonTextDisabled: e.neutralTertiary,
               buttonBorderDisabled: e.neutralLighter,
               primaryButtonBackground: e.themePrimary,
               primaryButtonBackgroundHovered: e.themeDarkAlt,
               primaryButtonBackgroundPressed: e.themeDark,
               primaryButtonBackgroundDisabled: e.neutralLighter,
               primaryButtonBorder: "transparent",
               primaryButtonText: e.white,
               primaryButtonTextHovered: e.white,
               primaryButtonTextPressed: e.white,
               primaryButtonTextDisabled: e.neutralQuaternary,
               accentButtonBackground: e.accent,
               accentButtonText: e.white,
               inputBorder: e.neutralSecondary,
               inputBorderHovered: e.neutralPrimary,
               inputBackground: e.white,
               inputBackgroundChecked: e.themePrimary,
               inputBackgroundCheckedHovered: e.themeDark,
               inputPlaceholderBackgroundChecked: e.themeLighter,
               inputForegroundChecked: e.white,
               inputIcon: e.themePrimary,
               inputIconHovered: e.themeDark,
               inputIconDisabled: e.neutralTertiary,
               inputFocusBorderAlt: e.themePrimary,
               smallInputBorder: e.neutralSecondary,
               inputText: e.neutralPrimary,
               inputTextHovered: e.neutralDark,
               inputPlaceholderText: e.neutralSecondary,
               disabledBackground: e.neutralLighter,
               disabledText: e.neutralTertiary,
               disabledSubtext: e.neutralQuaternary,
               listBackground: e.white,
               listText: e.neutralPrimary,
               listItemBackgroundHovered: e.neutralLighter,
               listItemBackgroundChecked: e.neutralLight,
               listItemBackgroundCheckedHovered: e.neutralQuaternaryAlt,
               listHeaderBackgroundHovered: e.neutralLighter,
               listHeaderBackgroundPressed: e.neutralLight,
               menuBackground: e.white,
               menuDivider: e.neutralTertiaryAlt,
               menuIcon: e.themePrimary,
               menuHeader: e.themePrimary,
               menuItemBackgroundHovered: e.neutralLighter,
               menuItemBackgroundPressed: e.neutralLight,
               menuItemText: e.neutralPrimary,
               menuItemTextHovered: e.neutralDark,
               errorText: i ? "#F1707B" : "#a4262c",
               messageText: i ? "#F3F2F1" : "#323130",
               messageLink: i ? "#6CB8F6" : "#005A9E",
               messageLinkHovered: i ? "#82C7FF" : "#004578",
               infoIcon: i ? "#C8C6C4" : "#605e5c",
               errorIcon: i ? "#F1707B" : "#A80000",
               blockingIcon: i ? "#442726" : "#FDE7E9",
               warningIcon: i ? "#C8C6C4" : "#797775",
               severeWarningIcon: i ? "#FCE100" : "#D83B01",
               successIcon: i ? "#92C353" : "#107C10",
               infoBackground: i ? "#323130" : "#f3f2f1",
               errorBackground: i ? "#442726" : "#FDE7E9",
               blockingBackground: i ? "#442726" : "#FDE7E9",
               warningBackground: i ? "#433519" : "#FFF4CE",
               severeWarningBackground: i ? "#4F2A0F" : "#FED9CC",
               successBackground: i ? "#393D1B" : "#DFF6DD",
               warningHighlight: i ? "#fff100" : "#ffb900",
               warningText: "",
               successText: i ? "#92c353" : "#107C10",
               listTextColor: "",
               menuItemBackgroundChecked: e.neutralLight
            }, a);
            return function (e, t) {
               var a = "";
               !0 === t && (a = " /* @deprecated */");
               return e.listTextColor = e.listText + a, e.menuItemBackgroundChecked += a, e.warningHighlight += a, e.warningText = e.messageText + a, e.successText += a, e
            }(o = Object(me.__assign)(Object(me.__assign)({}, o), {
               cardShadowHovered: i ? "0 0 1px " + o.variantBorderHovered : t.elevation8
            }), n)
         }
         Ce();
         var Re = {};
         for (var De in Me) Me.hasOwnProperty(De) && (ze(Re, De, "", !1, "color"), ze(Re, De, "Hover", !0, "color"), ze(Re, De, "Background", !1, "background"), ze(Re, De, "BackgroundHover", !0, "background"), ze(Re, De, "Border", !1, "borderColor"), ze(Re, De, "BorderHover", !0, "borderColor"));

         function ze(e, t, a, n, o) {
            Object.defineProperty(e, t + a, {
               get: function () {
                  var e, a = ((e = {})[o] = we().palette[t], e);
                  return Object(i.a)(n ? {
                     selectors: {
                        ":hover": a
                     }
                  } : a).toString()
               },
               enumerable: !0,
               configurable: !0
            })
         }
         var Ne = "@media screen and (-ms-high-contrast: active)",
            Ge = "@media screen and (-ms-high-contrast: black-on-white)",
            Be = "@media screen and (-ms-high-contrast: white-on-black)",
            Fe = "@media screen and (forced-colors: active)",
            Qe = 320,
            je = 480,
            xe = 640,
            Ue = 1024,
            Ve = 1366,
            He = 1920,
            Ke = je - 1,
            qe = xe - 1,
            Ye = Ue - 1,
            Je = Ve - 1,
            Ze = He - 1,
            Xe = 768;

         function $e(e, t) {
            return "@media only screen and (min-width: " + e + "px) and (max-width: " + t + "px)"
         }

         function et() {
            var e;
            return (e = {})[Fe] = {
               forcedColorAdjust: "none"
            }, e
         }
         var tt, at = a("o5Fl");

         function it(e, t, a, i, n, o, r) {
            return nt(e, "number" != typeof t && t ? t : {
               inset: t,
               position: a,
               highContrastStyle: i,
               borderColor: n,
               outlineColor: o,
               isFocusedOnly: r
            })
         }

         function nt(e, t) {
            var a, i;
            void 0 === t && (t = {});
            var n = t.inset,
               o = void 0 === n ? 0 : n,
               r = t.width,
               s = void 0 === r ? 1 : r,
               _ = t.position,
               l = void 0 === _ ? "relative" : _,
               u = t.highContrastStyle,
               c = t.borderColor,
               g = void 0 === c ? e.palette.white : c,
               h = t.outlineColor,
               p = void 0 === h ? e.palette.neutralSecondary : h,
               b = t.isFocusedOnly,
               d = void 0 === b || b;
            return {
               outline: "transparent",
               position: l,
               selectors: (a = {
                  "::-moz-focus-inner": {
                     border: "0"
                  }
               }, a["." + at.a + " &" + (d ? ":focus" : "") + ":after"] = {
                  content: '""',
                  position: "absolute",
                  left: o + 1,
                  top: o + 1,
                  bottom: o + 1,
                  right: o + 1,
                  border: s + "px solid " + g,
                  outline: s + "px solid " + p,
                  zIndex: tt.FocusStyle,
                  selectors: (i = {}, i[Ne] = u, i)
               }, a)
            }
         }

         function ot() {
            return {
               selectors: {
                  "&::-moz-focus-inner": {
                     border: 0
                  },
                  "&": {
                     outline: "transparent"
                  }
               }
            }
         }

         function rt(e, t, a, i) {
            var n;
            return void 0 === t && (t = 0), void 0 === a && (a = 1), {
               selectors: (n = {}, n[":global(" + at.a + ") &:focus"] = {
                  outline: a + " solid " + (i || e.palette.neutralSecondary),
                  outlineOffset: -t + "px"
               }, n)
            }
         }! function (e) {
            e.Nav = 1, e.ScrollablePane = 1, e.FocusStyle = 1, e.Coachmark = 1e3, e.Layer = 1e6, e.KeytipLayer = 1000001
         }(tt || (tt = {}));
         var st = function (e, t, a, i) {
               var n, o, r;
               void 0 === a && (a = "border"), void 0 === i && (i = -1);
               var s = "borderBottom" === a;
               return {
                  borderColor: e,
                  selectors: {
                     ":after": (n = {
                        pointerEvents: "none",
                        content: "''",
                        position: "absolute",
                        left: s ? 0 : i,
                        top: i,
                        bottom: i,
                        right: s ? 0 : i
                     }, n[a] = "2px solid " + e, n.borderRadius = t, n.width = "borderBottom" === a ? "100%" : void 0, n.selectors = (o = {}, o[Ne] = (r = {}, r["border" === a ? "borderColor" : "borderBottomColor"] = "Highlight", r), o), n)
                  }
               }
            },
            _t = {
               position: "absolute",
               width: 1,
               height: 1,
               margin: -1,
               padding: 0,
               border: 0,
               overflow: "hidden"
            };

         function lt(e, t) {
            return {
               borderColor: e,
               borderWidth: "0px",
               width: t,
               height: t
            }
         }

         function ut(e) {
            return {
               opacity: 1,
               borderWidth: e
            }
         }

         function ct(e, t) {
            return {
               borderWidth: "0",
               width: t,
               height: t,
               opacity: 0,
               borderColor: e
            }
         }

         function gt(e, t) {
            return Object(me.__assign)(Object(me.__assign)({}, lt(e, t)), {
               opacity: 0
            })
         }
         var ht = {
               continuousPulseAnimationDouble: function (e, t, a, i, n) {
                  return _({
                     "0%": lt(e, a),
                     "1.42%": ut(n),
                     "3.57%": {
                        opacity: 1
                     },
                     "7.14%": ct(t, i),
                     "8%": gt(e, a),
                     "29.99%": gt(e, a),
                     "30%": lt(e, a),
                     "31.42%": ut(n),
                     "33.57%": {
                        opacity: 1
                     },
                     "37.14%": ct(t, i),
                     "38%": gt(e, a),
                     "79.42%": gt(e, a),
                     79.43: lt(e, a),
                     81.85: ut(n),
                     83.42: {
                        opacity: 1
                     },
                     "87%": ct(t, i),
                     "100%": {}
                  })
               },
               continuousPulseAnimationSingle: function (e, t, a, i, n) {
                  return _({
                     "0%": lt(e, a),
                     "14.2%": ut(n),
                     "35.7%": {
                        opacity: 1
                     },
                     "71.4%": ct(t, i),
                     "100%": {}
                  })
               },
               createDefaultAnimation: function (e, t) {
                  return {
                     animationName: e,
                     animationIterationCount: "1",
                     animationDuration: "14s",
                     animationDelay: t || "2s"
                  }
               }
            },
            pt = a("gAQy"),
            bt = Object(pt.c)((function (e, t) {
               var a = r.b.getInstance();
               return t ? Object.keys(e).reduce((function (t, i) {
                  return t[i] = a.getClassName(e[i]), t
               }), {}) : e
            }));

         function dt(e, t, a) {
            return bt(e, void 0 !== a ? a : t.disableGlobalClassNames)
         }
         var Mt = a("XBd5");

         function mt(e, t, a) {
            var i, n = e,
               o = a || Se.a.getSettings(["theme"], void 0, e.customizations).theme;
            a && (i = {
               theme: a
            });
            var r = t && o && o.schemes && o.schemes[t];
            return o && r && o !== r && ((i = {
               theme: r
            }).theme.schemes = o.schemes), i && (n = {
               customizations: {
                  settings: Object(Mt.b)(e.customizations.settings, i),
                  scopedSettings: e.customizations.scopedSettings
               }
            }), n
         }
         var St = {
               boxShadow: "none",
               margin: 0,
               padding: 0,
               boxSizing: "border-box"
            },
            Tt = {
               overflow: "hidden",
               textOverflow: "ellipsis",
               whiteSpace: "nowrap"
            };

         function ft(e, t, a, i, n) {
            void 0 === t && (t = "bodyBackground"), void 0 === a && (a = "horizontal"), void 0 === i && (i = yt("width", a)), void 0 === n && (n = yt("height", a));
            var o = e.semanticColors[t] || e.palette[t],
               r = function (e) {
                  if ("#" === e[0]) return {
                     r: parseInt(e.slice(1, 3), 16),
                     g: parseInt(e.slice(3, 5), 16),
                     b: parseInt(e.slice(5, 7), 16)
                  };
                  if (0 === e.indexOf("rgba(")) {
                     var t = (e = e.match(/rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number);
                     return {
                        r: t[0],
                        g: t[1],
                        b: t[2]
                     }
                  }
                  return {
                     r: 255,
                     g: 255,
                     b: 255
                  }
               }(o);
            return {
               content: '""',
               position: "absolute",
               right: 0,
               bottom: 0,
               width: i,
               height: n,
               pointerEvents: "none",
               backgroundImage: "linear-gradient(" + ("vertical" === a ? "to bottom" : "to right") + ", " + ("rgba(" + r.r + ", " + r.g + ", " + r.b + ", 0)") + " 0%, " + o + " 100%)"
            }
         }

         function yt(e, t) {
            return "width" === e ? "horizontal" === t ? 20 : "100%" : "vertical" === t ? "50%" : "100%"
         }

         function vt(e) {
            return {
               selectors: {
                  "::placeholder": e,
                  ":-ms-input-placeholder": e,
                  "::-ms-input-placeholder": e
               }
            }
         }
         var Wt = a("t4P/"),
            Lt = a("O/Yb"),
            Et = Wt.a.getValue("icons", {
               __options: {
                  disableWarnings: !1,
                  warnOnMissingIcons: !0
               },
               __remapped: {}
            }),
            Ct = r.b.getInstance();
         Ct && Ct.onReset && Ct.onReset((function () {
            for (var e in Et) Et.hasOwnProperty(e) && Et[e].subset && (Et[e].subset.className = void 0)
         }));
         var wt = function (e) {
            return e.toLowerCase()
         };

         function kt(e, t) {
            var a = Object(me.__assign)(Object(me.__assign)({}, e), {
                  isRegistered: !1,
                  className: void 0
               }),
               i = e.icons;
            for (var n in t = t ? Object(me.__assign)(Object(me.__assign)({}, Et.__options), t) : Et.__options, i)
               if (i.hasOwnProperty(n)) {
                  var o = i[n],
                     r = wt(n);
                  Et[r] ? zt(n) : Et[r] = {
                     code: o,
                     subset: a
                  }
               }
         }

         function Pt(e) {
            for (var t = Et.__options, a = function (e) {
                  var a = wt(e);
                  Et[a] ? delete Et[a] : t.disableWarnings || Object(Lt.b)('The icon "' + e + '" tried to unregister but was not registered.'), Et.__remapped[a] && delete Et.__remapped[a], Object.keys(Et.__remapped).forEach((function (e) {
                     Et.__remapped[e] === a && delete Et.__remapped[e]
                  }))
               }, i = 0, n = e; i < n.length; i++) {
               a(n[i])
            }
         }

         function At(e, t) {
            Et.__remapped[wt(e)] = wt(t)
         }

         function It(e) {
            var t = void 0,
               a = Et.__options;
            if (e = e ? wt(e) : "", e = Et.__remapped[e] || e)
               if (t = Et[e]) {
                  var n = t.subset;
                  n && n.fontFace && (n.isRegistered || (Z(n.fontFace), n.isRegistered = !0), n.className || (n.className = Object(i.a)(n.style, {
                     fontFamily: n.fontFace.fontFamily,
                     fontWeight: n.fontFace.fontWeight || "normal",
                     fontStyle: n.fontFace.fontStyle || "normal"
                  })))
               } else !a.disableWarnings && a.warnOnMissingIcons && Object(Lt.b)('The icon "' + e + '" was used but not registered. See https://github.com/microsoft/fluentui/wiki/Using-icons for more information.');
            return t
         }

         function Ot(e) {
            Et.__options = Object(me.__assign)(Object(me.__assign)({}, Et.__options), e)
         }
         var Rt = [],
            Dt = void 0;

         function zt(e) {
            var t = Et.__options;
            t.disableWarnings || (Rt.push(e), void 0 === Dt && (Dt = setTimeout((function () {
               Object(Lt.b)("Some icons were re-registered. Applications should only call registerIcons for any given icon once. Redefining what an icon is may have unintended consequences. Duplicates include: \n" + Rt.slice(0, 10).join(", ") + (Rt.length > 10 ? " (+ " + (Rt.length - 10) + " more)" : "")), Dt = void 0, Rt = []
            }), 2e3)))
         }
         var Nt = {
            display: "inline-block"
         };

         function Gt(e) {
            var t = "",
               a = It(e);
            return a && (t = Object(i.a)(a.subset.className, Nt, {
               selectors: {
                  "::before": {
                     content: '"' + a.code + '"'
                  }
               }
            })), t
         }
         var Bt = a("agCW"),
            Ft = a("4A6G"),
            Qt = a("RkUh"),
            jt = a("G4/H");
         Object(jt.setVersion)("@uifabric/styling", "7.14.9"), Ce()
      },
      RkTK: function (e, t, a) {},
      RkUh: function (e, t, a) {
         "use strict";
         a.d(t, "b", (function () {
            return s
         })), a.d(t, "a", (function () {
            return _
         }));
         var i = a("agCW"),
            n = a("kRhf"),
            o = a("pxsQ"),
            r = a("lhp9");

         function s() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return _(e, Object(o.a)())
         }

         function _(e, t) {
            var a, o, s = {
               subComponentStyles: {}
            };
            if (!e[0] && e.length <= 1) return {
               subComponentStyles: {}
            };
            var _ = i.a.apply(void 0, e),
               l = [];
            for (var u in _)
               if (_.hasOwnProperty(u)) {
                  if ("subComponentStyles" === u) {
                     s.subComponentStyles = _.subComponentStyles || {};
                     continue
                  }
                  var c = _[u],
                     g = Object(n.a)(c),
                     h = g.classes,
                     p = g.objects;
                  if (null === (a = p) || void 0 === a ? void 0 : a.length)(M = Object(r.d)(t || {}, {
                     displayName: u
                  }, p)) && (l.push(M), s[u] = h.concat([M.className]).join(" "));
                  else s[u] = h.join(" ")
               } for (var b = 0, d = l; b < d.length; b++) {
               var M;
               (M = d[b]) && Object(r.a)(M, null === (o = t) || void 0 === o ? void 0 : o.specificityMultiplier)
            }
            return s
         }
      },
      Sfa5: function (e, t, a) {
         "use strict";

         function i(e, t, a) {}
         a.d(t, "a", (function () {
            return i
         }))
      },
      Sfje: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return S
         }));
         var i, n, o, r, s, _, l, u, c, g, h, p, b = a("a3ss"),
            d = a("Y65e"),
            M = (a("+JCI"), a("eExt")),
            m = a("mhro"),
            S = (i = Object(M.JsonProperty)("name", String, !0), n = Object(M.JsonProperty)("description", String, !0), o = Object(M.JsonProperty)("url", String, !0), r = Object(M.JsonProperty)("satoriID", String, !0), s = Object(M.JsonProperty)("image", m.a, !0), Object(M.JsonObject)((l = function () {
               Object(b.a)(this, "name", u, this), Object(b.a)(this, "description", c, this), Object(b.a)(this, "url", g, this), Object(b.a)(this, "satoriID", h, this), Object(b.a)(this, "image", p, this)
            }, u = Object(d.a)(l.prototype, "name", [i], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), c = Object(d.a)(l.prototype, "description", [n], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), g = Object(d.a)(l.prototype, "url", [o], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), h = Object(d.a)(l.prototype, "satoriID", [r], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), p = Object(d.a)(l.prototype, "image", [s], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return null
               }
            }), _ = l)) || _)
      },
      VF84: function (e, t, a) {
         "use strict";

         function i(e, t, a) {}
         a.d(t, "a", (function () {
            return i
         }))
      },
      Vq28: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("Wn9d");

         function n(e, t, a) {
            void 0 === a && (a = !0);
            var n = !1;
            if (e && t)
               if (a)
                  for (n = !1; t;) {
                     var o = Object(i.a)(t);
                     if (o === e) {
                        n = !0;
                        break
                     }
                     t = o
                  } else e.contains && (n = e.contains(t));
            return n
         }
      },
      VtL9: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("cL4v");

         function n(e) {
            var t;
            return e && Object(i.a)(e) && (t = e._virtual.parent), t
         }
      },
      VvCP: function (e, t, a) {
         "use strict";
         a.r(t), a.d(t, "__extends", (function () {
            return n
         })), a.d(t, "__assign", (function () {
            return o
         })), a.d(t, "__rest", (function () {
            return r
         })), a.d(t, "__decorate", (function () {
            return s
         })), a.d(t, "__param", (function () {
            return _
         })), a.d(t, "__metadata", (function () {
            return l
         })), a.d(t, "__awaiter", (function () {
            return u
         })), a.d(t, "__generator", (function () {
            return c
         })), a.d(t, "__createBinding", (function () {
            return g
         })), a.d(t, "__exportStar", (function () {
            return h
         })), a.d(t, "__values", (function () {
            return p
         })), a.d(t, "__read", (function () {
            return b
         })), a.d(t, "__spread", (function () {
            return d
         })), a.d(t, "__spreadArrays", (function () {
            return M
         })), a.d(t, "__await", (function () {
            return m
         })), a.d(t, "__asyncGenerator", (function () {
            return S
         })), a.d(t, "__asyncDelegator", (function () {
            return T
         })), a.d(t, "__asyncValues", (function () {
            return f
         })), a.d(t, "__makeTemplateObject", (function () {
            return y
         })), a.d(t, "__importStar", (function () {
            return v
         })), a.d(t, "__importDefault", (function () {
            return W
         })), a.d(t, "__classPrivateFieldGet", (function () {
            return L
         })), a.d(t, "__classPrivateFieldSet", (function () {
            return E
         }));
         var i = function (e, t) {
            return (i = Object.setPrototypeOf || {
                  __proto__: []
               }
               instanceof Array && function (e, t) {
                  e.__proto__ = t
               } || function (e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a])
               })(e, t)
         };

         function n(e, t) {
            function a() {
               this.constructor = e
            }
            i(e, t), e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a)
         }
         var o = function () {
            return (o = Object.assign || function (e) {
               for (var t, a = 1, i = arguments.length; a < i; a++)
                  for (var n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
               return e
            }).apply(this, arguments)
         };

         function r(e, t) {
            var a = {};
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (a[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
               var n = 0;
               for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (a[i[n]] = e[i[n]])
            }
            return a
         }

         function s(e, t, a, i) {
            var n, o = arguments.length,
               r = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, a) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, a, i);
            else
               for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (r = (o < 3 ? n(r) : o > 3 ? n(t, a, r) : n(t, a)) || r);
            return o > 3 && r && Object.defineProperty(t, a, r), r
         }

         function _(e, t) {
            return function (a, i) {
               t(a, i, e)
            }
         }

         function l(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
         }

         function u(e, t, a, i) {
            return new(a || (a = Promise))((function (n, o) {
               function r(e) {
                  try {
                     _(i.next(e))
                  } catch (t) {
                     o(t)
                  }
               }

               function s(e) {
                  try {
                     _(i.throw(e))
                  } catch (t) {
                     o(t)
                  }
               }

               function _(e) {
                  var t;
                  e.done ? n(e.value) : (t = e.value, t instanceof a ? t : new a((function (e) {
                     e(t)
                  }))).then(r, s)
               }
               _((i = i.apply(e, t || [])).next())
            }))
         }

         function c(e, t) {
            var a, i, n, o, r = {
               label: 0,
               sent: function () {
                  if (1 & n[0]) throw n[1];
                  return n[1]
               },
               trys: [],
               ops: []
            };
            return o = {
               next: s(0),
               throw: s(1),
               return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
               return this
            }), o;

            function s(o) {
               return function (s) {
                  return function (o) {
                     if (a) throw new TypeError("Generator is already executing.");
                     for (; r;) try {
                        if (a = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                        switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                           case 0:
                           case 1:
                              n = o;
                              break;
                           case 4:
                              return r.label++, {
                                 value: o[1],
                                 done: !1
                              };
                           case 5:
                              r.label++, i = o[1], o = [0];
                              continue;
                           case 7:
                              o = r.ops.pop(), r.trys.pop();
                              continue;
                           default:
                              if (!(n = r.trys, (n = n.length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                 r = 0;
                                 continue
                              }
                              if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                 r.label = o[1];
                                 break
                              }
                              if (6 === o[0] && r.label < n[1]) {
                                 r.label = n[1], n = o;
                                 break
                              }
                              if (n && r.label < n[2]) {
                                 r.label = n[2], r.ops.push(o);
                                 break
                              }
                              n[2] && r.ops.pop(), r.trys.pop();
                              continue
                        }
                        o = t.call(e, r)
                     } catch (s) {
                        o = [6, s], i = 0
                     } finally {
                        a = n = 0
                     }
                     if (5 & o[0]) throw o[1];
                     return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                     }
                  }([o, s])
               }
            }
         }

         function g(e, t, a, i) {
            void 0 === i && (i = a), e[i] = t[a]
         }

         function h(e, t) {
            for (var a in e) "default" === a || t.hasOwnProperty(a) || (t[a] = e[a])
         }

         function p(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
               a = t && e[t],
               i = 0;
            if (a) return a.call(e);
            if (e && "number" == typeof e.length) return {
               next: function () {
                  return e && i >= e.length && (e = void 0), {
                     value: e && e[i++],
                     done: !e
                  }
               }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
         }

         function b(e, t) {
            var a = "function" == typeof Symbol && e[Symbol.iterator];
            if (!a) return e;
            var i, n, o = a.call(e),
               r = [];
            try {
               for (;
                  (void 0 === t || t-- > 0) && !(i = o.next()).done;) r.push(i.value)
            } catch (s) {
               n = {
                  error: s
               }
            } finally {
               try {
                  i && !i.done && (a = o.return) && a.call(o)
               } finally {
                  if (n) throw n.error
               }
            }
            return r
         }

         function d() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]));
            return e
         }

         function M() {
            for (var e = 0, t = 0, a = arguments.length; t < a; t++) e += arguments[t].length;
            var i = Array(e),
               n = 0;
            for (t = 0; t < a; t++)
               for (var o = arguments[t], r = 0, s = o.length; r < s; r++, n++) i[n] = o[r];
            return i
         }

         function m(e) {
            return this instanceof m ? (this.v = e, this) : new m(e)
         }

         function S(e, t, a) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var i, n = a.apply(e, t || []),
               o = [];
            return i = {}, r("next"), r("throw"), r("return"), i[Symbol.asyncIterator] = function () {
               return this
            }, i;

            function r(e) {
               n[e] && (i[e] = function (t) {
                  return new Promise((function (a, i) {
                     o.push([e, t, a, i]) > 1 || s(e, t)
                  }))
               })
            }

            function s(e, t) {
               try {
                  (a = n[e](t)).value instanceof m ? Promise.resolve(a.value.v).then(_, l) : u(o[0][2], a)
               } catch (i) {
                  u(o[0][3], i)
               }
               var a
            }

            function _(e) {
               s("next", e)
            }

            function l(e) {
               s("throw", e)
            }

            function u(e, t) {
               e(t), o.shift(), o.length && s(o[0][0], o[0][1])
            }
         }

         function T(e) {
            var t, a;
            return t = {}, i("next"), i("throw", (function (e) {
               throw e
            })), i("return"), t[Symbol.iterator] = function () {
               return this
            }, t;

            function i(i, n) {
               t[i] = e[i] ? function (t) {
                  return (a = !a) ? {
                     value: m(e[i](t)),
                     done: "return" === i
                  } : n ? n(t) : t
               } : n
            }
         }

         function f(e) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var t, a = e[Symbol.asyncIterator];
            return a ? a.call(e) : (e = p(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function () {
               return this
            }, t);

            function i(a) {
               t[a] = e[a] && function (t) {
                  return new Promise((function (i, n) {
                     (function (e, t, a, i) {
                        Promise.resolve(i).then((function (t) {
                           e({
                              value: t,
                              done: a
                           })
                        }), t)
                     })(i, n, (t = e[a](t)).done, t.value)
                  }))
               }
            }
         }

         function y(e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {
               value: t
            }) : e.raw = t, e
         }

         function v(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
               for (var a in e) Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t.default = e, t
         }

         function W(e) {
            return e && e.__esModule ? e : {
               default: e
            }
         }

         function L(e, t) {
            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
            return t.get(e)
         }

         function E(e, t, a) {
            if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
            return t.set(e, a), a
         }
      },
      Wn9d: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("VtL9");

         function n(e, t) {
            return void 0 === t && (t = !0), e && (t && Object(i.a)(e) || e.parentNode && e.parentNode)
         }
      },
      X4G7: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = function () {
            function e() {}
            return e.MAPPING_PROPERTY = "__jsonconvert__mapping__", e.MAPPER_PROPERTY = "__jsonconvert__mapper__", e.CLASS_IDENTIFIER = "__jsonconvert__class_identifier__", e
         }();
         t.Settings = i;
         var n = function () {
            this.classPropertyName = "", this.jsonPropertyName = "", this.expectedJsonType = void 0, this.isOptional = !1, this.customConverter = null
         };
         t.MappingOptions = n
      },
      XBd5: function (e, t, a) {
         "use strict";
         a.d(t, "b", (function () {
            return n
         })), a.d(t, "a", (function () {
            return o
         }));
         var i = a("VvCP");

         function n(e, t) {
            return void 0 === e && (e = {}), (r(t) ? t : function (e) {
               return function (t) {
                  return e ? Object(i.__assign)(Object(i.__assign)({}, t), e) : t
               }
            }(t))(e)
         }

         function o(e, t) {
            return void 0 === e && (e = {}), (r(t) ? t : function (e) {
               void 0 === e && (e = {});
               return function (t) {
                  var a = Object(i.__assign)({}, t);
                  for (var n in e) e.hasOwnProperty(n) && (a[n] = Object(i.__assign)(Object(i.__assign)({}, t[n]), e[n]));
                  return a
               }
            }(t))(e)
         }

         function r(e) {
            return "function" == typeof e
         }
      },
      XWgi: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return L
         }));
         var i, n, o, r, s, _, l, u, c, g, h, p, b, d, M, m, S, T, f = a("a3ss"),
            y = a("Y65e"),
            v = (a("+JCI"), a("eExt")),
            W = a("mhro"),
            L = (i = Object(v.JsonProperty)("title", String, !0), n = Object(v.JsonProperty)("question", String, !0), o = Object(v.JsonProperty)("answer", String, !0), r = Object(v.JsonProperty)("url", String, !0), s = Object(v.JsonProperty)("qnaImage", W.a, !0), _ = Object(v.JsonProperty)("source", String, !0), l = Object(v.JsonProperty)("sourceUrl", String, !0), u = Object(v.JsonProperty)("sourceLogo", W.a, !0), Object(v.JsonObject)((g = function () {
               Object(f.a)(this, "title", h, this), Object(f.a)(this, "question", p, this), Object(f.a)(this, "answer", b, this), Object(f.a)(this, "url", d, this), Object(f.a)(this, "qnaImage", M, this), Object(f.a)(this, "source", m, this), Object(f.a)(this, "sourceUrl", S, this), Object(f.a)(this, "sourceLogo", T, this)
            }, h = Object(y.a)(g.prototype, "title", [i], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), p = Object(y.a)(g.prototype, "question", [n], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), b = Object(y.a)(g.prototype, "answer", [o], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), d = Object(y.a)(g.prototype, "url", [r], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), M = Object(y.a)(g.prototype, "qnaImage", [s], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return null
               }
            }), m = Object(y.a)(g.prototype, "source", [_], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), S = Object(y.a)(g.prototype, "sourceUrl", [l], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), T = Object(y.a)(g.prototype, "sourceLogo", [u], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return null
               }
            }), c = g)) || c)
      },
      Y65e: function (e, t, a) {
         "use strict";

         function i(e, t, a, i, n) {
            var o = {};
            return Object.keys(i).forEach((function (e) {
               o[e] = i[e]
            })), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = a.slice().reverse().reduce((function (a, i) {
               return i(e, t, a) || a
            }), o), n && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(n) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o
         }
         a.d(t, "a", (function () {
            return i
         }))
      },
      YK8o: function (e, t) {
         e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAJaXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZlpciM5DoX/8xRzBJLgehyuEXODOX5/oFKy5bVc1REdEzNOSykzmUzwAXh4kM36z7+3+Rc/kqo1IeaSakqWn1BD9Y0Pxd5+6nl3Npz38yPXJf5+GjePC54heZmZ2zW/MR5fbrg/w/XncVOuK75cC7nHwjcL9Mn6eb42knF/G3fhWqiu24dUS35tar8WGtfEY8r1Cg+zbif92zwNZFCakQeJ90uc2PMebhbI7dV4Fd69JOa56zMYNQnir8UA5Gl797O1rwF6Avn+ybxF//HpDfi+XePyBst0YcSHDy+4+GZcHo/xb8Lhssi/uSB3/7wHee9Z9l633bWQQDRdEXXAdvdlmNiBXM5tiSPzinzO56gcxTY7cPm0w3aO4arzeGUbF9x0zW23znm4gYnBL585ez+8nLEi2Vc/RP0U9HDbZ6ky8ZqX4ZcRUa89bHHnufU8b7jCk6djqncs5rjl08N8dfEnh9l7KETOlgdW2OU1sjBDPafvzMIhbl9+iwfg+3G5376KH0IVD8YDc2GDzfbbEj26l9iS42dhXuR8SyFn8rwWACKeHTHGCR6wyUl0ydnsfXYOHAsOaljuJfiOB1yMfmKkD0K2mOyL12dzT3Znro8+eR2Gm3BElCQZ31RpOCuESPzkUIihFiWGGGOKORYTa2xJUkgxpZSTklzLkkOOOeWcS665FSmhxJJKLqXU0qqvAgfGmmqupdbamjeNBzXWasxvjHTfpYcee+q5l157G4TPCCOONPIoo442/ZQJTcw08yyzzracWTDFCiuutPIqq662ibUtO+y408677Lrbw2uXV98dP/Cau7zmj6d0Xn54jVGT830Jp3QS1Wd4zAeHx7N6gID26jNbXAhePac+s9WTFNFjZFTfmOnUY7gwLOfjdg/fvXjul/xmYvklv/nvPGfUdX+H5wyue++3D7w2tc6N47FbFiqmVsg+rq/SjC9Ni1r70/M/tVBvbto+3G4Kuh9xrTV96jGYMnG9Em+HH6jHbo2WywrRLbunbTOP4FofHe9kHwaREWziF8pyo6To5nBLqpG4Gs9ZJae53Oo+4y9EScplLsij8mvDoioLsmFkFQnCeqPg6WPmdnXmbobrreyS24geOxdmniWUF51A9RWWWatJWXZm6XEHkjQXqH7tY37oE+IxLJNsqXnpNlIbjRVLHr1Ir8Sf2JV7bjHXkEes28ZU+8Lt0FpbhGocO2eKivGz+jjImikNmBJm9eJ6JA/Eslpu1EuqGqCFqCrmk7P5bsJ35zjtKnFZs2cg+ElbLExVYqMUV+/KKORRwS+gmaIMqLuK+t3FtksRtpgm5ocKDeAKw8wRgnp+NAEZ7kig14PnUbMPmSlsbipbZKTtHZlaQ4EagnWz2CWwC3rIJFwb/bO9vqweV4RUJO8FafS8yTeJpJydi+egHsLMNRJky5Xt/DTMYYSsXCVtlh4xnvWs/dnZ/MLETGg7ImdHgs9GlMOcLRArGuVEiPcwmaEAwgazhg2w7Ss4P0EzB1E0DXDuG5yVTNqukz/Bp0g8D1IvJ6sxHVX2zo9NdiMBlRl7V5fW3FDU6msCK/UBbmttAzckqle8n5OCAhkeNO1WXzytaX4H2I9wNEEOkP0AOUt/BtIfIN/hOC8cqQ93HM0FZPskLOUKy/5dWJpbXMo3KZVdJzqF6Ixdo9PatmGUrS0KJDaa0gg0k0dyF3lWr6aS/kG502kF9v1wZ1lrKHfCSvs9TOYP8H2C1/wBvk/wmj/A9wbvyXpJRgsN0PkvzzJa38vFurpsqrAkp0BnpJSeCzabl+tagM+Mcx0+4zrB/T+/UDbMT9LmuUCZmkxce8mZgCZfFMCFfzW6x+oB8cVVVCmVgqUp/N73Tmk2VLkVciUUQqA80sm1rgVUaL+jSn58PYcua+uOs+dgFwWnJS3kUurdJgPt6DZsG5uAU1HVrY50FJaeMQZ2CjvDe6tot0VUrFyotJ3+22mN0LvNpg5ze313+9nsWf9Q2zXlTODBZ30QeSxlvrAkQtzLySLfbYmkxQYuVST0Zw8Ma0cdI5ngo4l88PaQ9PbqopX2PaIRhz6XRnJVVMxXSsz8ntYbHjmiYmixyY4kiQZlTRoCYqliNS9rKfSyjaQlfPYYHtrqI4iqsL4tLOEcfQzZb9Fj6AZPy+GS8Ticv5Ey3NXI/7lsFtcZc5MO+1aYI9KfPdY1Sx15D2pzIdjm1m+HKJy0WR9n+yJSHjCVb7jhnM0vkMi7x3jomi3OHly3QNQbkR0ngeBoZNDxqjkRoxVpmg4ysTcKI/tVQZgjJOqbh9i81nt7VG0SdksEmUX/gITdo3TSSKODzqGfOgHVIh1V+U33aXkZRJd+NF9O+8HZvL9w441OiZKlniNS6J6CipNqJzWKQCkaKFr9BzKXaCjbCEVi+W899OzHKtr1oV9eJpifuuz9mVKV9jCwWtZY3/EqsS3jNcpr4UWpK2yFEqv0xHyreuemdfBcPE6ZmLo3YN/FY7oLpx3CJ+XVbenz41nmb1BHjl51GjIx9dMWBbi3l5VeeppXIUpbdItRoFjzqt24CdKWU7tNsYet7dFGI3d3RH7vl+q7NJ8iMQ8pX7pPXu9XN2l+isVn559gRFJOLUWOVnwv704pokssaVVvQqAUtUCf1myiabWLDVKhTil6tvJLZ5pXO1Bajhqzv+O/txglxHa+Uozkb/qNRSbDyCS2VAMvROFwPtCVQar4Mjd1p7k4ZNR06lVcBSc115U90FZvSONzojAPQrlP+7bwfHw2rwdAR0vNIKmo8nFjIA0vEpOaeOQfNV5/Vf45mQP+p/eh0oKFmfT7WRkHYtVm1I3bdwTeP7PpkkpdpYI49KWfBLjbxfvRVpot9mK4eWp9goppiWizBSVLSzR9p1H/YA87Uel26fRwkaLm6B4lIo+DpFzLPEKr9NZUEHSRkFQPKHkfPZCOkBhRq9wtNttJnPtU/S/ERfX7Npu57reWMipY3i4F0nIZDx4RXYbxsAPE8GI7YL1mSkPU+bRLQysG/WdLjxPk1+vtFlptl1LSCEPk5GNjXi9LEjGUbHCN95mnj5TTRmLhbS4z5eXy7eLbhdr/F/pvXqiQtnM61svzxktrz3aWcxmlmcvIhw+cTURi1JYTLRiStrqoz6B8RGtYSMTzlWGW+bvqxvyhLPq1hRSNifXmL2hzOteZ6XDoAAABhGlDQ1BJQ0MgcHJvZmlsZQAAeJx9kT1Iw1AUhU9TpUUqDu0g6pChOlkQFemoVShChVArtOpg8voLTRqSFBdHwbXg4M9i1cHFWVcHV0EQ/AFxcnRSdJES70sKLWK88Hgf591zeO8+QGhWmWr2TACqZhnpZELM5lbFwCuCGIYPYcRlZupzkpSCZ33dUyfVXYxneff9Wf35gskAn0g8y3TDIt4gntm0dM77xBFWlvPE58TjBl2Q+JHristvnEsOCzwzYmTS88QRYrHUxUoXs7KhEk8TR/OqRvlC1uU85y3OarXO2vfkLwwVtJVlrtMaQRKLWIIEEQrqqKAKCzHaNVJMpOk84eEfcvwSuRRyVcDIsYAaVMiOH/wPfs/WLE5NukmhBND7Ytsfo0BgF2g1bPv72LZbJ4D/GbjSOv5aE4h/kt7oaNEjYGAbuLjuaMoecLkDDD7psiE7kp+WUCwC72f0TTkgfAv0rblza5/j9AHI0KxSN8DBITBWoux1j3cHu+f2b097fj9/XnKsihuXbwAAAAZiS0dEABIAEgASD3h5ywAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+QIGwEUKgK+HN8AAAJOSURBVGje7Ze9jtNAFIXPtddoKxKQ9gVcIVFnoUBQwSOkXCkdFaDEciwkUERneUS0JaIIu2XSIAokdt8AaDcFRSwKVkII1umiJM6lcZBl5d9WPINyOntGk+/ce2bGAXbaKZVomz/med6dMAxfASg7jtPPYk1ty/BnAB4BOG82m0VlDMTgr0evSsPh8D0zk/QGZsADAJj5gRDirtQG5sFPNZlMDqQ14LruYRiGn+bBA4BhGF0pTyHXdQ+Z+QxAYcG0K8dxbkrXgRXhQURfpTuFVoWPNvEXqQysAx91QB4DQojSOvCRPkthQAhRGo/H5+vAE9FlvV6/zN3AJvBZ5j/VMbopfAr9JKKPhmG8qFarP1IZyAE+rl+GYdyr1WrfNoqQEOJW9HmQBzwAHIxGo7fTh712u33N930PwBEzF2MbLWDmE9M07XK5PJy+D8OwEZ+Xk+63Wq39SqUy2PN932PmJzM2WhHA016vBwDPYkO3ZfgnFgTBPoCBBuBoydzkuCGDgX6/PwAAbYU43Eh0hvKGJ6KLRqMx2PQe0CRoQCcNTO4GdF1X1wARXViW1VW5A51UMESkyRIf5TqQjI+KEeqkhsnzHkjGR6kOzIqPahHqZAWjyRIflQx0Z8VHmXuAiNpZVlOTJT6qGJgbHyUMLIqPChfZWNf1dwsNEFGwZJGrREWCLVbftSzr+0IDzHyyZJ3TxKKn24DXNO2Nbdsvl84zTdMGcJysdPR8HI3/U6FQeE5Er4noT8bVZgC/ieiDrusPbdt+TEQT7LTTTv+3/gImwPuey0cOqgAAAABJRU5ErkJggg=="
      },
      "Z/w7": function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return S
         }));
         var i, n, o, r, s, _, l, u, c, g, h, p, b = a("a3ss"),
            d = a("Y65e"),
            M = (a("+JCI"), a("eExt")),
            m = a("XWgi"),
            S = (i = Object(M.JsonProperty)("title", String, !0), n = Object(M.JsonProperty)("snippet", String, !0), o = Object(M.JsonProperty)("url", String, !0), r = Object(M.JsonProperty)("qnaData", [m.a], !0), s = Object(M.JsonProperty)("relatedEquations", [String], !0), Object(M.JsonObject)((l = function () {
               Object(b.a)(this, "title", u, this), Object(b.a)(this, "snippet", c, this), Object(b.a)(this, "url", g, this), Object(b.a)(this, "qnaData", h, this), Object(b.a)(this, "relatedEquations", p, this)
            }, u = Object(d.a)(l.prototype, "title", [i], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), c = Object(d.a)(l.prototype, "snippet", [n], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), g = Object(d.a)(l.prototype, "url", [o], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), h = Object(d.a)(l.prototype, "qnaData", [r], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), p = Object(d.a)(l.prototype, "relatedEquations", [s], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), _ = l)) || _)
      },
      Z67x: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return d
         }));
         var i, n, o, r, s, _, l, u, c, g, h = a("a3ss"),
            p = a("Y65e"),
            b = (a("+JCI"), a("eExt")),
            d = (i = Object(b.JsonProperty)("minX", Number, !0), n = Object(b.JsonProperty)("minY", Number, !0), o = Object(b.JsonProperty)("maxX", Number, !0), r = Object(b.JsonProperty)("maxY", Number, !0), Object(b.JsonObject)((_ = function () {
               function e() {
                  Object(h.a)(this, "minX", l, this), Object(h.a)(this, "minY", u, this), Object(h.a)(this, "maxX", c, this), Object(h.a)(this, "maxY", g, this)
               }
               return e.XAxesTicksMinMaxConfig = function (e, t) {
                  return {
                     max: e.maxX * t,
                     min: e.minX * t
                  }
               }, e.YAxesTicksMinMaxConfig = function (e, t) {
                  return {
                     max: e.maxY * t,
                     min: e.minY * t
                  }
               }, e
            }(), l = Object(p.a)(_.prototype, "minX", [i], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return -1
               }
            }), u = Object(p.a)(_.prototype, "minY", [n], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return -1
               }
            }), c = Object(p.a)(_.prototype, "maxX", [o], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return -1
               }
            }), g = Object(p.a)(_.prototype, "maxY", [r], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return -1
               }
            }), s = _)) || s)
      },
      a3ss: function (e, t, a) {
         "use strict";

         function i(e, t, a, i) {
            a && Object.defineProperty(e, t, {
               enumerable: a.enumerable,
               configurable: a.configurable,
               writable: a.writable,
               value: a.initializer ? a.initializer.call(i) : void 0
            })
         }
         a.d(t, "a", (function () {
            return i
         }))
      },
      agCW: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("VvCP");

         function n() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (e && 1 === e.length && e[0] && !e[0].subComponentStyles) return e[0];
            for (var a = {}, o = {}, r = 0, s = e; r < s.length; r++) {
               var _ = s[r];
               if (_)
                  for (var l in _)
                     if (_.hasOwnProperty(l)) {
                        if ("subComponentStyles" === l && void 0 !== _.subComponentStyles) {
                           var u = _.subComponentStyles;
                           for (var c in u) u.hasOwnProperty(c) && (o.hasOwnProperty(c) ? o[c].push(u[c]) : o[c] = [u[c]]);
                           continue
                        }
                        var g = a[l],
                           h = _[l];
                        a[l] = void 0 === g ? h : Object(i.__spreadArrays)(Array.isArray(g) ? g : [g], Array.isArray(h) ? h : [h])
                     }
            }
            if (Object.keys(o).length > 0) {
               a.subComponentStyles = {};
               var p = a.subComponentStyles,
                  b = function (e) {
                     if (o.hasOwnProperty(e)) {
                        var t = o[e];
                        p[e] = function (e) {
                           return n.apply(void 0, t.map((function (t) {
                              return "function" == typeof t ? t(e) : t
                           })))
                        }
                     }
                  };
               for (var c in o) b(c)
            }
            return a
         }
      },
      asmC: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("b3tr"),
            n = a("2dVK"),
            o = {
               root: "ms-Image",
               rootMaximizeFrame: "ms-Image--maximizeFrame",
               image: "ms-Image-image",
               imageCenter: "ms-Image-image--center",
               imageContain: "ms-Image-image--contain",
               imageCover: "ms-Image-image--cover",
               imageCenterContain: "ms-Image-image--centerContain",
               imageCenterCover: "ms-Image-image--centerCover",
               imageNone: "ms-Image-image--none",
               imageLandscape: "ms-Image-image--landscape",
               imagePortrait: "ms-Image-image--portrait"
            };
         t.getStyles = function (e) {
            var t = e.className,
               a = e.width,
               r = e.height,
               s = e.maximizeFrame,
               _ = e.isLoaded,
               l = e.shouldFadeIn,
               u = e.shouldStartVisible,
               c = e.isLandscape,
               g = e.isCenter,
               h = e.isContain,
               p = e.isCover,
               b = e.isCenterContain,
               d = e.isCenterCover,
               M = e.isNone,
               m = e.isError,
               S = e.isNotImageFit,
               T = e.theme,
               f = i.getGlobalClassNames(o, T),
               y = {
                  position: "absolute",
                  left: "50% /* @noflip */",
                  top: "50%",
                  transform: "translate(-50%,-50%)"
               },
               v = n.getWindow(),
               W = void 0 !== v && void 0 === v.navigator.msMaxTouchPoints,
               L = h && c || p && !c ? {
                  width: "100%",
                  height: "auto"
               } : {
                  width: "auto",
                  height: "100%"
               };
            return {
               root: [f.root, T.fonts.medium, {
                  overflow: "hidden"
               }, s && [f.rootMaximizeFrame, {
                  height: "100%",
                  width: "100%"
               }], _ && l && !u && i.AnimationClassNames.fadeIn400, (g || h || p || b || d) && {
                  position: "relative"
               }, t],
               image: [f.image, {
                  display: "block",
                  opacity: 0
               }, _ && ["is-loaded", {
                  opacity: 1
               }], g && [f.imageCenter, y], h && [f.imageContain, W && {
                  width: "100%",
                  height: "100%",
                  objectFit: "contain"
               }, !W && L, y], p && [f.imageCover, W && {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
               }, !W && L, y], b && [f.imageCenterContain, c && {
                  maxWidth: "100%"
               }, !c && {
                  maxHeight: "100%"
               }, y], d && [f.imageCenterCover, c && {
                  maxHeight: "100%"
               }, !c && {
                  maxWidth: "100%"
               }, y], M && [f.imageNone, {
                  width: "auto",
                  height: "auto"
               }], S && [!!a && !r && {
                  height: "auto",
                  width: "100%"
               }, !a && !!r && {
                  height: "100%",
                  width: "auto"
               }, !!a && !!r && {
                  height: "100%",
                  width: "100%"
               }], c && f.imageLandscape, !c && f.imagePortrait, !_ && "is-notLoaded", l && "is-fadeIn", m && "is-error"]
            }
         }
      },
      b3tr: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("VvCP");
         a("kMXd"), i.__exportStar(a("RaQO"), t)
      },
      bAdm: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return i
         }));
         a("O/Yb");

         function i(e, t, a, i, n) {}
      },
      bAv5: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return r
         })), a.d(t, "b", (function () {
            return s
         }));
         var i, n = a("AJs4"),
            o = a("d6cv");

         function r() {
            if (void 0 === i) {
               var e = Object(n.a)(),
                  t = function (e) {
                     var t = null;
                     try {
                        var a = Object(o.a)();
                        t = a ? a.localStorage.getItem(e) : null
                     } catch (i) {}
                     return t
                  }("language");
               null !== t && (i = t), void 0 === i && e && (i = e.documentElement.getAttribute("lang")), void 0 === i && (i = "en")
            }
            return i
         }

         function s(e, t) {
            void 0 === t && (t = !1);
            var a = Object(n.a)();
            a && a.documentElement.setAttribute("lang", e), t || function (e, t) {
               try {
                  var a = Object(o.a)();
                  a && a.localStorage.setItem(e, t)
               } catch (i) {}
            }("language", e), i = e
         }
      },
      cHtz: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("2dVK"),
            n = a("Fw86"),
            o = a("asmC");
         t.Image = i.styled(n.ImageBase, o.getStyles, void 0, {
            scope: "Image"
         }, !0)
      },
      cL4v: function (e, t, a) {
         "use strict";

         function i(e) {
            return e && !!e._virtual
         }
         a.d(t, "a", (function () {
            return i
         }))
      },
      d6cv: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return o
         }));
         var i = a("KEqS"),
            n = void 0;
         try {
            n = window
         } catch (r) {}

         function o(e) {
            if (!i.a && void 0 !== n) {
               var t = e;
               return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : n
            }
         }
      },
      eExt: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("JhVl");
         t.JsonConvert = i.JsonConvert;
         var n = a("vwdj");
         t.ValueCheckingMode = n.ValueCheckingMode, t.OperationMode = n.OperationMode;
         var o = a("t8ja");
         t.JsonObject = o.JsonObject, t.JsonProperty = o.JsonProperty, t.JsonConverter = o.JsonConverter;
         var r = a("vdsK");
         t.Any = r.Any
      },
      eHVd: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return s
         })), a.d(t, "c", (function () {
            return _
         })), a.d(t, "b", (function () {
            return l
         }));
         var i = a("kdvQ"),
            n = a("AJs4");
         var o, r = a("pxsQ");

         function s(e) {
            if (void 0 === e && (e = {}), void 0 !== e.rtl) return e.rtl;
            if (void 0 === o) {
               var t = function (e) {
                  var t = null;
                  try {
                     t = window.sessionStorage.getItem(e)
                  } catch (a) {}
                  return t
               }("isRTL");
               null !== t && _(o = "1" === t);
               var a = Object(n.a)();
               void 0 === o && a && (o = "rtl" === (a.body && a.body.getAttribute("dir") || a.documentElement.getAttribute("dir")), Object(r.b)(o))
            }
            return !!o
         }

         function _(e, t) {
            void 0 === t && (t = !1);
            var a = Object(n.a)();
            a && a.documentElement.setAttribute("dir", e ? "rtl" : "ltr"), t && function (e, t) {
               try {
                  window.sessionStorage.setItem(e, t)
               } catch (a) {}
            }("isRTL", e ? "1" : "0"), o = e, Object(r.b)(o)
         }

         function l(e, t) {
            return void 0 === t && (t = {}), s(t) && (e === i.a.left ? e = i.a.right : e === i.a.right && (e = i.a.left)), e
         }
      },
      eMAO: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return l
         }));
         var i = a("VvCP"),
            n = a("IcFl"),
            o = a("4A6G"),
            r = a("w52g"),
            s = a("DNp4"),
            _ = ["theme", "styles"];

         function l(e, t, a, l, u) {
            var c = (l = l || {
                  scope: "",
                  fields: void 0
               }).scope,
               g = l.fields,
               h = void 0 === g ? _ : g,
               p = n.forwardRef((function (_, l) {
                  var u, g = n.useRef(),
                     p = (u = n.useReducer((function (e) {
                        return e + 1
                     }), 0)[1], function () {
                        return u(null)
                     }),
                     b = n.useContext(s.a);
                  n.useEffect((function () {
                     if (!b.customizations.inCustomizerContext) return r.a.observe(p),
                        function () {
                           return r.a.unobserve(p)
                        }
                  }), []);
                  var d = r.a.getSettings(h, c, b.customizations),
                     M = d.styles,
                     m = (d.dir, Object(i.__rest)(d, ["styles", "dir"])),
                     S = a ? a(_) : void 0,
                     T = g.current && g.current.__cachedInputs__ || [];
                  if (!g.current || M !== T[1] || _.styles !== T[2]) {
                     var f = function (e) {
                        return Object(o.a)(e, t, M, _.styles)
                     };
                     f.__cachedInputs__ = [t, M, _.styles], f.__noStyleOverride__ = !M && !_.styles, g.current = f
                  }
                  return n.createElement(e, Object(i.__assign)({
                     ref: l
                  }, m, S, _, {
                     styles: g.current
                  }))
               }));
            return p.displayName = "Styled" + (e.displayName || e.name), u ? n.memo(p) : p
         }
      },
      eoYf: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("VvCP"),
            n = a("IcFl"),
            o = a("M50z"),
            r = a("2dVK"),
            s = a("b3tr");
         t.getIconContent = r.memoizeFunction((function (e) {
            var t = s.getIcon(e) || {
                  subset: {},
                  code: void 0
               },
               a = t.code,
               i = t.subset;
            return a ? {
               children: a,
               iconClassName: i.className,
               fontFamily: i.fontFace && i.fontFace.fontFamily
            } : null
         }), void 0, !0), t.FontIcon = function (e) {
            var a = e.iconName,
               s = e.className,
               _ = e.style,
               l = void 0 === _ ? {} : _,
               u = t.getIconContent(a) || {},
               c = u.iconClassName,
               g = u.children,
               h = u.fontFamily,
               p = r.getNativeProps(e, r.htmlElementProperties),
               b = e["aria-label"] ? {} : {
                  role: "presentation",
                  "aria-hidden": !0
               };
            return n.createElement("i", i.__assign({
               "data-icon-name": a
            }, b, p, {
               className: r.css(o.MS_ICON, o.classNames.root, c, !a && o.classNames.placeholder, s),
               style: i.__assign({
                  fontFamily: h
               }, l)
            }), g)
         }, t.getFontIcon = r.memoizeFunction((function (e, a, i) {
            return t.FontIcon({
               iconName: e,
               className: a,
               "aria-label": i
            })
         }))
      },
      fIO6: function (e, t) {
         e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDQ4IDIwNDgiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+DQogIDxwYXRoIGZpbGw9IiMxNDdGOEYiIGQ9Ik0xNzQ3IDI5MHExNCA4IDIzIDIzdDkgMzJxMCA4LTIgMTV0LTUgMTRsLTcwNyAxNDE1cS05IDE5LTI4IDI4bC0xNzMgODdxLTMyIDE2LTY5IDE2aC05cS00IDAtMTAtMWwtNDcgOTRxLTggMTYtMjMgMjV0LTM0IDEwcS0yNiAwLTQ1LTE5dC0xOS00NXEwLTEyIDctMzB0MTYtMzcgMjAtMzcgMTUtMjhxLTI2LTQwLTI2LTg3di0xNjVxMC0xNiA3LTI5bDU3Ni0xMTUyLTY1LTMyLTIzNyA0NzRxLTggMTYtMjMgMjV0LTM0IDEwcS0yNiAwLTQ1LTE5dC0xOS00NXEwLTEzIDctMjlsMjM5LTQ3OHExNi0zMiA0My01MHQ2My0xOXEzNSAwIDY2IDE3dDYyIDMybDcxLTE0MnE4LTE3IDIzLTI2dDM0LTlxMTMgMCAyMiA0IDEyLTI0IDIzLTQ3dDI2LTQzIDM2LTMwIDUzLTEycTMyIDAgNjEgMTVsOTQgNDdxMzIgMTYgNTAgNDJ0MTkgNjRxMCAzNC0xNSA2M3QtMzAgNTl6bS0yMDItMTAxbDg3IDQzIDI5LTU4LTg3LTQzLTI5IDU4em04NCAxODVsLTE5Mi05Ni02NjkgMTMzN3YxNTBxMCAxMSA4IDE5dDE5IDhxNCAwIDE2LTV0MjktMTMgMzUtMTcgMzYtMTkgMzAtMTYgMTktMTBsNjY5LTEzMzh6bTE2MyAzOTRxNTMgMCA5OSAyMHQ4MiA1NSA1NSA4MSAyMCAxMDBxMCA1My0yMCA5OXQtNTUgODItODEgNTUtMTAwIDIwaC0yODhsNjQtMTI4aDIyNHEyNyAwIDUwLTEwdDQwLTI3IDI4LTQxIDEwLTUwcTAtMjctMTAtNTB0LTI3LTQwLTQxLTI4LTUwLTEwcS0yNiAwLTQ1LTE5dC0xOS00NXEwLTI2IDE5LTQ1dDQ1LTE5ek0xMjggMTYwMHEwIDY2IDI1IDEyNHQ2OCAxMDIgMTAyIDY5IDEyNSAyNWg0NHEtNSAxNS04IDMxdC00IDMzcTAgMTcgMyAzM3Q5IDMxaC00NHEtOTMgMC0xNzQtMzV0LTE0Mi05Ni05Ni0xNDItMzYtMTc1cTAtOTMgMzUtMTc0dDk2LTE0MiAxNDItOTYgMTc1LTM2aDIyNGwtNjQgMTI4SDQ0OHEtNjYgMC0xMjQgMjV0LTEwMiA2OS02OSAxMDItMjUgMTI0eiIgLz4NCjwvc3ZnPg=="
      },
      "fhI+": function (e, t) {
         e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAH7XpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZhZcispEEX/WUUvAUiSYTmMEb2DXn4fSiVZg6dnP1VIYKAgyXtzspn//bvMP3zEOmuCphxLjJZPKKH4Sifby6ccv86G4/f4yDnF3w/j5jbhGZK3lame6yvj+vbC9QzXHsdNPmd8Pjdyt40vEuyTd3/cC8m4v4y7cG5U5qUTS073orZzo34uPEQ5v+Em1qXZf5uHgYSWhnKQeD/FiT1+w0UCuXwr38yvl8g6d/bRUeUPd26GQh6ud22tvVfQg5KvPfOs/VvvSfm+nuPypMt46ojOuxNOn8bldox/osMpkX+cyN3Wl+uc37VGXmtebldDRKPxZNSh7KuG9sKGyuV4LfIkvko/HU/hyRzTgXzYbhtPd8V5UFnGBTdcdcvNo+2uI2Lw0yda77uXYyxL8sV32TiF/bjlkxQZoOal+2lEGPY3WdxxbjnO6y5z8nAs9Y7NHK98+JjPJv/kMWv1rSJn801XyOU3rxFjI7d/WQUgbp246aHg63PCb+/4A1VBUA81Zy5Ybbts0dS9cUsOnIV1SnsxIWfSODdARZytCAPTg7PRibrobPI+OYceMwBVJPcSfAMBp+oHQvogWItJPvt9Nu8kd6z16qPfw/gmgFCJksCmSAWsEBT+pJDhUFXRoKpRk2ajRWuUGKLGGFPcTq4mSSFpiimlnEqqWXLImmNOOeeSa/FF8IFaYkkll1Jq9aZyUGWvyvrKSPNNWmjaYkstt9Jqhz49dO2xp5576XX4IQM3MeJII48y6nRm4ilmmDrjTDPPMuuCa0tWWLriSiuvsuoNtRPVl+cPUHMnav5Aaq9LN9QYNSldt3DbnejGDMR8cCCeNgIQ2m/MbHYh+I3cxswWj1GoR0jd2JjhNmJAGKbzutwNuzfkvoWb0fwt3PxXyJkN3d9AzgDdK27voDa2u+sHYhcr3Dq1gvUxP3M1Ptcd1Opv259ttKpGxPbScg54imiDkZiK01D3EmurP9vWUHRxo3WvrguANsGbV0AinPe5grqji9lKqHWafMT5hZoT/hOl//CChg5MbhnLAFlZapez2050jBpG7HAqbO/tYQc+xZW8okrHu7QWKo7auhkTPltXDgORsl0BliiQeiQfpdoSp4tjaBwwkG26amk+sUfueCogDXXa2UbfG/mVa1xN+7JZq9LpGmfOLc2yDac2KwXfn6UVmU2JNpjX1pB7a90yITyNvc1JG9fuh6turflqwbWtlWjZem1EPNdXLn4QdFsfaa0dyAyIAf7ylbmyoAZA76mRqt/tzHEhU48vAj9KaX5+mcfWfLIA6578xoPLZcwXevsPTeRuOcvCIKCUb3LUfI+8U65KjvNQ8nIXJW+rYMVSo6eS/RinkmHnoWS7dKp+rN5H7Zqfq/exNT/hzHuUMZ9x5vPL3N+lVLMjAfHgZ/e5a82XtHmky4dsMRe6HN7OhV+05p2J5MaiNJipS4pbd8STDDeqlZEKdVmtxPG+Z4o7eTXNuCNWfWO0AlJjM5upNXYkbpFIq6FtLZS7k4miffYJj4gDrRXiAIE5y4GHPqJWY3kIDO+25qsFL+3OFcpO52W5k0sxq5iON8bvypoyXKpptYlpIGLPPpDpS5mlTH+hJ3fPq5NadhsTb/QSiMlztQH8yY4vUElNiQpT7BCUvHlNnlHsGD7k4gqpRFE1gYDuSYSidCy37RQBiW0dJFej0QMyGTs0Jdt6XoQjspHgqPVClpEBNzud1Yxp10gerIPW0BuJDKdVzhJeAbSdWROKV/KpzEBlG9e3jfY7rQwlL9+Wqcgw1FDavNEuvtFupCA7bPZ0xN6RSaB0dIl1h97sCc/EXkIv5cegjDOulzqJ/N+GX0ZtIRDgJ3mRd20kcrKQTSSehpB7R0EVeI/KtImbO0lpg8CqMLu1RG/tt4j4eTpmp8iu+mBJJAE2qRGOKSh4p3W36iR2YxZAGicfyco5pXeoH8hr8/Z6xG4gjkiXbqHFfOohMEi83IQy0jp3wmI2qKJDYILkzQQt3MepiTJKSDuJmv4PDOWlNV+rFvhQbdyqtVfVxqkXzearZs29ate3VfuqWfMz1b7ET6E6wo47adUrKfV9X/jsCi+7mb+SZL+/0YqYPrA7nFMm0umkXIDCNaAjEWoQBNnXDnb2vi2ZpNsZRwYAGDenMZ6dRn/Padz5DLn4DOo11ymmfJhx/w/Dbv+k2HYvILldeHv2e5QseZfDjWSdcABMmwxGE0lx2DBhZVJ83zC5WXYmssj8jxciNyW7TkLa7QmYs+ADuCjJ/gRlX2Y3YdWRUjidMtDtKupEcB7RDJl2rEufO2Tzu/h6v9G3XPuzZ88Zx5gRWTHsQZU5zSoweng4PQP+sMdAzlgcpuBmv1jzAl6bCFFJ8GTDR8VyGpaz+ZD2Pyp3lY29+cpmBCh8JbnSvJorxqnD1Sm81xNlaUyIOCJUovB2/vSB9qgr1GDZpQVKV7CEhFwLfpBDNPDichYRy/5XFDRqeaM5emyCcY2QIEqM1MDUx5aatuOlGh4iITKVYVSCEbE0M0O1DRvHGiSCBQo0xBsB+UrtXdihFksQE+k4ttnirC3W3Hd9KELhPidaLb2VuWbZEWeMLwOU+VW+97KRQyY42KgHdVF+77oGSjaYsNuO0nd7LDjIWg5vA2kvS1hgttv5GzKZ31/qzzbiaqOY/wHzF7L8ZDwgwgAAAYRpQ0NQSUNDIHByb2ZpbGUAAHicfZE9SMNQFIVPU6VFKg7tIOqQoTpZEBXpqFUoQoVQK7TqYPL6C00akhQXR8G14ODPYtXBxVlXB1dBEPwBcXJ0UnSREu9LCi1ivPB4H+fdc3jvPkBoVplq9kwAqmYZ6WRCzOZWxcArghiGD2HEZWbqc5KUgmd93VMn1V2MZ3n3/Vn9+YLJAJ9IPMt0wyLeIJ7ZtHTO+8QRVpbzxOfE4wZdkPiR64rLb5xLDgs8M2Jk0vPEEWKx1MVKF7OyoRJPE0fzqkb5QtblPOctzmq1ztr35C8MFbSVZa7TGkESi1iCBBEK6qigCgsx2jVSTKTpPOHhH3L8ErkUclXAyLGAGlTIjh/8D37P1ixOTbpJoQTQ+2LbH6NAYBdoNWz7+9i2WyeA/xm40jr+WhOIf5Le6GjRI2BgG7i47mjKHnC5Aww+6bIhO5KfllAsAu9n9E05IHwL9K25c2uf4/QByNCsUjfAwSEwVqLsdY93B7vn9m9Pe34/f15yrIobl28AAAAGYktHRAASABIAEg94ecsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkCBsBFAtO1wyBAAACZ0lEQVRo3u3ZP4zSUBwH8O/vFRo3QCfjYGgclM1EZqe729TlGPEW43hB2isjcTCmvJCoi0wmjIyOnosmxj/MJsaB3VzigZMRHj8H4XI2QI/S9PqS/rbS98r78PvyKACkldZGRb1ezxwMBh6AKoDCqXPHALqWZR1UKpU/8wc7nU52OBw+BbDHzBcjWwgRM/NPIvoghHjhOM7bs8wTs8Xv+xaP2fH+7PxJjUajJ8z8KMrFAwAzE4BLzHxHKXXoed5LZhaBACK6HzCm6nuiahzRmE6nDz3PexwIYOZ8wJiCD5CPK9/M7Eopr64EhHlxYnyPZpRSezoDwMwVrQEASlLKks4AKKUqkQGIKHYAM+9q3YFVMdIFAKXUrtaAZbuRCHEhPqf7toUx0qYDy2KkFWBRjLTYRlfFSKsOLIqRdgB/jLQD+GOkI+C/GOn0ObAwRoKIhgHjj5PWAQClZrN5Yd6BbsDgrm8bnSTh55RcLvcPUCwWHSJ67u/E7PiZZVkHvrlfkwDI5/O/AYDWnSilvK6U+hjnl/sF9b7RaNwO9Sa2bfubYRjbAEbntPijbDb7YJNtFLZt9zOZzFbMiB9E9Mo0zZv1ev37SdQ3uaKUsjyZTA4B5Na8n3rtuu7dKFRik8m2bfeJaO04MXM5qraITS/guu6XEIjL7Xb7SiIAYRHj8bicGEAYRFQxElFuE+sgiCh5gDnCMIydIAQz35r9J5AsAAA4jvP5DIhCq9W6lkiAD/FrRRduJBZwCrG9DCGEOEo0YBWCiN7Ztv0p8YAliL5pmveIiLUAzBFEtAPgDYCtWq02RFpppZXWX+CJDkw+CjX4AAAAAElFTkSuQmCC"
      },
      fudW: function (e, t, a) {
         "use strict";
         var i = a("IcFl"),
            n = a.n(i),
            o = (a("RkTK"), a("73q9"), a("CjKy"), a("RaQO"));

         function r(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons"',
                  src: "url('" + e + "fabric-icons-a13498cf.woff') format('woff')"
               },
               icons: {
                  GlobalNavButton: "",
                  ChevronDown: "",
                  ChevronUp: "",
                  Edit: "",
                  Add: "",
                  Cancel: "",
                  More: "",
                  Settings: "",
                  Mail: "",
                  Filter: "",
                  Search: "",
                  Share: "",
                  BlockedSite: "",
                  FavoriteStar: "",
                  FavoriteStarFill: "",
                  CheckMark: "",
                  Delete: "",
                  ChevronLeft: "",
                  ChevronRight: "",
                  Calendar: "",
                  Megaphone: "",
                  Undo: "",
                  Flag: "",
                  Page: "",
                  Pinned: "",
                  View: "",
                  Clear: "",
                  Download: "",
                  Upload: "",
                  Folder: "",
                  Sort: "",
                  AlignRight: "",
                  AlignLeft: "",
                  Tag: "",
                  AddFriend: "",
                  Info: "",
                  SortLines: "",
                  List: "",
                  CircleRing: "",
                  Heart: "",
                  HeartFill: "",
                  Tiles: "",
                  Embed: "",
                  Glimmer: "",
                  Ascending: "",
                  Descending: "",
                  SortUp: "",
                  SortDown: "",
                  SyncToPC: "",
                  LargeGrid: "",
                  SkypeCheck: "",
                  SkypeClock: "",
                  SkypeMinus: "",
                  ClearFilter: "",
                  Flow: "",
                  StatusCircleCheckmark: "",
                  MoreVertical: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function s(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-0"',
                  src: "url('" + e + "fabric-icons-0-467ee27f.woff') format('woff')"
               },
               icons: {
                  PageLink: "",
                  CommentSolid: "",
                  ChangeEntitlements: "",
                  Installation: "",
                  WebAppBuilderModule: "",
                  WebAppBuilderFragment: "",
                  WebAppBuilderSlot: "",
                  BullseyeTargetEdit: "",
                  WebAppBuilderFragmentCreate: "",
                  PageData: "",
                  PageHeaderEdit: "",
                  ProductList: "",
                  UnpublishContent: "",
                  DependencyAdd: "",
                  DependencyRemove: "",
                  EntitlementPolicy: "",
                  EntitlementRedemption: "",
                  SchoolDataSyncLogo: "",
                  PinSolid12: "",
                  PinSolidOff12: "",
                  AddLink: "",
                  SharepointAppIcon16: "",
                  DataflowsLink: "",
                  TimePicker: "",
                  UserWarning: "",
                  ComplianceAudit: "",
                  InternetSharing: "",
                  Brightness: "",
                  MapPin: "",
                  Airplane: "",
                  Tablet: "",
                  QuickNote: "",
                  Video: "",
                  People: "",
                  Phone: "",
                  Pin: "",
                  Shop: "",
                  Stop: "",
                  Link: "",
                  AllApps: "",
                  Zoom: "",
                  ZoomOut: "",
                  Microphone: "",
                  Camera: "",
                  Attach: "",
                  Send: "",
                  FavoriteList: "",
                  PageSolid: "",
                  Forward: "",
                  Back: "",
                  Refresh: "",
                  Lock: "",
                  ReportHacked: "",
                  EMI: "",
                  MiniLink: "",
                  Blocked: "",
                  ReadingMode: "",
                  Favicon: "",
                  Remove: "",
                  Checkbox: "",
                  CheckboxComposite: "",
                  CheckboxFill: "",
                  CheckboxIndeterminate: "",
                  CheckboxCompositeReversed: "",
                  BackToWindow: "",
                  FullScreen: "",
                  Print: "",
                  Up: "",
                  Down: "",
                  OEM: "",
                  Save: "",
                  ReturnKey: "",
                  Cloud: "",
                  Flashlight: "",
                  CommandPrompt: "",
                  Sad: "",
                  RealEstate: "",
                  SIPMove: "",
                  EraseTool: "",
                  GripperTool: "",
                  Dialpad: "",
                  PageLeft: "",
                  PageRight: "",
                  MultiSelect: "",
                  KeyboardClassic: "",
                  Play: "",
                  Pause: "",
                  InkingTool: "",
                  Emoji2: "",
                  GripperBarHorizontal: "",
                  System: "",
                  Personalize: "",
                  SearchAndApps: "",
                  Globe: "",
                  EaseOfAccess: "",
                  ContactInfo: "",
                  Unpin: "",
                  Contact: "",
                  Memo: "",
                  IncomingCall: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function _(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-1"',
                  src: "url('" + e + "fabric-icons-1-4d521695.woff') format('woff')"
               },
               icons: {
                  Paste: "",
                  WindowsLogo: "",
                  Error: "",
                  GripperBarVertical: "",
                  Unlock: "",
                  Slideshow: "",
                  Trim: "",
                  AutoEnhanceOn: "",
                  AutoEnhanceOff: "",
                  Color: "",
                  SaveAs: "",
                  Light: "",
                  Filters: "",
                  AspectRatio: "",
                  Contrast: "",
                  Redo: "",
                  Crop: "",
                  PhotoCollection: "",
                  Album: "",
                  Rotate: "",
                  PanoIndicator: "",
                  Translate: "",
                  RedEye: "",
                  ViewOriginal: "",
                  ThumbnailView: "",
                  Package: "",
                  Telemarketer: "",
                  Warning: "",
                  Financial: "",
                  Education: "",
                  ShoppingCart: "",
                  Train: "",
                  Move: "",
                  TouchPointer: "",
                  Merge: "",
                  TurnRight: "",
                  Ferry: "",
                  Highlight: "",
                  PowerButton: "",
                  Tab: "",
                  Admin: "",
                  TVMonitor: "",
                  Speakers: "",
                  Game: "",
                  HorizontalTabKey: "",
                  UnstackSelected: "",
                  StackIndicator: "",
                  Nav2DMapView: "",
                  StreetsideSplitMinimize: "",
                  Car: "",
                  Bus: "",
                  EatDrink: "",
                  SeeDo: "",
                  LocationCircle: "",
                  Home: "",
                  SwitcherStartEnd: "",
                  ParkingLocation: "",
                  IncidentTriangle: "",
                  Touch: "",
                  MapDirections: "",
                  CaretHollow: "",
                  CaretSolid: "",
                  History: "",
                  Location: "",
                  MapLayers: "",
                  SearchNearby: "",
                  Work: "",
                  Recent: "",
                  Hotel: "",
                  Bank: "",
                  LocationDot: "",
                  Dictionary: "",
                  ChromeBack: "",
                  FolderOpen: "",
                  PinnedFill: "",
                  RevToggleKey: "",
                  USB: "",
                  Previous: "",
                  Next: "",
                  Sync: "",
                  Help: "",
                  Emoji: "",
                  MailForward: "",
                  ClosePane: "",
                  OpenPane: "",
                  PreviewLink: "",
                  ZoomIn: "",
                  Bookmarks: "",
                  Document: "",
                  ProtectedDocument: "",
                  OpenInNewWindow: "",
                  MailFill: "",
                  ViewAll: "",
                  Switch: "",
                  Rename: "",
                  Go: "",
                  Remote: "",
                  SelectAll: "",
                  Orientation: "",
                  Import: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function l(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-2"',
                  src: "url('" + e + "fabric-icons-2-63c99abf.woff') format('woff')"
               },
               icons: {
                  Picture: "",
                  ChromeClose: "",
                  ShowResults: "",
                  Message: "",
                  CalendarDay: "",
                  CalendarWeek: "",
                  MailReplyAll: "",
                  Read: "",
                  Cut: "",
                  PaymentCard: "",
                  Copy: "",
                  Important: "",
                  MailReply: "",
                  GotoToday: "",
                  Font: "",
                  FontColor: "",
                  FolderFill: "",
                  Permissions: "",
                  DisableUpdates: "",
                  Unfavorite: "",
                  Italic: "",
                  Underline: "",
                  Bold: "",
                  MoveToFolder: "",
                  Dislike: "",
                  Like: "",
                  AlignCenter: "",
                  OpenFile: "",
                  ClearSelection: "",
                  FontDecrease: "",
                  FontIncrease: "",
                  FontSize: "",
                  CellPhone: "",
                  RepeatOne: "",
                  RepeatAll: "",
                  Calculator: "",
                  Library: "",
                  PostUpdate: "",
                  NewFolder: "",
                  CalendarReply: "",
                  UnsyncFolder: "",
                  SyncFolder: "",
                  BlockContact: "",
                  Accept: "",
                  BulletedList: "",
                  Preview: "",
                  News: "",
                  Chat: "",
                  Group: "",
                  World: "",
                  Comment: "",
                  DockLeft: "",
                  DockRight: "",
                  Repair: "",
                  Accounts: "",
                  Street: "",
                  RadioBullet: "",
                  Stopwatch: "",
                  Clock: "",
                  WorldClock: "",
                  AlarmClock: "",
                  Photo: "",
                  ActionCenter: "",
                  Hospital: "",
                  Timer: "",
                  FullCircleMask: "",
                  LocationFill: "",
                  ChromeMinimize: "",
                  ChromeRestore: "",
                  Annotation: "",
                  Fingerprint: "",
                  Handwriting: "",
                  ChromeFullScreen: "",
                  Completed: "",
                  Label: "",
                  FlickDown: "",
                  FlickUp: "",
                  FlickLeft: "",
                  FlickRight: "",
                  MiniExpand: "",
                  MiniContract: "",
                  Streaming: "",
                  MusicInCollection: "",
                  OneDriveLogo: "",
                  CompassNW: "",
                  Code: "",
                  LightningBolt: "",
                  CalculatorMultiply: "",
                  CalculatorAddition: "",
                  CalculatorSubtract: "",
                  CalculatorPercentage: "",
                  CalculatorEqualTo: "",
                  PrintfaxPrinterFile: "",
                  StorageOptical: "",
                  Communications: "",
                  Headset: "",
                  Health: "",
                  Webcam2: "",
                  FrontCamera: "",
                  ChevronUpSmall: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function u(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-3"',
                  src: "url('" + e + "fabric-icons-3-089e217a.woff') format('woff')"
               },
               icons: {
                  ChevronDownSmall: "",
                  ChevronLeftSmall: "",
                  ChevronRightSmall: "",
                  ChevronUpMed: "",
                  ChevronDownMed: "",
                  ChevronLeftMed: "",
                  ChevronRightMed: "",
                  Devices2: "",
                  PC1: "",
                  PresenceChickletVideo: "",
                  Reply: "",
                  HalfAlpha: "",
                  ConstructionCone: "",
                  DoubleChevronLeftMed: "",
                  Volume0: "",
                  Volume1: "",
                  Volume2: "",
                  Volume3: "",
                  Chart: "",
                  Robot: "",
                  Manufacturing: "",
                  LockSolid: "",
                  FitPage: "",
                  FitWidth: "",
                  BidiLtr: "",
                  BidiRtl: "",
                  RightDoubleQuote: "",
                  Sunny: "",
                  CloudWeather: "",
                  Cloudy: "",
                  PartlyCloudyDay: "",
                  PartlyCloudyNight: "",
                  ClearNight: "",
                  RainShowersDay: "",
                  Rain: "",
                  Thunderstorms: "",
                  RainSnow: "",
                  Snow: "",
                  BlowingSnow: "",
                  Frigid: "",
                  Fog: "",
                  Squalls: "",
                  Duststorm: "",
                  Unknown: "",
                  Precipitation: "",
                  Ribbon: "",
                  AreaChart: "",
                  Assign: "",
                  FlowChart: "",
                  CheckList: "",
                  Diagnostic: "",
                  Generate: "",
                  LineChart: "",
                  Equalizer: "",
                  BarChartHorizontal: "",
                  BarChartVertical: "",
                  Freezing: "",
                  FunnelChart: "",
                  Processing: "",
                  Quantity: "",
                  ReportDocument: "",
                  StackColumnChart: "",
                  SnowShowerDay: "",
                  HailDay: "",
                  WorkFlow: "",
                  HourGlass: "",
                  StoreLogoMed20: "",
                  TimeSheet: "",
                  TriangleSolid: "",
                  UpgradeAnalysis: "",
                  VideoSolid: "",
                  RainShowersNight: "",
                  SnowShowerNight: "",
                  Teamwork: "",
                  HailNight: "",
                  PeopleAdd: "",
                  Glasses: "",
                  DateTime2: "",
                  Shield: "",
                  Header1: "",
                  PageAdd: "",
                  NumberedList: "",
                  PowerBILogo: "",
                  Info2: "",
                  MusicInCollectionFill: "",
                  Asterisk: "",
                  ErrorBadge: "",
                  CircleFill: "",
                  Record2: "",
                  AllAppsMirrored: "",
                  BookmarksMirrored: "",
                  BulletedListMirrored: "",
                  CaretHollowMirrored: "",
                  CaretSolidMirrored: "",
                  ChromeBackMirrored: "",
                  ClearSelectionMirrored: "",
                  ClosePaneMirrored: "",
                  DockLeftMirrored: "",
                  DoubleChevronLeftMedMirrored: "",
                  GoMirrored: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function c(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-4"',
                  src: "url('" + e + "fabric-icons-4-a656cc0a.woff') format('woff')"
               },
               icons: {
                  HelpMirrored: "",
                  ImportMirrored: "",
                  ImportAllMirrored: "",
                  ListMirrored: "",
                  MailForwardMirrored: "",
                  MailReplyMirrored: "",
                  MailReplyAllMirrored: "",
                  MiniContractMirrored: "",
                  MiniExpandMirrored: "",
                  OpenPaneMirrored: "",
                  ParkingLocationMirrored: "",
                  SendMirrored: "",
                  ShowResultsMirrored: "",
                  ThumbnailViewMirrored: "",
                  Media: "",
                  Devices3: "",
                  Focus: "",
                  VideoLightOff: "",
                  Lightbulb: "",
                  StatusTriangle: "",
                  VolumeDisabled: "",
                  Puzzle: "",
                  EmojiNeutral: "",
                  EmojiDisappointed: "",
                  HomeSolid: "",
                  Ringer: "",
                  PDF: "",
                  HeartBroken: "",
                  StoreLogo16: "",
                  MultiSelectMirrored: "",
                  Broom: "",
                  AddToShoppingList: "",
                  Cocktails: "",
                  Wines: "",
                  Articles: "",
                  Cycling: "",
                  DietPlanNotebook: "",
                  Pill: "",
                  ExerciseTracker: "",
                  HandsFree: "",
                  Medical: "",
                  Running: "",
                  Weights: "",
                  Trackers: "",
                  AddNotes: "",
                  AllCurrency: "",
                  BarChart4: "",
                  CirclePlus: "",
                  Coffee: "",
                  Cotton: "",
                  Market: "",
                  Money: "",
                  PieDouble: "",
                  PieSingle: "",
                  RemoveFilter: "",
                  Savings: "",
                  Sell: "",
                  StockDown: "",
                  StockUp: "",
                  Lamp: "",
                  Source: "",
                  MSNVideos: "",
                  Cricket: "",
                  Golf: "",
                  Baseball: "",
                  Soccer: "",
                  MoreSports: "",
                  AutoRacing: "",
                  CollegeHoops: "",
                  CollegeFootball: "",
                  ProFootball: "",
                  ProHockey: "",
                  Rugby: "",
                  SubstitutionsIn: "",
                  Tennis: "",
                  Arrivals: "",
                  Design: "",
                  Website: "",
                  Drop: "",
                  HistoricalWeather: "",
                  SkiResorts: "",
                  Snowflake: "",
                  BusSolid: "",
                  FerrySolid: "",
                  AirplaneSolid: "",
                  TrainSolid: "",
                  Ticket: "",
                  WifiWarning4: "",
                  Devices4: "",
                  AzureLogo: "",
                  BingLogo: "",
                  MSNLogo: "",
                  OutlookLogoInverse: "",
                  OfficeLogo: "",
                  SkypeLogo: "",
                  Door: "",
                  EditMirrored: "",
                  GiftCard: "",
                  DoubleBookmark: "",
                  StatusErrorFull: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function g(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-5"',
                  src: "url('" + e + "fabric-icons-5-f95ba260.woff') format('woff')"
               },
               icons: {
                  Certificate: "",
                  FastForward: "",
                  Rewind: "",
                  Photo2: "",
                  OpenSource: "",
                  Movers: "",
                  CloudDownload: "",
                  Family: "",
                  WindDirection: "",
                  Bug: "",
                  SiteScan: "",
                  BrowserScreenShot: "",
                  F12DevTools: "",
                  CSS: "",
                  JS: "",
                  DeliveryTruck: "",
                  ReminderPerson: "",
                  ReminderGroup: "",
                  ReminderTime: "",
                  TabletMode: "",
                  Umbrella: "",
                  NetworkTower: "",
                  CityNext: "",
                  CityNext2: "",
                  Section: "",
                  OneNoteLogoInverse: "",
                  ToggleFilled: "",
                  ToggleBorder: "",
                  SliderThumb: "",
                  ToggleThumb: "",
                  Documentation: "",
                  Badge: "",
                  Giftbox: "",
                  VisualStudioLogo: "",
                  HomeGroup: "",
                  ExcelLogoInverse: "",
                  WordLogoInverse: "",
                  PowerPointLogoInverse: "",
                  Cafe: "",
                  SpeedHigh: "",
                  Commitments: "",
                  ThisPC: "",
                  MusicNote: "",
                  MicOff: "",
                  PlaybackRate1x: "",
                  EdgeLogo: "",
                  CompletedSolid: "",
                  AlbumRemove: "",
                  MessageFill: "",
                  TabletSelected: "",
                  MobileSelected: "",
                  LaptopSelected: "",
                  TVMonitorSelected: "",
                  DeveloperTools: "",
                  Shapes: "",
                  InsertTextBox: "",
                  LowerBrightness: "",
                  WebComponents: "",
                  OfflineStorage: "",
                  DOM: "",
                  CloudUpload: "",
                  ScrollUpDown: "",
                  DateTime: "",
                  Event: "",
                  Cake: "",
                  Org: "",
                  PartyLeader: "",
                  DRM: "",
                  CloudAdd: "",
                  AppIconDefault: "",
                  Photo2Add: "",
                  Photo2Remove: "",
                  Calories: "",
                  POI: "",
                  AddTo: "",
                  RadioBtnOff: "",
                  RadioBtnOn: "",
                  ExploreContent: "",
                  Product: "",
                  ProgressLoopInner: "",
                  ProgressLoopOuter: "",
                  Blocked2: "",
                  FangBody: "",
                  Toolbox: "",
                  PageHeader: "",
                  ChatInviteFriend: "",
                  Brush: "",
                  Shirt: "",
                  Crown: "",
                  Diamond: "",
                  ScaleUp: "",
                  QRCode: "",
                  Feedback: "",
                  SharepointLogoInverse: "",
                  YammerLogo: "",
                  Hide: "",
                  Uneditable: "",
                  ReturnToSession: "",
                  OpenFolderHorizontal: "",
                  CalendarMirrored: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function h(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-6"',
                  src: "url('" + e + "fabric-icons-6-ef6fd590.woff') format('woff')"
               },
               icons: {
                  SwayLogoInverse: "",
                  OutOfOffice: "",
                  Trophy: "",
                  ReopenPages: "",
                  EmojiTabSymbols: "",
                  AADLogo: "",
                  AccessLogo: "",
                  AdminALogoInverse32: "",
                  AdminCLogoInverse32: "",
                  AdminDLogoInverse32: "",
                  AdminELogoInverse32: "",
                  AdminLLogoInverse32: "",
                  AdminMLogoInverse32: "",
                  AdminOLogoInverse32: "",
                  AdminPLogoInverse32: "",
                  AdminSLogoInverse32: "",
                  AdminYLogoInverse32: "",
                  DelveLogoInverse: "",
                  ExchangeLogoInverse: "",
                  LyncLogo: "",
                  OfficeVideoLogoInverse: "",
                  SocialListeningLogo: "",
                  VisioLogoInverse: "",
                  Balloons: "",
                  Cat: "",
                  MailAlert: "",
                  MailCheck: "",
                  MailLowImportance: "",
                  MailPause: "",
                  MailRepeat: "",
                  SecurityGroup: "",
                  Table: "",
                  VoicemailForward: "",
                  VoicemailReply: "",
                  Waffle: "",
                  RemoveEvent: "",
                  EventInfo: "",
                  ForwardEvent: "",
                  WipePhone: "",
                  AddOnlineMeeting: "",
                  JoinOnlineMeeting: "",
                  RemoveLink: "",
                  PeopleBlock: "",
                  PeopleRepeat: "",
                  PeopleAlert: "",
                  PeoplePause: "",
                  TransferCall: "",
                  AddPhone: "",
                  UnknownCall: "",
                  NoteReply: "",
                  NoteForward: "",
                  NotePinned: "",
                  RemoveOccurrence: "",
                  Timeline: "",
                  EditNote: "",
                  CircleHalfFull: "",
                  Room: "",
                  Unsubscribe: "",
                  Subscribe: "",
                  HardDrive: "",
                  RecurringTask: "",
                  TaskManager: "",
                  TaskManagerMirrored: "",
                  Combine: "",
                  Split: "",
                  DoubleChevronUp: "",
                  DoubleChevronLeft: "",
                  DoubleChevronRight: "",
                  TextBox: "",
                  TextField: "",
                  NumberField: "",
                  Dropdown: "",
                  PenWorkspace: "",
                  BookingsLogo: "",
                  ClassNotebookLogoInverse: "",
                  DelveAnalyticsLogo: "",
                  DocsLogoInverse: "",
                  Dynamics365Logo: "",
                  DynamicSMBLogo: "",
                  OfficeAssistantLogo: "",
                  OfficeStoreLogo: "",
                  OneNoteEduLogoInverse: "",
                  PlannerLogo: "",
                  PowerApps: "",
                  Suitcase: "",
                  ProjectLogoInverse: "",
                  CaretLeft8: "",
                  CaretRight8: "",
                  CaretUp8: "",
                  CaretDown8: "",
                  CaretLeftSolid8: "",
                  CaretRightSolid8: "",
                  CaretUpSolid8: "",
                  CaretDownSolid8: "",
                  ClearFormatting: "",
                  Superscript: "",
                  Subscript: "",
                  Strikethrough: "",
                  Export: "",
                  ExportMirrored: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function p(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-7"',
                  src: "url('" + e + "fabric-icons-7-2b97bb99.woff') format('woff')"
               },
               icons: {
                  SingleBookmark: "",
                  SingleBookmarkSolid: "",
                  DoubleChevronDown: "",
                  FollowUser: "",
                  ReplyAll: "",
                  WorkforceManagement: "",
                  RecruitmentManagement: "",
                  Questionnaire: "",
                  ManagerSelfService: "",
                  ProductionFloorManagement: "",
                  ProductRelease: "",
                  ProductVariant: "",
                  ReplyMirrored: "",
                  ReplyAllMirrored: "",
                  Medal: "",
                  AddGroup: "",
                  QuestionnaireMirrored: "",
                  CloudImportExport: "",
                  TemporaryUser: "",
                  CaretSolid16: "",
                  GroupedDescending: "",
                  GroupedAscending: "",
                  AwayStatus: "",
                  MyMoviesTV: "",
                  GenericScan: "",
                  AustralianRules: "",
                  WifiEthernet: "",
                  TrackersMirrored: "",
                  DateTimeMirrored: "",
                  StopSolid: "",
                  DoubleChevronUp12: "",
                  DoubleChevronDown12: "",
                  DoubleChevronLeft12: "",
                  DoubleChevronRight12: "",
                  CalendarAgenda: "",
                  ConnectVirtualMachine: "",
                  AddEvent: "",
                  AssetLibrary: "",
                  DataConnectionLibrary: "",
                  DocLibrary: "",
                  FormLibrary: "",
                  FormLibraryMirrored: "",
                  ReportLibrary: "",
                  ReportLibraryMirrored: "",
                  ContactCard: "",
                  CustomList: "",
                  CustomListMirrored: "",
                  IssueTracking: "",
                  IssueTrackingMirrored: "",
                  PictureLibrary: "",
                  OfficeAddinsLogo: "",
                  OfflineOneDriveParachute: "",
                  OfflineOneDriveParachuteDisabled: "",
                  TriangleSolidUp12: "",
                  TriangleSolidDown12: "",
                  TriangleSolidLeft12: "",
                  TriangleSolidRight12: "",
                  TriangleUp12: "",
                  TriangleDown12: "",
                  TriangleLeft12: "",
                  TriangleRight12: "",
                  ArrowUpRight8: "",
                  ArrowDownRight8: "",
                  DocumentSet: "",
                  GoToDashboard: "",
                  DelveAnalytics: "",
                  ArrowUpRightMirrored8: "",
                  ArrowDownRightMirrored8: "",
                  CompanyDirectory: "",
                  OpenEnrollment: "",
                  CompanyDirectoryMirrored: "",
                  OneDriveAdd: "",
                  ProfileSearch: "",
                  Header2: "",
                  Header3: "",
                  Header4: "",
                  RingerSolid: "",
                  Eyedropper: "",
                  MarketDown: "",
                  CalendarWorkWeek: "",
                  SidePanel: "",
                  GlobeFavorite: "",
                  CaretTopLeftSolid8: "",
                  CaretTopRightSolid8: "",
                  ViewAll2: "",
                  DocumentReply: "",
                  PlayerSettings: "",
                  ReceiptForward: "",
                  ReceiptReply: "",
                  ReceiptCheck: "",
                  Fax: "",
                  RecurringEvent: "",
                  ReplyAlt: "",
                  ReplyAllAlt: "",
                  EditStyle: "",
                  EditMail: "",
                  Lifesaver: "",
                  LifesaverLock: "",
                  InboxCheck: "",
                  FolderSearch: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function b(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-8"',
                  src: "url('" + e + "fabric-icons-8-6fdf1528.woff') format('woff')"
               },
               icons: {
                  CollapseMenu: "",
                  ExpandMenu: "",
                  Boards: "",
                  SunAdd: "",
                  SunQuestionMark: "",
                  LandscapeOrientation: "",
                  DocumentSearch: "",
                  PublicCalendar: "",
                  PublicContactCard: "",
                  PublicEmail: "",
                  PublicFolder: "",
                  WordDocument: "",
                  PowerPointDocument: "",
                  ExcelDocument: "",
                  GroupedList: "",
                  ClassroomLogo: "",
                  Sections: "",
                  EditPhoto: "",
                  Starburst: "",
                  ShareiOS: "",
                  AirTickets: "",
                  PencilReply: "",
                  Tiles2: "",
                  SkypeCircleCheck: "",
                  SkypeCircleClock: "",
                  SkypeCircleMinus: "",
                  SkypeMessage: "",
                  ClosedCaption: "",
                  ATPLogo: "",
                  OfficeFormsLogoInverse: "",
                  RecycleBin: "",
                  EmptyRecycleBin: "",
                  Hide2: "",
                  Breadcrumb: "",
                  BirthdayCake: "",
                  TimeEntry: "",
                  CRMProcesses: "",
                  PageEdit: "",
                  PageArrowRight: "",
                  PageRemove: "",
                  Database: "",
                  DataManagementSettings: "",
                  CRMServices: "",
                  EditContact: "",
                  ConnectContacts: "",
                  AppIconDefaultAdd: "",
                  AppIconDefaultList: "",
                  ActivateOrders: "",
                  DeactivateOrders: "",
                  ProductCatalog: "",
                  ScatterChart: "",
                  AccountActivity: "",
                  DocumentManagement: "",
                  CRMReport: "",
                  KnowledgeArticle: "",
                  Relationship: "",
                  HomeVerify: "",
                  ZipFolder: "",
                  SurveyQuestions: "",
                  TextDocument: "",
                  TextDocumentShared: "",
                  PageCheckedOut: "",
                  PageShared: "",
                  SaveAndClose: "",
                  Script: "",
                  Archive: "",
                  ActivityFeed: "",
                  Compare: "",
                  EventDate: "",
                  ArrowUpRight: "",
                  CaretRight: "",
                  SetAction: "",
                  ChatBot: "",
                  CaretSolidLeft: "",
                  CaretSolidDown: "",
                  CaretSolidRight: "",
                  CaretSolidUp: "",
                  PowerAppsLogo: "",
                  PowerApps2Logo: "",
                  SearchIssue: "",
                  SearchIssueMirrored: "",
                  FabricAssetLibrary: "",
                  FabricDataConnectionLibrary: "",
                  FabricDocLibrary: "",
                  FabricFormLibrary: "",
                  FabricFormLibraryMirrored: "",
                  FabricReportLibrary: "",
                  FabricReportLibraryMirrored: "",
                  FabricPublicFolder: "",
                  FabricFolderSearch: "",
                  FabricMovetoFolder: "",
                  FabricUnsyncFolder: "",
                  FabricSyncFolder: "",
                  FabricOpenFolderHorizontal: "",
                  FabricFolder: "",
                  FabricFolderFill: "",
                  FabricNewFolder: "",
                  FabricPictureLibrary: "",
                  PhotoVideoMedia: "",
                  AddFavorite: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function d(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-9"',
                  src: "url('" + e + "fabric-icons-9-c6162b42.woff') format('woff')"
               },
               icons: {
                  AddFavoriteFill: "",
                  BufferTimeBefore: "",
                  BufferTimeAfter: "",
                  BufferTimeBoth: "",
                  PublishContent: "",
                  ClipboardList: "",
                  ClipboardListMirrored: "",
                  CannedChat: "",
                  SkypeForBusinessLogo: "",
                  TabCenter: "",
                  PageCheckedin: "",
                  PageList: "",
                  ReadOutLoud: "",
                  CaretBottomLeftSolid8: "",
                  CaretBottomRightSolid8: "",
                  FolderHorizontal: "",
                  MicrosoftStaffhubLogo: "",
                  GiftboxOpen: "",
                  StatusCircleOuter: "",
                  StatusCircleInner: "",
                  StatusCircleRing: "",
                  StatusTriangleOuter: "",
                  StatusTriangleInner: "",
                  StatusTriangleExclamation: "",
                  StatusCircleExclamation: "",
                  StatusCircleErrorX: "",
                  StatusCircleInfo: "",
                  StatusCircleBlock: "",
                  StatusCircleBlock2: "",
                  StatusCircleQuestionMark: "",
                  StatusCircleSync: "",
                  Toll: "",
                  ExploreContentSingle: "",
                  CollapseContent: "",
                  CollapseContentSingle: "",
                  InfoSolid: "",
                  GroupList: "",
                  ProgressRingDots: "",
                  CaloriesAdd: "",
                  BranchFork: "",
                  MuteChat: "",
                  AddHome: "",
                  AddWork: "",
                  MobileReport: "",
                  ScaleVolume: "",
                  HardDriveGroup: "",
                  FastMode: "",
                  ToggleLeft: "",
                  ToggleRight: "",
                  TriangleShape: "",
                  RectangleShape: "",
                  CubeShape: "",
                  Trophy2: "",
                  BucketColor: "",
                  BucketColorFill: "",
                  Taskboard: "",
                  SingleColumn: "",
                  DoubleColumn: "",
                  TripleColumn: "",
                  ColumnLeftTwoThirds: "",
                  ColumnRightTwoThirds: "",
                  AccessLogoFill: "",
                  AnalyticsLogo: "",
                  AnalyticsQuery: "",
                  NewAnalyticsQuery: "",
                  AnalyticsReport: "",
                  WordLogo: "",
                  WordLogoFill: "",
                  ExcelLogo: "",
                  ExcelLogoFill: "",
                  OneNoteLogo: "",
                  OneNoteLogoFill: "",
                  OutlookLogo: "",
                  OutlookLogoFill: "",
                  PowerPointLogo: "",
                  PowerPointLogoFill: "",
                  PublisherLogo: "",
                  PublisherLogoFill: "",
                  ScheduleEventAction: "",
                  FlameSolid: "",
                  ServerProcesses: "",
                  Server: "",
                  SaveAll: "",
                  LinkedInLogo: "",
                  Decimals: "",
                  SidePanelMirrored: "",
                  ProtectRestrict: "",
                  Blog: "",
                  UnknownMirrored: "",
                  PublicContactCardMirrored: "",
                  GridViewSmall: "",
                  GridViewMedium: "",
                  GridViewLarge: "",
                  Step: "",
                  StepInsert: "",
                  StepShared: "",
                  StepSharedAdd: "",
                  StepSharedInsert: "",
                  ViewDashboard: "",
                  ViewList: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function M(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-10"',
                  src: "url('" + e + "fabric-icons-10-c4ded8e4.woff') format('woff')"
               },
               icons: {
                  ViewListGroup: "",
                  ViewListTree: "",
                  TriggerAuto: "",
                  TriggerUser: "",
                  PivotChart: "",
                  StackedBarChart: "",
                  StackedLineChart: "",
                  BuildQueue: "",
                  BuildQueueNew: "",
                  UserFollowed: "",
                  ContactLink: "",
                  Stack: "",
                  Bullseye: "",
                  VennDiagram: "",
                  FiveTileGrid: "",
                  FocalPoint: "",
                  Insert: "",
                  RingerRemove: "",
                  TeamsLogoInverse: "",
                  TeamsLogo: "",
                  TeamsLogoFill: "",
                  SkypeForBusinessLogoFill: "",
                  SharepointLogo: "",
                  SharepointLogoFill: "",
                  DelveLogo: "",
                  DelveLogoFill: "",
                  OfficeVideoLogo: "",
                  OfficeVideoLogoFill: "",
                  ExchangeLogo: "",
                  ExchangeLogoFill: "",
                  Signin: "",
                  DocumentApproval: "",
                  CloneToDesktop: "",
                  InstallToDrive: "",
                  Blur: "",
                  Build: "",
                  ProcessMetaTask: "",
                  BranchFork2: "",
                  BranchLocked: "",
                  BranchCommit: "",
                  BranchCompare: "",
                  BranchMerge: "",
                  BranchPullRequest: "",
                  BranchSearch: "",
                  BranchShelveset: "",
                  RawSource: "",
                  MergeDuplicate: "",
                  RowsGroup: "",
                  RowsChild: "",
                  Deploy: "",
                  Redeploy: "",
                  ServerEnviroment: "",
                  VisioDiagram: "",
                  HighlightMappedShapes: "",
                  TextCallout: "",
                  IconSetsFlag: "",
                  VisioLogo: "",
                  VisioLogoFill: "",
                  VisioDocument: "",
                  TimelineProgress: "",
                  TimelineDelivery: "",
                  Backlog: "",
                  TeamFavorite: "",
                  TaskGroup: "",
                  TaskGroupMirrored: "",
                  ScopeTemplate: "",
                  AssessmentGroupTemplate: "",
                  NewTeamProject: "",
                  CommentAdd: "",
                  CommentNext: "",
                  CommentPrevious: "",
                  ShopServer: "",
                  LocaleLanguage: "",
                  QueryList: "",
                  UserSync: "",
                  UserPause: "",
                  StreamingOff: "",
                  ArrowTallUpLeft: "",
                  ArrowTallUpRight: "",
                  ArrowTallDownLeft: "",
                  ArrowTallDownRight: "",
                  FieldEmpty: "",
                  FieldFilled: "",
                  FieldChanged: "",
                  FieldNotChanged: "",
                  RingerOff: "",
                  PlayResume: "",
                  BulletedList2: "",
                  BulletedList2Mirrored: "",
                  ImageCrosshair: "",
                  GitGraph: "",
                  Repo: "",
                  RepoSolid: "",
                  FolderQuery: "",
                  FolderList: "",
                  FolderListMirrored: "",
                  LocationOutline: "",
                  POISolid: "",
                  CalculatorNotEqualTo: "",
                  BoxSubtractSolid: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function m(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-11"',
                  src: "url('" + e + "fabric-icons-11-2a8393d6.woff') format('woff')"
               },
               icons: {
                  BoxAdditionSolid: "",
                  BoxMultiplySolid: "",
                  BoxPlaySolid: "",
                  BoxCheckmarkSolid: "",
                  CirclePauseSolid: "",
                  CirclePause: "",
                  MSNVideosSolid: "",
                  CircleStopSolid: "",
                  CircleStop: "",
                  NavigateBack: "",
                  NavigateBackMirrored: "",
                  NavigateForward: "",
                  NavigateForwardMirrored: "",
                  UnknownSolid: "",
                  UnknownMirroredSolid: "",
                  CircleAddition: "",
                  CircleAdditionSolid: "",
                  FilePDB: "",
                  FileTemplate: "",
                  FileSQL: "",
                  FileJAVA: "",
                  FileASPX: "",
                  FileCSS: "",
                  FileSass: "",
                  FileLess: "",
                  FileHTML: "",
                  JavaScriptLanguage: "",
                  CSharpLanguage: "",
                  CSharp: "",
                  VisualBasicLanguage: "",
                  VB: "",
                  CPlusPlusLanguage: "",
                  CPlusPlus: "",
                  FSharpLanguage: "",
                  FSharp: "",
                  TypeScriptLanguage: "",
                  PythonLanguage: "",
                  PY: "",
                  CoffeeScript: "",
                  MarkDownLanguage: "",
                  FullWidth: "",
                  FullWidthEdit: "",
                  Plug: "",
                  PlugSolid: "",
                  PlugConnected: "",
                  PlugDisconnected: "",
                  UnlockSolid: "",
                  Variable: "",
                  Parameter: "",
                  CommentUrgent: "",
                  Storyboard: "",
                  DiffInline: "",
                  DiffSideBySide: "",
                  ImageDiff: "",
                  ImagePixel: "",
                  FileBug: "",
                  FileCode: "",
                  FileComment: "",
                  BusinessHoursSign: "",
                  FileImage: "",
                  FileSymlink: "",
                  AutoFillTemplate: "",
                  WorkItem: "",
                  WorkItemBug: "",
                  LogRemove: "",
                  ColumnOptions: "",
                  Packages: "",
                  BuildIssue: "",
                  AssessmentGroup: "",
                  VariableGroup: "",
                  FullHistory: "",
                  Wheelchair: "",
                  SingleColumnEdit: "",
                  DoubleColumnEdit: "",
                  TripleColumnEdit: "",
                  ColumnLeftTwoThirdsEdit: "",
                  ColumnRightTwoThirdsEdit: "",
                  StreamLogo: "",
                  PassiveAuthentication: "",
                  AlertSolid: "",
                  MegaphoneSolid: "",
                  TaskSolid: "",
                  ConfigurationSolid: "",
                  BugSolid: "",
                  CrownSolid: "",
                  Trophy2Solid: "",
                  QuickNoteSolid: "",
                  ConstructionConeSolid: "",
                  PageListSolid: "",
                  PageListMirroredSolid: "",
                  StarburstSolid: "",
                  ReadingModeSolid: "",
                  SadSolid: "",
                  HealthSolid: "",
                  ShieldSolid: "",
                  GiftBoxSolid: "",
                  ShoppingCartSolid: "",
                  MailSolid: "",
                  ChatSolid: "",
                  RibbonSolid: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function S(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-12"',
                  src: "url('" + e + "fabric-icons-12-7e945a1e.woff') format('woff')"
               },
               icons: {
                  FinancialSolid: "",
                  FinancialMirroredSolid: "",
                  HeadsetSolid: "",
                  PermissionsSolid: "",
                  ParkingSolid: "",
                  ParkingMirroredSolid: "",
                  DiamondSolid: "",
                  AsteriskSolid: "",
                  OfflineStorageSolid: "",
                  BankSolid: "",
                  DecisionSolid: "",
                  Parachute: "",
                  ParachuteSolid: "",
                  FiltersSolid: "",
                  ColorSolid: "",
                  ReviewSolid: "",
                  ReviewRequestSolid: "",
                  ReviewRequestMirroredSolid: "",
                  ReviewResponseSolid: "",
                  FeedbackRequestSolid: "",
                  FeedbackRequestMirroredSolid: "",
                  FeedbackResponseSolid: "",
                  WorkItemBar: "",
                  WorkItemBarSolid: "",
                  Separator: "",
                  NavigateExternalInline: "",
                  PlanView: "",
                  TimelineMatrixView: "",
                  EngineeringGroup: "",
                  ProjectCollection: "",
                  CaretBottomRightCenter8: "",
                  CaretBottomLeftCenter8: "",
                  CaretTopRightCenter8: "",
                  CaretTopLeftCenter8: "",
                  DonutChart: "",
                  ChevronUnfold10: "",
                  ChevronFold10: "",
                  DoubleChevronDown8: "",
                  DoubleChevronUp8: "",
                  DoubleChevronLeft8: "",
                  DoubleChevronRight8: "",
                  ChevronDownEnd6: "",
                  ChevronUpEnd6: "",
                  ChevronLeftEnd6: "",
                  ChevronRightEnd6: "",
                  ContextMenu: "",
                  AzureAPIManagement: "",
                  AzureServiceEndpoint: "",
                  VSTSLogo: "",
                  VSTSAltLogo1: "",
                  VSTSAltLogo2: "",
                  FileTypeSolution: "",
                  WordLogoInverse16: "",
                  WordLogo16: "",
                  WordLogoFill16: "",
                  PowerPointLogoInverse16: "",
                  PowerPointLogo16: "",
                  PowerPointLogoFill16: "",
                  ExcelLogoInverse16: "",
                  ExcelLogo16: "",
                  ExcelLogoFill16: "",
                  OneNoteLogoInverse16: "",
                  OneNoteLogo16: "",
                  OneNoteLogoFill16: "",
                  OutlookLogoInverse16: "",
                  OutlookLogo16: "",
                  OutlookLogoFill16: "",
                  PublisherLogoInverse16: "",
                  PublisherLogo16: "",
                  PublisherLogoFill16: "",
                  VisioLogoInverse16: "",
                  VisioLogo16: "",
                  VisioLogoFill16: "",
                  TestBeaker: "",
                  TestBeakerSolid: "",
                  TestExploreSolid: "",
                  TestAutoSolid: "",
                  TestUserSolid: "",
                  TestImpactSolid: "",
                  TestPlan: "",
                  TestStep: "",
                  TestParameter: "",
                  TestSuite: "",
                  TestCase: "",
                  Sprint: "",
                  SignOut: "",
                  TriggerApproval: "",
                  Rocket: "",
                  AzureKeyVault: "",
                  Onboarding: "",
                  Transition: "",
                  LikeSolid: "",
                  DislikeSolid: "",
                  CRMCustomerInsightsApp: "",
                  EditCreate: "",
                  PlayReverseResume: "",
                  PlayReverse: "",
                  SearchData: "",
                  UnSetColor: "",
                  DeclineCall: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function T(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-13"',
                  src: "url('" + e + "fabric-icons-13-c3989a02.woff') format('woff')"
               },
               icons: {
                  RectangularClipping: "",
                  TeamsLogo16: "",
                  TeamsLogoFill16: "",
                  Spacer: "",
                  SkypeLogo16: "",
                  SkypeForBusinessLogo16: "",
                  SkypeForBusinessLogoFill16: "",
                  FilterSolid: "",
                  MailUndelivered: "",
                  MailTentative: "",
                  MailTentativeMirrored: "",
                  MailReminder: "",
                  ReceiptUndelivered: "",
                  ReceiptTentative: "",
                  ReceiptTentativeMirrored: "",
                  Inbox: "",
                  IRMReply: "",
                  IRMReplyMirrored: "",
                  IRMForward: "",
                  IRMForwardMirrored: "",
                  VoicemailIRM: "",
                  EventAccepted: "",
                  EventTentative: "",
                  EventTentativeMirrored: "",
                  EventDeclined: "",
                  IDBadge: "",
                  BackgroundColor: "",
                  OfficeFormsLogoInverse16: "",
                  OfficeFormsLogo: "",
                  OfficeFormsLogoFill: "",
                  OfficeFormsLogo16: "",
                  OfficeFormsLogoFill16: "",
                  OfficeFormsLogoInverse24: "",
                  OfficeFormsLogo24: "",
                  OfficeFormsLogoFill24: "",
                  PageLock: "",
                  NotExecuted: "",
                  NotImpactedSolid: "",
                  FieldReadOnly: "",
                  FieldRequired: "",
                  BacklogBoard: "",
                  ExternalBuild: "",
                  ExternalTFVC: "",
                  ExternalXAML: "",
                  IssueSolid: "",
                  DefectSolid: "",
                  LadybugSolid: "",
                  NugetLogo: "",
                  TFVCLogo: "",
                  ProjectLogo32: "",
                  ProjectLogoFill32: "",
                  ProjectLogo16: "",
                  ProjectLogoFill16: "",
                  SwayLogo32: "",
                  SwayLogoFill32: "",
                  SwayLogo16: "",
                  SwayLogoFill16: "",
                  ClassNotebookLogo32: "",
                  ClassNotebookLogoFill32: "",
                  ClassNotebookLogo16: "",
                  ClassNotebookLogoFill16: "",
                  ClassNotebookLogoInverse32: "",
                  ClassNotebookLogoInverse16: "",
                  StaffNotebookLogo32: "",
                  StaffNotebookLogoFill32: "",
                  StaffNotebookLogo16: "",
                  StaffNotebookLogoFill16: "",
                  StaffNotebookLogoInverted32: "",
                  StaffNotebookLogoInverted16: "",
                  KaizalaLogo: "",
                  TaskLogo: "",
                  ProtectionCenterLogo32: "",
                  GallatinLogo: "",
                  Globe2: "",
                  Guitar: "",
                  Breakfast: "",
                  Brunch: "",
                  BeerMug: "",
                  Vacation: "",
                  Teeth: "",
                  Taxi: "",
                  Chopsticks: "",
                  SyncOccurence: "",
                  UnsyncOccurence: "",
                  GIF: "",
                  PrimaryCalendar: "",
                  SearchCalendar: "",
                  VideoOff: "",
                  MicrosoftFlowLogo: "",
                  BusinessCenterLogo: "",
                  ToDoLogoBottom: "",
                  ToDoLogoTop: "",
                  EditSolid12: "",
                  EditSolidMirrored12: "",
                  UneditableSolid12: "",
                  UneditableSolidMirrored12: "",
                  UneditableMirrored: "",
                  AdminALogo32: "",
                  AdminALogoFill32: "",
                  ToDoLogoInverse: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function f(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-14"',
                  src: "url('" + e + "fabric-icons-14-5cf58db8.woff') format('woff')"
               },
               icons: {
                  Snooze: "",
                  WaffleOffice365: "",
                  ImageSearch: "",
                  NewsSearch: "",
                  VideoSearch: "",
                  R: "",
                  FontColorA: "",
                  FontColorSwatch: "",
                  LightWeight: "",
                  NormalWeight: "",
                  SemiboldWeight: "",
                  GroupObject: "",
                  UngroupObject: "",
                  AlignHorizontalLeft: "",
                  AlignHorizontalCenter: "",
                  AlignHorizontalRight: "",
                  AlignVerticalTop: "",
                  AlignVerticalCenter: "",
                  AlignVerticalBottom: "",
                  HorizontalDistributeCenter: "",
                  VerticalDistributeCenter: "",
                  Ellipse: "",
                  Line: "",
                  Octagon: "",
                  Hexagon: "",
                  Pentagon: "",
                  RightTriangle: "",
                  HalfCircle: "",
                  QuarterCircle: "",
                  ThreeQuarterCircle: "",
                  "6PointStar": "",
                  "12PointStar": "",
                  ArrangeBringToFront: "",
                  ArrangeSendToBack: "",
                  ArrangeSendBackward: "",
                  ArrangeBringForward: "",
                  BorderDash: "",
                  BorderDot: "",
                  LineStyle: "",
                  LineThickness: "",
                  WindowEdit: "",
                  HintText: "",
                  MediaAdd: "",
                  AnchorLock: "",
                  AutoHeight: "",
                  ChartSeries: "",
                  ChartXAngle: "",
                  ChartYAngle: "",
                  Combobox: "",
                  LineSpacing: "",
                  Padding: "",
                  PaddingTop: "",
                  PaddingBottom: "",
                  PaddingLeft: "",
                  PaddingRight: "",
                  NavigationFlipper: "",
                  AlignJustify: "",
                  TextOverflow: "",
                  VisualsFolder: "",
                  VisualsStore: "",
                  PictureCenter: "",
                  PictureFill: "",
                  PicturePosition: "",
                  PictureStretch: "",
                  PictureTile: "",
                  Slider: "",
                  SliderHandleSize: "",
                  DefaultRatio: "",
                  NumberSequence: "",
                  GUID: "",
                  ReportAdd: "",
                  DashboardAdd: "",
                  MapPinSolid: "",
                  WebPublish: "",
                  PieSingleSolid: "",
                  BlockedSolid: "",
                  DrillDown: "",
                  DrillDownSolid: "",
                  DrillExpand: "",
                  DrillShow: "",
                  SpecialEvent: "",
                  OneDriveFolder16: "",
                  FunctionalManagerDashboard: "",
                  BIDashboard: "",
                  CodeEdit: "",
                  RenewalCurrent: "",
                  RenewalFuture: "",
                  SplitObject: "",
                  BulkUpload: "",
                  DownloadDocument: "",
                  GreetingCard: "",
                  Flower: "",
                  WaitlistConfirm: "",
                  WaitlistConfirmMirrored: "",
                  LaptopSecure: "",
                  DragObject: "",
                  EntryView: "",
                  EntryDecline: "",
                  ContactCardSettings: "",
                  ContactCardSettingsMirrored: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function y(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-15"',
                  src: "url('" + e + "fabric-icons-15-3807251b.woff') format('woff')"
               },
               icons: {
                  CalendarSettings: "",
                  CalendarSettingsMirrored: "",
                  HardDriveLock: "",
                  HardDriveUnlock: "",
                  AccountManagement: "",
                  ReportWarning: "",
                  TransitionPop: "",
                  TransitionPush: "",
                  TransitionEffect: "",
                  LookupEntities: "",
                  ExploreData: "",
                  AddBookmark: "",
                  SearchBookmark: "",
                  DrillThrough: "",
                  MasterDatabase: "",
                  CertifiedDatabase: "",
                  MaximumValue: "",
                  MinimumValue: "",
                  VisualStudioIDELogo32: "",
                  PasteAsText: "",
                  PasteAsCode: "",
                  BrowserTab: "",
                  BrowserTabScreenshot: "",
                  DesktopScreenshot: "",
                  FileYML: "",
                  ClipboardSolid: "",
                  FabricUserFolder: "",
                  FabricNetworkFolder: "",
                  BullseyeTarget: "",
                  AnalyticsView: "",
                  Video360Generic: "",
                  Untag: "",
                  Leave: "",
                  Trending12: "",
                  Blocked12: "",
                  Warning12: "",
                  CheckedOutByOther12: "",
                  CheckedOutByYou12: "",
                  CircleShapeSolid: "",
                  SquareShapeSolid: "",
                  TriangleShapeSolid: "",
                  DropShapeSolid: "",
                  RectangleShapeSolid: "",
                  ZoomToFit: "",
                  InsertColumnsLeft: "",
                  InsertColumnsRight: "",
                  InsertRowsAbove: "",
                  InsertRowsBelow: "",
                  DeleteColumns: "",
                  DeleteRows: "",
                  DeleteRowsMirrored: "",
                  DeleteTable: "",
                  AccountBrowser: "",
                  VersionControlPush: "",
                  StackedColumnChart2: "",
                  TripleColumnWide: "",
                  QuadColumn: "",
                  WhiteBoardApp16: "",
                  WhiteBoardApp32: "",
                  PinnedSolid: "",
                  InsertSignatureLine: "",
                  ArrangeByFrom: "",
                  Phishing: "",
                  CreateMailRule: "",
                  PublishCourse: "",
                  DictionaryRemove: "",
                  UserRemove: "",
                  UserEvent: "",
                  Encryption: "",
                  PasswordField: "",
                  OpenInNewTab: "",
                  Hide3: "",
                  VerifiedBrandSolid: "",
                  MarkAsProtected: "",
                  AuthenticatorApp: "",
                  WebTemplate: "",
                  DefenderTVM: "",
                  MedalSolid: "",
                  D365TalentLearn: "",
                  D365TalentInsight: "",
                  D365TalentHRCore: "",
                  BacklogList: "",
                  ButtonControl: "",
                  TableGroup: "",
                  MountainClimbing: "",
                  TagUnknown: "",
                  TagUnknownMirror: "",
                  TagUnknown12: "",
                  TagUnknown12Mirror: "",
                  Link12: "",
                  Presentation: "",
                  Presentation12: "",
                  Lock12: "",
                  BuildDefinition: "",
                  ReleaseDefinition: "",
                  SaveTemplate: "",
                  UserGauge: "",
                  BlockedSiteSolid12: "",
                  TagSolid: "",
                  OfficeChat: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function v(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-16"',
                  src: "url('" + e + "fabric-icons-16-9cf93f3b.woff') format('woff')"
               },
               icons: {
                  OfficeChatSolid: "",
                  MailSchedule: "",
                  WarningSolid: "",
                  Blocked2Solid: "",
                  SkypeCircleArrow: "",
                  SkypeArrow: "",
                  SyncStatus: "",
                  SyncStatusSolid: "",
                  ProjectDocument: "",
                  ToDoLogoOutline: "",
                  VisioOnlineLogoFill32: "",
                  VisioOnlineLogo32: "",
                  VisioOnlineLogoCloud32: "",
                  VisioDiagramSync: "",
                  Event12: "",
                  EventDateMissed12: "",
                  UserOptional: "",
                  ResponsesMenu: "",
                  DoubleDownArrow: "",
                  DistributeDown: "",
                  BookmarkReport: "",
                  FilterSettings: "",
                  GripperDotsVertical: "",
                  MailAttached: "",
                  AddIn: "",
                  LinkedDatabase: "",
                  TableLink: "",
                  PromotedDatabase: "",
                  BarChartVerticalFilter: "",
                  BarChartVerticalFilterSolid: "",
                  MicOff2: "",
                  MicrosoftTranslatorLogo: "",
                  ShowTimeAs: "",
                  FileRequest: "",
                  WorkItemAlert: "",
                  PowerBILogo16: "",
                  PowerBILogoBackplate16: "",
                  BulletedListText: "",
                  BulletedListBullet: "",
                  BulletedListTextMirrored: "",
                  BulletedListBulletMirrored: "",
                  NumberedListText: "",
                  NumberedListNumber: "",
                  NumberedListTextMirrored: "",
                  NumberedListNumberMirrored: "",
                  RemoveLinkChain: "",
                  RemoveLinkX: "",
                  FabricTextHighlight: "",
                  ClearFormattingA: "",
                  ClearFormattingEraser: "",
                  Photo2Fill: "",
                  IncreaseIndentText: "",
                  IncreaseIndentArrow: "",
                  DecreaseIndentText: "",
                  DecreaseIndentArrow: "",
                  IncreaseIndentTextMirrored: "",
                  IncreaseIndentArrowMirrored: "",
                  DecreaseIndentTextMirrored: "",
                  DecreaseIndentArrowMirrored: "",
                  CheckListText: "",
                  CheckListCheck: "",
                  CheckListTextMirrored: "",
                  CheckListCheckMirrored: "",
                  NumberSymbol: "",
                  Coupon: "",
                  VerifiedBrand: "",
                  ReleaseGate: "",
                  ReleaseGateCheck: "",
                  ReleaseGateError: "",
                  M365InvoicingLogo: "",
                  RemoveFromShoppingList: "",
                  ShieldAlert: "",
                  FabricTextHighlightComposite: "",
                  Dataflows: "",
                  GenericScanFilled: "",
                  DiagnosticDataBarTooltip: "",
                  SaveToMobile: "",
                  Orientation2: "",
                  ScreenCast: "",
                  ShowGrid: "",
                  SnapToGrid: "",
                  ContactList: "",
                  NewMail: "",
                  EyeShadow: "",
                  FabricFolderConfirm: "",
                  InformationBarriers: "",
                  CommentActive: "",
                  ColumnVerticalSectionEdit: "",
                  WavingHand: "",
                  ShakeDevice: "",
                  SmartGlassRemote: "",
                  Rotate90Clockwise: "",
                  Rotate90CounterClockwise: "",
                  CampaignTemplate: "",
                  ChartTemplate: "",
                  PageListFilter: "",
                  SecondaryNav: "",
                  ColumnVerticalSection: "",
                  SkypeCircleSlash: "",
                  SkypeSlash: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }

         function W(e, t) {
            void 0 === e && (e = "");
            var a = {
               style: {
                  MozOsxFontSmoothing: "grayscale",
                  WebkitFontSmoothing: "antialiased",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  speak: "none"
               },
               fontFace: {
                  fontFamily: '"FabricMDL2Icons-17"',
                  src: "url('" + e + "fabric-icons-17-0c4ed701.woff') format('woff')"
               },
               icons: {
                  CustomizeToolbar: "",
                  DuplicateRow: "",
                  RemoveFromTrash: "",
                  MailOptions: "",
                  Childof: "",
                  Footer: "",
                  Header: "",
                  BarChartVerticalFill: "",
                  StackedColumnChart2Fill: "",
                  PlainText: "",
                  AccessibiltyChecker: "",
                  DatabaseSync: "",
                  ReservationOrders: "",
                  TabOneColumn: "",
                  TabTwoColumn: "",
                  TabThreeColumn: "",
                  BulletedTreeList: "",
                  MicrosoftTranslatorLogoGreen: "",
                  MicrosoftTranslatorLogoBlue: "",
                  InternalInvestigation: "",
                  AddReaction: "",
                  ContactHeart: "",
                  VisuallyImpaired: "",
                  EventToDoLogo: "",
                  Variable2: "",
                  ModelingView: "",
                  DisconnectVirtualMachine: "",
                  ReportLock: "",
                  Uneditable2: "",
                  Uneditable2Mirrored: "",
                  BarChartVerticalEdit: "",
                  GlobalNavButtonActive: "",
                  PollResults: "",
                  Rerun: "",
                  QandA: "",
                  QandAMirror: "",
                  BookAnswers: "",
                  AlertSettings: "",
                  TrimStart: "",
                  TrimEnd: "",
                  TableComputed: "",
                  DecreaseIndentLegacy: "",
                  IncreaseIndentLegacy: "",
                  SizeLegacy: ""
               }
            };
            Object(o.registerIcons)(a, t)
         }
         var L = function () {
               Object(o.registerIconAlias)("trash", "delete"), Object(o.registerIconAlias)("onedrive", "onedrivelogo"), Object(o.registerIconAlias)("alertsolid12", "eventdatemissed12"), Object(o.registerIconAlias)("sixpointstar", "6pointstar"), Object(o.registerIconAlias)("twelvepointstar", "12pointstar"), Object(o.registerIconAlias)("toggleon", "toggleleft"), Object(o.registerIconAlias)("toggleoff", "toggleright")
            },
            E = a("G4/H");
         Object(E.setVersion)("@uifabric/icons", "7.3.69");
         var C, w, k, P = a("5b23"),
            A = a.n(P),
            I = a("PAXR"),
            O = a.n(I),
            R = a("fIO6"),
            D = a.n(R),
            z = function (e) {
               return "immersivereader" === e.name ? n.a.createElement("span", null, n.a.createElement("img", {
                  className: "light",
                  src: a("OXwN")
               }), n.a.createElement("img", {
                  className: "dark",
                  src: a("iEbq")
               })) : "thumbsup" === e.name ? n.a.createElement("img", {
                  style: {
                     maxHeight: "100%",
                     maxWidth: "100%"
                  },
                  src: a("YK8o")
               }) : "thumbsdown" === e.name ? n.a.createElement("img", {
                  style: {
                     maxHeight: "100%",
                     maxWidth: "100%"
                  },
                  src: a("fhI+")
               }) : "keyboardmode" === e.name ? n.a.createElement("div", {
                  className: "mask-svg",
                  style: {
                     WebkitMaskImage: "url(" + O.a + ")",
                     maskImage: "url(" + O.a + ")"
                  }
               }) : "sketchmode" === e.name ? n.a.createElement("div", {
                  className: "mask-svg",
                  style: {
                     WebkitMaskImage: "url(" + A.a + ")",
                     maskImage: "url(" + A.a + ")"
                  }
               }) : "drawmode" === e.name ? n.a.createElement("div", {
                  className: "mask-svg",
                  style: {
                     WebkitMaskImage: "url(" + D.a + ")",
                     maskImage: "url(" + D.a + ")"
                  }
               }) : null
            },
            N = a("IMtK"),
            G = a("ytTp"),
            B = {},
            F = a("Di8l"),
            Q = function (e, t) {
               return {
                  language: t.language || e.language,
                  market: t.market || e.market,
                  country: t.country || e.country,
                  namespaces: t.namespaces || e.namespaces
               }
            };
         C = F, Object.assign(B, C), void 0 === w && (w = "https://spoprod-a.akamaihd.net/files/fabric/assets/icons/"), [r, s, _, l, u, c, g, h, p, b, d, M, m, S, T, f, y, v, W].forEach((function (e) {
            return e(w, k)
         })), L(), Object(o.registerIcons)({
            icons: {
               ImmersiveReader: n.a.createElement(z, {
                  name: "immersivereader"
               }),
               ThumbsUp: n.a.createElement(z, {
                  name: "thumbsup"
               }),
               ThumbsDown: n.a.createElement(z, {
                  name: "thumbsdown"
               }),
               KeyboardMode: n.a.createElement(z, {
                  name: "keyboardmode"
               }),
               SketchMode: n.a.createElement(z, {
                  name: "sketchmode"
               }),
               DrawMode: n.a.createElement(z, {
                  name: "drawmode"
               })
            }
         });
         t.a = function (e) {
            var t, a = e.children,
               o = Object(i.useReducer)(Q, {
                  language: "en",
                  market: "en-us",
                  country: "us",
                  namespaces: ["results", "sketch"]
               }),
               r = o[0],
               s = o[1],
               _ = Object(i.useRef)("app"),
               l = (t = r.language, B[t] ? B[t] : {});
            return n.a.createElement(n.a.Fragment, null, n.a.createElement(N.a.Provider, {
               value: l
            }, n.a.createElement(G.a.Provider, {
               value: {
                  country: r.country,
                  language: r.language,
                  market: r.market,
                  clientType: _.current,
                  featureFlags: {},
                  updateLocale: function (e) {
                     return Promise.resolve(s(e))
                  }
               }
            }, a)))
         }
      },
      gAQy: function (e, t, a) {
         "use strict";
         a.d(t, "e", (function () {
            return l
         })), a.d(t, "d", (function () {
            return u
         })), a.d(t, "b", (function () {
            return c
         })), a.d(t, "c", (function () {
            return g
         })), a.d(t, "a", (function () {
            return h
         }));
         var i = a("tnFO"),
            n = !1,
            o = 0,
            r = {
               empty: !0
            },
            s = {},
            _ = "undefined" == typeof WeakMap ? null : WeakMap;

         function l(e) {
            _ = e
         }

         function u() {
            o++
         }

         function c(e, t, a) {
            var i = g(a.value && a.value.bind(null));
            return {
               configurable: !0,
               get: function () {
                  return i
               }
            }
         }

         function g(e, t, a) {
            if (void 0 === t && (t = 100), void 0 === a && (a = !1), !_) return e;
            if (!n) {
               var r = i.b.getInstance();
               r && r.onReset && i.b.getInstance().onReset(u), n = !0
            }
            var s, l = 0,
               c = o;
            return function () {
               for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
               var r = s;
               (void 0 === s || c !== o || t > 0 && l > t) && (s = b(), l = 0, c = o), r = s;
               for (var _ = 0; _ < i.length; _++) {
                  var u = p(i[_]);
                  r.map.has(u) || r.map.set(u, b()), r = r.map.get(u)
               }
               return r.hasOwnProperty("value") || (r.value = e.apply(void 0, i), l++), !a || null !== r.value && void 0 !== r.value || (r.value = e.apply(void 0, i)), r.value
            }
         }

         function h(e) {
            if (!_) return e;
            var t = new _;
            return function (a) {
               if (!a || "function" != typeof a && "object" != typeof a) return e(a);
               if (t.has(a)) return t.get(a);
               var i = e(a);
               return t.set(a, i), i
            }
         }

         function p(e) {
            return e ? "object" == typeof e || "function" == typeof e ? e : (s[e] || (s[e] = {
               val: e
            }), s[e]) : r
         }

         function b() {
            return {
               map: _ ? new _ : null
            }
         }
      },
      gW68: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("BXid");

         function n(e) {
            Object(i.a)(e, {
               componentDidMount: o,
               componentDidUpdate: r,
               componentWillUnmount: s
            })
         }

         function o() {
            _(this.props.componentRef, this)
         }

         function r(e) {
            e.componentRef !== this.props.componentRef && (_(e.componentRef, null), _(this.props.componentRef, this))
         }

         function s() {
            _(this.props.componentRef, null)
         }

         function _(e, t) {
            e && ("object" == typeof e ? e.current = t : "function" == typeof e && e(t))
         }
      },
      gg26: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return s
         })), a.d(t, "b", (function () {
            return _
         }));
         var i = a("d6cv"),
            n = a("tnFO"),
            o = Object(i.a)() || {};
         void 0 === o.__currentId__ && (o.__currentId__ = 0);
         var r = !1;

         function s(e) {
            if (!r) {
               var t = n.b.getInstance();
               t && t.onReset && t.onReset(_), r = !0
            }
            return (e || "id__") + o.__currentId__++
         }

         function _(e) {
            void 0 === e && (e = 0), o.__currentId__ = e
         }
      },
      h8r0: function (e, t, a) {
         "use strict";
         (function (e) {
            a.d(t, "a", (function () {
               return _
            }));
            var i = function () {
                  return (i = Object.assign || function (e) {
                     for (var t, a = 1, i = arguments.length; a < i; a++)
                        for (var n in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                     return e
                  }).apply(this, arguments)
               },
               n = "undefined" == typeof window ? e : window,
               o = n && n.CSPSettings && n.CSPSettings.nonce,
               r = function () {
                  var e = n.__themeState__ || {
                     theme: void 0,
                     lastStyleElement: void 0,
                     registeredStyles: []
                  };
                  e.runState || (e = i({}, e, {
                     perf: {
                        count: 0,
                        duration: 0
                     },
                     runState: {
                        flushTimer: 0,
                        mode: 0,
                        buffer: []
                     }
                  }));
                  e.registeredThemableStyles || (e = i({}, e, {
                     registeredThemableStyles: []
                  }));
                  return n.__themeState__ = e, e
               }();

            function s(e, t) {
               r.loadStyles ? r.loadStyles(u(e).styleString, e) : function (e) {
                  if ("undefined" == typeof document) return;
                  var t = document.getElementsByTagName("head")[0],
                     a = document.createElement("style"),
                     i = u(e),
                     n = i.styleString,
                     s = i.themable;
                  a.setAttribute("data-load-themed-styles", "true"), o && a.setAttribute("nonce", o);
                  a.appendChild(document.createTextNode(n)), r.perf.count++, t.appendChild(a);
                  var _ = document.createEvent("HTMLEvents");
                  _.initEvent("styleinsert", !0, !1), _.args = {
                     newStyle: a
                  }, document.dispatchEvent(_);
                  var l = {
                     styleElement: a,
                     themableStyle: e
                  };
                  s ? r.registeredThemableStyles.push(l) : r.registeredStyles.push(l)
               }(e)
            }

            function _(e) {
               r.theme = e,
                  function () {
                     if (r.theme) {
                        for (var e = [], t = 0, a = r.registeredThemableStyles; t < a.length; t++) {
                           var i = a[t];
                           e.push(i.themableStyle)
                        }
                        e.length > 0 && (! function (e) {
                           void 0 === e && (e = 3);
                           3 !== e && 2 !== e || (l(r.registeredStyles), r.registeredStyles = []);
                           3 !== e && 1 !== e || (l(r.registeredThemableStyles), r.registeredThemableStyles = [])
                        }(1), s([].concat.apply([], e)))
                     }
                  }()
            }

            function l(e) {
               e.forEach((function (e) {
                  var t = e && e.styleElement;
                  t && t.parentElement && t.parentElement.removeChild(t)
               }))
            }

            function u(e) {
               var t = r.theme,
                  a = !1;
               return {
                  styleString: (e || []).map((function (e) {
                     var i = e.theme;
                     if (i) {
                        a = !0;
                        var n = t ? t[i] : void 0,
                           o = e.defaultValue || "inherit";
                        return t && !n && console && !(i in t) && "undefined" != typeof DEBUG && DEBUG && console.warn('Theming value not provided for "' + i + '". Falling back to "' + o + '".'), n || o
                     }
                     return e.rawString
                  })).join(""),
                  themable: a
               }
            }
         }).call(this, a("yLpj"))
      },
      hZ0c: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("VvCP"),
            n = a("IcFl"),
            o = a("L2rz"),
            r = a("cHtz"),
            s = a("9ik2"),
            _ = a("2dVK"),
            l = a("eoYf"),
            u = _.classNamesFunction({
               cacheSize: 100
            }),
            c = function (e) {
               function t(t) {
                  var a = e.call(this, t) || this;
                  return a._onImageLoadingStateChange = function (e) {
                     a.props.imageProps && a.props.imageProps.onLoadingStateChange && a.props.imageProps.onLoadingStateChange(e), e === s.ImageLoadState.error && a.setState({
                        imageLoadError: !0
                     })
                  }, a.state = {
                     imageLoadError: !1
                  }, a
               }
               return i.__extends(t, e), t.prototype.render = function () {
                  var e = this.props,
                     t = e.children,
                     a = e.className,
                     s = e.styles,
                     c = e.iconName,
                     g = e.imageErrorAs,
                     h = e.theme,
                     p = "string" == typeof c && 0 === c.length,
                     b = !!this.props.imageProps || this.props.iconType === o.IconType.image || this.props.iconType === o.IconType.Image,
                     d = l.getIconContent(c) || {},
                     M = d.iconClassName,
                     m = d.children,
                     S = u(s, {
                        theme: h,
                        className: a,
                        iconClassName: M,
                        isImage: b,
                        isPlaceholder: p
                     }),
                     T = b ? "span" : "i",
                     f = _.getNativeProps(this.props, _.htmlElementProperties, ["aria-label"]),
                     y = this.state.imageLoadError,
                     v = i.__assign(i.__assign({}, this.props.imageProps), {
                        onLoadingStateChange: this._onImageLoadingStateChange
                     }),
                     W = y && g || r.Image,
                     L = this.props["aria-label"] || this.props.ariaLabel,
                     E = L ? {
                        "aria-label": L
                     } : {
                        "aria-hidden": !this.props["aria-labelledby"] && !v["aria-labelledby"]
                     };
                  return n.createElement(T, i.__assign({
                     "data-icon-name": c
                  }, E, f, {
                     className: S.root
                  }), b ? n.createElement(W, i.__assign({}, v)) : t || m)
               }, t
            }(n.Component);
         t.IconBase = c
      },
      iEbq: function (e, t) {
         e.exports = "data:image/svg+xml;base64,PCEtLSBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC4NCiAgICAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiAtLT4NCg0KPHN2ZyB2aWV3Qm94PSIwIDAgNDAgMzciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGZpbGwtcnVsZT0ibm9uemVybyI+DQogICAgICAgICAgICA8cGF0aCBkPSJNMzcuNCwwLjkgTDM3LjQsOS42IEwzNS40LDkuNiBMMzUuNCwyLjkgTDI0LjQsMi45IEMyMi45LDMuMyAyMCw0LjUgMjAsNiBMMjAsMTcuMiBMMTgsMTcuMiBMMTgsNiBDMTgsNSAxNS42LDMuNiAxMy44LDIuOSBMMiwyLjkgTDIsMjkgTDEyLjQsMjkgTDEyLjQsMzEgTDAsMzEgTDAsMC45IEwxNC4xLDAuOSBMMTQuMywxIEMxNSwxLjIgMTcuNSwyLjIgMTguOSwzLjcgQzIwLjUsMS45IDIzLjUsMS4xIDIzLjksMSBMMjQuMSwxIEwzNy40LDEgTDM3LjQsMC45IFoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNy40LDM3IEwyNS44LDM3IEwxOC40LDI5LjQgTDE0LDI5LjQgTDE0LDIxIEwxOC40LDIwLjkgTDI2LjEsMTMgTDI3LjQsMTMgTDI3LjQsMzcgWiBNMTYsMjcuNCBMMTkuMiwyNy40IEwyNS4zLDMzLjcgTDI1LjMsMTYuNiBMMTkuMiwyMi45IEwxNS45LDIyLjkgTDE1LjksMjcuNCBMMTYsMjcuNCBaIiBmaWxsPSIjMDE5N0YyIj48L3BhdGg+DQogICAgICAgICAgICA8cGF0aCBkPSJNMzEuMywzMi43IEwyOS42LDMxLjcgQzI5LjYsMzEuNyAzMS43LDI4LjMgMzEuNywyNS4yIEMzMS43LDIxLjkgMjkuNiwxOC41IDI5LjYsMTguNCBMMzEuMywxNy40IEMzMS40LDE3LjYgMzMuNywyMS4zIDMzLjcsMjUuMiBDMzMuNywyOC44IDMxLjQsMzIuNiAzMS4zLDMyLjcgWiIgZmlsbD0iIzAxOTdGMiI+PC9wYXRoPg0KICAgICAgICAgICAgPHBhdGggZD0iTTM2LjQsMzYuMiBMMzQuOCwzNSBDMzQuOCwzNSAzOCwzMC44IDM4LDI1LjIgQzM4LDE5LjYgMzQuOCwxNS40IDM0LjgsMTUuNCBMMzYuNCwxNC4yIEMzNi41LDE0LjQgNDAsMTkgNDAsMjUuMyBDNDAsMzEuNSAzNi41LDM2IDM2LjQsMzYuMiBaIiBmaWxsPSIjMDE5N0YyIj48L3BhdGg+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="
      },
      jPdf: function (e, t, a) {
         e.exports = {
            mathExpression: "MathExpression-module--mathExpression--1wiJU",
            scrollable: "MathExpression-module--scrollable--3cCzC"
         }
      },
      k7jI: function (e, t, a) {
         "use strict";
         a.d(t, "c", (function () {
            return n
         })), a.d(t, "d", (function () {
            return o
         })), a.d(t, "k", (function () {
            return r
         })), a.d(t, "p", (function () {
            return s
         })), a.d(t, "b", (function () {
            return _
         })), a.d(t, "z", (function () {
            return l
         })), a.d(t, "r", (function () {
            return u
         })), a.d(t, "q", (function () {
            return c
         })), a.d(t, "a", (function () {
            return g
         })), a.d(t, "e", (function () {
            return h
         })), a.d(t, "o", (function () {
            return p
         })), a.d(t, "w", (function () {
            return b
         })), a.d(t, "t", (function () {
            return d
         })), a.d(t, "s", (function () {
            return M
         })), a.d(t, "u", (function () {
            return m
         })), a.d(t, "y", (function () {
            return S
         })), a.d(t, "x", (function () {
            return T
         })), a.d(t, "v", (function () {
            return f
         })), a.d(t, "f", (function () {
            return y
         })), a.d(t, "g", (function () {
            return v
         })), a.d(t, "i", (function () {
            return W
         })), a.d(t, "l", (function () {
            return L
         })), a.d(t, "n", (function () {
            return E
         })), a.d(t, "m", (function () {
            return C
         })), a.d(t, "h", (function () {
            return w
         })), a.d(t, "j", (function () {
            return k
         }));
         var i = function () {
               for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
               for (var a = {}, i = 0, n = e; i < n.length; i++)
                  for (var o = n[i], r = Array.isArray(o) ? o : Object.keys(o), s = 0, _ = r; s < _.length; s++) {
                     var l = _[s];
                     a[l] = 1
                  }
               return a
            },
            n = i(["onCopy", "onCut", "onPaste", "onCompositionEnd", "onCompositionStart", "onCompositionUpdate", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onInput", "onSubmit", "onLoad", "onError", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyUp", "onAbort", "onCanPlay", "onCanPlayThrough", "onDurationChange", "onEmptied", "onEncrypted", "onEnded", "onLoadedData", "onLoadedMetadata", "onLoadStart", "onPause", "onPlay", "onPlaying", "onProgress", "onRateChange", "onSeeked", "onSeeking", "onStalled", "onSuspend", "onTimeUpdate", "onVolumeChange", "onWaiting", "onClick", "onClickCapture", "onContextMenu", "onDoubleClick", "onDrag", "onDragEnd", "onDragEnter", "onDragExit", "onDragLeave", "onDragOver", "onDragStart", "onDrop", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onMouseUpCapture", "onSelect", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onScroll", "onWheel", "onPointerCancel", "onPointerDown", "onPointerEnter", "onPointerLeave", "onPointerMove", "onPointerOut", "onPointerOver", "onPointerUp", "onGotPointerCapture", "onLostPointerCapture"]),
            o = i(["accessKey", "children", "className", "contentEditable", "dir", "draggable", "hidden", "htmlFor", "id", "lang", "role", "style", "tabIndex", "title", "translate", "spellCheck", "name"]),
            r = i(o, n),
            s = i(r, ["form"]),
            _ = i(r, ["height", "loop", "muted", "preload", "src", "width"]),
            l = i(_, ["poster"]),
            u = i(r, ["start"]),
            c = i(r, ["value"]),
            g = i(r, ["download", "href", "hrefLang", "media", "rel", "target", "type"]),
            h = i(r, ["autoFocus", "disabled", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "type", "value"]),
            p = i(h, ["accept", "alt", "autoCapitalize", "autoComplete", "checked", "dirname", "form", "height", "inputMode", "list", "max", "maxLength", "min", "multiple", "pattern", "placeholder", "readOnly", "required", "src", "step", "size", "type", "value", "width"]),
            b = i(h, ["autoCapitalize", "cols", "dirname", "form", "maxLength", "placeholder", "readOnly", "required", "rows", "wrap"]),
            d = i(h, ["form", "multiple", "required"]),
            M = i(r, ["selected", "value"]),
            m = i(r, ["cellPadding", "cellSpacing"]),
            S = r,
            T = i(r, ["rowSpan", "scope"]),
            f = i(r, ["colSpan", "headers", "rowSpan", "scope"]),
            y = i(r, ["span"]),
            v = i(r, ["span"]),
            W = i(r, ["acceptCharset", "action", "encType", "encType", "method", "noValidate", "target"]),
            L = i(r, ["allow", "allowFullScreen", "allowPaymentRequest", "allowTransparency", "csp", "height", "importance", "referrerPolicy", "sandbox", "src", "srcDoc", "width"]),
            E = i(r, ["alt", "crossOrigin", "height", "src", "srcSet", "useMap", "width"]),
            C = E,
            w = r;

         function k(e, t, a) {
            for (var i, n = Array.isArray(t), o = {}, r = 0, s = Object.keys(e); r < s.length; r++) {
               var _ = s[r];
               !(!n && t[_] || n && t.indexOf(_) >= 0 || 0 === _.indexOf("data-") || 0 === _.indexOf("aria-")) || a && -1 !== (null === (i = a) || void 0 === i ? void 0 : i.indexOf(_)) || (o[_] = e[_])
            }
            return o
         }
      },
      kMXd: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         }), a("G4/H").setVersion("office-ui-fabric-react", "7.126.1")
      },
      kRhf: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         }));
         var i = a("tnFO");

         function n() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var a = [],
               n = [],
               o = i.b.getInstance();

            function r(e) {
               for (var t = 0, i = e; t < i.length; t++) {
                  var s = i[t];
                  if (s)
                     if ("string" == typeof s)
                        if (s.indexOf(" ") >= 0) r(s.split(" "));
                        else {
                           var _ = o.argsFromClassName(s);
                           _ ? r(_) : -1 === a.indexOf(s) && a.push(s)
                        }
                  else Array.isArray(s) ? r(s) : "object" == typeof s && n.push(s)
               }
            }
            return r(e), {
               classes: a,
               objects: n
            }
         }
      },
      kdvQ: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return i
         }));
         var i = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            ctrl: 17,
            alt: 18,
            pauseBreak: 19,
            capslock: 20,
            escape: 27,
            space: 32,
            pageUp: 33,
            pageDown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            insert: 45,
            del: 46,
            zero: 48,
            one: 49,
            two: 50,
            three: 51,
            four: 52,
            five: 53,
            six: 54,
            seven: 55,
            eight: 56,
            nine: 57,
            a: 65,
            b: 66,
            c: 67,
            d: 68,
            e: 69,
            f: 70,
            g: 71,
            h: 72,
            i: 73,
            j: 74,
            k: 75,
            l: 76,
            m: 77,
            n: 78,
            o: 79,
            p: 80,
            q: 81,
            r: 82,
            s: 83,
            t: 84,
            u: 85,
            v: 86,
            w: 87,
            x: 88,
            y: 89,
            z: 90,
            leftWindow: 91,
            rightWindow: 92,
            select: 93,
            zero_numpad: 96,
            one_numpad: 97,
            two_numpad: 98,
            three_numpad: 99,
            four_numpad: 100,
            five_numpad: 101,
            six_numpad: 102,
            seven_numpad: 103,
            eight_numpad: 104,
            nine_numpad: 105,
            multiply: 106,
            add: 107,
            subtract: 109,
            decimalPoint: 110,
            divide: 111,
            f1: 112,
            f2: 113,
            f3: 114,
            f4: 115,
            f5: 116,
            f6: 117,
            f7: 118,
            f8: 119,
            f9: 120,
            f10: 121,
            f11: 122,
            f12: 123,
            numlock: 144,
            scrollLock: 145,
            semicolon: 186,
            equalSign: 187,
            comma: 188,
            dash: 189,
            period: 190,
            forwardSlash: 191,
            graveAccent: 192,
            openBracket: 219,
            backSlash: 220,
            closeBracket: 221,
            singleQuote: 222
         }
      },
      lhp9: function (e, t, a) {
         "use strict";
         a.d(t, "b", (function () {
            return L
         })), a.d(t, "d", (function () {
            return E
         })), a.d(t, "a", (function () {
            return C
         })), a.d(t, "c", (function () {
            return w
         }));
         var i, n = a("VvCP"),
            o = a("tnFO"),
            r = {};
         var s = {
            "user-select": 1
         };

         function _(e, t) {
            var a = function () {
                  if (!i) {
                     var e = "undefined" != typeof document ? document : void 0,
                        t = "undefined" != typeof navigator ? navigator : void 0,
                        a = t ? t.userAgent.toLowerCase() : void 0;
                     i = e ? {
                        isWebkit: !(!e || !("WebkitAppearance" in e.documentElement.style)),
                        isMoz: !!(a && a.indexOf("firefox") > -1),
                        isOpera: !!(a && a.indexOf("opera") > -1),
                        isMs: !(!t || !/rv:11.0/i.test(t.userAgent) && !/Edge\/\d./i.test(navigator.userAgent))
                     } : {
                        isWebkit: !0,
                        isMoz: !0,
                        isOpera: !0,
                        isMs: !0
                     }
                  }
                  return i
               }(),
               n = e[t];
            if (s[n]) {
               var o = e[t + 1];
               s[n] && (a.isWebkit && e.push("-webkit-" + n, o), a.isMoz && e.push("-moz-" + n, o), a.isMs && e.push("-ms-" + n, o), a.isOpera && e.push("-o-" + n, o))
            }
         }
         var l, u = ["column-count", "font-weight", "flex", "flex-grow", "flex-shrink", "fill-opacity", "opacity", "order", "z-index", "zoom"];

         function c(e, t) {
            var a = e[t],
               i = e[t + 1];
            if ("number" == typeof i) {
               var n = -1 === u.indexOf(a) ? "px" : "";
               e[t + 1] = "" + i + n
            }
         }
         var g = "left",
            h = "right",
            p = ((l = {})[g] = h, l[h] = g, l),
            b = {
               "w-resize": "e-resize",
               "sw-resize": "se-resize",
               "nw-resize": "ne-resize"
            };

         function d(e, t, a) {
            if (e.rtl) {
               var i = t[a];
               if (!i) return;
               var n = t[a + 1];
               if ("string" == typeof n && n.indexOf("@noflip") >= 0) t[a + 1] = n.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, "");
               else if (i.indexOf(g) >= 0) t[a] = i.replace(g, h);
               else if (i.indexOf(h) >= 0) t[a] = i.replace(h, g);
               else if (String(n).indexOf(g) >= 0) t[a + 1] = n.replace(g, h);
               else if (String(n).indexOf(h) >= 0) t[a + 1] = n.replace(h, g);
               else if (p[i]) t[a] = p[i];
               else if (b[n]) t[a + 1] = b[n];
               else switch (i) {
                  case "margin":
                  case "padding":
                     t[a + 1] = function (e) {
                        if ("string" == typeof e) {
                           var t = e.split(" ");
                           if (4 === t.length) return t[0] + " " + t[3] + " " + t[2] + " " + t[1]
                        }
                        return e
                     }(n);
                     break;
                  case "box-shadow":
                     t[a + 1] = function (e, t) {
                        var a = e.split(" "),
                           i = parseInt(a[t], 10);
                        return a[0] = a[0].replace(String(i), String(-1 * i)), a.join(" ")
                     }(n, 0)
               }
            }
         }

         function M(e) {
            var t = e && e["&"];
            return t ? t.displayName : void 0
         }
         var m = /\:global\((.+?)\)/g;

         function S(e) {
            if (!m.test(e)) return e;
            for (var t = [], a = /\:global\((.+?)\)/g, i = null; i = a.exec(e);) i[1].indexOf(",") > -1 && t.push([i.index, i.index + i[0].length, i[1].split(",").map((function (e) {
               return ":global(" + e.trim() + ")"
            })).join(", ")]);
            return t.reverse().reduce((function (e, t) {
               var a = t[0],
                  i = t[1],
                  n = t[2];
               return e.slice(0, a) + n + e.slice(i)
            }), e)
         }

         function T(e, t) {
            return e.indexOf(":global(") >= 0 ? e.replace(m, "$1") : 0 === e.indexOf(":") ? t + e : e.indexOf("&") < 0 ? t + " " + e : e
         }

         function f(e, t, a) {
            void 0 === t && (t = {
               __order: []
            }), void 0 === a && (a = "&");
            var i = o.b.getInstance(),
               n = t[a];
            n || (n = {}, t[a] = n, t.__order.push(a));
            for (var r = 0, s = e; r < s.length; r++) {
               var _ = s[r];
               if ("string" == typeof _) {
                  var l = i.argsFromClassName(_);
                  l && f(l, t, a)
               } else if (Array.isArray(_)) f(_, t, a);
               else
                  for (var u in _)
                     if ("selectors" === u) {
                        var c = _.selectors,
                           g = function (e) {
                              if (c.hasOwnProperty(e)) {
                                 var i = c[e];
                                 0 === e.indexOf("@") ? f([i], t, e = e + "{" + a) : e.indexOf(",") > -1 ? S(e).split(",").map((function (e) {
                                    return e.trim()
                                 })).forEach((function (e) {
                                    return f([i], t, T(e, a))
                                 })) : f([i], t, T(e, a))
                              }
                           };
                        for (var h in c) g(h)
                     } else void 0 !== _[u] && ("margin" === u || "padding" === u ? y(n, u, _[u]) : n[u] = _[u])
            }
            return t
         }

         function y(e, t, a) {
            var i = "string" == typeof a ? a.split(" ") : [a];
            e[t + "Top"] = i[0], e[t + "Right"] = i[1] || i[0], e[t + "Bottom"] = i[2] || i[0], e[t + "Left"] = i[3] || i[1] || i[0]
         }

         function v(e, t) {
            for (var a = [e.rtl ? "rtl" : "ltr"], i = !1, n = 0, o = t.__order; n < o.length; n++) {
               var r = o[n];
               a.push(r);
               var s = t[r];
               for (var _ in s) s.hasOwnProperty(_) && void 0 !== s[_] && (i = !0, a.push(_, s[_]))
            }
            return i ? a.join("") : void 0
         }

         function W(e, t) {
            return t <= 0 ? "" : 1 === t ? e : e + W(e, t - 1)
         }

         function L(e, t) {
            if (!t) return "";
            var a, i, n, o = [];
            for (var s in t) t.hasOwnProperty(s) && "displayName" !== s && void 0 !== t[s] && o.push(s, t[s]);
            for (var l = 0; l < o.length; l += 2) n = void 0, "-" !== (n = (a = o)[i = l]).charAt(0) && (a[i] = r[n] = r[n] || n.replace(/([A-Z])/g, "-$1").toLowerCase()), c(o, l), d(e, o, l), _(o, l);
            for (l = 1; l < o.length; l += 4) o.splice(l, 1, ":", o[l], ";");
            return o.join("")
         }

         function E(e) {
            for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
            var i = f(t),
               n = v(e, i);
            if (n) {
               var r = o.b.getInstance(),
                  s = {
                     className: r.classNameFromKey(n),
                     key: n,
                     args: t
                  };
               if (!s.className) {
                  s.className = r.getClassName(M(i));
                  for (var _ = [], l = 0, u = i.__order; l < u.length; l++) {
                     var c = u[l];
                     _.push(c, L(e, i[c]))
                  }
                  s.rulesToInsert = _
               }
               return s
            }
         }

         function C(e, t) {
            void 0 === t && (t = 1);
            var a = o.b.getInstance(),
               i = e.className,
               n = e.key,
               r = e.args,
               s = e.rulesToInsert;
            if (s) {
               for (var _ = 0; _ < s.length; _ += 2) {
                  var l = s[_ + 1];
                  if (l) {
                     var u = s[_],
                        c = (u = u.replace(/&/g, W("." + e.className, t))) + "{" + l + "}" + (0 === u.indexOf("@") ? "}" : "");
                     a.insertRule(c)
                  }
               }
               a.cacheClassName(i, n, r, s)
            }
         }

         function w(e) {
            for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
            var i = E.apply(void 0, Object(n.__spreadArrays)([e], t));
            return i ? (C(i, e.specificityMultiplier), i.className) : ""
         }
      },
      ls82: function (e, t, a) {
         var i = function (e) {
            "use strict";
            var t = Object.prototype,
               a = t.hasOwnProperty,
               i = "function" == typeof Symbol ? Symbol : {},
               n = i.iterator || "@@iterator",
               o = i.asyncIterator || "@@asyncIterator",
               r = i.toStringTag || "@@toStringTag";

            function s(e, t, a) {
               return Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
               }), e[t]
            }
            try {
               s({}, "")
            } catch (E) {
               s = function (e, t, a) {
                  return e[t] = a
               }
            }

            function _(e, t, a, i) {
               var n = t && t.prototype instanceof c ? t : c,
                  o = Object.create(n.prototype),
                  r = new v(i || []);
               return o._invoke = function (e, t, a) {
                  var i = "suspendedStart";
                  return function (n, o) {
                     if ("executing" === i) throw new Error("Generator is already running");
                     if ("completed" === i) {
                        if ("throw" === n) throw o;
                        return L()
                     }
                     for (a.method = n, a.arg = o;;) {
                        var r = a.delegate;
                        if (r) {
                           var s = T(r, a);
                           if (s) {
                              if (s === u) continue;
                              return s
                           }
                        }
                        if ("next" === a.method) a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                           if ("suspendedStart" === i) throw i = "completed", a.arg;
                           a.dispatchException(a.arg)
                        } else "return" === a.method && a.abrupt("return", a.arg);
                        i = "executing";
                        var _ = l(e, t, a);
                        if ("normal" === _.type) {
                           if (i = a.done ? "completed" : "suspendedYield", _.arg === u) continue;
                           return {
                              value: _.arg,
                              done: a.done
                           }
                        }
                        "throw" === _.type && (i = "completed", a.method = "throw", a.arg = _.arg)
                     }
                  }
               }(e, a, r), o
            }

            function l(e, t, a) {
               try {
                  return {
                     type: "normal",
                     arg: e.call(t, a)
                  }
               } catch (E) {
                  return {
                     type: "throw",
                     arg: E
                  }
               }
            }
            e.wrap = _;
            var u = {};

            function c() {}

            function g() {}

            function h() {}
            var p = {};
            p[n] = function () {
               return this
            };
            var b = Object.getPrototypeOf,
               d = b && b(b(W([])));
            d && d !== t && a.call(d, n) && (p = d);
            var M = h.prototype = c.prototype = Object.create(p);

            function m(e) {
               ["next", "throw", "return"].forEach((function (t) {
                  s(e, t, (function (e) {
                     return this._invoke(t, e)
                  }))
               }))
            }

            function S(e, t) {
               var i;
               this._invoke = function (n, o) {
                  function r() {
                     return new t((function (i, r) {
                        ! function i(n, o, r, s) {
                           var _ = l(e[n], e, o);
                           if ("throw" !== _.type) {
                              var u = _.arg,
                                 c = u.value;
                              return c && "object" == typeof c && a.call(c, "__await") ? t.resolve(c.__await).then((function (e) {
                                 i("next", e, r, s)
                              }), (function (e) {
                                 i("throw", e, r, s)
                              })) : t.resolve(c).then((function (e) {
                                 u.value = e, r(u)
                              }), (function (e) {
                                 return i("throw", e, r, s)
                              }))
                           }
                           s(_.arg)
                        }(n, o, i, r)
                     }))
                  }
                  return i = i ? i.then(r, r) : r()
               }
            }

            function T(e, t) {
               var a = e.iterator[t.method];
               if (void 0 === a) {
                  if (t.delegate = null, "throw" === t.method) {
                     if (e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method)) return u;
                     t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                  }
                  return u
               }
               var i = l(a, e.iterator, t.arg);
               if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, u;
               var n = i.arg;
               return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
            }

            function f(e) {
               var t = {
                  tryLoc: e[0]
               };
               1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function y(e) {
               var t = e.completion || {};
               t.type = "normal", delete t.arg, e.completion = t
            }

            function v(e) {
               this.tryEntries = [{
                  tryLoc: "root"
               }], e.forEach(f, this), this.reset(!0)
            }

            function W(e) {
               if (e) {
                  var t = e[n];
                  if (t) return t.call(e);
                  if ("function" == typeof e.next) return e;
                  if (!isNaN(e.length)) {
                     var i = -1,
                        o = function t() {
                           for (; ++i < e.length;)
                              if (a.call(e, i)) return t.value = e[i], t.done = !1, t;
                           return t.value = void 0, t.done = !0, t
                        };
                     return o.next = o
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
            return g.prototype = M.constructor = h, h.constructor = g, g.displayName = s(h, r, "GeneratorFunction"), e.isGeneratorFunction = function (e) {
               var t = "function" == typeof e && e.constructor;
               return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
            }, e.mark = function (e) {
               return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, s(e, r, "GeneratorFunction")), e.prototype = Object.create(M), e
            }, e.awrap = function (e) {
               return {
                  __await: e
               }
            }, m(S.prototype), S.prototype[o] = function () {
               return this
            }, e.AsyncIterator = S, e.async = function (t, a, i, n, o) {
               void 0 === o && (o = Promise);
               var r = new S(_(t, a, i, n), o);
               return e.isGeneratorFunction(a) ? r : r.next().then((function (e) {
                  return e.done ? e.value : r.next()
               }))
            }, m(M), s(M, r, "Generator"), M[n] = function () {
               return this
            }, M.toString = function () {
               return "[object Generator]"
            }, e.keys = function (e) {
               var t = [];
               for (var a in e) t.push(a);
               return t.reverse(),
                  function a() {
                     for (; t.length;) {
                        var i = t.pop();
                        if (i in e) return a.value = i, a.done = !1, a
                     }
                     return a.done = !0, a
                  }
            }, e.values = W, v.prototype = {
               constructor: v,
               reset: function (e) {
                  if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(y), !e)
                     for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
               },
               stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0].completion;
                  if ("throw" === e.type) throw e.arg;
                  return this.rval
               },
               dispatchException: function (e) {
                  if (this.done) throw e;
                  var t = this;

                  function i(a, i) {
                     return r.type = "throw", r.arg = e, t.next = a, i && (t.method = "next", t.arg = void 0), !!i
                  }
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                     var o = this.tryEntries[n],
                        r = o.completion;
                     if ("root" === o.tryLoc) return i("end");
                     if (o.tryLoc <= this.prev) {
                        var s = a.call(o, "catchLoc"),
                           _ = a.call(o, "finallyLoc");
                        if (s && _) {
                           if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                           if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                        } else if (s) {
                           if (this.prev < o.catchLoc) return i(o.catchLoc, !0)
                        } else {
                           if (!_) throw new Error("try statement without catch or finally");
                           if (this.prev < o.finallyLoc) return i(o.finallyLoc)
                        }
                     }
                  }
               },
               abrupt: function (e, t) {
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                     var n = this.tryEntries[i];
                     if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var o = n;
                        break
                     }
                  }
                  o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                  var r = o ? o.completion : {};
                  return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(r)
               },
               complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
               },
               finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                     var a = this.tryEntries[t];
                     if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), y(a), u
                  }
               },
               catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                     var a = this.tryEntries[t];
                     if (a.tryLoc === e) {
                        var i = a.completion;
                        if ("throw" === i.type) {
                           var n = i.arg;
                           y(a)
                        }
                        return n
                     }
                  }
                  throw new Error("illegal catch attempt")
               },
               delegateYield: function (e, t, a) {
                  return this.delegate = {
                     iterator: W(e),
                     resultName: t,
                     nextLoc: a
                  }, "next" === this.method && (this.arg = void 0), u
               }
            }, e
         }(e.exports);
         try {
            regeneratorRuntime = i
         } catch (n) {
            Function("r", "regeneratorRuntime = r")(i)
         }
      },
      mhro: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return d
         }));
         var i, n, o, r, s, _, l, u, c, g, h = a("a3ss"),
            p = a("Y65e"),
            b = (a("+JCI"), a("eExt")),
            d = (i = Object(b.JsonProperty)("name", String, !0), n = Object(b.JsonProperty)("thumbnailUrl", String, !0), o = Object(b.JsonProperty)("sourceWidth", Number, !0), r = Object(b.JsonProperty)("sourceHeight", Number, !0), Object(b.JsonObject)((_ = function () {
               Object(h.a)(this, "name", l, this), Object(h.a)(this, "thumbnailUrl", u, this), Object(h.a)(this, "sourceWidth", c, this), Object(h.a)(this, "sourceHeight", g, this)
            }, l = Object(p.a)(_.prototype, "name", [i], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), u = Object(p.a)(_.prototype, "thumbnailUrl", [n], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), c = Object(p.a)(_.prototype, "sourceWidth", [o], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return 1
               }
            }), g = Object(p.a)(_.prototype, "sourceHeight", [r], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return 1
               }
            }), s = _)) || s)
      },
      o0o1: function (e, t, a) {
         e.exports = a("ls82")
      },
      o5Fl: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return n
         })), a.d(t, "b", (function () {
            return o
         }));
         var i = a("d6cv"),
            n = "ms-Fabric--isFocusVisible";

         function o(e, t) {
            var a = t ? Object(i.a)(t) : Object(i.a)();
            if (a) {
               var o = a.document.body.classList;
               o.add(e ? n : "ms-Fabric--isFocusHidden"), o.remove(e ? "ms-Fabric--isFocusHidden" : n)
            }
         }
      },
      oG1V: function (e, t, a) {
         "use strict";

         function i(e, t) {
            return void 0 !== e[t] && null !== e[t]
         }
         a.d(t, "a", (function () {
            return i
         }))
      },
      pNea: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("VvCP"),
            n = a("IcFl"),
            o = a("cHtz"),
            r = a("2dVK"),
            s = a("M50z");
         t.ImageIcon = function (e) {
            var t = e.className,
               a = e.imageProps,
               _ = r.getNativeProps(e, r.htmlElementProperties),
               l = e["aria-label"] ? {} : {
                  role: "presentation",
                  "aria-hidden": !a.alt && !a["aria-labelledby"]
               };
            return n.createElement("div", i.__assign({}, l, _, {
               className: r.css(s.MS_ICON, s.classNames.root, s.classNames.image, t)
            }), n.createElement(o.Image, i.__assign({}, a)))
         }
      },
      pxsQ: function (e, t, a) {
         "use strict";

         function i(e) {
            o !== e && (o = e)
         }

         function n() {
            return void 0 === o && (o = "undefined" != typeof document && !!document.documentElement && "rtl" === document.documentElement.getAttribute("dir")), o
         }
         var o;

         function r() {
            return {
               rtl: n()
            }
         }
         a.d(t, "b", (function () {
            return i
         })), a.d(t, "a", (function () {
            return r
         })), o = n()
      },
      qNI8: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return ie
         }));
         var i, n, o, r, s, _, l, u, c, g, h, p, b, d, M, m, S, T, f, y, v, W, L, E, C, w, k, P, A, I, O, R, D, z, N, G, B, F, Q, j, x, U, V, H, K = a("a3ss"),
            q = a("vuIU"),
            Y = a("Y65e"),
            J = (a("+JCI"), a("eExt")),
            Z = a("Z67x"),
            X = (i = Object(J.JsonProperty)("x", Number, !0), n = Object(J.JsonProperty)("y", Number, !0), Object(J.JsonObject)((r = function () {
               function e() {
                  Object(K.a)(this, "x", s, this), Object(K.a)(this, "y", _, this)
               }
               return Object(q.a)(e, [{
                  key: "graphPointObjectString",
                  get: function () {
                     return JSON.stringify(this)
                  }
               }]), e
            }(), s = Object(Y.a)(r.prototype, "x", [i], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return 0
               }
            }), _ = Object(Y.a)(r.prototype, "y", [n], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return 0
               }
            }), o = r)) || o),
            $ = (l = Object(J.JsonProperty)("points", [X], !0), u = Object(J.JsonProperty)("groupType", String, !0), Object(J.JsonObject)((g = function () {
               Object(K.a)(this, "points", h, this), Object(K.a)(this, "groupType", p, this)
            }, h = Object(Y.a)(g.prototype, "points", [l], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), p = Object(Y.a)(g.prototype, "groupType", [u], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), c = g)) || c),
            ee = (b = Object(J.JsonProperty)("pointGroups", [$], !0), d = Object(J.JsonProperty)("curveExpression", String, !0), Object(J.JsonObject)((m = function () {
               Object(K.a)(this, "pointGroups", S, this), Object(K.a)(this, "curveExpression", T, this), this.key = ""
            }, S = Object(Y.a)(m.prototype, "pointGroups", [b], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), T = Object(Y.a)(m.prototype, "curveExpression", [d], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), M = m)) || M),
            te = (f = Object(J.JsonProperty)("curveData", [ee], !0), Object(J.JsonObject)((v = function () {
               function e() {
                  Object(K.a)(this, "curveData", W, this)
               }
               return Object(q.a)(e, [{
                  key: "curveExpressions",
                  get: function () {
                     return this.curveData.map((function (e) {
                        return e.curveExpression
                     }))
                  }
               }]), e
            }(), W = Object(Y.a)(v.prototype, "curveData", [f], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), y = v)) || y),
            ae = (L = Object(J.JsonProperty)("dataType", String, !0), E = Object(J.JsonProperty)("expression", String, !0), Object(J.JsonObject)((w = function () {
               Object(K.a)(this, "dataType", k, this), Object(K.a)(this, "expression", P, this)
            }, k = Object(Y.a)(w.prototype, "dataType", [L], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), P = Object(Y.a)(w.prototype, "expression", [E], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), C = w)) || C),
            ie = (A = Object(J.JsonProperty)("actionName", String, !0), I = Object(J.JsonProperty)("graphImageData", String, !0), O = Object(J.JsonProperty)("analysisData", [ae], !0), R = Object(J.JsonProperty)("graphExpression", String, !0), D = Object(J.JsonProperty)("rawGraphData", te, !0), z = Object(J.JsonProperty)("displayRange", Z.a, !0), N = Object(J.JsonProperty)("key", String, !0), Object(J.JsonObject)((B = function () {
               function e() {
                  Object(K.a)(this, "actionName", F, this), Object(K.a)(this, "graphImageData", Q, this), Object(K.a)(this, "analysisData", j, this), Object(K.a)(this, "graphExpression", x, this), Object(K.a)(this, "rawGraphData", U, this), Object(K.a)(this, "displayRange", V, this), Object(K.a)(this, "key", H, this)
               }
               return Object(q.a)(e, [{
                  key: "curveData",
                  get: function () {
                     return this.rawGraphData ? this.rawGraphData.curveData : []
                  }
               }, {
                  key: "curveExpressions",
                  get: function () {
                     return this.rawGraphData ? this.rawGraphData.curveExpressions : []
                  }
               }]), e
            }(), F = Object(Y.a)(B.prototype, "actionName", [A], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), Q = Object(Y.a)(B.prototype, "graphImageData", [I], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), j = Object(Y.a)(B.prototype, "analysisData", [O], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), x = Object(Y.a)(B.prototype, "graphExpression", [R], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), U = Object(Y.a)(B.prototype, "rawGraphData", [D], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return null
               }
            }), V = Object(Y.a)(B.prototype, "displayRange", [z], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return null
               }
            }), H = Object(Y.a)(B.prototype, "key", [N], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), G = B)) || G)
      },
      qkR8: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return d
         }));
         var i, n, o, r, s, _, l, u, c, g, h = a("a3ss"),
            p = a("Y65e"),
            b = (a("+JCI"), a("eExt")),
            d = (i = Object(b.JsonProperty)("hint", String, !0), n = Object(b.JsonProperty)("step", String, !0), o = Object(b.JsonProperty)("expression", String, !0), r = Object(b.JsonProperty)("prevExpression", String, !0), Object(b.JsonObject)((_ = function () {
               function e() {
                  Object(h.a)(this, "hint", l, this), Object(h.a)(this, "step", u, this), Object(h.a)(this, "expression", c, this), Object(h.a)(this, "prevExpression", g, this)
               }
               return e.prototype.GetDebugViewString = function () {
                  return "Hint: " + this.hint + ", Step: " + this.step + ", Expression: " + this.expression + ", prevExpression: " + this.prevExpression
               }, e
            }(), l = Object(p.a)(_.prototype, "hint", [i], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), u = Object(p.a)(_.prototype, "step", [n], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), c = Object(p.a)(_.prototype, "expression", [o], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), g = Object(p.a)(_.prototype, "prevExpression", [r], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), s = _)) || s)
      },
      r4xH: function (e, t, a) {
         "use strict";

         function i(e) {
            for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
            return t.length < 2 ? t[0] : function () {
               for (var a = [], i = 0; i < arguments.length; i++) a[i] = arguments[i];
               t.forEach((function (t) {
                  return t && t.apply(e, a)
               }))
            }
         }
         a.d(t, "a", (function () {
            return i
         }))
      },
      rLwW: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("VvCP");
         i.__exportStar(a("xrPp"), t), i.__exportStar(a("hZ0c"), t), i.__exportStar(a("L2rz"), t), i.__exportStar(a("eoYf"), t), i.__exportStar(a("pNea"), t)
      },
      rOzn: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = function () {
               function e(e, t) {
                  for (var a = 0; a < t.length; a++) {
                     var i = t[a];
                     i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                  }
               }
               return function (t, a, i) {
                  return a && e(t.prototype, a), i && e(t, i), t
               }
            }(),
            n = r(a("IcFl")),
            o = r(a("Y6c0"));

         function r(e) {
            return e && e.__esModule ? e : {
               default: e
            }
         }

         function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
         }

         function _(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
         }

         function l(e) {
            return {
               x: e.clientX,
               y: e.clientY
            }
         }
         var u = function (e) {
            function t() {
               var e, a, i;
               s(this, t);
               for (var n = arguments.length, o = Array(n), r = 0; r < n; r++) o[r] = arguments[r];
               return a = i = _(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o))), i.isLongPressing = !1, i.startingPosition = {
                  x: 0,
                  y: 0
               }, i.clearTimeout = function () {
                  i.timerID && (clearTimeout(i.timerID), i.timerID = null)
               }, i.onPointerUp = function (e) {
                  i.timerID && i.cancelLongPress();
                  var t = l(e);
                  i.isLongPressing || i.exceedDragThreshold(t) ? i.isLongPressing = !1 : i.props.onShortPress(e)
               }, i.onPointerDown = function (e) {
                  i.props.primaryMouseButtonOnly && "mouse" === e.pointerType && 0 !== e.button || (i.startingPosition = l(e), i.timerID = setTimeout((function () {
                     i.isLongPressing = !0, i.props.onLongPress(e)
                  }), i.props.longPressTime))
               }, i.onPointerMove = function (e) {
                  var t = l(e);
                  i.timerID && i.exceedDragThreshold(t) && i.cancelLongPress()
               }, i.onPointerLeave = function () {
                  i.timerID && i.cancelLongPress()
               }, _(i, a)
            }
            return function (e, t) {
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
               key: "componentWillUnmount",
               value: function () {
                  this.clearTimeout()
               }
            }, {
               key: "cancelLongPress",
               value: function () {
                  this.clearTimeout()
               }
            }, {
               key: "exceedDragThreshold",
               value: function (e) {
                  return t = this.startingPosition, a = e, Math.sqrt(Math.pow(a.x - t.x, 2) + Math.pow(a.y - t.y, 2)) > this.props.dragThreshold;
                  var t, a
               }
            }, {
               key: "render",
               value: function () {
                  return n.default.createElement("div", {
                     onPointerUp: this.onPointerUp,
                     onPointerDown: this.onPointerDown,
                     onPointerMove: this.onPointerMove,
                     onPointerLeave: this.onPointerLeave
                  }, this.props.children)
               }
            }]), t
         }(n.default.PureComponent);
         u.propTypes = {
            onLongPress: o.default.func.isRequired,
            onShortPress: o.default.func,
            longPressTime: o.default.number,
            primaryMouseButtonOnly: o.default.bool,
            dragThreshold: o.default.number,
            children: o.default.node
         }, u.defaultProps = {
            longPressTime: 500,
            primaryMouseButtonOnly: !0,
            dragThreshold: 100
         }, t.default = u
      },
      sY4W: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return r
         }));
         var i = a("kRhf"),
            n = a("pxsQ"),
            o = a("lhp9");

         function r() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return s(e, Object(n.a)())
         }

         function s(e, t) {
            var a = e instanceof Array ? e : [e],
               n = Object(i.a)(a),
               r = n.classes,
               s = n.objects;
            return s.length && r.push(Object(o.c)(t || {}, s)), r.join(" ")
         }
      },
      sueQ: function (e, t, a) {
         "use strict";
         var i, n, o, r, s, _, l, u, c, g, h, p, b, d, M, m, S, T, f, y, v, W, L, E, C, w, k, P, A, I, O, R, D, z, N, G, B, F, Q, j, x, U, V, H, K, q, Y, J, Z, X, $, ee, te, ae, ie, ne, oe, re, se, _e, le, ue, ce, ge = a("o0o1"),
            he = a.n(ge),
            pe = (a("O9bg"), a("HaE+")),
            be = a("eExt"),
            de = a("CbWY"),
            Me = a.n(de),
            me = a("a3ss"),
            Se = a("Y65e"),
            Te = (a("+JCI"), a("qNI8")),
            fe = (i = Object(be.JsonProperty)("graphData", [Te.a], !0), Object(be.JsonObject)((o = function () {
               Object(me.a)(this, "results", r, this)
            }, r = Object(Se.a)(o.prototype, "results", [i], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), n = o)) || n),
            ye = a("Ffok"),
            ve = (s = Object(be.JsonProperty)("latex", String), Object(be.JsonObject)((l = function () {
               Object(me.a)(this, "latex", u, this)
            }, u = Object(Se.a)(l.prototype, "latex", [s], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), _ = l)) || _),
            We = (c = Object(be.JsonProperty)("equation", String, !0), g = Object(be.JsonProperty)("answerCount", Number, !0), h = Object(be.JsonProperty)("correctAnswerIndex", Number, !0), p = Object(be.JsonProperty)("answers", [String], !0), Object(be.JsonObject)((d = function () {
               Object(me.a)(this, "equation", M, this), Object(me.a)(this, "answerCount", m, this), Object(me.a)(this, "correctAnswerIndex", S, this), Object(me.a)(this, "answers", T, this)
            }, M = Object(Se.a)(d.prototype, "equation", [c], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), m = Object(Se.a)(d.prototype, "answerCount", [g], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return 0
               }
            }), S = Object(Se.a)(d.prototype, "correctAnswerIndex", [h], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return -1
               }
            }), T = Object(Se.a)(d.prototype, "answers", [p], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), b = d)) || b),
            Le = (f = Object(be.JsonProperty)("variationCount", Number, !0), y = Object(be.JsonProperty)("eqnVariations", [We], !0), v = Object(be.JsonProperty)("equationId", String, !0), Object(be.JsonObject)((L = function () {
               Object(me.a)(this, "variationCount", E, this), Object(me.a)(this, "eqnVariations", C, this), Object(me.a)(this, "equationId", w, this)
            }, E = Object(Se.a)(L.prototype, "variationCount", [f], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return 0
               }
            }), C = Object(Se.a)(L.prototype, "eqnVariations", [y], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), w = Object(Se.a)(L.prototype, "equationId", [v], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), W = L)) || W),
            Ee = a("Sfje"),
            Ce = a("P95r"),
            we = a("mhro"),
            ke = a("Z/w7"),
            Pe = (k = Object(be.JsonProperty)("videos", [Ce.a], !0), P = Object(be.JsonProperty)("entites", [Ee.a], !0), A = Object(be.JsonProperty)("images", [we.a], !0), I = Object(be.JsonProperty)("worksheets", [ke.a], !0), Object(be.JsonObject)((R = function () {
               Object(me.a)(this, "videos", D, this), Object(me.a)(this, "entities", z, this), Object(me.a)(this, "images", N, this), Object(me.a)(this, "worksheets", G, this)
            }, D = Object(Se.a)(R.prototype, "videos", [k], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), z = Object(Se.a)(R.prototype, "entities", [P], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), N = Object(Se.a)(R.prototype, "images", [A], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), G = Object(Se.a)(R.prototype, "worksheets", [I], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), O = R)) || O),
            Ae = (B = Object(be.JsonObject)("MathOCRResponse"), F = Object(be.JsonProperty)("latex", String, !0), Q = Object(be.JsonProperty)("ocrText", String, !0), j = Object(be.JsonProperty)("solution", String, !0), x = Object(be.JsonProperty)("timestamp", Number, !0), U = Object(be.JsonProperty)("isError", Boolean, !0), V = Object(be.JsonProperty)("errorMessage", String, !0), H = Object(be.JsonProperty)("customLatex", String, !0), K = Object(be.JsonProperty)("keyboardLatexInput", String, !0), B((Y = function () {
               Object(me.a)(this, "latex", J, this), Object(me.a)(this, "ocrText", Z, this), Object(me.a)(this, "solution", X, this), Object(me.a)(this, "timestamp", $, this), Object(me.a)(this, "isError", ee, this), Object(me.a)(this, "errorMessage", te, this), Object(me.a)(this, "customLatex", ae, this), Object(me.a)(this, "keyboardLatexInput", ie, this)
            }, J = Object(Se.a)(Y.prototype, "latex", [F], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), Z = Object(Se.a)(Y.prototype, "ocrText", [Q], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), X = Object(Se.a)(Y.prototype, "solution", [j], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), $ = Object(Se.a)(Y.prototype, "timestamp", [x], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return 0
               }
            }), ee = Object(Se.a)(Y.prototype, "isError", [U], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return !1
               }
            }), te = Object(Se.a)(Y.prototype, "errorMessage", [V], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), ae = Object(Se.a)(Y.prototype, "customLatex", [H], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), ie = Object(Se.a)(Y.prototype, "keyboardLatexInput", [K], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), q = Y)) || q),
            Ie = (ne = Object(be.JsonProperty)("e", String, !0), Object(be.JsonObject)((re = function () {
               Object(me.a)(this, "e", se, this)
            }, se = Object(Se.a)(re.prototype, "e", [ne], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), oe = re)) || oe),
            Oe = (_e = Object(be.JsonProperty)("values", [Ie], !0), Object(be.JsonObject)((ue = function () {
               Object(me.a)(this, "values", ce, this)
            }, ce = Object(Se.a)(ue.prototype, "values", [_e], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return []
               }
            }), le = ue)) || le),
            Re = a("tofC");

         function De(e, t) {
            var a;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
               if (Array.isArray(e) || (a = function (e, t) {
                     if (!e) return;
                     if ("string" == typeof e) return ze(e, t);
                     var a = Object.prototype.toString.call(e).slice(8, -1);
                     "Object" === a && e.constructor && (a = e.constructor.name);
                     if ("Map" === a || "Set" === a) return Array.from(e);
                     if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return ze(e, t)
                  }(e)) || t && e && "number" == typeof e.length) {
                  a && (e = a);
                  var i = 0;
                  return function () {
                     return i >= e.length ? {
                        done: !0
                     } : {
                        done: !1,
                        value: e[i++]
                     }
                  }
               }
               throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (a = e[Symbol.iterator]()).next.bind(a)
         }

         function ze(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, i = new Array(t); a < t; a++) i[a] = e[a];
            return i
         }
         var Ne = function () {
            function e() {}
            var t = e.prototype;
            return t.GetExpressionFromImageBase64 = function () {
               var e = Object(pe.a)(he.a.mark((function e(t, a) {
                  var i, n, o, r;
                  return he.a.wrap((function (e) {
                     for (;;) switch (e.prev = e.next) {
                        case 0:
                           return void 0 === a && (a = "Sketch"), i = {
                              headers: {
                                 Accept: "application/json",
                                 "Content-Type": "application/json"
                              },
                              method: "POST",
                              body: JSON.stringify({
                                 data: t,
                                 clientInfo: Object.assign({
                                    platform: "web"
                                 }, Re.a.GetClientInfo()),
                                 inputForm: a,
                                 timestamp: (new Date).getTime()
                              })
                           }, e.prev = 2, e.next = 5, Me()("https://www.bing.com/cameraexp/api/v1/getlatex", i);
                        case 5:
                           if (!(n = e.sent) || !n.ok) {
                              e.next = 14;
                              break
                           }
                           return e.next = 9, n.json();
                        case 9:
                           if (!(o = e.sent)) {
                              e.next = 14;
                              break
                           }
                           if (!(r = (new be.JsonConvert).deserializeObject(o, Ae)) || r.isError || !r.latex) {
                              e.next = 14;
                              break
                           }
                           return e.abrupt("return", r);
                        case 14:
                           e.next = 18;
                           break;
                        case 16:
                           e.prev = 16, e.t0 = e.catch(2);
                        case 18:
                           return e.abrupt("return", new Ae);
                        case 19:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [2, 16]
                  ])
               })));
               return function (t, a) {
                  return e.apply(this, arguments)
               }
            }(), t.SolveSimpleLatex = function () {
               var e = Object(pe.a)(he.a.mark((function e(t) {
                  var a, i, n, o;
                  return he.a.wrap((function (e) {
                     for (;;) switch (e.prev = e.next) {
                        case 0:
                           return a = {
                              headers: {
                                 Accept: "application/json",
                                 "Content-Type": "application/json"
                              },
                              method: "POST",
                              body: JSON.stringify({
                                 LatexExpression: t,
                                 clientInfo: Object.assign({
                                    platform: "web"
                                 }, Re.a.GetClientInfo())
                              })
                           }, e.prev = 1, e.next = 4, Me()("https://www.bing.com/cameraexp/api/v1/solvesimplelatex", a);
                        case 4:
                           if (!(i = e.sent) || !i.ok) {
                              e.next = 13;
                              break
                           }
                           return e.next = 8, i.json();
                        case 8:
                           if (!(n = e.sent)) {
                              e.next = 13;
                              break
                           }
                           if (!(o = (new be.JsonConvert).deserializeObject(n, Ae))) {
                              e.next = 13;
                              break
                           }
                           return e.abrupt("return", o.solution);
                        case 13:
                           e.next = 17;
                           break;
                        case 15:
                           e.prev = 15, e.t0 = e.catch(1);
                        case 17:
                           return e.abrupt("return", "");
                        case 18:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [1, 15]
                  ])
               })));
               return function (t) {
                  return e.apply(this, arguments)
               }
            }(), t.GetExpressionFromEquationId = function () {
               var e = Object(pe.a)(he.a.mark((function e(t) {
                  var a, i, n, o;
                  return he.a.wrap((function (e) {
                     for (;;) switch (e.prev = e.next) {
                        case 0:
                           return a = {
                              headers: {},
                              method: "GET"
                           }, e.prev = 1, e.next = 4, Me()("https://www.bing.com/cameraexp/api/v1/getequation?equationId=" + t.replace("@", ""), a);
                        case 4:
                           if (!(i = e.sent) || !i.ok) {
                              e.next = 15;
                              break
                           }
                           return e.next = 8, i.json();
                        case 8:
                           if (!(n = e.sent)) {
                              e.next = 15;
                              break
                           }
                           if (!(o = (new be.JsonConvert).deserializeObject(n, ve))) {
                              e.next = 15;
                              break
                           }
                           if ("" !== o.latex) {
                              e.next = 14;
                              break
                           }
                           return e.abrupt("return", "@NOTFOUND");
                        case 14:
                           return e.abrupt("return", o.latex);
                        case 15:
                           e.next = 19;
                           break;
                        case 17:
                           e.prev = 17, e.t0 = e.catch(1);
                        case 19:
                           return e.abrupt("return", void 0);
                        case 20:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [1, 17]
                  ])
               })));
               return function (t) {
                  return e.apply(this, arguments)
               }
            }(), t.GetAnswerFromExpression = function () {
               var e = Object(pe.a)(he.a.mark((function e(t, a, i) {
                  var n, o, r, s, _, l, u, c, g, h;
                  return he.a.wrap((function (e) {
                     for (;;) switch (e.prev = e.next) {
                        case 0:
                           return void 0 === i && (i = {}), o = (n = i).customLatex, r = void 0 === o ? t : o, s = n.showCustomResult, _ = void 0 !== s && s, l = {
                              headers: {
                                 Accept: "application/json",
                                 "Content-Type": "application/json"
                              },
                              method: "POST",
                              body: JSON.stringify({
                                 latexExpression: t,
                                 clientInfo: Object.assign({
                                    platform: "web",
                                    mkt: a,
                                    skipGraphOutput: !0,
                                    skipBingVideoEntity: !0
                                 }, Re.a.GetClientInfo()),
                                 customLatex: r,
                                 showCustomResult: _
                              })
                           }, e.prev = 3, e.next = 6, Me()("https://www.bing.com/cameraexp/api/v1/solvelatex", l);
                        case 6:
                           if (!(u = e.sent) || !u.ok) {
                              e.next = 15;
                              break
                           }
                           return e.next = 10, u.json();
                        case 10:
                           if (!(c = e.sent)) {
                              e.next = 15;
                              break
                           }
                           return (g = this.processSolveResponse(c)) && g.mathSolverResult && "\\pi" === t && (g.mathSolverResult.actions[0].solution = "$3.1415926535897932$", g.mathSolverResult.keyboardLatexInput = "\\pi"), e.abrupt("return", g);
                        case 15:
                           e.next = 23;
                           break;
                        case 17:
                           return e.prev = 17, e.t0 = e.catch(3), (h = new ye.a).isError = !0, h.errorMessage = "OFFLINE", e.abrupt("return", h);
                        case 23:
                           return e.abrupt("return", void 0);
                        case 24:
                        case "end":
                           return e.stop()
                     }
                  }), e, this, [
                     [3, 17]
                  ])
               })));
               return function (t, a, i) {
                  return e.apply(this, arguments)
               }
            }(), t.GetAnswerFromEquationId = function () {
               var e = Object(pe.a)(he.a.mark((function e(t, a) {
                  var i, n, o;
                  return he.a.wrap((function (e) {
                     for (;;) switch (e.prev = e.next) {
                        case 0:
                           return i = {
                              headers: {
                                 Accept: "application/json",
                                 "Content-Type": "application/json"
                              },
                              method: "POST",
                              body: JSON.stringify({
                                 skipCustomParser: !1,
                                 clientInfo: Object.assign({
                                    platform: "web",
                                    mkt: a
                                 }, Re.a.GetClientInfo()),
                                 skipGraphOutput: !1,
                                 skipBingVideoEntity: !0,
                                 equationId: t.replace("@", "")
                              })
                           }, e.prev = 1, e.next = 4, Me()("https://www.bing.com/cameraexp/api/v1/solveid", i);
                        case 4:
                           if (!(n = e.sent) || !n.ok) {
                              e.next = 11;
                              break
                           }
                           return e.next = 8, n.json();
                        case 8:
                           if (!(o = e.sent)) {
                              e.next = 11;
                              break
                           }
                           return e.abrupt("return", this.processSolveResponse(o));
                        case 11:
                           e.next = 15;
                           break;
                        case 13:
                           e.prev = 13, e.t0 = e.catch(1);
                        case 15:
                           return e.abrupt("return", void 0);
                        case 16:
                        case "end":
                           return e.stop()
                     }
                  }), e, this, [
                     [1, 13]
                  ])
               })));
               return function (t, a) {
                  return e.apply(this, arguments)
               }
            }(), t.GetGraphDataFromGraphExpressions = function () {
               var e = Object(pe.a)(he.a.mark((function e(t, a, i) {
                  var n, o, r;
                  return he.a.wrap((function (e) {
                     for (;;) switch (e.prev = e.next) {
                        case 0:
                           return void 0 === t && (t = []), void 0 === a && (a = []), void 0 === i && (i = null), n = {
                              headers: {
                                 Accept: "application/json",
                                 "Content-Type": "application/json"
                              },
                              method: "POST",
                              body: JSON.stringify({
                                 graphExpressions: t,
                                 latexExpressions: a,
                                 graphRange: i,
                                 getDetailedInfo: !0,
                                 clientInfo: Object.assign({
                                    platform: "web"
                                 }, Re.a.GetClientInfo())
                              })
                           }, e.next = 6, Me()("https://www.bing.com/cameraexp/api/v1/getgraphdata", n);
                        case 6:
                           if (!(o = e.sent) || !o.ok) {
                              e.next = 13;
                              break
                           }
                           return e.next = 10, o.json();
                        case 10:
                           if (!(r = e.sent)) {
                              e.next = 13;
                              break
                           }
                           return e.abrupt("return", (new be.JsonConvert).deserializeObject(r, fe));
                        case 13:
                           return e.abrupt("return", void 0);
                        case 14:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })));
               return function (t, a, i) {
                  return e.apply(this, arguments)
               }
            }(), t.GetBingAnswers = function () {
               var e = Object(pe.a)(he.a.mark((function e(t) {
                  var a, i, n;
                  return he.a.wrap((function (e) {
                     for (;;) switch (e.prev = e.next) {
                        case 0:
                           return a = {
                              headers: {
                                 Accept: "application/json",
                                 "Content-Type": "application/json"
                              },
                              method: "POST",
                              body: JSON.stringify({
                                 queryInfo: t
                              })
                           }, e.next = 3, Me()("https://www.bing.com/cameraexp/api/v1/generateCustomBingAnswers", a);
                        case 3:
                           if (!(i = e.sent) || !i.ok) {
                              e.next = 10;
                              break
                           }
                           return e.next = 7, i.json();
                        case 7:
                           if (!(n = e.sent)) {
                              e.next = 10;
                              break
                           }
                           return e.abrupt("return", (new be.JsonConvert).deserializeObject(n, Pe));
                        case 10:
                           return e.abrupt("return", void 0);
                        case 11:
                        case "end":
                           return e.stop()
                     }
                  }), e)
               })));
               return function (t) {
                  return e.apply(this, arguments)
               }
            }(), t.GetPopularProblems = function () {
               var e = Object(pe.a)(he.a.mark((function e(t) {
                  var a, i, n, o;
                  return he.a.wrap((function (e) {
                     for (;;) switch (e.prev = e.next) {
                        case 0:
                           return a = {
                              headers: {},
                              method: "GET"
                           }, e.prev = 1, e.next = 4, Me()("https://bingedu.azureedge.net/mathuxjs/popular/popular-" + t + ".json", a);
                        case 4:
                           if (!(i = e.sent) || !i.ok) {
                              e.next = 13;
                              break
                           }
                           return e.next = 8, i.json();
                        case 8:
                           if (!(n = e.sent)) {
                              e.next = 13;
                              break
                           }
                           if (!(o = (new be.JsonConvert).deserializeObject(n, Oe))) {
                              e.next = 13;
                              break
                           }
                           return e.abrupt("return", o.values);
                        case 13:
                           e.next = 17;
                           break;
                        case 15:
                           e.prev = 15, e.t0 = e.catch(1);
                        case 17:
                           return e.abrupt("return", void 0);
                        case 18:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [1, 15]
                  ])
               })));
               return function (t) {
                  return e.apply(this, arguments)
               }
            }(), t.GenerateQuiz = function () {
               var e = Object(pe.a)(he.a.mark((function e(t) {
                  return he.a.wrap((function (e) {
                     for (;;) switch (e.prev = e.next) {
                        case 0:
                           return e.abrupt("return", this.fetchQuiz({
                              latex: t,
                              maxQuestions: 5
                           }));
                        case 1:
                        case "end":
                           return e.stop()
                     }
                  }), e, this)
               })));
               return function (t) {
                  return e.apply(this, arguments)
               }
            }(), t.GetQuiz = function () {
               var e = Object(pe.a)(he.a.mark((function e(t) {
                  return he.a.wrap((function (e) {
                     for (;;) switch (e.prev = e.next) {
                        case 0:
                           return e.abrupt("return", this.fetchQuiz({
                              EquationId: t
                           }));
                        case 1:
                        case "end":
                           return e.stop()
                     }
                  }), e, this)
               })));
               return function (t) {
                  return e.apply(this, arguments)
               }
            }(), t.fetchQuiz = function () {
               var e = Object(pe.a)(he.a.mark((function e(t) {
                  var a, i, n;
                  return he.a.wrap((function (e) {
                     for (;;) switch (e.prev = e.next) {
                        case 0:
                           return a = {
                              headers: {
                                 Accept: "application/json",
                                 "Content-Type": "application/json"
                              },
                              method: "POST",
                              body: JSON.stringify(t)
                           }, e.prev = 1, e.next = 4, Me()("https://www.bing.com/cameraexp/api/v1/generateproblems", a);
                        case 4:
                           if (!(i = e.sent) || !i.ok) {
                              e.next = 11;
                              break
                           }
                           return e.next = 8, i.json();
                        case 8:
                           if (!(n = e.sent)) {
                              e.next = 11;
                              break
                           }
                           return e.abrupt("return", (new be.JsonConvert).deserializeObject(n, Le));
                        case 11:
                           e.next = 15;
                           break;
                        case 13:
                           e.prev = 13, e.t0 = e.catch(1);
                        case 15:
                           return e.abrupt("return", void 0);
                        case 16:
                        case "end":
                           return e.stop()
                     }
                  }), e, null, [
                     [1, 13]
                  ])
               })));
               return function (t) {
                  return e.apply(this, arguments)
               }
            }(), t.processSolveResponse = function (e) {
               var t = JSON.parse(e.results[0].tags[0].actions[0].customData),
                  a = (new be.JsonConvert).deserializeObject(JSON.parse(t.previewText), ye.a);
               if (a.mathSolverResult && a.mathSolverResult.actions && a.mathSolverResult.actions.length > 0) {
                  for (var i, n = [], o = [], r = De(a.mathSolverResult.actions); !(i = r()).done;) {
                     var s = i.value;
                     s.templateSteps && s.templateSteps.length > 0 ? n.push(s) : o.push(s)
                  }
                  a.mathSolverResult.actions = n.concat(o)
               }
               return a.entities = [], a.videos = [], a
            }, e
         }();
         t.a = new Ne
      },
      "t4P/": function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return o
         }));
         var i = a("d6cv"),
            n = 0,
            o = function () {
               function e() {}
               return e.getValue = function (e, t) {
                  var a = r();
                  return void 0 === a[e] && (a[e] = "function" == typeof t ? t() : t), a[e]
               }, e.setValue = function (e, t) {
                  var a = r(),
                     i = a.__callbacks__,
                     n = a[e];
                  if (t !== n) {
                     a[e] = t;
                     var o = {
                        oldValue: n,
                        value: t,
                        key: e
                     };
                     for (var s in i) i.hasOwnProperty(s) && i[s](o)
                  }
                  return t
               }, e.addChangeListener = function (e) {
                  var t = e.__id__,
                     a = s();
                  t || (t = e.__id__ = String(n++)), a[t] = e
               }, e.removeChangeListener = function (e) {
                  delete s()[e.__id__]
               }, e
            }();

         function r() {
            var e, t = Object(i.a)() || {};
            return t.__globalSettings__ || (t.__globalSettings__ = ((e = {}).__callbacks__ = {}, e)), t.__globalSettings__
         }

         function s() {
            return r().__callbacks__
         }
      },
      t8ja: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("X4G7"),
            n = a("vdsK");
         t.JsonConverter = function (e) {
            e[i.Settings.MAPPER_PROPERTY] = ""
         }, t.JsonObject = function (e) {
            var t = "",
               a = function (e) {
                  e.prototype[i.Settings.CLASS_IDENTIFIER] = t.length > 0 ? t : e.name;
                  var a = e.prototype[i.Settings.MAPPING_PROPERTY];
                  if (a)
                     for (var n = 0, o = Object.keys(a).filter((function (e) {
                           return 0 === e.indexOf(i.Settings.CLASS_IDENTIFIER + ".")
                        })); n < o.length; n++) {
                        var r = o[n];
                        a[r.replace(i.Settings.CLASS_IDENTIFIER, e.prototype[i.Settings.CLASS_IDENTIFIER])] = a[r], delete a[r]
                     }
               };
            switch (typeof e) {
               case "string":
                  return t = e, a;
               case "function":
                  return void a(e);
               case "undefined":
                  return a;
               default:
                  throw new Error("Fatal error in JsonConvert. It is mandatory to pass a string as parameter in the @JsonObject decorator.\n\nUse either @JsonObject or @JsonObject(classId) where classId is a string.\n\n")
            }
         }, t.JsonProperty = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return function (t, a) {
               var o = a,
                  r = n.Any,
                  s = !1;
               switch (e.length) {
                  case 1:
                     if (void 0 === e[0]) throw new Error('Fatal error in JsonConvert. It is not allowed to explicitly pass "undefined" as first parameter in the @JsonProperty decorator.\n\n\tClass property: \n\t\t' + a + "\n\nLeave the decorator parameters empty if you do not wish to pass the first parameter.\n\n");
                     o = e[0];
                     break;
                  case 2:
                     if (void 0 === e[0]) throw new Error('Fatal error in JsonConvert. It is not allowed to explicitly pass "undefined" as first parameter in the @JsonProperty decorator.\n\n\tClass property: \n\t\t' + a + "\n\nLeave the decorator parameters empty if you do not wish to pass the first parameter.\n\n");
                     if (void 0 === e[1]) throw new Error('Fatal error in JsonConvert. It is not allowed to explicitly pass "undefined" as second parameter in the @JsonProperty decorator.\n\n\tClass property: \n\t\t' + a + '\n\nUse "Any" to allow any type. You can import this class from "json2typescript".\n\n');
                     o = e[0], r = e[1];
                     break;
                  case 3:
                     if (void 0 === e[0]) throw new Error('Fatal error in JsonConvert. It is not allowed to explicitly pass "undefined" as first parameter in the @JsonProperty decorator.\n\n\tClass property: \n\t\t' + a + "\n\nLeave the decorator parameters empty if you do not wish to pass the first parameter.\n\n");
                     if (void 0 === e[1]) throw new Error('Fatal error in JsonConvert. It is not allowed to explicitly pass "undefined" as second parameter in the @JsonProperty decorator.\n\n\tClass property: \n\t\t' + a + '\n\nUse "Any" to allow any type. You can import this class from "json2typescript".\n\n');
                     o = e[0], r = e[1], s = e[2]
               }
               void 0 === t[i.Settings.MAPPING_PROPERTY] && (t[i.Settings.MAPPING_PROPERTY] = []);
               var _ = new i.MappingOptions;
               if (_.classPropertyName = a, _.jsonPropertyName = o, _.isOptional = s || !1, null != r && void 0 !== r[i.Settings.MAPPER_PROPERTY] ? _.customConverter = new r : _.expectedJsonType = r, void 0 !== t[i.Settings.MAPPING_PROPERTY][i.Settings.CLASS_IDENTIFIER + "." + a]) throw new Error("Fatal error in JsonConvert. It is not allowed to add multiple decorators for the same property.\n\n\tClass property: \n\t\t" + a + "\n\n");
               t[i.Settings.MAPPING_PROPERTY][i.Settings.CLASS_IDENTIFIER + "." + a] = _
            }
         }
      },
      "tj/O": function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return i
         })), a.d(t, "b", (function () {
            return n
         }));
         var i = "data-portal-element";

         function n(e) {
            e.setAttribute(i, "true")
         }
      },
      tnFO: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return o
         })), a.d(t, "b", (function () {
            return _
         }));
         var i, n = a("VvCP"),
            o = {
               none: 0,
               insertNode: 1,
               appendChild: 2
            },
            r = "undefined" != typeof navigator && /rv:11.0/.test(navigator.userAgent),
            s = {};
         try {
            s = window
         } catch (l) {}
         var _ = function () {
            function e(e) {
               this._rules = [], this._preservedRules = [], this._rulesToInsert = [], this._counter = 0, this._keyToClassName = {}, this._onResetCallbacks = [], this._classNameToArgs = {}, this._config = Object(n.__assign)({
                  injectionMode: o.insertNode,
                  defaultPrefix: "css",
                  namespace: void 0,
                  cspSettings: void 0
               }, e), this._keyToClassName = this._config.classNameCache || {}
            }
            return e.getInstance = function () {
               var t;
               if (!(i = s.__stylesheet__) || i._lastStyleElement && i._lastStyleElement.ownerDocument !== document) {
                  var a = (null === (t = s) || void 0 === t ? void 0 : t.FabricConfig) || {};
                  i = s.__stylesheet__ = new e(a.mergeStyles)
               }
               return i
            }, e.prototype.setConfig = function (e) {
               this._config = Object(n.__assign)(Object(n.__assign)({}, this._config), e)
            }, e.prototype.onReset = function (e) {
               this._onResetCallbacks.push(e)
            }, e.prototype.getClassName = function (e) {
               var t = this._config.namespace;
               return (t ? t + "-" : "") + (e || this._config.defaultPrefix) + "-" + this._counter++
            }, e.prototype.cacheClassName = function (e, t, a, i) {
               this._keyToClassName[t] = e, this._classNameToArgs[e] = {
                  args: a,
                  rules: i
               }
            }, e.prototype.classNameFromKey = function (e) {
               return this._keyToClassName[e]
            }, e.prototype.getClassNameCache = function () {
               return this._keyToClassName
            }, e.prototype.argsFromClassName = function (e) {
               var t = this._classNameToArgs[e];
               return t && t.args
            }, e.prototype.insertedRulesFromClassName = function (e) {
               var t = this._classNameToArgs[e];
               return t && t.rules
            }, e.prototype.insertRule = function (e, t) {
               var a = this._config.injectionMode !== o.none ? this._getStyleElement() : void 0;
               if (t && this._preservedRules.push(e), a) switch (this._config.injectionMode) {
                  case o.insertNode:
                     var i = a.sheet;
                     try {
                        i.insertRule(e, i.cssRules.length)
                     } catch (n) {}
                     break;
                  case o.appendChild:
                     a.appendChild(document.createTextNode(e))
               } else this._rules.push(e);
               this._config.onInsertRule && this._config.onInsertRule(e)
            }, e.prototype.getRules = function (e) {
               return (e ? this._preservedRules.join("") : "") + this._rules.join("") + this._rulesToInsert.join("")
            }, e.prototype.reset = function () {
               this._rules = [], this._rulesToInsert = [], this._counter = 0, this._classNameToArgs = {}, this._keyToClassName = {}, this._onResetCallbacks.forEach((function (e) {
                  return e()
               }))
            }, e.prototype.resetKeys = function () {
               this._keyToClassName = {}
            }, e.prototype._getStyleElement = function () {
               var e = this;
               return this._styleElement || "undefined" == typeof document || (this._styleElement = this._createStyleElement(), r || window.requestAnimationFrame((function () {
                  e._styleElement = void 0
               }))), this._styleElement
            }, e.prototype._createStyleElement = function () {
               var e = document.head,
                  t = document.createElement("style");
               t.setAttribute("data-merge-styles", "true");
               var a = this._config.cspSettings;
               if (a && a.nonce && t.setAttribute("nonce", a.nonce), this._lastStyleElement) e.insertBefore(t, this._lastStyleElement.nextElementSibling);
               else {
                  var i = this._findPlaceholderStyleTag();
                  i ? e.insertBefore(t, i.nextElementSibling) : e.insertBefore(t, e.childNodes[0])
               }
               return this._lastStyleElement = t, t
            }, e.prototype._findPlaceholderStyleTag = function () {
               var e = document.head;
               return e ? e.querySelector("style[data-merge-styles]") : null
            }, e
         }()
      },
      tofC: function (e, t, a) {
         "use strict";
         var i = function () {
            function e() {
               this.clientInfo = {}
            }
            var t = e.prototype;
            return t.SetClientInfo = function (e) {
               this.clientInfo = e
            }, t.GetClientInfo = function () {
               return this.clientInfo
            }, e
         }();
         t.a = new i
      },
      vWrG: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return g
         }));
         var i, n, o, r, s, _, l = a("a3ss"),
            u = a("Y65e"),
            c = (a("+JCI"), a("eExt")),
            g = (i = Object(c.JsonProperty)("url", String, !0), n = Object(c.JsonProperty)("title", String, !0), Object(c.JsonObject)((r = function () {
               function e() {
                  Object(l.a)(this, "url", s, this), Object(l.a)(this, "title", _, this)
               }
               return e.CreateFromPDFInfo = function (t) {
                  var a = new e;
                  return a.url = t.url, a.title = t.title, a
               }, e
            }(), s = Object(u.a)(r.prototype, "url", [i], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), _ = Object(u.a)(r.prototype, "title", [n], {
               configurable: !0,
               enumerable: !0,
               writable: !0,
               initializer: function () {
                  return ""
               }
            }), o = r)) || o)
      },
      vdsK: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = function () {};
         t.Any = i
      },
      vuIU: function (e, t, a) {
         "use strict";

         function i(e, t) {
            for (var a = 0; a < t.length; a++) {
               var i = t[a];
               i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
         }

         function n(e, t, a) {
            return t && i(e.prototype, t), a && i(e, a), e
         }
         a.d(t, "a", (function () {
            return n
         }))
      },
      vwdj: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
               value: !0
            }),
            function (e) {
               e[e.DISABLE = 0] = "DISABLE", e[e.ENABLE = 1] = "ENABLE", e[e.LOGGING = 2] = "LOGGING"
            }(t.OperationMode || (t.OperationMode = {})),
            function (e) {
               e[e.CASE_STRICT = 1] = "CASE_STRICT", e[e.CASE_INSENSITIVE = 2] = "CASE_INSENSITIVE"
            }(t.PropertyMatchingRule || (t.PropertyMatchingRule = {})),
            function (e) {
               e[e.ALLOW_NULL = 1] = "ALLOW_NULL", e[e.ALLOW_OBJECT_NULL = 2] = "ALLOW_OBJECT_NULL", e[e.DISALLOW_NULL = 3] = "DISALLOW_NULL"
            }(t.ValueCheckingMode || (t.ValueCheckingMode = {}))
      },
      w52g: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return _
         }));
         var i = a("VvCP"),
            n = a("t4P/"),
            o = {
               settings: {},
               scopedSettings: {},
               inCustomizerContext: !1
            },
            r = n.a.getValue("customizations", {
               settings: {},
               scopedSettings: {},
               inCustomizerContext: !1
            }),
            s = [],
            _ = function () {
               function e() {}
               return e.reset = function () {
                  r.settings = {}, r.scopedSettings = {}
               }, e.applySettings = function (t) {
                  r.settings = Object(i.__assign)(Object(i.__assign)({}, r.settings), t), e._raiseChange()
               }, e.applyScopedSettings = function (t, a) {
                  r.scopedSettings[t] = Object(i.__assign)(Object(i.__assign)({}, r.scopedSettings[t]), a), e._raiseChange()
               }, e.getSettings = function (e, t, a) {
                  void 0 === a && (a = o);
                  for (var i = {}, n = t && a.scopedSettings[t] || {}, s = t && r.scopedSettings[t] || {}, _ = 0, l = e; _ < l.length; _++) {
                     var u = l[_];
                     i[u] = n[u] || a.settings[u] || s[u] || r.settings[u]
                  }
                  return i
               }, e.applyBatchedUpdates = function (t, a) {
                  e._suppressUpdates = !0;
                  try {
                     t()
                  } catch (i) {}
                  e._suppressUpdates = !1, a || e._raiseChange()
               }, e.observe = function (e) {
                  s.push(e)
               }, e.unobserve = function (e) {
                  s = s.filter((function (t) {
                     return t !== e
                  }))
               }, e._raiseChange = function () {
                  e._suppressUpdates || s.forEach((function (e) {
                     return e()
                  }))
               }, e
            }()
      },
      xrPp: function (e, t, a) {
         "use strict";
         Object.defineProperty(t, "__esModule", {
            value: !0
         });
         var i = a("2dVK"),
            n = a("hZ0c"),
            o = a("M50z");
         t.Icon = i.styled(n.IconBase, o.getStyles, void 0, {
            scope: "Icon"
         }, !0)
      },
      yLpj: function (e, t) {
         var a;
         a = function () {
            return this
         }();
         try {
            a = a || new Function("return this")()
         } catch (i) {
            "object" == typeof window && (a = window)
         }
         e.exports = a
      },
      ycBJ: function (e, t, a) {
         "use strict";

         function i(e, t, a, i) {
            return e.addEventListener(t, a, i),
               function () {
                  return e.removeEventListener(t, a, i)
               }
         }
         a.d(t, "a", (function () {
            return i
         }))
      },
      ytTp: function (e, t, a) {
         "use strict";
         var i = a("IcFl"),
            n = a.n(i).a.createContext({
               country: "",
               language: "en",
               market: "",
               clientType: "web",
               featureFlags: {},
               updateLocale: function () {
                  return Promise.resolve()
               }
            });
         t.a = n
      },
      znre: function (e, t, a) {
         "use strict";
         a.d(t, "a", (function () {
            return _
         }));
         var i = a("RaQO"),
            n = {
               themePrimary: "#1da2b5",
               themeLighterAlt: "#010607",
               themeLighter: "#051a1d",
               themeLight: "#093036",
               themeTertiary: "#11606d",
               themeSecondary: "#198d9f",
               themeDarkAlt: "#2ea9bc",
               themeDark: "#48b6c7",
               themeDarker: "#71c8d6",
               neutralLighterAlt: "#111111",
               neutralLighter: "#111111",
               neutralLight: "#101010",
               neutralQuaternaryAlt: "#0f0f0f",
               neutralQuaternary: "#0f0f0f",
               neutralTertiaryAlt: "#0e0e0e",
               neutralTertiary: "#c8c8c8",
               neutralSecondary: "#d0d0d0",
               neutralPrimaryAlt: "#dadada",
               neutralPrimary: "#fff",
               neutralDark: "#f4f4f4",
               black: "#f8f8f8",
               white: "#121212"
            },
            o = {
               themePrimary: "#147F8F",
               themeLighterAlt: "#f2f9fb",
               themeLighter: "#cce9ed",
               themeLight: "#a4d6dd",
               themeTertiary: "#5bafbc",
               themeSecondary: "#268c9c",
               themeDarkAlt: "#127281",
               themeDark: "#0f606d",
               themeDarker: "#0b4750",
               neutralLighterAlt: "#faf9f8",
               neutralLighter: "#f3f2f1",
               neutralLight: "#edebe9",
               neutralQuaternaryAlt: "#e1dfdd",
               neutralQuaternary: "#d0d0d0",
               neutralTertiaryAlt: "#c8c6c4",
               neutralTertiary: "#a19f9d",
               neutralSecondary: "#605e5c",
               neutralPrimaryAlt: "#3b3a39",
               neutralPrimary: "#323130",
               neutralDark: "#201f1e",
               black: "#000000",
               white: "#ffffff"
            },
            r = {
               themePrimary: "#0a84ffff",
               themeLighterAlt: "#f5faff",
               themeLighter: "#d8ebff",
               themeLight: "#b6daff",
               themeTertiary: "#6cb6ff",
               themeSecondary: "#2893ff",
               themeDarkAlt: "#0977e6",
               themeDark: "#0865c2",
               themeDarker: "#064a8f",
               neutralLighterAlt: "#000000",
               neutralLighter: "#000000",
               neutralLight: "#000000",
               neutralQuaternaryAlt: "#000000",
               neutralTertiaryAlt: "#000000",
               neutralTertiary: "#c8c8c8",
               neutralSecondary: "#d0d0d0",
               neutralPrimaryAlt: "#dadada",
               neutralPrimary: "#ffffff",
               neutralDark: "#f4f4f4",
               black: "#f8f8f8",
               white: "#000000"
            },
            s = {
               themePrimary: "#00809d",
               themeLighterAlt: "#f1f9fb",
               themeLighter: "#c9e8ef",
               themeLight: "#9ed6e2",
               themeTertiary: "#4fafc5",
               themeSecondary: "#148eaa",
               themeDarkAlt: "#00748e",
               themeDark: "#006278",
               themeDarker: "#004859",
               neutralLighterAlt: "#faf9f8",
               neutralLighter: "#f3f2f1",
               neutralLight: "#edebe9",
               neutralQuaternaryAlt: "#e1dfdd",
               neutralQuaternary: "#d0d0d0",
               neutralTertiaryAlt: "#c8c6c4",
               neutralTertiary: "#595959",
               neutralSecondary: "#373737",
               neutralPrimaryAlt: "#2f2f2f",
               neutralPrimary: "#000000",
               neutralDark: "#151515",
               black: "#0b0b0b",
               white: "#ffffff"
            };
         Object(i.loadTheme)({
            palette: o
         });
         var _ = function (e, t) {
            var a = "app" === t ? r : n,
               _ = "bing" === t ? s : o;
            Object(i.loadTheme)({
               palette: e ? a : _
            }), "undefined" != typeof document && document.body.setAttribute("data-theme", e ? "dark" : "light")
         }
      }
   }
]);
//# sourceMappingURL=3408dbc55d1f0bf173c15e381583409c775fdc6d-6f9723fe43096660ccb3.js.map