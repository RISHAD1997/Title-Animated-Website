       let tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.home',
                start:'0%',
                end: '80%',
                scrub: 1,
            },
        });
        
        let tl2 = gsap.timeline({
            scrollTrigger:{
                trigger:'.home',
                start:'0%',
                end: '80%',
                scrub: 1,
            },
        });
        
 

        let tl4 = gsap.timeline({
            scrollTrigger:{
                trigger:'.home',
                start:'0%',
                end: '80%',
                scrub: 1,
            },
        });


        //For progressbar  animation!!!!!!!!!!!!

        const progressBar = document.querySelector("#progress-bar");
        const section = document.querySelector("section");

        const animateProgressBar = () => {
        let scrollDistance = -section.getBoundingClientRect().top;
        let progressWidth = 
        (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight))
        *100;
    
        let value = Math.floor(progressWidth);
        progressBar.style.width = value + "%";

        if(value < 0){
            progressBar.style.width = "0%";
        }
    };
        window.addEventListener("scroll", animateProgressBar);
        


        let tl3 = gsap.timeline({
            scrollTrigger:{
                trigger:'.home',
                start:'0%',
                end: '200%', //add more section in html then change this to 300,400,500 etc
                scrub: 1,
                pin: true,
                pinSpacing: false,
            },
        });

    //For mobile view!!!!!!!


        const mobile = window.matchMedia("(max-width:500px)");
        window.addEventListener("resize",resize())
        function resize(){
            if(mobile.matches){
                tl.fromTo('.sliding-text', {y: 0},{y: -400});
                tl2.fromTo('.logo',{scale:6},{scale:2,top: '1.2rem',left: '2.2rem',x: "50%", y: "50%"});
                tl4.fromTo('.square',{left :'40%'},{left :'100%',opacity: 0 ,rotation:90});
            }else{
                tl.fromTo('.sliding-text', {y: 0},{y: -400});
                tl2.fromTo('.logo',{scale:6},{scale:1,top: '1.5rem',left: '3rem',x: "50%", y: "50%"});
                tl4.fromTo('.square',{left :'70%'},{left :'100%',opacity: 0 ,rotation:90});
            }
        }

        

        
        
        




