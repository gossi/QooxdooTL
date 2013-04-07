/**
 * Provides read/write access to library-specific information such as
 * source/resource URIs.
 */
//>public
vjo.ctype('qx.util.LibraryManager')
.inherits('qx.core.Object')
.protos({
	/**
	 * Returns the value of an attribute of the given library
	 * 
	 */
	get : vjo.NEEDS_IMPL,


	/**
	 * Checks whether the library with the given namespace is known to the
	 * application.
	 * 
	 */
	has : vjo.NEEDS_IMPL,


	/**
	 * Sets an attribute on the given library.
	 * 
	 */
	set : vjo.NEEDS_IMPL
})
.endType();