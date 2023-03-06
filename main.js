var mouse_event= "mp"
var last_position_x;
var last_position_y;
var position_x;
var position_y;
var canvas= document.getElementById("canvas")
var ctx= canvas.getContext("2d")
var colour= "black"
var width_of_line= 5
var radius= 5

canvas.addEventListener("mousedown", mymousedown)

function mymousedown(e) {
    mouse_event= "mousedown"
    colour= document.getElementById("colour").value
    width_of_line= document.getElementById("width_of_line")
    radius= document.getElementById("radius")
}

canvas.addEventListener("mousemove", mymousemove) 

function mymousemove(e) {
    position_x= e.clientX-canvas.offsetLeft
    position_y= e.clientY-canvas.offsetTop
    if (mouse_event=="mousedown") {
        ctx.beginPath()
        ctx.strokeStyle= colour
        ctx.lineWidth= 5
        ctx.arc(position_x, position_y, radius, 0, 2*Math.PI)
        ctx.moveTo(last_position_x, last_position_y)
        ctx.lineTo(position_x, position_y)
        ctx.stroke()
    }
    last_position_x= position_x
    last_position_y= position_y
}

canvas.addEventListener("mouseup", mymouseup)

function mymouseup(e) {
    mouse_event= "mouseup"
}

canvas.addEventListener("mouseleave", mymouseleave)

function mymouseleave(e) {
    mouse_event= "mouseleave"
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
