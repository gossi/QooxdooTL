/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * GeoLocation provides access to geographical location information
 * associated with the hosting device.
 * 
 * For more information see:
 * http://www.w3.org/TR/geolocation-API
 */
//>public
vjo.ctype('qx.bom.GeoLocation')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * The Error handler.
	 * 
	 */
	_errorHandler : vjo.NEEDS_IMPL,


	/**
	 * Success handler.
	 * 
	 */
	_successHandler : vjo.NEEDS_IMPL,


	/**
	 * Retrieves the current position and calls the &#8220;position&#8221; event.
	 * 
	 */
	getCurrentPosition : vjo.NEEDS_IMPL,


	/**
	 * Starts to watch the position. Calls the &#8220;position&#8221; event, when the position changed.
	 * 
	 */
	startWatchPosition : vjo.NEEDS_IMPL,


	/**
	 * Stops watching the position.
	 * 
	 */
	stopWatchPosition : vjo.NEEDS_IMPL
})
.endType();