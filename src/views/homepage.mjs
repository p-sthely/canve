import Navbar from '../components/Navbar.mjs'
import Cover from '../components/Cover.mjs'
import Jumbotron from '../components/Jumbotron.mjs'

const data = {

}

const template = `
<div class="container-fluid">
    <div class="row">
        ${ Navbar }
        ${ Cover }
        ${ Jumbotron }
    </div>
</div>
`
export default template
