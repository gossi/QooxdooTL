/**
 * A Button widget.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var button = new qx.ui.mobile.form.Button("Hello World");
 * 
 *   button.addListener("tap", function(e) {
 *     alert("Button was clicked");
 *   }, this);
 * 
 *   this.getRoot.add(button);
 * 
 * 
 * This example creates a button with the label &#8220;Hello World&#8221; and attaches an
 * event listener to the {@link qx.ui.mobile.core.Widget#tap} event.
 */
//>public
vjo.ctype('qx.ui.mobile.form.Button')
.inherits('qx.ui.mobile.basic.Atom')
.protos({
	/**
	 * Returns the set value.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the value.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL
})
.endType();