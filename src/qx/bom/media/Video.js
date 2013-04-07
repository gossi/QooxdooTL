/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * Media object for playing videos.
 */
//>public
vjo.ctype('qx.bom.media.Video')
.inherits('qx.bom.media.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Gets the height of the video element.
	 * 
	 */
	getHeight : vjo.NEEDS_IMPL,


	/**
	 * Gets the poster of the video.
	 * 
	 */
	getPoster : vjo.NEEDS_IMPL,


	/**
	 * Gets the height of the video.
	 * 
	 */
	getVideoHeight : vjo.NEEDS_IMPL,


	/**
	 * Gets the width of the video.
	 * 
	 */
	getVideoWidth : vjo.NEEDS_IMPL,


	/**
	 * Gets the width of the video element.
	 * 
	 */
	getWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the height of the video element.
	 * 
	 */
	setHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the poster of the video.
	 * 
	 */
	setPoster : vjo.NEEDS_IMPL,


	/**
	 * Sets the width of the video element.
	 * 
	 */
	setWidth : vjo.NEEDS_IMPL
})
.endType();