
var importComponentSpec = ((name, path) => {
  describe(name, () => {
    require(path);
  })
})

describe('Test suite', () => {

  before(function() {
    console.log('Init preparing for test suites.');
  });

  importComponentSpec('Running Category Component...', './actions.category.spec.js')
  importComponentSpec('Running User Component...', './actions.user.spec.js')
  importComponentSpec('Running Getters Component...', './actions.getters.spec.js')
  importComponentSpec('Running Ad Component...', './actions.ad.spec.js')

  after(function() {
    console.log('Flush after completion.');
    process.exit()
  });

})
