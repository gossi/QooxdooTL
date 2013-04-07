/**
 * The Flash widget embeds the HMTL Flash element
 */
//>public
vjo.ctype('qx.ui.embed.Flash')
.inherits('qx.ui.core.Widget')
.protos({
	/**
	 * Constructs a flash widget.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Set the attribute for the Flash DOM element.
	 * 
	 */
	__flashParamHelper : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property allowScriptAccess.
	 * 
	 * For further details take a look at the property definition: {@link #allowScriptAccess}.
	 * 
	 */
	_applyAllowScriptAccess : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property id.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	_applyId : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property liveConnect.
	 * 
	 * For further details take a look at the property definition: {@link #liveConnect}.
	 * 
	 */
	_applyLiveConnect : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property loop.
	 * 
	 * For further details take a look at the property definition: {@link #loop}.
	 * 
	 */
	_applyLoop : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property mayScript.
	 * 
	 * For further details take a look at the property definition: {@link #mayScript}.
	 * 
	 */
	_applyMayScript : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property menu.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	_applyMenu : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property play.
	 * 
	 * For further details take a look at the property definition: {@link #play}.
	 * 
	 */
	_applyPlay : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property quality.
	 * 
	 * For further details take a look at the property definition: {@link #quality}.
	 * 
	 */
	_applyQuality : vjo.NEEDS_IMPL,


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
	 * Applies changes of the property value of the property variables.
	 * 
	 * For further details take a look at the property definition: {@link #variables}.
	 * 
	 */
	_applyVariables : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property wmode.
	 * 
	 * For further details take a look at the property definition: {@link #wmode}.
	 * 
	 */
	_applyWmode : vjo.NEEDS_IMPL,


	/**
	 * Checks the current loaded state and fires one of the defined events:
	 * {@link #loading}, {@link #loaded} or {@link #timeout}.
	 * 
	 * Note the {@link #timeout} event is fired when the check reached the
	 * defined {@link #loadTimeout}.
	 * 
	 */
	_checkLoading : vjo.NEEDS_IMPL,


	/**
	 */
	_createContentElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property allowScriptAccess.
	 * 
	 * For further details take a look at the property definition: {@link #allowScriptAccess}.
	 * 
	 */
	getAllowScriptAccess : vjo.NEEDS_IMPL,


	/**
	 * Returns the DOM element of the Flash movie.
	 * 
	 * Note: If you call the method before the widget is rendered, it will
	 * always return null. Therefore call the method after
	 * the {@link #appear} event is fired.
	 * 
	 */
	getFlashElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property id.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	getId : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property liveConnect.
	 * 
	 * For further details take a look at the property definition: {@link #liveConnect}.
	 * 
	 */
	getLiveConnect : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property loadTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #loadTimeout}.
	 * 
	 */
	getLoadTimeout : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property loop.
	 * 
	 * For further details take a look at the property definition: {@link #loop}.
	 * 
	 */
	getLoop : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property mayScript.
	 * 
	 * For further details take a look at the property definition: {@link #mayScript}.
	 * 
	 */
	getMayScript : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property menu.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	getMenu : vjo.NEEDS_IMPL,


	/**
	 * Returns the current loaded state from the Flash movie.
	 * 
	 */
	getPercentLoaded : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property play.
	 * 
	 * For further details take a look at the property definition: {@link #play}.
	 * 
	 */
	getPlay : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property quality.
	 * 
	 * For further details take a look at the property definition: {@link #quality}.
	 * 
	 */
	getQuality : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property variables.
	 * 
	 * For further details take a look at the property definition: {@link #variables}.
	 * 
	 */
	getVariables : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property wmode.
	 * 
	 * For further details take a look at the property definition: {@link #wmode}.
	 * 
	 */
	getWmode : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property allowScriptAccess
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #allowScriptAccess}.
	 * 
	 */
	initAllowScriptAccess : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property id
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	initId : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property liveConnect
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #liveConnect}.
	 * 
	 */
	initLiveConnect : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property loadTimeout
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #loadTimeout}.
	 * 
	 */
	initLoadTimeout : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property loop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #loop}.
	 * 
	 */
	initLoop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property mayScript
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #mayScript}.
	 * 
	 */
	initMayScript : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property menu
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	initMenu : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property play
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #play}.
	 * 
	 */
	initPlay : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property quality
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #quality}.
	 * 
	 */
	initQuality : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property variables
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #variables}.
	 * 
	 */
	initVariables : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property wmode
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #wmode}.
	 * 
	 */
	initWmode : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property liveConnect equals true.
	 * 
	 * For further details take a look at the property definition: {@link #liveConnect}.
	 * 
	 */
	isLiveConnect : vjo.NEEDS_IMPL,


	/**
	 * Checks if the movie is loaded.
	 * 
	 */
	isLoaded : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property loop equals true.
	 * 
	 * For further details take a look at the property definition: {@link #loop}.
	 * 
	 */
	isLoop : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property mayScript equals true.
	 * 
	 * For further details take a look at the property definition: {@link #mayScript}.
	 * 
	 */
	isMayScript : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property menu equals true.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	isMenu : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property play equals true.
	 * 
	 * For further details take a look at the property definition: {@link #play}.
	 * 
	 */
	isPlay : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowScriptAccess.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowScriptAccess}.
	 * 
	 */
	resetAllowScriptAccess : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property id.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	resetId : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property liveConnect.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #liveConnect}.
	 * 
	 */
	resetLiveConnect : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property loadTimeout.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #loadTimeout}.
	 * 
	 */
	resetLoadTimeout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property loop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #loop}.
	 * 
	 */
	resetLoop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property mayScript.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #mayScript}.
	 * 
	 */
	resetMayScript : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property menu.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	resetMenu : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property play.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #play}.
	 * 
	 */
	resetPlay : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property quality.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #quality}.
	 * 
	 */
	resetQuality : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property variables.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #variables}.
	 * 
	 */
	resetVariables : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property wmode.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #wmode}.
	 * 
	 */
	resetWmode : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property allowScriptAccess.
	 * 
	 * For further details take a look at the property definition: {@link #allowScriptAccess}.
	 * 
	 */
	setAllowScriptAccess : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property id.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	setId : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property liveConnect.
	 * 
	 * For further details take a look at the property definition: {@link #liveConnect}.
	 * 
	 */
	setLiveConnect : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property loadTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #loadTimeout}.
	 * 
	 */
	setLoadTimeout : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property loop.
	 * 
	 * For further details take a look at the property definition: {@link #loop}.
	 * 
	 */
	setLoop : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property mayScript.
	 * 
	 * For further details take a look at the property definition: {@link #mayScript}.
	 * 
	 */
	setMayScript : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property menu.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	setMenu : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property play.
	 * 
	 * For further details take a look at the property definition: {@link #play}.
	 * 
	 */
	setPlay : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property quality.
	 * 
	 * For further details take a look at the property definition: {@link #quality}.
	 * 
	 */
	setQuality : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property variables.
	 * 
	 * For further details take a look at the property definition: {@link #variables}.
	 * 
	 */
	setVariables : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property wmode.
	 * 
	 * For further details take a look at the property definition: {@link #wmode}.
	 * 
	 */
	setWmode : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property liveConnect.
	 * 
	 * For further details take a look at the property definition: {@link #liveConnect}.
	 * 
	 */
	toggleLiveConnect : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property loop.
	 * 
	 * For further details take a look at the property definition: {@link #loop}.
	 * 
	 */
	toggleLoop : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property mayScript.
	 * 
	 * For further details take a look at the property definition: {@link #mayScript}.
	 * 
	 */
	toggleMayScript : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property menu.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	toggleMenu : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property play.
	 * 
	 * For further details take a look at the property definition: {@link #play}.
	 * 
	 */
	togglePlay : vjo.NEEDS_IMPL
})
.endType();