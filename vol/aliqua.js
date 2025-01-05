class Node {
    constructor(name) {
        this.name = name;
        this._children = [];
    }

    addChild(child) {
        this._children.push(child);
    }

    removeChildAt(loc) {
        if (loc >= 0 && loc < this._children.length) {
            this._children.splice(loc, 1);
        } else {
            console.log("Index out of bounds");
        }
    }

    getChildren() {
        return this._children;
    }
}

// Example usage:
let parent = new Node("parent");
let child1 = new Node("child1");
let child2 = new Node("child2");

parent.addChild(child1);
parent.addChild(child2);

console.log("Before removal:", parent.getChildren());  // Outputs: [child1, child2]

parent.removeChildAt(0);

console.log("After removal:", parent.getChildren());  // Outputs: [child2]
