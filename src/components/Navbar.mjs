const data = {
    css: {
        navbar: `
            border: none;
            margin-bottom: 0;
            padding: 2em;
            background-color: #F4F4F4;
        `,
        navbarBrand: `
            font-size: 3rem;
            font-weight: 200;
            color: #333333;
        `,
        linksList: {
            a: `
                font-size: 1.5rem;
                font-weight: 200;
                letter-spacing: .25em;
                color: #333333;
            `
        },
        socialLinksList: `
            display: inline-block;
        `
    },
    values: {
        navbarBrand: 'Canve',
        linksList: [
            { value: 'Lorem',                                                   href: '#' },
            { value: 'Consectetur',                                             href: '#' },
            { value: 'Aenean',                                                  href: '#' },
            { value: 'Suscipit accumsan',                                       href: '#' }
        ],
        socialLinksList: [
            { value: '<i class="fa fa-facebook fa-lg" aria-hidden="true"></i>', href: '#' },
            { value: '<i class="fa fa-twitter fa-lg" aria-hidden="true"></i>',  href: '#' }
        ]
    }
}

// construct the navbar right links list
let linksList = new String

for(const item of data.values.linksList)
    linksList += `
        <li>
            <a href="${ item.href }" style="${ data.css.linksList.a }">
                ${ item.value }</a>
        </li>
    `

// construct the navbar right social links list
let socialLinksList = new String

for(const item of data.values.socialLinksList)
    socialLinksList += `
        <li style="${ data.css.socialLinksList }">
            <a href="${ item.href }" style="${ data.css.linksList.a }">
                ${ item.value }</a>
        </li>
    `

const template = `
<nav class="navbar navbar-default" style="${ data.css.navbar }">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" style="${ data.css.navbarBrand }">${ data.values.navbarBrand }</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                ${ linksList }
                <ul class="nav navbar-nav">
                    ${ socialLinksList }
                </ul>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
`

export default template
