/**
 * The TextField is a multi-line text input field.
 */
//>public
vjo.ctype('qx.ui.form.TextArea')
.inherits('qx.ui.form.AbstractField')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adjust height of TextArea so that content fits without scroll bar.
	 * 
	 */
	__autoSize : vjo.NEEDS_IMPL,


	/**
	 * Creates and prepares the area clone.
	 * 
	 */
	__createAreaClone : vjo.NEEDS_IMPL,


	/**
	 * Force rewrapping of text.
	 * 
	 * The distribution of characters depends on the space available.
	 * Unfortunately, browsers do not reliably (or not at all) rewrap text when
	 * the size of the text area changes.
	 * 
	 * This method is called on change of the area&#8217;s size.
	 * 
	 */
	__forceRewrap : vjo.NEEDS_IMPL,


	/**
	 * Returns the area clone.
	 * 
	 */
	__getAreaClone : vjo.NEEDS_IMPL,


	/**
	 * Scroll TextArea to bottom. That way, scrollTop reflects the height
	 * of the TextArea.
	 * 
	 */
	__scrollCloneToBottom : vjo.NEEDS_IMPL,


	/**
	 * Warn when both autoSize and height property are set.
	 * 
	 */
	__warnAutoSizeAndHeight : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property autoSize.
	 * 
	 * For further details take a look at the property definition: {@link #autoSize}.
	 * 
	 */
	_applyAutoSize : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties height, maxHeight, maxWidth, minHeight, minWidth and width.
	 * 
	 * For further details take a look at the property definitions: {@link #height}, {@link #maxHeight}, {@link #maxWidth}, {@link #minHeight}, {@link #minWidth} and {@link #width}.
	 * 
	 */
	_applyDimension : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property minimalLineHeight.
	 * 
	 * For further details take a look at the property definition: {@link #minimalLineHeight}.
	 * 
	 */
	_applyMinimalLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	_applyWrap : vjo.NEEDS_IMPL,


	/**
	 */
	_createInputElement : vjo.NEEDS_IMPL,


	/**
	 * Get actual height of TextArea
	 * 
	 */
	_getAreaHeight : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHint : vjo.NEEDS_IMPL,


	/**
	 * Get scrolled area height. Equals the total height of the TextArea,
	 * as if no scroll-bar was visible.
	 * 
	 */
	_getScrolledAreaHeight : vjo.NEEDS_IMPL,


	/**
	 * Handles the mouse wheel for scrolling the TextArea.
	 * 
	 */
	_onMousewheel : vjo.NEEDS_IMPL,


	/**
	 * Set actual height of TextArea
	 * 
	 */
	_setAreaHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property autoSize.
	 * 
	 * For further details take a look at the property definition: {@link #autoSize}.
	 * 
	 */
	getAutoSize : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property minimalLineHeight.
	 * 
	 * For further details take a look at the property definition: {@link #minimalLineHeight}.
	 * 
	 */
	getMinimalLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property singleStep.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	getSingleStep : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	getWrap : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property autoSize
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #autoSize}.
	 * 
	 */
	initAutoSize : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property minimalLineHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #minimalLineHeight}.
	 * 
	 */
	initMinimalLineHeight : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property wrap
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	initWrap : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property autoSize equals true.
	 * 
	 * For further details take a look at the property definition: {@link #autoSize}.
	 * 
	 */
	isAutoSize : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property wrap equals true.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	isWrap : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property autoSize.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #autoSize}.
	 * 
	 */
	resetAutoSize : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property minimalLineHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #minimalLineHeight}.
	 * 
	 */
	resetMinimalLineHeight : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property wrap.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	resetWrap : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property autoSize.
	 * 
	 * For further details take a look at the property definition: {@link #autoSize}.
	 * 
	 */
	setAutoSize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property minimalLineHeight.
	 * 
	 * For further details take a look at the property definition: {@link #minimalLineHeight}.
	 * 
	 */
	setMinimalLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property singleStep.
	 * 
	 * For further details take a look at the property definition: {@link #singleStep}.
	 * 
	 */
	setSingleStep : vjo.NEEDS_IMPL,


	/**
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	setWrap : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property autoSize.
	 * 
	 * For further details take a look at the property definition: {@link #autoSize}.
	 * 
	 */
	toggleAutoSize : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	toggleWrap : vjo.NEEDS_IMPL
})
.endType();