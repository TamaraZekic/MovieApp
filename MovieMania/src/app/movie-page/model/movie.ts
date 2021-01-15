export class Movie{
    _id: number;
    name: string;
    description: string;
    director: string;
    genre: string;
    year: number;
    rating: number;
    duration: number;

    constructor(obj?: any){
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || '';
        this.description = obj && obj.description || '';
        this.director = obj && obj.director || '';
        this.genre = obj && obj.genre || '';
        this.year = obj && obj.year || null;
        this.rating = obj && obj.rating || null;
        this.duration = obj && obj.duration || null;
    }
}