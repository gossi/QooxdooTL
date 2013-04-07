/**
 * A basic layout, which supports positioning of child widgets by absolute
 * left/top coordinates. This layout is very simple but should also
 * perform best.
 * 
 * Features
 * 
 * 
 * Basic positioning using left and top properties
 * Respects minimum and maximum dimensions without skrinking/growing
 * Margins for top and left side (including negative ones)
 * Respects right and bottom margins in the size hint
 * Auto-sizing
 * 
 * 
 * Item Properties
 * 
 * 
 * left (Integer): The left coordinate in pixel
 * top (Integer): The top coordinate in pixel
 * 
 * 
 * Details
 * 
 * The default location of any widget is zero for both
 * left and top.
 * 
 * Example
 * 
 * Here is a little example of how to use the basic layout.
 * 
 * 
 * var container = new qx.ui.container.Composite(new qx.ui.layout.Basic());
 * 
 * // simple positioning
 * container.add(new qx.ui.core.Widget(), {left: 10, top: 10});
 * container.add(new qx.ui.core.Widget(), {left: 100, top: 50});
 * 
 * 
 * External Documentation
 * 
 * 
 * Extended documentation and links to demos of this layout in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.layout.Basic')
.inherits('qx.ui.layout.Abstract')
.protos({
	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 */
	renderLayout : vjo.NEEDS_IMPL
})
.endType();