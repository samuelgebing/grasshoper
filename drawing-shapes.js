/*
* Comments
*/
// drawBox() --> function that
// tells to the computer to draw
// a box (of the color inside the
// parenthesis, the argument)

/*
* First lesson - French Flag
*/

// introduction
drawBox(blue);
drawBox(white);
drawBox(red);
newLine();

// resolution
drawBox(blue);
drawBox(white);
drawBox(red);
// I added (like I will do on the nexts) 
// this line for a good execution 
newLine();

/*
* Second lesson - Gabonese Flag
*/

// GABONESE FLAG
// all line green
// all line yellow 
// all line blue

// introduction 
drawBox(green);
drawBox(green);
drawBox(green);
newLine();
drawBox(yellow);

// resolution
drawBox(yellow);
drawBox(yellow);
newLine();
drawBox(blue);
drawBox(blue);
drawBox(blue);
newLine();

/* 
* Third lesson - Gabonese Flag Helper
*/

// introduction
drawBoxes('ggg');
newLine();
drawBoxes('yyy');

// resolution
drawBoxes('bbb');
newLine();

/*
* Optional lesson - Gabonese Flag Shortcuts
*/

// introduction
// drawBoxes('ggg y');

//resolution
drawBoxes('ggg yyy bbb');
newLine();

/*
* Forth lesson - "A Dash of Random"
*/

// introduction
drawBox(pickRandom(color));
// drawBox();

// resolution
drawBox(pickRandom(color));
