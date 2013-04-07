/**
 * Singleton wrapper for the stylesheet containing the CSS rules for HTML cells.
 * 
 * EXPERIMENTAL!
 */
//>public
vjo.ctype('qx.ui.virtual.cell.CellStylesheet')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Get the next unique CSS class name
	 * 
	 */
	__getNextClassname : vjo.NEEDS_IMPL,


	/**
	 * Dynamically create a CSS rule for the given style string. The selector is
	 * an unique class name, which is returned. The class is stored under the
	 * given key name and can be queried using {@link #getCssClass}.
	 * 
	 */
	computeClassForStyles : vjo.NEEDS_IMPL,


	/**
	 * Get the CSS class stored under the given key
	 * 
	 */
	getCssClass : vjo.NEEDS_IMPL,


	/**
	 * Get the DOM stylesheet element
	 * 
	 */
	getStylesheet : vjo.NEEDS_IMPL
})
.endType();