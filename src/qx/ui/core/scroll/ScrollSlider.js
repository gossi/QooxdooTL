/**
 * Minimal modified version of the {@link qx.ui.form.Slider} to be
 * used by {@link qx.ui.core.scroll.ScrollBar}.
 */
//>internal
vjo.ctype('qx.ui.core.scroll.ScrollSlider')
.inherits('qx.ui.form.Slider')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	getSizeHint : vjo.NEEDS_IMPL
})
.endType();