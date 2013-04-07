/**
 * The image widget displays an image file.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var image = new qx.ui.mobile.basic.Image("path/to/icon.png");
 * 
 *   this.getRoot().add(image);
 * 
 * 
 * This example create a widget to display the image
 * path/to/icon.png.
 */
//>public
vjo.ctype('qx.ui.mobile.basic.Image')
.inherits('qx.ui.mobile.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Event handler fired after the preloader has finished loading the icon
	 * 
	 */
	__loaderCallback : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property source.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	_applySource : vjo.NEEDS_IMPL,


	/**
	 */
	_getTagName : vjo.NEEDS_IMPL,


	/**
	 * Sets the source attribute of the image tag.
	 * 
	 */
	_setSource : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property source.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	getSource : vjo.NEEDS_IMPL,


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
	 * Sets the attribute draggable to the given value &#8220;isDraggable&#8221;.
	 * 
	 */
	setDraggable : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property source.
	 * 
	 * For further details take a look at the property definition: {@link #source}.
	 * 
	 */
	setSource : vjo.NEEDS_IMPL
})
.endType();