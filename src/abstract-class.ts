abstract class TakePhoto {

    abstract getSepia(): void;
    constructor(public cameraMode: string, public filter: string) {
    }
}

// const p1 = new TakePhoto('test', 'test');

class Instagram extends TakePhoto {
    constructor(public cameraMode: string, public filter: string) {
        super(cameraMode, filter);
    }

    getSepia(): void {
        console.log('Sepia called');
    }

}

const hc = new Instagram('test', 'test');