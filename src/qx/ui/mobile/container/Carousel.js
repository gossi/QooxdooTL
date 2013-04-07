/**
 * Creates a Carousel widget.
 * A carousel is a widget which can switch between several sub pages {@link  qx.ui.mobile.container.Composite}.
 * A page switch is triggered by a swipe to left, for next page, or a swipe to right for
 * previous page.
 * 
 * A carousel shows by default a pagination indicator at the bottom of the carousel.
 * This pagination indicator can be hidden by property showPagination.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 * 
 *  var carousel = new qx.ui.mobile.container.Carousel();
 *  var carouselPage1 = new qx.ui.mobile.container.Composite();
 *  var carouselPage2 = new qx.ui.mobile.container.Composite();
 * 
 *  carouselPage1.add(new qx.ui.mobile.basic.Label("This is a carousel. Please swipe left."));
 *  carouselPage2.add(new qx.ui.mobile.basic.Label("Now swipe right."));
 * 
 *  carousel.add(carouselPage1);
 *  carousel.add(carouselPage2);

 */
//>public
vjo.ctype('qx.ui.mobile.container.Carousel')
.inherits('qx.ui.mobile.container.Composite')
.mixin('qx.ui.mobile.core.MResize')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Called when showPagination property is changed.
	 * Manages show(), hide() of pagination container.
	 * 
	 */
	_applyShowPagination : vjo.NEEDS_IMPL,


	/**
	 * Manages the the scroll loop. First fades out carousel scroller >>
	 * waits till fading is done >> scrolls to pageIndex >> waits till scrolling is done
	 * >> fades scroller in.
	 * 
	 */
	_doScrollLoop : vjo.NEEDS_IMPL,


	/**
	 * Handles window resize, device orientatonChange or page appear events.
	 * 
	 */
	_onContainerUpdate : vjo.NEEDS_IMPL,


	/**
	 * Handles a tap on paginationLabel.
	 * 
	 */
	_onPaginationLabelTap : vjo.NEEDS_IMPL,


	/**
	 * Handler for swipe on carousel scroller.
	 * 
	 */
	_onSwipe : vjo.NEEDS_IMPL,


	/**
	 * Event handler for touchmove events.
	 * 
	 */
	_onTouchMove : vjo.NEEDS_IMPL,


	/**
	 * Event handler for touchstart events.
	 * 
	 */
	_onTouchStart : vjo.NEEDS_IMPL,


	/**
	 * Changes the opacity of the carouselScroller element.
	 * 
	 */
	_setScrollersOpacity : vjo.NEEDS_IMPL,


	/**
	 * Determines whether a transition should be shown on carouselScroller move or not.
	 * Target value will be buffered, and only be set on target element when target value is different
	 * to the value alreay set.
	 * 
	 */
	_setShowTransition : vjo.NEEDS_IMPL,


	/**
	 * Snaps carouselScroller offset to a carouselPage.
	 * It determines which carouselPage is the nearest and moves
	 * carouselScrollers offset till nearest carouselPage&#8217;s left border is aligned to carousel&#8217;s left border.
	 * 
	 */
	_snapCarouselPage : vjo.NEEDS_IMPL,


	/**
	 * Updates the layout of the carousel the carousel scroller and its pages.
	 * 
	 */
	_updateCarouselLayout : vjo.NEEDS_IMPL,


	/**
	 * Updates the pagination indicator of this carousel.
	 * Removes the active state from from paginationLabel with oldActiveIndex,
	 * Adds actives state to paginationLabel new ActiveIndex.
	 * 
	 */
	_updatePagination : vjo.NEEDS_IMPL,


	/**
	 * Assign new position of carousel scrolling container.
	 * 
	 */
	_updateScrollerPosition : vjo.NEEDS_IMPL,


	/**
	 * Adds a page to the end of the carousel.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property height.
	 * 
	 * For further details take a look at the property definition: {@link #height}.
	 * 
	 */
	getHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scrollLoop.
	 * 
	 * For further details take a look at the property definition: {@link #scrollLoop}.
	 * 
	 */
	getScrollLoop : vjo.NEEDS_IMPL,


	/**
	 * Returns the current visible page index.
	 * 
	 */
	getShownPageIndex : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showPagination.
	 * 
	 * For further details take a look at the property definition: {@link #showPagination}.
	 * 
	 */
	getShowPagination : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property height
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #height}.
	 * 
	 */
	initHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scrollLoop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scrollLoop}.
	 * 
	 */
	initScrollLoop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showPagination
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showPagination}.
	 * 
	 */
	initShowPagination : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property scrollLoop equals true.
	 * 
	 * For further details take a look at the property definition: {@link #scrollLoop}.
	 * 
	 */
	isScrollLoop : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showPagination equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showPagination}.
	 * 
	 */
	isShowPagination : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the carousel to next page.
	 * 
	 */
	nextPage : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the carousel to previous page.
	 * 
	 */
	previousPage : vjo.NEEDS_IMPL,


	/**
	 * Removes a carousel page from carousel identified by its index.
	 * 
	 */
	removePageByIndex : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property height.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #height}.
	 * 
	 */
	resetHeight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scrollLoop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scrollLoop}.
	 * 
	 */
	resetScrollLoop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showPagination.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showPagination}.
	 * 
	 */
	resetShowPagination : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the carousel to the page with the given pageIndex.
	 * 
	 */
	scrollToPage : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property height.
	 * 
	 * For further details take a look at the property definition: {@link #height}.
	 * 
	 */
	setHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scrollLoop.
	 * 
	 * For further details take a look at the property definition: {@link #scrollLoop}.
	 * 
	 */
	setScrollLoop : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showPagination.
	 * 
	 * For further details take a look at the property definition: {@link #showPagination}.
	 * 
	 */
	setShowPagination : vjo.NEEDS_IMPL,


	/**
	 * If velocity of swipe is above this value, the swipe will trigger a page change on carousel.
	 * A swipe to left would trigger an increase, a swipe to right a decrease of pageIndex.
	 * If velocity is below the limit, the snap mechanism of carousel will be used:
	 * A page change is only caused when the horizontal center of the page is moved above/below
	 * the horizontal center of the carousel.
	 * 
	 */
	setSwipeVelocityLimit : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property scrollLoop.
	 * 
	 * For further details take a look at the property definition: {@link #scrollLoop}.
	 * 
	 */
	toggleScrollLoop : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showPagination.
	 * 
	 * For further details take a look at the property definition: {@link #showPagination}.
	 * 
	 */
	toggleShowPagination : vjo.NEEDS_IMPL
})
.endType();