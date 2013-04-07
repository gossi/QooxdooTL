/**
 * A formatter and parser for numbers.
 */
//>public
vjo.ctype('qx.util.format.NumberFormat')
.inherits('qx.core.Object')
.satisfies('qx.util.format.IFormat')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Formats a number.
	 * 
	 */
	format : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property groupingUsed.
	 * 
	 * For further details take a look at the property definition: {@link #groupingUsed}.
	 * 
	 */
	getGroupingUsed : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maximumFractionDigits.
	 * 
	 * For further details take a look at the property definition: {@link #maximumFractionDigits}.
	 * 
	 */
	getMaximumFractionDigits : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maximumIntegerDigits.
	 * 
	 * For further details take a look at the property definition: {@link #maximumIntegerDigits}.
	 * 
	 */
	getMaximumIntegerDigits : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property minimumFractionDigits.
	 * 
	 * For further details take a look at the property definition: {@link #minimumFractionDigits}.
	 * 
	 */
	getMinimumFractionDigits : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property minimumIntegerDigits.
	 * 
	 * For further details take a look at the property definition: {@link #minimumIntegerDigits}.
	 * 
	 */
	getMinimumIntegerDigits : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property postfix.
	 * 
	 * For further details take a look at the property definition: {@link #postfix}.
	 * 
	 */
	getPostfix : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property prefix.
	 * 
	 * For further details take a look at the property definition: {@link #prefix}.
	 * 
	 */
	getPrefix : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property groupingUsed
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #groupingUsed}.
	 * 
	 */
	initGroupingUsed : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maximumFractionDigits
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maximumFractionDigits}.
	 * 
	 */
	initMaximumFractionDigits : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maximumIntegerDigits
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maximumIntegerDigits}.
	 * 
	 */
	initMaximumIntegerDigits : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property minimumFractionDigits
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #minimumFractionDigits}.
	 * 
	 */
	initMinimumFractionDigits : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property minimumIntegerDigits
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #minimumIntegerDigits}.
	 * 
	 */
	initMinimumIntegerDigits : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property postfix
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #postfix}.
	 * 
	 */
	initPostfix : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property prefix
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #prefix}.
	 * 
	 */
	initPrefix : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property groupingUsed equals true.
	 * 
	 * For further details take a look at the property definition: {@link #groupingUsed}.
	 * 
	 */
	isGroupingUsed : vjo.NEEDS_IMPL,


	/**
	 * Parses a number.
	 * 
	 */
	parse : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property groupingUsed.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #groupingUsed}.
	 * 
	 */
	resetGroupingUsed : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maximumFractionDigits.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maximumFractionDigits}.
	 * 
	 */
	resetMaximumFractionDigits : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maximumIntegerDigits.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maximumIntegerDigits}.
	 * 
	 */
	resetMaximumIntegerDigits : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property minimumFractionDigits.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #minimumFractionDigits}.
	 * 
	 */
	resetMinimumFractionDigits : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property minimumIntegerDigits.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #minimumIntegerDigits}.
	 * 
	 */
	resetMinimumIntegerDigits : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property postfix.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #postfix}.
	 * 
	 */
	resetPostfix : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property prefix.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #prefix}.
	 * 
	 */
	resetPrefix : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property groupingUsed.
	 * 
	 * For further details take a look at the property definition: {@link #groupingUsed}.
	 * 
	 */
	setGroupingUsed : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maximumFractionDigits.
	 * 
	 * For further details take a look at the property definition: {@link #maximumFractionDigits}.
	 * 
	 */
	setMaximumFractionDigits : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maximumIntegerDigits.
	 * 
	 * For further details take a look at the property definition: {@link #maximumIntegerDigits}.
	 * 
	 */
	setMaximumIntegerDigits : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property minimumFractionDigits.
	 * 
	 * For further details take a look at the property definition: {@link #minimumFractionDigits}.
	 * 
	 */
	setMinimumFractionDigits : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property minimumIntegerDigits.
	 * 
	 * For further details take a look at the property definition: {@link #minimumIntegerDigits}.
	 * 
	 */
	setMinimumIntegerDigits : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property postfix.
	 * 
	 * For further details take a look at the property definition: {@link #postfix}.
	 * 
	 */
	setPostfix : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property prefix.
	 * 
	 * For further details take a look at the property definition: {@link #prefix}.
	 * 
	 */
	setPrefix : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property groupingUsed.
	 * 
	 * For further details take a look at the property definition: {@link #groupingUsed}.
	 * 
	 */
	toggleGroupingUsed : vjo.NEEDS_IMPL
})
.endType();