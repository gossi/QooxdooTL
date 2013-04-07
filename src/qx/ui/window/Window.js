/**
 * A window widget
 * 
 * More information can be found in the package description {@link qx.ui.window}.
 */
//>public
vjo.ctype('qx.ui.window.Window')
.inherits('qx.ui.core.Widget')
.mixin(['qx.ui.core.MRemoteChildrenHandling','qx.ui.core.MRemoteLayoutHandling','qx.ui.core.MResizable','qx.ui.core.MMovable','qx.ui.core.MContentPadding'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property active.
	 * 
	 * For further details take a look at the property definition: {@link #active}.
	 * 
	 */
	_applyActive : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties allowClose, allowMaximize, allowMinimize, caption, icon, showClose, showMaximize and showMinimize.
	 * 
	 * For further details take a look at the property definitions: {@link #allowClose}, {@link #allowMaximize}, {@link #allowMinimize}, {@link #caption}, {@link #icon}, {@link #showClose}, {@link #showMaximize} and {@link #showMinimize}.
	 * 
	 */
	_applyCaptionBarChange : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property modal.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	_applyModal : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property showStatusbar.
	 * 
	 * For further details take a look at the property definition: {@link #showStatusbar}.
	 * 
	 */
	_applyShowStatusbar : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property status.
	 * 
	 * For further details take a look at the property definition: {@link #status}.
	 * 
	 */
	_applyStatus : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Returns the element, to which the content padding should be applied.
	 * 
	 */
	_getContentPaddingTarget : vjo.NEEDS_IMPL,


	/**
	 * Maximizes the window or restores it if it is already
	 * maximized.
	 * 
	 */
	_onCaptionMouseDblClick : vjo.NEEDS_IMPL,


	/**
	 * Closes the window, removes all states from the close button and
	 * stops the further propagation of the event (calling {@link qx.event.type.Event#stopPropagation}).
	 * 
	 */
	_onCloseButtonClick : vjo.NEEDS_IMPL,


	/**
	 * Maximizes the window, removes all states from the maximize button and
	 * stops the further propagation of the event (calling {@link qx.event.type.Event#stopPropagation}).
	 * 
	 */
	_onMaximizeButtonClick : vjo.NEEDS_IMPL,


	/**
	 * Minimizes the window, removes all states from the minimize button and
	 * stops the further propagation of the event (calling {@link qx.event.type.Event#stopPropagation}).
	 * 
	 */
	_onMinimizeButtonClick : vjo.NEEDS_IMPL,


	/**
	 * Restores the window, removes all states from the restore button and
	 * stops the further propagation of the event (calling {@link qx.event.type.Event#stopPropagation}).
	 * 
	 */
	_onRestoreButtonClick : vjo.NEEDS_IMPL,


	/**
	 * Stops every event
	 * 
	 */
	_onWindowEventStop : vjo.NEEDS_IMPL,


	/**
	 * Listens to the &#8220;focusout&#8221; event to deactivate the window (if the
	 * currently focused widget is not a child of the window)
	 * 
	 */
	_onWindowFocusOut : vjo.NEEDS_IMPL,


	/**
	 * Focuses the window instance.
	 * 
	 */
	_onWindowMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Updates the status and the visibility of each element of the captionbar.
	 * 
	 */
	_updateCaptionBar : vjo.NEEDS_IMPL,


	/**
	 * Centers the window to the parent.
	 * 
	 * This call works with the size of the parent widget and the size of
	 * the window as calculated in the last layout flush. It is best to call
	 * this method just after rendering the window in the &#8220;resize&#8221; event:
	 * 
	 * 
	 *   win.addListenerOnce("resize", this.center, this);

	 * 
	 */
	center : vjo.NEEDS_IMPL,


	/**
	 * Closes the current window instance.
	 * Technically calls the {@link qx.ui.core.Widget#hide} method.
	 * 
	 */
	close : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property active.
	 * 
	 * For further details take a look at the property definition: {@link #active}.
	 * 
	 */
	getActive : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property allowClose.
	 * 
	 * For further details take a look at the property definition: {@link #allowClose}.
	 * 
	 */
	getAllowClose : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property allowMaximize.
	 * 
	 * For further details take a look at the property definition: {@link #allowMaximize}.
	 * 
	 */
	getAllowMaximize : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property allowMinimize.
	 * 
	 * For further details take a look at the property definition: {@link #allowMinimize}.
	 * 
	 */
	getAllowMinimize : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property alwaysOnTop.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysOnTop}.
	 * 
	 */
	getAlwaysOnTop : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property caption.
	 * 
	 * For further details take a look at the property definition: {@link #caption}.
	 * 
	 */
	getCaption : vjo.NEEDS_IMPL,


	/**
	 * The children container needed by the {@link qx.ui.core.MRemoteChildrenHandling}
	 * mixin
	 * 
	 */
	getChildrenContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	getIcon : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property modal.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	getModal : vjo.NEEDS_IMPL,


	/**
	 * Return the window mode as String:
	 * &#8220;maximized&#8221;, &#8220;normal&#8221; or &#8220;minimized&#8221;.
	 * 
	 */
	getMode : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showClose.
	 * 
	 * For further details take a look at the property definition: {@link #showClose}.
	 * 
	 */
	getShowClose : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showMaximize.
	 * 
	 * For further details take a look at the property definition: {@link #showMaximize}.
	 * 
	 */
	getShowMaximize : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showMinimize.
	 * 
	 * For further details take a look at the property definition: {@link #showMinimize}.
	 * 
	 */
	getShowMinimize : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showStatusbar.
	 * 
	 * For further details take a look at the property definition: {@link #showStatusbar}.
	 * 
	 */
	getShowStatusbar : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property status.
	 * 
	 * For further details take a look at the property definition: {@link #status}.
	 * 
	 */
	getStatus : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property active
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #active}.
	 * 
	 */
	initActive : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property allowClose
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #allowClose}.
	 * 
	 */
	initAllowClose : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property allowMaximize
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #allowMaximize}.
	 * 
	 */
	initAllowMaximize : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property allowMinimize
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #allowMinimize}.
	 * 
	 */
	initAllowMinimize : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property alwaysOnTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysOnTop}.
	 * 
	 */
	initAlwaysOnTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property caption
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #caption}.
	 * 
	 */
	initCaption : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property icon
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	initIcon : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property modal
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	initModal : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showClose
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showClose}.
	 * 
	 */
	initShowClose : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showMaximize
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showMaximize}.
	 * 
	 */
	initShowMaximize : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showMinimize
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showMinimize}.
	 * 
	 */
	initShowMinimize : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showStatusbar
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showStatusbar}.
	 * 
	 */
	initShowStatusbar : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property status
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #status}.
	 * 
	 */
	initStatus : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property active equals true.
	 * 
	 * For further details take a look at the property definition: {@link #active}.
	 * 
	 */
	isActive : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property allowClose equals true.
	 * 
	 * For further details take a look at the property definition: {@link #allowClose}.
	 * 
	 */
	isAllowClose : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property allowMaximize equals true.
	 * 
	 * For further details take a look at the property definition: {@link #allowMaximize}.
	 * 
	 */
	isAllowMaximize : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property allowMinimize equals true.
	 * 
	 * For further details take a look at the property definition: {@link #allowMinimize}.
	 * 
	 */
	isAllowMinimize : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property alwaysOnTop equals true.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysOnTop}.
	 * 
	 */
	isAlwaysOnTop : vjo.NEEDS_IMPL,


	/**
	 * Return true if the window is in maximized state,
	 * but note that the window in maximized state could also be invisible, this
	 * is equivalent to minimized. So use the {@link qx.ui.window.Window#getMode}
	 * to get the window mode.
	 * 
	 */
	isMaximized : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property modal equals true.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	isModal : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showClose equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showClose}.
	 * 
	 */
	isShowClose : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showMaximize equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showMaximize}.
	 * 
	 */
	isShowMaximize : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showMinimize equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showMinimize}.
	 * 
	 */
	isShowMinimize : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showStatusbar equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showStatusbar}.
	 * 
	 */
	isShowStatusbar : vjo.NEEDS_IMPL,


	/**
	 * Maximize the window.
	 * 
	 */
	maximize : vjo.NEEDS_IMPL,


	/**
	 * Minimized the window.
	 * 
	 */
	minimize : vjo.NEEDS_IMPL,


	/**
	 * Set the window&#8217;s position relative to its parent
	 * 
	 */
	moveTo : vjo.NEEDS_IMPL,


	/**
	 * Opens the window.
	 * 
	 */
	open : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property active.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #active}.
	 * 
	 */
	resetActive : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowClose.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowClose}.
	 * 
	 */
	resetAllowClose : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowMaximize.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowMaximize}.
	 * 
	 */
	resetAllowMaximize : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowMinimize.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowMinimize}.
	 * 
	 */
	resetAllowMinimize : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property alwaysOnTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysOnTop}.
	 * 
	 */
	resetAlwaysOnTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property caption.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #caption}.
	 * 
	 */
	resetCaption : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property icon.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	resetIcon : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property modal.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	resetModal : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showClose.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showClose}.
	 * 
	 */
	resetShowClose : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showMaximize.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showMaximize}.
	 * 
	 */
	resetShowMaximize : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showMinimize.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showMinimize}.
	 * 
	 */
	resetShowMinimize : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showStatusbar.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showStatusbar}.
	 * 
	 */
	resetShowStatusbar : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property status.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #status}.
	 * 
	 */
	resetStatus : vjo.NEEDS_IMPL,


	/**
	 * Restore the window to &#8220;normal&#8221;, if it is
	 * &#8220;maximized&#8221; or &#8220;minimized&#8221;.
	 * 
	 */
	restore : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property active.
	 * 
	 * For further details take a look at the property definition: {@link #active}.
	 * 
	 */
	setActive : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property allowClose.
	 * 
	 * For further details take a look at the property definition: {@link #allowClose}.
	 * 
	 */
	setAllowClose : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property allowMaximize.
	 * 
	 * For further details take a look at the property definition: {@link #allowMaximize}.
	 * 
	 */
	setAllowMaximize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property allowMinimize.
	 * 
	 * For further details take a look at the property definition: {@link #allowMinimize}.
	 * 
	 */
	setAllowMinimize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property alwaysOnTop.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysOnTop}.
	 * 
	 */
	setAlwaysOnTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property caption.
	 * 
	 * For further details take a look at the property definition: {@link #caption}.
	 * 
	 */
	setCaption : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	setIcon : vjo.NEEDS_IMPL,


	/**
	 */
	setLayoutParent : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property modal.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	setModal : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showClose.
	 * 
	 * For further details take a look at the property definition: {@link #showClose}.
	 * 
	 */
	setShowClose : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showMaximize.
	 * 
	 * For further details take a look at the property definition: {@link #showMaximize}.
	 * 
	 */
	setShowMaximize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showMinimize.
	 * 
	 * For further details take a look at the property definition: {@link #showMinimize}.
	 * 
	 */
	setShowMinimize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showStatusbar.
	 * 
	 * For further details take a look at the property definition: {@link #showStatusbar}.
	 * 
	 */
	setShowStatusbar : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property status.
	 * 
	 * For further details take a look at the property definition: {@link #status}.
	 * 
	 */
	setStatus : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property active.
	 * 
	 * For further details take a look at the property definition: {@link #active}.
	 * 
	 */
	toggleActive : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property allowClose.
	 * 
	 * For further details take a look at the property definition: {@link #allowClose}.
	 * 
	 */
	toggleAllowClose : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property allowMaximize.
	 * 
	 * For further details take a look at the property definition: {@link #allowMaximize}.
	 * 
	 */
	toggleAllowMaximize : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property allowMinimize.
	 * 
	 * For further details take a look at the property definition: {@link #allowMinimize}.
	 * 
	 */
	toggleAllowMinimize : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property alwaysOnTop.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysOnTop}.
	 * 
	 */
	toggleAlwaysOnTop : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property modal.
	 * 
	 * For further details take a look at the property definition: {@link #modal}.
	 * 
	 */
	toggleModal : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showClose.
	 * 
	 * For further details take a look at the property definition: {@link #showClose}.
	 * 
	 */
	toggleShowClose : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showMaximize.
	 * 
	 * For further details take a look at the property definition: {@link #showMaximize}.
	 * 
	 */
	toggleShowMaximize : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showMinimize.
	 * 
	 * For further details take a look at the property definition: {@link #showMinimize}.
	 * 
	 */
	toggleShowMinimize : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showStatusbar.
	 * 
	 * For further details take a look at the property definition: {@link #showStatusbar}.
	 * 
	 */
	toggleShowStatusbar : vjo.NEEDS_IMPL
})
.endType();