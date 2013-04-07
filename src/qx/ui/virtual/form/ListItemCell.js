/**
 * The default list item renderer.
 * 
 * This cell renderer will use a standard {@link qx.ui.form.ListItem} widget to
 * render the cell
 */
//>public
vjo.ctype('qx.ui.virtual.form.ListItemCell')
.inherits('qx.ui.virtual.cell.AbstractWidget')
.protos({
	/**
	 */
	_createWidget : vjo.NEEDS_IMPL,


	/**
	 */
	updateData : vjo.NEEDS_IMPL
})
.endType();