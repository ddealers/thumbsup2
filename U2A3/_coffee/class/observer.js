(function() {
  var Observer;

  Observer = (function() {
    function Observer() {
      this.subscribers = [];
    }

    Observer.prototype.notify = function(item) {
      var subscriber, _i, _len, _ref, _results;
      _ref = this.subscribers;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        subscriber = _ref[_i];
        if (subscriber.item === item) {
          _results.push(subscriber.callback(item));
        }
      }
      return _results;
    };

    Observer.prototype.subscribe = function(to, onNotify) {
      return this.subscribers.push({
        'item': to,
        'callback': onNotify
      });
    };

    window.Observer = Observer;

    return Observer;

  })();

}).call(this);