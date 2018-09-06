The folder will contain 3 modules:

- ServiceModule: an application wide general purpose collection of utilities. 
                 It will be imported by the app root and used by all the feature modules)

- SharedServiceModule: a collection of utilities used to support some feature modules.
                       It will be imported by all the modules, each module will use its "local" copy.

- LazyServiceModule: a module that provides services to a lazy loaded routed module.
                     Only the lazy loaded module will import the service.
