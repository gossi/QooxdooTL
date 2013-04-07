/**
 * Behavior to support pre-rendering of invisible areas of a virtual scroller.
 * If applied to a scroller it will start a timer and increase the rendered area
 * of the scroller after a certain period of time. Subsequent scrolling will not
 * have to render this pre-computed area again.
 * 
 * EXPERIMENTAL!
 */
//>public
vjo.ctype('qx.ui.virtual.behavior.Prefetch')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property interval.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	_applyInterval : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property scroller.
	 * 
	 * For further details take a look at the property definition: {@link #scroller}.
	 * 
	 */
	_applyScroller : vjo.NEEDS_IMPL,


	/**
	 * Update prefetching
	 * 
	 */
	_onInterval : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property interval.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	getInterval : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scroller.
	 * 
	 * For further details take a look at the property definition: {@link #scroller}.
	 * 
	 */
	getScroller : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property interval
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	initInterval : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scroller
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scroller}.
	 * 
	 */
	initScroller : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property interval.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	resetInterval : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scroller.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scroller}.
	 * 
	 */
	resetScroller : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property interval.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	setInterval : vjo.NEEDS_IMPL,


	/**
	 * Configure horizontal prefetching
	 * 
	 */
	setPrefetchX : vjo.NEEDS_IMPL,


	/**
	 * Configure vertical prefetching
	 * 
	 */
	setPrefetchY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scroller.
	 * 
	 * For further details take a look at the property definition: {@link #scroller}.
	 * 
	 */
	setScroller : vjo.NEEDS_IMPL
})
.endType();