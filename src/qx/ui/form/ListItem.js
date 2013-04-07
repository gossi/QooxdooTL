/**
 * A item for a list. Could be added to all List like widgets but also
 * to the {@link qx.ui.form.SelectBox} and {@link qx.ui.form.ComboBox}.
 */
//>public
vjo.ctype('qx.ui.form.ListItem')
.inherits('qx.ui.basic.Atom')
.satisfies('qx.ui.form.IModel')
.mixin('qx.ui.form.MModelProperty')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the mouse out event.
	 * 
	 */
	_onMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the mouse over event.
	 * 
	 */
	_onMouseOver : vjo.NEEDS_IMPL
})
.endType();