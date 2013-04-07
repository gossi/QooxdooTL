/**
 * This class provides the domupdated event. The event is
 * delegated to all widget instances that have a
 * listener for the domupdated event registered.
 */
//>internal
vjo.ctype('qx.ui.mobile.core.DomUpdatedHandler')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * This method is called by all DOM tree modifying routines
	 * to inform the widgets.
	 * 
	 */
	refresh : vjo.NEEDS_IMPL
})
.endType();