import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.setItem('color-theme', 'light');
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  afterEach(() => {
    localStorage.removeItem('color-theme');
    document.documentElement.classList.remove('dark');
  });

  it('should toggle the dark class and persist the choice', () => {
    expect(service.isDark).toBeFalse();
    service.toggle();
    expect(document.documentElement.classList.contains('dark')).toBeTrue();
    expect(localStorage.getItem('color-theme')).toBe('dark');
  });
});
