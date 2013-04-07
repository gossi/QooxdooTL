/**
 * A set of methods which may be used to retrieve various siblings of nodes.
 */
//>public
vjo.mtype('qx.ui.treevirtual.MFamily')
.protos({
	/**
	 * Get the first child of the specified node.
	 * 
	 */
	familyGetFirstChild : vjo.NEEDS_IMPL,


	/**
	 * Get the last child of the specified node.
	 * 
	 */
	familyGetLastChild : vjo.NEEDS_IMPL,


	/**
	 * Get the next sibling of the specified node.
	 * 
	 */
	familyGetNextSibling : vjo.NEEDS_IMPL,


	/**
	 * Get the previous sibling of the specified node.
	 * 
	 */
	familyGetPrevSibling : vjo.NEEDS_IMPL
})
.endType();