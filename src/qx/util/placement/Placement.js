/**
 * Contains methods to compute a position for any object which should
 * be positioned relative to another object.
 */
//>public
vjo.ctype('qx.util.placement.Placement')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Get the position value for the horizontal axis
	 * 
	 */
	__getPositionX : vjo.NEEDS_IMPL,


	/**
	 * Get the position value for the vertical axis
	 * 
	 */
	__getPositionY : vjo.NEEDS_IMPL,


	/**
	 * DOM and widget independent method to compute the location
	 * of an object to make it relative to any other object.
	 * 
	 */
	compute : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property align.
	 * 
	 * For further details take a look at the property definition: {@link #align}.
	 * 
	 */
	getAlign : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property axisX.
	 * 
	 * For further details take a look at the property definition: {@link #axisX}.
	 * 
	 */
	getAxisX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property axisY.
	 * 
	 * For further details take a look at the property definition: {@link #axisY}.
	 * 
	 */
	getAxisY : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property edge.
	 * 
	 * For further details take a look at the property definition: {@link #edge}.
	 * 
	 */
	getEdge : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property align
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #align}.
	 * 
	 */
	initAlign : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property axisX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #axisX}.
	 * 
	 */
	initAxisX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property axisY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #axisY}.
	 * 
	 */
	initAxisY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property edge
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #edge}.
	 * 
	 */
	initEdge : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property align.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #align}.
	 * 
	 */
	resetAlign : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property axisX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #axisX}.
	 * 
	 */
	resetAxisX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property axisY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #axisY}.
	 * 
	 */
	resetAxisY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property edge.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #edge}.
	 * 
	 */
	resetEdge : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property align.
	 * 
	 * For further details take a look at the property definition: {@link #align}.
	 * 
	 */
	setAlign : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property axisX.
	 * 
	 * For further details take a look at the property definition: {@link #axisX}.
	 * 
	 */
	setAxisX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property axisY.
	 * 
	 * For further details take a look at the property definition: {@link #axisY}.
	 * 
	 */
	setAxisY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property edge.
	 * 
	 * For further details take a look at the property definition: {@link #edge}.
	 * 
	 */
	setEdge : vjo.NEEDS_IMPL
})
.endType();