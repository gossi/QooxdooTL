/**
 * This mixin is forwarding the static methods of
 * {@link qx.data.SingleValueBinding} to the instance including the mixin.
 * The source object will be this.
 */
//>public
vjo.mtype('qx.data.MBinding')
.protos({
	/**
	 * The bind method delegates the call to the
	 * {@link qx.data.SingleValueBinding#bind} function. As source, the current
	 * object (this) will be used.
	 * 
	 */
	bind : vjo.NEEDS_IMPL,


	/**
	 * Returns an array which lists all bindings for the object.
	 * 
	 */
	getBindings : vjo.NEEDS_IMPL,


	/**
	 * Removes all bindings from the object.
	 * 
	 */
	removeAllBindings : vjo.NEEDS_IMPL,


	/**
	 * Removes the binding with the given id from the current object. The
	 * id hast to be the id returned by any of the bind functions.
	 * 
	 */
	removeBinding : vjo.NEEDS_IMPL
})
.endType();