// Random colors with similar opacity
const colors = [
    "#60216f30",
    "#31666f30",
    "#8e44ad30",
    "#2980b930",
    "#16a08530",
    "#27ae6030",
    "#f39c1230",
    "#d3540030",
    "#c0392b30",
    "#7f8c8d30"
]

export function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)]!
}