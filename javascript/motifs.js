var etoiles=""
for (var i=1; i<=10; i++) {
 etoiles="";
 for (var j=1; j<=i; j++) {
   etoiles=etoiles+"*";
 }
 console.log (etoiles)
}
for (var i=1; i<=10; i++) {
 etoiles="";
 for (var j=10; j>=i; j--) {
   etoiles=etoiles+"*";
 }
 console.log (etoiles)
}
for( var i=1; i<=10; i++) {
  var s=""
  etoiles=""
 for(var j=1; j<=i; j++){
  etoiles=etoiles+"*";
 }
 for(var k=10; k>=i; k--) {
 s=s+" "
 }
 console.log(s+etoiles);
 }
for (let i = 1; i <= 10; i++) {
   var asterisques = "";
   var espaces = "";
  for (let j = 1; j <= 10-i; j++) {
      espaces = espaces + " ";
   }
   for (let j = 1; j <= i; j++) {
      asterisques = asterisques + "*";
   }
   console.log (espaces+asterisques);
}
