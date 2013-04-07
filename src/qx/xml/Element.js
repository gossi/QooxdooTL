/**
 * Cross browser XML Element API
 * 
 * API to select, query and serialize XML elements.
 * 
 * Further information:
 * 
 * 
 * MDN Parsing and Serializing XML
 * 
 * 
 * Please note that nodes selected using the selectSingleNode() and
 * selectNodes() methods remain in their document context so
 * qx.xml.Element.selectNodes(foo, &#8221;//bar&#8221;);
 * will search the entire document for any nodes named &#8220;bar&#8221;, not just the
 * foo node.
 */
//>public
vjo.ctype('qx.xml.Element')
.endType();