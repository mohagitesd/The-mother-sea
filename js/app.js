gsap.to("#doubleRedFish", {
    duration: 50,
    repeat: -1,
    rotate: 3600,
});

gsap.to("#seiche", {
    duration: 6,
    y: 350,
});

gsap.to("#longNoseFish", {
    duration: 6,
    x: -400,
});

gsap.fromTo("#greenFish", {
    scaleX: -1,
},
    {
        duration: 6,

        x: 650,
        rotate: -45,
        y: -300,


    }


);

gsap.to("#yellowFish", {
    duration: 6,
    x: -300,
});

gsap.to("#turtle", {
    duration: 6,
    x: -200,
    y: -200,
});

gsap.to("#whiteFish", {
    duration: 6,
    x: 300,
});

gsap.to("#creteFish", {
    duration: 6,
    x: 300,
});

doubleRedFish.onmouseenter = function () {
    gsap.to("#doubleRedFish", {
        duration: 0.5,
        scale: 1.5,
        repeat: 1,


    });
}
doubleRedFish.onmouseleave = function () {
    gsap.to("#doubleRedFish", {
        duration: 0.5,
        scale: 1,


    });
}

longNoseFish.onmouseenter = function () {
    gsap.fromTo("#bulle", {
        duration: 0.5,
        opacity: 0,
    },
        {

            //  scale: 1.5,
            repeat: 1,
            yoyo: true,

            duration: 8,
            y: -400,
            opacity: 100,

        });
}

seiche.onmouseenter = function () {
    gsap.to("#encre", {


        //  scale: 1.5,
        repeat: 1,
        yoyo: true,

        duration: 8,
        y: -800,
        opacity: 100,

    });
}





