import { NgModule } from '@angular/core';
import { ContadorComponet } from './contador.component';

@NgModule({
    declarations: [
        ContadorComponet,
        
    ],

    exports: [
        ContadorComponet
    ],
    imports:[
       // CommonModule,
        
    ]

})

export class contadorModule{}