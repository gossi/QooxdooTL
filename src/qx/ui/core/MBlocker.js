/**
 * This mixin blocks events and can be included into all widgets.
 * 
 * The {@link #block} and {@link #unblock} methods provided by this mixin can be used
 * to block any event from the widget. When blocked,
 * the blocker widget overlays the widget to block, including the padding area.
 * 
 * The second set of methods ({@link #blockContent}, {@link #unblockContent})
 * can be used to block child widgets with a zIndex below a certain value.
 */
//>public
vjo.mtype('qx.ui.core.MBlocker')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property blockerColor.
	 * 
	 * For further details take a look at the property definition: {@link #blockerColor}.
	 * 
	 */
	_applyBlockerColor : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property blockerOpacity.
	 * 
	 * For further details take a look at the property definition: {@link #blockerOpacity}.
	 * 
	 */
	_applyBlockerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Template method for creating the blocker item.
	 * 
	 */
	_createBlocker : vjo.NEEDS_IMPL,


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
	 * Get the blocker
	 * 
	 */
	getBlocker : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property blockerColor.
	 * 
	 * For further details take a look at the property definition: {@link #blockerColor}.
	 * 
	 */
	getBlockerColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property blockerOpacity.
	 * 
	 * For further details take a look at the property definition: {@link #blockerOpacity}.
	 * 
	 */
	getBlockerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property blockerColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #blockerColor}.
	 * 
	 */
	initBlockerColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property blockerOpacity
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #blockerOpacity}.
	 * 
	 */
	initBlockerOpacity : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property blockerColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #blockerColor}.
	 * 
	 */
	resetBlockerColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property blockerOpacity.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #blockerOpacity}.
	 * 
	 */
	resetBlockerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property blockerColor.
	 * 
	 * For further details take a look at the property definition: {@link #blockerColor}.
	 * 
	 */
	setBlockerColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property blockerOpacity.
	 * 
	 * For further details take a look at the property definition: {@link #blockerOpacity}.
	 * 
	 */
	setBlockerOpacity : vjo.NEEDS_IMPL,


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