Instructions to create Android keystore.  This is really basic to get things moving.


useAlias = any name you like.  This is used in the build.json so remember it.
locationofkeystore = any folder you like. The string must include the name of the keystorefile and extension

Command Prompt or Powershell to any java version folder containing keytool.exe

C:\Program Files (x86)\Java\jdk1.7.0_55\bin

keytool -genkey -v -keystore locationofkeystore -alias useAlias -keyalg RSA -keysize 2048 -validity 10000

Working example:
keytool -genkey -v -keystore D:\Code\TypeScript-Cordova-SystemJS-Angular2-beta\keystore\myrelease-key.keystore -alias deanbiele -keyalg RSA -keysize 2048 -validity 10000

Verify the APK is signed:
C:\Program Files (x86)\Java\jdk1.7.0_55\bin
jarsigner -verify -verbose -certs my_application.apk

