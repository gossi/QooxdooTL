/**
 * The standard footer used with Progressive&#8217;s Table renderer, to show
 * progress of loading data into the table.
 */
//>public
vjo.ctype('qx.ui.progressive.headfoot.Progress')
.inherits('qx.ui.progressive.headfoot.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper to link the theme colors to the current class.
	 * 
	 */
	__linkColors : vjo.NEEDS_IMPL,


	/**
	 */
	_onChangeTheme : vjo.NEEDS_IMPL,


	/**
	 */
	join : vjo.NEEDS_IMPL
})
.endType();