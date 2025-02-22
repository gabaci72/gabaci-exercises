// Step 1: Request
class ExpenseRequest {
    constructor(amount) {
        this.amount = amount;
    }
}

// Step 2: Handler
class Approver {
    constructor(name, approvalLimit) {
        this.name = name;
        this.approvalLimit = approvalLimit;
        this.nextApprover = null; // Reference to the next handler in the chain
    }

    setNextApprover(nextApprover) {
        this.nextApprover = nextApprover;
    }

    processRequest(expenseRequest) {
        if (expenseRequest.amount <= this.approvalLimit) {
            console.log(`${this.name} approved the expense request of $${expenseRequest.amount}`);
        } else if (this.nextApprover) {
            console.log(`${this.name} cannot approve. Passing to ${this.nextApprover.name}`);
            this.nextApprover.processRequest(expenseRequest);
        } else {
            console.log(`No one can approve the expense request of $${expenseRequest.amount}`);
        }
    }
}

// Step 3: ConcreteHandlers
const manager = new Approver("Manager", 1000);
const director = new Approver("Director", 5000);
const vp = new Approver("VP", 10000);

manager.setNextApprover(director);
director.setNextApprover(vp);

// Step 4: Client
const expenseRequest1 = new ExpenseRequest(800);
const expenseRequest2 = new ExpenseRequest(4500);
const expenseRequest3 = new ExpenseRequest(12000);

// The client initiates the request and starts the chain
manager.processRequest(expenseRequest1);
manager.processRequest(expenseRequest2);
manager.processRequest(expenseRequest3);
