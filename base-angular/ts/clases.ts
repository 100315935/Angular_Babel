interface FullName {
  // Solo pueden tener ambito publico y da error incluso si pones public
  apellidos;
  edad: number;
}

class FullNameCl {
  constructor(public apellidos: string,
    public edad: number) {}
}

class User {

  // En TS hay que declarar como en java
  // Se pueden poner ambitos y tipos
/*   public apellidos;
  edad: number;
  genero: any;
 */
  // O lo normal es darles tipo y ambito aqui
  constructor  (protected nombre: string,
                public fullname: FullName,
                public fullnamecl: FullNameCl,
                private genero: number | string,
               // private cursos: string[],
               // private aficiones: Array<any>
              ) {
      // ++User.prototype.numUsers;
  }
      saludar () {
          console.log (` Hola, me apellido ${this.fullname.apellidos};
          ya somos muchos`);
      }
}

// pr0piedad static
// User.prototype.numUsers = 0;


let oUser1 = new User('Juan', {apellidos: 'Lopez', edad: 33},
{apellidos: 'Lopez', edad: 33}, 'H');
oUser1.saludar();
console.log(oUser1);


