/**
 * The abstract class for a header or footer for use with Progressive&#8217;s Table
 * renderer.
 */
//>public abstract
vjo.ctype('qx.ui.progressive.headfoot.Abstract')
.inherits('qx.ui.container.Composite')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Join this header/footer to a Progressive.  This makes the Progressive
	 * object available to the header/footer through the _progressive member.
	 * 
	 */
	join : vjo.NEEDS_IMPL
})
.endType();