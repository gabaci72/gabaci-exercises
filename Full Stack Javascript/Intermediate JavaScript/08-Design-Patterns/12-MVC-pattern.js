class Model {
    constructor() {
        this.data = [];
    }

    addItem(item) {
        this.data.push(item);
    }

    getItems() {
        return this.data;
    }
}

class View {
    render(model) {
        console.log(model.getItems());
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    addItem(item) {
        this.model.addItem(item);
        this.view.render(this.model);
    }
}

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

controller.addItem("Item 1");
controller.addItem("Item 2");