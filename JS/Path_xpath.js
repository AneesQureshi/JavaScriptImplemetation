// ===============================
// XPath Learning Notes for VS Code
// ===============================

// -------------------------------
// Types of XPath
// -------------------------------

// 1. Absolute XPath
// Starts from root node (html/body/...). Very brittle, avoid in automation.
// Example: /html/body/div[1]/ul/li[2]/a

// 2. Relative XPath
// Starts with //, more flexible and preferred.
// Example: //input[@id='username']


// -------------------------------
// Common Syntax
// -------------------------------

// By attribute
// //tag[@attr='value']
// Example:
const byAttribute = $x("//input[@name='email']");

// By text
// //tag[text()='Text Here']
// Example:
const byText = $x("//button[text()='Login']");

// Contains (attribute)
// //tag[contains(@attr,'partialValue')]
// Example:
const containsAttr = $x("//button[contains(@id,'Login')]");

// Contains (text)
// //tag[contains(text(),'partialText')]
// Example:
const containsText = $x("//button[contains(text(),'Log')]");

// Starts-with
// //tag[starts-with(@attr,'startValue')]
// Example:
const startsWith = $x("//input[starts-with(@id,'user_')]");

// Using index
// (//tag[@attr='value'])[index]
// Example:
const usingIndex = $x("(//input[@type='text'])[2]");

// Using parent-child
// //parentTag[@attr='value']/childTag
// Example:
const parentChild = $x("//div[@class='form']/input");

// Using following
// //tag[text()='SomeText']/following::otherTag[index]
// Example:
const followingExample = $x("//label[text()='Email']/following::input[1]");

// Using preceding
// //tag[text()='SomeText']/preceding::otherTag[index]
// Example:
const precedingExample = $x("//label[text()='Email']/preceding::input[1]");


// -------------------------------
// Axes
// -------------------------------
// parent:: , child:: , ancestor:: , descendant:: , following-sibling:: , preceding-sibling:

// Example (parent):
const parentAxis = $x("//input[@id='email']/parent::div");

// Example (sibling):
const siblingAxis = $x("//label[text()='Email']/following-sibling::input");


// -------------------------------
// Wildcards
// -------------------------------

// Any tag
const anyTag = $x("//*");

// Any attribute
// //tag[@*='value']
// Example:
const anyAttr = $x("//input[@*='email']");
