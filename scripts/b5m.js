!function(a) {
    var b,
        c,
        d = "20140605180629",
        e = "http://cdn.bang5mai.com/upload/plugin/assets/main",
        f = "http://b5tcdn.bang5mai.com",
        g = "http://un.114dianxin.com",
        h = "http://p.b5m.com",
        i = "http://ucenter.b5m.com",
        j = "http://c.b5m.com",
        k = {
            module_url: e + "/js/b5m.{module}.js?v=" + d,
            getModuleUrl: function(a) {
                return this.module_url.replace(/\{module\}/g, a)
            },
            paths: {
                jquery: {
                    path: e + "/js/jquery-1.7.2.min.js",
                    _export: function() {
                        return a.$5m ? a.$5m : (a.$5m = a.jQuery.noConflict(!0), a.$5m)
                    }
                },
                "jquery-highcharts": {
                    path: e + "/js/jquery-highcharts.js",
                    _export: function() {
                        return a.$5m = a.jQuery.noConflict(!0), a.$5m
                    }
                }
            }
        };
    !function(d, e) {
        function f(a, b) {
            return u.call(a, b)
        }
        function g(a) {
            return "[object Array]" === w.call(a)
        }
        function i(a, b) {
            var c = document.getElementsByTagName("head")[0],
                d = document.createElement("script");
            d.type = "text/javascript", d.async = !0, 0 !== a.indexOf("http://") && (a = h + a), d.src = a, d.onload = d.onreadystatechange = function() {
                d.readyState && "loaded" !== d.readyState && "complete" !== d.readyState || (d.onload = d.onreadystatechange = null, b && b(), d.parentNode.removeChild(d))
            }, c.appendChild(d)
        }
        function j(a) {
            for (var b = 0, c = a.length; c > b; b++)
                if (!f(x, a[b]))
                    return !1;
            return !0
        }
        function l(a) {
            if (a) {
                "string" == typeof a && (a = [a]);
                for (var b = 0, c = a.length; c > b; b++)
                    f(z, a[b]) || f(x, a[b]) || f(B, a[b]) || (z[a[b]] = !0, y.push(a[b]), setTimeout(function() {
                        p()
                    }, 1))
            }
        }
        function m(b) {
            for (var c = b.dependencies || [], d = [], e = 0, f = c.length; f > e; e++)
                d.push(x[c[e]]);
            return n(b.name, b.fn.apply(a, d)), setTimeout(function() {
                s()
            }, 1), !0
        }
        function n(a, b) {
            x[a] = b, q(), s()
        }
        function o(a) {
            if (a) {
                var b = a.name;
                f(B, b) || (B[b] = !0, A.push(a))
            }
        }
        function p(a) {
            if (!D) {
                D = !0, "undefined" != typeof a && a || (a = y);
                var b = a.shift();
                if (!b)
                    return void (D = !1);
                var c,
                    d = k.paths[b] || k.getModuleUrl(b);
                "object" == typeof d && (c = d._export, d = d.path), d ? i(d, function() {
                    "function" == typeof c && n(b, c())
                }) : e("module[" + b + "] wait to export"), D = !1, p(a)
            }
        }
        function q(a) {
            "undefined" != typeof a && a || (a = A);
            for (var b, c = -1; ++c < a.length;)
                b = a[c], b && (f(x, b.name) ? a[c] = null : j(b.dependencies) && (m(b), a[c] = null))
        }
        function r(b) {
            for (var c = b.dependencies || [], d = [], e = 0, f = c.length; f > e; e++)
                d.push(x[c[e]]);
            return setTimeout(function() {
                b.fn.apply(a, d)
            }, 0), !0
        }
        function s(a) {
            if ("undefined" != typeof a && a || (a = C), 0 !== a.length)
                for (var b, c = -1; ++c < a.length;)
                    b = a[c], b && j(b.dependencies) && (r(b), a[c] = null)
        }
        function t(a) {
            C.push(a)
        }
        var u = Object.prototype.hasOwnProperty,
            v = Object.prototype,
            w = v.toString,
            x = {},
            y = [],
            z = {},
            A = [],
            B = {},
            C = [],
            D = !1;
        !function() {
            "undefined" != typeof jQuery && jQuery().jquery > "1.4.3" && "undefined" != typeof jQuery.ajax && (x.jquery = d.jQuery || d.$, d.$5m = x.jquery)
        }(), b = function(a, b, c, d) {
            if (!f(x, a) || d && d.force) {
                if ("function" == typeof b || g(b) && 0 === b.length)
                    return void n(a, b());
                var e = {
                        name: a,
                        dependencies: b,
                        fn: c
                    },
                    h = e.dependencies;
                return j(h) ? void m(e) : (l(h), void o(e))
            }
        }, c = function(a, b) {
            if (0 !== arguments.length) {
                if ("function" == typeof a && 1 === arguments.length)
                    return void b();
                var c = {
                        dependencies: a,
                        fn: b
                    },
                    d = c.dependencies;
                return j(d) ? void r(c) : (l(d), void t(c))
            }
        }
    }(a, function(a) {
        window.console && console.log(a)
    });
    var l = a["b5mshoppingassist" + d] = {};
    !function(a) {
        a.define = b, a.require = c, a.build_no = d, a.LOCATION = window.location || document.location, a.assets_base_url = e, a._ = a.browser = {
            checkBoxModel: function() {
                if ("undefined" != typeof a.boxModel)
                    return a.boxModel;
                {
                    var b = document.createElement("div");
                    document.body
                }
                return b.style.cssText = "visibility:hidden;border:0;width:1px;height:0;position:static;padding:0px;margin:0px;padding-left:1px;", document.body.appendChild(b), a.boxModel = this.boxModel = 2 === b.offsetWidth, document.body.removeChild(b), b = null, a.boxModel
            },
            isIE6: function() {
                var a = window.navigator.userAgent.toLowerCase(),
                    b = /(msie) ([\w.]+)/.exec(a);
                return null != b && b[2] < 7
            }(),
            isIE: function() {
                var a = window.navigator.userAgent.toLowerCase(),
                    b = /(msie) ([\w.]+)/.exec(a);
                return null != b
            }(),
            loadCss: function() {
                if (this.cssLoaded !== !0) {
                    var b = this.checkBoxModel(),
                        c = (b ? "b5m-plugin.css" : "b5m-plugin.qks.css") + "?v=" + a.build_no,
                        e = document.createElement("link");
                    e.rel = "stylesheet", e.href = a.assets_base_url + "/css/" + (d ? "default" : "v5") + "/" + c, e.type = "text/css", document.getElementsByTagName("head")[0].appendChild(e), this.cssLoaded = !0
                }
            },
            getDomain: function(b) {
                var c = b || a.LOCATION.href;
                try {
                    c = c.match(/([-\w]+\.\b(?:net\.cn|com\.hk|com\.cn|com|cn|net|org|cc|tv$|hk)\b)/)[1]
                } catch (d) {
                    c = a.LOCATION.hostname
                }
                return c
            }
        }, a.domain = a._.getDomain()
    }(l), function(a, c) {
        var l = ["111.com.cn", "12dian.com", "136126.com", "136buy.com", "1626buy.com", "1mall.com", "20aj.com", "228.com.cn", "24dq.com", "360buy.com", "360hqb.com", "360kxr.com", "360mart.com", "360zhai.com", "365.com", "3guo.cn", "4006009207.com", "513523.com", "51buy.com", "yixun.com", "51fanli.com", "51youpin.com", "525j.com.cn", "5366.com", "55bbs.com", "55tuan.com", "5lux.com", "5taoe.com", "7cv.com", "838buy.com", "91pretty.com", "99buy.com.cn", "99read.com", "99vk.com", "afffff.com", "ai356.com", "aimer.com.cn", "amazon.cn", "aoliz.com", "atopi.cn", "bagtree.com", "baidu.com", "bairong.com", "banggo.com", "bearbuy.com.cn", "behui.com", "beifabook.com", "beyond.cn", "binggo.com", "bookall.cn", "bookschina.com", "bookuu.com", "burberry.com", "buy007.com", "buyjk.com", "caomeipai.com", "carinalaukl.com", "cdg2006.com", "chicbaza.com", "chictalk.com.cn", "chinadrtv.com", "coo8.com", "crucco.com", "d1car.com", "d1.com.cn", "dahaodian.com", "dahuozhan.com", "damai.cn", "dangdang.com", "daoyao.com", "daphne.cn", "dazhongdianqi.com.cn", "dhc.net.cn", "dianping.com", "didamall.com", "diyimeili.com", "do93.com", "doin.cn", "domoho.com", "dooland.com", "douban.com", "duitang.com", "duoduofarm.com", "dwgou.com", "easy361.com", "efeihu.com", "egu365.com", "ehaier.com", "eiboa.com", "ej100.cn", "enet.com.cn", "epetbar.com", "epinwei.com", "epkmall.com", "etam.com.cn", "etao.com", "fanrry.cn", "faxianla.com", "fc900.com", "fclub.cn", "fglady.cn", "foryouforme.com", "gaojie.com", "gap.cn", "ggooa.com", "giftmart.com.cn", "giordano.com", "go2am.com", "gome.com.cn", "goodful.com", "gotoread.com", "goujiuwang.com", "gqt168.com", "guang.com", "guangjiela.com", "guopi.com", "hany.cn", "happigo.com", "herbuy.com.cn", "hitao.com", "hmeili.com", "hodo.cn", "homecl.com", "homevv.com", "htjz.com", "huilemai.com", "huimai365.com", "huolibaobao.com", "huolida.com", "hyj.com", "iebaba.com", "ihush.com", "immyhome.com", "imobile.com.cn", "imoda.com", "it168.com", "itruelife.com", "j1923.com", "jacketman.cn", "jd.com", "jddiy.com", "jianianle.com", "jianke.com", "jiapin.com", "jiuhang.cn", "jiuxian.com", "jockey.cn", "joyeth.com", "jukangda", "jumei.com", "jxdyf.com", "k121.com", "kadang.com", "keede.com", "kela.cn", "kimiss.com", "kongfz.cn", "kouclo.com", "ladypk.com", "lafaso.com", "lamiu.com", "laredoute.cn", "lashou.com", "learbetty.com", "lebiao.net", "lecake.com", "ledaojia.com", "leftlady.com", "leho.com", "letao.com", "leyou.com.cn", "lifevc.com", "lifu520.com", "lijiababy.com.cn", "likeface.com", "lingshi.com", "lining.com", "loobag.com", "lookgee.com", "lovo.cn", "lqdjf.com", "luce.com.cn", "lucemall.com.cn", "luckcart.com", "luckigo.com", "lusen.com", "lvhezi.com", "m18.com", "m360.com.cn", "m6go.com", "maiakaweh.com", "maichawang.com", "maidq.com", "maiduo.com", "mailuntai.cn", "maiwazi.com", "maiweila.com", "maoer360.com", "mbaobao.com", "mchepin.com", "meici.com", "meilishuo.com", "meiribuy.com", "meituan.com", "meiyi.cn", "menglu.com", "mfplaza.com", "misslele.com", "miumiu365.com", "mixr.cn", "mmloo.com", "mncake.com", "mogujie.com", "mojing8.com", "mrzero.cn", "mutnam.com", "muyingzhijia.com", "mycoo.cn", "myrainbow.cn", "myt.hk", "nala.com.cn", "nanjiren.com.cn", "necool.com", "new7.com", "newegg.com.cn", "no5.com.cn", "nop.cn", "nuanka.cn", "nuomi.com", "ochirly.com", "ogage.cn", "okbuy.com", "okgolf.cn", "okjee.com", "onlylady.com", "onlyts.cn", "orange3c.com", "ouku.com", "oyeah.com.cn", "paipai.com", "paixie.net", "pb89.com", "pcbaby.com.cn", "pchome.net", "pchouse.com.cn", "pclady.com.cn", "pconline.com.cn", "pcpop.com", "pett.cn", "popyj.com", "pufung.com", "pupai.cn", "qinqinbaby.com", "qiwang360.com", "qplmall.com", "qq.com", "quwan.com", "qxian.com", "raccfawa.com", "redbaby.com.cn", "reneeze.com", "ruci.cn", "sasa.com", "s.cn", "sephora.cn", "shopin.net", "skinstorechina.com", "so.com", "soso_bak.com", "strawberrynet.com", "suning.com", "t0001.com", "t3.com.cn", "tangrencun.cn", "tankl.com", "tao3c.com", "taobao.com", "taofanw.com", "taoxie.com", "tee7.com", "tiantian.com", "tmall.com", "togj.com", "tokyopretty.com", "tonlion.com", "topnewonline.cn", "trura.com", "tuan800.com", "tymall.com.cn", "u8518.com", "uiyi.cn", "ukool.com.cn", "umanto.com", "uniqlo.cn", "urcosme.com", "uya100.com", "uzgood.com", "v100.com.cn", "vancl.com", "vcotton.com", "vegou.com", "vico.cn", "vivian.cn", "vjia.com", "vzi800.cn", "walanwalan.com", "wangpiao.com", "wbiao.cn", "weibo.com", "weimituan.com", "whendream.com", "wine9.com", "winekee.com", "winenice.com", "winxuan.com", "wl.cn", "womai.com", "wowsai.com", "woxihuan.com", "wumeiwang.com", "x.com.cn", "xiaozhuren.com", "xijie.com", "xiu.com", "yaahe.cn", "yanyue.cn", "yaofang.cn", "yesky.com", "yesmywine.com", "yidianda.com", "yihaodian.com", "yhd.com", "yintai.com", "yizhedian.com", "yohobuy.com", "yoka.com", "yooane.com", "yougou.com", "ywmei.com", "zaihuni.com", "zbird.com", "zgcbb.com", "zhimei.com", "zhuangai.com", "zm7.cn", "zocai.com", "zol.com.cn", "zol.com", "zuomee.com", "zwzhome.com", "lefeng.com", "958shop.com", "china-pub.com", "wanggou.com", "vip.com", "baoyeah.com", "monteamor.com", "qjherb.com", "moonbasa.com", "ing2ing.com", "womai.com", "vmall.com", "1688.com", "etao.com", "milier.com", "xifuquan.com", "sfbest.com", "j1.com", "liebo.com", "esprit.cn", "metromall.com.cn", "pba.cn", "shangpin.com", "handuyishe.com", "secoo.com", "wangjiu.com", "masamaso.com", "vivian.cn", "linkmasa.com", "camel.com.cn", "naruko.com.cn", "sportica.cn", "zhenpin.com", "xiaomi.com", "mi.com", "letv.com", "bosideng.cn", "coolpad.cn", "handu.com", "ebay.com", "staples.cn", "feiniu.com", "okhqb.com", "meilele.com"],
            m = ["ctrip.com", "ly.com", "lvmama.com", "tuniu.com", "qunar.com", "uzai.com", "mangocity.com"],
            n = ["taobao.com", "meituan.com", "jumei.com", "dianping.com", "gaopeng.com", "58.com", "lashou.com", "pztuan.com", "liketuan.com", "nuomi.com"],
            o = ["ctrip.com", "ly.com", "lvmama.com", "qunar.com", "meituan.com", "jumei.com", "lashou.com", "nuomi.com", "dianping.com", "gaopeng.qq.com", "gaopeng.com", "elong.com", "mangocity.com", "kuxun.cn", "xiu.com", "zhuna.cn", "pztuan.com", "liketuan.com", "hao123.com", "2345.com", "sohu.com", "sogou.com", "duba.com", "qq.com", "rising.cn"],
            p = ["taobao.com", "sogou.com", "2345.com", "hao123.com", "qzone.qq", "autohome", "xxhh", "letv", "jide123", "pcauto", "auto.sohu", "pps", "bitauto", "duba.com", "rising.cn", "qq.com", "baidu.com", "youku.com", "tudou.com", "iqiyi.com", "sohu.com"],
            q = document.getElementById("b5mmain");
        q = q.src && q.src.substring(q.src.indexOf("?") + 1);
        var r = q.split("&");
        q = {};
        for (var s, t = 0, u = r.length; u > t; t++)
            s = r[t].split("="), q[s[0]] = s[1] || "";
        b("server", function() {
            return {
                server: h,
                cpsServer: j,
                ucenterserver: i,
                assets_base_url: e,
                assets_union_url: g,
                domain: a._.getDomain(),
                uuid: q.uuid,
                version: q.version,
                source: q.source,
                hostname: a.LOCATION.hostname
            }
        });
        for (var v = ["maxthon3", "firefox", "liebao", "360se", "360jisu", "chrome"], w = v.join(",").indexOf(q.source) > -1 ? !0 : !1, x = !("11000" != q.source && "50000" != q.source), y = a.isMall = !!l.join(",").match(new RegExp("\\b" + a.domain + "\\b")), z = a.isTour = !!m.join(",").match(new RegExp("\\b" + a.domain + "\\b")), A = a.isSl = !(x || !o.join(",").match(new RegExp("\\b" + a.domain + "\\b")) || a.browser.isIE && q.ie32 != c && !(a.browser.isIE && parseInt(q.ie32, 10) > 0)), B = a.isTuan = !!n.join(",").match(new RegExp("\\b" + a.domain + "\\b")), C = !1, t = 0; t < p.length; t++)
            if (a.domain.indexOf(p[t]) >= 0) {
                C = !0;
                break
            }
        var D = a.isNav = !(x || !C || "1" === q.nonav);
        if (k.paths.all = {
            path: e + "/js/b5m.plugin.all.js?v=" + d,
            _export: function() {
                return a
            }
        }, k.paths.tg = {
            path: f + "/js/flag.js?v=" + Math.floor((new Date).getTime() / 1e4),
            _export: function() {
                return window.__5_tg_
            }
        }, k.paths.sejieall = {
            path: e + "/js/b5m.plugin.sejie.all.js?v=" + d,
            _export: function() {
                return a
            }
        }, k.paths.rule = {
            path: e + "/js/plugin/rule/sites/" + a.domain + "?v=" + d,
            _export: function() {
                return a.rule
            }
        }, k.paths.env = {
            path: "/extension.do?method=js&buildno=" + d + "&url=" + encodeURIComponent(a.LOCATION.href) + "&acd=" + (q.acd || "") + "&reason=" + (q.reason || "") + "&source=" + q.source + "&uuid=" + q.uuid + "&domain=" + a.domain + "&version=" + q.version + "&site=" + a.domain + (a.browser.isIE ? "&t=" + (new Date).getTime() : ""),
            _export: function() {
                return a.cookie = Function("return " + (a.env.cookie || "{}"))(), a.env
            }
        }, k.paths.nav = {
            path: e + "/js/b5m.nav.js?v=" + d,
            _export: function() {
                return a.nav
            }
        }, a.require(["server"], function(b) {
            "b5m.com" == b.domain && a.require(["env"], function() {})
        }), w || x || !A && !y || 6 == q.reason && "jd.com" != a.domain || a.require(["sl"], function(a) {
            a.run()
        }), a.require(["tg"], function(b) {
            if (!b || b.embed) {
                a.require(["adv", "server"], function(a, b) {
                    a.server = b.server, a.run()
                });
                var c = "15003,15004,15005,15006,15008,15009,15012,15013,15014,15015,15018,15020,15021,15022,15023,15025,15026,15027,15028,15029,15030,15031,15032,15033,15035,15036,15039,15041,20000,20001";
                D && !w && (0 !== q.source.indexOf("15") || c.indexOf(q.source) >= 0) && a.require(["jquery-highcharts", "nav", "server", "common"], function(b, c, d, f) {
                    b.extend(c, {
                        server: d,
                        common: f,
                        uuid: q.uuid,
                        acd: q.acd,
                        source: q.source,
                        domain: a.domain,
                        host: a.LOCATION.host,
                        assets_base_url: e,
                        href: a.LOCATION.host + a.LOCATION.pathname,
                        reason: q.reason
                    }), setTimeout(function() {
                        c.init()
                    }, 30)
                })
            }
        }), y || z || B) {
            a._.loadCss();
            var E = (new Date).getTime(),
                F = ["jquery-highcharts", "all", "env"];
            d || (F = y || z || B ? ["jquery-highcharts", "all", "env", "rule"] : ["jquery-highcharts", "all", "env"], window.S = a), a.require(F, function(a, b, c) {
                b.console.debug("load time --------------" + ((new Date).getTime() - E) + "ms"), b.util.extend(b.constants, q, c, {
                    ucenterserver: i,
                    forwardBase: h + "/",
                    assets_base_url: e + "/"
                }), b.filterChain = function() {
                    this.index = -1, this.chain = arguments.length > 0 ? Array.prototype.slice.call(arguments, 0) : [], "slice" in arguments[0] && (this.chain = arguments[0])
                }, b.filterChain.prototype.register = function(a) {
                    this.chain.push(a)
                }, b.filterChain.prototype.insert = function(a) {
                    this.chain.splice(this.index + 1, 0, a)
                }, b.filterChain.prototype.run = function() {
                    this.index++, this.index < this.chain.length && this.chain[this.index].run(this)
                };
                var d = function() {
                    b.console.setLevel("ERROR"), b.service.init();
                    var a = [b.site];
                    c.main && a.push(b.view), c.mini && a.push(b.miniB5T), c.hp || (b.view.horizontal.global_config.show_price_trend = !1);
                    var d = new b.filterChain(a);
                    d.run()
                };
                d()
            })
        } else
            try {
                var G = window.location || document.location,
                    H = "http://tr.bang5mai.com/b5t/__utm.gif?uid=" + (q.uuid || "guest") + "&ct=" + Math.ceil((new Date).getTime() / 1e3) + "&lt=2000&ad=108&il=0&sr=" + window.screen.width + "x" + window.screen.height + "&cl=" + encodeURIComponent(q.source) + "&ver=" + q.version + "&dl=" + encodeURIComponent(G.href) + "&dr=" + encodeURIComponent(document.referrer) + "&isa=0";
                (new Image).src = H, 10 * Math.random() < 1 && q.uuid && q.uuid.match(/[0-9a-f]{32}/i) && a.require(["compress"], function(a) {
                    setTimeout(function() {
                        (new Image).src = a.compressSrc(H.replace(/tr\.bang5mai\.com/, "tr.stage.bang5mai.com"))
                    }, 0)
                })
            } catch (I) {}
    }(l)
}(this);

