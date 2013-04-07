/**
 * Creates a HTML canvas widget in your mobile application.
 * 
 * Example
 * 
 * Here is an example of how to use the canvas widget.
 * 
 * 
 * var canvas = new qx.ui.mobile.embed.Canvas();
 * 
 * canvas.setWidth(100);
 * canvas.setHeight(100);
 * this.getContent().add(canvas);
 * 
 * var ctx= canvas.getContext2d();
 * ctx.fillStyle="#FF0000";
 * ctx.fillRect(0,0,150,75);
 * ctx.beginPath();
 * ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
 * ctx.moveTo(110,75);
 * ctx.arc(75,75,35,0,Math.PI,false);   // Mouth (clockwise)
 * ctx.moveTo(65,65);
 * ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
 * ctx.moveTo(95,65);
 * ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
 * ctx.stroke();

 */
//>public
vjo.ctype('qx.ui.mobile.embed.Canvas')
.inherits('qx.ui.mobile.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_getTagName : vjo.NEEDS_IMPL,


	/**
	 * Get the canvas element [W3C-HMTL5]
	 * 
	 */
	getCanvas : vjo.NEEDS_IMPL,


	/**
	 * Get the canvas&#8217; 2D rendering context
	 * [W3C-HTML5].
	 * All drawing operations are performed on this context.
	 * 
	 */
	getContext2d : vjo.NEEDS_IMPL,


	/**
	 * Get the height attribute of the canvas element
	 * 
	 */
	getHeight : vjo.NEEDS_IMPL,


	/**
	 * Get the width attribute of the canvas element
	 * 
	 */
	getWidth : vjo.NEEDS_IMPL,


	/**
	 * Set the height attribute of the canvas element. This property controls the
	 * size of the canvas coordinate space.
	 * 
	 */
	setHeight : vjo.NEEDS_IMPL,


	/**
	 * Set the width attribute of the canvas element. This property controls the
	 * size of the canvas coordinate space.
	 * 
	 */
	setWidth : vjo.NEEDS_IMPL
})
.endType();