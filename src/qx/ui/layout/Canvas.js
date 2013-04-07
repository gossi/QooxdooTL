/**
 * The Canvas is an extended Basic layout.
 * 
 * It is possible to position a widget relative to the right or bottom edge of
 * the available space. It further supports stretching between left and right
 * or top and bottom e.g. left=20 and right=20 would
 * keep a margin of 20 pixels to both edges. The Canvas layout has support for
 * percent dimensions and locations.
 * 
 * Features
 * 
 * 
 * Pixel dimensions and locations
 * Percent dimensions and locations
 * Stretching between left+right and top+bottom
 * Minimum and maximum dimensions
 * Children are automatically shrunk to their minimum dimensions if not enough space is available
 * Auto sizing (ignoring percent values)
 * Margins (also negative ones)
 * 
 * 
 * Item Properties
 * 
 * 
 * left (Integer|String): The left coordinate in pixel or as a percent string e.g. 20 or 30%.
 * top (Integer|String): The top coordinate in pixel or as a percent string e.g. 20 or 30%.
 * right (Integer|String): The right coordinate in pixel or as a percent string e.g. 20 or 30%.
 * bottom (Integer|String): The bottom coordinate in pixel or as a percent string e.g. 20 or 30%.
 * width (String): A percent width e.g. 40%.
 * height (String): A percent height e.g. 60%.
 * 
 * 
 * Notes
 * 
 * 
 * Stretching (left->right or top->bottom)
 *   has a higher priority than the preferred dimensions
 * Stretching has a lower priority than the min/max dimensions.
 * Percent values have no influence on the size hint of the layout.
 * 
 * 
 * Example
 * 
 * Here is a little example of how to use the canvas layout.
 * 
 * 
 * var container = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
 * 
 * // simple positioning
 * container.add(new qx.ui.core.Widget(), {top: 10, left: 10});
 * 
 * // stretch vertically with 10 pixel distance to the parent's top
 * // and bottom border
 * container.add(new qx.ui.core.Widget(), {top: 10, left: 10, bottom: 10});
 * 
 * // percent positioning and size
 * container.add(new qx.ui.core.Widget(), {left: "50%", top: "50%", width: "25%", height: "40%"});
 * 
 * 
 * External Documentation
 * 
 * 
 * Extended documentation and links to demos of this layout in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.layout.Canvas')
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