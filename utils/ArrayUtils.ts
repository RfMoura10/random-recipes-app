export default function getAllInArray(myObject:any, value:string) : string[] {
    let prodKeys = Object.keys(myObject).filter(p => p.startsWith(value))
    let prod = Array(prodKeys.length).fill(0).map((v,i) => v = myObject[prodKeys[i]])
    return prod;
}