/**
 * website List Controller
 * 
 * General idea
 * The list controller is responsible for synchronizing data given as model
 * to a DOM element. As definition for a single item, tempaltes are used. More
 * details on tempaltes can be found in {@link qx.bom.Template}.
 * 
 * Features
 * 
 * 
 * Synchronize the model and the target
 * Filtering
 * 
 * 
 * Usage
 * 
 * As model, {@link qx.data.Array}s and plain JavaScript Arrays work. As a
 * Target, you have to use a DOM element e.g. a plain DIV element. Make sure
 * you have the template you are referencing in the DOM.
 */
//>public
vjo.ctype('qx.data.controller.website.List')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Responsible for removing all items from the targe element.
	 * 
	 */
	__emptyTarget : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	_applyDelegate : vjo.NEEDS_IMPL,


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
	 * Applies changes of the property value of the property templateId.
	 * 
	 * For further details take a look at the property definition: {@link #templateId}.
	 * 
	 */
	_applyTemplateId : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	getDelegate : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property templateId.
	 * 
	 * For further details take a look at the property definition: {@link #templateId}.
	 * 
	 */
	getTemplateId : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property templateId
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #templateId}.
	 * 
	 */
	initTemplateId : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property templateId.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #templateId}.
	 * 
	 */
	resetTemplateId : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	setDelegate : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property templateId.
	 * 
	 * For further details take a look at the property definition: {@link #templateId}.
	 * 
	 */
	setTemplateId : vjo.NEEDS_IMPL,


	/**
	 * This is the main method which will take the data from the model and
	 * push it to the target view. If you are using a plain Array as model,
	 * you need to call that method every time you want to see the changed model
	 * in the view while using {@link qx.data.Array}s will do that
	 * automatically for you.
	 * This method also attaches to every created DOM element the model object
	 * which was used to create it at .$model.
	 * 
	 */
	update : vjo.NEEDS_IMPL
})
.endType();