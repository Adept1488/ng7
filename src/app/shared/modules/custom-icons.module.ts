import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { MatIconRegistry } from '@angular/material';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
})
export class CustomIconsModule {
    public static forRoot() {
        return {
            ngModule: CustomIconsModule,
            providers: [],
        };
    }

    constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
        // iconRegistry.addSvgIcon('temperature', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/temperature.svg'));
    }
}
