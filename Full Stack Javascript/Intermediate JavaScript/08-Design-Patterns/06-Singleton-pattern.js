var Singleton = (function () {
    var instance;

    function createInstance() {
        // Private constructor logic here

        return {
            // Public methods and properties
            getInstanceInfo: function () {
                return "I am a singleton instance!";
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Usage
var singletonInstance1 = Singleton.getInstance();
var singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // true
console.log(singletonInstance1.getInstanceInfo()); // "I am a singleton instance!"
