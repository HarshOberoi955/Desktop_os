function openApp(app){

let frame = document.getElementById("appFrame")
let window = document.getElementById("appWindow")

frame.src = app

window.style.display = "flex"

/* restart animation */

window.style.animation = "none"
window.offsetHeight
window.style.animation = "openApp 0.35s ease"

}

function closeApp(){
document.getElementById("appWindow").style.display = "none"
}

function refreshDesktop (){
location.reload()
}

function createFolder (){
alert("New Folder Created 📁")
}

function changeWallpaper(){

let wallpapers = [

"https://picsum.photos/1920/1080?random=1",
"https://picsum.photos/1920/1080?random=2",
"https://picsum.photos/1920/1080?random=3",
"https://picsum.photos/1920/1080?random=4",
"https://picsum.photos/1920/1080?random=5"

]

let randomWallpaper = wallpapers[Math.floor(Math.random()*wallpapers.length)]

document.body.style.background = "url('" + randomWallpaper + "') center/cover no-repeat"

}

function openSettings (){
alert("Settings coming soon ⚙")
}

function toggleStart(){

let menu = document.getElementById("startMenu")

if(menu.style.display === "block"){
menu.style.display = "none"
}else{
menu.style.display = "block"
}

}

function updateClock(){

let now = new Date()
let time = now.toLocaleTimeString()

document.getElementById("clock").innerHTML = time

}

setInterval(updateClock,1000)
updateClock()

function openExplorer(){
document.getElementById("explorer").style.display = "block"
}

function closeExplorer(){
document.getElementById("explorer").style.display = "none"
}


/* WAIT UNTIL PAGE LOADS */

document.addEventListener("DOMContentLoaded", function(){

/* DRAG WINDOW */

let appWindow = document.getElementById("appWindow")
let titleBar = document.querySelector("#appWindow .titlebar")

let isDragging = false
let offsetX = 0
let offsetY = 0

titleBar.addEventListener("mousedown", function(e){

isDragging = true
offsetX = e.clientX - appWindow.offsetLeft
offsetY = e.clientY - appWindow.offsetTop

})

document.addEventListener("mousemove", function(e){

if(!isDragging) return

appWindow.style.left = (e.clientX - offsetX) + "px"
appWindow.style.top = (e.clientY - offsetY) + "px"

})

document.addEventListener("mouseup", function(){
isDragging = false
})


/* RIGHT CLICK MENU */

let desktopMenu = document.getElementById("desktopMenu")

document.addEventListener("contextmenu", function(e){

e.preventDefault()

desktopMenu.style.display = "block"
desktopMenu.style.left = e.pageX + "px"
desktopMenu.style.top = e.pageY + "px"

})

document.addEventListener("click", function(){
desktopMenu.style.display = "none"
})


/* RESIZE WINDOW */

const windowBox = document.getElementById("appWindow")
const resizeHandle = document.querySelector("#appWindow .resize-handle")

let isResizing = false

resizeHandle.addEventListener("mousedown", function(e){

isResizing = true
e.preventDefault()

})

document.addEventListener("mousemove", function(e){

if(!isResizing) return

let newWidth = e.clientX - windowBox.offsetLeft
let newHeight = e.clientY - windowBox.offsetTop

windowBox.style.width = newWidth + "px"
windowBox.style.height = newHeight + "px"

})

document.addEventListener("mouseup", function(){
isResizing = false
})

})

window.addEventListener("load", function () {

setTimeout(function () {

document.getElementById("bootScreem").style.display = "none"

}, 3000)

})

window.addEventListener("load", function(){

let boot = document.getElementById("bootScreen")

setTimeout(function(){

boot.style.opacity = "0"

setTimeout(function(){
boot.style.display = "none"
},500)

},3000)

})

let icons = document.querySelectorAll(".desktop-icon")

icons.forEach(icon => {

let offsetX, offsetY
let dragging = false

icon.addEventListener("mousedown", function(e) {

dragging = true

offsetX = e.clientX - icon.offsetLeft
offsetY = e.clientY - icon.offsetTop

})

document.addEventListener("mousemove", function(e) {

if(!dragging) return

icon.style.left = (e.clientX - offsetX) + "px"
icon.style.top = (e.clientY - offsetY) + "px"

})

document.addEventListener("mouseup", function() {

dragging = false

})

})