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
 *   var composite = new qx.ui.container.Composite()
 * 
 *   // configure it with a horizontal box layout with a spacing of '5'
 *   composite.setLayout(new qx.ui.layout.HBox(5));
 * 
 *   // add some children
 *   composite.add(new qx.ui.basic.Label("Name: "));
 *   composite.add(new qx.ui.form.TextField());
 * 
 *   this.getRoot().add(composite);
 * 
 * 
 * This example horizontally groups a label and text field by using a
 * Composite configured with a horizontal box layout as a container.
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.container.Composite')
.inherits('qx.ui.core.Widget')
.mixin(['qx.ui.core.MChildrenHandling','qx.ui.core.MLayoutHandling'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_afterAddChild : vjo.NEEDS_IMPL,


	/**
	 */
	_afterRemoveChild : vjo.NEEDS_IMPL
})
.endType();