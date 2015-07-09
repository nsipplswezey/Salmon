function nanCheck(expression){
	var result = 0;

	if(expression){
		return expression;
		} else {
		return 0;
		}
	}

Novaol.recordJS({
    specifies: "Capsule",
    components: {
        spawningAdults: {
            specifies: 'Sequence',
            initial: 1,
            nonNegative: false,
            next: 'this.adultsSurvivedKillerWhale',
        },
        adultsSurvivedSpawning: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'nanCheck(this.spawningAdults - (this.spawningAdults / this.spawningAdults * this.spawningAdults))',
        },
        adultsSurvivedKillerWhale: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'nanCheck(this.adultsSurvivedSalmonFishingBoat - (1 / this.adultsSurvivedSalmonFishingBoat * this.adultsSurvivedSalmonFishingBoat))',
        },
        adultsSurvivedSalmonFishingBoat: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'nanCheck(this.adults - (1 /this.adults * this.adults))',
        },
        adults: {
            specifies: 'Sequence',
            initial: 0,
            nonNegative: false,
            next: 'this.smoltsSurvivedOtherFishKillerWhalesSeaLionsBirds',
        },
        smoltsSurvivedOtherFishKillerWhalesSeaLionsBirds: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'nanCheck(this.smolts - (26 / this.smolts * this.smolts))',
        },
        smolts: {
            specifies: 'Sequence',
            initial: 0,
            nonNegative: false,
            next: 'this.frySurvivedSummerStreamLevelDrop',
        },
        frySurvivedSummerStreamLevelDrop: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'nanCheck(this.frySurvivedHeronsFrogsOtherFish - (169 / this.frySurvivedHeronsFrogsOtherFish * this.frySurvivedHeronsFrogsOtherFish))',
        },
        frySurvivedHeronsFrogsOtherFish: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'nanCheck(this.fry - (190 / this.fry * this.fry))',
        },
        fry: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'this.alevinSurviveHeronsDucksKingfishers',
        },
        alevinSurviveHeronsDucksKingfishers: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'nanCheck(this.alevin - (310 / this.alevin * this.alevin))',
        },
        eggsHatchedSuccessfully: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'nanCheck(this.eggsSurvivedRainAndMud - (300 / this.eggsSurvivedRainAndMud * this.eggsSurvivedRainAndMud))',
        },
        alevin: {
            specifies: 'Sequence',
            initial: 0,
            nonNegative: false,
            next: 'this.eggsHatchedSuccessfully',
        },
        eggsSurvivedRainAndMud: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'nanCheck(this.eggsSurvivedBirds - (400 / this.eggsSurvivedBirds * this.eggsSurvivedBirds))',
        },
        eggsSurvivedBirds: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'nanCheck(this.eggsSurvivedFungus - (200/this.eggsSurvivedFungus * this.eggsSurvivedFungus))',
        },
        eggsSurvivedFungus: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'nanCheck(this.eggsFertalized - (200 / this.eggsFertalized * this.eggsFertalized))',
        },
        eggsFertalized: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'nanCheck(this.eggsLaid - (800/this.eggsLaid * this.eggsLaid))',
        },
        eggsLaid: {
            specifies: 'Sequence',
            initial: 2600,
            nonNegative: false,
        },
        currentSuccessfulSpawn: {
            specifies: 'Term',
            exp: 'this.eggsLaid + this.eggsFertalized + this.eggsSurvivedFungus + this.eggsSurvivedBirds + this.eggsSurvivedRainAndMud + this.eggsHatchedSuccessfully + this.alevin + this.alevinSurviveHeronsDucksKingfishers + this.fry + this.frySurvivedHeronsFrogsOtherFish + this.frySurvivedSummerStreamLevelDrop + this.smolts + this.smoltsSurvivedOtherFishKillerWhalesSeaLionsBirds + this.adults + this.adultsSurvivedSalmonFishingBoat + this.adultsSurvivedKillerWhale + this.spawningAdults + this.adultsSurvivedSpawning',
        },
        initialEggsLaidPerSpawningAdult: {
            specifies: 'Term',
            exp: 2600,
        },
        currentSuccessfulSpawnPlot: {
            specifies: "Plugin",
            base: PL_Linechart,
            properties: function(){return novaol.getAll("params.currentSuccessfulSpawnPlot");},
            pins: {
                inpt: function(){return this.currentSuccessfulSpawn;}
            }
        },
        currentSuccessfulSpawnTable: {
            specifies: "Plugin",
            base: PL_Table,
            properties: function(){return novaol.getAll("params.currentSuccessfulSpawnTable");},
            pins: {
                inpt: function(){return [this.currentSuccessfulSpawn]}
            }
        },
    },
});

