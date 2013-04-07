/**
 * A card layout.
 * 
 * The card layout lays out widgets in a stack. Call show to display a widget.
 * Only the widget which show method is called is displayed. All other widgets are excluded.
 * 
 * Example
 * 
 * Here is a little example of how to use the Card layout.
 * 
 * 
 * var layout = new qx.ui.mobile.layout.Card());
 * var container = new qx.ui.mobile.container.Composite(layout);
 * 
 * var label1 = new qx.ui.mobile.basic.Label("1");
 * container.add(label1);
 * var label2 = new qx.ui.mobile.basic.Label("2");
 * container.add(label2);
 * 
 * label2.show();

 */
//>public
vjo.ctype('qx.ui.mobile.layout.Card')
.inherits('qx.ui.mobile.layout.Abstract')
.protos({
	/**
	 * Returns the animation CSS classes for a given direction. The direction
	 * can be in or out.
	 * 
	 */
	__getAnimationClasses : vjo.NEEDS_IMPL,


	/**
	 * Starts the animation for the page transition.
	 * 
	 */
	__startAnimation : vjo.NEEDS_IMPL,


	/**
	 * Stops the animation for the page transition.
	 * 
	 */
	__stopAnimation : vjo.NEEDS_IMPL,


	/**
	 * Fix size, only if widget has mixin MResize set,
	 * and nextWidget is set.
	 * 
	 */
	_fixWidgetSize : vjo.NEEDS_IMPL,


	/**
	 */
	_getCssClasses : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the animation of the page transition ends.
	 * 
	 */
	_onAnimationEnd : vjo.NEEDS_IMPL,


	/**
	 * Releases recently fixed widget size (width/height). This is needed for allowing further
	 * flexbox layouting.
	 * 
	 */
	_releaseWidgetSize : vjo.NEEDS_IMPL,


	/**
	 * Shows the widget with the given properties.
	 * 
	 */
	_showWidget : vjo.NEEDS_IMPL,


	/**
	 * Excludes the current widget and sets the next widget to the current widget.
	 * 
	 */
	_swapWidget : vjo.NEEDS_IMPL,


	/**
	 */
	connectToChildWidget : vjo.NEEDS_IMPL,


	/**
	 */
	disconnectFromChildWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property defaultAnimation.
	 * 
	 * For further details take a look at the property definition: {@link #defaultAnimation}.
	 * 
	 */
	getDefaultAnimation : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showAnimation.
	 * 
	 * For further details take a look at the property definition: {@link #showAnimation}.
	 * 
	 */
	getShowAnimation : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property defaultAnimation
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #defaultAnimation}.
	 * 
	 */
	initDefaultAnimation : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showAnimation
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showAnimation}.
	 * 
	 */
	initShowAnimation : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showAnimation equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showAnimation}.
	 * 
	 */
	isShowAnimation : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property defaultAnimation.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #defaultAnimation}.
	 * 
	 */
	resetDefaultAnimation : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showAnimation.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showAnimation}.
	 * 
	 */
	resetShowAnimation : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property defaultAnimation.
	 * 
	 * For further details take a look at the property definition: {@link #defaultAnimation}.
	 * 
	 */
	setDefaultAnimation : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showAnimation.
	 * 
	 * For further details take a look at the property definition: {@link #showAnimation}.
	 * 
	 */
	setShowAnimation : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showAnimation.
	 * 
	 * For further details take a look at the property definition: {@link #showAnimation}.
	 * 
	 */
	toggleShowAnimation : vjo.NEEDS_IMPL,


	/**
	 */
	updateLayout : vjo.NEEDS_IMPL
})
.endType();