/**
 * Feature-rich console appender for the qooxdoo logging system.
 * 
 * Creates a small inline element which is placed in the top-right corner
 * of the window. Prints all messages with a nice color highlighting.
 * 
 * 
 * Allows user command inputs.
 * Command history enabled by default (Keyboard up/down arrows).
 * Lazy creation on first open.
 * Clearing the console using a button.
 * Display of offset (time after loading) of each message
 * Supports keyboard shortcuts F7 or Ctrl+D to toggle the visibility

 */
//>public
vjo.ctype('qx.log.appender.Console')
.endType();