var Dancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<img class="dancer">');
  this.step();
  this.setPosition(top, left);
}

Dancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function () {
  this.$node.css({ top: 500 })
}


