/**
 * This mixin offers the bacis property features which include generic
 * setter, getter and resetter.
 */
//>public
vjo.mtype('qx.core.MProperty')
.protos({
	/**
	 * Returns the value of the given property. If no generated getter could be
	 * found, a fallback tries to access a handwritten getter.
	 * 
	 */
	get : vjo.NEEDS_IMPL,


	/**
	 * Resets the value of the given property. If no generated resetter could be
	 * found, a handwritten resetter will be invoked, if available.
	 * 
	 */
	reset : vjo.NEEDS_IMPL,


	/**
	 * Sets multiple properties at once by using a property list or
	 * sets one property and its value by the first and second argument.
	 * As a fallback, if no generated property setter could be found, a
	 * handwritten setter will be searched and invoked if available.
	 * 
	 */
	set : vjo.NEEDS_IMPL
})
.endType();