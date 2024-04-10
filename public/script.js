document.body.style.margin   = 0
document.body.style.overflow = `hidden`

//remember to put document.getElementById to get the element
//whatever on the right handside is assigned to the left handside
const cnv = document.getElementById (`cnv_element`)
cnv.width = innerWidth
cnv.height = innerHeight

//context is the thing that draw things and get data from the canvas
const ctx = cnv.getContext (`2d`)

//addressing the Context
const draw_frame = () => {
   ctx.fillStyle = `turquoise`
   //the same as background in p5
   ctx.fillRect (0, 0, innerWidth, innerHeight)

   requestAnimationFrame (draw_frame)
}

draw_frame ()

//whenever you resixe the window, it resize the canvas
window.onresize = () => {
   cnv.width = innerWidth
   cnv.height = innerHeight   
}