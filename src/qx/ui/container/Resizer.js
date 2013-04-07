/**
 * The Resizer is a resizable container widget.
 * 
 * It allows to be resized (not moved), normally in
 * the right and/or bottom directions. It is an alternative to splitters.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var resizer = new qx.ui.container.Resizer().set({
 *     width: 200,
 *     height: 100
 *   });
 * 
 *   resizer.setLayout(new qx.ui.layout.Canvas());
 *   var text = new qx.ui.form.TextArea("Resize me\nI'm resizable");
 *   resizer.add(text, {edge: 0});
 * 
 *   this.getRoot().add(resizer);
 * 
 * 
 * This example creates a resizer, configures it with a canvas layout and
 * adds a text area to it.
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.container.Resizer')
.inherits('qx.ui.container.Composite')
.mixin('qx.ui.core.MResizable')
.endType();