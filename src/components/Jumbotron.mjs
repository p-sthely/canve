const data = {
    css: {
        jumbotron: `
            background-color: #253551;
            margin-bottom: 0;
        `,
        contentWrapper: `
            max-width: 75em;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            padding: 3em;
        `,
        p: `
            font-size: 3rem;
            color: #F4F4F4;
            line-height: 1.5;
            letter-spacing: .1em;
        `,
        jumbotronBtn: `
            font-size: 1.5rem;
            letter-spacing: .25em;
            background-color: #253551;
            border-color: #F4F4F4;
            color: #F4F4F4;
            border-radius: 0;
            border-width: 2px;
            padding-left: 3em;
            padding-right: 3em;
            padding-top: 1.25em;
            padding-bottom: 1.25em;
            margin-top: 25px;
        `
    }
}

const template = `
<div class="jumbotron" style="${ data.css.jumbotron }">
    <div class="contentWrapper" style="${ data.css.contentWrapper }">
        <p style="${ data.css.p }">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas sollicitudin risus, vehicula pulvinar turpis.</p>
        <p style="${ data.css.p }">Class aptent taciti sociosqu ad litora torquent</p>
        <button id="jumbotronBtn" class="btn btn-default" type="submit" style="${ data.css.jumbotronBtn }">Non venenatis metus</button>
    </div>
</div>
`

export default template
