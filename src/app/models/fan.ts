export class Fan {

    constructor(private _name: string, private _age: number, private _country: string = 'Argentina',
        private _profilePicture: string = 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png') { }


    public get profilePicture(): string {
        return this._profilePicture;
    }
    public set profilePicture(value: string) {
        this._profilePicture = value;
    }
    public get country(): string {
        return this._country;
    }
    public set country(value: string) {
        this._country = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}



