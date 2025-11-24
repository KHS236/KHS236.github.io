/* roket */
TweenMax.fromTo(".fire", .03, {x:-.5, y:-.4}, {x:.5, y:.4, repeat: -1, yoyo:true})

var tl = new TimelineMax({repeat:-1}),
		tl_sky = new TimelineMax({repeat:-1});

tl_sky.fromTo(".sky", 12, {transform:"translateY(-100vh)"}, 
							{transform:"translateY(0vh)", ease:Power0.easeNone});

tl.to(".rocket", 3, {transform:"translateY(-5vh)",ease:Expo.easeOut})
	.fromTo(".fire", .4, {scaleY: .7}, {scaleY: 1.5}, "+=1.5")
	.add(() => tl_sky.timeScale(25),"-=.4")
	.to(".rocket", 2, {transform:"translateY(-103vh)", ease:Power3.easeOut},"+=2.5")
	.add(() => TweenMax.to(tl_sky, 1.5, {timeScale:2}))

tl_sky.timeScale(1);
