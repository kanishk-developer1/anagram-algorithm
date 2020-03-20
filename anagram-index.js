const anagram= ['map', 'art', 'how', 'rat', 'tar', 'who', 'pam', 'shoop'];

const alphabetize= (word)=>{
  
  if(!word){
    return;
  }
  
  word= word.split('');
  word= word.sort();
  word= word.join('');
  
  return word;
}


function anagramGrouper(anagramArray){
    const anagramString={};
 anagramArray.forEach((string)=>{
  
  const alphabetizeWord= alphabetize(string);
  
  if(anagramString[alphabetizeWord]){
    return anagramString[alphabetizeWord].push(string);
  }
  
  anagramString[alphabetizeWord]= [string];
}); 
  return anagramString
}

console.log(anagramGrouper(anagram));


