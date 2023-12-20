# Design patterns

Design pattern is typical solutions for common problems. Below are the types of patterns with examples in typescript.
- ### Creational patterns are responsible for creating new objects
  - **Factory method** is pattern that provides interface for creating object in superclass, but allows subclass change type of object will be created. Important: created objects must have a common interface. [Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/creational_patterns/factory_method) expansion of delivery methods: use not only motor transport, but also sea vessels. For the client, with the factory method, there is no difference between these objects, since it will treat them as an abstract Transport. It will be important for him that the object has a deliver method, but how exactly it works is not important.
  - Abstract factory
  - Prototype
  - Builder
  - **Singleton** is a design pattern that ensures that a class has only one instance. A global access point will be provided to this instance. Example of use is connecting to a database. Singleton is guaranteed to create only one instance of class responsible for connecting to it. This way we will prevent unnecessary connections. [Example implementation](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/creational_patterns/singleton)
- ### Structure patterns are responsible for creating class hierarchies
  - **Adapter** is a design pattern that allows objects with incompatible interfaces to work together. [Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/structure_patterns/adapter) application works by retrieving data in JSON format. Then there is a requirement to send it to a third-party service. The third-party service only accepts in XML, but we do not have the ability to change the format of the extracted data on our side. Important: used after the fact to force incompatible classes to work together, unlike a bridge that is designed in advance. 
  - Bridge
  - Composite
  - Facade
  - Decorator
  - Proxy
  - Flyweight
- ### Behavioral patterns are responsible for creating effective interaction
  - Chain of responsibility
  - Command
  - State
  - Visitor
  - Strategy
  - Observer
  - Template method
  - Iterator
  - Mediator
  - Memento
