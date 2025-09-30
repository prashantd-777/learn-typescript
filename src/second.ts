interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number 
}

class Instagram implements TakePhoto {
    constructor(cameraMode:string, filter: string, burst: number) {}
}

interface Story {
    short: string
}

class Youtube implements TakePhoto, Story {
    constructor(cameraMode:string, filter: string, burst: number, short: string) {}
}