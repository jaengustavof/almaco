$( document ).ready(function() {

    $(".container").scroll(function(){
      console.log(this.scrollLeft)
    });
    let executed = false;
    let deviceWidth = $(window).innerWidth();
    console.log("Device Width: "+deviceWidth)
        
    $(function() {

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
        let menuLink = $(".menuLink");
        function menuSelected(){
          for(menu of menuLink){
            $(menu).removeClass("linkSelected");
          }
        }
        //Who We Are//
        $("#wwAreButton").click(function(){
          menuSelected()
          $(this).addClass("linkSelected");
          if (deviceWidth >1680) {
            $(".container").scrollLeft(1343);            
          }else if (deviceWidth <= 1680 && deviceWidth>1600){
            $(".container").scrollLeft(1483);
          }else if (deviceWidth <= 1600 && deviceWidth >1536){
            $(".container").scrollLeft(1400);
          }else if (deviceWidth <= 1536&& deviceWidth >1440){
            $(".container").scrollLeft(1358);
          }else if (deviceWidth <= 1440&& deviceWidth >1400){
            $(".container").scrollLeft(1308);
          }else if (deviceWidth <= 1400){
            $(".container").scrollLeft(1208);
          }


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
          menuSelected();
          $(this).addClass("linkSelected");
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
          menuSelected()
          $(this).addClass("linkSelected");
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
          menuSelected()
          $(this).addClass("linkSelected");
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


         $(".container").mousewheel(function(event, delta) {

          //Scroll Manual  
          this.scrollLeft -= (delta * 200);
          //console.log(delta);
          event.preventDefault();
          console.log(this.scrollLeft);

          //Menu Link Highlight
          if(deviceWidth >1600){
            if(this.scrollLeft < 1200){
              menuSelected();
            }else if(this.scrollLeft >= 1343 && this.scrollLeft < 3063){
              menuSelected();
              $(menuLink[0]).addClass("linkSelected");
            }else if(this.scrollLeft >= 3063 && this.scrollLeft < 5083){
              menuSelected();
              $(menuLink[1]).addClass("linkSelected");
            }else if(this.scrollLeft >= 5083 && this.scrollLeft < 7003){
              menuSelected();
              $(menuLink[2]).addClass("linkSelected");
            }else if(this.scrollLeft >= 7003){
              menuSelected();
              $(menuLink[3]).addClass("linkSelected");
            } 
          }else if(deviceWidth <=1600 && deviceWidth > 1536){
              if(this.scrollLeft < 1400){
              menuSelected();
            }else if(this.scrollLeft >= 1400 && this.scrollLeft < 2839){
              menuSelected();
              $(menuLink[0]).addClass("linkSelected");
            }else if(this.scrollLeft >= 2839 && this.scrollLeft < 4439){
              menuSelected();
              $(menuLink[1]).addClass("linkSelected");
            }else if(this.scrollLeft >= 4439 && this.scrollLeft < 6039){
              menuSelected();
              $(menuLink[2]).addClass("linkSelected");
            }else if(this.scrollLeft >= 6039){
              menuSelected();
              $(menuLink[3]).addClass("linkSelected");
            }
          }else if(deviceWidth <= 1536 && deviceWidth > 1440){
            if(this.scrollLeft < 1308){
              menuSelected();
            }else if(this.scrollLeft >= 1308 && this.scrollLeft < 2483){
              menuSelected();
              $(menuLink[0]).addClass("linkSelected");
            }else if(this.scrollLeft >= 2483 && this.scrollLeft < 4276){
              menuSelected();
              $(menuLink[1]).addClass("linkSelected");
            }else if(this.scrollLeft >= 4276&& this.scrollLeft < 5692){
              menuSelected();
              $(menuLink[2]).addClass("linkSelected");
            }else if(this.scrollLeft >= 5692){
              menuSelected();
              $(menuLink[3]).addClass("linkSelected");
            }
          }else if(deviceWidth <= 1440 && deviceWidth > 1400){
            if(this.scrollLeft < 1308){
              menuSelected();
            }else if(this.scrollLeft >= 1308 && this.scrollLeft < 2483){
              menuSelected();
              $(menuLink[0]).addClass("linkSelected");
            }else if(this.scrollLeft >= 2483 && this.scrollLeft < 4180){
              menuSelected();
              $(menuLink[1]).addClass("linkSelected");
            }else if(this.scrollLeft >= 4180&& this.scrollLeft < 5600){
              menuSelected();
              $(menuLink[2]).addClass("linkSelected");
            }else if(this.scrollLeft >= 5600){
              menuSelected();
              $(menuLink[3]).addClass("linkSelected");
            }
          }else if(deviceWidth <= 1400){
            if(this.scrollLeft < 1308){
              menuSelected();
            }else if(this.scrollLeft >= 1308 && this.scrollLeft < 2483){
              menuSelected();
              $(menuLink[0]).addClass("linkSelected");
            }else if(this.scrollLeft >= 2483 && this.scrollLeft < 4180){
              menuSelected();
              $(menuLink[1]).addClass("linkSelected");
            }else if(this.scrollLeft >= 4180&& this.scrollLeft < 5600){
              menuSelected();
              $(menuLink[2]).addClass("linkSelected");
            }else if(this.scrollLeft >= 5600){
              menuSelected();
              $(menuLink[3]).addClass("linkSelected");
            }
          }
          
          // END Menu Link Highlight


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

//////////Second Section//////////
//////////Second Section//////////
//////////Second Section//////////
        let indexKnow = $(".indexKnow");
        let moreToKnow = $(".moreToKnow");
        let indexText = $(".indexText");
        let indexTextSpan = $(".indexTextSpan");
        let indexTextPar = $(".indexTextPar");
       // console.log(indexKnow);
        function cssTop(two, three, four){

            $(".secTwo").css("top", two);
            $(".secThree").css("top", three);
            $(".secFour").css("top", four);
        }

        function cero() {
          for(index of indexKnow){
            $(indexKnow[0]).removeClass("indexNone");
            $(indexKnow).css("opacity",1);
          }
          $(indexKnow[0]).css("opacity",0);
          if(deviceWidth >1600){          
            cssTop("calc(100% - 150px)", "calc(100% - 100px)", "calc(100% - 50px)");
          }else if(deviceWidth<=1600 && deviceWidth >1360){
            cssTop("calc(100% - 105px)", "calc(100% - 70px)", "calc(100% - 35px)");
          }else if(deviceWidth<=1360){
            cssTop("calc(100% - 75px)", "calc(100% - 50px)", "calc(100% - 25px)");
          }
        }

        function uno() {
          for(index of indexKnow){
            $(indexKnow[0]).removeClass("indexNone");
            $(indexKnow).css("opacity",1);
          }
          $(indexKnow[1]).css("opacity",0);
          if(deviceWidth >1600){          
            cssTop("50px", "calc(100% - 100px)", "calc(100% - 50px)");
          }else if(deviceWidth<=1600 && deviceWidth >1360){
            cssTop("35px", "calc(100% - 70px)", "calc(100% - 35px)");
          }else if(deviceWidth<=1360){
            cssTop("25px", "calc(100% - 50px)", "calc(100% - 25px)");
          }
        }
        function dos() {
          for(index of indexKnow){
            $(indexKnow[0]).removeClass("indexNone");
            $(indexKnow).css("opacity",1);
          }
          $(indexKnow[2]).css("opacity",0);
          if(deviceWidth >1600){          
            cssTop("50px", "100px", "calc(100% - 50px)");
          }else if(deviceWidth<=1600 && deviceWidth >1360){
            cssTop("35px", "70px", "calc(100% - 35px)");
          }else if(deviceWidth<=1360){
            cssTop("25px", "50px", "calc(100% - 25px)");
          }
        }
        function tres(){
          for(index of indexKnow){
            $(indexKnow[0]).removeClass("indexNone");
            $(indexKnow).css("opacity",1);
          }        
          $(indexKnow[3]).css("opacity",0);
          if(deviceWidth>1600){
            cssTop("50px", "100px", "150px");
          }else if (deviceWidth <= 1600 && deviceWidth >1360){
            cssTop("35px", "70px", "105px");
          }else if(deviceWidth<=1360){
            cssTop("25px", "50px", "75px");
          }
        }

        indexKnow.click(function(event){
          let result = Array.from(moreToKnow).indexOf(event.target);
          let result2 = Array.from(indexKnow).indexOf(event.target);
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
        indexText.click(function(event){
          let result3 = Array.from(indexText).indexOf(event.target);
          let result4 = Array.from(indexTextSpan).indexOf(event.target); 
          let result5 = Array.from(indexTextPar).indexOf(event.target); 
           for(index of indexKnow){
            $(indexKnow[0]).removeClass("indexNone");
            $(indexKnow).css("opacity",1);
          }
          if(result3 == 0 || result4 == 0 || result5 == 0) {
            cero();
            cont=0;
          }
          if(result3 == 1 || result4 == 1 || result5 == 1) {
            uno();
            cont=1;
          }
          if(result3 == 2 || result4 == 2 || result5 == 2) {
            dos();
            cont=2;
          }
          if(result3 == 3 || result4 == 3 || result5 == 3) {
            tres();
            cont=3;
          }
        })       
        tres();
//////////Second Section//////////
//////////Second Section//////////
//////////Second Section//////////

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

////// Fourth Section //////
////// Fourth Section //////
////// Fourth Section //////
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
          if(deviceWidth >1600){
            $(fSectionDinamicTitle[0]).css("fontSize", "50px");
            $(fSectionDinamicTitle[0]).css("lineHeight", "60px");
          }else if(deviceWidth <=1600){
            $(fSectionDinamicTitle[0]).css("fontSize", "40px");
            $(fSectionDinamicTitle[0]).css("lineHeight", "50px");
          }


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
              if(deviceWidth >1600){
                $(fSectionDinamicTitle[index]).css("fontSize", "50px");
                $(fSectionDinamicTitle[index]).css("lineHeight", "60px");
              }else if(deviceWidth <=1600){
                $(fSectionDinamicTitle[index]).css("fontSize", "40px");
                $(fSectionDinamicTitle[index]).css("lineHeight", "50px");
              }
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