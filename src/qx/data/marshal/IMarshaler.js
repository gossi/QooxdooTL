/**
 * Defines the methods needed by every marshaler which should work with the
 * qooxdoo data stores.
 */
//>public
vjo.itype('qx.data.marshal.IMarshaler')
.protos({
	/**
	 * Creates for the given data the needed classes. The classes contain for
	 * every key in the data a property. The classname is always the prefix
	 * qx.data.model. Two objects containing the same keys will not
	 * create two different classes.
	 * 
	 */
	toClass : vjo.NEEDS_IMPL,


	/**
	 * Creates for the given data the needed models. Be sure to have the classes
	 * created with {@link #toClass} before calling this method.
	 * 
	 */
	toModel : vjo.NEEDS_IMPL
})
.endType();