/**
 * A helper for using the browser history in JavaScript Applications without
 * reloading the main page.
 * 
 * Adds entries to the browser history and fires a &#8220;request&#8221; event when one of
 * the entries was requested by the user (e.g. by clicking on the back button).
 * 
 * This class is an abstract template class. Concrete implementations have to
 * provide implementations for the {@link #_readState} and {@link #_writeState}
 * methods.
 * 
 * Browser history support is currently available for Internet Explorer 6/7,
 * Firefox, Opera 9 and WebKit. Safari 2 and older are not yet supported.
 * 
 * This module is based on the ideas behind the YUI Browser History Manager
 * by Julien Lecomte (Yahoo), which is described at
 * http://yuiblog.com/blog/2007/02/21/browser-history-manager/. The Yahoo
 * implementation can be found at http://developer.yahoo.com/yui/history.
 * The original code is licensed under a BSD license
 * (http://developer.yahoo.com/yui/license.txt).
 */
//>public abstract
vjo.ctype('qx.bom.History')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	_applyState : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property title.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	_applyTitle : vjo.NEEDS_IMPL,


	/**
	 * Decodes a fragment identifier into a string
	 * 
	 */
	_decode : vjo.NEEDS_IMPL,


	/**
	 * Encodes the state value into a format suitable as fragment identifier.
	 * 
	 */
	_encode : vjo.NEEDS_IMPL,


	/**
	 * Returns the fragment identifier of the top window URL. For gecko browsers we
	 * have to use a regular expression to avoid encoding problems.
	 * 
	 */
	_getHash : vjo.NEEDS_IMPL,


	/**
	 * Called on changes to the history using the browser buttons.
	 * 
	 */
	_onHistoryLoad : vjo.NEEDS_IMPL,


	/**
	 * Browser dependent function to read the current state of the history
	 * 
	 */
	_readState : vjo.NEEDS_IMPL,


	/**
	 * Sets the fragment identifier of the window URL
	 * 
	 */
	_setHash : vjo.NEEDS_IMPL,


	/**
	 * Populates the &#8216;state&#8217; property with the initial state value
	 * 
	 */
	_setInitialState : vjo.NEEDS_IMPL,


	/**
	 * Save a state into the browser history.
	 * 
	 */
	_writeState : vjo.NEEDS_IMPL,


	/**
	 * Adds an entry to the browser history.
	 * 
	 */
	addToHistory : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	getState : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property title.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	getTitle : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property state
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	initState : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property title
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	initTitle : vjo.NEEDS_IMPL,


	/**
	 * Navigates back in the browser history.
	 * Simulates a back button click.
	 * 
	 */
	navigateBack : vjo.NEEDS_IMPL,


	/**
	 * Navigates forward in the browser history.
	 * Simulates a forward button click.
	 * 
	 */
	navigateForward : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property state.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	resetState : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property title.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	resetTitle : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	setState : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property title.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	setTitle : vjo.NEEDS_IMPL
})
.endType();