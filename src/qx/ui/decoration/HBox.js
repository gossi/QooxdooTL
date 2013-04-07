/**
 * The HBox decorator uses three images, which are rendered in a row.
 * 
 * The first and last image always keep their original size. The center
 * image is stretched horizontally.
 * 
 * This decorator can be used for widgets with a fixed height, which can be
 * stretched horizontally.
 */
//>public
vjo.ctype('qx.ui.decoration.HBox')
.inherits('qx.ui.decoration.AbstractBox')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL
})
.endType();