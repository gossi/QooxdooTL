/**
 * Client-side wrapper of a REST resource.
 * 
 * Each instance represents a resource in terms of REST. A number of actions
 * (usually HTTP methods) unique to the resource can be defined and invoked.
 * A resource with its actions is configured declaratively by passing a resource
 * description to the constructor, or programatically using {@link #map}.
 * 
 * Each action is associated to a route. A route is a combination of method,
 * URL pattern and optional parameter constraints.
 * 
 * An action is invoked by calling a method with the same name. When a URL
 * pattern of a route contains positional parameters, those parameters must be
 * passed when invoking the associated action. Also, constraints defined in the
 * route must be satisfied.
 * 
 * When an action is invoked, a request is configured according to the associated
 * route, is passed the URL parameters, request body data, and finally send.
 * What kind of request is send can be configured by overwriting {@link #_getRequest}.
 * 
 * No contraints on the action&#8217;s name or the scope of the URLs are imposed. However,
 * if you want to follow RESTful design patterns it is recommended to name actions
 * the same as the HTTP action.
 * 
 * 
 * var description = {
 *  "get": { method: "GET", url: "/photo/{id}" },
 *  "put": { method: "PUT", url: "/photo/{id}"},
 *  "post": { method: "POST", url: "/photos/"}
 * };
 * var photo = new qx.io.rest.Resource(description);
 * // Can also be written: photo.invoke("get", {id: 1});
 * photo.get({id: 1});
 * 
 * // Additionally sets request data
 * // In a RESTful environment this creates a new resource with the given 'id'
 * photo.put({id: 1}, {title: "Monkey"});
 * 
 * // Additionally sets request data
 * // In a RESTful environment this adds a new resource to the resource collection 'photos'
 * photo.post(null, {title: "Monkey"});
 * 
 * 
 * To check for existence of URL parameters or constrain them to a certain format, you
 * can add a check property to the description. See {@link #map} for details.
 * 
 * 
 * var description = {
 *  "get": { method: "GET", url: "/photo/{id}", check: { id: /\d+/ } }
 * };
 * var photo = new qx.io.rest.Resource(description);
 * // photo.get({id: "FAIL"});
 * // -- Error: "Parameter 'id' is invalid"
 * 
 * 
 * If your description happens to use the same action more than once, consider
 * defining another resource.
 * 
 * 
 * var description = {
 *  "get": { method: "GET", url: "/photos"},
 * };
 * // Distinguish "photo" (singular) and "photos" (plural) resource
 * var photos = new qx.io.rest.Resource(description);
 * photos.get();
 * 
 * 
 * Basically, all routes of a resource should point to the same URL (resource in
 * terms of HTTP). One acceptable exception of this constraint are resources where
 * required parameters are part of the URL (/photos/1/) or filter
 * resources. For instance:
 * 
 * 
 * var description = {
 *  "get": { method: "GET", url: "/photos/{tag}" }
 * };
 * var photos = new qx.io.rest.Resource(description);
 * photos.get();
 * photos.get({tag: "wildlife"})
 * 
 * 
 * Strictly speaking, the photos instance represents two distinct resources
 * and could therefore just as well mapped to two distinct resources (for instance,
 * named photos and photosTagged). What style to choose depends on the kind of data
 * returned. For instance, it seems sensible to stick with one resource if the filter
 * only limits the result set (i.e. the invidual results have the same properties).
 * 
 * In order to respond to successful (or erroneous) invocations of actions,
 * either listen to the generic &#8220;success&#8221; or &#8220;error&#8221; event and get the action
 * from the event data, or listen to action specific events defined at runtime.
 * Action specific events follow the pattern &#8221;&lt;action&gt;Success&#8221; and
 * &#8221;&lt;action&gt;Error&#8221;, e.g. &#8220;indexSuccess&#8221;.
 */
//>public
vjo.ctype('qx.io.rest.Resource')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Check parameters.
	 * 
	 */
	__checkParameters : vjo.NEEDS_IMPL,


	/**
	 * Serialize data to JSON when content type indicates.
	 * 
	 */
	__configureJsonRequest : vjo.NEEDS_IMPL,


	/**
	 * Configure request.
	 * 
	 */
	__configureRequest : vjo.NEEDS_IMPL,


	/**
	 * Create request.
	 * 
	 */
	__createRequest : vjo.NEEDS_IMPL,


	/**
	 * Declare event at runtime.
	 * 
	 */
	__declareEvent : vjo.NEEDS_IMPL,


	/**
	 * Map actions from description.
	 * 
	 * Allows to decoratively define routes.
	 * 
	 */
	__mapFromDescription : vjo.NEEDS_IMPL,


	/**
	 * Get request.
	 * 
	 * May be overriden to change type of request.
	 * 
	 */
	_getRequest : vjo.NEEDS_IMPL,


	/**
	 * Get request configuration for action and parameters.
	 * 
	 * This is were placeholders are replaced with parameters.
	 * 
	 */
	_getRequestConfig : vjo.NEEDS_IMPL,


	/**
	 * Override to adjust the throttle count.
	 * 
	 */
	_getThrottleCount : vjo.NEEDS_IMPL,


	/**
	 * Override to adjust the throttle limit.
	 * 
	 */
	_getThrottleLimit : vjo.NEEDS_IMPL,


	/**
	 * Abort action.
	 * 
	 * Example:
	 * 
	 * 
	 *   // Abort all invocations of action
	 *   res.get({id: 1});
	 *   res.get({id: 2});
	 *   res.abort();
	 * 
	 *   // Abort specific invocation of action (by id)
	 *   var actionId = res.get({id: 1});
	 *   res.abort(actionId);

	 * 
	 */
	abort : vjo.NEEDS_IMPL,


	/**
	 * Configure request.
	 * 
	 */
	configureRequest : vjo.NEEDS_IMPL,


	/**
	 * Invoke action with parameters.
	 * 
	 * Internally called by actions dynamically created.
	 * 
	 * May be overriden to customize action and parameter handling.
	 * 
	 */
	invoke : vjo.NEEDS_IMPL,


	/**
	 * Long-poll action.
	 * 
	 * Use Ajax long-polling to continously fetch a resource as soon as the
	 * server signals new data. The server determines when new data is available,
	 * while the client keeps open a request. Requires configuration on the
	 * server side. Basically, the server must not close a connection until
	 * new data is available. For a high level introduction to long-polling,
	 * refer to 
	 * Ajax with long polling.
	 * 
	 * Uses {@link #refresh} internally. Make sure you understand the
	 * implications of IE&#8217;s tendency to cache overly agressive.
	 * 
	 * Note no interval is given on the client side.
	 * 
	 */
	longPoll : vjo.NEEDS_IMPL,


	/**
	 * Map action to combination of method and URL pattern.
	 * 
	 * 
	 *   res.map("get", "GET", "/photos/{id}", {id: /\d+/});
	 * 
	 *   // GET /photos/123
	 *   res.get({id: "123"});

	 * 
	 */
	map : vjo.NEEDS_IMPL,


	/**
	 * Periodically invoke action.
	 * 
	 * Replays parameters given when action was invoked originally. When the
	 * action was not yet invoked and requires parameters, parameters must be
	 * given.
	 * 
	 * Please note that IE tends to cache overly agressive. One work-around is
	 * to disable caching on the client side by configuring the request with
	 * setCache(false). If you control the server, a better
	 * work-around is to include appropriate headers to explicitly control
	 * caching. This way you still avoid requests that can be correctly answered
	 * from cache (e.g. when nothing has changed since the last poll). Please
	 * refer to 
	 * XMLHttpRequest Caching Test for available options.
	 * 
	 */
	poll : vjo.NEEDS_IMPL,


	/**
	 * Resend request associated to action.
	 * 
	 * Replays parameters given when action was invoked originally.
	 * 
	 */
	refresh : vjo.NEEDS_IMPL,


	/**
	 * Set base URL.
	 * 
	 * The base URL is prepended to the URLs given in the description.
	 * Changes affect all future invocations.
	 * 
	 */
	setBaseUrl : vjo.NEEDS_IMPL
})
.endType();