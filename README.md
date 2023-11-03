# rtm-typescript

*WARNING: THIS PACKAGE IS NOT READY FOR CONSUMPTION YET. USE AT YOUR OWN RISK*

## Install

```
npm install rtm-typescript
```

## Features

This package currently only supports a few of the RTM API methods. Please come
bacxk later


## Usage

```TypeScript
import { RememberTheMilkApi, ClientPermissions } from "rtm-typescript"


const runMyCode = async () => {
    const key = "my-api-key"
    const secret = "my-shared-secret"

    const client = new RememberTheMilkApi(key, secret, ClientPermissions.Read)

    const result = await client.tasks.getList()

    console.log(result);
}
```

