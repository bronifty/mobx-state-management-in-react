# Mobx State Management in React

<img src='mobx.png' />

<a href="https://dev.to/bronifty/mobx-state-management-in-react-j3c">Blog Post</a>

<a href="https://www.youtube.com/watch?v=rPYVc-2GDto">Youtube Video</a>

- MobX (v6) State Management in React (v18) using clean / onion architecture for streaming data extract transform and load with 2-way data bindings and 1-way data-flow (base layer => aggregate view => component UI)

- Using clean / onion code architecture to extract, transform and load data in a base layer (data model - aka repository), then to broadcast changes to a view model, which is like an aggregate layer (to flatten for presentation). This view model layer then broadcasts to the UI layer, where it is presented in components (React). Streaming changes with pubsub pattern.
