// Are we coding together or separte? Whatever you had in mind, Captain?
// Step 1:: Make Shreya actually read the bit that we need. (2) Since we're going to do the hackathon together, would you suggest 
// the divide and conquer strategy? How did we work together in robotics? Wow. That's interesting. 
// How we worked together. It was a "together but separate" sort of thing? I don't think we can quite do that?
// No, I was prompting you to say whatever you were about to say?
// Okay, so according to Tessa, we work absolutely horridly together. You and me. 
// Let's break it into functions. 
//Do you want to work on separate things?
//Hmmm.... How should we proceed?
//Well, how should we divide and conquer? Well, we ended up having one person taking over one day, then the next day someone else did it.
//? Yeah. Exactly.... So how should we do this? So I just code? I wasn't going to say anything?
//You and me or her and you? True. We have spend a long time debating how to do this.... yet not doing it.
var data = [
    [3, 2000, "Normaltown"],
    [2, 800, "Hipsterton"],
    [2, 850, "Normaltown"],
    [1, 550, "Normaltown"],
    [4, 2000, "Skid Row"]                                              
];
var ans = [250000, 300000, 150000, 78000, 150000];
Array.prototype.estimate = function (weights) { //What does this do? Oh, I get it.
// Should it be for the multi-dimensional array or for just the one array? 
// Okay, correct me if I'm wrong, but we're create something that should output a price, right?
// Should we make it output t. Okay
// What? Wait, I should probably read the article... We need it to find the bed #?? Okay? 
   //? Yes, oh, probably just for 1d array. Expect the output to be [bed #, sq. feet, neighborhood]
    //Can I do the number stuff and can you adjust the weights? I don't know how to do that.
    var cheaptoexpensive = ["Skid Row", "Normaltown", "Hipsterton"];
    //Yes
    var add = 0;
    var rem = this.slice();
    for(var i = 0; i < cheaptoexpensive.length; i++) {
        if(rem[rem.length - 1] == cheaptoexpensive[i]) {
            rem[rem.length - 1] = i;                        
        }        
    }
    for(var i = 0; i < rem.length; i++) {
        add += Number(rem[i]) * weights[i];
    }
    return add;
// What will the output of this be?
//The number without the weights applied.
// Okay. 
//I'm just adding everything up.
}
//Could I check this quickly?
// Yeah, can you access the shared terminal?
//Yes
var weights = [1, 1, 1];
console.log(data[0].estimate(weights));
// I trust that you don't know the rm command? 
// Okay, then I trust that you wouldn't do that to me? I trust that there's a good Sarah somewhere.
//Is this concerning that I have access to all your files?
//Of course I do. How else could I remove and reinstall all of the annoying packages that don't work?
//No promises. &#9786; We'll see....
//That makes sense, yes?
Array.prototype.costFunc = function () {
    // Given Parameters of [[des, act], [des, act]];
    var x = 0;    
    for (var i = 0; i < this.length; i++) {
        x+=Math.pow((this[i][0] - this[i][1]), 1);                
    }
    return x/this.length;        
}
// Go ahead.
//Do you want me to put in the weights?
// Where are you getting this? Yeah, I found it.
//The tutorial?
//[des, act]?
// Yes/no?
// [desired_output, actual_ouput]
// Let me look up the chain rule real quick.
// d(f(x) + g(x)) = d(f(x)) + d(g(y));
// https://www.youtube.com/watch?v=YG15m2VwSjA&vl=en
// Sarah? So, it's just one weight, right? Or am I misunderstandin? No sigmoid?
// Input => Input*w1 => Input*w2 => Input*w3 => Output
// Correct me if I'm wrong? Oh. Wait, I'm not.
// Yes. That's important. Then they are all added together?
//Ah. Yes - woah. ???????????????????????????????????????????? Yes? I'm trying to understand..... There are three weights... I dunno.
//Yes, you're right-ish.
//Input1 => input1 * w1
//Input2 => input2 * w2
//Input3 => input3 * w3
//Ou