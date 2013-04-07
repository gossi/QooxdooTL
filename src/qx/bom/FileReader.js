/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * FileReaders allow retrieving the data from a local file, after the file
 * name was selected by an &lt;input type=&#8220;file&#8221;&gt; element.
 * 
 * For more information see:
 * http://www.w3.org/TR/FileAPI/
 */
//>public
vjo.ctype('qx.bom.FileReader')
.inherits('qx.core.Object')
.protos({
	/**
	 * Create a new instance.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * &#8220;abort&#8221; handler
	 * 
	 */
	_handleAbort : vjo.NEEDS_IMPL,


	/**
	 * &#8220;error&#8221; handler
	 * 
	 */
	_handleError : vjo.NEEDS_IMPL,


	/**
	 * &#8220;load&#8221; handler
	 * 
	 */
	_handleLoad : vjo.NEEDS_IMPL,


	/**
	 * &#8220;loadend&#8221; handler
	 * 
	 */
	_handleLoadEnd : vjo.NEEDS_IMPL,


	/**
	 * &#8220;loadstart&#8221; handler
	 * 
	 */
	_handleLoadStart : vjo.NEEDS_IMPL,


	/**
	 * &#8220;progress&#8221; handler
	 * 
	 */
	_handleProgress : vjo.NEEDS_IMPL,


	/**
	 * Begin reading from the file referenced by the specified file
	 * object. This is an asynchronous request. When the file is fully loaded,
	 * the &#8220;load&#8221; event will be fired.
	 * 
	 * The data will be provided in a binary format where each byte is in the
	 * range [0,255].
	 * 
	 * NOTE: On FireFox, this method works if the page was loaded via the
	 * file:// protocol. In Chrome, it does not.
	 * 
	 */
	readAsBinaryString : vjo.NEEDS_IMPL,


	/**
	 * Begin reading from the file referenced by the specified file
	 * object. This is an asynchronous request. When the file is fully loaded,
	 * the &#8220;load&#8221; event will be fired.
	 * 
	 * The data is returned in DataURL format.
	 * 
	 * NOTE: On FireFox, this method works if the page was loaded via the
	 * file:// protocol. In Chrome, it does not.
	 * 
	 */
	readAsDataURL : vjo.NEEDS_IMPL,


	/**
	 * Begin reading from the file referenced by the specified file
	 * object. This is an asynchronous request. When the file is fully loaded,
	 * the &#8220;load&#8221; event will be fired.
	 * 
	 * The data will be provided as text, in the specified encoding.
	 * 
	 * NOTE: On FireFox, this method works if the page was loaded via the
	 * file:// protocol. In Chrome, it does not.
	 * 
	 */
	readAsText : vjo.NEEDS_IMPL
})
.endType();