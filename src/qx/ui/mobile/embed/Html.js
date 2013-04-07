/**
 * The Html widget embeds plain HTML code into the application
 * 
 * Example
 * 
 * Here is a little example of how to use the html widget.
 * 
 * 
 * var html = new qx.ui.mobile.embed.Html();
 * html.setHtml("Hello World");

 */
//>public
vjo.ctype('qx.ui.mobile.embed.Html')
.inherits('qx.ui.mobile.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property html.
	 * 
	 * For further details take a look at the property definition: {@link #html}.
	 * 
	 */
	_applyHtml : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property html.
	 * 
	 * For further details take a look at the property definition: {@link #html}.
	 * 
	 */
	getHtml : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property html
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #html}.
	 * 
	 */
	initHtml : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property html.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #html}.
	 * 
	 */
	resetHtml : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property html.
	 * 
	 * For further details take a look at the property definition: {@link #html}.
	 * 
	 */
	setHtml : vjo.NEEDS_IMPL
})
.endType();