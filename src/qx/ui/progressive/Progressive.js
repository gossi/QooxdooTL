/**
 * Progressive.
 * 
 * Follow progressive instructions provided by a data model.  A variable
 * number of instructions are executed at one time, after which control is
 * returned briefly to the browser.  This allows browser rendering between
 * batches of instructions, improving the visual experience.
 * 
 * Progressive may be used for various purposes.  Two predefined
 * purposes for which "renderers" are provided, are a progressively-rendered
 * table which allows variable row height, and a program load/initialization
 * renderer with progress bar.  (Note that the term "renderer" is interpreted
 * quite broadly.  A renderer needn't actually render; rather it is just some
 * set of activities that takes place at one time, e.g a row of table data or
 * a single widget added to the document or a sending a request to a server,
 * etc.)
 */
//>public
vjo.ctype('qx.ui.progressive.Progressive')
.inherits('qx.ui.container.Composite')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Create the map of empty objects for use by the renderers.
	 * 
	 */
	__createStateRendererData : vjo.NEEDS_IMPL,


	/**
	 * Event callback for the &#8220;dataAvailable&#8221; event.
	 * 
	 */
	__dataAvailable : vjo.NEEDS_IMPL,


	/**
	 * Render a batch of elements.  The batch size is determined by the
	 * Progressive&#8217;s batch size at the time that rendering began.  That batch
	 * size was copied into the {@link qx.ui.progressive.State} object and is
	 * used herein.
	 * 
	 */
	__renderElementBatch : vjo.NEEDS_IMPL,


	/**
	 * Called when the dataModel property is changed.
	 * 
	 */
	_applyDataModel : vjo.NEEDS_IMPL,


	/**
	 * Add a renderer that can be referenced by the data model.
	 * 
	 */
	addRenderer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property batchSize.
	 * 
	 * For further details take a look at the property definition: {@link #batchSize}.
	 * 
	 */
	getBatchSize : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property dataModel.
	 * 
	 * For further details take a look at the property definition: {@link #dataModel}.
	 * 
	 */
	getDataModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property flushWidgetQueueAfterBatch.
	 * 
	 * For further details take a look at the property definition: {@link #flushWidgetQueueAfterBatch}.
	 * 
	 */
	getFlushWidgetQueueAfterBatch : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property interElementTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #interElementTimeout}.
	 * 
	 */
	getInterElementTimeout : vjo.NEEDS_IMPL,


	/**
	 * Return the structure object
	 * 
	 */
	getStructure : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property batchSize
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #batchSize}.
	 * 
	 */
	initBatchSize : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property dataModel
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #dataModel}.
	 * 
	 */
	initDataModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property flushWidgetQueueAfterBatch
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #flushWidgetQueueAfterBatch}.
	 * 
	 */
	initFlushWidgetQueueAfterBatch : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property interElementTimeout
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #interElementTimeout}.
	 * 
	 */
	initInterElementTimeout : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property flushWidgetQueueAfterBatch equals true.
	 * 
	 * For further details take a look at the property definition: {@link #flushWidgetQueueAfterBatch}.
	 * 
	 */
	isFlushWidgetQueueAfterBatch : vjo.NEEDS_IMPL,


	/**
	 * Remove a previosly added renderer.
	 * 
	 */
	removeRenderer : vjo.NEEDS_IMPL,


	/**
	 * Render the elements available from the data model.  Elements are
	 * rendered in batches of size {@link #batchSize}.  After each batch of
	 * elements are rendered, control is returned temporarily to the
	 * browser, so that actual screen updates can take place.  A timer is
	 * used to regain control a short while later, in order to render the
	 * next batch of element.
	 * 
	 */
	render : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property batchSize.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #batchSize}.
	 * 
	 */
	resetBatchSize : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property dataModel.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #dataModel}.
	 * 
	 */
	resetDataModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property flushWidgetQueueAfterBatch.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #flushWidgetQueueAfterBatch}.
	 * 
	 */
	resetFlushWidgetQueueAfterBatch : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property interElementTimeout.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #interElementTimeout}.
	 * 
	 */
	resetInterElementTimeout : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property batchSize.
	 * 
	 * For further details take a look at the property definition: {@link #batchSize}.
	 * 
	 */
	setBatchSize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property dataModel.
	 * 
	 * For further details take a look at the property definition: {@link #dataModel}.
	 * 
	 */
	setDataModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property flushWidgetQueueAfterBatch.
	 * 
	 * For further details take a look at the property definition: {@link #flushWidgetQueueAfterBatch}.
	 * 
	 */
	setFlushWidgetQueueAfterBatch : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property interElementTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #interElementTimeout}.
	 * 
	 */
	setInterElementTimeout : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property flushWidgetQueueAfterBatch.
	 * 
	 * For further details take a look at the property definition: {@link #flushWidgetQueueAfterBatch}.
	 * 
	 */
	toggleFlushWidgetQueueAfterBatch : vjo.NEEDS_IMPL
})
.endType();