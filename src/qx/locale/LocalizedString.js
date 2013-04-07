/**
 * This class contains the translation of a message and all information
 * to translate it again into a different language.
 */
//>public
vjo.ctype('qx.locale.LocalizedString')
.inherits('qx.type.BaseString')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Get a translation of the string using the current locale.
	 * 
	 */
	translate : vjo.NEEDS_IMPL
})
.endType();