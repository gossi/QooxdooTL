/**
 * The image class displays an image file
 * 
 * This class supports image clipping, which means that multiple images can be combined
 * into one large image and only the relevant part is shown.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var image = new qx.ui.basic.Image("icon/32/actions/format-justify-left.png");
 * 
 *   this.getRoot().add(image);
 * 
 * 
 * This example create a widget to display the image
 * icon/32/actions/format-justify-left.png.
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.basic.Image')
.inherits('qx.ui.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Checks the current child and replaces it if necessary
	 * 
	 */
	__checkForContentElementReplacement : vjo.NEEDS_IMPL,


	/**
	 * Creates a contentElement suitable for the current mode
	 * 
	 */
	__createSuitableContentElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the current mode if set. Otherwise checks the current source and
	 * the current scaling to determine the current mode.
	 * 
	 */
	__getMode : vjo.NEEDS_IMPL,


	/**
	 * Returns a contentElement suitable for the current mode
	 * 
	 */
	__getSuitableContentElement : vjo.NEEDS_IMPL,


	/**
	 * Event handler fired after the preloader has finished loading the icon
	 * 
	 */
	__loaderCallback : vjo.NEEDS_IMPL,


	/**
	 * Use the ImageLoader to load an unmanaged image
	 * 
	 */
	__loadUnmanagedImage : vjo.NEEDS_IMPL,


	/**
	 * Use the ResourceManager to set a managed image
	 * 
	 */
	__setManagedImage : vjo.NEEDS_IMPL,


	/**
	 * Remembers the mode to keep track which contentElement is currently in use.
	 * 
	 */
	__setMode : vjo.NEEDS_IMPL,


	/**
	 * Use the infos of the ImageLoader to set an unmanaged image
	 * 
	 */
	__setUnmanagedImage : vjo.NEEDS_IMPL,


	/**
	 * Updates the content hint when the image size has been changed
	 * 
	 */
	__updateContentHint : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property scale.
	 * 
	 * For further details take a look at the property definition: {@link #scale}.
	 * 
	 */
	_applyScale : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property source.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	_applySource : vjo.NEEDS_IMPL,


	/**
	 */
	_createContentElement : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHint : vjo.NEEDS_IMPL,


	/**
	 */
	_onChangeTheme : vjo.NEEDS_IMPL,


	/**
	 * Applies the source to the clipped image instance or preload
	 * an image to detect sizes and apply it afterwards.
	 * 
	 */
	_styleSource : vjo.NEEDS_IMPL,


	/**
	 */
	getContentElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scale.
	 * 
	 * For further details take a look at the property definition: {@link #scale}.
	 * 
	 */
	getScale : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property source.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	getSource : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scale
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scale}.
	 * 
	 */
	initScale : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property source
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	initSource : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property scale equals true.
	 * 
	 * For further details take a look at the property definition: {@link #scale}.
	 * 
	 */
	isScale : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scale.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scale}.
	 * 
	 */
	resetScale : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property source.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	resetSource : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scale.
	 * 
	 * For further details take a look at the property definition: {@link #scale}.
	 * 
	 */
	setScale : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property source.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	setSource : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property scale.
	 * 
	 * For further details take a look at the property definition: {@link #scale}.
	 * 
	 */
	toggleScale : vjo.NEEDS_IMPL
})
.endType();