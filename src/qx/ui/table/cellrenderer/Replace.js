/**
 * The cell will use, if given, the
 * replaceMap property and/or the replaceFunction to look up labels for a
 * specific cell value. if the replaceMap, which does not need to be used but
 * takes precedence if given, has no entry for a specific value, you can implement
 * a fallback lookup in the replacementFunction, or use the replacementFunction exclusively.
 * 
 * In editable cells, you need to make sure that the method returning the data
 * to the data storage (for example, a database backend) translates the replaced
 * cell value (the label) back into the corresponding value. Thus, both map and
 * function MUST also take care of the reverse translation of labels into
 * values. Example: if you have a field that should display &#8220;Active&#8221; on a &#8220;1&#8221;
 * value and &#8220;Inactive&#8221; on a &#8220;0&#8221; value, you must use the following map:
 * 
 * 
 * {
 *   0 : "Inactive",
 *   1 : "Active",
 *   "Inactive" : 0,
 *   "Active" : 1
 * }
 * 
 * 
 * You can use the addReversedReplaceMap() method to do this for you:
 * 
 * 
 * var propertyCellRenderer = new qx.ui.table.cellrenderer.Replace;
 * propertyCellRenderer.setReplaceMap({
 *    1 : "Active",
 *   0 : "Inactive",
 *   2  : "Waiting",
 *   'admin' : "System Administrator",
 *   'manager' : "User Manager",
 *   'user' : "Website User"
 * });
 * propertyCellRenderer.addReversedReplaceMap();

 */
//>public
vjo.ctype('qx.ui.table.cellrenderer.Replace')
.inherits('qx.ui.table.cellrenderer.Default')
.protos({
	/**
	 */
	_getContentHtml : vjo.NEEDS_IMPL,


	/**
	 * adds a reversed replaceMap to itself to translate labels back to the original values
	 * 
	 */
	addReversedReplaceMap : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property replaceFunction.
	 * 
	 * For further details take a look at the property definition: {@link #replaceFunction}.
	 * 
	 */
	getReplaceFunction : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property replaceMap.
	 * 
	 * For further details take a look at the property definition: {@link #replaceMap}.
	 * 
	 */
	getReplaceMap : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property replaceFunction
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #replaceFunction}.
	 * 
	 */
	initReplaceFunction : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property replaceMap
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #replaceMap}.
	 * 
	 */
	initReplaceMap : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property replaceFunction.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #replaceFunction}.
	 * 
	 */
	resetReplaceFunction : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property replaceMap.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #replaceMap}.
	 * 
	 */
	resetReplaceMap : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property replaceFunction.
	 * 
	 * For further details take a look at the property definition: {@link #replaceFunction}.
	 * 
	 */
	setReplaceFunction : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property replaceMap.
	 * 
	 * For further details take a look at the property definition: {@link #replaceMap}.
	 * 
	 */
	setReplaceMap : vjo.NEEDS_IMPL
})
.endType();