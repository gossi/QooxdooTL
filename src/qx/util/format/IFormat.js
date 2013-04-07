/**
 * Superclass for formatters and parsers.
 */
//>public
vjo.itype('qx.util.format.IFormat')
.protos({
	/**
	 * Formats an object.
	 * 
	 */
	format : vjo.NEEDS_IMPL,


	/**
	 * Parses an object.
	 * 
	 */
	parse : vjo.NEEDS_IMPL
})
.endType();