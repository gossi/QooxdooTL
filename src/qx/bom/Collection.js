/**
 * Wraps a set of elements and offers a whole set of features to query or modify them.
 * 
 * Chaining
 * 
 * The collection uses an interesting concept called a &#8220;Builder&#8221; to make
 * its code short and simple. The Builder pattern is an object-oriented
 * programming design pattern that has been gaining popularity.
 * 
 * In a nutshell: Every method on the collection returns the collection object itself,
 * allowing you to &#8216;chain&#8217; upon it, for example:
 * 
 * 
 * qx.bom.Collection.query("a").addClass("test")
 *   .setStyle("visibility", "visible").setAttribute("html", "foo");
 * 
 * 
 * Content Manipulation
 * 
 * Most methods that accept &#8220;content&#8221; will accept one or more
 * arguments of any of the following:
 * 
 * 
 * A DOM node element
 * An array of DOM node elements
 * A collection
 * A string representing HTML
 * 
 * 
 * Example:
 * 
 * 
 * qx.bom.Collection.query("#div1").append(
 *   document.createElement("br"),
 *   qx.bom.Collection.query("#div2"),
 *   "after div2"
 * );
 * 
 * 
 * Content inserting methods ({@link #append}, {@link #prepend},
 * {@link #before}, {@link #after}, and
 * {@link #replaceWith}) behave differently depending on the number of DOM
 * elements currently selected by the collection. If there is only one
 * element in the collection, the content is inserted to that element;
 * content that was in another location in the DOM tree will be moved by
 * this operation. This is essentially the same as the W3C DOM
 * appendChild method.
 * 
 * When multiple elements are selected by a collection, these methods
 * clone the content before inserting it to each element. Since the
 * content can only exist in one location in the document tree, cloning
 * is required in these cases so that the same content can be used in
 * multiple locations.
 * 
 * This rule also applies to the selector-insertion methods ({@link #appendTo},
 * {@link #prependTo}, {@link #insertBefore}, {@link #insertAfter},
 * and {@link #replaceAll}), but the auto-cloning occurs if there is more
 * than one element selected by the
 * Selector provided as an argument to the method.
 * 
 * When a specific behavior is needed regardless of the number of
 * elements selected, use the {@link #clone} or {@link #remove} methods in
 * conjunction with a selector-insertion method. This example will always
 * clone #Thing, append it to each element with class OneOrMore, and
 * leave the original #Thing unmolested in the document:
 * 
 * 
 * qx.bom.Collection.query("#Thing").clone().appendTo(".OneOrMore");
 * 
 * 
 * This example will always remove #Thing from the document and append it
 * to .OneOrMore:
 * 
 * 
 * qx.bom.Collection.query("#Thing").remove().appendTo(".OneOrMore");

 */
//>public
vjo.ctype('qx.bom.Collection')
.inherits('qx.type.BaseArray')
.protos({
	/**
	 * Creates a new Collection with the given size or the listed elements.
	 * 
	 * 
	 * var col1 = new qx.bom.Collection(length);
	 * var col2 = new qx.bom.Collection(elem0, elem1, ..., elemN);
	 * 
	 * 
	 * 
	 * length: The initial size of the collection of elements.
	 * elem1, elem2. .. elemN:  the elements that will compose the newly created collection

	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Callback for {@link #after} to apply the insertion of content
	 * 
	 */
	__afterCallback : vjo.NEEDS_IMPL,


	/**
	 * Callback for {@link #append} to apply the insertion of content
	 * 
	 */
	__appendCallback : vjo.NEEDS_IMPL,


	/**
	 * Callback for {@link #before} to apply the insertion of content
	 * 
	 */
	__beforeCallback : vjo.NEEDS_IMPL,


	/**
	 * Finds the deepest child inside the given element
	 * 
	 */
	__getInnerHelper : vjo.NEEDS_IMPL,


	/**
	 * Internal helper to work with hierarchy result arrays.
	 * 
	 */
	__hierarchyHelper : vjo.NEEDS_IMPL,


	/**
	 * Helper method for all DOM manipulation methods which deal
	 * with set of elements or HTML fragments.
	 * 
	 */
	__manipulate : vjo.NEEDS_IMPL,


	/**
	 * Helper for wrapping the methods to insert/replace content
	 * so that they can be used in reverse order (selector is
	 * given to the target method instead)
	 * 
	 */
	__manipulateTo : vjo.NEEDS_IMPL,


	/**
	 * Callback for {@link #prepend} to apply the insertion of content
	 * 
	 */
	__prependCallback : vjo.NEEDS_IMPL,


	/**
	 * Extend the chaining with a new collection, while
	 * storing the previous collection to make it accessible
	 * via end().
	 * 
	 */
	__pushStack : vjo.NEEDS_IMPL,


	/**
	 * Adds more elements, matched by the given expression,
	 * to the set of matched elements.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Adds a className to the given element
	 * If successfully added the given className will be returned
	 * 
	 */
	addClass : vjo.NEEDS_IMPL,


	/**
	 * Add an event listener to the selected elements. The event listener is passed an
	 * instance of {@link Event} containing all relevant information
	 * about the event as parameter.
	 * 
	 */
	addListener : vjo.NEEDS_IMPL,


	/**
	 * Insert content after each of the matched elements.
	 * 
	 * Supports lists of DOM elements or HTML strings through a variable
	 * argument list.
	 * 
	 */
	after : vjo.NEEDS_IMPL,


	/**
	 * Add the previous selection to the current selection.
	 * 
	 */
	andSelf : vjo.NEEDS_IMPL,


	/**
	 * Append content to the inside of every matched element.
	 * 
	 * Supports lists of DOM elements or HTML strings through a variable
	 * argument list.
	 * 
	 * Please make sure you understand the security implications of this
	 * method when passing HTML strings from untrusted input. See
	 * {@link qx.bom.Html#clean}.
	 * 
	 */
	append : vjo.NEEDS_IMPL,


	/**
	 * Append all of the matched elements to another, specified, set of elements.
	 * 
	 * This operation is, essentially, the reverse of doing a regular
	 * qx.bom.Collection.query(A).append(B), in that instead
	 * of appending B to A, you&#8217;re appending A to B.
	 * 
	 */
	appendTo : vjo.NEEDS_IMPL,


	/**
	 * Insert content before each of the matched elements.
	 * 
	 * Supports lists of DOM elements or HTML strings through a variable
	 * argument list.
	 * 
	 */
	before : vjo.NEEDS_IMPL,


	/**
	 * Get a set of elements containing all of the unique immediate children
	 * of each of the matched set of elements.
	 * 
	 * This set can be filtered with an optional expression that will cause
	 * only elements matching the selector to be collected.
	 * 
	 * Also note: while parents() will look at all ancestors,
	 * children() will only consider immediate child elements.
	 * 
	 */
	children : vjo.NEEDS_IMPL,


	/**
	 * Clone all DOM elements of the collection and return them in a newly
	 * created collection.
	 * 
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Get a set of elements containing the closest parent element
	 * that matches the specified selector, the starting element included.
	 * 
	 * Closest works by first looking at the current element to see if
	 * it matches the specified expression, if so it just returns the
	 * element itself. If it doesn&#8217;t match then it will continue to
	 * traverse up the document, parent by parent, until an element
	 * is found that matches the specified expression. If no matching
	 * element is found then none will be returned.
	 * 
	 */
	closest : vjo.NEEDS_IMPL,


	/**
	 * Find all the child nodes inside the matched elements (including text nodes).
	 * 
	 */
	contents : vjo.NEEDS_IMPL,


	/**
	 * Removes all matched elements from their parent elements,
	 * cleans up any attached events or data and clears up the Collection
	 * to free up memory.
	 * 
	 * The Collection content can be pre-filtered with an optional selector
	 * expression.
	 * 
	 * Modifies the current collection (without pushing the stack) as it
	 * removes all elements from the collection which where removed from the DOM.
	 * This normally means all elements in the collection when no selector is given.
	 * 
	 */
	destroy : vjo.NEEDS_IMPL,


	/**
	 * Removes all content from the elements
	 * 
	 */
	empty : vjo.NEEDS_IMPL,


	/**
	 * Undone of the last modification of the collection.
	 * 
	 * These methods change the selection during a chained method call:
	 * add, children, eq, filter,
	 * find, gt, lt, next,
	 * not, parent, parents and siblings
	 * 
	 */
	end : vjo.NEEDS_IMPL,


	/**
	 * Reduce the set of matched elements to a single element.
	 * 
	 * The position of the element in the collection of matched
	 * elements starts at 0 and goes to length &#8211; 1.
	 * 
	 */
	eq : vjo.NEEDS_IMPL,


	/**
	 * Removes all elements from the set of matched elements that
	 * do not match the specified expression(s) or be valid
	 * after being tested with the given function.
	 * 
	 * A selector function is invoked with three arguments: the value of the element, the
	 * index of the element, and the Array object being traversed.
	 * 
	 */
	filter : vjo.NEEDS_IMPL,


	/**
	 * Searches for all elements that match the specified expression.
	 * This method is a good way to find additional descendant
	 * elements with which to process.
	 * 
	 */
	find : vjo.NEEDS_IMPL,


	/**
	 * Figures out the value of the given attribute of
	 * the first element stored in the collection.
	 * 
	 */
	getAttribute : vjo.NEEDS_IMPL,


	/**
	 * Gets the classname of the first selected element
	 * 
	 */
	getClass : vjo.NEEDS_IMPL,


	/**
	 * Returns the content height of the first element in the collection.
	 * 
	 * The content height is basically the maximum
	 * height used or the maximum height which can be used by the content. This
	 * excludes all kind of styles of the element like borders, paddings, margins,
	 * and even scrollbars.
	 * 
	 * Please note that with visible scrollbars the content height returned
	 * may be larger than the box width returned via {@link #getWidth}.
	 * 
	 * Only works for DOM elements and not for the window object or the document
	 * object!
	 * 
	 */
	getContentHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the content width of the first element in the collection.
	 * 
	 * The content width is basically the maximum
	 * width used or the maximum width which can be used by the content. This
	 * excludes all kind of styles of the element like borders, paddings, margins,
	 * and even scrollbars.
	 * 
	 * Please note that with visible scrollbars the content width returned
	 * may be larger than the box width returned via {@link #getWidth}.
	 * 
	 * Only works for DOM elements and not for the window object or the document
	 * object!
	 * 
	 */
	getContentWidth : vjo.NEEDS_IMPL,


	/**
	 * Returns the full content of the style attribute of the first element
	 * in the collection.
	 * 
	 */
	getCss : vjo.NEEDS_IMPL,


	/**
	 * Returns the height of the first element in the collection.
	 * 
	 * This is the rendered height of the element which includes borders and
	 * paddings like the offsetHeight property in plain HTML.
	 * 
	 */
	getHeight : vjo.NEEDS_IMPL,


	/**
	 * Computes the location of the first element in context of
	 * the document dimensions.
	 * 
	 * Supported modes:
	 * 
	 * 
	 * margin: Calculate from the margin box of the element (bigger than the visual appearance: including margins of given element)
	 * box: Calculates the offset box of the element (default, uses the same size as visible)
	 * border: Calculate the border box (useful to align to border edges of two elements).
	 * scroll: Calculate the scroll box (relevant for absolute positioned content).
	 * padding: Calculate the padding box (relevant for static/relative positioned content).

	 * 
	 */
	getOffset : vjo.NEEDS_IMPL,


	/**
	 * Detects the offset parent of the first element
	 * 
	 */
	getOffsetParent : vjo.NEEDS_IMPL,


	/**
	 * Returns the left scroll position of the first element in the collection.
	 * 
	 */
	getScrollLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the top scroll position of the first element in the collection.
	 * 
	 */
	getScrollTop : vjo.NEEDS_IMPL,


	/**
	 * Figures out the value of the given style property of
	 * the first element stored in the collection.
	 * 
	 */
	getStyle : vjo.NEEDS_IMPL,


	/**
	 * Returns the currently configured value of the first
	 * element in the collection.
	 * 
	 * Works with simple input fields as well as with
	 * select boxes or option elements.
	 * 
	 * Returns an array in cases of multi-selection in
	 * select boxes but in all other cases a string.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Returns the width of the first element in the collection.
	 * 
	 * This is the rendered width of the element which includes borders and
	 * paddings like the offsetWidth property in plain HTML.
	 * 
	 */
	getWidth : vjo.NEEDS_IMPL,


	/**
	 * Whether the first selected element has the given className.
	 * 
	 */
	hasClass : vjo.NEEDS_IMPL,


	/**
	 * Insert all of the matched elements before another, specified, set of elements.
	 * 
	 * This operation is, essentially, the reverse of doing a regular
	 * qx.bom.Collection.query(A).after(B),  in that instead
	 * of inserting B to A, you&#8217;re inserting A to B.
	 * 
	 */
	insertAfter : vjo.NEEDS_IMPL,


	/**
	 * Insert all of the matched elements after another, specified, set of elements.
	 * 
	 * This operation is, essentially, the reverse of doing a regular
	 * qx.bom.Collection.query(A).before(B), in that instead
	 * of inserting B to A, you&#8217;re inserting A to B.
	 * 
	 */
	insertBefore : vjo.NEEDS_IMPL,


	/**
	 * Checks the current selection against an expression
	 * and returns true, if at least one element of the
	 * selection fits the given expression.
	 * 
	 */
	is : vjo.NEEDS_IMPL,


	/**
	 * Get a set of elements containing the unique next siblings of each of the given set of elements.
	 * 
	 * next only returns the very next sibling for each element, not all next siblings
	 * (see {@link #nextAll}). Use an optional expression to filter the matched set.
	 * 
	 */
	next : vjo.NEEDS_IMPL,


	/**
	 * Find all sibling elements after the current element.
	 * 
	 * Use an optional expression to filter the matched set.
	 * 
	 */
	nextAll : vjo.NEEDS_IMPL,


	/**
	 * Removes elements matching the specified expression from the collection.
	 * 
	 */
	not : vjo.NEEDS_IMPL,


	/**
	 * Get a set of elements containing the unique parents of the matched set of elements.
	 * 
	 */
	parent : vjo.NEEDS_IMPL,


	/**
	 * Get a set of elements containing the unique ancestors of the matched set of
	 * elements (except for the root element).
	 * 
	 * The matched elements can be filtered with an optional expression.
	 * 
	 */
	parents : vjo.NEEDS_IMPL,


	/**
	 * Prepend content to the inside of every matched element.
	 * 
	 * Supports lists of DOM elements or HTML strings through a variable
	 * argument list.
	 * 
	 * Please make sure you understand the security implications of this
	 * method when passing HTML strings from untrusted input. See
	 * {@link qx.bom.Html#clean}.
	 * 
	 */
	prepend : vjo.NEEDS_IMPL,


	/**
	 * Append all of the matched elements to another, specified, set of elements.
	 * 
	 * This operation is, essentially, the reverse of doing a regular
	 * qx.bom.Collection.query(A).prepend(B),  in that instead
	 * of prepending B to A, you&#8217;re prepending A to B.
	 * 
	 */
	prependTo : vjo.NEEDS_IMPL,


	/**
	 * Get a set of elements containing the unique previous siblings of each of the given set of elements.
	 * 
	 * prev only returns the very previous sibling for each element, not all previous siblings
	 * (see {@link #prevAll}). Use an optional expression to filter the matched set.
	 * 
	 */
	prev : vjo.NEEDS_IMPL,


	/**
	 * Find all sibling elements preceding the current element.
	 * 
	 * Use an optional expression to filter the matched set.
	 * 
	 */
	prevAll : vjo.NEEDS_IMPL,


	/**
	 * Removes all matched elements from the DOM. This does NOT remove them
	 * from the collection object, allowing you to use the matched
	 * elements further. When a selector is given the list is filtered
	 * by the selector and the chaining stack is pushed by the new collection.
	 * 
	 * The Collection content can be pre-filtered with an optional selector
	 * expression.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Removes a className from the given element
	 * 
	 */
	removeClass : vjo.NEEDS_IMPL,


	/**
	 * Removes an event listener from the selected elements.
	 * 
	 * Note: All registered event listeners will automatically be removed from
	 *   the DOM at page unload so it is not necessary to detach events yourself.
	 * 
	 */
	removeListener : vjo.NEEDS_IMPL,


	/**
	 * Replaces the elements matched by the specified selector
	 * with the matched elements.
	 * 
	 * This function is the complement to {@link #replaceWith} which does
	 * the same task with the parameters reversed.
	 * 
	 */
	replaceAll : vjo.NEEDS_IMPL,


	/**
	 * Replaces the first given class name with the second one
	 * 
	 */
	replaceClass : vjo.NEEDS_IMPL,


	/**
	 * Replaces all matched elements with the specified HTML or DOM elements.
	 * 
	 * This returns the JQuery element that was just replaced, which has been
	 * removed from the DOM.
	 * 
	 */
	replaceWith : vjo.NEEDS_IMPL,


	/**
	 * Reset the given attribute on all selected elements.
	 * 
	 */
	resetAttribute : vjo.NEEDS_IMPL,


	/**
	 * Reset the given style property
	 * on all selected elements.
	 * 
	 */
	resetStyle : vjo.NEEDS_IMPL,


	/**
	 * Modify the given attribute on all selected elements.
	 * 
	 */
	setAttribute : vjo.NEEDS_IMPL,


	/**
	 * Set the full CSS content of the style attribute for all elements in the
	 * collection.
	 * 
	 */
	setCss : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the elements of the collection to the given coordinate.
	 * 
	 */
	setScrollLeft : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the elements of the collection to the given coordinate.
	 * 
	 */
	setScrollTop : vjo.NEEDS_IMPL,


	/**
	 * Modify the given style property
	 * on all selected elements.
	 * 
	 */
	setStyle : vjo.NEEDS_IMPL,


	/**
	 * Convenience method to modify a set of styles at once.
	 * 
	 */
	setStyles : vjo.NEEDS_IMPL,


	/**
	 * Applies the given value to the element.
	 * 
	 * Normally the value is given as a string/number value and applied
	 * to the field content (textfield, textarea) or used to
	 * detect whether the field is checked (checkbox, radiobutton).
	 * 
	 * Supports array values for selectboxes (multiple-selection)
	 * and checkboxes or radiobuttons (for convenience).
	 * 
	 * Please note: To modify the value attribute of a checkbox or
	 * radiobutton use {@link qx.bom.element.Attribute#set} instead.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Get a set of elements containing all of the unique siblings
	 * of each of the matched set of elements.
	 * 
	 * Can be filtered with an optional expressions.
	 * 
	 */
	siblings : vjo.NEEDS_IMPL,


	/**
	 * Toggles a className of the selected elements
	 * 
	 */
	toggleClass : vjo.NEEDS_IMPL,


	/**
	 * Wrap each matched element with the specified HTML content.
	 * 
	 * This wrapping process is most useful for injecting additional structure
	 * into a document, without ruining the original semantic qualities of a
	 * document. This works by going through the first element provided (which
	 * is generated, on the fly, from the provided HTML) and finds the deepest
	 * descendant element within its structure&#8212;it is that element, which
	 * will wrap everything else.
	 * 
	 */
	wrap : vjo.NEEDS_IMPL,


	/**
	 * Wrap all the elements in the matched set into a single wrapper element.
	 * 
	 * This is different from {@link #wrap} where each element in the matched set
	 * would get wrapped with an element.
	 * 
	 * This wrapping process is most useful for injecting additional structure
	 * into a document, without ruining the original semantic qualities of
	 * a document.
	 * 
	 * This works by going through the first element provided (which is
	 * generated, on the fly, from the provided HTML) and finds the deepest
	 * descendant element within its structure&#8212;it is that element, which
	 * will wrap everything else.
	 * 
	 */
	wrapAll : vjo.NEEDS_IMPL,


	/**
	 * Wrap the inner child contents of each matched element (including
	 * text nodes) with an HTML structure.
	 * 
	 * This wrapping process is most useful for injecting additional structure
	 * into a document, without ruining the original semantic qualities of a
	 * document. This works by going through the first element provided
	 * (which is generated, on the fly, from the provided HTML) and finds the
	 * deepest ancestor element within its structure&#8212;it is that element
	 * that will enwrap everything else.
	 * 
	 */
	wrapInner : vjo.NEEDS_IMPL
})
.endType();