/**
 * The label class brings typical text content to the widget system.
 * 
 * It supports simple text nodes and complex HTML (rich). The default
 * content mode is for text only. The mode is changeable through the property
 * {@link #rich}.
 * 
 * The label supports heightForWidth when used in HTML mode. This means
 * that multi line HTML automatically computes the correct preferred height.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   // a simple text label without wrapping and markup support
 *   var label1 = new qx.ui.basic.Label("Simple text label");
 *   this.getRoot().add(label1, {left:20, top:10});
 * 
 *   // a HTML label with automatic line wrapping
 *   var label2 = new qx.ui.basic.Label().set({
 *     value: "A long label text with auto-wrapping. This also may contain rich HTML markup.",
 *     rich : true,
 *     width: 120
 *   });
 *   this.getRoot().add(label2, {left:20, top:50});
 * 
 * 
 * The first label in this example is a basic text only label. As such no
 * automatic wrapping is supported. The second label is a long label containing
 * HTML markup with automatic line wrapping.
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.basic.Label')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.form.IStringForm')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Internal utility to compute the content dimensions.
	 * 
	 */
	__computeContentSize : vjo.NEEDS_IMPL,


	/**
	 * Firefox > 9 on OS X will draw an ellipsis on top of the label content even
	 * though there is enough space for the text. Re-applying the content forces
	 * a recalculation and fixes the problem. See qx bug #6293
	 * 
	 */
	__fixEllipsis : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property buddy.
	 * 
	 * For further details take a look at the property definition: {@link #buddy}.
	 * 
	 */
	_applyBuddy : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property font.
	 * 
	 * For further details take a look at the property definition: {@link #font}.
	 * 
	 */
	_applyFont : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property rich.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	_applyRich : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selectable.
	 * 
	 * For further details take a look at the property definition: {@link #selectable}.
	 * 
	 */
	_applySelectable : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property textAlign.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	_applyTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property textColor.
	 * 
	 * For further details take a look at the property definition: {@link #textColor}.
	 * 
	 */
	_applyTextColor : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	_applyValue : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	_applyWrap : vjo.NEEDS_IMPL,


	/**
	 */
	_createContentElement : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHeightForWidth : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHint : vjo.NEEDS_IMPL,


	/**
	 */
	_hasHeightForWidth : vjo.NEEDS_IMPL,


	/**
	 * Locale change event handler
	 * 
	 */
	_onChangeLocale : vjo.NEEDS_IMPL,


	/**
	 * Triggers layout recalculation after a web font was loaded
	 * 
	 */
	_onWebFontStatusChange : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property buddy.
	 * 
	 * For further details take a look at the property definition: {@link #buddy}.
	 * 
	 */
	getBuddy : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property rich.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	getRich : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property textAlign.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	getTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	getWrap : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property buddy
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #buddy}.
	 * 
	 */
	initBuddy : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property rich
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	initRich : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property textAlign
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	initTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property value
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	initValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property wrap
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	initWrap : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property rich equals true.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	isRich : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property wrap equals true.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	isWrap : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property buddy.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #buddy}.
	 * 
	 */
	resetBuddy : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property rich.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	resetRich : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property textAlign.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	resetTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property value.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	resetValue : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property wrap.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	resetWrap : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property buddy.
	 * 
	 * For further details take a look at the property definition: {@link #buddy}.
	 * 
	 */
	setBuddy : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property rich.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	setRich : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property textAlign.
	 * 
	 * For further details take a look at the property definition: {@link #textAlign}.
	 * 
	 */
	setTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	setWrap : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property rich.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	toggleRich : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property wrap.
	 * 
	 * For further details take a look at the property definition: {@link #wrap}.
	 * 
	 */
	toggleWrap : vjo.NEEDS_IMPL
})
.endType();