function add(str1:string,str2:string):string{
    let str:string="";
    let maxVAl:number=str1.length>=str2.length?str1.length:str2.length;
    let inhand:number=0;
    for(let i=0;i<maxVAl;i++){
         let sum:number=0;
        if(str1.length-1<i ){
            sum=Number(str2[str2.length-i-1])+inhand;
        }
        else if(str2.length-1<i){
            sum=Number(str1[str1.length-i-1])+inhand;
        }
        else{
            sum=Number(str1[str1.length-i-1])+Number(str2[str2.length-i-1])+inhand;
        }

        
        
        if(sum>=10){
            let temp:string=String(sum);
            inhand=Number(temp[0]);
            str=temp[1]+str;
        }
        else{
            let temp:string=String(sum);
            str=temp+str;
            inhand=0;
        }


    }
    if(inhand!==0){
        str=inhand+str;
    }
    return str;
}
console.log(add("235","10117"));