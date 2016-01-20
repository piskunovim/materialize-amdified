all: install_dependencies build_materialize

clean:
	rm -rf lib

install_requirejs:
	npm install -g requirejs

install_dependencies:
	bower install

build_materialize: install_dependencies install_requirejs
	r.js -o src/build.r.js
