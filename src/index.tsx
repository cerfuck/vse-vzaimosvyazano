import store from './store';
import actors from './actors';
import startServices from './app/start';

let acting: boolean = false;



store.subscribe(function() {
  console.error('subscribe', store.getState());
  if (!acting) {
    acting = true;
    for (let actor of actors) {
      actor(store.getState(), store.dispatch);
    }

    acting = false;
  }
});

startServices();

