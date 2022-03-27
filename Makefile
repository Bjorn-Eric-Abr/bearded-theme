VERSION=$(shell node -pe "require('./package.json')['version']")

version:
	@echo "Current version ${VERSION}"
install: build build-ext
	code --install-extension beardedtheme-${VERSION}.vsix --force
build:
	yarn build
build-ext:
	yarn build:ext
copy:
	cp themes/*.json ~/.vscode/extensions/beardedbear.beardedtheme-${VERSION}/themes
