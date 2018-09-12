# NgModules

## NgModule

NgModules configure the injector and the compiler and help organize related things together.

An NgModule is a `class` marked by the `@NgModule()` decorator.

@NgModule takes a metadata object that configures the module itself:

- Declares which components, directives, and pipes belong to the module.
- Makes some of those components, directives, and pipes public so that other modules- components can use them.
- Imports other modules.
- Provides Services that the application need.

An Angular application is made up of several NgModules.

## Feature Module

A feature module is an organizational best practice: it delivers a cohesive set of functionality focused on a specific application need such as a user workflow, routing, or forms.

## Dependency Injection

You can configure injectors with providers at different levels of your app, by setting a metadata value in one of these three places:

In the `@Injectable()` decorator for the service itself.

In the `@NgModule()` decorator for an NgModule.

In the `@Component()` decorator for a Component.

The `@Injectable()` decorator has the `providedIn` metadata option, it can be:

- the `root` injector.
- the type of an NgModule: `the injector for a specific NgModule`.

The `@NgModule()` and `@Component()` decorators have the providers metadata option, where you can configure `providers for NgModule-level or component-level injectors`. They will take over the @Injectable() decorator.

**WARNING**

There's a difference between:

    static forChild(): ModuleWithProviders {
      return {
        ngModule: SharedServiceModule,
        providers: [
          SharedWorkerService
        ]
      };
    }

and:

    @Injectable({
      providedIn: SharedServiceModule
    })
    export class SharedWorkerService {
      ...
    }

With the `@injectable()` options: if the module is imported in the AppModule and in some Lazy loaded modules, then the service will be a singleton application wise: it will be tied to the injector of the NgModule imported in the AppModule, because an explicit registration at the module level does not exists.

With the usual `providers` syntax it will be tied to the App Injector or to the Lazy Loaded module injector.

## Types of Modules

There are 5 general categories of feature modules (also hybrods can exists):

### Service

Service modules provide very general purpose utility services such as data access and messaging.

Ideally, they consist entirely of _providers_ and have no declarations. Angular's HttpClientModule is a good example of a service module.

_The root AppModule is the only module that should import service modules._

There will be some service modules that exists only to support other feature module of the application and that will be imported by those specific modules.

### Widget

A widget module makes components, directives, and pipes available to external modules. 

Many third-party UI component libraries are widget modules.

A widget module should consist entirely of declarations, most of them exported.

A widget module should rarely have providers.

Import widget modules in any module whose component templates need the widgets.

### Domain

Domain feature modules deliver a user experience dedicated to a particular application domain: like editing a customer or placing an order.

Domain feature modules consist mostly of declarations. Only the top components are exported.

Domain feature modules rarely have providers. When they do, the lifetime of the provided services should be the same as the lifetime of the module or the components inside them.

Domain feature modules are typically imported exactly once by a larger feature module.

### Routed

Routed feature modules are domain feature modules whose top components are the targets of router navigation routes.

All lazy-loaded modules are routed feature modules by definition.

Routed feature modules do not export anything because their components never appear in the template of an external component.

Routed feature modules rarely have providers. When they do, the lifetime of the provided services should be the same as the lifetime of the module. 

**Angular Best Practice:** _Don't provide application-wide singleton services in a routed feature module or in a module that the routed module imports._

### Routing

A routing module provides routing configuration for another module and separates routing concerns from its companion module.

- Defines routes.
- Adds router configuration to the module's imports.
- Adds guard and resolver service providers to the module's providers.

The name of the routing module should parallel the name of its companion module, using the suffix "Routing".

A routing module re-exports the RouterModule as a convenience so that components of the companion module have access to router directives such as RouterLink and RouterOutlet.

A routing module does not have its own declarations. Components, directives, and pipes are the responsibility of the feature module, not the routing module.

A routing module should only be imported by its companion module.

## Webpack bundles

The import chain of our modules will shape-up the way Webpack generates the application javascript bundles.

You inspect the bundles that are generated using the **Webpack Bundle Analyzer**.

In the package.json of this project we have three scripts we can use to compile the application and run the analyzer:

    npm run analyze
    npm run analyze-prod
    nom run bundle-report
