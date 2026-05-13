// Basic L-system example


var axiom = "A";
var sentence = axiom;
var rules = [];

rules[0] = { a: "A", b: "B" };
rules[1] = { a: "B", b: "A" };

function generate() {
  var nextSentence = "";

  // loop through each character in the current sentence
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;   // reset for each character

    // check against all rules
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        nextSentence += rules[j].b;
        found = true;
        break;
      }
    }

    // if no rule matched, keep the character
    if (!found) {
      nextSentence += current;
    }
  }

  sentence = nextSentence;
  createP(sentence);
}

function setup() {
  noCanvas();
  createP(axiom);

  var button = createButton("generate");
  button.mousePressed(generate);
}

function draw() {}