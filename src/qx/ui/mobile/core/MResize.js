/**
 * This mixin resizes the container element to the height of the parent element.
 * Use this when the height can not be set by CSS.
 */
//>public
vjo.mtype('qx.ui.mobile.core.MResize')
.protos({
	/**
	 * Sets the height of the container element.
	 * 
	 */
	_setHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the width of the container element.
	 * 
	 */
	_setWidth : vjo.NEEDS_IMPL,


	/**
	 * Resizes the container element to the height of the parent element.
	 * 
	 */
	fixSize : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property fireDomUpdatedOnResize.
	 * 
	 * For further details take a look at the property definition: {@link #fireDomUpdatedOnResize}.
	 * 
	 */
	getFireDomUpdatedOnResize : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property fireDomUpdatedOnResize
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #fireDomUpdatedOnResize}.
	 * 
	 */
	initFireDomUpdatedOnResize : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property fireDomUpdatedOnResize equals true.
	 * 
	 * For further details take a look at the property definition: {@link #fireDomUpdatedOnResize}.
	 * 
	 */
	isFireDomUpdatedOnResize : vjo.NEEDS_IMPL,


	/**
	 * Removes fixed size from container.
	 * 
	 */
	releaseFixedSize : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property fireDomUpdatedOnResize.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #fireDomUpdatedOnResize}.
	 * 
	 */
	resetFireDomUpdatedOnResize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property fireDomUpdatedOnResize.
	 * 
	 * For further details take a look at the property definition: {@link #fireDomUpdatedOnResize}.
	 * 
	 */
	setFireDomUpdatedOnResize : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property fireDomUpdatedOnResize.
	 * 
	 * For further details take a look at the property definition: {@link #fireDomUpdatedOnResize}.
	 * 
	 */
	toggleFireDomUpdatedOnResize : vjo.NEEDS_IMPL
})
.endType();