/**
 * The scroll bar widget wraps the native browser scroll bars as a qooxdoo widget.
 * It can be uses instead of the styled qooxdoo scroll bars.
 * 
 * Scroll bars are used by the {@link qx.ui.container.Scroll} container. Usually
 * a scroll bar is not used directly.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var scrollBar = new qx.ui.core.scroll.NativeScrollBar("horizontal");
 *   scrollBar.set({
 *     maximum: 500
 *   })
 *   this.getRoot().add(scrollBar);
 * 
 * 
 * This example creates a horizontal scroll bar with a maximum value of 500.
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.core.scroll.NativeScrollBar')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.core.scroll.IScrollBar')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property maximum.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	_applyMaximum : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	_applyOrientation : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property position.
	 * 
	 * For further details take a look at the property definition: {@link #position}.
	 * 
	 */
	_applyPosition : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHint : vjo.NEEDS_IMPL,


	/**
	 * Get the scroll pane html element.
	 * 
	 */
	_getScrollPaneElement : vjo.NEEDS_IMPL,


	/**
	 * Listener for appear which ensured the scroll bar is positioned right
	 * on appear.
	 * 
	 */
	_onAppear : vjo.NEEDS_IMPL,


	/**
	 * Scroll event handler
	 * 
	 */
	_onScroll : vjo.NEEDS_IMPL,


	/**
	 * Stops propagation on the given even
	 * 
	 */
	_stopPropagation : vjo.NEEDS_IMPL,


	/**
	 * Update the scroll bar according to its current size, max value and
	 * enabled state.
	 * 
	 */
	_updateScrollBar : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property knobFactor.
	 * 
	 * For further details take a look at the property definition: {@link #knobFactor}.
	 * 
	 */
	getKnobFactor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maximum.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	getMaximum : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	getOrientation : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property position.
	 * 
	 * For further details take a look at the property definition: {@link #position}.
	 * 
	 */
	getPosition : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property singleStep.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	getSingleStep : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property knobFactor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #knobFactor}.
	 * 
	 */
	initKnobFactor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maximum
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	initMaximum : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property orientation
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	initOrientation : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property position
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #position}.
	 * 
	 */
	initPosition : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property singleStep
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	initSingleStep : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property knobFactor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #knobFactor}.
	 * 
	 */
	resetKnobFactor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maximum.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	resetMaximum : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property orientation.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	resetOrientation : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property position.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #position}.
	 * 
	 */
	resetPosition : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property singleStep.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	resetSingleStep : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property knobFactor.
	 * 
	 * For further details take a look at the property definition: {@link #knobFactor}.
	 * 
	 */
	setKnobFactor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maximum.
	 * 
	 * For further details take a look at the property definition: {@link #maximum}.
	 * 
	 */
	setMaximum : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property orientation.
	 * 
	 * For further details take a look at the property definition: {@link #orientation}.
	 * 
	 */
	setOrientation : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property position.
	 * 
	 * For further details take a look at the property definition: {@link #position}.
	 * 
	 */
	setPosition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property singleStep.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	setSingleStep : vjo.NEEDS_IMPL
})
.endType();