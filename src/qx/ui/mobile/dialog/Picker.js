/**
 * The picker widget gives the user the possibility to select a value out of an array
 * of values. The picker widget is always shown in a {@link qx.ui.mobile.dialog.Dialog}.
 * 
 * The picker widget is able to display multiple picker slots, for letting the user choose
 * several values at one time, in one single dialog.
 * 
 * The selectable value array is passed to this widget through a {@link qx.data.Array} which represents one picker slot.
 * 
 * Example
 * 
 * Here is an example of how to use the picker widget.
 * 
 * 
 * 
 * var pickerSlot1 = new qx.data.Array(["qx.Desktop", "qx.Mobile", "qx.Website","qx.Server"]);
 * var pickerSlot2 = new qx.data.Array(["1.8", "2.0", "2.0.1", "2.0.2", "2.1","2.2"]);
 * 
 * var picker = new qx.ui.mobile.dialog.Picker();
 * picker.setTitle("Picker");
 * picker.addSlot(pickerSlot1);
 * picker.addSlot(pickerSlot2);
 * 
 * var showPickerButton = new qx.ui.mobile.form.Button("Show Picker");
 * showPickerButton.addListener("tap", picker.show, picker);
 * this.getContent().add(showPickerButton);
 * 
 * // Listener when user has confirmed his selection.
 * // Contains the selectedIndex and values of all slots in a array.
 * picker.addListener("confirmSelection",function(evt){
 *    var pickerData = evt.getData();
 * }, this);
 * 
 * // Listener for change of picker slots.
 * picker.addListener("changeSelection",function(evt){
 *    var slotData = evt.getData();
 * }, this);
 * 

 */
//>public
vjo.ctype('qx.ui.mobile.dialog.Picker')
.inherits('qx.ui.mobile.dialog.Dialog')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Creates a {@link qx.ui.mobile.container.Composite} which represents a picker slot.
	 * 
	 */
	_createPickerSlot : vjo.NEEDS_IMPL,


	/**
	 * Creates a {@link qx.ui.mobile.container.Composite} which represents a picker label.
	 * 
	 */
	_createPickerValueLabel : vjo.NEEDS_IMPL,


	/**
	 * Decreases the selectedIndex on a specific slot, identified by its content element.
	 * 
	 */
	_decreaseSelectedIndex : vjo.NEEDS_IMPL,


	/**
	 * Disposes the picker model, and removes all &#8220;changeBubble&#8221; listeners from it.
	 * 
	 */
	_disposePickerModel : vjo.NEEDS_IMPL,


	/**
	 * Collects data for the &#8220;confirmSelection&#8221; event and fires it.
	 * 
	 */
	_fireConfirmSelection : vjo.NEEDS_IMPL,


	/**
	 * Calculates the needes picker slot height, by it child labels.
	 * 
	 */
	_fixPickerSlotHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns corresponding model for a picker, identified by its content element.
	 * 
	 */
	_getModelByElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the slotIndex of a picker slot, identified by its content element.
	 * 
	 */
	_getSlotIndexByElement : vjo.NEEDS_IMPL,


	/**
	 * Increases the selectedIndex on a specific slot, identified by its content element.
	 * 
	 */
	_increaseSelectedIndex : vjo.NEEDS_IMPL,


	/**
	 * Checks if a selectedIndex of a picker slot is valid.
	 * 
	 */
	_isSelectedIndexValid : vjo.NEEDS_IMPL,


	/**
	 * Handler for touchend events on picker slot.
	 * 
	 */
	_onTouchEnd : vjo.NEEDS_IMPL,


	/**
	 * Handler for touchmove events on picker slot.
	 * 
	 */
	_onTouchMove : vjo.NEEDS_IMPL,


	/**
	 * Handler for touchstart events on picker slot.
	 * 
	 */
	_onTouchStart : vjo.NEEDS_IMPL,


	/**
	 * Remove all listeners from the picker slot composites and destroys them.
	 * 
	 */
	_removePickerSlots : vjo.NEEDS_IMPL,


	/**
	 * Renders this picker widget.
	 * 
	 */
	_render : vjo.NEEDS_IMPL,


	/**
	 * Updates the visual position of all available picker slot elements.
	 * 
	 */
	_updateAllSlots : vjo.NEEDS_IMPL,


	/**
	 * Updates the visual position of the picker slot element,
	 * according to the current selectedIndex of the slot.
	 * 
	 */
	_updateSlot : vjo.NEEDS_IMPL,


	/**
	 * Adds an picker slot to the end of the array.
	 * 
	 */
	addSlot : vjo.NEEDS_IMPL,


	/**
	 * Confirms the selection, fires &#8220;confirmSelection&#8221; data event and hides the picker dialog.
	 * 
	 */
	confirm : vjo.NEEDS_IMPL,


	/**
	 * Getter for the selectedIndex of a picker slot, identified by its index.
	 * 
	 */
	getSelectedIndex : vjo.NEEDS_IMPL,


	/**
	 * Returns the picker slot count, added to this picker.
	 * 
	 */
	getSlotCount : vjo.NEEDS_IMPL,


	/**
	 * Removes the pickerSlot at the given slotIndex.
	 * 
	 */
	removeSlot : vjo.NEEDS_IMPL,


	/**
	 * Setter for the caption of the picker dialog&#8217;s cancel button.
	 * Default is &#8220;Cancel&#8221;.
	 * 
	 */
	setCancelButtonCaption : vjo.NEEDS_IMPL,


	/**
	 * Setter for the caption of the picker dialog&#8217;s confirm button.
	 * Default is &#8220;OK&#8221;.
	 * 
	 */
	setConfirmButtonCaption : vjo.NEEDS_IMPL,


	/**
	 * Setter for the selectedIndex of a picker slot, identified by its index.
	 * 
	 */
	setSelectedIndex : vjo.NEEDS_IMPL,


	/**
	 */
	show : vjo.NEEDS_IMPL
})
.endType();