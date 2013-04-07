/**
 * Object Controller
 * 
 * General idea
 * 
 * The idea of the object controller is to make the binding of one model object
 * containing one or more properties as easy as possible. Therefore the
 * controller can take a model as property. Every property in that model can be
 * bound to one or more target properties. The binding will be for
 * atomic types only like Numbers, Strings, ...
 * 
 * Features
 * 
 * 
 * Manages the bindings between the model properties and the different targets
 * No need for the user to take care of the binding ids
 * Can create an bidirectional binding (read- / write-binding)
 * Handles the change of the model which means adding the old targets
 * 
 * 
 * Usage
 * 
 * The controller only can work if a model is set. If the model property is
 * null, the controller is not working. But it can be null on any time.
 * 
 * Cross reference
 * 
 * 
 * If you want to bind a list like widget, use {@link qx.data.controller.List}
 * If you want to bind a tree widget, use {@link qx.data.controller.Tree}
 * If you want to bind a form widget, use {@link qx.data.controller.Form}

 */
//>public
vjo.ctype('qx.data.controller.Object')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Does the work for {@link #addTarget} but without saving the target
	 * to the internal target registry.
	 * 
	 */
	__addTarget : vjo.NEEDS_IMPL,


	/**
	 * Does the work for {@link #removeTarget} but without removing the target
	 * from the internal registry.
	 * 
	 */
	__removeTargetFrom : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called if a new model has been set.
	 * All bindings will be moved to the new model.
	 * 
	 */
	_applyModel : vjo.NEEDS_IMPL,


	/**
	 * Adds a new target to the controller. After adding the target, the given
	 * property of the model will be bound to the targets property.
	 * 
	 */
	addTarget : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


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
	 * Removes the target identified by the three properties.
	 * 
	 */
	removeTarget : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL
})
.endType();