/**
 * The popup represents a widget that gets shown above other widgets,
 * usually to present more info/details regarding an item in the application.
 * 
 * There are 3 usages for now:
 * 
 * 
 * var widget = new qx.ui.mobile.form.Button("Error!");
 * var popup = new qx.ui.mobile.dialog.Popup(widget);
 * popup.show();
 * 
 * 
 * Here we show a popup consisting of a single buttons alerting the user
 * that an error has occured.
 * It will be centered to the screen.
 * 
 * 
 * var label = new qx.ui.mobile.basic.Label("Item1");
 * var widget = new qx.ui.mobile.form.Button("Error!");
 * var popup = new qx.ui.mobile.dialog.Popup(widget, label);
 * popup.show();
 * widget.addListener("tap", function(){
 *   popup.hide();
 * });
 * 
 * 
 * 
 * In this case everything is as above, except that the popup will get shown next to &#8220;label&#8221;
 * so that the user can understand that the info presented is about the &#8220;Item1&#8221;
 * we also add a tap listener to the button that will hide out popup.
 * 
 * Once created, the instance is reused between show/hide calls.
 * 
 * 
 * var widget = new qx.ui.mobile.form.Button("Error!");
 * var popup = new qx.ui.mobile.dialog.Popup(widget);
 * popup.placeTo(25,100);
 * popup.show();
 * 
 * 
 * Same as the first example, but this time the popup will be shown at the 25,100 coordinates.
 */
//>public
vjo.ctype('qx.ui.mobile.dialog.Popup')
.inherits('qx.ui.mobile.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Registers all needed event listeners
	 * 
	 */
	__registerEventListener : vjo.NEEDS_IMPL,


	/**
	 * Unregisters all needed event listeners
	 * 
	 */
	__unregisterEventListener : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	_applyIcon : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property title.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	_applyTitle : vjo.NEEDS_IMPL,


	/**
	 * Creates the title atom widget.
	 * 
	 */
	_createTitleWidget : vjo.NEEDS_IMPL,


	/**
	 * This method creates the container where the popup&#8217;s widget will be placed
	 * and adds it to the popup.
	 * 
	 */
	_initializeChild : vjo.NEEDS_IMPL,


	/**
	 * This protected method positions the popup widget at the coordinates specified.
	 * It is used internally by the placeTo and _updatePosition methods
	 * 
	 */
	_positionTo : vjo.NEEDS_IMPL,


	/**
	 * Centers this widget to window&#8217;s center position.
	 * 
	 */
	_positionToCenter : vjo.NEEDS_IMPL,


	/**
	 * Resets the position of this element (left, top, margins&#8230;)
	 * 
	 */
	_resetPosition : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called whenever the position of the popup should be updated.
	 * 
	 */
	_updatePosition : vjo.NEEDS_IMPL,


	/**
	 * Adds the widget that will be shown in this popup. This method can be used in the case when you have removed the widget from the popup
	 * or you haven&#8217;t passed it in the constructor.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	getIcon : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property title.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	getTitle : vjo.NEEDS_IMPL,


	/**
	 * Returns the title widget.
	 * 
	 */
	getTitleWidget : vjo.NEEDS_IMPL,


	/**
	 * Hides the popup.
	 * 
	 */
	hide : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property icon
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	initIcon : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property title
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	initTitle : vjo.NEEDS_IMPL,


	/**
	 * Returns the shown state of this popup.
	 * 
	 */
	isShown : vjo.NEEDS_IMPL,


	/**
	 * This method positions the popup widget at the coordinates specified.
	 * 
	 */
	placeTo : vjo.NEEDS_IMPL,


	/**
	 * This method removes the widget shown in the popup.
	 * 
	 */
	removeWidget : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property icon.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	resetIcon : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property title.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	resetTitle : vjo.NEEDS_IMPL,


	/**
	 * A widget to attach this popup to.
	 * 
	 */
	setAnchor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	setIcon : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property title.
	 * 
	 * For further details take a look at the property definition: {@link #title}.
	 * 
	 */
	setTitle : vjo.NEEDS_IMPL,


	/**
	 * This method shows the popup.
	 * First it updates the position, then registers the event handlers, and shows it.
	 * 
	 */
	show : vjo.NEEDS_IMPL,


	/**
	 * Toggles the visibility of this popup.
	 * 
	 */
	toggleVisibility : vjo.NEEDS_IMPL
})
.endType();