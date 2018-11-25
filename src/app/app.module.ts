import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './shared/modules/material.module';
import { CustomIconsModule } from './shared/modules/custom-icons.module';
import { PipeModule } from './shared/modules/pipe.module';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // core modules
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        // shared modules
        MaterialModule,
        CustomIconsModule,
        PipeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
