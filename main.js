
function toggleMenu() { 

	var menu = document.getElementsByClassName("hamburger")
	var links = document.getElementsByClassName("links")

	if (menu[0].classList.length > 1) {
		menu[0].classList.remove('active')
		links[0].classList.remove('activeLinks')
	}else{
		menu[0].classList.add('active')
		links[0].classList.add('activeLinks')
	}

}


const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  pwd:
    `Hei 👋 Welcome to my website, this are the supported commands:</br>
    about, experience, education, skills, contact, cv `,
  ls:
    `
    about   experience   education   skills   contact   cv 
    `,
  help:
    'Supported commands: <br> about, experience, education, skills, contact, cv',
  about:
    `Ciao, I'm Gabriele, <br>
    I am a Computer Science student, Full-stack developer and IT enthusiast. 
    I am currently based in copenhagen and enrolled in a computer science bachelor at the Copenhagen School of Design and Technology.
    `,
  experience:
    `
    </br> <strong>MANCOFI</strong> </br>
    Currently working as a junior full-stack developer at <a href='https://mancofi.dk/' target="_blank" style='color: white'>MANCOFI</a>. </br>
    Here, my main focus is to develop b2b products together with a team of experienced developers and consultants.</br>
    I Primarily work with Angular on the front-end and .Net on the back-end. I also get to work with various DevOps technologies, such as:</br>
    Azure, Docker & Kubernetes. </br> 
    Finally, since I am very passionate about "how things look" I also get assigned various design tasks, where I get to work with a vast range of UI/UX softwares.
    </br> </br> <strong>Plant Jammer</strong> </br> 
    In 2018 I had the opportunity to intern as a developer for <a href='https://www.plantjammer.com/' target="_blank" style='color: white'>PlantJammer</a>.
    Here, I helped the team to develop some of the features in their app using React-Native and Django.
    `,
  education:
    `
      <strong>2019-2021: </strong> Top Up degree in web development at <a href='https://kea.dk/en' target="_blank" style='color: white'>KEA</a>. </br>
      <strong>2016-2019: </strong> Academy profession degree in computer science at <a href='https://kea.dk/en' target="_blank" style='color: white'>KEA</a>. </br>
      <strong>2011-2016: </strong> International relations and marketing at <a href='http://www.peano.edu.it' target="_blank" style='color: white'>G.Peano</a> High School in Florence, Italy.
    `,
  skills:
    `
    <strong>Languages:</strong> JS, TS, HTML, CSS, PHP, Java, C#, Python, C.
    <br> <strong>Frameworks:</strong> Angular, React-native, Ionic, .Net, Spring, Django.
    <br> <strong>Technologies:</strong> Relational Databases, Azure & AWS, Docker, Git.
    <br> <strong>UI/UX Softwares:</strong> Adobe xd, illustrator, Figma.
    `,
  cv: " <a href='./gabriele_westh_mannucci_cv.pdf' style='color: white'>curriclum-vitae.pdf</a>",
  contact: 
    `
    <strong>email:</strong> <a href='mailto:gab.mannu@hotmail.it'style='color: white'>gab.mannu@hotmail.it</a>
    `
};
let userInput, terminalOutput;

function init() {
  userInput = document.getElementById("terminalInput");
  terminalOutput = document.getElementById("terminalOutput");
};

function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div> > ${input}</div>`;
  if(input === 'clear'){
    console.log('clear')
    terminalOutput.innerHTML = '';
    return
  }
  else if (!COMMANDS.hasOwnProperty(input)) {
    output += `
    command not found: ${input}
    <br> Supported commands: about, experience, education, skills, contact, cv,
    `;
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${ terminalOutput.innerHTML } <div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

function key(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    executeCommand(input);
    userInput.innerHTML = "";
    return;
  }
  userInput.innerHTML = input + e.key;
};

function backspace(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
};

document.addEventListener("DOMContentLoaded", init);
document.addEventListener("keypress", key);
document.addEventListener("keydown", backspace);
