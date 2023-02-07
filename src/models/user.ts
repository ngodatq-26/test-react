export interface name {
    title : string,
    first : string,
    last : string
}

export interface street {
    number : number,
    name : string
}

export interface coordinates {
    latitude : string,
    longitude : string,
}

export interface timezone {
    offset : string,
    description : string,
}

export interface login {
    uuid : string,
    username : string,
    password : string,
    salt : string,
    md5 : string,
    sha1 : string,
    sha256 : string,
}

export interface dob {
    date : string,
    age : number
}

export interface registered {
    date : string,
    age : number,
}

export interface id {
    name : string,
    value : string
}

export interface picture {
    large : string,
    medium : string,
    thumbnail : string
}

export interface IDataUser {
    gender : string,
    name : name,
    location : {
        street : street,
        city : string,
        country : string,
        postcode : number,
        coordinates : coordinates,
        timezone : timezone,
    },
    email : string,
    login : login,
    dob : dob,
    registered : registered,
    phone : string,
    cell : string,
    id : id,
    picture : picture,
    nat : string
}

export interface IData {
    results : Array<IDataUser>,
    info : {
        seed : string,
        results : number,
        page : number,
        version : string
    }
}

export interface IUser {
    fullName : string,
    userName : string,
    thumbnail : picture | any,
}