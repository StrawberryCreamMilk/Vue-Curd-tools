"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExposeMethods = createExposeMethods;
// Utility to create an object of methods that delegate to the wrapped component instance.
// The returned object is intended to be passed to `defineExpose(...)` inside a component's setup.
// Create an object (or proxy) that exposes methods delegating to the wrapped instance.
// If `methodNames` is provided we pre-create those delegates; otherwise we return a Proxy
// that lazily creates delegates for any accessed method name (skips internal keys starting with `$` or `_`).
/**
 *
 * @param instanceRef
 * @param methodNames
 * @returns
 */
function createExposeMethods(instanceRef, methodNames) {
    var exposed = {};
    var makeDelegate = function (name) {
        return function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!instanceRef || !instanceRef.value)
                return;
            var inst = instanceRef.value;
            console.log(inst, "inst");
            console.log(name, "name");
            if (typeof inst[name] === 'function')
                return inst[name].apply(inst, args);
            if (inst.$el && typeof inst.$el[name] === 'function')
                return (_a = inst.$el)[name].apply(_a, args);
        };
    };
    // Pre-populate if explicit method names provided
    if (methodNames && methodNames.length) {
        for (var _i = 0, _a = methodNames; _i < _a.length; _i++) {
            var m = _a[_i];
            exposed[m] = makeDelegate(m);
        }
        return exposed;
    }
    // Return a Proxy so any accessed property becomes a delegate method lazily.
    // Filter out internal keys that start with `$` or `_`.
    return new Proxy(exposed, {
        get: function (target, prop) {
            var name = String(prop);
            console.log(name, 'name');
            if (!name || name.startsWith('$') || name.startsWith('_'))
                return target[prop];
            if (!Reflect.has(target, prop)) {
                Reflect.set(target, prop, makeDelegate(name));
            }
            return target[prop];
        },
        // allow enumeration of keys that have been created
        ownKeys: function () {
            return Reflect.ownKeys(exposed);
        },
        getOwnPropertyDescriptor: function (_, prop) {
            if (Reflect.has(exposed, prop)) {
                return { configurable: true, enumerable: true, value: exposed[prop] };
            }
            return undefined;
        },
    });
}
