/**
 * Each focus root delegates the focus handling to instances of the FocusHandler.
 */
//>public
vjo.ctype('qx.ui.core.FocusHandler')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Collects all widgets which are after the given widget in
	 * the given parent widget. Append all found children to the
	 * list.
	 * 
	 */
	__collectAllAfter : vjo.NEEDS_IMPL,


	/**
	 * Collects all widgets which are before the given widget in
	 * the given parent widget. Append all found children to the
	 * list.
	 * 
	 */
	__collectAllBefore : vjo.NEEDS_IMPL,


	/**
	 * Compares the order of two widgets
	 * 
	 */
	__compareTabOrder : vjo.NEEDS_IMPL,


	/**
	 * Finds the next focus root, starting with the given widget.
	 * 
	 */
	__findFocusRoot : vjo.NEEDS_IMPL,


	/**
	 * Find first (positioned) widget. (Sorted by coordinates, zIndex, etc.)
	 * 
	 */
	__getFirst : vjo.NEEDS_IMPL,


	/**
	 * Returns the first widget.
	 * 
	 */
	__getFirstWidget : vjo.NEEDS_IMPL,


	/**
	 * Find last (positioned) widget. (Sorted by coordinates, zIndex, etc.)
	 * 
	 */
	__getLast : vjo.NEEDS_IMPL,


	/**
	 * Returns the last widget.
	 * 
	 */
	__getLastWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the widget after the given one.
	 * 
	 */
	__getWidgetAfter : vjo.NEEDS_IMPL,


	/**
	 * Returns the widget before the given one.
	 * 
	 */
	__getWidgetBefore : vjo.NEEDS_IMPL,


	/**
	 * Internal event handler for TAB key.
	 * 
	 */
	__onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Internal event handler for activate event.
	 * 
	 */
	_onActivate : vjo.NEEDS_IMPL,


	/**
	 * Internal event handler for deactivate event.
	 * 
	 */
	_onDeactivate : vjo.NEEDS_IMPL,


	/**
	 * Internal event handler for focusin event.
	 * 
	 */
	_onFocusIn : vjo.NEEDS_IMPL,


	/**
	 * Internal event handler for focusout event.
	 * 
	 */
	_onFocusOut : vjo.NEEDS_IMPL,


	/**
	 * Registers a widget as a focus root. A focus root comes
	 * with an separate tab sequence handling.
	 * 
	 */
	addRoot : vjo.NEEDS_IMPL,


	/**
	 * Connects to a top-level root element (which initially receives
	 * all events of the root). This are normally all page and application
	 * roots, but no inline roots (they are typically sitting inside
	 * another root).
	 * 
	 */
	connectTo : vjo.NEEDS_IMPL,


	/**
	 * Get the active widget
	 * 
	 */
	getActiveWidget : vjo.NEEDS_IMPL,


	/**
	 * Get the focused widget
	 * 
	 */
	getFocusedWidget : vjo.NEEDS_IMPL,


	/**
	 * Whether the given widget is the active one
	 * 
	 */
	isActive : vjo.NEEDS_IMPL,


	/**
	 * Whether the given widget is the focused one.
	 * 
	 */
	isFocused : vjo.NEEDS_IMPL,


	/**
	 * Whether the given widgets acts as a focus root.
	 * 
	 */
	isFocusRoot : vjo.NEEDS_IMPL,


	/**
	 * Deregisters a previous added widget.
	 * 
	 */
	removeRoot : vjo.NEEDS_IMPL
})
.endType();