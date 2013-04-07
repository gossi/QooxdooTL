/**
 * A basic layout, which supports positioning of child widgets in a &#8216;flowing&#8217;
 * manner, starting at the container&#8217;s top/left position, placing children left to right
 * (like a HBox) until the there&#8217;s no remaining room for the next child. When
 * out of room on the current line of elements, a new line is started, cleared
 * below the tallest child of the preceding line&#8212;a bit like using &#8216;float&#8217;
 * in CSS, except that a new line wraps all the way back to the left.
 * 
 * Features
 * 
 * 
 *  Reversing children order 
 *  Manual line breaks 
 *  Horizontal alignment of lines 
 *  Vertical alignment of individual widgets within a line 
 *  Margins with horizontal margin collapsing 
 *  Horizontal and vertical spacing 
 *  Height for width calculations 
 *  Auto-sizing 
 * 
 * 
 * Item Properties
 * 
 * 
 * lineBreak (Boolean): If set to true
 *   a forced line break will happen after this child widget.
 * 
 * 
 * 
 * Example
 * 
 * Here is a little example of how to use the Flow layout.
 * 
 * 
 *  var flowlayout = new qx.ui.layout.Flow();
 * 
 *  flowlayout.setAlignX( "center" );  // Align children to the X axis of the container (left|center|right)
 * 
 *  var container = new qx.ui.container.Composite(flowlayout);
 *  this.getRoot().add(container, {edge: 0});
 * 
 *  var button1 = new qx.ui.form.Button("1. First Button", "flowlayout/test.png");
 *  container.add(button1);
 * 
 *  var button2 = new qx.ui.form.Button("2. Second longer Button...", "flowlayout/test.png");
 *  // Have this child create a break in the current Line (next child will always start a new Line)
 *  container.add(button2, {lineBreak: true});
 * 
 *  var button3 = new qx.ui.form.Button("3rd really, really, really long Button", "flowlayout/test.png");
 *  button3.setHeight(100);  // tall button
 *  container.add(button3);
 * 
 *  var button4 = new qx.ui.form.Button("Number 4", "flowlayout/test.png");
 *  button4.setAlignY("bottom");
 *  container.add(button4);
 * 
 *  var button5 = new qx.ui.form.Button("20px Margins around the great big 5th button!");
 *  button5.setHeight(100);  // tall button
 *  button5.setMargin(20);
 *  container.add(button5, {lineBreak: true});    // Line break after this button.
 * 
 *  var button6 = new qx.ui.form.Button("Number 6", "flowlayout/test.png");
 *  button6.setAlignY("middle");  // Align this child to the vertical center of this line.
 *  container.add(button6);
 * 
 *  var button7 = new qx.ui.form.Button("7th a wide, short button", "flowlayout/test.png");
 *  button7.setMaxHeight(20);  // short button
 *  container.add(button7);
 * 
 * 
 * External Documentation
 * 
 * 
 * Extended documentation and links to demos of this layout in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.layout.Flow')
.inherits('qx.ui.layout.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Compute the preferred size optionally constrained by the available width
	 * 
	 */
	__computeSize : vjo.NEEDS_IMPL,


	/**
	 * Render a line in the flow layout
	 * 
	 */
	__renderLine : vjo.NEEDS_IMPL,


	/**
	 */
	_computeSizeHint : vjo.NEEDS_IMPL,


	/**
	 */
	connectToWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property alignX.
	 * 
	 * For further details take a look at the property definition: {@link #alignX}.
	 * 
	 */
	getAlignX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property alignY.
	 * 
	 * For further details take a look at the property definition: {@link #alignY}.
	 * 
	 */
	getAlignY : vjo.NEEDS_IMPL,


	/**
	 */
	getHeightForWidth : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property reversed.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	getReversed : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property spacingX.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	getSpacingX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property spacingY.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	getSpacingY : vjo.NEEDS_IMPL,


	/**
	 */
	hasHeightForWidth : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property alignX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #alignX}.
	 * 
	 */
	initAlignX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property alignY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #alignY}.
	 * 
	 */
	initAlignY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property reversed
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	initReversed : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property spacingX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	initSpacingX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property spacingY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	initSpacingY : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property reversed equals true.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	isReversed : vjo.NEEDS_IMPL,


	/**
	 * The FlowLayout tries to add as many Children as possible to the current &#8216;Line&#8217;
	 * and when it sees that the next Child won&#8217;t fit, it starts on a new Line, continuing
	 * until all the Children have been added.
	 * To enable alignX &#8220;left&#8221;, &#8220;center&#8221;, &#8220;right&#8221; renderLayout has to calculate the positions
	 * of all a Line&#8217;s children before it draws them.
	 * 
	 */
	renderLayout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property alignX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #alignX}.
	 * 
	 */
	resetAlignX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property alignY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #alignY}.
	 * 
	 */
	resetAlignY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property reversed.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	resetReversed : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property spacingX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	resetSpacingX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property spacingY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	resetSpacingY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property alignX.
	 * 
	 * For further details take a look at the property definition: {@link #alignX}.
	 * 
	 */
	setAlignX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property alignY.
	 * 
	 * For further details take a look at the property definition: {@link #alignY}.
	 * 
	 */
	setAlignY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property reversed.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	setReversed : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property spacingX.
	 * 
	 * For further details take a look at the property definition: {@link #spacingX}.
	 * 
	 */
	setSpacingX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property spacingY.
	 * 
	 * For further details take a look at the property definition: {@link #spacingY}.
	 * 
	 */
	setSpacingY : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property reversed.
	 * 
	 * For further details take a look at the property definition: {@link #reversed}.
	 * 
	 */
	toggleReversed : vjo.NEEDS_IMPL
})
.endType();