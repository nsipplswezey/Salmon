Novaol.recordJS({
    specifies: "Capsule",
    components: {
        spawners: {
            specifies: 'Sequence',
            initial: 100000,
            nonNegative: false,
            next: 'this.adult_Survival_Rate * this.adults',
        },
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
            initial: 2500,
            nonNegative: false,
            next: 'this.spawners * 2600',
        },
        currentTotal: {
            specifies: 'Term',
            exp: 'this.eggs + this.fry + this.smolt + this.adults + this.spawners',
        },
        adult_Survival_Rate: {
            specifies: "Slider",
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
        current_Population_Graph: {
            specifies: "Plugin",
            base: PL_Linechart,
            properties: function(){return novaol.getAll("params.current_Population_Graph");},
            pins: {
                inpt: function(){return this.currentTotal;}
            }
        },
        current_Population_Table: {
            specifies: "Plugin",
            base: PL_Table,
            properties: function(){return novaol.getAll("params.current_Population_Table");},
            pins: {
                inpt: function(){return [this.currentTotal]}
            }
        },
    },
});

