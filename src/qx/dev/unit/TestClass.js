/**
 * This class represents a test suite for an unit test class.
 * 
 * To create your own unit tests, create a class that derives from this one, and
 * add member methods that start with &#8220;test*&#8221;. You can use assertion methods
 * inherited from TestClass to ease the implementation process.
 * 
 * A simple example:
 * 
 * 
 * qx. Class.define("myapp.test.MyUnitTest"),
 * {
 *   extend  : qx.dev.unit.TestCase,
 * 
 *   members :
 *   {
 *     testMe : function ()
 *     {
 *       // 'assertEquals' is from the parent
 *       this.assertEquals(4, 3+1, "failure message");
 *     }
 *   }
 * }

 */
//>public
vjo.ctype('qx.dev.unit.TestClass')
.inherits('qx.dev.unit.AbstractTestSuite')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property name.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	getName : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property name
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	initName : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property name.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	resetName : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property name.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	setName : vjo.NEEDS_IMPL
})
.endType();