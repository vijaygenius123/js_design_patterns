function Process(state) {
    this.state = state;
}

const Singelton = (function () {
    function ProcessManager() {
        this.numProcess = 0;
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
