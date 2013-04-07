/**
 * Very basic navigation manager. Still work in progress.
 * 
 * Define routes to react on certain GET / POST / DELETE / PUT operations.
 * 
 * 
 * GET is triggered when the hash value of the url is changed. Can be called
 *   manually by calling the {@link #executeGet} method.
 * POST / DELETE / PUT has to be triggered manually right now (will be changed later)
 *    by calling the {@link #executePost}, {@link #executeDelete}, {@link #executePut} method.
 * 
 * 
 * This manager can also be used to provide browser history.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var nm = qx.ui.mobile.navigation.Manager.getInstance();
 * 
 *   // show the start page, when no hash is given or the hash is "#/"
 *   nm.onGet("/", function(data) {
 *     startPage.show();
 *   },this);
 * 
 *   // whenever the url /address is called show the addressbook page.
 *   nm.onGet("/address", function(data)
 *   {
 *     addressBookPage.show();
 *   },this);
 * 
 *   // address with the parameter "id"
 *   nm.onGet("/address/:id", function(data)
 *   {
 *     addressPage.show();
 *     model.loadAddress(data.params.id);
 *   },this);
 * 
 *   // Alternative you can use regExp for a route
 *   nm.onGet(/address\/(.*)/, function(data)
 *   {
 *     addressPage.show();
 *     model.loadAddress(data.params.0);
 *   },this);
 * 
 *   // make sure that the data is always loaded
 *   nm.onGet("/address.*", function(data)
 *   {
 *     if (!model.isLoaded()) {
 *       model.loadAddresses();
 *     }
 *   },this);
 * 
 *   // update the address
 *   nm.onPost("/address/:id, function(data)
 *   {
 *     model.updateAddress(data.params.id);
 *   },this);
 * 
 *   // delete the address and navigate back
 *   nm.onDelete("/address/:id, function(data)
 *   {
 *     model.deleteAddress(data.params.id);
 *     nm.executeGet("/address", {reverse:true});
 *   },this);
 * 
 * 
 * This example defines different routes to handle navigation events.
 */
//>public
vjo.ctype('qx.ui.mobile.navigation.Manager')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adds the custom data of a given path to the history.
	 * 
	 */
	__addToHistory : vjo.NEEDS_IMPL,


	/**
	 * Returns a history entry for a certain path.
	 * 
	 */
	__getFromHistory : vjo.NEEDS_IMPL,


	/**
	 * Hash change event handler.
	 * 
	 */
	__onChangeHash : vjo.NEEDS_IMPL,


	/**
	 * Adds a route handler for a certain operation.
	 * 
	 */
	_addRoute : vjo.NEEDS_IMPL,


	/**
	 * Executes a certain operation with a given path. Informs all
	 * route handlers that match with the path.
	 * 
	 */
	_execute : vjo.NEEDS_IMPL,


	/**
	 * Helper function wich executes the get operation and informs all matching route handler.
	 * 
	 */
	_executeGet : vjo.NEEDS_IMPL,


	/**
	 * Executes a certain route. Checks if the route matches the given path and
	 * executes the stored handler of the route.
	 * 
	 */
	_executeRoute : vjo.NEEDS_IMPL,


	/**
	 * Executes all given routes for a certain operation. Checks all routes if they match with the given path and
	 * executes the stored handler of the matching route.
	 * 
	 */
	_executeRoutes : vjo.NEEDS_IMPL,


	/**
	 * Returns all routes.
	 * 
	 */
	_getRoutes : vjo.NEEDS_IMPL,


	/**
	 * Executes the delete operation and informs all matching route handler.
	 * 
	 */
	executeDelete : vjo.NEEDS_IMPL,


	/**
	 * Executes the get operation and informs all matching route handler.
	 * 
	 */
	executeGet : vjo.NEEDS_IMPL,


	/**
	 * Executes the post operation and informs all matching route handler.
	 * 
	 */
	executePost : vjo.NEEDS_IMPL,


	/**
	 * Executes the put operation and informs all matching route handler.
	 * 
	 */
	executePut : vjo.NEEDS_IMPL,


	/**
	 * Returns the current path behind the # hash.
	 * 
	 */
	getCurrentGetPath : vjo.NEEDS_IMPL,


	/**
	 * Adds a route handler for the &#8220;any&#8221; operation. The &#8220;any&#8221; operation is called
	 * before all other operations.
	 * 
	 */
	onAny : vjo.NEEDS_IMPL,


	/**
	 * Adds a route handler for the &#8220;delete&#8221; operation. The route gets called
	 * when the {@link #executeDelete} method found a match.
	 * 
	 */
	onDelete : vjo.NEEDS_IMPL,


	/**
	 * Adds a route handler for the &#8220;get&#8221; operation. The route gets called
	 * when the {@link #executeGet} method found a match.
	 * 
	 */
	onGet : vjo.NEEDS_IMPL,


	/**
	 * Adds a route handler for the &#8220;post&#8221; operation. The route gets called
	 * when the {@link #executePost} method found a match.
	 * 
	 */
	onPost : vjo.NEEDS_IMPL,


	/**
	 * Adds a route handler for the &#8220;put&#8221; operation. The route gets called
	 * when the {@link #executePut} method found a match.
	 * 
	 */
	onPut : vjo.NEEDS_IMPL,


	/**
	 * Removes a registered route by the given id.
	 * 
	 */
	remove : vjo.NEEDS_IMPL
})
.endType();