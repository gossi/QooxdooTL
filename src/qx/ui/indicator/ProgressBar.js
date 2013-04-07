/**
 * The Progress bar is designed to simply display the current % complete
 * for a process.
 * 
 * The Value is limited between 0 and Maximum value.
 * It&#8217;s not allowed to set a Maximum value of 0.  If you set a Maximum value
 * bigger than 0, but smaller than Value, it will be limited to Value.
 * 
 * The following example creates and adds a progress bar to the root element.
 * A listener is used to show the user if the value is changed,
 * and another one when the progress is complete.
 * 
 * 
 * var pb = new qx.ui.indicator.ProgressBar();
 * this.getRoot().add(pb, { left : 20, top: 20});
 * 
 * pb.addListener("change", function(e) {
 *   this.debug(e.getData()); // % complete
 *   this.debug(pb.getValue()); // absolute value
 * });
 * 
 * pb.addListener("complete", function(e) {
 *   this.debug("complete");
 * });
 * 
 * //set a value
 * pb.setValue(20);

 */
//>public
vjo.ctype('qx.ui.indicator.ProgressBar')
.inherits('qx.ui.container.Composite')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Update the progress bar.
	 * 
	 */
	_changeProgress : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Returns the maximum value of progress bar.
	 * 
	 */
	getMaximum : vjo.NEEDS_IMPL,


	/**
	 * Returns the progress bar value.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the maximum value of the progress bar.
	 * 
	 */
	setMaximum : vjo.NEEDS_IMPL,


	/**
	 * Sets the value of the progress bar.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL
})
.endType();