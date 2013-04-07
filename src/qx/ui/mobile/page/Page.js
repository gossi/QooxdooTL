/**
 * A page is a widget which provides a screen with which users
 * can interact in order to do something. Most times a page provides a single task
 * or a group of related tasks.
 * 
 * A qooxdoo mobile application is usually composed of one or more loosely bound
 * pages. Typically there is one page that presents the &#8220;main&#8221; view.
 * 
 * Pages can have one or more child widgets from the {@link qx.ui.mobile}
 * namespace. Normally a page provides a {@link qx.ui.mobile.navigationbar.NavigationBar}
 * for the navigation between pages.
 * 
 * To navigate between two pages, just call the {@link #show} method of the page
 * that should be shown. Depending on the used page manager a page transition will be animated.
 * There are several animations available. Have
 * a look at the {@link qx.ui.mobile.page.Manager} manager or {@link qx.ui.mobile.layout.Card} card layout for more information.
 * 
 * A page has predefined lifecycle methods that get called by the used page manager
 * when a page gets shown. Each time another page is requested to be shown the currently shown page
 * is stopped. The other page, will be, if shown for the first time, initialized and started
 * afterwards. For all called lifecycle methods an event is fired.
 * 
 * Call of the {@link #show} method triggers the following lifecycle methods:
 * 
 * 
 * initialize: Initializes the page to show
 * start: Gets called when the page to show is started
 * stop:  Stops the current page
 * 
 * 
 * IMPORTANT: Define all child widgets of a page when the {@link #initialize} lifecycle
 * method is called, either by listening to the {@link #initialize} event or overriding
 * the {@link #_initialize} method. This is because a page can be instanced during
 * application startup and would then decrease performance when the widgets would be
 * added during constructor call. The initialize event and the
 * {@link #_initialize} lifecycle method are only called when the page is shown
 * for the first time.
 */
//>public
vjo.ctype('qx.ui.mobile.page.Page')
.inherits('qx.ui.mobile.container.Composite')
.mixin('qx.ui.mobile.core.MResize')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Override this method if you want to perform a certain action when back
	 * is called.
	 * 
	 */
	_back : vjo.NEEDS_IMPL,


	/**
	 * Override this method if you would like to perform a certain action when initialize
	 * is called.
	 * 
	 */
	_initialize : vjo.NEEDS_IMPL,


	/**
	 * Override this method if you would like to perform a certain action when pause
	 * is called.
	 * 
	 */
	_pause : vjo.NEEDS_IMPL,


	/**
	 * Override this method if you would like to perform a certain action when resume
	 * is called.
	 * 
	 */
	_resume : vjo.NEEDS_IMPL,


	/**
	 * Override this method if you would like to perform a certain action when start
	 * is called.
	 * 
	 */
	_start : vjo.NEEDS_IMPL,


	/**
	 * Override this method if you would like to perform a certain action when stop
	 * is called.
	 * 
	 */
	_stop : vjo.NEEDS_IMPL,


	/**
	 * Fires the back event. Call this method if you want to request
	 * a back action. For Android PhoneGap applications this method gets called
	 * by the used page manager when the back button was pressed. Return true
	 * to exit the application.
	 * 
	 */
	back : vjo.NEEDS_IMPL,


	/**
	 */
	exclude : vjo.NEEDS_IMPL,


	/**
	 * Lifecycle method. Called by the page manager when the page is shown.
	 * Fires the initialize event. You should create and add all your
	 * child widgets of the view,  either by listening to the {@link #initialize} event or overriding
	 * the {@link #_initialize} method. This is because a page can be instanced during
	 * application startup and would then decrease performance when the widgets would be
	 * added during constructor call. The {@link #_initialize} lifecycle method and the
	 * initialize are only called once when the page is shown for the first time.
	 * 
	 */
	initialize : vjo.NEEDS_IMPL,


	/**
	 * Returns the status of the initialization of the page.
	 * 
	 */
	isInitialized : vjo.NEEDS_IMPL,


	/**
	 * Only used by Android PhoneGap applications. Called by the used page manager
	 * when the menu button was pressed. Fires the menu event.
	 * 
	 */
	menu : vjo.NEEDS_IMPL,


	/**
	 * Lifecycle method. Not used right now. Should be called when the current page
	 * is interrupted, e.g. by a dialog, so that page view updates can be interrupted.
	 * Fires the pause event.
	 * 
	 */
	pause : vjo.NEEDS_IMPL,


	/**
	 * Lifecycle method. Not used right now. Should be called when the current page
	 * is resuming from a interruption, e.g. when a dialog is closed, so that page
	 * can resume updating the view.
	 * Fires the resume event.
	 * 
	 */
	resume : vjo.NEEDS_IMPL,


	/**
	 */
	show : vjo.NEEDS_IMPL,


	/**
	 * Lifecycle method. Called by the page manager after the {@link #initialize}
	 * method when the page is shown. Fires the start event. You should
	 * register all your event listener when this event occurs, so that no page
	 * updates are down when page is not shown.
	 * 
	 */
	start : vjo.NEEDS_IMPL,


	/**
	 * Lifecycle method. Called by the page manager when another page is shown.
	 * Fires the stop event. You should unregister all your event
	 * listener when this event occurs, so that no page updates are down when page is not shown.
	 * 
	 */
	stop : vjo.NEEDS_IMPL
})
.endType();