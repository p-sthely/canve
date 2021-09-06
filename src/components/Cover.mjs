const data = {
    css: {
        cover: `
            background-image: url('./src/assets/images/cover.jpeg');
            background-size: cover;
            height: 100vh;
            padding: 0;
            margin-bottom: 0;
            min-height: 436px;
        `,
        contentWrapper: `
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
        `,
        linksList: {
            ul: `
                list-style-type: none;
                padding-left: 0;
                margin-left: 15%;
            `,
            li: `
                padding: 1.2em;
            `,
            a: `
                font-size: 5rem;
                font-weight: 200;
                letter-spacing: .1em;
                text-decoration: none;
                line-height: 1.25;
                border-bottom: solid 2px #F4F4F4;
                color: #F4F4F4;
            `
        }
    },
    values: {
        linksList: [
            { value: 'Lorem',       href: '#' },
            { value: 'Consectetur', href: '#' },
            { value: 'Aenean',      href: '#' },
            { value: 'Accumsan',    href: '#' }
        ]
    }
}

// construct the navbar right links list
let linksList = new String

for(const item of data.linksList.links)
    linksList += `
        <li style="${ data.css.linksList.li }">
            <a href="${ item.href }" style="${ data.css.linksList.a }">
                ${ item.value }</a>
        </li>
    `

const template = `
<div class="cover" style="${ data.css.cover }">
    <div class="contentWrapper" style="${ data.css.contentWrapper }">
        <ul class="linksList" style="${ data.css.linksList.ul }">
            ${ linksList }
        </ul>
    </div>
</div>
`

export default template
