// Generated by CoffeeScript 1.10.0
(function() {
  var expect, fs, path, tester;

  fs = require('fs');

  path = require('path');

  path = require('path');

  expect = require('chai').expect;

  tester = require('gitbook-tester');

  describe('SVG Inline Gitbook plugin', function() {
    this.timeout(5000);
    it('should load and generate basic content', function(done) {
      return tester.builder().withLocalPlugin(path.join(__dirname, '..')).withContent('Hello World!').create().then(function(result) {
        var error;
        try {
          expect(result[0].content).to.equal('<p>Hello World!</p>');
          return done();
        } catch (error) {
          done = error;
        }
      });
    });
    it('should process external content and compare it against the output', function(done) {
      var input, output;
      input = fs.readFileSync(path.join(__dirname, 'input.md'), 'utf-8').trim();
      output = fs.readFileSync(path.join(__dirname, 'output.html'), 'utf-8').trim();
      return tester.builder().withLocalPlugin(path.join(__dirname, '..')).withContent(input).create().then(function(result) {
        var error;
        try {
          expect(result[0].content).to.equal(output);
          return done();
        } catch (error) {
          done = error;
        }
      });
    });
    return it('should process external content with svgs and compare it against the expected output', function(done) {
      var input, output, svg;
      input = fs.readFileSync(path.join(__dirname, 'input_with_svg.md'), 'utf-8').trim();
      svg = fs.readFileSync(path.join(__dirname, 'simple.svg'), 'utf-8').trim();
      output = fs.readFileSync(path.join(__dirname, 'output_with_svg.html'), 'utf-8').trim();
      return tester.builder().withLocalPlugin(path.join(__dirname, '..')).withContent(input).withFile('simple.svg', svg).create().then(function(result) {
        var content, e, error;
        try {
          content = result[0].content;
          expect(content).to.equal(output);
          return done();
        } catch (error) {
          e = error;
          return done(e);
        }
      });
    });
  });

}).call(this);

//# sourceMappingURL=feature.js.map
