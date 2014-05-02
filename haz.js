/**
 *
 * A framework for creating a feature detection library using code-golfing.
 *
 * Copyright Lars-Erik Bruce, 2014.
 *
 * Standard MIT license.
 */
(function(w, HAZ, undefined) {
	// This object contains the different feature detectors.
	var featureDetectors = {};

	// This object contains utilities which can be used by
	// the feature detection functions. It will be their
	// 'this' object.
	var tools = {
		'c': function(name) {
			return document.createElement(name);
		},
		'w': w,
		'u': undefined
	};

	/**
	 * HAZ(name)
	 *
	 * name: String, the feature we are going to detect.
	 */
	w[HAZ] = function(f) {
		return featureDetectors[f]();
	};

	/**
	 * HAZ.add(name, func)
	 *
	 * name: String, name of the feature to detect.
	 * func: function, a function returning true if feature exists
	 *
	 * returns: this object, so you can chain calls.
	 */
	w[HAZ]['add'] = function(name, func) {
		// Add a function to featureDetectors. This function is only run once.
		// It gets replaced by a dummy function returning the same
		// result
		featureDetectors[name] = function() {
			var result = !!func(tools);
			featureDetectors[name] = function() {
				return result;
			}
			return result;
		};
		// Enable method chaining.
		return this;
	};
})(window, 'HAZ');

