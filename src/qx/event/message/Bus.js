/**
 * A simple message bus singleton.
 * The message bus registers subscriptions and notifies subscribers when
 * a matching message is dispatched
 */
//>public
vjo.ctype('qx.event.message.Bus')
.inherits('qx.core.Object')
.protos({
	/**
	 * constructor
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Call subscribers with passed message.
	 * 
	 */
	__callSubscribers : vjo.NEEDS_IMPL,


	/**
	 * checks if subscription is already present
	 * if you supply the callback function, match only the exact message monitor
	 * otherwise match all monitors that have the given message
	 * 
	 */
	checkSubscription : vjo.NEEDS_IMPL,


	/**
	 * dispatch message and call subscribed functions
	 * 
	 */
	dispatch : vjo.NEEDS_IMPL,


	/**
	 * Dispatches a new message by supplying the name of the
	 * message and its data.
	 * 
	 */
	dispatchByName : vjo.NEEDS_IMPL,


	/**
	 * gets the hash map of message subscriptions
	 * 
	 */
	getSubscriptions : vjo.NEEDS_IMPL,


	/**
	 * subscribes to a message
	 * 
	 */
	subscribe : vjo.NEEDS_IMPL,


	/**
	 * unsubscribe a listening method
	 * if you supply the callback function and execution context,
	 * remove only this exact subscription
	 * otherwise remove all subscriptions
	 * 
	 */
	unsubscribe : vjo.NEEDS_IMPL
})
.endType();