/**
 * Form Controller
 * 
 * General idea
 * 
 * The form controller is responsible for connecting a form with a model. If no
 * model is given, a model can be created. This created model will fit exactly
 * to the given form and can be used for serialization. All the connections
 * between the form items and the model are handled by an internal
 * {@link qx.data.controller.Object}.
 * 
 * Features
 * 
 * 
 * Connect a form to a model (bidirectional)
 * Create a model for a given form
 * 
 * 
 * Usage
 * 
 * The controller only works if both a controller and a model are set.
 * Creating a model will automatically set the created model.
 * 
 * Cross reference
 * 
 * 
 * If you want to bind single values, use {@link qx.data.controller.Object}
 * If you want to bind a list like widget, use {@link qx.data.controller.List}
 * If you want to bind a tree widget, use {@link qx.data.controller.Tree}

 */
//>public
vjo.ctype('qx.data.controller.Form')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the given item implements
	 * {@link qx.ui.core.ISingleSelection} and
	 * {@link qx.ui.form.IModelSelection}.
	 * 
	 */
	__isModelSelectable : vjo.NEEDS_IMPL,


	/**
	 * Internal helper for setting up the bindings using
	 * {@link qx.data.controller.Object#addTarget}. All bindings are set
	 * up bidirectional.
	 * 
	 */
	__setUpBinding : vjo.NEEDS_IMPL,


	/**
	 * Internal helper for removing all set up bindings using
	 * {@link qx.data.controller.Object#removeTarget}.
	 * 
	 */
	__tearDownBinding : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	_applyModel : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property target.
	 * 
	 * For further details take a look at the property definition: {@link #target}.
	 * 
	 */
	_applyTarget : vjo.NEEDS_IMPL,


	/**
	 * The form controller uses for setting up the bindings the fundamental
	 * binding layer, the {@link qx.data.SingleValueBinding}. To achieve a
	 * binding in both directions, two bindings are neede. With this method,
	 * you have the opportunity to set the options used for the bindings.
	 * 
	 */
	addBindingOptions : vjo.NEEDS_IMPL,


	/**
	 * Creates and sets a model using the {@link qx.data.marshal.Json} object.
	 * Remember that this method can only work if the form is set. The created
	 * model will fit exactly that form. Changing the form or adding an item to
	 * the form will need a new model creation.
	 * 
	 */
	createModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property target.
	 * 
	 * For further details take a look at the property definition: {@link #target}.
	 * 
	 */
	getTarget : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property model
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	initModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property target
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #target}.
	 * 
	 */
	initTarget : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property model.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	resetModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property target.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #target}.
	 * 
	 */
	resetTarget : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property target.
	 * 
	 * For further details take a look at the property definition: {@link #target}.
	 * 
	 */
	setTarget : vjo.NEEDS_IMPL,


	/**
	 * Responsible for synching the data from entered in the form to the model.
	 * Please keep in mind that this method only works if you create the form
	 * with selfUpdate set to true. Otherwise, this method will
	 * do nothing because updates will be synched automatically on every
	 * change.
	 * 
	 */
	updateModel : vjo.NEEDS_IMPL
})
.endType();