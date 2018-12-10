export class Inventory {
    constructor(...payload) {
        this.head = null;
        this.headband = null;
        this.eyes = null;
        this.shoulders = null;
        this.neck = null;
        this.chest = null;
        this.armor = null;
        this.belt = null;
        this.wrists = null;
        this.hands = null;
        this.feet = null;
        this.shield = null;
        this.rings = [null, null];
        this.other = [];
        for (let item in payload) {
            if (this.hasOwnProperty(item.slot)) this[item.slot] = item.item;
        }
    }

    equip(item, slot) {
        let returned_item = null;
        if (this.hasOwnProperty(slot)) {
            returned_item = this[slot];
            this[slot] = item;
            return returned_item;
        }
        else return false;
    }

    unequip(slot) {
        if (this.hasOwnProperty(slot)) {
            return this[slot];
        }
        else return false;
    }

    get slots() {
        return {
            head: this.head,
            headband: this.headband,
            eyes: this.eyes,
            shoulders: this.shoulders,
            neck: this.neck,
            chest: this.chest,
            armor: this.armor,
            belt: this.belt,
            wrists: this.wrists,
            hands: this.hands,
            feet: this.feet,
            shield: this.shield,
            rings: this.rings
        }
    }
}