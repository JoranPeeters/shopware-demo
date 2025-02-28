import ExamplePlugin from './example-plugin/example-plugin.plugin';
import CustomAddToCartPlugin from './example-plugin/example-plugin.plugin';

const PluginManager = window.PluginManager;

PluginManager.register('ExamplePlugin', ExamplePlugin, '[data-example-plugin]');
PluginManager.override('AddToCart', CustomAddToCartPlugin, '[data-add-to-cart]');