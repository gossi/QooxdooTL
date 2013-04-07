/**
 * Main qooxdoo logging class.
 * 
 * Used as central logging feature by qx.core.Object.
 * 
 * Extremely modular and lightweight to support logging at bootstrap and
 * at shutdown as well.
 * 
 * 
 * Supports dynamic appenders to push the output to the user
 * Supports buffering of the last 50 messages (configurable)
 * Supports different debug levels (&#8220;debug&#8221;, &#8220;info&#8221;, &#8220;warn&#8221; or &#8220;error&#8221;)
 * Simple data serialization for incoming messages

 */
//>public
vjo.ctype('qx.log.Logger')
.endType();