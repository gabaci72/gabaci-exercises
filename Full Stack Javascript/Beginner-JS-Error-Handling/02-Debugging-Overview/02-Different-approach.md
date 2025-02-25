# Hata Yönetimi ve Hata Ayıklama için farklı yaklaşım.
# Different approach for Error Handling and Debugging.
Error handling and debugging are crucial aspects of software development. Here are some different approaches to consider:

### 1. **Hata Mesajlarını Daha Anlaşılır Hale Getirme**
### 1. **Making Error Messages More Understandable**

```javascript
try {
    myVariable++; // This will throw a ReferenceError because myVariable is not defined.
} catch (error) {
    console.log(`ReferenceError: ${error.message} at line ${error.stack.split('\n')[1].trim()}`);
}

try {
    const myString = 42;
    myString.substring(0); // This will throw a TypeError because substring is not a method of a number.
} catch (error) {
    console.log(`TypeError: ${error.message} at line ${error.stack.split('\n')[1].trim()}`);
}

try {
    eval('const myRandomNumber; = Math.random();'); // This will throw a SyntaxError because of invalid syntax.
} catch (error) {
    console.log(`SyntaxError: ${error.message} at line ${error.stack.split('\n')[1].trim()}`);
}

try {
    const myRandomNumber = Math.random(); // This should be correct syntax.
    console.log(myRandomNumber); // Just to show it works
} catch (error) {
    console.log(error.name, ":", error.message);
}
```

### 2. **Hataları Ayrı Ayrı İşleme**
### 2. **Processing Errors Separately**
Her hata türü için ayrı bir `try...catch` bloğu kullanmak, hataları daha net bir şekilde ayıklamak için yardımcı olabilir.

Using a separate `try...catch` block for each type of error can help to debug errors more clearly.

```javascript
try {
    myVariable++; // This will throw a ReferenceError because myVariable is not defined.
} catch (error) {
    console.log(`ReferenceError: ${error.message}`);
}

try {
    const myString = 42;
    myString.substring(0); // This will throw a TypeError because substring is not a method of a number.
} catch (error) {
    console.log(`TypeError: ${error.message}`);
}

try {
    eval('const myRandomNumber; = Math.random();'); // This will throw a SyntaxError because of invalid syntax.
} catch (error) {
    console.log(`SyntaxError: ${error.message}`);
}

try {
    const myRandomNumber = Math.random(); // This should be correct syntax.
    console.log(myRandomNumber); // Just to show it works
} catch (error) {
    console.log(error.name, ":", error.message);
}
```

### 3. **Hataları Loglama**
### 3. **Logging Errors**
Hataları bir log dosyasına yazmak, hataları daha sonra incelemek için daha uygun olabilir.
It may be more convenient to write errors to a log file for later review.
```javascript
const fs = require('fs');

function logError(error) {
    fs.appendFileSync('error.log', `${error.name}: ${error.message}\n${error.stack}\n\n`);
}

try {
    myVariable++; // This will throw a ReferenceError because myVariable is not defined.
} catch (error) {
    logError(error);
}

try {
    const myString = 42;
    myString.substring(0); // This will throw a TypeError because substring is not a method of a number.
} catch (error) {
    logError(error);
}

try {
    eval('const myRandomNumber; = Math.random();'); // This will throw a SyntaxError because of invalid syntax.
} catch (error) {
    logError(error);
}

try {
    const myRandomNumber = Math.random(); // This should be correct syntax.
    console.log(myRandomNumber); // Just to show it works
} catch (error) {
    logError(error);
}
```

### 4. **Hataları Tekrar Üretme**
### 4. **Reproducing Errors**
Hataları tekrar üretmek, hataların nasıl yakalandığını ve işlendiğini daha iyi anlamak için yardımcı olabilir.
Reproducing errors can be helpful to better understand how errors are caught and handled.
```javascript
try {
    myVariable++; // This will throw a ReferenceError because myVariable is not defined.
} catch (error) {
    console.log(`ReferenceError: ${error.message}`);
    throw error; // Re-throw the error to see the stack trace
}

try {
    const myString = 42;
    myString.substring(0); // This will throw a TypeError because substring is not a method of a number.
} catch (error) {
    console.log(`TypeError: ${error.message}`);
    throw error; // Re-throw the error to see the stack trace
}

try {
    eval('const myRandomNumber; = Math.random();'); // This will throw a SyntaxError because of invalid syntax.
} catch (error) {
    console.log(`SyntaxError: ${error.message}`);
    throw error; // Re-throw the error to see the stack trace
}

try {
    const myRandomNumber = Math.random(); // This should be correct syntax.
    console.log(myRandomNumber); // Just to show it works
} catch (error) {
    console.log(error.name, ":", error.message);
    throw error; // Re-throw the error to see the stack trace
}
```

### 5. **Hataları Belirli Durumlar İçin Kontrol Etme**
### 5. **Checking Errors for Specific Cases**
Belirli durumlar için hataları kontrol etme, hataları daha net bir şekilde ayıklamak için yardımcı olabilir.
Checking errors for specific cases can help to debug errors more clearly.
```javascript
function checkReferenceError() {
    try {
        myVariable++; // This will throw a ReferenceError because myVariable is not defined.
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log(`ReferenceError: ${error.message}`);
        } else {
            throw error; // Re-throw the error if it's not a ReferenceError
        }
    }
}

function checkTypeError() {
    try {
        const myString = 42;
        myString.substring(0); // This will throw a TypeError because substring is not a method of a number.
    } catch (error) {
        if (error instanceof TypeError) {
            console.log(`TypeError: ${error.message}`);
        } else {
            throw error; // Re-throw the error if it's not a TypeError
        }
    }
}

function checkSyntaxError() {
    try {
        eval('const myRandomNumber; = Math.random();'); // This will throw a SyntaxError because of invalid syntax.
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log(`SyntaxError: ${error.message}`);
        } else {
            throw error; // Re-throw the error if it's not a SyntaxError
        }
    }
}

checkReferenceError();
checkTypeError();
checkSyntaxError();

try {
    const myRandomNumber = Math.random(); // This should be correct syntax.
    console.log(myRandomNumber); // Just to show it works
} catch (error) {
    console.log(error.name, ":", error.message);
}
```
