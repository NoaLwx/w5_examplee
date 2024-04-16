document.body.style.margin   = 0
document.body.style.overflow = `hidden`

//remember to put document.getElementById to get the element
//whatever on the right handside is assigned to the left handside
const cnv = document.getElementById (`cnv_element`)
cnv.width = innerWidth
cnv.height = innerHeight

//context is the thing that draw things and get data from the canvas
const ctx = cnv.getContext (`2d`)

draw_frame ()

//whenever you resixe the window, it resize the canvas
window.onresize = () => {
   cnv.width = innerWidth
   cnv.height = innerHeight   
}


let img_data

const draw = i => ctx.drawImage (i, 0, 0, cnv.width, cnv.height)

const img = new Image ()
img.onload = () => {
   cnv.height = cnv.width * (img.height / img.width)
   draw (img)
   img_data = cnv.toDataURL ("image/jpeg")
   add_glitch ()
}
img.src = `/public/img/cat.png`

const rand_int = max => Math.floor (Math.random () * max)

const glitchify = (data, chunk_max, repeats) => {
   const chunk_size = rand_int (chunk_max / 4) * 4
   const i = rand_int (data.length - 24 - chunk_size) + 24
   const front = data.slice (0, i)
   const back = data.slice (i + chunk_size, data.length)
   const result = front + back
   return repeats == 0 ? result : glitchify (result, chunk_max, repeats - 1)
}

const glitch_arr = []

const add_glitch = () => {
   const i = new Image ()
   i.onload = () => {
      glitch_arr.push (i)
      if (glitch_arr.length < 12) add_glitch ()
      else draw_frame ()
   }
   i.src = glitchify (img_data, 96, 6)
}

let is_glitching = false
let glitch_i = 0

const draw_frame = () => {
   if (is_glitching) draw (glitch_arr[glitch_i])
   else draw (img)

   const prob = is_glitching ? 0.05 : 0.02
   if (Math.random () < prob) {
      glitch_i = rand_int (glitch_arr.length)
      is_glitching = !is_glitching
   }

   requestAnimationFrame (draw_frame)
}


   

// function print (msg) {
//    console.log (msg)
// }
//or
const print = (msg) => {
   console.log (msg)
} 
print (`what's up`)

const ex_arr = [`a` ,`b` ,`c`]
print (ex_arr.length)

ex_arr.forEach (print)

