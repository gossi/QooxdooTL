/**
 * This widget is used as feedback widget in drag and drop actions.
 */
//>public
vjo.ctype('qx.ui.core.DragDropCursor')
.inherits('qx.ui.basic.Image')
.mixin('qx.ui.core.MPlacement')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property action.
	 * 
	 * For further details take a look at the property definition: {@link #action}.
	 * 
	 */
	_applyAction : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property action.
	 * 
	 * For further details take a look at the property definition: {@link #action}.
	 * 
	 */
	getAction : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property action
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #action}.
	 * 
	 */
	initAction : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property action.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #action}.
	 * 
	 */
	resetAction : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property action.
	 * 
	 * For further details take a look at the property definition: {@link #action}.
	 * 
	 */
	setAction : vjo.NEEDS_IMPL
})
.endType();