ifneq (,$(wildcard backend/.env))
    include backend/.env
    export
endif

.PHONY: fe build-fe

# nextjs commands

fe:
	cd frontend && npm run dev

build-fe:
	cd frontend && npm run build