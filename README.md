# Design patterns

Design pattern is typical solutions for common problems. Below are the types of patterns with examples in typescript.
## Creational patterns are responsible for creating new objects:
### Factory method
Factory method is pattern that provides interface for creating object in superclass, but allows subclass change type of object will be created. 

*Important*: created objects must have a common interface.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/creational_patterns/factory_method) expansion of delivery methods: use not only motor transport, but also sea vessels. For the client, with the factory method, there is no difference between these objects, since it will treat them as an abstract Transport. It will be important for him that the object has a deliver method, but how exactly it works is not important.

### Abstract factory

Abstract factory is a creational design pattern that allows you to create families of related objects without specifying their concrete classes.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/creational_patterns/abstract_factory) furniture factory simulation. You need to be able to create different products, for example table and chair, which can belong to different families: kitchen and office furniture.

That is, we get: 
- kitchen and office chair
- kitchen and office table

To do this, we can separate the common code into an abstract factory class that returns the product of the common interface. Then, in a class that inherits this abstract class and implements the creation of a concrete product, return this concrete product in product creation method. *Important*: thing here is that the products returned to client must implement a common interface.

### Prototype
Prototype is creational pattern is used when it is necessary to clone a class object without delving into the implementation of this class. It is used when you have object that needs to be copied.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/creational_patterns/prototype) creation of geometric shapes. Here prototype allows to produce exact copies of geometric shape objects without being tied to their classes.

### Builder
Builder is pattern that allows you to build complex objects step by step. It solves the problem when you need to create objects with a large number of configurations.

You can go further and separate calls to builder methods into a separate class called director. In this case, the director will set order of construction steps, and builder will carry them out.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/creational_patterns/builder) creation of an apartment building and its layout for buyers.

*Important*: Unlike other creational patterns where products must follow common interface builders can create different products. Therefore, it is impossible to include method for obtaining final product in builder interface

### Singleton
Singleton is a design pattern that ensures that a class has only one instance. A global access point will be provided to this instance. Example of use is connecting to a database. Singleton is guaranteed to create only one instance of class responsible for connecting to it. This way we will prevent unnecessary connections. 

[Example implementation](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/creational_patterns/singleton)

## Structure patterns are responsible for creating class hierarchies:
### Adapter
Adapter is a design pattern that allows objects with incompatible interfaces to work together.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/structure_patterns/adapter) application works by retrieving data in JSON format. Then there is a requirement to send it to a third-party service. The third-party service only accepts in XML, but we do not have the ability to change the format of the extracted data on our side.

*Important*: used after the fact to force incompatible classes to work together, unlike a bridge that is designed in advance.

### Bridge
This is a pattern that suggests dividing class into separate parts: abstraction and implementation.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/structure_patterns/bridge) class of geometric shapes: rectangle and triangle, there is need to expand hierarchy of shapes by color. If you use inheritance, then when you add new types of shapes or colors, the number of classes will grow significantly. To do this, it is proposed to replace inheritance with aggregation or composition, that is, in this example, the shape will contain a reference to the color.

In this example, the abstraction will be a shape class - abstraction delegates work to a related object. Realization is  color of the figures. With this approach, implementations can be interchanged, provided that all implementations have common interface.

### Composite
Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were single objects. Composite proposes to view the single product and composite object through a single interface with a common costing method. For a product, it’d simply return the product’s price. For a composite object, it’d go over each item composite object contains, ask its price and then return total for this composite object.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/structure_patterns/composite) you need to calculate cost of the backpack and its contents. Inside backpack there can be both single objects and composite products, for example, pencil cases with school supplies. Inside the pencil cases there can be both composite objects and single products, for example, a pencil, an eraser. Task: calculate the cost of a backpack.

### Facade
This pattern provides a simple interface to a complex system containing many classes.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/structure_patterns/facade) creating an order in an online store. To do this, the buyer is provided with a simple interface to the system of payment, packaging, and delivery of goods.

### Decorator
[Example:]()
### Proxy
[Example:]()

## Behavioral patterns are responsible for creating effective interaction:
### Chain of responsibility
[Example:]()
### Command
[Example:]()
### State
State is a behavioral design pattern that allows objects to change behavior depending on their state. The idea is that an object can be in one of several states, which change each other all the time. The set of these states is predetermined and finite.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/behavioral_patterns/state) working with a document and translating it into various modes:
- draft
- moderation
- published

Each mode or state can switch state within the context. The context is that the link to the state, in this example the context is the document.

### Visitor
Visitor is design pattern, which allows you to add new operations to the program, without changing the classes of objects over which these operations can be performed. It helps to solve problem when you need to perform some operations unrelated, but you do not want to “clog” classes with such operations.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/behavioral_patterns/visitor) there are services to track USD and EUR currency exchange rate. At some point, we need to add logic of data export on tracking exchange rate in JSON format. To do this, we can create class of `Visitor` can perform described logic. Specific elements (in this case, these are trackers of exchange rate) should implement method of accepting the visitor. In future, if we need to change data export format on XML, we will only need to add new class of visitor, but classes of currency trees will not need to be touched, since they are not attached to a specific visitor. 

*Important*: The benefit of using this pattern will be especially manifested when new operations are often added, and new elements are not added.

### Strategy
[Example:]()
### Observer
An observer is a pattern that allows objects to monitor events occurring in other objects. Observer pattern suggests storing list of references to subscriber objects inside publisher object, without publisher having to maintain subscription list itself. It will provide methods by which subscribers can add or remove themselves from the list.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/behavioral_patterns/subscriber) subscription to changes in data store. Data store stores a link to event manager, and does not implement the logic of the subscription mechanism and notification of observers, so as not to confuse the logic of working with data and working with subscribers. When inserting or deleting, the event manager notifies observers. Observers are stored as an array of objects that implement the observer interface.

### Template method
Template Method is a behavioral design pattern that defines skeleton of algorithm in parrent class but lets children classes override specific steps of algorithm without changing its structure. Steps of algorithm can be either abstract or contain implementation. Сoncrete class overrides some (or all) steps of algorithm. Сoncrete class does not override template method.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/behavioral_patterns/template_method) working with files of different formats. There are common steps, such as opening a file and closing it, and there are steps whose implementation varies depending on the file type.
### Iterator
[Example:]()
### Mediator
[Example:]()
### Memento
Memento is a behavioral design pattern that lets you save and restore the previous state of an object.

[Example:](https://github.com/PashakArt/typescript-oop-patterns/tree/main/src/behavioral_patterns/memento)
