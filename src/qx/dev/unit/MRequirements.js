/**
 * Common requirement checks for unit tests. Example:
 * 
 * 
 * testBackend : function()
 * {
 *   this.require(["http", "php"]); // test will be skipped unless all conditions are met
 *   // test code goes here
 * }

 */
//>public
vjo.mtype('qx.dev.unit.MRequirements')
.mixin('qx.dev.unit.MRequirementsBasic')
.protos({
	/**
	 * Checks if the application is running in Google Chrome
	 * 
	 */
	hasChrome : vjo.NEEDS_IMPL,


	/**
	 * Checks if the application is running in Firefox
	 * 
	 */
	hasFirefox : vjo.NEEDS_IMPL,


	/**
	 * Checks if the application is running in a browser using the Gecko engine
	 * 
	 */
	hasGecko : vjo.NEEDS_IMPL,


	/**
	 * Checks if the application extends qx.application.Standalone
	 * 
	 */
	hasGuiApp : vjo.NEEDS_IMPL,


	/**
	 * Checks if the application has been loaded over HTTP.
	 * 
	 */
	hasHttp : vjo.NEEDS_IMPL,


	/**
	 * Checks if the application is running in Internet Explorer
	 * 
	 */
	hasIe : vjo.NEEDS_IMPL,


	/**
	 * Checks if the application extends qx.application.Inline
	 * 
	 */
	hasInlineApp : vjo.NEEDS_IMPL,


	/**
	 * Checks if the application is running in a browser using the MSHTML engine
	 * 
	 */
	hasMshtml : vjo.NEEDS_IMPL,


	/**
	 * Checks if the application extends qx.application.Native
	 * 
	 */
	hasNativeApp : vjo.NEEDS_IMPL,


	/**
	 * Checks if the application is controlled by Selenium
	 * 
	 */
	hasNoSelenium : vjo.NEEDS_IMPL,


	/**
	 * Checks if the application is running in a browser using the Opera engine
	 * 
	 */
	hasOpera : vjo.NEEDS_IMPL,


	/**
	 * Checks if the server supports PHP.
	 * 
	 */
	hasPhp : vjo.NEEDS_IMPL,


	/**
	 * Checks if the application is running in a browser using the Webkit engine
	 * 
	 */
	hasWebkit : vjo.NEEDS_IMPL
})
.endType();