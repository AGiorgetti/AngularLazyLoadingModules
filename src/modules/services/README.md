The folder will contain 3 modules:

- ServiceModule: an application wide general purpose collection of services/utilities. 
                 It will be imported by the app root and used by all the feature modules)

- SharedServiceModule: a collection of services/utilities used to support some feature modules.
                       Services will be registered in the NgModule providers list.
                       It will be imported by all the feature modules (except the root module),
                       each module will use its "local" copy.

- LazyServiceModule: a module that provides services to a lazy loaded routed module.
                     Only the lazy loaded module will import the service.
