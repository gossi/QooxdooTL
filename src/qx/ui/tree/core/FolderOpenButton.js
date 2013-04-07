/**
 * The small folder open/close button
 */
//>public
vjo.ctype('qx.ui.tree.core.FolderOpenButton')
.inherits('qx.ui.basic.Image')
.mixin('qx.ui.core.MExecutable')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property open.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	_applyOpen : vjo.NEEDS_IMPL,


	/**
	 * Mouse click event listener
	 * 
	 */
	_onClick : vjo.NEEDS_IMPL,


	/**
	 * Stop click event propagation
	 * 
	 */
	_stopPropagation : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property open.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	getOpen : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property open
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	initOpen : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property open equals true.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	isOpen : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property open.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	resetOpen : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property open.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	setOpen : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property open.
	 * 
	 * For further details take a look at the property definition: {@link #open}.
	 * 
	 */
	toggleOpen : vjo.NEEDS_IMPL
})
.endType();