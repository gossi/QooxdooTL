/**
 * Very basic dialog manager. Displays a native alert or confirm dialog if
 * the application is running in a PhoneGap environment. For debugging in a browser
 * it displays the browser alert or confirm dialog. In the near
 * future this should be replaced by dialog widgets.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *    var buttons = [];
 *    buttons.push(qx.locale.Manager.tr("OK"));
 *    buttons.push(qx.locale.Manager.tr("Cancel"));
 *    var title = "Delete item";
 *    var text = "Do you want to delete the item?"
 *    qx.ui.mobile.dialog.Manager.getInstance().confirm(title, text, function(index) {
 *      if (index==1) {
 *        // delete the item
 *      }
 *    }, this, buttons);
 * 
 * 
 * This example displays a confirm dialog and defines a button click handler.
 */
//>public
vjo.ctype('qx.ui.mobile.dialog.Manager')
.inherits('qx.core.Object')
.protos({
	/**
	 * Processes the dialog buttons. Converts them to PhoneGap compatible strings.
	 * 
	 */
	__processDialogButtons : vjo.NEEDS_IMPL,


	/**
	 * Shows a dialog widget.
	 * 
	 */
	__showNonNativeDialog : vjo.NEEDS_IMPL,


	/**
	 * Displays an alert box. When the application is running in a PhoneGap
	 * environment, a native alert box is shown. When debugging in a browser, a
	 * browser alert is shown.
	 * 
	 */
	alert : vjo.NEEDS_IMPL,


	/**
	 * Displays a confirm box. When the application is running in a PhoneGap
	 * environment, a native confirm box is shown. When debugging in a browser, a
	 * browser confirm is shown.
	 * 
	 */
	confirm : vjo.NEEDS_IMPL,


	/**
	 * Displays an error dialog. When the application is running in an PhoneGap
	 * environment, a native error dialog is shown. For debugging in a browser, a
	 * browser confirm is shown.
	 * 
	 */
	error : vjo.NEEDS_IMPL,


	/**
	 * Displays an input dialog.
	 * 
	 */
	input : vjo.NEEDS_IMPL,


	/**
	 * Displays a waiting dialog.
	 * 
	 */
	wait : vjo.NEEDS_IMPL,


	/**
	 * Displays a warning dialog. When the application is running in an PhoneGap
	 * environment, a native warning dialog is shown. For debugging in a browser, a
	 * browser confirm is shown.
	 * 
	 */
	warning : vjo.NEEDS_IMPL
})
.endType();