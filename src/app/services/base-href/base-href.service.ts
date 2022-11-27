import {FactoryProvider, Inject, Injectable, InjectionToken} from '@angular/core';

export const WINDOW = new InjectionToken<Window>('window');

const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: () => window
};

export const WINDOW_PROVIDERS = [
  windowProvider
]

@Injectable()

export class BaseHrefService {

  constructor(@Inject(WINDOW) private window: Window) {}

  public get baseHref() : string {
    return this.window.location.host;
  }
}
