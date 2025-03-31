// Step 1: Pseudo-code (CREATE array called accordions that consist of three objects.). Created a sample array of three objects to represent the accordion buttons. This concept was learned in the Values, Data Types, and Operations and Building Array modules.

const accordions = [
  { id: 1, visible: false },
  { id: 2, visible: false },
  { id: 3, visible: false },
];

for (let accordion of accordions) {
  console.log(typeof accordions); // Pseudo-code (USE for...of loop to LOG the type of (i.e., object) each of the three element in the accordions array.). This sub-step may not be necessary overall to the functionality of the application but can be valuable in testing the value in the array before any other code is executed to make sure the correct data type is used. The loop concept was learned in the "Working with Loops" module. The typeof operator was learned in the "Values, Data Types, and Operations" module.
}

// Step 2: Pseudo-code (CREATE function called togglePanel used to toggle between hiding and showing the panel content.).

function togglePanel(accordion) {
  const panel = { visible: accordion.visible };

  // Step 3: Pseudo-code (USE if and else statements and boolean values to hide and show panel content.). Concepts learned in the "Control Structures and Logic" modules.

  if (panel.visible) {
    panel.visible = false; // Hide the panel
  } else {
    panel.visible = true; // Show the panel
  }

  // Step 4: Pseudo-code (LOG whether the accordion state is visible or hidden). Concept of template literal and string interpolation learned in "Stringing Characters Together" module. If and else statements also comes from the Control Structure and Logic modules.

  if (panel.visible) {
    console.log(`Accordion ${accordion.id} panel is now visible`);
  } else {
    console.log(`Accordion ${accordion.id} panel is now hidden`);
  }
}

// Step 5: Pseudo-code (LOOP through each element of the accordions array to access each object (i.e., represents the accordion buttons)) and THEN display the panel content when user clicks accordion button. The forEach array method learned in the "Using Arrays" module was used to simulate a user clicking on the applicable accordion buttons to toggle the visibility of the panel content when the accordion is "clicked". Same concept of template literal and string interpolation learned in "Stringing Characters Together" module to log the stimulating click message to the console.
accordions.forEach((accordion) => {
  console.log(`Simulating click on Accordion ${accordion.id}`);
  togglePanel(accordion);
});
