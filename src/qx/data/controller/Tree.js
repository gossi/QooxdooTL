/**
 * Tree Controller
 * 
 * General idea
 * 
 * The tree controller is the controller made for the {@link qx.ui.tree.Tree}
 * widget in qooxdoo. Therefore, it is responsible for creating and adding the
 * tree folders to the tree given as target.
 * 
 * Features
 * 
 * 
 * Synchronize the model and the target
 * Label and icon are bindable
 * Takes care of the selection
 * Passes on the options used by the bindings
 * 
 * 
 * Usage
 * 
 * As model, you can use every qooxdoo widget structure having one property,
 * which is a data array holding the children of the current node. There can
 * be as many additional as you like.
 * You need to specify a model, a target, a child path and a label path to
 * make the controller work.
 * 
 * Cross reference
 * 
 * 
 * If you want to bind single values, use {@link qx.data.controller.Object}
 * If you want to bind a list like widget, use {@link qx.data.controller.List}
 * If you want to bin a form widget, use {@link qx.data.controller.Form}

 */
//>public
vjo.ctype('qx.data.controller.Tree')
.inherits('qx.core.Object')
.satisfies('qx.data.controller.ISelection')
.mixin('qx.data.controller.MSelection')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Internal helper method adding the right bindings from the given
	 * modelNode to the given treeNode.
	 * 
	 */
	__addBinding : vjo.NEEDS_IMPL,


	/**
	 * Internal helper function to build up the tree corresponding to the data
	 * stored in the model. This function creates the root node and hands the
	 * recursive creation of all subtrees to the {#__updateTreeChildren}
	 * function.
	 * 
	 */
	__buildTree : vjo.NEEDS_IMPL,


	/**
	 * Handler function taking care of the changes of the children array itself.
	 * 
	 */
	__changeChildrenArray : vjo.NEEDS_IMPL,


	/**
	 * Handler function handling the change of a length of a children array.
	 * This method invokes a rebuild of the corresponding subtree.
	 * 
	 */
	__changeModelChildren : vjo.NEEDS_IMPL,


	/**
	 * Removes all folders and bindings for the current set target.
	 * 
	 */
	__emptyTarget : vjo.NEEDS_IMPL,


	/**
	 * Removes all child folders of the given tree node. Also removes all
	 * bindings for the removed folders.
	 * 
	 */
	__removeAllFolders : vjo.NEEDS_IMPL,


	/**
	 * Internal helper method for removing bindings for a given model node.
	 * 
	 */
	__removeBinding : vjo.NEEDS_IMPL,


	/**
	 * Internal helper method removing the given folder form the given root
	 * node. All set bindings will be removed and the old tree folder will be
	 * destroyed.
	 * 
	 */
	__removeFolder : vjo.NEEDS_IMPL,


	/**
	 * Helper method renewing all bindings with the currently saved options and
	 * paths.
	 * 
	 */
	__renewBindings : vjo.NEEDS_IMPL,


	/**
	 * Main method building up the tree folders corresponding to the given
	 * model node. The new created subtree will be added to the given tree node.
	 * 
	 */
	__updateTreeChildren : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called after the child path had been
	 * changed. This method invoke a new building of the tree.
	 * 
	 */
	_applyChildPath : vjo.NEEDS_IMPL,


	/**
	 * If a new delegate is set, it applies the stored configuration for the
	 * tree folder to the already created folders once.
	 * 
	 */
	_applyDelegate : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called after the icon options had been
	 * changed. This method will invoke a renewing of all bindings.
	 * 
	 */
	_applyIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called after the icon path had been
	 * changed. This method invoke a new building of the tree.
	 * 
	 */
	_applyIconPath : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called after the label options had been
	 * changed. This method will invoke a renewing of all bindings.
	 * 
	 */
	_applyLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called after the label path had been
	 * changed. This method invoke a new building of the tree.
	 * 
	 */
	_applyLabelPath : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called after the model had been
	 * changed. This method invoke a new building of the tree.
	 * 
	 */
	_applyModel : vjo.NEEDS_IMPL,


	/**
	 * Apply-method which will be called after the target had been
	 * changed. This method will clean up the old tree and will initially
	 * build up the new tree containing the data from the model.
	 * 
	 */
	_applyTarget : vjo.NEEDS_IMPL,


	/**
	 * Creates a TreeFolder and delegates the configure method if a delegate is
	 * set and the needed function (configureItem) is available.
	 * 
	 */
	_createItem : vjo.NEEDS_IMPL,


	/**
	 * Helper method for applying the delegate It checks if a bindItem
	 * is set end invokes the initial process to apply the given function.
	 * 
	 */
	_setBindItem : vjo.NEEDS_IMPL,


	/**
	 * Helper method for applying the delegate It checks if a configureItem
	 * is set end invokes the initial process to apply the given function.
	 * 
	 */
	_setConfigureItem : vjo.NEEDS_IMPL,


	/**
	 * Helper method for applying the delegate. It checks if a createItem
	 * is set and invokes the initial process to apply the given function.
	 * 
	 */
	_setCreateItem : vjo.NEEDS_IMPL,


	/**
	 * Helper method for binding the default properties (label and icon) from
	 * the model to the target widget.
	 * 
	 * This method should only be called in the
	 * {@link qx.data.controller.IControllerDelegate#bindItem} function
	 * implemented by the {@link #delegate} property.
	 * 
	 */
	bindDefaultProperties : vjo.NEEDS_IMPL,


	/**
	 * Helper method for binding a given property from the model to the target
	 * widget.
	 * This method should only be called in the
	 * {@link qx.data.controller.IControllerDelegate#bindItem} function
	 * implemented by the {@link #delegate} property.
	 * 
	 */
	bindProperty : vjo.NEEDS_IMPL,


	/**
	 * Helper method for binding a given property from the target widget to
	 * the model.
	 * This method should only be called in the
	 * {@link qx.data.controller.IControllerDelegate#bindItem} function
	 * implemented by the {@link #delegate} property.
	 * 
	 */
	bindPropertyReverse : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property childPath.
	 * 
	 * For further details take a look at the property definition: {@link #childPath}.
	 * 
	 */
	getChildPath : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	getDelegate : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconOptions.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	getIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property iconPath.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	getIconPath : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property labelOptions.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	getLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property labelPath.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	getLabelPath : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property childPath
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #childPath}.
	 * 
	 */
	initChildPath : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property iconOptions
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	initIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property iconPath
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	initIconPath : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property labelOptions
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	initLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property labelPath
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	initLabelPath : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property childPath.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #childPath}.
	 * 
	 */
	resetChildPath : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property iconOptions.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	resetIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property iconPath.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	resetIconPath : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property labelOptions.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	resetLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property labelPath.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	resetLabelPath : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property childPath.
	 * 
	 * For further details take a look at the property definition: {@link #childPath}.
	 * 
	 */
	setChildPath : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	setDelegate : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconOptions.
	 * 
	 * For further details take a look at the property definition: {@link #iconOptions}.
	 * 
	 */
	setIconOptions : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property iconPath.
	 * 
	 * For further details take a look at the property definition: {@link #iconPath}.
	 * 
	 */
	setIconPath : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property labelOptions.
	 * 
	 * For further details take a look at the property definition: {@link #labelOptions}.
	 * 
	 */
	setLabelOptions : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property labelPath.
	 * 
	 * For further details take a look at the property definition: {@link #labelPath}.
	 * 
	 */
	setLabelPath : vjo.NEEDS_IMPL,


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
	setTarget : vjo.NEEDS_IMPL
})
.endType();