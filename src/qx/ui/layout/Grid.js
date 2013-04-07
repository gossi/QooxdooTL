/**
 * The grid layout manager arranges the items in a two dimensional
 * grid. Widgets can be placed into the grid&#8217;s cells and may span multiple rows
 * and columns.
 * 
 * Features
 * 
 * 
 * Flex values for rows and columns
 * Minimal and maximal column and row sizes
 * Manually setting of column and row sizes
 * Horizontal and vertical alignment
 * Horizontal and vertical spacing
 * Column and row spans
 * Auto-sizing
 * 
 * 
 * Item Properties
 * 
 * 
 * row (Integer): The row of the cell the
 *   widget should occupy. Each cell can only contain one widget. This layout
 *   property is mandatory.
 * 
 * column (Integer): The column of the cell the
 *   widget should occupy. Each cell can only contain one widget. This layout
 *   property is mandatory.
 * 
 * rowSpan (Integer): The number of rows, the
 *   widget should span, starting from the row specified in the row
 *   property. The cells in the spanned rows must be empty as well.
 * 
 * colSpan (Integer): The number of columns, the
 *   widget should span, starting from the column specified in the column
 *   property. The cells in the spanned columns must be empty as well.
 * 
 * 
 * 
 * Example
 * 
 * Here is a little example of how to use the grid layout.
 * 
 * 
 * var layout = new qx.ui.layout.Grid();
 * layout.setRowFlex(0, 1); // make row 0 flexible
 * layout.setColumnWidth(1, 200); // set with of column 1 to 200 pixel
 * 
 * var container = new qx.ui.container.Composite(layout);
 * container.add(new qx.ui.core.Widget(), {row: 0, column: 0});
 * container.add(new qx.ui.core.Widget(), {row: 0, column: 1});
 * container.add(new qx.ui.core.Widget(), {row: 1, column: 0, rowSpan: 2});
 * 
 * 
 * External Documentation
 * 
 * 
 * Extended documentation and links to demos of this layout in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.layout.Grid')
.inherits('qx.ui.layout.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Rebuild the internal representation of the grid
	 * 
	 */
	__buildGrid : vjo.NEEDS_IMPL,


	/**
	 * Computes the widget&#8217;s size hint including the widget&#8217;s margins
	 * 
	 */
	__getOuterSize : vjo.NEEDS_IMPL,


	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 * Check whether all row spans fit with their preferred height into the
	 * preferred row heights. If there is not enough space, the preferred
	 * row sizes are increased. The distribution respects the flex and max
	 * values of the rows.
	 * 
	 * The same is true for the min sizes.
	 * 
	 * The height array is modified in place.
	 * 
	 */
	_fixHeightsRowSpan : vjo.NEEDS_IMPL,


	/**
	 * Check whether all col spans fit with their preferred width into the
	 * preferred column widths. If there is not enough space the preferred
	 * column sizes are increased. The distribution respects the flex and max
	 * values of the columns.
	 * 
	 * The same is true for the min sizes.
	 * 
	 * The width array is modified in place.
	 * 
	 */
	_fixWidthsColSpan : vjo.NEEDS_IMPL,


	/**
	 * Computes for each column by how many pixels it must grow or shrink, taking
	 * the column flex values and min/max widths into account.
	 * 
	 */
	_getColumnFlexOffsets : vjo.NEEDS_IMPL,


	/**
	 * Compute the min/pref/max column widths.
	 * 
	 */
	_getColWidths : vjo.NEEDS_IMPL,


	/**
	 * Computes for each row by how many pixels it must grow or shrink, taking
	 * the row flex values and min/max heights into account.
	 * 
	 */
	_getRowFlexOffsets : vjo.NEEDS_IMPL,


	/**
	 * Compute the min/pref/max row heights.
	 * 
	 */
	_getRowHeights : vjo.NEEDS_IMPL,


	/**
	 * Stores data for a grid column
	 * 
	 */
	_setColumnData : vjo.NEEDS_IMPL,


	/**
	 * Stores data for a grid row
	 * 
	 */
	_setRowData : vjo.NEEDS_IMPL,


	/**
	 * Get a map of the cell&#8217;s alignment. For vertical alignment the row alignment
	 * takes precedence over the column alignment. For horizontal alignment it is
	 * the over way round. If an alignment is set on the cell widget using
	 * {@link qx.ui.core.LayoutItem#setLayoutProperties}, this alignment takes
	 * always precedence over row or column alignment.
	 * 
	 */
	getCellAlign : vjo.NEEDS_IMPL,


	/**
	 * Get the widget located in the cell. If a the cell is empty or the widget
	 * has a {@link qx.ui.core.Widget#visibility} value of exclude,
	 * null is returned.
	 * 
	 */
	getCellWidget : vjo.NEEDS_IMPL,


	/**
	 * Get a map of the column&#8217;s alignment.
	 * 
	 */
	getColumnAlign : vjo.NEEDS_IMPL,


	/**
	 * Get the number of columns in the grid layout.
	 * 
	 */
	getColumnCount : vjo.NEEDS_IMPL,


	/**
	 * Get the flex value of a grid column.
	 * 
	 */
	getColumnFlex : vjo.NEEDS_IMPL,


	/**
	 * Get the maximum width of a grid column.
	 * 
	 */
	getColumnMaxWidth : vjo.NEEDS_IMPL,


	/**
	 * Get the minimum width of a grid column.
	 * 
	 */
	getColumnMinWidth : vjo.NEEDS_IMPL,


	/**
	 * Get the preferred width of a grid column.
	 * 
	 */
	getColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Get a map of the row&#8217;s alignment.
	 * 
	 */
	getRowAlign : vjo.NEEDS_IMPL,


	/**
	 * Get the number of rows in the grid layout.
	 * 
	 */
	getRowCount : vjo.NEEDS_IMPL,


	/**
	 * Get the flex value of a grid row.
	 * 
	 */
	getRowFlex : vjo.NEEDS_IMPL,


	/**
	 * Get the preferred height of a grid row.
	 * 
	 */
	getRowHeight : vjo.NEEDS_IMPL,


	/**
	 * Get the maximum height of a grid row.
	 * 
	 */
	getRowMaxHeight : vjo.NEEDS_IMPL,


	/**
	 * Get the minimum height of a grid row.
	 * 
	 */
	getRowMinHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property spacingX.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	getSpacingX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property spacingY.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	getSpacingY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property spacingX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	initSpacingX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property spacingY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	initSpacingY : vjo.NEEDS_IMPL,


	/**
	 */
	invalidateLayoutCache : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property spacingX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	resetSpacingX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property spacingY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	resetSpacingY : vjo.NEEDS_IMPL,


	/**
	 * Set the default cell alignment for a column. This alignment can be
	 * overridden on a per cell basis by setting the cell&#8217;s content widget&#8217;s
	 * alignX and alignY properties.
	 * 
	 * If on a grid cell both row and a column alignment is set, the horizontal
	 * alignment is taken from the column and the vertical alignment is taken
	 * from the row.
	 * 
	 */
	setColumnAlign : vjo.NEEDS_IMPL,


	/**
	 * Set the flex value for a grid column.
	 * By default the column flex value is 0.
	 * 
	 */
	setColumnFlex : vjo.NEEDS_IMPL,


	/**
	 * Set the maximum width of a grid column.
	 * The default value is Infinity.
	 * 
	 */
	setColumnMaxWidth : vjo.NEEDS_IMPL,


	/**
	 * Set the minimum width of a grid column.
	 * The default value is 0.
	 * 
	 */
	setColumnMinWidth : vjo.NEEDS_IMPL,


	/**
	 * Set the preferred width of a grid column.
	 * The default value is Infinity.
	 * 
	 */
	setColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Set the default cell alignment for a row. This alignment can be
	 * overridden on a per cell basis by setting the cell&#8217;s content widget&#8217;s
	 * alignX and alignY properties.
	 * 
	 * If on a grid cell both row and a column alignment is set, the horizontal
	 * alignment is taken from the column and the vertical alignment is taken
	 * from the row.
	 * 
	 */
	setRowAlign : vjo.NEEDS_IMPL,


	/**
	 * Set the flex value for a grid row.
	 * By default the row flex value is 0.
	 * 
	 */
	setRowFlex : vjo.NEEDS_IMPL,


	/**
	 * Set the preferred height of a grid row.
	 * The default value is Infinity.
	 * 
	 */
	setRowHeight : vjo.NEEDS_IMPL,


	/**
	 * Set the maximum height of a grid row.
	 * The default value is Infinity.
	 * 
	 */
	setRowMaxHeight : vjo.NEEDS_IMPL,


	/**
	 * Set the minimum height of a grid row.
	 * The default value is 0.
	 * 
	 */
	setRowMinHeight : vjo.NEEDS_IMPL,


	/**
	 * Shortcut to set both horizontal and vertical spacing between grid cells
	 * to the same value.
	 * 
	 */
	setSpacing : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property spacingX.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	setSpacingX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property spacingY.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	setSpacingY : vjo.NEEDS_IMPL
})
.endType();