class Cards extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        let cards = ''
        var myProjects = projects;
        myProjects.forEach(project => {
            cards += '<a href="'+project.link+'" target="_blank"> <div class="card bw" style="background-image: url('+project.thumbnail+'); ">' +'</div></a>'
        });
        this.innerHTML = cards;
    }
}


customElements.define('cards-component', Cards);