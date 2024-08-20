const ymID = 98110777;

export default {
  install: (app, _options) => {
    const _ym = app.config.globalProperties.$ym = {};

    _ym.goalWrap = (aim, fn) => {
      if(process.env.NODE_ENV === 'development') return fn;

      return function (...args) {
        const res = fn(...args);
        ym(ymID, 'reachGoal', aim);
        return res;
      };
    };

    _ym.callbackGoal = (fn) => {
      return _ym.goalWrap('callbackShowed', fn);
    }

    _ym.goal = (aim) => {
      if(process.env.NODE_ENV === 'development') return;
      ym(ymID, 'reachGoal', aim);
    };

    _ym.fireCallbackGoal = () => {
      _ym.goal('callbackShowed');
    };
  }
}
