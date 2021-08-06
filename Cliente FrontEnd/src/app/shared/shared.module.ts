import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzFormModule } from "ng-zorro-antd/form";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzSelectModule } from "ng-zorro-antd/select";
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from "ng-zorro-antd/table";
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@NgModule({
    imports: [
        NzDatePickerModule,
        NzInputNumberModule,
        NzFormModule,
        NzGridModule,
        NzTableModule,
        NzButtonModule,
        NzInputModule,
        NzDividerModule,
        NzSelectModule,
        NzCardModule,
        NzIconModule,
        NzModalModule,
        NzSwitchModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        NzDatePickerModule,
        NzInputNumberModule,
        NzFormModule,
        NzGridModule,
        NzTableModule,
        NzButtonModule,
        NzInputModule,
        NzDividerModule,
        NzSelectModule,
        NzCardModule,
        NzIconModule,
        NzModalModule,
        NzSwitchModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class SharedModule {}
