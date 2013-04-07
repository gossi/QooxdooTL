/**
 * The Checkbox is the mobile correspondent of the html checkbox.
 * 
 * Example
 * 
 * 
 *   var checkBox = new qx.ui.mobile.form.CheckBox();
 *   var title = new qx.ui.mobile.form.Title("Title");
 * 
 *   checkBox.setModel("Title Activated");
 *   checkBox.bind("model", title, "value");
 * 
 *   checkBox.addListener("changeValue", function(evt){
 *     this.setModel(evt.getdata() ? "Title Activated" : "Title Deactivated");
 *   });
 * 
 *   this.getRoot.add(checkBox);
 *   this.getRoot.add(title);
 * 
 * 
 * This example adds 2 widgets , a checkBox and a Title and binds them together by their model and value properties.
 * When the user taps on the checkbox, its model changes and it is reflected in the Title&#8217;s value.
 */
//>public
vjo.ctype('qx.ui.mobile.form.CheckBox')
.inherits('qx.ui.mobile.form.Input')
.mixin('qx.ui.mobile.form.MValue')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Event handler, when CheckBox appears on screen.
	 * 
	 */
	__onAppear : vjo.NEEDS_IMPL,


	/**
	 */
	_getType : vjo.NEEDS_IMPL,


	/**
	 * Gets the value [true/false] of this checkbox.
	 * It is called by getValue method of qx.ui.mobile.form.MValue mixin
	 * 
	 */
	_getValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the value [true/false] of this checkbox.
	 * It is called by setValue method of qx.ui.mobile.form.MValue mixin
	 * 
	 */
	_setValue : vjo.NEEDS_IMPL
})
.endType();