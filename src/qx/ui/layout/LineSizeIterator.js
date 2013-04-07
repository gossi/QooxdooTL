/**
 * This class iterates over the lines in a flow layout.
 */
//>internal
vjo.ctype('qx.ui.layout.LineSizeIterator')
.inherits('Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Computes the gap before the child at the given index
	 * 
	 */
	__computeGapBeforeChild : vjo.NEEDS_IMPL,


	/**
	 * Computes the properties of the next line taking the available width into
	 * account
	 * 
	 */
	computeNextLine : vjo.NEEDS_IMPL,


	/**
	 * Whether there are more lines
	 * 
	 */
	hasMoreLines : vjo.NEEDS_IMPL
})
.endType();