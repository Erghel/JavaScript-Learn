(function() {
var isAndroid = /(android)/i.test(navigator.userAgent);
if (!isAndroid) {
document.getElementById('example').innerHTML = '<strong>You\'re not visiting from an Android device</strong>';
return;
}

function round2(num) {
return +(Math.round(num + "e+2") + "e-2");
}

window.addEventListener('devicemotion', function(event) {
var x = event.acceleration.x;
var y = event.acceleration.y;
var z = event.acceleration.z;

// An object giving the rate of change of the device's orientation
// on the three orientation axis alpha, beta and gamma.
// Rotation rate is expressed in degrees per seconds.
var rotationRate = event.rotationRate;

// A number representing the interval of time, in milliseconds, at which data is obtained from the device.
var interval = event.interval;

if (x !== null && y !== null && z !== null) {
// only emit the event if device motion is more than
// 0.5 m/s2 in one of the axises
if (Math.abs(x) > 0.5 || Math.abs(y) > 0.5 || Math.abs(z) > 0.5) {
var el = document.getElementById('devicemotionOutput');
el.innerHTML = JSON.stringify({
event: 'devicemotion',
accelerationX: round2(x),
accelerationY: round2(y),
accelerationZ: round2(z),
interval: interval,
}, null, 2);
}
}
})

window.addEventListener('deviceorientation', function(event) {
// only consider significant changes in rotation
if (Math.abs(self.alpha - event.alpha) < 1
|| Math.abs(self.gamma - event.gamma) < 1
|| Math.abs(self.beta - event.beta) < 1) {
return;
}

this.alpha = event.alpha;
this.beta = event.beta;
this.gamma = event.gamma;

if (event.alpha !== null && event.beta !== null && event.gamma !== null) {
var el = document.getElementById('deviceorientationOutput');
el.innerHTML = JSON.stringify({
event: 'deviceorientation',
alpha: round2(event.alpha),
beta: round2(event.beta),
gamma: round2(event.gamma),
absolute: event.absolute,
}, null, 2);
}
})
})();
