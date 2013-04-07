/**
 * Adds support for verification of infrastructure requirements to unit test
 * classes.
 */
//>public
vjo.mtype('qx.dev.unit.MRequirementsBasic')
.protos({
	/**
	 * Verifies a list of infrastructure requirements by checking for
	 * corresponding &#8220;has&#8221; methods. If no such method was found,
	 * {@link qx.core.Environment} will be checked for a key matching the given
	 * feature name. Note that asynchronous environment checks are not supported!
	 * 
	 * See the manual for further details:
	 * Defining Test Requirements
	 * 
	 */
	require : vjo.NEEDS_IMPL
})
.endType();