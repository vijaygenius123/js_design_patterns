function Process(state) {
    this.state = state;
}

const Singelton = (function () {
    function ProcessManager() {
        this.numProcess = 0;

        return {
            getProcessCount: () => {
                return this.numProcess;
            },
            incrementCount: () => {
                this.numProcess = this.numProcess + 1
                return this.numProcess
            }
        }
    }

    let pManager;

    function createProcessManager() {
        pManager = new ProcessManager();
        return pManager
    }

    return {
        getProcessManager: () => {
            if (!pManager)
                pManager = createProcessManager()
            return pManager
        }
    }
})()


const processManager = Singelton.getProcessManager();

const processManager2 = Singelton.getProcessManager();

console.log(processManager === processManager2)

console.log(processManager.getProcessCount())
console.log(processManager2.getProcessCount())

console.log(processManager.incrementCount())

console.log(processManager.getProcessCount())
console.log(processManager2.getProcessCount())
