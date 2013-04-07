/**
 * This class is responsible for converting json data to class instances
 * including the creation of the classes.
 */
//>public
vjo.ctype('qx.data.marshal.Json')
.inherits('qx.core.Object')
.satisfies('qx.data.marshal.IMarshaler')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Creates an instance for the given data hash.
	 * 
	 */
	__createInstance : vjo.NEEDS_IMPL,


	/**
	 * Helper for disposing items of the created class.
	 * 
	 */
	__disposeItem : vjo.NEEDS_IMPL,


	/**
	 * Destructor for all created classes which disposes all stuff stored in
	 * the properties.
	 * 
	 */
	__disposeProperties : vjo.NEEDS_IMPL,


	/**
	 * Helper to decide if the delegate decides to ignore a data set.
	 * 
	 */
	__ignore : vjo.NEEDS_IMPL,


	/**
	 * Converts a given object into a hash which will be used to identify the
	 * classes under the namespace qx.data.model.
	 * 
	 */
	__jsonToHash : vjo.NEEDS_IMPL,


	/**
	 * Implementation of {@link #toClass} used for recursion.
	 * 
	 */
	__toClass : vjo.NEEDS_IMPL,


	/**
	 * Implementation of {@link #toModel} used for recursion.
	 * 
	 */
	__toModel : vjo.NEEDS_IMPL,


	/**
	 * Creates for the given data the needed classes. The classes contain for
	 * every key in the data a property. The classname is always the prefix
	 * qx.data.model and the hash of the data created by
	 * {@link #__jsonToHash}. Two objects containing the same keys will not
	 * create two different classes. The class creation process also supports
	 * the functions provided by its delegate.
	 * 
	 * Important, please keep in mind that only valid JavaScript identifiers
	 * can be used as keys in the data map. For convenience &#8217;-&#8217; in keys will
	 * be removed (a-b will be ab in the end).
	 * 
	 */
	toClass : vjo.NEEDS_IMPL,


	/**
	 * Creates for the given data the needed models. Be sure to have the classes
	 * created with {@link #toClass} before calling this method. The creation
	 * of the class itself is delegated to the {@link #__createInstance} method,
	 * which could use the {@link qx.data.store.IStoreDelegate} methods, if
	 * given.
	 * 
	 */
	toModel : vjo.NEEDS_IMPL
})
.endType();