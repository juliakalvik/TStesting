/*contactInfo("Name", 99999999);

function info(a: "", b: number): number {
    return a + b;
}

info(1, 3);
*/


export function Info(a: any, b: number): number {
    return a + b;
}

console.log(Info("Name", 99999999)); 
console.log(Info(1, 3)); 

interface IBtnProps {
    varient: "Primary" | ""
}