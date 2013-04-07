/**
 * This mixin includes all assertions from {@link qx.core.Assert} to conveniently
 * call assertions. It is included into {@link qx.core.Object} if debugging code
 * is enabled. It is further included into all unit tests
 * {@link qx.dev.unit.TestCase}.
 */
//>public
vjo.mtype('qx.core.MAssert')
.protos({
	/**
	 * Assert that the condition evaluates to true.
	 * 
	 */
	assert : vjo.NEEDS_IMPL,


	/**
	 * Assert that the number of arguments is within the given range
	 * 
	 */
	assertArgumentsCount : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is an array.
	 * 
	 */
	assertArray : vjo.NEEDS_IMPL,


	/**
	 * Assert that both array have identical array items.
	 * 
	 */
	assertArrayEquals : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is a boolean.
	 * 
	 */
	assertBoolean : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value represents the given CSS color value. This method
	 * parses the color strings and compares the RGB values. It is able to
	 * parse values supported by {@link qx.util.ColorUtil#stringToRgb}.
	 * 
	 */
	assertCssColor : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is a DOM element.
	 * 
	 */
	assertElement : vjo.NEEDS_IMPL,


	/**
	 * Assert that both values are equal. (Uses the equality operator
	 * ==.)
	 * 
	 */
	assertEquals : vjo.NEEDS_IMPL,


	/**
	 * Assert that an event is fired.
	 * 
	 */
	assertEventFired : vjo.NEEDS_IMPL,


	/**
	 * Assert that an event is not fired.
	 * 
	 */
	assertEventNotFired : vjo.NEEDS_IMPL,


	/**
	 * Asserts that the callback raises a matching exception.
	 * 
	 */
	assertException : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is false (Identity check).
	 * 
	 */
	assertFalse : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is a function.
	 * 
	 */
	assertFunction : vjo.NEEDS_IMPL,


	/**
	 * Assert that both values are identical. (Uses the identity operator
	 * ===.)
	 * 
	 */
	assertIdentical : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is an item in the given array.
	 * 
	 */
	assertInArray : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is inside the given range.
	 * 
	 */
	assertInRange : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is an instance of the given class.
	 * 
	 */
	assertInstance : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is an integer.
	 * 
	 */
	assertInteger : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value implements the given interface.
	 * 
	 */
	assertInterface : vjo.NEEDS_IMPL,


	/**
	 * Assert that the first two arguments are equal, when serialized into
	 * JSON.
	 * 
	 */
	assertJsonEquals : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is a key in the given map.
	 * 
	 */
	assertKeyInMap : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is a map either created using new Object
	 * or by using the object literal notation { ... }.
	 * 
	 */
	assertMap : vjo.NEEDS_IMPL,


	/**
	 * Assert that the given string matches the regular expression
	 * 
	 */
	assertMatch : vjo.NEEDS_IMPL,


	/**
	 * Assert that both values are not equal. (Uses the not equality operator
	 * !=.)
	 * 
	 */
	assertNotEquals : vjo.NEEDS_IMPL,


	/**
	 * Assert that both values are not identical. (Uses the not identity operator
	 * !==.)
	 * 
	 */
	assertNotIdentical : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is not null.
	 * 
	 */
	assertNotNull : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is not undefined.
	 * 
	 */
	assertNotUndefined : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is null.
	 * 
	 */
	assertNull : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is a number.
	 * 
	 */
	assertNumber : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is an object.
	 * 
	 */
	assertObject : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is an integer >= 0.
	 * 
	 */
	assertPositiveInteger : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is a number >= 0.
	 * 
	 */
	assertPositiveNumber : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is an instance of {@link qx.core.Object}.
	 * 
	 */
	assertQxObject : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is an instance of {@link qx.ui.core.Widget}.
	 * 
	 */
	assertQxWidget : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is a regular expression.
	 * 
	 */
	assertRegExp : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is a string.
	 * 
	 */
	assertString : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is true (Identity check).
	 * 
	 */
	assertTrue : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value has the given type using the typeof
	 * operator. Because the type is not always what it is supposed to be it is
	 * better to use more explicit checks like {@link #assertString} or
	 * {@link #assertArray}.
	 * 
	 */
	assertType : vjo.NEEDS_IMPL,


	/**
	 * Assert that the value is undefined.
	 * 
	 */
	assertUndefined : vjo.NEEDS_IMPL,


	/**
	 * Raise an {@link AssertionError}
	 * 
	 */
	fail : vjo.NEEDS_IMPL
})
.endType();