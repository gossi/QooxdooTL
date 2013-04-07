/**
 * This store uses the {@link qx.data.store.Jsonp} store to query Yahoo&#8217;s
 * YQL service. (http://developer.yahoo.com/yql/)
 * 
 * If you want to test your queries, take a look at the YQL console:
 * http://developer.yahoo.com/yql/console/
 */
//>public
vjo.ctype('qx.data.store.Yql')
.inherits('qx.data.store.Jsonp')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL
})
.endType();