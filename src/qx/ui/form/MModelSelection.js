/**
 * This mixin offers the selection of the model properties.
 * It can only be included if the object including it implements the
 * {@link qx.ui.core.ISingleSelection} interface and the selectables implement
 * the {@link qx.ui.form.IModel} interface.
 */
//>public
vjo.mtype('qx.ui.form.MModelSelection')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Listener for the change of the internal model selection data array.
	 * 
	 */
	__onModelSelectionArrayChange : vjo.NEEDS_IMPL,


	/**
	 * Handler for the selection change of the including class e.g. SelectBox,
	 * List, ...
	 * It sets the new modelSelection via {@link #setModelSelection}.
	 * 
	 */
	__onModelSelectionChange : vjo.NEEDS_IMPL,


	/**
	 * Returns always an array of the models of the selected items. If no
	 * item is selected or no model is given, the array will be empty.
	 * 
	 * CAREFUL! The model selection can only work if every item item in the
	 * selection providing widget has a model property!
	 * 
	 */
	getModelSelection : vjo.NEEDS_IMPL,


	/**
	 * Takes the given models in the array and searches for the corresponding
	 * selectables. If an selectable does have that model attached, it will be
	 * selected.
	 * 
	 * Attention: This method can have a time complexity of O(n^2)!
	 * 
	 * CAREFUL! The model selection can only work if every item item in the
	 * selection providing widget has a model property!
	 * 
	 */
	setModelSelection : vjo.NEEDS_IMPL
})
.endType();