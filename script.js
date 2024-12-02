const data = {
    title: "Welcome to Natasha Lee's Github Webpage",
    content: "This is for Lab 9- Template Engine Lab",
    author: "Natasha Lee",
};

function renderTemplate(template, data) {
    for (const key in data) {
        const regex = new RegExp('{{' + key + '}}', 'g'); 
        template = template.replace(regex, data[key]); 
    }
    return template; 
}

const template = `
    <h3>{{title}}</h3>
    <p>{{content}}</p>
    <p>Author: {{author}}</p>
`;

const app = document.getElementById('app');
app.innerHTML = renderTemplate(template, data);
