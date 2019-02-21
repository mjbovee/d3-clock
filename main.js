var fields

fields = function() {
    var currentTime, hour, minute, second
    currentTime = new Date()
    second = currentTime.getSeconds()
    minute = currentTime.getMinutes()
    hour = currentTime.getHours() + minute / 60
    return data = [
        {
            "unit": "seconds",
            "numeric": second
        }, {
            "unit": "minutes",
            "numeric": minute
        }, {
            "unit": "hours",
            "numeric": hour
        }
    ]
}

var width, height, offSetX, offSetY, pi, scaleSecs, scaleHours
width = 400
height = 200
offSetX = 150
offSetY = 100

pi = Math.PI
scaleSecs = d3.scaleLinear().domain([0, 59 + 999/1000]).range([0, 2 * pi])
scaleMins = d3.scaleLinear().domain([0, 59 + 59/60]).range([0, 2 * pi])
scaleHours = d3.scaleLinear().domain([0, 11 + 59/60]).range([0, 2 * pi])