/**
 * A toggle Button widget
 * 
 * If the user tap the button, the button toggles between the ON
 * and OFF state.
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var button = new qx.ui.mobile.form.ToggleButton(false,"YES","NO");
 * 
 *   button.addListener("changeValue", function(e) {
 *     alert(e.getData());
 *   }, this);
 * 
 *   this.getRoot.add(button);
 * 
 * 
 * This example creates a toggle button and attaches an
 * event listener to the {@link #changeValue} event.
 */
//>public
vjo.ctype('qx.ui.mobile.form.ToggleButton')
.inherits('qx.ui.mobile.core.Widget')
.satisfies(['qx.ui.form.IForm','qx.ui.form.IModel'])
.mixin(['qx.ui.mobile.form.MValue','qx.ui.form.MForm','qx.ui.form.MModelProperty','qx.ui.mobile.form.MState'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Checks if last touch event (swipe,tap) is more than 500ms ago.
	 * Bugfix for several simulator/emulator, when tap is immediately followed by a swipe.
	 * 
	 */
	_checkLastTouchTime : vjo.NEEDS_IMPL,


	/**
	 * Creates the child control of the widget. Needed to display the toggle
	 * button.
	 * 
	 */
	_createChild : vjo.NEEDS_IMPL,


	/**
	 * Returns the child control of the toggle button.
	 * 
	 */
	_getChild : vjo.NEEDS_IMPL,


	/**
	 * Gets the value [true/false] of this toggle button.
	 * It is called by getValue method of qx.ui.mobile.form.MValue mixin
	 * 
	 */
	_getValue : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the swipe event occurs.
	 * Toggles the button, when.
	 * 
	 */
	_onSwipe : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the tap event occurs.
	 * Toggles the button.
	 * 
	 */
	_onTap : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the touchmove event occurs.
	 * Prevents bubbling, because on swipe no scrolling of outer container is wanted.
	 * 
	 */
	_onTouch : vjo.NEEDS_IMPL,


	/**
	 * Sets the value [true/false] of this toggle button.
	 * It is called by setValue method of qx.ui.mobile.form.MValue mixin
	 * 
	 */
	_setValue : vjo.NEEDS_IMPL,


	/**
	 * Toggles the value of the button.
	 * 
	 */
	toggle : vjo.NEEDS_IMPL
})
.endType();