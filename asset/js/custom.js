$(function(){
    /**
     * intro
     */
    //  gsap.set('.sc-visual .thumb-area',{yPercent:-100})
     const introAni2 = gsap.timeline({
        paused:true
     })
     introAni2.addLabel('a')
     .from('.sc-visual .sc-title .tit-msg',{opacity:0, yPercent:103, stagger:0.2,duration:0.6},'a')
     .from('.sc-visual .thumb-area',{top:"-70%",duration:1},'a') // top컨트롤
     .from('.header',{opacity:0,duration:1.2},'a')


    gsap.set('.loading .guage',{width:"100%"})
    const introAni = gsap.timeline({
        onComplete:function(){
            introAni2.play();
        }
    })
    introAni.addLabel('a')
    .to('.loading .guage', {width:0,delay:1},'a')
    .to('.loading',{opacity:0,delay:1.5,duration:1,display:'none'},'a')
   

    /**
     * sc-visual
     */
    gsap.to('.sc-visual .thumb-area',{
        scrollTrigger:{
            trigger:".sc-visual",
            start:"top top",
            end:"bottom top",
            scrub:0,
            ease:'none'
        },
        yPercent:250,

    }) 
    
    textMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc-visual .gradient-txt2',
            start:'top 90%',
            end:'150% -100%',
            scrub:1
        }
    })
    textMotion.addLabel('a')
    .to('.sc-visual .gradient-txt2',{xPercent:50, duration:2, scrub:1},'a')
    .to('.sc-visual .gradient-txt3',{ xPercent:-100, duration:2, scrub:1},'a')
    .to('.sc-visual .gradient-txt4',{ xPercent:50, duration:2, scrub:1},'a')
    //line 추가
    .from('.sc-visual .gradient-line6 .guage',{width:0,duration:2},'a-=0.1')
    .from('.sc-visual .gradient-line1 .guage',{width:0,duration:2},'a+=0.3')
    .from('.sc-visual .gradient-line2 .guage',{width:0,duration:2},'a+=0.5')
    .from('.sc-visual .gradient-line3 .guage',{width:0,duration:2},'a+=0.7')
    .from('.sc-visual .gradient-line4 .guage',{width:0,duration:2},'a+=0.9')

    /**
     * sc-you
     */
    gsap.set('.sc-you .sc-title',{yPercent:50})
    gsap.to('.sc-you .sc-title',{
        scrollTrigger:{
            trigger:".sc-you .thumb-box",
            start:'top bottom',
            end:'bottom top',
            markers:true,
            scrub:1
        },
        yPercent:-120,
        duration:2,
        scrub:1
    })

    /**
     * app
     */
    appMotion = gsap.timeline({
        scrollTrigger:{
            trigger:'.sc-app',
            start:"top bottom",
            end:"bottom top",
            scrub:1,
            markers:true
        }
    })
    appMotion.addLabel('a')
    .fromTo('.sc-app .device-item.item1',{yPercent:-100},{yPercent:100},'a') // -100 -> 100
    .fromTo('.sc-app .device-item.item2',{yPercent:100},{yPercent:-100},'a') // 100 -> -100
    .fromTo('.sc-app .device-item.item3',{yPercent:-100},{yPercent:100,
        scrollTrigger:{
            trigger:'.sc-app',
            start:"top bottom",
            end:"bottom top",
            scrub:2,
        }
    },'a') // -100 -> 100

    /**
     * sc-feature
     */
    gsap.set('.sc-feature .bar',{width:'0%'})
    $('.sc-feature .bar-center').each(function(i,el){
        child = $(this).find('.bar')
        
        gsap.to(child,{
            scrollTrigger:{
                trigger:el,
                start: 'top 100%',
                end: 'bottom top',
                markers:true,
                scrub:1
            },
            width:'97%'
        })
    })

    const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width = 575;
	canvas.height = 696; // 캔버스크기
	const frameCount = 45; // 프레임카운트 45장
	const currentFrame = (idx) => {
		return `https://www.apple.com/105/media/us/airpods-max/2020/996b980b-3131-44f1-af6c-fe72f9b3bfb5/anim/turn/large_2x/large_2x_${idx.toString().padStart(4, '0')}.jpg`; // 자릿수치환 0001~
	}; // 리턴 필수

	const images = [];
	const card = {
		frame: 0,
	};
	for (let i = 0; i < frameCount; i++) {
		const img = new Image();
		img.src = currentFrame(i + 1);
		images.push(img);
	}
	gsap.to(card, {
		frame: frameCount - 1,
		snap: 'frame',
		ease: 'none',
		scrollTrigger: {
			trigger: '.sc-together',
			scrub: 1,
			start: 'top top',
			end: 'bottom bottom', //+=500% 내 영역이 5배만큼 가상스크롤
            markers:true,
            // pin:true -> 고정 
            // 리퀘스트 애니메이션
		},
		onUpdate: render,
	});
	images[0].onload = render;
	function render() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(images[card.frame], 0, 0 ,575,696);
	}



})