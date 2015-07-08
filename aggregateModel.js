Novaol.recordJS({
    specifies: "Capsule",
    components: {
        adults: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'this.smolt * this.smolt_Survival_Rate',
        },
        smolt: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'this.fry * this.fry_Survival_Rate',
        },
        fry: {
            specifies: 'Sequence',
            initial: 0.0,
            nonNegative: false,
            next: 'this.egg_Survival_Rate * this.eggs',
        },
        eggs: {
            specifies: 'Sequence',
            initial: 2000,
            nonNegative: false,
            next: 0,
        },
        currentTotal: {
            specifies: 'Term',
            exp: 'this.eggs + this.fry + this.smolt + this.adults',
        },
        smolt_Survival_Rate: {
            specifies: "Slider",
        },
        fry_Survival_Rate: {
            specifies: "Slider",
        },
        egg_Survival_Rate: {
            specifies: "Slider",
        },
        each_StatePop: {
            specifies: "Plugin",
            base: PL_Linechart,
            properties: function(){return novaol.getAll("params.each_StatePop");},
            pins: {
                inpt: function(){return [this.adults, this.eggs, this.fry, this.smolt]}
            }
        },
        current_Population_Graph: {
            specifies: "Plugin",
            base: PL_Linechart,
            properties: function(){return novaol.getAll("params.current_Population_Graph");},
            pins: {
                inpt: function(){return this.currentTotal;}
            }
        },
    },
});

