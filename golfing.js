
/**
 * Feel free to pull-request your own golfing efforts.
 * 
 * This file contains of two sections:
 *
 * Section 1: A bunch of variables and functions declared to minimzalize code. For instance (sub)strings used several times in section two.
 * The variables are inserted to the closed scope within the iffy by initializing them on the instantiation of the iffy.
 * The first variable is named a, second b, and so on. If we reach z, next one will be named aa, then ab, etc.
 *
 * Section 2: The feature detection functions.
 *
 * This file is not copyrighted, and belongs to the public domain.
 */
// Section 1:
// The underscore is a utility variable to be used instead of using space declaring new variables when code-golfing. Should always be last.
// Perhaps adding _a, _b, etc if we need more in several places.
 (function(a, b, c, _) {

// Section 2:
HAZ
	.add(a,function(){_=c(a);return(_[b]&&_[b]('2d'));});

// Section 1:
})(
'canvas',
'getContext',
function(n) {return document.createElement(n);} // Creates a DOM node
);
