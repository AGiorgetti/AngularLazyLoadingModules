ServiceModule (injector) <- WorkerService

AppModule (root injector)
  + ServiceModule
    - WorkerService
  + DomainModule
    + ServiceModule
    - Component2 <- WorkerService

  ++ Router1Module (lazy) (lazy injector)
    - LazyServiceModule <- LazyWorkerService
    
  ++ Router2Module (lazy) (lazy injector)

  - AppComponent
  - Component1  
  - Component3



AppModule (host) (root injector)
  - AppComponent (appc injector)
    - Component1 (c1 injector)
    - Component2 (c2 injector)
      - Component3 (c3 injector)
