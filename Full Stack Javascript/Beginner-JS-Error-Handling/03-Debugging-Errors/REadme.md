# Error Handling in JavaScript

```javascript
function isSumBigger(number1, number2, total) {
    try {
        if (typeof number1 !== 'number' || typeof number2 !== 'number' || typeof total !== 'number') {
            throw new TypeError('All arguments must be numbers');
        }

        const sum = number1 + number2;

        if (sum > total) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(`Error in isSumBigger: ${error.message}`);
        return null; // Return null or handle the error as needed
    }
}

// Should return true
try {
    console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));
} catch (error) {
    console.error(`Error in main code: ${error.message}`);
}

// Should return false
try {
    console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));
} catch (error) {
    console.error(`Error in main code: ${error.message}`);
}

// Additional test cases to check error handling
try {
    console.log('isSumBigger("1", 3, 2) returns: ' + isSumBigger("1", 3, 2)); // Should throw TypeError
} catch (error) {
    console.error(`Error in main code: ${error.message}`);
}

try {
    console.log('isSumBigger(1, 3) returns: ' + isSumBigger(1, 3)); // Should throw TypeError
} catch (error) {
    console.error(`Error in main code: ${error.message}`);
}
```

### Adım Adım Çözüm:

1. **Fonksiyon Tanımlaması Hatası**:
   - Fonksiyon tanımını `function isSumBigger(number1, number2, total) {` olarak değiştirin.

2. **Değişken Adı Hatası**:
   - `numberSum` değişkenini `sum` olarak değiştirin.

3. **Koşul İfadesi Hatası**:
   - `if (numberSum > total;) {` satırını `if (sum > total) {` olarak değiştirin.

4. **Error Handling**:
   - `try...catch` blokları kullanarak hataları yakalayın ve uygun mesajlar ile kullanıcıya geri bildirin.
   - `typeof` operatörü kullanarak argümanların sayı olup olmadığını kontrol edin.
   - Hatalar yakalandığında `console.error` kullanarak hata mesajlarını loglayın.

5. **Fonksiyon Çağrısı Hatası**:
   - Fonksiyon çağrılarını `isSumBigger(1, 3, 2)` ve `isSumBigger(1, 3, 5)` olarak değiştirin.

### Step by Step Solution:

1. **Function Definition Error**:

- Change the function definition to `function isSumBigger(number1, number2, total) {`.

2. **Variable Name Error**:

- Change the variable `numberSum` to `sum`.

3. **Condition Statement Error**:

- Change the line `if (numberSum > total;) {` to `if (sum > total) {`.

4. **Error Handling**:

- Catch errors using `try...catch` blocks and report them to the user with appropriate messages.
- Check if the arguments are numbers using `typeof` operator.
- Log error messages using `console.error` when errors are caught.

5. **Function Call Error**:
- Change the function calls to `isSumBigger(1, 3, 2)` and `isSumBigger(1, 3, 5)`.