/**
 * Processes the incoming log entry and displays it by means of the native
 * logging capabilities of the client.
 * 
 * Supported browsers:
 * * Firefox =4 using the Web Console.
 * * WebKit browsers using the Web Inspector/Developer Tools.
 * * Internet Explorer 8+ using the F12 Developer Tools.
 * * Opera >=10.60 using either the Error Console or Dragonfly
 * 
 * Currently unsupported browsers:
 * * Opera 
 */
//>public
vjo.ctype('qx.log.appender.Native')
.endType();