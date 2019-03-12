function vardump(object)
{
	dumpit(object,"things");
   var t = new Array();
   var level = 0;
   function dumpit(object,name)
   {
      document.getElementById("printOut").innerHTML += multString('&nbsp;',level*5)+name+' : {<br>';
      level++;
      for(var i in object)
      {
         // if(isNaN(1*i))
         // {
            if(typeof(object[i]) == 'object')
               dumpit(object[i],i);
            else
            {
               document.getElementById("printOut").innerHTML += multString('&nbsp;',level*5)+i+' : '+object[i]+'<br>';
            }
         // }
      }
      level--;
      document.getElementById("printOut").innerHTML += multString('&nbsp;',level*5)+'}<br>';
   }

   function multString(string,times)
   {
      endstring = '';
      for(var butts = 0; butts<times; butts++)
         endstring += string;
      return endstring;
   }
}