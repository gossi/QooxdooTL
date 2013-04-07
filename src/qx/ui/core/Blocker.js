/**
 * This class blocks events and can be included into all widgets.
 * 
 * The {@link #block} and {@link #unblock} methods provided by this class can be used
 * to block any event from the widget. When blocked,
 * the blocker widget overlays the widget to block, including the padding area.
 * 
 * The second set of methods ({@link #blockContent}, {@link #unblockContent})
 * can be used to block child widgets with a zIndex below a certain value.
 */
//>public
vjo.ctype('qx.ui.core.Blocker')
.inherits('qx.core.Object')
.protos({
	/**
	 * Creates a blocker for the passed widget.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Sets the blocker element to avtive.
	 * 
	 */
	__activateBlockerElement : vjo.NEEDS_IMPL,


	/**
	 * Creates the blocker element.
	 * 
	 */
	__createBlockerElement : vjo.NEEDS_IMPL,


	/**
	 * Adjust html element size on layout resizes.
	 * 
	 */
	__onResize : vjo.NEEDS_IMPL,


	/**
	 * Set the style to all blockers (blocker and content blocker).
	 * 
	 */
	__setBlockersStyle : vjo.NEEDS_IMPL,


	/**
	 * Stops the passed &#8220;Tab&#8221; event.
	 * 
	 */
	__stopTabEvent : vjo.NEEDS_IMPL,


	/**
	 * Synchronize the size of the background blocker with the size of the
	 * body element
	 * 
	 */
	__syncBlocker : vjo.NEEDS_IMPL,


	/**
	 * Unblock the widget blocked by {@link #block}.
	 * 
	 */
	__unblock : vjo.NEEDS_IMPL,


	/**
	 * Unblock the content blocked by {@link #blockContent}.
	 * 
	 */
	__unblockContent : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property color.
	 * 
	 * For further details take a look at the property definition: {@link #color}.
	 * 
	 */
	_applyColor : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property opacity.
	 * 
	 * For further details take a look at the property definition: {@link #opacity}.
	 * 
	 */
	_applyOpacity : vjo.NEEDS_IMPL,


	/**
	 * Backup the current active and focused widget.
	 * 
	 */
	_backupActiveWidget : vjo.NEEDS_IMPL,


	/**
	 * Handler for the theme change.
	 * 
	 */
	_onChangeTheme : vjo.NEEDS_IMPL,


	/**
	 * Restore the current active and focused widget.
	 * 
	 */
	_restoreActiveWidget : vjo.NEEDS_IMPL,


	/**
	 * Block all events from this widget by placing a transparent overlay widget,
	 * which receives all events, exactly over the widget.
	 * 
	 */
	block : vjo.NEEDS_IMPL,


	/**
	 * Block direct child widgets with a zIndex below zIndex
	 * 
	 */
	blockContent : vjo.NEEDS_IMPL,


	/**
	 * Unblock the widget blocked by {@link #block}, but it doesn&#8217;t take care of
	 * the amount of {@link #block} calls. The blocker is directly removed.
	 * 
	 */
	forceUnblock : vjo.NEEDS_IMPL,


	/**
	 * Unblock the content blocked by {@link #blockContent}, but it doesn&#8217;t take
	 * care of the amount of {@link #blockContent} calls. The blocker is
	 * directly removed.
	 * 
	 */
	forceUnblockContent : vjo.NEEDS_IMPL,


	/**
	 * Get/create the blocker element
	 * 
	 */
	getBlockerElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property color.
	 * 
	 * For further details take a look at the property definition: {@link #color}.
	 * 
	 */
	getColor : vjo.NEEDS_IMPL,


	/**
	 * Get/create the content blocker element
	 * 
	 */
	getContentBlockerElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property keepBlockerActive.
	 * 
	 * For further details take a look at the property definition: {@link #keepBlockerActive}.
	 * 
	 */
	getKeepBlockerActive : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property opacity.
	 * 
	 * For further details take a look at the property definition: {@link #opacity}.
	 * 
	 */
	getOpacity : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property color
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #color}.
	 * 
	 */
	initColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property keepBlockerActive
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #keepBlockerActive}.
	 * 
	 */
	initKeepBlockerActive : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property opacity
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #opacity}.
	 * 
	 */
	initOpacity : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the widget is blocked.
	 * 
	 */
	isBlocked : vjo.NEEDS_IMPL,


	/**
	 * Whether the content is blocked
	 * 
	 */
	isContentBlocked : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property keepBlockerActive equals true.
	 * 
	 * For further details take a look at the property definition: {@link #keepBlockerActive}.
	 * 
	 */
	isKeepBlockerActive : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property color.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #color}.
	 * 
	 */
	resetColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property keepBlockerActive.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #keepBlockerActive}.
	 * 
	 */
	resetKeepBlockerActive : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property opacity.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #opacity}.
	 * 
	 */
	resetOpacity : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property color.
	 * 
	 * For further details take a look at the property definition: {@link #color}.
	 * 
	 */
	setColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property keepBlockerActive.
	 * 
	 * For further details take a look at the property definition: {@link #keepBlockerActive}.
	 * 
	 */
	setKeepBlockerActive : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property opacity.
	 * 
	 * For further details take a look at the property definition: {@link #opacity}.
	 * 
	 */
	setOpacity : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property keepBlockerActive.
	 * 
	 * For further details take a look at the property definition: {@link #keepBlockerActive}.
	 * 
	 */
	toggleKeepBlockerActive : vjo.NEEDS_IMPL,


	/**
	 * Unblock the widget blocked by {@link #block}, but it takes care of
	 * the amount of {@link #block} calls. The blocker is only removed if
	 * the numer of {@link #unblock} calls is identical to {@link #block} calls.
	 * 
	 */
	unblock : vjo.NEEDS_IMPL,


	/**
	 * Unblock the content blocked by {@link #blockContent}, but it takes care of
	 * the amount of {@link #blockContent} calls. The blocker is only removed if
	 * the numer of {@link #unblockContent} calls is identical to
	 * {@link #blockContent} calls.
	 * 
	 */
	unblockContent : vjo.NEEDS_IMPL
})
.endType();