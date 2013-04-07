/**
 * The Canvas widget embeds the HMTL canvas element
 * [W3C-HTML5]
 * 
 * Note: This widget does not work in Internet Explorer < 9!
 * Check for browser support with qx.core.Environment.get(&#8220;html.canvas&#8221;).
 * 
 * To paint something on the canvas and keep the content updated on resizes you
 * either have to override the {@link #_draw} method or redraw the content on
 * the {@link #redraw} event. The drawing context can be obtained by {@link #getContext2d}.
 * 
 * Note that this widget operates on two different coordinate systems. The canvas
 * has its own coordinate system for drawing operations. This canvas coordinate
 * system is scaled to fit actual size of the DOM element. Each time the size of
 * the canvas dimensions is changed a redraw is required. In this case the
 * protected method {@link #_draw} is called and the event {@link #redraw}
 * is fired. You can synchronize the internal canvas dimension with the
 * CSS dimension of the canvas element by setting {@link #syncDimension} to
 * true.
 * 
 * Example
 * 
 * Here is a little example of how to use the canvas widget.
 * 
 * 
 * var canvas = new qx.ui.embed.Canvas().set({
 *   canvasWidth: 200,
 *   canvasHeight: 200,
 *   syncDimension: true
 * });
 * canvas.addListener("redraw", function(e)
 * {
 *   var data = e.getData();
 *   var width = data.width;
 *   var height = data.height;
 *   var ctx = data.context;
 * 
 *   ctx.fillStyle = "rgb(200,0,0)";
 *   ctx.fillRect (20, 20, width-5, height-5);
 * 
 *   ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
 *   ctx.fillRect (70, 70, 105, 100);
 * }, this);
 * 
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.embed.Canvas')
.inherits('qx.ui.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * This methods triggers the redraw of the canvas&#8217; content
	 * 
	 */
	__redraw : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property canvasHeight.
	 * 
	 * For further details take a look at the property definition: {@link #canvasHeight}.
	 * 
	 */
	_applyCanvasHeight : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property canvasWidth.
	 * 
	 * For further details take a look at the property definition: {@link #canvasWidth}.
	 * 
	 */
	_applyCanvasWidth : vjo.NEEDS_IMPL,


	/**
	 */
	_createContentElement : vjo.NEEDS_IMPL,


	/**
	 * Template method, which can be used by derived classes to redraw the
	 * content. It is called each time the canvas dimension change and the
	 * canvas needs to be updated.
	 * 
	 */
	_draw : vjo.NEEDS_IMPL,


	/**
	 * Widget resize event handler. Updates the canvas dimension if needed.
	 * 
	 */
	_onResize : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property canvasHeight.
	 * 
	 * For further details take a look at the property definition: {@link #canvasHeight}.
	 * 
	 */
	getCanvasHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property canvasWidth.
	 * 
	 * For further details take a look at the property definition: {@link #canvasWidth}.
	 * 
	 */
	getCanvasWidth : vjo.NEEDS_IMPL,


	/**
	 * Get the native canvas 2D rendering context
	 * [W3C-HTML5].
	 * All drawing operations are performed on this context.
	 * 
	 */
	getContext2d : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property syncDimension.
	 * 
	 * For further details take a look at the property definition: {@link #syncDimension}.
	 * 
	 */
	getSyncDimension : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property canvasHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #canvasHeight}.
	 * 
	 */
	initCanvasHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property canvasWidth
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #canvasWidth}.
	 * 
	 */
	initCanvasWidth : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property syncDimension
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #syncDimension}.
	 * 
	 */
	initSyncDimension : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property syncDimension equals true.
	 * 
	 * For further details take a look at the property definition: {@link #syncDimension}.
	 * 
	 */
	isSyncDimension : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property canvasHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #canvasHeight}.
	 * 
	 */
	resetCanvasHeight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property canvasWidth.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #canvasWidth}.
	 * 
	 */
	resetCanvasWidth : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property syncDimension.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #syncDimension}.
	 * 
	 */
	resetSyncDimension : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property canvasHeight.
	 * 
	 * For further details take a look at the property definition: {@link #canvasHeight}.
	 * 
	 */
	setCanvasHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property canvasWidth.
	 * 
	 * For further details take a look at the property definition: {@link #canvasWidth}.
	 * 
	 */
	setCanvasWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property syncDimension.
	 * 
	 * For further details take a look at the property definition: {@link #syncDimension}.
	 * 
	 */
	setSyncDimension : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property syncDimension.
	 * 
	 * For further details take a look at the property definition: {@link #syncDimension}.
	 * 
	 */
	toggleSyncDimension : vjo.NEEDS_IMPL,


	/**
	 * Redraw the canvas
	 * 
	 */
	update : vjo.NEEDS_IMPL
})
.endType();