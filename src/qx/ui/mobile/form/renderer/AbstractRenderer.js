/**
 * AbstractRenderer is an abstract class used to encapsulate
 * behaviours of how a form can be rendered into a mobile page.
 * Its subclasses can extend it and override {@link #addItems} and {@link #addButton}
 * methods in order to customize the way the form gets into the DOM.
 */
//>public abstract
vjo.ctype('qx.ui.mobile.form.renderer.AbstractRenderer')
.inherits('qx.ui.mobile.core.Widget')
.satisfies('qx.ui.form.renderer.IFormRenderer')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Resets the errors for the form by removing any error messages
	 * inserted into DOM in the case of invalid form elements
	 * 
	 */
	resetForm : vjo.NEEDS_IMPL,


	/**
	 * Shows an error to the user when a form element is in invalid state
	 * usually it prints an error message, so that user can rectify the filling of the form element.
	 * 
	 */
	showErrorForItem : vjo.NEEDS_IMPL
})
.endType();