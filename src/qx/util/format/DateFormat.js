/**
 * A formatter and parser for dates, see
 * http://www.unicode.org/reports/tr35/#Date_Format_Patterns
 * 
 * Here is a quick overview of the format pattern keys:
 * 
 * Key &nbsp;Description
 *  G  era, e.g. &#8220;AD&#8221;
 *  y  year
 *  Y  week year
 *  u  extended year [Not supported yet]
 *  Q  quarter
 *  q  stand-alone quarter
 *  M  month
 *  L  stand-alone month
 *  I  chinese leap month [Not supported yet]
 *  w  week of year
 *  W  week of month
 *  d  day of month
 *  D  day of year
 *  F  day of week in month [Not supported yet]
 *  g  modified Julian day [Not supported yet]
 *  E  day of week
 *  e  local day of week
 *  c  stand-alone local day of week
 *  a  period of day (am or pm)
 *  h  12-hour hour
 *  H  24-hour hour
 *  K  hour [0-11]
 *  k  hour [1-24]
 *  j  special symbol [Not supported yet]
 *  m  minute
 *  s  second
 *  S  fractional second
 *  A  millisecond in day [Not supported yet]
 *  z  time zone, specific non-location format
 *  Z  time zone, rfc822/gmt format
 *  v  time zone, generic non-location format [Not supported yet]
 *  V  time zone, like z except metazone abbreviations [Not supported yet]
 * 
 * 
 * (This list is preliminary, not all format keys might be implemented). Most
 * keys support repetitions that influence the meaning of the format. Parts of the
 * format string that should not be interpreted as format keys have to be
 * single-quoted.
 * 
 * The same format patterns will be used for both parsing and output formatting.
 */
//>public
vjo.ctype('qx.util.format.DateFormat')
.inherits('qx.core.Object')
.satisfies('qx.util.format.IFormat')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Fills a number with leading zeros (&#8220;25&#8221; -> &#8220;0025&#8221;).
	 * 
	 */
	__fillNumber : vjo.NEEDS_IMPL,


	/**
	 * Returns the day in year of a date.
	 * 
	 */
	__getDayInYear : vjo.NEEDS_IMPL,


	/**
	 * Returns a json object with month and day as keys.
	 * 
	 */
	__getMonthAndDayFromDayOfYear : vjo.NEEDS_IMPL,


	/**
	 * Returns the week in month of a date.
	 * 
	 */
	__getWeekInMonth : vjo.NEEDS_IMPL,


	/**
	 * Returns the week in year of a date.
	 * 
	 */
	__getWeekInYear : vjo.NEEDS_IMPL,


	/**
	 * Returns the week year of a date. (that is the year of the week where this date happens to be)
	 * For a week in the middle of the summer, the year is easily obtained, but for a week
	 * when New Year&#8217;s Eve takes place, the year of that week is ambigous.
	 * The thursday day of that week is used to determine the year.
	 * 
	 */
	__getWeekYear : vjo.NEEDS_IMPL,


	/**
	 * Returns the year of a date when we know the week year
	 * 
	 */
	__getYearFromWeekYearAndMonth : vjo.NEEDS_IMPL,


	/**
	 * Helper method for {@link #format()} and {@link #parse()}.
	 * Parses the date format.
	 * 
	 */
	__initFormatTree : vjo.NEEDS_IMPL,


	/**
	 * Initializes the parse feed.
	 * 
	 * The parse contains everything needed for parsing: The regular expression
	 * (in compiled and uncompiled form) and the used rules.
	 * 
	 */
	__initParseFeed : vjo.NEEDS_IMPL,


	/**
	 * Initializes the static parse rules.
	 * 
	 */
	__initParseRules : vjo.NEEDS_IMPL,


	/**
	 * Returns true if the year is a leap one.
	 * 
	 */
	__isLeapYear : vjo.NEEDS_IMPL,


	/**
	 * Checks wether the rule matches the wildcard or not.
	 * 
	 */
	__isRuleForWildcard : vjo.NEEDS_IMPL,


	/**
	 * Returns the thursday in the same week as the date.
	 * 
	 */
	__thursdayOfSameWeek : vjo.NEEDS_IMPL,


	/**
	 * Applies the new value for locale property
	 * 
	 */
	_applyLocale : vjo.NEEDS_IMPL,


	/**
	 * Formats a date.
	 * 
	 */
	format : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property locale.
	 * 
	 * For further details take a look at the property definition: {@link #locale}.
	 * 
	 */
	getLocale : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property locale
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #locale}.
	 * 
	 */
	initLocale : vjo.NEEDS_IMPL,


	/**
	 * Parses a date.
	 * 
	 */
	parse : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property locale.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #locale}.
	 * 
	 */
	resetLocale : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property locale.
	 * 
	 * For further details take a look at the property definition: {@link #locale}.
	 * 
	 */
	setLocale : vjo.NEEDS_IMPL
})
.endType();