#!/usr/bin/env python
import sys, getopt, os
import json
import re

root = os.path.dirname(os.path.realpath(__file__))
destination = root + '/../src'

# config
types = ['class', 'interface', 'mixin', 'object']
vjoTypes = {
	'class': 'ctype',
	'interface': 'itype',
	'mixin': 'mtype',
	'object': 'otype'
}

# indent
INDENT = '\t'
lvl = 0

def indent(lvl):
	out = ''
	for i in range(0, lvl):
		out += INDENT
		
	return out
	
# from django strip_tags: https://github.com/django/django/blob/master/django/utils/html.py
strip_tags_re = re.compile(r'</?\S([^=>]*=(\s*"[^"]*"|\s*\'[^\']*\'|\S*)|[^>])*?>', re.IGNORECASE)
def strip_tags(value):
    """Returns the given HTML with all tags stripped."""
    return strip_tags_re.sub('', value)
	
def jsonRepr(data):
	out = ''
	if isinstance(data, list):
		print data
		out = "['{}']".format(','.join([jsonRepr(item) for item in data]))
		
	elif isinstance(data, unicode):
		out = "'{}'".format(data)
	
	else:
		out = repr(data)
		
	return out
	
def javaDoc(value, lvl):
	out = indent(lvl) + '/**\n'
	
	def printString(value, lvl):
		out = ''
		lines = value.splitlines(True)
		for val in lines:
			out += indent(lvl) + ' * ' + val
		if len(out) > 0:
			out = out + '\n'
		return out
	
	if isinstance(value, unicode):
		value = value.encode('utf-8')
		
	if isinstance(value, str):
		out += printString(value, lvl)
	elif isinstance(value, list):
		for val in value:
			out += printString(val, lvl)
			out += indent(lvl) + ' * \n'
			
	out += indent(lvl) + ' */\n'
	
	return out

def getChild(childs, type):
	if (len(childs) > 0):
		for node in childs:
			if node['type'] and node['type'] == type:
				return node

def getRel(value):
	if isinstance(value, unicode):
		value = value.encode('utf-8')
		
	vals = value.split(',')
	if (len(vals) > 1):
		return "['" + "','".join(vals) + "']"
	else:
		return "'"+value+"'"
	

def getVisibility(attr):
	return attr['access'] if 'access' in attr else 'public'

def getModifier(attr):
	mod = ''
	mod += ' final' if 'isFinal' in attr else ''
	mod += ' abstract' if 'isAbstract' in attr else ''
	return mod

def vjoProp(prop, lvl):
	out = ''
	if prop['type'] == 'method':
		attr = prop['attributes']
		childs = prop['children'] if 'children' in prop else []
		
		#check for override
		docFrom = attr['docFrom'] if 'docFrom' in attr else False
		overridden = attr['overriddenFrom'] if 'overriddenFrom' in attr else False
		if not(docFrom and not(overridden)):
			#if (attr['overriddenFrom']):
			# load doc from overriden from
			# prop = getNodeFrom(...)
			
			# header
			header = []
			desc = getChild(childs, 'desc')
			if desc: header.append(strip_tags(desc['attributes']['text']))
			
			out += javaDoc(header, lvl)
			name = 'constructs' if 'isCtor' in attr else attr['name']
			out += indent(lvl) + '{} : vjo.NEEDS_IMPL'.format(name)
	
	return out

def vjoClass(data, lvl):
	global types, vjoTypes

	out = ''
	attr = data['attributes']
	type = attr['type'] if 'type' in attr else None 
	
	# proceed only if we know the type
	if type in types:
	
		vjoType = vjoTypes[type]
		childs = data['children']
		
		# header
		desc = getChild(childs, 'desc')
		if desc:
			out += javaDoc(strip_tags(desc['attributes']['text']), lvl)
		
		
		out += indent(lvl) + "//>{}{}\n".format(getVisibility(attr), getModifier(attr))
		out += indent(lvl) + "vjo.{}('{}')\n".format(vjoType, attr['fullName'])
		
		# relationships
		if 'superClass' in attr:
			out+= indent(lvl) + ".inherits({})\n".format(getRel(attr['superClass']))
			
		if 'interfaces' in attr:
			out+= indent(lvl) + ".satisfies({})\n".format(getRel(attr['interfaces']))
			
		if 'mixins' in attr:
			out+= indent(lvl) + ".mixin({})\n".format(getRel(attr['mixins']))

		# protos (instance props, constructor and methods)
		protos = []
		ctor = getChild(childs, 'constructor')
		if ctor: 
			for prop in ctor['children']: protos.append(prop)
		
		methods = getChild(childs, 'methods')
		if methods: 
			for prop in methods['children']: protos.append(prop)
		
		if len(protos):
			out += indent(lvl) + '.protos({\n'
			out += ',\n\n\n'.join([v for v in [vjoProp(prop, lvl + 1) for prop in protos] if len(v) > 0]) 
			out += '\n' + indent(lvl) + '})\n'
		
		out += indent(lvl) + ".endType();"

	return out

def printHelp():
	print 'Usage:'
	print 'qx2vjo.py <args>\n'
	print 'Args:'
	print '-s (Required)    Qooxdoo-SDK folder'
	print '-d               Output folder'
	print '-h, -?, --help   This help\n'

def main(argv):
	global destination, root

	try:
		opts, args = getopt.getopt(argv, "s:d:f:h?", ['source', 'dest', 'filter', 'help'])
	except getopt.GetoptError:
		printHelp()
		sys.exit(2)
	
	filter = 'q'
	source = ''
	for opt, arg in opts:
		if opt in ('-h', '-?', '--help'):
			printHelp()
			sys.exit()
		elif opt in ('-s'):
			source = arg + '/framework/api/script/'
		elif opt in ('-d'):
			destination = arg
		elif opt in ('-f'):
			filter = arg
	
	if len(source) == 0:
		printHelp()
		sys.exit(2)

	files = os.listdir(source)
	for file in files:
		if file.startswith(filter):
			path = (source + '/' + file).replace('//', '/')
			f = open(path, 'r')
			data = json.load(f)
			
			vjo = vjoClass(data, 0)
			
			path = destination + '/' + file.replace('.', '/').replace('/json', '.js')
			d = os.path.dirname(path)
			if not os.path.exists(d):
				os.makedirs(d)
			out = open(path, 'w')
			out.write(vjo)

main(sys.argv[1:])
