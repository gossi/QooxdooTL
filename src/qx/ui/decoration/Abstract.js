/**
 * This class acts as abstract class for all decorators. It offers the
 * properties for the insets handling. Every decorator has to define its own
 * default insets by implementing the template method
 * (http://en.wikipedia.org/wiki/Template_Method) _getDefaultInsets
 * . Another template method called _isInitialized should return
 * weather the decorator is initialized of not.
 */
//>public abstract
vjo.ctype('qx.ui.decoration.Abstract')
.inherits('qx.core.Object')
.satisfies('qx.ui.decoration.IDecorator')
.protos({
	/**
	 * Applies changes of the property value of the properties insetBottom, insetLeft, insetRight and insetTop.
	 * 
	 * For further details take a look at the property definitions: {@link #insetBottom}, {@link #insetLeft}, {@link #insetRight} and {@link #insetTop}.
	 * 
	 */
	_applyInsets : vjo.NEEDS_IMPL,


	/**
	 * Abstract method. Should return a map containing the default insets of
	 * the decorator. This could look like this:
	 * 
	 * 
	 * return {
	 *   top : 0,
	 *   right : 0,
	 *   bottom : 0,
	 *   left : 0
	 * };

	 * 
	 */
	_getDefaultInsets : vjo.NEEDS_IMPL,


	/**
	 * Abstract method. Should return an boolean value if the decorator is
	 * already initialized or not.
	 * 
	 */
	_isInitialized : vjo.NEEDS_IMPL,


	/**
	 * Resets the insets.
	 * 
	 */
	_resetInsets : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property insetBottom.
	 * 
	 * For further details take a look at the property definition: {@link #insetBottom}.
	 * 
	 */
	getInsetBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property insetLeft.
	 * 
	 * For further details take a look at the property definition: {@link #insetLeft}.
	 * 
	 */
	getInsetLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property insetRight.
	 * 
	 * For further details take a look at the property definition: {@link #insetRight}.
	 * 
	 */
	getInsetRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property insetTop.
	 * 
	 * For further details take a look at the property definition: {@link #insetTop}.
	 * 
	 */
	getInsetTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property insetBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #insetBottom}.
	 * 
	 */
	initInsetBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property insetLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #insetLeft}.
	 * 
	 */
	initInsetLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property insetRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #insetRight}.
	 * 
	 */
	initInsetRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property insetTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #insetTop}.
	 * 
	 */
	initInsetTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property insetBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #insetBottom}.
	 * 
	 */
	resetInsetBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property insetLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #insetLeft}.
	 * 
	 */
	resetInsetLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property insetRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #insetRight}.
	 * 
	 */
	resetInsetRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property insets.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #insets}.
	 * 
	 */
	resetInsets : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property insetTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #insetTop}.
	 * 
	 */
	resetInsetTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property insetBottom.
	 * 
	 * For further details take a look at the property definition: {@link #insetBottom}.
	 * 
	 */
	setInsetBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property insetLeft.
	 * 
	 * For further details take a look at the property definition: {@link #insetLeft}.
	 * 
	 */
	setInsetLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property insetRight.
	 * 
	 * For further details take a look at the property definition: {@link #insetRight}.
	 * 
	 */
	setInsetRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group insets.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #insets}.
	 * 
	 */
	setInsets : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property insetTop.
	 * 
	 * For further details take a look at the property definition: {@link #insetTop}.
	 * 
	 */
	setInsetTop : vjo.NEEDS_IMPL
})
.endType();