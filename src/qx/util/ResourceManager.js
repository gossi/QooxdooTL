/**
 * Contains information about images (size, format, clipping, ...) and
 * other resources like CSS files, local data, ...
 */
//>public
vjo.ctype('qx.util.ResourceManager')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the format of the combined image (png, gif, ...), if the given
	 * resource identifier is an image contained in one, or the empty string
	 * otherwise.
	 * 
	 */
	getCombinedFormat : vjo.NEEDS_IMPL,


	/**
	 * Get information about an resource.
	 * 
	 */
	getData : vjo.NEEDS_IMPL,


	/**
	 * Returns the format of the given resource ID,
	 * when it is not a known image null
	 * is returned.
	 * 
	 */
	getImageFormat : vjo.NEEDS_IMPL,


	/**
	 * Returns the height of the given resource ID,
	 * when it is not a known image 0 is
	 * returned.
	 * 
	 */
	getImageHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the width of the given resource ID,
	 * when it is not a known image 0 is
	 * returned.
	 * 
	 */
	getImageWidth : vjo.NEEDS_IMPL,


	/**
	 * Whether the registry has information about the given resource.
	 * 
	 */
	has : vjo.NEEDS_IMPL,


	/**
	 * Construct a data: URI for an image resource.
	 * 
	 * Constructs a data: URI for a given resource id, if this resource is
	 * contained in a base64 combined image. If this is not the case (e.g.
	 * because the combined image has not been loaded yet), returns the direct
	 * URI to the image file itself.
	 * 
	 */
	toDataUri : vjo.NEEDS_IMPL,


	/**
	 * Converts the given resource ID to a full qualified URI
	 * 
	 */
	toUri : vjo.NEEDS_IMPL
})
.endType();