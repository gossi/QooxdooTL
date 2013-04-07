/**
 * This mixin contains the methods needed to use the translation features
 * of qooxdoo.
 */
//>public
vjo.mtype('qx.locale.MTranslation')
.protos({
	/**
	 * Mark the message for translation but return the original message.
	 * 
	 */
	marktr : vjo.NEEDS_IMPL,


	/**
	 * Translate a message
	 * Mark the message for translation.
	 * 
	 */
	tr : vjo.NEEDS_IMPL,


	/**
	 * Translate a message with translation hint
	 * Mark the messages for translation.
	 * 
	 */
	trc : vjo.NEEDS_IMPL,


	/**
	 * Translate a plural message
	 * Mark the messages for translation.
	 * 
	 * Depending on the third argument the plural or the singular form is chosen.
	 * 
	 */
	trn : vjo.NEEDS_IMPL
})
.endType();