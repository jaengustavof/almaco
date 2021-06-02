$( document ).ready(function() {

    let sectionPosition = 0;
    let sectionLeft = 0;
    let sections = [$("#mainSection").offset().left, $("#ourBrandsSection").offset().left, $("#careerSection").offset().left, $("#blogSection").offset().left, $("footer").offset().left]
    let executed = false;
    let deviceWidth = $(window).innerWidth();
    let deviceHeight = $(window).innerHeight();
    let menuLink = $(".menuLink");
    $(menuLink[0]).addClass("linkSelected");

    let footerH3 = $(".footerH3");
    let footerLinksParr = $(".footerLinksParr");
    let contactDiv = $(".contactDiv");

    console.log("Device Width: "+deviceWidth);
    console.log("Device Height: "+deviceHeight);
        
    $(function() {
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
//Responsive 1280//
        if(deviceWidth <=1280 && deviceWidth >1152){
          if(deviceHeight <= 1024 && deviceHeight >657){
            $(".secondSectionContent").css("height", "415px");
            $(".seconSectContentLogo").css("height", "120px");
            $(".seconSectContentText").css("fontSize", "24px");
            $(".seconSectContentText").css("lineHeight", "34px");
            $(".seconSectContentText").css("marginTop", "20px");
          }else if(deviceHeight <= 657 && deviceHeight >625){
            $(".secondSectionContent").css("height", "290px");
            $(".seconSectContentLogo").css("height", "90px");
            $(".seconSectContentText").css("fontSize", "20px");
            $(".seconSectContentText").css("lineHeight", "28px");
            $(".seconSectContentText").css("marginTop", "20px");
            $("#myVideo").css("width", "100%");
          }else if(deviceHeight <= 625 && deviceHeight > 577){
            $(".secondSectionContent").css("height", "270px");
            $(".seconSectContentLogo").css("height", "80px");
            $(".seconSectContentText ").css("height", "173px");
            $(".seconSectContentText").css("fontSize", "18px");
            $(".seconSectContentText").css("lineHeight", "26px");
            $(".seconSectContentText").css("marginTop", "20px");
            $(".secondSectButton").css("width", "124px");
            $(".secondSectButton").css("height", "60px");
            $("#myVideo").css("width", "100%");
          }else if(deviceHeight <= 577 && deviceHeight > 457){ // 
            $(".firstText1").css("width", "850px");
            $("#testText").css("fontSize", "70px");
            $("#testText").css("lineHeight", "80px");
            $(".indexLogoSecondSection").css("paddingTop", "0px");
            $(".secondSectionContent").css("height", "200px");
            $(".seconSectContentLogo").css("height", "65px");        
            $(".seconSectContentText ").css("height", "160px");
            $(".seconSectContentText").css("fontSize", "16px");
            $(".seconSectContentText").css("lineHeight", "23px");
            $(".seconSectContentText").css("marginTop", "6px");
            $(".secondSectButton").css("width", "114px");
            $(".secondSectButton").css("height", "50px");
            $(".secondSectButton").css("fontSize", "14px");
            $("#myVideo").css("width", "100%");
            $(".arrowImg").css("height", "45%");
            $(".fourthIndexName").css("paddingBottom", "8px");
            $(".footerTextContainer").css("height", "310px");
            $(".footerTextContainer").css("width", "316px");
            $(".footerLinksParr").css("fontSize", "14px");
            $(".footerH4").css("fontSize", "14px");
            $(".footerH3").css("fontSize", "24px");
          }else if(deviceHeight <= 457){
            $(".seconSectContentLogo").css("height", "60px");
            $(".seconSectContentText ").css("height", "119px");
            $(".seconSectContentText").css("fontSize", "12px");
            $(".seconSectContentText").css("lineHeight", "19px");
            $(".seconSectContentText").css("marginTop", "5px");
            $(".secondSectionContent").css("height", "144px");       
            $(".secondSectButton").css("width", "90px");
            $(".secondSectButton").css("height", "44px");
            $(".secondSectButton").css("fontSize", "12px");
            $(".secondSectionContent").css("top", "73px");
            $("#myVideo").css("width", "100%");
            $(".arrowImg").css("height", "28%");
            $(".careersTextCont2").css("height", "397px");
            $(".careersTextCont2TitleH3").css("fontSize", "39px");
            $(".careersTextCont2TitleH3").css("lineHeight", "59px");
            $(".h4containerH4").css("fontSize", "23px");
            $(".h4containerH4").css("lineHeight", "29px");
            $(".opportunitiesContainer").css("height", "265px");
            $(".footerContainer").css("height", "390px");
            $(".footerContainer").css("width", "390px");
            $(".footerTextContainer").css("height", "216px");
            $(".footerTextContainer").css("width", "293px"); 
            $(".footerTextContSectionTwo").css("width", "163px");
            $(".footerTextContSectionOne").css("width", "130px");
            $(".footerTopLeft").css("height", "69%");
            $(".ctcInfo").css("justifyContent", "flex-end")
            $(".fourthIndexName").css("paddingBottom", "8px");
            $(".footerH3").css("fontSize", "16px");
            $(".footerH3").css("lineHeight", "20px");
            $(".footerH4").css("fontSize", "13px");
            $(".footerRespParr").css("fontSize", "8px");
            $(".footerLinksParr").css("fontSize", "8px");
            $(".far").css("fontSize", "12px");
            $(".footerInput").css("height", "24px");
            $("#send").css("height", "24px");
            $(".footerInput").css("marginTop", "3px");
            $("#send").css("marginTop", "3px");
            $(".smLogoCont").css("width", "100%");
            $(".smLogoContImg").css("height", "20px");
          }
        }
//Responsive 1280//

        //Menu//
        function menuSelected(){
          for(menu of menuLink){
            $(menu).removeClass("linkSelected");
          }
        }
        //Who We Are//
        $("#wwAreButton").click(function(){
          menuSelected();
          $(this).addClass("linkSelected");
          $(".container").scrollLeft(0);                
          sectionPosition = 0;
        });
        //Who We Are//

        //Our Brands//
        $("#ourBrandsButton").click(function(){      
          menuSelected();
          $(this).addClass("linkSelected");
          deploy();
          sectionPosition = 1;
        });
        //Our Brands//

        //Carrers//
        $("#careerButton").click(function(){ 
          menuSelected()
          $(this).addClass("linkSelected");
          deploy();
          sectionPosition = 2;
        });
        //Blog//
        $("#blogButton").click(function(){
          menuSelected()
          $(this).addClass("linkSelected");
          deploy();
          sectionPosition = 3;
        });
        //Menu//


//Mouse Wheel//
          var scrolling = false
         $(".container").mousewheel(function(event, delta) {

          //Scroll Automatico///
            if(delta == -1 && scrolling == false){         
              if(sectionPosition < 5 ){ 
                scrolling = true;
                sectionPosition++;
                $(".container").scrollLeft(sections[sectionPosition]);
              }                                    
            }else if(delta == 1 && scrolling == false){
              if(sectionPosition >= 0){ 
                scrolling = true;
                sectionPosition--;
                $(".container").scrollLeft(sections[sectionPosition]);
              }
            }   

            switch(sectionPosition){
              case 0:
                menuSelected();
                $(menuLink[0]).addClass("linkSelected");             
              break;

              case 1:
                menuSelected();
                deploy();
                $(menuLink[1]).addClass("linkSelected");           
              break;

              case 2:
                menuSelected();
                $(menuLink[2]).addClass("linkSelected");           
              break;

              case 3:
                menuSelected();
                $(menuLink[3]).addClass("linkSelected");              
              break;

              case 4:
                if(deviceWidth > 1600 ){
                  footer(800,800);
                }else if(deviceWidth <=1600 && deviceWidth >1366) {
                  footer(650,650);
                }else if(deviceWidth <=1366 && deviceWidth >1280) {
                  footer(550,550);
                }else if(deviceWidth <=1280 && deviceWidth >1152) {               
                  if(deviceHeight >657){
                    footer(650,650);
                  }else if(deviceHeight <= 657 && deviceHeight >625){
                    footer(575,575);
                  }else if(deviceHeight <= 625 && deviceHeight > 577){
                    footer(550,550);
                  }else if(deviceHeight <= 577 && deviceHeight > 457){
                    footer(500,500);
                  }else if(deviceHeight <= 457){
                    footer(390,390);
                  }
                }               
              break;
            }
            setTimeout(function(){
              scrolling = false;
            },1000);        

      //Footer Function//
      let footerLinksTime = 0;
      let footercontactDivTime = 0;
      function footer(width,height){
        setTimeout(function(){
            $(".footerContainer").css("width", width+"px");
            $(".footerContainer").css("height", height+"px");
        }, 100);
        setTimeout(function(){
            $(footerH3[0]).css("opacity",1);
            $(footerH3[0]).css("left",0);
            for(let i =0; i<footerLinksParr.length;i++){
              footerLinksTime += 150;
              setTimeout(function(){
                $(footerLinksParr[i]).css("transform", "translate3d(0px, 0px, 0px)");
                $(footerLinksParr[i]).css("opacity", "1");
              },footerLinksTime );
            }
            $(".footerLogoImage").css("opacity", 1);
            setTimeout(function(){
              $(footerH3[1]).css("opacity",1);
              $(footerH3[1]).css("left",0);
              for(let j =0; j<contactDiv.length;j++){
              footercontactDivTime += 150;
              setTimeout(function(){
                $(contactDiv[j]).css("transform", "translate3d(0px, 0px, 0px)");
                $(contactDiv[j]).css("opacity", "1");
              },footercontactDivTime );
            }
            },150);
            setTimeout(function(){
              $(footerH3[2]).css("opacity",1);
              $(footerH3[2]).css("left",0);
              $(footerH3[3]).css("opacity",1);
              $(footerH3[3]).css("left",0);
              setTimeout(function(){
                $(".smLogoCont").css("transform","rotateX(0deg)");
                $(".smLogoCont").css("opacity","1");
                $(".inputContainer").css("transform","rotateX(0deg)");
                $(".inputContainer").css("opacity","1");
              },150)
            },200);
            $(".allRights").css("opacity", 1);
        }, 600);
      }

//Menu Link Highlight//
          if(deviceWidth >1680){

          }else if(deviceWidth <=1680 && deviceWidth > 1600){

          }else if(deviceWidth <=1600 && deviceWidth >1440){

          }else if(deviceWidth <=1440 && deviceWidth > 1400){

          }else if(deviceWidth <=1400 && deviceWidth > 1366){
        
          }else if(deviceWidth <=1366 && deviceWidth >1280){

            if(this.scrollLeft >= 4900){
             // footer(550,550);
            }
          }else if(deviceWidth <=1280 && deviceWidth >1152){
            if(this.scrollLeft < 1100){
              menuSelected();
              $(menuLink[0]).addClass("linkSelected");
              
            }else if(this.scrollLeft >= 1100 && this.scrollLeft < 2350){
              menuSelected();
              deploy();
              
              $(menuLink[1]).addClass("linkSelected");
            }else if(this.scrollLeft >= 2350 && this.scrollLeft < 3700){
              menuSelected();
              $(menuLink[2]).addClass("linkSelected");
              
            }else if(this.scrollLeft >= 3700){
              menuSelected();
              $(menuLink[3]).addClass("linkSelected");
              
            }
            if(this.scrollLeft >= 4500){
              //footer(550,550);
            }
          }else if(deviceWidth <=1152 && deviceWidth >1024){
            if(this.scrollLeft < 1000){
              menuSelected();
              $(menuLink[0]).addClass("linkSelected");
              
            }else if(this.scrollLeft >= 1000 && this.scrollLeft < 2200){
              menuSelected();
              deploy();
              
              $(menuLink[1]).addClass("linkSelected");
            }else if(this.scrollLeft >= 2200 && this.scrollLeft < 3300){
              menuSelected();
              $(menuLink[2]).addClass("linkSelected");
              
            }else if(this.scrollLeft >= 3300){
              menuSelected();
              $(menuLink[3]).addClass("linkSelected");
              
            }
            if(this.scrollLeft >= 3900){
             // footer(600,600);
            }
          }         
// END Menu Link Highlight
         });//End mousewheel//


//////////First Section//////////
//////////First Section//////////
//////////First Section////////// 
        const carouselText = [
          {text: "Future of real estate.", color: "#eeece6"},
          {text: "Heart of belonging.", color: "#eeece6"},
          {text: "Mind of the collective.", color: "#eeece6"}
        ]

        $( document ).ready(async function() {
          carousel(carouselText, "#feature-text")
        });
        let bgColors = ["#fa5800", "#225bb8", "#f9b60c"]; 
        async function typeSentence(sentence, eleRef, delay = 70) {
          const letters = sentence.split("");
          let i = 0;
          while(i < letters.length) {
            await waitForMs(delay);
            $(eleRef).append(letters[i]);
            i++
          }
          return;
        }
        async function deleteSentence(eleRef) {
          const sentence = $(eleRef).html();
          const letters = sentence.split("");
          let i = 0;
          while(letters.length > 0) {
            await waitForMs(70);
            letters.pop();
            $(eleRef).html(letters.join(""));
          }
        }

        async function carousel(carouselList, eleRef) {
            var i = 0;
            while(i < carouselList.length) {
              if(i>= carouselList.length-1){
                  updateFontColor(eleRef, carouselList[i].color)
                  $(".firstSection").css("background", bgColors[i]);
                  await typeSentence(carouselList[i].text, eleRef);
                  await waitForMs(1500);
                  $(".typing-container").css("opacity", 0);
                  $(".firstSection").css("background", "#231f20");
                  isoLogo();
                  i++
              }else{
                      updateFontColor(eleRef, carouselList[i].color)
                $(".firstSection").css("background", bgColors[i]);
                await typeSentence(carouselList[i].text, eleRef);
                await waitForMs(1500);
                await deleteSentence(eleRef);
                await waitForMs(500);
                i++
              }
            }
        }

        function updateFontColor(eleRef, color) {
          $(eleRef).css('color', color);
        }

        function waitForMs(ms) {
          return new Promise(resolve => setTimeout(resolve, ms))
        }      

        function isoLogo(){
         // $(".finalSliderContainer").css("display", "flex");
          setTimeout(function(){
            $(".logo-text").css("left", 0);
            $(".logo-text").css("opacity", 1);
            $(".iso").css("left", 0);
            $(".iso").css("opacity", 1);
            setTimeout(function(){
              $(".slogan").css("opacity",1);
              $(".slogan").css("top",0);
            },200);
          },800);

        }
//////////First Section//////////
//////////First Section//////////
//////////First Section//////////

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
          }else if(deviceWidth<=1600 && deviceWidth >1366){
            cssTop("calc(100% - 105px)", "calc(100% - 70px)", "calc(100% - 35px)");
          }else if(deviceWidth<=1366){
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
          }else if(deviceWidth<=1600 && deviceWidth >1366){
            cssTop("35px", "calc(100% - 70px)", "calc(100% - 35px)");
          }else if(deviceWidth<=1366){
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
          }else if(deviceWidth<=1600 && deviceWidth >1366){
            cssTop("35px", "70px", "calc(100% - 35px)");
          }else if(deviceWidth<=1366){
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
          }else if (deviceWidth <= 1600 && deviceWidth >1366){
            cssTop("35px", "70px", "105px");
          }else if(deviceWidth<=1366){
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

//////////Third Section//////////
//////////Third Section//////////
//////////Third Section//////////
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
//////////Third Section//////////
//////////Third Section//////////
//////////Third Section//////////

//////////Fourth Section//////////
//////////Fourth Section//////////
//////////Fourth Section//////////
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
          }else if(deviceWidth <=1600 && deviceWidth > 1400){
            $(fSectionDinamicTitle[0]).css("fontSize", "40px");
            $(fSectionDinamicTitle[0]).css("lineHeight", "50px");
          }else if(deviceWidth <=1400 && deviceWidth > 1360){
            $(fSectionDinamicTitle[0]).css("fontSize", "30px");
            $(fSectionDinamicTitle[0]).css("lineHeight", "40px");
          }else if(deviceWidth <=1360){
            $(fSectionDinamicTitle[0]).css("fontSize", "25px");
            $(fSectionDinamicTitle[0]).css("lineHeight", "35px");
          }


          let backImg0 = "url('assets/rsc/img/section4back1.webp')";
          let backImg1 = "url('assets/rsc/img/section4back2.webp')";
          let backImg2 = "url('assets/rsc/img/section4back3.webp')";
          let backImg3 = "url('assets/rsc/img/section4back11366.webp')";
          let backImg4 = "url('assets/rsc/img/section4back21366.webp')";
          let backImg5 = "url('assets/rsc/img/section4back31366.webp')";
          let arrImg = [backImg0,backImg1,backImg2];
          let arrImg1366 = [backImg3,backImg4,backImg5]

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
              }else if(deviceWidth <=1600 && deviceWidth > 1400){
                $(fSectionDinamicTitle[index]).css("fontSize", "40px");
                $(fSectionDinamicTitle[index]).css("lineHeight", "50px");
              }else if(deviceWidth <=1400 && deviceWidth > 1360){
                $(fSectionDinamicTitle[index]).css("fontSize", "30px");
                $(fSectionDinamicTitle[index]).css("lineHeight", "40px");
              }else if(deviceWidth <=1360){
                $(fSectionDinamicTitle[index]).css("fontSize", "25px");
                $(fSectionDinamicTitle[index]).css("lineHeight", "35px");
              }

              if(deviceWidth >1366){
                $(".fourthSectionContent").css("background", arrImg[index]);
              }else if(deviceWidth <=1366){
                $(".fourthSectionContent").css("background", arrImg1366[index]);
                $(".fourthSectionContent").css("backgroundSize", "cover");
              }              
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