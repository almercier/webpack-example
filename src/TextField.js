export class TextField {
    constructor() {
        this.message = "I'm a test class!";
    }

    dataBind(binding) {
        let validateAndUpdate = () => {
            this.message = 'updated';
            binding.onChanged('foo');
            return true;
        };

        this.keyTyped = (msg) => {
            this.message = msg;
            validateAndUpdate();
        }
    }
}