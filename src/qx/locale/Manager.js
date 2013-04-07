/**
 * The qx.locale.Manager provides static translation methods (like tr()) and
 * general locale information.
 */
//>public
vjo.ctype('qx.locale.Manager')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Extract the language part from a locale.
	 * 
	 */
	__extractLanguage : vjo.NEEDS_IMPL,


	/**
	 * Look up an I18N key in a catalog and expand format strings.
	 * 
	 * Implements the lookup chain locale (e.g. en_US) -> language (e.g. en) ->
	 * default locale (e.g. C). Localizes the arguments if possible and splices
	 * them into the message. If qx.dynlocale is on, returns a {@link
	 * LocalizedString}.
	 * 
	 */
	__lookupAndExpand : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property locale.
	 * 
	 * For further details take a look at the property definition: {@link #locale}.
	 * 
	 */
	_applyLocale : vjo.NEEDS_IMPL,


	/**
	 * Add a localization to the localization manager.
	 * 
	 * If localeCode already exists, its map will be updated with
	 * localeMap (new keys will be added, existing keys will be overwritten).
	 * 
	 */
	addLocale : vjo.NEEDS_IMPL,


	/**
	 * Add a translation to the translation manager.
	 * 
	 * If languageCode already exists, its map will be updated with
	 * translationMap (new keys will be added, existing keys will be
	 * overwritten).
	 * 
	 */
	addTranslation : vjo.NEEDS_IMPL,


	/**
	 * Return the available application locales
	 * 
	 * This corresponds to the LOCALES setting in config.json. Without argument,
	 * it only returns the currently loaded locales, with an argument of true
	 * all locales that went into the build. This is particularly interesting if
	 * locales were generated as dedicated I18N parts, and have to be loaded
	 * explicitly before being available.
	 * 
	 */
	getAvailableLocales : vjo.NEEDS_IMPL,


	/**
	 * Get the language code of the current locale
	 * 
	 * This is the first part of a locale definition. The language for &#8220;de_DE&#8221; would be &#8220;de&#8221;
	 * 
	 */
	getLanguage : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property locale.
	 * 
	 * For further details take a look at the property definition: {@link #locale}.
	 * 
	 */
	getLocale : vjo.NEEDS_IMPL,


	/**
	 * Get the territory code of the current locale
	 * 
	 * This is the second part of a locale definition. The territory for &#8220;de_DE&#8221; would be &#8220;DE&#8221;
	 * 
	 */
	getTerritory : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property locale
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #locale}.
	 * 
	 */
	initLocale : vjo.NEEDS_IMPL,


	/**
	 * Provide localisation (CLDR) data.
	 * 
	 * Implements the lookup chain locale (e.g. en_US) -> language (e.g. en) ->
	 * default locale (e.g. C). Localizes the arguments if possible and splices
	 * them into the message. If qx.dynlocale is on, returns a {@link
	 * LocalizedString}.
	 * 
	 */
	localize : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property locale.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #locale}.
	 * 
	 */
	resetLocale : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property locale.
	 * 
	 * For further details take a look at the property definition: {@link #locale}.
	 * 
	 */
	setLocale : vjo.NEEDS_IMPL,


	/**
	 * Translate a message using the current locale and apply format string to the arguments.
	 * 
	 * Implements the lookup chain locale (e.g. en_US) -> language (e.g. en) ->
	 * default locale (e.g. C). Localizes the arguments if possible and splices
	 * them into the message. If qx.dynlocale is on, returns a {@link
	 * LocalizedString}.
	 * 
	 */
	translate : vjo.NEEDS_IMPL
})
.endType();