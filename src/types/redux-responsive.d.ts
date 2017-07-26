declare module 'redux-responsive' {

  interface Breakpoints {
    extraSmall: number;
    small: number;
    medium: number;
    large: number;
  }

  interface EnhancerOptions {
    calculateInitialState: boolean;
  }

  function responsiveStateReducer<T>(state: T): T;

  function responsiveStoreEnhancer(options: Breakpoints & EnhancerOptions): Function;
}
