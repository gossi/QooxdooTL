/**
 * A Button widget which supports various states and allows it to be used
 * via the mouse and the keyboard.
 * 
 * If the user presses the button by clicking on it, or the Enter or
 * Space keys, the button fires an {@link qx.ui.core.MExecutable#execute} event.
 * 
 * If the {@link qx.ui.core.MExecutable#command} property is set, the
 * command is executed as well.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var button = new qx.ui.form.Button("Hello World");
 * 
 *   button.addListener("execute", function(e) {
 *     alert("Button was clicked");
 *   }, this);
 * 
 *   this.getRoot.add(button);
 * 
 * 
 * This example creates a button with the label &#8220;Hello World&#8221; and attaches an
 * event listener to the {@link #execute} event.
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.form.Button')
.inherits('qx.ui.basic.Atom')
.satisfies('qx.ui.form.IExecutable')
.mixin('qx.ui.core.MExecutable')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;keydown&#8221; event.
	 * 
	 * Removes &#8220;abandoned&#8221; and adds &#8220;pressed&#8221; state
	 * for the keys &#8220;Enter&#8221; or &#8220;Space&#8221;
	 * 
	 */
	_onKeyDown : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;keyup&#8221; event.
	 * 
	 * Removes &#8220;abandoned&#8221; and &#8220;pressed&#8221; state (if &#8220;pressed&#8221; state is set)
	 * for the keys &#8220;Enter&#8221; or &#8220;Space&#8221;
	 * 
	 */
	_onKeyUp : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mousedown&#8221; event
	 * 
	 * Removes &#8220;abandoned&#8221; state
	 * Adds &#8220;pressed&#8221; state

	 * 
	 */
	_onMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseout&#8221; event
	 * 
	 * Removes &#8220;hovered&#8221; state
	 * Adds &#8220;abandoned&#8221; and removes &#8220;pressed&#8221; state (if &#8220;pressed&#8221; state is set)

	 * 
	 */
	_onMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseover&#8221; event
	 * 
	 * Adds state &#8220;hovered&#8221;
	 * Removes &#8220;abandoned&#8221; and adds &#8220;pressed&#8221; state (if &#8220;abandoned&#8221; state is set)

	 * 
	 */
	_onMouseOver : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseup&#8221; event
	 *  
	 *  Removes &#8220;pressed&#8221; state (if set)
	 *  Removes &#8220;abandoned&#8221; state (if set)
	 *  Adds &#8220;hovered&#8221; state (if &#8220;abandoned&#8221; state is not set)

	 * 
	 */
	_onMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Manually press the button
	 * 
	 */
	press : vjo.NEEDS_IMPL,


	/**
	 * Manually release the button
	 * 
	 */
	release : vjo.NEEDS_IMPL,


	/**
	 * Completely reset the button (remove all states)
	 * 
	 */
	reset : vjo.NEEDS_IMPL
})
.endType();