// Module definition
var MyModule = (function () {
    // Private variables and functions
    var privateVariable = 'I am private';

    function privateFunction() {
        console.log('This is a private function');
    }

    // Public API (exposed to the outside world)
    return {
        publicVariable: 'I am public',

        publicFunction: function () {
            console.log('This is a public function');
            // Accessing private members
            console.log(privateVariable);
            privateFunction();
        }
    };
})();

// Using the Module
console.log(MyModule.publicVariable); // Outputs: I am public
MyModule.publicFunction(); // Outputs: This is a public function, I am private, This is a private function
