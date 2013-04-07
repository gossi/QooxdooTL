/**
 * A part is a container for multiple toolbar buttons. Each part comes
 * with a handle which may be used in later versions to drag the part
 * around and move it to another position. Currently mainly used
 * for structuring large toolbars beyond the capabilities of the
 * {@link Separator}.
 */
//>public
vjo.ctype('qx.ui.toolbar.Part')
.inherits('qx.ui.core.Widget')
.mixin('qx.ui.core.MRemoteChildrenHandling')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper which applies the left, right and middle states.
	 * 
	 */
	__onSyncAppearance : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property spacing.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	_applySpacing : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Adds a separator to the toolbar part.
	 * 
	 */
	addSeparator : vjo.NEEDS_IMPL,


	/**
	 */
	getChildrenContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns all nested buttons which contains a menu to show. This is mainly
	 * used for keyboard support.
	 * 
	 */
	getMenuButtons : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	getShow : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property spacing.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	getSpacing : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property show
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	initShow : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property spacing
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	initSpacing : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property show.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	resetShow : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property spacing.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	resetSpacing : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property show.
	 * 
	 * For further details take a look at the property definition: {@link #show}.
	 * 
	 */
	setShow : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property spacing.
	 * 
	 * For further details take a look at the property definition: {@link #spacing}.
	 * 
	 */
	setSpacing : vjo.NEEDS_IMPL
})
.endType();