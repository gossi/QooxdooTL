/**
 * A string builder class
 * 
 * += operator is faster in Firefox and Opera.
 * Array push/join is faster in Internet Explorer
 * 
 * Even with this wrapper, which costs some time, this is
 * faster in Firefox than the alternative Array concat in
 * all browsers (which is in relation to IE&#8217;s performance issues
 * only marginal). The IE performance loss caused by this
 * wrapper is not relevant.
 * 
 * So this class seems to be the best compromise to handle
 * string concatenation.
 */
//>public
vjo.ctype('qx.util.StringBuilder')
.inherits('qx.type.BaseArray')
.protos({
	/**
	 * Creates a new StringBuilder with the given length or as a concatenation of the given arguments substrings.
	 * 
	 * 
	 * var sb1 = new qx.util.StringBuilder(length);
	 * var sb2 = new qx.util.StringBuilder(item0, item1, ..., itemN);
	 * 
	 * 
	 * 
	 * length: The initial length of the StringBuilder.
	 * itemN:  A substring that will make up the newly created StringBuilder.
	 * The StringBuilder&#8217;s length property is set to the number of arguments.

	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adds new strings. Supports multiple arguments.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Removes all content
	 * 
	 */
	clear : vjo.NEEDS_IMPL,


	/**
	 * Returns the concatted strings.
	 * 
	 */
	get : vjo.NEEDS_IMPL,


	/**
	 * Whether the string builder is empty
	 * 
	 */
	isEmpty : vjo.NEEDS_IMPL,


	/**
	 * Returns the size of the strings
	 * 
	 */
	size : vjo.NEEDS_IMPL
})
.endType();