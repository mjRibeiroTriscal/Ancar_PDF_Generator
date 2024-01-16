# ANCAR (Refazer esse README)

<br/>

## Middleware

<br/>

### User Authentication

<br/>

<font color='#999' size=3>Create User (__HOSTNAME__/user/register)</font>

<br/>

**Method:** POST

<br/>

**Request Body:**
```json
{
    "name": "Mario Oliveira",
    "userName": "mjoribeiro",
    "email": "mjoribeiro@triscal.com.br",
    "password": "MJ_O_123@Triscal"
}
```

<br/>
<br/>

**Response Body:**

<br/>

<font color='#999' size=5>Create User - Success ( Created [201] )</font>

```json
{
    "message": "User successfully created",
    "user": {
        "name": "Mario Oliveira",
        "userName": "mjoribeiro",
        "email": "mjoribeiro@triscal.com.br",
        "isActive": true,
        "dataCadastro": "2023-01-19T14:56:41.871Z",
        "dataAtualizacao": "2023-01-19T14:56:41.871Z",
        "id": "63c95a295712bac11bc11ae1"
    }
}
```

<br/>
<br/>

<font color='#999' size=5>Create User - Error ( Conflict [409] )</font>

```json
{
    "statusCode": 409,
    "errorMessage": "An error occurred creating user",
    "error": "TR_JSON_ERROR: User already exists with this username"
}
```

<br/>
<br/>

<font color='#999' size=3>Update User (__HOSTNAME__/user/update)</font>

<br/>

**Method:** PUT

<br/>

**Request Body:**
```json
{
    "Id": "63c8840480579bd93c0025b2",
    "name": "Mario Ribeiro",
    "userName": "mjribeiro",
    "password": "MJ_123@Triscal",
    "isActive": true
}
```

<br/>
<br/>

**Response Body:**

<font color='#999' size=5>Update User - Success ( Created [201] )</font>

```json
{
    "message": "User successfully updated",
    "user": {
        "name": "Mario Ribeiro",
        "userName": "mjribeiro",
        "email": "mjribeiro@triscal.com.br",
        "dataCadastro": "2023-01-18T23:43:00.288Z",
        "dataAtualizacao": "2023-01-19T14:54:18.433Z",
        "isActive": true,
        "Id": "63c8840480579bd93c0025b2"
    }
}
```

<br/>
<br/>

<font color='#999' size=5>Update User - Error ( Conflict [409] )</font>

```json
{
    "statusCode": 409,
    "errorMessage": "An error occurred updating user",
    "error": "TR_JSON_ERROR: Invalid User Id"
}
```

<br/>
<br/>

<font color='#999' size=3>Delete User (__HOSTNAME__/user/delete?user_id=63c958cc5712bac11bc11ad6)</font>

<br/>

**Method:** DELETE

<br/>

**Response Body:**

<br/>

<font color='#999' size=5>Delete User - Success ( Accepted [202] )</font>

```json
{
    "message": "User successfully deleted",
    "info": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```

<br/>
<br/>

<font color='#999' size=5>Delete User - Error ( Bad Request [400] )</font>

```json
{
    "statusCode": 400,
    "errorMessage": "An error occurred deleting user",
    "error": "TR_ID_ERROR: Invalid User Id (User Rule)"
}
```

<br/>
<br/>

### Guests

<br/>


<font color='#999' size=3>Get Guest (__HOSTNAME__/getGuest?guest_id=63cea2a2e0fa4b97f3aea1db)</font>

<br/>

**Method:** GET

<br/>

**Response Body:**

<br/>

<font color='#999' size=5>Get Guest - Error ( Bad Request [400] )</font>

```json
{
    "statusCode": 400,
    "errorMessage": "An error occurred Getting Guest",
    "error": "CastError: Cast to ObjectId failed for value \"ABC\" (type string) at path \"_id\" for model \"GuestData\""
}
```

<br/>
<br/>

<font color='#999' size=5>Get Guest - Success ( OK [200] )</font>

```json
[
    {
        "skyfiiId": "String 16",
        "modified": 12345678910,
        "created": 12345678910,
        "name": "String 256",
        "firstName": "String 128",
        "lastName": "String 128",
        "gender": "String 10",
        "relationship": "String 50",
        "email": "String 512",
        "phone": "String 32",
        "facebookId": "String 128",
        "googleId": "String 128",
        "linkedinId": "String 128",
        "twitterId": "String 128",
        "externalId": "String 256",
        "dobMin": "String 10",
        "dobMax": "String 10",
        "address": "String 256",
        "suburb": "String 128",
        "district": "String 255",
        "state": "String 255",
        "postcode": "String 255",
        "country": "String 100",
        "venueId": 12345678910,
        "networkId": "String 20",
        "marketingLists": [
            {
                "id": 12345678910,
                "status": "String 255"
            }
        ],
        "nationalId": "String 20",
        "marketingOptIn": false,
        "termsAcceptanceVersion": 40,
        "termsAcceptanceDate": 12345678910,
        "operation": "String 20",
        "locale": "String 16",
        "facebookLink": "String 255",
        "venueName": "String 255",
        "verifiedEmail": true,
        "verifiedPhoneNumber": true,
        "devices": [
            {
                "deviceId": 12345678910,
                "clientMacAddress": "String 17",
                "brand": "String 255",
                "model": "String 255",
                "type": "String()",
                "os": "String 255",
                "userAgent": "String 4096",
                "lastActive": 12345678910
            }
        ],
        "custom": [
            {
                "key": "String 255",
                "value": [
                    "String 255"
                ]
            }
        ],
        "status": "String 255"
    }
]
```

<br/>
<br/>

<font color='#999' size=3>Get Guest Ids (__HOSTNAME__/getGuestIds?startDate=2023-01-23T00:00:00.000Z&endDate=2023-01-23T23:59:00.000Z)</font>

<br/>

**Method:** GET

<br/>

**Response Body:**

<br/>

<font color='#999' size=5>Get Guest Ids - Success ( OK [200] )</font>

```json
{
    "total": 2,
    "guests": [
        {
            "dataRecebimento": "2023-01-17T18:19:44.918Z",
            "id": "63c6e6c06f0acbec5c9b85d1"
        },
        {
            "dataRecebimento": "2023-01-17T18:21:34.533Z",
            "id": "63c6e72e39e812f2daa52c8e"
        }
    ]
}
```

<br/>

<font color='#999' size=5>Get Guest Ids - Error ( Bad Request [400] )</font>

```json
{
    "statusCode": 400,
    "errorMessage": "An error occurred Getting Guest Ids",
    "error": "TR_DATE_ERROR: \"Start Date\" can not be greater than \"End Date\" (Date Rule)"
}
```

<br/>

<font color='#999' size=3>Save Guests (__HOSTNAME__/createGuests)</font>

<br/>

**Method:** POST

<br/>

**Request Body:**
```json
[
    {
        "skyfiiId": "String 16",
        "modified": 12345678910,
        "created": 12345678910,
        "name": "String 256",
        "firstName": "String 128",
        "lastName": "String 128",
        "gender": "String 10",
        "relationship": "String 50",
        "email": "String 512",
        "phone": "String 32",
        "facebookId": "String 128",
        "googleId": "String 128",
        "linkedinId": "String 128",
        "twitterId": "String 128",
        "externalId": "String 256",
        "dobMin": "String 10",
        "dobMax": "String 10",
        "address": "String 256",
        "suburb": "String 128",
        "district": "String 255",
        "state": "String 255",
        "postcode": "String 255",
        "country": "String 100",
        "venueId": 12345678910,
        "networkId": "String 20",
        "marketingLists": [
            {
                "id": 12345678910,
                "status": "String 255"
            }
        ],
        "nationalId": "String 20",
        "marketingOptIn": false,
        "termsAcceptanceVersion": 40,
        "termsAcceptanceDate": 12345678910,
        "operation": "String 20",
        "locale": "String 16",
        "facebookLink": "String 255",
        "venueName": "String 255",
        "verifiedEmail": true,
        "verifiedPhoneNumber": true,
        "devices": [
            {
                "deviceId": 12345678910,
                "clientMacAddress": "String 17",
                "brand": "String 255",
                "model": "String 255",
                "type": "String()",
                "os": "String 255",
                "userAgent": "String 4096",
                "lastActive": 12345678910
            }
        ],
        "custom": [
            {
                "key": "String 255",
                "value": [
                    "String 255"
                ]
            }
        ],
        "status": "String 255"
    }
]
```

<br/>
<br/>

**Response Body:**

<br/>

<font color='#999' size=5>Save Guests - Success ( Created [201] )</font>

```json
{
    "objectData": "[{\"skyfiiId\":\"String 16\",\"modified\":12345678910,\"created\":12345678910,\"name\":\"String 256\",\"firstName\":\"String 128\",\"lastName\":\"String 128\",\"gender\":\"String 10\",\"relationship\":\"String 50\",\"email\":\"String 512\",\"phone\":\"String 32\",\"facebookId\":\"String 128\",\"googleId\":\"String 128\",\"linkedinId\":\"String 128\",\"twitterId\":\"String 128\",\"externalId\":\"String 256\",\"dobMin\":\"String 10\",\"dobMax\":\"String 10\",\"address\":\"String 256\",\"suburb\":\"String 128\",\"district\":\"String 255\",\"state\":\"String 255\",\"postcode\":\"String 255\",\"country\":\"String 100\",\"venueId\":12345678910,\"networkId\":\"String 20\",\"marketingLists\":[{\"id\":12345678910,\"status\":\"String 255\"}],\"nationalId\":\"String 20\",\"marketingOptIn\":false,\"termsAcceptanceVersion\":40,\"termsAcceptanceDate\":12345678910,\"operation\":\"String 20\",\"locale\":\"String 16\",\"facebookLink\":\"String 255\",\"venueName\":\"String 255\",\"verifiedEmail\":true,\"verifiedPhoneNumber\":true,\"devices\":[{\"deviceId\":12345678910,\"clientMacAddress\":\"String 17\",\"brand\":\"String 255\",\"model\":\"String 255\",\"type\":\"String()\",\"os\":\"String 255\",\"userAgent\":\"String 4096\",\"lastActive\":12345678910}],\"custom\":[{\"key\":\"String 255\",\"value\":[\"String 255\"]}],\"status\":\"String 255\"}]",
    "isDeletable": false,
    "dataRecebimento": "2023-01-19T15:03:28.789Z",
    "id": "63c95bc05712bac11bc11af0"
}
```

<br/>
<br/>

### Access

<br/>


<font color='#999' size=3>Get Access (__HOSTNAME__/getAccess?access_id=63cea324e0fa4b97f3aea1ef)</font>

<br/>

**Method:** GET

<br/>

**Response Body:**

<br/>

<font color='#999' size=3>Get Access Ids (__HOSTNAME__/getAccessIds?startDate=2023-01-23T00:00:00.000Z&endDate=2023-01-23T23:59:00.000Z)</font>

<br/>

**Method:** GET

<br/>

**Response Body:**

<br/>

<font color='#999' size=5>Get Access Ids - Error ( Bad Request [400] )</font>

```json
{
    "statusCode": 400,
    "errorMessage": "An error occurred Getting Access Ids",
    "error": "TR_DATE_ERROR: \"Start Date\" can not be greater than \"End Date\" (Date Rule)"
}
```

<br/>
<br/>

<font color='#999' size=3>Save Access (__HOSTNAME__/createAccess)</font>

<br/>

**Method:** POST

<br/>

**Request Body:**
```json
[
    {
        "timestamp": 12345678910,
        "duration": 12345678910,
        "deviceId": 12345678910,
        "skyfiiId": 12345678910,
        "venueId": 12345678910,
        "venueName": "String de 255 caracteres",
        "zones": [
            {
                "zoneId": 12345678910,
                "timestamp": 12345678910,
                "duration": 12345678910,
                "zoneName": "String de 255 caracteres"
            }
        ],
        "precincts": [
            {
                "smartzoneId": 12345678910,
                "timestamp": 12345678910,
                "duration": 12345678910,
                "smartzoneName": "String de 255 caracteres"
            }
        ],
        "spaces": [
            {
                "smartzoneId": 12345678910,
                "timestamp": 12345678910,
                "duration": 12345678910,
                "smartzoneName": "String de 255 caracteres"
            }
        ]
    }
]
```

<br/>
<br/>

**Response Body:**

<br/>

<font color='#999' size=5>Save Access - Success ( Created [201] )</font>

```json
{
    "objectData": "[{\"timestamp\":12345678910,\"duration\":12345678910,\"deviceId\":12345678910,\"skyfiiId\":12345678910,\"venueId\":12345678910,\"venueName\":\"String de 255 caracteres\",\"zones\":[{\"zoneId\":12345678910,\"timestamp\":12345678910,\"duration\":12345678910,\"zoneName\":\"String de 255 caracteres\"}],\"precincts\":[{\"smartzoneId\":12345678910,\"timestamp\":12345678910,\"duration\":12345678910,\"smartzoneName\":\"String de 255 caracteres\"}],\"spaces\":[{\"smartzoneId\":12345678910,\"timestamp\":12345678910,\"duration\":12345678910,\"smartzoneName\":\"String de 255 caracteres\"}]}]",
    "isDeletable": false,
    "dataRecebimento": "2023-01-23T17:39:07.097Z",
    "id": "63cec63be0fa4b97f3aea61b"
}
```

<br/>
<br/>

### GuestsData

<br/>

<font color='#999' size=3>Flag Records (__HOSTNAME__/flagRecords)</font>

<br/>

**Method:** PUT

<br/>

**Request Body:**
```json
[
	"63cecb6fe0fa4b97f3aea626",
	"63c95bda5712bac11bc11af2",
	"63c6a9dd1cdd3d8a76a1f942",
	"63c593e6ffcf8d4381454d26",
	"63c6ab2788d2cf1618a0e108",
	"63c5b67e88d3c0e5cea0bb39"
]
```

<br/>
<br/>

**Response Body:**

<br/>

<font color='#999' size=5>Flag Records - Success ( OK [200] )</font>

```json
{
    "acknowledged": true,
    "modifiedCount": 2,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 2,
    "guestData": [
        "63c95be35712bac11bc11af4",
        "63c95bda5712bac11bc11af2",
        "63c6a9dd1cdd3d8a76a1f942",
        "63c593e6ffcf8d4381454d26",
        "63c6ab2788d2cf1618a0e108",
        "63c5b67e88d3c0e5cea0bb39"
    ]
}
```

<br/>
<br/>

<font color='#999' size=5>Flag Records - Error ( Bad Request [400] )</font>

```json
{
    "statusCode": 400,
    "errorMessage": "An error occurred flagging records",
    "error": "TR_JSON_ERROR: Invalid or Null request Body"
}
```

<br/>
<br/>

### Schedule

<br/>

<font color='#999' size=3>GuestData Deletion Schedule (__HOSTNAME__/getScheduledDeletions?schedule_type=all)</font>

<br/>

**Method:** GET

<br/>

**Response Body:**

<br/>

<font color='#999' size=5>GuestData Deletion Schedule - Success ( OK [200] )</font>

```json
[
    {
        "jobId": "1674140844383_197713660",
        "scheduleType": "secondSchedule",
        "schedulePeriod": "0,10,20,30,40,50"
    }
]
```

<br/>
<br/>

<font color='#999' size=5>GuestData Deletion Schedule - Error ( Bad Request [400] )</font>

```json
{
    "statusCode": 400,
    "errorMessage": "An error occurred Scheduling GuestData deletion",
    "error": "TR_TYPE_ERROR: \"Schedule Type\" can not be \"second\" (Schedule Rule)"
}
```

<br/>
<br/>

<font color='#999' size=3>GuestData Deletion Schedule (__HOSTNAME__/deleteGuestDataSchedule?schedule_type=secondSchedule&schedule_period=0,10,20,30,40,50)</font>

<br/>

**Method:** PUT

<br/>

**Response Body:**

<br/>

<font color='#999' size=5>GuestData Deletion Schedule - Success ( OK [200] )</font>

```json
{
    "message": "GuestData deletion successfully schehduled",
    "jobId": "1674140844383_197713660"
}
```

<br/>
<br/>

<font color='#999' size=5>GuestData Deletion Schedule - Error ( Bad Request [400] )</font>

```json
{
    "statusCode": 400,
    "errorMessage": "An error occurred Scheduling GuestData deletion",
    "error": "TR_TYPE_ERROR: \"Schedule Type\" can not be \"second\" (Schedule Rule)"
}
```

<br/>
<br/>

<font color='#999' size=3>Cancel Scheduled Deletions (__HOSTNAME__/cancelScheduledDeletions?schedule_id=1674172496851_135544877)</font>

<br/>

**Method:** PUT

<br/>

**Response Body:**

<br/>

<font color='#999' size=5>Cancel Scheduled Deletions - Success ( OK [200] )</font>

```json
{
    "message": "GuestData schehdule was successfully canceled"
}
```

