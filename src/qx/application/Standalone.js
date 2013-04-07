/**
 * For a GUI application that looks &amp; feels like native desktop application
 * (often called &#8220;RIA&#8221; &#8211; Rich Internet Application).
 * 
 * Such a stand-alone application typically creates and updates all content
 * dynamically. Often it is called a &#8220;single-page application&#8221;, since the
 * document itself is never reloaded or changed. Communication with the server
 * is done with AJAX.
 */
//>public
vjo.ctype('qx.application.Standalone')
.inherits('qx.application.AbstractGui')
.protos({
	/**
	 */
	_createRootWidget : vjo.NEEDS_IMPL
})
.endType();