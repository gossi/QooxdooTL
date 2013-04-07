/**
 * The Radio button group for mobile usage.
 * 
 * Example
 * 
 * 
 *    var form = new qx.ui.mobile.form.Form();
 * 
 *    var radio1 = new qx.ui.mobile.form.RadioButton();
 *    var radio2 = new qx.ui.mobile.form.RadioButton();
 *    var radio3 = new qx.ui.mobile.form.RadioButton();
 * 
 *    var radiogroup = new qx.ui.mobile.form.RadioGroup(radio1, radio2, radio3);
 * 
 *    form.add(radio1, "Germany");
 *    form.add(radio2, "UK");
 *    form.add(radio3, "USA");
 * 
 *    this.getRoot.add(new qx.ui.mobile.form.renderer.Single(form));

 */
//>public
vjo.ctype('qx.ui.mobile.form.RadioGroup')
.inherits('qx.ui.form.RadioGroup')
.endType();