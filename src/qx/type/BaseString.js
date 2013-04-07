/**
 * This class emulates the built-in JavaScript String class. It can be used as
 * base class for classes, which need to derive from String.
 * 
 * Instances of this class can be used in any place a JavaScript string can.
 */
//>public
vjo.ctype('qx.type.BaseString')
.inherits('Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Call the same method of the super class.
	 * 
	 */
	base : vjo.NEEDS_IMPL,


	/**
	 * Returns the specified character from a string.
	 * 
	 * Characters in a string are indexed from left to right. The index of the
	 * first character is 0, and the index of the last character in a string
	 * called stringName is stringName.length &#8211; 1. If the index you supply is
	 * out of range, JavaScript returns an empty string.
	 * 
	 */
	charAt : vjo.NEEDS_IMPL,


	/**
	 * Returns a number indicating the Unicode value of the character at the given index.
	 * 
	 */
	charCodeAt : vjo.NEEDS_IMPL,


	/**
	 * Combines the text of two or more strings and returns a new string.
	 * Changes to the text in one string do not affect the other string.
	 * 
	 */
	concat : vjo.NEEDS_IMPL,


	/**
	 * Returns the index within the calling String object of the first
	 * occurrence of the specified value, starting the search at fromIndex,
	 * returns -1 if the value is not found.
	 * 
	 */
	indexOf : vjo.NEEDS_IMPL,


	/**
	 * Returns the index within the calling String object of the last occurrence
	 * of the specified value, or -1 if not found. The calling string is
	 * searched backward, starting at fromIndex.
	 * 
	 */
	lastIndexOf : vjo.NEEDS_IMPL,


	/**
	 * Used to retrieve the matches when matching a string against a regular
	 * expression.
	 * 
	 * If the regular expression does not include the g flag, returns the same
	 * result as regexp.exec(string). If the regular expression includes the g
	 * flag, the method returns an Array containing all matches.
	 * 
	 */
	match : vjo.NEEDS_IMPL,


	/**
	 * Finds a match between a regular expression and a string, and replaces the
	 * matched substring with a new substring.
	 * 
	 */
	replace : vjo.NEEDS_IMPL,


	/**
	 * Executes the search for a match between a regular expression and this
	 * String object.
	 * 
	 * If successful, search returns the index of the regular expression inside
	 * the string. Otherwise, it returns -1.
	 * 
	 */
	search : vjo.NEEDS_IMPL,


	/**
	 * Extracts a section of a string and returns a new string.
	 * 
	 * Slice extracts the text from one string and returns a new string. Changes
	 * to the text in one string do not affect the other string.
	 * As a negative index, endSlice indicates an offset from the end of the
	 * string.
	 * 
	 */
	slice : vjo.NEEDS_IMPL,


	/**
	 * Splits a String object into an array of strings by separating the string
	 * into substrings.
	 * 
	 * When found, separator is removed from the string and the substrings are
	 * returned in an array. If separator is omitted, the array contains one
	 * element consisting of the entire string.
	 * 
	 * If separator is a regular expression that contains capturing parentheses,
	 * then each time separator is matched the results (including any undefined
	 * results) of the capturing parentheses are spliced into the output array.
	 * However, not all browsers support this capability.
	 * 
	 * Note: When the string is empty, split returns an array containing one
	 * 
	 */
	split : vjo.NEEDS_IMPL,


	/**
	 * Returns the characters in a string beginning at the specified location
	 * through the specified number of characters.
	 * 
	 * Start is a character index. The index of the first character is 0, and the
	 * index of the last character is 1 less than the length of the string. substr
	 *  begins extracting characters at start and collects length characters
	 * (unless it reaches the end of the string first, in which case it will
	 * return fewer).
	 * If start is positive and is greater than or equal to the length of the
	 * string, substr returns an empty string.
	 * 
	 */
	substr : vjo.NEEDS_IMPL,


	/**
	 * Returns a subset of a String object.
	 * 
	 * substring extracts characters from indexA up to but not including indexB.
	 * In particular:
	 * If indexA equals indexB, substring returns an empty string.
	 * If indexB is omitted, substring extracts characters to the end of the
	 * string.
	 * If either argument is less than 0 or is NaN, it is treated as if it were
	 * 0.
	 * If either argument is greater than stringName.length, it is treated as if
	 * it were stringName.length.
	 * If indexA is larger than indexB, then the effect of substring is as if
	 * the two arguments were swapped; for example, str.substring(1, 0) == str.substring(0, 1).
	 * 
	 */
	substring : vjo.NEEDS_IMPL,


	/**
	 * Return unique hash code of object
	 * 
	 */
	toHashCode : vjo.NEEDS_IMPL,


	/**
	 * The characters within a string are converted to lower case while
	 * respecting the current locale.
	 * 
	 * The toLowerCase method returns the value of the string converted to
	 * lowercase. toLowerCase does not affect the value of the string itself.
	 * 
	 */
	toLocaleLowerCase : vjo.NEEDS_IMPL,


	/**
	 * The characters within a string are converted to upper case while
	 * respecting the current locale.
	 * The toUpperCase method returns the value of the string converted to
	 * uppercase. toUpperCase does not affect the value of the string itself.
	 * 
	 */
	toLocaleUpperCase : vjo.NEEDS_IMPL,


	/**
	 * Returns the calling string value converted to lowercase.
	 * The toLowerCase method returns the value of the string converted to
	 * lowercase. toLowerCase does not affect the value of the string itself.
	 * 
	 */
	toLowerCase : vjo.NEEDS_IMPL,


	/**
	 * Returns a string representing the specified object.
	 * 
	 * The valueOf method of String returns the primitive value of a String
	 * object as a string data type.
	 * This method is usually called internally by JavaScript and not
	 * explicitly in code.
	 * 
	 */
	toString : vjo.NEEDS_IMPL,


	/**
	 * Returns the calling string value converted to uppercase.
	 * The toUpperCase method returns the value of the string converted to
	 * uppercase. toUpperCase does not affect the value of the string itself.
	 * 
	 */
	toUpperCase : vjo.NEEDS_IMPL,


	/**
	 * Returns the primitive value of a String object.
	 * 
	 * The valueOf method of String returns the primitive value of a String
	 * object as a string data type.
	 * This method is usually called internally by JavaScript and not
	 * explicitly in code.
	 * 
	 */
	valueOf : vjo.NEEDS_IMPL
})
.endType();