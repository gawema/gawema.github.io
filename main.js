
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
    `Hei 👋 Welcome to my website, these are the supported commands:</br>
    about, experience, education, skills, contact `,
  ls:
    `
    about   experience   education   skills   contact 
    `,
  help:
    'Supported commands: <br> about, experience, education, skills, contact',
  about:
    `Ciao, I'm Gabriele, <br>
    I am a Web developer and Design enthusiast. 
    I am currently based in Copenhagen and working as a Frontend Developer at <a href='https://www.dwarf.dk/' target="_blank" style='color: white'>DWARF</a>.
    `,
  experience:
    `
    </br> <strong>DWARF</strong> </br>
    Frontend developer at <a href='https://www.dwarf.dk/' target="_blank" style='color: white'>DWARF</a>. </br>
    Working with Vue & NuxtJS.

    </br>  </br> <strong>MANCOFI</strong> </br>
    Junior full-stack developer at <a href='https://mancofi.dk/' target="_blank" style='color: white'>MANCOFI</a>. </br>
    Worked with Angular, .Net, Azure & Docker.

    </br> </br> <strong>Plant Jammer</strong> </br> 
    Mobile developer Intern for <a href='https://www.plantjammer.com/' target="_blank" style='color: white'>PlantJammer</a>. </br>
    Worked with React-Native and Django.
    `,
  education:
    ` <strong>2019-2021: </strong> Bachelor degree in Web Development at <a href='https://kea.dk/en' target="_blank" style='color: white'>KEA</a>. </br>
      <strong>2016-2019: </strong> Academy profession degree in Computer Science at <a href='https://kea.dk/en' target="_blank" style='color: white'>KEA</a>. </br>
      <strong>2011-2016: </strong> International relations and marketing at <a href='http://www.peano.edu.it' target="_blank" style='color: white'>G.Peano</a> High School in Florence, Italy.
      </br>
      `,
  skills:
    `<strong>Languages: </strong> JS, TS, HTML, CSS, PHP, C#, Python, C.
    <br> <strong>Frameworks: </strong> Vue, React, Angular, React-native, Flutter, Ionic, .Net, Django.
    <br> <strong>Technologies: </strong> Azure & AWS, Docker, Git, Netlify, Prismic'
    <br> <strong>UI/UX Softwares: </strong> Adobe xd, illustrator, Figma.
    </br>
    `,
  // cv: " <a href='./assets/Gabriele_Mannucci_Resume.pdf' target='_blank' style='color: white'>curriclum-vitae.pdf</a>",
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
    terminalOutput.innerHTML = '';
    return
  }
  else if (!COMMANDS.hasOwnProperty(input)) {
    output += `
    command not found: ${input}
    <br> Supported commands: about, experience, education, skills, contact
    `;
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${ terminalOutput.innerHTML } <div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

function key(e) {
  e.preventDefault();
  const input = userInput.innerHTML;
  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  // for safari
  if (e.keyCode == 8 ) {
    userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
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


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 10) {
    color = '#333'
  } else {
    color = 'transparent'
  }
  document.querySelectorAll(".fade").forEach(el=>{
    el.style.color = color;
  });
});