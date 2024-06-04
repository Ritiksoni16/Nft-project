/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const usernft=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_university,_city,_age) {                     //(underscore) is used to distinguish between parametrs and properties of objects
const user_details={
 "name":_name,
 "university":_university,
 "city":_city,
 "age":_age
}
usernft.push(user_details);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
console.log("print all metadata:- \n");
for(let i=0;i<usernft.length;i++)
{
      console.log("\nserial number:\t\t"+(i+1))                                       // '\t' is just used to add space for proper alignment
      console.log("Name: \t\t"+usernft[i].name)
      console.log("university: \t"+usernft[i].university)
      console.log("city: \t\t"+usernft[i].city)
      console.log("age: \t\t"+usernft[i].age)
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupplyTotalSupply() {
  console.log("\n total length "+usernft.length)
}

// call your functions below this line
mintNFT("Varish","CU","punjab","20");
mintNFT("Manya","PU","chandigarh","21");
mintNFT("Shivansh","DU","delhi","22");
listNFTs()
getTotalSupply()