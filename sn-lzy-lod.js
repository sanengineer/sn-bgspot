!(function () {
  var t, e;
  (t = function () {
    !(function () {
      for (
        var t = document.querySelectorAll("img.lazyestload"), e = t.length;
        e--;

      ) {
        var r = window.innerHeight,
          n = t[e].getBoundingClientRect(),
          a = n.top - r,
          i = n.bottom;
        if (a <= 100 && -100 <= i) {
          if (
            (t[e].getAttribute("data-src") &&
              (t[e].src = t[e].getAttribute("data-src")),
            t[e].getAttribute("data-srcset") &&
              (t[e].srcset = t[e].getAttribute("data-srcset")),
            "PICTURE" === t[e].parentElement.tagName)
          )
            for (
              var o = t[e].parentElement.querySelectorAll("source"),
                s = o.length;
              s--;

            )
              o[s].srcset = o[s].getAttribute("data-srcset");
          t[e].addEventListener("load", function () {
            this.classList.remove("lazyestload");
          });
        }
      }
    })();
  }),
    window.addEventListener("scroll", function () {
      clearTimeout(e), (e = setTimeout(t, 200));
    }),
    t();
})();
