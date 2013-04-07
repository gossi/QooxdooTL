/**
 * Keyboard event object.
 * 
 * the interface of this class is based on the DOM Level 3 keyboard event
 * interface: http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboardevents
 */
//>public
vjo.ctype('qx.event.type.KeySequence')
.inherits('qx.event.type.Dom')
.protos({
	/**
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Returns the native keyCode and is best used on keydown/keyup events to
	 * check which physical key was pressed.
	 * Don&#8217;t use this on keypress events because it&#8217;s erroneous and
	 * inconsistent across browsers. But it can be used to detect which key is
	 * exactly pressed (e.g. for num pad keys).
	 * In any regular case, you should use {@link #getKeyIdentifier} which
	 * takes care of all cross browser stuff.
	 * 
	 * The key codes are not character codes, they are just ASCII codes to
	 * identify the keyboard (or other input devices) keys.
	 * 
	 */
	getKeyCode : vjo.NEEDS_IMPL,


	/**
	 * Identifier of the pressed key. This property is modeled after the KeyboardEvent.keyIdentifier property
	 * of the W3C DOM 3 event specification
	 * (http://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/events.html#Events-KeyboardEvent-keyIdentifier).
	 * 
	 * Printable keys are represented by an unicode string, non-printable keys
	 * have one of the following values:
	 * 
	 * 
	 * BackspaceThe Backspace (Back) key.
	 * TabThe Horizontal Tabulation (Tab) key.
	 * SpaceThe Space (Spacebar) key.
	 * EnterThe Enter key. Note: This key identifier is also used for the Return (Macintosh numpad) key.
	 * ShiftThe Shift key.
	 * ControlThe Control (Ctrl) key.
	 * AltThe Alt (Menu) key.
	 * CapsLockThe CapsLock key
	 * MetaThe Meta key. (Apple Meta and Windows key)
	 * EscapeThe Escape (Esc) key.
	 * LeftThe Left Arrow key.
	 * UpThe Up Arrow key.
	 * RightThe Right Arrow key.
	 * DownThe Down Arrow key.
	 * PageUpThe Page Up key.
	 * PageDownThe Page Down (Next) key.
	 * EndThe End key.
	 * HomeThe Home key.
	 * InsertThe Insert (Ins) key. (Does not fire in Opera/Win)
	 * DeleteThe Delete (Del) Key.
	 * F1The F1 key.
	 * F2The F2 key.
	 * F3The F3 key.
	 * F4The F4 key.
	 * F5The F5 key.
	 * F6The F6 key.
	 * F7The F7 key.
	 * F8The F8 key.
	 * F9The F9 key.
	 * F10The F10 key.
	 * F11The F11 key.
	 * F12The F12 key.
	 * NumLockThe Num Lock key.
	 * PrintScreenThe Print Screen (PrintScrn, SnapShot) key.
	 * ScrollThe scroll lock key
	 * PauseThe pause/break key
	 * WinThe Windows Logo key
	 * AppsThe Application key (Windows Context Menu)

	 * 
	 */
	getKeyIdentifier : vjo.NEEDS_IMPL,


	/**
	 * Initialize the fields of the event.
	 * 
	 */
	init : vjo.NEEDS_IMPL,


	/**
	 * Checks whether the pressed key is printable.
	 * 
	 */
	isPrintable : vjo.NEEDS_IMPL
})
.endType();