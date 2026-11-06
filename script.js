// Part 1: Format and display today's date.
const currentDate = new Date();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
const year = currentDate.getFullYear();
const formattedDate = `${month}/${day}/${year}`;
document.getElementById("dateOutput").textContent = `Today is ${formattedDate}`;

// Part 2: Convert separate string values and report their Number checks.
const firstValue = "17";
const secondValue = "38";
const thirdValue = "17.38";
const fourthValue = "hey";

const firstNumber = Number(firstValue);
const firstIsNaN = Number.isNaN(firstNumber);
const firstIsInteger = Number.isInteger(firstNumber);

const secondNumber = Number(secondValue);
const secondIsNaN = Number.isNaN(secondNumber);
const secondIsInteger = Number.isInteger(secondNumber);

const thirdNumber = Number(thirdValue);
const thirdIsNaN = Number.isNaN(thirdNumber);
const thirdIsInteger = Number.isInteger(thirdNumber);

const fourthNumber = Number(fourthValue);
const fourthIsNaN = Number.isNaN(fourthNumber);
const fourthIsInteger = Number.isInteger(fourthNumber);

const conversionOutput = document.getElementById("numberConversionOutput");
conversionOutput.innerHTML =
  `<li><span>Original: "${firstValue}"</span><span>Converted: ${firstNumber}</span><span>isNaN: ${firstIsNaN}</span><span>isInteger: ${firstIsInteger}</span></li>` +
  `<li><span>Original: "${secondValue}"</span><span>Converted: ${secondNumber}</span><span>isNaN: ${secondIsNaN}</span><span>isInteger: ${secondIsInteger}</span></li>` +
  `<li><span>Original: "${thirdValue}"</span><span>Converted: ${thirdNumber}</span><span>isNaN: ${thirdIsNaN}</span><span>isInteger: ${thirdIsInteger}</span></li>` +
  `<li><span>Original: "${fourthValue}"</span><span>Converted: ${fourthNumber}</span><span>isNaN: ${fourthIsNaN}</span><span>isInteger: ${fourthIsInteger}</span></li>`;

// Part 4: Use conditionals to show messages about the conversion results.
const conversionMessage = document.getElementById("conversionMessage");
if (thirdIsNaN) {
  conversionMessage.textContent = `"${thirdValue}" is not a valid number.`;
} else {
  conversionMessage.textContent = `"${thirdValue}" converted to a valid number.`;
}

if (firstIsInteger) {
  conversionMessage.textContent += ` ${firstNumber} is an integer.`;
} else {
  conversionMessage.textContent += ` ${firstNumber} is not an integer.`;
}

// Part 3: Calculate and format an order total.
const itemPrice = 24.5;
const taxRate = 0.08;
const shippingCost = 4.99;
const taxAmount = itemPrice * taxRate;
const subtotal = itemPrice + shippingCost;
const totalCost = subtotal + taxAmount;
const mathOutput = document.getElementById("mathOutput");
mathOutput.innerHTML =
  `<p><span>Item price</span><strong>$${itemPrice.toFixed(2)}</strong></p>` +
  `<p><span>Shipping</span><strong>$${shippingCost.toFixed(2)}</strong></p>` +
  `<p><span>Tax (8%)</span><strong>$${taxAmount.toFixed(2)}</strong></p>` +
  `<p class="total-row"><span>Total</span><strong>$${totalCost.toFixed(2)}</strong></p>`;

const mathMessage = document.getElementById("mathMessage");
if (totalCost > 30) {
  mathMessage.textContent = "Your order total is over $30.";
} else {
  mathMessage.textContent = "Your order total is $30 or less.";
}
