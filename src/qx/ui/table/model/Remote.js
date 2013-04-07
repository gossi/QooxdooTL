/**
 * A table model that loads its data from a backend.
 * 
 * Only a subset of the available rows, those which are within or near the
 * currently visible area, are loaded. If a quick scroll operation occurs,
 * rows will soon be displayed using asynchronous loading in the background.
 * All loaded data is managed through a cache which automatically removes
 * the oldest used rows when it gets full.
 * 
 * This class is abstract: The actual loading of row data must be done by
 * subclasses.
 */
//>public
vjo.ctype('qx.ui.table.model.Remote')
.inherits('qx.ui.table.model.Abstract')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Cancels the current request if possible.
	 * 
	 * Should be overridden by subclasses if they are able to cancel requests. This
	 * allows sending a new request directly after a call of {@link #reloadData}.
	 * 
	 */
	_cancelCurrentRequest : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the current request is ignored by the model.
	 * 
	 */
	_getIgnoreCurrentRequest : vjo.NEEDS_IMPL,


	/**
	 * Implementing classes have to call {@link #_onRowCountLoaded} when the
	 * server response arrived. That method has to be called! Even when there
	 * was an error.
	 * 
	 */
	_loadRowCount : vjo.NEEDS_IMPL,


	/**
	 * Loads some row data from the server.
	 * 
	 * Implementing classes have to call {@link #_onRowDataLoaded} when the server
	 * response arrived. That method has to be called! Even when there was an error.
	 * 
	 */
	_loadRowData : vjo.NEEDS_IMPL,


	/**
	 * Sets the row count.
	 * 
	 * Has to be called by {@link #_loadRowCount}.
	 * 
	 */
	_onRowCountLoaded : vjo.NEEDS_IMPL,


	/**
	 * Sets row data.
	 * 
	 * Has to be called by {@link #_loadRowData}.
	 * 
	 */
	_onRowDataLoaded : vjo.NEEDS_IMPL,


	/**
	 * Sets the data of one block.
	 * 
	 */
	_setRowBlockData : vjo.NEEDS_IMPL,


	/**
	 * Clears the cache.
	 * 
	 */
	clearCache : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property blockConcurrentLoadRowCount.
	 * 
	 * For further details take a look at the property definition: {@link #blockConcurrentLoadRowCount}.
	 * 
	 */
	getBlockConcurrentLoadRowCount : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property blockSize.
	 * 
	 * For further details take a look at the property definition: {@link #blockSize}.
	 * 
	 */
	getBlockSize : vjo.NEEDS_IMPL,


	/**
	 * Returns the current state of the cache.
	 * 
	 * Do not change anything in the returned data. This breaks the model state.
	 * Use this method only together with {@link #restoreCacheContent} for backing
	 * up state for a later restore.
	 * 
	 */
	getCacheContent : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property clearCacheOnRemove.
	 * 
	 * For further details take a look at the property definition: {@link #clearCacheOnRemove}.
	 * 
	 */
	getClearCacheOnRemove : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maxCachedBlockCount.
	 * 
	 * For further details take a look at the property definition: {@link #maxCachedBlockCount}.
	 * 
	 */
	getMaxCachedBlockCount : vjo.NEEDS_IMPL,


	/**
	 */
	getRowCount : vjo.NEEDS_IMPL,


	/**
	 * See overridden method for details.
	 * 
	 */
	getRowData : vjo.NEEDS_IMPL,


	/**
	 */
	getSortColumnIndex : vjo.NEEDS_IMPL,


	/**
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property blockConcurrentLoadRowCount
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #blockConcurrentLoadRowCount}.
	 * 
	 */
	initBlockConcurrentLoadRowCount : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property blockSize
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #blockSize}.
	 * 
	 */
	initBlockSize : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property clearCacheOnRemove
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #clearCacheOnRemove}.
	 * 
	 */
	initClearCacheOnRemove : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maxCachedBlockCount
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maxCachedBlockCount}.
	 * 
	 */
	initMaxCachedBlockCount : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property blockConcurrentLoadRowCount equals true.
	 * 
	 * For further details take a look at the property definition: {@link #blockConcurrentLoadRowCount}.
	 * 
	 */
	isBlockConcurrentLoadRowCount : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property clearCacheOnRemove equals true.
	 * 
	 * For further details take a look at the property definition: {@link #clearCacheOnRemove}.
	 * 
	 */
	isClearCacheOnRemove : vjo.NEEDS_IMPL,


	/**
	 */
	isColumnEditable : vjo.NEEDS_IMPL,


	/**
	 */
	isColumnSortable : vjo.NEEDS_IMPL,


	/**
	 */
	isSortAscending : vjo.NEEDS_IMPL,


	/**
	 * Iterates through all cached rows.
	 * 
	 * The iterator will be called for each cached row with two parameters: The row
	 * index of the current row (Integer) and the row data of that row (var[]). If
	 * the iterator returns something this will be used as new row data.
	 * 
	 * The iterator is called in the same order as the rows are in the model
	 * (the row index is always ascending).
	 * 
	 */
	iterateCachedRows : vjo.NEEDS_IMPL,


	/**
	 */
	prefetchRows : vjo.NEEDS_IMPL,


	/**
	 * Reloads the model and clears the local cache.
	 * 
	 */
	reloadData : vjo.NEEDS_IMPL,


	/**
	 * Removes a row from the model.
	 * 
	 */
	removeRow : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property blockConcurrentLoadRowCount.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #blockConcurrentLoadRowCount}.
	 * 
	 */
	resetBlockConcurrentLoadRowCount : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property blockSize.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #blockSize}.
	 * 
	 */
	resetBlockSize : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property clearCacheOnRemove.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #clearCacheOnRemove}.
	 * 
	 */
	resetClearCacheOnRemove : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maxCachedBlockCount.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maxCachedBlockCount}.
	 * 
	 */
	resetMaxCachedBlockCount : vjo.NEEDS_IMPL,


	/**
	 * Restores a cache state created by {@link #getCacheContent}.
	 * 
	 */
	restoreCacheContent : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property blockConcurrentLoadRowCount.
	 * 
	 * For further details take a look at the property definition: {@link #blockConcurrentLoadRowCount}.
	 * 
	 */
	setBlockConcurrentLoadRowCount : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property blockSize.
	 * 
	 * For further details take a look at the property definition: {@link #blockSize}.
	 * 
	 */
	setBlockSize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property clearCacheOnRemove.
	 * 
	 * For further details take a look at the property definition: {@link #clearCacheOnRemove}.
	 * 
	 */
	setClearCacheOnRemove : vjo.NEEDS_IMPL,


	/**
	 * Sets whether a column is editable.
	 * 
	 */
	setColumnEditable : vjo.NEEDS_IMPL,


	/**
	 * Sets whether a column is sortable.
	 * 
	 */
	setColumnSortable : vjo.NEEDS_IMPL,


	/**
	 * Sets all columns editable or not editable.
	 * 
	 */
	setEditable : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maxCachedBlockCount.
	 * 
	 * For further details take a look at the property definition: {@link #maxCachedBlockCount}.
	 * 
	 */
	setMaxCachedBlockCount : vjo.NEEDS_IMPL,


	/**
	 * Sets the direction of the sorting without sorting the data.
	 * Use this method, if you want to set the direction of sorting, (e.g
	 * for appearance reason), but the sorting of the data will be done in
	 * another step.
	 * 
	 */
	setSortAscendingWithoutSortingData : vjo.NEEDS_IMPL,


	/**
	 * Sets the sorted column without sorting the data.
	 * Use this method, if you want to mark the column as the sorted column,
	 * (e.g. for appearance reason), but the sorting of the data will be done
	 * in another step.
	 * 
	 */
	setSortColumnIndexWithoutSortingData : vjo.NEEDS_IMPL,


	/**
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 */
	sortByColumn : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property blockConcurrentLoadRowCount.
	 * 
	 * For further details take a look at the property definition: {@link #blockConcurrentLoadRowCount}.
	 * 
	 */
	toggleBlockConcurrentLoadRowCount : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property clearCacheOnRemove.
	 * 
	 * For further details take a look at the property definition: {@link #clearCacheOnRemove}.
	 * 
	 */
	toggleClearCacheOnRemove : vjo.NEEDS_IMPL
})
.endType();