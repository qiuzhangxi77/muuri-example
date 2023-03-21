import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.css']
})
export class MyComponent1Component implements OnInit {
  public val = "default";
  @Input() child: { name: string; } = {
    name: ""
  };
  @Input() myControl: FormControl | undefined;
  constructor() { }

  ngOnInit() {
    this.hello();
  }

  public hello () {
    this.val = "hello";
    console.log("hello!!!!!!!!!!");

    // this.child = {
    //   name: "newwwww"
    // }
    this.child.name = "child-new";
    this.myControl?.setValue("control-new");
    console.log("---------this.child: ", this.child);
    console.log("---------this.myControl: ", this.myControl?.value);
  }

}
