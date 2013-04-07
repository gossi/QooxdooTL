/**
 * An abstract data cell renderer that does the basic coloring
 * (borders, selected look, ...).
 */
//>public abstract
vjo.ctype('qx.ui.table.cellrenderer.Abstract')
.inherits('qx.core.Object')
.satisfies('qx.ui.table.ICellRenderer')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Creates the style sheet used for the table cells.
	 * 
	 */
	_createStyleSheet : vjo.NEEDS_IMPL,


	/**
	 * Retrieve any extra attributes the cell renderer wants applied to this
	 * cell. Extra attributes could be such things as
	 * &#8220;onclick=&#8216;handleClick()&#8217;;&#8221;
	 * 
	 */
	_getCellAttributes : vjo.NEEDS_IMPL,


	/**
	 * Get a string of the cell element&#8217;s HTML classes.
	 * 
	 * This method may be overridden by sub classes.
	 * 
	 */
	_getCellClass : vjo.NEEDS_IMPL,


	/**
	 * Get the cell size taking the box model into account
	 * 
	 */
	_getCellSizeStyle : vjo.NEEDS_IMPL,


	/**
	 * Returns the CSS styles that should be applied to the main div of this
	 * cell.
	 * 
	 * This method may be overridden by sub classes.
	 * 
	 */
	_getCellStyle : vjo.NEEDS_IMPL,


	/**
	 * Returns the HTML that should be used inside the main div of this cell.
	 * 
	 * This method may be overridden by sub classes.
	 * 
	 */
	_getContentHtml : vjo.NEEDS_IMPL,


	/**
	 * Handler for the theme change.
	 * 
	 */
	_onChangeTheme : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property defaultCellStyle.
	 * 
	 * For further details take a look at the property definition: {@link #defaultCellStyle}.
	 * 
	 */
	getDefaultCellStyle : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property defaultCellStyle
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #defaultCellStyle}.
	 * 
	 */
	initDefaultCellStyle : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property defaultCellStyle.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #defaultCellStyle}.
	 * 
	 */
	resetDefaultCellStyle : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property defaultCellStyle.
	 * 
	 * For further details take a look at the property definition: {@link #defaultCellStyle}.
	 * 
	 */
	setDefaultCellStyle : vjo.NEEDS_IMPL
})
.endType();