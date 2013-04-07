/**
 * Form interface for all form widgets which are executable in some way. This
 * could be a button for example.
 */
//>public
vjo.itype('qx.ui.form.IExecutable')
.protos({
	/**
	 * Fire the &#8220;execute&#8221; event on the command.
	 * 
	 */
	execute : vjo.NEEDS_IMPL,


	/**
	 * Return the current set command of this executable.
	 * 
	 */
	getCommand : vjo.NEEDS_IMPL,


	/**
	 * Set the command of this executable.
	 * 
	 */
	setCommand : vjo.NEEDS_IMPL
})
.endType();