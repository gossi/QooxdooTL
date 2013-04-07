/**
 * Mixin to add a bindTo method to a class, making it easy to bind a function
 * to an object instance for use in lieu of calls to static method
 * qx.lang.Function.bind().
 * 
 * The easiest (but not necessarily most efficient) way to use this mixin is
 * to include it in qx.core.Object by adding this line some place in the
 * application code (typically in main()):
 * 
 * 
 *   qx.Class.include(qx.core.Object, qx.core.MBindTo);
 * 
 * 
 * If object footprint (memory use) is of significant concern, that may be a
 * bit excessive since every object which is a descendent of qx.core.Object
 * will have the methods defined in the mixin. Instead, if a certain class
 * will have many functions bound to it (of particular use for callback
 * functions), qx.Class.include() could be used to include this mixin in that
 * class instead of in qx.core.Object.
 * 
 * Alternatively, that class may be subclassed, and the &#8216;include&#8217; key of the
 * class configuration could be used to always include this mixin in the
 * subclass. e.g.
 * 
 * 
 *   qx.Class.define("custom.Table",
 *   {
 *     extend  : qx.ui.table.Table,
 *     include : [ qx.core.MBindTo ]
 *   });

 */
//>public
vjo.mtype('qx.core.MBindTo')
.protos({
	/**
	 * Bind a function to this object
	 * 
	 */
	bindTo : vjo.NEEDS_IMPL
})
.endType();