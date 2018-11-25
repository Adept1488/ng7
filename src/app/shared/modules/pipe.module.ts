import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    declarations: [
        // SensorFilterPipe
    ],
    exports: [
        // SensorFilterPipe
    ],
})
export class PipeModule {
    public static forRoot() {
        return {
            ngModule: PipeModule,
            providers: [],
        };
    }
}
