# ossrep-public-ng

```shell
podman build -t quay.io/ossrep/ossrep-public-ng:1.0.0 .
```

```shell
podman run -d --rm \
  --name ossrep-public-ng \
  -p 8080:8080 \
  quay.io/ossrep/ossrep-public-ng:1.0.0
```

## Local Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

`npm outdated`
`npm update`
`npm test`
