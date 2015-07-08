//
//  LadderMain.js
//  LadderOfAbstraction
//
//  Created by Bret Victor on 8/21/11.
//  (c) 2011 Bret Victor.  MIT open-source license.
//


(function(){


  //====================================================================================
  //
  //  domready
  //

  window.addEvent('domready', function () {
    initializeTouchSpans();
    initializeTangleElements();
  });


  //====================================================================================
  //
  //  mouse vs touch
  //

  function initializeTouchSpans () {
    var isTouch = BVLayer.isTouch;

    $$(".ifMouse").each(function (element) {
      element.setStyle("display", isTouch ? "none" : "inline");
    });

    $$(".ifTouch").each(function (element) {
      element.setStyle("display", isTouch ? "inline" : "none");
    });
  }


  //====================================================================================
  //
  //  tangle
  //

  function initializeTangleElements () {
    if (Browser.ie6 || Browser.ie7 || Browser.ie8) { return; }  // no canvas support

    var elements = $$(".tangle");
    loadNextElement.delay(100);

    function loadNextElement () {
      if (elements.length === 0) { return; }
      var element = elements.shift();
      initializeTangleElement(element);
      loadNextElement.delay(10);
    }
  }

  function initializeTangleElement (element) {
    var modelName = element.getAttribute("data-model") || "";
    var model = gModels[modelName] || gModels["default"];

    element.setStyle("position", "relative");
    var tangle = new Tangle(element, model);
  }


  //====================================================================================
  //
  //  models
  //

  var gModels = {

    "default": {
      initialize: function () {
        this.timeIndex = this.lockedTimeIndex = 0;
      },

      update: function () {
      }
    },

    "game" : {
      initialize: function() {
        //this.sickNeighbors = 1
        //this.myDice = Math.floor(Math.random() * 6)

        this.time = 0;
        this.lockedTime = 0;


        //eggs
        this.eggLaying = 2600;
        this.fertilization = 800;
        this.fungusKillsEggs = 200;
        this.birdsEatEggs = 200;
        this.rainAndMud = 400;
        //alevin
        this.initialAlevin = 0;
        this.eggHatching = 300;
        this.birdsEatAlevin = 310;
        //fry
        this.initialFry = 0;
        this.heronsFrogsAndOtherFish = 190;
        this.summerWaterLevelDrop = 169;
        //smolt
        this.initialSmolts = 0;
        this.fishKillerWhalesSeaLionsBirds = 26;
        //adult
        this.initialAdults = 0;
        this.salmonFishingBoat = 1;
        this.killerWhale = 1;
        //spawning adult
        this.initialSpawningAdults = 0;
        this.spawning = this.spawningAdults;

        //eggs
        this.lockedEggLaying = 2600;
        this.lockedFertilization = 800;
        this.lockedFungusKillsEggs = 200;
        this.lockedBirdsEatEggs = 200;
        this.lockedRainAndMudd = 400;
        //alevin
        this.lockedInitialAlevin = 0;
        this.lockedEggHatching = 300;
        this.lockedBirdsEatAlevin = 310;
        //fry
        this.lockedInitialFry = 0;
        this.lockedHeronsFrogsAndOtherFish = 190;
        this.lockedSummerWaterLevelDrop = 169;
        //smolt
        this.lockedInitialSmolts = 0;
        this.lockedFishKillerWhalesSeaLionsBirds = 26;
        //adult
        this.lockedInitialAdults = 0;
        this.lockedSalmonFishingBoat = 1;
        this.lockedKillerWhale = 1;
        //spawning adult
        this.lockedInitialSpawningAdults = 0;
        this.lockedSpawningAdults = this.initalSpawningAdults;

      },

      update: function(){
        //eggs
        this.eggsLaid = this.eggLaying;
        this.eggsFertalized = this.eggsLaid - this.fertilization;
        this.eggsSurvivedFungus = this.eggsFertalized - this.fungusKillsEggs;
        this.eggsSurvivedBirds = this.eggsSurvivedFungus - this.birdsEatEggs;
        this.eggsSurvivedRainAndMud = this.eggsSurvivedBirds - this.rainAndMud;
        //alevin
        this.alevin = this.eggsSurvivedRainAndMud - this.initialAlevin;
        this.eggsHatchedSuccessfully = this.alevin - this.eggHatching;
        this.alevinSurviveHeronsDucksKingfishers = this.eggsHatchedSuccessfully - this.birdsEatAlevin;
        //fry
        this.fry = this.alevinSurviveHeronsDucksKingfishers - this.initialFry;
        this.frySurvivedHeronsFrogsOtherFish = this.fry - this.heronsFrogsAndOtherFish;
        this.frySurvivedSummerStreamLevelDrop = this.frySurvivedHeronsFrogsOtherFish - this.summerWaterLevelDrop;
        //smolt
        this.smolts = this.frySurvivedSummerStreamLevelDrop - this.initialSmolts;
        this.smoltsSurvivedOtherFishKillerWhalesSeaLionsBirds = this.smolts - this.fishKillerWhalesSeaLionsBirds;
        //adult
        this.adults = this.smoltsSurvivedOtherFishKillerWhalesSeaLionsBirds - this.initialAdults;
        this.adultsSurvivedSalmonFishingBoat = this.adults - this.salmonFishingBoat;
        this.adultsSurvivedKillerWhale = this.adultsSurvivedSalmonFishingBoat - this.killerWhale;
        //spawning adult
        this.spawningAdults = this.adultsSurvivedKillerWhale - this.initialSpawningAdults;
        this.adultsSurviveSpawning = this.spawningAdults - this.spawningAdults;



      }
    }





  };



  //====================================================================================

})();

