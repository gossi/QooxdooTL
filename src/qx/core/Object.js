/**
 * The qooxdoo root class. All other classes are direct or indirect subclasses of this one.
 * 
 * This class contains methods for:
 * 
 * 
 * object management (creation and destruction)
 * interfaces for event system
 * generic setter/getter support
 * interfaces for logging console
 * user friendly OO interfaces like {@link #self} or {@link #base}

 */
//>public
vjo.ctype('qx.core.Object')
.inherits('Object')
.mixin(['qx.core.MEvent','qx.core.MAssert','qx.core.MProperty','qx.core.MLogging','qx.data.MBinding'])
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Possible reference to special method for IE6 and FF2
	 * {@link #__removePropertyReferencesOld}
	 * 
	 */
	__removePropertyReferences : vjo.NEEDS_IMPL,


	/**
	 * Special method for IE6 and FF2 which removes all $user_ references
	 * set up by the properties.
	 * 
	 */
	__removePropertyReferencesOld : vjo.NEEDS_IMPL,


	/**
	 * Disposes all members of the given array and deletes
	 * the field which refers to the array afterwards.
	 * 
	 */
	_disposeArray : vjo.NEEDS_IMPL,


	/**
	 * Disposes all members of the given map and deletes
	 * the field which refers to the map afterwards.
	 * 
	 */
	_disposeMap : vjo.NEEDS_IMPL,


	/**
	 * Disconnects and disposes given objects from instance.
	 * Only works with qx.core.Object based objects e.g. Widgets.
	 * 
	 */
	_disposeObjects : vjo.NEEDS_IMPL,


	/**
	 * Disconnects and disposes given singleton objects from instance.
	 * Only works with qx.core.Object based objects e.g. Widgets.
	 * 
	 */
	_disposeSingletonObjects : vjo.NEEDS_IMPL,


	/**
	 * Call the same method of the super class.
	 * 
	 */
	base : vjo.NEEDS_IMPL,


	/**
	 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
	 * 
	 * Returns a clone of this object. Copies over all user configured
	 * property values. Do not configure a parent nor apply the appearance
	 * styles directly.
	 * 
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Dispose this object
	 * 
	 */
	dispose : vjo.NEEDS_IMPL,


	/**
	 * Load user defined data from the object
	 * 
	 */
	getUserData : vjo.NEEDS_IMPL,


	/**
	 * Returns true if the object is disposed.
	 * 
	 */
	isDisposed : vjo.NEEDS_IMPL,


	/**
	 * Returns the static class (to access static members of this class)
	 * 
	 */
	self : vjo.NEEDS_IMPL,


	/**
	 * Store user defined data inside the object.
	 * 
	 */
	setUserData : vjo.NEEDS_IMPL,


	/**
	 * Return unique hash code of object
	 * 
	 */
	toHashCode : vjo.NEEDS_IMPL,


	/**
	 * Returns a string representation of the qooxdoo object.
	 * 
	 */
	toString : vjo.NEEDS_IMPL
})
.endType();