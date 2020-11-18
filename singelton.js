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
                const span = document.getElementById('count')
                this.numProcess = this.numProcess + 1
                span.innerText = this.numProcess;
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


const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

btn1.addEventListener('click', () => {
    processManager.incrementCount()
})

btn2.addEventListener('click', () => {
    processManager2.incrementCount()
})
