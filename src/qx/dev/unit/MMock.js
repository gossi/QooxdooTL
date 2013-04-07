/**
 * Provides test spies, stubs and mocks as well as custom assertions.
 * 
 * Here is a simple example:
 * 
 * 
 * 
 * // Test
 * qx&#046;Class.define("qx.test.Klass",
 * {
 *   extend : qx.dev.unit.TestCase,
 * 
 *   include : qx.dev.unit.MMock,
 * 
 *   members :
 *   {
 *     "test: doSpecial on condition xyz": function() {
 *       // Set-Up
 *       var obj = new qx.Klass();
 * 
 *       // Wraps obj.doSpecial in a spy function and
 *       // replaces the original method with this spy.
 *       this.spy(obj, "doSpecial");
 * 
 *       // Run code that is expected to fulfill condition
 *       obj.onCondition("xyz");
 * 
 *       // Assert that spy was called
 *       this.assertCalled(obj.doSpecial);
 *     },
 * 
 *     tearDown: function() {
 *       // Restore all stubs, spies and overridden host objects.
 *       //
 *       // It is a good idea to always run this in the tearDown()
 *       // method, especially when overwriting global or host objects.
 *       this.getSandbox().restore();
 *     }
 *   }
 * });
 * 
 * // Implementation
 * qx&#046;Class.define("qx.Klass",
 * {
 *   extend : qx.core.Object,
 * 
 *   members :
 *   {
 *     onCondition: function(condition) {
 * 
 *       // Complex code determining mustDoSpecial
 *       // by examining condition passed
 * 
 *       if (mustDoSpecial) {
 *         this.doSpecial();
 *       }
 *     },
 * 
 *     doSpecial: function() {
 * 
 *     }
 *   }
 * });
 * 
 * 
 * 
 * This mixin provides assertions such as assertCalled() that work
 * with spies and stubs. Besides offering a compact way to express expectations,
 * those assertions have the advantage that meaningful error messages can be
 * generated.
 * 
 * For full list of assertions see http://sinonjs.org/docs/#assertions.
 * Note that sinon.assert.xyz() translates as assertXyz().
 */
//>public
vjo.mtype('qx.dev.unit.MMock')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Deep clone object by copying properties from prototype.
	 * 
	 */
	__deepClone : vjo.NEEDS_IMPL,


	/**
	 * Get the object&#8217;s own properties.
	 * 
	 */
	__getOwnProperties : vjo.NEEDS_IMPL,


	/**
	 * Get the Sinon.JS object.
	 * 
	 */
	__getSinon : vjo.NEEDS_IMPL,


	/**
	 * Safely stub property.
	 * 
	 */
	__stubProperty : vjo.NEEDS_IMPL,


	/**
	 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
	 * 
	 * Returns a deep copied, API-identical stubbed out clone of the given
	 * object.
	 * 
	 * In contrast to the shallow {@link #stub}, also stubs out properties that
	 * belong to the prototype chain.
	 * 
	 */
	deepStub : vjo.NEEDS_IMPL,


	/**
	 * Get requests made with faked XHR or server.
	 * 
	 * Each request can be queried for url, method, requestHeaders,
	 * status and more.
	 * 
	 * See http://sinonjs.org/docs/#FakeXMLHttpRequest.
	 * 
	 */
	getRequests : vjo.NEEDS_IMPL,


	/**
	 * Get sandbox.
	 * 
	 * The sandbox holds all stubs and mocks. Run this.getSandbox().restore()
	 * to restore all mock objects.
	 * 
	 */
	getSandbox : vjo.NEEDS_IMPL,


	/**
	 * Get fake server created by {@link #useFakeServer}.
	 * 
	 */
	getServer : vjo.NEEDS_IMPL,


	/**
	 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
	 * 
	 * Changes the given factory (e.g. a constructor) to return a stub. The
	 * method itself returns this stub.
	 * 
	 * By default, the stub returned by the changed factory is the object built
	 * by the original factory, but deeply stubbed (see {@link #deepStub}).
	 * Alternatively, a custom stub may be given explicitly that is used instead.
	 * 
	 */
	injectStub : vjo.NEEDS_IMPL,


	/**
	 * Mocks are slightly different from spies and stubs in that you mock an
	 * object, and then set an expectation on one or more of its objects.
	 * 
	 * 
	 * var mock = mock(obj)
	 *   Creates a mock for the provided object. Does not change the object, but
	 *   returns a mock object to set expectations on the object&#8217;s methods.
	 * 
	 * 
	 * 
	 * var expectation = mock.expects(&#8220;method&#8221;)
	 *   Overrides obj.method with a mock function and returns an expectation
	 *   object. Expectations implement both the spy and stub interface plus
	 *   the methods described below.
	 * 
	 * 
	 * Set expectations with following methods. All methods return the expectation
	 * itself, meaning expectations can be chained.
	 * 
	 * 
	 * expectation.atLeast(number);
	 * expectation.atMost(number);
	 * expectation.never();
	 * expectation.once();
	 * expectation.twice();
	 * expectation.thrice();
	 * expectation.exactly(number);
	 * expectation.withArgs(arg1, arg2, ...);
	 * expectation.withExactArgs(arg1, arg2, ...);
	 * expectation.on(obj);
	 * expecation.verify();
	 * 
	 * 
	 * See http://sinonjs.org/docs/#mocks.
	 * 
	 */
	mock : vjo.NEEDS_IMPL,


	/**
	 * Changes the given factory (e.g. a constructor) to make a mock of the
	 * object returned. The method itself returns this mock.
	 * 
	 * By default, the object returned by the changed factory (that a mock is
	 * made of) is a deep copied, API-identical clone of the object built by the
	 * original factory. Alternatively, the object returned can be given
	 * explicitly.
	 * 
	 */
	revealMock : vjo.NEEDS_IMPL,


	/**
	 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
	 * 
	 * Shallowly stub methods that belong to classes found in inheritance
	 * chain up to (but including) the given class.
	 * 
	 */
	shallowStub : vjo.NEEDS_IMPL,


	/**
	 * Test spies allow introspection on how a function is used
	 * throughout the system under test.
	 * 
	 * 
	 * spy()
	 *   Creates an anonymous function that records arguments,
	 *   this value, exceptions and return values for all calls.
	 * 
	 * 
	 * 
	 * spy(func)
	 *   Spies on the provided function
	 * 
	 * 
	 * 
	 * spy(object, &#8220;method&#8221;)
	 *   Creates a spy for object.method and replaces the original method
	 *   with the spy. The spy acts exactly like the original method in all cases.
	 *   The original method can be restored by calling object.method.restore().
	 *   The returned spy is the function object which replaced the original method.
	 *   spy === object.method.
	 * 
	 * 
	 * 
	 * spy.withArgs(arg1[, arg2, ...])
	 *   Creates a spy that only records calls when the received arguments matches those
	 *   passed to withArgs.
	 * 
	 * 
	 * A spy has a rich interface to introspect how the wrapped function was used:
	 * 
	 * 
	 * spy.callCount
	 * spy.called
	 * spy.calledOnce
	 * spy.calledTwice
	 * spy.calledThrice
	 * spy.calledBefore(anotherSpy)
	 * spy.calledAfter(anotherSpy)
	 * spy.calledOn(obj)
	 * spy.alwaysCalledOn(obj)
	 * spy.calledWith(arg1, arg2, ...)
	 * spy.alwaysCalledWith(arg1, arg2, ...)
	 * spy.calledWithExactly(arg1, arg2, ...)
	 * spy.alwaysCalledWithExactly(arg1, arg2, ...)
	 * spy.threw()
	 * spy.threw(&#8220;TypeError&#8221;)
	 * spy.threw(obj)
	 * spy.alwaysThrew()
	 * spy.alwaysThrew(&#8220;TypeError&#8221;)
	 * spy.alwaysThrew(obj)
	 * spy.returned(obj)
	 * spy.alwaysReturned(obj)
	 * spy.getCall(n)
	 * spy.thisValues
	 * spy.args
	 * spy.exceptions
	 * spy.returnValues
	 * 
	 * 
	 * See http://sinonjs.org/docs/#spies.
	 * 
	 * Note: Spies are transparently added to a sandbox. To restore
	 * the original function for all spies run this.getSandbox().restore()
	 * in your tearDown() method.
	 * 
	 */
	spy : vjo.NEEDS_IMPL,


	/**
	 * Test stubs are functions (spies) with pre-programmed behavior.
	 * 
	 * 
	 * stub()
	 *   Creates an anonymous stub function
	 * 
	 * 
	 * 
	 * stub(object, &#8220;method&#8221;)
	 *   Replaces object.method with a stub function. The original function
	 *   can be restored by calling object.method.restore() (or stub.restore()).
	 *   An exception is thrown if the property is not already a function,
	 *   to help avoid typos when stubbing methods.
	 * 
	 * 
	 * 
	 * stub(obj)
	 *   Stubs all the object&#8217;s methods.
	 * 
	 * 
	 * 
	 * stub.withArgs(arg1[, arg2, ...])
	 *   Stubs the method only for the provided arguments. Can be used to create
	 *   a stub that acts differently in response to different arguments.
	 * 
	 * 
	 * A stub has the interface of a spy in addition to methods that allow to define behaviour:
	 * 
	 * 
	 * stub.returns(obj)
	 * stub.throws()
	 * stub.throws(&#8220;TypeError&#8221;)
	 * stub.throws(obj)
	 * stub.callsArg(index)
	 * stub.callsArg(0)
	 * stub.callsArgWith(index, arg1, arg2, ...)
	 * 
	 * 
	 * See http://sinonjs.org/docs/#stubs.
	 * 
	 * Note: Stubs are transparently added to a sandbox. To restore
	 * the original function for all stubs run this.getSandbox().restore()
	 * in your tearDown() method.
	 * 
	 */
	stub : vjo.NEEDS_IMPL,


	/**
	 * As {@link #useFakeXMLHttpRequest}, but additionally provides a high-level
	 * API to setup server responses. To setup responses, use the server
	 * returned by {@link #getServer}.
	 * 
	 * See http://sinonjs.org/docs/#server.
	 * 
	 * Note: The fake server is transparently added to a sandbox. To restore
	 * the original host method run this.getSandbox().restore()
	 * in your tearDown() method.
	 * 
	 */
	useFakeServer : vjo.NEEDS_IMPL,


	/**
	 * Replace the native XMLHttpRequest object in browsers that support it with
	 * a custom implementation which does not send actual requests.
	 * 
	 * Note: The fake XHR is transparently added to a sandbox. To restore
	 * the original host method run this.getSandbox().restore()
	 * in your tearDown() method.
	 * 
	 * See http://sinonjs.org/docs/#useFakeXMLHttpRequest.
	 * 
	 */
	useFakeXMLHttpRequest : vjo.NEEDS_IMPL
})
.endType();