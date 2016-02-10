# Instructions to create Android keystore.  # 
This is really basic to get things moving.


Command Prompt or Powershell to any java version folder containing keytool.exe

C:\Program Files (x86)\Java\jdk1.7.0_55\bin


    keytool -genkey -v -keystore locationofkeystore -alias useAlias -keyalg RSA -keysize 2048 -validity 10000

**useAlias** = any name you like.  This is used in the build.json so remember it.
**locationofkeystore** = any folder you like. The string must include the name of the keystorefile and extension

Working example:

    keytool -genkey -v -keystore D:\Code\TypeScript-Cordova-SystemJS-Angular2-beta\keystore\myrelease-key.keystore -alias deanbiele -keyalg RSA -keysize 2048 -validity 10000

Verify the APK is signed:
C:\Program Files (x86)\Java\jdk1.7.0_55\bin
jarsigner -verify -verbose -certs my_application.apk

## How does Cordova use the KeyStore ##

The keystore location is saved in the `build.json` file located in the root folder.

You can update the `keystore` folder location as necessary by editing the `build.json`.

    {
      "android": {
        "release": {
          "keystore": "keystore\\myrelease-key.keystore",
          "storePassword": "",
          "alias": "",
          "password": "",
          "keystoreType": ""
        }
      },
      "windows": {
        "release": {
          "packageCertificateKeyFile": "res\\native\\windows\\CordovaApp.pfx",
          "packageThumbprint": "ABCABCABCABC123123123123",
          "publisherID": "CN=FakeCorp.com, L=Lowell, S=Massachusetts, C=US"
        }
      }
    }