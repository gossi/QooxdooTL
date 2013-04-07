/**
 * Shared implementation for all root widgets.
 */
//>public abstract
vjo.ctype('qx.ui.root.Abstract')
.inherits('qx.ui.core.Widget')
.mixin(['qx.ui.core.MChildrenHandling','qx.ui.core.MBlocker','qx.ui.window.MDesktop'])
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Fix unexpected scrolling when pressing &#8220;Space&#8221; while a widget is focused.
	 * 
	 */
	__preventScrollWhenFocused : vjo.NEEDS_IMPL,


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
	 * Stops the contextmenu event from showing the native context menu
	 * 
	 */
	_onNativeContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property globalCursor.
	 * 
	 * For further details take a look at the property definition: {@link #globalCursor}.
	 * 
	 */
	getGlobalCursor : vjo.NEEDS_IMPL,


	/**
	 * Get the widget&#8217;s layout manager.
	 * 
	 */
	getLayout : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property nativeHelp.
	 * 
	 * For further details take a look at the property definition: {@link #nativeHelp}.
	 * 
	 */
	getNativeHelp : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property globalCursor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #globalCursor}.
	 * 
	 */
	initGlobalCursor : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property nativeHelp equals true.
	 * 
	 * For further details take a look at the property definition: {@link #nativeHelp}.
	 * 
	 */
	isNativeHelp : vjo.NEEDS_IMPL,


	/**
	 */
	isRootWidget : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property globalCursor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #globalCursor}.
	 * 
	 */
	resetGlobalCursor : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property globalCursor.
	 * 
	 * For further details take a look at the property definition: {@link #globalCursor}.
	 * 
	 */
	setGlobalCursor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property nativeHelp.
	 * 
	 * For further details take a look at the property definition: {@link #nativeHelp}.
	 * 
	 */
	setNativeHelp : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property nativeHelp.
	 * 
	 * For further details take a look at the property definition: {@link #nativeHelp}.
	 * 
	 */
	toggleNativeHelp : vjo.NEEDS_IMPL
})
.endType();