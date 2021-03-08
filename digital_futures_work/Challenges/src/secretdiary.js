class SecretDiary{
    constructor(password){
        this.entries = [];
        this.password = password;
        this.locked = new Locked(this.password);
    }
    lock(){
        this.locked.lock();
    }
    unlock(attempt){
        this.attempt = attempt;
        this.locked.unlock(this.attempt);
    }
    addEntry(entry){
        if(this.locked.locked){
            throw new Error('Diary is locked. Please unlock.');
        }
        else{
            this.entries.push(entry); 
        }
    }
    getEntries(){
        if(this.locked.locked){
            throw new Error('Diary is locked. Please unlock.');
        }
        else{
            console.log(this.entries);
        }
    }
}

class Locked{
    constructor(password){
        this.password = password;
        this.locked = true;
    }
    lock(){
        this.locked = true;
    }
    unlock(attempt){
        this.attempt = password;
        if(this.attempt === this.password){
            this.locked = false;
        }
        else{
            throw new Error('Incorrect Password try again');
        }
    }
}

let diary = new SecretDiary('Jamie');
diary.unlock('Jamie');
diary.addEntry('First entry');
diary.getEntries();
diary.lock();
