function move(element) {
    return {
      to: function(left, bottom) {
        element.style.position = 'fixed';
        element.style.left = left + 'px';
        element.style.bottom = bottom + 'px';
      }
    };
  }