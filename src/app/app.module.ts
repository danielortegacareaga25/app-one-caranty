import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './component/loading/loading.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store/state';
import { UserEffects } from './store/effects/user.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TaskModalComponent } from './component/task-modal/task-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TaskPageComponent,
    LoadingComponent,
    TaskModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
