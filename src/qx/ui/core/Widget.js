/**
 * This is the base class for all widgets.
 * 
 * A widget consists of at least three HTML elements. The container element,
 * which is
 * added to the parent widget has two child Element: The &#8220;decoration&#8221; and the
 * &#8220;content&#8221; element. The decoration element has a lower z-Index and contains
 * markup to render the widget&#8217;s background and border using an implementation
 * of {@link qx.ui.decoration.IDecorator}.The content element is positioned
 * inside the &#8220;container&#8221; element to respect paddings and contains the &#8220;real&#8221;
 * widget element.
 * 
 * 
 * -container------------
 * |                    |
 * |  -decoration----   |
 * |  | -content----|-  |
 * |  | |           ||  |
 * |  --|------------|  |
 * |    --------------  |
 * |                    |
 * ----------------------
 * 
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.core.Widget')
.inherits('qx.ui.core.LayoutItem')
.mixin('qx.locale.MTranslation')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Convenience function to add a child widget. It will insert the child to
	 * the parent widget and schedule a layout update.
	 * 
	 */
	__addHelper : vjo.NEEDS_IMPL,


	/**
	 * Detects whether the move from decorator a to b
	 * results into modified insets.
	 * 
	 */
	__checkInsetsModified : vjo.NEEDS_IMPL,


	/**
	 * Create the widget&#8217;s content HTML element.
	 * 
	 */
	__createContentElement : vjo.NEEDS_IMPL,


	/**
	 * Convenience function to remove a child widget. It will remove it
	 * from the parent widget and schedule a layout update.
	 * 
	 */
	__removeHelper : vjo.NEEDS_IMPL,


	/**
	 * Adds a new child widget.
	 * 
	 * The supported keys of the layout options map depend on the layout manager
	 * used to position the widget. The options are documented in the class
	 * documentation of each layout manager {@link qx.ui.layout}.
	 * 
	 */
	_add : vjo.NEEDS_IMPL,


	/**
	 * Add a widget after another already inserted widget
	 * 
	 */
	_addAfter : vjo.NEEDS_IMPL,


	/**
	 * Add a child widget at the specified index
	 * 
	 */
	_addAt : vjo.NEEDS_IMPL,


	/**
	 * Add a widget before another already inserted widget
	 * 
	 */
	_addBefore : vjo.NEEDS_IMPL,


	/**
	 * This method gets called each time after a child widget was added and can
	 * be overridden to get notified about child adds.
	 * 
	 */
	_afterAddChild : vjo.NEEDS_IMPL,


	/**
	 * This method gets called each time after a child widget was removed and
	 * can be overridden to get notified about child removes.
	 * 
	 */
	_afterRemoveChild : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property appearance.
	 * 
	 * For further details take a look at the property definition: {@link #appearance}.
	 * 
	 */
	_applyAppearance : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property backgroundColor.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	_applyBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property contextMenu.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenu}.
	 * 
	 */
	_applyContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property cursor.
	 * 
	 * For further details take a look at the property definition: {@link #cursor}.
	 * 
	 */
	_applyCursor : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property decorator.
	 * 
	 * For further details take a look at the property definition: {@link #decorator}.
	 * 
	 */
	_applyDecorator : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property draggable.
	 * 
	 * For further details take a look at the property definition: {@link #draggable}.
	 * 
	 */
	_applyDraggable : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property droppable.
	 * 
	 * For further details take a look at the property definition: {@link #droppable}.
	 * 
	 */
	_applyDroppable : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property focusable.
	 * 
	 * For further details take a look at the property definition: {@link #focusable}.
	 * 
	 */
	_applyFocusable : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property font.
	 * 
	 * For further details take a look at the property definition: {@link #font}.
	 * 
	 */
	_applyFont : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property keepActive.
	 * 
	 * For further details take a look at the property definition: {@link #keepActive}.
	 * 
	 */
	_applyKeepActive : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property keepFocus.
	 * 
	 * For further details take a look at the property definition: {@link #keepFocus}.
	 * 
	 */
	_applyKeepFocus : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property nativeContextMenu.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	_applyNativeContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property opacity.
	 * 
	 * For further details take a look at the property definition: {@link #opacity}.
	 * 
	 */
	_applyOpacity : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties paddingBottom, paddingLeft, paddingRight and paddingTop.
	 * 
	 * For further details take a look at the property definitions: {@link #paddingBottom}, {@link #paddingLeft}, {@link #paddingRight} and {@link #paddingTop}.
	 * 
	 */
	_applyPadding : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selectable.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	_applySelectable : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property shadow.
	 * 
	 * For further details take a look at the property definition: {@link #shadow}.
	 * 
	 */
	_applyShadow : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property tabIndex.
	 * 
	 * For further details take a look at the property definition: {@link #tabIndex}.
	 * 
	 */
	_applyTabIndex : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property textColor.
	 * 
	 * For further details take a look at the property definition: {@link #textColor}.
	 * 
	 */
	_applyTextColor : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property toolTipText.
	 * 
	 * For further details take a look at the property definition: {@link #toolTipText}.
	 * 
	 */
	_applyToolTipText : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property visibility.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	_applyVisibility : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property zIndex.
	 * 
	 * For further details take a look at the property definition: {@link #zIndex}.
	 * 
	 */
	_applyZIndex : vjo.NEEDS_IMPL,


	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 * Force the creation of the given child control by ID.
	 * 
	 * Do not override this method! Override {@link #_createChildControlImpl}
	 * instead if you need to support new controls.
	 * 
	 */
	_createChildControl : vjo.NEEDS_IMPL,


	/**
	 * Internal method to create child controls. This method
	 * should be overwritten by classes which extends this one
	 * to support new child control types.
	 * 
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Create the widget&#8217;s container HTML element.
	 * 
	 */
	_createContainerElement : vjo.NEEDS_IMPL,


	/**
	 * Creates the content element. The style properties
	 * position and zIndex are modified from the Widget
	 * core.
	 * 
	 * This function may be overridden to customize a class
	 * content.
	 * 
	 */
	_createContentElement : vjo.NEEDS_IMPL,


	/**
	 * Creates the protector element used to block mouse events
	 * from the decoration.
	 * 
	 * This is needed because of the way the decorations work. Most
	 * of them tend to replace the underlying HTML of a widget
	 * dynamically on mouse over. But this also means that the
	 * native mouse out is not fired on the new content with which
	 * the old content is replaced. This is a fact given through
	 * the native behavior of the browser.
	 * 
	 * The protector is placed between the content and the decoration.
	 * 
	 */
	_createProtectorElement : vjo.NEEDS_IMPL,


	/**
	 * Dispose all registered controls. This is automatically
	 * executed by the widget.
	 * 
	 */
	_disposeChildControls : vjo.NEEDS_IMPL,


	/**
	 * Excludes the given child control by ID
	 * 
	 */
	_excludeChildControl : vjo.NEEDS_IMPL,


	/**
	 * Finds and returns the top level control. This is the first
	 * widget which is not a child control of any other widget.
	 * 
	 */
	_findTopControl : vjo.NEEDS_IMPL,


	/**
	 * Returns the children list
	 * 
	 */
	_getChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the computed height for the given width.
	 * 
	 */
	_getContentHeightForWidth : vjo.NEEDS_IMPL,


	/**
	 * Returns the recommended/natural dimensions of the widget&#8217;s content.
	 * 
	 * For labels and images this may be their natural size when defined without
	 * any dimensions. For containers this may be the recommended size of the
	 * underlying layout manager.
	 * 
	 * Developer note: This can be overwritten by the derived classes to allow
	 * a custom handling here.
	 * 
	 */
	_getContentHint : vjo.NEEDS_IMPL,


	/**
	 * Returns a map of all already created child controls
	 * 
	 */
	_getCreatedChildControls : vjo.NEEDS_IMPL,


	/**
	 * Helper to return a instance of a {@link qx.ui.core.DragDropCursor}.
	 * If you want to use your own DragDropCursor, override this method
	 * and return your custom instance.
	 * 
	 */
	_getDragDropCursor : vjo.NEEDS_IMPL,


	/**
	 */
	_getHeightForWidth : vjo.NEEDS_IMPL,


	/**
	 */
	_getLayout : vjo.NEEDS_IMPL,


	/**
	 * Whether the widget contains children.
	 * 
	 */
	_hasChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the index position of the given widget if it is
	 * a child widget. Otherwise it returns -1.
	 * 
	 */
	_indexOf : vjo.NEEDS_IMPL,


	/**
	 * Whether the given child control is visible.
	 * 
	 */
	_isChildControlVisible : vjo.NEEDS_IMPL,


	/**
	 * Event listener for beforeContextmenuOpen event
	 * 
	 */
	_onBeforeContextMenuOpen : vjo.NEEDS_IMPL,


	/**
	 */
	_onChangeTheme : vjo.NEEDS_IMPL,


	/**
	 * Event listener for contextmenu event
	 * 
	 */
	_onContextMenuOpen : vjo.NEEDS_IMPL,


	/**
	 * Event listener for own drag event.
	 * 
	 */
	_onDrag : vjo.NEEDS_IMPL,


	/**
	 * Event listener for own dragchange event.
	 * 
	 */
	_onDragChange : vjo.NEEDS_IMPL,


	/**
	 * Event listener for own dragend event.
	 * 
	 */
	_onDragEnd : vjo.NEEDS_IMPL,


	/**
	 * Event listener for own dragstart event.
	 * 
	 */
	_onDragStart : vjo.NEEDS_IMPL,


	/**
	 * Event listener which stops a bubbling event from
	 * propagates further.
	 * 
	 */
	_onStopEvent : vjo.NEEDS_IMPL,


	/**
	 * Remove the given child widget.
	 * 
	 */
	_remove : vjo.NEEDS_IMPL,


	/**
	 * Remove all children.
	 * 
	 */
	_removeAll : vjo.NEEDS_IMPL,


	/**
	 * Remove the widget at the specified index.
	 * 
	 */
	_removeAt : vjo.NEEDS_IMPL,


	/**
	 * Set a layout manager for the widget. A a layout manager can only be connected
	 * with one widget. Reset the connection with a previous widget first, if you
	 * like to use it in another widget instead.
	 * 
	 */
	_setLayout : vjo.NEEDS_IMPL,


	/**
	 * Shows the given child control by ID
	 * 
	 */
	_showChildControl : vjo.NEEDS_IMPL,


	/**
	 * Activate this widget e.g. for keyboard events.
	 * 
	 */
	activate : vjo.NEEDS_IMPL,


	/**
	 * Recursively adds all children to the given queue
	 * 
	 */
	addChildrenToQueue : vjo.NEEDS_IMPL,


	/**
	 * Sets a state.
	 * 
	 */
	addState : vjo.NEEDS_IMPL,


	/**
	 * Remove focus from this widget.
	 * 
	 */
	blur : vjo.NEEDS_IMPL,


	/**
	 * Enables mouse event capturing. All mouse events will dispatched on this
	 * widget until capturing is disabled using {@link #releaseCapture} or a
	 * mouse button is clicked. If the widgets becomes the capturing widget the
	 * {@link #capture} event is fired. Once it looses capture mode the
	 * {@link #losecapture} event is fired.
	 * 
	 */
	capture : vjo.NEEDS_IMPL,


	/**
	 * Helper method called from the visibility queue to detect outstanding changes
	 * to the appearance.
	 * 
	 */
	checkAppearanceNeeds : vjo.NEEDS_IMPL,


	/**
	 */
	clearSeparators : vjo.NEEDS_IMPL,


	/**
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Deactivate this widget e.g. for keyboard events.
	 * 
	 */
	deactivate : vjo.NEEDS_IMPL,


	/**
	 * Removes this widget from its parent and disposes it.
	 * 
	 * Please note that the widget is not disposed synchronously. The
	 * real dispose happens after the next queue flush.
	 * 
	 */
	destroy : vjo.NEEDS_IMPL,


	/**
	 * Hide this widget and exclude it from the underlying layout.
	 * 
	 */
	exclude : vjo.NEEDS_IMPL,


	/**
	 * Fade in the widget.
	 * 
	 */
	fadeIn : vjo.NEEDS_IMPL,


	/**
	 * Fade out this widget.
	 * 
	 */
	fadeOut : vjo.NEEDS_IMPL,


	/**
	 * Focus this widget.
	 * 
	 */
	focus : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property anonymous.
	 * 
	 * For further details take a look at the property definition: {@link #anonymous}.
	 * 
	 */
	getAnonymous : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property appearance.
	 * 
	 * For further details take a look at the property definition: {@link #appearance}.
	 * 
	 */
	getAppearance : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property backgroundColor.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	getBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property blockToolTip.
	 * 
	 * For further details take a look at the property definition: {@link #blockToolTip}.
	 * 
	 */
	getBlockToolTip : vjo.NEEDS_IMPL,


	/**
	 * Returns the child control from the given ID. Returns
	 * null when the child control is unknown.
	 * 
	 * It is designed for widget authors, who want to access child controls,
	 * which are created by the widget itself.
	 * 
	 * Warning: This method exposes widget internals and modifying the
	 * returned sub widget may bring the widget into an inconsistent state.
	 * Accessing child controls defined in a super class or in an foreign class
	 * is not supported. Do not use it if the result can be achieved using public
	 * API or theming.
	 * 
	 */
	getChildControl : vjo.NEEDS_IMPL,


	/**
	 * Returns the widget which contains the children and
	 * is relevant for laying them out. This is from the user point of
	 * view and may not be identical to the technical structure.
	 * 
	 */
	getChildrenContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the element wrapper of the widget&#8217;s container element.
	 * This method exposes widget internal and must be used with caution!
	 * 
	 */
	getContainerElement : vjo.NEEDS_IMPL,


	/**
	 * Computes the location of the container element in context of the document dimensions.
	 * 
	 * Supported modes:
	 * 
	 * 
	 * margin: Calculate from the margin box of the element
	 *   (bigger than the visual appearance: including margins of given element)
	 * box: Calculates the offset box of the element
	 *   (default, uses the same size as visible)
	 * border: Calculate the border box
	 *   (useful to align to border edges of two elements).
	 * scroll: Calculate the scroll box
	 *   (relevant for absolute positioned content).
	 * padding: Calculate the padding box
	 *   (relevant for static/relative positioned content).

	 * 
	 */
	getContainerLocation : vjo.NEEDS_IMPL,


	/**
	 * Returns the element wrapper of the widget&#8217;s content element.
	 * This method exposes widget internal and must be used with caution!
	 * 
	 */
	getContentElement : vjo.NEEDS_IMPL,


	/**
	 * Computes the location of the content element in context of the document
	 * dimensions.
	 * 
	 * Supported modes:
	 * 
	 * 
	 * margin: Calculate from the margin box of the element
	 *   (bigger than the visual appearance: including margins of given element)
	 * box: Calculates the offset box of the element (default,
	 *   uses the same size as visible)
	 * border: Calculate the border box (useful to align to
	 *   border edges of two elements).
	 * scroll: Calculate the scroll box (relevant for absolute
	 *   positioned content).
	 * padding: Calculate the padding box (relevant for
	 *   static/relative positioned content).

	 * 
	 */
	getContentLocation : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property contextMenu.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenu}.
	 * 
	 */
	getContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property cursor.
	 * 
	 * For further details take a look at the property definition: {@link #cursor}.
	 * 
	 */
	getCursor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property decorator.
	 * 
	 * For further details take a look at the property definition: {@link #decorator}.
	 * 
	 */
	getDecorator : vjo.NEEDS_IMPL,


	/**
	 * Returns the element wrapper of the widget&#8217;s decorator element.
	 * This method exposes widget internals and must be used with caution!
	 * 
	 */
	getDecoratorElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property draggable.
	 * 
	 * For further details take a look at the property definition: {@link #draggable}.
	 * 
	 */
	getDraggable : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property droppable.
	 * 
	 * For further details take a look at the property definition: {@link #droppable}.
	 * 
	 */
	getDroppable : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	getEnabled : vjo.NEEDS_IMPL,


	/**
	 * Returns the next event target in the parent chain. May
	 * also return the widget itself if it is not anonymous.
	 * 
	 */
	getEventTarget : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property focusable.
	 * 
	 * For further details take a look at the property definition: {@link #focusable}.
	 * 
	 */
	getFocusable : vjo.NEEDS_IMPL,


	/**
	 * Returns the element which should be focused.
	 * 
	 */
	getFocusElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the next focus target in the parent chain. May
	 * also return the widget itself if it is not anonymous and focusable.
	 * 
	 */
	getFocusTarget : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property font.
	 * 
	 * For further details take a look at the property definition: {@link #font}.
	 * 
	 */
	getFont : vjo.NEEDS_IMPL,


	/**
	 * Returns the widget&#8217;s computed inner size as available
	 * through the layout process.
	 * 
	 * This function is guaranteed to return a correct value
	 * during a {@link #resize} or {@link #move} event dispatch.
	 * 
	 */
	getInnerSize : vjo.NEEDS_IMPL,


	/**
	 * Return the insets of the widget&#8217;s inner element relative to its
	 * container element. The inset is the sum of the padding and border width.
	 * 
	 */
	getInsets : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property keepActive.
	 * 
	 * For further details take a look at the property definition: {@link #keepActive}.
	 * 
	 */
	getKeepActive : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property keepFocus.
	 * 
	 * For further details take a look at the property definition: {@link #keepFocus}.
	 * 
	 */
	getKeepFocus : vjo.NEEDS_IMPL,


	/**
	 * Returns all children, which are layout relevant. This excludes all widgets,
	 * which have a {@link qx.ui.core.Widget#visibility} value of exclude.
	 * 
	 */
	getLayoutChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property nativeContextMenu.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	getNativeContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property opacity.
	 * 
	 * For further details take a look at the property definition: {@link #opacity}.
	 * 
	 */
	getOpacity : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property paddingBottom.
	 * 
	 * For further details take a look at the property definition: {@link #paddingBottom}.
	 * 
	 */
	getPaddingBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property paddingLeft.
	 * 
	 * For further details take a look at the property definition: {@link #paddingLeft}.
	 * 
	 */
	getPaddingLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property paddingRight.
	 * 
	 * For further details take a look at the property definition: {@link #paddingRight}.
	 * 
	 */
	getPaddingRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property paddingTop.
	 * 
	 * For further details take a look at the property definition: {@link #paddingTop}.
	 * 
	 */
	getPaddingTop : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selectable.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	getSelectable : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property shadow.
	 * 
	 * For further details take a look at the property definition: {@link #shadow}.
	 * 
	 */
	getShadow : vjo.NEEDS_IMPL,


	/**
	 * Returns the element wrapper of the widget&#8217;s shadow element.
	 * This method exposes widget internals and must be used with caution!
	 * 
	 */
	getShadowElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property tabIndex.
	 * 
	 * For further details take a look at the property definition: {@link #tabIndex}.
	 * 
	 */
	getTabIndex : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property textColor.
	 * 
	 * For further details take a look at the property definition: {@link #textColor}.
	 * 
	 */
	getTextColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property toolTip.
	 * 
	 * For further details take a look at the property definition: {@link #toolTip}.
	 * 
	 */
	getToolTip : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property toolTipIcon.
	 * 
	 * For further details take a look at the property definition: {@link #toolTipIcon}.
	 * 
	 */
	getToolTipIcon : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property toolTipText.
	 * 
	 * For further details take a look at the property definition: {@link #toolTipText}.
	 * 
	 */
	getToolTipText : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property visibility.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	getVisibility : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property zIndex.
	 * 
	 * For further details take a look at the property definition: {@link #zIndex}.
	 * 
	 */
	getZIndex : vjo.NEEDS_IMPL,


	/**
	 * Whether the given ID is assigned to a child control.
	 * 
	 */
	hasChildControl : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the layout has children, which are layout relevant. This
	 * excludes all widgets, which have a {@link qx.ui.core.Widget#visibility}
	 * value of exclude.
	 * 
	 */
	hasLayoutChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns whether a state is set.
	 * 
	 */
	hasState : vjo.NEEDS_IMPL,


	/**
	 * Hide this widget.
	 * 
	 */
	hide : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property anonymous
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #anonymous}.
	 * 
	 */
	initAnonymous : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property appearance
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #appearance}.
	 * 
	 */
	initAppearance : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property backgroundColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	initBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property blockToolTip
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #blockToolTip}.
	 * 
	 */
	initBlockToolTip : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property contextMenu
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenu}.
	 * 
	 */
	initContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property cursor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #cursor}.
	 * 
	 */
	initCursor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property decorator
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #decorator}.
	 * 
	 */
	initDecorator : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property draggable
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #draggable}.
	 * 
	 */
	initDraggable : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property droppable
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #droppable}.
	 * 
	 */
	initDroppable : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property enabled
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	initEnabled : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property focusable
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #focusable}.
	 * 
	 */
	initFocusable : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property font
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #font}.
	 * 
	 */
	initFont : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property keepActive
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #keepActive}.
	 * 
	 */
	initKeepActive : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property keepFocus
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #keepFocus}.
	 * 
	 */
	initKeepFocus : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property nativeContextMenu
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	initNativeContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property opacity
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #opacity}.
	 * 
	 */
	initOpacity : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property paddingBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #paddingBottom}.
	 * 
	 */
	initPaddingBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property paddingLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #paddingLeft}.
	 * 
	 */
	initPaddingLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property paddingRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #paddingRight}.
	 * 
	 */
	initPaddingRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property paddingTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #paddingTop}.
	 * 
	 */
	initPaddingTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selectable
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	initSelectable : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property shadow
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #shadow}.
	 * 
	 */
	initShadow : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property tabIndex
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #tabIndex}.
	 * 
	 */
	initTabIndex : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property textColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #textColor}.
	 * 
	 */
	initTextColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property toolTip
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #toolTip}.
	 * 
	 */
	initToolTip : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property toolTipIcon
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #toolTipIcon}.
	 * 
	 */
	initToolTipIcon : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property toolTipText
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #toolTipText}.
	 * 
	 */
	initToolTipText : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property visibility
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	initVisibility : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property zIndex
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #zIndex}.
	 * 
	 */
	initZIndex : vjo.NEEDS_IMPL,


	/**
	 */
	invalidateLayoutCache : vjo.NEEDS_IMPL,


	/**
	 * Resets the cache for children which should be laid out.
	 * 
	 */
	invalidateLayoutChildren : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property anonymous equals true.
	 * 
	 * For further details take a look at the property definition: {@link #anonymous}.
	 * 
	 */
	isAnonymous : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property blockToolTip equals true.
	 * 
	 * For further details take a look at the property definition: {@link #blockToolTip}.
	 * 
	 */
	isBlockToolTip : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property draggable equals true.
	 * 
	 * For further details take a look at the property definition: {@link #draggable}.
	 * 
	 */
	isDraggable : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property droppable equals true.
	 * 
	 * For further details take a look at the property definition: {@link #droppable}.
	 * 
	 */
	isDroppable : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property enabled equals true.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	isEnabled : vjo.NEEDS_IMPL,


	/**
	 * Whether the widget is locally excluded.
	 * 
	 * Note: This method does not respect the hierarchy.
	 * 
	 */
	isExcluded : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property focusable equals true.
	 * 
	 * For further details take a look at the property definition: {@link #focusable}.
	 * 
	 */
	isFocusable : vjo.NEEDS_IMPL,


	/**
	 * Whether the widget is locally hidden.
	 * 
	 * Note: This method does not respect the hierarchy.
	 * 
	 */
	isHidden : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property keepActive equals true.
	 * 
	 * For further details take a look at the property definition: {@link #keepActive}.
	 * 
	 */
	isKeepActive : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property keepFocus equals true.
	 * 
	 * For further details take a look at the property definition: {@link #keepFocus}.
	 * 
	 */
	isKeepFocus : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property nativeContextMenu equals true.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	isNativeContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Detects if the widget and all its parents are visible.
	 * 
	 * WARNING: Please use this method with caution becuase it flushes the
	 * internal queues which might be an expensive operation.
	 * 
	 */
	isSeeable : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property selectable equals true.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	isSelectable : vjo.NEEDS_IMPL,


	/**
	 * Whether the widget is reachable by pressing the TAB key.
	 * 
	 * Normally tests for both, the focusable property and a positive or
	 * undefined tabIndex property. The widget must have a DOM element
	 * since only visible widgets are tabable.
	 * 
	 */
	isTabable : vjo.NEEDS_IMPL,


	/**
	 * Whether the widget is locally visible.
	 * 
	 * Note: This method does not respect the hierarchy.
	 * 
	 */
	isVisible : vjo.NEEDS_IMPL,


	/**
	 * Disables mouse capture mode enabled by {@link #capture}.
	 * 
	 */
	releaseCapture : vjo.NEEDS_IMPL,


	/**
	 * Clears a state.
	 * 
	 */
	removeState : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 */
	renderSeparator : vjo.NEEDS_IMPL,


	/**
	 * Replaces the first state with the second one.
	 * 
	 * This method is ideal for state transitions e.g. normal => selected.
	 * 
	 */
	replaceState : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property anonymous.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #anonymous}.
	 * 
	 */
	resetAnonymous : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property appearance.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #appearance}.
	 * 
	 */
	resetAppearance : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property backgroundColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	resetBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property blockToolTip.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #blockToolTip}.
	 * 
	 */
	resetBlockToolTip : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property contextMenu.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenu}.
	 * 
	 */
	resetContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property cursor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #cursor}.
	 * 
	 */
	resetCursor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property decorator.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #decorator}.
	 * 
	 */
	resetDecorator : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property draggable.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #draggable}.
	 * 
	 */
	resetDraggable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property droppable.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #droppable}.
	 * 
	 */
	resetDroppable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property enabled.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	resetEnabled : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property focusable.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #focusable}.
	 * 
	 */
	resetFocusable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property font.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #font}.
	 * 
	 */
	resetFont : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property keepActive.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #keepActive}.
	 * 
	 */
	resetKeepActive : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property keepFocus.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #keepFocus}.
	 * 
	 */
	resetKeepFocus : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property nativeContextMenu.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	resetNativeContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property opacity.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #opacity}.
	 * 
	 */
	resetOpacity : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property padding.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #padding}.
	 * 
	 */
	resetPadding : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property paddingBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #paddingBottom}.
	 * 
	 */
	resetPaddingBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property paddingLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #paddingLeft}.
	 * 
	 */
	resetPaddingLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property paddingRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #paddingRight}.
	 * 
	 */
	resetPaddingRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property paddingTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #paddingTop}.
	 * 
	 */
	resetPaddingTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selectable.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	resetSelectable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property shadow.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #shadow}.
	 * 
	 */
	resetShadow : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property tabIndex.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #tabIndex}.
	 * 
	 */
	resetTabIndex : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property textColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #textColor}.
	 * 
	 */
	resetTextColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property toolTip.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #toolTip}.
	 * 
	 */
	resetToolTip : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property toolTipIcon.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #toolTipIcon}.
	 * 
	 */
	resetToolTipIcon : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property toolTipText.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #toolTipText}.
	 * 
	 */
	resetToolTipText : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property visibility.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	resetVisibility : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property zIndex.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #zIndex}.
	 * 
	 */
	resetZIndex : vjo.NEEDS_IMPL,


	/**
	 * Marks the layout of this widget as invalid and triggers a layout update.
	 * This is a shortcut for qx.ui.core.queue.Layout.add(this);.
	 * 
	 */
	scheduleLayoutUpdate : vjo.NEEDS_IMPL,


	/**
	 * The method scrolls the given item into view.
	 * 
	 */
	scrollChildIntoView : vjo.NEEDS_IMPL,


	/**
	 * The method scrolls the given item into view (x-axis only).
	 * 
	 */
	scrollChildIntoViewX : vjo.NEEDS_IMPL,


	/**
	 * The method scrolls the given item into view (y-axis only).
	 * 
	 */
	scrollChildIntoViewY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property anonymous.
	 * 
	 * For further details take a look at the property definition: {@link #anonymous}.
	 * 
	 */
	setAnonymous : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property appearance.
	 * 
	 * For further details take a look at the property definition: {@link #appearance}.
	 * 
	 */
	setAppearance : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property backgroundColor.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	setBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property blockToolTip.
	 * 
	 * For further details take a look at the property definition: {@link #blockToolTip}.
	 * 
	 */
	setBlockToolTip : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property contextMenu.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenu}.
	 * 
	 */
	setContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property cursor.
	 * 
	 * For further details take a look at the property definition: {@link #cursor}.
	 * 
	 */
	setCursor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property decorator.
	 * 
	 * For further details take a look at the property definition: {@link #decorator}.
	 * 
	 */
	setDecorator : vjo.NEEDS_IMPL,


	/**
	 * Directly modifies the relative left position in relation
	 * to the parent element.
	 * 
	 * Use with caution! This may be used for animations, drag&amp;drop
	 * or other cases where high performance location manipulation
	 * is important. Otherwise please use {@link qx.ui.core.LayoutItem#setUserBounds} instead.
	 * 
	 */
	setDomLeft : vjo.NEEDS_IMPL,


	/**
	 * Directly modifies the relative left and top position in relation
	 * to the parent element.
	 * 
	 * Use with caution! This may be used for animations, drag&amp;drop
	 * or other cases where high performance location manipulation
	 * is important. Otherwise please use {@link qx.ui.core.LayoutItem#setUserBounds} instead.
	 * 
	 */
	setDomPosition : vjo.NEEDS_IMPL,


	/**
	 * Directly modifies the relative top position in relation
	 * to the parent element.
	 * 
	 * Use with caution! This may be used for animations, drag&amp;drop
	 * or other cases where high performance location manipulation
	 * is important. Otherwise please use {@link qx.ui.core.LayoutItem#setUserBounds} instead.
	 * 
	 */
	setDomTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property draggable.
	 * 
	 * For further details take a look at the property definition: {@link #draggable}.
	 * 
	 */
	setDraggable : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property droppable.
	 * 
	 * For further details take a look at the property definition: {@link #droppable}.
	 * 
	 */
	setDroppable : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	setEnabled : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property focusable.
	 * 
	 * For further details take a look at the property definition: {@link #focusable}.
	 * 
	 */
	setFocusable : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property font.
	 * 
	 * For further details take a look at the property definition: {@link #font}.
	 * 
	 */
	setFont : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property keepActive.
	 * 
	 * For further details take a look at the property definition: {@link #keepActive}.
	 * 
	 */
	setKeepActive : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property keepFocus.
	 * 
	 * For further details take a look at the property definition: {@link #keepFocus}.
	 * 
	 */
	setKeepFocus : vjo.NEEDS_IMPL,


	/**
	 */
	setLayoutParent : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property nativeContextMenu.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	setNativeContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property opacity.
	 * 
	 * For further details take a look at the property definition: {@link #opacity}.
	 * 
	 */
	setOpacity : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group padding.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #padding}.
	 * 
	 */
	setPadding : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property paddingBottom.
	 * 
	 * For further details take a look at the property definition: {@link #paddingBottom}.
	 * 
	 */
	setPaddingBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property paddingLeft.
	 * 
	 * For further details take a look at the property definition: {@link #paddingLeft}.
	 * 
	 */
	setPaddingLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property paddingRight.
	 * 
	 * For further details take a look at the property definition: {@link #paddingRight}.
	 * 
	 */
	setPaddingRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property paddingTop.
	 * 
	 * For further details take a look at the property definition: {@link #paddingTop}.
	 * 
	 */
	setPaddingTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selectable.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	setSelectable : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property shadow.
	 * 
	 * For further details take a look at the property definition: {@link #shadow}.
	 * 
	 */
	setShadow : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property tabIndex.
	 * 
	 * For further details take a look at the property definition: {@link #tabIndex}.
	 * 
	 */
	setTabIndex : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property textColor.
	 * 
	 * For further details take a look at the property definition: {@link #textColor}.
	 * 
	 */
	setTextColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property toolTip.
	 * 
	 * For further details take a look at the property definition: {@link #toolTip}.
	 * 
	 */
	setToolTip : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property toolTipIcon.
	 * 
	 * For further details take a look at the property definition: {@link #toolTipIcon}.
	 * 
	 */
	setToolTipIcon : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property toolTipText.
	 * 
	 * For further details take a look at the property definition: {@link #toolTipText}.
	 * 
	 */
	setToolTipText : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property visibility.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	setVisibility : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property zIndex.
	 * 
	 * For further details take a look at the property definition: {@link #zIndex}.
	 * 
	 */
	setZIndex : vjo.NEEDS_IMPL,


	/**
	 * Make this widget visible.
	 * 
	 */
	show : vjo.NEEDS_IMPL,


	/**
	 * Renders the appearance using the current widget states.
	 * 
	 * Used exclusively by {qx.ui.core.queue.Appearance}.
	 * 
	 */
	syncAppearance : vjo.NEEDS_IMPL,


	/**
	 * This method is called during the flush of the
	 * {@link qx.ui.core.queue.Widget widget queue}.
	 * 
	 */
	syncWidget : vjo.NEEDS_IMPL,


	/**
	 * Focus this widget when using the keyboard. This is
	 * mainly thought for the advanced qooxdoo keyboard handling
	 * and should not be used by the application developer.
	 * 
	 */
	tabFocus : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property anonymous.
	 * 
	 * For further details take a look at the property definition: {@link #anonymous}.
	 * 
	 */
	toggleAnonymous : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property blockToolTip.
	 * 
	 * For further details take a look at the property definition: {@link #blockToolTip}.
	 * 
	 */
	toggleBlockToolTip : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property draggable.
	 * 
	 * For further details take a look at the property definition: {@link #draggable}.
	 * 
	 */
	toggleDraggable : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property droppable.
	 * 
	 * For further details take a look at the property definition: {@link #droppable}.
	 * 
	 */
	toggleDroppable : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	toggleEnabled : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property focusable.
	 * 
	 * For further details take a look at the property definition: {@link #focusable}.
	 * 
	 */
	toggleFocusable : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property keepActive.
	 * 
	 * For further details take a look at the property definition: {@link #keepActive}.
	 * 
	 */
	toggleKeepActive : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property keepFocus.
	 * 
	 * For further details take a look at the property definition: {@link #keepFocus}.
	 * 
	 */
	toggleKeepFocus : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property nativeContextMenu.
	 * 
	 * For further details take a look at the property definition: {@link #nativeContextMenu}.
	 * 
	 */
	toggleNativeContextMenu : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property selectable.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	toggleSelectable : vjo.NEEDS_IMPL,


	/**
	 * Refreshes the appearance of this widget and all
	 * registered child controls.
	 * 
	 */
	updateAppearance : vjo.NEEDS_IMPL,


	/**
	 * Event handler which is executed when the widget lost the focus.
	 * 
	 * This method is used by the {@link qx.ui.core.FocusHandler} to
	 * remove states etc. from a previously focused widget.
	 * 
	 */
	visualizeBlur : vjo.NEEDS_IMPL,


	/**
	 * Event handler which is executed when the widget receives the focus.
	 * 
	 * This method is used by the {@link qx.ui.core.FocusHandler} to
	 * apply states etc. to a focused widget.
	 * 
	 */
	visualizeFocus : vjo.NEEDS_IMPL
})
.endType();