  stream.point = function(x, y) {
      console.log("Point at (" + x + ", " + y + ")");
  };

  var phi = 1.618; // Example value for phi (golden ratio)
  stream.point(0, phi); // Outputs: Point at (0, 1.618)
  