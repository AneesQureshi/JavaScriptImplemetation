// =============================
// Promises with fetch() and cy.request()
// =============================

// --------- USING fetch() (JavaScript) ---------
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())       // parse JSON (returns another Promise)
  .then(data => {
    console.log("Users:", data);           // resolved data
    data.forEach(user => console.log(user.name));
  })
  .catch(error => {
    console.error("Error fetching:", error); // handle rejection
  });


// --------- USING cy.request() (Cypress) ---------
describe("API Test with cy.request", () => {
  it("fetches users list", () => {
    cy.request("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        expect(response.status).to.eq(200);
        cy.log("Total users:", response.body.length);

        // Loop through JSON response
        response.body.forEach(user => {
          cy.log(`User: ${user.name}, Email: ${user.email}`);
        });
      });
  });

  it("creates a new post", () => {
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1
    }).then(response => {
      expect(response.status).to.eq(201);
      cy.log("Created post ID:", response.body.id);
    });
  });
});
