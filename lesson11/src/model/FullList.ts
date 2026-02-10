import ListItem from "./ListItem";


interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(item: ListItem): void,
    removeItem(item: ListItem): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList();

    private constructor(private _list: ListItem[] = []) {}

    get list(): ListItem[] {
        return this._list;
    }

    set list(value: ListItem[]) {
        this._list = value;
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList");
        if (typeof storedList !== "string") return;

        const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList);

        parsedList.forEach(itemObj => {
            const newListItem: ListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked);
            FullList.instance.addItem(newListItem);
        });

    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this.list));
    }

    clearList(): void {
        this.list = [];
        this.save();
    }

    addItem(item: ListItem): void {
        this.list.push(item);
        this.save();
    }

    removeItem(item: ListItem): void {
        this.list = this.list.filter(i => i.id !== item.id);
        this.save();
    }
}