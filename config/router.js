import { visualizer } from '@uirouter/visualizer';

// the config function takes the router
// instance as argument. it lets you manually
// configure the router
export default function config(router) {
  router.urlService.rules.initial({ state: "hello" });
  // Setup the state visualizer
  visualizer(router);
};
