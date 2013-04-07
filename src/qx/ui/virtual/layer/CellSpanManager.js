/**
 * EXPERIMENTAL!
 * 
 * The CellSpanManager manages cells, which span several rows or columns.
 * 
 * It provides functionality to compute, which spanning cells are visible
 * in a given view port and how they have to be placed.
 */
//>public
vjo.ctype('qx.ui.virtual.layer.CellSpanManager')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Return the intersection of two maps as an array. The objects intersect if
	 * they have the same keys.
	 * 
	 */
	__intersectionAsArray : vjo.NEEDS_IMPL,


	/**
	 * Finds all cells with a sort key within the given range.
	 * 
	 * Complexity: O(log n)
	 * 
	 */
	_findCellsInRange : vjo.NEEDS_IMPL,


	/**
	 * Get the pixel start position of the given column
	 * 
	 */
	_getColumnPosition : vjo.NEEDS_IMPL,


	/**
	 * Get the pixel start position of the given row
	 * 
	 */
	_getRowPosition : vjo.NEEDS_IMPL,


	/**
	 * Get the bounds of a single cell
	 * 
	 */
	_getSingleCellBounds : vjo.NEEDS_IMPL,


	/**
	 * Get the cell array sorted by the given key (ascending)
	 * 
	 */
	_getSortedCells : vjo.NEEDS_IMPL,


	/**
	 * Invalidates the row/column position cache
	 * 
	 */
	_invalidatePositionCache : vjo.NEEDS_IMPL,


	/**
	 * Invalidate the sort cache
	 * 
	 */
	_invalidateSortCache : vjo.NEEDS_IMPL,


	/**
	 * Event handler for column configuration changes
	 * 
	 */
	_onColumnConfigChange : vjo.NEEDS_IMPL,


	/**
	 * Event handler for row configuration changes
	 * 
	 */
	_onRowConfigChange : vjo.NEEDS_IMPL,


	/**
	 * Add a spanning cell to the manager.
	 * 
	 */
	addCell : vjo.NEEDS_IMPL,


	/**
	 * Compute a bitmap, which marks for each visible cell, whether the cell
	 * is covered by a spanning cell.
	 * 
	 */
	computeCellSpanMap : vjo.NEEDS_IMPL,


	/**
	 * Find all cells, which are visible in the given grid window.
	 * 
	 */
	findCellsInWindow : vjo.NEEDS_IMPL,


	/**
	 * Get the bounds of a list of cells as returned by {@link #findCellsInWindow}
	 * 
	 */
	getCellBounds : vjo.NEEDS_IMPL,


	/**
	 * Remove a cell from the manager
	 * 
	 */
	removeCell : vjo.NEEDS_IMPL
})
.endType();