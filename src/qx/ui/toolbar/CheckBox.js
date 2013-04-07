/**
 * A button which is toggle-able for toolbars.
 */
//>public
vjo.ctype('qx.ui.toolbar.CheckBox')
.inherits('qx.ui.form.ToggleButton')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property visibility.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	_applyVisibility : vjo.NEEDS_IMPL
})
.endType();