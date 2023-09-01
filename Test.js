function strParameter(message) {
    
    let mysplitstr = message.split(' ');
    longestWord = 0

     for(a = 0; a<mysplitstr.length; a++)
     if ( mysplitstr[a].length > longestWord) {
        longestWord = mysplitstr[a].length
     }
      
   
    
    let string = mysplitstr.filter(mysplitstr => mysplitstr.length == longestWord);
    console.log(string);
   }

   strParameter('i can do all things through christ that strenghtens me');