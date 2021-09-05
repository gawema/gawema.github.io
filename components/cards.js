class Cards extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        let cards = ''
        var myProjects = projects;
        myProjects.forEach(project => {
            cards += '<div class="card bw" style="background-image: url('+project.thumbnail+'); ">' +'</div>'
        });
        this.innerHTML = cards;
    }
}


customElements.define('cards-component', Cards);