/**
 * The mixin contains all functionality to provide a value property for input
 * widgets.
 */
//>public
vjo.mtype('qx.ui.mobile.form.MValue')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Fires the {@link #changeValue} event.
	 * 
	 */
	__fireChangeValue : vjo.NEEDS_IMPL,


	/**
	 * Converts the incoming value.
	 * 
	 */
	_convertValue : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the {@link #changeValue} event occurs.
	 * 
	 */
	_onChangeContent : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the {@link #input} event occurs.
	 * 
	 */
	_onInput : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property liveUpdate.
	 * 
	 * For further details take a look at the property definition: {@link #liveUpdate}.
	 * 
	 */
	getLiveUpdate : vjo.NEEDS_IMPL,


	/**
	 * Returns the set value.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property liveUpdate
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #liveUpdate}.
	 * 
	 */
	initLiveUpdate : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property liveUpdate equals true.
	 * 
	 * For further details take a look at the property definition: {@link #liveUpdate}.
	 * 
	 */
	isLiveUpdate : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property liveUpdate.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #liveUpdate}.
	 * 
	 */
	resetLiveUpdate : vjo.NEEDS_IMPL,


	/**
	 * Resets the value.
	 * 
	 */
	resetValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property liveUpdate.
	 * 
	 * For further details take a look at the property definition: {@link #liveUpdate}.
	 * 
	 */
	setLiveUpdate : vjo.NEEDS_IMPL,


	/**
	 * Sets the value.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property liveUpdate.
	 * 
	 * For further details take a look at the property definition: {@link #liveUpdate}.
	 * 
	 */
	toggleLiveUpdate : vjo.NEEDS_IMPL
})
.endType();