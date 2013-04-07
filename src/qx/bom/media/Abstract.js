/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * Media element. Other media types can derive from this class.
 */
//>public abstract
vjo.ctype('qx.bom.media.Abstract')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Ended event handler.
	 * 
	 */
	_handleEndedEvent : vjo.NEEDS_IMPL,


	/**
	 * Loaded Data event handler.
	 * 
	 */
	_handleLoadedDataEvent : vjo.NEEDS_IMPL,


	/**
	 * Loaded Metadata event handler.
	 * 
	 */
	_handleLoadedMetaDataEvent : vjo.NEEDS_IMPL,


	/**
	 * Pause event handler.
	 * 
	 */
	_handlePauseEvent : vjo.NEEDS_IMPL,


	/**
	 * Play event handler.
	 * 
	 */
	_handlePlayEvent : vjo.NEEDS_IMPL,


	/**
	 * Time Update event handler.
	 * 
	 */
	_handleTimeUpdateEvent : vjo.NEEDS_IMPL,


	/**
	 * Volume Change event handler.
	 * 
	 */
	_handleVolumeChangeEvent : vjo.NEEDS_IMPL,


	/**
	 * Whether the browser can play the file format.
	 * 
	 */
	canPlayType : vjo.NEEDS_IMPL,


	/**
	 * Whether the media is played directly when it is loaded / the page is loaded.
	 * 
	 */
	getAutoplay : vjo.NEEDS_IMPL,


	/**
	 * Gets current time of the playback.
	 * 
	 */
	getCurrentTime : vjo.NEEDS_IMPL,


	/**
	 * Gets the duration of the loaded media file.
	 * 
	 */
	getDuration : vjo.NEEDS_IMPL,


	/**
	 * Gets the id of the media.
	 * 
	 */
	getId : vjo.NEEDS_IMPL,


	/**
	 * Returns the media object, so that you can add it to the DOM.
	 * 
	 */
	getMediaObject : vjo.NEEDS_IMPL,


	/**
	 * Returns how much buffering the media resource will likely need.
	 * 
	 */
	getPreload : vjo.NEEDS_IMPL,


	/**
	 * Gets the source url of the media file.
	 * 
	 */
	getSource : vjo.NEEDS_IMPL,


	/**
	 * Gets the current playback volume, as a number in the range 0.0 to 1.0,
	 * where 0.0 is the quietest and 1.0 the loudest.
	 * 
	 */
	getVolume : vjo.NEEDS_IMPL,


	/**
	 * Checks if the media element shows its controls.
	 * 
	 */
	hasControls : vjo.NEEDS_IMPL,


	/**
	 * Hides the controls of the media element.
	 * 
	 */
	hideControls : vjo.NEEDS_IMPL,


	/**
	 * Checks if the media is ended or not.
	 * 
	 */
	isEnded : vjo.NEEDS_IMPL,


	/**
	 * Whether the media element is to seek back to the start of the media resource upon reaching the end.
	 * 
	 */
	isLoop : vjo.NEEDS_IMPL,


	/**
	 * Checks if the media element is muted or not
	 * 
	 */
	isMuted : vjo.NEEDS_IMPL,


	/**
	 * Checks if the media is paused or not.
	 * 
	 */
	isPaused : vjo.NEEDS_IMPL,


	/**
	 * Pauses playback of the media.
	 * 
	 */
	pause : vjo.NEEDS_IMPL,


	/**
	 * Starts playback of the media.
	 * 
	 */
	play : vjo.NEEDS_IMPL,


	/**
	 * Plays the media directly when it is loaded / the page is loaded.
	 * 
	 */
	setAutoplay : vjo.NEEDS_IMPL,


	/**
	 * Sets the value of current time.
	 * 
	 */
	setCurrentTime : vjo.NEEDS_IMPL,


	/**
	 * Sets the id of the media.
	 * 
	 */
	setId : vjo.NEEDS_IMPL,


	/**
	 * Indicates that the media element is to seek back to the start of the media resource upon reaching the end.
	 * 
	 */
	setLoop : vjo.NEEDS_IMPL,


	/**
	 * Sets the media element to mute.
	 * 
	 */
	setMuted : vjo.NEEDS_IMPL,


	/**
	 * Hints how much buffering the media resource will likely need.
	 * 
	 */
	setPreload : vjo.NEEDS_IMPL,


	/**
	 * Sets the source url of the media file.
	 * 
	 */
	setSource : vjo.NEEDS_IMPL,


	/**
	 * Sets the current playback volume, as a number in the range 0.0 to 1.0,
	 * where 0.0 is the quietest and 1.0 the loudest.
	 * 
	 */
	setVolume : vjo.NEEDS_IMPL,


	/**
	 * Shows the controls of the media element.
	 * 
	 */
	showControls : vjo.NEEDS_IMPL
})
.endType();