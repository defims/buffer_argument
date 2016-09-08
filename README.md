# buffer_argument

## what

buffer the function's arguments each call. it's useful when events' handler trigger in different time.

## test

npm run test

## usage

    function on_device_moving(orientation, motion) {
        if(orientation && motion) {
            console.log("alpha:", orientation.alpha)
            console.log("beta:", orientation.beta)
            console.log("gamma:", orientation.gamma)
            console.log("ax:", motion.acceleration.x)
            console.log("ay:", motion.acceleration.y)
            console.log("az:", motion.acceleration.z)
        }
    }
    buffer_argument(on_device_moving, function(f) { on_device_moving = f })
    window.addEventListener('deviceorientation', on_device_moving)
    window.addEventListener("devicemotion", on_device_moving.bind(null, undefined))
