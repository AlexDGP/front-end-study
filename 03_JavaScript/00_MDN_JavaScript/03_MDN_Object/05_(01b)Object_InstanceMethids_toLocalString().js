/* Object.prototype.toLocaleString() */
// The toLocaleString() method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.
const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(date1.toLocaleString("ar-EG")); // expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"
const number1 = 123456.789;
console.log(number1.toLocaleString("de-DE")); // expected output: "123.456,789"

/*
Syntax
  toLocaleString()
  Return value
    A string representing the object.
 */

/* Description */
// Object's toLocaleString returns the result of calling toString().
// This function is provided to give objects a generic toLocaleString method, even though not all may use it. See the list below.

// Objects overriding toLocaleString
// Array: Array.prototype.toLocaleString()
// Number: Number.prototype.toLocaleString()
// Date: Date.prototype.toLocaleString()
// TypedArray: TypedArray.prototype.toLocaleString()
// BigInt: BigInt.prototype.toLocaleString()

/* Examples */
// Array toLocaleString() override
// On Array objects, toLocaleString() can be used to print array values as a string, optionally with locale-specific identifiers (such as currency symbols) appended to them:
const testArray = [4, 7, 10];
let euroPrices = testArray.toLocaleString("fr", {
	style: "currency",
	currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"

// Date toLocaleString() override
// On Date objects, toLocaleString() is used to print out date displays more suitable for specific locales:
const testDate = new Date(Date.now()); // "Date Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"
let deDate = testDate.toLocaleString("de"); // "29.5.2020, 18:04:24"
const frDate = testDate.toLocaleString("fr"); // "29/05/2020, 18:04:24"

// Number toLocaleString() override
// On Number objects, toLocaleString() is used to print out number displays more suitable for specific locales, e.g. with the correct separators:
const testNumber = 2901234564; // "2901234564"
let deNumber = testNumber.toLocaleString("de"); // "2.901.234.564"
let frNumber = testNumber.toLocaleString("fr"); // "2 901 234 564"
