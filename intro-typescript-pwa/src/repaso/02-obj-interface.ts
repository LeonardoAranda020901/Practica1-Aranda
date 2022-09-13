

//objetos

let amaterno:string|number;

amaterno='Aranda';
amaterno=100;


let mascotas=['perro','gato',100,true];

let tem2:(boolean|number|string)[]=['rata',100];

tem2.push(200);

let acciones:string[]=['dormir','comer','volar'];

interface Alumno{
    matricula:number|string,
    nombre2:string;
    apaterno2:string;
    acciones?:string[];
    email:string;
}




const alumno:Alumno={   
    matricula:12345,
    nombre2:'Leo',
    apaterno2:'Aranda',
    email:'xxx@gmail.com'
}

alumno.nombre2='Dario';

console.table(alumno);