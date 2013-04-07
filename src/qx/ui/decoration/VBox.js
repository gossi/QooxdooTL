/**
 * The VBox decorator uses three images, which are rendered in a column.
 * 
 * The first and last image always keep their original size. The center
 * image is stretched vertically.
 * 
 * This decorator can be used for widgets with a fixed width, which can be
 * stretched vertically.
 */
//>public
vjo.ctype('qx.ui.decoration.VBox')
.inherits('qx.ui.decoration.AbstractBox')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL
})
.endType();