/**
 * Table Cell Renderer for Progressive.
 */
//>public
vjo.ctype('qx.ui.progressive.renderer.table.cell.Conditional')
.inherits('qx.ui.progressive.renderer.table.cell.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies the cell styles to the style map.
	 * 
	 */
	__applyFormatting : vjo.NEEDS_IMPL,


	/**
	 * Overridden; called whenever the cell updates. The cell will iterate
	 * through each available condition and apply formatting for those that
	 * match. Multiple conditions can match, but later conditions will
	 * override earlier ones. Conditions with null values will stack with
	 * other conditions that apply to that value.
	 * 
	 */
	_getCellStyle : vjo.NEEDS_IMPL,


	/**
	 * The addBetweenCondition method is used to add a between condition to
	 * the cell renderer.
	 * 
	 * Note: Passing null is different from passing an empty string in the
	 * align, color, style and weight arguments. Null will allow pre-existing
	 * formatting to pass through, where an empty string will clear it back to
	 * the default formatting set in the constructor.
	 * 
	 */
	addBetweenCondition : vjo.NEEDS_IMPL,


	/**
	 * The addNumericCondition method is used to add a basic numeric condition
	 * to the cell renderer.
	 * 
	 * Note: Passing null is different from passing an empty string in the
	 * align, color, style and weight arguments. Null will allow pre-existing
	 * formatting to pass through, where an empty string will clear it back to
	 * the default formatting set in the constructor.
	 * 
	 */
	addNumericCondition : vjo.NEEDS_IMPL,


	/**
	 * The addRegex method is used to add a regular expression condition to
	 * the cell renderer.
	 * 
	 * Note: Passing null is different from passing an empty string in the
	 * align, color, style and weight arguments. Null will allow pre-existing
	 * formatting to pass through, where an empty string will clear it back to
	 * the default formatting set in the constructor.
	 * 
	 */
	addRegex : vjo.NEEDS_IMPL
})
.endType();