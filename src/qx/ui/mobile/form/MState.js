/**
 * The mixin contains all functionality to provide methods
 * for form elements to manipulate their state. [usually &#8220;valid&#8221; and &#8220;invalid&#8221;]
 */
//>public
vjo.mtype('qx.ui.mobile.form.MState')
.protos({
	/**
	 * Adds a state to the element
	 * 
	 */
	addState : vjo.NEEDS_IMPL,


	/**
	 * Checkes whether the element has the state passed as argument
	 * 
	 */
	hasState : vjo.NEEDS_IMPL,


	/**
	 * Removes a state from the element
	 * 
	 */
	removeState : vjo.NEEDS_IMPL,


	/**
	 * Replaces a state of the element with a new state.
	 * If the element doesn&#8217;t have the state to be removed, then th new state will
	 * just be added.
	 * 
	 */
	replaceState : vjo.NEEDS_IMPL
})
.endType();