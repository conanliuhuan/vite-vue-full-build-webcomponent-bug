<template>
	My custom component can NOT display:
	<my-component />
</template>

<script>
class MyComponent extends HTMLElement {
	constructor() {
		super();

		var container = document.createElement('div');
		container.classList.add('container');

		var name = document.createElement('p');
		name.classList.add('name');
		name.innerText = 'Custom component';

		container.append(name);
		this.append(container);
	}
}
window.customElements.define('my-component', MyComponent);
</script>