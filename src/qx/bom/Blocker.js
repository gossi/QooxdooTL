/**
 * This class provides an unified blocker which offers three different modes.
 * 
 * Blocker modes
 * 
 * 
 * block the whole document
 * block the content of an element
 * act as an underlying blocker for an element to shim native controls
 * 
 * 
 * The third mode is mainly necessary for IE browsers.
 * 
 * The first mode is the easiest to use. Just use the {@link #block} method
 * without a parameter.
 * The second and third mode are taking a DOM element as parameter for the
 * {@link #block} method. Additionally one need to setup the &#8220;zIndex&#8221; value
 * correctly to get the right results (see at {@link #setBlockerZIndex} method).
 * 
 * The zIndex value defaults to the value &#8220;10000&#8221;. Either you set an appropiate
 * value for the blocker zIndex or for your DOM element to block. If you want
 * to block the content of your DOM element it has to have at least the zIndex
 * value of &#8220;10001&#8221; with default blocker values.
 */
//>public
vjo.ctype('qx.bom.Blocker')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Calculates the necessary styles for the blocker element.
	 * Either the values of the document or of the element to block are used.
	 * 
	 */
	__calculateStyles : vjo.NEEDS_IMPL,


	/**
	 * Setups the elements and registers a &#8220;resize&#8221; event.
	 * 
	 */
	__init : vjo.NEEDS_IMPL,


	/**
	 * Checks whether the whole document is be blocked.
	 * 
	 */
	__isWholeDocumentBlockTarget : vjo.NEEDS_IMPL,


	/**
	 * Reacts on window resize and adapts the new size for the blocker element
	 * if the whole document is blocked.
	 * 
	 */
	__onResize : vjo.NEEDS_IMPL,


	/**
	 * Remove the blocker elements.
	 * 
	 */
	__removeBlocker : vjo.NEEDS_IMPL,


	/**
	 * Does the resizing for blocker element and blocker iframe element (IE)
	 * 
	 */
	__resizeBlocker : vjo.NEEDS_IMPL,


	/**
	 * Create blocker element and set initial styles.
	 * 
	 */
	__setupBlockerElement : vjo.NEEDS_IMPL,


	/**
	 * Create iframe blocker element and set initial styles.
	 * 
	 * Needed to block native form elements
	 * // see: http://www.macridesweb.com/oltest/IframeShim.html
	 * 
	 */
	__setupIframeElement : vjo.NEEDS_IMPL,


	/**
	 * Apply the given styles and inserts the blocker.
	 * 
	 */
	__styleAndInsertBlocker : vjo.NEEDS_IMPL,


	/**
	 * Blocks the whole document (if no parameter is given) or acts as an
	 * underlying blocker for native controls.
	 * 
	 */
	block : vjo.NEEDS_IMPL,


	/**
	 * Returns the current blocker color.
	 * 
	 */
	getBlockerColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the blocker element. Useful if the element should be animated.
	 * 
	 */
	getBlockerElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the blocker opacity value.
	 * 
	 */
	getBlockerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Returns the blocker zIndex value
	 * 
	 */
	getBlockerZIndex : vjo.NEEDS_IMPL,


	/**
	 * Whether the blocker is already active.
	 * 
	 */
	isBlocked : vjo.NEEDS_IMPL,


	/**
	 * Sets the color of the blocker element. Be sure to set also a suitable
	 * opacity value to get the desired result.
	 * 
	 */
	setBlockerColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the blocker opacity. Be sure to set also a suitable blocker color
	 * value to get the desired result.
	 * 
	 */
	setBlockerOpacity : vjo.NEEDS_IMPL,


	/**
	 * Set the zIndex of the blocker element. For most use cases you do not need
	 * to manipulate this value.
	 * 
	 */
	setBlockerZIndex : vjo.NEEDS_IMPL,


	/**
	 * Releases the blocking
	 * 
	 */
	unblock : vjo.NEEDS_IMPL
})
.endType();