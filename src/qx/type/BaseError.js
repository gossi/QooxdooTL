/**
 * This class is the common super class for all error classes in qooxdoo.
 * 
 * It has a comment and a fail message as members. The toString method returns
 * the comment and the fail message separated by a colon.
 */
//>public
vjo.ctype('qx.type.BaseError')
.inherits('Error')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Comment passed to the assertion call
	 * 
	 */
	getComment : vjo.NEEDS_IMPL,


	/**
	 * Get the error message
	 * 
	 */
	toString : vjo.NEEDS_IMPL
})
.endType();