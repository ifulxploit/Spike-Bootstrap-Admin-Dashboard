!(function (a) {
  a(["jquery"], function (a) {
    return (function () {
      function h(a, b, c) {
        return u({
          type: e.error,
          iconClass: v().iconClasses.error,
          message: a,
          optionsOverride: c,
          title: b,
        });
      }
      function i(c, d) {
        return (
          c || (c = v()),
          (b = a("#" + c.containerId)),
          b.length ? b : (d && (b = r(c)), b)
        );
      }
      function j(a, b, c) {
        return u({
          type: e.info,
          iconClass: v().iconClasses.info,
          message: a,
          optionsOverride: c,
          title: b,
        });
      }
      function k(a) {
        c = a;
      }
      function l(a, b, c) {
        return u({
          type: e.success,
          iconClass: v().iconClasses.success,
          message: a,
          optionsOverride: c,
          title: b,
        });
      }
      function m(a, b, c) {
        return u({
          type: e.warning,
          iconClass: v().iconClasses.warning,
          message: a,
          optionsOverride: c,
          title: b,
        });
      }
      function n(a, c) {
        var d = v();
        b || i(d), q(a, d, c) || p(d);
      }
      function o(c) {
        var d = v();
        return (
          b || i(d),
          c && 0 === a(":focus", c).length
            ? void w(c)
            : void (b.children().length && b.remove())
        );
      }
      function p(c) {
        for (var d = b.children(), e = d.length - 1; e >= 0; e--) q(a(d[e]), c);
      }
      function q(b, c, d) {
        var e = !(!d || !d.force) && d.force;
        return (
          !(!b || (!e && 0 !== a(":focus", b).length)) &&
          (b[c.hideMethod]({
            duration: c.hideDuration,
            easing: c.hideEasing,
            complete: function () {
              w(b);
            },
          }),
          !0)
        );
      }
      function r(c) {
        return (
          (b = a("<div/>")
            .attr("id", c.containerId)
            .addClass("toast-container")
            .addClass(c.positionClass)),
          b.appendTo(a(c.target)),
          b
        );
      }
      function s() {
        return {
          tapToDismiss: !0,
          toastClass: "toast",
          containerId: "toast-container",
          debug: !1,
          showMethod: "fadeIn",
          showDuration: 300,
          showEasing: "swing",
          onShown: void 0,
          hideMethod: "fadeOut",
          hideDuration: 1e3,
          hideEasing: "swing",
          onHidden: void 0,
          closeMethod: !1,
          closeDuration: !1,
          closeEasing: !1,
          closeOnHover: !0,
          extendedTimeOut: 1e3,
          iconClasses: {
            error: "toast-error",
            info: "toast-info",
            success: "toast-success",
            warning: "toast-warning",
          },
          iconClass: "toast-info",
          positionClass: "toast-top-right",
          timeOut: 5e3,
          titleClass: "toast-title",
          messageClass: "toast-message",
          escapeHtml: !1,
          target: "body",
          closeHtml: '<button type="button">&times;</button>',
          closeClass: "toast-close-button",
          newestOnTop: !0,
          preventDuplicates: !1,
          progressBar: !1,
          progressClass: "toast-progress",
          rtl: !1,
        };
      }
      function t(a) {
        c && c(a);
      }
      function u(c) {
        function q(a) {
          return (
            null == a && (a = ""),
            a
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#39;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
          );
        }
        function r() {
          y(), A(), B(), C(), D(), E(), z(), s();
        }
        function s() {
          var a = "";
          switch (c.iconClass) {
            case "toast-success":
            case "toast-info":
              a = "polite";
              break;
            default:
              a = "assertive";
          }
          j.attr("aria-live", a);
        }
        function u() {
          e.closeOnHover && j.hover(I, H),
            !e.onclick && e.tapToDismiss && j.click(G),
            e.closeButton &&
              n &&
              n.click(function (a) {
                a.stopPropagation
                  ? a.stopPropagation()
                  : void 0 !== a.cancelBubble &&
                    a.cancelBubble !== !0 &&
                    (a.cancelBubble = !0),
                  e.onCloseClick && e.onCloseClick(a),
                  G(!0);
              }),
            e.onclick &&
              j.click(function (a) {
                e.onclick(a), G();
              });
        }
        function x() {
          j.hide(),
            j[e.showMethod]({
              duration: e.showDuration,
              easing: e.showEasing,
              complete: e.onShown,
            }),
            e.timeOut > 0 &&
              ((h = setTimeout(G, e.timeOut)),
              (o.maxHideTime = parseFloat(e.timeOut)),
              (o.hideEta = new Date().getTime() + o.maxHideTime),
              e.progressBar && (o.intervalId = setInterval(J, 10)));
        }
        function y() {
          c.iconClass && j.addClass(e.toastClass).addClass(f);
        }
        function z() {
          e.newestOnTop ? b.prepend(j) : b.append(j);
        }
        function A() {
          if (c.title) {
            var a = c.title;
            e.escapeHtml && (a = q(c.title)),
              k.append(a).addClass(e.titleClass),
              j.append(k);
          }
        }
        function B() {
          if (c.message) {
            var a = c.message;
            e.escapeHtml && (a = q(c.message)),
              l.append(a).addClass(e.messageClass),
              j.append(l);
          }
        }
        function C() {
          e.closeButton &&
            (n.addClass(e.closeClass).attr("role", "button"), j.prepend(n));
        }
        function D() {
          e.progressBar && (m.addClass(e.progressClass), j.prepend(m));
        }
        function E() {
          e.rtl && j.addClass("rtl");
        }
        function F(a, b) {
          if (a.preventDuplicates) {
            if (b.message === g) return !0;
            g = b.message;
          }
          return !1;
        }
        function G(b) {
          var c = b && e.closeMethod !== !1 ? e.closeMethod : e.hideMethod,
            d = b && e.closeDuration !== !1 ? e.closeDuration : e.hideDuration,
            f = b && e.closeEasing !== !1 ? e.closeEasing : e.hideEasing;
          if (!a(":focus", j).length || b)
            return (
              clearTimeout(o.intervalId),
              j[c]({
                duration: d,
                easing: f,
                complete: function () {
                  w(j),
                    clearTimeout(h),
                    e.onHidden && "hidden" !== p.state && e.onHidden(),
                    (p.state = "hidden"),
                    (p.endTime = new Date()),
                    t(p);
                },
              })
            );
        }
        function H() {
          (e.timeOut > 0 || e.extendedTimeOut > 0) &&
            ((h = setTimeout(G, e.extendedTimeOut)),
            (o.maxHideTime = parseFloat(e.extendedTimeOut)),
            (o.hideEta = new Date().getTime() + o.maxHideTime));
        }
        function I() {
          clearTimeout(h),
            (o.hideEta = 0),
            j.stop(!0, !0)[e.showMethod]({
              duration: e.showDuration,
              easing: e.showEasing,
            });
        }
        function J() {
          var a = ((o.hideEta - new Date().getTime()) / o.maxHideTime) * 100;
          m.width(a + "%");
        }
        var e = v(),
          f = c.iconClass || e.iconClass;
        if (
          ("undefined" != typeof c.optionsOverride &&
            ((e = a.extend(e, c.optionsOverride)),
            (f = c.optionsOverride.iconClass || f)),
          !F(e, c))
        ) {
          d++, (b = i(e, !0));
          var h = null,
            j = a("<div/>"),
            k = a("<div/>"),
            l = a("<div/>"),
            m = a("<div/>"),
            n = a(e.closeHtml),
            o = { intervalId: null, hideEta: null, maxHideTime: null },
            p = {
              toastId: d,
              state: "visible",
              startTime: new Date(),
              options: e,
              map: c,
            };
          return r(), x(), u(), t(p), e.debug && console && console.log(p), j;
        }
      }
      function v() {
        return a.extend({}, s(), f.options);
      }
      function w(a) {
        b || (b = i()),
          a.is(":visible") ||
            (a.remove(),
            (a = null),
            0 === b.children().length && (b.remove(), (g = void 0)));
      }
      var b,
        c,
        g,
        d = 0,
        e = {
          error: "error",
          info: "info",
          success: "success",
          warning: "warning",
        },
        f = {
          clear: n,
          remove: o,
          error: h,
          getContainer: i,
          info: j,
          options: {},
          subscribe: k,
          success: l,
          version: "2.1.3",
          warning: m,
        };
      return f;
    })();
  });

  // Success Type
  $("#ts-success").on("click", function () {
    toastr.success("Have fun storming the castle!", "Miracle Max Says");
  });

  // Success Type
  $("#ts-info").on("click", function () {
    toastr.info("We do have the Kapua suite available.", "Turtle Bay Resort");
  });

  // Success Type
  $("#ts-warning").on("click", function () {
    toastr.warning(
      "My name is Inigo Montoya. You killed my father, prepare to die!"
    );
  });

  // Success Type
  $("#ts-error").on("click", function () {
    toastr.error(
      "I do not think that word means what you think it means.",
      "Inconceivable!"
    );
  });

  // Position Top Left
  $("#pos-top-left").on("click", function () {
    toastr.info(
      "I do not think that word means what you think it means.",
      "Top Left!",
      { positionClass: "toastr toast-top-left", containerId: "toast-top-left" }
    );
  });

  // Position Top Center
  $("#pos-top-center").on("click", function () {
    toastr.info(
      "I do not think that word means what you think it means.",
      "Top Center!",
      {
        positionClass: "toastr toast-top-center",
        containerId: "toast-top-center",
      }
    );
  });

  // Position Top Right
  $("#pos-top-right").on("click", function () {
    toastr.info(
      "I do not think that word means what you think it means.",
      "Top Right!",
      {
        positionClass: "toastr toast-top-right",
        containerId: "toast-top-right",
      }
    );
  });

  // Position Top Full Width
  $("#pos-top-full").on("click", function () {
    toastr.info(
      "I do not think that word means what you think it means.",
      "Top Full Width!",
      {
        positionClass: "toastr toast-top-full-width",
        containerId: "toast-top-full-width",
      }
    );
  });

  // Position Bottom Left
  $("#pos-bottom-left").on("click", function () {
    toastr.info(
      "I do not think that word means what you think it means.",
      "Bottom Left!",
      {
        positionClass: "toastr toast-bottom-left",
        containerId: "toast-bottom-left",
      }
    );
  });

  // Position Bottom Center
  $("#pos-bottom-center").on("click", function () {
    toastr.info(
      "I do not think that word means what you think it means.",
      "Bottom Center!",
      {
        positionClass: "toastr toast-bottom-center",
        containerId: "toast-bottom-center",
      }
    );
  });

  // Position Bottom Right
  $("#pos-bottom-right").on("click", function () {
    toastr.info(
      "I do not think that word means what you think it means.",
      "Bottom Right!",
      {
        positionClass: "toastr toast-bottom-right",
        containerId: "toast-bottom-right",
      }
    );
  });

  // Position Bottom Full Width
  $("#pos-bottom-full").on("click", function () {
    toastr.info(
      "I do not think that word means what you think it means.",
      "Bottom Full Width!",
      {
        positionClass: "toastr toast-bottom-full-width",
        containerId: "toast-bottom-full-width",
      }
    );
  });

  // Text Notification
  $("#text-notification").on("click", function () {
    toastr.info("Have fun storming the castle!", "Miracle Max Says");
  });

  // Close Button
  $("#close-button").on("click", function () {
    toastr.success("Have fun storming the castle!", "With Close Button", {
      closeButton: true,
    });
  });

  // Progress Bar
  $("#progress-bar").on("click", function () {
    toastr.warning("Have fun storming the castle!", "Progress Bar", {
      progressBar: true,
    });
  });

  // Clear Toast Button
  $("#clear-toast-btn").on("click", function () {
    toastr.error(
      'Clear itself?<br /><br /><button type="button" class="btn btn-secondary clear">Yes</button>',
      "Clear Toast Button"
    );
  });

  // Slide Down / Slide Up
  $("#slide-toast").on("click", function () {
    toastr.success(
      "I do not think that word means what you think it means.",
      "Slide Down / Slide Up!",
      { showMethod: "slideDown", hideMethod: "slideUp", timeOut: 2000 }
    );
  });

  // Fade In / Fade Out
  $("#fade-toast").on("click", function () {
    toastr.success(
      "I do not think that word means what you think it means.",
      "Slide Down / Slide Up!",
      { showMethod: "fadeIn", hideMethod: "fadeOut", timeOut: 2000 }
    );
  });
})(
  "function" == typeof define && define.amd
    ? define
    : function (a, b) {
        "undefined" != typeof module && module.exports
          ? (module.exports = b(require("jquery")))
          : (window.toastr = b(window.jQuery));
      }
);
