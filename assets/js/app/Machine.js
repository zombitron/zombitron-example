import "/scripts/tone/build/Tone.js";

export default class Machine {
    constructor() {
        this.custominstr = [];
        this.custominstr[0] =  new Tone.Synth().toMaster();
        this.custominstr[1] =  new Tone.Synth().toMaster();
        this.custominstr[2] =  new Tone.Synth().toMaster();
        this.custominstr[3] =  new Tone.Synth().toMaster();
        this.custominstr[4] =  new Tone.Player ( "/assets/js/app/instruments/kickoo.wav" , ).toMaster();
        this.custominstr[5] =  new Tone.Synth().toMaster();
        this.custominstr[6] =  new Tone.Synth().toMaster();

        this.options = {
            bpm: {
                min: 20,
                max: 200,
                default: 100,
            }
        };
        Tone.context.resume();
    }
}