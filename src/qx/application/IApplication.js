/**
 * This interface defines what an application class has to implement.
 */
//>public
vjo.itype('qx.application.IApplication')
.protos({
	/**
	 * Called in the document.beforeunload event of the browser. If the method
	 * returns a string value, the user will be asked by the browser, whether
	 * he really wants to leave the page. The return string will be displayed in
	 * the message box.
	 * 
	 */
	close : vjo.NEEDS_IMPL,


	/**
	 * Called when the application&#8217;s main method was executed to handle
	 * &#8220;final&#8221; tasks like rendering or retrieving data.
	 * 
	 */
	finalize : vjo.NEEDS_IMPL,


	/**
	 * Called when the application relevant classes are loaded and ready.
	 * 
	 */
	main : vjo.NEEDS_IMPL,


	/**
	 * This method contains the last code which is run inside the page and may contain cleanup code.
	 * 
	 */
	terminate : vjo.NEEDS_IMPL
})
.endType();