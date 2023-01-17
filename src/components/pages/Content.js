export const PageContent = [
    {
        page: "About",
        header: "Ingersoll",
        content: <p>My name is Jared Ingersoll, and I am a coding student based in Trenton, NJ. 
            Here you will find various projects i have worked on, as well as contact information and a link to my resume. </p>
    },
    {
        page: "Projects",
        header: "Projects",
        content: <div>
        <figure>
                <a href="https://sminker0401.github.io/Its-Raining-Tacos/" target="_blank" rel="noreferrer">
                    <img src="./styles/images/tacos.png" alt="Its Raining Tacos"></img>
                    </a>
                <figcaption>It's Raining Tacos</figcaption>
            </figure>
        </div>
    },
    {
        page: "Contact",
        header: "Contact Me",
        content: <form>
        <label for="name">Name:</label><br></br>
        <input type="text" id="name" name="name" value="John Doe"></input><br></br>
        <label for="email">E-mail:</label><br></br>
        <input type="text" id="email" name="email" value="johndoe@email.com"></input><br></br>
        <label for="Write your message here:">Name:</label><br></br>
        <textarea type="text" id="message" name="message" value="Text"></textarea><br></br>
        <button type="submit">Send</button>
    </form>
    },
    {
        page: "Resume",
        header: "Resume",
        content: <p>View my resume <a href="https://jareding87.github.io/personal-portfolio/">Here!</a> <br></br>
        <ul>Proficiencies:
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Node</li>
            <li>Express</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>React</li>
            </ul></p>
    }
];