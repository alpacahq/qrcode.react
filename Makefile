SRC_DEPS = src/index.tsx src/third-party/qrcodegen/index.ts
CFG_DEPS = package.json tsup.config.ts

all: lib/index.js lib/index.d.ts lib/index.js 

lib:
	mkdir -p lib

lib/index.d.ts: lib $(SRC_DEPS) $(CFG_DEPS)
	npm run build:code

lib/esm/index.js: lib $(SRC_DEPS) $(CFG_DEPS)
	npm run build:code

lib/index.js: lib $(SRC_DEPS) $(CFG_DEPS)
	npm run build:code

clean:
	rm -rf lib 
