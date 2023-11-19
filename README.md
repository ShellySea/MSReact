# Namaste React!

# React is fast because it is mounted in 2 phases: 1. Render phase 2. Commit phase. In render phase, constructor and render is called and then commit phase starts where dom manipulation happens then componentDidmount method is called.

# Dom manipulation is the most expensive thing when we update the dom. It takes lot of time.

# When the react is rendering in the Render phase, react is basically triggering the recoincilliation and in this recoincilliation, it finds out the diff between the virtual DOM. Everything in render phase is happening inside the virtual DOM. Virtual DOM is fast because it deals with object and its just JS.

# When react finds the diff, when it tries to update the DOM, it says let me find out all the childrens batch the render phase because render phase is very fast whereas commit phase takes time. It batches the render phase, all the child components are rendered then the commit happens

# React lifecycle method diag: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# Parcel

- Dev Build
- HMR
- Local Server
- File watching algorithm
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling
- Diagnositic
- Error Handling
- Https
- tree Shaking
- Different dev and prod bundles
