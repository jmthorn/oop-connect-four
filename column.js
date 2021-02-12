class Column { 
    constructor() { 
        this.count = 6;
        this.spaces = [];
    }
    add(playerNum) { 
        this.spaces.push(playerNum);
    }
    getTokenAt(indexNum) {
        if (indexNum) { 
            return this.spaces[indexNum];
        } else { 
            return null;
        }
    }
}


export default Column;