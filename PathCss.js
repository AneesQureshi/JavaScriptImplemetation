// Relative CSS selectors in Chrome DevTools are simply **CSS selectors starting with tag/class/id**, not absolute DOM paths. They’re shorter and flexible, like relative XPath (`//`). You test them in DevTools console with:
//
// ```js
// document.querySelector("your-css-selector")
// document.querySelectorAll("your-css-selector")
// ```
//
// Here’s a **list of relative CSS paths** you can use in Chrome DevTools:
//
// ---
//
// ### 1. By ID
//
// ```css
// #username
// ```
//
// Matches `<input id="username">`
//
// ---
//
// ### 2. By Class
//
// ```css
// .btn
// ```
//
// Matches `<button class="btn">`
//
// ---
//
// ### 3. By Attribute
//
// ```css
// input[name='email']
// ```
//
// Matches `<input type="text" name="email">`
//
// ---
//
// ### 4. Contains (substring match)
//
// ```css
// button[id*='Login']
// ```
//
// Matches `<button id="btnLogin123">`
//
// ---
//
// ### 5. Starts-with
//
// ```css
// input[id^='user_']
// ```
//
// Matches `<input id="user_name">`
//
// ---
//
// ### 6. Ends-with
//
// ```css
// img[src$='.png']
// ```
//
// Matches `<img src="logo.png">`
//
// ---
//
// ### 7. Descendant (space)
//
// ```css
// div.form input
// ```
//
// Matches `<div class="form"><input></div>`
//
// ---
//
// ### 8. Child ( > )
//
// ```css
// div.form > input
// ```
//
// Matches direct child only.
//
// ---
//
// ### 9. Adjacent sibling ( + )
//
// ```css
// label + input
// ```
//
// Matches `<label>Email</label><input>`
//
// ---
//
// ### 10. General sibling ( ~ )
//
// ```css
// label ~ input
// ```
//
// Matches all inputs after label.
//
// ---
//
// ### 11. nth-child
//
// ```css
// ul li:nth-child(2)
// ```
//
// Selects 2nd `<li>` in list.
//
// ---
//
// ### 12. not()
//
// ```css
// input:not([type='text'])
// ```
//
// Selects inputs except type="text".
//
// ---
//
// 👉 In **Chrome DevTools**, just type in **Elements → Ctrl+F** and paste CSS path like `input[name='email']`. It will highlight matching nodes.
//
// Do you want me to prepare a **side-by-side table of XPath vs CSS** for each common locator so you can compare directly in interviews?
