class Column { 
    constructor() { 
        this.count = 6;
        this.spaces = [null, null, null, null, null, null];
    }
    add(playerNum) { 
        console.log("THIS IS " , this)
        for(let i = this.spaces.length; i >= 0; i--) { 
            if (this.spaces[i] === null) { 
                this.spaces[i] = playerNum;  
                this.count--;  
                break;
            }
        }
    }
    getTokenAt(indexNum) {
            return this.spaces[indexNum];
    }
    isFull() {

        if (this.spaces[0] !== null) {
            return true;
        } else { 
            return false;
        }
    }
}


export default Column;