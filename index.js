//Fuente del texto: https://www.lipsum.com/
const str = `Phasellus blandit arcu metus, ac porta urna rhoncus in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur eget erat enim. Praesent nisi sem, rutrum non ante non, viverra tincidunt lectus. Praesent viverra ante augue, quis porttitor turpis elementum imperdiet. In quis ex ligula. Vestibulum porta sodales tortor a laoreet. Donec laoreet volutpat sem, quis malesuada nisl mollis quis. Morbi laoreet tellus nulla, a lacinia lorem sagittis nec. Fusce at justo non nulla semper dapibus. Nam sodales lacus ipsum, non bibendum urna aliquam vitae. Integer gravida cursus aliquam. Sed lacus ligula, posuere interdum faucibus a, iaculis sit amet libero. Quisque fringilla, tortor ut congue dignissim, nulla justo cursus augue, nec hendrerit nibh leo id lectus. Praesent dapibus nisi vel ultrices fringilla.

In vel lacus ut quam rutrum ultrices. Morbi lacinia ultricies luctus. Donec elementum rhoncus lacus at luctus. Mauris ac magna hendrerit urna cursus pellentesque in eu turpis. Sed eu tellus vitae turpis pellentesque sollicitudin vel et quam. In quis malesuada quam. Aliquam neque nunc, blandit eu metus non, dignissim commodo lacus. Aliquam nisi eros, dignissim non diam quis, ultrices consectetur orci. Aliquam ac lacinia libero. Phasellus pellentesque libero ipsum. Aliquam auctor sed ligula vitae convallis. Sed ipsum erat, luctus et nisl at, malesuada congue diam. Aenean lorem ante, vulputate quis ornare ut, fermentum in lectus. Sed hendrerit eu metus cursus maximus. Nam mattis suscipit lacus, ut efficitur justo maximus sit amet. Praesent sodales varius odio nec volutpat.

Pellentesque blandit, leo vestibulum varius egestas, nunc augue fermentum tellus, sed aliquet lacus lacus a odio. Donec varius auctor aliquam. Nulla at enim dignissim, iaculis dolor eget, feugiat augue. Curabitur eleifend scelerisque eros. Mauris bibendum elementum pellentesque. Fusce rhoncus finibus dolor ac volutpat. Fusce suscipit elit quis nulla tincidunt, eu tempor metus dictum. In sit amet leo nulla. Nunc condimentum ante massa, sed tincidunt mi rutrum vel. Sed tempus a risus ut suscipit. Nam eget sem id eros euismod hendrerit. Etiam sed dolor sed lorem dignissim facilisis vitae ut libero. Maecenas feugiat nec mi laoreet mattis. Aenean at metus consequat, pellentesque risus in, efficitur erat. Nam et augue tempor, blandit dolor id, viverra massa. Proin eget aliquam velit, blandit posuere tortor.`

//1.- Separamos las palabras, quitado puntuaciones, simbolos y espacios en blanco
//2.- Juntamos todas la palabras en un solo string
//3.- Convertimos todo el string a minusculas
//4.- Separamos cada letra en un array y ordenamos alfabeticamente.

let letters = str.match(/\b\w+\b/g)
               .join('')
               .toLocaleLowerCase()
               .split('')
               .sort();

//Aqui generamos la tabla de cada letra y la cantidad en que aprece
let table = [];
let tablePos = 0;
let prevValue = '';

letters.forEach( value => {
  if( value===prevValue ){
    table[ tablePos - 1 ].frecuency++;
  }else{
    table.push({ 'letter':value , 'frecuency':1 });
    tablePos++;
  }
  prevValue = value;
});

//Ordenamos la tabla de acuerdo al numero de frecuencia
table.sort(( a , b )=>{
 return b.frecuency - a.frecuency;
});

//Imprime todas las letras contenidas en el texto en forma de array
//console.log( letters );

//Imprime la tabla final ordenada
console.log( table );

