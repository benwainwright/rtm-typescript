# rtm-typescript

_WARNING: THIS PACKAGE IS NOT READY FOR CONSUMPTION YET. USE AT YOUR OWN RISK_

## Install

```
npm install rtm-typescript
```

## Features

This package currently only supports a few of the RTM API methods. Please come
back later.

## Usage

```TypeScript
import { initialiseApi, ClientPermissions } from "rtm-typescript"


const runMyCode = async () => {
    const key = "my-api-key"
    const secret = "my-shared-secret"

    const client = initialiseApi(key, secret, ClientPermissions.Read)

    const result = await client.tasks.getList()

    console.log(result);
}
```

For more information, check out the [API Documentation](./docs/README.md)
