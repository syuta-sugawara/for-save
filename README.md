# Mediplus 

There are steps you need to do to run.

1, install CocoaPod
See this.


https://guides.cocoapods.org/using/getting-started.html

2,Press 'pod install' in ios directory.

3,Resister your email to firebase at Authentication.


https://console.firebase.google.com/project/mediplus-6783a/authentication/users

4,npm install

5,react-native run-ios



## Points to notice

1, You need to check if the application run on your PC correctly, which means you need have same enviroment with team for developing.
If you add your codes without doing this, this code does not work in other people's PC
Don't ignore this point.

2,you could get this error.

Print: Entry, ":CFBundleIdentifier", Does Not 

in that case, type these command in terminal at the project directory.

・rm -rf ~/.rncache

・rm -rf node_modules

・yarn or npm install

https://github.com/facebook/react-native/issues/14423


## If there is something wrong, see these.

https://rnfirebase.io/


https://firebase.google.com/docs/ios/setup?authuser=0
