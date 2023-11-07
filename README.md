# rtm-typescript

_WARNING: THIS PACKAGE IS NOT READY FOR CONSUMPTION YET. USE AT YOUR OWN RISK_

## Install

```
npm install rtm-typescript
```

## Features

This package currently only supports a few of the RTM API methods. Please come
back later.

### API Request Throttling

To avoid hitting the RTM Api [rate limit](https://www.rememberthemilk.com/services/api/ratelimit.rtm), this client will throttle requests to once per second. If you wish to disable this behaviour, set `throttle` to `true` in the configuration object.

## Usage

```TypeScript
const runMyCode = async () => {
  const key = "my-api-key";
  const secret = "my-shared-secret";

  const client = initialiseApi({
    key,
    secret,
    permissions: ClientPermissions.Read,
  });

  const result = await client.tasks.getList();

  console.log(result);
};

```

For more information, check out the [API Documentation](./docs/README.md)
