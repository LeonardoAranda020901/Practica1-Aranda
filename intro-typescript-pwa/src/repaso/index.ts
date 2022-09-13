interface direccionAlumno{
    nombre:string;
    edad:number;
    direccion:string;
    calle:string;
    pais:string;
    estado:string;
    numero:number;
}

function AlumnoUTL(nombre:direccionAlumno)
nombre.nombre='Mario';




//

const pruebaAlumno:utlAlumnos{
    nombre:'Mario',
    edad:23,
    direccion:{
        calle:
        pais,
        estado,
        numero,
    }
    mostrarDireccion(){
        return this.nombres ', '+this.direccion.estado+', '+this.direccion.pais
    }
}


//interface escuelaAlumno{
    //nombre:string;
    //email?:string;
   // edad:number;
   // saludar:()=>void;
//}

//function alumnoUTL(alumno:escuelaAlumno,calificar:number):void{

    //alumno.nombre='Leo';
    //alumno.email='leo@gmail.com';
    //alumno.edad=calificar;
//}