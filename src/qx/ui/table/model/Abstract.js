/**
 * An abstract table model that performs the column handling, so subclasses only
 * need to care for row handling.
 */
//>public abstract
vjo.ctype('qx.ui.table.model.Abstract')
.inherits('qx.core.Object')
.satisfies('qx.ui.table.ITableModel')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Abstract method
	 * 
	 */
	getRowCount : vjo.NEEDS_IMPL,


	/**
	 * Abstract method
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Initialize the table model  table interaction. The table model is
	 * passed to the table constructor, but the table model doesn&#8217;t otherwise
	 * know anything about the table nor can it operate on table
	 * properties. This function provides the capability for the table model
	 * to specify characteristics of the table. It is called when the table
	 * model is applied to the table.
	 * 
	 */
	init : vjo.NEEDS_IMPL,


	/**
	 * Sets the column IDs. These IDs may be used internally to identify a
	 * column.
	 * 
	 * Note: This will clear previously set column names.
	 * 
	 */
	setColumnIds : vjo.NEEDS_IMPL,


	/**
	 * Sets the column names. These names will be shown to the user.
	 * 
	 * Note: The column IDs have to be defined before.
	 * 
	 */
	setColumnNamesById : vjo.NEEDS_IMPL,


	/**
	 * Sets the column names. These names will be shown to the user.
	 * 
	 * Note: The column IDs have to be defined before.
	 * 
	 */
	setColumnNamesByIndex : vjo.NEEDS_IMPL,


	/**
	 * Sets the column names (and optionally IDs)
	 * 
	 * Note: You can not change the number of columns this way.  The number
	 *       of columns is highly intertwined in the entire table operation,
	 *       and dynamically changing it would require as much work as just
	 *       recreating your table.  If you must change the number of columns
	 *       in a table then you should remove the table and add a new one.
	 * 
	 */
	setColumns : vjo.NEEDS_IMPL,


	/**
	 * Abstract method
	 * 
	 */
	setValue : vjo.NEEDS_IMPL
})
.endType();