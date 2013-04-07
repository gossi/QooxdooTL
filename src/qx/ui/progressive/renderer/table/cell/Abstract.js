/**
 * Cell Renderer for Progressive&#8217;s Table.
 * 
 * Many of the methods in this class accept a parameter called cellInfo.  This
 * parameter is an object with the following members:
 * 
 * 
 *   
 *     state
 *   
 *   
 *     The {@link qx.ui.progressive.State} object pertaining to this rendering
 *     session.
 *   
 * 
 * 
 *     rowDiv
 *   
 *   
 *     The "div" DOM element of the row in which this cell is to be added.
 *   
 * 
 * 
 *     element
 *   
 *   
 *     The entire element object returned by the data model.
 *   
 * 
 * 
 *     dataIndex
 *   
 *   
 *     The index into the data element provided by the data model.
 *     Effectively, this is the column number.
 *   
 * 
 * 
 *     cellData
 *   
 *   
 *     The data from the data model, to be rendered.  This the specific column
 *     data for the column being rendered, and is a shorthand for
 *     element.data[element.dataIndex].
 *   
 * 
 * 
 *     height Input/Output parameter!
 *   
 *   
 *     On input to a cell renderer, this contains the height, as determined to
 *     date, for the current row.  The first column being rendered will
 *     receive a height of zero.  Upon return, it may leave the height at
 *     zero, meaning that it will accept any minimum height, or may specify a
 *     minimum height by setting this member.  Subsequent column cell renderers
 *     will receive the maximum height specified by any previous cell
 *     renderer.  Upon completion of calling each of the cell renderers for a
 *     row, the row height will be set to the value found in this member.
 *   

 */
//>public abstract
vjo.ctype('qx.ui.progressive.renderer.table.cell.Abstract')
.inherits('qx.core.Object')
.protos({
	/**
	 * Retrieve any extra attributes the cell renderer wants applied to this
	 * cell.  Extra attributes could be such things as
	 * &#8220;onclick=&#8216;handleClick()&#8217;;&#8221;
	 * 
	 */
	_getCellExtras : vjo.NEEDS_IMPL,


	/**
	 * Retrieve any style characteristics the cell renderer wants applied to
	 * this cell.
	 * 
	 */
	_getCellStyle : vjo.NEEDS_IMPL,


	/**
	 * Retrieve the HTML content to be added to the cell div.
	 * 
	 */
	_getContentHtml : vjo.NEEDS_IMPL,


	/**
	 * Given the provided cell information, generate the HTML for this
	 * cell.
	 * 
	 */
	render : vjo.NEEDS_IMPL
})
.endType();