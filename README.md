HAZ.js
======

HAZ.js is both a framework for creating a feature detection library, and a feature detection library. The purpose of HAZ is to ehance writing specific feature detection functions into a code-golfing experience.

The HAZ.js framework is written with Google Closure Compiling in mind, and is currently taking only 235 bytes uncompressed (160 bytes gzipped). Of course, the feature detection library will take this space + the feature detection functions to download.



Using HAZ.js as a library
======

Using HAZ.js for feature detection is superbebly simple. If you want to investigate wether the browser supports the canvas element you can write the following code:

> HAZ('canvas');

This code returns "true" if the browser supports the canvas. The result is also cached, so don't be afraid of calling HAZ multiple times with the same argument.

Using HAZ.js as a framework
======

Adding HAS.js feature detection functions is almost as simple as using one. This line of code adds a feature detection function which investigates whether the browser supports canvas:

> HAZ.add('canvas',function(t){var e=t.c('canvas'),g='getContext';return(e[g]&&e[g]('2d'));});

The .add method returns the HAZ instance, meaning that you can perform method chaining.
