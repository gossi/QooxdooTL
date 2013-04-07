/**
 * This singleton manages global resource aliases.
 * 
 * The AliasManager supports simple prefix replacement on strings. There are
 * some pre-defined aliases, and you can register your own with {@link #add}.
 * The AliasManager is automatically invoked in various situations, e.g. when
 * resolving the icon image for a button, so it is common to register aliases for
 * resource id&#8217;s.
 * You can of course call the AliasManager&#8217;s {@link #resolve}
 * explicitly to get an alias resolution in any situation, but keep that
 * automatic invocation of the AliasManager in mind when defining new aliases as
 * they will be applied globally in many classes, not only your own.
 * 
 * Examples:
 * 
 *   foo -> bar/16pt/baz  (resolves e.g. &#8220;foo/a/b/c.png&#8221; to
 *    &#8220;bar/16pt/baz/a/b/c.png&#8221;)
 *   imgserver -> http&#058;&#047;&#047;imgs03.myserver.com/my/app/
 *    (resolves e.g. &#8220;imgserver/a/b/c.png&#8221; to
 *    &#8220;http&#058;&#047;&#047;imgs03.myserver.com/my/app/a/b/c.png&#8221;)
 * 
 * 
 * For resources, only aliases that resolve to proper resource id&#8217;s can be managed
 * resources, and will be considered unmanaged resources otherwise.
 */
//>public
vjo.ctype('qx.util.AliasManager')
.inherits('qx.util.ValueManager')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * pre-process incoming dynamic value
	 * 
	 */
	_preprocess : vjo.NEEDS_IMPL,


	/**
	 * Define an alias to a resource path
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Get registered aliases
	 * 
	 */
	getAliases : vjo.NEEDS_IMPL,


	/**
	 * Remove a previously defined alias
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Resolves a given path
	 * 
	 */
	resolve : vjo.NEEDS_IMPL
})
.endType();