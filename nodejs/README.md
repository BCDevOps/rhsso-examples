
## About

This is a sample app for testing SSO. It uses oAuth2 for authenticaiton then
requires that you set the the standard HTTP Authorization header to the bearer
token.

## Usage

1. Run

Make sure you have an `.env` file in your project root with the following environment
variables in it:

```console
NODE_ENV=development

# Local
SSO_CLIENT_SECRET="xxxxxxxxxx"
SESSION_SECRET="xxxxxxxxx"
#APP_URL="http://10.0.1.12:8000"
```

Next, start the server in development mode with the command

```console
npm run dev
```

At this point you can test the unsecure health check endpoint with and get a
return code of 200.

```console
curl -v -X GET http://localhost:8000/ehlo
```

2. Authenticate
 
Use browser, perferably using an private or incognito tab/window, and go to
this url `localhost:8000/v1/auth/login` to trigger the authentication process.

Once completed nothing will happen in the broweser. In the debug output you should
see your JWT printed.

3. Test a Secure Endpoint

Confirm that you can *not* access secure endpoints:

```console
curl -v -X GET -H "Authorization: Bearer $TOKEN" http://localhost:8000/hello.html
```

Copy your JWT and export it as an environment variable:

```console
export TOKEN="YOUR_JWT_HERE?
```

Now you can try to access secure endpoints:

```console
curl -v -X GET -H "Authorization: Bearer $TOKEN" http://localhost:8000/hello.html
```

This should work.

## Getting Help or Reporting an Issue

Send a note to bcdevexchange@gov.bc.ca and you'll get routed to the right person to help you out.


## How to Contribute

*If you are including a Code of Conduct, make sure that you have a [CODE_OF_CONDUCT.md](SAMPLE-CODE_OF_CONDUCT.md) file, and include the following text in here in the README:*
"Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms."

## License

Detailed guidance around licenses is available 
[here](/BC-Open-Source-Development-Employee-Guide/Licenses.md)

Attach the appropriate LICENSE file directly into your repository before you do anything else!

The default license For code repositories is: Apache 2.0

Here is the boiler-plate you should put into the comments header of every source code file as well as the bottom of your README.md:

    Copyright 2015 Province of British Columbia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at 

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
   
For repos that are made up of docs, wikis and non-code stuff it's Creative Commons Attribution 4.0 International, and should look like this at the bottom of your README.md:

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">YOUR REPO NAME HERE</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">the Province of Britich Columbia</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

and the code for the cc 4.0 footer looks like this:

    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence"
    style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br /><span
    xmlns:dct="http://purl.org/dc/terms/" property="dct:title">YOUR REPO NAME HERE</span> by <span
    xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">the Province of Britich Columbia
    </span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
    Creative Commons Attribution 4.0 International License</a>.
