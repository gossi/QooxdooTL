/**
 * High-performance, high-level DOM element creation and management.
 * 
 * Includes support for HTML and style attributes. Elements also have
 * got a powerful children and visibility management.
 * 
 * Processes DOM insertion and modification with advanced logic
 * to reduce the real transactions.
 * 
 * From the view of the parent you can use the following children management
 * methods:
 * {@link #getChildren}, {@link #indexOf}, {@link #hasChild}, {@link #add},
 * {@link #addAt}, {@link #remove}, {@link #removeAt}, {@link #removeAll}
 * 
 * Each child itself also has got some powerful methods to control its
 * position:
 * {@link #getParent}, {@link #free},
 * {@link #insertInto}, {@link #insertBefore}, {@link #insertAfter},
 * {@link #moveTo}, {@link #moveBefore}, {@link #moveAfter},
 */
//>public
vjo.ctype('qx.html.Element')
.inherits('qx.core.Object')
.protos({
	/**
	 * Creates a new Element
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Internal helper for all children addition needs
	 * 
	 */
	__addChildHelper : vjo.NEEDS_IMPL,


	/**
	 * Syncs data of an HtmlElement object to the DOM.
	 * 
	 */
	__flush : vjo.NEEDS_IMPL,


	/**
	 * Internal helper for all children move needs
	 * 
	 */
	__moveChildHelper : vjo.NEEDS_IMPL,


	/**
	 * Handler for the scroll-event
	 * 
	 */
	__onScroll : vjo.NEEDS_IMPL,


	/**
	 * Takes the action to process as argument and queues this action if the
	 * underlying DOM element is not yet created.
	 * 
	 */
	__performAction : vjo.NEEDS_IMPL,


	/**
	 * Internal helper for all children removal needs
	 * 
	 */
	__removeChildHelper : vjo.NEEDS_IMPL,


	/**
	 * Walk up the internal children hierarchy and
	 * look if one of the children is marked as root.
	 * 
	 * This method is quite performance hungry as it
	 * really walks up recursively.
	 * 
	 */
	__willBeSeeable : vjo.NEEDS_IMPL,


	/**
	 * Applies a special property with the given value.
	 * 
	 * This property apply routine can be easily overwritten and
	 * extended by sub classes to add new low level features which
	 * are not easily possible using styles and attributes.
	 * 
	 */
	_applyProperty : vjo.NEEDS_IMPL,


	/**
	 * Copies data between the internal representation and the DOM. This
	 * simply copies all the data and only works well directly after
	 * element creation. After this the data must be synced using {@link #_syncData}
	 * 
	 */
	_copyData : vjo.NEEDS_IMPL,


	/**
	 * Internal helper to generate the DOM element
	 * 
	 */
	_createDomElement : vjo.NEEDS_IMPL,


	/**
	 * Get the value of the given misc.
	 * 
	 */
	_getProperty : vjo.NEEDS_IMPL,


	/**
	 * Append all child nodes to the DOM
	 * element. This function is used when the element is initially
	 * created. After this initial apply {@link #_syncChildren} is used
	 * instead.
	 * 
	 */
	_insertChildren : vjo.NEEDS_IMPL,


	/**
	 * Removes the given misc
	 * 
	 */
	_removeProperty : vjo.NEEDS_IMPL,


	/**
	 * Add the element to the global modification list.
	 * 
	 */
	_scheduleChildrenUpdate : vjo.NEEDS_IMPL,


	/**
	 * Set up the given property.
	 * 
	 */
	_setProperty : vjo.NEEDS_IMPL,


	/**
	 * Syncronize internal children hierarchy to the DOM. This is used
	 * for further runtime updates after the element has been created
	 * initially.
	 * 
	 */
	_syncChildren : vjo.NEEDS_IMPL,


	/**
	 * Syncronizes data between the internal representation and the DOM. This
	 * is the counterpart of {@link #_copyData} and is used for further updates
	 * after the element has been created.
	 * 
	 */
	_syncData : vjo.NEEDS_IMPL,


	/**
	 * Mark this element to get activated on the next flush of the queue
	 * 
	 */
	activate : vjo.NEEDS_IMPL,


	/**
	 * Append all given children at the end of this element.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Inserts a new element into this element at the given position.
	 * 
	 */
	addAt : vjo.NEEDS_IMPL,


	/**
	 * Adds an event listener to the element.
	 * 
	 */
	addListener : vjo.NEEDS_IMPL,


	/**
	 * Mark this element to get blurred on the next flush of the queue
	 * 
	 */
	blur : vjo.NEEDS_IMPL,


	/**
	 * Captures all mouse events to this element
	 * 
	 */
	capture : vjo.NEEDS_IMPL,


	/**
	 * Clears the selection of the element.
	 * 
	 * This method only works if the underlying DOM element is already created.
	 * 
	 */
	clearTextSelection : vjo.NEEDS_IMPL,


	/**
	 * Mark this element to get deactivated on the next flush of the queue
	 * 
	 */
	deactivate : vjo.NEEDS_IMPL,


	/**
	 * Disables browser-native scrolling
	 * 
	 */
	disableScrolling : vjo.NEEDS_IMPL,


	/**
	 * Re-enables browser-native scrolling
	 * 
	 */
	enableScrolling : vjo.NEEDS_IMPL,


	/**
	 * Marks the element as excluded which means it will be removed
	 * from the DOM and ignored for updates until it gets included again.
	 * 
	 */
	exclude : vjo.NEEDS_IMPL,


	/**
	 * Fades in the element.
	 * 
	 */
	fadeIn : vjo.NEEDS_IMPL,


	/**
	 * Fades out the element.
	 * 
	 */
	fadeOut : vjo.NEEDS_IMPL,


	/**
	 * Focus this element.
	 * 
	 * If the underlaying DOM element is not yet created, the
	 * focus is queued for processing after the element creation.
	 * 
	 */
	focus : vjo.NEEDS_IMPL,


	/**
	 * Remove self from the current parent.
	 * 
	 */
	free : vjo.NEEDS_IMPL,


	/**
	 * Returns a map of all styles. Do not modify the result map!
	 * 
	 */
	getAllStyles : vjo.NEEDS_IMPL,


	/**
	 * Get the value of the given attribute.
	 * 
	 */
	getAttribute : vjo.NEEDS_IMPL,


	/**
	 * Get a child element at the given index
	 * 
	 */
	getChild : vjo.NEEDS_IMPL,


	/**
	 * Returns a copy of the internal children structure.
	 * 
	 * Please do not modify the array in place. If you need
	 * to work with the data in such a way make yourself
	 * a copy of the data first.
	 * 
	 */
	getChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the DOM element (if created). Please use this with caution.
	 * It is better to make all changes to the object itself using the public
	 * API rather than to the underlying DOM element.
	 * 
	 */
	getDomElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the nodeName of the DOM element.
	 * 
	 */
	getNodeName : vjo.NEEDS_IMPL,


	/**
	 * Returns the parent of this element.
	 * 
	 */
	getParent : vjo.NEEDS_IMPL,


	/**
	 * Get the horizontal scroll position.
	 * 
	 */
	getScrollX : vjo.NEEDS_IMPL,


	/**
	 * Get the vertical scroll position.
	 * 
	 */
	getScrollY : vjo.NEEDS_IMPL,


	/**
	 * Get the value of the given style attribute.
	 * 
	 */
	getStyle : vjo.NEEDS_IMPL,


	/**
	 * Get the selection of the element.
	 * 
	 * If the underlaying DOM element is not yet created, this methods returns
	 * a null value.
	 * 
	 */
	getTextSelection : vjo.NEEDS_IMPL,


	/**
	 * Get the end of the selection of the element.
	 * 
	 * If the underlaying DOM element is not yet created, this methods returns
	 * a null value.
	 * 
	 */
	getTextSelectionEnd : vjo.NEEDS_IMPL,


	/**
	 * Get the length of selection of the element.
	 * 
	 * If the underlaying DOM element is not yet created, this methods returns
	 * a null value.
	 * 
	 */
	getTextSelectionLength : vjo.NEEDS_IMPL,


	/**
	 * Get the start of the selection of the element.
	 * 
	 * If the underlaying DOM element is not yet created, this methods returns
	 * a null value.
	 * 
	 */
	getTextSelectionStart : vjo.NEEDS_IMPL,


	/**
	 * Whether the given element is a child of this element.
	 * 
	 */
	hasChild : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the element has any child nodes
	 * 
	 */
	hasChildren : vjo.NEEDS_IMPL,


	/**
	 * Check if there are one or more listeners for an event type.
	 * 
	 */
	hasListener : vjo.NEEDS_IMPL,


	/**
	 * Marks the element as hidden which means it will kept in DOM (if it
	 * is already there, but configured hidden using a CSS style of display=none).
	 * 
	 */
	hide : vjo.NEEDS_IMPL,


	/**
	 * Marks the element as included which means it will be moved into
	 * the DOM again and synced with the internal data representation.
	 * 
	 */
	include : vjo.NEEDS_IMPL,


	/**
	 * Find the position of the given child
	 * 
	 */
	indexOf : vjo.NEEDS_IMPL,


	/**
	 * Insert self after the given (related) element
	 * 
	 */
	insertAfter : vjo.NEEDS_IMPL,


	/**
	 * Insert self before the given (related) element
	 * 
	 */
	insertBefore : vjo.NEEDS_IMPL,


	/**
	 * Insert self into the given parent. Normally appends self to the end,
	 * but optionally a position can be defined. With index 0 it
	 * will be inserted at the begin.
	 * 
	 */
	insertInto : vjo.NEEDS_IMPL,


	/**
	 * Whether the element is focusable (or will be when created)
	 * 
	 */
	isFocusable : vjo.NEEDS_IMPL,


	/**
	 * Whether the element is part of the DOM
	 * 
	 */
	isIncluded : vjo.NEEDS_IMPL,


	/**
	 * Whether the element is natively focusable (or will be when created)
	 * 
	 * This ignores the configured tabIndex.
	 * 
	 */
	isNativelyFocusable : vjo.NEEDS_IMPL,


	/**
	 * Whether the element is visible.
	 * 
	 * Please note: This does not control the visibility or parent inclusion recursively.
	 * 
	 */
	isVisible : vjo.NEEDS_IMPL,


	/**
	 * Move self after the given (related) child.
	 * 
	 */
	moveAfter : vjo.NEEDS_IMPL,


	/**
	 * Move self before the given (related) child.
	 * 
	 */
	moveBefore : vjo.NEEDS_IMPL,


	/**
	 * Move self to the given index in the current parent.
	 * 
	 */
	moveTo : vjo.NEEDS_IMPL,


	/**
	 * Releases this element from a previous {@link #capture} call
	 * 
	 */
	releaseCapture : vjo.NEEDS_IMPL,


	/**
	 * Removes all given children
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Remove all children from this element.
	 * 
	 */
	removeAll : vjo.NEEDS_IMPL,


	/**
	 * Removes the child at the given index
	 * 
	 */
	removeAt : vjo.NEEDS_IMPL,


	/**
	 * Removes the given attribute
	 * 
	 */
	removeAttribute : vjo.NEEDS_IMPL,


	/**
	 * Removes an event listener from the element.
	 * 
	 */
	removeListener : vjo.NEEDS_IMPL,


	/**
	 * Removes an event listener from an event target by an id returned by
	 * {@link #addListener}
	 * 
	 */
	removeListenerById : vjo.NEEDS_IMPL,


	/**
	 * Removes the given style attribute
	 * 
	 */
	removeStyle : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the given child element into view. Only scrolls children.
	 * Do not influence elements on top of this element.
	 * 
	 * If the element is currently invisible it gets scrolled automatically
	 * at the next time it is visible again (queued).
	 * 
	 */
	scrollChildIntoViewX : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the given child element into view. Only scrolls children.
	 * Do not influence elements on top of this element.
	 * 
	 * If the element is currently invisible it gets scrolled automatically
	 * at the next time it is visible again (queued).
	 * 
	 */
	scrollChildIntoViewY : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the element to the given left position.
	 * 
	 */
	scrollToX : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the element to the given top position.
	 * 
	 */
	scrollToY : vjo.NEEDS_IMPL,


	/**
	 * Set up the given attribute
	 * 
	 */
	setAttribute : vjo.NEEDS_IMPL,


	/**
	 * Convenience method to modify a set of attributes at once.
	 * 
	 */
	setAttributes : vjo.NEEDS_IMPL,


	/**
	 * Sets the nodeName of the DOM element.
	 * 
	 */
	setNodeName : vjo.NEEDS_IMPL,


	/**
	 * Sets the element&#8217;s root flag, which indicates
	 * whether the element should be a root element or not.
	 * 
	 */
	setRoot : vjo.NEEDS_IMPL,


	/**
	 * Set whether the element is selectable. It uses the qooxdoo attribute
	 * qxSelectable with the values &#8216;on&#8217; or &#8216;off&#8217;.
	 * In webkit, a special css property will be used (-webkit-user-select).
	 * 
	 */
	setSelectable : vjo.NEEDS_IMPL,


	/**
	 * Set up the given style attribute
	 * 
	 */
	setStyle : vjo.NEEDS_IMPL,


	/**
	 * Convenience method to modify a set of styles at once.
	 * 
	 */
	setStyles : vjo.NEEDS_IMPL,


	/**
	 * Set the selection of the element with the given start and end value.
	 * If no end value is passed the selection will extend to the end.
	 * 
	 * This method only works if the underlying DOM element is already created.
	 * 
	 */
	setTextSelection : vjo.NEEDS_IMPL,


	/**
	 * Marks the element as visible which means that a previously applied
	 * CSS style of display=none gets removed and the element will inserted
	 * into the DOM, when this had not already happened before.
	 * 
	 */
	show : vjo.NEEDS_IMPL,


	/**
	 * Uses an existing element instead of creating one. This may be interesting
	 * when the DOM element is directly needed to add content etc.
	 * 
	 */
	useElement : vjo.NEEDS_IMPL,


	/**
	 * Uses existing markup for this element. This is mainly used
	 * to insert pre-built markup blocks into the element hierarchy.
	 * 
	 */
	useMarkup : vjo.NEEDS_IMPL
})
.endType();