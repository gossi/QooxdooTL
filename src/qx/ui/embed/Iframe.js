/**
 * Container widget for internal frames (iframes).
 * An iframe can display any HTML page inside the widget.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 * var document = this.getRoot();
 * var iframe = new qx.ui.embed.Iframe("http://www.qooxdoo.org");
 * document.add(iframe);
 * 
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.embed.Iframe')
.inherits('qx.ui.embed.AbstractIframe')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property nativeContextMenu.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	_applyNativeContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property nativeHelp.
	 * 
	 * For further details take a look at the property definition: {@link #nativeHelp}.
	 * 
	 */
	_applyNativeHelp : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property scrollbar.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbar}.
	 * 
	 */
	_applyScrollbar : vjo.NEEDS_IMPL,


	/**
	 * Creates  element which is aligned over iframe node to avoid losing mouse events.
	 * 
	 */
	_createBlockerElement : vjo.NEEDS_IMPL,


	/**
	 */
	_createContentElement : vjo.NEEDS_IMPL,


	/**
	 */
	_getIframeElement : vjo.NEEDS_IMPL,


	/**
	 * Reacts on native load event and redirects it to the widget.
	 * 
	 */
	_onIframeLoad : vjo.NEEDS_IMPL,


	/**
	 * Stops the contextmenu event from showing the native context menu
	 * 
	 */
	_onNativeContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Checks if the iframe element is out of sync. This can happen in Firefox
	 * if the iframe is moved around and the source is changed right after.
	 * The root cause is that Firefox is reloading the iframe when its position
	 * in DOM has changed.
	 * 
	 */
	_syncSourceAfterDOMMove : vjo.NEEDS_IMPL,


	/**
	 * Cover the iframe with a transparent blocker div element. This prevents
	 * mouse or key events to be handled by the iframe. To release the blocker
	 * use {@link #release}.
	 * 
	 */
	block : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property nativeHelp.
	 * 
	 * For further details take a look at the property definition: {@link #nativeHelp}.
	 * 
	 */
	getNativeHelp : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scrollbar.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbar}.
	 * 
	 */
	getScrollbar : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property nativeHelp
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #nativeHelp}.
	 * 
	 */
	initNativeHelp : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scrollbar
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbar}.
	 * 
	 */
	initScrollbar : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property nativeHelp equals true.
	 * 
	 * For further details take a look at the property definition: {@link #nativeHelp}.
	 * 
	 */
	isNativeHelp : vjo.NEEDS_IMPL,


	/**
	 * Release the blocker set by {@link #block}.
	 * 
	 */
	release : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property nativeHelp.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #nativeHelp}.
	 * 
	 */
	resetNativeHelp : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scrollbar.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbar}.
	 * 
	 */
	resetScrollbar : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property nativeHelp.
	 * 
	 * For further details take a look at the property definition: {@link #nativeHelp}.
	 * 
	 */
	setNativeHelp : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scrollbar.
	 * 
	 * For further details take a look at the property definition: {@link #scrollbar}.
	 * 
	 */
	setScrollbar : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property nativeHelp.
	 * 
	 * For further details take a look at the property definition: {@link #nativeHelp}.
	 * 
	 */
	toggleNativeHelp : vjo.NEEDS_IMPL
})
.endType();