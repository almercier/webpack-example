import {DataBinding} from "./DataBinding";
import {TextField} from "./TextField";

export class MyComponent {
    constructor() {
        this.message2 = 'I should be updating soon...';
        this.tf = new TextField();
        this.tf.dataBind(new DataBinding({
            onChanged: () => {
                console.log('hello');
                this.message2 = 'I should have updated...';
                // Set a breakpoint above and verify that "this" context is incorrect
            }
        }));
    }
}