import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-three-state-switch',
  templateUrl: './three-state-switch.component.html',
  styleUrls: ['./three-state-switch.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ThreeStateSwitchComponent),
      multi: true
    }]
})
export class ThreeStateSwitchComponent implements OnInit, ControlValueAccessor {

    @Input('value')
    _booleanValue: boolean;
    propagateChange: any = (_: any) => {};
    propagateTouched: any = () => {};

    fiName: string;

    set booleanValue(val) {
      this._booleanValue = val;
      this.updateFiName();
      this.propagateChange(val);
      this.propagateTouched();
    }

    get booleanValue() {
      return this._booleanValue;
    }

    constructor() { }

    ngOnInit() {
        this.booleanValue = null;
    }

    switch() {
        if (this.booleanValue === undefined || this.booleanValue === null) {
            this.booleanValue = true;
        } else if (this.booleanValue) {
            this.booleanValue = false;
        } else {
            this.booleanValue = null;
        }
    }

    updateFiName() {
        if (this.booleanValue === undefined || this.booleanValue === null) {
            this.fiName = 'square';
        } else if (this.booleanValue) {
            this.fiName = 'check-square-o';
        } else {
            this.fiName = 'square-o';
        }
    }

    writeValue(obj: any): void {
        this.booleanValue = obj;
    };

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    };

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    };
}
