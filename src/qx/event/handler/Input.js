/**
 * This handler provides an &#8220;change&#8221; event for all form fields and an
 * &#8220;input&#8221; event for form fields of type &#8220;text&#8221; and &#8220;textarea&#8221;.
 * 
 * To let these events work it is needed to create the elements using
 * {@link qx.bom.Input}
 */
//>public
vjo.ctype('qx.event.handler.Input')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Handler for fixing the different behavior when pressing the backspace or
	 * delete key.
	 * 
	 * The other browsers fire a &#8220;input&#8221; event if the user presses the backspace
	 * or delete key.
	 * IE fire the event only for other keys.
	 * 
	 */
	_inputFix : vjo.NEEDS_IMPL,


	/**
	 * Blur event listener for opera cancels the timeout of the input event.
	 * 
	 */
	_onBlur : vjo.NEEDS_IMPL,


	/**
	 * Internal function called by input elements created using {@link qx.bom.Input}.
	 * 
	 */
	_onChangeChecked : vjo.NEEDS_IMPL,


	/**
	 * Internal function called by input elements created using {@link qx.bom.Input}.
	 * 
	 */
	_onChangeValue : vjo.NEEDS_IMPL,


	/**
	 * Internal function called by input elements created using {@link qx.bom.Input}.
	 * 
	 */
	_onInput : vjo.NEEDS_IMPL,


	/**
	 * Key event listener for opera which recognizes if the enter key has been
	 * pressed.
	 * 
	 */
	_onKeyDown : vjo.NEEDS_IMPL,


	/**
	 * Handler for fixing the different behavior when pressing the enter key.
	 * 
	 * FF and Safari fire a &#8220;change&#8221; event if the user presses the enter key.
	 * IE and Opera fire the event only if the focus is changed.
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Key event listener for opera which recognizes if the enter key has been
	 * pressed.
	 * 
	 */
	_onKeyUp : vjo.NEEDS_IMPL,


	/**
	 * Internal function called by input elements created using {@link qx.bom.Input}.
	 * 
	 */
	_onProperty : vjo.NEEDS_IMPL
})
.endType();