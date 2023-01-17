(function () {
  console.log(window)
  window.Asc.plugin.button = function (id) {
    console.log(id)
  };
})(window, undefined);