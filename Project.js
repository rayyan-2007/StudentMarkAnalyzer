 //Context:

//You are building a system that analyzes student marks stored in an array.

const mark = [90,60,78,50,44];

let totalmark = 0;

let avgmark;

function CalculateAverage() {

   

for(let i=0; i<mark.length; i++){
     if(mark<0 || mark>100){
        console.log("Invalid Input!");
        continue;
    }
   totalmark = totalmark + mark[i];

   avgmark  = totalmark/mark[i];

}

return avgmark;

}
let Avgofall = CalculateAverage();

console.log("Average mark : ",Avgofall)

function HighestMark() {
    let biggestNum = [0];
    if(mark.length===0){
            console.log("Empty array")
            return;
    }
        for(let i=0; i<mark.length; i++){
        
            if(mark[i]<0 || mark[i]>100){
                console.log("Invalid Input");
                continue;
            }
           else if(mark[i] > biggestNum){
                biggestNum = mark[i];  

            }
        }
                return biggestNum;
            }
            
              biggestNum =  HighestMark()
              console.log("Highest mark : ",biggestNum);


//Function: Find Highest Mark:

function lowestMark() {
    let SmallestNumber = mark[4];
     if(mark.length===0){
        console.log("Empty Array!");
        return;
    }

    for(let i=0; i<mark.length; i++){
    if(mark[i]<0 || mark[i]>100){
        console.log("Invalid input");
        continue;
    }
     else if(mark[i]<SmallestNumber){
        SmallestNumber = mark[i];
     }   
}

 return SmallestNumber;
}

SmallestNumber = lowestMark();
console.log("lowest mark : ",SmallestNumber);
    
function MarkCount(count){ 
    let check = mark[0];
    if(mark.length === 0){
        console.log("Empty array");
        return;
    }
        for(let i=0; i<mark.length; i++){
            if(mark[i]<0 || mark[i]>100){
                console.log("Invalid Input");
                continue;
            }
           else if(mark[i]>=50){
                 count = count + 1;
               }    
            }
            return count;
        }
    
 console.log("Pass Count :",MarkCount(0));

 const AssignGrade = (Onemark) =>{
    
       let grade = "invalid Grade!";
    for(let i=0; i<mark.length; i++){

  
           if(Onemark>=90 && Onemark<=100){
               grade = "A";
            
            
            }
            else if(Onemark>=75 && Onemark<=85){
                grade = "B";
             
                
            }
            else if(Onemark>=50 && Onemark<=74){
                grade = "C";
              
             
            }
            else if(Onemark<50){
                grade = "F";

            }                
         
    }
    return grade;
}

 grade = AssignGrade(mark[3]);

 console.log("Grade:",grade);

 
