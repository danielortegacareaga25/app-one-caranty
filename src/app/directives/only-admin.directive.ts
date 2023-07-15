import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { UserFacade } from '../store/facades/user.facade';
import { ROLE } from '../interfaces/user.interface';

@Directive({
  selector: '[disableNoAdmin]',
})
export class DisableOnlyAdmin {
  @Input('disableBasedOnValue') value: boolean = true;

  constructor(
    private _elementRef: ElementRef,
    private renderer: Renderer2,
    private _userFacade: UserFacade
  ) {
    this._userFacade.userRole$.subscribe((valor) => {
      this.setDisplayNone(valor !== ROLE.ADMIN);
    });
  }

  private setDisplayNone(valor: boolean) {
    if (valor) {
      let el: HTMLElement = this._elementRef.nativeElement;
      el.parentNode?.removeChild(el);
    }
  }
}
