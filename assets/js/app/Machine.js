import "/scripts/tone/build/Tone.js";

export default class Machine {
    constructor() {
        this.custominstr = [];
        this.custominstr[0] =  new Tone.Synth().toMaster();
        this.custominstr[1] =  new Tone.Synth().toMaster();
        this.custominstr[2] =  new Tone.Synth().toMaster();
        this.custominstr[3] =  new Tone.Synth().toMaster();

        this.custominstr[4] =  new Tone.Player ( "/assets/js/app/instruments/kickoo.wav" , ).toMaster();
        this.custominstr[4].loop = true
        
        this.custominstr[5] =  new Tone.Player ( "/assets/js/app/instruments/clap.wav" , ).toMaster();
        this.custominstr[6] =  new Tone.Player ( "/assets/js/app/instruments/konck.wav" , ).toMaster();
        
        
        
        this.feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toMaster();
        this.custominstr[7] =  new Tone.MembraneSynth().chain(this.feedbackDelay);
        this.custominstr[7].volume.value = -5

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