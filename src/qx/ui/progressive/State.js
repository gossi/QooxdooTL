/**
 * State of renderering by Progressive.
 */
//>public
vjo.ctype('qx.ui.progressive.State')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property batchSize.
	 * 
	 * For further details take a look at the property definition: {@link #batchSize}.
	 * 
	 */
	getBatchSize : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property pane.
	 * 
	 * For further details take a look at the property definition: {@link #pane}.
	 * 
	 */
	getPane : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property progressive.
	 * 
	 * For further details take a look at the property definition: {@link #progressive}.
	 * 
	 */
	getProgressive : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property rendererData.
	 * 
	 * For further details take a look at the property definition: {@link #rendererData}.
	 * 
	 */
	getRendererData : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property userData.
	 * 
	 * For further details take a look at the property definition: {@link #userData}.
	 * 
	 */
	getUserData : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property model
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	initModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property pane
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #pane}.
	 * 
	 */
	initPane : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property progressive
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #progressive}.
	 * 
	 */
	initProgressive : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property rendererData
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #rendererData}.
	 * 
	 */
	initRendererData : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property userData
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #userData}.
	 * 
	 */
	initUserData : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property model.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	resetModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property pane.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #pane}.
	 * 
	 */
	resetPane : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property progressive.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #progressive}.
	 * 
	 */
	resetProgressive : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property rendererData.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #rendererData}.
	 * 
	 */
	resetRendererData : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property userData.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #userData}.
	 * 
	 */
	resetUserData : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property batchSize.
	 * 
	 * For further details take a look at the property definition: {@link #batchSize}.
	 * 
	 */
	setBatchSize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property pane.
	 * 
	 * For further details take a look at the property definition: {@link #pane}.
	 * 
	 */
	setPane : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property progressive.
	 * 
	 * For further details take a look at the property definition: {@link #progressive}.
	 * 
	 */
	setProgressive : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property rendererData.
	 * 
	 * For further details take a look at the property definition: {@link #rendererData}.
	 * 
	 */
	setRendererData : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property userData.
	 * 
	 * For further details take a look at the property definition: {@link #userData}.
	 * 
	 */
	setUserData : vjo.NEEDS_IMPL
})
.endType();