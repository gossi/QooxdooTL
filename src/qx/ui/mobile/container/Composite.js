/**
 * The Composite is a generic container widget.
 * 
 * It exposes all methods to set layouts and to manage child widgets
 * as public methods. You must configure this widget with a layout manager to
 * define the way the widget&#8217;s children are positioned.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   // create the composite
 *   var composite = new qx.ui.mobile.container.Composite()
 * 
 *   composite.setLayout(new qx.ui.mobile.layout.HBox());
 * 
 *   // add some children
 *   composite.add(new qx.ui.mobile.basic.Label("Name: "), {flex:1});
 *   composite.add(new qx.ui.mobile.form.TextField());
 * 
 *   this.getRoot().add(composite);
 * 
 * 
 * This example horizontally groups a label and text field by using a
 * Composite configured with a horizontal box layout as a container.
 */
//>public
vjo.ctype('qx.ui.mobile.container.Composite')
.inherits('qx.ui.mobile.core.Widget')
.mixin(['qx.ui.mobile.core.MChildrenHandling','qx.ui.mobile.core.MLayoutHandling'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL
})
.endType();