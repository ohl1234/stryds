$(function(){
    /**
     * intro
     */
    gsap.set('.loading .gradient-line1',{width:"30%"})
    gsap.set('.sc-visual .thumb-area',{yPercent:-100})
    const introAni = gsap.timeline({})
    introAni.addLabel('a')
    .to('.loading .gradient-line1', {width:0,delay:1},'a')
    .to('.loading',{opacity:0,delay:1.5,duration:1,display:'none'},'a')
    .from('.sc-visual .sc-title .tit-msg',{opacity:0, yPercent:103, stagger:0.2,duration:0.6,delay:2},'a')
    .to('.sc-visual .thumb-area',{yPercent:10,duration:1,delay:2.3},'a')
    .from('.header',{opacity:0,duration:1.2,delay:3},'a')

    /**
     * sc-visual
     */
    gsap.to('.sc-visual .thumb-area',{
        scrollTrigger:{
            trigger:".sc-visual",
            start:"top top",
            end:"bottom bottom",
            toggleActions:"play pause resume reverse"
        },
        yPercent:150,
        scrub:1,
        duration:3

    }) 

    gsap.to('.sc-visual .gradient-txt2',{
        scrollTrigger:{
            trigger:'.sc-visual .gradient-txt2',
            start:'top 90%',
            end:'bottom top',
            toggleActions:"play pause resume reverse"
        },
        xPercent:50,
        duration:2,
        scrub:1
    })
    gsap.to('.sc-visual .gradient-txt3',{
        scrollTrigger:{
            trigger:'.sc-visual .gradient-txt3',
            start:'top 90%',
            end:'bottom top',
            toggleActions:"play pause resume reverse"
        },
        xPercent:-80,
        duration:2,
        scrub:1
    })
    gsap.to('.sc-visual .gradient-txt4',{
        scrollTrigger:{
            trigger:'.sc-visual .gradient-txt4',
            start:'top 90%',
            end:'bottom top',
            toggleActions:"play pause resume reverse"
        },
        xPercent:50,
        duration:2,
        scrub:1
    })

    /**
     * sc-you
     */
    gsap.set('.sc-you .sc-title',{yPercent:50})
    gsap.to('.sc-you .sc-title',{
        scrollTrigger:{
            trigger:".sc-you",
            start:'top top',
            end:'bottom top',
            markers:true,
            toggleActions:"play pause resume reverse"
        },
        yPercent:-120,
        duration:2,
        scrub:1
    })

    /**
     * sc-feature
     */
    gsap.set('.sc-feature .bar',{width:'0%'})
    gsap.to('.sc-feature .group-mind .bar',{
        scrollTrigger:{
            trigger:".group-mind",
            start: 'top top',
            end: 'bottom top',
            markers:true,
            toggleActions:"play pause resume reverse"
        },
        width:'97%'

    })
    gsap.to('.sc-feature .group-heart .bar',{
        scrollTrigger:{
            trigger:".group-heart",
            start: 'top top',
            end: 'bottom top',
            markers:true,
            toggleActions:"play pause resume reverse"
        },
        width:'97%'

    })
    gsap.to('.sc-feature .group-body .bar',{
        scrollTrigger:{
            trigger:".group-body",
            start: 'top top',
            end: 'bottom top',
            markers:true,
            toggleActions:"play pause resume reverse"
        },
        width:'97%'

    })

})