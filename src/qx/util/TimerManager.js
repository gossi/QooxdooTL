/**
 * Timer manipulation for handling multiple timed callbacks with the use of
 * only a single native timer object.
 * 
 * Use of these timers is via the methods start() and stop().  Examples:
 * 
 * 
 * var timer = qx.util.TimerManager.getInstance();
 * 
 * // Start a 5-second recurrent timer.
 * // Note that the first expiration is after 3 seconds
 * // (last parameter is 3000) but each subsequent expiration is
 * // at 5 second intervals.
 * timer.start(function(userData, timerId)
 *             {
 *               this.debug("Recurrent 5-second timer: " + timerId);
 *             },
 *             5000,
 *             this,
 *             null,
 *             3000);
 * 
 * // Start a 1-second one-shot timer
 * timer.start(function(userData, timerId)
 *             {
 *               this.debug("One-shot 1-second timer: " + timerId);
 *             },
 *             0,
 *             this,
 *             null,
 *             1000);
 * 
 * // Start a 2-second recurrent timer that stops itself after
 * // three iterations
 * timer.start(function(userData, timerId)
 *             {
 *               this.debug("Recurrent 2-second timer with limit 3:" +
 *                          timerId);
 *               if (++userData.count == 3)
 *               {
 *                 this.debug("Stopping recurrent 2-second timer");
 *                 timer.stop(timerId);
 *               }
 *             },
 *             2000,
 *             this,
 *             { count : 0 });
 * 
 * // Start an immediate one-shot timer
 * timer.start(function(userData, timerId)
 *             {
 *               this.debug("Immediate one-shot timer: " + timerId);
 *             });

 */
//>public
vjo.ctype('qx.util.TimerManager')
.inherits('qx.core.Object')
.protos({
	/**
	 * Insert a timer on the time-ordered list of active timers.
	 * 
	 */
	__insertNewTimer : vjo.NEEDS_IMPL,


	/**
	 * Process the queue of timers.  Call the registered callback function for
	 * any timer which has expired.  If the timer is marked as recurrent, the
	 * timer is restarted with the recurrent timeout following completion of
	 * the callback function.
	 * 
	 */
	__processQueue : vjo.NEEDS_IMPL,


	/**
	 * Start a new timer
	 * 
	 */
	start : vjo.NEEDS_IMPL,


	/**
	 * Stop a running timer
	 * 
	 */
	stop : vjo.NEEDS_IMPL
})
.endType();