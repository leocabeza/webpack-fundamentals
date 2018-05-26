class ExamplePlugin {
  apply(compiler) {
    compiler.plugin('run', (compiler, callback) => {
      console.log('webpack is running');
      callback();
    });
  }
}

module.exports = ExamplePlugin;
