/**
 * EXPERIMENTAL!
 * 
 * Cell renderer can be used for Widget rendering. The Widget creation can be configured with the
 * {@link #delegate} property:
 * 
 * 
 * widgetCell.setDelegate(
 * {
 *   createWidget : function() {
 *     return new qx.ui.form.ListItem();
 *   }
 * });
 * 
 * 
 * When the {@link #delegate} property is not used {@link qx.ui.core.Widget} instances are created as
 * fallback.
 * 
 * The {@link #updateData} method can be used to update any Widget property. Just use a Map
 * with property name as key:
 * 
 * 
 * // widget is a qx.ui.form.ListItem instance
 * widgetCell.updateData(widget,
 * {
 *   label: "my label value",
 *   icon: "qx/icon/22/emotes/face-angel.png"
 * });

 */
//>public
vjo.ctype('qx.ui.virtual.cell.WidgetCell')
.inherits('qx.ui.virtual.cell.AbstractWidget')
.protos({
	/**
	 * Applies changes of the property value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	_applyDelegate : vjo.NEEDS_IMPL,


	/**
	 */
	_createWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	getDelegate : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property delegate
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	initDelegate : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property delegate.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	resetDelegate : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	setDelegate : vjo.NEEDS_IMPL,


	/**
	 */
	updateData : vjo.NEEDS_IMPL
})
.endType();