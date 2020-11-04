// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function render()
{
    let c = document.querySelector('canvas')
    if(c.getContext)
    {
        let ctx = c.getContext('2d')
        ctx.clearRect(0,0, 500, 300)
        ctx.fillStyle = document.getElementById('c').value
        ctx.fillRect(50, 100, 60, 30)

        ctx.fillStyle = "orange" 
        ctx.beginPath()
        ctx.arc(document.getElementById('x').value, 250, 150, 75, 0, 2 * Math.PI)
        ctx.fill()
    }
}

document.body.onload = render
document.getElementById('x').onchange = render
document.getElementById('c').onchange = render