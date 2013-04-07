/**
 * Available commands for the HtmlArea component
 */
//>public
vjo.ctype('qx.bom.htmlarea.manager.Command')
.inherits('qx.core.Object')
.protos({
	/**
	 * Constructor
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Processes the given element collection and collects the applied CSS
	 * styles. Does some additional corrections on the styles to retrieve the
	 * correct values.
	 * 
	 */
	__collectStylesOfElementCollection : vjo.NEEDS_IMPL,


	/**
	 * Internal method to deal with special cases when executing commands
	 * 
	 */
	__executeCommand : vjo.NEEDS_IMPL,


	/**
	 * Helper function which generates a documentFragment of -tags
	 * which can be used to apply the current style to an element.
	 * 
	 * *** ONLY IN USE FOR GECKO ***
	 * 
	 */
	__generateHelperNodes : vjo.NEEDS_IMPL,


	/**
	 * Helper function which generates a string containing HTML which can be
	 * used to apply the current style to an element.
	 * 
	 * *** ONLY IN USE FOR GECKO ***
	 * 
	 */
	__generateHelperString : vjo.NEEDS_IMPL,


	/**
	 * Generate &#8220;span&#8221; elements to &#8220;save&#8221; the formatting after an image
	 * was inserted.
	 * 
	 */
	__generateImageFormatElements : vjo.NEEDS_IMPL,


	/**
	 * Helper function which walks over all given parent
	 * elements and searches for an valid value for &#8220;background-color&#8221;.
	 * 
	 * Returns the computed value of &#8220;background-color&#8221; of one parent
	 * element, if it contains a real color.
	 * 
	 */
	__getBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Works with the current styles and creates a hierarchy which can be
	 * used to create nodes or strings out of the hierarchy.
	 * 
	 * *** ONLY IN USE FOR GECKO ***
	 * 
	 */
	__getCurrentStylesGrouped : vjo.NEEDS_IMPL,


	/**
	 * returns the content of the actual range as text
	 * 
	 */
	__getSelectedHtml : vjo.NEEDS_IMPL,


	/**
	 * Returns the content of the actual range as text
	 * 
	 */
	__getSelectedText : vjo.NEEDS_IMPL,


	/**
	 * Returns the range to operate on
	 * 
	 */
	__getTargetRange : vjo.NEEDS_IMPL,


	/**
	 * Helper function which walks over all given parent
	 * elements and stores all text-decoration values and colors.
	 * 
	 * Returns an array containing all computed values of &#8220;text-decoration&#8221;
	 * and &#8220;text-color&#8221;.
	 * 
	 */
	__getTextDecorations : vjo.NEEDS_IMPL,


	/**
	 * Gecko inserts a superfluous paragraph despite our own paragraph
	 * handling. If detected we remove this element
	 * 
	 */
	__hideSuperfluousParagraph : vjo.NEEDS_IMPL,


	/**
	 * Inserts a paragraph tag around selection or at the insert point
	 * using executeCommand.
	 * 
	 */
	__insertHelperParagraph : vjo.NEEDS_IMPL,


	/**
	 * Internal method to insert an horizontal ruler in the document
	 * 
	 */
	__insertHr : vjo.NEEDS_IMPL,


	/**
	 * Inserts a list.
	 * Ensures that the list is inserted without indents. If any indents are
	 * present they are removed before inserting the list.
	 * This only applies for IE since other browsers are removing the indents
	 * as default.
	 * 
	 */
	__insertList : vjo.NEEDS_IMPL,


	/**
	 * This little helper method takes a node as argument and looks along the
	 * parent hierarchy for any &#8220;blockquote&#8221; elements and removes them.
	 * 
	 */
	__manualOutdent : vjo.NEEDS_IMPL,


	/**
	 * Checks if the focus node is not inside a paragraph tag.
	 * 
	 */
	__paragraphMissing : vjo.NEEDS_IMPL,


	/**
	 * Populate the internal &#8220;commands&#8221; object with the available commands and their settings.
	 * 
	 */
	__populateCommandList : vjo.NEEDS_IMPL,


	/**
	 * Walks over the collected styles and gets inherited value of each.
	 * 
	 */
	__processCollectedStyles : vjo.NEEDS_IMPL,


	/**
	 * Internal method to set a background color for the whole document
	 * 
	 */
	__setBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the background image of the document
	 * 
	 */
	__setBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Special implementation for Gecko browser to fix the wrong formatting
	 * at the beginning of a new line.
	 * 
	 */
	__setBold : vjo.NEEDS_IMPL,


	/**
	 * Internal method to change the font size of the selection.
	 * Most of the code is used to change the size of the bullet points
	 * synchronous to it&#8217;s content.
	 * 
	 */
	__setFontSize : vjo.NEEDS_IMPL,


	/**
	 * Special implementation for Gecko browser to fix the wrong formatting
	 * at the beginning of a new line.
	 * 
	 */
	__setItalic : vjo.NEEDS_IMPL,


	/**
	 * Special implementation for Gecko browser to fix the wrong formatting
	 * at the beginning of a new line.
	 * 
	 * Special implementation for webkit browser to set the text-decoration
	 * strikethrough. In webkit the apply of text-decoration is different to other
	 * browsers and cannot be performed with an execCommand
	 * 
	 */
	__setStrikeThrough : vjo.NEEDS_IMPL,


	/**
	 * Helper function to set a text align on a range.
	 * In IE we need to explicitly get the current range before executing
	 * the font size command on it.
	 * 
	 */
	__setTextAlign : vjo.NEEDS_IMPL,


	/**
	 * Special implementation for Gecko browser to fix the wrong formatting
	 * at the beginning of a new line.
	 * 
	 * Special implementation for webkit browser to set the text-decoration
	 * underline. In webkit the apply of text-decoration is different to other
	 * browsers and cannot be performed with an execCommand
	 * 
	 */
	__setUnderline : vjo.NEEDS_IMPL,


	/**
	 * Checks the formatting at the beginning of a line and resets the
	 * formatting manually if necessary.
	 * 
	 * This workaround fixes the wrong behaviour of Gecko browser which does
	 * not remove the formatting itself if the cursor is at the beginning of a
	 * new line and the user has not entered any text yet.
	 * 
	 */
	__syncFormattingAtBeginOfLine : vjo.NEEDS_IMPL,


	/**
	 * Executes the given command
	 * 
	 */
	execute : vjo.NEEDS_IMPL,


	/**
	 * Returns the commandobject of the given command name
	 * 
	 */
	getCommandObject : vjo.NEEDS_IMPL,


	/**
	 * Internal helper function which retrieves all style settings, which are set
	 * on the focus node and saves them on a span element.
	 * 
	 */
	getCurrentStyles : vjo.NEEDS_IMPL,


	/**
	 * Inserts a paragraph when hitting the &#8220;enter&#8221; key
	 * 
	 */
	insertParagraphOnLinebreak : vjo.NEEDS_IMPL,


	/**
	 * Set the contentDocument on which this manager should execute
	 * his commands
	 * 
	 */
	setContentDocument : vjo.NEEDS_IMPL
})
.endType();