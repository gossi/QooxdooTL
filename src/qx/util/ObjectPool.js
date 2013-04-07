/**
 * This class manages pooled Object instances.
 * 
 * It exists mainly to minimise the amount of browser memory usage by reusing
 * window instances after they have been closed.  However, it could equally be
 * used to pool instances of any type of Object (expect singletons).
 * 
 * It is the client&#8217;s responsibility to ensure that pooled objects are not
 * referenced or used from anywhere else in the application.
 */
//>public
vjo.ctype('qx.util.ObjectPool')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * This method finds and returns an instance of a requested type in the pool,
	 * if there is one.  Note that the pool determines which instance (if any) to
	 * return to the client.  The client cannot get a specific instance from the
	 * pool.
	 * 
	 */
	getObject : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property size.
	 * 
	 * For further details take a look at the property definition: {@link #size}.
	 * 
	 */
	getSize : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property size
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #size}.
	 * 
	 */
	initSize : vjo.NEEDS_IMPL,


	/**
	 * This method places an Object in a pool of Objects of its type. Note that
	 * once an instance has been pooled, there is no means to get that exact
	 * instance back. The instance may be discarded for garbage collection if
	 * the pool of its type is already full.
	 * 
	 * It is assumed that no other references exist to this Object, and that it will
	 * not be used at all while it is pooled.
	 * 
	 */
	poolObject : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property size.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #size}.
	 * 
	 */
	resetSize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property size.
	 * 
	 * For further details take a look at the property definition: {@link #size}.
	 * 
	 */
	setSize : vjo.NEEDS_IMPL
})
.endType();