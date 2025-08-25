// =============================
// JavaScript Date Object - Basics
// =============================

// --------- CREATE DATE OBJECTS ---------

// Current date and time
const now = new Date();
console.log("Now:", now);

// Specific date (YYYY, MM, DD, HH, MM, SS, MS)
// Note: Month is 0-indexed (0 = Jan, 11 = Dec)
const specificDate = new Date(2025, 0, 23, 14, 30, 0);
console.log("Specific Date:", specificDate);

// From date string
const fromString = new Date("2025-08-23T10:00:00");
console.log("From String:", fromString);


// --------- GET METHODS ---------
console.log("Year:", now.getFullYear());        // e.g. 2025
console.log("Month:", now.getMonth());          // 0–11 (0=Jan)
console.log("Date:", now.getDate());            // 1–31
console.log("Day of Week:", now.getDay());      // 0–6 (0=Sunday)
console.log("Hours:", now.getHours());          // 0–23
console.log("Minutes:", now.getMinutes());      // 0–59
console.log("Seconds:", now.getSeconds());      // 0–59
console.log("Milliseconds:", now.getMilliseconds()); // 0–999
console.log("Timestamp (ms since Jan 1, 1970):", now.getTime());


// --------- SET METHODS ---------
const setDate = new Date();
setDate.setFullYear(2030);
setDate.setMonth(11);  // December
setDate.setDate(2);   // 25th
console.log("Updated1 Date:", setDate);


// --------- DATE FORMATTING ---------
// toDateString -> only date
console.log("toDateString:", now.toDateString()); // e.g. "Sat Aug 23 2025"

// toTimeString -> only time
console.log("toTimeString:", now.toTimeString());

// toISOString -> standard format (useful in APIs)
console.log("toISOString:", now.toISOString());

// toLocaleString -> formatted based on locale
console.log("toLocaleString (en-IN):", now.toLocaleString("en-IN"));
