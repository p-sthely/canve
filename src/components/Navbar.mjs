const data = {
    style: `
        border: none;
        margin-bottom: 0;
        padding: 2em;
        background-color: #F4F4F4;
    `,
    navbarBrand: {
        value: 'Canve',
        style: `
            font-size: 3rem;
            font-weight: 200;
            color: #333333;
        `
    },
    linksList: {
        links: [
            { value: 'Lorem',                                                   href: '#' },
            { value: 'Consectetur',                                             href: '#' },
            { value: 'Aenean',                                                  href: '#' },
            { value: 'Suscipit accumsan',                                       href: '#' },
            { value: '<i class="fa fa-facebook fa-lg" aria-hidden="true"></i>', href: '#' },
            { value: '<i class="fa fa-twitter fa-lg" aria-hidden="true"></i>',  href: '#' }
        ],
        a: {
            style: `
                font-size: 1.5rem;
                font-weight: 200;
                letter-spacing: .25em;
                color: #333333;
            `
        }
    }
}

// construct the navbar right links list
let linksList = new String

for(const item of data.linksList.links)
    linksList += `
        <li>
            <a href="${ item.href }" style="${ data.linksList.a.style }">
                ${ item.value }</a>
        </li>
    `

const template = `
<nav class="navbar navbar-default" style="${ data.style }">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" style="${ data.navbarBrand.style }">${ data.navbarBrand.value }</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                ${ linksList }
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
`

export default template
