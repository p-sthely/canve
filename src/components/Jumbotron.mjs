const data = {
    style: `
        background-image: url('./src/assets/images/cover.jpeg');
        background-size: cover;
        height: 100vh;
        padding: 0;
        min-height: 436px;
    `,
    contentWrapper: {
        style: `
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
        `
    },
    linksList: {
        links: [
            { value: 'Lorem',               href: '#' },
            { value: 'Consectetur',         href: '#' },
            { value: 'Aenean',              href: '#' },
            { value: 'Suscipit accumsan',   href: '#' },
        ],
        ul: {
            style: `
                list-style-type: none;
                padding-left: 0;
                margin-left: 15%;
            `
        },
        li: {
            style: `
                padding: 1.2em;
            `
        },
        a: {
            style: `
                font-size: 6rem;
                font-weight: 200;
                letter-spacing: .1em;
                line-height: 1.25;
                text-decoration: underline;
                text-underline-offset: .2em;
                color: #F4F4F4;
            `
        }
    }
}

// construct the navbar right links list
let linksList = new String

for(const item of data.linksList.links)
    linksList += `
        <li style="${ data.linksList.li.style }">
            <a href="${ item.href }" style="${ data.linksList.a.style }">
                ${ item.value }</a>
        </li>
    `

const template = `
<div class="jumbotron" style="${ data.style }">
    <div class="contentWrapper" style="${ data.contentWrapper.style }">
        <ul class="linksList" style="${ data.linksList.ul.style }">
            ${ linksList }
        </ul>
    </div>
</div>
`

export default template
