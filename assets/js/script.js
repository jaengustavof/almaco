      $( document ).ready(function() {
     $(function() {

      let sectionPosition = 1;
      let sectionLeft = 0;
      let secciones = document.getElementsByTagName("section");
      var executed = false;

      function wwa1(){
        var span1 = $(".spanText1");
          let time = 100;
            for(let i = 0; i < span1.length; i++){
              setTimeout(function() { 
                $(span1[i]).css("opacity", "1");
                $(span1[i]).css("top", "0");
              }, time);
              time +=400;
            }
      }

      function wwa2(){
       $(".secondTitle").css("opacity", "1");
        $(".secondTitle").css("left", "0");
        var span2 = $(".spanText2");
        var time = 100;
          for(let i = 0; i < span2.length; i++){
            setTimeout(function() { 
              $(span2[i]).css("opacity", "1");
              $(span2[i]).css("top", "0");
            }, time);
              time +=400;
          }
      }

      function wwa3(){
        $(".thirdTitle").css("opacity", "1");
        $(".thirdTitle").css("left", "0");
        var span3 = $(".spanText3");
        time = 100;
          for(let i = 0; i < span3.length; i++){
            setTimeout(function() { 
              $(span3[i]).css("opacity", "1");
              $(span3[i]).css("top", "0");
            }, time);
            time +=400;
          }
      }

      let deploy = (function() {
        return function() {
          if (!executed) {
              executed = true;
              setTimeout(function(){
                  dos();
              },100);
              setTimeout(function(){
                  uno();
              },300);
              setTimeout(function(){
                  cero();
              },500);                        
          }
        };
      })();

        //Menu//
        //Who We Are//
        $("#wwAreButton").click(function(){

          $(".logo").css("opacity", 1);
          wwa1();

          setInterval(function(){
            wwa2();
          }, 800);

          setInterval(function(){
            wwa3();
          }, 1200);
        });
        //Who We Are//
        //Our Brands//
        $("#ourBrandsButton").click(function(){

          $(".logo").css("opacity", 0);
          wwa1();

          setInterval(function(){
            wwa2();
          }, 800);

          setInterval(function(){
            wwa3();
          }, 1200);

          deploy();
        });
        //Our Brands//
        //Carrers//
        $("#careerButton").click(function(){

          $(".logo").css("opacity", 1);

          wwa1();
          setInterval(function(){
            wwa2();
          }, 800);
          setInterval(function(){
            wwa3();
          }, 1200);
          deploy();
        });
        //Blog//
        $("#blogButton").click(function(){
          $(".logo").css("opacity", 1);
          wwa1();
          setInterval(function(){
            wwa2();
          }, 800);
          setInterval(function(){
            wwa3();
          }, 1200);
          deploy();
        });
        //Menu//


         $(".container").mousewheel(function(event, delta) {

          //Scroll Automatico///
          /*  if(delta == -1){
              if(sectionPosition < 4){ 
                sectionLeft += -100;
                  $("section").css("left", sectionLeft+"%"); 
                  sectionPosition++;
                }
                
                event.preventDefault();
            }else if(delta == 1){
              if(sectionPosition > 1){
                sectionLeft += +100;
                $("section").css("left", sectionLeft+"%"); 
                sectionPosition--;
              }
            }
            */    
          //Scroll Manual  

          if(this.scrollLeft <= 1343){


          }else{



          }

           this.scrollLeft -= (delta * 200);
           //console.log(delta);
            event.preventDefault();
            //console.log(this.scrollLeft);


        //Scroll Effect Section 1.2//
            if(this.scrollLeft >= 500) {
              wwa1();
            }

            if(this.scrollLeft >= 800) {
              wwa2();
            }

            if(this.scrollLeft >= 1100) {
              wwa3()
            }

            //One Time Function for Section 2//
            if( this.scrollLeft >=2300){
              deploy();
            }

            //Logo fadeOut Second Section
            if(this.scrollLeft > 2800 && this.scrollLeft <= 5000){
              $(".logo").css("opacity", 0);
            }else{
              $(".logo").css("opacity", 1);
            }

         });

         //Logo Animation //

          var targets = $(".target");
            var vel = 100;
            for(let i =0; i<=targets.length; i++){
                setTimeout(function(){ 
               // console.log(targets[i]);             
                $(targets[i]).css("opacity", 1);
                $(targets[i]).css("left", 0);
                }, vel);
                  vel +=200; 
            }

            setTimeout(function(){
                $(".target").css("transition", "2s");
                $(".uno").css("border-radius", "200px 0 0 200px");
                $(".uno").css("-moz-border-radius", "200px 0 0 200px");
                $(".uno").css("-webkit-border-radius", "200px 0 0 200px");
            }, 1500);

            setTimeout(function(){
                $(".tres").css("width", "200px");

            }, 1800);

            setTimeout(function(){
                $(".cuatro").css("border-radius", "200px 0 0 200px");
                $(".cuatro").css("-moz-border-radius", "200px 0 0 200px");
                $(".cuatro").css("-webkit-border-radius", "200px 0 0 200px");
            }, 2100);

            setTimeout(function(){
              $(".containerTotal").css("opacity", 0);              
            },3500);//Logo Animation //


         //main Section//
   
        setTimeout(function(){          
            $(".wrapper").css("opacity", 1);
        },4200);

        setTimeout(function(){         
            $(".firstSection").css("opacity", 1);
            $(".containerTotal").css("display","none");
        },4200);

        setTimeout(function() { 
          $(".firstTitle").css("opacity", "1");
          $(".firstTitle").css("left", "0");
        }, 4900);

        //Second Section//
        var indexKnow = $(".indexKnow");
        var moreToKnow = $(".moreToKnow");
       // console.log(indexKnow);

        function cero() {
          for(index of indexKnow){
            $(indexKnow[0]).removeClass("indexNone");
            $(indexKnow).css("opacity",1);
          }
          $(indexKnow[0]).css("opacity",0);
          $(".secTwo").css("top", "706px");
          $(".secThree").css("top", "756px");
          $(".secFour").css("top", "806px");
        }

        function uno() {
          for(index of indexKnow){
            $(indexKnow[0]).removeClass("indexNone");
            $(indexKnow).css("opacity",1);
          }
          $(indexKnow[1]).css("opacity",0);
          $(".secTwo").css("top", "50px");
          $(".secThree").css("top", "756px");
          $(".secFour").css("top", "806px");
        }

        function dos() {
          for(index of indexKnow){
            $(indexKnow[0]).removeClass("indexNone");
            $(indexKnow).css("opacity",1);
          }
          $(indexKnow[2]).css("opacity",0);
          $(".secTwo").css("top", "50px");
          $(".secThree").css("top", "100px");
          $(".secFour").css("top", "806px");
        }

        function tres(){
          for(index of indexKnow){
            $(indexKnow[0]).removeClass("indexNone");
            $(indexKnow).css("opacity",1);
          }
          $(indexKnow[3]).css("opacity",0);
          $(".secTwo").css("top", "50px");
          $(".secThree").css("top", "100px");
          $(".secFour").css("top", "150px");
        }

        indexKnow.click(function(event){
          var result = Array.from(moreToKnow).indexOf(event.target);
          var result2 = Array.from(indexKnow).indexOf(event.target);

          for(index of indexKnow){
            $(indexKnow[0]).removeClass("indexNone");
            $(indexKnow).css("opacity",1);
          }

          if(result == 0 || result2 ==0) {
            cero();
            cont=0;
          }

          if(result == 1 || result2 ==1) {
            uno();
            cont=1;
          }

          if(result == 2 || result2 ==2) {
            dos();
            cont=2;
          }

          if(result == 3 || result2 ==3) {
            tres();
            cont=3;
          }

        });         
        tres();
        //Second Section//

        //Third Section//
        var pixels = 0;
        $(".arrowButton").click(function(){
            if(pixels < 200){
              pixels +=100;
            }
           $(".thirdSectionContainer ").css("top", "-"+pixels+"%");
           $(".buttonText").css("opacity", 0);
           
           setTimeout(function(){
              if(pixels == 100){
                $(".buttonText").css("text-align", "center;");
                $(".buttonText").text("Current opportunities");
                $(".buttonText").css("opacity", 1);
                $(".arrowImg").attr("src", "assets/rsc/img/arrow2.svg");
              }else if(pixels==200){
                $(".arrowButtonTop").css("cursor", "pointer");
                $(".buttonText").css("text-align", "center;");
                $(".buttonText").text("Find vacancies");
                $(".buttonText").css("opacity", 1);
                $(".arrowButtonTop").css("opacity", 1);
                $(".arrowImg").attr("src", "assets/rsc/img/arrow3.svg");
              }                       
           }, 1000);
           
        });

        $(".arrowButtonTop").click(function(){
          pixels = 0;
           $(".thirdSectionContainer").css("top", "-"+pixels+"%");
          $(".arrowImg").attr("src", "assets/rsc/img/arrow.svg");
          $(".arrowButtonTop").css("opacity", 0);
          $(".arrowButtonTop").css("cursor", "none");
          $(".buttonText").text("Why join us");         
        });

        // Fourth Section //
          var fourth = 1;
          var fourthSecIndex = $(".fourthSecIndex");
          var fourthIndexName = $(".fourthIndexName");
          var fSectionDinamicTitle = $(".fSectionDinamicTitle");
           fourthIndexName.click(function(event){
            let pos4 = Array.from(fourthIndexName).indexOf(event.target);
            let pos41 = Array.from(fSectionDinamicTitle).indexOf(event.target);
            if(pos4 >=0){
              fourth = pos4;
              changeFourth(pos4);
            }
            if(pos41 >=0){
              fourth = pos41;
              changeFourth(pos41);
            }
          });
         
          var fourthSectionText = $(".fourthSectionText");
          var fSectionDinamicTitle = $(".fSectionDinamicTitle");
          //console.log(fourthSections);
          for(let i = 0; i <fourthSectionText.length; i++){
              $(fourthSectionText[i]).css("display", "none");
          }
          $(fourthSectionText[0]).css("display", "flex");
          $(fourthSecIndex[0]).css("width", "116px");
          $(fourthSecIndex[0]).css("background", "rgba(0,0,0,0.5)");
          $(fSectionDinamicTitle[0]).css("fontSize", "50px");
          $(fSectionDinamicTitle[0]).css("lineHeight", "60px");

          let backImg0 = "url('assets/rsc/img/section4back1.webp')";
          let backImg1 = "url('assets/rsc/img/section4back2.webp')";
          let backImg2 = "url('assets/rsc/img/section4back3.webp')";
          let arrImg = [backImg0,backImg1,backImg2];

          function changeFourth(index){
              for(let i = 0; i <fourthSectionText.length; i++){
                $(fourthSectionText[i]).css("display", "none");
                $(fourthSecIndex[i]).css("width", "60px");
                $(fourthSecIndex[i]).css("background", "rgba(0,0,0,0.9)");
                $(fSectionDinamicTitle[i]).css("fontSize", "17px");
                $(fSectionDinamicTitle[i]).css("lineHeight", "20px");
              }
              $(fourthSecIndex[index]).css("width", "116px");
              $(fourthSecIndex[index]).css("background", "rgba(0,0,0,0.5)");
              $(fourthSectionText[index]).css("display", "flex");
              $(fSectionDinamicTitle[index]).css("fontSize", "50px");
              $(fSectionDinamicTitle[index]).css("lineHeight", "60px");

              $(".fourthSectionContent").css("background", arrImg[index]);
          }

          setInterval(function(){
              changeFourth(fourth);
              if(fourth >=2){
                fourth = 0;
              }else{
                fourth++;
              }             
          }, 8000);
      });//Final Auto Function
});