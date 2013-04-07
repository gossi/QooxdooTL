/**
 * This class is responsible for creating and maintaining {@link qx.html.Element}
 * instances. It pools decorator elements for reuse.
 */
//>internal
vjo.ctype('qx.ui.core.DecoratorFactory')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Creates an element which may be used for a
	 * decoration render to fill.
	 * 
	 */
	_createDecoratorElement : vjo.NEEDS_IMPL,


	/**
	 * Get a decorator element configured with the given decorator.
	 * 
	 */
	getDecoratorElement : vjo.NEEDS_IMPL,


	/**
	 * Empties the pool in case its invalid.
	 * 
	 */
	invalidatePool : vjo.NEEDS_IMPL,


	/**
	 * Pool or dispose the given decorator element
	 * 
	 */
	poolDecorator : vjo.NEEDS_IMPL
})
.endType();