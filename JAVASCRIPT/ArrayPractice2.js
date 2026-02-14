/*2. For a given array with prices of 5 items -> [250, 645,300, 900, 50]. ALl items have 
an offer of 10% OFF on them. Change the array to store final pprice after applying offer.
  */

let items = [250, 645,300, 900, 50];
console.log(`Before offer items value: ${items}`);
for(let i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i]-= offer;
    // console.log(`After offer item value: ${items[i]}`);   
}
console.log(`After offer items value: ${items}`);


// //for-of loop
// let i=0;
// for(let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log("After offer item value: " + items[i]);   
//     i++;
// }

