/**
 * A wrapper for CSS font styles. Fond objects can be applied to instances
 * of {@link qx.html.Element}.
 */
//>public
vjo.ctype('qx.bom.Font')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property bold.
	 * 
	 * For further details take a look at the property definition: {@link #bold}.
	 * 
	 */
	_applyBold : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property color.
	 * 
	 * For further details take a look at the property definition: {@link #color}.
	 * 
	 */
	_applyColor : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property decoration.
	 * 
	 * For further details take a look at the property definition: {@link #decoration}.
	 * 
	 */
	_applyDecoration : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property family.
	 * 
	 * For further details take a look at the property definition: {@link #family}.
	 * 
	 */
	_applyFamily : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property italic.
	 * 
	 * For further details take a look at the property definition: {@link #italic}.
	 * 
	 */
	_applyItalic : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property lineHeight.
	 * 
	 * For further details take a look at the property definition: {@link #lineHeight}.
	 * 
	 */
	_applyLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property size.
	 * 
	 * For further details take a look at the property definition: {@link #size}.
	 * 
	 */
	_applySize : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property textShadow.
	 * 
	 * For further details take a look at the property definition: {@link #textShadow}.
	 * 
	 */
	_applyTextShadow : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property bold.
	 * 
	 * For further details take a look at the property definition: {@link #bold}.
	 * 
	 */
	getBold : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property color.
	 * 
	 * For further details take a look at the property definition: {@link #color}.
	 * 
	 */
	getColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property decoration.
	 * 
	 * For further details take a look at the property definition: {@link #decoration}.
	 * 
	 */
	getDecoration : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property family.
	 * 
	 * For further details take a look at the property definition: {@link #family}.
	 * 
	 */
	getFamily : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property italic.
	 * 
	 * For further details take a look at the property definition: {@link #italic}.
	 * 
	 */
	getItalic : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property lineHeight.
	 * 
	 * For further details take a look at the property definition: {@link #lineHeight}.
	 * 
	 */
	getLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property size.
	 * 
	 * For further details take a look at the property definition: {@link #size}.
	 * 
	 */
	getSize : vjo.NEEDS_IMPL,


	/**
	 * Get a map of all CSS styles, which will be applied to the widget. Only
	 * the styles which are set are returned.
	 * 
	 */
	getStyles : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property textShadow.
	 * 
	 * For further details take a look at the property definition: {@link #textShadow}.
	 * 
	 */
	getTextShadow : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property bold
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #bold}.
	 * 
	 */
	initBold : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property color
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #color}.
	 * 
	 */
	initColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property decoration
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #decoration}.
	 * 
	 */
	initDecoration : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property family
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #family}.
	 * 
	 */
	initFamily : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property italic
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #italic}.
	 * 
	 */
	initItalic : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property lineHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #lineHeight}.
	 * 
	 */
	initLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property size
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #size}.
	 * 
	 */
	initSize : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property textShadow
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #textShadow}.
	 * 
	 */
	initTextShadow : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property bold equals true.
	 * 
	 * For further details take a look at the property definition: {@link #bold}.
	 * 
	 */
	isBold : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property italic equals true.
	 * 
	 * For further details take a look at the property definition: {@link #italic}.
	 * 
	 */
	isItalic : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property bold.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #bold}.
	 * 
	 */
	resetBold : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property color.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #color}.
	 * 
	 */
	resetColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property decoration.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #decoration}.
	 * 
	 */
	resetDecoration : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property family.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #family}.
	 * 
	 */
	resetFamily : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property italic.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #italic}.
	 * 
	 */
	resetItalic : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property lineHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #lineHeight}.
	 * 
	 */
	resetLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property size.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #size}.
	 * 
	 */
	resetSize : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property textShadow.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #textShadow}.
	 * 
	 */
	resetTextShadow : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property bold.
	 * 
	 * For further details take a look at the property definition: {@link #bold}.
	 * 
	 */
	setBold : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property color.
	 * 
	 * For further details take a look at the property definition: {@link #color}.
	 * 
	 */
	setColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property decoration.
	 * 
	 * For further details take a look at the property definition: {@link #decoration}.
	 * 
	 */
	setDecoration : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property family.
	 * 
	 * For further details take a look at the property definition: {@link #family}.
	 * 
	 */
	setFamily : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property italic.
	 * 
	 * For further details take a look at the property definition: {@link #italic}.
	 * 
	 */
	setItalic : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property lineHeight.
	 * 
	 * For further details take a look at the property definition: {@link #lineHeight}.
	 * 
	 */
	setLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property size.
	 * 
	 * For further details take a look at the property definition: {@link #size}.
	 * 
	 */
	setSize : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property textShadow.
	 * 
	 * For further details take a look at the property definition: {@link #textShadow}.
	 * 
	 */
	setTextShadow : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property bold.
	 * 
	 * For further details take a look at the property definition: {@link #bold}.
	 * 
	 */
	toggleBold : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property italic.
	 * 
	 * For further details take a look at the property definition: {@link #italic}.
	 * 
	 */
	toggleItalic : vjo.NEEDS_IMPL
})
.endType();