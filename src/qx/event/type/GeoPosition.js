/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * GeoPosition event used by GeoLocation class.
 */
//>public
vjo.ctype('qx.event.type.GeoPosition')
.inherits('qx.event.type.Event')
.protos({
	/**
	 * Create a new instance.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property accuracy.
	 * 
	 * For further details take a look at the property definition: {@link #accuracy}.
	 * 
	 */
	getAccuracy : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property altitude.
	 * 
	 * For further details take a look at the property definition: {@link #altitude}.
	 * 
	 */
	getAltitude : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property altitudeAccuracy.
	 * 
	 * For further details take a look at the property definition: {@link #altitudeAccuracy}.
	 * 
	 */
	getAltitudeAccuracy : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property heading.
	 * 
	 * For further details take a look at the property definition: {@link #heading}.
	 * 
	 */
	getHeading : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property latitude.
	 * 
	 * For further details take a look at the property definition: {@link #latitude}.
	 * 
	 */
	getLatitude : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property longitude.
	 * 
	 * For further details take a look at the property definition: {@link #longitude}.
	 * 
	 */
	getLongitude : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property speed.
	 * 
	 * For further details take a look at the property definition: {@link #speed}.
	 * 
	 */
	getSpeed : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property timestamp.
	 * 
	 * For further details take a look at the property definition: {@link #timestamp}.
	 * 
	 */
	getTimestamp : vjo.NEEDS_IMPL,


	/**
	 * Initialize the fields of the event.
	 * 
	 */
	init : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property accuracy
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #accuracy}.
	 * 
	 */
	initAccuracy : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property altitude
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #altitude}.
	 * 
	 */
	initAltitude : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property altitudeAccuracy
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #altitudeAccuracy}.
	 * 
	 */
	initAltitudeAccuracy : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property heading
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #heading}.
	 * 
	 */
	initHeading : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property latitude
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #latitude}.
	 * 
	 */
	initLatitude : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property longitude
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #longitude}.
	 * 
	 */
	initLongitude : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property speed
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #speed}.
	 * 
	 */
	initSpeed : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property timestamp
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #timestamp}.
	 * 
	 */
	initTimestamp : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property accuracy.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #accuracy}.
	 * 
	 */
	resetAccuracy : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property altitude.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #altitude}.
	 * 
	 */
	resetAltitude : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property altitudeAccuracy.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #altitudeAccuracy}.
	 * 
	 */
	resetAltitudeAccuracy : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property heading.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #heading}.
	 * 
	 */
	resetHeading : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property latitude.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #latitude}.
	 * 
	 */
	resetLatitude : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property longitude.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #longitude}.
	 * 
	 */
	resetLongitude : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property speed.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #speed}.
	 * 
	 */
	resetSpeed : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property timestamp.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #timestamp}.
	 * 
	 */
	resetTimestamp : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property accuracy.
	 * 
	 * For further details take a look at the property definition: {@link #accuracy}.
	 * 
	 */
	setAccuracy : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property altitude.
	 * 
	 * For further details take a look at the property definition: {@link #altitude}.
	 * 
	 */
	setAltitude : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property altitudeAccuracy.
	 * 
	 * For further details take a look at the property definition: {@link #altitudeAccuracy}.
	 * 
	 */
	setAltitudeAccuracy : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property heading.
	 * 
	 * For further details take a look at the property definition: {@link #heading}.
	 * 
	 */
	setHeading : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property latitude.
	 * 
	 * For further details take a look at the property definition: {@link #latitude}.
	 * 
	 */
	setLatitude : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property longitude.
	 * 
	 * For further details take a look at the property definition: {@link #longitude}.
	 * 
	 */
	setLongitude : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property speed.
	 * 
	 * For further details take a look at the property definition: {@link #speed}.
	 * 
	 */
	setSpeed : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property timestamp.
	 * 
	 * For further details take a look at the property definition: {@link #timestamp}.
	 * 
	 */
	setTimestamp : vjo.NEEDS_IMPL
})
.endType();