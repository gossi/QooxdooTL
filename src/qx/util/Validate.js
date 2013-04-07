/**
 * This static class contains a set of default validators.
 * These validators are listed twice
 * 
 *   number
 *   email
 *   string
 *   url
 *   color
 * 
 * All these validators don&#8217;t need an input so the listed function just return a
 * method fitting for the use in the property system.
 * The methods with the check prefix are the returned methods and can be used in
 * other contexts without the property system.
 * 
 * There are three more validators
 * 
 *   range
 *   inArray
 *   regExp
 * 
 * These methods do need some addition parameters to specify the validator. So
 * there is no check function which you can use in other contexts because the
 * check function for the validation is created based on the given parameter.
 * 
 * Example usage for a property
 * 
 * validate: qx.util.Validate.number()
 * 
 * validate: qx.util.Validate.range(0, 100)
 * 
 * Because the methods without the check prefix return a validation method,
 * the function must be called at the property definition. So don&#8217;t forget the
 * ending brackets for those methods without parameters!
 * For the correct usage, take an additional look at the documentation of the
 * {@link qx.core.Property} class.
 */
//>public
vjo.ctype('qx.util.Validate')
.endType();