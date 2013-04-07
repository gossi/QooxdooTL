/**
 * This is the base class for all mobile widgets.
 */
//>public
vjo.ctype('qx.ui.mobile.core.Widget')
.inherits('qx.core.Object')
.mixin('qx.locale.MTranslation')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Sets the visibility of the widget.
	 * 
	 */
	__setVisibility : vjo.NEEDS_IMPL,


	/**
	 * Adds a new child widget.
	 * 
	 */
	_add : vjo.NEEDS_IMPL,


	/**
	 * Add a widget after another already inserted widget.
	 * 
	 */
	_addAfter : vjo.NEEDS_IMPL,


	/**
	 * Add a child widget at the specified index
	 * 
	 */
	_addAt : vjo.NEEDS_IMPL,


	/**
	 * Add a widget before another already inserted widget
	 * 
	 */
	_addBefore : vjo.NEEDS_IMPL,


	/**
	 * Shortcut for each property that should change a certain attribute of the
	 * container element.
	 * Use the {@link #addAttributeMapping} method to add a property to attribute
	 * mapping when the attribute name or value differs from the property name or
	 * value.
	 * 
	 */
	_applyAttribute : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property defaultCssClass.
	 * 
	 * For further details take a look at the property definition: {@link #defaultCssClass}.
	 * 
	 */
	_applyDefaultCssClass : vjo.NEEDS_IMPL,


	/**
	 * Sets the enable property to the new value
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property id.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	_applyId : vjo.NEEDS_IMPL,


	/**
	 * Shortcut for each property that should change a certain style of the container
	 * element.
	 * Use the {@link #addStyleMapping} method to add a property to style
	 * mapping when the style name or value differs from the property name or
	 * value.
	 * 
	 */
	_applyStyle : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property visibility.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	_applyVisibility : vjo.NEEDS_IMPL,


	/**
	 * Creates the container DOM element of the widget.
	 * Override this method if you want to create a custom widget.
	 * 
	 */
	_createContainerElement : vjo.NEEDS_IMPL,


	/**
	 * Triggers the {@link #scheduleDomUpdated} method. This method needs to be called
	 * when the DOM has changed, e.g. an element was added / removed / styled.
	 * 
	 */
	_domUpdated : vjo.NEEDS_IMPL,


	/**
	 * Returns the set value of the given attribute.
	 * 
	 */
	_getAttribute : vjo.NEEDS_IMPL,


	/**
	 * Returns the children of the widget.
	 * 
	 */
	_getChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the content DOM element of the widget.
	 * Override this method, to define another element as the content element.
	 * 
	 * Note: Most times this element points to to the container element.
	 * When the widget has a more complex element structure,
	 * the function should return a reference of the element that should contain
	 * the content.
	 * 
	 */
	_getContentElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the set layout manager for the widget.
	 * 
	 */
	_getLayout : vjo.NEEDS_IMPL,


	/**
	 * Returns the value of a certain style of the container element.
	 * 
	 */
	_getStyle : vjo.NEEDS_IMPL,


	/**
	 * Returns the tag name of the container element of this widget.
	 * Override this method if you want to create a custom widget.
	 * 
	 */
	_getTagName : vjo.NEEDS_IMPL,


	/**
	 * Whether the widget has child widgets.
	 * 
	 */
	_hasChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the index position of the given widget if it is
	 * a child widget. Otherwise it returns -1.
	 * 
	 */
	_indexOf : vjo.NEEDS_IMPL,


	/**
	 * Initializes the layout of the given child widget.
	 * 
	 */
	_initializeChildLayout : vjo.NEEDS_IMPL,


	/**
	 * Removes a given child from the widget.
	 * 
	 */
	_remove : vjo.NEEDS_IMPL,


	/**
	 * Removes all children from the widget.
	 * 
	 */
	_removeAll : vjo.NEEDS_IMPL,


	/**
	 * Remove the widget at the specified index.
	 * 
	 */
	_removeAt : vjo.NEEDS_IMPL,


	/**
	 * Sets an attribute with the given value of the container element. The
	 * null value resets the attribute.
	 * 
	 */
	_setAttribute : vjo.NEEDS_IMPL,


	/**
	 * Sets the container DOM element of the widget.
	 * 
	 */
	_setContainerElement : vjo.NEEDS_IMPL,


	/**
	 * Sets the innerHTML of the content element and calls the {@link #_domUpdated}
	 * method.
	 * 
	 */
	_setHtml : vjo.NEEDS_IMPL,


	/**
	 * Set a layout manager for the widget. A layout manager can only be connected
	 * with one widget. Reset the connection with a previous widget first, if you
	 * like to use it in another widget instead.
	 * 
	 */
	_setLayout : vjo.NEEDS_IMPL,


	/**
	 * Sets the value of a certain style of the container element. The
	 * null value resets the attribute.
	 * 
	 */
	_setStyle : vjo.NEEDS_IMPL,


	/**
	 * Transforms this widget (rotate, scale, translate3d)
	 * 
	 */
	_transform : vjo.NEEDS_IMPL,


	/**
	 * Transforms the value of the ID property. When the value is null, an auto
	 * generated ID is set. This makes sure that an ID is always set.
	 * 
	 */
	_transformId : vjo.NEEDS_IMPL,


	/**
	 * Adds a CSS class to the container element of the widget. Use this method
	 * to enhance the default appearance of the widget.
	 * 
	 */
	addCssClass : vjo.NEEDS_IMPL,


	/**
	 * Adds an array of CSS classes to the container element of the widget. Use this method
	 * to enhance the default appearance of the widget.
	 * 
	 */
	addCssClasses : vjo.NEEDS_IMPL,


	/**
	 * Removes this widget from its parent and disposes it.
	 * 
	 */
	destroy : vjo.NEEDS_IMPL,


	/**
	 * Hide this widget and exclude it from the underlying layout.
	 * 
	 */
	exclude : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property activatable.
	 * 
	 * For further details take a look at the property definition: {@link #activatable}.
	 * 
	 */
	getActivatable : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property anonymous.
	 * 
	 * For further details take a look at the property definition: {@link #anonymous}.
	 * 
	 */
	getAnonymous : vjo.NEEDS_IMPL,


	/**
	 * Returns the container DOM element of the widget.
	 * 
	 */
	getContainerElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the content DOM element of the widget.
	 * 
	 */
	getContentElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property defaultCssClass.
	 * 
	 * For further details take a look at the property definition: {@link #defaultCssClass}.
	 * 
	 */
	getDefaultCssClass : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	getEnabled : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property id.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	getId : vjo.NEEDS_IMPL,


	/**
	 * Returns the parent widget of this widget.
	 * 
	 */
	getLayoutParent : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property name.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	getName : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property rotation.
	 * 
	 * For further details take a look at the property definition: {@link #rotation}.
	 * 
	 */
	getRotation : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scaleX.
	 * 
	 * For further details take a look at the property definition: {@link #scaleX}.
	 * 
	 */
	getScaleX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scaleY.
	 * 
	 * For further details take a look at the property definition: {@link #scaleY}.
	 * 
	 */
	getScaleY : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property translateX.
	 * 
	 * For further details take a look at the property definition: {@link #translateX}.
	 * 
	 */
	getTranslateX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property translateY.
	 * 
	 * For further details take a look at the property definition: {@link #translateY}.
	 * 
	 */
	getTranslateY : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property translateZ.
	 * 
	 * For further details take a look at the property definition: {@link #translateZ}.
	 * 
	 */
	getTranslateZ : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property visibility.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	getVisibility : vjo.NEEDS_IMPL,


	/**
	 * Checks if the widget has a certain CSS class set.
	 * 
	 */
	hasCssClass : vjo.NEEDS_IMPL,


	/**
	 * Hide this widget.
	 * 
	 */
	hide : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property activatable
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #activatable}.
	 * 
	 */
	initActivatable : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property anonymous
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #anonymous}.
	 * 
	 */
	initAnonymous : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property defaultCssClass
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #defaultCssClass}.
	 * 
	 */
	initDefaultCssClass : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property enabled
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	initEnabled : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property id
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	initId : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property name
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	initName : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property rotation
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #rotation}.
	 * 
	 */
	initRotation : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scaleX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scaleX}.
	 * 
	 */
	initScaleX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scaleY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scaleY}.
	 * 
	 */
	initScaleY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property translateX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #translateX}.
	 * 
	 */
	initTranslateX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property translateY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #translateY}.
	 * 
	 */
	initTranslateY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property translateZ
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #translateZ}.
	 * 
	 */
	initTranslateZ : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property visibility
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	initVisibility : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property activatable equals true.
	 * 
	 * For further details take a look at the property definition: {@link #activatable}.
	 * 
	 */
	isActivatable : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property anonymous equals true.
	 * 
	 * For further details take a look at the property definition: {@link #anonymous}.
	 * 
	 */
	isAnonymous : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property enabled equals true.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	isEnabled : vjo.NEEDS_IMPL,


	/**
	 * Whether the widget is locally excluded.
	 * 
	 * Note: This method does not respect the hierarchy.
	 * 
	 */
	isExcluded : vjo.NEEDS_IMPL,


	/**
	 * Whether the widget is locally hidden.
	 * 
	 * Note: This method does not respect the hierarchy.
	 * 
	 */
	isHidden : vjo.NEEDS_IMPL,


	/**
	 * Detects if the widget and all its parents are visible.
	 * 
	 * Warning: forces rendering of the browser. Do not use this method during
	 * animations or performance critical tasks.
	 * 
	 */
	isSeeable : vjo.NEEDS_IMPL,


	/**
	 * Whether the widget is locally visible.
	 * 
	 * Note: This method does not respect the hierarchy.
	 * 
	 */
	isVisible : vjo.NEEDS_IMPL,


	/**
	 * Internal method. Removes a given child widget and the corresponding DOM element.
	 * 
	 */
	removeChild : vjo.NEEDS_IMPL,


	/**
	 * Removes a CSS class from the container element of the widget.
	 * 
	 */
	removeCssClass : vjo.NEEDS_IMPL,


	/**
	 * Removes an array of CSS classes from the container element of the widget.
	 * 
	 */
	removeCssClasses : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property activatable.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #activatable}.
	 * 
	 */
	resetActivatable : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property anonymous.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #anonymous}.
	 * 
	 */
	resetAnonymous : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property defaultCssClass.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #defaultCssClass}.
	 * 
	 */
	resetDefaultCssClass : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property enabled.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	resetEnabled : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property id.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	resetId : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property name.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	resetName : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property rotation.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #rotation}.
	 * 
	 */
	resetRotation : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scaleX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scaleX}.
	 * 
	 */
	resetScaleX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scaleY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scaleY}.
	 * 
	 */
	resetScaleY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property translateX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #translateX}.
	 * 
	 */
	resetTranslateX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property translateY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #translateY}.
	 * 
	 */
	resetTranslateY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property translateZ.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #translateZ}.
	 * 
	 */
	resetTranslateZ : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property visibility.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	resetVisibility : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property activatable.
	 * 
	 * For further details take a look at the property definition: {@link #activatable}.
	 * 
	 */
	setActivatable : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property anonymous.
	 * 
	 * For further details take a look at the property definition: {@link #anonymous}.
	 * 
	 */
	setAnonymous : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property defaultCssClass.
	 * 
	 * For further details take a look at the property definition: {@link #defaultCssClass}.
	 * 
	 */
	setDefaultCssClass : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	setEnabled : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property id.
	 * 
	 * For further details take a look at the property definition: {@link #id}.
	 * 
	 */
	setId : vjo.NEEDS_IMPL,


	/**
	 * Internal method. Sets the layout parent.
	 * 
	 */
	setLayoutParent : vjo.NEEDS_IMPL,


	/**
	 * Stores the given layout properties.
	 * 
	 */
	setLayoutProperties : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property name.
	 * 
	 * For further details take a look at the property definition: {@link #name}.
	 * 
	 */
	setName : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property rotation.
	 * 
	 * For further details take a look at the property definition: {@link #rotation}.
	 * 
	 */
	setRotation : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scaleX.
	 * 
	 * For further details take a look at the property definition: {@link #scaleX}.
	 * 
	 */
	setScaleX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scaleY.
	 * 
	 * For further details take a look at the property definition: {@link #scaleY}.
	 * 
	 */
	setScaleY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property translateX.
	 * 
	 * For further details take a look at the property definition: {@link #translateX}.
	 * 
	 */
	setTranslateX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property translateY.
	 * 
	 * For further details take a look at the property definition: {@link #translateY}.
	 * 
	 */
	setTranslateY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property translateZ.
	 * 
	 * For further details take a look at the property definition: {@link #translateZ}.
	 * 
	 */
	setTranslateZ : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property visibility.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	setVisibility : vjo.NEEDS_IMPL,


	/**
	 * Make this widget visible.
	 * 
	 */
	show : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property activatable.
	 * 
	 * For further details take a look at the property definition: {@link #activatable}.
	 * 
	 */
	toggleActivatable : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property anonymous.
	 * 
	 * For further details take a look at the property definition: {@link #anonymous}.
	 * 
	 */
	toggleAnonymous : vjo.NEEDS_IMPL,


	/**
	 * Toggles the given CSS. Adds or removes the CSS class from the container element of the widget.
	 * 
	 */
	toggleCssClass : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	toggleEnabled : vjo.NEEDS_IMPL,


	/**
	 * Updates the layout with the given arguments.
	 * 
	 */
	updateLayout : vjo.NEEDS_IMPL,


	/**
	 * Updates the layout properties of a given widget.
	 * 
	 */
	updateLayoutProperties : vjo.NEEDS_IMPL
})
.endType();