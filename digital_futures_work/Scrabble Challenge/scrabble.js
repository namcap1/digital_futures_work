// Write your implementation here
let alphabet = {'a':1, 'b':3, 'c':3, 'd':2, 'e':1, 'f':4, 'g':2, 'h':4, 'i':1,
'j':8, 'k':5, 'l':1, 'm':3, 'n':1, 'o':1, 'p':3, 'q':10, 'r':1, 's':1, 't':1,
'u':1, 'v':4, 'w':4, 'x':8, 'y':4, 'z':10};

class Scrabble {
    constructor(word){
        this.word = word;
    }
    score(){
        if(/^\s+$/.test(this.word)){
            return 0;
        }
        if(this.word === null){
            return 0;
        }
        this.word = this.word.toLowerCase();
        let ans = 0;
        for(let i = 0; i < this.word.length;i++){
            ans += alphabet[this.word[i]];    
        }
        return ans;
    }
}


module.exports  = Scrabble; 


  