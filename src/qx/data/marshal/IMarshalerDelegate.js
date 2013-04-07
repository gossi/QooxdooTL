/**
 * Objects, which are used as delegates for a data binding marshaler may
 * implement any of the methods described in this interface. The delegate does
 * not need implement all of the methods of this interface. If a method is not
 * implemented the marshaler provides a default implementation.
 * 
 * Note: This interface is meant to document the delegate but should not be
 * listed in the implement key of a class unless all methods are
 * really implemented.
 */
//>public
vjo.itype('qx.data.marshal.IMarshalerDelegate')
.protos({
	/**
	 * Determines the user defined class for the given properties string.
	 * This class could contain additional methods but needs to have the
	 * properties with the given names. Also every property needs to have a
	 * change event.
	 * 
	 * If this method is implemented, you have to add the superclass and mixins
	 * yourself to the returned class. This means that the methods
	 * {@link #getModelSuperClass} and {@link #getModelMixins} will not be
	 * called for the corresponding class.
	 * 
	 */
	getModelClass : vjo.NEEDS_IMPL,


	/**
	 * Returns the mixins which should be included to the class, created by the
	 * marshaler and identified by the given properties string.
	 * 
	 */
	getModelMixins : vjo.NEEDS_IMPL,


	/**
	 * Returns the class which the created model class uses as superclass.
	 * 
	 */
	getModelSuperClass : vjo.NEEDS_IMPL,


	/**
	 * Gives the possibility to change the names given in the data to convert
	 * to something different.
	 * 
	 */
	getPropertyMapping : vjo.NEEDS_IMPL,


	/**
	 * Returns the validation rules which should be added to the created class
	 * for the given property. This method will be called for every property.
	 * 
	 */
	getValidationRule : vjo.NEEDS_IMPL,


	/**
	 * Gives the possibility to ignore parts of the marshaled data and store the
	 * original data.
	 * 
	 */
	ignore : vjo.NEEDS_IMPL
})
.endType();