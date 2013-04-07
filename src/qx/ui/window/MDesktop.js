/**
 * This mixin implements the key methods of the {@link qx.ui.window.IDesktop}.
 */
//>public
vjo.mtype('qx.ui.window.MDesktop')
.protos({
	/**
	 * Handles the case, when a window is added to the desktop.
	 * 
	 */
	_addWindow : vjo.NEEDS_IMPL,


	/**
	 * Overrides the method {@link qx.ui.core.Widget#_afterAddChild}
	 * 
	 */
	_afterAddChild : vjo.NEEDS_IMPL,


	/**
	 * Overrides the method {@link qx.ui.core.Widget#_afterRemoveChild}
	 * 
	 */
	_afterRemoveChild : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property activeWindow.
	 * 
	 * For further details take a look at the property definition: {@link #activeWindow}.
	 * 
	 */
	_applyActiveWindow : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called if one of the managed windows changes its active
	 * state.
	 * 
	 */
	_onChangeActive : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called if one of the managed windows changes its modality
	 * 
	 */
	_onChangeModal : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called if one of the managed windows changes its visibility
	 * state.
	 * 
	 */
	_onChangeVisibility : vjo.NEEDS_IMPL,


	/**
	 * Handles the case, when a window is removed from the desktop.
	 * 
	 */
	_removeWindow : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property activeWindow.
	 * 
	 * For further details take a look at the property definition: {@link #activeWindow}.
	 * 
	 */
	getActiveWindow : vjo.NEEDS_IMPL,


	/**
	 * Get the desktop&#8217;s window manager. Each desktop must have a window manager.
	 * If none is configured the default window manager {@link qx.ui.window.Window#DEFAULT_MANAGER_CLASS}
	 * is used.
	 * 
	 */
	getWindowManager : vjo.NEEDS_IMPL,


	/**
	 * Get a list of all windows added to the desktop (including hidden windows)
	 * 
	 */
	getWindows : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property activeWindow
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #activeWindow}.
	 * 
	 */
	initActiveWindow : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property activeWindow.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #activeWindow}.
	 * 
	 */
	resetActiveWindow : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property activeWindow.
	 * 
	 * For further details take a look at the property definition: {@link #activeWindow}.
	 * 
	 */
	setActiveWindow : vjo.NEEDS_IMPL,


	/**
	 * Sets the desktop&#8217;s window manager
	 * 
	 */
	setWindowManager : vjo.NEEDS_IMPL,


	/**
	 * Whether the configured layout supports a maximized window
	 * e.g. is a Canvas.
	 * 
	 */
	supportsMaximize : vjo.NEEDS_IMPL
})
.endType();