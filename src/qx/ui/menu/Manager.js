/**
 * This singleton manages visible menu instances and supports some
 * core features to schedule menu open/close with timeout support.
 * 
 * It also manages the whole keyboard support for the currently
 * registered widgets.
 * 
 * The zIndex order is also managed by this class.
 */
//>public
vjo.ctype('qx.ui.menu.Manager')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Query engine for menu children.
	 * 
	 */
	_getChild : vjo.NEEDS_IMPL,


	/**
	 * Returns an instance of a menu button if the given widget is a child
	 * 
	 */
	_getMenuButton : vjo.NEEDS_IMPL,


	/**
	 * Whether the given widget is inside any Menu instance.
	 * 
	 */
	_isInMenu : vjo.NEEDS_IMPL,


	/**
	 * Event listener for a pending close request. Configured to the interval
	 * of the current menu to close.
	 * 
	 */
	_onCloseInterval : vjo.NEEDS_IMPL,


	/**
	 * Event handler for all keypress events. Delegates the event to the more
	 * specific methods defined in this class.
	 * 
	 * Currently processes the keys: Up, Down,
	 * Left, Right and Enter.
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Event handler for Down key
	 * 
	 */
	_onKeyPressDown : vjo.NEEDS_IMPL,


	/**
	 * Event handler for Enter key
	 * 
	 */
	_onKeyPressEnter : vjo.NEEDS_IMPL,


	/**
	 * Event handler for Left key
	 * 
	 */
	_onKeyPressLeft : vjo.NEEDS_IMPL,


	/**
	 * Event handler for Right key
	 * 
	 */
	_onKeyPressRight : vjo.NEEDS_IMPL,


	/**
	 * Event handler for Space key
	 * 
	 */
	_onKeyPressSpace : vjo.NEEDS_IMPL,


	/**
	 * Event handler for Up key
	 * 
	 */
	_onKeyPressUp : vjo.NEEDS_IMPL,


	/**
	 * Event handler for all keyup/keydown events. Stops all events
	 * when any menu is opened.
	 * 
	 */
	_onKeyUpDown : vjo.NEEDS_IMPL,


	/**
	 * Event handler for mousedown events
	 * 
	 */
	_onMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Event handler for mousewheel which hides all windows on scroll.
	 * 
	 */
	_onMouseWheel : vjo.NEEDS_IMPL,


	/**
	 * Event listener for a pending open request. Configured to the interval
	 * of the current menu to open.
	 * 
	 */
	_onOpenInterval : vjo.NEEDS_IMPL,


	/**
	 * Adds a menu to the list of visible menus.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * When the given menu is scheduled for close this pending
	 * request is canceled.
	 * 
	 */
	cancelClose : vjo.NEEDS_IMPL,


	/**
	 * When the given menu is scheduled for open this pending
	 * request is canceled.
	 * 
	 */
	cancelOpen : vjo.NEEDS_IMPL,


	/**
	 * Returns the menu which was opened at last (which
	 * is the active one this way)
	 * 
	 */
	getActiveMenu : vjo.NEEDS_IMPL,


	/**
	 * Hides all currently opened menus.
	 * 
	 */
	hideAll : vjo.NEEDS_IMPL,


	/**
	 * Remove a menu from the list of visible menus.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Schedules the given menu to be closed after the
	 * {@link qx.ui.menu.Menu#closeInterval} configured by the
	 * menu instance itself.
	 * 
	 */
	scheduleClose : vjo.NEEDS_IMPL,


	/**
	 * Schedules the given menu to be opened after the
	 * {@link qx.ui.menu.Menu#openInterval} configured by the
	 * menu instance itself.
	 * 
	 */
	scheduleOpen : vjo.NEEDS_IMPL
})
.endType();