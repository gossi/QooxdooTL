/**
 * Form interface for all form widgets. It includes the API for enabled,
 * required and valid states.
 */
//>public
vjo.itype('qx.ui.form.IForm')
.protos({
	/**
	 * Return the current set enabled state.
	 * 
	 */
	getEnabled : vjo.NEEDS_IMPL,


	/**
	 * Returns the invalid message of the widget.
	 * 
	 */
	getInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Return the current required state of the widget.
	 * 
	 */
	getRequired : vjo.NEEDS_IMPL,


	/**
	 * Returns the invalid message if required of the widget.
	 * 
	 */
	getRequiredInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Returns the valid state of the widget.
	 * 
	 */
	getValid : vjo.NEEDS_IMPL,


	/**
	 * Set the enabled state of the widget.
	 * 
	 */
	setEnabled : vjo.NEEDS_IMPL,


	/**
	 * Sets the invalid message of the widget.
	 * 
	 */
	setInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Sets the required state of a widget.
	 * 
	 */
	setRequired : vjo.NEEDS_IMPL,


	/**
	 * Sets the invalid message if required of the widget.
	 * 
	 */
	setRequiredInvalidMessage : vjo.NEEDS_IMPL,


	/**
	 * Sets the valid state of the widget.
	 * 
	 */
	setValid : vjo.NEEDS_IMPL
})
.endType();